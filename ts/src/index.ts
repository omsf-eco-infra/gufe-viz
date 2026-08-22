/**
 * The bundle entry point.
 *
 * Importing this registers every `<gufe-*>` custom element and sets it's payload.
 * Each gufe/schema type as a corresponding <gufe-*> element.
 * This is for the HTML export and soon the notebook widget
 */

import "./gufe-view.js";
import "./views/small-molecule.js";
import "./views/protein.js";
import "./views/ligand-network.js";

export { GufeView, VIEW_TAGS, describeProblem, dispatchProblem } from "./gufe-view.js";
export { PAYLOAD_TYPES, SCHEMA_TYPES, formatIssues, validateAs, validatePayload } from "./schema/validate.js";
export { buildRegistry, entryLabel, lookup, lookupOfType, type RegistryEntry, type RegistryIndex } from "./schema/registry.js";
export { GufeSmallMolecule } from "./views/small-molecule.js";
export { GufeProtein } from "./views/protein.js";
export { GufeLigandNetwork, mappingPayloadFor } from "./views/ligand-network.js";
export { GufeElement, defineElement, type ViewHandle } from "./shared/element.js";
export { DEBUG_ATTRIBUTE, DEBUG_GLOBAL, debugEnabled, logPayload, payloadJson } from "./shared/debug.js";
export type * from "./schema/types.js";

/**
 * Put a `<gufe-view>` inside `host` and give it `payload`.
 *
 * Reuses an existing `<gufe-view>` if the host already has one, so calling this
 * again is an update rather than a rebuild - the create/update/destroy cycle
 * as seen from outside.
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
