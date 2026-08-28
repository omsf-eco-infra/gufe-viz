/**
 * How a ligand pair is drawn in 2D, as data rather than as code.
 *
 * ## Where the values come from
 *
 * Not from here. `depict-style.json` next to this file is one exported document
 * from the editor at
 *
 *   https://framejs.app/j/5df86d91e8824b20a02908b52a6f07c3
 *
 * which draws real transformation pairs with these exact values live, describes
 * every key, and exports this same document. The loop is: open the editor, move
 * the controls until the picture is right, export, drop the file over
 * `ts/src/shared/depict-style.json`, rebuild. The JSON is imported below, so it
 * is compiled into the bundle and there is nothing to fetch and nothing to
 * configure at runtime.
 *
 * `schema/depict-style.schema.json` is the contract for that document, and its
 * `description` on each key is the written form of what the editor shows you.
 * Both ends read it: the editor validates what it exports, and
 * `ts/tests/depict-style.test.ts` validates what is committed here.
 *
 * ## Why it is not part of the payload
 *
 * `schema/gufe-viz.schema.json` describes what a gufe object *is*, and every
 * field in it is written by a payload builder from a real object. Nothing in
 * this file is: it is entirely taste, it describes no gufe object, and a
 * transformation drawn twice with two different styles is the same
 * transformation. Putting it in the payload would make every Python builder
 * carry a preference it has no opinion about.
 *
 * ## The defaults draw what this project has always drawn
 *
 * `DEFAULT_DEPICT_STYLE` reproduces gufe's own `draw_mapping`: RDKit's
 * highlighting of the marked atoms and of the bonds around them, gufe's
 * black-and-white palette, atom indices on, `continuousHighlight` off, and every
 * numeric value equal to the RDKit default it stands in for, so passing it
 * explicitly changes nothing. That is what makes an edited style a readable diff
 * against a known picture instead of a jump to a new one.
 *
 * The two exceptions are `layout` and `alignPair`, which default to what gufe
 * does rather than to what this project used to do. See `DEFAULT_DEPICT_STYLE`.
 */

import type { RDKitModule } from "./engines.js";
import type { Layout2D } from "./depict-layout.js";
import type { Molecule } from "./sdf.js";
import { MAPPING_BW_PALETTE, MAPPING_COLORS } from "./atom-colors.js";
import { errText } from "./dom.js";
import committed from "./depict-style.json" with { type: "json" };

/** How a marked atom's bonds are drawn. See the schema for what each does. */
export type MarkStyle = "rdkit" | "recolor" | "halo";
/** The ring on a marked atom, under `recolor`. */
export type CircleStyle = "outline" | "filled" | "off";
/** What the drawing does with explicit hydrogens. The molecule keeps them all. */
export type HydrogenMode = "show" | "dim" | "hide";
/** Whether RDKit colours the element letters or draws them all black. */
export type ElementColors = "cpk" | "mono";

/**
 * One depiction style document.
 *
 * Mirrors `schema/depict-style.schema.json`, which is the source of truth for
 * what each key means and what range it takes. A test asserts the two agree on
 * the key list and on every default, so this cannot drift from the contract the
 * editor writes against.
 */
export interface DepictStyle {
  version: 1;
  layout: Layout2D;
  alignPair: boolean;
  style: MarkStyle;
  createdDestroyed: boolean;
  modified: boolean;
  destroyedColor: string;
  createdColor: string;
  modifiedColor: string;
  boundary: boolean;
  circles: CircleStyle;
  circleRadius: number;
  circleStroke: number;
  hydrogens: HydrogenMode;
  elementColors: ElementColors;
  atomNumbers: boolean;
  stereo: boolean;
  numScale: number;
  labelScale: number;
  bondWidth: number;
  markWidth: number;
  haloWidth: number;
  haloOpacity: number;
  customSpec: string;
  customColor: string;
}

/**
 * The style used when a document says nothing.
 *
 * Every value here is either what gufe sets or what RDKit already defaults to,
 * which is the property that lets the whole pipeline run with the defaults in
 * place and emit the drawing gufe's `draw_mapping` emits, out of a single
 * `get_svg_with_highlights` call.
 *
 * `layout` and `alignPair` are the exception, and deliberately so. gufe calls
 * `Compute2DCoords` and then `AlignMol` before it draws a pair; this project
 * drew the stored conformer instead, which is not a flat depiction but a pose
 * seen at whatever angle it was posed at. The defaults here are gufe's two
 * calls, so they correct that rather than preserve it.
 */
export const DEFAULT_DEPICT_STYLE: DepictStyle = {
  version: 1,
  layout: "rdkit",
  alignPair: true,
  style: "rdkit",
  createdDestroyed: true,
  modified: true,
  destroyedColor: MAPPING_COLORS.uniqueAtom,
  createdColor: MAPPING_COLORS.uniqueAtom,
  modifiedColor: MAPPING_COLORS.elementChange,
  boundary: true,
  circles: "outline",
  circleRadius: 0.3,
  circleStroke: 1.2,
  hydrogens: "show",
  elementColors: "mono",
  atomNumbers: true,
  stereo: false,
  numScale: 0.5,
  labelScale: 0.6,
  bondWidth: 2,
  markWidth: 2,
  haloWidth: 10,
  haloOpacity: 0.35,
  customSpec: "",
  customColor: "#7C3AED",
};

const LAYOUTS: readonly Layout2D[] = ["rdkit", "coordgen", "conformer"];
const MARK_STYLES: readonly MarkStyle[] = ["rdkit", "recolor", "halo"];
const CIRCLE_STYLES: readonly CircleStyle[] = ["outline", "filled", "off"];
const HYDROGEN_MODES: readonly HydrogenMode[] = ["show", "dim", "hide"];
const ELEMENT_COLORS: readonly ElementColors[] = ["cpk", "mono"];

/** Ranges, kept beside the schema's `minimum`/`maximum` and checked against it. */
export const DEPICT_STYLE_RANGES: Readonly<Record<string, readonly [number, number]>> = {
  circleRadius: [0.12, 0.6],
  circleStroke: [0.4, 4],
  numScale: [0.15, 0.9],
  labelScale: [0.3, 0.9],
  bondWidth: [0.5, 5],
  markWidth: [0.5, 6],
  haloWidth: [2, 26],
  haloOpacity: [0.1, 1],
};

const HEX = /^#[0-9a-fA-F]{6}$/;

function pickEnum<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return typeof value === "string" && (allowed as readonly string[]).includes(value) ? (value as T) : fallback;
}

function pickNumber(value: unknown, key: string, fallback: number): number {
  if (typeof value !== "number" || !isFinite(value)) return fallback;
  const range = DEPICT_STYLE_RANGES[key];
  if (!range) return value;
  return Math.min(range[1], Math.max(range[0], value));
}

const pickBool = (value: unknown, fallback: boolean): boolean => (typeof value === "boolean" ? value : fallback);
const pickColor = (value: unknown, fallback: string): string =>
  typeof value === "string" && HEX.test(value) ? value : fallback;

/**
 * A style document, made safe to draw with.
 *
 * The committed document is validated by the test suite, so this is not the
 * gate; it is what stops a hand-edited value from reaching RDKit as a NaN width
 * or an unknown enum. Anything missing or unusable takes the default, out-of-range
 * numbers are clamped to the range the schema declares, and unknown keys are
 * dropped. There is deliberately no throwing: a picture drawn with one value
 * quietly corrected beats an error panel where a molecule should be.
 */
export function normaliseDepictStyle(input: unknown): DepictStyle {
  const raw = (input && typeof input === "object" ? input : {}) as Partial<Record<keyof DepictStyle, unknown>>;
  const d = DEFAULT_DEPICT_STYLE;
  return {
    version: 1,
    layout: pickEnum(raw.layout, LAYOUTS, d.layout),
    alignPair: pickBool(raw.alignPair, d.alignPair),
    style: pickEnum(raw.style, MARK_STYLES, d.style),
    createdDestroyed: pickBool(raw.createdDestroyed, d.createdDestroyed),
    modified: pickBool(raw.modified, d.modified),
    destroyedColor: pickColor(raw.destroyedColor, d.destroyedColor),
    createdColor: pickColor(raw.createdColor, d.createdColor),
    modifiedColor: pickColor(raw.modifiedColor, d.modifiedColor),
    boundary: pickBool(raw.boundary, d.boundary),
    circles: pickEnum(raw.circles, CIRCLE_STYLES, d.circles),
    circleRadius: pickNumber(raw.circleRadius, "circleRadius", d.circleRadius),
    circleStroke: pickNumber(raw.circleStroke, "circleStroke", d.circleStroke),
    hydrogens: pickEnum(raw.hydrogens, HYDROGEN_MODES, d.hydrogens),
    elementColors: pickEnum(raw.elementColors, ELEMENT_COLORS, d.elementColors),
    atomNumbers: pickBool(raw.atomNumbers, d.atomNumbers),
    stereo: pickBool(raw.stereo, d.stereo),
    numScale: pickNumber(raw.numScale, "numScale", d.numScale),
    labelScale: pickNumber(raw.labelScale, "labelScale", d.labelScale),
    bondWidth: pickNumber(raw.bondWidth, "bondWidth", d.bondWidth),
    markWidth: pickNumber(raw.markWidth, "markWidth", d.markWidth),
    haloWidth: pickNumber(raw.haloWidth, "haloWidth", d.haloWidth),
    haloOpacity: pickNumber(raw.haloOpacity, "haloOpacity", d.haloOpacity),
    customSpec: typeof raw.customSpec === "string" ? raw.customSpec : d.customSpec,
    customColor: pickColor(raw.customColor, d.customColor),
  };
}

/**
 * The style this build draws with: the committed document, normalised.
 *
 * Replace `depict-style.json` with an export from the editor and rebuild; there
 * is no setter, because a style that can change at runtime is a style two
 * pictures in the same page can disagree about.
 */
export const DEPICT_STYLE: DepictStyle = normaliseDepictStyle(committed);

// --- atom sets -------------------------------------------------------------

/** Which molecule of the pair a panel is showing. */
export type Side = "left" | "right";

/** The extra atoms `customSpec` names, split by which molecule they apply to. */
export interface CustomAtoms {
  left: Set<number>;
  right: Set<number>;
}

/**
 * Parse `customSpec`: `0,3,7`, `2-6`, `L:1-4 R:9`.
 *
 * A bare index or range applies to both molecules; `L:` and `R:` restrict it to
 * the left or the right one. Anything unparseable is skipped rather than
 * reported, because this is a field someone is typing into.
 */
export function parseAtomSpec(spec: string): CustomAtoms {
  const left = new Set<number>();
  const right = new Set<number>();
  // A range is bounded so that a typo like `1-99999999` cannot hang the page.
  const LIMIT = 5000;
  for (const token of String(spec || "").split(/[,\s;]+/).filter(Boolean)) {
    const sided = /^([LlRr])[:=](.*)$/.exec(token);
    const side = sided ? (sided[1].toLowerCase() === "l" ? "left" : "right") : "both";
    const body = sided ? sided[2] : token;
    const add = (n: number): void => {
      if (side !== "right") left.add(n);
      if (side !== "left") right.add(n);
    };
    const range = /^(\d+)-(\d+)$/.exec(body);
    if (range) {
      const lo = Math.min(+range[1], +range[2]);
      const hi = Math.min(Math.max(+range[1], +range[2]), lo + LIMIT - 1);
      for (let n = lo; n <= hi; n++) add(n);
    } else if (/^\d+$/.test(body)) {
      add(+body);
    }
  }
  return { left, right };
}

/**
 * The bonds a marked atom set claims.
 *
 * With `boundary` on, a bond with either end marked; with it off, only a bond
 * with both ends marked. The difference is the bond that joins a unique atom to
 * the mapped core, and without it a lone added carbon draws nothing at all,
 * because a carbon carries no letter of its own.
 */
export function markedBonds(mol: Molecule, atoms: ReadonlySet<number>, boundary: boolean): number[] {
  const out: number[] = [];
  for (let k = 0; k < mol.bonds.length; k++) {
    const [a, b] = mol.bonds[k];
    const inA = atoms.has(a);
    const inB = atoms.has(b);
    if (boundary ? inA || inB : inA && inB) out.push(k);
  }
  return out;
}

/**
 * `#rrggbb` as the `0xrrggbb` string 3Dmol's style specifications take.
 *
 * Here beside `rgbTriple` because it is the same job for the other engine: 3D-Map
 * paints the mapping in these very colours, so the one place a style colour is
 * authored feeds both drawings.
 */
export function threeDmolColor(hex: string): string {
  return `0x${hex.replace("#", "")}`;
}

/** `#rrggbb` as the 0-to-1 RGB triple RDKit's drawing options take. */
export function rgbTriple(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ];
}

/**
 * The same colour, washed out towards white.
 *
 * A filled disc at full strength swallows the atom letter sitting on top of it,
 * so a filled ring is drawn as a wash instead.
 */
export function tint(rgb: readonly [number, number, number], towardsWhite: number): [number, number, number] {
  return [
    1 - (1 - rgb[0]) * (1 - towardsWhite),
    1 - (1 - rgb[1]) * (1 - towardsWhite),
    1 - (1 - rgb[2]) * (1 - towardsWhite),
  ];
}

/**
 * The bonds each classified set claims, split the way gufe splits them.
 *
 * gufe's `_get_unique_bonds_and_atoms` walks the bonds once and sorts them into
 * `bond_deletions` and `bond_changes`: a bond that touches a unique atom is a
 * deletion and takes the created or destroyed colour, and a bond that touches an
 * element change but no unique atom is a change and takes the element-change
 * colour. Every marked bond therefore belongs to exactly one of the two, and the
 * unique atom always wins the ones both could claim - a bond into a deleted
 * fragment reads as deleted, not as altered.
 *
 * `boundary` decides how far a set reaches for its own bonds. What it can never
 * do is hand a deletion to the element changes, so the exclusion is taken with
 * the full reach whatever `boundary` says.
 */
export function uniqueBonds(
  mol: Molecule,
  uniques: { atoms: readonly number[]; elements: readonly number[] },
  boundary: boolean,
): { deletions: number[]; changes: number[] } {
  const atoms = new Set(uniques.atoms);
  const touching = new Set(markedBonds(mol, atoms, true));
  return {
    deletions: markedBonds(mol, atoms, boundary),
    changes: markedBonds(mol, new Set(uniques.elements), boundary).filter((k) => !touching.has(k)),
  };
}

/**
 * One set of atoms drawn in one colour, with the bonds it claims, and how the
 * set wants to be painted.
 *
 * The two sets differ in what the atom itself does with the colour, because they
 * differ in how much else is already carrying it:
 *
 *   unique atoms  every bond around them is recoloured, so the mark is already
 *                 unmistakable; over a filled disc the letter goes black,
 *                 because a coloured letter on a wash of its own colour reads
 *                 faint.
 *   element changes  they sit inside the common core, where only the bonds that
 *                 reach no deleted fragment are theirs to colour, so the atom
 *                 carries most of the mark: the letter keeps the colour and a
 *                 filled disc gets a full-strength edge.
 */
export interface MarkGroup {
  atoms: Set<number>;
  bonds: number[];
  color: string;
  blackLabelOnFill: boolean;
  edgeOnFill: boolean;
}

/** What one side's classified atoms become, under `style`, in draw order. */
export function markGroups(
  style: DepictStyle,
  mol: Molecule,
  uniques: { atoms: readonly number[]; elements: readonly number[] },
  side: Side,
): MarkGroup[] {
  const bonds = uniqueBonds(mol, uniques, style.boundary);
  const groups: MarkGroup[] = [];
  if (style.createdDestroyed && uniques.atoms.length) {
    groups.push({
      atoms: new Set(uniques.atoms),
      bonds: bonds.deletions,
      color: side === "left" ? style.destroyedColor : style.createdColor,
      blackLabelOnFill: true,
      edgeOnFill: false,
    });
  }
  if (style.modified && uniques.elements.length) {
    groups.push({
      atoms: new Set(uniques.elements),
      bonds: bonds.changes,
      color: style.modifiedColor,
      blackLabelOnFill: false,
      edgeOnFill: true,
    });
  }
  return groups;
}

// --- drawing ---------------------------------------------------------------

/**
 * Whether RDKit tags its SVG the way the post-processing styles need.
 *
 * `recolor` and `halo` both work by finding `class="bond-K atom-A atom-B"` in
 * what RDKit emitted. An older MinimalLib build emits neither, and both styles
 * would then draw nothing at all, so the answer is probed once against a
 * two-atom molecule and cached.
 */
let svgClassSupport: boolean | null = null;

export function svgClassesSupported(RDKit: RDKitModule): boolean {
  if (svgClassSupport !== null) return svgClassSupport;
  svgClassSupport = false;
  let probe = null;
  try {
    probe = RDKit.get_mol("CC");
    if (probe) svgClassSupport = /class\s*=\s*['"][^'"]*bond-0/.test(probe.get_svg(60, 60));
  } catch {
    /* leave it false */
  } finally {
    if (probe) {
      try {
        probe.delete();
      } catch {
        /* already freed */
      }
    }
  }
  if (!svgClassSupport) {
    console.warn("[gufe-viz] this RDKit build emits no bond/atom classes - drawing without bond marking");
  }
  return svgClassSupport;
}

/** Test hook: forget the probe so a fresh RDKit mock is asked again. */
export function _resetSvgClassProbeForTests(): void {
  svgClassSupport = null;
}

/** The style actually in force, once RDKit has been asked what it can do. */
export function effectiveMarkStyle(style: DepictStyle, RDKit: RDKitModule): MarkStyle {
  if (style.style === "rdkit") return "rdkit";
  return svgClassesSupported(RDKit) ? style.style : "rdkit";
}

/**
 * RDKit's drawing options for one panel.
 *
 * Bonds go to RDKit under `rdkit` only, which is what gufe does: it hands
 * `DrawMolecules` both highlight sets and lets RDKit draw the red and blue bonds
 * itself. `recolor` and `halo` ask for none and paint the same bonds afterwards
 * from the SVG, because RDKit emits one filled quadrilateral per highlighted
 * bond and those mitre past each other at an acute vertex.
 */
export function depictionDetails(
  style: DepictStyle,
  size: number,
  groups: readonly MarkGroup[],
  custom: ReadonlySet<number>,
  markStyle: MarkStyle,
  atomCount: number,
): Record<string, unknown> {
  const details: Record<string, unknown> = {
    width: size,
    height: size,
    addAtomIndices: style.atomNumbers,
    addStereoAnnotation: style.stereo,
    annotationFontScale: style.numScale,
    baseFontSize: style.labelScale,
    bondLineWidth: style.bondWidth,
    scaleBondWidth: false,
  };
  if (style.elementColors === "mono") details.atomColourPalette = MAPPING_BW_PALETTE;
  // gufe's setting, and the reason the marks read as marks rather than as bands.
  if (markStyle === "rdkit") details.continuousHighlight = false;

  const colors: Record<number, readonly [number, number, number]> = {};
  const radii: Record<number, number> = {};
  const bondColors: Record<number, readonly [number, number, number]> = {};
  for (const group of groups) {
    const solid = rgbTriple(group.color);
    if (markStyle === "rdkit") for (const bond of group.bonds) bondColors[bond] = solid;
    // Under `recolor` with rings off, the bonds carry the whole mark and asking
    // RDKit for a disc would put one under an atom that is meant to have none.
    if (markStyle === "recolor" && style.circles === "off") continue;
    const paint = markStyle === "recolor" && style.circles === "filled" ? tint(solid, 0.7) : solid;
    for (const atom of group.atoms) {
      colors[atom] = paint;
      radii[atom] = style.circleRadius;
    }
  }
  // Last, so an atom named in `customSpec` takes the custom colour whatever the
  // mapping would have given it.
  const customRgb = rgbTriple(style.customColor);
  for (const atom of custom) {
    if (atom < atomCount) {
      colors[atom] = customRgb;
      radii[atom] = style.circleRadius;
    }
  }

  const atoms = Object.keys(colors).map(Number);
  if (atoms.length) {
    details.atoms = atoms;
    details.highlightAtomColors = colors;
    details.highlightAtomRadii = radii;
  }
  const bonds = Object.keys(bondColors).map(Number);
  if (bonds.length) {
    details.bonds = bonds;
    details.highlightBondColors = bondColors;
  }
  return details;
}

/** The depiction SVG for one panel, before any post-processing. */
export function depictStyledSVG(
  RDKit: RDKitModule,
  sdf: string,
  size: number,
  details: Record<string, unknown>,
): string | null {
  let rdmol = null;
  try {
    // `removeHs: false` deliberately: a mapping's indices address the molecule
    // gufe serialized, so stripping hydrogens would shift every index above the
    // first one and mark the wrong atoms with complete confidence.
    rdmol = RDKit.get_mol(sdf, JSON.stringify({ removeHs: false }));
    if (!rdmol) return null;
    if (!rdmol.get_svg_with_highlights) return rdmol.get_svg(size, size) || null;
    return rdmol.get_svg_with_highlights(JSON.stringify(details)) || null;
  } catch (e) {
    console.warn("[gufe-viz] depictStyledSVG threw -", errText(e));
    return null;
  } finally {
    if (rdmol) {
      try {
        rdmol.delete();
      } catch {
        /* already freed */
      }
    }
  }
}

// --- SVG post-processing ---------------------------------------------------
//
// RDKit tags bond paths `class="bond-K atom-A atom-B"` and atom labels
// `class="atom-N"`. An element is an atom's own if it carries an atom- class and
// no bond- class.

const SVG_NS = "http://www.w3.org/2000/svg";

function bondEls(svg: Element, k: number): Element[] {
  return Array.from(svg.querySelectorAll(`[class~="bond-${k}"]`));
}

/**
 * The elements belonging to atom `i` alone, split by what they are: the
 * highlight RDKit emits is an ellipse, the element letter is a path or a text.
 */
function atomOwnEls(svg: Element, i: number, wantShape: boolean): Element[] {
  const out: Element[] = [];
  for (const node of Array.from(svg.querySelectorAll(`[class~="atom-${i}"]`))) {
    if (/(^|\s)bond-\d+(\s|$)/.test(node.getAttribute("class") || "")) continue;
    const tag = node.tagName.toLowerCase();
    const isShape = tag === "ellipse" || tag === "circle" || tag === "rect";
    if (isShape === wantShape) out.push(node);
  }
  return out;
}

/** A bond drawn as a filled shape (a wedge or a hash) rather than a stroked line. */
function isFilled(el: Element): boolean {
  const style = (el as SVGElement).style;
  const fill = style?.fill || el.getAttribute("fill") || "";
  return !!fill && fill !== "none";
}

/**
 * Repaint the bond line itself.
 *
 * Under `halo` this is what removes the black bond sitting on the band, and
 * `labelHex` is null there so the element letters stay readable over the solid
 * disc. Otherwise `labelHex` is the colour a marked atom's letter takes: the
 * marker colour over an outline ring, black over a filled disc, where a coloured
 * letter on a wash of its own colour reads faint.
 */
function recolorMarked(
  svg: Element,
  style: DepictStyle,
  atoms: ReadonlySet<number>,
  bonds: readonly number[],
  hex: string,
  labelHex: string | null,
): void {
  for (const k of bonds) {
    for (const el of bondEls(svg, k)) {
      const css = (el as SVGElement).style;
      if (isFilled(el)) {
        css.fill = hex;
      } else {
        css.stroke = hex;
        css.strokeWidth = `${style.markWidth}px`;
      }
    }
  }
  if (!labelHex) return;
  for (const i of atoms) {
    for (const el of atomOwnEls(svg, i, false)) (el as SVGElement).style.fill = labelHex;
  }
}

/**
 * The halo band, drawn here rather than by RDKit.
 *
 * RDKit emits one filled quadrilateral per highlighted bond, so at an acute
 * vertex two quads overlap and spike past the apex. Each marked bond's centre
 * line is cloned instead as a single thick stroke with round caps and joins:
 * every band ends in a semicircle centred on the atom, so neighbours merge
 * smoothly at any angle. All the clones live in one group that carries the
 * opacity, which composites the union once so overlaps never darken.
 */
function haloBonds(svg: Element, style: DepictStyle, bonds: readonly number[], hex: string): void {
  const doc = svg.ownerDocument;
  if (!doc) return;
  const group = doc.createElementNS(SVG_NS, "g");
  group.setAttribute("data-gufe-halo", "1");
  group.style.opacity = String(style.haloOpacity);

  for (const k of bonds) {
    for (const el of bondEls(svg, k)) {
      if (isFilled(el)) continue; // a wedge keeps its own shape
      const clone = el.cloneNode(true) as SVGElement;
      clone.removeAttribute("class");
      clone.style.fill = "none";
      clone.style.stroke = hex;
      clone.style.strokeWidth = `${style.haloWidth}px`;
      clone.style.strokeLinecap = "round";
      clone.style.strokeLinejoin = "round";
      clone.style.strokeOpacity = "1";
      group.appendChild(clone);
    }
  }
  if (!group.childNodes.length) return;

  // Behind the molecule, and in front of the background rect RDKit draws first.
  const background = svg.querySelector("rect");
  if (background?.nextSibling) svg.insertBefore(group, background.nextSibling);
  else if (background) svg.appendChild(group);
  else svg.insertBefore(group, svg.firstChild);
}

/** RDKit only draws filled discs; turn them into rings. */
function outlineCircles(
  svg: Element,
  style: DepictStyle,
  atoms: ReadonlySet<number>,
  skip: ReadonlySet<number>,
  hex: string,
): void {
  for (const i of atoms) {
    if (skip.has(i)) continue;
    for (const el of atomOwnEls(svg, i, true)) {
      const css = (el as SVGElement).style;
      css.fill = "none";
      css.stroke = hex;
      css.strokeWidth = `${style.circleStroke}px`;
    }
  }
}

/** Keep the filled disc, and put a full-strength edge round it so a pale wash still reads. */
function edgeCircles(
  svg: Element,
  style: DepictStyle,
  atoms: ReadonlySet<number>,
  skip: ReadonlySet<number>,
  hex: string,
): void {
  for (const i of atoms) {
    if (skip.has(i)) continue;
    for (const el of atomOwnEls(svg, i, true)) {
      const css = (el as SVGElement).style;
      css.stroke = hex;
      css.strokeWidth = `${style.circleStroke}px`;
    }
  }
}

/**
 * Dim or hide the hydrogens, in the drawing only.
 *
 * The molecule still contains every one of them, so every atom index and every
 * classified set stays exactly as gufe wrote it. A hidden hydrogen keeps its
 * index number, because RDKit emits every annotation under one class.
 */
function applyHydrogenMode(svg: Element, mol: Molecule, style: DepictStyle): void {
  if (style.hydrogens === "show") return;
  for (let i = 0; i < mol.symbols.length; i++) {
    if (mol.symbols[i] !== "H") continue;
    for (const el of Array.from(svg.querySelectorAll(`[class~="atom-${i}"]`))) {
      const css = (el as SVGElement).style;
      if (style.hydrogens === "hide") css.display = "none";
      else css.opacity = "0.22";
    }
  }
}

/**
 * Everything the style asks for that RDKit could not be asked for directly.
 *
 * Call it on the live `<svg>` after it is in the document. Under `rdkit` the
 * only thing it does is the hydrogen mode, which is why the defaults come out
 * as the untouched RDKit drawing.
 */
export function postProcessDepiction(
  svg: Element,
  mol: Molecule,
  style: DepictStyle,
  groups: readonly MarkGroup[],
  custom: ReadonlySet<number>,
  markStyle: MarkStyle,
): void {
  if (markStyle !== "rdkit") {
    for (const group of groups) {
      if (markStyle === "recolor") {
        const filled = style.circles === "filled";
        recolorMarked(
          svg,
          style,
          group.atoms,
          group.bonds,
          group.color,
          filled && group.blackLabelOnFill ? "#000000" : group.color,
        );
        if (style.circles === "outline") outlineCircles(svg, style, group.atoms, custom, group.color);
        else if (filled && group.edgeOnFill) edgeCircles(svg, style, group.atoms, custom, group.color);
      } else {
        // The band underneath first, then the black centre bond repainted on it.
        haloBonds(svg, style, group.bonds, group.color);
        recolorMarked(svg, style, group.atoms, group.bonds, group.color, null);
      }
    }
  }
  applyHydrogenMode(svg, mol, style);
}
