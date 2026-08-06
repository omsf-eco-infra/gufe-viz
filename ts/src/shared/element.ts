/**
 * The component model: every `<gufe-*>` element is a custom element with
 * the same three-beat lifecycle.
 *
 *   create   `connectedCallback`  - build the DOM, start engines
 *   update   `payload` setter     - tear the old view down, build the new one
 *   destroy  `disconnectedCallback` - kill viewers, observers and timers
 *
 * This is also what makes component reuse structural rather than conventional:
 * embedding one
 * view inside another is `host.appendChild(document.createElement('gufe-...'))`,
 * and the embedded element cleans itself up when its parent removes it. And it
 * is the whole of the future notebook-widget story - an anywidget wrapper
 * creates one element and sets `.payload`.
 */

import { centredMessage, el, errText } from "./dom.js";
import { T } from "./theme.js";

/**
 * What a view hands back so the element can drive it afterwards.
 *
 * A view owns things the DOM does not clean up on its own - 3Dmol viewers, d3
 * simulations, observers, timers - so it hands back the two hooks the element
 * needs to drive it: one to re-lay-out, one to release.
 */
export interface ViewHandle {
  onResize?(): void;
  cleanup?(): void;
}

/** Debounce for the resize observer: a graph view re-lays out its whole
 * simulation, and dragging a window edge would otherwise fire that per pixel. */
const RESIZE_DEBOUNCE_MS = 150;

export abstract class GufeElement<P> extends HTMLElement {
  #payload: P | null = null;
  #handle: ViewHandle | null = null;
  #shell: HTMLDivElement | null = null;
  #observer: ResizeObserver | null = null;
  #resizeTimer: ReturnType<typeof setTimeout> | null = null;
  /**
   * Bumped by every teardown. A render captures it and refuses to adopt its
   * handle if it has moved on - which is what stops a slow view (3Dmol behind a
   * CDN fetch) from installing itself into an element that has since been given
   * a different payload, or removed from the document entirely.
   */
  #generation = 0;

  /**
   * Build the view for `payload` inside `host`.
   *
   * `host` is a fresh, empty flex column that fills the element. Return a handle
   * if the view owns anything that must be resized or released; return nothing
   * if it is plain DOM.
   */
  protected abstract renderView(host: HTMLDivElement, payload: P): ViewHandle | void | Promise<ViewHandle | void>;

  /** The message shown before any payload arrives. */
  protected placeholder(): string {
    return "Waiting for data...";
  }

  set payload(payload: P | null) {
    this.#payload = payload;
    if (this.isConnected) this.#render();
  }

  get payload(): P | null {
    return this.#payload;
  }

  connectedCallback(): void {
    this.style.display = "block";
    this.style.width = this.style.width || "100%";
    this.style.height = this.style.height || "100%";
    this.style.background = T.appBg;
    this.style.color = T.textPrimary;
    this.style.fontFamily = "'Inter',system-ui,sans-serif";

    // A host can resize the element without any event firing, so watch it.
    if (typeof ResizeObserver !== "undefined" && !this.#observer) {
      this.#observer = new ResizeObserver(() => {
        if (this.#resizeTimer) clearTimeout(this.#resizeTimer);
        this.#resizeTimer = setTimeout(() => this.#handle?.onResize?.(), RESIZE_DEBOUNCE_MS);
      });
      this.#observer.observe(this);
    }

    this.#render();
  }

  disconnectedCallback(): void {
    this.#teardown();
    this.#observer?.disconnect();
    this.#observer = null;
  }

  /** Release whatever the mounted view owns and empty the element. */
  #teardown(): void {
    this.#generation++;
    if (this.#resizeTimer) {
      clearTimeout(this.#resizeTimer);
      this.#resizeTimer = null;
    }
    if (this.#handle?.cleanup) {
      try {
        this.#handle.cleanup();
      } catch (e) {
        console.warn("[gufe-viz] cleanup failed:", e);
      }
    }
    this.#handle = null;
    this.replaceChildren();
    this.#shell = null;
  }

  /** Tear the mounted view down and hand back a fresh, empty shell. */
  #resetShell(): HTMLDivElement {
    this.#teardown();
    this.#shell = el(
      "div",
      `width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden;background:${T.appBg};`,
    );
    this.appendChild(this.#shell);
    return this.#shell;
  }

  /**
   * Build the view for the current payload.
   *
   * Deliberately *not* an `async` method. A synchronous `renderView` - which is
   * what the current views are - must install its handle before this returns,
   * or two `payload` assignments in a row would tear down nothing the first
   * time and leak the first view's viewer. An `await` here would defer that
   * assignment by a microtask and do exactly that.
   */
  #render(): void {
    const host = this.#resetShell();
    // Captured *after* the reset, because tearing down bumps the generation.
    const generation = this.#generation;

    if (this.#payload == null) {
      host.appendChild(centredMessage(this.placeholder()));
      return;
    }

    let result: ViewHandle | void | Promise<ViewHandle | void>;
    try {
      result = this.renderView(host, this.#payload);
    } catch (e) {
      this.#renderFailed(host, generation, e);
      return;
    }

    if (result instanceof Promise) {
      result.then(
        (handle) => this.#adopt(handle, generation),
        (e: unknown) => this.#renderFailed(host, generation, e),
      );
    } else {
      this.#adopt(result, generation);
    }
  }

  /** Take ownership of a view's handle, unless it belongs to a dead render. */
  #adopt(handle: ViewHandle | void, generation: number): void {
    if (generation !== this.#generation || !this.isConnected) {
      // A newer payload or a disconnect landed while the view was building.
      // Nothing will ever call this handle again, so release it here.
      try {
        handle?.cleanup?.();
      } catch (e) {
        console.warn("[gufe-viz] cleanup of a superseded view failed:", e);
      }
      return;
    }
    this.#handle = handle || null;
  }

  #renderFailed(host: HTMLDivElement, generation: number, e: unknown): void {
    if (generation !== this.#generation) return;
    console.warn("[gufe-viz] render failed:", e);
    host.replaceChildren(centredMessage(`Failed to render: ${errText(e)}`, true));
  }

  /** Force a resize pass - for hosts that know they resized us. */
  resize(): void {
    this.#handle?.onResize?.();
  }
}

/**
 * Register a custom element, tolerating a double registration.
 *
 * The bundle can legitimately be evaluated twice on one page (two `to_html`
 * outputs in one notebook, a dev page that also imports the library), and
 * `define()` throws on a repeat. Losing the race is fine - the winner registered
 * the same class.
 */
export function defineElement(tag: string, ctor: CustomElementConstructor): void {
  if (typeof customElements === "undefined") return;
  if (customElements.get(tag)) return;
  customElements.define(tag, ctor);
}
