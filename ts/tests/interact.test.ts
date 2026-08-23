/**
 * The wheel guard and the zoom clamp.
 *
 * Both exist because of things people reported doing by accident, so the tests
 * are written as those accidents: scrolling past a viewer in a notebook, and
 * zooming out until the molecule is gone.
 */

import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  boundedZoom,
  DEFAULT_ZOOM_BOUNDS,
  guardWheel,
  resetControl,
  wheelFactor,
} from "../src/shared/interact.js";
import { makeFakeViewer } from "./helpers.js";

function wheel(deltaY: number, modifiers: Partial<WheelEventInit> = {}): WheelEvent {
  return new WheelEvent("wheel", { deltaY, bubbles: true, cancelable: true, ...modifiers });
}

/**
 * jsdom implements no `PointerEvent`, and the guard only ever reads the event's
 * type, so a `MouseEvent` under a pointer name exercises the same path.
 */
function pointer(type: string): MouseEvent {
  return new MouseEvent(type, { bubbles: true });
}

describe("guardWheel", () => {
  let host: HTMLDivElement;
  let onZoom: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    document.body.replaceChildren();
    host = document.createElement("div");
    document.body.appendChild(host);
    onZoom = vi.fn();
  });

  it("lets a plain wheel scroll the page", () => {
    // The notebook complaint, exactly: scrolling past a viewer must scroll.
    guardWheel(host, { onZoom });
    const event = wheel(120);
    host.dispatchEvent(event);
    expect(onZoom).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });

  it("zooms once the pointer has engaged the canvas", () => {
    guardWheel(host, { onZoom });
    host.dispatchEvent(pointer("pointerdown"));
    const event = wheel(120);
    host.dispatchEvent(event);
    expect(onZoom).toHaveBeenCalledTimes(1);
    expect(event.defaultPrevented).toBe(true);
  });

  it("stops zooming once the pointer leaves", () => {
    guardWheel(host, { onZoom });
    host.dispatchEvent(pointer("pointerdown"));
    host.dispatchEvent(pointer("pointerleave"));
    host.dispatchEvent(wheel(120));
    expect(onZoom).not.toHaveBeenCalled();
  });

  it("treats a modifier wheel as a zoom, which is what a trackpad pinch sends", () => {
    guardWheel(host, { onZoom });
    host.dispatchEvent(wheel(-40, { ctrlKey: true }));
    expect(onZoom).toHaveBeenCalledTimes(1);
  });

  it("never lets the wheel reach whatever the host contains", () => {
    // 3Dmol binds its own handlers to the canvas it creates inside the host. If
    // one of those ever fires, the model zooms behind the guard's back.
    const canvas = document.createElement("canvas");
    host.appendChild(canvas);
    const engineHandler = vi.fn();
    canvas.addEventListener("wheel", engineHandler);

    guardWheel(host, { onZoom });
    canvas.dispatchEvent(wheel(120));
    expect(engineHandler).not.toHaveBeenCalled();
  });

  it("says why the first blocked scroll did nothing", () => {
    guardWheel(host, { onZoom, hint: "Click to zoom" });
    host.dispatchEvent(wheel(120));
    expect(host.textContent).toContain("Click to zoom");
  });

  it("says it only once", () => {
    guardWheel(host, { onZoom, hint: "Click to zoom" });
    host.dispatchEvent(wheel(120));
    host.dispatchEvent(wheel(120));
    expect(host.querySelectorAll("div").length).toBe(1);
  });

  it("stops listening after cleanup", () => {
    const guard = guardWheel(host, { onZoom });
    guard.cleanup();
    host.dispatchEvent(pointer("pointerdown"));
    host.dispatchEvent(wheel(120));
    expect(onZoom).not.toHaveBeenCalled();
  });
});

describe("boundedZoom", () => {
  it("will not let a molecule shrink to a speck", () => {
    const viewer = makeFakeViewer();
    const zoom = boundedZoom(viewer);
    for (let i = 0; i < 200; i++) zoom.zoomBy(0.8);
    expect(zoom.level()).toBe(DEFAULT_ZOOM_BOUNDS.min);
  });

  it("bounds zooming in as well", () => {
    const viewer = makeFakeViewer();
    const zoom = boundedZoom(viewer);
    for (let i = 0; i < 200; i++) zoom.zoomBy(1.2);
    expect(zoom.level()).toBe(DEFAULT_ZOOM_BOUNDS.max);
  });

  it("stops calling the viewer once it is against a bound", () => {
    const viewer = makeFakeViewer();
    const zoom = boundedZoom(viewer, { min: 0.5, max: 2 });
    zoom.zoomBy(0.1);
    const settled = viewer.calls.length;
    zoom.zoomBy(0.1);
    zoom.zoomBy(0.1);
    expect(viewer.calls.length).toBe(settled);
  });

  it("applies only the part of a zoom that fits inside the bounds", () => {
    const viewer = makeFakeViewer();
    const zoom = boundedZoom(viewer, { min: 0.5, max: 2 });
    zoom.zoomBy(4);
    expect(zoom.level()).toBe(2);
    expect(viewer.calls).toContain("zoom(2)");
  });

  it("comes back to the opening framing on reset", () => {
    const viewer = makeFakeViewer();
    const zoom = boundedZoom(viewer);
    zoom.zoomBy(3);
    zoom.reset();
    expect(zoom.level()).toBe(1);
    expect(viewer.calls).toContain("zoomTo");
  });
});

describe("wheelFactor", () => {
  it("zooms in on a negative delta and out on a positive one", () => {
    expect(wheelFactor(wheel(-100))).toBeGreaterThan(1);
    expect(wheelFactor(wheel(100))).toBeLessThan(1);
  });

  it("is symmetric, so a scroll back undoes a scroll", () => {
    expect(wheelFactor(wheel(-100)) * wheelFactor(wheel(100))).toBeCloseTo(1, 12);
  });
});

describe("resetControl", () => {
  it("is a labelled button that fires its callback", () => {
    const onReset = vi.fn();
    const button = resetControl(onReset);
    expect(button.getAttribute("aria-label")).toBe("Reset view");
    button.click();
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
