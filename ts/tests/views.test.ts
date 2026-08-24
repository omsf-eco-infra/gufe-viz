/**
 * What each view actually puts on the page, and how they behave when
 * the data is present-but-unusable: schema-valid but not renderable, such as a
 * truncated SDF, which must produce an error panel rather than a crash.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { parseCounts, parseSDF } from "../src/shared/sdf.js";
import { parsePdbStats } from "../src/shared/pdb.js";
import { formatIssues, validatePayload } from "../src/schema/validate.js";
import { buildRegistry } from "../src/schema/registry.js";
import { mappingPayloadFor } from "../src/views/ligand-network.js";
import { parseConcentration } from "../src/views/solvent.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";
import type { LigandNetworkViz } from "../src/schema/types.js";

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
    expect(text).toContain((payload as { smiles: string }).smiles);
    expect(text).toContain("SmallMoleculeComponent");

    const counts = parseCounts((payload as { sdf: string }).sdf)!;
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
      type: "SmallMoleculeComponentViz",
      name: "empty",
      sdf: "   ",
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

    const stats = parsePdbStats((payload as { pdb: string }).pdb);
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
      type: "ProteinComponentViz",
      name: "empty",
      pdb: "",
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

  const network = () => readExample("ligand_network.json") as unknown as LigandNetworkViz;

  it("draws a node per ligand and a line per mapping", async () => {
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    expect(node.querySelectorAll("svg circle")).toHaveLength(payload.nodes.length);
    // One visible line, one halo and one hit target per edge.
    expect(node.querySelectorAll("svg line")).toHaveLength(payload.edges.length * 3);
    expect(node.textContent).toContain(`${payload.nodes.length}`);
    expect(node.textContent).toContain("LigandNetwork");
  });

  it("runs the force layout, and depicts every ligand", async () => {
    const payload = network();
    mount("gufe-ligand-network", payload);
    await flush();

    expect(engines.simulations, "d3's force simulation was never configured").toBe(1);
    // Every ligand in the graph, plus the two endpoints of the selected edge in
    // the detail pane.
    expect(engines.depicted.length).toBeGreaterThanOrEqual(payload.nodes.length);
  });

  it("labels unnamed ligands from their gufe key, and named ones by name", async () => {
    // gufe's own GraphML fixture has three unnamed molecules; the named variant
    // is the same network with names. Both must be legible.
    const unnamed = mount("gufe-ligand-network", network());
    await flush();
    const key = network().nodes[0].split("-").pop()!.slice(0, 6);
    expect(unnamed.textContent).toContain(key);

    const named = mount("gufe-ligand-network", readExample("ligand_network_named.json"));
    await flush();
    expect(named.textContent).toContain("CCO");
  });

  it("selects the first mapping and reports it", async () => {
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    const edge = payload.edges[0];
    const text = node.textContent ?? "";
    expect(text).toContain("score");
    expect(text).toContain(edge.score!.toFixed(3));
    expect(text).toContain("mapped atoms");
    expect(text).toContain(String(edge.componentA_to_componentB.length));
  });

  it("switches the selection when another mapping is clicked", async () => {
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    // The hit targets are the transparent wide lines, in edge order.
    const hits = [...node.querySelectorAll("line")].filter((l) => l.getAttribute("stroke") === "transparent");
    expect(hits).toHaveLength(payload.edges.length);

    const last = payload.edges[payload.edges.length - 1];
    hits[hits.length - 1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    expect(node.textContent).toContain(last.score!.toFixed(3));
  });

  it("drops an edge that names a ligand the network does not contain, and says so", async () => {
    const payload = network();
    payload.edges = [
      {
        type: "LigandAtomMappingViz",
        "gufe-key": "LigandAtomMapping-dangling",
        name: "",
        componentA: "nope",
        componentB: "also-nope",
        score: 0.5,
        componentA_to_componentB: [],
        annotations: {},
      },
    ];
    const node = mount("gufe-ligand-network", payload);
    await flush();

    expect(node.textContent).toContain("does not contain");
    expect(node.querySelectorAll("svg line")).toHaveLength(0);
    expect(node.querySelectorAll("svg circle")).toHaveLength(payload.nodes.length);
  });

  it("drops a node whose gufe key is not in the registry, and says so", async () => {
    // The other half of the referential integrity JSON Schema cannot express:
    // a node key that resolves to nothing. The network still draws.
    const payload = network();
    payload.nodes = [...payload.nodes, "SmallMoleculeComponent-not-in-the-registry"];
    const node = mount("gufe-ligand-network", payload);
    await flush();

    expect(node.textContent).toContain("not in its registry");
    expect(node.querySelectorAll("svg circle")).toHaveLength(payload.nodes.length - 1);
  });

  it("hands an edge on as a payload that validates on its own", () => {
    // The claim the single LigandAtomMappingViz makes: what the network view
    // gives `<gufe-atom-mapping>` is exactly what that element receives when a
    // mapping is dropped on the page by itself. No renaming, no inlining, no
    // second shape - only a registry of the two ligands the edge names.
    const payload = network();
    const registry = buildRegistry(payload);

    for (const edge of payload.edges) {
      const standalone = mappingPayloadFor(edge, registry)!;
      const { valid, issues } = validatePayload(standalone);
      expect(valid, formatIssues(issues)).toBe(true);
      expect(standalone.registry).toHaveLength(2);
      expect(standalone.componentA_to_componentB).toEqual(edge.componentA_to_componentB);
    }
  });

  it("refuses to cut loose an edge whose endpoints do not resolve", () => {
    const payload = network();
    const orphan = { ...payload.edges[0], componentA: "SmallMoleculeComponent-missing" };
    expect(mappingPayloadFor(orphan, buildRegistry(payload))).toBeNull();
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
      type: "LigandNetworkViz",
      name: "empty",
      nodes: [],
      edges: [],
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
      const sdf = (payload as { sdf: string }).sdf;
      const mol = parseSDF(sdf);
      const counts = parseCounts(sdf)!;
      expect(mol.symbols, name).toHaveLength(counts.atoms);
      expect(mol.bonds, name).toHaveLength(counts.bonds);
      expect(mol.name, name).toBe(payload.name);
    }
  });
});

describe("<gufe-solvent>", () => {
  afterEach(() => {
    document.body.replaceChildren();
  });

  it("prints the five settings a SolventComponent actually carries", () => {
    const payload = readExample("solvent.json");
    const node = mount("gufe-solvent", payload);
    const text = node.textContent ?? "";

    expect(text).toContain("SolventComponent");
    for (const field of ["smiles", "positive_ion", "negative_ion", "ion_concentration"] as const) {
      expect(text).toContain(String(payload[field]));
    }
    expect(text).toContain(payload.neutralize ? "yes" : "no");
  });

  it("draws the same schematic twice, so a resize does not look like new data", () => {
    const payload = readExample("solvent.json");
    const first = mount("gufe-solvent", payload).querySelector("svg")!.innerHTML;
    document.body.replaceChildren();
    const second = mount("gufe-solvent", payload).querySelector("svg")!.innerHTML;
    expect(second).toBe(first);
  });

  it("says the picture is not quantitative", () => {
    const node = mount("gufe-solvent", readExample("solvent.json"));
    expect(node.textContent).toContain("Schematic only");
  });

  it("reads the leading number of a display concentration", () => {
    expect(parseConcentration("0.15 molar")).toBe(0.15);
    expect(parseConcentration("1.5e-2 molar")).toBe(0.015);
    expect(parseConcentration("none at all")).toBeNull();
    expect(parseConcentration(undefined)).toBeNull();
  });
});

describe("<gufe-unknown-component>", () => {
  afterEach(() => {
    document.body.replaceChildren();
  });

  it("names the class it cannot draw, and says that is not an error", () => {
    const payload = readExample("unknown_component.json");
    const node = mount("gufe-unknown-component", payload);
    const text = node.textContent ?? "";

    expect(text).toContain(payload.gufe_type as string);
    expect(text).toContain(payload.name as string);
    // The distinction this view exists to make: a component gufe supports and
    // this build has not been taught, rather than a broken payload.
    expect(text).toContain("not a broken payload");
  });

  it("is what the dispatcher chooses for the type", () => {
    const node = mount("gufe-view", readExample("unknown_component.json"));
    expect(node.querySelector("gufe-unknown-component")).toBeTruthy();
    // Both this view and the dispatcher's fallback say "no visualization for",
    // which is the point: one is a considered answer and the other is a
    // shrug. Only the fallback lists what the build *can* draw, so that is
    // what distinguishes them.
    expect(node.textContent).not.toContain("This build can draw");
  });
});
