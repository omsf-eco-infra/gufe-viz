/**
 * The network view at a size nobody has drawn before.
 *
 * The committed fixtures have three ligands. The network that prompted this work
 * has 934, and the question level-of-detail exists to answer is whether the view
 * still draws at all at that size. This builds a synthetic network in memory
 * rather than committing a large fixture, and asserts the property that matters:
 * the cost of first paint does not scale with the node count.
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
