/**
 * Where a 2D depiction's coordinates come from.
 *
 * Two claims are worth holding down here, because both are silent when they
 * break: a depiction drawn from a conformer still looks like a molecule, just
 * tipped, and a pair laid out independently still looks like two molecules,
 * just not like each other. Neither throws, so only a test says which happened.
 */

import { describe, expect, it } from "vitest";

import {
  align2D,
  alignedToPartner,
  applyTurn,
  laidOut,
  layoutPair,
  withCoords,
  type Vec2,
} from "../src/shared/depict-layout.js";
import { buildMolBlock, parseSDF, type Molecule } from "../src/shared/sdf.js";
import type { RDKitModule } from "../src/shared/engines.js";

// --- a molecule, and RDKit as much of one as this file needs ----------------

/** An L, so a rotation and a mirror are both visible in the coordinates. */
const L: Molecule = {
  name: "ell",
  symbols: ["C", "C", "C", "N"],
  bonds: [
    [0, 1, 1],
    [1, 2, 1],
    [1, 3, 1],
  ],
  coords: [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
    [2, 0, 0],
  ],
};

const flat = (molblock: string): Vec2[] => parseSDF(molblock).coords.map((c) => [c[0], c[1]] as Vec2);

const turned = (points: readonly Vec2[], degrees: number, mirror = false): Vec2[] => {
  const a = (degrees * Math.PI) / 180;
  return points.map(([x, y]) => [
    Math.cos(a) * (mirror ? -x : x) - Math.sin(a) * y + 7,
    Math.sin(a) * (mirror ? -x : x) + Math.cos(a) * y - 3,
  ]);
};

const closeTo = (got: readonly Vec2[], want: readonly Vec2[]): void => {
  expect(got).toHaveLength(want.length);
  got.forEach((p, i) => {
    expect(p[0], `x of point ${i}`).toBeCloseTo(want[i][0], 6);
    expect(p[1], `y of point ${i}`).toBeCloseTo(want[i][1], 6);
  });
};

interface FakeCalls {
  coordGen: boolean[];
  sources: string[];
}

/**
 * RDKit as far as the layout step uses it.
 *
 * `molblock` is what `get_molblock` hands back, which stands in for the
 * coordinates RDKit would have generated; leaving it out is a build with no
 * `get_molblock` at all, which is the fallback every caller has to survive.
 */
function fakeRDKit(molblock?: string): { rdkit: RDKitModule; calls: FakeCalls } {
  const calls: FakeCalls = { coordGen: [], sources: [] };
  const rdkit = {
    get_mol: (source: string) => {
      calls.sources.push(source);
      return {
        set_new_coords: (useCoordGen: boolean) => calls.coordGen.push(useCoordGen),
        get_molblock: molblock === undefined ? undefined : () => molblock,
        get_svg: () => "<svg/>",
        delete: () => {},
      };
    },
  } as unknown as RDKitModule;
  return { rdkit, calls };
}

describe("align2D", () => {
  const fixed: Vec2[] = [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 0],
  ];
  const all = fixed.map((_, i) => [i, i] as const);

  it("recovers a rotation and translation exactly", () => {
    const moving = turned(fixed, 40);
    const turn = align2D(moving, fixed, all)!;
    expect(turn.mirror).toBe(false);
    closeTo(
      moving.map((p) => applyTurn(turn, p)),
      fixed,
    );
  });

  /**
   * The case a rotation alone can never fix. Two layouts of one scaffold come
   * out reflections of each other often enough that leaving this out would
   * leave half the pairs looking unaligned.
   */
  it("mirrors when a mirror is the better fit", () => {
    const moving = turned(fixed, 115, true);
    const turn = align2D(moving, fixed, all)!;
    expect(turn.mirror).toBe(true);
    closeTo(
      moving.map((p) => applyTurn(turn, p)),
      fixed,
    );
  });

  it("aligns on the mapped atoms and carries the rest along with them", () => {
    const moving = turned(fixed, 25);
    // Atom 3 is left out of the mapping: it must still be turned, and it must
    // land where the same turn puts it rather than anywhere of its own.
    const turn = align2D(moving, fixed, [
      [0, 0],
      [1, 1],
      [2, 2],
    ])!;
    closeTo(
      moving.map((p) => applyTurn(turn, p)),
      fixed,
    );
  });

  it("has no angle to find from fewer than two pairs", () => {
    expect(align2D(fixed, fixed, [[0, 0]])).toBeNull();
    expect(align2D(fixed, fixed, [])).toBeNull();
  });

  it("skips a pair naming an atom that is not there", () => {
    expect(
      align2D(fixed, fixed, [
        [0, 0],
        [1, 99],
      ]),
    ).toBeNull();
  });
});

describe("withCoords", () => {
  const molblock = buildMolBlock(L);

  it("writes the coordinates and flattens the third one", () => {
    const moved: Vec2[] = [
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ];
    const out = parseSDF(withCoords(molblock, moved, false));
    expect(out.coords).toEqual(moved.map(([x, y]) => [x, y, 0]));
  });

  it("leaves the rest of every atom line alone, so charges survive the trip", () => {
    const out = withCoords(molblock, flat(molblock), false).split("\n");
    const before = molblock.split("\n");
    for (let i = 4; i < 4 + L.symbols.length; i++) {
      expect(out[i].substring(30), `tail of atom line ${i}`).toBe(before[i].substring(30));
    }
    expect(out[out.length - 1]).toBe("M  END");
  });

  /**
   * A reflected drawing spells the opposite chirality unless its wedges are
   * reflected with it, and RDKit reads chirality back out of exactly those.
   */
  it("swaps wedge for hash only when the turn was a mirror", () => {
    const wedged = molblock.split("\n");
    const bond = 4 + L.symbols.length;
    wedged[bond] = "  1  2  1  1  0  0  0";
    wedged[bond + 1] = "  2  3  1  6  0  0  0";
    wedged[bond + 2] = "  2  4  1  4  0  0  0";
    const source = wedged.join("\n");
    const stereo = (text: string): string[] =>
      text.split("\n").slice(bond, bond + 3).map((line) => line.substring(9, 12));

    expect(stereo(withCoords(source, flat(source), false))).toEqual(["  1", "  6", "  4"]);
    // 4 is "either", which a mirror leaves as it is.
    expect(stereo(withCoords(source, flat(source), true))).toEqual(["  6", "  1", "  4"]);
  });

  it("hands back what it was given when it cannot read the block", () => {
    expect(withCoords("nonsense", [], false)).toBe("nonsense");
    const v3000 = molblock.replace("V2000", "V3000");
    expect(withCoords(v3000, flat(molblock), false)).toBe(v3000);
    // One coordinate short is not a molecule this can rewrite.
    expect(withCoords(molblock, [[0, 0]], false)).toBe(molblock);
  });
});

describe("laidOut", () => {
  const molblock = buildMolBlock(L);
  const generated = buildMolBlock({ ...L, coords: L.coords.map(([x, y]) => [y, x, 0]) });

  it("asks RDKit for its own depiction under rdkit, and CoordGen under coordgen", () => {
    for (const [layout, useCoordGen] of [
      ["rdkit", false],
      ["coordgen", true],
    ] as const) {
      const { rdkit, calls } = fakeRDKit(generated);
      expect(laidOut(rdkit, molblock, layout)).toBe(generated);
      expect(calls.coordGen, layout).toEqual([useCoordGen]);
    }
  });

  /**
   * The molecule keeps every hydrogen. A mapping addresses atoms by index, so a
   * layout step that stripped them would hand the drawing call a molecule with
   * every index above the first hydrogen shifted, and it would mark the wrong
   * atoms with complete confidence.
   */
  it("never lets RDKit strip a hydrogen out from under the mapping", () => {
    let details = "";
    const probe = {
      get_mol: (_source: string, d: string) => {
        details = d;
        return null;
      },
    } as unknown as RDKitModule;
    laidOut(probe, molblock, "rdkit");
    expect(JSON.parse(details).removeHs).toBe(false);
  });

  it("asks RDKit nothing at all under conformer", () => {
    const { rdkit, calls } = fakeRDKit(generated);
    expect(laidOut(rdkit, molblock, "conformer")).toBe(molblock);
    expect(calls.sources).toEqual([]);
  });

  it("draws what it was handed when the build cannot give coordinates back", () => {
    const { rdkit } = fakeRDKit();
    expect(laidOut(rdkit, molblock, "rdkit")).toBe(molblock);
  });

  it("draws what it was handed when RDKit throws", () => {
    const rdkit = {
      get_mol: () => {
        throw new Error("no");
      },
    } as unknown as RDKitModule;
    expect(laidOut(rdkit, molblock, "rdkit")).toBe(molblock);
  });
});

describe("alignedToPartner", () => {
  const left = buildMolBlock(L);
  const right = buildMolBlock({ ...L, coords: turned(flat(left), 70).map(([x, y]) => [x, y, 0]) });
  const pairs = L.symbols.map((_, i) => [i, i] as const);

  it("turns the second molecule onto the first through the mapping", () => {
    closeTo(flat(alignedToPartner(left, right, pairs)), flat(left));
  });

  it("leaves it alone when the mapping fixes no angle", () => {
    expect(alignedToPartner(left, right, [[0, 0]])).toBe(right);
    expect(alignedToPartner(left, right, [])).toBe(right);
  });

  it("leaves it alone rather than throwing when a molecule cannot be read", () => {
    expect(alignedToPartner("nonsense", right, pairs)).toBe(right);
  });
});

describe("layoutPair", () => {
  const left = buildMolBlock(L);
  const right = buildMolBlock({ ...L, coords: turned(flat(left), 70).map(([x, y]) => [x, y, 0]) });
  const pairs = L.symbols.map((_, i) => [i, i] as const);
  /** A build that hands back whatever it was given, so only the turn shows. */
  const passthrough = {
    get_mol: (source: string) => ({
      set_new_coords: () => {},
      get_molblock: () => source,
      get_svg: () => "<svg/>",
      delete: () => {},
    }),
  } as unknown as RDKitModule;

  it("lays both out and aligns the second onto the first", () => {
    const out = layoutPair(passthrough, left, right, "rdkit", pairs);
    expect(out.left).toBe(left);
    closeTo(flat(out.right), flat(left));
  });

  it("keeps the two independent when there is no mapping to align through", () => {
    expect(layoutPair(passthrough, left, right, "rdkit", null).right).toBe(right);
  });

  /** There is no generated layout to turn: both molecules keep their pose. */
  it("aligns nothing under conformer", () => {
    const out = layoutPair(passthrough, left, right, "conformer", pairs);
    expect(out).toEqual({ left, right });
  });
});
