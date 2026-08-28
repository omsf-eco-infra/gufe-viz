/**
 * A developer-only escape hatch: turn the page you are looking at into a
 * framejs app, and open it.
 *
 * ## What this is for
 *
 * A generated page is a file. Handing someone a file means attaching it, and an
 * attachment that is a megabyte of inlined bundle is the thing people stop
 * sending. This makes the same picture a link instead, which is what an issue
 * comment, a Slack thread and an office-hours screen share can all take.
 *
 * ## What it is not
 *
 * Not part of the product. It is behind the debug switch (`?debug`, a `debug`
 * attribute, or `window.GUFE_VIZ_DEBUG` - see `debug.ts`), so a page exported
 * for a user never shows it and never reaches the network because of it. It is
 * also the only thing in this codebase that knows framejs exists at runtime, and
 * it is deliberately one file with one call site: deleting it is `rm` plus the
 * two lines in `chromeMenu` that call `framejsMenuItem`.
 *
 * ## How it works
 *
 * A generated page already contains everything a frame needs, so nothing is
 * rebuilt and nothing is re-serialized:
 *
 *   the bundle    the text of the page's own `<script type="module">`, taken
 *                 verbatim. `to_html` inlines it there, and so does the notebook
 *                 shell.
 *   the payload   read off the live element, not out of `<script
 *                 id="gufe-payload">`, so a nested view exports the payload it
 *                 is actually drawing rather than its parent's.
 *   the state     how it is being looked at: `localStorage` less the menu
 *                 toggles, plus whatever the view answers `viewState()` with.
 *                 Both are put back before the bundle runs, because a view reads
 *                 them while it is building itself. See `UiState`.
 *
 * The module handed to framejs is the bundle with a preamble in front of it and
 * one line after it. The preamble builds `gufe-view`, `#gufe-payload` and
 * `#gufe-error`, which is why the script can be copied without being parsed or
 * edited: those are the three things a generated page's bootstrap looks up, so
 * it then runs unchanged. The line after draws the payload if nothing else did,
 * which is what makes the export work where there is no bootstrap - see below.
 *
 * ## The dev pages
 *
 * `ts/index.html` and the gallery carry a two-line module that imports `src/**`,
 * so there is no inlined bundle to lift and no bootstrap to run. Rather than
 * refuse, this falls back to `/gufe-dev-bundle.js`, which the dev server serves
 * from the last `pixi run build` (see `vite.config.ts`). Two consequences worth
 * knowing: the frame shows what was last *built* rather than the sources on
 * screen, which the status line says out loud, and the payload has to be applied
 * by the trailing line above because a plain bundle ends at `export`.
 *
 * ## The frame API
 *
 * Two calls, no account, no SDK:
 *
 *   POST https://framejs.app/j/<slug>.json   {"js": "..."}   creates the frame
 *   open https://framejs.app/j/<slug>                        shows it
 *
 * The slug is a UUIDv7 minted here, which is what lets the tab be opened for a
 * frame whose POST has not come back yet. The POST is `no-cors` because
 * framejs.app answers it with no `Access-Control-Allow-Origin` and does not
 * serve a preflight: `text/plain` keeps it a CORS-simple request, so it is sent
 * and stored, and the opaque response it returns is one this does not need -
 * the slug was never a secret the server had to tell us.
 *
 * An unclaimed frame is temporary and expires. Whoever wants to keep one opens
 * it and claims it with a free account.
 */

import { debugEnabled } from "./debug.js";
import { el, MENU_OPEN_SUFFIX } from "./dom.js";
import { VIEW_STATE_GLOBAL } from "./element.js";
import { PREFIX, settingsDump } from "./settings.js";
import { BUTTON, FONT, SPACE, WEIGHT } from "./style.js";
import { T } from "./theme.js";

/** The accounts layer, which is what mints a shareable `/j/<uuid>`. */
const FRAMEJS_ORIGIN = "https://framejs.app";

/**
 * How small a `<script type="module">` can be and still be a bundle.
 *
 * The dev pages under `ts/` carry a two-line module that imports the sources
 * rather than inlining them, and a frame built from that would load a blank
 * page. Naming the number here makes that case a message instead.
 */
const MIN_BUNDLE_CHARS = 10000;

/** What a view holds. Every `<gufe-*>` element has both; nothing else does. */
interface ViewElement extends HTMLElement {
  payload?: unknown;
  viewState?(): unknown;
}

/**
 * The nearest view containing `node`.
 *
 * Walks up rather than being handed anything, so the one call site stays two
 * lines and no view has to pass anything down. The nearest one wins, which is
 * also the one worth having: the menu inside an embedded view belongs to that
 * view, and the outer `<gufe-view>` is a dispatcher whose handle knows nothing
 * about cameras.
 */
function nearestView(node: HTMLElement): ViewElement | null {
  for (let at: HTMLElement | null = node; at; at = at.parentElement) {
    if ((at as ViewElement).payload != null) return at as ViewElement;
  }
  return null;
}

/**
 * Where the dev server serves the last built bundle. Nothing answers this
 * outside `pixi run dev`, which is what keeps the fallback to the dev pages.
 */
const DEV_BUNDLE_URL = "/gufe-dev-bundle.js";

/** A bundle, and anything the person clicking should know about where it came from. */
interface FoundBundle {
  js: string;
  note: string;
}

/**
 * The page's inlined bundle.
 *
 * The largest inline module wins. A page can legitimately hold more than one
 * script - `to_html` output pasted into a document, a notebook cell beside a
 * widget - and the bundle is always the big one.
 */
function inlinedBundle(): string | null {
  let best = "";
  for (const script of document.querySelectorAll("script[type=module]")) {
    const text = script.textContent || "";
    if (text.length > best.length) best = text;
  }
  return best.length >= MIN_BUNDLE_CHARS ? best : null;
}

/**
 * The bundle to send: the page's own, or the dev server's.
 *
 * The fetch is only ever reached on a page that has no bundle of its own, so a
 * generated page still costs nothing and still touches nothing.
 */
async function findBundle(): Promise<FoundBundle | null> {
  const inlined = inlinedBundle();
  if (inlined) return { js: inlined, note: "" };

  try {
    const res = await fetch(DEV_BUNDLE_URL);
    if (!res.ok) return null;
    const js = await res.text();
    if (js.length < MIN_BUNDLE_CHARS) return null;
    return {
      js,
      note: "Built from the last `pixi run build`, not from the sources on screen.",
    };
  } catch {
    return null;
  }
}

/**
 * A time-ordered UUID (v7), as the framejs CLI mints: 48 bits of millisecond
 * timestamp then 74 random bits, so frames made in a row sort by when they were
 * made. The `/j/` path carries it without the dashes.
 */
function uuidv7Slug(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const ms = Date.now();
  for (let i = 0; i < 6; i++) bytes[i] = Math.floor(ms / 2 ** (40 - i * 8)) & 0xff;
  bytes[6] = (bytes[6] & 0x0f) | 0x70;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Everything about how the page is being looked at, as opposed to what it is
 * looking at. Both halves are optional: a frame without them still draws, it
 * just draws the view as a new reader would find it.
 */
export interface UiState {
  /** `localStorage`, as `settingsDump()` gives it: prefixed keys, raw values. */
  settings: Record<string, string>;
  /** Per-view state, keyed as `seededViewState` reads it. */
  views: Record<string, unknown>;
}

/**
 * The lines that put `state` in place.
 *
 * They have to come before the bundle rather than after it, because a view
 * reads both while it is building itself and the bundle draws as soon as it has
 * a payload. That is also why the settings go in through `localStorage`
 * directly instead of through `settings.ts`: at this point in the module there
 * is no `settings.ts` to call.
 *
 * The whole thing is wrapped, because a frame that half-restored a camera is
 * worth more than a frame that threw. Storage can be unavailable outright, as
 * `settings.ts` itself documents.
 */
function restoreLines(state: UiState): string[] {
  const lines: string[] = [];
  // Every frame is served from the same origin, so `localStorage` there is
  // shared with every frame exported before it. Restoring is therefore not just
  // writing what this page had: it is also clearing what a previous frame left,
  // which is the only reason a menu could open in a frame whose settings never
  // mentioned one.
  lines.push(
    "// A frame opens with its menus closed. Left behind rather than restored:",
    "// which menus one reader had open is where they had got to, not something",
    "// true of the view. The loop is for menus an earlier frame on this origin",
    "// left open, which no setting written below would close.",
    "try {",
    `  const prefix = ${JSON.stringify(PREFIX)};`,
    `  const menuOpen = ${JSON.stringify(MENU_OPEN_SUFFIX)};`,
    "  for (const key of Object.keys(localStorage)) {",
    "    if (key.startsWith(prefix) && key.endsWith(menuOpen)) localStorage.removeItem(key);",
    "  }",
    "} catch (e) {",
    '  console.warn("[gufe-viz] could not clear menu state:", e);',
    "}",
  );
  if (Object.keys(state.settings).length) {
    lines.push(
      "// The settings the page had, written where `settings.ts` looks for them.",
      "try {",
      `  const stored = ${JSON.stringify(state.settings)};`,
      "  for (const key of Object.keys(stored)) localStorage.setItem(key, stored[key]);",
      "} catch (e) {",
      '  console.warn("[gufe-viz] could not restore settings:", e);',
      "}",
    );
  }
  if (Object.keys(state.views).length) {
    lines.push(
      "// Where the camera was, what was selected, where the layout settled.",
      `globalThis[${JSON.stringify(VIEW_STATE_GLOBAL)}] = ${JSON.stringify(state.views)};`,
    );
  }
  return lines.length ? [...lines, ""] : lines;
}

/**
 * The module source for one frame: the state the page was in, the DOM the
 * bootstrap needs, then the page's script verbatim.
 *
 * Exported for the test, which is the only way to see the composition without a
 * page and a network.
 */
export function framejsModule(bundle: string, payload: unknown, state: UiState): string {
  // Both are embedded as JSON string literals, which is the one form that
  // survives whatever the payload holds: a name with a quote in it, a PDB with
  // newlines, a SMILES with a backslash.
  const payloadJson = JSON.stringify(JSON.stringify(payload));
  return [
    ...restoreLines(state),
    "// Built by gufe-viz's debug menu from a generated page. The bundle below is",
    "// that page's own script, unchanged; everything above it exists so the",
    "// bootstrap at the end of it finds the three elements it looks up.",
    'root.innerHTML = "";',
    'const gufeError = document.createElement("div");',
    'gufeError.id = "gufe-error";',
    'gufeError.style.cssText = "display:none;padding:12px 16px;white-space:pre-wrap;' +
      'font-family:ui-monospace,monospace;color:#991b1b;background:#fee2e2;";',
    "root.appendChild(gufeError);",
    'const gufePayload = document.createElement("script");',
    'gufePayload.type = "application/json";',
    'gufePayload.id = "gufe-payload";',
    `gufePayload.textContent = ${payloadJson};`,
    "root.appendChild(gufePayload);",
    'const gufeView = document.createElement("gufe-view");',
    'gufeView.style.cssText = "display:block;width:100%;height:100%;";',
    "root.appendChild(gufeView);",
    "",
    bundle,
    "",
    "// A generated page's bootstrap has drawn the payload by now. A bundle on its",
    "// own ends at `export` and has not, so this is what draws it there. Reading",
    "// the property rather than tracking which case we are in keeps the two from",
    "// having to agree about anything.",
    "if (gufeView.payload == null) {",
    "  gufeView.payload = JSON.parse(gufePayload.textContent);",
    "}",
  ].join("\n");
}

/**
 * What the page is being looked at *with*, gathered from the two places it
 * lives.
 *
 * The view's own key is its tag with the `gufe-` dropped, which is what every
 * view already namespaces its settings by, so nothing new has to agree about
 * anything. A view with no `viewState` contributes nothing and costs nothing,
 * which is every view but the network today.
 */
function uiState(view: ViewElement): UiState {
  const views: Record<string, unknown> = {};
  const state = view.viewState?.();
  if (state != null) views[view.tagName.toLowerCase().replace(/^gufe-/, "")] = state;

  // Dropped rather than sent as `false`, because a frame clears these anyway and
  // a setting written to say "no" is a setting someone later has to explain.
  const settings: Record<string, string> = {};
  for (const [key, value] of Object.entries(settingsDump())) {
    if (!key.endsWith(MENU_OPEN_SUFFIX)) settings[key] = value;
  }
  return { settings, views };
}

/** The link a slug resolves to, and the endpoint that fills it in. */
const framePage = (slug: string): string => `${FRAMEJS_ORIGIN}/j/${slug}`;
const frameApi = (slug: string): string => `${FRAMEJS_ORIGIN}/j/${slug}.json`;

/**
 * Store one frame.
 *
 * Fire and forget by construction: `no-cors` means the response is opaque, so
 * this can report that the request went out and nothing more. A rejection is
 * still worth having - it is the offline case, which is the one a user of this
 * project is most likely to be in.
 */
async function postFrame(slug: string, js: string, title: string): Promise<void> {
  await fetch(frameApi(slug), {
    method: "POST",
    mode: "no-cors",
    // Not `application/json`: that would make the request preflighted, and
    // framejs.app serves no OPTIONS. `text/plain` is CORS-simple and the server
    // parses the body regardless.
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    body: JSON.stringify({
      js,
      og: { title, description: "Exported from gufe-viz's debug menu." },
    }),
  });
}

/**
 * Add the framejs row to an open menu panel, when the debug switch is on.
 *
 * A no-op otherwise, which is what keeps the call site in `chromeMenu` to one
 * line and free of any opinion about what this is.
 */
export function framejsMenuItem(panel: HTMLElement): void {
  if (!debugEnabled()) return;

  const box = el(
    "div",
    `display:flex;flex-direction:column;gap:${SPACE.md};padding-top:${SPACE.lg};` +
      `border-top:1px dashed ${T.splitBorder};`,
  );
  box.appendChild(
    el(
      "div",
      `font-size:${FONT.tiny};font-weight:${WEIGHT.bold};letter-spacing:.08em;` +
        `text-transform:uppercase;color:${T.textMuted2};`,
      "debug",
    ),
  );

  const button = el("button", `${BUTTON.base}width:100%;`, "Open in framejs");
  button.title = "Upload this view as a framejs app and open it in a new tab";
  box.appendChild(button);

  const status = el("div", `font-size:${FONT.tiny};line-height:1.5;color:${T.textMuted2};overflow-wrap:anywhere;`);
  box.appendChild(status);

  const say = (text: string, isError = false): void => {
    status.replaceChildren(text);
    status.style.color = isError ? T.errorFg : T.textMuted2;
  };

  const showLink = (url: string, note: string): void => {
    const link = el("a", `color:${T.textPrimary};`, url) as HTMLAnchorElement;
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    status.replaceChildren(link);
    // Where the bundle came from, when that is not what the page shows. Said
    // here rather than before the click, because it is only true of a frame
    // that now exists.
    if (note) status.appendChild(el("div", `padding-top:${SPACE.sm};`, note));
    status.style.color = T.textMuted2;
  };

  button.onclick = () => {
    const view = nearestView(panel);
    if (!view || view.payload == null) {
      say("Could not find the payload for this view.", true);
      return;
    }
    const payload = view.payload;

    // Read now, not after the upload: this is what is on screen at the moment
    // the button was pressed, and the fetch below gives the reader a second in
    // which to move the camera.
    const state = uiState(view);

    // Opened now, while this is still a click, because a popup blocker judges a
    // window by the gesture that opened it and everything below takes a second
    // or two. It is pointed at the frame once there is a frame to point it at.
    const tab = window.open("", "_blank");
    const slug = uuidv7Slug();
    const named = payload as { name?: unknown; type?: unknown };
    const title = String(named.name || named.type || "gufe-viz");
    const done = (): void => {
      button.disabled = false;
    };

    button.disabled = true;
    say("Uploading...");
    findBundle()
      .then((bundle) => {
        if (!bundle) {
          tab?.close();
          done();
          say(
            "No bundle to send: this page has none inlined, and the dev server did not " +
              "answer either. Export the page with to_html, or run `pixi run build`.",
            true,
          );
          return;
        }
        return postFrame(slug, framejsModule(bundle.js, payload, state), title).then(() => {
          done();
          const url = framePage(slug);
          if (tab) tab.location.href = url;
          showLink(url, bundle.note);
        });
      })
      .catch((e: unknown) => {
        done();
        tab?.close();
        say(`Upload failed: ${e instanceof Error ? e.message : String(e)}`, true);
      });
  };

  box.appendChild(
    el(
      "div",
      `font-size:${FONT.tiny};line-height:1.5;color:${T.textMuted2};`,
      "Uploads the page to framejs.app. Unclaimed frames expire.",
    ),
  );
  panel.appendChild(box);
}
