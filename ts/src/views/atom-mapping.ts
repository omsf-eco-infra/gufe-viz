/**
 * `<gufe-atom-mapping>` - one mapping between two ligands, six ways.
 *
 * This is a port of the viewer panel in the framejs prototype at
 * /j/019f2b55e1f57722af0293acbda78362, which is where the modes, the switcher,
 * the box labels and the 3D colours come from. Anything that looks arbitrary
 * here is arbitrary there, and changing it in one place means changing it in
 * both.
 *
 *   3D       both molecules, side by side, plain
 *   3D-Map   the same, with each molecule's unmapped atoms picked out
 *   Pairs    one above the other, Kabsch-aligned, a line per mapped pair
 *   Overlay  both superimposed and translucent
 *   2D       depictions with the mapping highlighted
 *   Info     the mapping in numbers - counts, the correspondence, annotations
 *
 * Info is last because it is a reading of the picture rather than a picture, and
 * it replaces the always-visible statistics panel an earlier version carried.
 * Nothing is lost, it just stops taking room from the molecules.
 *
 * **The one deliberate divergence is 2D.** The prototype colours core atoms grey
 * and each molecule's unique atoms by side. gufe colours by *meaning* - an
 * element change against a unique atom, with core atoms not highlighted at all -
 * and that is what OpenFE users are taught, so 2D follows gufe. See
 * `shared/atom-colors.ts`.
 *
 * Every mode takes the same two molecules, so this element is what any view
 * showing a pair of ligands should mount: the ligand network's detail pane and
 * the transformation view both do.
 */

import {
  buttonGroup,
  centredMessage,
  EM_DASH,
  el,
  errText,
  headerStrip,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { load3Dmol, loadRDKit, ThreeDmol, type RDKitModule, type ThreeDmolViewer } from "../shared/engines.js";
import { guardWheel, type Interaction } from "../shared/interact.js";
import { applyRT, kabsch, type Vec3 } from "../shared/kabsch.js";
import { buildSDF, depictHighlightedSVG, parseSDF, placeDepiction, type Molecule } from "../shared/sdf.js";
import { MAPPING_COLORS } from "../shared/atom-colors.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import type { LigandAtomMappingViz, SmallMoleculeComponentViz } from "../schema/types.js";

const MODES = [
  { id: "plain", label: "3D", title: "Plain 3D view" },
  { id: "colored", label: "3D-Map", title: "Colour-coded by mapping" },
  { id: "lines", label: "Pairs", title: "Dashed lines between mapped atoms" },
  { id: "overlay", label: "Overlay", title: "Both molecules superimposed" },
  { id: "2d", label: "2D", title: "2D depictions with highlights" },
  { id: "info", label: "Info", title: "The mapping in numbers" },
] as const;

type Mode = (typeof MODES)[number]["id"];

const DEPICT_SIZE = 420;

/** Styling, all of it the prototype's. */
const STYLE = {
  stick: 0.15,
  sphere: 0.25,
  uniqueStick: 0.18,
  uniqueSphere: 0.32,
  pairSphere: 0.22,
  overlayOpacity: 0.7,
  lineRadius: 0.04,
};

/** How far apart Pairs mode lifts the second molecule. */
const PAIRS = { gap: 2.5, minLiftFraction: 0.6 };

/** An RGB triple in the 0-1 form RDKit's drawing options take. */
function rgb(hex: string): Vec3 {
  const value = parseInt(hex.replace("#", ""), 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

const ELEMENT_CHANGE_RGB = rgb(MAPPING_COLORS.elementChange);
const UNIQUE_ATOM_RGB = rgb(MAPPING_COLORS.uniqueAtom);

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
  return { ...mapping, registry: from["gufe-key"] === to["gufe-key"] ? [from] : [from, to] };
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

export class GufeAtomMapping extends GufeElement<LigandAtomMappingViz> {
  protected override placeholder(): string {
    return "Waiting for a LigandAtomMapping payload...";
  }

  protected renderView(host: HTMLDivElement, payload: LigandAtomMappingViz): ViewHandle {
    const registry = buildRegistry(payload);
    const from = lookupOfType<SmallMoleculeComponentViz>(registry, payload.componentA, "SmallMoleculeComponentViz");
    const to = lookupOfType<SmallMoleculeComponentViz>(registry, payload.componentB, "SmallMoleculeComponentViz");

    const bar = headerStrip(payload.name || "Atom mapping", "LigandAtomMapping");
    host.appendChild(bar);

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

    bar.statsEl.appendChild(statChip("mapped", String(pairs.size)));
    bar.statsEl.appendChild(statChip("score", payload.score == null ? EM_DASH : payload.score.toFixed(3)));

    // --- the stage, and the floating switcher over it ---
    const wrapper = el("div", "position:relative;flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(wrapper);
    const stage = el("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
    wrapper.appendChild(stage);

    let mode: Mode = "plain";
    const switcher = el(
      "div",
      "position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;" +
        `background:${T.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`,
    );
    switcher.appendChild(
      buttonGroup(MODES, mode, (id) => {
        mode = id as Mode;
        render();
      }),
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
      guard: Interaction | null;
    }
    let boxes: Box[] = [];
    let syncHandle = 0;
    let alive = true;

    const clearBoxes = (): void => {
      if (syncHandle) cancelAnimationFrame(syncHandle);
      syncHandle = 0;
      for (const box of boxes) {
        box.guard?.cleanup();
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
      wrap.appendChild(
        el(
          "div",
          `padding:4px 10px;font-size:13px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
          labelText,
        ),
      );
      const container = el("div", "flex:1;position:relative;min-height:0;");
      container.dataset.gufeViewer = "";
      wrap.appendChild(container);
      stage.appendChild(wrap);
      const box: Box = { container, viewer: null, guard: null };
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
      const viewer = ThreeDmol!.createViewer(box.container, { backgroundColor: T.viewerBg });
      for (const { mol } of models) viewer.addModel(buildSDF(mol), "sdf");
      box.viewer = viewer;
      // The same wheel rule as everywhere else: a plain scroll moves the page.
      box.guard = guardWheel(box.container, {
        hint: "Click or hold Ctrl to zoom",
        onZoom: () => undefined,
      });
      return viewer;
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
      }
      startSync();
    };

    const renderColored = (): void => {
      const sides = [
        { mol: molA, uniques: uniquesA, colour: T.colorUniqueA },
        { mol: molB, uniques: uniquesB, colour: T.colorUniqueB },
      ];
      for (const side of sides) {
        const box = makeBox(side.mol.name);
        const viewer = open(box, [{ mol: side.mol }]);
        viewer.setStyle(
          {},
          { stick: { radius: STYLE.stick, color: T.colorCore }, sphere: { scale: STYLE.sphere, color: T.colorCore } },
        );
        // Everything that does not carry over, picked out. 3Dmol counts atoms
        // from one, and the payload counts from zero.
        for (const index of side.uniques.atoms) {
          viewer.addStyle(
            { serial: index + 1 },
            {
              stick: { radius: STYLE.uniqueStick, color: side.colour },
              sphere: { scale: STYLE.uniqueSphere, color: side.colour },
            },
          );
        }
        viewer.zoomTo();
        viewer.render();
      }
      startSync();
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

      const viewer = open(box, [{ mol: molA }, { mol: lifted }]);
      viewer.setStyle(
        { model: 0 },
        { stick: { radius: STYLE.stick, color: T.linesMolA }, sphere: { scale: STYLE.pairSphere, color: T.linesMolA } },
      );
      viewer.setStyle(
        { model: 1 },
        { stick: { radius: STYLE.stick, color: T.linesMolB }, sphere: { scale: STYLE.pairSphere, color: T.linesMolB } },
      );
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
          color: T.linesDash,
        });
      }
      viewer.zoomTo();
      // Turn the camera so the lift is across the screen rather than into it.
      if (axis === 2) viewer.rotate(90, "x");
      else if (axis === 0) viewer.rotate(-90, "z");
      viewer.render();
    };

    const renderOverlay = (): void => {
      const box = makeBox(`${nameA} + ${nameB}  (overlay)`);
      const viewer = open(box, [{ mol: molA }, { mol: molB }]);
      for (const [model, colour] of [
        [0, T.overlayMolA],
        [1, T.overlayMolB],
      ] as const) {
        viewer.setStyle(
          { model },
          {
            stick: { radius: STYLE.stick, color: colour, opacity: STYLE.overlayOpacity },
            sphere: { scale: STYLE.pairSphere, color: colour, opacity: STYLE.overlayOpacity },
          },
        );
      }
      viewer.zoomTo();
      viewer.render();
    };

    const render2D = (): void => {
      // gufe's scheme, not the prototype's: an element change against a unique
      // atom, with everything else unhighlighted. That is what OpenFE users are
      // taught, and it is the one place this view does not follow the prototype.
      const sides = [
        { mol: molA, sdf: from.sdf, uniques: uniquesA },
        { mol: molB, sdf: to.sdf, uniques: uniquesB },
      ];
      const targets = sides.map((side) => {
        const wrap = el("div", "flex:1;display:flex;flex-direction:column;min-height:0;");
        wrap.appendChild(
          el(
            "div",
            `padding:4px 10px;font-size:13px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
            side.mol.name,
          ),
        );
        const box = el(
          "div",
          "flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;" +
            `background:${T.canvas2DBg};`,
        );
        box.appendChild(centredMessage("Loading 2D depiction..."));
        wrap.appendChild(box);
        stage.appendChild(wrap);
        return { box, side };
      });

      loadRDKit()
        .then((RDKit: RDKitModule) => {
          for (const { box, side } of targets) {
            const colors: Record<number, Vec3> = {};
            for (const index of side.uniques.elements) colors[index] = ELEMENT_CHANGE_RGB;
            for (const index of side.uniques.atoms) colors[index] = UNIQUE_ATOM_RGB;
            const atoms = [...side.uniques.elements, ...side.uniques.atoms];
            const drawn = depictHighlightedSVG(RDKit, side.sdf, DEPICT_SIZE, atoms, colors);
            box.replaceChildren();
            if (drawn) placeDepiction(box, drawn, DEPICT_SIZE);
            else box.appendChild(centredMessage("Failed to parse molecule", true));
          }
        })
        .catch((e: unknown) => {
          for (const { box } of targets) {
            box.replaceChildren(centredMessage(`RDKit failed to load: ${errText(e)}`, true));
          }
        });
    };

    const renderInfo = (): void => {
      const body = el("div", "flex:1;min-height:0;overflow:auto;padding:14px;display:flex;flex-direction:column;gap:14px;");
      stage.appendChild(body);

      const counts = el("div", "display:flex;flex-wrap:wrap;gap:8px 16px;font-size:11px;");
      counts.appendChild(statChip("mapped atoms", String(pairs.size)));
      counts.appendChild(
        statChip("element changes", String(uniquesA.elements.length), MAPPING_COLORS.elementChange),
      );
      counts.appendChild(statChip(`unique to ${nameA}`, String(uniquesA.atoms.length), MAPPING_COLORS.uniqueAtom));
      counts.appendChild(statChip(`unique to ${nameB}`, String(uniquesB.atoms.length), MAPPING_COLORS.uniqueAtom));
      counts.appendChild(statChip(`atoms in ${nameA}`, String(molA.symbols.length)));
      counts.appendChild(statChip(`atoms in ${nameB}`, String(molB.symbols.length)));
      counts.appendChild(statChip("score", payload.score == null ? EM_DASH : payload.score.toFixed(3)));
      body.appendChild(counts);

      const listLabel = el("div", `font-size:11px;font-weight:700;color:${T.textMuted2};`, "CORRESPONDENCE");
      body.appendChild(listLabel);
      const list = el(
        "div",
        "font-size:11px;line-height:1.7;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;" +
          `color:${T.textMuted};`,
      );
      list.textContent = pairs.size
        ? Array.from(pairs, ([a, b]) => `${a} -> ${b}`).join("   ")
        : "This mapping relates no atoms at all.";
      body.appendChild(list);

      const annotations = Object.entries(payload.annotations ?? {}).filter(([key]) => key !== "score");
      if (annotations.length) {
        body.appendChild(el("div", `font-size:11px;font-weight:700;color:${T.textMuted2};`, "ANNOTATIONS"));
        const notes = el(
          "div",
          "font-size:11px;line-height:1.7;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;" +
            `color:${T.textMuted2};`,
        );
        for (const [key, value] of annotations) {
          notes.appendChild(el("div", "", `${key}: ${String(value)}`));
        }
        body.appendChild(notes);
      }

      body.appendChild(
        el(
          "div",
          `font-size:11px;color:${T.textMuted2};overflow-wrap:anywhere;`,
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
          else if (mode === "lines") renderLines();
          else if (mode === "overlay") renderOverlay();
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
