/**
 * The network view at a size nobody has drawn before.
 *
 * The largest committed fixture has 200 ligands. The network that prompted this
 * work has 934, and the question level-of-detail exists to answer is whether the
 * view still draws at all at that size. This builds its network in memory rather
 * than reading the fixture, because the count is the variable under test and a
 * fixture fixes it, and asserts the property that matters: the cost of first
 * paint does not scale with the node count.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";
import { VIEW_STATE_GLOBAL } from "../src/shared/element.js";
import type { LigandNetworkViz, SmallMoleculeComponentViz } from "../src/schema/types.js";

/** A network of `count` ligands, all sharing one real SDF from the fixtures. */
function bigNetwork(count: number): LigandNetworkViz {
  const template = readExample("small_molecule.json") as unknown as SmallMoleculeComponentViz;
  const registry: SmallMoleculeComponentViz[] = [];
  const nodes: string[] = [];
  for (let i = 0; i < count; i++) {
    const key = `SmallMoleculeComponent-synthetic${i}`;
    registry.push({ ...template, "gufe-key": key, name: `lig_${i}` });
    nodes.push(key);
  }

  const edges = [];
  for (let i = 0; i + 1 < count; i++) {
    edges.push({
      type: "LigandAtomMappingViz" as const,
      "gufe-key": `LigandAtomMapping-synthetic${i}`,
      name: `lig_${i} to lig_${i + 1}`,
      componentA: nodes[i],
      componentB: nodes[i + 1],
      componentA_to_componentB: [{ index_A: 0, index_B: 0 }],
      score: (i % 100) / 100,
      annotations: {},
    });
  }

  return {
    type: "LigandNetworkViz",
    "gufe-key": "LigandNetwork-synthetic",
    name: "synthetic",
    registry,
    nodes,
    edges,
  };
}

describe("a large ligand network", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    delete (globalThis as Record<string, unknown>)[VIEW_STATE_GLOBAL];
    document.body.replaceChildren();
  });

  /**
   * Open the next view on a remembered camera, the way a reload does.
   *
   * jsdom has no layout and the d3 stub moves nothing, so every node stays on
   * the seed ring inside the declared 800x600 and the view frames it at full
   * size - the one arrangement in which a network this large is entirely on
   * screen at a zoom that draws structures. A real 934-ligand layout is
   * thousands of units across and frames itself far below that, so this is how
   * the view is handed the zoom it would actually open at, and the spread its
   * nodes would actually have.
   */
  const openAt = (scale: number, count: number, spacing: number): void => {
    (globalThis as Record<string, unknown>)[VIEW_STATE_GLOBAL] = {
      "ligand-network": {
        scale,
        tx: 0,
        ty: 0,
        nodes: Array.from({ length: count }, (_, i) => [i * spacing, 0]),
        selected: -1,
        selectedKind: "edge",
      },
    };
  };

  it("draws every node and edge", async () => {
    const payload = bigNetwork(934);
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = payload;
    await flush();

    expect(node.querySelectorAll("circle.gufe-node-disc").length).toBe(934);
  });

  it("opens with every ligand inside the viewport", async () => {
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = bigNetwork(934);
    await flush();

    const scene = node.querySelector("svg.gufe-graph > g") as SVGGElement;
    const [, tx, ty, scale] = /translate\((-?[\d.]+),(-?[\d.]+)\) scale\(([\d.]+)\)/.exec(
      scene.getAttribute("transform") ?? "",
    )!.map(Number) as unknown as [string, number, number, number];

    // Every node group carries its graph position; the scene transform is what
    // turns those into viewport coordinates. Before framing, a network this size
    // laid itself out thousands of units across and the view opened on an empty
    // canvas with all 934 of them outside it.
    const positions = [...node.querySelectorAll("svg > g > g:last-child > g")].map((group) => {
      const [x, y] = /translate\((-?[\d.]+),(-?[\d.]+)\)/.exec(group.getAttribute("transform") ?? "")!.slice(1);
      return { x: Number(x) * scale + tx, y: Number(y) * scale + ty };
    });

    expect(positions.length).toBe(934);
    // jsdom reports no layout, so the view falls back to its declared size.
    for (const { x, y } of positions) {
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThanOrEqual(800);
      expect(y).toBeGreaterThanOrEqual(0);
      expect(y).toBeLessThanOrEqual(600);
    }
  });

  it("does not pay for a depiction per node before the first frame", async () => {
    const payload = bigNetwork(934);
    openAt(0.3, 934, 4000);
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = payload;
    await flush();

    // The whole point of level-of-detail. Before it, this was 934 RDKit calls
    // and 934 SVG subtrees, all up front. What remains is the detail pane's two.
    expect(node.querySelector("svg.gufe-graph")!.getAttribute("data-detail")).toBe("shape");
    expect(engines.depicted.length).toBeLessThan(10);
  });

  it("does not draw a structure the zoom has already left behind", async () => {
    // RDKit answers a frame or two after it is asked, and the view can be
    // somewhere else by then. This pans to bring a fresh row of nodes on screen,
    // which is what asks for their structures, and zooms out to bare shapes
    // before the answer arrives - all in one tick, so the reply lands last. The
    // structures used to be drawn anyway, each on its white disc, over a canvas
    // that had zoomed out of them.
    openAt(1, 934, 80);
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = bigNetwork(934);
    await flush();

    const root = node.querySelector<SVGSVGElement>("svg.gufe-graph")!;
    root.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true, clientX: 700, clientY: 300 }));
    root.dispatchEvent(new MouseEvent("pointermove", { bubbles: true, clientX: 100, clientY: 300 }));
    root.dispatchEvent(new MouseEvent("pointerup", { bubbles: true, clientX: 100, clientY: 300 }));
    root.dispatchEvent(new WheelEvent("wheel", { deltaY: 900, bubbles: true, cancelable: true }));
    await flush();

    expect(root.getAttribute("data-detail")).toBe("shape");
    const shown = [...node.querySelectorAll("g.gufe-node-depiction")].filter(
      (g) => g.getAttribute("display") !== "none",
    );
    expect(shown).toHaveLength(0);
    const plates = [...node.querySelectorAll("circle.gufe-node-plate")].filter(
      (c) => c.getAttribute("display") !== "none",
    );
    expect(plates).toHaveLength(0);
  });

  it("builds a structure only for the nodes on screen", async () => {
    // The other half of the same guarantee: at a zoom that does draw
    // structures, what it costs is set by how many nodes are in the viewport,
    // not by how many the network has. The camera below puts the 934 nodes 80
    // units apart along a line, so a viewport 800 wide holds a dozen or so of
    // them and the rest are culled.
    openAt(1, 934, 80);
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = bigNetwork(934);
    await flush();

    expect(node.querySelector("svg.gufe-graph")!.getAttribute("data-detail")).toBe("structures");
    expect(engines.depicted.length).toBeGreaterThan(0);
    expect(engines.depicted.length).toBeLessThan(100);
  });
});
