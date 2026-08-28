/**
 * The gallery: every component, every example payload, one scrolling page.
 *
 * The point is that a change in one place can be checked everywhere it shows up,
 * in one reload. Each example renders through `<gufe-view>` the real dispatch
 * path, and once the shared components exist this will also render them in
 * their *embedded* contexts, so the atom-mapping viewer can be checked
 * standalone, inside the ligand network and inside the transformation view at
 * the same time.
 *
 * Dev-only: nothing here is part of the shipped bundle.
 */

import { mount } from "../index.js";
import { withDebugFlag } from "../shared/debug.js";
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

/**
 * How far outside the viewport a card mounts, and how far out it is released.
 *
 * Cards mount lazily because several of them create a WebGL context - the two
 * 3D panes, three proteins, the mapping overlay, and whatever a chemical system
 * or a transformation nests - and browsers cap live contexts at somewhere around
 * eight to sixteen. Mounting all fourteen at once silently blanks the ones past
 * the cap, which reads as "my view is broken" rather than "the browser ran out".
 *
 * Releasing again on the way out is what keeps that true after a long scroll.
 * The release margin is wider than the mount margin so a card near the edge does
 * not flicker between the two.
 */
const MOUNT_MARGIN = "600px";
const RELEASE_MARGIN = "1400px";

export async function buildGallery(host: HTMLElement): Promise<void> {
  const paths = Object.keys(EXAMPLES).sort();

  const header = document.createElement("header");
  header.style.cssText =
    "padding:16px 20px 4px;font:13px/1.5 ui-sans-serif,system-ui,sans-serif;" + `color:${T.textMuted};`;
  header.innerHTML =
    `<h1 style="margin:0 0 4px;font-size:18px;color:${T.titleColor};">gufe-viz gallery</h1>` +
    `<div>${paths.length} example payload${paths.length === 1 ? "" : "s"} from <code>examples/</code>, ` +
    "each rendered through <code>&lt;gufe-view&gt;</code>. " +
    `<a href="${withDebugFlag("./parity.html")}" style="color:${T.titleColor};">mapping parity -&gt;</a></div>`;
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
    // Through `withDebugFlag` so that `?debug` on the gallery follows the link:
    // the page being opened reads its own URL, and an example worth opening
    // alone is usually one being debugged.
    const href = withDebugFlag(`./index.html?file=${encodeURIComponent(EXAMPLE_URLS[path] ?? "")}`);
    bar.innerHTML =
      `<b style="color:${T.textPrimary};font-family:ui-monospace,Menlo,monospace;">${name}</b>` +
      `<a href="${href}" style="margin-left:auto;color:${T.titleColor};">open alone -></a>`;
    card.appendChild(bar);

    const stage = document.createElement("div");
    stage.style.cssText = `height:${CARD_HEIGHT};`;
    card.appendChild(stage);
    host.appendChild(card);

    placeholder(stage, name);
    observe(stage, path, name);
  }
}

/** What a card shows before it is scrolled to. */
function placeholder(stage: HTMLElement, name: string): void {
  stage.replaceChildren();
  stage.style.cssText =
    `height:${CARD_HEIGHT};display:flex;align-items:center;justify-content:center;` +
    `color:${T.textMuted2};font:12px ui-sans-serif,system-ui,sans-serif;`;
  stage.textContent = `${name} - scroll to draw`;
}

let mountObserver: IntersectionObserver | null = null;
let releaseObserver: IntersectionObserver | null = null;
const pending = new Map<Element, { path: string; name: string }>();
const mounted = new Set<Element>();

function observe(stage: HTMLElement, path: string, name: string): void {
  if (typeof IntersectionObserver === "undefined") {
    void draw(stage, path, name);
    return;
  }

  mountObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const card = pending.get(entry.target);
        if (card) void draw(entry.target as HTMLElement, card.path, card.name);
      }
    },
    { rootMargin: MOUNT_MARGIN },
  );

  releaseObserver ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting || !mounted.has(entry.target)) continue;
        // Removing the element fires its `disconnectedCallback`, which is where
        // a 3Dmol viewer gives its context back.
        mounted.delete(entry.target);
        const card = pending.get(entry.target);
        if (card) placeholder(entry.target as HTMLElement, card.name);
      }
    },
    { rootMargin: RELEASE_MARGIN },
  );

  pending.set(stage, { path, name });
  mountObserver.observe(stage);
  releaseObserver.observe(stage);
}

async function draw(stage: HTMLElement, path: string, name: string): Promise<void> {
  if (mounted.has(stage)) return;
  mounted.add(stage);
  stage.replaceChildren();
  stage.style.cssText = `height:${CARD_HEIGHT};`;
  try {
    const mod = await EXAMPLES[path]();
    mount(stage, mod.default);
  } catch (e) {
    stage.style.cssText = `padding:20px;color:${T.errorFg};font:12px ui-sans-serif,system-ui,sans-serif;`;
    stage.textContent = `Failed to load ${name}: ${errText(e)}`;
  }
}
