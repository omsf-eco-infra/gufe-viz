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
    document.body.replaceChildren();
  });

  it("draws every node and edge", async () => {
    const payload = bigNetwork(934);
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = payload;
    await flush();

    expect(node.querySelectorAll("circle").length).toBe(934);
  });

  it("opens with every ligand inside the viewport", async () => {
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = bigNetwork(934);
    await flush();

    const scene = node.querySelector("svg > g") as SVGGElement;
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
    const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = payload;
    await flush();

    // The whole point of level-of-detail. Before it, this was 934 RDKit calls
    // and 934 SVG subtrees, all up front. What remains is the detail pane's two.
    expect(engines.depicted.length).toBeLessThan(10);
  });
});
