/**
 * The small DOM vocabulary every view is built from. No framework, no virtual
 * DOM: these elements are created once and mutated in place, which is what
 * keeps the create/update/destroy lifecycle honest.
 */

import {
  BUTTON,
  CARD,
  FONT,
  HEADER,
  RADIUS,
  SELECT,
  SPACE,
  TEXT,
  WEIGHT,
} from "./style.js";
import type { Setting } from "./settings.js";
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

/**
 * Kept as the names the views already use, defined once in `style.ts`.
 * Restyle a button or a dropdown there, not here and not in a view.
 */
export const BTN_CSS = BUTTON.base;
export const SELECT_CSS = SELECT;

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
 *
 * Hand it a `Setting` and the choice both starts from what was stored and is
 * written back on every click, so a view gets remembering for free rather than
 * doing it by hand and doing it slightly differently each time.
 */
export function buttonGroup(
  items: readonly ButtonGroupItem[],
  active: string,
  onPick: (id: string) => void,
  remember?: Setting<string>,
): ButtonGroup {
  if (remember) {
    const stored = remember.get();
    // A stored value naming a button that no longer exists is a stale
    // preference, not a reason to render a group with nothing selected.
    if (items.some((item) => item.id === stored)) active = stored;
  }
  const group = el("div", "display:flex;gap:4px;") as ButtonGroup;
  const buttons = items.map((item) => {
    const btn = el("button", BTN_CSS, item.label);
    btn.title = item.title || item.label;
    btn.onmouseover = () => {
      btn.style.background = BUTTON.bgHover;
    };
    btn.onmouseout = () => {
      btn.style.background = active === item.id ? BUTTON.bgActive : BUTTON.bg;
    };
    btn.onclick = () => {
      group.setActive(item.id);
      remember?.set(item.id);
      onPick(item.id);
    };
    group.appendChild(btn);
    return { id: item.id, btn };
  });
  group.setActive = (id: string) => {
    active = id;
    buttons.forEach((b) => {
      b.btn.style.background = b.id === active ? BUTTON.bgActive : BUTTON.bg;
    });
  };
  group.setActive(active);
  return group;
}

export interface DropdownItem {
  id: string;
  label: string;
}

/**
 * A dropdown, with the same remembering as `buttonGroup`.
 *
 * Views built these by hand, four times, each slightly different. One helper
 * means one place to restyle them and one place that knows how a choice is
 * stored.
 */
export function dropdown(
  items: readonly DropdownItem[],
  active: string,
  onPick: (id: string) => void,
  remember?: Setting<string>,
): HTMLSelectElement {
  const select = el("select", SELECT_CSS);
  for (const item of items) {
    const option = el("option", "", item.label);
    option.value = item.id;
    select.appendChild(option);
  }

  let initial = active;
  if (remember) {
    const stored = remember.get();
    if (items.some((item) => item.id === stored)) initial = stored;
  }
  select.value = initial;

  select.onchange = () => {
    remember?.set(select.value);
    onPick(select.value);
  };
  return select;
}

/**
 * An on/off button that shows its state, and remembers it if asked.
 *
 * The views had four of these written out longhand - spin, waters, hetero,
 * lines - each repeating the same three lines of background juggling.
 */
export function toggleButton(
  label: string,
  initial: boolean,
  onChange: (on: boolean) => void,
  options: { title?: string; remember?: Setting<boolean> } = {},
): HTMLButtonElement {
  let on = options.remember ? options.remember.get() : initial;
  const button = el("button", BTN_CSS, label);
  button.title = options.title || label;
  button.setAttribute("aria-pressed", String(on));

  const paint = () => {
    button.style.background = on ? BUTTON.bgActive : BUTTON.bg;
    button.setAttribute("aria-pressed", String(on));
  };
  button.onclick = () => {
    on = !on;
    paint();
    options.remember?.set(on);
    onChange(on);
  };
  paint();
  return button;
}

/** "label <b>value</b>" with an optional colour dot - the stats readouts. */
export function statChip(label: string, value: string, dotColor?: string): HTMLSpanElement {
  const chip = el("span", `display:inline-flex;align-items:center;gap:5px;white-space:nowrap;`);
  if (dotColor) {
    chip.appendChild(
      el("span", `width:8px;height:8px;border-radius:50%;background:${dotColor};display:inline-block;`),
    );
  }
  const txt = el("span");
  txt.innerHTML = `${esc(label)} <b style="color:${TEXT.primary};">${esc(value)}</b>`;
  chip.appendChild(txt);
  return chip;
}

export function warnBanner(message: string): HTMLDivElement {
  return el(
    "div",
    `margin:12px 16px;padding:${SPACE.lg} 12px;border-radius:${RADIUS.md};font-size:${FONT.body};` +
      `white-space:pre-wrap;background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`,
    `⚠ ${message}`,
  );
}

/** A floating banner pinned to the top of a positioned host. */
export function floatingWarning(host: HTMLElement, message: string): HTMLDivElement {
  const warn = el("div", "", `⚠ ${message}`);
  warn.style.cssText =
    `position:absolute;top:${SPACE.xl};left:50%;transform:translateX(-50%);max-width:90%;z-index:20;` +
    `padding:${SPACE.md} ${SPACE.xxl};border-radius:${RADIUS.md};font-size:${FONT.body};` +
    `background:${T.warnBg};color:${T.warnFg};border:1px solid ${T.warnBorder};`;
  host.appendChild(warn);
  return warn;
}

/** A centred message filling its container - the placeholder / error state. */
export function centredMessage(text: string, isError = false): HTMLDivElement {
  return el(
    "div",
    "flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;" +
      `font-size:${FONT.heading};color:${isError ? TEXT.error : TEXT.faint};`,
    text,
  );
}

export interface HeaderStrip extends HTMLDivElement {
  titleEl: HTMLSpanElement;
  statsEl: HTMLDivElement;
  /**
   * Where `chromeMenu` puts its button: first in the strip, so the control sits
   * at the top left in every view that has one. Empty, and taking no room, until
   * a view asks for a menu.
   */
  toggleEl: HTMLDivElement;
}

/**
 * The standard header strip: a menu slot, a bold title, right-aligned stats.
 *
 * Deliberately no subtitle. It used to carry the gufe class name beside the
 * title, which said the same thing twice in two fonts - "Ligand network
 * LigandNetwork" - and told a reader nothing the title had not. What a payload
 * is belongs in the payload's own name; what type it is, the view already is.
 */
export function headerStrip(title: string): HeaderStrip {
  const bar = el("div", HEADER) as HeaderStrip;
  bar.className = "gufe-header";
  bar.titleEl = el(
    "span",
    `font-weight:${WEIGHT.bold};font-size:${FONT.title};color:${TEXT.title};letter-spacing:.02em;`,
    title,
  );
  bar.statsEl = el(
    "div",
    `display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-left:auto;font-size:${FONT.small};color:${TEXT.muted};`,
  );
  // `align-self` rather than inheriting the strip's `baseline`: the button holds
  // an icon and no text, so its baseline is its bottom edge and it would hang
  // low against the title. The text either side keeps its baseline alignment.
  bar.toggleEl = el("div", "display:flex;align-items:center;align-self:center;flex-shrink:0;");
  // First, so the menu button is at the top left wherever a view carries one.
  bar.appendChild(bar.toggleEl);
  bar.appendChild(bar.titleEl);
  bar.appendChild(bar.statsEl);
  return bar;
}

/**
 * One "label: value" line, which is what the card-shaped views are built from.
 * The label column is fixed so a stack of these lines up without a table, and
 * the value is selectable because half of what such a card is for is copying a
 * SMILES out of it.
 */
export function fieldRow(label: string, value: string, mono = false): HTMLDivElement {
  const row = el("div", "display:flex;gap:12px;align-items:baseline;padding:5px 0;min-width:0;");
  row.appendChild(
    el(
      "span",
      `flex:0 0 128px;font-size:${FONT.tiny};font-weight:${WEIGHT.bold};letter-spacing:.08em;` +
        `text-transform:uppercase;color:${TEXT.faint};`,
      label,
    ),
  );
  const shown = el(
    "span",
    `flex:1;min-width:0;user-select:text;cursor:text;overflow-wrap:anywhere;color:${TEXT.primary};` +
      (mono ? `font-family:${FONT.mono};font-size:${FONT.small};` : `font-size:${FONT.body};`),
    value,
  );
  shown.title = value;
  row.appendChild(shown);
  return row;
}

/** A small pill naming a payload's type - used wherever a view lists others. */
export function typeBadge(text: string): HTMLSpanElement {
  return el(
    "span",
    `padding:1px 7px;border-radius:${RADIUS.xl};font-size:${FONT.tiny};font-weight:${WEIGHT.bold};` +
      `letter-spacing:.04em;white-space:nowrap;background:${T.badgeBg};color:${T.badgeFg};`,
    text,
  );
}

/** A bordered card: the standard container for anything that is not a viewer. */
export function card(): HTMLDivElement {
  return el("div", CARD);
}

/** A 3D viewer host: an absolutely-filled container inside a flexible box. */
export function viewerHost(): { wrap: HTMLDivElement; container: HTMLDivElement } {
  const wrap = el("div", "flex:1;position:relative;min-height:0;min-width:0;");
  const container = el("div", "position:absolute;inset:0;");
  // Named so it can be found from outside: it is what the engine renders into
  // and what the wheel guard is attached to, and neither is reachable by
  // dispatching at an ancestor.
  container.dataset.gufeViewer = "";
  wrap.appendChild(container);
  return { wrap, container };
}

// --- the chrome menu -------------------------------------------------------
//
// One hamburger per view: same style, same place, same behaviour, different
// contents. It exists as a helper rather than as a convention because a
// convention across nine view files drifts and a helper cannot.
//
// Two rules are enforced here rather than left to callers:
//
//   1. Toggling changes visibility, never structure. Rebuilding the view would
//      tear down its handle - which is a 3Dmol viewer and its camera, a force
//      layout's node positions, and the current selection - so opening a menu
//      would silently throw all three away.
//   2. Contents are built on first open, from a factory. A view whose menu
//      holds a list of several hundred ligands must not pay for it in a
//      collapsed cell nobody expands.

/**
 * The state every view's menu starts in.
 *
 * Named rather than written as a literal at each call site: this is the single
 * place a host-derived default would land if the toggle ever stops being purely
 * local, and today it is the whole cost of having deferred that.
 */
export const CHROME_OPEN_BY_DEFAULT = false;

export interface ChromeMenu {
  /** Put this where the menu's contents belong in the view's own layout. */
  panel: HTMLDivElement;
  isOpen(): boolean;
  setOpen(open: boolean): void;
}

export interface ChromeMenuOptions {
  /** Overrides `CHROME_OPEN_BY_DEFAULT`. */
  open?: boolean;
  /**
   * Remember whether it was open. Someone who opened the ligand list to work
   * through a network should not have to open it again on the next payload.
   */
  remember?: Setting<boolean>;
  /** Fired after the panel's visibility changes. Views re-lay-out here. */
  onToggle?(open: boolean): void;
  /** Accessible name for the button. */
  label?: string;
}

/** Three bars, drawn rather than typed, so the glyph is not a Unicode dependency. */
function hamburgerIcon(): HTMLSpanElement {
  const icon = el("span", `display:inline-flex;flex-direction:column;gap:${SPACE.xs};justify-content:center;`);
  for (let i = 0; i < 3; i++) {
    icon.appendChild(el("span", `display:block;width:11px;height:1.5px;border-radius:1px;background:${T.btnFg};`));
  }
  return icon;
}

/**
 * Attach a collapsible menu to `header`, and hand back the panel to place.
 *
 * The button goes into the header's own toggle slot, which is what makes the
 * control appear in the same position in every view without each view having to
 * agree about it.
 */
export function chromeMenu(
  header: HeaderStrip,
  build: () => Node,
  options: ChromeMenuOptions = {},
): ChromeMenu {
  let open = options.remember ? options.remember.get() : (options.open ?? CHROME_OPEN_BY_DEFAULT);
  let built = false;

  const panel = el("div", "flex-shrink:0;");
  const button = el("button", `${BUTTON.base}display:inline-flex;align-items:center;gap:${SPACE.md};padding:${SPACE.sm} ${SPACE.lg};`);
  button.appendChild(hamburgerIcon());
  button.setAttribute("aria-label", options.label || "Toggle menu");

  const apply = (): void => {
    // Build once, on the first open, and never again. `replaceChildren` is
    // deliberately not used afterwards: the contents are live DOM the view may
    // be holding references into.
    if (open && !built) {
      built = true;
      panel.appendChild(build());
    }
    panel.style.display = open ? "" : "none";
    button.style.background = open ? BUTTON.bgActive : BUTTON.bg;
    button.setAttribute("aria-expanded", String(open));
  };

  const setOpen = (next: boolean): void => {
    if (next === open) return;
    open = next;
    apply();
    options.remember?.set(open);
    options.onToggle?.(open);
  };

  button.onclick = () => setOpen(!open);
  button.onmouseover = () => {
    button.style.background = open ? BUTTON.bgActive : BUTTON.bgHover;
  };
  button.onmouseout = () => {
    button.style.background = open ? BUTTON.bgActive : BUTTON.bg;
  };

  // Only now does the slot take any room: an empty one must not indent the title.
  header.toggleEl.style.marginRight = "2px";
  header.toggleEl.appendChild(button);
  apply();

  return {
    panel,
    isOpen: () => open,
    setOpen,
  };
}
