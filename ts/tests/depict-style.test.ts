/**
 * The depiction style, held to its contract from three sides.
 *
 * The document is authored somewhere else - in the editor at
 * https://framejs.app/j/5df86d91e8824b20a02908b52a6f07c3 - and arrives here as
 * a file someone dropped in, so the things worth checking are the ones a hand
 * edit or a stale export can break:
 *
 *   1. the committed document validates against the schema
 *   2. the schema, the TypeScript type and the runtime defaults agree about
 *      which keys exist and what each one defaults to
 *   3. the defaults still reproduce the picture this project drew before the
 *      document existed
 *   4. the pipeline does what each key says it does
 */

import { describe, expect, it, beforeEach } from "vitest";
import Ajv2020 from "ajv/dist/2020.js";

import schema from "../../schema/depict-style.schema.json" with { type: "json" };
import committed from "../src/shared/depict-style.json" with { type: "json" };
import { MAPPING_BW_PALETTE, MAPPING_COLORS, MAPPING_DRAW_OPTIONS } from "../src/shared/atom-colors.js";
import {
  DEFAULT_DEPICT_STYLE,
  DEPICT_STYLE,
  DEPICT_STYLE_RANGES,
  _resetSvgClassProbeForTests,
  depictionDetails,
  effectiveMarkStyle,
  markGroups,
  markedBonds,
  normaliseDepictStyle,
  parseAtomSpec,
  postProcessDepiction,
  rgbTriple,
  svgClassesSupported,
  tint,
  type DepictStyle,
} from "../src/shared/depict-style.js";
import type { Molecule } from "../src/shared/sdf.js";
import type { RDKitModule } from "../src/shared/engines.js";

const ajv = new Ajv2020({ allErrors: true, strict: false });
const validate = ajv.compile(schema);

const SCHEMA_KEYS = Object.keys(schema.properties);

describe("the contract", () => {
  it("accepts the committed document", () => {
    const ok = validate(committed);
    expect(validate.errors ?? [], JSON.stringify(validate.errors, null, 2)).toEqual([]);
    expect(ok).toBe(true);
  });

  it("declares exactly the keys the runtime defaults carry", () => {
    expect(SCHEMA_KEYS.slice().sort()).toEqual(Object.keys(DEFAULT_DEPICT_STYLE).sort());
  });

  it("agrees with the runtime defaults, key by key", () => {
    for (const key of SCHEMA_KEYS) {
      const declared = (schema.properties as Record<string, { default?: unknown; const?: unknown }>)[key];
      const expected = "default" in declared ? declared.default : declared.const;
      expect(DEFAULT_DEPICT_STYLE[key as keyof DepictStyle], `default for ${key}`).toEqual(expected);
    }
  });

  it("agrees with the runtime ranges, key by key", () => {
    for (const [key, [min, max]] of Object.entries(DEPICT_STYLE_RANGES)) {
      const declared = (schema.properties as Record<string, { minimum?: number; maximum?: number }>)[key];
      expect([declared.minimum, declared.maximum], `range for ${key}`).toEqual([min, max]);
    }
    // And nothing numeric is bounded in the schema without being clamped here.
    for (const key of SCHEMA_KEYS) {
      const declared = (schema.properties as Record<string, { minimum?: number }>)[key];
      if (declared.minimum !== undefined) expect(DEPICT_STYLE_RANGES[key], `${key} is clamped`).toBeDefined();
    }
  });

  it("refuses an unknown key, so a stale export is caught rather than half-applied", () => {
    expect(validate({ ...committed, optsOpen: true })).toBe(false);
  });

  it("refuses a colour that is not six hex digits", () => {
    expect(validate({ ...committed, createdColor: "red" })).toBe(false);
    expect(validate({ ...committed, createdColor: "#abc" })).toBe(false);
  });

  it("refuses a value outside the range the editor's control offers", () => {
    expect(validate({ ...committed, haloOpacity: 1.5 })).toBe(false);
  });

  it("accepts a document that carries nothing but its version", () => {
    expect(validate({ version: 1 })).toBe(true);
  });
});

describe("the defaults", () => {
  it("are what the committed document says, so the build draws what the file shows", () => {
    expect(DEPICT_STYLE).toEqual(normaliseDepictStyle(committed));
    expect(DEPICT_STYLE).toEqual(DEFAULT_DEPICT_STYLE);
  });

  it("carry gufe's mapping colours", () => {
    expect(DEFAULT_DEPICT_STYLE.destroyedColor).toBe(MAPPING_COLORS.uniqueAtom);
    expect(DEFAULT_DEPICT_STYLE.createdColor).toBe(MAPPING_COLORS.uniqueAtom);
    expect(DEFAULT_DEPICT_STYLE.modifiedColor).toBe(MAPPING_COLORS.elementChange);
  });

  /**
   * The parity that matters: with the document untouched, the options handed to
   * RDKit must still be the ones gufe sets. `MAPPING_DRAW_OPTIONS` is generated
   * from gufe itself, so this fails if a default drifts away from it.
   */
  it("still hand RDKit everything gufe sets", () => {
    const details = depictionDetails(DEFAULT_DEPICT_STYLE, 420, [], new Set(), "rdkit", 10);
    expect(details.atomColourPalette).toBe(MAPPING_DRAW_OPTIONS.atomColourPalette);
    expect(details.atomColourPalette).toBe(MAPPING_BW_PALETTE);
    expect(details.addAtomIndices).toBe(MAPPING_DRAW_OPTIONS.addAtomIndices);
    expect(details.continuousHighlight).toBe(MAPPING_DRAW_OPTIONS.continuousHighlight);
  });

  /**
   * Every numeric default is the value RDKit already uses, verified against
   * RDKit itself, so passing them explicitly cannot change the picture.
   */
  it("set every numeric option to the RDKit default it stands in for", () => {
    const details = depictionDetails(DEFAULT_DEPICT_STYLE, 420, [], new Set(), "rdkit", 10);
    expect(details.annotationFontScale).toBe(0.5);
    expect(details.baseFontSize).toBe(0.6);
    expect(details.bondLineWidth).toBe(2);
    expect(details.scaleBondWidth).toBe(false);
    expect(DEFAULT_DEPICT_STYLE.circleRadius).toBe(0.3);
  });

  it("ask for no highlight at all when nothing is marked", () => {
    const details = depictionDetails(DEFAULT_DEPICT_STYLE, 420, [], new Set(), "rdkit", 10);
    expect(details.atoms).toBeUndefined();
    expect(details.highlightAtomColors).toBeUndefined();
  });
});

describe("normaliseDepictStyle", () => {
  it("fills in what a partial document leaves out", () => {
    expect(normaliseDepictStyle({ version: 1, style: "halo" })).toEqual({
      ...DEFAULT_DEPICT_STYLE,
      style: "halo",
    });
  });

  it("drops an unknown key and an unusable value", () => {
    const out = normaliseDepictStyle({ optsOpen: true, style: "sparkles", bondWidth: "thick" });
    expect(out).toEqual(DEFAULT_DEPICT_STYLE);
    expect("optsOpen" in out).toBe(false);
  });

  it("clamps a number to the range the schema declares", () => {
    expect(normaliseDepictStyle({ haloOpacity: 9 }).haloOpacity).toBe(1);
    expect(normaliseDepictStyle({ haloOpacity: -9 }).haloOpacity).toBe(0.1);
    expect(normaliseDepictStyle({ bondWidth: NaN }).bondWidth).toBe(DEFAULT_DEPICT_STYLE.bondWidth);
  });

  it("takes a colour only in the one spelling the editor writes", () => {
    expect(normaliseDepictStyle({ createdColor: "#00FF00" }).createdColor).toBe("#00FF00");
    expect(normaliseDepictStyle({ createdColor: "#0f0" }).createdColor).toBe(DEFAULT_DEPICT_STYLE.createdColor);
    expect(normaliseDepictStyle({ createdColor: "green" }).createdColor).toBe(DEFAULT_DEPICT_STYLE.createdColor);
  });

  it("survives being handed something that is not an object at all", () => {
    expect(normaliseDepictStyle(null)).toEqual(DEFAULT_DEPICT_STYLE);
    expect(normaliseDepictStyle("nope")).toEqual(DEFAULT_DEPICT_STYLE);
  });
});

describe("parseAtomSpec", () => {
  it("reads a list, a range, and both together", () => {
    const { left, right } = parseAtomSpec("0,3 5-7");
    expect([...left].sort((a, b) => a - b)).toEqual([0, 3, 5, 6, 7]);
    expect([...right]).toEqual([...left]);
  });

  it("restricts a token to one molecule with L: and R:", () => {
    const { left, right } = parseAtomSpec("L:1-2 R:9 4");
    expect([...left].sort((a, b) => a - b)).toEqual([1, 2, 4]);
    expect([...right].sort((a, b) => a - b)).toEqual([4, 9]);
  });

  it("bounds a runaway range rather than hanging the page", () => {
    expect(parseAtomSpec("0-99999999").left.size).toBe(5000);
  });

  it("skips what it cannot read, and reads nothing from an empty spec", () => {
    expect(parseAtomSpec("").left.size).toBe(0);
    expect(parseAtomSpec("carbon, -, 2").left).toEqual(new Set([2]));
  });
});

describe("markGroups", () => {
  const uniques = { atoms: [1, 2], elements: [5] };

  it("names the left molecule's unique atoms destroyed and the right's created", () => {
    const style = normaliseDepictStyle({ destroyedColor: "#111111", createdColor: "#222222" });
    expect(markGroups(style, uniques, "left")[0].color).toBe("#111111");
    expect(markGroups(style, uniques, "right")[0].color).toBe("#222222");
  });

  it("keeps boundary bonds away from an element change, whatever the document says", () => {
    const style = normaliseDepictStyle({ boundary: true });
    const [unique, changed] = markGroups(style, uniques, "left");
    expect(unique.boundary).toBe(true);
    expect(changed.boundary).toBe(false);
  });

  it("draws nothing for a group the document switches off, or an empty one", () => {
    expect(markGroups(normaliseDepictStyle({ createdDestroyed: false }), uniques, "left")).toHaveLength(1);
    expect(markGroups(normaliseDepictStyle({ modified: false }), uniques, "left")).toHaveLength(1);
    expect(markGroups(DEFAULT_DEPICT_STYLE, { atoms: [], elements: [] }, "left")).toHaveLength(0);
  });
});

describe("markedBonds", () => {
  // 0-1-2-3, with 2 and 3 the marked fragment hanging off the core.
  const mol: Molecule = {
    name: "chain",
    symbols: ["C", "C", "C", "C"],
    bonds: [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 1],
    ],
    coords: [
      [0, 0, 0],
      [1, 0, 0],
      [2, 0, 0],
      [3, 0, 0],
    ],
  };

  it("takes only the interior bonds without boundary", () => {
    expect(markedBonds(mol, new Set([2, 3]), false)).toEqual([2]);
  });

  it("takes the bond into the core as well with boundary", () => {
    expect(markedBonds(mol, new Set([2, 3]), true)).toEqual([1, 2]);
  });

  it("finds nothing for a lone atom until boundary is on", () => {
    expect(markedBonds(mol, new Set([3]), false)).toEqual([]);
    expect(markedBonds(mol, new Set([3]), true)).toEqual([2]);
  });
});

describe("colour helpers", () => {
  it("read a hex colour as RDKit's 0-to-1 triple", () => {
    expect(rgbTriple("#000000")).toEqual([0, 0, 0]);
    expect(rgbTriple("#FFFFFF")).toEqual([1, 1, 1]);
  });

  it("wash a colour towards white without ever passing it", () => {
    const [r, g, b] = tint([0, 0, 0], 0.7);
    expect(r).toBeCloseTo(0.7);
    expect([g, b]).toEqual([r, r]);
    expect(tint([1, 1, 1], 0.7)).toEqual([1, 1, 1]);
  });
});

describe("depictionDetails", () => {
  const groups = markGroups(DEFAULT_DEPICT_STYLE, { atoms: [1], elements: [4] }, "left");

  it("gives RDKit the atoms to highlight and a radius for each", () => {
    const details = depictionDetails(DEFAULT_DEPICT_STYLE, 300, groups, new Set(), "rdkit", 10);
    expect(details.atoms).toEqual([1, 4]);
    expect(details.highlightAtomRadii).toEqual({ 1: 0.3, 4: 0.3 });
    expect(details.width).toBe(300);
  });

  it("lets cpk keep RDKit's own element palette", () => {
    const style = normaliseDepictStyle({ elementColors: "cpk" });
    expect(depictionDetails(style, 300, groups, new Set(), "rdkit", 10).atomColourPalette).toBeUndefined();
  });

  it("asks for no disc under an atom that recolour means to leave bare", () => {
    const style = normaliseDepictStyle({ style: "recolor", circles: "off" });
    expect(depictionDetails(style, 300, groups, new Set(), "recolor", 10).atoms).toBeUndefined();
  });

  it("washes the disc out under a filled ring, so the letter on top stays readable", () => {
    const style = normaliseDepictStyle({ style: "recolor", circles: "filled", destroyedColor: "#000000" });
    const details = depictionDetails(style, 300, markGroups(style, { atoms: [1], elements: [] }, "left"), new Set(), "recolor", 10);
    expect((details.highlightAtomColors as Record<number, number[]>)[1][0]).toBeCloseTo(0.7);
  });

  it("sets continuousHighlight only where gufe's own drawing does", () => {
    expect(depictionDetails(DEFAULT_DEPICT_STYLE, 300, groups, new Set(), "rdkit", 10).continuousHighlight).toBe(false);
    expect(depictionDetails(DEFAULT_DEPICT_STYLE, 300, groups, new Set(), "halo", 10).continuousHighlight).toBeUndefined();
  });

  it("lets a custom atom win the colour, and drops one the molecule does not have", () => {
    const style = normaliseDepictStyle({ customColor: "#FFFFFF" });
    const details = depictionDetails(style, 300, groups, new Set([1, 99]), "rdkit", 10);
    expect((details.highlightAtomColors as Record<number, number[]>)[1]).toEqual([1, 1, 1]);
    expect(details.atoms).toEqual([1, 4]);
  });
});

// --- the post-processing, against an SVG shaped the way RDKit shapes one -----

/** 0-1-2, with atom 2 unique. `bond-1` joins it to the core. */
const CHAIN: Molecule = {
  name: "chain",
  symbols: ["C", "C", "H"],
  bonds: [
    [0, 1, 1],
    [1, 2, 1],
  ],
  coords: [
    [0, 0, 0],
    [1, 0, 0],
    [2, 0, 0],
  ],
};

function rdkitLikeSVG(): SVGElement {
  const doc = new DOMParser().parseFromString(
    `<svg xmlns="http://www.w3.org/2000/svg">
       <rect width="100" height="100" style="fill:#FFFFFF"/>
       <path class="bond-0 atom-0 atom-1" d="M 0,0 L 10,0" style="fill:none;stroke:#000000"/>
       <path class="bond-1 atom-1 atom-2" d="M 10,0 L 20,0" style="fill:none;stroke:#000000"/>
       <ellipse class="atom-2" cx="20" cy="0" rx="4" ry="4" style="fill:#DC3220"/>
       <path class="atom-2" d="M 20,0 L 21,1" style="fill:#000000"/>
     </svg>`,
    "image/svg+xml",
  );
  return doc.documentElement as unknown as SVGElement;
}

const styleOf = (el: Element | null): CSSStyleDeclaration => (el as SVGElement).style;

/**
 * A colour as the DOM will hand it back.
 *
 * jsdom rewrites a colour it is *given* into `rgb(...)` but leaves one it merely
 * *parsed* as the hex it read, so comparing against a literal would assert
 * against the DOM rather than against the pipeline.
 */
function asCss(hex: string): string {
  const probe = document.createElement("div");
  probe.style.stroke = hex;
  return probe.style.stroke;
}

/** The element letter: an atom's own path, never the bond path that also names it. */
function letterOf(svg: Element, atom: number): Element {
  return Array.from(svg.querySelectorAll(`[class~="atom-${atom}"]`)).find(
    (n) => n.tagName === "path" && !/bond-/.test(n.getAttribute("class") || ""),
  )!;
}

describe("postProcessDepiction", () => {
  it("touches nothing but the hydrogens under the rdkit style", () => {
    const svg = rdkitLikeSVG();
    const before = svg.outerHTML;
    const groups = markGroups(DEFAULT_DEPICT_STYLE, { atoms: [2], elements: [] }, "left");
    postProcessDepiction(svg, CHAIN, DEFAULT_DEPICT_STYLE, groups, new Set(), "rdkit");
    expect(svg.outerHTML).toBe(before);
  });

  it("recolours the marked bonds and turns the disc into a ring", () => {
    const svg = rdkitLikeSVG();
    const style = normaliseDepictStyle({ style: "recolor", destroyedColor: "#FF0000", markWidth: 3 });
    const groups = markGroups(style, { atoms: [2], elements: [] }, "left");
    postProcessDepiction(svg, CHAIN, style, groups, new Set(), "recolor");

    const marked = styleOf(svg.querySelector('[class~="bond-1"]'));
    expect(marked.stroke).toBe(asCss("#FF0000"));
    expect(marked.strokeWidth).toBe("3px");
    // The bond that touches no marked atom is left alone.
    expect(styleOf(svg.querySelector('[class~="bond-0"]')).stroke).toBe("#000000");

    const ring = styleOf(svg.querySelector("ellipse"));
    expect(ring.fill).toBe("none");
    expect(ring.stroke).toBe(asCss("#FF0000"));
  });

  it("leaves the core bond black when boundary is off", () => {
    const svg = rdkitLikeSVG();
    const style = normaliseDepictStyle({ style: "recolor", boundary: false });
    const groups = markGroups(style, { atoms: [2], elements: [] }, "left");
    postProcessDepiction(svg, CHAIN, style, groups, new Set(), "recolor");
    expect(styleOf(svg.querySelector('[class~="bond-1"]')).stroke).toBe("#000000");
  });

  it("draws the letter black over a filled disc, and keeps its colour over a ring", () => {
    for (const [circles, expected] of [
      ["filled", asCss("#000000")],
      ["outline", asCss("#FF0000")],
    ] as const) {
      const svg = rdkitLikeSVG();
      const style = normaliseDepictStyle({ style: "recolor", circles, destroyedColor: "#FF0000" });
      const groups = markGroups(style, { atoms: [2], elements: [] }, "left");
      postProcessDepiction(svg, CHAIN, style, groups, new Set(), "recolor");
      expect(styleOf(letterOf(svg, 2)).fill, circles).toBe(expected);
    }
  });

  it("puts the halo band behind the molecule, in one group carrying the opacity", () => {
    const svg = rdkitLikeSVG();
    const style = normaliseDepictStyle({ style: "halo", haloWidth: 12, haloOpacity: 0.5 });
    const groups = markGroups(style, { atoms: [2], elements: [] }, "left");
    postProcessDepiction(svg, CHAIN, style, groups, new Set(), "halo");

    const band = svg.querySelector("[data-gufe-halo]") as SVGElement;
    expect(band).not.toBeNull();
    expect(band.style.opacity).toBe("0.5");
    // Immediately after the background rect, so it sits under every bond.
    expect(band.previousElementSibling?.tagName).toBe("rect");
    const stroke = styleOf(band.firstElementChild);
    expect(stroke.strokeWidth).toBe("12px");
    expect(stroke.strokeLinecap).toBe("round");
    // A clone must not answer to the class its original owns.
    expect(band.firstElementChild?.getAttribute("class")).toBeNull();
  });

  it("dims and hides only the hydrogens, and leaves every index in place", () => {
    for (const [mode, check] of [
      ["dim", (s: CSSStyleDeclaration) => expect(s.opacity).toBe("0.22")],
      ["hide", (s: CSSStyleDeclaration) => expect(s.display).toBe("none")],
    ] as const) {
      const svg = rdkitLikeSVG();
      const style = normaliseDepictStyle({ hydrogens: mode });
      postProcessDepiction(svg, CHAIN, style, [], new Set(), "rdkit");
      check(styleOf(svg.querySelector("ellipse")));
      // Atom 0 is a carbon: its bond is untouched.
      expect(styleOf(svg.querySelector('[class~="bond-0"]')).display).toBe("");
    }
  });

  it("leaves a custom atom its filled disc rather than ringing it", () => {
    const svg = rdkitLikeSVG();
    const style = normaliseDepictStyle({ style: "recolor", circles: "outline" });
    const groups = markGroups(style, { atoms: [2], elements: [] }, "left");
    postProcessDepiction(svg, CHAIN, style, groups, new Set([2]), "recolor");
    expect(styleOf(svg.querySelector("ellipse")).fill).toBe("#DC3220");
  });
});

describe("effectiveMarkStyle", () => {
  const rdkitWith = (svg: string): RDKitModule =>
    ({
      get_mol: () => ({ get_svg: () => svg, get_svg_with_highlights: () => svg, set_new_coords: () => {}, delete: () => {} }),
    }) as unknown as RDKitModule;

  beforeEach(() => _resetSvgClassProbeForTests());

  it("keeps the asked-for style when RDKit tags its SVG", () => {
    const tagged = rdkitWith('<svg><path class="bond-0 atom-0 atom-1"/></svg>');
    expect(svgClassesSupported(tagged)).toBe(true);
    expect(effectiveMarkStyle(normaliseDepictStyle({ style: "halo" }), tagged)).toBe("halo");
  });

  /**
   * Both post-processing styles find their bonds by class, so an untagged build
   * has to fall back to the one that needs no classes at all. Falling back from
   * recolour to halo would draw nothing.
   */
  it("falls back to rdkit when it does not, for either style", () => {
    const untagged = rdkitWith("<svg><path/></svg>");
    expect(effectiveMarkStyle(normaliseDepictStyle({ style: "recolor" }), untagged)).toBe("rdkit");
    expect(effectiveMarkStyle(normaliseDepictStyle({ style: "halo" }), untagged)).toBe("rdkit");
  });

  it("never asks at all when the document did not want post-processing", () => {
    let asked = false;
    const counting = { get_mol: () => ((asked = true), null) } as unknown as RDKitModule;
    expect(effectiveMarkStyle(DEFAULT_DEPICT_STYLE, counting)).toBe("rdkit");
    expect(asked).toBe(false);
  });
});
