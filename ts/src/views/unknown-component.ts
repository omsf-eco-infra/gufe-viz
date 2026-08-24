/**
 * `<gufe-unknown-component>` - the panel for a component nobody wrote a view
 * for.
 *
 * gufe supports Component subclasses defined outside gufe, so meeting one is an
 * expected outcome rather than an error. Python has already decided that
 * here: it emits an `UnknownComponentViz` carrying the class name, and this is
 * the view of *that* - a stated, named "no picture for this", rather than the
 * dispatcher's fallback panel for a payload it could not understand at all.
 *
 * The distinction matters inside a chemical system, where one unrecognized
 * component must not stop the rest of the system from drawing.
 */

import { card, el, fieldRow, headerStrip, typeBadge } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { T } from "../shared/theme.js";
import type { UnknownComponentViz } from "../schema/types.js";

export class GufeUnknownComponent extends GufeElement<UnknownComponentViz> {
  protected override placeholder(): string {
    return "Waiting for a component payload...";
  }

  protected renderView(host: HTMLDivElement, payload: UnknownComponentViz): ViewHandle {
    const bar = headerStrip(payload.name || "Unnamed component", "Component");
    bar.statsEl.appendChild(typeBadge(payload.gufe_type));
    host.appendChild(bar);

    const body = el("div", "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;");
    host.appendChild(body);

    const panel = card();
    panel.style.maxWidth = "460px";
    panel.appendChild(
      el(
        "div",
        `font-size:14px;font-weight:600;padding-bottom:6px;color:${T.textPrimary};`,
        `There is no visualization for ${payload.gufe_type}.`,
      ),
    );
    panel.appendChild(
      el(
        "div",
        `font-size:12px;line-height:1.6;padding-bottom:10px;color:${T.textMuted};`,
        "gufe lets a project define its own Component subclasses, so this is a " +
          "component this build has never been taught to draw - not a broken payload. " +
          "Everything gufe knows about it that survives serialization is below.",
      ),
    );
    panel.appendChild(fieldRow("Name", payload.name || "(unnamed)"));
    panel.appendChild(fieldRow("gufe class", payload.gufe_type, true));
    body.appendChild(panel);

    return {};
  }
}

defineElement("gufe-unknown-component", GufeUnknownComponent);
