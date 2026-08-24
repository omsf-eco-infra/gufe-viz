/**
 * The geometry behind the 3D mapping overlay, kept out of the view so it can be
 * tested without a WebGL context.
 *
 * The layout is gufe's, mirrored rather than reinvented. `display_mapping_3d` in
 * `gufe.visualization.mapping_visualization` puts five models in one scene:
 *
 *     [ molA shifted left ]  [ molA and molB overlaid ]  [ molB shifted right ]
 *
 * The two shifted copies are what carry the coloured spheres, so a mapped pair
 * is one colour appearing twice across the gap. The unshifted pair in the middle
 * is the overlay proper, which is where you look to see how the two structures
 * actually sit relative to each other.
 *
 * Colour comes from `MAPPING_RAMP_3D` sampled at `i / (n - 1)` for the i-th of n
 * mapped pairs. That is what `plt.get_cmap("hsv", n)` does, checked against
 * matplotlib rather than assumed - the two disagree only by matplotlib's own
 * 256-entry lookup quantization.
 */

import { MAPPING_RAMP_3D } from "./atom-colors.js";

export type Point = [number, number, number];

/** A colour from the mirrored ramp, for pair `index` of `total`. */
export function rampColor(index: number, total: number): string {
  if (total <= 0) return MAPPING_RAMP_3D[0];
  const t = total === 1 ? 0 : index / (total - 1);
  const stops = MAPPING_RAMP_3D.length;
  const position = Math.max(0, Math.min(stops - 1, t * (stops - 1)));
  const low = Math.floor(position);
  const high = Math.min(stops - 1, low + 1);
  const blend = position - low;
  if (blend === 0) return MAPPING_RAMP_3D[low];

  const parse = (hex: string): Point => {
    const value = parseInt(hex.replace("#", ""), 16);
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
  };
  const a = parse(MAPPING_RAMP_3D[low]);
  const b = parse(MAPPING_RAMP_3D[high]);
  const mix = a.map((channel, i) => Math.round(channel + (b[i] - channel) * blend));
  return `#${mix.map((c) => c.toString(16).padStart(2, "0")).join("")}`;
}

/**
 * How far apart to push the two molecules.
 *
 * gufe's rule, kept exactly: the largest x-extent of either molecule, rounded to
 * one decimal, with a floor of 5, then multiplied by 1.5 by the caller. The
 * floor is what stops two flat molecules landing on top of each other.
 */
export function maxExtentX(a: readonly Point[], b: readonly Point[]): number {
  let widest = 0;
  for (const positions of [a, b]) {
    let low = Infinity;
    let high = -Infinity;
    for (const point of positions) {
      if (point[0] < low) low = point[0];
      if (point[0] > high) high = point[0];
    }
    if (positions.length) widest = Math.max(widest, high - low);
  }
  const rounded = Math.round(widest * 10) / 10;
  return rounded > 5 ? rounded : 5;
}

/** The shift applied to each side: gufe multiplies the extent by 1.5. */
export const SHIFT_FACTOR = 1.5;

export interface MappedPair {
  /** Where this pair's atom sits on the shifted copy of A. */
  a: Point;
  /** And on the shifted copy of B. */
  b: Point;
  color: string;
  indexA: number;
  indexB: number;
}

/**
 * Every mapped pair, positioned on the shifted copies and coloured.
 *
 * Pairs whose index falls outside either conformer are dropped rather than
 * drawn at the origin: a payload can be schema-valid and still name an atom the
 * SDF does not have, and a sphere at (0,0,0) looks like data.
 */
export function mappedPairs(
  pairs: ReadonlyMap<number, number>,
  coordsA: readonly Point[],
  coordsB: readonly Point[],
  shift: number,
): MappedPair[] {
  const entries = [...pairs.entries()];
  const out: MappedPair[] = [];
  entries.forEach(([indexA, indexB], i) => {
    const from = coordsA[indexA];
    const to = coordsB[indexB];
    if (!from || !to) return;
    out.push({
      a: [from[0] - shift, from[1], from[2]],
      b: [to[0] + shift, to[1], to[2]],
      color: rampColor(i, entries.length),
      indexA,
      indexB,
    });
  });
  return out;
}

/** An SDF with every x displaced by `shift`, for the two outer copies. */
export function shiftedSDF(sdf: string, shift: number): string {
  // The atom block is the only place coordinates appear, and its columns are
  // fixed width: x, y, z in 10-character fields on each of the first `counts`
  // lines after the header. Rewriting only x keeps everything else byte-identical.
  const lines = sdf.replace(/\r/g, "").split("\n");
  if (lines.length < 4) return sdf;
  const atoms = parseInt(lines[3].slice(0, 3), 10);
  if (!Number.isInteger(atoms) || atoms <= 0) return sdf;

  for (let i = 0; i < atoms; i++) {
    const index = 4 + i;
    const line = lines[index];
    if (!line || line.length < 30) continue;
    const x = Number(line.slice(0, 10));
    if (!Number.isFinite(x)) continue;
    lines[index] = (x + shift).toFixed(4).padStart(10) + line.slice(10);
  }
  return lines.join("\n");
}
