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

/**
 * The debug flags on this page's URL, as a query string, or "" when there are
 * none.
 *
 * Bare `?debug` is carried across bare rather than as `debug=`, so a forwarded
 * link reads the same as one typed by hand.
 */
export function debugQuery(search?: string): string {
  try {
    const params = new URLSearchParams(search ?? globalThis.location?.search ?? "");
    const carried: string[] = [];
    for (const flag of URL_FLAGS) {
      const value = params.get(flag);
      if (value === null) continue;
      carried.push(value === "" ? flag : `${flag}=${encodeURIComponent(value)}`);
    }
    return carried.join("&");
  } catch {
    return "";
  }
}

/**
 * `href` with this page's debug flags added to it.
 *
 * A page that links on to another page - the gallery's "open alone", and its
 * link to parity - has to hand the switch over with it, because the switch is in
 * the URL and the page being opened reads its own. Turning debugging on and then
 * following a link into a page with it off is the one thing this form is for.
 *
 * An href that already names a flag keeps what it says.
 */
export function withDebugFlag(href: string): string {
  const query = debugQuery();
  if (!query) return href;
  const hash = href.indexOf("#");
  const base = hash === -1 ? href : href.slice(0, hash);
  const fragment = hash === -1 ? "" : href.slice(hash);
  const mark = base.indexOf("?");
  if (mark !== -1) {
    const existing = new URLSearchParams(base.slice(mark + 1));
    if (URL_FLAGS.some((flag) => existing.has(flag))) return href;
  }
  return `${base}${mark === -1 ? "?" : "&"}${query}${fragment}`;
}
