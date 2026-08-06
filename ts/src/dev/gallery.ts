/**
 * The gallery: every component, every example payload, one scrolling page.
 *
 * The point is that a change in one place can be checked everywhere it shows up,
 * in one reload. Each example renders through `<gufe-view>` - the real dispatch
 * path - and once the shared components exist this will also render them in
 * their *embedded* contexts, so the atom-mapping viewer can be checked
 * standalone, inside the ligand network and inside the transformation view at
 * the same time.
 *
 * Dev-only: nothing here is part of the shipped bundle.
 */

import { mount } from "../index.js";
import { errText } from "../shared/dom.js";
import { T } from "../shared/theme.js";

/**
 * The same `examples/*.json` files pytest and vitest use. Loading them through
 * `import.meta.glob` rather than a hand-kept list means a new example shows up
 * in the gallery the moment it is written.
 */
const EXAMPLES = import.meta.glob<{ default: unknown }>("../../../examples/*.json");

/**
 * The same files again, as URLs. `examples/` lives outside the Vite root, so its
 * dev URL is a `/@fs/...` path rather than anything guessable - the "open alone"
 * links have to come from the bundler, not from string concatenation.
 */
const EXAMPLE_URLS = import.meta.glob<string>("../../../examples/*.json", {
  query: "?url",
  import: "default",
  eager: true,
});

const CARD_HEIGHT = "520px";

export async function buildGallery(host: HTMLElement): Promise<void> {
  const paths = Object.keys(EXAMPLES).sort();

  const header = document.createElement("header");
  header.style.cssText =
    "padding:16px 20px 4px;font:13px/1.5 ui-sans-serif,system-ui,sans-serif;" + `color:${T.textMuted};`;
  header.innerHTML =
    `<h1 style="margin:0 0 4px;font-size:18px;color:${T.titleColor};">gufe-viz gallery</h1>` +
    `<div>${paths.length} example payload${paths.length === 1 ? "" : "s"} from <code>examples/</code>, ` +
    "each rendered through <code>&lt;gufe-view&gt;</code>.</div>";
  host.appendChild(header);

  if (!paths.length) {
    const empty = document.createElement("div");
    empty.style.cssText = `padding:20px;color:${T.textMuted2};font:13px ui-sans-serif,system-ui,sans-serif;`;
    empty.textContent = "No example payloads yet - run `pixi run examples`.";
    host.appendChild(empty);
    return;
  }

  for (const path of paths) {
    const name = path.split("/").pop()!;
    const card = document.createElement("section");
    card.style.cssText =
      `margin:16px 20px;border:1px solid ${T.cardBorder};border-radius:10px;overflow:hidden;` +
      `background:${T.cardBg};`;

    const bar = document.createElement("div");
    bar.style.cssText =
      "display:flex;align-items:baseline;gap:10px;padding:8px 14px;font:12px ui-sans-serif,system-ui,sans-serif;" +
      `background:${T.panelBg};border-bottom:1px solid ${T.cardBorder};color:${T.textMuted};`;
    const href = `./index.html?file=${encodeURIComponent(EXAMPLE_URLS[path] ?? "")}`;
    bar.innerHTML =
      `<b style="color:${T.textPrimary};font-family:ui-monospace,Menlo,monospace;">${name}</b>` +
      `<a href="${href}" style="margin-left:auto;color:${T.titleColor};">open alone -></a>`;
    card.appendChild(bar);

    const stage = document.createElement("div");
    stage.style.cssText = `height:${CARD_HEIGHT};`;
    card.appendChild(stage);
    host.appendChild(card);

    try {
      const mod = await EXAMPLES[path]();
      mount(stage, mod.default);
    } catch (e) {
      stage.style.cssText = `padding:20px;color:${T.errorFg};font:12px ui-sans-serif,system-ui,sans-serif;`;
      stage.textContent = `Failed to load ${name}: ${errText(e)}`;
    }
  }
}
