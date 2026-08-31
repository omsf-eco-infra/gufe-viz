/**
 * The scene camera's zoom limits.
 *
 * Written as the thing that was reported: a large network stops zooming out
 * before all of it is on screen, and the wheel turns back into page scrolling
 * while the graph still runs off the edges. The cause is that a graph is framed
 * at whatever scale fits it - about a tenth for two hundred ligands - which is
 * below the fixed floor the wheel was clamped to, so the clamp was holding the
 * reader closer in than the view the graph opened on.
 */

import { beforeEach, describe, expect, it } from "vitest";
import { extentOf, sceneCamera, type Extent } from "../src/shared/camera.js";

/** The fixed floor in `camera.ts`, which a small graph is still held to. */
const FIXED_FLOOR = 0.15;

function wheel(deltaY: number): WheelEvent {
  return new WheelEvent("wheel", { deltaY, bubbles: true, cancelable: true });
}

/** jsdom has no `PointerEvent`, and the guard only reads the event's type. */
function pointer(type: string): MouseEvent {
  return new MouseEvent(type, { bubbles: true });
}

/**
 * A camera over a scene of a given size in a viewport of a given size.
 *
 * jsdom lays nothing out, so the viewport comes from the attributes, which is
 * the fallback `sceneCamera` keeps for exactly this reason.
 */
function camera(scene: Extent, width: number, height: number) {
  const root = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  root.setAttribute("width", String(width));
  root.setAttribute("height", String(height));
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  root.appendChild(group);
  document.body.appendChild(root);

  const view = sceneCamera(root, group, { bounds: () => scene });
  view.fit();
  // The wheel is only acted on once the pointer has engaged the canvas.
  root.dispatchEvent(pointer("pointerdown"));
  return { root, group, view };
}

/** One notch out on a trackpad or a mouse wheel. */
const OUT = 120;
const IN = -120;

describe("zooming a network canvas out", () => {
  beforeEach(() => {
    document.body.replaceChildren();
  });

  /**
   * The measurement this is built on: 200 ligands settle across some 5400
   * scene units, which in a split-pane canvas frames at about 0.11.
   */
  const LARGE: Extent = { minX: 0, minY: 0, maxX: 5400, maxY: 5100 };
  const CANVAS = { width: 693, height: 570 };

  it("frames a large graph below the fixed floor", () => {
    const { view } = camera(LARGE, CANVAS.width, CANVAS.height);
    expect(view.transform().scale).toBeLessThan(FIXED_FLOOR);
  });

  it("does not zoom in when a large graph is scrolled out from its framed view", () => {
    const { root, view } = camera(LARGE, CANVAS.width, CANVAS.height);
    const framed = view.transform().scale;

    root.dispatchEvent(wheel(OUT));

    // The clamp used to push the scale up to the fixed floor here, so the one
    // gesture that means "show me more" showed less.
    expect(view.transform().scale).toBeCloseTo(framed, 10);
  });

  it("zooms a large graph back out until all of it is framed again", () => {
    const { root, view } = camera(LARGE, CANVAS.width, CANVAS.height);
    const framed = view.transform().scale;

    for (let i = 0; i < 5; i++) root.dispatchEvent(wheel(IN));
    expect(view.transform().scale).toBeGreaterThan(framed);

    for (let i = 0; i < 40; i++) root.dispatchEvent(wheel(OUT));
    expect(view.transform().scale).toBeCloseTo(framed, 10);
  });

  it("hands the wheel to the page once there is nothing left to zoom out to", () => {
    const { root, view } = camera(LARGE, CANVAS.width, CANVAS.height);
    for (let i = 0; i < 40; i++) root.dispatchEvent(wheel(OUT));
    const at = view.transform();

    const spent = wheel(OUT);
    root.dispatchEvent(spent);

    // Not swallowed, so the notebook around the graph scrolls, and the view
    // does not creep by a rounding error each time it is asked to.
    expect(spent.defaultPrevented).toBe(false);
    expect(view.transform().scale).toBe(at.scale);
    expect(view.transform().tx).toBe(at.tx);
  });

  /**
   * A small graph is framed at 1, so there is room below it and the fixed floor
   * is the one that applies: it is what stops three ligands becoming a speck.
   */
  it("still holds a small graph to the fixed floor", () => {
    const { root, view } = camera({ minX: 0, minY: 0, maxX: 120, maxY: 100 }, 800, 600);
    expect(view.transform().scale).toBe(1);

    for (let i = 0; i < 40; i++) root.dispatchEvent(wheel(OUT));
    expect(view.transform().scale).toBeCloseTo(FIXED_FLOOR, 10);
  });

  it("frames what the nodes actually occupy, radius included", () => {
    const box = extentOf([{ x: 0, y: 0 }, { x: 100, y: 50 }], 38);
    expect(box).toEqual({ minX: -38, minY: -38, maxX: 138, maxY: 88 });
  });
});
