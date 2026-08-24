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
  buttonGroup,
  centredMessage,
  EM_DASH,
  el,
  errText,
  headerStrip,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { loadRDKit, type RDKitModule } from "../shared/engines.js";
import { depictHighlightedSVG, parseSDF, placeDepiction } from "../shared/sdf.js";
import { MAPPING_COLORS } from "../shared/atom-colors.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookupOfType } from "../schema/registry.js";
import type { LigandAtomMappingViz, SmallMoleculeComponentViz } from "../schema/types.js";

const DEPICT_SIZE = 420;

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

    // --- the two depictions ---
    const split = el("div", "flex:1;min-height:0;display:flex;flex-direction:row;");
    host.appendChild(split);

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

    const boxA = pane(nameA);
    split.appendChild(el("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`));
    const boxB = pane(nameB);

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

    return {};
  }
}

defineElement("gufe-atom-mapping", GufeAtomMapping);
