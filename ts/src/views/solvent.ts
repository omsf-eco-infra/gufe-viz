/**
 * `<gufe-solvent>` - the settings card, and a schematic to go with it.
 *
 * A SolventComponent has no structure: it is bulk conditions, and gufe carries
 * it as five fields. So this view prints those fields, and draws a box of
 * solvent with ions in it purely as a schematic - the dots are placed by a
 * seeded generator, not by anything physical, and the caption says so. The
 * alternative, an empty pane where every other component type shows a picture,
 * reads as a failure rather than as "there is nothing here to draw".
 */

import { card, el, fieldRow, headerStrip, statChip } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { svg, titled } from "../shared/svg.js";
import { T } from "../shared/theme.js";
import type { SolventComponentViz } from "../schema/types.js";

const BOX = { width: 340, height: 260, padding: 14, radius: 12 };
/** Dots per picture. Enough to read as bulk, few enough to stay crisp. */
const SOLVENT_DOTS = 150;
/**
 * How many ion pairs a molar concentration is drawn as. Physiological saline
 * (0.15 molar) lands on six pairs, which is legible; everything else is scaled
 * from that and clamped, because this is a picture of "salty" versus "not",
 * not a count anybody should read a number off.
 */
const IONS_PER_MOLAR = 40;
const MAX_ION_PAIRS = 24;

/**
 * A small deterministic generator, so the same solvent draws the same picture
 * every time. `Math.random()` would reshuffle the dots on every re-render -
 * including a re-render caused by a resize - which looks like the data changed.
 */
function makeRng(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

/** The leading number of a display concentration such as "0.15 molar". */
export function parseConcentration(value: string | undefined): number | null {
  const match = /-?\d+(\.\d+)?([eE][-+]?\d+)?/.exec(value ?? "");
  if (!match) return null;
  const parsed = Number(match[0]);
  return Number.isFinite(parsed) ? parsed : null;
}

function ionPairs(concentration: number | null): number {
  if (concentration == null || concentration <= 0) return 0;
  return Math.max(1, Math.min(MAX_ION_PAIRS, Math.round(concentration * IONS_PER_MOLAR)));
}

/** The box, its solvent dots and its ions - one static SVG. */
function schematic(payload: SolventComponentViz): SVGSVGElement {
  const root = svg("svg", {
    viewBox: `0 0 ${BOX.width} ${BOX.height}`,
    style: "width:100%;height:100%;max-width:100%;",
    role: "img",
  });
  titled(root, `${payload.smiles || "solvent"} box`);

  root.appendChild(
    svg("rect", {
      x: 1,
      y: 1,
      width: BOX.width - 2,
      height: BOX.height - 2,
      rx: BOX.radius,
      fill: T.boxFill,
      stroke: T.boxStroke,
      "stroke-width": 1.5,
    }),
  );

  const rng = makeRng(0x5f3759df);
  const place = () => ({
    x: BOX.padding + rng() * (BOX.width - 2 * BOX.padding),
    y: BOX.padding + rng() * (BOX.height - 2 * BOX.padding),
  });

  for (let i = 0; i < SOLVENT_DOTS; i++) {
    const { x, y } = place();
    root.appendChild(svg("circle", { cx: x, cy: y, r: 2.4, fill: T.textMuted2, "fill-opacity": 0.45 }));
  }

  const pairs = ionPairs(parseConcentration(payload.ion_concentration));
  const ions: [string, string][] = [
    [payload.positive_ion, T.diffAdded],
    [payload.negative_ion, T.diffRemoved],
  ];
  for (const [label, colour] of ions) {
    for (let i = 0; i < pairs; i++) {
      const { x, y } = place();
      const dot = svg("circle", { cx: x, cy: y, r: 5.5, fill: colour, "fill-opacity": 0.85 });
      root.appendChild(titled(dot, label));
    }
  }

  return root;
}

export class GufeSolvent extends GufeElement<SolventComponentViz> {
  protected override placeholder(): string {
    return "Waiting for a SolventComponent payload...";
  }

  protected renderView(host: HTMLDivElement, payload: SolventComponentViz): ViewHandle {
    const bar = headerStrip(payload.name || "Solvent");
    bar.statsEl.appendChild(statChip("neutralized", payload.neutralize ? "yes" : "no"));
    bar.statsEl.appendChild(statChip(payload.positive_ion, "", T.diffAdded));
    bar.statsEl.appendChild(statChip(payload.negative_ion, "", T.diffRemoved));
    host.appendChild(bar);

    const split = el(
      "div",
      "flex:1;min-height:0;display:flex;flex-wrap:wrap;gap:16px;padding:16px;overflow:auto;align-items:flex-start;",
    );
    host.appendChild(split);

    const fields = card();
    fields.style.flex = "1 1 320px";
    fields.appendChild(fieldRow("SMILES", payload.smiles, true));
    fields.appendChild(fieldRow("Positive ion", payload.positive_ion));
    fields.appendChild(fieldRow("Negative ion", payload.negative_ion));
    fields.appendChild(fieldRow("Ion concentration", payload.ion_concentration));
    fields.appendChild(fieldRow("Neutralize", payload.neutralize ? "yes" : "no"));
    split.appendChild(fields);

    const picture = card();
    picture.style.flex = "1 1 340px";
    picture.style.alignItems = "center";
    picture.appendChild(schematic(payload));
    picture.appendChild(
      el(
        "div",
        `padding-top:10px;font-size:11px;text-align:center;color:${T.textMuted2};`,
        "Schematic only: the dots show which ions are present, not how many.",
      ),
    );
    split.appendChild(picture);

    return {};
  }
}

defineElement("gufe-solvent", GufeSolvent);
