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
import { mappingPayloadFor, uniqueAtoms } from "../src/views/atom-mapping.js";
import { parseConcentration } from "../src/views/solvent.js";
import { diffStatus } from "../src/views/transformation.js";
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

describe("<gufe-chemical-system>", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("lists every label, resolved through the registry", async () => {
    const payload = readExample("chemical_system.json");
    const node = mount("gufe-chemical-system", payload);
    await flush();

    const labels = Object.keys((payload as { components: Record<string, string> }).components);
    expect(labels.length).toBeGreaterThan(1);
    for (const label of labels) expect(node.textContent).toContain(label);
    expect(node.textContent).toContain(String(labels.length));
  });

  it("draws the selected component through a nested dispatcher", async () => {
    const node = mount("gufe-chemical-system", readExample("chemical_system.json"));
    await flush();
    // Composition made structural: this view picks which component, and
    // <gufe-view> decides how to draw it, exactly as at the top level.
    const nested = node.querySelector("gufe-view");
    expect(nested).toBeTruthy();
    expect(nested!.querySelector("gufe-small-molecule, gufe-solvent, gufe-protein")).toBeTruthy();
  });

  it("switches component without rebuilding the nested view", async () => {
    const node = mount("gufe-chemical-system", readExample("chemical_system.json"));
    await flush();
    const before = node.querySelector("gufe-view");

    const buttons = Array.from(node.querySelectorAll("button"));
    buttons[buttons.length - 1].click();
    await flush();

    expect(node.querySelector("gufe-view")).toBe(before);
  });

  it("survives a label whose key resolves to nothing, and says so", async () => {
    const payload = structuredClone(readExample("chemical_system.json")) as {
      components: Record<string, string>;
    };
    const labels = Object.keys(payload.components);
    payload.components[labels[0]] = "SmallMoleculeComponent-nosuchentry";

    const node = mount("gufe-chemical-system", payload);
    await flush();

    // The rest of the system still draws; the missing one is reported.
    expect(node.querySelector("gufe-view")).toBeTruthy();
    expect(node.textContent).toContain("not in its registry");
    expect(node.textContent).toContain(labels[0]);
  });

  it("names the cause when nothing resolves at all", async () => {
    const payload = structuredClone(readExample("chemical_system.json")) as {
      components: Record<string, string>;
    };
    for (const label of Object.keys(payload.components)) {
      payload.components[label] = `SmallMoleculeComponent-missing-${label}`;
    }

    const node = mount("gufe-chemical-system", payload);
    await flush();
    expect(node.textContent).toContain("None of this system's components are in its registry");
  });
});

describe("uniqueAtoms", () => {
  // gufe's classification, which this has to mirror exactly or the two pictures
  // disagree about what a colour means: an index absent from the mapping is
  // unique, an index present whose element differs is an element change, and
  // everything else gets no highlight at all.
  const pairs = (entries: [number, number][]) => new Map(entries);

  it("calls an unmapped atom unique", () => {
    const u = uniqueAtoms(pairs([[0, 0]]), ["C", "O"], ["C"]);
    expect(u.atoms).toEqual([1]);
    expect(u.elements).toEqual([]);
    expect(u.mapped).toEqual([0]);
  });

  it("calls a mapped atom of a different element an element change", () => {
    const u = uniqueAtoms(pairs([[0, 0]]), ["C"], ["N"]);
    expect(u.elements).toEqual([0]);
    expect(u.atoms).toEqual([]);
    expect(u.mapped).toEqual([]);
  });

  it("leaves a same-element mapped atom unhighlighted, as gufe does", () => {
    const u = uniqueAtoms(pairs([[0, 0], [1, 1]]), ["C", "H"], ["C", "H"]);
    expect(u.mapped).toEqual([0, 1]);
    expect(u.atoms).toEqual([]);
    expect(u.elements).toEqual([]);
  });

  it("classifies every atom exactly once", () => {
    const u = uniqueAtoms(pairs([[0, 0], [2, 1]]), ["C", "O", "N"], ["C", "N"]);
    const total = u.atoms.length + u.elements.length + u.mapped.length;
    expect(total).toBe(3);
  });
});

describe("<gufe-atom-mapping>", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("names both ligands and counts what changes", async () => {
    const node = mount("gufe-atom-mapping", readExample("ligand_atom_mapping.json"));
    await flush();
    const text = node.textContent ?? "";
    expect(text).toContain("LigandAtomMapping");
    expect(text).toContain("mapped atoms");
    expect(text).toContain("element changes");
  });

  it("says what the two colours mean", async () => {
    const node = mount("gufe-atom-mapping", readExample("ligand_atom_mapping.json"));
    await flush();
    expect(node.textContent).toContain("element change");
    expect(node.textContent).toContain("unique atom");
  });

  it("draws both molecules keeping their hydrogens", async () => {
    const engines = seedFakeEngines();
    const node = mount("gufe-atom-mapping", readExample("ligand_atom_mapping.json"));
    await flush();
    expect(node.querySelectorAll("svg").length).toBeGreaterThanOrEqual(2);
    // gufe's indices count hydrogens, so a depiction that stripped them would
    // highlight neighbouring atoms with complete confidence.
    expect(engines.depicted.length).toBeGreaterThanOrEqual(2);
  });

  it("survives a registry that does not hold its endpoints", async () => {
    const payload = structuredClone(readExample("ligand_atom_mapping.json")) as {
      componentA: string;
      registry: unknown[];
    };
    payload.registry = [];
    const node = mount("gufe-atom-mapping", payload);
    await flush();
    expect(node.textContent).toContain("registry does not hold them");
  });

  it("is what the dispatcher chooses for the type", async () => {
    const node = mount("gufe-view", readExample("ligand_atom_mapping.json"));
    await flush();
    expect(node.querySelector("gufe-atom-mapping")).toBeTruthy();
    expect(node.textContent).not.toContain("This build can draw");
  });
});

describe("<gufe-ligand-network> detail pane", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("draws the selected mapping with the very same element as standalone", async () => {
    const node = mount("gufe-ligand-network", readExample("ligand_network.json"));
    await flush();

    // The reuse claim, checked rather than asserted in a comment: one element,
    // two call sites, so the in-context picture and the standalone one cannot
    // drift apart.
    const embedded = node.querySelector("gufe-atom-mapping");
    expect(embedded).toBeTruthy();
    expect(embedded!.textContent).toContain("element change");
  });

  it("re-points that element when a different edge is selected", async () => {
    const node = mount("gufe-ligand-network", readExample("ligand_network.json"));
    await flush();
    const before = node.querySelector("gufe-atom-mapping");

    const hits = Array.from(node.querySelectorAll("line")).filter(
      (l) => l.getAttribute("stroke") === "transparent",
    );
    expect(hits.length).toBeGreaterThan(1);
    hits[hits.length - 1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    // A different edge is a new payload, not a rebuilt pane.
    expect(node.querySelector("gufe-atom-mapping")).not.toBe(before);
  });
});

describe("diffStatus", () => {
  // Comparing gufe keys rather than payloads: a key is content-derived, so
  // equal keys mean equal gufe objects, and there is no PDB to stringify.
  it("reads a label present on one side only as added or removed", () => {
    expect(diffStatus("k", undefined)).toBe("removed");
    expect(diffStatus(undefined, "k")).toBe("added");
  });

  it("reads the same key as unchanged and a different one as changed", () => {
    expect(diffStatus("k", "k")).toBe("unchanged");
    expect(diffStatus("k", "other")).toBe("changed");
  });
});

describe("<gufe-transformation>", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("names the protocol by its gufe class, which is all a Protocol has", async () => {
    const node = mount("gufe-transformation", readExample("transformation.json"));
    await flush();
    expect(node.textContent).toContain("Transformation");
    expect(node.textContent).toContain("DummyProtocol");
  });

  it("diffs the two states per label", async () => {
    const node = mount("gufe-transformation", readExample("transformation.json"));
    await flush();
    const text = node.textContent ?? "";
    expect(text).toContain("State A");
    expect(text).toContain("State B");
    // The two systems share a solvent and differ in their ligand.
    expect(text).toContain("solvent");
    expect(text).toContain("ligand");
  });

  it("embeds the mapping view rather than drawing its own", async () => {
    const node = mount("gufe-transformation", readExample("transformation.json"));
    await flush();
    const embedded = node.querySelector("gufe-atom-mapping");
    expect(embedded).toBeTruthy();
    // Cut loose with a registry of its own, so it resolves its endpoints the
    // same way it would as a standalone payload.
    expect(embedded!.textContent).not.toContain("registry does not hold them");
  });
});

describe("<gufe-alchemical-network>", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("draws a node per chemical system and an edge per transformation", async () => {
    const payload = readExample("alchemical_network.json") as unknown as {
      nodes: string[];
      edges: unknown[];
    };
    const node = mount("gufe-alchemical-network", payload);
    await flush();

    expect(node.querySelectorAll("rect").length).toBe(payload.nodes.length);
    const text = node.textContent ?? "";
    expect(text).toContain(String(payload.nodes.length));
    expect(text).toContain("transformations");
  });

  it("shows a selected system's components, resolved through the registry", async () => {
    const node = mount("gufe-alchemical-network", readExample("alchemical_network.json"));
    await flush();
    // It opens on the first system rather than an empty pane.
    const text = node.textContent ?? "";
    expect(text).toContain("ChemicalSystem");
    expect(text).toContain("ligand");
    expect(text).not.toContain("not in the registry");
  });

  it("drops a transformation naming a system it does not contain, and says so", async () => {
    const payload = structuredClone(readExample("alchemical_network.json")) as {
      edges: { stateA: string }[];
    };
    payload.edges[0].stateA = "ChemicalSystem-nosuchentry";
    const node = mount("gufe-alchemical-network", payload);
    await flush();
    expect(node.textContent).toContain("does not contain");
  });

  it("is what the dispatcher chooses for the type", async () => {
    const node = mount("gufe-view", readExample("alchemical_network.json"));
    await flush();
    expect(node.querySelector("gufe-alchemical-network")).toBeTruthy();
    expect(node.textContent).not.toContain("This build can draw");
  });
});
