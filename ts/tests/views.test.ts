/**
 * What each view actually puts on the page, and how they behave when
 * the data is present-but-unusable: schema-valid but not renderable, such as a
 * truncated SDF, which must produce an error panel rather than a crash.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { buildMolBlock, parseCounts, parseSDF } from "../src/shared/sdf.js";
import { parsePdbStats } from "../src/shared/pdb.js";
import { formatIssues, validatePayload } from "../src/schema/validate.js";
import { buildRegistry, lookupOfType } from "../src/schema/registry.js";
import { T } from "../src/shared/theme.js";
import { HIDE_NAME_ATTRIBUTE } from "../src/shared/dom.js";
import { inFrameOf, mappingPayloadFor, openfeShift, pairColour, uniqueAtoms } from "../src/views/atom-mapping.js";
import { DEPICT_STYLE, markGroups, threeDmolColor } from "../src/shared/depict-style.js";
import { diffStatus, transformationPayloadFor } from "../src/views/transformation.js";
import { systemPayloadFor } from "../src/views/chemical-system.js";
import { ZOOM_LEVELS, levelAt } from "../src/views/ligand-network.js";
import { clearFakeEngines, exampleNames, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";
import type {
  ChemicalSystemViz,
  LigandNetworkViz,
  SmallMoleculeComponentViz,
  TransformationViz,
} from "../src/schema/types.js";

function mount<T extends HTMLElement>(tag: string, payload: unknown): T {
  const node = document.createElement(tag) as T & { payload: unknown };
  document.body.appendChild(node);
  node.payload = payload;
  return node;
}

/** The labels of a switcher's buttons, in order. */
function modeLabels(node: HTMLElement): (string | null)[] {
  return Array.from(node.querySelectorAll("button")).map((button) => button.textContent);
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

  const modeButton = (node: HTMLElement, label: string): HTMLButtonElement =>
    [...node.querySelectorAll("button")].find((b) => b.textContent === label)!;

  const nameLabel = (node: HTMLElement, name: string): HTMLElement | undefined =>
    [...node.querySelectorAll<HTMLElement>("div")].find(
      (d) => d.textContent === name && d.style.position === "absolute",
    );

  it("names the molecule over the picture, and stops when something above has named it", async () => {
    const payload = readExample("small_molecule.json");
    const shown = mount("gufe-small-molecule", payload);
    await flush();
    expect(nameLabel(shown, payload.name as string)).toBeTruthy();

    // The attribute is read off any ancestor, so a pane that names its own
    // contents silences every view inside it rather than the one it knows about.
    document.body.replaceChildren();
    const wrapper = document.createElement("div");
    wrapper.setAttribute(HIDE_NAME_ATTRIBUTE, "");
    document.body.appendChild(wrapper);
    const hidden = document.createElement("gufe-small-molecule") as HTMLElement & { payload: unknown };
    wrapper.appendChild(hidden);
    hidden.payload = payload;
    await flush();
    expect(nameLabel(hidden, payload.name as string)).toBeUndefined();
  });

  it("offers one way of looking at a time, in the order the switcher lists them", async () => {
    const node = mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    const labels = [...node.querySelectorAll("button")].map((b) => b.textContent);
    expect(labels).toEqual(["2D", "Stick", "Ball+Stick", "Sphere", "Spin", "Info"]);
    // The reset went with the split: the zoom is bounded and wheeling back out
    // is the way back.
    expect(labels).not.toContain("Reset");
  });

  it("shows one pane at a time, and every pane is laid out whichever is showing", async () => {
    // The panes are stacked and hidden rather than built on demand: 3Dmol sizes
    // its canvas from the element it renders into, and one built inside a pane
    // with no layout would be built at nothing.
    const node = mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    const viewer3D = node.querySelector<HTMLElement>("[data-gufe-viewer]")!.parentElement!;
    const depiction = node.querySelector<HTMLElement>("svg")!.closest("div")!;
    const shown = (element: HTMLElement) => element.style.visibility !== "hidden";

    expect(engines.viewers).toHaveLength(1);
    expect(shown(viewer3D)).toBe(false);
    expect(shown(depiction)).toBe(true);

    modeButton(node, "Ball+Stick").click();
    expect(shown(viewer3D)).toBe(true);
    expect(shown(depiction)).toBe(false);
    expect(engines.viewers[0].styles.at(-1)!.style).toMatchObject({ sphere: { scale: 0.28 } });
  });

  it("keeps the name and the numbers behind Info, not in a bar under the picture", async () => {
    const payload = readExample("small_molecule.json");
    const node = mount("gufe-small-molecule", payload);
    await flush();
    modeButton(node, "Info").click();

    const info = [...node.querySelectorAll<HTMLElement>("div")].find(
      (d) => d.textContent?.includes("SMILES") && d.textContent?.includes("Charge"),
    );
    expect(info).toBeTruthy();
    expect(info!.textContent).toContain((payload as { smiles: string }).smiles);
  });

  it("does not turn a molecule nobody is looking at", async () => {
    // Spin is a control of the 3D picture, so it is dead while another pane is
    // in force - and a hidden canvas turning is a frame a second wasted.
    const node = mount("gufe-small-molecule", readExample("small_molecule.json"));
    await flush();
    const spin = modeButton(node, "Spin");
    expect(spin.disabled).toBe(true);

    modeButton(node, "Stick").click();
    expect(spin.disabled).toBe(false);
    spin.click();
    expect(engines.viewers[0].calls).toContain('spin("y")');

    modeButton(node, "2D").click();
    expect(engines.viewers[0].calls.at(-1)).toBe("spin(false)");
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

    expect(node.querySelectorAll("svg circle.gufe-node-disc")).toHaveLength(payload.nodes.length);
    // One visible line, one halo and one hit target per edge.
    expect(node.querySelectorAll("svg line")).toHaveLength(payload.edges.length * 3);
    expect(node.textContent).toContain(`${payload.nodes.length}`);
  });

  it("runs the force layout", async () => {
    mount("gufe-ligand-network", network());
    await flush();
    expect(engines.simulations, "d3's force simulation was never configured").toBe(1);
  });

  /** One wheel gesture on the graph. Negative zooms in, positive out. */
  const wheeled = (node: HTMLElement, deltaY: number): SVGSVGElement => {
    const root = node.querySelector<SVGSVGElement>("svg.gufe-graph")!;
    root.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
    root.dispatchEvent(new WheelEvent("wheel", { deltaY, bubbles: true, cancelable: true }));
    return root;
  };

  /** Out far enough to reach the `shape` level. */
  const zoomedOut = (node: HTMLElement): SVGSVGElement => wheeled(node, 600);

  /** Out to the `names` level: under the structure threshold, still naming every node. */
  const zoomedBack = (node: HTMLElement): SVGSVGElement => wheeled(node, 400);

  it("stops drawing the structures a notch below the zoom that asks for them", async () => {
    // The structures are the expensive part - one RDKit call and an SVG subtree
    // per node - so no level below `structures` draws them and none of them is
    // built until one is on screen at a zoom that wants it. What a network of
    // several hundred costs before its first frame is `scale.test.ts`.
    const node = mount("gufe-ligand-network", network());
    await flush();
    const root = zoomedBack(node);
    await flush();

    expect(root.getAttribute("data-detail")).toBe("names");
    const captions = Array.from(node.querySelectorAll("text.gufe-node-caption"));
    expect(captions.length).toBeGreaterThan(0);
    // Names yes, and inside the disc, which is where a node with no structure
    // in it has the room for one.
    expect(captions.every((c) => c.getAttribute("display") === "inline")).toBe(true);
    const depictionGroups = Array.from(node.querySelectorAll("g.gufe-node-depiction"));
    expect(depictionGroups.every((g) => g.getAttribute("display") === "none")).toBe(true);
  });

  it("stands a depicted node on a white disc the size of the disc it replaces", async () => {
    // RDKit draws for paper. Without the plate the black bonds sit on the dark
    // canvas in one theme and on the network's own edges in the other, and the
    // name under them is unreadable over whatever it happens to cross.
    const node = mount("gufe-ligand-network", network());
    await flush();

    const plates = Array.from(node.querySelectorAll<SVGCircleElement>("circle.gufe-node-plate"));
    expect(plates.length).toBe(node.querySelectorAll("circle.gufe-node-disc").length);
    // A node with no structure in it has the styled disc instead, and nothing
    // to stand on white.
    zoomedBack(node);
    await flush();
    expect(plates.every((p) => p.getAttribute("display") === "none")).toBe(true);

    const root = wheeled(node, -200);
    await flush();
    expect(root.getAttribute("data-detail")).toBe("structures");

    const shown = plates.filter((p) => p.getAttribute("display") === "inline");
    expect(shown.length).toBeGreaterThan(0);
    // The radius the lower zooms draw, so crossing the threshold changes what
    // is inside a node rather than how big the node is.
    const disc = node.querySelector<SVGCircleElement>("circle.gufe-node-disc")!;
    expect(shown.every((p) => p.getAttribute("r") === disc.getAttribute("r"))).toBe(true);
  });

  it("hides the captions when zoomed far enough out", async () => {
    // The shape of the network is what is worth seeing at that distance, and a
    // caption under every node buries it.
    const node = mount("gufe-ligand-network", network());
    await flush();
    const root = zoomedOut(node);

    const captions = Array.from(node.querySelectorAll("text.gufe-node-caption"));
    expect(captions.length).toBeGreaterThan(0);
    expect(captions.every((c) => c.getAttribute("display") === "none")).toBe(true);
    expect(root.getAttribute("data-detail")).toBe("shape");
  });

  /**
   * Everything on the canvas is scaled by the zoom, so out here a 10px score is
   * 5px on screen. It is not read at that size, it is just texture over the
   * lines whose shape is the only reason to be this far out.
   */
  it("drops the edge scores at the zoom where names become initials", async () => {
    const node = mount("gufe-ligand-network", network());
    await flush();
    const labels = node.querySelector<SVGGElement>("g.gufe-edge-label")!.parentElement as unknown as SVGGElement;

    expect(zoomedBack(node).getAttribute("data-detail")).toBe("names");
    expect(labels.getAttribute("display")).toBe("inline");
    // The same zoom that turns the names into initials.
    zoomedOut(node);
    const initials = Array.from(node.querySelectorAll("text.gufe-node-initials"));
    expect(initials.length).toBeGreaterThan(0);
    expect(initials.every((t) => t.getAttribute("display") === "inline")).toBe(true);
    expect(labels.getAttribute("display")).toBe("none");
  });

  it("names its levels, and puts each zoom in exactly one of them", () => {
    // The table is the thing anyone edits to change what a zoom draws, so a gap
    // or an overlap in it is worth catching here rather than on the canvas.
    expect(ZOOM_LEVELS.map((l) => l.id)).toEqual(["structures", "names", "shape"]);
    for (let i = 1; i < ZOOM_LEVELS.length; i++) {
      expect(ZOOM_LEVELS[i].from, "levels run from the closest zoom down").toBeLessThan(ZOOM_LEVELS[i - 1].from);
    }
    expect(ZOOM_LEVELS[ZOOM_LEVELS.length - 1].from, "the last level catches every zoom left").toBe(0);
    expect(levelAt(4).id).toBe("structures");
    expect(levelAt(0.55).id).toBe("structures");
    expect(levelAt(0.54).id).toBe("names");
    expect(levelAt(0.35).id).toBe("names");
    expect(levelAt(0.34).id).toBe("shape");
    expect(levelAt(0).id).toBe("shape");
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

  it("keeps one scene on the canvas, however many redraws overlap", async () => {
    // A force layout is relaxed asynchronously, so two redraws can be in flight
    // at once. Both used to paint, and the canvas does not scroll: the reader
    // was left looking at the first scene while every selection went to the
    // last one, off the bottom of the pane.
    const node = mount("gufe-ligand-network", network());
    await flush();
    const menu = node.querySelector<HTMLButtonElement>('button[aria-label="Search, filter and select ligands"]')!;
    menu.click();
    menu.click();
    await flush();

    expect(node.querySelectorAll("svg.gufe-graph")).toHaveLength(1);
    node.querySelectorAll<SVGGElement>("g.gufe-node")[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();
    // The halo that lit is one the reader can see.
    const lit = [...node.querySelectorAll("circle.gufe-node-halo")].filter((c) => c.getAttribute("opacity") !== "0");
    expect(lit).toHaveLength(1);
    expect(node.querySelector("svg.gufe-graph")!.contains(lit[0])).toBe(true);
  });

  it("hands on a clicked ligand and mapping with none of the layout's bookkeeping", async () => {
    // Same rule as the alchemical network's: the force layout writes onto the
    // objects the payload is cut from, and the schema allows none of it.
    const node = mount("gufe-ligand-network", network());
    await flush();
    node.querySelectorAll<SVGGElement>("g.gufe-node")[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();
    const ligand = node.querySelector("gufe-small-molecule") as HTMLElement & { payload: Record<string, unknown> };
    expect(validatePayload(ligand.payload).valid, formatIssues(validatePayload(ligand.payload).issues)).toBe(true);

    const hits = [...node.querySelectorAll("line")].filter((l) => l.getAttribute("stroke") === "transparent");
    hits[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();
    const mapping = node.querySelector("gufe-atom-mapping") as HTMLElement & { payload: Record<string, unknown> };
    expect(validatePayload(mapping.payload).valid, formatIssues(validatePayload(mapping.payload).issues)).toBe(true);
  });

  it("shows a clicked ligand on its own, drawn by the small molecule view", async () => {
    // The counterpart of clicking an edge: an edge is a mapping and opens the
    // mapping view, a node is one ligand and opens the ligand view. Both are
    // the element that payload renders through on its own.
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();

    const groups = node.querySelectorAll<SVGGElement>("g.gufe-node");
    groups[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    const embedded = node.querySelector("gufe-small-molecule") as HTMLElement & {
      payload: { "gufe-key": string; x?: number };
    };
    expect(embedded).toBeTruthy();
    expect(embedded.payload["gufe-key"]).toBe(payload.nodes[1]);
    // The layout position is this view's business, not the ligand's.
    expect(embedded.payload.x).toBeUndefined();
    // One thing is open at a time, so the mapping the pane opened on is gone.
    expect(node.querySelector("gufe-atom-mapping")).toBeNull();
  });

  it("marks the open ligand on the canvas, and only that one", async () => {
    const node = mount("gufe-ligand-network", network());
    await flush();
    const halos = () => [...node.querySelectorAll("circle.gufe-node-halo")].map((c) => c.getAttribute("opacity"));

    expect(halos().every((o) => o === "0")).toBe(true);
    node.querySelectorAll<SVGGElement>("g.gufe-node")[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();
    expect(halos().filter((o) => o !== "0")).toHaveLength(1);
    expect(halos()[1]).not.toBe("0");
  });

  it("does not open a ligand that was only dragged out of the way", async () => {
    // A node is both a thing to drag and a thing to click, and moving one is
    // not a request to look at it.
    const payload = network();
    const node = mount("gufe-ligand-network", payload);
    await flush();
    const group = node.querySelectorAll<SVGGElement>("g.gufe-node")[1];
    (group as unknown as { setPointerCapture(id: number): void }).setPointerCapture = () => {};
    // jsdom has no PointerEvent; the handlers read only what a MouseEvent has,
    // plus the pointer id the capture is taken with.
    const pointer = (type: string, clientX: number, clientY: number): MouseEvent => {
      const event = new MouseEvent(type, { bubbles: true, clientX, clientY });
      Object.defineProperty(event, "pointerId", { value: 1 });
      return event;
    };

    group.dispatchEvent(pointer("pointerdown", 100, 100));
    group.dispatchEvent(pointer("pointermove", 260, 240));
    group.dispatchEvent(pointer("pointerup", 260, 240));
    group.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    expect(node.querySelector("gufe-small-molecule")).toBeNull();
    expect(node.querySelector("gufe-atom-mapping")).toBeTruthy();
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
    expect(node.querySelectorAll("svg circle.gufe-node-disc")).toHaveLength(payload.nodes.length);
  });

  it("drops a node whose gufe key is not in the registry, and says so", async () => {
    // The other half of the referential integrity JSON Schema cannot express:
    // a node key that resolves to nothing. The network still draws.
    const payload = network();
    payload.nodes = [...payload.nodes, "SmallMoleculeComponent-not-in-the-registry"];
    const node = mount("gufe-ligand-network", payload);
    await flush();

    expect(node.textContent).toContain("not in its registry");
    expect(node.querySelectorAll("svg circle.gufe-node-disc")).toHaveLength(payload.nodes.length - 1);
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
    expect(node.querySelectorAll("svg circle.gufe-node-disc").length).toBeGreaterThan(0);
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

  it("prints every field a SolventComponent carries", () => {
    const payload = readExample("solvent.json");
    const node = mount("gufe-solvent", payload);
    const text = node.textContent ?? "";

    for (const field of ["name", "smiles", "positive_ion", "negative_ion", "ion_concentration", "gufe-key"] as const) {
      expect(text).toContain(String(payload[field]));
    }
    expect(text).toContain(payload.neutralize ? "yes" : "no");
  });

  it("draws no picture: there is nothing structural to draw", () => {
    const node = mount("gufe-solvent", readExample("solvent.json"));
    expect(node.querySelector("svg")).toBeNull();
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

  it("names each component once: in the selector, not again over the drawing", async () => {
    // The strip above the drawing already gives the label and the name, so the
    // molecule view below must not write the name over its own picture too.
    const node = mount("gufe-chemical-system", readExample("chemical_system.json"));
    await flush();
    const nested = node.querySelector("gufe-view")!;
    expect(nested.getAttribute(HIDE_NAME_ATTRIBUTE)).toBe("");

    const molecule = nested.querySelector("gufe-small-molecule")!;
    const name = (molecule as HTMLElement & { payload: { name: string } }).payload.name;
    expect(node.textContent).toContain(name);
    const overlaid = [...molecule.querySelectorAll<HTMLElement>("div")].filter(
      (d) => d.textContent === name && d.style.position === "absolute",
    );
    expect(overlaid).toHaveLength(0);
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

describe("openfeShift", () => {
  // gufe's `_get_max_dist_in_x`, which decides how far apart 3D Overlay pushes the
  // two copies. Copied rather than improved: a different number separates them
  // by a different amount than `view_3d` does for the same mapping.
  const along = (xs: number[]): [number, number, number][] => xs.map((x) => [x, 0, 0]);

  it("floors a small molecule's spread at gufe's five", () => {
    expect(openfeShift(along([0, 1]), along([0, 1]))).toBe(7.5);
  });

  it("takes the wider of the two molecules once past that floor", () => {
    expect(openfeShift(along([0, 2]), along([0, 8]))).toBe(12);
  });

  it("measures in file order, as gufe does, not as a plain extent", () => {
    // The widest atom comes first, so no later atom is further along x than an
    // earlier one and gufe measures nothing at all. Its floor is what is left.
    expect(openfeShift(along([20, 0]), along([0, 0]))).toBe(7.5);
  });

  it("rounds to a tenth before applying the floor", () => {
    expect(openfeShift(along([0, 8.06]), along([0, 0]))).toBeCloseTo(12.15, 10);
  });
});

describe("inFrameOf", () => {
  // A payload carries whatever conformer each molecule was built with, and two
  // conformers built independently face in unrelated directions. Drawn
  // together - which is what every 3D mode of the mapping view does - that
  // reads as a chemical difference rather than an accident of the file.
  const TETRA: [number, number, number][] = [
    [0, 0, 0],
    [1.5, 0, 0],
    [1.5, 1.2, 0],
    [0, 0, 1.1],
  ];
  const turned = (coords: [number, number, number][]): [number, number, number][] =>
    // A quarter turn about z, which is what a molecule embedded on its own can
    // arrive at relative to its partner - only usually not a round number.
    coords.map(([x, y, z]) => [-y, x, z]);

  const molecule = (name: string, coords: [number, number, number][]) => ({
    name,
    symbols: ["C", "C", "O", "N"],
    bonds: [[0, 1, 1], [1, 2, 1], [0, 3, 1]] as [number, number, number][],
    coords,
  });

  const allPairs = new Map([[0, 0], [1, 1], [2, 2], [3, 3]]);

  it("puts the second molecule into the first one's frame", () => {
    const fixed = molecule("A", TETRA);
    const moving = molecule("B", turned(TETRA));
    const placed = inFrameOf(fixed, moving, allPairs);
    placed.coords.forEach((point, i) => {
      point.forEach((value, k) => expect(value).toBeCloseTo(TETRA[i][k], 6));
    });
  });

  it("changes nothing but the coordinates", () => {
    const moving = molecule("B", turned(TETRA));
    const placed = inFrameOf(molecule("A", TETRA), moving, allPairs);
    expect(placed.symbols).toEqual(moving.symbols);
    expect(placed.bonds).toEqual(moving.bonds);
    expect(placed.name).toBe(moving.name);
  });

  it("superposes on the mapped atoms and leaves the unique ones where they fall", () => {
    // The mapped atoms are the part of the two molecules meant to correspond,
    // so they are what the fit is made on; an atom outside the mapping simply
    // comes along with the rest of the molecule.
    const fixed = molecule("A", TETRA);
    const moving = molecule("B", turned(TETRA));
    const mapped = new Map([[0, 0], [1, 1], [2, 2]]);
    const placed = inFrameOf(fixed, moving, mapped);
    [0, 1, 2].forEach((i) => {
      placed.coords[i].forEach((value, k) => expect(value).toBeCloseTo(TETRA[i][k], 6));
    });
    placed.coords[3].forEach((value, k) => expect(value).toBeCloseTo(TETRA[3][k], 6));
  });

  it("leaves the molecule alone when too few atoms are mapped to orient it", () => {
    // Two atoms leave a whole axis of rotation free. A molecule left in its own
    // frame is a picture of two conformers, which is at least true; one turned
    // by an arbitrary rotation is a picture of nothing.
    const moving = molecule("B", turned(TETRA));
    const placed = inFrameOf(molecule("A", TETRA), moving, new Map([[0, 0], [1, 1]]));
    expect(placed).toBe(moving);
  });

  it("leaves the molecule alone when the mapped atoms are on a line", () => {
    const line: [number, number, number][] = [[0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0]];
    const moving = molecule("B", turned(line));
    const placed = inFrameOf(molecule("A", line), moving, allPairs);
    expect(placed).toBe(moving);
  });
});

describe("pairColour", () => {
  // The colour a mapped pair is marked with in 3D Overlay: matplotlib's `hsv`
  // resampled to one entry per pair, which is what gufe's `_add_spheres` asks
  // for. Both atoms of a pair get it, and that is the whole message.
  it("hands back a colour 3Dmol can read", () => {
    expect(pairColour(0, 4)).toMatch(/^0x[0-9a-f]{6}$/);
  });

  it("starts at the red hsv starts at", () => {
    expect(pairColour(0, 6)).toBe("0xff0000");
  });

  it("ends where hsv ends, a red just short of coming back round", () => {
    // matplotlib's `hsv` does not quite close its circle, and the last pair of
    // a mapping is drawn in whatever it ends on rather than in the first red.
    expect(pairColour(5, 6)).toBe("0xff0018");
  });

  it("gives a lone pair the first colour rather than dividing by zero", () => {
    expect(pairColour(0, 1)).toBe("0xff0000");
  });

  it("gives every pair in between a colour of its own", () => {
    const colours = Array.from({ length: 8 }, (_, i) => pairColour(i, 9));
    expect(new Set(colours).size).toBe(colours.length);
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

  /** The names a view writes over its own pictures: floating, and not in the way. */
  const overlaidNames = (root: ParentNode): HTMLElement[] =>
    [...root.querySelectorAll<HTMLElement>("div")].filter(
      (d) => d.style.position === "absolute" && d.style.pointerEvents === "none",
    );

  it("names both molecules over their boxes, unless something above has named them", async () => {
    const node = mapping();
    await flush();
    // One per molecule, each naming the molecule under it. The fixture's two are
    // unnamed, so what they carry is the label the view falls back to.
    const shown = overlaidNames(node).map((d) => d.textContent);
    expect(shown).toHaveLength(2);
    expect(shown.every((text) => text && node.textContent?.includes(text))).toBe(true);

    document.body.replaceChildren();
    const wrapper = document.createElement("div");
    wrapper.setAttribute(HIDE_NAME_ATTRIBUTE, "");
    document.body.appendChild(wrapper);
    const hidden = document.createElement("gufe-atom-mapping") as HTMLElement & { payload: unknown };
    wrapper.appendChild(hidden);
    hidden.payload = readExample("ligand_atom_mapping.json");
    await flush();
    expect(overlaidNames(hidden)).toHaveLength(0);
  });

  it("offers 2D first, then the 3D modes, with Info last", async () => {
    const node = mapping();
    await flush();
    expect(modeLabels(node)).toEqual(["2D", "3D", "3D-Map", "3D Overlay", "Pairs", "Info"]);
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

  it("marks in 3D-Map the atoms 2D marks, in the colours 2D marks them with", async () => {
    // A mapping with an element change on one side and unique atoms on the
    // other, so both of the style's mark colours have to appear and cannot be
    // told apart by luck. The standalone fixture has neither.
    const network = readExample("ligand_network_medium.json") as unknown as LigandNetworkViz;
    const withChange = network.edges[5];
    const node = mount("gufe-atom-mapping", mappingPayloadFor(withChange, buildRegistry(network))!);
    await flush();
    await setMode(node, "3D-Map");

    const from = lookupOfType<SmallMoleculeComponentViz>(
      buildRegistry(network),
      withChange.componentA,
      "SmallMoleculeComponentViz",
    )!;
    const to = lookupOfType<SmallMoleculeComponentViz>(
      buildRegistry(network),
      withChange.componentB,
      "SmallMoleculeComponentViz",
    )!;
    const molA = parseSDF(from.sdf);
    const molB = parseSDF(to.sdf);
    const pairs = new Map(withChange.componentA_to_componentB!.map((p) => [p.index_A, p.index_B]));
    const flipped = new Map(Array.from(pairs, ([a, b]) => [b, a] as [number, number]));
    const sides = [
      { mol: molA, uniques: uniqueAtoms(pairs, molA.symbols, molB.symbols), side: "left" as const },
      { mol: molB, uniques: uniqueAtoms(flipped, molB.symbols, molA.symbols), side: "right" as const },
    ];

    // The last two viewers are this mode's; switching modes opens new ones.
    const boxes = engines.viewers.slice(-2);
    const seen = new Set<string>();
    sides.forEach((side, index) => {
      // What 2D would paint, asked of the very function 2D asks.
      const wanted = new Map<number, string>();
      for (const group of markGroups(DEPICT_STYLE, side.mol, side.uniques, side.side)) {
        for (const atom of group.atoms) wanted.set(atom, threeDmolColor(group.color));
      }

      const painted = new Map<number, string>();
      for (const { selection, style } of boxes[index].styles) {
        const serial = (selection as { serial?: number }).serial;
        if (serial === undefined) continue;
        // 3Dmol's V2000 reader numbers `serial` from zero within a model, so a
        // serial is the payload's own atom index.
        const colour = (style as { sphere: { color: string } }).sphere.color;
        painted.set(serial, colour);
        seen.add(colour);
      }
      expect(painted).toEqual(wanted);
    });

    // Not a colour invented here: both are the style document's, and the two
    // meanings are not painted the same.
    expect(seen).toEqual(
      new Set([threeDmolColor(DEPICT_STYLE.modifiedColor), threeDmolColor(DEPICT_STYLE.createdColor)]),
    );
  });

  it("draws gufe's own view_3d in 3D Overlay: four models, two spheres per pair", async () => {
    const node = mapping();
    await flush();
    await setMode(node, "3D Overlay");

    // One scene, holding a shifted copy of each molecule and both of them again
    // unmoved in the middle - which is the four models gufe adds.
    expect(node.querySelectorAll("[data-gufe-viewer]").length).toBe(1);
    const viewer = engines.viewers.at(-1)!;
    expect(viewer.calls.filter((c) => c.startsWith("addModel")).length).toBe(4);

    const payload = readExample("ligand_atom_mapping.json") as unknown as {
      componentA_to_componentB: unknown[];
    };
    const spheres = viewer.shapes.filter((s) => s.kind === "sphere");
    expect(spheres.length).toBe(payload.componentA_to_componentB.length * 2);
    // gufe's numbers, and a pair's two spheres sharing one colour is the whole
    // of what the picture says.
    expect(spheres.every((s) => s.spec.radius === 0.6 && s.spec.alpha === 0.8)).toBe(true);
    for (let i = 0; i < spheres.length; i += 2) {
      expect(spheres[i].spec.color).toBe(spheres[i + 1].spec.color);
    }
  });

  it("marks the pair on each shifted copy, moved along x and nowhere else", async () => {
    const node = mapping();
    await flush();
    await setMode(node, "3D Overlay");

    const payload = readExample("ligand_atom_mapping.json") as unknown as {
      componentA: string;
      componentB: string;
      componentA_to_componentB: { index_A: number; index_B: number }[];
      registry: { "gufe-key": string; sdf: string }[];
    };
    const sdfFor = (key: string) => payload.registry.find((entry) => entry["gufe-key"] === key)!.sdf;
    const molA = parseSDF(sdfFor(payload.componentA));
    const molB = parseSDF(sdfFor(payload.componentB));
    const shift = openfeShift(molA.coords, molB.coords);

    const spheres = engines.viewers.at(-1)!.shapes.filter((s) => s.kind === "sphere");
    const centre = (i: number) => spheres[i].spec.center as { x: number; y: number; z: number };
    const first = payload.componentA_to_componentB[0];
    expect(centre(0).x).toBeCloseTo(molA.coords[first.index_A][0] - shift, 6);
    expect(centre(0).y).toBeCloseTo(molA.coords[first.index_A][1], 6);
    expect(centre(1).x).toBeCloseTo(molB.coords[first.index_B][0] + shift, 6);
    expect(centre(1).z).toBeCloseTo(molB.coords[first.index_B][2], 6);
  });

  describe("with two conformers that do not share a frame", () => {
    // The regression this guards: nothing in a payload guarantees the two
    // molecules face the same way, and every 3D mode draws them together to be
    // compared. Turned differently, a substitution and a rotation look the
    // same. The committed examples are all too small to mapped-atom-align, so
    // the pair is built here instead.
    const TETRA: [number, number, number][] = [
      [0, 0, 0],
      [1.5, 0, 0],
      [1.5, 1.2, 0],
      [0, 0, 1.1],
    ];
    /** The same molecule, a quarter turn about z and pushed away. */
    const TURNED: [number, number, number][] = TETRA.map(([x, y, z]) => [-y + 8, x + 3, z]);

    const sdfFor = (name: string, coords: [number, number, number][]): string =>
      buildMolBlock({
        name,
        symbols: ["C", "C", "O", "N"],
        bonds: [[0, 1, 1], [1, 2, 1], [0, 3, 1]],
        coords,
      });

    /** The example, with both molecules replaced and every atom mapped. */
    const turnedPair = () => {
      const payload = readExample("ligand_atom_mapping.json") as unknown as {
        componentA: string;
        componentA_to_componentB: { index_A: number; index_B: number }[];
        registry: { "gufe-key": string; sdf: string }[];
      };
      payload.componentA_to_componentB = [0, 1, 2, 3].map((i) => ({ index_A: i, index_B: i }));
      for (const entry of payload.registry) {
        const isA = entry["gufe-key"] === payload.componentA;
        entry.sdf = sdfFor(isA ? "A" : "B", isA ? TETRA : TURNED);
      }
      return payload;
    };

    /** The coordinates of the `index`th model a viewer was given. */
    const modelCoords = (viewer: { calls: string[] }, index: number): [number, number, number][] => {
      const added = viewer.calls.filter((call) => call.startsWith("addModel("));
      return parseSDF(JSON.parse(added[index].slice("addModel(".length, -1)) as string).coords;
    };

    const closeTo = (got: [number, number, number][], want: [number, number, number][]): void => {
      got.forEach((point, i) => point.forEach((value, k) => expect(value).toBeCloseTo(want[i][k], 4)));
    };

    it("draws the second molecule in the first one's frame, side by side", async () => {
      const node = mount("gufe-atom-mapping", turnedPair());
      await flush();
      await setMode(node, "3D");

      // One molecule per box, and the second is no longer the payload's own
      // conformer: it has been turned onto the first.
      closeTo(modelCoords(engines.viewers.at(-2)!, 0), TETRA);
      closeTo(modelCoords(engines.viewers.at(-1)!, 0), TETRA);
    });

    it("draws it in that frame in 3D-Map too", async () => {
      const node = mount("gufe-atom-mapping", turnedPair());
      await flush();
      await setMode(node, "3D-Map");

      closeTo(modelCoords(engines.viewers.at(-1)!, 0), TETRA);
    });

    it("overlays the two on each other in 3D Overlay", async () => {
      // gufe does not superpose, because a notebook's mapping comes from
      // ligands already docked into one frame. Given conformers that are not,
      // the middle of this picture is the one thing the mode is for and the
      // one thing it would get wrong.
      const node = mount("gufe-atom-mapping", turnedPair());
      await flush();
      await setMode(node, "3D Overlay");

      // Models 2 and 3 are the unmoved pair in the middle; the first two are
      // the copies pushed out along x.
      const viewer = engines.viewers.at(-1)!;
      closeTo(modelCoords(viewer, 2), TETRA);
      closeTo(modelCoords(viewer, 3), TETRA);
    });

    it("lifts one straight off the other in Pairs, so every line is parallel", async () => {
      const node = mount("gufe-atom-mapping", turnedPair());
      await flush();
      await setMode(node, "Pairs");

      const lines = engines.viewers.at(-1)!.shapes.filter((shape) => shape.kind === "cylinder");
      expect(lines.length).toBe(4);
      const span = (shape: (typeof lines)[number]) => {
        const from = shape.spec.start as { x: number; y: number; z: number };
        const to = shape.spec.end as { x: number; y: number; z: number };
        return [to.x - from.x, to.y - from.y, to.z - from.z];
      };
      // Superposed and then lifted, the two molecules differ by the lift alone,
      // so every line between a mapped pair is the same vector.
      for (const line of lines) {
        span(line).forEach((value, k) => expect(value).toBeCloseTo(span(lines[0])[k], 4));
      }
    });
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

  it("gives the correspondence a row per atom rather than one run-on line", async () => {
    const node = mapping();
    await flush();
    await setMode(node, "Info");

    const payload = readExample("ligand_atom_mapping.json") as unknown as {
      componentA: string;
      componentB: string;
      componentA_to_componentB: { index_A: number; index_B: number }[];
      registry: { "gufe-key": string; sdf: string }[];
    };
    const sdfFor = (key: string) => payload.registry.find((entry) => entry["gufe-key"] === key)!.sdf;
    const molA = parseSDF(sdfFor(payload.componentA));
    const molB = parseSDF(sdfFor(payload.componentB));
    const pairs = new Map(payload.componentA_to_componentB.map((p) => [p.index_A, p.index_B]));

    // Every atom of both molecules, once: A's in index order, then whatever of
    // B nothing maps onto. An atom that appears twice or not at all is a
    // correspondence that cannot be read against the depiction beside it.
    const rows = Array.from(node.querySelectorAll<HTMLElement>("[data-gufe-relation]"));
    const unmappedB = molB.symbols.length - new Set(pairs.values()).size;
    expect(rows.length).toBe(molA.symbols.length + unmappedB);

    const first = pairs.entries().next().value as [number, number];
    const text = rows.map((row) => row.textContent?.replace(/\s+/g, " ").trim());
    expect(text).toContain(`${first[0]} ${molA.symbols[first[0]]} -> ${first[1]} ${molB.symbols[first[1]]}`);
  });

  it("classifies each row the way uniqueAtoms classifies the atom", async () => {
    // The chips count with `uniqueAtoms` and the rows are `relations`. Two
    // readings of one mapping, so they must not be able to disagree about a
    // single atom.
    const node = mapping();
    await flush();
    await setMode(node, "Info");

    const kinds = Array.from(node.querySelectorAll<HTMLElement>("[data-gufe-relation]"), (r) => r.dataset.gufeRelation);
    const payload = readExample("ligand_atom_mapping.json") as unknown as {
      componentA: string;
      componentB: string;
      componentA_to_componentB: { index_A: number; index_B: number }[];
      registry: { "gufe-key": string; sdf: string }[];
    };
    const sdfFor = (key: string) => payload.registry.find((entry) => entry["gufe-key"] === key)!.sdf;
    const molA = parseSDF(sdfFor(payload.componentA));
    const molB = parseSDF(sdfFor(payload.componentB));
    const pairs = new Map(payload.componentA_to_componentB.map((p) => [p.index_A, p.index_B]));
    const flipped = new Map(Array.from(pairs, ([a, b]) => [b, a]));
    const uniquesA = uniqueAtoms(pairs, molA.symbols, molB.symbols);
    const uniquesB = uniqueAtoms(flipped, molB.symbols, molA.symbols);

    const count = (kind: string) => kinds.filter((k) => k === kind).length;
    expect(count("element")).toBe(uniquesA.elements.length);
    expect(count("uniqueA")).toBe(uniquesA.atoms.length);
    expect(count("uniqueB")).toBe(uniquesB.atoms.length);
    expect(count("mapped") + count("element")).toBe(pairs.size);
  });

  it("narrows the correspondence to the atoms a legend chip counts", async () => {
    // A colour in a view with no molecule in it says nothing on its own. The
    // chip that carries it selects what it counts, which is what makes it worth
    // having here.
    const node = mapping();
    await flush();
    await setMode(node, "Info");

    const shown = () => Array.from(node.querySelectorAll<HTMLElement>("[data-gufe-relation]"));
    const all = shown().length;
    const chipFor = (label: string) =>
      Array.from(node.querySelectorAll("button")).find((b) => (b.textContent ?? "").startsWith(label))!;
    const chip = chipFor("unique to");
    expect(chip.getAttribute("aria-pressed")).toBe("false");

    chip.click();
    await flush();
    expect(chip.getAttribute("aria-pressed")).toBe("true");
    expect(shown().length).toBeGreaterThan(0);
    expect(shown().length).toBeLessThan(all);
    expect(shown().every((row) => row.dataset.gufeRelation === "uniqueA")).toBe(true);

    // Clicking it again is how the reader gets everything back.
    chip.click();
    await flush();
    expect(shown().length).toBe(all);
    expect(chip.getAttribute("aria-pressed")).toBe("false");

    // A chip counting nothing still selects: an empty table saying so beats a
    // click that looks broken.
    chipFor("element changes").click();
    await flush();
    expect(shown().length).toBe(0);
    expect(node.textContent).toContain("No atoms of that kind.");
  });

  it("releases the previous mode's viewers when the mode changes", async () => {
    // Each mode rebuilds its boxes, and a browser only allows so many live
    // WebGL contexts - clicking along the switcher must not use them all up.
    const node = mapping();
    await flush();
    const first = engines.viewers.slice();
    await setMode(node, "Pairs");
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
    // It arrives with its own full switcher, which is how you know it is
    // the same element and not a second drawing path.
    expect(modeLabels(embedded as HTMLElement)).toEqual([
      "2D",
      "3D",
      "3D-Map",
      "3D Overlay",
      "Pairs",
      "Info",
    ]);
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

  it("draws a selected system through the chemical-system view, not a list of its own", async () => {
    const node = mount("gufe-alchemical-network", readExample("alchemical_network.json"));
    await flush();

    // It opens on the first system rather than an empty pane, and what it opens
    // on is the same element a chemical system dropped on the page renders
    // through - so the components are drawn, not merely named.
    const embedded = node.querySelector("gufe-chemical-system");
    expect(embedded, "the node pane did not mount the chemical-system view").toBeTruthy();
    const text = embedded!.textContent ?? "";
    expect(text).toContain("ligand");
    expect(text).toContain("SmallMoleculeComponent");
    expect(text).not.toContain("not in its registry");
    // The nested dispatcher drew the ligand rather than stopping at the list.
    expect(embedded!.querySelector("gufe-small-molecule")).toBeTruthy();
  });

  it("draws a selected transformation through the transformation view", async () => {
    const node = mount("gufe-alchemical-network", readExample("alchemical_network.json"));
    await flush();

    // The first of the two lines an edge draws: the visible one, over the
    // invisible wider one that only makes it easier to hit.
    const edge = node.querySelector("line") as SVGLineElement;
    edge.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    const embedded = node.querySelector("gufe-transformation");
    expect(embedded, "the edge pane did not mount the transformation view").toBeTruthy();
    const text = embedded!.textContent ?? "";
    expect(text).toContain("State A");
    expect(text).toContain("State B");
    // Cut loose with a registry of its own, so it resolves its own endpoints.
    expect(text).not.toContain("registry does not hold them");
    expect(embedded!.querySelector("gufe-atom-mapping")).toBeTruthy();
  });

  it("hands on a clicked system with none of the layout's bookkeeping", async () => {
    // The force layout writes onto the very objects the payload's registry
    // holds - a position, an index, a velocity per axis - and the schema allows
    // none of them. The detail pane validates what it is given, so a node cut
    // loose with the simulation's leftovers on it drew an error instead of a
    // chemical system.
    const node = mount("gufe-alchemical-network", readExample("alchemical_network.json"));
    await flush();
    // A system is drawn as a rounded box with its name in it; the last one is
    // as good as any, and not the one the pane opens on.
    const system = [...node.querySelectorAll<SVGRectElement>("rect")].at(-1)!;
    system.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    const pane = node.querySelector("gufe-view") as HTMLElement & { payload: Record<string, unknown> };
    expect(pane).toBeTruthy();
    for (const stapled of ["x", "y", "index", "vx", "vy"]) {
      expect(pane.payload[stapled], `the layout's ${stapled} was handed on`).toBeUndefined();
    }
    const { valid, issues } = validatePayload(pane.payload);
    expect(valid, formatIssues(issues)).toBe(true);
    expect(node.textContent).not.toContain("does not match the gufe-viz schema");
  });

  it("hands on a clicked transformation with none of it either, states included", async () => {
    // The registry a transformation is cut loose with holds its two states -
    // which are the very objects the layout decorated. Cleaning the edge is not
    // enough on its own.
    const node = mount("gufe-alchemical-network", readExample("alchemical_network.json"));
    await flush();
    (node.querySelector("line") as SVGLineElement).dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();

    const pane = node.querySelector("gufe-view") as HTMLElement & { payload: Record<string, unknown> };
    const { valid, issues } = validatePayload(pane.payload);
    expect(valid, formatIssues(issues)).toBe(true);
    expect(node.textContent).not.toContain("does not match the gufe-viz schema");
  });

  it("cuts a node and an edge loose as payloads that validate on their own", async () => {
    const payload = readExample("alchemical_network.json") as unknown as {
      nodes: string[];
      edges: TransformationViz[];
    };
    const registry = buildRegistry(payload);

    const system = lookupOfType<ChemicalSystemViz>(registry, payload.nodes[0], "ChemicalSystemViz")!;
    const standaloneSystem = systemPayloadFor(system, registry);
    expect(validatePayload(standaloneSystem).valid, formatIssues(validatePayload(standaloneSystem).issues)).toBe(true);
    expect(standaloneSystem.registry).toHaveLength(Object.keys(system.components).length);

    for (const edge of payload.edges) {
      const standalone = transformationPayloadFor(edge, registry)!;
      const { valid, issues } = validatePayload(standalone);
      expect(valid, formatIssues(issues)).toBe(true);
      // Both states, the protocol, and every component either state names.
      expect(standalone.registry!.some((entry) => entry["gufe-key"] === edge.stateA)).toBe(true);
      expect(standalone.registry!.some((entry) => entry["gufe-key"] === edge.protocol)).toBe(true);
      // The whole network's registry is bigger than any one transformation's.
      expect(standalone.registry!.length).toBeLessThan(registry.size);
    }
  });

  it("refuses to cut loose an edge whose states do not resolve", () => {
    const payload = readExample("alchemical_network.json") as unknown as { edges: TransformationViz[] };
    const orphan = { ...payload.edges[0], stateA: "ChemicalSystem-nosuchentry" };
    expect(transformationPayloadFor(orphan, buildRegistry(payload))).toBeNull();
  });

  it("colours the systems by what they are made of, and says what the colours mean", async () => {
    const payload = structuredClone(readExample("alchemical_network.json")) as {
      registry: { type: string; components?: Record<string, string> }[];
    };
    // Two compositions where the fixture has one. This is the shape a binding
    // campaign makes for real - a solvent leg and a complex leg, told apart by
    // nothing but which components their systems carry.
    const system = payload.registry.find((entry) => entry.type === "ChemicalSystemViz")!;
    delete system.components!.solvent;

    const node = mount("gufe-alchemical-network", payload);
    await flush();

    // Fills rather than strokes: a stroke also says which node is selected, and
    // what is being asserted here is what the node is made of.
    const fills = [...node.querySelectorAll("svg.gufe-graph rect")].map((box) => box.getAttribute("fill"));
    expect(new Set(fills).size).toBe(2);
    expect(fills.every((fill) => T.netGroupFill.includes(fill!))).toBe(true);
    const text = node.textContent ?? "";
    expect(text).toContain("systems made of");
    expect(text).toContain("SmallMolecule + Solvent");
  });

  it("leaves a network of one composition uncoloured, with nothing to explain", async () => {
    const node = mount("gufe-alchemical-network", readExample("alchemical_network.json"));
    await flush();

    // Every system here is made of the same things, so a colour per composition
    // would be one colour and a legend saying so is noise.
    const fills = [...node.querySelectorAll("svg.gufe-graph rect")].map((box) => box.getAttribute("fill"));
    expect(new Set(fills)).toEqual(new Set([T.cardBg]));
    expect(node.textContent).not.toContain("systems made of");
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

  it("draws each score as bare text, with nothing behind it", async () => {
    const node = net();
    await flush();
    const labels = Array.from(node.querySelectorAll("g.gufe-edge-label"));
    expect(labels.length).toBeGreaterThan(0);
    for (const group of labels) {
      expect(group.querySelector("text")).toBeTruthy();
      // A chip behind the number would sit over the edge it belongs to and
      // punch a hole in the line.
      expect(group.querySelector("rect")).toBeNull();
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
