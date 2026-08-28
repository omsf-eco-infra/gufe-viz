/**
 * What a graph layout staples onto a payload, and how to take it off again.
 *
 * Both network views lay out the objects the payload's registry holds, rather
 * than copies of them: a node *is* the `ChemicalSystemViz` or the
 * `SmallMoleculeComponentViz` it draws, which is what lets a detail pane hand
 * the selected one straight to the view that draws it.
 *
 * The price is that whatever the layout writes ends up on a schema payload.
 * Some of it is ours - the position, and the pin a drag leaves. The rest is
 * d3's: `forceSimulation` stamps every node it is given with an `index` and a
 * velocity per axis, whether or not the view ever reads them. The schema allows
 * no property it has not declared, so a node handed on with any of that still
 * on it fails validation and draws an error instead of a molecule.
 *
 * Listing the fields in one place rather than destructuring them at each call
 * site is deliberate: the set is d3's to grow, and a view that learns about a
 * new one while the other does not is exactly the bug this file exists to stop.
 */

/** Every field a layout may add to a node. `x` and `y` are ours; the rest are d3's. */
const LAYOUT_FIELDS = ["x", "y", "vx", "vy", "fx", "fy", "index"] as const;

type LayoutField = (typeof LAYOUT_FIELDS)[number];

/** A node as the payload it was before anything laid it out. */
export function withoutLayout<T extends object>(node: T): Omit<T, LayoutField> {
  const bare = { ...node } as Record<string, unknown>;
  for (const field of LAYOUT_FIELDS) delete bare[field];
  return bare as Omit<T, LayoutField>;
}
