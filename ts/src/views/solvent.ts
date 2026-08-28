/**
 * `<gufe-solvent>` - the settings table for a SolventComponent.
 *
 * A SolventComponent has no structure: it is bulk conditions, and gufe carries
 * it as a handful of flat fields. So this view is a table of those fields and
 * nothing else. It used to draw a box of dots beside them, which looked like a
 * simulation box but was placed by a seeded generator and counted nothing -
 * a picture that has to caption itself "not quantitative" is telling a reader
 * less than the row it sits next to.
 *
 * There is no header strip either. Its chips coloured the ions to match dots in
 * that picture, and with the picture gone they said what the rows below already
 * say - a title and three chips restating the table they sit on top of.
 */

import { card, el, fieldRow } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import type { SolventComponentViz } from "../schema/types.js";

export class GufeSolvent extends GufeElement<SolventComponentViz> {
  protected override placeholder(): string {
    return "Waiting for a SolventComponent payload...";
  }

  protected renderView(host: HTMLDivElement, payload: SolventComponentViz): ViewHandle {
    const body = el(
      "div",
      "flex:1;min-height:0;overflow:auto;display:flex;align-items:flex-start;justify-content:center;padding:24px;",
    );
    host.appendChild(body);

    // Every field the schema requires, in the order a reader asks for them:
    // what the solvent is, then what is dissolved in it, then its identity.
    const panel = card();
    panel.style.maxWidth = "560px";
    panel.style.width = "100%";
    panel.appendChild(fieldRow("Name", payload.name || "(unnamed)"));
    panel.appendChild(fieldRow("SMILES", payload.smiles, true));
    panel.appendChild(fieldRow("Positive ion", payload.positive_ion));
    panel.appendChild(fieldRow("Negative ion", payload.negative_ion));
    panel.appendChild(fieldRow("Ion concentration", payload.ion_concentration));
    panel.appendChild(fieldRow("Neutralize", payload.neutralize ? "yes" : "no"));
    panel.appendChild(fieldRow("gufe key", payload["gufe-key"], true));
    body.appendChild(panel);

    return {};
  }
}

defineElement("gufe-solvent", GufeSolvent);
