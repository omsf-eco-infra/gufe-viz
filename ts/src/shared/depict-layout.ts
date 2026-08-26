/**
 * Where a 2D depiction's coordinates come from.
 *
 * A `SmallMoleculeComponent` carries a conformer, so its SDF holds real 3D
 * coordinates. Handing those straight to RDKit's drawer does not draw a
 * structural formula: it draws that conformer flattened onto the page, at
 * whatever angle the ligand happened to be posed at, which reads as a molecule
 * tipped away from the viewer rather than as a flat depiction.
 *
 * gufe does two things before it draws a pair, in
 * `gufe/visualization/mapping_visualization.py`:
 *
 *   AllChem.Compute2DCoords(mol)          # squash to 2D
 *   AllChem.AlignMol(copies[j], copies[i], atomMap=...)
 *
 * This file is both of those. `laidOut` replaces the conformer with a generated
 * layout, and `alignedToPartner` turns one molecule's layout to match the
 * other's through the mapping, so a shared core sits the same way up in both
 * panels instead of being laid out twice independently.
 *
 * Everything here works on MOL block text rather than on an RDKit molecule,
 * because MinimalLib will generate coordinates and hand back a MOL block but
 * offers no way to write coordinates into a molecule that already exists. Text
 * also keeps charge blocks, valences and every other property line intact,
 * which rebuilding a MOL block from a parsed molecule would not.
 *
 * Failure is always the unchanged input. A depiction posed the wrong way is a
 * worse picture; no depiction at all is no picture.
 */

import type { RDKitModule } from "./engines.js";
import { errText } from "./dom.js";
import { parseCounts, parseSDF } from "./sdf.js";

/** Where the coordinates come from. See the schema for what each one draws. */
export type Layout2D = "rdkit" | "coordgen" | "conformer";

/** A point on the page. The third coordinate of a generated layout is zero. */
export type Vec2 = [number, number];

/** A rigid turn: mirror in x, rotate, translate. No scaling, so no bond changes. */
export interface Turn2D {
  cos: number;
  sin: number;
  mirror: boolean;
  tx: number;
  ty: number;
}

const NL = "\n";
/** First line of the atom block: title, program, comment, counts. */
const ATOM_BLOCK_START = 4;

/**
 * Replace the conformer with a generated 2D layout, as a MOL block.
 *
 * `conformer` is the one that asks for nothing: the SDF is returned as it
 * arrived, so the drawer sees the coordinates gufe serialized.
 *
 * `removeHs: false` matches what the drawing call passes, and has to: a mapping
 * addresses atoms by index, so a molecule that lost its hydrogens here would
 * come back with every index above the first one shifted.
 */
export function laidOut(RDKit: RDKitModule, sdf: string, layout: Layout2D): string {
  if (layout === "conformer") return sdf;
  let rdmol = null;
  try {
    rdmol = RDKit.get_mol(sdf, JSON.stringify({ removeHs: false }));
    if (!rdmol || !rdmol.get_molblock) return sdf;
    rdmol.set_new_coords(layout === "coordgen");
    return rdmol.get_molblock() || sdf;
  } catch (e) {
    console.warn("[gufe-viz] could not lay out a molecule in 2D -", errText(e));
    return sdf;
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

/**
 * The turn that best carries `moving` onto `fixed` over the pairs given.
 *
 * Each pair is `[fixedIndex, movingIndex]`. The answer is the rotation that
 * minimises the squared distance over those pairs, taken twice: once as the
 * points stand and once mirrored, keeping whichever fits better. A mirror is
 * worth having because two layouts of the same scaffold are often reflections
 * of each other, and no rotation alone will ever bring those together.
 *
 * Null when there is nothing to solve: fewer than two pairs determine no angle.
 */
export function align2D(
  moving: readonly Vec2[],
  fixed: readonly Vec2[],
  pairs: Iterable<readonly [number, number]>,
): Turn2D | null {
  const a: Vec2[] = [];
  const b: Vec2[] = [];
  for (const [fixedIndex, movingIndex] of pairs) {
    const from = moving[movingIndex];
    const onto = fixed[fixedIndex];
    if (!from || !onto) continue;
    a.push(from);
    b.push(onto);
  }
  if (a.length < 2) return null;

  const centre = (points: readonly Vec2[]): Vec2 => {
    let x = 0;
    let y = 0;
    for (const p of points) {
      x += p[0];
      y += p[1];
    }
    return [x / points.length, y / points.length];
  };
  const ca = centre(a);
  const cb = centre(b);

  // For a fixed pair of centred point sets the residual is
  // `|a|^2 + |b|^2 - 2*hypot(cross, dot)`, and the first two terms do not
  // change under a mirror, so the larger hypot is the better fit outright.
  let best: Turn2D | null = null;
  let bestFit = -Infinity;
  for (const mirror of [false, true]) {
    let cross = 0;
    let dot = 0;
    for (let k = 0; k < a.length; k++) {
      const ax = (mirror ? -1 : 1) * (a[k][0] - ca[0]);
      const ay = a[k][1] - ca[1];
      const bx = b[k][0] - cb[0];
      const by = b[k][1] - cb[1];
      cross += ax * by - ay * bx;
      dot += ax * bx + ay * by;
    }
    const fit = Math.hypot(cross, dot);
    if (fit <= bestFit) continue;
    bestFit = fit;
    const angle = Math.atan2(cross, dot);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    // Translation is written out even though the drawer recentres every panel,
    // so that the MOL block this produces is one someone can read on its own.
    const mx = (mirror ? -1 : 1) * ca[0];
    best = {
      cos,
      sin,
      mirror,
      tx: cb[0] - (cos * mx - sin * ca[1]),
      ty: cb[1] - (sin * mx + cos * ca[1]),
    };
  }
  return best;
}

/** `point` under `turn`. */
export function applyTurn(turn: Turn2D, point: Vec2): Vec2 {
  const x = (turn.mirror ? -1 : 1) * point[0];
  const y = point[1];
  return [turn.cos * x - turn.sin * y + turn.tx, turn.sin * x + turn.cos * y + turn.ty];
}

/**
 * A MOL block with new coordinates written into its atom block.
 *
 * Only the three coordinate fields of each atom line are touched, so charges,
 * radicals and everything after the atom block survive. A mirrored turn also
 * swaps the wedge and hash bonds, because reflecting the drawing without
 * reflecting those would leave a MOL block that spells the opposite
 * stereochemistry to the one it came from.
 */
export function withCoords(molblock: string, coords: readonly Vec2[], mirrored: boolean): string {
  const counts = parseCounts(molblock);
  if (!counts) return molblock;
  const lines = molblock.replace(/\r/g, "").split(NL);
  if (lines[3].indexOf("V3000") !== -1) return molblock;

  for (let i = 0; i < counts.atoms; i++) {
    const line = lines[ATOM_BLOCK_START + i];
    const c = coords[i];
    if (line == null || !c) return molblock;
    lines[ATOM_BLOCK_START + i] =
      c[0].toFixed(4).padStart(10) + c[1].toFixed(4).padStart(10) + (0).toFixed(4).padStart(10) + line.substring(30);
  }

  if (mirrored) {
    // Bond line is `111222tttsss...`: the stereo field is the fourth, and 1 is
    // a wedge where 6 is a hash. 4 means "either", which a mirror leaves alone.
    const WEDGE = 1;
    const HASH = 6;
    for (let j = 0; j < counts.bonds; j++) {
      const at = ATOM_BLOCK_START + counts.atoms + j;
      const line = lines[at];
      if (line == null) break;
      const stereo = parseInt(line.substring(9, 12), 10);
      if (stereo !== WEDGE && stereo !== HASH) continue;
      lines[at] = line.substring(0, 9) + String(stereo === WEDGE ? HASH : WEDGE).padStart(3) + line.substring(12);
    }
  }
  return lines.join(NL);
}

/**
 * `right`, turned so its mapped atoms sit over the left molecule's.
 *
 * Both arguments are what `laidOut` produced. The input is returned untouched
 * when there is no turn to make or anything cannot be read, which covers the
 * V3000 case, an empty mapping, and a molecule the parser will not take.
 */
export function alignedToPartner(left: string, right: string, pairs: Iterable<readonly [number, number]>): string {
  try {
    const flat = (sdf: string): Vec2[] => parseSDF(sdf).coords.map((c) => [c[0], c[1]] as Vec2);
    const moving = flat(right);
    const turn = align2D(moving, flat(left), pairs);
    if (!turn) return right;
    return withCoords(
      right,
      moving.map((p) => applyTurn(turn, p)),
      turn.mirror,
    );
  } catch (e) {
    console.warn("[gufe-viz] could not align a depiction to its partner -", errText(e));
    return right;
  }
}

/**
 * The two MOL blocks to draw a mapping from.
 *
 * `pairs` is the mapping as `[leftIndex, rightIndex]` entries, or null to leave
 * the two layouts independent. There is nothing to align onto under
 * `conformer`, where both molecules keep the pose gufe serialized, so the
 * mapping is ignored there.
 */
export function layoutPair(
  RDKit: RDKitModule,
  leftSdf: string,
  rightSdf: string,
  layout: Layout2D,
  pairs: Iterable<readonly [number, number]> | null,
): { left: string; right: string } {
  const left = laidOut(RDKit, leftSdf, layout);
  const right = laidOut(RDKit, rightSdf, layout);
  if (!pairs || layout === "conformer") return { left, right };
  return { left, right: alignedToPartner(left, right, pairs) };
}
