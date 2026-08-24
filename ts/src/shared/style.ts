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

/** The strip at the top of a view: menu slot, title, stats. */
export const HEADER =
  `display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;padding:9px ${SPACE.xxl};flex-shrink:0;` +
  `background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};`;

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

/** A note under something, explaining or qualifying it. */
export const NOTE = `font-size:${FONT.small};line-height:1.6;color:${T.textMuted2};`;
