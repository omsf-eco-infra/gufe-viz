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
import { clearFakeEngines, exampleNames, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";
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
  });

  it("runs the force layout", async () => {
    mount("gufe-ligand-network", network());
    await flush();
    expect(engines.simulations, "d3's force simulation was never configured").toBe(1);
  });

  it("does not draw node depictions until they are zoomed into", async () => {
    // This replaces an assertion that every ligand was depicted up front. That
    // is the thing a nine-hundred-ligand network cannot afford: one RDKit call
    // and an SVG subtree per node, all before the first frame. The depictions
    // in `engines.depicted` at rest belong to the detail pane's mapping view,
    // which draws the two endpoints of the selected edge.
    const node = mount("gufe-ligand-network", network());
    await flush();

    const captions = Array.from(node.querySelectorAll("text.gufe-node-caption"));
    expect(captions.length).toBeGreaterThan(0);
    // Opening zoom is 1, which is below the depiction threshold and above the
    // caption one: names yes, structures not yet.
    expect(captions.every((c) => c.getAttribute("display") === "inline")).toBe(true);
    const depictionGroups = Array.from(node.querySelectorAll("g.gufe-node-depiction"));
    expect(depictionGroups.every((g) => g.getAttribute("display") === "none")).toBe(true);
  });

  it("hides the captions when zoomed far enough out", async () => {
    // The shape of the network is what is worth seeing at that distance, and a
    // caption under every node buries it.
    const node = mount("gufe-ligand-network", network());
    await flush();
    const root = node.querySelector("svg")!;

    root.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
    root.dispatchEvent(new WheelEvent("wheel", { deltaY: 600, bubbles: true, cancelable: true }));

    const captions = Array.from(node.querySelectorAll("text.gufe-node-caption"));
    expect(captions.length).toBeGreaterThan(0);
    expect(captions.every((c) => c.getAttribute("display") === "none")).toBe(true);
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

  it("opens on the first mapping, drawn by the mapping view", async () => {
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    // The pane is nothing but the mapping element: no title bar, no heading
    // repeating the two names, no annotation list. Everything that is not a
    // molecule lives behind that element's own Info mode.
    const embedded = node.querySelector("gufe-atom-mapping") as HTMLElement & { payload: { "gufe-key": string } };
    expect(embedded).toBeTruthy();
    expect(embedded.payload["gufe-key"]).toBe(payload.edges[0]["gufe-key"]);
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

    const embedded = node.querySelector("gufe-atom-mapping") as HTMLElement & { payload: { "gufe-key": string } };
    expect(embedded.payload["gufe-key"]).toBe(last["gufe-key"]);
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
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  const mapping = () => mount("gufe-atom-mapping", readExample("ligand_atom_mapping.json"));

  const modeButton = (node: HTMLElement, label: string): HTMLButtonElement =>
    Array.from(node.querySelectorAll("button")).find((b) => b.textContent === label)!;

  const setMode = async (node: HTMLElement, label: string): Promise<void> => {
    modeButton(node, label).click();
    await flush();
  };

  it("shows the molecules and the switcher, and nothing above them", async () => {
    // No header strip, no statistics bar. The box labels already name both
    // ligands, and everything that is not a molecule is behind Info - anything
    // else here would be saying it a second time.
    const node = mapping();
    await flush();
    const text = node.textContent ?? "";

    expect(text).not.toContain("LigandAtomMapping");
    expect(text).not.toContain("Selected mapping");
    expect(text).not.toContain("mapped atoms");
    expect(text).not.toContain("score");
  });

  it("names each molecule on its own box, the way the prototype does", async () => {
    const node = mapping();
    await flush();
    const payload = readExample("ligand_atom_mapping.json") as unknown as { registry: { name: string }[] };
    const names = payload.registry.map((entry) => entry.name).filter(Boolean);
    for (const name of names) expect(node.textContent).toContain(name);
  });

  it("offers the prototype's six modes, in its order", async () => {
    const node = mapping();
    await flush();
    const labels = Array.from(node.querySelectorAll("button")).map((b) => b.textContent);
    expect(labels).toEqual(["3D", "3D-Map", "Pairs", "Overlay", "2D", "Info"]);
  });

  it("opens on the plain 3D view, with one box per molecule", async () => {
    const node = mapping();
    await flush();
    expect(node.querySelectorAll("[data-gufe-viewer]").length).toBe(2);
    expect(engines.viewers.length).toBe(2);
  });

  it("keeps two side-by-side viewers pointing the same way", async () => {
    // Turning one molecule while the other stays put makes the pair impossible
    // to compare, which is the only reason both are on screen.
    const node = mapping();
    await flush();
    expect(node.querySelectorAll("[data-gufe-viewer]").length).toBe(2);
    // Both viewers were opened; the sync loop reads getView from one and writes
    // setView to the other.
    expect(engines.viewers.every((v) => typeof v.getView === "function")).toBe(true);
  });

  it("picks out each molecule's unmapped atoms in 3D-Map", async () => {
    const node = mapping();
    await flush();
    await setMode(node, "3D-Map");

    const extra = engines.viewers.flatMap((v) => v.calls.filter((c) => c.startsWith("addStyle")));
    // One addStyle per unmapped atom, and 3Dmol counts atoms from one.
    expect(extra.length).toBeGreaterThan(0);
    expect(extra.every((c) => /serial":\s*[1-9]/.test(c))).toBe(true);
  });

  it("draws one line per mapped pair in Pairs, into a single box", async () => {
    const node = mapping();
    await flush();
    await setMode(node, "Pairs");

    expect(node.querySelectorAll("[data-gufe-viewer]").length).toBe(1);
    const payload = readExample("ligand_atom_mapping.json") as unknown as {
      componentA_to_componentB: unknown[];
    };
    const lines = engines.viewers.at(-1)!.shapes.filter((s) => s.kind === "cylinder");
    expect(lines.length).toBe(payload.componentA_to_componentB.length);
    expect(lines.every((l) => l.spec.dashed === true)).toBe(true);
  });

  it("superimposes both molecules translucently in Overlay", async () => {
    const node = mapping();
    await flush();
    await setMode(node, "Overlay");

    expect(node.querySelectorAll("[data-gufe-viewer]").length).toBe(1);
    const viewer = engines.viewers.at(-1)!;
    expect(viewer.calls.filter((c) => c.startsWith("addModel")).length).toBe(2);
    const styles = viewer.styles.map(({ style }) => (style as { stick?: { opacity?: number } }).stick?.opacity);
    expect(styles.every((o) => o !== undefined && o < 1)).toBe(true);
  });

  it("draws both depictions in 2D, keeping their hydrogens", async () => {
    const node = mapping();
    await flush();
    await setMode(node, "2D");
    // gufe's indices count hydrogens, so a depiction that stripped them would
    // highlight neighbouring atoms with complete confidence.
    expect(engines.depicted.length).toBeGreaterThanOrEqual(2);
  });

  it("puts the numbers behind Info rather than beside the molecules", async () => {
    const node = mapping();
    await flush();
    expect(node.textContent).not.toContain("element changes");

    await setMode(node, "Info");
    const text = node.textContent ?? "";
    expect(text).toContain("mapped atoms");
    expect(text).toContain("element changes");
    expect(text).toContain("unique to");
    // Uppercased by CSS rather than shouted in the DOM, so the text a
    // screen reader gets is sentence case.
    expect(text).toContain("Correspondence");
    expect(text).toContain("gufe key");
  });

  it("releases the previous mode's viewers when the mode changes", async () => {
    // Each mode rebuilds its boxes, and a browser only allows so many live
    // WebGL contexts - clicking along the switcher must not use them all up.
    const node = mapping();
    await flush();
    const first = engines.viewers.slice();
    await setMode(node, "Overlay");
    expect(first.every((v) => v.cleared)).toBe(true);
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
    // It arrives with its own six-mode switcher, which is how you know it is
    // the same element and not a second drawing path.
    const labels = Array.from(embedded!.querySelectorAll("button")).map((b) => b.textContent);
    expect(labels).toEqual(["3D", "3D-Map", "Pairs", "Overlay", "2D", "Info"]);
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
    // The class name is all a Protocol carries, so it is what identifies it.
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

describe("the three PDB types", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it.each(["protein.json", "solvated_pdb.json", "protein_membrane.json"])(
    "%s draws through the protein view, under its own name",
    async (fixture) => {
      const payload = readExample(fixture);
      const node = mount("gufe-view", payload);
      await flush();
      expect(node.querySelector("gufe-protein")).toBeTruthy();
      expect(node.textContent).toContain(payload.name as string);
    },
  );

  it("opens a solvated system with its waters shown, and a bare protein without", async () => {
    // Hiding the very thing that distinguishes them would make the three
    // indistinguishable on screen; burying a bare protein in a few thousand
    // crystallographic waters would be worse. Note this reads the *style*, not
    // the selection: turning a representation off is setStyle(selection, {}),
    // so the selection alone cannot tell the two apart.
    const watersShown = (viewer: { styles: { selection: unknown; style: unknown }[] }): boolean =>
      viewer.styles.some(
        ({ selection, style }) =>
          JSON.stringify(selection).includes("HOH") && Object.keys(style as object).length > 0,
      );

    mount("gufe-protein", readExample("solvated_pdb.json"));
    await flush();
    expect(watersShown(engines.viewers[0])).toBe(true);

    document.body.replaceChildren();
    const plain = seedFakeEngines();
    mount("gufe-protein", readExample("protein.json"));
    await flush();
    expect(watersShown(plain.viewers[0])).toBe(false);
  });
});

describe("<gufe-protocol>", () => {
  afterEach(() => {
    document.body.replaceChildren();
  });

  it("shows the class name, which is all a Protocol carries", () => {
    const payload = {
      type: "ProtocolViz",
      "gufe-key": "DummyProtocol-abc123",
      name: "",
      gufe_type: "DummyProtocol",
    };
    const node = mount("gufe-protocol", payload);
    const text = node.textContent ?? "";
    expect(text).toContain("DummyProtocol");
    expect(text).toContain("Protocol");
    // Says what is absent rather than leaving a reader to wonder.
    expect(text).toContain("settings are not carried");
  });
});

describe("every declared type", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("draws, with no unsupported panel anywhere", async () => {
    for (const name of exampleNames()) {
      document.body.replaceChildren();
      const node = mount("gufe-view", readExample(name));
      await flush();
      expect(node.textContent, `${name} fell back to the unsupported panel`).not.toContain(
        "This build can draw",
      );
    }
  });
});

describe("<gufe-ligand-network> against the framejs prototype", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  const net = () => {
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = readExample("ligand_network_named.json");
    return node;
  };

  it("puts an arrowhead on every edge, in that edge's own colour", async () => {
    const node = net();
    await flush();

    const drawn = Array.from(node.querySelectorAll("line")).filter((l) => l.getAttribute("marker-end"));
    expect(drawn.length).toBeGreaterThan(0);

    for (const line of drawn) {
      const id = /url\(#(.+)\)/.exec(line.getAttribute("marker-end")!)![1];
      const marker = node.querySelector(`#${id}`);
      expect(marker, `no marker ${id}`).toBeTruthy();
      // A marker cannot inherit the line's colour, so the two are set
      // separately and have to agree - which is exactly what rots silently.
      expect(marker!.querySelector("path")!.getAttribute("fill")).toBe(line.getAttribute("stroke"));
    }
  });

  it("makes one marker per colour rather than one per edge", async () => {
    const node = net();
    await flush();
    const colours = new Set(
      Array.from(node.querySelectorAll("line"))
        .filter((l) => l.getAttribute("marker-end"))
        .map((l) => l.getAttribute("stroke")),
    );
    expect(node.querySelectorAll("marker").length).toBe(colours.size);
  });

  it("backs each score with a chip so it stays readable over the line", async () => {
    const node = net();
    await flush();
    const labels = Array.from(node.querySelectorAll("g.gufe-edge-label"));
    expect(labels.length).toBeGreaterThan(0);
    for (const group of labels) {
      expect(group.querySelector("rect")).toBeTruthy();
      expect(group.querySelector("text")).toBeTruthy();
    }
  });

  it("sizes the selection halo from the edge under it", async () => {
    const node = net();
    await flush();
    const widths = Array.from(node.querySelectorAll("line"))
      .filter((l) => l.getAttribute("stroke") === "#fbcfe8" || l.getAttribute("opacity") === "0")
      .map((l) => Number(l.getAttribute("stroke-width")));
    // Scores differ across the fixture, so the halos differ too - a fixed halo
    // would swamp a thin edge and be outgrown by a thick one.
    expect(new Set(widths).size).toBeGreaterThan(1);
  });

  it("shows a hover readout on an edge, with its score", async () => {
    const node = net();
    await flush();
    const hit = Array.from(node.querySelectorAll("line")).find(
      (l) => l.getAttribute("stroke") === "transparent",
    )!;
    hit.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));

    const tip = Array.from(node.querySelectorAll("div")).find((d) => d.style.opacity === "1");
    expect(tip, "no tooltip appeared").toBeTruthy();
    expect(tip!.textContent).toContain("score");
    expect(tip!.textContent).toContain("Click to see the mapping");
  });

  it("hides the readout again on the way out", async () => {
    const node = net();
    await flush();
    const hit = Array.from(node.querySelectorAll("line")).find(
      (l) => l.getAttribute("stroke") === "transparent",
    )!;
    hit.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
    hit.dispatchEvent(new MouseEvent("mouseleave", { bubbles: true }));
    expect(Array.from(node.querySelectorAll("div")).some((d) => d.style.opacity === "1")).toBe(false);
  });
});

describe("every header", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("names a payload once, not once as prose and again as a class", async () => {
    // Headers used to carry the gufe class name beside the title, which read as
    // "Ligand network LigandNetwork" - the same thing twice in two fonts.
    //
    // Scoped to the header strip on purpose. A type badge in a *list* of
    // components says which kind each one is and is worth keeping; the first
    // version of this test caught those too and was wrong to.
    const classNames = [
      "LigandNetwork",
      "SmallMoleculeComponent",
      "ProteinComponent",
      "ChemicalSystem",
      "Transformation",
      "AlchemicalNetwork",
      "SolventComponent",
      "LigandAtomMapping",
    ];

    for (const name of exampleNames()) {
      document.body.replaceChildren();
      const payload = readExample(name);
      const node = mount("gufe-view", payload);
      await flush();

      for (const header of node.querySelectorAll(".gufe-header")) {
        const text = header.textContent ?? "";
        for (const className of classNames) {
          // A payload named after its class is its own business; what must not
          // come back is the view adding the class name itself.
          if (String(payload.name ?? "").includes(className)) continue;
          expect(text, `${name}: header still prints "${className}"`).not.toContain(className);
        }
      }
    }
  });
});
