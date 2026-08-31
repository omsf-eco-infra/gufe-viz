/**
 * The camera over an SVG scene: framing, wheel zoom, pinch, and background pan.
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
 * the reason scrolling a notebook past a graph scrolls the notebook - and
 * `claimGestures`, the reason a pinch on a phone is the graph's rather than the
 * page's.
 *
 * The pinch itself is here for the same reason the zoom is. A 3D view gets one
 * for free, because 3Dmol reads the touches inside its own canvas; an SVG has
 * nobody to do that for it, so two fingers on a graph did nothing at all and
 * the browser took the gesture instead. That is the whole of the mobile
 * complaint, and the fix is `touches` below: one finger pans, two pinch, and
 * the page keeps neither.
 */

import { claimGestures, guardWheel, wheelFactor } from "./interact.js";

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
  /**
   * Whether more than one finger is on the canvas.
   *
   * A pinch begins as an ordinary press, so whatever that press started -
   * dragging a node, most of all - is already running by the time the second
   * finger lands. Anything that moves something on a press asks this and gives
   * way: a ligand dragged across the graph while it is being zoomed is not what
   * either hand meant.
   */
  gesturing(): boolean;
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
 * page rather than swallowed. The floor is only the fixed one where the whole
 * graph is already visible above it - see `floor` below.
 */
const ZOOM_LIMITS = { min: 0.15, max: 5 };

/** Below this a factor has not moved the view, and is a rounding error. */
const ZOOM_EPSILON = 1e-9;

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
   * The scale at which the whole scene is on screen at once.
   *
   * Never zooms *in* past 1. Three nodes blown up to fill the canvas would be
   * three pixellated depictions, and a view's level of detail keys off this
   * same scale, so magnifying a small graph would also change what it shows.
   */
  const framing = (box: Extent, width: number, height: number): number =>
    Math.min(1, width / (box.maxX - box.minX + margin * 2), height / (box.maxY - box.minY + margin * 2));

  /**
   * How far out a gesture may zoom.
   *
   * Not simply `limits.min`, because that is an absolute scale and the scale
   * that frames a graph is not: two hundred ligands settle across some
   * thousands of units and are framed at about a tenth, which is *below* the
   * fixed floor. Clamping to it there does the opposite of what the floor is
   * for - it holds the reader in, closer than the framed view, and every
   * further wheel is then flat and spent on scrolling the page instead. So the
   * floor is whichever is lower: a graph can always be zoomed out until all of
   * it is visible, and a small one can still go further because there is room.
   */
  const floor = (): number => {
    const box = options.bounds();
    if (!box) return limits.min;
    const { width, height } = viewport();
    return Math.min(limits.min, framing(box, width, height));
  };

  /** Where `by` would leave the scale, within the limits. */
  const bounded = (by: number): number => Math.min(limits.max, Math.max(floor(), scale * by));

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
    scale = framing(box, width, height);
    tx = width / 2 - ((box.minX + box.maxX) / 2) * scale;
    ty = height / 2 - ((box.minY + box.maxY) / 2) * scale;
    apply();
  };

  const zoomAt = (event: WheelEvent): boolean => {
    const box = root.getBoundingClientRect();
    const px = event.clientX - box.left;
    const py = event.clientY - box.top;
    // Taken as a destination rather than a factor, so that a scale sitting on a
    // limit stays exactly on it: rounding drift would leave every later wheel
    // fractionally short of flat, and so swallowed forever.
    const next = bounded(wheelFactor(event));
    const factor = next / scale;
    // Zoom about the pointer: the scene point under it must not move.
    tx = px - (px - tx) * factor;
    ty = py - (py - ty) * factor;
    scale = next;
    apply();
    // Clamped flat, so the view is against a limit and the guard spends this
    // wheel on the page instead.
    return Math.abs(factor - 1) > ZOOM_EPSILON;
  };

  const guard = guardWheel(root as unknown as HTMLElement, {
    onZoom: zoomAt,
    hint: options.hint ?? "Click the graph or hold Ctrl to zoom",
  });

  /** Where each finger currently is, by pointer id. */
  const touches = new Map<number, { x: number; y: number }>();
  /** The gesture between the first two of them, as of the last move. */
  let pinch: { cx: number; cy: number; span: number } | null = null;

  // Deliberately no `setPointerCapture` here. A capture on the root retargets
  // the subsequent `click` to the root as well, which would swallow every
  // selection the graph makes - the one interaction that matters most. Panning
  // therefore ends when the pointer leaves the canvas, which is a much smaller
  // price.
  let panning: { x: number; y: number; from: { x: number; y: number } } | null = null;
  let panned = false;
  /**
   * Where the finger left over from a pinch was, when the other one lifted.
   *
   * The pan it is owed is taken up on its next move rather than there and then,
   * because these handlers and the gesture ones below run either side of each
   * other depending on the browser: the pan's own release would clear a seat
   * the gesture had just taken. Something read on the next move survives either
   * order; an assignment does not.
   */
  let reseat: { x: number; y: number } | null = null;
  /** Where a pan is measured from, as of this pointer. */
  const seat = (event: PointerEvent) => ({
    x: event.clientX - tx,
    y: event.clientY - ty,
    from: { x: event.clientX, y: event.clientY },
  });
  const onDown = (event: PointerEvent) => {
    // A second finger is a pinch rather than a pan, and the pinch is what moves
    // the view from here.
    if (event.pointerType === "touch" && touches.size > 1) return;
    panning = seat(event);
    panned = false;
  };
  const onMove = (event: PointerEvent) => {
    if (pinch) return;
    if (reseat && event.pointerType === "touch") {
      // Seated where the finger was left, not where it is now, so the pan picks
      // up from the pinch rather than swallowing the move that follows it.
      panning = { x: reseat.x - tx, y: reseat.y - ty, from: reseat };
      reseat = null;
    }
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

  // --- two fingers -----------------------------------------------------------
  //
  // Tracked in the capture phase, and on the root rather than on whatever was
  // pressed, because a node swallows its own `pointerdown` to start a drag: a
  // pinch that begins on a ligand would otherwise be a pinch this only ever
  // sees half of. Mouse and pen are left to the pan and the wheel above.

  /** The midpoint the pinch zooms about, and the distance it measures. */
  const measure = (): { cx: number; cy: number; span: number } => {
    const [a, b] = [...touches.values()];
    // Never zero: the span is a divisor, and two fingers can register as one
    // point for a frame.
    return { cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2, span: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)) };
  };

  const onTouchDown = (event: PointerEvent) => {
    if (event.pointerType !== "touch") return;
    touches.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (touches.size !== 2) {
      pinch = null;
      return;
    }
    pinch = measure();
    // The gesture takes over from whatever the first finger had started: the
    // one-finger pan here, and through `gesturing` a node drag out in the view.
    panning = null;
    // Two fingers is never a click, whatever they were put down on.
    panned = true;
  };

  const onTouchMove = (event: PointerEvent) => {
    if (event.pointerType !== "touch" || !touches.has(event.pointerId)) return;
    touches.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (!pinch || touches.size !== 2) return;
    // Nobody else gets this move: not the page, and not a node drag underneath.
    event.preventDefault();
    event.stopPropagation();

    const now = measure();
    const box = root.getBoundingClientRect();
    const next = bounded(now.span / pinch.span);
    const factor = next / scale;
    // One gesture does both halves, which is what a pinch on a map does: zoom
    // about the midpoint between the fingers, pan by however far it travelled.
    tx = now.cx - box.left - (pinch.cx - box.left - tx) * factor;
    ty = now.cy - box.top - (pinch.cy - box.top - ty) * factor;
    scale = next;
    pinch = now;
    apply();
  };

  const onTouchUp = (event: PointerEvent) => {
    if (event.pointerType !== "touch") return;
    touches.delete(event.pointerId);
    if (touches.size === 2) {
      // A third finger left. Re-measure rather than carry on against a span
      // that was taken between two fingers, one of which is now gone.
      pinch = measure();
      return;
    }
    pinch = null;
    // One finger still down, so the gesture becomes a pan, measured from where
    // that finger is - or the view jumps by however far the pinch moved it.
    const [rest] = [...touches.values()];
    reseat = touches.size === 1 && rest ? { ...rest } : null;
  };

  root.addEventListener("pointerdown", onTouchDown, true);
  root.addEventListener("pointermove", onTouchMove, { capture: true, passive: false });
  root.addEventListener("pointerup", onTouchUp, true);
  root.addEventListener("pointercancel", onTouchUp, true);
  const gestures = claimGestures(root);

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

    gesturing: () => touches.size > 1,

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
      gestures.cleanup();
      root.removeEventListener("pointerdown", onDown);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerup", onUp);
      root.removeEventListener("pointercancel", onUp);
      root.removeEventListener("pointerleave", onUp);
      root.removeEventListener("pointerdown", onTouchDown, true);
      root.removeEventListener("pointermove", onTouchMove, { capture: true } as EventListenerOptions);
      root.removeEventListener("pointerup", onTouchUp, true);
      root.removeEventListener("pointercancel", onTouchUp, true);
    },
  };
}
