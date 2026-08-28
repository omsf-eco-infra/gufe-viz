/**
 * `<gufe-chemical-system>` - the labelled components down one side, the
 * selected one drawn on the other.
 *
 * A chemical system is a dictionary of labels to gufe keys, and each key
 * resolves to a whole, standalone component payload - the same object that
 * would be the top-level payload if that component were visualized on its own.
 * So the detail pane is a nested `<gufe-view>`: this view chooses *which*
 * component, and the dispatcher decides how to draw it, exactly as it would at
 * the top level.
 *
 * That is composition made structural rather than conventional. A new component
 * type gets a view and a dispatch entry, and it appears in here with no change
 * to this file - including `UnknownComponentViz`, which is why one component
 * nobody can draw never stops the rest of the system from drawing.
 */

import { centredMessage, el, floatingWarning, headerStrip, onWidth, statChip, typeBadge } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { FONT } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entriesFor, lookup, type RegistryIndex } from "../schema/registry.js";
import type { ChemicalSystemViz, ComponentViz } from "../schema/types.js";

/**
 * The width below which the component list stops being a column beside the
 * drawing and becomes a strip above it.
 *
 * This view is mounted inside other views as often as it is opened on its own -
 * an alchemical network's node pane is one - and a fixed 220px column against a
 * 300px pane leaves nothing to draw a protein in. Measured on the element
 * rather than on the window, because what matters is the space this view was
 * given, not how big the screen is.
 */
const STACK_BELOW = 520;

/**
 * A chemical system, cut loose as a payload that stands on its own.
 *
 * The counterpart to `mappingPayloadFor`: a node of an alchemical network is
 * already a whole `ChemicalSystemViz`, and what it lacks is a registry of its
 * own holding the components it names by key. What comes out is exactly the
 * payload this element receives when someone drops a chemical system on the
 * page by itself.
 *
 * An unresolvable component is left out rather than refused, because this view
 * already draws a system whose components are partly missing and says how many
 * it could not find. Refusing here would turn a pane that reports the gap into
 * a pane that shows nothing.
 */
export function systemPayloadFor(system: ChemicalSystemViz, registry: RegistryIndex): ChemicalSystemViz {
  return { ...system, registry: entriesFor(registry, Object.values(system.components ?? {})) };
}

/** What to call a component in the list: its own name, or its type. */
function componentLabel(component: ComponentViz): string {
  return component.name || component.type.replace(/Viz$/, "");
}

/** The gufe class a component payload stands for, for the badge. */
function componentType(component: ComponentViz): string {
  return component.type === "UnknownComponentViz"
    ? component.gufe_type
    : component.type.replace(/Viz$/, "");
}

export class GufeChemicalSystem extends GufeElement<ChemicalSystemViz> {
  protected override placeholder(): string {
    return "Waiting for a ChemicalSystem payload...";
  }

  protected renderView(host: HTMLDivElement, payload: ChemicalSystemViz): ViewHandle {
    // The labels map to gufe keys; the components themselves are in the
    // registry. A key that names no entry is a schema-valid payload this has to
    // survive - JSON Schema cannot express "this key resolves" - so it is
    // counted and reported rather than crashed on, and the rest still draws.
    const registry = buildRegistry(payload);
    const entries: [string, ComponentViz][] = [];
    const unresolved: string[] = [];
    for (const [label, key] of Object.entries(payload.components ?? {})) {
      const component = lookup(registry, key) as ComponentViz | undefined;
      if (component) entries.push([label, component]);
      else unresolved.push(label);
    }

    const bar = headerStrip(payload.name || "Chemical system");
    bar.statsEl.appendChild(statChip("components", String(entries.length)));
    host.appendChild(bar);

    if (!entries.length) {
      // Naming the cause matters: "no components" and "its components are
      // missing from the registry" are very different bugs to go looking for.
      host.appendChild(
        centredMessage(
          unresolved.length
            ? "None of this system's components are in its registry."
            : "This chemical system has no components.",
        ),
      );
      return {};
    }

    const split = el("div", "flex:1;min-height:0;position:relative;display:flex;flex-direction:row;");
    host.appendChild(split);
    if (unresolved.length) {
      floatingWarning(
        split,
        `${unresolved.length} component${unresolved.length === 1 ? "" : "s"} named by this system ` +
          `(${unresolved.join(", ")}) are not in its registry`,
      );
    }

    const list = el("div", `min-width:0;overflow:auto;display:flex;gap:6px;padding:10px;background:${T.panelBg};`);
    split.appendChild(list);

    const detail = el("div", "flex:1;min-width:0;min-height:0;display:flex;flex-direction:column;");
    split.appendChild(detail);

    // The nested dispatcher. Created once and re-pointed at a different
    // component on each selection, so switching is an update rather than a
    // rebuild - the same create/update/destroy contract the top level uses.
    const view = el("div", "flex:1;min-height:0;display:flex;") as HTMLDivElement;
    detail.appendChild(view);
    const child = document.createElement("gufe-view") as HTMLElement & { payload: unknown; resize?(): void };
    child.style.cssText = "flex:1;min-width:0;min-height:0;";
    view.appendChild(child);

    const buttons: HTMLButtonElement[] = [];
    const select = (index: number): void => {
      buttons.forEach((button, i) => {
        const active = i === index;
        button.style.background = active ? T.cardBgActive : T.cardBg;
        button.style.borderColor = active ? T.cardBorderActive : T.cardBorder;
      });
      child.payload = entries[index][1];
    };

    entries.forEach(([label, component], index) => {
      const button = el(
        "button",
        "display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:8px 10px;text-align:left;" +
          `border:1px solid ${T.cardBorder};border-radius:8px;background:${T.cardBg};cursor:pointer;` +
          `font-family:inherit;font-size:${FONT.body};flex-shrink:0;`,
      );
      button.appendChild(el("span", `font-weight:700;color:${T.textPrimary};`, label));
      button.appendChild(el("span", `font-size:${FONT.small};color:${T.textMuted};`, componentLabel(component)));
      button.appendChild(typeBadge(componentType(component)));
      button.onclick = () => select(index);
      buttons.push(button);
      list.appendChild(button);
    });

    // Beside the drawing when there is room for both, above it when there is
    // not. Only the flip is acted on, so a drag across the width restyles once
    // rather than per pixel.
    let stacked: boolean | null = null;
    const stopWatching = onWidth(host, (width) => {
      const narrow = width > 0 && width < STACK_BELOW;
      if (narrow === stacked) return;
      stacked = narrow;
      split.style.flexDirection = narrow ? "column" : "row";
      list.style.flex = narrow ? "0 0 auto" : "0 0 220px";
      list.style.flexDirection = narrow ? "row" : "column";
      list.style.borderRight = narrow ? "none" : `1px solid ${T.splitBorder}`;
      list.style.borderBottom = narrow ? `1px solid ${T.splitBorder}` : "none";
      for (const button of buttons) button.style.width = narrow ? "auto" : "100%";
      child.resize?.();
    });

    select(0);

    return {
      onResize: () => child.resize?.(),
      // Removing the nested view fires its own `disconnectedCallback`, which is
      // where whatever it mounted releases its viewers.
      cleanup: () => {
        stopWatching();
        child.remove();
      },
    };
  }
}

defineElement("gufe-chemical-system", GufeChemicalSystem);
