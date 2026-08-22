/**
 * The small DOM vocabulary every view is built from. No framework, no virtual
 * DOM: these elements are created once and mutated in place, which is what
 * keeps the create/update/destroy lifecycle honest.
 */

import { T } from "./theme.js";

export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  css?: string,
  text?: string | null,
): HTMLElementTagNameMap[K] {
  const n = document.createElement(tag);
  if (css) n.style.cssText = css;
  if (text != null) n.textContent = text;
  return n;
}

export function esc(s: unknown): string {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Describe a thrown value.
 *
 * The engines do not always reject with an `Error` - 3Dmol hands back a bare
 * object when WebGL is unavailable, which otherwise turns every such failure
 * into the message "undefined".
 */
export function errText(e: unknown): string {
  if (e == null) return "unknown error";
  const message = (e as { message?: unknown }).message;
  if (typeof message === "string" && message) return message;
  const text = String(e);
  return text === "[object Object]" ? (e as { name?: string }).name || "unknown error" : text;
}

export const fmt = (n: number): string => n.toLocaleString("en-US");
export const EM_DASH = "-";

export const BTN_CSS =
  `background:${T.btnBg};color:${T.btnFg};border:1px solid ${T.btnBorder};` +
  "padding:4px 9px;font-size:11px;font-weight:bold;border-radius:3px;cursor:pointer;font-family:inherit;";

export const SELECT_CSS =
  `background:${T.selectBg};color:${T.textPrimary};border:1px solid ${T.selectBorder};` +
  "border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;font-family:inherit;";

export interface ButtonGroupItem {
  id: string;
  label: string;
  title?: string;
}

export interface ButtonGroup extends HTMLDivElement {
  setActive(id: string): void;
}

/**
 * A row of mutually-exclusive buttons. `onPick(id)` fires on click; the active
 * button is highlighted. The returned element carries `.setActive(id)` so a
 * caller can drive it from elsewhere.
 */
export function buttonGroup(
  items: readonly ButtonGroupItem[],
  active: string,
  onPick: (id: string) => void,
): ButtonGroup {
  const group = el("div", "display:flex;gap:4px;") as ButtonGroup;
  const buttons = items.map((item) => {
    const btn = el("button", BTN_CSS, item.label);
    btn.title = item.title || item.label;
    btn.onmouseover = () => {
      btn.style.background = T.btnBgHover;
    };
    btn.onmouseout = () => {
      btn.style.background = active === item.id ? T.btnBgActive : T.btnBg;
    };
    btn.onclick = () => {
      group.setActive(item.id);
      onPick(item.id);
    };
    group.appendChild(btn);
    return { id: item.id, btn };
  });
  group.setActive = (id: string) => {
    active = id;
    buttons.forEach((b) => {
      b.btn.style.background = b.id === active ? T.btnBgActive : T.btnBg;
    });
  };
  group.setActive(active);
  return group;
}

/** "label <b>value</b>" with an optional colour dot - the stats readouts. */
export function statChip(label: string, value: string, dotColor?: string): HTMLSpanElement {
  const chip = el("span", "display:inline-flex;align-items:center;gap:5px;white-space:nowrap;");
  if (dotColor) {
    chip.appendChild(
      el("span", `width:8px;height:8px;border-radius:50%;background:${dotColor};display:inline-block;`),
    );
  }
  const txt = el("span");
  txt.innerHTML = `${esc(label)} <b style="color:${T.textPrimary};">${esc(value)}</b>`;
  chip.appendChild(txt);
  return chip;
}

export function warnBanner(message: string): HTMLDivElement {
  return el(
    "div",
    "margin:12px 16px;padding:8px 12px;border-radius:6px;font-size:12px;white-space:pre-wrap;" +
      `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`,
    `⚠ ${message}`,
  );
}

/** A floating banner pinned to the top of a positioned host. */
export function floatingWarning(host: HTMLElement, message: string): HTMLDivElement {
  const warn = el("div", "", `⚠ ${message}`);
  warn.style.cssText =
    "position:absolute;top:10px;left:50%;transform:translateX(-50%);max-width:90%;z-index:20;" +
    "padding:6px 14px;border-radius:6px;font-size:12px;" +
    `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`;
  host.appendChild(warn);
  return warn;
}

/** A centred message filling its container - the placeholder / error state. */
export function centredMessage(text: string, isError = false): HTMLDivElement {
  return el(
    "div",
    "flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;" +
      `font-size:13px;color:${isError ? T.errorFg : T.textMuted2};`,
    text,
  );
}

export interface HeaderStrip extends HTMLDivElement {
  titleEl: HTMLSpanElement;
  subtitleEl: HTMLSpanElement;
  statsEl: HTMLDivElement;
}

/** The standard header strip: bold title, muted subtitle, right-aligned stats. */
export function headerStrip(title: string, subtitle?: string): HeaderStrip {
  const bar = el(
    "div",
    "display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px 14px;flex-shrink:0;" +
      `background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};`,
  ) as HeaderStrip;
  bar.titleEl = el("span", `font-weight:700;font-size:15px;color:${T.titleColor};letter-spacing:.02em;`, title);
  bar.subtitleEl = el("span", `font-size:12px;color:${T.textMuted2};`, subtitle || "");
  bar.statsEl = el(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:11px;color:${T.textMuted};`,
  );
  bar.appendChild(bar.titleEl);
  bar.appendChild(bar.subtitleEl);
  bar.appendChild(bar.statsEl);
  return bar;
}

/** A 3D viewer host: an absolutely-filled container inside a flexible box. */
export function viewerHost(): { wrap: HTMLDivElement; container: HTMLDivElement } {
  const wrap = el("div", "flex:1;position:relative;min-height:0;min-width:0;");
  const container = el("div", "position:absolute;inset:0;");
  wrap.appendChild(container);
  return { wrap, container };
}
