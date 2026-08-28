/**
 * `<gufe-ligand-network>` - the network graph, and a detail pane driven by it.
 *
 * This file is drawing code and nothing else. Python hands over the ligands in
 * the payload's registry and the mappings as edges that name them by gufe key,
 * so nothing here decodes a structure format: no atomic-number tables, no
 * conformer blobs, no GraphML. Resolving a key gives back a whole
 * `SmallMoleculeComponentViz` - which is what lets the detail pane draw the two
 * molecules of the selected mapping without a second shape to unpack.
 *
 * d3 is used for one thing: the force layout. Zoom, pan, drag, the colour ramp
 * and the SVG itself are plain DOM, so a network still draws when d3 cannot be
 * fetched - it falls back to the circular layout and says why.
 */

import {
  BTN_CSS,
  centredMessage,
  chromeMenu,
  dropdown,
  el,
  errText,
  esc,
  floatingWarning,
  headerStrip,
  SELECT_CSS,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, seededViewState, type ViewHandle } from "../shared/element.js";
import { choice, flag, num, text as textSetting, type Setting } from "../shared/settings.js";
import { svg } from "../shared/svg.js";
import { guardWheel, resetControl } from "../shared/interact.js";
import { loadD3, loadRDKit, type RDKitModule } from "../shared/engines.js";
import { DEPICT_STYLE, rgbTriple } from "../shared/depict-style.js";
import { depictSVG } from "../shared/sdf.js";
import { createMatcher, type MatchOutcome } from "../shared/smarts.js";
import { FONT, TOOLBAR } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import { mappingPayloadFor } from "./atom-mapping.js";
import type { LigandAtomMappingViz, LigandNetworkViz, SmallMoleculeComponentViz } from "../schema/types.js";

// --- just enough of d3-force to configure it -------------------------------
//
// d3 ships no types we can rely on here (it arrives as a runtime import, or
// pre-seeded), and every force setter returns the force, so one interface with
// the setters we use describes the whole surface.

interface D3Force {
  id(accessor: (node: NetNode) => string): D3Force;
  distance(value: number | ((link: D3Link) => number)): D3Force;
  strength(value: number): D3Force;
  distanceMin(value: number): D3Force;
  distanceMax(value: number): D3Force;
  iterations(value: number): D3Force;
}

interface D3Simulation {
  force(name: string, force: D3Force): D3Simulation;
  stop(): D3Simulation;
  tick(): D3Simulation;
  alphaMin(): number;
  alphaDecay(): number;
}

/** What d3-force wants a link to look like. It rewrites these in place, which
 * is why they are their own objects rather than the payload's edges. */
interface D3Link {
  source: string;
  target: string;
  score: number | null;
}

interface D3ForceModule {
  forceSimulation(nodes: NetNode[]): D3Simulation;
  forceLink(links: D3Link[]): D3Force;
  forceManyBody(): D3Force;
  forceCenter(x: number, y: number): D3Force;
  forceCollide(radius: number): D3Force;
  forceX(x: number): D3Force;
  forceY(y: number): D3Force;
}

// --- layout state ----------------------------------------------------------

/**
 * A ligand resolved out of the registry, with the coordinates the layout gives
 * it. It is the whole `SmallMoleculeComponentViz` - SDF, SMILES and all - not a
 * node-shaped subset of one, so the depiction and the detail pane read the same
 * object the schema declares.
 */
interface NetNode extends SmallMoleculeComponentViz {
  x: number;
  y: number;
  /** Pinned position: set by the non-force layouts and by dragging. */
  fx?: number;
  fy?: number;
}

/**
 * An edge - which is a `LigandAtomMappingViz`, the same object a standalone
 * mapping payload is - with its two endpoint keys resolved to their ligands.
 */
interface NetEdge extends LigandAtomMappingViz {
  index: number;
  from: NetNode;
  to: NetNode;
}

const LAYOUTS = ["Force-directed", "Circular", "Radial"] as const;
type Layout = (typeof LAYOUTS)[number];

// --- restoring a view ------------------------------------------------------
//
// What a `Setting` does not cover, because none of it is a preference: the
// layout the force simulation settled on, where the canvas is panned to, and
// which edge is open. All three are about the network on screen rather than
// about how someone likes to read networks, which is the line `settings.ts`
// draws and the reason these travel separately.
//
// The positions are here because they are the expensive, unrepeatable half. A
// force layout converges against the canvas it was given, so the same network
// laid out again in a window of a different size is a different picture - and
// any node the reader dragged is a decision no layout would reproduce at all.

/** What `<gufe-ligand-network>` saves, and what it will take back. */
export interface NetworkViewState {
  /** Every node's position, in the order the payload lists them. */
  nodes: [number, number][];
  /** The canvas transform: zoom, then pan. */
  scale: number;
  tx: number;
  ty: number;
  /** The open edge, or -1 for none. */
  selected: number;
}

/** The key this view's state travels under. See `seededViewState`. */
const VIEW_STATE_KEY = "ligand-network";

/**
 * How to select more than one ligand.
 *
 * Written once and shown in two places - under the list, and again when Edges
 * comes back empty - because those are the two moments it is needed: before
 * anyone has tried, and after the one thing that goes wrong has gone wrong.
 *
 * Named for the platform's own word rather than a key: someone on a Mac reaches
 * for Cmd and someone on Linux for Ctrl, and a hint that names the wrong one
 * reads as though the feature is not for them.
 */
const MULTI_SELECT_HINT = "Cmd/Ctrl-click to select several.";

/** Two decimals is under a thousandth of a node radius, and a third of the size. */
const round2 = (n: number): number => Math.round(n * 100) / 100;

/**
 * Read back what this view saved, or null.
 *
 * Checked the way `settings.ts` checks a stored value, and for the same reason:
 * it arrives as data from outside, possibly written by an older version of this
 * file. The node count has to match as well, because positions are matched to
 * the payload by position - a state restored onto a network with a different
 * number of ligands would place them all wrong rather than fail.
 */
function asNetworkViewState(value: unknown, nodeCount: number): NetworkViewState | null {
  if (!value || typeof value !== "object") return null;
  const state = value as Partial<NetworkViewState>;
  const finite = (n: unknown): n is number => typeof n === "number" && Number.isFinite(n);
  if (!finite(state.scale) || state.scale <= 0 || !finite(state.tx) || !finite(state.ty)) return null;
  if (!Array.isArray(state.nodes) || state.nodes.length !== nodeCount) return null;
  if (!state.nodes.every((at) => Array.isArray(at) && at.length === 2 && at.every(finite))) return null;
  const selected = finite(state.selected) ? Math.trunc(state.selected) : -1;
  return { nodes: state.nodes, scale: state.scale, tx: state.tx, ty: state.ty, selected };
}

/**
 * Put the nodes back where they were.
 *
 * Called after `seedPositions`, so it overwrites a seeding rather than racing
 * it, and it carries `fx`/`fy` along wherever the layout was using them - a
 * pinned node whose pin still names its old position would snap back on the
 * next `place()`.
 */
function placeNodesAt(nodes: NetNode[], at: readonly [number, number][]): void {
  nodes.forEach((node, i) => {
    node.x = at[i][0];
    node.y = at[i][1];
    if (node.fx !== undefined) node.fx = node.x;
    if (node.fy !== undefined) node.fy = node.y;
  });
}

// Dimensions and force constants are the framejs prototype's, kept the same so
// the two pictures are the same picture. Changing one here without changing it
// there is how they drift apart.
const NODE_RADIUS = 38;
const DEPICT_SIZE = 200;
const DEPICT_PADDING = 4;
const LABEL_MAX_CHARS = 14;
const INITIALS_SIZE = 18;

/**
 * The node's name: its size under a node, how far under, the least it shrinks
 * to when it sits inside one instead, and the width it has to fit there.
 *
 * `below` only applies to a depicted node, which has no disc left to clear, so
 * it is measured from the structure's own box rather than from the radius. It
 * is a baseline, so most of the 12 is the font's ascent and the name lands a
 * few pixels under the structure: zoomed in the name belongs to the picture
 * above it, and a wider gap reads as though it belonged to nothing.
 */
const CAPTION = {
  fontSize: 11,
  below: NODE_RADIUS - DEPICT_PADDING + 12,
  minFontSize: 7,
  insideWidth: (NODE_RADIUS - 6) * 2,
};
const EDGE_MIN_WIDTH = 1.5;
const EDGE_MAX_WIDTH = 6.5;
const EDGE_OPACITY = 0.9;
const HIT_WIDTH = 14;

/** The arrowhead, and how far back from the node centre it stops. */
const ARROW = { size: 8, clearance: 8 };

/**
 * An edge's score, drawn straight onto the canvas with nothing behind it.
 *
 * Which zooms draw it at all is `ZOOM_LEVELS`, not here.
 */
const EDGE_LABEL = { fontSize: 10 };

/**
 * Colouring by SMARTS match.
 *
 * `debounceMs` is what stands between a typed pattern and a molecule parse per
 * ligand: long enough that a half-typed pattern - mostly invalid anyway - does
 * not start a sweep, short enough that a finished one feels answered. The
 * matcher cancels a superseded run on its own, so this is about not starting
 * work rather than about correctness.
 *
 * `atomRadius` is the disc RDKit draws behind a matched atom, in its own units.
 */
const MATCH = { debounceMs: 250, atomRadius: 0.4 };

/** The match colour as RDKit wants it, converted once. */
const MATCH_RGB = rgbTriple(T.netMatchAtom);

/** The selection halo, sized from the edge it sits under. */
const HALO = { padding: 4, opacity: 0.95 };

/**
 * One zoom level: everything the network draws differently at that distance.
 *
 * The point of the shape is that a level is a row of data rather than a set of
 * thresholds compared in the drawing code. Changing what a zoom shows is an
 * edit to one row here; adding a level is adding a row. Nothing below reads a
 * number off the zoom directly.
 */
export interface DetailLevel {
  /** Its name, so the level in force can be read off the DOM and talked about. */
  id: "structures" | "names" | "shape";
  /** The lowest zoom this level covers. */
  from: number;
  /** The disc behind a node. A structure replaces it rather than sitting on it. */
  disc: boolean;
  /** The 2D structure inside a node. */
  structure: boolean;
  /** The ligand's name: under the node, across the disc, or not at all. */
  name: "below" | "inside" | "none";
  /** The two-letter stand-in, for when there is no room for a name. */
  initials: boolean;
  /** The mapping score over each edge. */
  edgeScores: boolean;
}

/**
 * The levels, closest zoom first. `from` is the lowest zoom each one covers.
 *
 * Zoomed out, the shape of the network is the thing worth seeing, and a caption
 * under every node buries it - a nine-hundred-ligand network is unreadable long
 * before it is slow. Zoomed in, the structures are what people navigate by:
 * project chemists know what a ligand looks like more reliably than what it is
 * called. So names arrive first and structures second.
 *
 * `shape` draws no edge scores. Everything on the canvas is scaled by the zoom,
 * so at half size or less a 10px score is 5px on screen: it is not read, it is
 * just texture over the lines whose shape is the whole reason to be out here.
 *
 * Structures are the expensive part - one RDKit call and an SVG subtree per
 * node - so they are built lazily, only for nodes actually on screen, and only
 * once each.
 */
export const ZOOM_LEVELS: readonly DetailLevel[] = [
  { id: "structures", from: 1.1, disc: false, structure: true, name: "below", initials: false, edgeScores: true },
  { id: "names", from: 0.5, disc: true, structure: false, name: "inside", initials: false, edgeScores: true },
  { id: "shape", from: 0, disc: true, structure: false, name: "none", initials: true, edgeScores: false },
];

/** The level a zoom falls in. */
export const levelAt = (scale: number): DetailLevel =>
  ZOOM_LEVELS.find((level) => scale >= level.from) ?? ZOOM_LEVELS[ZOOM_LEVELS.length - 1];

/** The level below a given one - what a node falls back to, and the last one stays put. */
const levelUnder = (level: DetailLevel): DetailLevel =>
  ZOOM_LEVELS[Math.min(ZOOM_LEVELS.indexOf(level) + 1, ZOOM_LEVELS.length - 1)];

/** How far outside the viewport to keep depictions, so panning does not tear. */
const CULL_MARGIN = 200;

/** Space left around the graph when the view frames it, in graph units. */
const FIT_MARGIN = 24;

/** How far down what is not emphasised goes. Dimmed, never removed. */
const DIM = { node: 0.12, edge: 0.06 };

/**
 * Zoom to at least this when jumping to a ligand from the sidebar.
 *
 * It has to clear the `structures` level's `from`, or clicking a ligand lands
 * on a disc and a name rather than the structure that was asked for. Well clear
 * of it, since landing exactly on the threshold draws the structure at the
 * smallest size it is ever drawn. This is the knob for how close that lands.
 */
const FOCUS_SCALE = 1.8;

const FORCE = {
  linkBaseDistance: 18,
  linkScoreBonus: 10,
  linkStrength: 0.5,
  chargeStrength: -2500,
  chargeDistanceMin: 20,
  chargeDistanceMax: 5000,
  centerStrength: 0.08,
  collisionPadding: 12,
  collisionIterations: 4,
  drift: 0.04,
  tickMultiplier: 2,
};

/**
 * An arrowhead marker per edge colour, made once and reused.
 *
 * A marker cannot inherit the colour of the line it terminates, so a
 * continuously coloured ramp needs one marker per distinct colour. Deduplicating
 * by the colour string is what stops that being one marker per edge.
 */
/**
 * The hover readout.
 *
 * A floating panel rather than the SVG's native `<title>`: a title waits for the
 * browser's own delay, cannot be styled, and cannot show a score next to the
 * colour it produced. This is what the prototype shows, and hovering an edge is
 * how you read a network without clicking through every one of them.
 */
function hoverTooltip(host: HTMLElement): {
  show(html: string, x: number, y: number): void;
  hide(): void;
  remove(): void;
} {
  const tip = el(
    "div",
    "position:absolute;z-index:30;pointer-events:none;opacity:0;transition:opacity .12s ease;" +
      `padding:7px 10px;border-radius:6px;font-size:${FONT.small};line-height:1.5;max-width:260px;` +
      `background:${T.tooltipBg};border:1px solid ${T.tooltipBorder};color:${T.textPrimary};` +
      "box-shadow:0 4px 14px rgba(0,0,0,0.28);",
  );
  host.appendChild(tip);
  return {
    show(html, x, y) {
      tip.innerHTML = html;
      tip.style.left = `${x + 14}px`;
      tip.style.top = `${y - 10}px`;
      tip.style.opacity = "1";
    },
    hide() {
      tip.style.opacity = "0";
    },
    remove() {
      tip.remove();
    },
  };
}

function arrowMarkers(defs: SVGDefsElement): (colour: string) => string {
  const known = new Map<string, string>();
  return (colour: string): string => {
    const existing = known.get(colour);
    if (existing) return existing;
    const id = `arrow-${colour.replace(/[^a-zA-Z0-9]/g, "")}`;
    known.set(colour, id);
    const marker = svg("marker", {
      id,
      viewBox: "0 -5 10 10",
      // Pushes the head back along the line so it stops at the node's edge
      // rather than under it.
      refX: NODE_RADIUS + ARROW.clearance,
      refY: 0,
      markerUnits: "userSpaceOnUse",
      markerWidth: ARROW.size,
      markerHeight: ARROW.size,
      orient: "auto",
    });
    marker.appendChild(svg("path", { d: "M0,-5L10,0L0,5", fill: colour }));
    defs.appendChild(marker);
    return id;
  };
}

// --- the score ramp --------------------------------------------------------
//
// `T.netEdgeRamp` is two colours, so this is a lerp rather than a reason to
// pull in d3-scale and d3-interpolate.

function parseHex(hex: string): [number, number, number] {
  const value = parseInt(hex.replace("#", ""), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function scoreColor(score: number | null | undefined): string {
  const [from, to] = T.netEdgeRamp.map(parseHex);
  const t = Math.max(0, Math.min(1, score ?? 0.5));
  const mix = from.map((c, i) => Math.round(c + (to[i] - c) * t));
  return `rgb(${mix.join(",")})`;
}

/** A ligand's label, from the registry entry the node key resolved to. */
const label = entryLabel;

const truncate = (text: string, max: number): string => (text.length > max ? `${text.slice(0, max - 1)}...` : text);

interface DetailParts {
  nodes: NetNode[];
  circles: SVGCircleElement[];
  captions: SVGTextElement[];
  initials: SVGTextElement[];
  depictionGroups: SVGGElement[];
  /** Every edge score in one group, so a level can drop the lot in one write. */
  edgeLabels: SVGGElement;
  /** The canvas, which carries the level in force as `data-detail`. */
  stage: SVGSVGElement;
  /** Node index to the atoms a SMARTS pattern matched, for whatever is current. */
  matched: () => ReadonlyMap<number, number[]>;
  rdkit: () => Promise<RDKitModule | null>;
  viewport: () => { width: number; height: number };
}

/**
 * Draw the network at whatever level the zoom is in.
 *
 * What each level shows is `ZOOM_LEVELS`, not this function: everything here
 * reads a row and does as it says. The one thing it decides on its own is which
 * structures to build, because that cannot come from a table - a structure
 * costs an RDKit call and an SVG subtree, so they are built at most once per
 * node and only for nodes currently on screen, which is what makes a network of
 * several hundred ligands draw at all rather than paying for every structure
 * before the first frame.
 *
 * A node showing a structure loses its disc: the structure is drawn square and
 * overhangs the circle, which reads as a mistake. A node without one keeps the
 * disc, and its name moves inside it, where there is nothing else to show.
 */
function levelOfDetail(parts: DetailParts): {
  apply(scale: number, tx: number, ty: number): void;
  drawn(): number;
  forget(): void;
} {
  const injected = new Set<number>();
  let failed = new Set<number>();

  /** The match a structure was drawn against, so a new one knows what to redraw. */
  const drawnAgainst: string[] = [];
  const marking = (index: number): string => (parts.matched().get(index) ?? []).join(",");

  const inject = (RDKit: RDKitModule, index: number): void => {
    if (injected.has(index) || failed.has(index)) return;
    const node = parts.nodes[index];
    const atoms = parts.matched().get(index);
    const drawn =
      node.sdf &&
      depictSVG(
        RDKit,
        node.sdf,
        DEPICT_SIZE,
        DEPICT_STYLE.layout,
        atoms && { atoms, color: MATCH_RGB, radius: MATCH.atomRadius },
      );
    if (!drawn) {
      failed.add(index);
      return;
    }
    const parsed = new DOMParser().parseFromString(drawn, "image/svg+xml").documentElement;
    if (!parsed || parsed.nodeName.toLowerCase() === "parsererror") {
      failed.add(index);
      return;
    }

    const size = ((NODE_RADIUS - DEPICT_PADDING) * 2) / DEPICT_SIZE;
    const target = parts.depictionGroups[index];
    target.setAttribute(
      "transform",
      `translate(${(-size * DEPICT_SIZE) / 2},${(-size * DEPICT_SIZE) / 2}) scale(${size})`,
    );
    let appended = 0;
    for (const child of Array.from(parsed.childNodes)) {
      if (child.nodeType !== 1) continue;
      const tag = child.nodeName.toLowerCase();
      if (tag === "defs" || tag === "metadata" || tag === "title") continue;
      // RDKit paints an opaque white backing rect; dropping it lets the node's
      // own fill show through.
      if (tag === "rect") {
        const fill = ((child as Element).getAttribute("fill") ?? "").toLowerCase();
        if (fill === "#ffffff" || fill === "white" || fill === "rgb(255,255,255)") continue;
      }
      target.appendChild(document.importNode(child, true));
      appended++;
    }
    if (appended) {
      injected.add(index);
      drawnAgainst[index] = marking(index);
    } else failed.add(index);
  };

  /**
   * Drop the structures whose highlighting the current pattern has outdated.
   *
   * Only those: a structure is expensive and a new pattern usually changes a
   * handful of nodes, so redrawing every one of them would make typing a
   * pattern cost more than drawing the network did. A dropped structure is
   * rebuilt by the next `apply`, and only if it is on screen.
   */
  const forget = (): void => {
    for (const index of [...injected]) {
      if (drawnAgainst[index] === marking(index)) continue;
      parts.depictionGroups[index].replaceChildren();
      injected.delete(index);
    }
  };

  const fitted: number[] = [];

  /**
   * The size a name shrinks to so it fits across the disc, measured once per
   * node. Long names would otherwise run out over the edges.
   */
  const insideSize = (index: number, caption: SVGTextElement): number => {
    if (fitted[index]) return fitted[index];
    caption.setAttribute("font-size", String(CAPTION.fontSize));
    let width = 0;
    try {
      width = caption.getBBox().width;
    } catch {
      return CAPTION.fontSize; // jsdom has no layout, and this is only a fit
    }
    if (!width) return CAPTION.fontSize; // not laid out yet; measure next time
    const room = (CAPTION.fontSize * CAPTION.insideWidth) / width;
    fitted[index] = Math.max(CAPTION.minFontSize, Math.min(CAPTION.fontSize, room));
    return fitted[index];
  };

  /**
   * Draw one node at a level: disc, structure, initials and name together.
   *
   * A node asked for a structure it has not got yet draws the level below
   * instead, which is what it will keep drawing if RDKit never arrives.
   */
  const show = (index: number, wanted: DetailLevel): void => {
    const level = wanted.structure && !injected.has(index) ? levelUnder(wanted) : wanted;
    parts.depictionGroups[index].setAttribute("display", level.structure ? "inline" : "none");
    // A match has to be visible at every level, and each level has a different
    // thing to say it with: the disc when there is one, the name when there is
    // one, and the matched atoms themselves once the structure is drawn - which
    // is also the level where the disc is gone.
    const hit = parts.matched().has(index);
    // The disc is painted out rather than removed, so the whole node stays a hit
    // target for hover and drag; a structure's thin strokes are nothing to grab.
    const circle = parts.circles[index];
    circle.setAttribute("fill", level.disc ? (hit ? T.netMatchFill : T.netNodeFill) : "none");
    circle.setAttribute("stroke", level.disc ? (hit ? T.netMatchStroke : T.netNodeStroke) : "none");
    parts.initials[index].setAttribute("display", level.initials ? "inline" : "none");

    const caption = parts.captions[index];
    caption.setAttribute("fill", hit ? T.netMatchStroke : T.netNodeCaption);
    caption.setAttribute("display", level.name === "none" ? "none" : "inline");
    if (level.name === "none") return;
    const inside = level.name === "inside";
    caption.setAttribute("y", inside ? "0" : String(CAPTION.below));
    caption.setAttribute("dominant-baseline", inside ? "middle" : "auto");
    caption.setAttribute("font-size", String(inside ? insideSize(index, caption) : CAPTION.fontSize));
  };

  const apply = (scale: number, tx: number, ty: number): void => {
    const level = levelAt(scale);
    // On the canvas rather than only in this closure: which level is in force is
    // the first thing anyone asks when the picture looks wrong, and this way it
    // is visible in devtools and assertable in a test.
    parts.stage.setAttribute("data-detail", level.id);
    parts.edgeLabels.setAttribute("display", level.edgeScores ? "inline" : "none");
    for (let i = 0; i < parts.nodes.length; i++) show(i, level);
    if (!level.structure) return;

    // Only what is on screen, plus a margin so panning does not tear.
    const { width, height } = parts.viewport();
    const visible: number[] = [];
    parts.nodes.forEach((node, i) => {
      if (injected.has(i) || failed.has(i)) return;
      const x = node.x * scale + tx;
      const y = node.y * scale + ty;
      if (x < -CULL_MARGIN || y < -CULL_MARGIN || x > width + CULL_MARGIN || y > height + CULL_MARGIN) return;
      visible.push(i);
    });
    if (!visible.length) return;

    parts
      .rdkit()
      .then((RDKit) => {
        if (!RDKit) return;
        for (const index of visible) {
          inject(RDKit, index);
          show(index, level);
        }
      })
      .catch(() => undefined);
  };

  return { apply, drawn: () => injected.size, forget };
}

/** What an export names things by. */
export type ExportAs = "names" | "keys";

/**
 * The selection, as text to paste somewhere else.
 *
 * This is the whole of the answer to "how do I get this back into OpenFE": you
 * select in the browser, copy a list out, paste it into a file, and the CLI
 * re-plans from the originals. Nothing here writes a gufe object, and the
 * payload is not sufficient to reconstruct one - a gufe key hashes the full
 * float64 conformer while the SDF we carry holds four decimal places, and a
 * Protocol arrives as a class name with no settings. So what crosses back is
 * pointers, and Python keeps the data.
 *
 * Both come out one per line. A newline-delimited list is what a shell loop,
 * a `read`-per-line script and a paste into a text column all take without
 * further splitting, and it survives names that contain a comma. Within an
 * edge the two ends are still comma-separated, because there the comma is
 * joining a pair rather than delimiting the list.
 */
export function selectionText(
  nodes: readonly NetNode[],
  edges: readonly NetEdge[],
  selected: ReadonlySet<string>,
  what: "ligands" | "edges",
  as: ExportAs,
): string {
  const name = (node: NetNode): string => (as === "keys" ? node["gufe-key"] : label(node));

  if (what === "ligands") {
    return nodes
      .filter((node) => selected.has(node["gufe-key"]))
      .map(name)
      .join("\n");
  }

  // An edge is included when both its ends are selected: "the edges among these
  // ligands" is the question, and one endpoint would answer a different one.
  return edges
    .filter((edge) => selected.has(edge.from["gufe-key"]) && selected.has(edge.to["gufe-key"]))
    .map((edge) => `${name(edge.from)}, ${name(edge.to)}`)
    .join("\n");
}

/** Put `text` on the clipboard, falling back to a selectable box. */
function copyOut(text: string, fallbackHost: HTMLElement): void {
  navigator.clipboard?.writeText(text).catch(() => showText(text, fallbackHost));
  if (!navigator.clipboard) showText(text, fallbackHost);
}

/** When the clipboard is unavailable, show the text so it can be copied by hand. */
function showText(text: string, host: HTMLElement): void {
  const box = el("textarea", `width:100%;height:80px;font-size:${FONT.small};box-sizing:border-box;`) as HTMLTextAreaElement;
  box.value = text;
  box.readOnly = true;
  host.appendChild(box);
  box.select();
}

/** Offer `text` as a file, for a selection too big for a clipboard. */
function download(text: string, filename: string): void {
  const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
  const link = el("a", "display:none;") as HTMLAnchorElement;
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

interface MenuParts {
  nodes: NetNode[];
  edges: NetEdge[];
  /** Re-run emphasis after the query, the selection or the threshold moves. */
  refresh(): void;
  /** Bring one ligand into view and select it. */
  focus(index: number): void;
  selected: Set<string>;
  filter: { minScore: number };
  query: { text: string };
  /** Colour the ligands containing a substructure. Nothing is hidden by it. */
  match(smarts: string): Promise<MatchOutcome>;
}

/**
 * The network's menu: search, the ligand list, and the score filter.
 *
 * All three are new, so all three live behind the hamburger rather than on the
 * toolbar - the layout picker and the score legend that were already visible
 * stay visible. The list is also the reason the menu builds lazily: at nine
 * hundred ligands it is the most expensive thing in the view, and a collapsed
 * menu should not pay for it.
 */
function buildMenu(parts: MenuParts): HTMLDivElement {
  // Every control in here is a preference, so every one of them survives a
  // reload. The *selection* deliberately does not: it names ligands in the
  // network on screen, and restoring it onto a different one would restore
  // nonsense.
  const querySetting = textSetting("ligand-network.query");
  const smartsSetting = textSetting("ligand-network.smarts");
  const scoreSetting = num("ligand-network.minScore", 0, 0, 1);
  const exportAsSetting = choice<ExportAs>("ligand-network.exportAs", "names", ["names", "keys"]);
  // Stretches to the panel it is placed in rather than fixing its own width, so
  // that anything else the panel holds - today the debug export block, which is
  // wider than 236px - lines up with the controls instead of hanging off the
  // edge of the background. The floor is the width this menu was designed at;
  // the ceiling stops one long unbroken SMILES in the ligand list from dragging
  // the whole panel across the view.
  const panel = el(
    "div",
    "display:flex;flex-direction:column;gap:8px;min-width:236px;max-width:340px;box-sizing:border-box;" +
      `padding:10px;min-height:0;background:${T.panelBg};border-right:1px solid ${T.splitBorder};`,
  );

  const search = el("input", `${SELECT_CSS}width:100%;box-sizing:border-box;`) as HTMLInputElement;
  search.type = "search";
  search.placeholder = "Search ligands";
  search.value = querySetting.get();
  parts.query.text = search.value;
  search.setAttribute("aria-label", "Search ligands by name, SMILES or gufe key");
  panel.appendChild(search);

  // --- colour by substructure ---
  //
  // Below the search and not part of it, because it does the opposite thing:
  // the search narrows the list, and this hides nothing at all. Asked for that
  // way on purpose - which ligands do *not* contain the scaffold is the half of
  // the answer a filter throws away.
  const smarts = el("input", `${SELECT_CSS}width:100%;box-sizing:border-box;`) as HTMLInputElement;
  smarts.type = "text";
  smarts.placeholder = "Colour by SMARTS";
  smarts.value = smartsSetting.get();
  smarts.spellcheck = false;
  smarts.setAttribute("aria-label", "Colour the ligands matching this SMARTS pattern");
  panel.appendChild(smarts);

  /**
   * What the pattern did, in words.
   *
   * A pattern that matches nothing and a pattern RDKit refused look identical
   * on the canvas - nothing is coloured either way - and they need different
   * things done about them. Matching is also not instant on a large network, so
   * this is where the wait is visible instead of the view looking inert.
   */
  const smartsNote = el(
    "div",
    // One line held open whether or not there is anything to say, so this reads
    // as a line that changes rather than as the ligand list twitching up and
    // down under it every time a pattern is typed, matched or refused. Every
    // message fits one line at this panel width; a longer one would want the
    // wording shortened rather than the space here grown.
    `font-size:${FONT.tiny};line-height:1.5;min-height:1.5em;color:${T.textMuted2};`,
  );
  panel.appendChild(smartsNote);

  const describe = (outcome: MatchOutcome): string => {
    switch (outcome.status) {
      case "ok": {
        const unread = outcome.unreadable ? `, ${outcome.unreadable} could not be read` : "";
        return `${outcome.matched.size} of ${parts.nodes.length} ligands match${unread}`;
      }
      case "invalid":
        return "RDKit does not accept that as a SMARTS pattern.";
      case "unsupported":
        return "This RDKit build cannot match SMARTS.";
      default:
        return "";
    }
  };

  const runSmarts = (pattern: string): void => {
    smartsNote.textContent = pattern.trim() ? "Matching..." : "";
    parts.match(pattern).then(
      (outcome) => {
        // A superseded run is one someone has already typed past, and its count
        // would be the answer to a pattern that is no longer in the box.
        if (outcome.status !== "superseded") smartsNote.textContent = describe(outcome);
      },
      () => {
        smartsNote.textContent = "Matching failed.";
      },
    );
  };

  let smartsTimer = 0;
  smarts.oninput = () => {
    smartsSetting.set(smarts.value);
    window.clearTimeout(smartsTimer);
    smartsTimer = window.setTimeout(() => runSmarts(smarts.value), MATCH.debounceMs);
  };

  const scoreRow = el("div", `display:flex;align-items:center;gap:8px;font-size:${FONT.small};color:${T.textMuted};`);
  const scoreValue = el("span", `min-width:28px;color:${T.textPrimary};`, "0.00");
  const score = el("input", "flex:1;") as HTMLInputElement;
  score.type = "range";
  score.min = "0";
  score.max = "1";
  score.step = "0.01";
  score.value = String(scoreSetting.get());
  parts.filter.minScore = Number(score.value);
  score.setAttribute("aria-label", "Hide mappings scoring below this");
  scoreRow.appendChild(el("span", "", "score >="));
  scoreRow.appendChild(score);
  scoreRow.appendChild(scoreValue);
  panel.appendChild(scoreRow);

  const count = el("div", `font-size:${FONT.small};color:${T.textMuted2};`);
  panel.appendChild(count);

  const list = el("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:3px;");
  panel.appendChild(list);

  // Under the list rather than over it: it explains what the rows do, and it is
  // the one thing here nobody can discover by looking. A plain click replaces
  // the selection, so without knowing this a reader can never have two ligands
  // selected - and Edges, which needs both ends of one, could never copy
  // anything at all.
  panel.appendChild(el("div", `font-size:${FONT.tiny};line-height:1.5;color:${T.textMuted2};`, MULTI_SELECT_HINT));

  // --- export: the line against becoming a GUI ---
  //
  // Labelled as copying rather than editing, on purpose. A button that said
  // "Add edge" would set an expectation this cannot meet, and frustrating
  // someone who thinks they should be able to edit is the failure mode.
  const exportBox = el("div", "display:flex;flex-direction:column;gap:6px;");
  const asRow = el("div", `display:flex;align-items:center;gap:6px;font-size:${FONT.small};color:${T.textMuted};`);
  asRow.appendChild(el("span", "", "copy as"));
  const asPicker = dropdown(
    [
      { id: "names", label: "names" },
      { id: "keys", label: "gufe keys" },
    ],
    exportAsSetting.get(),
    () => undefined,
    exportAsSetting,
  );
  asPicker.style.flex = "1";
  asRow.appendChild(asPicker);
  exportBox.appendChild(asRow);

  /**
   * What the export buttons have to say for themselves.
   *
   * Its own line, because the alternative was what this used to do: return on an
   * empty selection and leave the button looking broken. Copying is invisible by
   * nature - the result is on a clipboard, somewhere else - so a button here has
   * nothing to show for itself either way unless it says so.
   */
  const exportNote = el("div", `font-size:${FONT.tiny};line-height:1.5;color:${T.textMuted2};`);
  const note = (text: string): void => {
    exportNote.textContent = text;
  };

  const exportRow = el("div", "display:flex;gap:4px;");
  const exports: [string, "ligands" | "edges", string][] = [
    ["Ligands", "ligands", "Copy the selected ligand names, one per line"],
    ["Edges", "edges", "Copy the edges between the selected ligands, one pair per line"],
  ];
  for (const [text, what, title] of exports) {
    const button = el("button", `${BTN_CSS}flex:1;`, text);
    button.title = title;
    button.onclick = (event) => {
      const as = asPicker.value as ExportAs;
      const content = selectionText(parts.nodes, parts.edges, parts.selected, what, as);
      if (!content) {
        // Naming which of the two reasons it is, because they need different
        // things done about them: one is "pick something", the other is "the
        // ligands you picked have nothing between them".
        note(
          parts.selected.size === 0
            ? "Nothing selected. Click a ligand above."
            : what === "edges"
              ? `No mappings between the ${parts.selected.size} selected ligands. ${MULTI_SELECT_HINT}`
              : "Nothing to copy.",
        );
        return;
      }
      const lines = content.split("\n").length;
      if (event.shiftKey) {
        download(content, `selected-${what}.txt`);
        note(`Saved ${lines} ${what === "edges" ? "edges" : "ligands"} to a file.`);
      } else {
        copyOut(content, exportBox);
        note(what === "edges" ? `Copied ${lines} edges.` : `Copied ${parts.selected.size} ligands.`);
      }
    };
    exportRow.appendChild(button);
  }
  exportBox.appendChild(exportRow);
  exportBox.appendChild(exportNote);
  exportBox.appendChild(
    el("div", `font-size:${FONT.tiny};color:${T.textMuted2};`, "Shift-click to save as a file instead."),
  );
  panel.appendChild(exportBox);

  const clear = el("button", `${BTN_CSS}width:100%;`, "Clear selection");
  clear.onclick = () => {
    parts.selected.clear();
    render();
    parts.refresh();
  };
  panel.appendChild(clear);

  const matches = (node: NetNode): boolean => {
    const text = parts.query.text.trim().toLowerCase();
    if (!text) return true;
    return (
      label(node).toLowerCase().includes(text) ||
      (node.smiles ?? "").toLowerCase().includes(text) ||
      node["gufe-key"].toLowerCase().includes(text)
    );
  };

  const render = (): void => {
    // Whatever the export last said was about a selection that has now changed,
    // and a count of what was copied from the previous one is worse than
    // silence. A successful copy does not come through here, so it stays up.
    note("");
    list.replaceChildren();
    const shown = parts.nodes.map((node, index) => ({ node, index })).filter(({ node }) => matches(node));
    count.textContent = `${shown.length} of ${parts.nodes.length} ligands`;

    for (const { node, index } of shown) {
      const key = node["gufe-key"];
      const row = el(
        "button",
        "display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;" +
          `font-family:inherit;font-size:${FONT.small};cursor:pointer;width:100%;min-width:0;` +
          `border:1px solid ${parts.selected.has(key) ? T.cardBorderActive : T.cardBorder};` +
          `background:${parts.selected.has(key) ? T.cardBgActive : T.cardBg};color:${T.textPrimary};`,
      );
      // The full name lives here, because the canvas caption is truncated and
      // long ligand names were called out as normal rather than exceptional.
      const name = el("span", "flex:1;min-width:0;overflow-wrap:anywhere;", label(node));
      name.title = `${label(node)}\n${node.smiles ?? ""}`;
      row.appendChild(name);
      row.onclick = (event) => {
        // Plain click jumps to it; modifier-click adds to the selection, which
        // is what makes "highlight the edges between these five" possible.
        if (event.shiftKey || event.metaKey || event.ctrlKey) {
          if (parts.selected.has(key)) parts.selected.delete(key);
          else parts.selected.add(key);
        } else {
          parts.selected.clear();
          parts.selected.add(key);
          parts.focus(index);
        }
        render();
        parts.refresh();
      };
      list.appendChild(row);
    }

    if (!shown.length) {
      list.appendChild(el("div", `font-size:${FONT.small};padding:8px;color:${T.textMuted2};`, "Nothing matches."));
    }
  };

  search.oninput = () => {
    parts.query.text = search.value;
    querySetting.set(search.value);
    render();
    parts.refresh();
  };
  score.oninput = () => {
    parts.filter.minScore = Number(score.value);
    scoreValue.textContent = parts.filter.minScore.toFixed(2);
    scoreSetting.set(parts.filter.minScore);
    parts.refresh();
  };

  render();
  // A remembered pattern is applied when the menu is built, which is the first
  // time it is opened - the same point at which the remembered search text
  // starts filtering. Nothing here runs for a network nobody opened the menu on.
  if (smarts.value.trim()) runSmarts(smarts.value);
  return panel;
}

export class GufeLigandNetwork extends GufeElement<LigandNetworkViz> {
  protected override placeholder(): string {
    return "Waiting for a LigandNetwork payload...";
  }

  protected renderView(host: HTMLDivElement, payload: LigandNetworkViz): ViewHandle {
    // The nodes are gufe keys; the ligands themselves are in the registry. A key
    // that names no entry is a schema-valid payload the view has to survive -
    // JSON Schema cannot express "this key resolves" - so it is counted and
    // reported rather than crashed on.
    const registry = buildRegistry(payload);
    const nodes: NetNode[] = [];
    let unresolved = 0;
    for (const key of payload.nodes ?? []) {
      const ligand = lookupOfType<SmallMoleculeComponentViz>(registry, key, "SmallMoleculeComponentViz");
      if (!ligand) {
        unresolved++;
        continue;
      }
      nodes.push({ ...ligand, x: 0, y: 0 });
    }
    const byKey = new Map(nodes.map((n) => [n["gufe-key"], n]));

    // The same rule for an edge: both endpoints must name ligands this network
    // actually contains. Drop the edge, and say how many were dropped rather
    // than silently showing a smaller network.
    const edges: NetEdge[] = [];
    let dangling = 0;
    for (const edge of payload.edges ?? []) {
      const from = byKey.get(edge.componentA);
      const to = byKey.get(edge.componentB);
      if (!from || !to) {
        dangling++;
        continue;
      }
      edges.push({ ...edge, index: edges.length, from, to });
    }

    const bar = headerStrip(payload.name || "Ligand network");
    bar.statsEl.appendChild(statChip("ligands", String(nodes.length)));
    bar.statsEl.appendChild(statChip("mappings", String(edges.length)));
    host.appendChild(bar);

    const split = el("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    host.appendChild(split);

    // What is emphasised, and what dims. One set shared by the list, the canvas
    // and - when it lands - the export, so all three cannot disagree.
    const selected = new Set<string>();
    const filter = { minScore: 0 };
    const query = { text: "" };
    let applyEmphasis = () => {};

    /**
     * RDKit, fetched once and only if something asks.
     *
     * Behind an accessor rather than started here, so that a network with no
     * ligands - which returns before it would ever draw one - never fetches
     * seven megabytes of WebAssembly to do nothing with.
     */
    let rdkitPromise: Promise<RDKitModule | null> | null = null;
    const rdkit = (): Promise<RDKitModule | null> =>
      (rdkitPromise ??= loadRDKit().catch((e: unknown) => {
        console.warn("[gufe-viz] RDKit failed to load:", errText(e));
        return null;
      }));

    /**
     * SMARTS matching, over this network's ligands, indexed as `nodes` is.
     *
     * Held here rather than in the scene because a redraw builds a new scene: a
     * pattern someone typed has to survive changing the layout, and the sweep it
     * costs must not be paid again for the same pattern.
     *
     * Declared above the menu, and not merely before its first use, because a
     * menu that was left open builds during this render and applies whatever
     * pattern it remembers as it does - so everything it can reach has to exist
     * by the time it is constructed, not by the time the view has finished.
     */
    const matcher = createMatcher(
      rdkit,
      nodes.map((node) => node.sdf ?? ""),
    );
    let matched: ReadonlyMap<number, number[]> = new Map();
    let showMatches = () => {};

    const runMatch = async (pattern: string): Promise<MatchOutcome> => {
      const outcome = await matcher.run(pattern);
      // A superseded run says nothing about what should be on screen; the run
      // that superseded it is still going and will.
      if (outcome.status === "superseded") return outcome;
      matched = outcome.status === "ok" ? outcome.matched : new Map();
      showMatches();
      return outcome;
    };

    const menu = chromeMenu(
      bar,
      () =>
        buildMenu({
          nodes,
          edges,
          selected,
          filter,
          query,
          refresh: () => applyEmphasis(),
          focus: (index) => focusNode(index),
          match: (pattern) => runMatch(pattern),
        }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => draw(),
        remember: flag("ligand-network.menuOpen", false),
      },
    );
    split.appendChild(menu.panel);

    const left = el("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`);
    const right = el("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${T.appBg};`);
    split.appendChild(left);
    split.appendChild(el("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`));
    split.appendChild(right);

    const canvas = el("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${T.netCanvasBg};`);
    left.appendChild(canvas);
    const layoutSetting = choice<Layout>("ligand-network.layout", "Force-directed", LAYOUTS);
    const toolbar = this.#toolbar(
      (next) => draw(next),
      () => resetView(),
      layoutSetting,
    );
    left.appendChild(toolbar.bar);

    const detail = this.#detailPane(right, registry);

    if (!nodes.length) {
      // Naming the cause matters here: "no ligands" and "the ligands it names
      // are missing from its registry" are very different bugs to go looking
      // for, and only the payload knows which one happened.
      canvas.appendChild(
        centredMessage(
          unresolved ? "None of this network's ligands are in its registry." : "This network has no ligands.",
        ),
      );
      detail.message("Nothing to show.");
      return {};
    }
    if (unresolved) {
      floatingWarning(
        canvas,
        `${unresolved} ligand${unresolved === 1 ? "" : "s"} named by this network are not in its registry`,
      );
    }
    if (dangling) {
      floatingWarning(canvas, `${dangling} mapping${dangling === 1 ? "" : "s"} name a ligand this network does not contain`);
    }

    // Depictions are RDKit's job alone, so start the fetch now rather than
    // after the layout - the graph draws with initials and they fill in.
    const rdkitReady = rdkit();

    const tip = hoverTooltip(canvas);
    let focusNode: (index: number) => void = () => {};

    // Taken once, before the first draw. The positions are the layout from here
    // on, so every redraw uses them; the transform is applied to the first paint
    // only, because after that the reader owns the camera and a resize must not
    // undo where they have panned to.
    const restored = asNetworkViewState(seededViewState(VIEW_STATE_KEY), nodes.length);
    let pendingTransform = restored && { scale: restored.scale, tx: restored.tx, ty: restored.ty };

    let selectedEdge = restored && restored.selected < edges.length ? restored.selected : edges.length ? 0 : -1;
    /** The canvas transform, as of the last time anything moved it. */
    let transformNow = (): { scale: number; tx: number; ty: number } => ({ scale: 1, tx: 0, ty: 0 });
    /** Whether there is a camera worth keeping across a redraw yet. */
    let painted = false;
    let stop: (() => void) | null = null;
    let layout: Layout = layoutSetting.get();
    let forceUnavailable = false;
    let alive = true;
    let refreshHalos = () => {};
    let resetView = () => {};

    const select = (index: number) => {
      selectedEdge = index;
      detail.show(edges[index] ?? null);
      refreshHalos();
    };

    const draw = (next: Layout = layout): void => {
      // A redraw that is not a change of layout - the menu opening, the window
      // resizing - must not throw away where the reader has panned to. Only a
      // new layout is a new picture, and only a new picture is worth reframing.
      // Before the first paint there is no camera to keep, so that one frames.
      const keepCamera = painted && next === layout ? transformNow() : null;
      layout = next;
      stop?.();
      stop = null;
      canvas.querySelector("svg")?.remove();

      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height, layout, edges);
      if (restored) placeNodesAt(nodes, restored.nodes);

      const paint = () => {
        if (!alive) return;
        const scene = this.#paint(canvas, nodes, edges, width, height, select, rdkitReady, tip);
        refreshHalos = () => scene.setSelected(selectedEdge);
        resetView = scene.reset;
        stop = scene.cleanup;
        focusNode = (index) => scene.focusOn(index);
        transformNow = scene.transform;

        /**
         * Which nodes and edges stay lit.
         *
         * A ligand is lit when nothing is selected and nothing is searched for,
         * or when it is selected, or when it matches the search. An edge is lit
         * when it clears the score threshold *and* both its ends are lit - so a
         * selection reads as "these ligands and what connects them".
         */
        applyEmphasis = () => {
          const text = query.text.trim().toLowerCase();
          const narrowed = selected.size > 0 || text.length > 0;
          const litNodes = new Set<string>();
          for (const node of nodes) {
            const key = node["gufe-key"];
            const hit =
              selected.has(key) ||
              (text.length > 0 &&
                (label(node).toLowerCase().includes(text) ||
                  (node.smiles ?? "").toLowerCase().includes(text) ||
                  key.toLowerCase().includes(text)));
            if (!narrowed || hit) litNodes.add(key);
          }

          const litEdges = new Set<number>();
          edges.forEach((edge, i) => {
            if ((edge.score ?? 0) < filter.minScore) return;
            if (!litNodes.has(edge.from["gufe-key"]) || !litNodes.has(edge.to["gufe-key"])) return;
            litEdges.add(i);
          });

          const filtering = narrowed || filter.minScore > 0;
          scene.setEmphasis(filtering ? litNodes : null, filtering ? litEdges : null);
        };

        showMatches = () => scene.setMatches(matched);

        refreshHalos();
        applyEmphasis();
        // A redraw builds nodes with no colouring on them, so whatever pattern
        // is in force is applied again here rather than only when it is typed.
        showMatches();
        // Frame the graph, which also draws the level of detail the resulting
        // zoom calls for. Everything else arrives as the user zooms in. A
        // restored camera goes through the same path, so it draws its own level
        // of detail rather than the framed one's.
        const camera = pendingTransform ?? keepCamera;
        if (camera) {
          scene.setTransform(camera.scale, camera.tx, camera.ty);
          pendingTransform = null;
        } else {
          scene.fit();
        }
        painted = true;
      };

      // A restored network is placed, not laid out: the positions it came with
      // are the answer the simulation would spend a second failing to reproduce
      // against a canvas of a different size.
      if (layout !== "Force-directed" || forceUnavailable || restored) {
        paint();
        return;
      }

      // The simulation is run to completion and the result drawn once, rather
      // than animated: a DOM write per node per frame is what melts a browser
      // on a network with a few hundred ligands.
      relax(nodes, edges, width, height).then((relaxed) => {
        if (!alive) return;
        if (relaxed) {
          paint();
          return;
        }
        // No d3, so no force layout. Say so once, and show something.
        forceUnavailable = true;
        toolbar.picker.value = "Circular";
        floatingWarning(canvas, "d3 could not be loaded - showing the circular layout instead");
        draw("Circular");
      }, paint);
    };

    draw();
    detail.show(edges[selectedEdge] ?? null);

    return {
      onResize: () => draw(),
      cleanup: () => {
        alive = false;
        matcher.cancel();
        tip.remove();
        stop?.();
      },
      viewState: (): NetworkViewState => ({
        nodes: nodes.map((node) => [round2(node.x), round2(node.y)]),
        ...transformNow(),
        selected: selectedEdge,
      }),
    };
  }

  #toolbar(
    onLayout: (layout: Layout) => void,
    onReset: () => void,
    layoutSetting: Setting<string>,
  ): { bar: HTMLDivElement; picker: HTMLSelectElement } {
    const toolbar = el(
      "div",
      TOOLBAR.bottom,
    );

    const legend = el("div", `display:flex;align-items:center;gap:6px;font-size:${FONT.small};color:${T.textMuted};`);
    legend.appendChild(el("span", "", "score"));
    legend.appendChild(
      el(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${T.netEdgeRamp.join(",")});`,
      ),
    );
    legend.appendChild(el("span", "", "0 -> 1"));
    toolbar.appendChild(legend);

    toolbar.appendChild(el("label", `font-size:${FONT.body};margin-left:auto;color:${T.textMuted};`, "Layout"));
    const picker = dropdown(
      LAYOUTS.map((name) => ({ id: name, label: name })),
      layoutSetting.get(),
      (id) => onLayout(id as Layout),
      layoutSetting,
    );
    toolbar.appendChild(picker);
    toolbar.appendChild(resetControl(onReset, "Reset pan and zoom"));

    return { bar: toolbar, picker };
  }

  /**
   * The right-hand pane: the selected mapping, drawn by the mapping view.
   *
   * Deliberately nothing but that element. It carries its own header, names both
   * ligands on its own box labels, and keeps the counts and annotations behind
   * its Info mode - so a pane title, a heading repeating the two names, and an
   * annotation list underneath were all saying a second time what the picture
   * below them already said.
   */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
  ): { show(edge: NetEdge | null): void; message(text: string): void } {
    const body = el("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(body);

    const message = (text: string) => body.replaceChildren(centredMessage(text));

    const show = (edge: NetEdge | null) => {
      if (!edge) {
        message("Click an edge to see its mapping.");
        return;
      }
      // The same element the standalone mapping payload renders through, fed
      // the payload `mappingPayloadFor` cuts loose. There is no second drawing
      // path, so the in-context picture and the standalone one cannot drift.
      const embedded = document.createElement("gufe-atom-mapping") as HTMLElement & { payload: unknown };
      embedded.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;";
      embedded.payload = mappingPayloadFor(edge, registry);
      body.replaceChildren(embedded);
    };

    return { show, message };
  }

  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #paint(
    canvas: HTMLDivElement,
    nodes: NetNode[],
    edges: NetEdge[],
    width: number,
    height: number,
    onSelect: (index: number) => void,
    rdkitReady: Promise<RDKitModule | null>,
    tip: ReturnType<typeof hoverTooltip>,
  ): {
    setSelected(index: number): void;
    setEmphasis(nodeKeys: ReadonlySet<string> | null, edgeIndices: ReadonlySet<number> | null): void;
    setMatches(matched: ReadonlyMap<number, number[]>): void;
    setDetail(scale: number, tx: number, ty: number): void;
    focusOn(index: number): void;
    depictionsDrawn(): number;
    fit(): void;
    reset(): void;
    /** Where the canvas is now, and how to put it back there. */
    transform(): { scale: number; tx: number; ty: number };
    setTransform(scale: number, tx: number, ty: number): void;
    cleanup(): void;
  } {
    // Named, because "the svg in this view" stopped being unambiguous the moment
    // the menu button started carrying an icon of its own.
    const root = svg("svg", {
      class: "gufe-graph",
      width,
      height,
      style: "display:block;touch-action:none;",
    });
    const scene = svg("g");
    root.appendChild(scene);
    canvas.appendChild(root);

    const defs = svg("defs");
    const markerFor = arrowMarkers(defs);
    root.appendChild(defs);

    const halos: SVGLineElement[] = [];
    const lines = svg("g");
    const hits = svg("g");
    const labels = svg("g", { "pointer-events": "none" });
    const nodeLayer = svg("g");
    scene.append(lines, hits, labels, nodeLayer);

    for (const edge of edges) {
      const colour = scoreColor(edge.score);
      const width = EDGE_MIN_WIDTH + (edge.score ?? 0.5) * (EDGE_MAX_WIDTH - EDGE_MIN_WIDTH);
      const halo = svg("line", {
        stroke: T.netHaloColor,
        // Sized from the edge underneath, so a thick edge does not outgrow its
        // own halo and a thin one is not swamped by it.
        "stroke-width": width + HALO.padding * 2,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none",
      });
      const line = svg("line", {
        stroke: colour,
        "stroke-width": width,
        "stroke-opacity": EDGE_OPACITY,
        // A mapping runs from A to B, and the arrow is what says which is which.
        "marker-end": `url(#${markerFor(colour)})`,
        "pointer-events": "none",
      });
      const hit = svg("line", { stroke: "transparent", "stroke-width": HIT_WIDTH, style: "cursor:pointer;" });
      hit.addEventListener("click", (event) => {
        event.stopPropagation();
        onSelect(edge.index);
      });
      hit.addEventListener("mousemove", (event: MouseEvent) => {
        tip.show(
          `<div style="font-weight:700;color:${T.titleColor};">${esc(label(edge.from))} -&gt; ${esc(label(edge.to))}</div>` +
            (edge.score == null
              ? `<div style="color:${T.textMuted2};">no score</div>`
              : `<div style="margin-top:4px;">score <b>${edge.score.toFixed(3)}</b></div>`) +
            `<div style="margin-top:4px;font-size:${FONT.tiny};color:${T.textMuted2};">Click to see the mapping</div>`,
          event.offsetX,
          event.offsetY,
        );
      });
      hit.addEventListener("mouseleave", () => tip.hide());
      halos.push(halo);
      lines.append(halo, line);
      hits.appendChild(hit);

      // The score, as bare text. The group is kept even for an edge that has
      // none, so a label's index is its edge's index and `place` can move them
      // together.
      const text = svg("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": EDGE_LABEL.fontSize,
        "font-weight": 600,
        fill: T.netEdgeLabel,
      });
      text.textContent = edge.score == null ? "" : edge.score.toFixed(2);
      const group = svg("g", { class: "gufe-edge-label" });
      group.appendChild(text);
      labels.appendChild(group);
    }

    const depictionGroups: SVGGElement[] = [];
    const circles: SVGCircleElement[] = [];
    const initials: SVGTextElement[] = [];
    const captions: SVGTextElement[] = [];
    const groups = nodes.map((node) => {
      const group = svg("g", { class: "gufe-node", style: "cursor:grab;" });
      group.addEventListener("mousemove", (event: MouseEvent) => {
        tip.show(
          `<div style="font-weight:700;color:${T.titleColor};">${esc(label(node))}</div>` +
            (node.smiles
              ? `<div style="margin-top:3px;font-family:ui-monospace,Menlo,monospace;overflow-wrap:anywhere;">${esc(node.smiles)}</div>`
              : "") +
            `<div style="margin-top:3px;font-size:${FONT.tiny};color:${T.textMuted2};overflow-wrap:anywhere;">${esc(node["gufe-key"])}</div>`,
          event.offsetX,
          event.offsetY,
        );
      });
      group.addEventListener("mouseleave", () => tip.hide());
      const circle = svg("circle", {
        r: NODE_RADIUS,
        fill: T.netNodeFill,
        stroke: T.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all",
      }) as SVGCircleElement;
      group.appendChild(circle);
      circles.push(circle);
      const depiction = svg("g", { class: "gufe-node-depiction", "pointer-events": "none" });
      group.appendChild(depiction);
      depictionGroups.push(depiction);

      const initial = svg("text", {
        class: "gufe-node-initials",
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": INITIALS_SIZE,
        "font-weight": 700,
        fill: T.netInitials,
        "pointer-events": "none",
      });
      initial.textContent = label(node).slice(0, 2).toUpperCase();
      group.appendChild(initial);
      initials.push(initial);

      const caption = svg("text", {
        class: "gufe-node-caption",
        "text-anchor": "middle",
        y: CAPTION.below,
        "font-size": CAPTION.fontSize,
        "font-weight": 600,
        fill: T.netNodeCaption,
        "pointer-events": "none",
      });
      caption.textContent = truncate(label(node), LABEL_MAX_CHARS);
      caption.setAttribute("display", "none");
      captions.push(caption);
      group.appendChild(caption);

      nodeLayer.appendChild(group);
      return group;
    });

    const place = () => {
      edges.forEach((edge, i) => {
        for (const line of [halos[i], lines.children[i * 2 + 1], hits.children[i]]) {
          const target = line as SVGElement;
          target.setAttribute("x1", String(edge.from.x));
          target.setAttribute("y1", String(edge.from.y));
          target.setAttribute("x2", String(edge.to.x));
          target.setAttribute("y2", String(edge.to.y));
        }
        const group = labels.children[i] as SVGGElement;
        group.setAttribute(
          "transform",
          `translate(${(edge.from.x + edge.to.x) / 2},${(edge.from.y + edge.to.y) / 2 - 8})`,
        );
      });
      nodes.forEach((node, i) => groups[i].setAttribute("transform", `translate(${node.x},${node.y})`));
    };
    place();

    /**
     * What the current SMARTS pattern matched, as node index to matched atoms.
     *
     * Held by the scene rather than read from the view, because everything that
     * paints a node reads it and a redraw builds all of this again.
     */
    let marks: ReadonlyMap<number, number[]> = new Map();

    const detail = levelOfDetail({
      nodes,
      circles,
      matched: () => marks,
      captions,
      initials,
      depictionGroups,
      edgeLabels: labels,
      stage: root,
      rdkit: () => rdkitReady,
      viewport: () => ({ width, height }),
    });

    const view = this.#interact(root, scene, nodes, groups, place, detail.apply);

    return {
      setSelected(index: number) {
        halos.forEach((halo, i) => halo.setAttribute("opacity", i === index ? "0.95" : "0"));
      },

      /**
       * Colour the ligands a SMARTS pattern matched.
       *
       * Colour rather than filter, and deliberately a different channel from
       * `setEmphasis`: dimming answers "which ones did I ask for", colouring
       * answers "which ones contain this" - and the whole point of the second
       * question is seeing the ones that do not. So the two compose, and
       * neither hides anything.
       */
      setMatches(matched) {
        marks = matched;
        detail.forget();
        const { scale, tx, ty } = view.transform();
        detail.apply(scale, tx, ty);
      },

      /**
       * Dim what is not emphasised rather than hiding it.
       *
       * Asked for directly: you want to see what is *not* selected too, because
       * a filter that removes the rest answers a different question from one
       * that fades it.
       */
      setEmphasis(nodeKeys, edgeIndices) {
        groups.forEach((group, i) => {
          const lit = !nodeKeys || nodeKeys.has(nodes[i]["gufe-key"]);
          group.setAttribute("opacity", lit ? "1" : String(DIM.node));
        });
        edges.forEach((_edge, i) => {
          const lit = !edgeIndices || edgeIndices.has(i);
          const opacity = lit ? "0.9" : String(DIM.edge);
          (lines.children[i * 2 + 1] as SVGElement).setAttribute("stroke-opacity", opacity);
          (labels.children[i] as SVGElement).setAttribute("opacity", lit ? "1" : String(DIM.edge));
        });
      },

      focusOn(index: number) {
        const node = nodes[index];
        if (node) view.centreOn(node.x, node.y);
      },

      setDetail: detail.apply,
      depictionsDrawn: () => detail.drawn(),
      fit: view.fit,
      reset: view.reset,
      transform: view.transform,
      setTransform: view.setTransform,
      cleanup: view.cleanup,
    };
  }

  /** Wheel zoom, background pan, node drag - ~40 lines instead of d3-zoom and
   * d3-drag, and they keep working when d3 is unreachable. */
  #interact(
    root: SVGSVGElement,
    scene: SVGGElement,
    nodes: NetNode[],
    groups: SVGGElement[],
    place: () => void,
    onTransform: (scale: number, tx: number, ty: number) => void,
  ): {
    cleanup(): void;
    fit(): void;
    reset(): void;
    centreOn(x: number, y: number): void;
    transform(): { scale: number; tx: number; ty: number };
    setTransform(scale: number, tx: number, ty: number): void;
  } {
    let scale = 1;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      scene.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);
      onTransform(scale, tx, ty);
    };

    /** The drawing area, however much of a layout box the host will admit to.
     *
     * The attributes are the fallback rather than the first answer, so that a
     * canvas resized after paint still frames against what is on screen. jsdom
     * has no layout at all, which is why there is a last resort after them. */
    const viewport = (): { width: number; height: number } => {
      const box = root.getBoundingClientRect();
      return {
        width: box.width || Number(root.getAttribute("width")) || root.clientWidth || 800,
        height: box.height || Number(root.getAttribute("height")) || root.clientHeight || 600,
      };
    };

    /**
     * Put the whole graph in the viewport, centred.
     *
     * A force layout sizes itself by link distance and repulsion, not by the
     * canvas: two hundred ligands settle across some five thousand units, and at
     * the identity transform every one of them is off the edge of a nine hundred
     * unit view - the network reads as an empty box. Framing is therefore part
     * of drawing it, not a control the reader has to find.
     *
     * It never zooms in past 1. Three ligands blown up to fill the canvas would
     * be three pixellated depictions, and the level of detail keys off this same
     * scale, so magnifying a small network would also change what it shows.
     */
    const fit = (): void => {
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (const node of nodes) {
        minX = Math.min(minX, node.x);
        minY = Math.min(minY, node.y);
        maxX = Math.max(maxX, node.x);
        maxY = Math.max(maxY, node.y);
      }

      scale = 1;
      tx = 0;
      ty = 0;
      if (!Number.isFinite(minX)) {
        apply(); // No nodes. An empty graph is centred on nothing.
        return;
      }

      // A node is a disc with a caption under it, so its position is not its
      // extent.
      const pad = NODE_RADIUS + FIT_MARGIN;
      const { width, height } = viewport();
      scale = Math.min(1, width / (maxX - minX + pad * 2), height / (maxY - minY + pad * 2));
      tx = width / 2 - ((minX + maxX) / 2) * scale;
      ty = height / 2 - ((minY + maxY) / 2) * scale;
      apply();
    };

    // The zoom maths stays here rather than moving to `boundedZoom`: it works in
    // SVG transform space, carries its own clamp, and zooms about the pointer,
    // which is not what a 3Dmol camera does. What is shared is the guard - the
    // reason a wheel reaches this at all.
    const zoomAt = (event: WheelEvent) => {
      const box = root.getBoundingClientRect();
      const px = event.clientX - box.left;
      const py = event.clientY - box.top;
      const factor = Math.min(5 / scale, Math.max(0.15 / scale, Math.exp(-event.deltaY * 0.002)));
      // Zoom about the pointer: the graph point under it must not move.
      tx = px - (px - tx) * factor;
      ty = py - (py - ty) * factor;
      scale *= factor;
      apply();
      // Clamped flat, so the graph is against a limit and the guard spends this
      // wheel on the page instead.
      return factor !== 1;
    };
    const guard = guardWheel(root as unknown as HTMLElement, {
      onZoom: zoomAt,
      hint: "Click the graph or hold Ctrl to zoom",
    });

    // Deliberately no `setPointerCapture` here, unlike the node drag below. A
    // capture on the root retargets the subsequent `click` to the root as well,
    // which would swallow every edge selection - the one interaction that
    // matters most. Panning therefore ends when the pointer leaves the canvas,
    // which is a much smaller price.
    let panning: { x: number; y: number } | null = null;
    const onDown = (event: PointerEvent) => {
      panning = { x: event.clientX - tx, y: event.clientY - ty };
    };
    const onMove = (event: PointerEvent) => {
      if (!panning) return;
      tx = event.clientX - panning.x;
      ty = event.clientY - panning.y;
      apply();
    };
    const onUp = () => {
      panning = null;
    };
    root.addEventListener("pointerdown", onDown);
    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerup", onUp);
    root.addEventListener("pointercancel", onUp);
    root.addEventListener("pointerleave", onUp);

    groups.forEach((group, i) => {
      let dragging: { x: number; y: number } | null = null;
      group.addEventListener("pointerdown", (event: PointerEvent) => {
        event.stopPropagation();
        dragging = { x: event.clientX - nodes[i].x * scale, y: event.clientY - nodes[i].y * scale };
        group.setPointerCapture(event.pointerId);
      });
      group.addEventListener("pointermove", (event: PointerEvent) => {
        if (!dragging) return;
        nodes[i].x = nodes[i].fx = (event.clientX - dragging.x) / scale;
        nodes[i].y = nodes[i].fy = (event.clientY - dragging.y) / scale;
        place();
      });
      const release = () => {
        dragging = null;
      };
      group.addEventListener("pointerup", release);
      group.addEventListener("pointercancel", release);
    });

    return {
      fit,

      // Back to the view it opened on, which is the framed one. An identity
      // transform would be "reset" only in the sense that a blank canvas is.
      reset: fit,

      /** Bring a graph point to the middle, zooming in enough to read it. */
      centreOn(x: number, y: number) {
        const { width, height } = viewport();
        scale = Math.max(scale, FOCUS_SCALE);
        tx = width / 2 - x * scale;
        ty = height / 2 - y * scale;
        apply();
      },

      transform: () => ({ scale, tx, ty }),

      // Deliberately unclamped, unlike the wheel. It is not a gesture: it is a
      // camera being put back exactly where it was, and a limit applied here
      // would quietly move it.
      setTransform(nextScale: number, nextTx: number, nextTy: number) {
        scale = nextScale;
        tx = nextTx;
        ty = nextTy;
        apply();
      },
      cleanup() {
        guard.cleanup();
        root.removeEventListener("pointerdown", onDown);
        root.removeEventListener("pointermove", onMove);
        root.removeEventListener("pointerup", onUp);
        root.removeEventListener("pointercancel", onUp);
        root.removeEventListener("pointerleave", onUp);
      },
    };
  }
}

// --- layouts ---------------------------------------------------------------

/**
 * Give every node a starting position.
 *
 * Circular and Radial are the answer; for Force-directed it is the seed. Either
 * way it is deterministic, which is what makes the picture the same on every
 * reload - d3's own phyllotaxis seeding is fine but ours is one line and lets
 * the force layout converge from something already spread out.
 */
function seedPositions(nodes: NetNode[], width: number, height: number, layout: Layout, edges: NetEdge[]): void {
  const cx = width / 2;
  const cy = height / 2;
  const ring = (subset: NetNode[], radius: number) => {
    subset.forEach((node, i) => {
      const angle = (2 * Math.PI * i) / Math.max(1, subset.length) - Math.PI / 2;
      node.x = cx + radius * Math.cos(angle);
      node.y = cy + radius * Math.sin(angle);
      node.fx = layout === "Force-directed" ? undefined : node.x;
      node.fy = layout === "Force-directed" ? undefined : node.y;
    });
  };

  if (layout === "Radial" && nodes.length) {
    // Breadth-first rings from the best-connected ligand - the shape a hub-and-
    // spoke network actually has, which a circle hides.
    const neighbours = new Map<string, string[]>(nodes.map((n) => [n["gufe-key"], []]));
    for (const edge of edges) {
      neighbours.get(edge.from["gufe-key"])!.push(edge.to["gufe-key"]);
      neighbours.get(edge.to["gufe-key"])!.push(edge.from["gufe-key"]);
    }
    const byKey = new Map(nodes.map((n) => [n["gufe-key"], n]));
    const start = nodes.reduce((best, n) =>
      neighbours.get(n["gufe-key"])!.length > neighbours.get(best["gufe-key"])!.length ? n : best,
    );

    const seen = new Set([start["gufe-key"]]);
    let level = [start["gufe-key"]];
    let depth = 0;
    const step = Math.min(width, height) * 0.18;
    while (level.length) {
      ring(
        level.map((key) => byKey.get(key)!),
        depth === 0 ? 0 : depth * step + 40,
      );
      const next: string[] = [];
      for (const id of level) {
        for (const other of neighbours.get(id)!) {
          if (!seen.has(other)) {
            seen.add(other);
            next.push(other);
          }
        }
      }
      level = next;
      depth++;
    }
    // Anything unreachable from the hub still needs somewhere to be.
    ring(nodes.filter((n) => !seen.has(n["gufe-key"])), Math.min(width, height) * 0.45);
    return;
  }

  ring(nodes, Math.min(width, height) * 0.34);
}

/**
 * Relax the seeded positions with d3's force simulation, in place.
 *
 * Resolves `false` when d3 is unreachable, which is the offline case the
 * caller turns into the circular layout plus a banner rather than an error.
 */
async function relax(nodes: NetNode[], edges: NetEdge[], width: number, height: number): Promise<boolean> {
  let d3: D3ForceModule;
  try {
    d3 = (await loadD3()) as D3ForceModule;
    if (typeof d3?.forceSimulation !== "function") return false;
  } catch {
    return false;
  }

  // d3-force rewrites link endpoints in place, so it gets its own objects.
  const links: D3Link[] = edges.map((edge) => ({ source: edge.from["gufe-key"], target: edge.to["gufe-key"], score: edge.score }));
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((node: NetNode) => node["gufe-key"])
        .distance((link: D3Link) => FORCE.linkBaseDistance + (1 - (link.score ?? 0.5)) * FORCE.linkScoreBonus)
        .strength(FORCE.linkStrength),
    )
    .force(
      "charge",
      d3
        .forceManyBody()
        .strength(FORCE.chargeStrength)
        .distanceMin(FORCE.chargeDistanceMin)
        .distanceMax(FORCE.chargeDistanceMax),
    )
    .force("center", d3.forceCenter(width / 2, height / 2).strength(FORCE.centerStrength))
    .force("collision", d3.forceCollide(NODE_RADIUS + FORCE.collisionPadding).iterations(FORCE.collisionIterations))
    .force("x", d3.forceX(width / 2).strength(FORCE.drift))
    .force("y", d3.forceY(height / 2).strength(FORCE.drift))
    .stop();

  const ticks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
  for (let i = 0; i < ticks * FORCE.tickMultiplier; i++) simulation.tick();
  return true;
}

defineElement("gufe-ligand-network", GufeLigandNetwork);
