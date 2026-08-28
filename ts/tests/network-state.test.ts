/**
 * Saving a network view and putting it back.
 *
 * The half worth testing is the restore, and specifically that it *overrides*
 * rather than merely runs. A network laid out again lands somewhere plausible on
 * its own, so a restore that silently did nothing would look almost right - the
 * ligands would be arranged, the camera would be framed, and only someone who
 * knew where they had left it would notice. Every assertion here is therefore
 * against a state deliberately unlike the one the view opens on.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { VIEW_STATE_GLOBAL } from "../src/shared/element.js";
import type { NetworkViewState } from "../src/views/ligand-network.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";

interface NetworkElement extends HTMLElement {
  payload: unknown;
  viewState(): NetworkViewState;
}

type SeedGlobal = Record<string, Record<string, unknown> | undefined>;

async function mountNetwork(): Promise<NetworkElement> {
  const node = document.createElement("gufe-ligand-network") as NetworkElement;
  document.body.appendChild(node);
  node.payload = readExample("ligand_network_named.json");
  await flush();
  return node;
}

/** Leave state for the next view to pick up, the way an exported frame does. */
function seed(state: NetworkViewState): void {
  (globalThis as unknown as SeedGlobal)[VIEW_STATE_GLOBAL] = { "ligand-network": state };
}

const edgeHits = (node: HTMLElement): SVGLineElement[] =>
  Array.from(node.querySelectorAll<SVGLineElement>("line[stroke=transparent]"));

describe("a ligand network's view state", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    delete (globalThis as unknown as SeedGlobal)[VIEW_STATE_GLOBAL];
    document.body.replaceChildren();
  });

  it("reports where every ligand is, where the camera is, and what is open", async () => {
    const node = await mountNetwork();
    const state = node.viewState();
    expect(state.nodes).toHaveLength(3);
    expect(state.nodes.every(([x, y]) => Number.isFinite(x) && Number.isFinite(y))).toBe(true);
    expect(state.scale).toBeGreaterThan(0);
    expect(state.selected).toBe(0);
  });

  it("opens on the state it is handed, not on its own layout", async () => {
    const opened = (await mountNetwork()).viewState();
    document.body.replaceChildren();

    // Positions nothing would lay out, a zoom nothing would frame to, and the
    // second edge rather than the first.
    const wanted: NetworkViewState = {
      nodes: [
        [11, 12],
        [21, 22],
        [31, 32],
      ],
      scale: 0.375,
      tx: -140.5,
      ty: 96.25,
      selected: 1,
    };
    expect(wanted.nodes).not.toEqual(opened.nodes);

    seed(wanted);
    const restored = (await mountNetwork()).viewState();
    expect(restored).toEqual(wanted);
  });

  it("draws the ligands where the state says, not only reports them there", async () => {
    seed({
      nodes: [
        [11, 12],
        [21, 22],
        [31, 32],
      ],
      scale: 1,
      tx: 0,
      ty: 0,
      selected: 0,
    });
    const node = await mountNetwork();
    const first = node.querySelector<SVGGElement>("g.gufe-node")!;
    expect(first.getAttribute("transform")).toBe("translate(11,12)");
  });

  it("is one-shot, so a second network is not opened on the first one's camera", async () => {
    const wanted: NetworkViewState = {
      nodes: [
        [11, 12],
        [21, 22],
        [31, 32],
      ],
      scale: 0.375,
      tx: -140.5,
      ty: 96.25,
      selected: 1,
    };
    seed(wanted);
    expect((await mountNetwork()).viewState().scale).toBe(0.375);
    document.body.replaceChildren();
    expect((await mountNetwork()).viewState().scale).not.toBe(0.375);
  });

  it("ignores state that does not match the network on screen", async () => {
    // Positions are matched to the payload by position, so a state from a
    // different network would place every ligand wrongly rather than fail. It is
    // refused whole.
    seed({ nodes: [[1, 1]], scale: 0.375, tx: -140.5, ty: 96.25, selected: 0 });
    const state = (await mountNetwork()).viewState();
    expect(state.nodes).toHaveLength(3);
    expect(state.scale).not.toBe(0.375);
  });

  it("ignores a state whose numbers are not numbers", async () => {
    seed({ nodes: [], scale: "close" as unknown as number, tx: 0, ty: 0, selected: 0 });
    const state = (await mountNetwork()).viewState();
    expect(state.nodes).toHaveLength(3);
  });

  it("keeps the camera when the menu opens, so the saved view is the seen one", async () => {
    // The export lives inside the menu, so a menu that reframed on the way in
    // would guarantee that what is saved is never what was on screen. Changing
    // the layout still reframes: that one is a new picture.
    const node = await mountNetwork();
    const before = node.viewState();
    node.querySelector<HTMLButtonElement>('button[aria-label="Search, filter and select ligands"]')!.click();
    await flush();
    const after = node.viewState();
    expect(after.scale).toBe(before.scale);
    expect(after.tx).toBe(before.tx);
    expect(after.ty).toBe(before.ty);
  });

  it("keeps the reader's selection, so what is saved is what is on screen", async () => {
    const node = await mountNetwork();
    edgeHits(node)[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();
    expect(node.viewState().selected).toBe(1);
  });
});
