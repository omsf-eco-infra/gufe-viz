/**
 * `<gufe-view>`: the dispatcher, and the browser end of the contract.
 *
 * Set `.payload` and it does two things in order: validate against
 * `schema/gufe-viz.schema.json`, then mount the `<gufe-*>` element that claims
 * the payload's `type`.
 *
 * There is no version check, because a payload carries no version. Every
 * consumer ships the reader and the writer in one artifact, so the two cannot be at different
 * versions. The version would normally lives in the schema's `$id`, however,
 * that might not be checked as there are currently no plans for external
 * consumers of the schmea.
 *
 * Nothing here throws at the caller, because the caller is often a notebook
 * widget with no way to surface an exception. Every failure, e.g. a payload that is
 * not an object, a type with no view, a missing required field, they all become a panel
 * that names what happened and where.
 *
 * When the debug switch is on (`?debug` in the URL, a `debug` attribute on the
 * element, or `window.GUFE_VIZ_DEBUG`) the payload is also printed to the
 * console verbatim, before it is validated. That is the answer to "what JSON did
 * the browser actually get?", which is otherwise unreadable inside the page.
 */

import { centredMessage, el, esc } from "./shared/dom.js";
import { logPayload } from "./shared/debug.js";
import {
  defineElement,
  GufeElement,
  type ViewHandle,
} from "./shared/element.js";
import { T } from "./shared/theme.js";
import { formatIssues, validatePayload } from "./schema/validate.js";
import type { PayloadType } from "./schema/types.js";

/**
 * The dispatch table: `type` -> custom element tag.
 *
 * This is the TypeScript half of the cross-language parity test: every key here
 * must be a `type` the schema declares. A type in the schema with no entry here renders the "no
 * visualization for X yet" panel.
 */
export const VIEW_TAGS: Partial<Record<PayloadType, string>> = {
  AlchemicalNetworkViz: "gufe-alchemical-network",
  SmallMoleculeComponentViz: "gufe-small-molecule",
  ProteinComponentViz: "gufe-protein",
  ProteinMembraneComponentViz: "gufe-protein",
  ProtocolViz: "gufe-protocol",
  SolvatedPDBComponentViz: "gufe-protein",
  LigandNetworkViz: "gufe-ligand-network",
  ChemicalSystemViz: "gufe-chemical-system",
  LigandAtomMappingViz: "gufe-atom-mapping",
  TransformationViz: "gufe-transformation",
  SolventComponentViz: "gufe-solvent",
  UnknownComponentViz: "gufe-unknown-component",
};

interface UnknownPayload {
  type?: unknown;
  name?: unknown;
}

/** Why a payload cannot be drawn, in words a user can act on. */
export interface DispatchProblem {
  message: string;
  /** Per-field validation issues, when the payload failed the schema. */
  detail?: string;
}

export function describeProblem(payload: unknown): DispatchProblem | null {
  if (
    payload == null ||
    typeof payload !== "object" ||
    Array.isArray(payload)
  ) {
    return {
      message:
        "This does not look like a gufe-viz payload (expected a JSON object).",
    };
  }

  const { type } = payload as UnknownPayload;
  if (typeof type !== "string" || !type) {
    return {
      message:
        "This payload has no `type`, so there is nothing to say what it is.",
    };
  }

  // Order matters. A `type` nobody has ever declared is not a malformed
  // SmallMoleculeComponentViz, it is an unknown thing, and saying "does not
  // match the schema" about it would be true but unhelpful. Answer the bigger
  // question first.
  if (!VIEW_TAGS[type as PayloadType]) return noVisualization(type);

  const { valid, issues } = validatePayload(payload);
  if (!valid) {
    return {
      message: `This payload says it is a ${type}, but it does not match the gufe-viz schema.`,
      detail: formatIssues(issues),
    };
  }
  return null;
}

function noVisualization(type: string): DispatchProblem {
  const known = Object.keys(VIEW_TAGS).sort().join(", ");
  return {
    message: `Sorry, there is no visualization for ${type} yet. This build can draw: ${known}.`,
  };
}

/** Back-compat shim for callers that only want the sentence. */
export function dispatchProblem(payload: unknown): string | null {
  return describeProblem(payload)?.message ?? null;
}

export class GufeView extends GufeElement<unknown> {
  protected override placeholder(): string {
    return "Waiting for data...";
  }

  protected renderView(host: HTMLDivElement, payload: unknown): ViewHandle {
    // Before validation and before dispatch, so that the payload which failed
    // is the one printed. See `shared/debug.ts` for the three ways to turn
    // this on; it costs one attribute read when it is off.
    logPayload("payload", payload, this);

    const problem = describeProblem(payload);
    if (problem) {
      host.appendChild(unsupportedPanel(problem, payload));
      return {};
    }

    const type = (payload as { type: PayloadType }).type;
    const tag = VIEW_TAGS[type]!;
    const child = document.createElement(tag) as HTMLElement & {
      payload?: unknown;
    };
    child.style.cssText = "flex:1;min-height:0;min-width:0;";
    // Set the payload before connecting: the element renders in
    // `connectedCallback`, so this makes it a single render rather than a
    // placeholder that is immediately replaced.
    child.payload = payload;
    host.appendChild(child);

    return {
      onResize: () => (child as { resize?(): void }).resize?.(),
      // Removing the child fires its own `disconnectedCallback`, which is where
      // its viewers and observers are released
      cleanup: () => child.remove(),
    };
  }
}

/**
 * The graceful-degradation panel. It names the thing it could not draw,
 * lists the failing fields when there are any, and shows the payload's own
 * shape.
 */
function unsupportedPanel(
  problem: DispatchProblem,
  payload: unknown,
): HTMLDivElement {
  const wrap = el(
    "div",
    "flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:32px;",
  );

  wrap.appendChild(centredMessage(problem.message));

  const mono = (text: string, isError: boolean) =>
    el(
      "div",
      "max-width:640px;padding:8px 12px;border-radius:6px;font-size:11px;white-space:pre-wrap;" +
        "font-family:ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;" +
        (isError
          ? `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`
          : `background:${T.panelBg};color:${T.textMuted2};border:1px solid ${T.cardBorder};`),
      text,
    );

  if (problem.detail) wrap.appendChild(mono(problem.detail, true));

  const summary = describePayload(payload);
  if (summary) wrap.appendChild(mono(summary, false));

  return wrap;
}

function describePayload(payload: unknown): string | null {
  if (payload == null || typeof payload !== "object") return null;
  const p = payload as UnknownPayload;
  const bits: string[] = [];
  if (typeof p.type === "string") bits.push(`type: ${esc(p.type)}`);
  if (typeof p.name === "string" && p.name) bits.push(`name: ${esc(p.name)}`);
  const keys = Object.keys(payload);
  if (keys.length)
    bits.push(
      `keys: ${keys.slice(0, 12).join(", ")}${keys.length > 12 ? ", ..." : ""}`,
    );
  return bits.length ? bits.join("\n") : null;
}

defineElement("gufe-view", GufeView);
