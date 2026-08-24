/**
 * `<gufe-atom-mapping>` - one mapping between two ligands, side by side.
 *
 * A mapping is a correspondence, so the job is to make the correspondence
 * visible. gufe already decided how that looks, and this matches it rather than
 * inventing a second convention: an atom is either **unique** to its side, or it
 * maps to an atom of a **different element**, or it is unremarkable and gets no
 * highlight at all. Those three cases are `_get_unique_bonds_and_atoms` in
 * `gufe.visualization.mapping_visualization`, mirrored in `uniqueAtoms` below.
 *
 * Everything that makes the picture match lives in `MAPPING_DRAW_OPTIONS`:
 * the two highlight colours, a black-and-white element palette so those two are
 * the only colour on the page, atom indices, and outline rather than filled
 * highlights. Getting the colours right while missing the palette still produces
 * a picture that does not match.
 *
 * Highlighting reads atom indices straight out of the payload, which is why the
 * depiction keeps its hydrogens: gufe's indices count them, so a depiction that
 * silently dropped them would highlight neighbouring atoms with complete
 * confidence.
 *
 * This element is also what the ligand-network and transformation views embed,
 * so the standalone picture and the in-context one cannot drift apart.
 */

import {
  BTN_CSS,
  buttonGroup,
  centredMessage,
  EM_DASH,
  el,
  errText,
  headerStrip,
  statChip,
  viewerHost,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { load3Dmol, loadRDKit, ThreeDmol, type RDKitModule, type ThreeDmolViewer } from "../shared/engines.js";
import { resetControl, viewerInteraction, type BoundedZoom, type Interaction } from "../shared/interact.js";
import { mappedPairs, maxExtentX, shiftedSDF, SHIFT_FACTOR, type Point } from "../shared/mapping3d.js";
import { depictHighlightedSVG, ensureSDFTerminator, parseSDF, placeDepiction } from "../shared/sdf.js";
import { MAPPING_COLORS } from "../shared/atom-colors.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import type { LigandAtomMappingViz, SmallMoleculeComponentViz } from "../schema/types.js";

const DEPICT_SIZE = 420;

/** gufe's sphere, kept to its dimensions so the two pictures read the same. */
const SPHERE = { radius: 0.6, alpha: 0.8 };
/** Our addition: the line joining a mapped pair across the gap. */
const LINK = { radius: 0.05, dashed: true, opacity: 0.75 };

const MODES = [
  { id: "changes", label: "Changes", title: "Highlight what differs, as gufe draws it" },
  { id: "mapped", label: "Mapped", title: "Highlight the atoms that carry over instead" },
] as const;

type Mode = (typeof MODES)[number]["id"];

/** An RGB triple in the 0-1 form RDKit's drawing options take. */
function rgb(hex: string): [number, number, number] {
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
 * element change, and everything else gets no highlight. Bond classification is
 * gufe's too but is not read here, because RDKit's JS drawing takes highlighted
 * bonds as indices we would have to derive from a bond block; the atoms carry
 * the meaning.
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

/** The atoms to highlight, and the colour each carries, for one mode. */
function highlight(uniques: Uniques, mode: Mode): { atoms: number[]; colors: Record<number, [number, number, number]> } {
  if (mode === "mapped") {
    // Our own addition rather than gufe's picture, which is why it is not the
    // default: the same question asked from the other side.
    return { atoms: [...uniques.mapped, ...uniques.elements], colors: {} };
  }
  const colors: Record<number, [number, number, number]> = {};
  for (const index of uniques.elements) colors[index] = ELEMENT_CHANGE_RGB;
  for (const index of uniques.atoms) colors[index] = UNIQUE_ATOM_RGB;
  return { atoms: [...uniques.elements, ...uniques.atoms], colors };
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
 * An edge of a ligand network and a mapping of a transformation are both
 * already `LigandAtomMappingViz`; what they lack is a registry of their own, so
 * this gives them one holding the two ligands they name. What comes out is
 * exactly the payload this element receives when someone drops a mapping on the
 * page by itself, which is what lets one element serve every case.
 *
 * Returns `null` when either endpoint names nothing the registry holds - the
 * same schema-valid-but-undrawable case the views drop with a banner.
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

export class GufeAtomMapping extends GufeElement<LigandAtomMappingViz> {
  protected override placeholder(): string {
    return "Waiting for a LigandAtomMapping payload...";
  }

  protected renderView(host: HTMLDivElement, payload: LigandAtomMappingViz): ViewHandle {
    // Both endpoints are gufe keys, resolved in this payload's own registry when
    // it stands alone and in the network's when it is an edge. Either way what
    // comes back is a whole molecule, which is what makes one element serve both.
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

    // A schema-valid payload can still carry an unreadable SDF; that is a
    // render-degraded state rather than an error.
    let symbolsA: string[];
    let symbolsB: string[];
    try {
      symbolsA = parseSDF(from.sdf, nameA).symbols;
      symbolsB = parseSDF(to.sdf, nameB).symbols;
    } catch (e) {
      host.appendChild(centredMessage(`Could not read a molecule: ${errText(e)}`, true));
      return {};
    }

    const flipped = new Map<number, number>();
    for (const [a, b] of pairs) flipped.set(b, a);
    const uniquesA = uniqueAtoms(pairs, symbolsA, symbolsB);
    const uniquesB = uniqueAtoms(flipped, symbolsB, symbolsA);

    let mode: Mode = "changes";

    bar.statsEl.appendChild(statChip("mapped atoms", String(pairs.size)));
    bar.statsEl.appendChild(
      statChip("element changes", String(uniquesA.elements.length), MAPPING_COLORS.elementChange),
    );
    bar.statsEl.appendChild(
      statChip(`unique to ${nameA}`, String(uniquesA.atoms.length), MAPPING_COLORS.uniqueAtom),
    );
    bar.statsEl.appendChild(
      statChip(`unique to ${nameB}`, String(uniquesB.atoms.length), MAPPING_COLORS.uniqueAtom),
    );
    bar.statsEl.appendChild(statChip("score", payload.score == null ? EM_DASH : payload.score.toFixed(3)));

    // --- the mode switch, and what the colours mean ---
    const toolbar = el(
      "div",
      "display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:7px 14px;flex-shrink:0;font-size:12px;" +
        `background:${T.toolbarBg};border-bottom:1px solid ${T.toolbarBorder};color:${T.textMuted};`,
    );
    toolbar.appendChild(el("span", `font-size:11px;color:${T.textMuted};`, "Highlight:"));
    toolbar.appendChild(
      buttonGroup(MODES, mode, (id) => {
        mode = id as Mode;
        draw();
      }),
    );
    const legend = el("div", "display:flex;align-items:center;gap:12px;margin-left:auto;font-size:11px;");
    legend.appendChild(statChip("element change", "", MAPPING_COLORS.elementChange));
    legend.appendChild(statChip("unique atom", "", MAPPING_COLORS.uniqueAtom));
    toolbar.appendChild(legend);
    host.appendChild(toolbar);

    // --- 2D and 3D, side by side ---
    const columns = el("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(columns);

    const split = el("div", "flex:1 1 55%;min-height:0;display:flex;flex-direction:row;");
    columns.appendChild(split);

    const pane = (title: string): HTMLDivElement => {
      const wrap = el("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
      wrap.appendChild(
        el(
          "div",
          `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
          title,
        ),
      );
      const box = el(
        "div",
        "flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:8px;" +
          `background:${T.canvas2DBg};`,
      );
      wrap.appendChild(box);
      split.appendChild(wrap);
      return box;
    };

    const paneLabel = (text: string) =>
      el(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
        text,
      );

    const boxA = pane(nameA);
    split.appendChild(el("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`));
    const boxB = pane(nameB);

    // --- the 3D overlay ---
    //
    // gufe's layout, mirrored: molA shifted left, molB shifted right, and both
    // again unshifted in the middle. The shifted copies carry the spheres, so a
    // mapped pair is one colour appearing twice across the gap; the middle pair
    // is where you look to see how the structures actually sit together.
    const lower = el("div", "flex:1 1 45%;min-height:180px;display:flex;flex-direction:column;position:relative;");
    columns.appendChild(el("div", `height:1px;flex-shrink:0;background:${T.splitBorder};`));
    columns.appendChild(lower);
    lower.appendChild(paneLabel("3D overlay"));
    const host3D = viewerHost();
    lower.appendChild(host3D.wrap);

    const coordsA = parseSDF(from.sdf, nameA).coords as Point[];
    const coordsB = parseSDF(to.sdf, nameB).coords as Point[];
    const shift = maxExtentX(coordsA, coordsB) * SHIFT_FACTOR;
    const links = mappedPairs(pairs, coordsA, coordsB, shift);

    let viewer: ThreeDmolViewer | null = null;
    let interaction: (BoundedZoom & Interaction) | null = null;
    let showLinks = true;

    const shapes = (): void => {
      if (!viewer) return;
      viewer.removeAllShapes();
      for (const link of links) {
        for (const centre of [link.a, link.b]) {
          viewer.addSphere({
            center: { x: centre[0], y: centre[1], z: centre[2] },
            radius: SPHERE.radius,
            color: link.color,
            alpha: SPHERE.alpha,
          });
        }
        // Not gufe's - asked for directly, because a shared colour across a gap
        // is harder to follow than a line drawn between the two atoms.
        if (showLinks) {
          viewer.addCylinder({
            start: { x: link.a[0], y: link.a[1], z: link.a[2] },
            end: { x: link.b[0], y: link.b[1], z: link.b[2] },
            radius: LINK.radius,
            color: link.color,
            dashed: LINK.dashed,
            opacity: LINK.opacity,
          });
        }
      }
      viewer.render();
    };

    const controls = el(
      "div",
      "position:absolute;bottom:10px;right:10px;display:flex;gap:4px;padding:4px;border-radius:6px;z-index:10;" +
        `background:${T.switcherBg};box-shadow:0 2px 8px rgba(0,0,0,0.25);`,
    );
    const linkBtn = el("button", BTN_CSS, "Lines");
    linkBtn.title = "Draw a line between each mapped pair";
    linkBtn.style.background = T.btnBgActive;
    linkBtn.onclick = () => {
      showLinks = !showLinks;
      linkBtn.style.background = showLinks ? T.btnBgActive : T.btnBg;
      shapes();
    };
    controls.appendChild(linkBtn);
    controls.appendChild(resetControl(() => interaction?.reset()));
    lower.appendChild(controls);

    host3D.container.appendChild(centredMessage("Loading 3D viewer..."));
    load3Dmol()
      .then(() => {
        host3D.container.replaceChildren();
        viewer = ThreeDmol!.createViewer(host3D.container, { backgroundColor: T.viewerBg });
        // The two shifted copies, which carry the spheres...
        viewer.addModel(ensureSDFTerminator(shiftedSDF(from.sdf, -shift)), "sdf");
        viewer.addModel(ensureSDFTerminator(shiftedSDF(to.sdf, shift)), "sdf");
        // ...and the same two unshifted, which are the overlay proper.
        viewer.addModel(ensureSDFTerminator(from.sdf), "sdf");
        viewer.addModel(ensureSDFTerminator(to.sdf), "sdf");
        // Element colouring is 3Dmol's Jmol scheme, as it is everywhere else:
        // the ramp says what maps to what, and the sticks say what the atoms are.
        viewer.setStyle({}, { stick: { radius: 0.12, colorscheme: "Jmol" } });
        shapes();
        viewer.zoomTo();
        viewer.render();
        interaction = viewerInteraction(host3D.container, viewer);
      })
      .catch((e: unknown) => {
        host3D.container.replaceChildren(centredMessage(`3D render failed: ${errText(e)}`, true));
      });

    // --- the correspondence itself, in numbers ---
    const table = el(
      "div",
      "flex-shrink:0;max-height:96px;overflow:auto;padding:8px 14px;font-size:11px;line-height:1.6;" +
        `font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${T.textMuted};` +
        `background:${T.panelBg};border-top:1px solid ${T.toolbarBorder};`,
    );
    table.textContent = pairs.size
      ? Array.from(pairs, ([a, b]) => `${a} -> ${b}`).join("   ")
      : "This mapping relates no atoms at all.";
    host.appendChild(table);

    const annotations = Object.entries(payload.annotations ?? {}).filter(([key]) => key !== "score");
    if (annotations.length) {
      const list = el(
        "div",
        "flex-shrink:0;padding:6px 14px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;" +
          `color:${T.textMuted2};background:${T.panelBg};border-top:1px solid ${T.toolbarBorder};`,
      );
      list.textContent = annotations.map(([key, value]) => `${key}: ${String(value)}`).join("    ");
      host.appendChild(list);
    }

    // --- drawing ---
    //
    // RDKit is captured once, so switching mode is a redraw rather than another
    // trip through the loader.
    let rdkit: RDKitModule | null = null;

    const drawInto = (box: HTMLDivElement, sdf: string, uniques: Uniques): void => {
      if (!rdkit) return;
      const { atoms, colors } = highlight(uniques, mode);
      const drawn = depictHighlightedSVG(rdkit, sdf, DEPICT_SIZE, atoms, colors);
      box.replaceChildren();
      if (drawn) placeDepiction(box, drawn, DEPICT_SIZE);
      else box.appendChild(centredMessage("Failed to parse molecule", true));
    };

    const draw = (): void => {
      drawInto(boxA, from.sdf, uniquesA);
      drawInto(boxB, to.sdf, uniquesB);
    };

    boxA.appendChild(centredMessage("Loading 2D depiction..."));
    boxB.appendChild(centredMessage("Loading 2D depiction..."));
    loadRDKit()
      .then((loaded) => {
        rdkit = loaded;
        draw();
      })
      .catch((e: unknown) => {
        const message = `RDKit failed to load: ${errText(e)}`;
        boxA.replaceChildren(centredMessage(message, true));
        boxB.replaceChildren(centredMessage(message, true));
      });

    return {
      onResize() {
        if (viewer) {
          viewer.resize();
          viewer.render();
        }
      },
      cleanup() {
        interaction?.cleanup();
        interaction = null;
        if (!viewer) return;
        try {
          viewer.clear();
        } catch {
          /* already gone */
        }
        viewer = null;
      },
    };
  }
}

defineElement("gufe-atom-mapping", GufeAtomMapping);
