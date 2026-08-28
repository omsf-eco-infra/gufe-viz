/**
 * Our mapping view beside gufe's own drawing of the same mapping.
 *
 * Everything the test suite asserts about the atom-mapping view is structural:
 * which element mounted, how many atoms were classified, which options were
 * passed. None of that can tell you whether the two pictures actually agree,
 * and "our colours and the existing visualizations match" is the decision the
 * whole colour design rests on. So this puts them side by side and leaves the
 * judging to a person.
 *
 * The reference comes from `pixi run parity-reference`, which calls gufe's
 * `draw_mapping` directly. It is not committed - the bytes depend on the
 * installed RDKit - so this page says how to produce it when it is missing
 * rather than rendering half a comparison.
 *
 * Dev-only: nothing here is part of the shipped bundle.
 */

import { mount } from "../index.js";
import { withDebugFlag } from "../shared/debug.js";
import { errText } from "../shared/dom.js";
import { MAPPING_COLORS } from "../shared/atom-colors.js";
import { T } from "../shared/theme.js";

/** gufe's drawings, if they have been generated. */
const REFERENCE = import.meta.glob<string>("../../../do-not-commit/parity-reference/*.svg", {
  query: "?raw",
  import: "default",
  eager: true,
});

const MAPPING = import.meta.glob<{ default: unknown }>("../../../examples/ligand_atom_mapping.json");

const STAGE_HEIGHT = "620px";

function panel(title: string, note: string): { wrap: HTMLElement; body: HTMLElement } {
  const wrap = document.createElement("section");
  wrap.style.cssText =
    `flex:1 1 50%;min-width:0;border:1px solid ${T.cardBorder};border-radius:10px;overflow:hidden;` +
    `background:${T.cardBg};display:flex;flex-direction:column;`;

  const bar = document.createElement("div");
  bar.style.cssText =
    "display:flex;align-items:baseline;gap:10px;padding:8px 14px;font:12px ui-sans-serif,system-ui,sans-serif;" +
    `background:${T.panelBg};border-bottom:1px solid ${T.cardBorder};color:${T.textMuted};`;
  bar.innerHTML = `<b style="color:${T.textPrimary};">${title}</b><span>${note}</span>`;
  wrap.appendChild(bar);

  const body = document.createElement("div");
  body.style.cssText = `flex:1;min-height:0;display:flex;background:${T.canvas2DBg};`;
  wrap.appendChild(body);
  return { wrap, body };
}

export async function buildParity(host: HTMLElement): Promise<void> {
  const header = document.createElement("header");
  header.style.cssText =
    "padding:16px 20px 4px;font:13px/1.6 ui-sans-serif,system-ui,sans-serif;" + `color:${T.textMuted};`;
  header.innerHTML =
    `<h1 style="margin:0 0 4px;font-size:18px;color:${T.titleColor};">mapping parity</h1>` +
    "<div>Ours on the left, gufe's own drawing on the right, same mapping. " +
    `<a href="${withDebugFlag("./gallery.html")}" style="color:${T.titleColor};">back to the gallery -&gt;</a></div>` +
    "<div style=\"margin-top:8px;\">What has to match, and what to look at:</div>" +
    "<ul style=\"margin:4px 0 0;padding-left:20px;\">" +
    `<li><b style="color:${MAPPING_COLORS.elementChange};">${MAPPING_COLORS.elementChange}</b> ` +
    "on an atom that maps to a <b>different element</b></li>" +
    `<li><b style="color:${MAPPING_COLORS.uniqueAtom};">${MAPPING_COLORS.uniqueAtom}</b> ` +
    "on an atom <b>unique</b> to its side</li>" +
    "<li>everything else <b>unhighlighted</b> - gufe gives core atoms no colour at all</li>" +
    "<li>the molecules <b>black and white</b>, not RDKit's element palette</li>" +
    "<li>every atom labelled with its <b>index</b></li>" +
    "</ul>";
  host.appendChild(header);

  const row = document.createElement("div");
  row.style.cssText = "display:flex;gap:16px;margin:16px 20px;align-items:stretch;";
  host.appendChild(row);

  const ours = panel("ours", "&lt;gufe-atom-mapping&gt;");
  ours.body.style.height = STAGE_HEIGHT;
  row.appendChild(ours.wrap);

  const theirs = panel("gufe", "draw_mapping()");
  theirs.body.style.cssText += "align-items:center;justify-content:center;padding:12px;";
  theirs.body.style.height = STAGE_HEIGHT;
  row.appendChild(theirs.wrap);

  // --- ours ---
  const paths = Object.keys(MAPPING);
  if (!paths.length) {
    ours.body.textContent = "No ligand_atom_mapping.json - run `pixi run examples`.";
  } else {
    try {
      const mod = await MAPPING[paths[0]]();
      mount(ours.body, mod.default);
    } catch (e) {
      ours.body.textContent = `Failed to load the mapping: ${errText(e)}`;
    }
  }

  // --- gufe's ---
  //
  // The pair drawing is the one our 2D panes have to match; the per-molecule
  // ones are there because the view draws each side in a pane of its own.
  const reference = Object.entries(REFERENCE).sort(([a], [b]) => a.localeCompare(b));
  const pair = reference.find(([path]) => path.endsWith("mapping_0_pair.svg"));

  if (!pair) {
    theirs.body.style.color = T.textMuted2;
    theirs.body.style.fontFamily = "ui-sans-serif,system-ui,sans-serif";
    theirs.body.innerHTML =
      "<div style=\"text-align:center;padding:24px;font-size:13px;line-height:1.7;\">" +
      "gufe's drawings have not been generated yet.<br />" +
      `<code style="color:${T.textPrimary};">pixi run parity-reference</code><br />` +
      "<span style=\"font-size:11px;\">Not committed on purpose: the bytes depend on the installed RDKit.</span>" +
      "</div>";
    return;
  }

  theirs.body.innerHTML = pair[1];
  const svg = theirs.body.querySelector("svg");
  if (svg) {
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("style", "width:100%;height:100%;");
  }

  // The single-molecule drawings underneath, at the size the panes use them.
  const singles = reference.filter(([path]) => /mapping_0_[AB]\.svg$/.test(path));
  if (!singles.length) return;

  const strip = document.createElement("div");
  strip.style.cssText = "display:flex;gap:16px;margin:0 20px 24px;";
  for (const [path, content] of singles) {
    const side = panel(path.endsWith("_A.svg") ? "gufe - molecule A alone" : "gufe - molecule B alone", "");
    side.body.style.cssText += "align-items:center;justify-content:center;padding:12px;height:320px;";
    side.body.innerHTML = content;
    const one = side.body.querySelector("svg");
    if (one) {
      one.removeAttribute("width");
      one.removeAttribute("height");
      one.setAttribute("style", "width:100%;height:100%;");
    }
    strip.appendChild(side.wrap);
  }
  host.appendChild(strip);
}
