/**
 * GENERATED - do not edit by hand.
 *
 * Source:  scripts/gen_atom_colors.py
 * Command: pixi run atom-colors
 *
 * Atom colours are mirrored from the libraries that already draw them, never
 * authored here, so that a picture drawn by this project and a picture drawn by
 * gufe or openfe cannot disagree about what a colour means. CI regenerates this
 * file and fails if it differs from what is committed.
 *
 * Element colouring is deliberately absent: that belongs to 3Dmol's `Jmol`
 * scheme in 3D and to RDKit's defaults in 2D, and both are left to do it.
 */

/**
 * The two mapping highlight colours, from
 * `gufe.visualization.mapping_visualization`.
 *
 * gufe colours by *meaning* and makes no distinction between the two molecules:
 * an atom is either an element change, or unique to its side, or unremarkable.
 * There is deliberately no colour here for the third case, because gufe does not
 * highlight those atoms at all, and adding one would be inventing a colour.
 *
 * Both are also given in 3Dmol's `0x` form, because that is what its style
 * specifications take and converting at every call site is worse.
 *
 * This pair is colourblind-safe as it stands. Keep it that way by not editing it.
 */
export const MAPPING_COLORS = {
  elementChange: "#005AB5",
  uniqueAtom: "#DC3220",
  elementChange3D: "0x005AB5",
  uniqueAtom3D: "0xDC3220",
} as const;

/**
 * The 3D mapping ramp: matplotlib's `hsv`, sampled at 128 stops.
 *
 * openfe indexes this by the position of each mapped *pair* and paints the same
 * colour on both of that pair's atoms, so a shared colour is what says "these
 * two are mapped to each other". It has nothing to do with the element.
 *
 * `hsv` is a rainbow, which puts red next to purple; that has already cost
 * real debugging time. Moving to a perceptually uniform colormap is worth
 * proposing, but it changes what OpenFE draws, so it is a decision for the team
 * and a one-line change to `RAMP_NAME` in the generator, never an edit here.
 */
export const MAPPING_RAMP_3D: readonly string[] = [
  "#FF0000",
  "#FF0C00",
  "#FF1800",
  "#FF2300",
  "#FF2F00",
  "#FF3B00",
  "#FF4700",
  "#FF5300",
  "#FF5F00",
  "#FF6A00",
  "#FF7600",
  "#FF8200",
  "#FF8E00",
  "#FF9A00",
  "#FFA500",
  "#FFB100",
  "#FFBD00",
  "#FFC900",
  "#FFD500",
  "#FFE000",
  "#FFEC00",
  "#FCF500",
  "#F8FD00",
  "#EEFF00",
  "#E2FF00",
  "#D7FF00",
  "#CBFF00",
  "#BFFF00",
  "#B3FF00",
  "#A7FF00",
  "#9CFF00",
  "#90FF00",
  "#84FF00",
  "#78FF00",
  "#6CFF00",
  "#61FF00",
  "#55FF00",
  "#49FF00",
  "#3DFF00",
  "#31FF00",
  "#25FF00",
  "#1AFF00",
  "#0EFF00",
  "#06FF04",
  "#02FF0C",
  "#00FF16",
  "#00FF21",
  "#00FF2D",
  "#00FF39",
  "#00FF45",
  "#00FF51",
  "#00FF5C",
  "#00FF68",
  "#00FF74",
  "#00FF80",
  "#00FF8C",
  "#00FF97",
  "#00FFA3",
  "#00FFAF",
  "#00FFBB",
  "#00FFC7",
  "#00FFD3",
  "#00FFDE",
  "#00FFEA",
  "#00FFFC",
  "#00F6FF",
  "#00EAFF",
  "#00DFFF",
  "#00D3FF",
  "#00C7FF",
  "#00BBFF",
  "#00AFFF",
  "#00A4FF",
  "#0098FF",
  "#008CFF",
  "#0080FF",
  "#0074FF",
  "#0069FF",
  "#005DFF",
  "#0051FF",
  "#0045FF",
  "#0039FF",
  "#002DFF",
  "#0022FF",
  "#0016FF",
  "#020CFF",
  "#0604FF",
  "#0E00FF",
  "#1900FF",
  "#2500FF",
  "#3100FF",
  "#3D00FF",
  "#4900FF",
  "#5400FF",
  "#6000FF",
  "#6C00FF",
  "#7800FF",
  "#8400FF",
  "#9000FF",
  "#9B00FF",
  "#A700FF",
  "#B300FF",
  "#BF00FF",
  "#CB00FF",
  "#D600FF",
  "#E200FF",
  "#EE00FF",
  "#F800FD",
  "#FC00F5",
  "#FF00ED",
  "#FF00E1",
  "#FF00D5",
  "#FF00C9",
  "#FF00BD",
  "#FF00B1",
  "#FF00A6",
  "#FF009A",
  "#FF008E",
  "#FF0082",
  "#FF0076",
  "#FF006B",
  "#FF005F",
  "#FF0053",
  "#FF0047",
  "#FF003B",
  "#FF0030",
  "#FF0024",
  "#FF0018",
];

/** Which colormap `MAPPING_RAMP_3D` was sampled from. */
export const MAPPING_RAMP_NAME = "hsv";

const BLACK: readonly [number, number, number] = [0, 0, 0];

/**
 * Every element drawn black, which is how gufe draws a mapping.
 *
 * gufe calls `drawOptions().useBWAtomPalette()` so that the two highlight
 * colours are the only colour on the page. RDKit-JS has no such method: a view
 * can only pass JSON draw options, and **the JSON parser accepts
 * `useBWAtomPalette` and silently ignores it**, drawing an oxygen red anyway.
 * An explicit palette does work, so this is that palette.
 *
 * The generator checks this reproduces `useBWAtomPalette()` byte for byte
 * before emitting it, so a change in RDKit fails the build rather than quietly
 * making our mappings disagree with gufe's.
 */
export const MAPPING_BW_PALETTE: Readonly<
  Record<number, readonly [number, number, number]>
> = {
  0: BLACK,
  1: BLACK,
  2: BLACK,
  3: BLACK,
  4: BLACK,
  5: BLACK,
  6: BLACK,
  7: BLACK,
  8: BLACK,
  9: BLACK,
  10: BLACK,
  11: BLACK,
  12: BLACK,
  13: BLACK,
  14: BLACK,
  15: BLACK,
  16: BLACK,
  17: BLACK,
  18: BLACK,
  19: BLACK,
  20: BLACK,
  21: BLACK,
  22: BLACK,
  23: BLACK,
  24: BLACK,
  25: BLACK,
  26: BLACK,
  27: BLACK,
  28: BLACK,
  29: BLACK,
  30: BLACK,
  31: BLACK,
  32: BLACK,
  33: BLACK,
  34: BLACK,
  35: BLACK,
  36: BLACK,
  37: BLACK,
  38: BLACK,
  39: BLACK,
  40: BLACK,
  41: BLACK,
  42: BLACK,
  43: BLACK,
  44: BLACK,
  45: BLACK,
  46: BLACK,
  47: BLACK,
  48: BLACK,
  49: BLACK,
  50: BLACK,
  51: BLACK,
  52: BLACK,
  53: BLACK,
  54: BLACK,
  55: BLACK,
  56: BLACK,
  57: BLACK,
  58: BLACK,
  59: BLACK,
  60: BLACK,
  61: BLACK,
  62: BLACK,
  63: BLACK,
  64: BLACK,
  65: BLACK,
  66: BLACK,
  67: BLACK,
  68: BLACK,
  69: BLACK,
  70: BLACK,
  71: BLACK,
  72: BLACK,
  73: BLACK,
  74: BLACK,
  75: BLACK,
  76: BLACK,
  77: BLACK,
  78: BLACK,
  79: BLACK,
  80: BLACK,
  81: BLACK,
  82: BLACK,
  83: BLACK,
  84: BLACK,
  85: BLACK,
  86: BLACK,
  87: BLACK,
  88: BLACK,
  89: BLACK,
  90: BLACK,
  91: BLACK,
  92: BLACK,
  93: BLACK,
  94: BLACK,
  95: BLACK,
  96: BLACK,
  97: BLACK,
  98: BLACK,
  99: BLACK,
  100: BLACK,
  101: BLACK,
  102: BLACK,
  103: BLACK,
  104: BLACK,
  105: BLACK,
  106: BLACK,
  107: BLACK,
  108: BLACK,
  109: BLACK,
  110: BLACK,
  111: BLACK,
  112: BLACK,
  113: BLACK,
  114: BLACK,
  115: BLACK,
  116: BLACK,
  117: BLACK,
  118: BLACK,
};

/**
 * The draw options a mapping depiction must pass to match gufe.
 *
 * All three are things gufe sets and RDKit does not default to. Getting the
 * highlight colours right while missing these still produces a picture that
 * does not match.
 */
export const MAPPING_DRAW_OPTIONS = {
  atomColourPalette: MAPPING_BW_PALETTE,
  addAtomIndices: true,
  continuousHighlight: false,
} as const;
