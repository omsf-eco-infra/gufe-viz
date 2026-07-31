/**
 * The bundle entry point.
 *
 * Importing this registers every `<gufe-*>` custom element as a side effect —
 * which is the whole API surface for the HTML export and the future notebook
 * widget: put a `<gufe-view>` on the page and set its `.payload`.
 *
 * `mount()` is the two-line convenience on top of that.
 */

import "./gufe-view.js";
import "./views/small-molecule.js";
import "./views/protein.js";
import "./views/ligand-network.js";

export { GufeView, VIEW_TAGS, SUPPORTED_SCHEMA_MAJOR, describeProblem, dispatchProblem } from "./gufe-view.js";
export { PAYLOAD_KINDS, SCHEMA_KINDS, formatIssues, validatePayload } from "./schema/validate.js";
export { GufeSmallMolecule } from "./views/small-molecule.js";
export { GufeProtein } from "./views/protein.js";
export { GufeLigandNetwork, mappingDataFor } from "./views/ligand-network.js";
export { GufeElement, defineElement, type ViewHandle } from "./shared/element.js";
export type * from "./schema/types.js";

/**
 * Put a `<gufe-view>` inside `host` and give it `payload`.
 *
 * Reuses an existing `<gufe-view>` if the host already has one, so calling this
 * again is an update rather than a rebuild — the create/update/destroy cycle
 * (R16) as seen from outside.
 */
export function mount(host: HTMLElement, payload?: unknown): HTMLElement & { payload: unknown } {
  let view = host.querySelector("gufe-view") as (HTMLElement & { payload: unknown }) | null;
  if (!view) {
    view = document.createElement("gufe-view") as HTMLElement & { payload: unknown };
    view.style.cssText = "display:block;width:100%;height:100%;";
    host.appendChild(view);
  }
  if (payload !== undefined) view.payload = payload;
  return view;
}
