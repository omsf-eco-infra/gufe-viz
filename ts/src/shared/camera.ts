/**
 * The camera over an SVG scene: framing, wheel zoom, and background pan.
 *
 * Both network views draw the same way - a `<svg>` with one `<g>` inside it
 * that everything hangs off - so the reader's position in a graph is one
 * transform on that group, and moving around is arithmetic on three numbers.
 * This is those three numbers, in one place rather than two.
 *
 * Framing is part of drawing a graph rather than a control the reader has to
 * find. A force layout answers in its own coordinates and sizes itself by link
 * distance and repulsion, not by the canvas: two hundred nodes settle across
 * some thousands of units, and at the identity transform every one of them is
 * off the edge of a nine hundred unit view, which reads as an empty box.
 *
 * The zoom maths deliberately stays here rather than in `interact.ts` with the
 * 3D one: this works in SVG transform space, carries its own clamp, and zooms
 * about the pointer, which is not what a 3Dmol camera does. What is shared with
 * the 3D views is `guardWheel` - the reason a wheel reaches this at all, and
 * the reason scrolling a notebook past a graph scrolls the notebook.
 */

import { guardWheel, wheelFactor } from "./interact.js";

/** Where the scene is: zoom, then pan. */
export interface CameraTransform {
  scale: number;
  tx: number;
  ty: number;
}

/** A box in the scene's own coordinates. */
export interface Extent {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

export interface CameraOptions {
  /**
   * What `fit` frames, in scene coordinates, or null when there is nothing to
   * frame. A node is a shape rather than a point, so this is asked for with the
   * node extents already in it: only the view knows how big its nodes are.
   */
  bounds(): Extent | null;
  /** Breathing room around `bounds`, in scene units. */
  margin?: number;
  /** How far the wheel may zoom. */
  zoom?: { min: number; max: number };
  /** Called on every move, for anything that draws differently at each zoom. */
  onTransform?(scale: number, tx: number, ty: number): void;
  /** Shown once when a wheel is handed back to the page. */
  hint?: string;
}

export interface Camera {
  /** Put the whole scene in the viewport, centred. */
  fit(): void;
  /** Back to the view the graph opened on, which is the framed one. */
  reset(): void;
  /** Bring a scene point to the middle, zoomed in enough to read it. */
  centreOn(x: number, y: number, atLeast?: number): void;
  transform(): CameraTransform;
  setTransform(scale: number, tx: number, ty: number): void;
  /**
   * Whether the gesture that just ended was a pan rather than a click.
   *
   * A pan starts wherever the pointer went down, which is often on top of
   * something clickable, and the browser sends a `click` at the end of it
   * either way. Anything that selects on click asks this first, so that moving
   * the view is not also a selection.
   */
  wasPan(): boolean;
  cleanup(): void;
}

/** How far a pointer may wander during a pan and still count as a click, in pixels. */
const CLICK_SLOP = 3;

/**
 * The box a set of laid-out things occupies, grown by how big each one is.
 *
 * A layout answers in positions, and a position is a centre rather than an
 * extent: a node half off the canvas has its centre well inside it. The pads
 * are what turn one into the other, per axis because a node is not always
 * round.
 */
export function extentOf(
  points: readonly { x: number; y: number }[],
  padX: number,
  padY: number = padX,
): Extent | null {
  if (!points.length) return null;
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  for (const point of points) {
    minX = Math.min(minX, point.x);
    minY = Math.min(minY, point.y);
    maxX = Math.max(maxX, point.x);
    maxY = Math.max(maxY, point.y);
  }
  if (!Number.isFinite(minX) || !Number.isFinite(minY)) return null;
  return { minX: minX - padX, minY: minY - padY, maxX: maxX + padX, maxY: maxY + padY };
}

/**
 * How far the wheel may zoom out, and in.
 *
 * Bounded because a graph reduced to a speck is hard to find again, and because
 * a wheel that cannot move the view any further has to be handed back to the
 * page rather than swallowed.
 */
const ZOOM_LIMITS = { min: 0.15, max: 5 };

export function sceneCamera(root: SVGSVGElement, scene: SVGGElement, options: CameraOptions): Camera {
  const margin = options.margin ?? 0;
  const limits = options.zoom ?? ZOOM_LIMITS;

  let scale = 1;
  let tx = 0;
  let ty = 0;

  const apply = () => {
    scene.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);
    options.onTransform?.(scale, tx, ty);
  };

  /**
   * The drawing area, however much of a layout box the host will admit to.
   *
   * The attributes are the fallback rather than the first answer, so that a
   * canvas resized after paint still frames against what is on screen. jsdom
   * has no layout at all, which is why there is a last resort after them.
   */
  const viewport = (): { width: number; height: number } => {
    const box = root.getBoundingClientRect();
    return {
      width: box.width || Number(root.getAttribute("width")) || root.clientWidth || 800,
      height: box.height || Number(root.getAttribute("height")) || root.clientHeight || 600,
    };
  };

  /**
   * Framing never zooms *in* past 1. Three nodes blown up to fill the canvas
   * would be three pixellated depictions, and a view's level of detail keys off
   * this same scale, so magnifying a small graph would also change what it
   * shows.
   */
  const fit = (): void => {
    scale = 1;
    tx = 0;
    ty = 0;
    const box = options.bounds();
    if (!box) {
      apply(); // Nothing to frame. An empty graph is centred on nothing.
      return;
    }
    const { width, height } = viewport();
    scale = Math.min(1, width / (box.maxX - box.minX + margin * 2), height / (box.maxY - box.minY + margin * 2));
    tx = width / 2 - ((box.minX + box.maxX) / 2) * scale;
    ty = height / 2 - ((box.minY + box.maxY) / 2) * scale;
    apply();
  };

  const zoomAt = (event: WheelEvent): boolean => {
    const box = root.getBoundingClientRect();
    const px = event.clientX - box.left;
    const py = event.clientY - box.top;
    const factor = Math.min(limits.max / scale, Math.max(limits.min / scale, wheelFactor(event)));
    // Zoom about the pointer: the scene point under it must not move.
    tx = px - (px - tx) * factor;
    ty = py - (py - ty) * factor;
    scale *= factor;
    apply();
    // Clamped flat, so the view is against a limit and the guard spends this
    // wheel on the page instead.
    return factor !== 1;
  };

  const guard = guardWheel(root as unknown as HTMLElement, {
    onZoom: zoomAt,
    hint: options.hint ?? "Click the graph or hold Ctrl to zoom",
  });

  // Deliberately no `setPointerCapture` here. A capture on the root retargets
  // the subsequent `click` to the root as well, which would swallow every
  // selection the graph makes - the one interaction that matters most. Panning
  // therefore ends when the pointer leaves the canvas, which is a much smaller
  // price.
  let panning: { x: number; y: number; from: { x: number; y: number } } | null = null;
  let panned = false;
  const onDown = (event: PointerEvent) => {
    panning = { x: event.clientX - tx, y: event.clientY - ty, from: { x: event.clientX, y: event.clientY } };
    panned = false;
  };
  const onMove = (event: PointerEvent) => {
    if (!panning) return;
    if (Math.hypot(event.clientX - panning.from.x, event.clientY - panning.from.y) > CLICK_SLOP) panned = true;
    tx = event.clientX - panning.x;
    ty = event.clientY - panning.y;
    apply();
  };
  const onUp = () => {
    panning = null;
  };
  root.addEventListener("pointerdown", onDown);
  root.addEventListener("pointermove", onMove);
  root.addEventListener("pointerup", onUp);
  root.addEventListener("pointercancel", onUp);
  root.addEventListener("pointerleave", onUp);

  return {
    fit,

    // An identity transform would be "reset" only in the sense that a blank
    // canvas is.
    reset: fit,

    centreOn(x: number, y: number, atLeast = 1) {
      const { width, height } = viewport();
      scale = Math.max(scale, atLeast);
      tx = width / 2 - x * scale;
      ty = height / 2 - y * scale;
      apply();
    },

    transform: () => ({ scale, tx, ty }),

    wasPan: () => panned,

    // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
    // camera being put back exactly where it was, and a limit applied here
    // would quietly move it.
    setTransform(nextScale: number, nextTx: number, nextTy: number) {
      scale = nextScale;
      tx = nextTx;
      ty = nextTy;
      apply();
    },

    cleanup() {
      guard.cleanup();
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointercancel", onUp);
      root.removeEventListener("pointerleave", onUp);
    },
  };
}
