/**
 * The interface, in one place.
 *
 * Every button, dropdown, panel, label and piece of text in every view is built
 * from this file. Change a value here and it changes everywhere; there is no
 * second place to look, and a view that writes its own `font-size` is a bug
 * rather than a style choice.
 *
 * **Interface only.** Colours that mean something chemical live elsewhere and
 * are not ours to restyle: `atom-colors.ts` holds the mapping highlights and the
 * pair ramp, mirrored from gufe and matplotlib, and `molecule-colors.ts` holds
 * the 3D mode colours from the framejs prototype. Nothing in this file should
 * ever describe an atom.
 *
 * The palette itself is `theme.ts`, which is the light and dark colour tables.
 * This is the front door to it: views import from here, not from there, so the
 * set of things a view can reach for is the set of things that have been decided
 * on.
 */

import { T } from "./theme.js";

// --- tokens ----------------------------------------------------------------
//
// Named by role rather than by size, so "the small text" is a decision made once
// rather than a number retyped thirty times. The values are the ones the views
// had converged on by hand.

export const FONT = {
  family: "'Inter',system-ui,sans-serif",
  mono: "ui-monospace,SFMono-Regular,Menlo,monospace",
  /** Label captions and dense readouts. */
  tiny: "10px",
  /** The default for chrome: chips, legends, list rows. */
  small: "11px",
  /** Body text, toolbars, form controls. */
  body: "12px",
  /** Pane labels and anything heading a section of a view. */
  heading: "13px",
  /** A view's title. */
  title: "15px",
} as const;

export const WEIGHT = {
  normal: "400",
  medium: "600",
  bold: "700",
} as const;

export const SPACE = {
  xs: "2px",
  sm: "4px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  xxl: "14px",
} as const;

export const RADIUS = {
  sm: "3px",
  md: "6px",
  lg: "8px",
  xl: "10px",
  pill: "999px",
} as const;

/** Text colours, by what the text is for. */
export const TEXT = {
  title: T.titleColor,
  primary: T.textPrimary,
  muted: T.textMuted,
  faint: T.textMuted2,
  error: T.errorFg,
  onLabel: T.labelFg,
} as const;

/** Surfaces, for anything that needs one directly. */
export const SURFACE = {
  app: T.appBg,
  panel: T.panelBg,
  card: T.cardBg,
  toolbar: T.toolbarBg,
  border: T.toolbarBorder,
  split: T.splitBorder,
  /** Where a 3D engine draws. Interface, not chemistry: it is the paper. */
  viewer: T.viewerBg,
  /** Where a 2D depiction is placed, for the same reason. */
  canvas2D: T.canvas2DBg,
} as const;

// --- controls --------------------------------------------------------------

/** A button, in its three states. `buttonGroup` and the menu toggle use these. */
export const BUTTON = {
  base:
    `background:${T.btnBg};color:${T.btnFg};border:1px solid ${T.btnBorder};` +
    `padding:${SPACE.sm} 9px;font-size:${FONT.small};font-weight:${WEIGHT.bold};` +
    `border-radius:${RADIUS.sm};cursor:pointer;font-family:inherit;`,
  bg: T.btnBg,
  bgHover: T.btnBgHover,
  bgActive: T.btnBgActive,
} as const;

/** A dropdown. */
export const SELECT =
  `background:${T.selectBg};color:${T.textPrimary};border:1px solid ${T.selectBorder};` +
  `border-radius:${RADIUS.md};padding:${SPACE.sm} ${SPACE.lg};font-size:${FONT.body};` +
  "cursor:pointer;font-family:inherit;";

/** A text or search field. Same shape as a dropdown, so a form lines up. */
export const INPUT = `${SELECT}width:100%;box-sizing:border-box;cursor:text;`;

// --- containers ------------------------------------------------------------

/**
 * The strip at the top of a view: menu slot, title, stats.
 *
 * Centred, not baseline-aligned. The menu button is taller than the title's
 * line box, and a baseline-aligned line puts its baseline group flush to the
 * top, which left the title sitting a few pixels above the button beside it.
 * Title and stats keep their shared baseline inside `headerStrip`'s own row.
 */
export const HEADER =
  `display:flex;align-items:center;gap:12px;padding:9px ${SPACE.xxl};flex-shrink:0;` +
  `background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};`;

/** How wide the menu is allowed to be when it is a column beside the panes. */
export const MENU_PANEL_WIDTH = { min: "236px", max: "340px" };

/**
 * The four things about the panel that a stacked view has to change.
 *
 * Custom properties rather than a restyling pass, because the panel is built on
 * the first open and the arrangement is decided before that: something set on
 * the wrapper above it lands on the panel whenever the panel appears, and again
 * whenever the arrangement changes, with nothing having to remember either.
 * `orientMenuPanel` is what sets them.
 */
export const MENU_VAR = {
  min: "--gufe-menu-min",
  max: "--gufe-menu-max",
  ruleX: "--gufe-menu-rule-x",
  ruleY: "--gufe-menu-rule-y",
} as const;

/**
 * The chrome menu's own column: the network views' search, filters, list and
 * export controls.
 *
 * Stretches to the row it is placed in rather than fixing its own width, so that
 * anything wider than the controls - the export block, the debug one - lines up
 * with them instead of hanging off the edge of the background. The floor is the
 * width the menus were designed at; the ceiling stops one long unbroken SMILES
 * in a ligand list from dragging the whole panel across the view.
 *
 * `overflow-y:auto` is the last resort, and only bites in a view too short to
 * hold `MENU_LIST`'s floor and the controls both: the panel scrolls, so nothing
 * in it is ever unreachable. Above that height the list is the part that gives.
 */
export const MENU_PANEL =
  `display:flex;flex-direction:column;gap:${SPACE.lg};flex:1;` +
  `min-width:var(${MENU_VAR.min},${MENU_PANEL_WIDTH.min});max-width:var(${MENU_VAR.max},${MENU_PANEL_WIDTH.max});` +
  `box-sizing:border-box;padding:${SPACE.xl};min-height:0;overflow-y:auto;background:${T.panelBg};` +
  `border:0 solid ${T.splitBorder};` +
  `border-right-width:var(${MENU_VAR.ruleX},1px);border-bottom-width:var(${MENU_VAR.ruleY},0);`;

/** The most of a stacked view the menu may take, leaving the rest to the panes. */
export const MENU_PANEL_STACKED_SHARE = "45%";

/**
 * The scrolling list of nodes or edges inside `MENU_PANEL`.
 *
 * `flex` with a floor and `overflow:auto` together are the whole point: the
 * list is the one part of the menu that grows with the payload, so it is the
 * part that gives. It is also the only item here that can shrink at all - a
 * scroll container's automatic minimum size is zero, where a button's is the
 * button - which is what makes the shrinking land on the list rather than
 * squashing the controls. Without this a network of two hundred ligands makes a
 * list two hundred rows tall and pushes the hint, the export block and the
 * clear button off the bottom of the view.
 *
 * The floor is about three rows. A list squeezed below that has stopped being a
 * list you can pick from, and it is better for the panel to scroll than for the
 * list to vanish between the filters and the buttons.
 */
export const MENU_LIST = "flex:1 1 auto;min-height:84px;overflow:auto;display:flex;flex-direction:column;gap:3px;";

/** A row of controls, under or over the thing they control. */
export const TOOLBAR = {
  top:
    `display:flex;align-items:center;gap:${SPACE.xl};flex-wrap:wrap;padding:${SPACE.lg} ${SPACE.xxl};` +
    `flex-shrink:0;font-size:${FONT.body};background:${T.toolbarBg};` +
    `border-bottom:1px solid ${T.toolbarBorder};color:${T.textPrimary};`,
  bottom:
    `display:flex;align-items:center;gap:${SPACE.xl};flex-wrap:wrap;padding:${SPACE.lg} ${SPACE.xxl};` +
    `flex-shrink:0;background:${T.toolbarBg};border-top:1px solid ${T.toolbarBorder};`,
} as const;

/** The bar naming a pane: "3D", "2D", a molecule's name. */
export const PANE_LABEL =
  `flex-shrink:0;padding:${SPACE.sm} ${SPACE.xl};font-size:${FONT.heading};` +
  `font-weight:${WEIGHT.bold};color:${T.labelFg};background:${T.labelBg};`;

/**
 * The same name, floating over the top left of a pane rather than in a bar
 * above it. A bar costs every pane a row of height whether or not the name
 * needs one, and in a pair of molecules the picture wants that height more than
 * the name does. It keeps the bar's own background so it stays readable over a
 * dark viewer and a white depiction alike, and takes no pointer events so it
 * cannot swallow a drag meant for the molecule underneath.
 *
 * The pane it sits in must be `position:relative`.
 */
export const PANE_LABEL_OVERLAY =
  `position:absolute;top:${SPACE.md};left:${SPACE.md};z-index:10;pointer-events:none;` +
  `max-width:calc(100% - ${SPACE.xxl} - ${SPACE.xxl});white-space:nowrap;overflow:hidden;` +
  `text-overflow:ellipsis;padding:${SPACE.xs} ${SPACE.lg};border-radius:${RADIUS.md};` +
  `font-size:${FONT.heading};font-weight:${WEIGHT.bold};color:${T.labelFg};background:${T.labelBg};`;

/** A bordered box: the standard container for anything that is not a viewer. */
export const CARD =
  `display:flex;flex-direction:column;gap:${SPACE.xs};padding:${SPACE.xxl} 18px;` +
  `border-radius:${RADIUS.xl};background:${T.cardBg};border:1px solid ${T.cardBorder};`;

/** A card that can be picked, as in a list of components or ligands. */
export const SELECTABLE = {
  base:
    `display:flex;flex-direction:column;align-items:flex-start;gap:${SPACE.sm};` +
    `padding:${SPACE.lg} ${SPACE.xl};text-align:left;border-radius:${RADIUS.lg};` +
    `border:1px solid ${T.cardBorder};background:${T.cardBg};cursor:pointer;` +
    `font-family:inherit;font-size:${FONT.body};width:100%;`,
  border: T.cardBorder,
  borderActive: T.cardBorderActive,
  bg: T.cardBg,
  bgActive: T.cardBgActive,
} as const;

/** A side panel: the ligand list, a detail column. */
export const PANEL =
  `display:flex;flex-direction:column;gap:${SPACE.lg};padding:${SPACE.xl};min-height:0;` +
  `background:${T.panelBg};`;

/** A floating readout that follows the pointer. */
export const TOOLTIP =
  `position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;` +
  `padding:7px ${SPACE.xl};border-radius:${RADIUS.md};font-size:${FONT.small};line-height:1.5;` +
  `max-width:260px;background:${T.tooltipBg};border:1px solid ${T.tooltipBorder};` +
  `color:${T.textPrimary};box-shadow:0 4px 14px rgba(0,0,0,0.28);`;

/** The floating cluster of controls a 3D pane carries, bottom right. */
export const OVERLAY_CONTROLS =
  `position:absolute;bottom:${SPACE.xl};right:${SPACE.xl};display:flex;gap:${SPACE.sm};` +
  `padding:${SPACE.sm};border-radius:${RADIUS.md};z-index:10;background:${T.switcherBg};` +
  "box-shadow:0 2px 8px rgba(0,0,0,0.25);";

// --- text ------------------------------------------------------------------

/** A block of monospaced detail: keys, correspondences, annotations. */
export const MONO = `font-family:${FONT.mono};font-size:${FONT.small};line-height:1.7;color:${T.textMuted};`;

/** A small uppercase heading over a list or a block. */
export const SECTION_LABEL =
  `font-size:${FONT.small};font-weight:${WEIGHT.bold};letter-spacing:.08em;` +
  `text-transform:uppercase;color:${T.textMuted2};`;

/**
 * A chip in a row of them, and the row itself.
 *
 * `button` is for a chip that selects what it counts, which is what the atom
 * mapping's Info legend is: the count is the label, and clicking it narrows the
 * table under it to those atoms. `plain` keeps a chip that does not select
 * sitting on the same line as one that does.
 */
export const CHIP = {
  row: `display:flex;flex-wrap:wrap;align-items:center;gap:${SPACE.xs} ${SPACE.sm};font-size:${FONT.small};`,
  plain:
    `display:inline-flex;align-items:center;padding:${SPACE.xs} ${SPACE.md};` +
    `border:1px solid transparent;border-radius:${RADIUS.pill};` +
    `font-family:inherit;font-size:${FONT.small};color:${T.textMuted};`,
  button: `cursor:pointer;background:none;border-color:${T.btnBorder};`,
  active: `cursor:pointer;background:${T.cardBgActive};border-color:${T.btnBorder};color:${T.textPrimary};`,
} as const;

/** A note under something, explaining or qualifying it. */
export const NOTE = `font-size:${FONT.small};line-height:1.6;color:${T.textMuted2};`;
