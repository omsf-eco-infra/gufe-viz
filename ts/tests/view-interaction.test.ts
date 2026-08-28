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

/** jsdom has no `PointerEvent`; the guard and the camera only read the type
 * and, for a pan, where the pointer is. */
function pointer(type: string, at: { clientX?: number; clientY?: number } = {}): MouseEvent {
  return new MouseEvent(type, { bubbles: true, ...at });
}

/** Press, move and release across a canvas - the gesture that pans it. */
function dragAcross(root: SVGSVGElement, from: number, to: number): void {
  root.dispatchEvent(pointer("pointerdown", { clientX: from, clientY: from }));
  root.dispatchEvent(pointer("pointermove", { clientX: to, clientY: to }));
  root.dispatchEvent(pointer("pointerup", { clientX: to, clientY: to }));
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
  // Every 3D mode of the mapping view goes through one place, so covering the
  // mode it opens on covers the rest. It is also the view embedded in the
  // ligand network's edge panel, where a canvas that swallowed the wheel and
  // did nothing with it was what sent this here.
  ["gufe-atom-mapping", "ligand_atom_mapping.json"],
];

/**
 * The views that also carry a reset, which is not all of them.
 *
 * The mapping and small molecule views are the exceptions, both by request:
 * each switcher is already a row of modes wide and a reset beside them was one
 * button too many. Wheeling back out is the way back there, and the zoom is
 * bounded either way, so there is nowhere unrecoverable to get to.
 */
const WITHOUT_RESET = new Set(["gufe-atom-mapping", "gufe-small-molecule"]);
const WITH_RESET: [string, string][] = VIEWS.filter(([tag]) => !WITHOUT_RESET.has(tag));

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

});

describe.each(WITH_RESET)("%s", (tag, fixture) => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
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

/**
 * The alchemical network moves on the same camera as the ligand one.
 *
 * It arrived without any way around the canvas at all, which on a network of a
 * few hundred systems means a picture that is framed and then fixed. These are
 * the properties that say it is wired to `sceneCamera` rather than drawing its
 * own one-off transform: a wheel that is left to the page until the pointer is
 * on the graph, a drag that moves it, and a reset that undoes both.
 */
describe("<gufe-alchemical-network>", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  const graph = async () => {
    const node = mount("gufe-alchemical-network", readExample("alchemical_network.json"));
    await flush();
    return {
      node,
      root: node.querySelector<SVGSVGElement>("svg.gufe-graph")!,
      scene: node.querySelector("svg.gufe-graph > g") as SVGGElement,
    };
  };

  it("does not pan or zoom when the page is merely scrolled past it", async () => {
    const { root, scene } = await graph();
    const before = scene.getAttribute("transform");

    root.dispatchEvent(wheel(120));
    expect(scene.getAttribute("transform")).toBe(before);
  });

  it("zooms the graph once the pointer has engaged it", async () => {
    const { root, scene } = await graph();
    const before = scene.getAttribute("transform");

    root.dispatchEvent(pointer("pointerdown"));
    root.dispatchEvent(wheel(-120));
    expect(scene.getAttribute("transform")).not.toBe(before);
    expect(scene.getAttribute("transform")).toMatch(/scale\(/);
  });

  it("pans the graph when it is dragged", async () => {
    const { root, scene } = await graph();
    const before = scene.getAttribute("transform");

    dragAcross(root, 100, 160);
    expect(scene.getAttribute("transform")).not.toBe(before);
  });

  it("resets pan and zoom back to the view it opened on", async () => {
    const { node, root, scene } = await graph();
    const opening = scene.getAttribute("transform");

    root.dispatchEvent(pointer("pointerdown"));
    root.dispatchEvent(wheel(-240));
    dragAcross(root, 40, 220);
    expect(scene.getAttribute("transform")).not.toBe(opening);

    resetButton(node)!.click();
    expect(scene.getAttribute("transform")).toBe(opening);
  });

  /**
   * A draw waits on the force layout, so two of them overlap whenever the pane
   * is resized twice in quick succession - which dragging the divider does.
   * Both used to finish, and both used to append a graph: the network was drawn
   * two and three times over, stacked down the canvas with the top copy hiding
   * the rest, and the copies below it were the ones that looked like a network
   * overflowing its box.
   */
  it("draws one graph however many redraws overlap", async () => {
    const { node } = await graph();
    const handle = node.querySelector<HTMLElement>("[role=separator]")!;
    handle.setPointerCapture = () => {};
    handle.releasePointerCapture = () => {};
    const row = handle.parentElement!;
    row.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 1000, height: 600, right: 1000, bottom: 600, x: 0, y: 0, toJSON: () => ({}) }) as DOMRect;

    const drag = (to: number) => {
      handle.dispatchEvent(pointer("pointerdown", { clientX: 500 }));
      handle.dispatchEvent(pointer("pointermove", { clientX: to }));
      handle.dispatchEvent(pointer("pointerup", { clientX: to }));
    };
    // Two redraws in flight at once, neither awaited.
    drag(400);
    drag(600);
    await flush();

    expect(node.querySelectorAll("svg.gufe-graph")).toHaveLength(1);
  });

  /**
   * A pan starts on whatever the pointer went down on, and on this graph that
   * is usually a box or an edge. The click at the end of it is the browser's,
   * not a selection.
   */
  it("does not open what the pointer merely panned across", async () => {
    const { node, root } = await graph();
    // It opens on the first system, so the pane is showing one.
    expect(node.querySelector("gufe-chemical-system")).toBeTruthy();

    const line = node.querySelector<SVGLineElement>("svg.gufe-graph line")!;
    line.dispatchEvent(pointer("pointerdown", { clientX: 100, clientY: 100 }));
    root.dispatchEvent(pointer("pointermove", { clientX: 180, clientY: 140 }));
    root.dispatchEvent(pointer("pointerup", { clientX: 180, clientY: 140 }));
    line.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();
    expect(node.querySelector("gufe-transformation")).toBeNull();

    // The same click, without the pan before it, does open the edge.
    line.dispatchEvent(pointer("pointerdown", { clientX: 180, clientY: 140 }));
    line.dispatchEvent(pointer("pointerup", { clientX: 180, clientY: 140 }));
    line.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    await flush();
    expect(node.querySelector("gufe-transformation")).toBeTruthy();
  });
});
