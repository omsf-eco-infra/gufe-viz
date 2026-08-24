/**
 * The geometry behind the 3D mapping overlay.
 *
 * Tested here rather than through the view because none of it needs a WebGL
 * context, and because getting the ramp index or the shift wrong produces a
 * picture that looks plausible and disagrees with what gufe draws.
 */

import { describe, expect, it } from "vitest";
import { MAPPING_RAMP_3D } from "../src/shared/atom-colors.js";
import { mappedPairs, maxExtentX, rampColor, shiftedSDF, type Point } from "../src/shared/mapping3d.js";
import { readExample } from "./helpers.js";
import { parseSDF } from "../src/shared/sdf.js";

describe("rampColor", () => {
  it("spans the whole ramp, ends included", () => {
    // gufe asks matplotlib for `get_cmap("hsv", n)` and indexes it by pair
    // position, which is the ramp sampled at i/(n-1) - so the first and last
    // pair land on the ends rather than somewhere inside.
    expect(rampColor(0, 5)).toBe(MAPPING_RAMP_3D[0]);
    expect(rampColor(4, 5)).toBe(MAPPING_RAMP_3D[MAPPING_RAMP_3D.length - 1]);
  });

  it("gives a lone pair the start of the ramp rather than dividing by zero", () => {
    expect(rampColor(0, 1)).toBe(MAPPING_RAMP_3D[0]);
  });

  it("gives every pair of a set a distinct colour", () => {
    const colors = new Set(Array.from({ length: 12 }, (_, i) => rampColor(i, 12)));
    expect(colors.size).toBe(12);
  });
});

describe("maxExtentX", () => {
  it("measures the wider of the two molecules", () => {
    const a: Point[] = [[0, 0, 0], [8, 0, 0]];
    const b: Point[] = [[0, 0, 0], [3, 0, 0]];
    expect(maxExtentX(a, b)).toBe(8);
  });

  it("never goes below gufe's floor of 5", () => {
    // Two flat molecules would otherwise be shifted onto each other.
    const a: Point[] = [[0, 0, 0], [1, 0, 0]];
    expect(maxExtentX(a, a)).toBe(5);
  });
});

describe("mappedPairs", () => {
  const coordsA: Point[] = [[0, 0, 0], [1, 1, 1]];
  const coordsB: Point[] = [[0, 0, 0], [2, 2, 2]];

  it("pushes the two sides apart by the shift, in x only", () => {
    const [pair] = mappedPairs(new Map([[1, 1]]), coordsA, coordsB, 10);
    expect(pair.a).toEqual([-9, 1, 1]);
    expect(pair.b).toEqual([12, 2, 2]);
  });

  it("gives both atoms of a pair the same colour, which is what says they match", () => {
    const pairs = mappedPairs(new Map([[0, 0], [1, 1]]), coordsA, coordsB, 1);
    expect(pairs).toHaveLength(2);
    expect(pairs[0].color).not.toBe(pairs[1].color);
  });

  it("drops a pair naming an atom the conformer does not have", () => {
    // Schema-valid and undrawable: a sphere at the origin would look like data.
    expect(mappedPairs(new Map([[0, 99]]), coordsA, coordsB, 1)).toHaveLength(0);
    expect(mappedPairs(new Map([[99, 0]]), coordsA, coordsB, 1)).toHaveLength(0);
  });
});

describe("shiftedSDF", () => {
  const sdf = (readExample("small_molecule.json") as { sdf: string }).sdf;

  it("moves every atom in x and nothing else", () => {
    const before = parseSDF(sdf);
    const after = parseSDF(shiftedSDF(sdf, 7.5));
    expect(after.coords).toHaveLength(before.coords.length);
    after.coords.forEach((point, i) => {
      expect(point[0]).toBeCloseTo(before.coords[i][0] + 7.5, 3);
      expect(point[1]).toBeCloseTo(before.coords[i][1], 4);
      expect(point[2]).toBeCloseTo(before.coords[i][2], 4);
    });
  });

  it("leaves the bonds and the element symbols alone", () => {
    const before = parseSDF(sdf);
    const after = parseSDF(shiftedSDF(sdf, -3));
    expect(after.symbols).toEqual(before.symbols);
    expect(after.bonds).toEqual(before.bonds);
  });

  it("hands back anything it cannot read, rather than corrupting it", () => {
    expect(shiftedSDF("not an sdf", 1)).toBe("not an sdf");
  });
});
