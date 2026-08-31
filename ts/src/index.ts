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
import "./views/alchemical-network.js";
import "./views/atom-mapping.js";
import "./views/chemical-system.js";
import "./views/protocol.js";
import "./views/solvent.js";
import "./views/transformation.js";
import "./views/unknown-component.js";

export { GufeView, VIEW_TAGS, describeProblem, dispatchProblem } from "./gufe-view.js";
export { PAYLOAD_TYPES, SCHEMA_TYPES, formatIssues, validateAs, validatePayload } from "./schema/validate.js";
export { buildRegistry, entriesFor, entryLabel, lookup, lookupOfType, type RegistryEntry, type RegistryIndex } from "./schema/registry.js";
export { GufeSmallMolecule } from "./views/small-molecule.js";
export { GufeProtein, type PdbPayload } from "./views/protein.js";
export { GufeProtocol } from "./views/protocol.js";
export { GufeLigandNetwork } from "./views/ligand-network.js";
export { GufeAlchemicalNetwork } from "./views/alchemical-network.js";
export {
  GufeAtomMapping,
  inFrameOf,
  liftFor,
  mappingPayloadFor,
  openfeShift,
  pairColour,
  uniqueAtoms,
  type Uniques,
} from "./views/atom-mapping.js";
export { applyRT, kabsch, type Transform, type Vec3 } from "./shared/kabsch.js";
export { GufeChemicalSystem, systemPayloadFor } from "./views/chemical-system.js";
export { GufeSolvent } from "./views/solvent.js";
export { GufeTransformation, diffStatus, transformationPayloadFor, type DiffStatus } from "./views/transformation.js";
export { GufeUnknownComponent } from "./views/unknown-component.js";
export { GufeElement, defineElement, type ViewHandle } from "./shared/element.js";
export {
  CHROME_OPEN_BY_DEFAULT,
  HIDE_NAME_ATTRIBUTE,
  chromeMenu,
  nameWanted,
  onWidth,
  orientMenuPanel,
  splitter,
  type ChromeMenu,
  type ChromeMenuOptions,
  type SplitterOptions,
} from "./shared/dom.js";
export { MAPPING_COLORS, MAPPING_RAMP_3D, MAPPING_RAMP_NAME } from "./shared/atom-colors.js";
export {
  DEFAULT_DEPICT_STYLE,
  DEPICT_STYLE,
  DEPICT_STYLE_RANGES,
  markGroups,
  markedBonds,
  normaliseDepictStyle,
  parseAtomSpec,
  uniqueBonds,
  type CircleStyle,
  type CustomAtoms,
  type DepictStyle,
  type ElementColors,
  type HydrogenMode,
  type MarkGroup,
  type MarkStyle,
  type Side,
} from "./shared/depict-style.js";
export {
  align2D,
  alignedToPartner,
  applyTurn,
  laidOut,
  layoutPair,
  withCoords,
  type Layout2D,
  type Turn2D,
  type Vec2,
} from "./shared/depict-layout.js";
export {
  boundedZoom,
  claimGestures,
  DEFAULT_ZOOM_BOUNDS,
  guardWheel,
  resetControl,
  viewerInteraction,
  wheelFactor,
  type BoundedZoom,
  type Interaction,
  type ZoomBounds,
} from "./shared/interact.js";
export {
  extentOf,
  sceneCamera,
  type Camera,
  type CameraOptions,
  type CameraTransform,
  type Extent,
} from "./shared/camera.js";
export {
  exportBlock,
  MULTI_SELECT_HINT,
  selectionText,
  type ExportAs,
  type ExportBlockOptions,
  type ExportWord,
  type SelectableEdge,
  type SelectableNode,
} from "./shared/selection.js";
export { DEBUG_ATTRIBUTE, DEBUG_GLOBAL, debugEnabled, logPayload, payloadJson } from "./shared/debug.js";
export {
  choice,
  flag,
  num,
  setting,
  text as textSetting,
  type Setting,
} from "./shared/settings.js";
import { resetSettings, settings } from "./shared/settings.js";
export { resetSettings, settings };
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

/**
 * The settings a view has remembered, on the console.
 *
 * `window.gufeViz.settings()` answers "what state was this actually in" without
 * a hunt through a storage inspector, and `reset()` puts every view back to how
 * a new reader would find it. Attached the same way the debug switch is: a
 * global, because the thing you need it for is a page you are already looking
 * at and cannot rebuild.
 */
declare global {
  // eslint-disable-next-line no-var
  var gufeViz: { settings: typeof settings; reset: typeof resetSettings } | undefined;
}

if (typeof globalThis !== "undefined") {
  globalThis.gufeViz = { settings, reset: resetSettings };
}
