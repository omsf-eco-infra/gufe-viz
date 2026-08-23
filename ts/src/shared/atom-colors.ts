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
 * The 3D mapping ramp: matplotlib's `hsv`, sampled at 32 stops.
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
  "#FF2F00",
  "#FF5F00",
  "#FF8E00",
  "#FFC300",
  "#FEF100",
  "#DDFF00",
  "#ADFF00",
  "#78FF00",
  "#49FF00",
  "#1AFF00",
  "#00FF16",
  "#00FF4B",
  "#00FF7A",
  "#00FFA9",
  "#00FFD8",
  "#00F0FF",
  "#00C1FF",
  "#0092FF",
  "#0063FF",
  "#002DFF",
  "#0604FF",
  "#3100FF",
  "#6000FF",
  "#9500FF",
  "#C500FF",
  "#F400FF",
  "#FF00DB",
  "#FF00A6",
  "#FF0076",
  "#FF0047",
  "#FF0018",
];

/** Which colormap `MAPPING_RAMP_3D` was sampled from. */
export const MAPPING_RAMP_NAME = "hsv";
