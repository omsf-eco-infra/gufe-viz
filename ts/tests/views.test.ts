/**
 * What each view actually puts on the page, and how they behave when
 * the data is present-but-unusable — schema-valid, render-degraded (PLAN Phase 2
 * PR 2.4, last row: "truncated/garbage SDF → error panel, no crash").
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { parseCounts, parseSDF } from "../src/shared/sdf.js";
import { parsePdbStats } from "../src/shared/pdb.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";
import type { LigandNetworkPayload } from "../src/schema/types.js";

function mount<T extends HTMLElement>(tag: string, payload: unknown): T {
  const node = document.createElement(tag) as T & { payload: unknown };
  document.body.appendChild(node);
  node.payload = payload;
  return node;
}

describe("<gufe-small-molecule>", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("shows name, SMILES, charge and the atom/bond counts", async () => {
    const payload = readExample("small_molecule.json");
    const node = mount("gufe-small-molecule", payload);
    await flush();

    const text = node.textContent ?? "";
    expect(text).toContain(payload.name as string);
    expect(text).toContain((payload.data as { smiles: string }).smiles);
    expect(text).toContain("SmallMoleculeComponent");

    const counts = parseCounts((payload.data as { sdf: string }).sdf)!;
    expect(text).toContain(String(counts.atoms));
    expect(text).toContain(String(counts.bonds));
  });

  it("draws the 2D depiction and the 3D conformer", async () => {
    mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();

    expect(engines.depicted, "RDKit was never asked for a depiction").toHaveLength(1);
    expect(engines.viewers, "3Dmol was never asked for a viewer").toHaveLength(1);
    expect(engines.viewers[0].calls.join(" ")).toContain("addModel");
  });

  it("says so, rather than crashing, when the SDF is empty", async () => {
    const node = mount("gufe-small-molecule", {
      schema_version: "1.0",
      kind: "SmallMoleculeComponent",
      name: "empty",
      data: { sdf: "   " },
    });
    await flush();

    expect(node.textContent).toContain("No molecule provided");
    expect(engines.viewers).toHaveLength(0);
  });
});

describe("<gufe-protein>", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("reports chain / residue / atom counts from the PDB", async () => {
    const payload = readExample("protein_fragment.json");
    const node = mount("gufe-protein", payload);
    await flush();

    const stats = parsePdbStats((payload.data as { pdb: string }).pdb);
    expect(stats.atoms).toBeGreaterThan(0);
    expect(node.textContent).toContain(`${stats.chains} chains`);
    expect(node.textContent).toContain(payload.name as string);
  });

  it("offers every representation and colour scheme", async () => {
    const node = mount("gufe-protein", readExample("protein_fragment.json"));
    await flush();

    const labels = [...node.querySelectorAll("button")].map((b) => b.textContent);
    expect(labels).toEqual(expect.arrayContaining(["Cartoon", "Surface", "Stick", "Sphere"]));

    const options = [...node.querySelectorAll("option")].map((o) => (o as HTMLOptionElement).value);
    expect(options).toEqual(["chain", "spectrum", "ss", "element"]);
  });

  it("says so, rather than crashing, when the PDB is empty", async () => {
    const node = mount("gufe-protein", {
      schema_version: "1.0",
      kind: "ProteinComponent",
      name: "empty",
      data: { pdb: "" },
    });
    await flush();

    expect(node.textContent).toContain("No protein data");
    expect(engines.viewers).toHaveLength(0);
  });
});

describe("<gufe-ligand-network>", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  const network = () => readExample("ligand_network.json") as unknown as LigandNetworkPayload;

  it("draws a node per ligand and a line per mapping", async () => {
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    expect(node.querySelectorAll("svg circle")).toHaveLength(payload.data.nodes.length);
    // One visible line, one halo and one hit target per edge.
    expect(node.querySelectorAll("svg line")).toHaveLength(payload.data.edges.length * 3);
    expect(node.textContent).toContain(`${payload.data.nodes.length}`);
    expect(node.textContent).toContain("LigandNetwork");
  });

  it("runs the force layout, and depicts every ligand", async () => {
    const payload = network();
    mount("gufe-ligand-network", payload);
    await flush();

    expect(engines.simulations, "d3's force simulation was never configured").toBe(1);
    // Every ligand in the graph, plus the two endpoints of the selected edge in
    // the detail pane.
    expect(engines.depicted.length).toBeGreaterThanOrEqual(payload.data.nodes.length);
  });

  it("labels unnamed ligands from their gufe key, and named ones by name", async () => {
    // gufe's own GraphML fixture has three unnamed molecules; the named variant
    // is the same network with names. Both must be legible.
    const unnamed = mount("gufe-ligand-network", network());
    await flush();
    const key = network().data.nodes[0].id.split("-").pop()!.slice(0, 6);
    expect(unnamed.textContent).toContain(key);

    const named = mount("gufe-ligand-network", readExample("ligand_network_named.json"));
    await flush();
    expect(named.textContent).toContain("CCO");
  });

  it("selects the first mapping and reports it", async () => {
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    const edge = payload.data.edges[0];
    const text = node.textContent ?? "";
    expect(text).toContain("score");
    expect(text).toContain(edge.score!.toFixed(3));
    expect(text).toContain("mapped atoms");
    expect(text).toContain(String(Object.keys(edge.componentA_to_componentB!).length));
  });

  it("switches the selection when another mapping is clicked", async () => {
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    // The hit targets are the transparent wide lines, in edge order.
    const hits = [...node.querySelectorAll("line")].filter((l) => l.getAttribute("stroke") === "transparent");
    expect(hits).toHaveLength(payload.data.edges.length);

    const last = payload.data.edges[payload.data.edges.length - 1];
    hits[hits.length - 1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    expect(node.textContent).toContain(last.score!.toFixed(3));
  });

  it("drops an edge that names a ligand the network does not contain, and says so", async () => {
    const payload = network();
    payload.data.edges = [{ source: "nope", target: "also-nope", score: 0.5 }];
    const node = mount("gufe-ligand-network", payload);
    await flush();

    expect(node.textContent).toContain("does not contain");
    expect(node.querySelectorAll("svg line")).toHaveLength(0);
    expect(node.querySelectorAll("svg circle")).toHaveLength(payload.data.nodes.length);
  });

  it("falls back to the circular layout when d3 cannot be loaded", async () => {
    clearFakeEngines();
    seedFakeEngines({ brokenD3: true });

    const node = mount("gufe-ligand-network", network());
    await flush();

    expect(node.textContent).toContain("d3 could not be loaded");
    expect((node.querySelector("select") as HTMLSelectElement).value).toBe("Circular");
    // The point of the fallback: there is still a graph on the page.
    expect(node.querySelectorAll("svg circle").length).toBeGreaterThan(0);
  });

  it("says so, rather than crashing, when the network is empty", async () => {
    const node = mount("gufe-ligand-network", {
      schema_version: "1.0",
      kind: "LigandNetwork",
      name: "empty",
      data: { nodes: [], edges: [] },
    });
    await flush();

    expect(node.textContent).toContain("no ligands");
    expect(engines.simulations).toBe(0);
  });
});

describe("SDF parsing degrades rather than throwing garbage", () => {
  it("names the problem for a truncated record", () => {
    expect(() => parseSDF("only\ntwo lines")).toThrow(/too short/);
  });

  it("refuses V3000 explicitly", () => {
    const v3000 = ["name", "  x", "", "  0  0  0     0  0            999 V3000"].join("\n");
    expect(() => parseSDF(v3000)).toThrow(/V3000/);
  });

  it("returns null counts rather than NaN for a non-SDF", () => {
    expect(parseCounts("not an sdf at all")).toBeNull();
  });

  it("round-trips every example molecule", () => {
    for (const name of ["small_molecule.json", "small_molecule_charged.json"]) {
      const payload = readExample(name);
      const sdf = (payload.data as { sdf: string }).sdf;
      const mol = parseSDF(sdf);
      const counts = parseCounts(sdf)!;
      expect(mol.symbols, name).toHaveLength(counts.atoms);
      expect(mol.bonds, name).toHaveLength(counts.bonds);
      expect(mol.name, name).toBe(payload.name);
    }
  });
});
