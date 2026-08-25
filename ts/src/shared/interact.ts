/**
 * Wheel, zoom and reset: the interaction every view with a canvas needs, in one
 * place rather than three slightly different copies.
 *
 * Two complaints from the feedback session are answered here, and they are not
 * the same complaint even though they arrive together:
 *
 * **Scrolling a notebook must not zoom a model.** A 3D viewer that swallows the
 * wheel turns "scroll past this cell" into "zoom to infinity", and the only way
 * out is to move the pointer off the canvas. So a plain wheel is left alone and
 * scrolls the page. Zooming asks for intent: either the pointer is already
 * interacting with the canvas (something has been clicked or dragged there), or
 * the wheel carries a modifier, which is also what a trackpad pinch sends. This
 * is how embedded maps behave, and it is the actual fix; the clamp below only
 * limits how bad it gets. A wheel the zoom cannot use is handed back the same
 * way: once a view is against its bound it will not move, and a view that will
 * not move must not stop the page moving either.
 *
 * **Zooming out must not lose the molecule.** 3Dmol will happily reduce a model
 * to a speck it is hard to find again, so the zoom is bounded - here for the
 * wheel, and inside the engine for the drag and the pinch it handles itself -
 * and a reset is always one click away.
 *
 * The guard is deliberately separate from the zoomer. The network view already
 * has its own zoom, in SVG transform space with its own limits, and wants only
 * the guard; the 3D views want both.
 */

import { BTN_CSS, el } from "./dom.js";
import type { ThreeDmolViewer } from "./engines.js";

/** What every helper here hands back so a view can release it. */
export interface Interaction {
  cleanup(): void;
}

// --- the wheel guard -------------------------------------------------------

export interface WheelGuardOptions {
  /**
   * Act on a wheel event that passed the guard. Return `false` for a wheel that
   * changed nothing, which for a bounded zoom means it is against a bound: the
   * guard then leaves the event to the page instead of swallowing it.
   */
  onZoom(event: WheelEvent): boolean | void;
  /**
   * Shown once, briefly, the first time a wheel is let through to the page.
   * Without it the guard is correct and silent, which reads as broken.
   */
  hint?: string;
}

/**
 * Stop `host` from stealing the wheel, and route the wheels it should act on.
 *
 * The listener is registered in the capture phase and always stops propagation,
 * so whatever the host contains - a 3Dmol canvas with its own handlers, an SVG -
 * never sees a wheel event and cannot zoom behind our back. What varies is only
 * whether the event is then acted on or left to scroll the page.
 */
export function guardWheel(host: HTMLElement, options: WheelGuardOptions): Interaction {
  let engaged = false;
  let hinted = false;

  const engage = () => {
    engaged = true;
  };
  const release = () => {
    engaged = false;
  };

  const onWheel = (event: WheelEvent) => {
    // Always, so the underlying engine never acts on a wheel of its own.
    event.stopPropagation();

    // `ctrlKey` on a wheel is not necessarily a held key: a trackpad pinch
    // arrives as exactly this, on every major browser.
    const modifier = event.ctrlKey || event.metaKey;
    if (engaged || modifier) {
      // Swallowed only if the zoom used it. A modifier wheel is the exception
      // and is always swallowed: handed back it zooms the browser's own page,
      // which is a stranger outcome than a view that will not move.
      if (options.onZoom(event) !== false || modifier) event.preventDefault();
      // Either way this wheel is answered. No hint: at a bound the page moving
      // is the explanation, and nothing was blocked to need one.
      return;
    }

    // Left alone on purpose: no preventDefault, so the page scrolls.
    if (options.hint && !hinted) {
      hinted = true;
      showHint(host, options.hint);
    }
  };

  host.addEventListener("wheel", onWheel, { passive: false, capture: true });
  host.addEventListener("pointerdown", engage);
  host.addEventListener("pointerenter", engage);
  host.addEventListener("pointerleave", release);

  return {
    cleanup() {
      host.removeEventListener("wheel", onWheel, { capture: true } as EventListenerOptions);
      host.removeEventListener("pointerdown", engage);
      host.removeEventListener("pointerenter", engage);
      host.removeEventListener("pointerleave", release);
    },
  };
}

const HINT_MS = 1600;

function showHint(host: HTMLElement, text: string): void {
  const hint = el(
    "div",
    "position:absolute;bottom:12px;left:50%;transform:translateX(-50%);z-index:30;pointer-events:none;" +
      "padding:5px 12px;border-radius:6px;font-size:11px;white-space:nowrap;" +
      "background:rgba(0,0,0,0.72);color:#ffffff;transition:opacity .3s ease;",
    text,
  );
  host.appendChild(hint);
  setTimeout(() => {
    hint.style.opacity = "0";
    setTimeout(() => hint.remove(), 300);
  }, HINT_MS);
}

// --- bounded zoom ----------------------------------------------------------

export interface ZoomBounds {
  min: number;
  max: number;
}

/**
 * How far a 3D view may be zoomed, as a multiple of where it started.
 *
 * The lower bound is the one that matters: it is what stops a molecule becoming
 * a speck. The upper bound is generous, because zooming in too far is
 * self-correcting in a way that zooming out is not.
 */
export const DEFAULT_ZOOM_BOUNDS: ZoomBounds = { min: 0.25, max: 12 };

/** Where 3Dmol parks the camera when a viewer does not say otherwise. */
const DEFAULT_CAMERA_Z = 150;

/**
 * How far the camera currently sits from the model, in 3Dmol's units.
 *
 * `getView()` is the only reading 3Dmol exposes: index 3 is the camera's z, and
 * the distance is measured back from `CAMERA_Z`. NaN when a viewer cannot
 * answer, which is what the caller checks for.
 */
function cameraDistance(viewer: ThreeDmolViewer): number {
  const z = viewer.getView?.()?.[3];
  if (typeof z !== "number" || !Number.isFinite(z)) return NaN;
  return (viewer.CAMERA_Z ?? DEFAULT_CAMERA_Z) - z;
}

export interface BoundedZoom {
  /**
   * Multiply the current zoom, within the bounds. False when nothing moved
   * because the view is already against one, which is how the wheel guard knows
   * the event is better spent on the page.
   */
  zoomBy(factor: number): boolean;
  /** Back to the framing the view opened with. */
  reset(): void;
  /** Current zoom as a multiple of the starting framing. */
  level(): number;
}

/**
 * Bound a 3Dmol viewer's zoom.
 *
 * The clamp is applied in two places on purpose, because the wheel is not the
 * only way to zoom: a drag with the middle button and a two-finger pinch are
 * handled inside 3Dmol, where the guard above never sees them. So the bounds
 * are also handed to the engine through `setZoomLimits`, which 3Dmol enforces
 * on every one of its own zoom paths. Without that, one drag can still put the
 * molecule somewhere it cannot be found.
 *
 * For the same reason the current level is measured from the camera rather than
 * counted here: anything that moves the camera behind our back - a drag, a
 * pinch, a linked viewer's `setView` - would otherwise leave a counter clamping
 * against a framing that is no longer on screen. A viewer that cannot report
 * its camera falls back to the count, which is all the older code had.
 */
export function boundedZoom(viewer: ThreeDmolViewer, bounds: ZoomBounds = DEFAULT_ZOOM_BOUNDS): BoundedZoom {
  // Measured once, from the framing the view opened with: every bound is a
  // multiple of this distance.
  const opening = cameraDistance(viewer);
  const measurable = Number.isFinite(opening) && opening > 0;

  if (measurable) viewer.setZoomLimits?.(opening / bounds.max, opening / bounds.min);

  let counted = 1;

  const level = (): number => {
    if (!measurable) return counted;
    const now = cameraDistance(viewer);
    return Number.isFinite(now) && now > 0 ? opening / now : counted;
  };

  return {
    zoomBy(factor: number) {
      const current = level();
      const next = Math.min(bounds.max, Math.max(bounds.min, current * factor));
      const applied = next / current;
      // Already against a bound: doing nothing is the whole point. Compared
      // with a tolerance because `current` is a measurement, not a tally.
      if (!Number.isFinite(applied) || Math.abs(applied - 1) < 1e-9) return false;
      counted = next;
      viewer.zoom(applied);
      viewer.render();
      return true;
    },

    reset() {
      counted = 1;
      viewer.zoomTo();
      viewer.render();
    },

    level,
  };
}

/** How hard one wheel notch zooms. Matches the network view's own feel. */
const WHEEL_SENSITIVITY = 0.002;

/** A wheel delta as a zoom factor. Exponential, so zooming is symmetric. */
export function wheelFactor(event: WheelEvent): number {
  return Math.exp(-event.deltaY * WHEEL_SENSITIVITY);
}

/**
 * The whole arrangement for a 3D view: guarded wheel, bounded zoom.
 *
 * Returns the zoom so the caller can wire a reset button to it, and a cleanup
 * that the view hands back in its `ViewHandle`.
 */
export function viewerInteraction(
  host: HTMLElement,
  viewer: ThreeDmolViewer,
  options: { bounds?: ZoomBounds; hint?: string } = {},
): BoundedZoom & Interaction {
  const zoom = boundedZoom(viewer, options.bounds);
  const guard = guardWheel(host, {
    hint: options.hint ?? "Click or hold Ctrl to zoom",
    onZoom: (event) => zoom.zoomBy(wheelFactor(event)),
  });
  return { ...zoom, cleanup: guard.cleanup };
}

// --- reset -----------------------------------------------------------------

/** The standard reset-view button. Views place it; this decides what it looks like. */
export function resetControl(onReset: () => void, label = "Reset view"): HTMLButtonElement {
  const button = el("button", BTN_CSS, "Reset");
  button.title = label;
  button.setAttribute("aria-label", label);
  button.onclick = onReset;
  return button;
}
