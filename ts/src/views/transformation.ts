/**
 * `<gufe-transformation>` - what changes between two chemical systems, and how
 * the atoms line up while it changes.
 *
 * The top half is a diff. Both states are dictionaries keyed by label, so the
 * comparison is done per label rather than per position: "protein" in state A is
 * compared with "protein" in state B, and a label present on one side only is an
 * addition or a removal rather than a silent mismatch.
 *
 * The bottom half embeds `<gufe-atom-mapping>` - the same element the standalone
 * mapping payload renders through, and the same one the ligand-network view
 * embeds. A NonTransformation arrives here as a diff with no differences and no
 * mappings, which is exactly what it is.
 */

import { buttonGroup, centredMessage, el, headerStrip, statChip, typeBadge } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { FONT, PANE_LABEL } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookup, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import { mappingPayloadFor } from "./atom-mapping.js";
import type {
  ChemicalSystemViz,
  ComponentKey,
  ComponentViz,
  ProtocolViz,
  TransformationViz,
} from "../schema/types.js";

export type DiffStatus = "unchanged" | "changed" | "added" | "removed";

const STATUS_COLOR: Record<DiffStatus, string> = {
  unchanged: T.diffUnchanged,
  changed: T.diffChanged,
  added: T.diffAdded,
  removed: T.diffRemoved,
};

/**
 * How one label differs between the two states.
 *
 * Sameness is whole-payload equality, deliberately: two components are the same
 * for this view's purposes when everything it could possibly show about them is
 * the same. A protein whose PDB differs by one atom is "changed" even though its
 * name did not move, and that is the honest answer.
 */
export function diffStatus(a: ComponentKey | undefined, b: ComponentKey | undefined): DiffStatus {
  if (a && !b) return "removed";
  if (!a && b) return "added";
  // Keys rather than payloads, which is both cheaper and more exact: a gufe key
  // is content-derived, so equal keys mean equal gufe objects and there is no
  // megabyte of PDB to stringify to find that out.
  return a === b ? "unchanged" : "changed";
}

/** Every label either state carries, in a stable order. */
function labelsOf(stateA: ChemicalSystemViz, stateB: ChemicalSystemViz): string[] {
  return [...new Set([...Object.keys(stateA.components ?? {}), ...Object.keys(stateB.components ?? {})])].sort();
}

function describe(component: ComponentViz | undefined): { name: string; type: string } | null {
  if (!component) return null;
  const type = component.type === "UnknownComponentViz" ? component.gufe_type : component.type.replace(/Viz$/, "");
  return { name: component.name || "(unnamed)", type };
}

/** One side of one row: what this state has under this label, if anything. */
function componentCell(component: ComponentViz | undefined, status: DiffStatus): HTMLDivElement {
  const cell = el(
    "div",
    "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;gap:4px;padding:8px 10px;border-radius:8px;" +
      `background:${T.cardBg};border:1px solid ${T.cardBorder};`,
  );
  const described = describe(component);
  if (!described) {
    cell.style.background = "transparent";
    cell.style.borderStyle = "dashed";
    cell.appendChild(el("span", `font-size:${FONT.body};color:${T.textMuted2};`, "absent"));
    return cell;
  }
  cell.style.borderColor = status === "unchanged" ? T.cardBorder : STATUS_COLOR[status];
  cell.appendChild(el("span", `font-size:${FONT.body};font-weight:600;color:${T.textPrimary};`, described.name));
  cell.appendChild(typeBadge(described.type));
  return cell;
}

/** "A to B" for a mapping whose endpoints are keys, for the picker. */
function mappingLabelFor(mapping: { componentA: string; componentB: string }, registry: RegistryIndex): string {
  const from = lookup(registry, mapping.componentA);
  const to = lookup(registry, mapping.componentB);
  return `${from ? entryLabel(from) : "A"} to ${to ? entryLabel(to) : "B"}`;
}

export class GufeTransformation extends GufeElement<TransformationViz> {
  protected override placeholder(): string {
    return "Waiting for a Transformation payload...";
  }

  protected renderView(host: HTMLDivElement, payload: TransformationViz): ViewHandle {
    // Both states and the protocol are gufe keys. Every transformation of a
    // network usually names the same protocol, which is the whole reason it is
    // a registry entry rather than a field repeated per edge.
    const registry = buildRegistry(payload);
    const stateA = lookupOfType<ChemicalSystemViz>(registry, payload.stateA, "ChemicalSystemViz");
    const stateB = lookupOfType<ChemicalSystemViz>(registry, payload.stateB, "ChemicalSystemViz");
    const protocol = lookupOfType<ProtocolViz>(registry, payload.protocol, "ProtocolViz");
    const mappings = payload.mappings ?? [];

    const bar = headerStrip(payload.name || "Transformation");
    // A Protocol has no name of its own, so the class name is what identifies it.
    bar.statsEl.appendChild(statChip("protocol", protocol?.gufe_type || protocol?.name || "-"));
    bar.statsEl.appendChild(statChip("mappings", String(mappings.length)));
    host.appendChild(bar);

    if (!stateA || !stateB) {
      host.appendChild(
        centredMessage("This transformation names two chemical systems, and its registry does not hold them."),
      );
      return {};
    }
    const labels = labelsOf(stateA, stateB);

    // --- the diff ---
    const diff = el("div", "flex:0 0 auto;max-height:45%;overflow:auto;padding:12px 14px;");
    host.appendChild(diff);

    const heads = el("div", "display:flex;gap:10px;padding:0 0 6px 120px;");
    for (const [side, state] of [
      ["State A", stateA],
      ["State B", stateB],
    ] as const) {
      heads.appendChild(
        el(
          "div",
          `flex:1 1 50%;min-width:0;font-size:${FONT.small};font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${T.textMuted2};`,
          `${side}${state.name ? ` - ${state.name}` : ""}`,
        ),
      );
    }
    diff.appendChild(heads);

    for (const label of labels) {
      const keyA = stateA.components?.[label];
      const keyB = stateB.components?.[label];
      const status = diffStatus(keyA, keyB);
      const a = lookup(registry, keyA) as ComponentViz | undefined;
      const b = lookup(registry, keyB) as ComponentViz | undefined;

      const row = el("div", "display:flex;align-items:stretch;gap:10px;padding:4px 0;");
      const gutter = el("div", "flex:0 0 110px;display:flex;align-items:center;gap:6px;min-width:0;");
      gutter.appendChild(
        el("span", `width:8px;height:8px;border-radius:50%;flex-shrink:0;background:${STATUS_COLOR[status]};`),
      );
      const name = el("span", `font-size:${FONT.body};font-weight:700;color:${T.textPrimary};overflow-wrap:anywhere;`, label);
      name.title = status;
      gutter.appendChild(name);
      row.appendChild(gutter);
      row.appendChild(componentCell(a, status));
      row.appendChild(componentCell(b, status));
      diff.appendChild(row);
    }

    const legend = el(
      "div",
      `display:flex;flex-wrap:wrap;gap:12px;padding:8px 0 0;font-size:${FONT.small};color:${T.textMuted};`,
    );
    for (const status of ["unchanged", "changed", "added", "removed"] as DiffStatus[]) {
      legend.appendChild(statChip(status, "", STATUS_COLOR[status]));
    }
    diff.appendChild(legend);

    // --- the mappings ---
    const mappingLabel = el(
      "div",PANE_LABEL,
      "Atom mapping",
    );
    host.appendChild(mappingLabel);

    if (!mappings.length) {
      host.appendChild(
        centredMessage(
          "This transformation carries no atom mapping - nothing here maps one small molecule onto another.",
        ),
      );
      return {};
    }

    // Created before the picker that drives it, and appended after it, so the
    // picker's callback has something to point at from the first click.
    const child = document.createElement("gufe-atom-mapping") as HTMLElement & {
      payload: unknown;
      resize?(): void;
    };
    child.style.cssText = "flex:1;min-height:0;min-width:0;";
    // Cut loose with a registry of its own, so the embedded element resolves its
    // endpoints exactly as it would if the mapping were the whole payload.
    const show = (index: number) => {
      child.payload = mappingPayloadFor(mappings[index], registry);
    };
    show(0);

    if (mappings.length > 1) {
      const picker = el(
        "div",
        `display:flex;align-items:center;gap:8px;padding:6px 10px;flex-shrink:0;font-size:${FONT.small};` +
          `background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textMuted};`,
      );
      picker.appendChild(
        buttonGroup(
          mappings.map((mapping, index) => ({
            id: String(index),
            label: mapping.name || mappingLabelFor(mapping, registry),
          })),
          "0",
          (id) => show(Number(id)),
        ),
      );
      host.appendChild(picker);
    }

    host.appendChild(child);

    return {
      onResize: () => child.resize?.(),
      cleanup: () => child.remove(),
    };
  }
}

defineElement("gufe-transformation", GufeTransformation);
