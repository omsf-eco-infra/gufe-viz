/**
 * `<gufe-atom-mapping>` - THE ATOM MATCHING VISUALIZATION.
 *
 * One `LigandAtomMapping`: which atom of ligand A becomes which atom of ligand
 * B. This is the single element for that question, and every view that shows a
 * *pair of ligands* mounts it rather than drawing its own:
 *
 *   `<gufe-ligand-network>`   the detail pane, for the selected edge
 *   `<gufe-transformation>`   the mapping the transformation carries
 *   `<gufe-view>`             a mapping payload on its own
 *
 * All three hand it the same payload shape - `mappingPayloadFor` below is what
 * cuts an edge loose into one - so there is one drawing path and the in-context
 * picture cannot drift from the standalone one.
 *
 * Six ways to look at it:
 *
 * Five of them are a port of the viewer panel in the framejs prototype at
 * /j/019f2b55e1f57722af0293acbda78362, which is where the modes, the switcher,
 * the box labels and the 3D colours come from. Anything that looks arbitrary
 * here is arbitrary there, and changing it in one place means changing it in
 * both.
 *
 *   2D          depictions with the mapping highlighted
 *   3D          both molecules, side by side, plain
 *   3D-Map      the same, with the mapping marked in the 2D colours
 *   3D Overlay  gufe's own `view_3d`, reproduced - see `renderOpenFE`
 *   Pairs       one above the other, Kabsch-aligned, a line per mapped pair
 *   Info        the mapping in numbers - counts, the correspondence, annotations
 *
 * 3D Overlay is the exception: it is not the prototype's, it is
 * `gufe.visualization.mapping_visualization.display_mapping_3d`, which is what
 * `LigandAtomMapping.view_3d()` calls and therefore the picture an OpenFE user
 * has already seen in a notebook. It is here so that the same mapping in the
 * browser and in the notebook are recognisably the same picture. It also
 * replaced the prototype's own Overlay mode, which superimposed the two
 * molecules translucently: the middle of this one is that picture, drawn the way
 * OpenFE already draws it, so keeping both said the same thing twice.
 *
 * Info is last because it is a reading of the picture rather than a picture, and
 * it is where everything that is not a molecule now lives: the name, the type,
 * the gufe key, the counts, the correspondence and the annotations. There is
 * deliberately no header strip and no statistics bar - the prototype has
 * neither, the box labels already name both ligands, and anything else above
 * the molecules is saying a second time what Info says properly.
 *
 * **2D and 3D-Map diverge from the prototype together, and in the same
 * direction.** The prototype colours core atoms grey and each molecule's unique
 * atoms by side. gufe colours by *meaning* - an element change against a unique
 * atom, with core atoms not highlighted at all - and that is what OpenFE users
 * are taught, so both modes follow gufe. See `shared/atom-colors.ts`.
 *
 * They follow it through one call rather than two implementations:
 * `markGroups` in `shared/depict-style.ts` says which atoms are marked and in
 * what colour, and `render2D` and `renderColored` both ask it. Someone looking
 * at a mapping flat and then in space is looking at one claim drawn twice, so
 * the two must not be able to disagree about a single atom.
 *
 * That also makes their *appearance* something not decided in this file. Marking
 * style, ring shape, hydrogen treatment, letter and bond sizes and every colour
 * come from one JSON document, `shared/depict-style.json`, which is authored in
 * a live editor and compiled into the bundle. `shared/depict-style.ts` is the
 * whole of it, and it carries the editor's URL. 3D-Map takes the colours from
 * there; the rest is 2D's alone, because a stick has no letter and no ring.
 *
 * Every mode takes the same two molecules, so this element is what any view
 * showing a pair of ligands should mount: the ligand network's detail pane and
 * the transformation view both do.
 */

import { buttonGroup, centredMessage, EM_DASH, el, errText, nameWanted, statChip } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { choice } from "../shared/settings.js";
import { load3Dmol, loadRDKit, ThreeDmol, type RDKitModule, type ThreeDmolViewer } from "../shared/engines.js";
import { viewerInteraction, type BoundedZoom, type Interaction } from "../shared/interact.js";
import { applyRT, kabsch, type Vec3 } from "../shared/kabsch.js";
import { buildSDF, parseSDF, placeDepiction, type Molecule } from "../shared/sdf.js";
import { layoutPair } from "../shared/depict-layout.js";
import {
  DEPICT_STYLE,
  depictStyledSVG,
  depictionDetails,
  effectiveMarkStyle,
  markGroups,
  parseAtomSpec,
  postProcessDepiction,
  threeDmolColor,
  type Side,
} from "../shared/depict-style.js";
import { MAPPING_RAMP_3D } from "../shared/atom-colors.js";
import { MOL } from "../shared/molecule-colors.js";
import {
  CHIP,
  FONT,
  MONO,
  NOTE,
  OVERLAY_CONTROLS,
  PANE_LABEL_OVERLAY,
  RADIUS,
  SECTION_LABEL,
  SPACE,
  SURFACE,
  TEXT,
  WEIGHT,
} from "../shared/style.js";
import { buildRegistry, entriesFor, entryLabel, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import type { LigandAtomMappingViz, SmallMoleculeComponentViz } from "../schema/types.js";

const MODES = [
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "The 2D mapping colours, on the structures" },
  { id: "openfe", label: "3D Overlay", title: "What LigandAtomMapping.view_3d() draws" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "info", label: "Info", title: "The mapping in numbers" },
] as const;

type Mode = (typeof MODES)[number]["id"];

const DEPICT_SIZE = 420;

/**
 * What Info's correspondence rows are striped with, and how narrow a column of
 * them may get.
 *
 * The colours are the depiction style's, which is where the chips above the
 * table take theirs from too: a row, the chip that counts it and the atom in the
 * 2D depiction are one colour or the picture and its reading disagree. A mapped
 * atom has no colour anywhere, so it has none here.
 */
const RELATION_COLOR: Record<RelationKind, string | null> = {
  mapped: null,
  element: DEPICT_STYLE.modifiedColor,
  uniqueA: DEPICT_STYLE.destroyedColor,
  uniqueB: DEPICT_STYLE.createdColor,
};

/** Narrowest a correspondence column may be, in pixels: about `123 Cl -> 123 Cl`. */
const RELATION_COLUMN = 132;

/**
 * Sizes, all of them the prototype's.
 *
 * `markStick` and `markSphere` are what a marked atom swells to in 3D-Map. The
 * prototype marked only each molecule's unique atoms; the same sizes now carry
 * element changes too, which is why they are not named for either.
 */
const STYLE = {
  stick: 0.15,
  sphere: 0.25,
  markStick: 0.18,
  markSphere: 0.32,
  pairSphere: 0.22,
  lineRadius: 0.04,
};

/** How far apart Pairs mode lifts the second molecule. */
const PAIRS = { gap: 2.5, minLiftFraction: 0.6 };

/**
 * Room left at the sides when 3D Overlay is fitted to a pane, in pixels.
 *
 * Ours rather than gufe's, and the same number the ligand network fits its graph
 * with. See `renderOpenFE` for why a fit with nothing to spare is not enough.
 */
const FIT_MARGIN = 24;

/**
 * gufe's numbers for 3D Overlay, and not ours to tune.
 *
 * Every one of them is read off `display_mapping_3d` and `_add_spheres`. A
 * different radius or a different floor draws a different picture from the
 * notebook, which is the one thing this mode exists not to do.
 */
const OPENFE = {
  sphereRadius: 0.6,
  sphereAlpha: 0.8,
  /** The smallest separation gufe will use, whatever the molecules measure. */
  minSpread: 5,
  /** What gufe multiplies that separation by before shifting each side. */
  spreadFactor: 1.5,
};

/** One side of a mapping, classified the way gufe classifies it. */
export interface Uniques {
  /** Atoms of this molecule that map to nothing at all. */
  atoms: number[];
  /** Atoms that map to an atom of a different element. */
  elements: number[];
  /** Atoms that map to the same element - drawn plain, as gufe draws them. */
  mapped: number[];
}

/**
 * Split one molecule's atoms into unique, element-changing and unremarkable.
 *
 * Mirrors gufe's `_get_unique_bonds_and_atoms`: an index absent from the mapping
 * is unique, an index present but whose element differs from its partner's is an
 * element change, and everything else gets no highlight.
 */
export function uniqueAtoms(
  pairs: ReadonlyMap<number, number>,
  symbols: readonly string[],
  otherSymbols: readonly string[],
): Uniques {
  const atoms: number[] = [];
  const elements: number[] = [];
  const mapped: number[] = [];
  for (let index = 0; index < symbols.length; index++) {
    const partner = pairs.get(index);
    if (partner === undefined) atoms.push(index);
    else if (symbols[index] !== otherSymbols[partner]) elements.push(index);
    else mapped.push(index);
  }
  return { atoms, elements, mapped };
}

/** The A-to-B correspondence as a map, from the payload's pair list. */
function pairMap(payload: LigandAtomMappingViz): Map<number, number> {
  const pairs = new Map<number, number>();
  for (const pair of payload.componentA_to_componentB ?? []) {
    if (Number.isInteger(pair?.index_A) && Number.isInteger(pair?.index_B)) {
      pairs.set(pair.index_A, pair.index_B);
    }
  }
  return pairs;
}

/** Which of the four things a row of Info's correspondence table can say. */
export type RelationKind = "mapped" | "element" | "uniqueA" | "uniqueB";

/**
 * One row of the correspondence: one atom of one molecule, and what it becomes.
 *
 * Either index is null when the atom on that side does not exist, which is how
 * an atom the mapping relates to nothing is a row rather than a footnote. Both
 * element symbols travel with it because the row is read on its own: `5 O -> 9
 * N` says why it is an element change without the reader holding two molecules
 * in their head.
 */
export interface Relation {
  kind: RelationKind;
  a: number | null;
  b: number | null;
  symbolA: string;
  symbolB: string;
}

/**
 * The correspondence as one row per atom, in the order the atoms are indexed.
 *
 * Every atom of both molecules appears exactly once: a mapped one on the row of
 * its partner, an unmapped one on a row of its own, with B's leftovers after A's
 * atoms because there is no partner index to interleave them by.
 *
 * This is the same three-way split `uniqueAtoms` makes, made again from the same
 * two inputs rather than read back out of `Uniques`, because a row also needs
 * the partner index and both symbols. The two must agree, and `views.test.ts`
 * asserts they do: the counts in the chips are `uniqueAtoms`, the rows they
 * filter are these.
 */
export function relations(
  pairs: ReadonlyMap<number, number>,
  symbolsA: readonly string[],
  symbolsB: readonly string[],
): Relation[] {
  const rows: Relation[] = [];
  for (let a = 0; a < symbolsA.length; a++) {
    const symbolA = symbolsA[a] ?? "";
    const b = pairs.get(a);
    if (b === undefined) {
      rows.push({ kind: "uniqueA", a, b: null, symbolA, symbolB: "" });
      continue;
    }
    const symbolB = symbolsB[b] ?? "";
    rows.push({ kind: symbolA === symbolB ? "mapped" : "element", a, b, symbolA, symbolB });
  }
  const taken = new Set(pairs.values());
  for (let b = 0; b < symbolsB.length; b++) {
    if (taken.has(b)) continue;
    rows.push({ kind: "uniqueB", a: null, b, symbolA: "", symbolB: symbolsB[b] ?? "" });
  }
  return rows;
}

/**
 * A mapping, cut loose as a payload that stands on its own.
 *
 * An edge of a ligand network and a mapping of a transformation are both already
 * `LigandAtomMappingViz`; what they lack is a registry of their own, so this
 * gives them one holding the two ligands they name. What comes out is exactly
 * the payload this element receives when someone drops a mapping on the page by
 * itself, which is what lets one element serve every case.
 */
export function mappingPayloadFor(
  mapping: LigandAtomMappingViz,
  registry: RegistryIndex,
): LigandAtomMappingViz | null {
  const from = lookupOfType<SmallMoleculeComponentViz>(registry, mapping.componentA, "SmallMoleculeComponentViz");
  const to = lookupOfType<SmallMoleculeComponentViz>(registry, mapping.componentB, "SmallMoleculeComponentViz");
  if (!from || !to) return null;
  // Both endpoints resolve, so `entriesFor` finds both; it also collapses a
  // mapping of a ligand onto itself into the one entry a registry may hold.
  return { ...mapping, registry: entriesFor(registry, [mapping.componentA, mapping.componentB]) };
}

/** Per-axis extent of a set of coordinates. */
function extents(coords: readonly Vec3[]): { min: Vec3; max: Vec3; span: Vec3 } {
  const min: Vec3 = [Infinity, Infinity, Infinity];
  const max: Vec3 = [-Infinity, -Infinity, -Infinity];
  for (const point of coords) {
    for (let k = 0; k < 3; k++) {
      if (point[k] < min[k]) min[k] = point[k];
      if (point[k] > max[k]) max[k] = point[k];
    }
  }
  return { min, max, span: [max[0] - min[0], max[1] - min[1], max[2] - min[2]] };
}

/**
 * Where to lift the second molecule in Pairs mode, and by how much.
 *
 * Along the molecule's *thinnest* axis, so the lines between mapped atoms cross
 * the shortest gap and stay readable. The lift is whichever is larger: enough to
 * clear the first molecule, or a fraction of its longest span - the second is
 * what stops two flat molecules ending up nearly on top of each other.
 */
export function liftFor(a: readonly Vec3[], b: readonly Vec3[]): { axis: number; lift: number } {
  const first = extents(a);
  const second = extents(b);
  let axis = 0;
  if (first.span[1] < first.span[axis]) axis = 1;
  if (first.span[2] < first.span[axis]) axis = 2;
  const longest = Math.max(first.span[0], first.span[1], first.span[2]);
  const clearance = first.max[axis] - second.min[axis] + PAIRS.gap;
  const minimum = PAIRS.minLiftFraction * longest + PAIRS.gap;
  return { axis, lift: Math.max(clearance, minimum) };
}

/**
 * How far along x 3D Overlay pushes each copy, from gufe's `_get_max_dist_in_x`.
 *
 * gufe measures, in either molecule, the largest `x[j] - x[i]` for an atom `j`
 * at or after an atom `i` in file order, rounds that to a tenth, floors it at 5
 * and multiplies by 1.5. Read in file order rather than as a plain extent
 * because that is what gufe measures, and a number that matched the extent
 * instead would separate the copies by a different amount than the notebook
 * does for the same mapping.
 */
export function openfeShift(a: readonly Vec3[], b: readonly Vec3[]): number {
  let widest = 0;
  for (const coords of [a, b]) {
    let earliest = Infinity;
    for (const point of coords) {
      if (point[0] < earliest) earliest = point[0];
      if (point[0] - earliest > widest) widest = point[0] - earliest;
    }
  }
  const rounded = Math.round(widest * 10) / 10;
  return (rounded > OPENFE.minSpread ? rounded : OPENFE.minSpread) * OPENFE.spreadFactor;
}

/**
 * The colour gufe paints on mapped pair `index` of `count`, in 3Dmol's form.
 *
 * `_add_spheres` asks matplotlib for `hsv` resampled to one entry per mapped
 * pair and then takes entry `index`, which is `hsv` read at `index / (count -
 * 1)`. `MAPPING_RAMP_3D` is that same colormap at 128 stops, so the colour is a
 * lookup with a straight interpolation between neighbouring stops - the ramp is
 * dense enough that the difference from evaluating `hsv` itself is invisible.
 *
 * Both atoms of a pair are given it, and the shared colour is the whole message:
 * it says these two atoms map to each other. It says nothing about the element.
 * `hsv` very nearly closes its circle, so the first and last pair of a mapping
 * come out reds a shade apart; that is matplotlib's doing, and the notebook has
 * it too.
 */
export function pairColour(index: number, count: number): string {
  const stops = MAPPING_RAMP_3D;
  const fraction = count > 1 ? Math.min(Math.max(index / (count - 1), 0), 1) : 0;
  const position = fraction * (stops.length - 1);
  const lower = Math.floor(position);
  const upper = Math.min(lower + 1, stops.length - 1);
  const blend = position - lower;
  let hex = "0x";
  for (let channel = 0; channel < 3; channel++) {
    const at = (stop: string): number => parseInt(stop.slice(1 + channel * 2, 3 + channel * 2), 16);
    const value = Math.round(at(stops[lower]) + (at(stops[upper]) - at(stops[lower])) * blend);
    hex += value.toString(16).padStart(2, "0");
  }
  return hex;
}

export class GufeAtomMapping extends GufeElement<LigandAtomMappingViz> {
  protected override placeholder(): string {
    return "Waiting for a LigandAtomMapping payload...";
  }

  protected renderView(host: HTMLDivElement, payload: LigandAtomMappingViz): ViewHandle {
    const registry = buildRegistry(payload);
    const from = lookupOfType<SmallMoleculeComponentViz>(registry, payload.componentA, "SmallMoleculeComponentViz");
    const to = lookupOfType<SmallMoleculeComponentViz>(registry, payload.componentB, "SmallMoleculeComponentViz");

    if (!from || !to) {
      host.appendChild(
        centredMessage("This mapping names two molecules, and its registry does not hold them."),
      );
      return {};
    }

    const nameA = entryLabel(from);
    const nameB = entryLabel(to);
    const pairs = pairMap(payload);

    let molA: Molecule;
    let molB: Molecule;
    try {
      molA = parseSDF(from.sdf, nameA);
      molB = parseSDF(to.sdf, nameB);
    } catch (e) {
      host.appendChild(centredMessage(`Could not read a molecule: ${errText(e)}`, true));
      return {};
    }

    const flipped = new Map<number, number>();
    for (const [a, b] of pairs) flipped.set(b, a);
    const uniquesA = uniqueAtoms(pairs, molA.symbols, molB.symbols);
    const uniquesB = uniqueAtoms(flipped, molB.symbols, molA.symbols);

    // Whether each box names its molecule. On by default; off where something
    // above has already named them - see `HIDE_NAME_ATTRIBUTE`.
    const named = nameWanted(host);

    // --- the stage, and the floating switcher over it ---
    const wrapper = el("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(wrapper);
    const stage = el("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    wrapper.appendChild(stage);

    // Which way someone looks at a mapping is a preference, so it survives a
    // reload and carries from one mapping to the next.
    const modeSetting = choice<Mode>("atom-mapping.mode", "plain", MODES.map((m) => m.id));
    let mode: Mode = modeSetting.get();
    const switcher = el(
      "div",
      OVERLAY_CONTROLS,
    );
    switcher.appendChild(
      buttonGroup(
        MODES,
        mode,
        (id) => {
          mode = id as Mode;
          render();
        },
        modeSetting,
      ),
    );
    wrapper.appendChild(switcher);

    // --- viewer boxes ---
    //
    // Every mode rebuilds these, because the modes differ in how many boxes they
    // want. Releasing the old viewers first is what keeps the count of live
    // WebGL contexts bounded as someone clicks along the switcher.
    interface Box {
      container: HTMLDivElement;
      viewer: ThreeDmolViewer | null;
      interaction: (BoundedZoom & Interaction) | null;
    }
    let boxes: Box[] = [];
    let syncHandle = 0;
    let alive = true;

    const clearBoxes = (): void => {
      if (syncHandle) cancelAnimationFrame(syncHandle);
      syncHandle = 0;
      for (const box of boxes) {
        box.interaction?.cleanup();
        try {
          box.viewer?.clear();
        } catch {
          /* already gone */
        }
      }
      boxes = [];
      stage.replaceChildren();
    };

    const makeBox = (labelText: string): Box => {
      const wrap = el("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
      const container = el("div", "flex:1;position:relative;min-height:0;");
      container.dataset.gufeViewer = "";
      wrap.appendChild(container);
      // Over the picture rather than above it: see `PANE_LABEL_OVERLAY`. After
      // the container so it draws on top of the canvas 3Dmol puts there, and
      // only where nothing above has already named these two molecules.
      if (named) wrap.appendChild(el("div", PANE_LABEL_OVERLAY, labelText));
      stage.appendChild(wrap);
      const box: Box = { container, viewer: null, interaction: null };
      boxes.push(box);
      return box;
    };

    /**
     * Keep two side-by-side viewers pointing the same way.
     *
     * Turning one molecule and having the other stay put makes the pair
     * impossible to compare, which is the whole reason both are on screen. The
     * loop stops when the view is torn down; the prototype's runs forever, which
     * is fine in a page that is one app and not in an element that gets removed.
     */
    const startSync = (): void => {
      if (boxes.length < 2) return;
      const last = boxes.map(() => "");
      let syncing = false;
      const loop = (): void => {
        if (!alive) return;
        if (!syncing) {
          for (let i = 0; i < boxes.length; i++) {
            const viewer = boxes[i].viewer;
            if (!viewer) continue;
            const current = JSON.stringify(viewer.getView());
            if (current === last[i]) continue;
            syncing = true;
            for (let j = 0; j < boxes.length; j++) {
              if (j !== i && boxes[j].viewer) {
                boxes[j].viewer!.setView(viewer.getView());
                boxes[j].viewer!.render();
              }
              last[j] = current;
            }
            syncing = false;
            break;
          }
        }
        syncHandle = requestAnimationFrame(loop);
      };
      syncHandle = requestAnimationFrame(loop);
    };

    const open = (box: Box, models: { mol: Molecule }[]): ThreeDmolViewer => {
      const viewer = ThreeDmol!.createViewer(box.container, { backgroundColor: SURFACE.viewer });
      for (const { mol } of models) viewer.addModel(buildSDF(mol), "sdf");
      box.viewer = viewer;
      return viewer;
    };

    /**
     * Hand a box its wheel and its zoom, once the mode has finished framing it.
     *
     * Deliberately not part of `open` above: a bounded zoom measures its limits
     * from the framing a view opens with, and that framing is not settled until
     * the mode has called `zoomTo` and whatever follows it. Attached any earlier
     * and every bound would be a multiple of an arbitrary camera.
     *
     * The rule it brings is the one the other 3D views already follow: a plain
     * scroll moves the page, zooming asks for a click on the canvas first or a
     * modifier, and how far out it can go is bounded in the engine as well as
     * here so a drag or a pinch cannot lose the molecule either.
     */
    const settle = (box: Box): void => {
      if (box.viewer) box.interaction = viewerInteraction(box.container, box.viewer);
    };

    // --- the modes ---

    const renderPlain = (): void => {
      for (const mol of [molA, molB]) {
        const box = makeBox(mol.name);
        const viewer = open(box, [{ mol }]);
        viewer.setStyle(
          {},
          { stick: { radius: STYLE.stick, colorscheme: "Jmol" }, sphere: { scale: STYLE.sphere, colorscheme: "Jmol" } },
        );
        viewer.zoomTo();
        viewer.render();
        settle(box);
      }
      startSync();
    };

    /**
     * The mapping, marked on the structures in the colours 2D marks it with.
     *
     * *Which* atom is marked and *in which colour* is not decided here: it is
     * `markGroups`, the same call `render2D` makes, reading the same style
     * document. So an atom cannot be a unique atom in one picture and an element
     * change in the other, and the two cannot disagree about what a colour
     * means - which is the whole reason someone looks at both.
     *
     * What 2D does with a group and this does not is bonds and letters. A stick
     * has no letter, and 3Dmol colours a bond from the atoms at its ends, so a
     * marked atom simply swells and takes the colour.
     */
    const renderColored = (): void => {
      const style = DEPICT_STYLE;
      const custom = parseAtomSpec(style.customSpec);
      const sides = [
        { mol: molA, uniques: uniquesA, side: "left" as Side, custom: custom.left },
        { mol: molB, uniques: uniquesB, side: "right" as Side, custom: custom.right },
      ];
      for (const side of sides) {
        const box = makeBox(side.mol.name);
        const viewer = open(box, [{ mol: side.mol }]);
        viewer.setStyle(
          {},
          { stick: { radius: STYLE.stick, color: MOL.core }, sphere: { scale: STYLE.sphere, color: MOL.core } },
        );
        // 3Dmol's V2000 reader numbers `serial` from zero within a model, so an
        // atom's serial is the payload's own index. Adding one to it marked the
        // next atom along, all the way up the molecule, and 3D-Map then
        // disagreed with 2D about every atom it coloured.
        const mark = (index: number, colour: string): void => {
          viewer.addStyle(
            { serial: index },
            {
              stick: { radius: STYLE.markStick, color: threeDmolColor(colour) },
              sphere: { scale: STYLE.markSphere, color: threeDmolColor(colour) },
            },
          );
        };
        for (const group of markGroups(style, side.mol, side.uniques, side.side)) {
          for (const atom of group.atoms) mark(atom, group.color);
        }
        // Last, so an atom named in `customSpec` takes the custom colour
        // whatever the mapping would have given it, exactly as it does in 2D.
        for (const atom of side.custom) {
          if (atom < side.mol.symbols.length) mark(atom, style.customColor);
        }
        viewer.zoomTo();
        viewer.render();
        settle(box);
      }
      startSync();
    };

    /**
     * `LigandAtomMapping.view_3d()`, drawn here instead of in a notebook.
     *
     * gufe's `display_mapping_3d` puts four models in one scene: a copy of each
     * molecule pushed out along x, and both molecules again unmoved in the
     * middle, where they overlap. Everything is plain sticks in element colours,
     * and the mapping is said entirely with translucent spheres - one on each
     * atom of a mapped pair, both the same colour, so following a colour from
     * the left copy to the right one is following the mapping.
     *
     * The middle is the overlap on its own terms: no spheres, just how well the
     * two conformers sit on each other.
     *
     * Every number here is gufe's, in `OPENFE` and `openfeShift`, because the
     * point of the mode is that it matches. `show_atomIDs` is gufe's other
     * option and it is off by default there, so it is absent here.
     */
    const renderOpenFE = (): void => {
      const box = makeBox(`${nameA} (left), both overlaid (middle), ${nameB} (right)`);
      const shift = openfeShift(molA.coords, molB.coords);
      const pushed = (mol: Molecule, alongX: number): Molecule => ({
        ...mol,
        coords: mol.coords.map(([x, y, z]) => [x + alongX, y, z] as [number, number, number]),
      });
      const left = pushed(molA, -shift);
      const right = pushed(molB, shift);

      const viewer = open(box, [{ mol: left }, { mol: right }, { mol: molA }, { mol: molB }]);
      // One style for every model, at 3Dmol's own defaults, which is what
      // `setStyle({stick: {}})` asks for.
      viewer.setStyle({}, { stick: {} });

      const mapped = Array.from(pairs);
      mapped.forEach(([a, b], index) => {
        const here = left.coords[a];
        const there = right.coords[b];
        if (!here || !there) return;
        const colour = pairColour(index, mapped.length);
        for (const [x, y, z] of [here, there]) {
          viewer.addSphere({
            center: { x, y, z },
            radius: OPENFE.sphereRadius,
            color: colour,
            alpha: OPENFE.sphereAlpha,
          });
        }
      });

      viewer.zoomTo();
      // gufe frames this in a square 600 by 600 view, and 3Dmol's `zoomTo` fits
      // a scene to the height alone. Three molecules across is much wider than
      // it is tall, so in a pane taller than it is wide - the ligand network's
      // detail pane is one - both shifted copies land off the sides. Pulling
      // back to the pane's width is what a square view gives for free.
      //
      // The margin is not decoration. `zoomTo` fits the scene's bounding sphere
      // at the depth of its centre, and the camera is a perspective one, so the
      // half nearer the camera draws larger than that fit allows for: fitted
      // with nothing to spare, the near edge of each shifted copy is cut off.
      // Nothing happens in a pane wide enough that the height is still what
      // binds, which is the case `zoomTo` already had right.
      const { clientWidth, clientHeight } = box.container;
      const across = clientWidth - 2 * FIT_MARGIN;
      if (across > 0 && across < clientHeight) viewer.zoom(across / clientHeight);
      viewer.render();
      settle(box);
    };

    const renderLines = (): void => {
      const box = makeBox(`${nameA} to ${nameB}  (${pairs.size} mapped pairs)`);

      // Align B onto A over the mapped atoms first. Unaligned, the lines cross
      // each other and say nothing about how good the mapping is.
      const P: Vec3[] = [];
      const Q: Vec3[] = [];
      for (const [a, b] of pairs) {
        const pa = molA.coords[a];
        const pb = molB.coords[b];
        if (pa && pb) {
          P.push(pa as Vec3);
          Q.push(pb as Vec3);
        }
      }
      const rt = kabsch(P, Q);
      const aligned = molB.coords.map((c) => (rt ? applyRT(c as Vec3, rt.R, rt.t) : ([...c] as Vec3)));

      const { axis, lift } = liftFor(molA.coords as Vec3[], aligned);
      const lifted: Molecule = {
        ...molB,
        coords: aligned.map((c) => {
          const out: Vec3 = [c[0], c[1], c[2]];
          out[axis] += lift;
          return out;
        }),
      };

      // Both molecules in the element colours the plain 3D view uses. Which is
      // which is already said by where they sit and by the line between them,
      // so colouring them by side would only cost the reader the elements.
      const viewer = open(box, [{ mol: molA }, { mol: lifted }]);
      const pairStyle = {
        stick: { radius: STYLE.stick, colorscheme: "Jmol" },
        sphere: { scale: STYLE.pairSphere, colorscheme: "Jmol" },
      };
      viewer.setStyle({ model: 0 }, pairStyle);
      viewer.setStyle({ model: 1 }, pairStyle);
      for (const [a, b] of pairs) {
        const pa = molA.coords[a];
        const pb = lifted.coords[b];
        if (!pa || !pb) continue;
        viewer.addCylinder({
          start: { x: pa[0], y: pa[1], z: pa[2] },
          end: { x: pb[0], y: pb[1], z: pb[2] },
          radius: STYLE.lineRadius,
          dashed: true,
          fromCap: "round",
          toCap: "round",
          color: MOL.pairLine,
        });
      }
      viewer.zoomTo();
      // Turn the camera so the lift is across the screen rather than into it.
      if (axis === 2) viewer.rotate(90, "x");
      else if (axis === 0) viewer.rotate(-90, "z");
      viewer.render();
      settle(box);
    };

    const render2D = (): void => {
      // *Which* atom is marked, and why, is gufe's scheme rather than the
      // prototype's: an element change against a unique atom, with everything
      // else unhighlighted. That is what OpenFE users are taught, and it is the
      // one place this view does not follow the prototype.
      //
      // *How* those atoms are drawn is not decided here at all. It is one JSON
      // document, `shared/depict-style.ts`, authored by hand in the editor that
      // file links to and compiled into this bundle. At its defaults it draws
      // what gufe draws.
      const style = DEPICT_STYLE;
      const custom = parseAtomSpec(style.customSpec);
      const sides = [
        { mol: molA, uniques: uniquesA, side: "left" as Side, custom: custom.left },
        { mol: molB, uniques: uniquesB, side: "right" as Side, custom: custom.right },
      ];
      const targets = sides.map((side) => {
        const wrap = el("div", "flex:1;display:flex;flex-direction:column;position:relative;min-height:0;");
        const box = el(
          "div",
          "flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;" +
            `background:${SURFACE.canvas2D};`,
        );
        box.appendChild(centredMessage("Loading 2D depiction..."));
        wrap.appendChild(box);
        // On the depiction, not above it, and outside the box the depiction
        // replaces the contents of when RDKit comes back.
        if (named) wrap.appendChild(el("div", PANE_LABEL_OVERLAY, side.mol.name));
        stage.appendChild(wrap);
        return { box, side };
      });

      loadRDKit()
        .then((RDKit: RDKitModule) => {
          // Asked once per pair rather than once per panel: it is a property of
          // the RDKit build, and the two panels must not disagree about it.
          const markStyle = effectiveMarkStyle(style, RDKit);
          // Where the coordinates come from is decided once for the pair rather
          // than per panel, because aligning the second molecule onto the first
          // needs both layouts in hand. gufe does the same two things here.
          const laid = layoutPair(RDKit, from.sdf, to.sdf, style.layout, style.alignPair ? pairs : null);
          for (const { box, side } of targets) {
            const groups = markGroups(style, side.mol, side.uniques, side.side);
            const details = depictionDetails(
              style,
              DEPICT_SIZE,
              groups,
              side.custom,
              markStyle,
              side.mol.symbols.length,
            );
            const drawn = depictStyledSVG(RDKit, side.side === "left" ? laid.left : laid.right, DEPICT_SIZE, details);
            box.replaceChildren();
            if (!drawn) {
              box.appendChild(centredMessage("Failed to parse molecule", true));
              continue;
            }
            placeDepiction(box, drawn, DEPICT_SIZE);
            // After it is in the document: the post-processing reads the styles
            // RDKit set on each element, which needs the elements to be real.
            const svg = box.querySelector("svg");
            if (svg) postProcessDepiction(svg, side.mol, style, groups, side.custom, markStyle);
          }
        })
        .catch((e: unknown) => {
          for (const { box } of targets) {
            box.replaceChildren(centredMessage(`RDKit failed to load: ${errText(e)}`, true));
          }
        });
    };

    const renderInfo = (): void => {
      // `min-width:0` because the correspondence below is a grid of monospaced
      // cells that cannot shrink: without it this pane takes their width as its
      // own minimum and pushes the chips off the side of a narrow detail pane.
      const body = el(
        "div",
        "flex:1;min-width:0;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;",
      );
      stage.appendChild(body);

      // With no header strip, Info is where the payload identifies itself.
      const heading = el("div", "display:flex;flex-direction:column;gap:2px;");
      heading.appendChild(
        el(
          "div",
          `font-size:${FONT.title};font-weight:${WEIGHT.bold};color:${TEXT.title};`,
          payload.name || `${nameA} to ${nameB}`,
        ),
      );
      heading.appendChild(el("div", `font-size:${FONT.body};color:${TEXT.faint};`, "LigandAtomMapping"));
      body.appendChild(heading);

      // The chips are the whole of the colour legend, and in a view with no
      // molecule in it a colour that only names itself is decoration. So every
      // chip that carries one also selects the atoms it counts: clicking it
      // narrows the correspondence below to those rows, clicking it again widens
      // it back out. The counts come from `uniqueAtoms` and the rows from
      // `relations`, which is why those two must agree about every atom.
      const rows = relations(pairs, molA.symbols, molB.symbols);
      const counts = el("div", CHIP.row);
      const chips: { button: HTMLButtonElement; kinds: readonly RelationKind[] }[] = [];
      let filter: readonly RelationKind[] | null = null;

      // The chips take their colours from the depiction style rather than from
      // the constants, so the legend cannot say one thing while 2D draws another.
      const filterChip = (label: string, value: number, kinds: readonly RelationKind[], color?: string): void => {
        const button = el("button", `${CHIP.plain}${CHIP.button}`);
        button.type = "button";
        button.appendChild(statChip(label, String(value), color));
        button.onclick = () => {
          filter = filter === kinds ? null : kinds;
          refresh();
        };
        chips.push({ button, kinds });
        counts.appendChild(button);
      };
      const plainChip = (label: string, value: string): void => {
        const holder = el("span", CHIP.plain);
        holder.appendChild(statChip(label, value));
        counts.appendChild(holder);
      };

      filterChip("mapped atoms", pairs.size, ["mapped", "element"]);
      filterChip("element changes", uniquesA.elements.length, ["element"], DEPICT_STYLE.modifiedColor);
      filterChip(`unique to ${nameA}`, uniquesA.atoms.length, ["uniqueA"], DEPICT_STYLE.destroyedColor);
      filterChip(`unique to ${nameB}`, uniquesB.atoms.length, ["uniqueB"], DEPICT_STYLE.createdColor);
      plainChip(`atoms in ${nameA}`, String(molA.symbols.length));
      plainChip(`atoms in ${nameB}`, String(molB.symbols.length));
      plainChip("score", payload.score == null ? EM_DASH : payload.score.toFixed(3));
      body.appendChild(counts);

      body.appendChild(el("div", SECTION_LABEL, "Correspondence"));
      // What the two columns of every row are, said once above them rather than
      // as a header the grid would have to repeat in every column.
      const caption = el("div", NOTE);
      body.appendChild(caption);

      // A row per atom, laid out in as many columns as the pane is wide. The
      // indices are padded to the widest of them and drawn monospaced, so the
      // arrows line up down a column and a hundred atoms read as a table rather
      // than as one long sentence, which is what a run of `3 -> 5` separated by
      // spaces had become.
      const table = el(
        "div",
        `display:grid;grid-template-columns:repeat(auto-fill,minmax(${RELATION_COLUMN}px,1fr));` +
          `gap:${SPACE.xs} ${SPACE.md};font-family:${FONT.mono};font-size:${FONT.small};color:${TEXT.primary};`,
      );
      body.appendChild(table);

      const digits = String(Math.max(molA.symbols.length, molB.symbols.length, 1) - 1).length;
      const side = (index: number | null, symbol: string): string =>
        `${(index == null ? EM_DASH : String(index)).padStart(digits)} ${symbol.padEnd(2)}`;
      const describe = (row: Relation): string => {
        if (row.kind === "uniqueA") return `${nameA} atom ${row.a} ${row.symbolA} maps to nothing`;
        if (row.kind === "uniqueB") return `${nameB} atom ${row.b} ${row.symbolB} maps to nothing`;
        const change = row.kind === "element" ? ", an element change" : "";
        return `${nameA} atom ${row.a} ${row.symbolA} maps to ${nameB} atom ${row.b} ${row.symbolB}${change}`;
      };
      // The stripe down the left of a row is the colour of the chip that counts
      // it, so a row and the legend above it are one claim rather than two.
      const cell = (row: Relation): HTMLElement => {
        const node = el(
          "div",
          `white-space:pre;padding:${SPACE.xs} ${SPACE.md};border-radius:${RADIUS.sm};` +
            `background:${SURFACE.card};border-left:3px solid ${RELATION_COLOR[row.kind] ?? "transparent"};`,
          `${side(row.a, row.symbolA)} -> ${side(row.b, row.symbolB)}`,
        );
        node.title = describe(row);
        // Which kind of row this is, in the DOM rather than only in a colour:
        // visible in devtools and assertable in a test, and the one thing a
        // stripe cannot say to a reader who cannot see it.
        node.dataset.gufeRelation = row.kind;
        return node;
      };

      const refresh = (): void => {
        const active = filter;
        const shown = active ? rows.filter((row) => active.includes(row.kind)) : rows;
        table.replaceChildren(...shown.map(cell));
        if (!shown.length) {
          table.appendChild(
            el("div", `${NOTE}grid-column:1/-1;`, filter ? "No atoms of that kind." : "This mapping has no atoms."),
          );
        }
        caption.textContent =
          (pairs.size ? "" : "This mapping relates no atoms at all. ") +
          `${nameA} -> ${nameB}, by atom index and element` +
          (filter ? "; click the chip again for all of them" : "");
        for (const chip of chips) {
          const on = chip.kinds === filter;
          chip.button.style.cssText = `${CHIP.plain}${on ? CHIP.active : CHIP.button}`;
          chip.button.setAttribute("aria-pressed", String(on));
          chip.button.title = on ? "Show every atom" : "Show only these atoms";
        }
      };
      refresh();

      const annotations = Object.entries(payload.annotations ?? {}).filter(([key]) => key !== "score");
      if (annotations.length) {
        body.appendChild(el("div", SECTION_LABEL, "Annotations"));
        const notes = el("div", `${MONO}color:${TEXT.faint};`);
        for (const [key, value] of annotations) {
          notes.appendChild(el("div", "", `${key}: ${String(value)}`));
        }
        body.appendChild(notes);
      }

      body.appendChild(
        el(
          "div",
          `${NOTE}overflow-wrap:anywhere;`,
          `gufe key: ${payload["gufe-key"]}`,
        ),
      );
    };

    const render = (): void => {
      clearBoxes();
      if (mode === "info") {
        renderInfo();
        return;
      }
      if (mode === "2d") {
        render2D();
        return;
      }

      stage.appendChild(centredMessage("Loading 3D viewer..."));
      load3Dmol()
        .then(() => {
          if (!alive) return;
          stage.replaceChildren();
          if (mode === "colored") renderColored();
          else if (mode === "openfe") renderOpenFE();
          else if (mode === "lines") renderLines();
          else renderPlain();
        })
        .catch((e: unknown) => {
          stage.replaceChildren(centredMessage(`3D render failed: ${errText(e)}`, true));
        });
    };

    render();

    return {
      onResize() {
        for (const box of boxes) {
          if (!box.viewer) continue;
          box.viewer.resize();
          box.viewer.render();
        }
      },
      cleanup() {
        alive = false;
        clearBoxes();
      },
    };
  }
}

defineElement("gufe-atom-mapping", GufeAtomMapping);
