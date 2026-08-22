/**
 * The debug switch: print the payload a view was handed, exactly as it arrived.
 *
 * The payload is the contract between the two halves of this project, so the
 * first question about a page that draws the wrong thing - or nothing - is
 * always "what JSON did the browser actually get?". Inlined in the page it is
 * one long line inside a `<script type="application/json">` block, and in a
 * notebook it never touches the DOM at all, so neither is readable by hand.
 *
 * Turning it on has three forms, deliberately, because each covers a case the
 * others cannot:
 *
 *   `?debug` in the URL      an already-written page, without regenerating it
 *                            (`file:///.../out.html?debug` works too)
 *   `<gufe-view debug>`      baked in at export time: `to_html(obj, debug=True)`
 *   `window.GUFE_VIZ_DEBUG`  a host that mounts the element itself, such as a
 *                            notebook widget: set it before setting `.payload`
 *
 * Nothing here is on any render path when the switch is off beyond one attribute
 * read, and `JSON.stringify` of a large payload only ever runs when it is on.
 */

import { errText } from "./dom.js";

/** The query-string keys that turn logging on. `gufe-debug` is for pages that already use `debug` for something else. */
const URL_FLAGS = ["debug", "gufe-debug"];

/** The attribute a host or `to_html` puts on the element. */
export const DEBUG_ATTRIBUTE = "debug";

/** The global a notebook widget or a console session can set. */
export const DEBUG_GLOBAL = "GUFE_VIZ_DEBUG";

function globalFlag(): boolean {
  return Boolean((globalThis as Record<string, unknown>)[DEBUG_GLOBAL]);
}

function urlFlag(): boolean {
  // `location` is absent in a worker and `URLSearchParams` throws on nothing
  // useful, but a debug switch that can break a page is worse than no switch.
  try {
    const search = globalThis.location?.search;
    if (!search) return false;
    const params = new URLSearchParams(search);
    return URL_FLAGS.some((flag) => params.has(flag));
  } catch {
    return false;
  }
}

/**
 * Is payload logging on for `element`?
 *
 * Any one of the three switches is enough; none of them turns the others off.
 */
export function debugEnabled(element?: Element | null): boolean {
  if (element?.hasAttribute?.(DEBUG_ATTRIBUTE)) return true;
  return globalFlag() || urlFlag();
}

/** `JSON.stringify`, indented, and never throwing - a cyclic payload is itself a finding. */
export function payloadJson(payload: unknown): string {
  try {
    return JSON.stringify(payload, null, 2) ?? String(payload);
  } catch (e) {
    return `<could not be stringified: ${errText(e)}>`;
  }
}

/**
 * Print `payload` as JSON, plus the live object.
 *
 * Both, because they answer different questions: the text is what to copy into
 * a file or a bug report and is what the schema validator saw, and the object
 * is what the console lets you expand and click through.
 */
export function logPayload(label: string, payload: unknown, element?: Element | null): void {
  if (!debugEnabled(element)) return;

  const json = payloadJson(payload);
  const type = (payload as { type?: unknown } | null)?.type;
  const heading = `[gufe-viz] ${label}${typeof type === "string" ? ` ${type}` : ""} (${json.length} chars)`;

  // `groupCollapsed` keeps a megabyte of PDB out of the way until it is wanted,
  // and degrades to a plain log in consoles that do not implement it.
  const grouped = typeof console.groupCollapsed === "function";
  if (grouped) console.groupCollapsed(heading);
  else console.log(heading);
  console.log(json);
  console.log(payload);
  if (grouped) console.groupEnd?.();
}
