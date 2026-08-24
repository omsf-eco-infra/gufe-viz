/**
 * `<gufe-protocol>` - the card for a gufe Protocol.
 *
 * There is very little to draw, and that is the honest shape of the data rather
 * than a gap: the payload carries a Protocol's class name and nothing else.
 * Settings are deliberately absent - they are large, deeply nested, and nothing
 * reads them - so a card that showed more would be inventing it.
 *
 * It exists because an alchemical network names a protocol on every edge, and
 * "protocol: DummyProtocol" in a detail pane is worth being able to click
 * through to something that says what that is. Adding settings later is an
 * additive change to the schema and a few more rows here.
 */

import { card, el, fieldRow, headerStrip, typeBadge } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { T } from "../shared/theme.js";
import type { ProtocolViz } from "../schema/types.js";

export class GufeProtocol extends GufeElement<ProtocolViz> {
  protected override placeholder(): string {
    return "Waiting for a Protocol payload...";
  }

  protected renderView(host: HTMLDivElement, payload: ProtocolViz): ViewHandle {
    // A Protocol has no name of its own, so `name` is normally empty and the
    // class name is what identifies it to a reader.
    const bar = headerStrip(payload.gufe_type || payload.name || "Protocol", "Protocol");
    bar.statsEl.appendChild(typeBadge(payload.gufe_type));
    host.appendChild(bar);

    const body = el(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:center;justify-content:center;padding:24px;",
    );
    host.appendChild(body);

    const panel = card();
    panel.style.maxWidth = "460px";
    panel.appendChild(fieldRow("gufe class", payload.gufe_type, true));
    if (payload.name) panel.appendChild(fieldRow("Name", payload.name));
    panel.appendChild(fieldRow("gufe key", payload["gufe-key"], true));
    panel.appendChild(
      el(
        "div",
        `padding-top:10px;font-size:11px;line-height:1.6;color:${T.textMuted2};`,
        "A Protocol's settings are not carried in this payload: they are large, " +
          "deeply nested, and nothing draws them yet.",
      ),
    );
    body.appendChild(panel);

    return {};
  }
}

defineElement("gufe-protocol", GufeProtocol);
