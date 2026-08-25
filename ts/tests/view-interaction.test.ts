/**
 * That the views actually adopt the shared wheel guard and reset.
 *
 * `interact.test.ts` proves the helpers behave; these prove each view is wired
 * to them, which is the part that silently rots. The properties asserted are
 * the ones a user would notice: scrolling past a view does not zoom it, and
 * there is a way back when the view has been zoomed somewhere useless.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { DEFAULT_ZOOM_BOUNDS } from "../src/shared/interact.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, type SeededEnginesResult } from "./helpers.js";

function mount<T extends HTMLElement>(tag: string, payload: unknown): T {
  const node = document.createElement(tag) as T & { payload: unknown };
  document.body.appendChild(node);
  node.payload = payload;
  return node;
}

function wheel(deltaY: number, init: Partial<WheelEventInit> = {}): WheelEvent {
  return new WheelEvent("wheel", { deltaY, bubbles: true, cancelable: true, ...init });
}

/** jsdom has no `PointerEvent`; the guard only reads the event's type. */
function pointer(type: string): MouseEvent {
  return new MouseEvent(type, { bubbles: true });
}

/** The element the engine renders into, and what the guard listens on. A wheel
 * dispatched at the custom element never reaches it: events bubble up, not down. */
function viewerContainer(node: HTMLElement): HTMLElement {
  const container = node.querySelector<HTMLElement>("[data-gufe-viewer]");
  if (!container) throw new Error("no viewer container in this view");
  return container;
}

function resetButton(node: HTMLElement): HTMLButtonElement | undefined {
  return Array.from(node.querySelectorAll("button")).find(
    (b) => b.getAttribute("aria-label")?.startsWith("Reset"),
  );
}

const VIEWS: [string, string][] = [
  ["gufe-small-molecule", "small_molecule.json"],
  ["gufe-protein", "protein.json"],
];

describe.each(VIEWS)("%s", (tag, fixture) => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("does not zoom when the page is merely scrolled past it", async () => {
    const node = mount(tag, readExample(fixture));
    await flush();
    const viewer = engines.viewers[0];
    const before = viewer.calls.filter((c) => c.startsWith("zoom(")).length;

    viewerContainer(node).dispatchEvent(wheel(120));
    expect(viewer.calls.filter((c) => c.startsWith("zoom(")).length).toBe(before);
  });

  it("zooms once the pointer has engaged the canvas", async () => {
    const node = mount(tag, readExample(fixture));
    await flush();
    const viewer = engines.viewers[0];

    const container = viewerContainer(node);
    container.dispatchEvent(pointer("pointerdown"));
    container.dispatchEvent(wheel(-120));
    expect(viewer.calls.some((c) => c.startsWith("zoom("))).toBe(true);
  });

  it("tells the engine how far out it may zoom, so a drag cannot lose the molecule", async () => {
    mount(tag, readExample(fixture));
    await flush();
    const viewer = engines.viewers[0];
    const opening = viewer.distance();

    expect(viewer.zoomLimits).toEqual({
      lower: opening / DEFAULT_ZOOM_BOUNDS.max,
      upper: opening / DEFAULT_ZOOM_BOUNDS.min,
    });

    // Dragged out well past the bound, the way a trackpad does in one gesture.
    for (let i = 0; i < 50; i++) viewer.dragZoom(0.8);
    expect(viewer.distance()).toBe(opening / DEFAULT_ZOOM_BOUNDS.min);
  });

  it("lets the page scroll again once there is no zooming out left", async () => {
    const node = mount(tag, readExample(fixture));
    await flush();
    const container = viewerContainer(node);
    container.dispatchEvent(pointer("pointerdown"));

    // The wheels that zoom are the view's, and it keeps them.
    const zooming = wheel(240);
    container.dispatchEvent(zooming);
    expect(zooming.defaultPrevented).toBe(true);

    // Kept scrolling in the same gesture, well past the bound.
    for (let i = 0; i < 40; i++) container.dispatchEvent(wheel(240));

    const spent = wheel(240);
    container.dispatchEvent(spent);
    expect(spent.defaultPrevented).toBe(false);
  });

  it("offers a way back to the opening framing", async () => {
    const node = mount(tag, readExample(fixture));
    await flush();
    const viewer = engines.viewers[0];

    const container = viewerContainer(node);
    container.dispatchEvent(pointer("pointerdown"));
    container.dispatchEvent(wheel(-120));
    const button = resetButton(node);
    expect(button).toBeTruthy();

    viewer.calls.length = 0;
    button!.click();
    expect(viewer.calls).toContain("zoomTo");
  });
});

describe("<gufe-ligand-network>", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("does not pan or zoom when the page is merely scrolled past it", async () => {
    const node = mount("gufe-ligand-network", readExample("ligand_network.json"));
    await flush();
    const scene = node.querySelector("svg.gufe-graph > g") as SVGGElement;
    const before = scene.getAttribute("transform");

    node.querySelector<SVGSVGElement>("svg.gufe-graph")!.dispatchEvent(wheel(120));
    expect(scene.getAttribute("transform")).toBe(before);
  });

  it("zooms the graph once the pointer has engaged it", async () => {
    const node = mount("gufe-ligand-network", readExample("ligand_network.json"));
    await flush();
    const root = node.querySelector<SVGSVGElement>("svg.gufe-graph")!;
    const scene = node.querySelector("svg.gufe-graph > g") as SVGGElement;

    root.dispatchEvent(pointer("pointerdown"));
    root.dispatchEvent(wheel(-120));
    expect(scene.getAttribute("transform")).toMatch(/scale\(/);
  });

  /**
   * Reset goes back to the view the graph opened on, which is the framed one
   * rather than the identity transform: a laid-out network is nowhere near the
   * origin, and at 200 ligands it is nowhere near the viewport either.
   */
  it("resets pan and zoom back to the view it opened on", async () => {
    const node = mount("gufe-ligand-network", readExample("ligand_network.json"));
    await flush();
    const root = node.querySelector<SVGSVGElement>("svg.gufe-graph")!;
    const scene = node.querySelector("svg.gufe-graph > g") as SVGGElement;
    const opening = scene.getAttribute("transform");

    root.dispatchEvent(pointer("pointerdown"));
    root.dispatchEvent(wheel(-240));
    expect(scene.getAttribute("transform")).not.toBe(opening);

    resetButton(node)!.click();
    expect(scene.getAttribute("transform")).toBe(opening);
  });
});
