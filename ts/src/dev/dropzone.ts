/**
 * The zeroth thing (R17): a page you drag a payload JSON onto.
 *
 * No Python, no wiring, no build step in the loop — a file lands on the page and
 * a molecule appears. `?file=<url>` loads one on startup instead, so the
 * edit-a-payload-and-reload loop needs no dragging at all.
 *
 * Dev-only: nothing here is part of the shipped bundle.
 */

import { mount } from "../index.js";
import { errText } from "../shared/dom.js";
import { T } from "../shared/theme.js";

const DROP_HINT = "Drop a payload JSON anywhere on this page";

export function installDropzone(host: HTMLElement): void {
  const view = mount(host);
  const banner = document.createElement("div");
  banner.style.cssText =
    "position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:1000;pointer-events:none;" +
    "padding:6px 14px;border-radius:999px;font:12px/1.4 ui-sans-serif,system-ui,sans-serif;" +
    `background:${T.toolbarBg};color:${T.textMuted};border:1px solid ${T.toolbarBorder};`;
  banner.textContent = DROP_HINT;
  document.body.appendChild(banner);

  const say = (text: string, isError = false) => {
    banner.textContent = text;
    banner.style.color = isError ? T.warnFg : T.textMuted;
    banner.style.background = isError ? T.warnBg : T.toolbarBg;
  };

  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:999;display:none;pointer-events:none;" +
    `background:${T.cardBgActive};opacity:.25;`;
  document.body.appendChild(overlay);

  // `dragenter`/`dragleave` fire per child element, so count depth rather than
  // toggling — otherwise moving over any child hides the overlay.
  let depth = 0;
  const showOverlay = (on: boolean) => {
    overlay.style.display = on ? "block" : "none";
  };

  window.addEventListener("dragenter", (e) => {
    e.preventDefault();
    depth++;
    showOverlay(true);
  });
  window.addEventListener("dragover", (e) => e.preventDefault());
  window.addEventListener("dragleave", (e) => {
    e.preventDefault();
    depth = Math.max(0, depth - 1);
    if (depth === 0) showOverlay(false);
  });

  window.addEventListener("drop", (e) => {
    e.preventDefault();
    depth = 0;
    showOverlay(false);
    const file = e.dataTransfer?.files?.[0];
    if (!file) {
      say("Nothing droppable in there", true);
      return;
    }
    void readPayload(file)
      .then((payload) => {
        view.payload = payload;
        say(`${file.name} — drop another to replace it`);
      })
      .catch((err: unknown) => say(`${file.name}: ${errText(err)}`, true));
  });

  // `?file=` — reload-friendly iteration, and how the gallery links here.
  const wanted = new URLSearchParams(location.search).get("file");
  if (wanted) {
    say(`Loading ${wanted}…`);
    void fetch(wanted)
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
        return r.json();
      })
      .then((payload) => {
        view.payload = payload;
        say(`${wanted} — drop a file to replace it`);
      })
      .catch((err: unknown) => say(`${wanted}: ${errText(err)}`, true));
  }
}

async function readPayload(file: File): Promise<unknown> {
  const text = await file.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    // A JSON syntax error is the single most likely thing to go wrong here, so
    // say where it went wrong rather than "unexpected token".
    throw new Error(`not valid JSON — ${errText(e)}`);
  }
}
