/**
 * Kabsch superposition.
 *
 * Pairs mode is only legible when the two molecules are aligned first: lines
 * between mapped atoms read as a correspondence when they are parallel and as
 * noise when they are not. So this is tested by construction - take points,
 * apply a known rotation, and check the transform recovers them.
 */

import { describe, expect, it } from "vitest";
import { applyRT, kabsch, type Vec3 } from "../src/shared/kabsch.js";

const CUBE: Vec3[] = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 0],
  [1, 0, 1],
];

/** Rotate about z, then translate - a transform Kabsch should undo exactly. */
function move(points: Vec3[], radians: number, shift: Vec3): Vec3[] {
  const c = Math.cos(radians);
  const s = Math.sin(radians);
  return points.map(([x, y, z]): Vec3 => [x * c - y * s + shift[0], x * s + y * c + shift[1], z + shift[2]]);
}

const close = (a: Vec3, b: Vec3, digits = 6): void => {
  a.forEach((value, i) => expect(value).toBeCloseTo(b[i], digits));
};

describe("kabsch", () => {
  it("recovers a rotation and translation exactly", () => {
    const moved = move(CUBE, Math.PI / 3, [4, -2, 1.5]);
    const rt = kabsch(CUBE, moved)!;
    expect(rt).toBeTruthy();
    moved.map((p) => applyRT(p, rt.R, rt.t)).forEach((p, i) => close(p, CUBE[i]));
  });

  it("is the identity for points already superposed", () => {
    const rt = kabsch(CUBE, CUBE)!;
    CUBE.map((p) => applyRT(p, rt.R, rt.t)).forEach((p, i) => close(p, CUBE[i]));
  });

  it("handles a pure translation", () => {
    const moved = move(CUBE, 0, [10, 10, 10]);
    const rt = kabsch(CUBE, moved)!;
    moved.map((p) => applyRT(p, rt.R, rt.t)).forEach((p, i) => close(p, CUBE[i]));
  });

  it("translates centroids when there are too few points to orient", () => {
    // Two points have no orientation to recover, so a pure translation is the
    // right answer rather than a fallback.
    const a: Vec3[] = [[0, 0, 0], [1, 0, 0]];
    const b: Vec3[] = [[5, 5, 5], [6, 5, 5]];
    const rt = kabsch(a, b)!;
    expect(rt.R).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    close(applyRT(b[0], rt.R, rt.t), a[0]);
  });

  it("produces a rotation, never a reflection", () => {
    // A determinant of -1 would mirror the molecule, turning a correct mapping
    // into a picture of the wrong stereochemistry.
    const rt = kabsch(CUBE, move(CUBE, 2.1, [1, 2, 3]))!;
    const [a, b, c, d, e, f, g, h, i] = rt.R;
    const det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    expect(det).toBeCloseTo(1, 6);
  });

  it("returns null when there is nothing to align", () => {
    expect(kabsch([], [])).toBeNull();
  });
});

describe("kabsch on points that do not pin a rotation down", () => {
  // Every 3D mode of the mapping view moves a molecule by this transform, so a
  // rotation that is one arbitrary choice out of a circle of equally good ones
  // has to announce itself. See `Transform.determined`.

  it("is determined by points with width in a second direction", () => {
    expect(kabsch(CUBE, move(CUBE, 1.1, [0, 0, 0]))!.determined).toBe(true);
  });

  it("is undetermined for fewer than three points", () => {
    const two: Vec3[] = [[0, 0, 0], [1, 0, 0]];
    expect(kabsch(two, two)!.determined).toBe(false);
  });

  it("is undetermined for points on a line, however many of them", () => {
    // A line has a whole axis of rotation about itself that changes nothing,
    // so the transform is a free choice and a molecule moved by it is turned
    // by an amount nothing chose.
    const line: Vec3[] = [[0, 0, 0], [1, 0, 0], [2, 0, 0], [3, 0, 0]];
    expect(kabsch(line, move(line, 0.7, [2, 1, 0]))!.determined).toBe(false);
  });

  it("is determined by three points that are not on a line", () => {
    const triangle: Vec3[] = [[0, 0, 0], [1, 0, 0], [0, 1, 0]];
    const rt = kabsch(triangle, move(triangle, 0.9, [3, 0, 0]))!;
    expect(rt.determined).toBe(true);
    move(triangle, 0.9, [3, 0, 0]).map((p) => applyRT(p, rt.R, rt.t)).forEach((p, i) => close(p, triangle[i]));
  });
});
