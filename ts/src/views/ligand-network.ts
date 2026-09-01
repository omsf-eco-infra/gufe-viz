/**
 * `<gufe-ligand-network>` - the network graph, and a detail pane driven by it.
 *
 * This file is drawing code and nothing else. Python hands over the ligands in
 * the payload's registry and the mappings as edges that name them by gufe key,
 * so nothing here decodes a structure format: no atomic-number tables, no
 * conformer blobs, no GraphML. Resolving a key gives back a whole
 * `SmallMoleculeComponentViz` - which is what lets the detail pane draw the two
 * molecules of the selected mapping without a second shape to unpack, and a
 * clicked ligand by handing that same object straight to the ligand view.
 *
 * Both halves of the graph are clickable and the pane holds one at a time: an
 * edge opens `<gufe-atom-mapping>`, a node opens `<gufe-small-molecule>`. Which
 * is open is the `Selection` below, and it is saved with the view.
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
  orientMenuPanel,
  SELECT_CSS,
  splitter,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, seededViewState, type ViewHandle } from "../shared/element.js";
import { choice, flag, num, text as textSetting, type Setting } from "../shared/settings.js";
import { exportBlock, MULTI_SELECT_HINT } from "../shared/selection.js";
import { svg } from "../shared/svg.js";
import { resetControl } from "../shared/interact.js";
import { extentOf, sceneCamera, type Camera } from "../shared/camera.js";
import { withoutLayout } from "../shared/layout.js";
import { loadD3, loadRDKit, type RDKitModule } from "../shared/engines.js";
import { DEPICT_STYLE, rgbTriple } from "../shared/depict-style.js";
import { depictSVG } from "../shared/sdf.js";
import { createMatcher, smartsBox, type MatchOutcome } from "../shared/smarts.js";
import { FONT, MENU_LIST, MENU_PANEL, TOOLBAR } from "../shared/style.js";
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
// what is open in the detail pane. All three are about the network on screen rather than
// about how someone likes to read networks, which is the line `settings.ts`
// draws and the reason these travel separately.
//
// The positions are here because they are the expensive, unrepeatable half. A
// force layout converges against the canvas it was given, so the same network
// laid out again in a window of a different size is a different picture - and
// any node the reader dragged is a decision no layout would reproduce at all.

/**
 * What the detail pane is showing.
 *
 * Two things can be open in it and only ever one at a time: the mapping an edge
 * carries, or a ligand on its own. Which one is a discriminated pair rather than
 * two indices, because "an edge is open and so is a ligand" is not a state this
 * view has, and a shape that can express it is a shape someone has to check.
 */
export type Selection = { kind: SelectionKind; index: number } | null;

/** Whether an index into this view's selection means an edge or a ligand. */
export type SelectionKind = "edge" | "ligand";

/** What `<gufe-ligand-network>` saves, and what it will take back. */
export interface NetworkViewState {
  /** Every node's position, in the order the payload lists them. */
  nodes: [number, number][];
  /** The canvas transform: zoom, then pan. */
  scale: number;
  tx: number;
  ty: number;
  /** The open edge or ligand, or -1 for none. */
  selected: number;
  /** Which of the two `selected` counts. Absent in a state saved before ligands could be opened, and read as an edge. */
  selectedKind?: SelectionKind;
}

/** The key this view's state travels under. See `seededViewState`. */
const VIEW_STATE_KEY = "ligand-network";

/** What the detail pane says when nothing is open, and it names both halves. */
const SELECT_HINT = "Click a ligand or an edge to see it.";

/** An edge as the mapping it is, without the two endpoints and the index this view added. */
function mappingOf(edge: NetEdge): LigandAtomMappingViz {
  const { index: _index, from: _from, to: _to, ...mapping } = edge;
  return mapping;
}

/**
 * A node as the payload the standalone ligand view takes.
 *
 * A `NetNode` is a whole `SmallMoleculeComponentViz` with a layout stapled to
 * it, and the layout is this view's business rather than the ligand's - so it
 * comes off before the payload is handed on. Which fields those are is
 * `withoutLayout`'s to know: the force simulation writes more of them than this
 * file does.
 */
function ligandPayloadFor(node: NetNode): SmallMoleculeComponentViz {
  return withoutLayout(node);
}

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
  // An older state names no kind, and everything an older state could have had
  // open was an edge.
  const selectedKind: SelectionKind = state.selectedKind === "ligand" ? "ligand" : "edge";
  return { nodes: state.nodes, scale: state.scale, tx: state.tx, ty: state.ty, selected, selectedKind };
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

// Dimensions came from the framejs prototype and are kept the same, so the two
// pictures are the same picture. The force constants no longer are: see
// `NODE_SPACING` for what was wrong with them and why they had to move.
/** How much of the width the graph gets, before anyone drags the divider. */
const CANVAS_SHARE = { initial: 0.58, min: 0.25, max: 0.8 };

const NODE_RADIUS = 38;
const DEPICT_SIZE = 200;
const DEPICT_PADDING = 4;
const LABEL_MAX_CHARS = 14;
const INITIALS_SIZE = 18;

/**
 * The node's name: its size under a node, how far under, the least it shrinks
 * to when it sits inside one instead, and the width it has to fit there.
 *
 * `below` only applies to a depicted node, and is a baseline: most of the 12 is
 * the font's ascent, so the name's own white plate lands just clear of the
 * disc rather than merged into it. Only just, though - zoomed in the name
 * belongs to the picture above it, and a wider gap reads as though it belonged
 * to nothing.
 */
const CAPTION = {
  fontSize: 11,
  below: NODE_RADIUS + 12,
  minFontSize: 7,
  insideWidth: (NODE_RADIUS - 6) * 2,
};

/**
 * The white ground a depicted node stands on.
 *
 * A disc of exactly `NODE_RADIUS`, which is the disc the zooms below draw, so
 * crossing the threshold changes what is inside a node and not how big it is.
 * It is there because RDKit draws for paper: black bonds, and element letters
 * from a palette picked against white. Without it a structure over a dark
 * canvas is a structure nobody can read, and over a light one it is a structure
 * with the network's own edges running through it.
 *
 * The name below the disc gets its own plate rather than a bigger disc, for the
 * same reason the disc is not simply grown: the ring of white a name needs is
 * the shape of the name, and a disc wide enough to hold one would swallow the
 * edges arriving at the node.
 */
const PLATE = { captionPadX: 4, captionPadY: 1, captionRadius: 3 };
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

/** The disc RDKit draws behind a matched atom, in its own units. */
const MATCH_ATOM_RADIUS = 0.4;

/** The match colour as RDKit wants it, converted once. */
const MATCH_RGB = rgbTriple(T.netMatchAtom);

/** The selection halo, sized from the edge or the node it sits under. */
const HALO = { padding: 4, opacity: 0.95 };

/** How far a pointer may wander during a node drag and still count as a click, in pixels. */
const CLICK_SLOP = 3;

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
 * so out here a 10px score is 4px on screen: it is not read, it is just texture
 * over the lines whose shape is the whole reason to be this far out.
 *
 * Structures are the expensive part - one RDKit call and an SVG subtree per
 * node - so they are built lazily, only for nodes actually on screen, and only
 * once each.
 *
 * `structures` starts below 1, which is the zoom a network small enough to
 * frame itself opens at: a handful of ligands shows what they are without being
 * zoomed into first, and a bigger one still frames itself well under this and
 * opens on its shape. The cost of moving it down is that more nodes are on
 * screen when structures switch on, and each of those is a depiction - which
 * is what the cull and the once-each rule above are for.
 */
export const ZOOM_LEVELS: readonly DetailLevel[] = [
  { id: "structures", from: 0.55, disc: false, structure: true, name: "below", initials: false, edgeScores: true },
  { id: "names", from: 0.35, disc: true, structure: false, name: "inside", initials: false, edgeScores: true },
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

/**
 * How much room a node needs around it, centre to centre.
 *
 * Both discs, plus air between them, and the number the distances below are
 * measured against. That they are measured against anything is the point. The
 * two that decide how a graph packs - how far apart collision holds a pair, and
 * how far apart a link wants one - were written in unrelated units: a link
 * asked for 18 to 28 while collision enforced 100, so the link force was a
 * constant squeeze that every pair resisted only by sitting exactly on the
 * collision boundary. Two hundred ligands came out with every gap in the graph
 * the same 100 units, which is a picture with no structure in it, and with the
 * score that is meant to draw a well-mapped pair closer making no difference at
 * all, because its whole range was underneath the boundary.
 */
const NODE_SPACING = 2 * NODE_RADIUS + 68;

const FORCE = {
  /** What a perfectly scored mapping asks for. A poor one asks for the bonus on top. */
  linkBaseDistance: NODE_SPACING,
  linkScoreBonus: 90,
  linkStrength: 0.45,
  // Repulsion is local rather than the width of the graph. Reaching further
  // does not move neighbours apart - collision already decides that - it only
  // inflates the whole layout, and a graph spread over thousands of units is
  // one that is both too small to read as a whole and too crowded to read up
  // close.
  chargeStrength: -900,
  chargeDistanceMin: 20,
  chargeDistanceMax: 900,
  centerStrength: 0.08,
  /** Holds a pair exactly `NODE_SPACING` apart, so links settle at their distance rather than against this. */
  collisionPadding: NODE_SPACING / 2 - NODE_RADIUS,
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

/**
 * An element's fill, from either place SVG lets it be written.
 *
 * RDKit writes the one that matters here - the backing rect's - into `style`,
 * and its own documentation writes it as the presentation attribute. Reading
 * only the attribute is what left a white square drawn over the node's plate.
 */
const fillOf = (element: Element): string => {
  const attribute = element.getAttribute("fill");
  const declared = attribute ?? /(?:^|;)\s*fill\s*:\s*([^;]+)/i.exec(element.getAttribute("style") ?? "")?.[1] ?? "";
  return declared.toLowerCase().replace(/\s+/g, "");
};

const WHITE = new Set(["#fff", "#ffffff", "white", "rgb(255,255,255)"]);
const isWhite = (element: Element): boolean => WHITE.has(fillOf(element));

interface DetailParts {
  nodes: NetNode[];
  circles: SVGCircleElement[];
  /** The white disc under a structure, and the plate under the name below it. */
  plates: SVGCircleElement[];
  captionPlates: SVGRectElement[];
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
 * A node showing a structure loses the styled disc - its fill and its border
 * both say things the structure says better - and gains the white one behind
 * it that `PLATE` describes. A node without a structure keeps the styled disc,
 * and its name moves inside it, where there is nothing else to show.
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
        atoms && { atoms, color: MATCH_RGB, radius: MATCH_ATOM_RADIUS },
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
      // RDKit paints an opaque white backing rect, square and wider than the
      // node it goes in. Dropping it leaves the white to `PLATE`'s disc, which
      // is round and does not overhang the node it belongs to. The colour is in
      // `style` on the builds this has met and in `fill` in RDKit's own
      // documentation, so both are read: a rect that survives this is a white
      // square with a circle behind it, which is the corner of the node
      // sticking out and is exactly what the plate exists to avoid.
      if (tag === "rect" && isWhite(child as Element)) continue;
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
   * Fit the white plate to the name it sits behind, once per node.
   *
   * Measured rather than computed: names are truncated to a character count,
   * not to a width, so the plate under a long one and the plate under a short
   * one are different sizes. `getBBox` throws where there is no layout and
   * returns zeros before there has been one; either way the plate stays hidden
   * and the next `apply` measures again, so the worst case is the name drawn
   * bare, which is what it was drawn as before.
   */
  const platedAt: number[] = [];
  const plateCaption = (index: number): void => {
    const plate = parts.captionPlates[index];
    if (platedAt[index] === CAPTION.below) {
      plate.setAttribute("display", "inline");
      return;
    }
    let box: { x: number; y: number; width: number; height: number } | null = null;
    try {
      box = parts.captions[index].getBBox();
    } catch {
      box = null;
    }
    if (!box?.width) {
      plate.setAttribute("display", "none");
      return;
    }
    plate.setAttribute("x", String(box.x - PLATE.captionPadX));
    plate.setAttribute("y", String(box.y - PLATE.captionPadY));
    plate.setAttribute("width", String(box.width + PLATE.captionPadX * 2));
    plate.setAttribute("height", String(box.height + PLATE.captionPadY * 2));
    plate.setAttribute("display", "inline");
    platedAt[index] = CAPTION.below;
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
    parts.plates[index].setAttribute("display", level.structure ? "inline" : "none");
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
    const below = level.name === "below";
    // Below the node the name is on the white plate, so it takes the ink that
    // reads against white in either theme rather than the one picked to sit
    // against the canvas.
    caption.setAttribute("fill", hit ? T.netMatchStroke : below ? T.netDepictCaption : T.netNodeCaption);
    caption.setAttribute("display", level.name === "none" ? "none" : "inline");
    if (!below) parts.captionPlates[index].setAttribute("display", "none");
    if (level.name === "none") return;
    const inside = level.name === "inside";
    caption.setAttribute("y", inside ? "0" : String(CAPTION.below));
    caption.setAttribute("dominant-baseline", inside ? "middle" : "auto");
    caption.setAttribute("font-size", String(inside ? insideSize(index, caption) : CAPTION.fontSize));
    if (below) plateCaption(index);
  };

  /**
   * The level the last `apply` put in force.
   *
   * Read again when a structure arrives, because RDKit answers a frame or two
   * late and the zoom may have left that level in the meantime. Drawing the
   * level the request was made at is how a node ended up wearing a structure
   * and a white disc on a canvas that had already zoomed out to bare shapes.
   */
  let current: DetailLevel | null = null;

  const apply = (scale: number, tx: number, ty: number): void => {
    const level = levelAt(scale);
    current = level;
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
        if (!RDKit || current !== level) return;
        for (const index of visible) {
          inject(RDKit, index);
          show(index, level);
        }
      })
      .catch(() => undefined);
  };

  return { apply, drawn: () => injected.size, forget };
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
  const scoreSetting = num("ligand-network.minScore", 0, 0, 1);
  const panel = el("div", MENU_PANEL);

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
  const smarts = smartsBox({
    placeholder: "Colour by SMARTS",
    label: "Colour the ligands matching this SMARTS pattern",
    remember: textSetting("ligand-network.smarts"),
    run: (pattern) => parts.match(pattern),
    describe: (outcome) => {
      const unread = outcome.unreadable ? `, ${outcome.unreadable} could not be read` : "";
      return `${outcome.matched.size} of ${parts.nodes.length} ligands match${unread}`;
    },
  });
  panel.appendChild(smarts.element);

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

  const list = el("div", MENU_LIST);
  panel.appendChild(list);

  // Under the list rather than over it: it explains what the rows do, and it is
  // the one thing here nobody can discover by looking. A plain click replaces
  // the selection, so without knowing this a reader can never have two ligands
  // selected - and Edges, which needs both ends of one, could never copy
  // anything at all.
  panel.appendChild(el("div", `font-size:${FONT.tiny};line-height:1.5;color:${T.textMuted2};`, MULTI_SELECT_HINT));

  // Which of the two the edge button copies is named "mappings" rather than
  // "edges": on this canvas an edge is a mapping, and the panel says so
  // everywhere else.
  const exporter = exportBlock({
    nodes: parts.nodes,
    edges: parts.edges,
    selected: parts.selected,
    words: {
      nodes: { button: "Ligands", plural: "ligands" },
      edges: { button: "Edges", plural: "mappings" },
    },
    setting: "ligand-network.exportAs",
  });
  panel.appendChild(exporter.box);

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
    exporter.clearNote();
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
  // starts filtering.
  smarts.apply();
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
          // Jumping to a ligand and opening it are one action: the list is
          // how you find one you cannot see, and finding it is not the point.
          focus: (index) => {
            focusNode(index);
            select({ kind: "ligand", index });
          },
          match: (pattern) => runMatch(pattern),
        }),
      {
        label: "Search, filter and select ligands",
        onToggle: () => draw(),
        remember: flag("ligand-network.menuOpen", false),
      },
    );
    // A flex column, so the panel inside it is stretched to the height of the
    // row rather than to the height of its own contents: a list of nine hundred
    // ligands has to scroll inside the menu, not run off the bottom of the view.
    menu.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;";
    split.appendChild(menu.panel);

    // Set once there is a graph to draw; a no-op until then, because a network
    // with no ligands returns before there is one and the divider is still
    // there to be dragged.
    let redraw = () => {};

    // `min-height` as well as `min-width`, because the split divides the height
    // instead when the view is taller than it is wide: without it a pane's
    // contents are its floor along whichever axis it is being divided on, and
    // the graph pushes the mapping off the bottom.
    const left = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`);
    const right = el("div", `min-width:0;min-height:0;display:flex;flex-direction:column;background:${T.appBg};`);
    split.appendChild(left);
    split.appendChild(
      splitter(split, left, right, {
        min: CANVAS_SHARE.min,
        max: CANVAS_SHARE.max,
        // How much of the width goes to the mapping rather than to the graph is
        // a preference about how someone reads a network, so it is kept.
        remember: num("ligand-network.canvasShare", CANVAS_SHARE.initial, CANVAS_SHARE.min, CANVAS_SHARE.max),
        // The graph is drawn to a size, so a divider that moved is a graph that
        // has to be drawn again - at the end of the drag rather than during it,
        // because on the far side of this is a force simulation.
        onResize: () => redraw(),
        onOrient: (stacked) => orientMenuPanel(menu.panel, stacked),
      }),
    );
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

    /**
     * What the detail pane is showing, and what the halos mark.
     *
     * It opens on the first mapping, because a network's edges are what it is
     * about and a pane that starts empty makes the reader guess what to click.
     * A restored one is taken only if it names something this network has: the
     * state may have been saved against a different payload.
     */
    let selection: Selection = edges.length ? { kind: "edge", index: 0 } : null;
    if (restored && restored.selected >= 0) {
      const kind: SelectionKind = restored.selectedKind ?? "edge";
      if (restored.selected < (kind === "ligand" ? nodes.length : edges.length)) {
        selection = { kind, index: restored.selected };
      }
    }
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
    /**
     * Which redraw is the current one.
     *
     * A force layout is relaxed off the main thread's next turn, so a second
     * redraw - a resize, the menu opening - can start while the first is still
     * waiting to paint. Both would then append a scene, and the canvas would end
     * up holding a stack of them: the reader sees the oldest, while the halos
     * and the selection are wired to the newest, which is off the bottom of a
     * pane that does not scroll. A paint whose era has passed is dropped.
     */
    let era = 0;

    /** Put something in the detail pane, and mark it on the canvas. */
    const showSelection = (): void => {
      if (!selection) {
        detail.message(edges.length ? SELECT_HINT : "Click a ligand to see it.");
        return;
      }
      if (selection.kind === "edge") detail.showMapping(edges[selection.index]);
      else detail.showLigand(nodes[selection.index]);
    };

    const select = (next: Selection) => {
      selection = next;
      showSelection();
      refreshHalos();
    };

    const draw = (next: Layout = layout): void => {
      // A redraw that is not a change of layout - the menu opening, the window
      // resizing - must not throw away where the reader has panned to. Only a
      // new layout is a new picture, and only a new picture is worth reframing.
      // Before the first paint there is no camera to keep, so that one frames.
      const keepCamera = painted && next === layout ? transformNow() : null;
      const mine = ++era;
      layout = next;
      stop?.();
      stop = null;
      // Every one of them, not the first: a paint that has already been dropped
      // may still have left one behind before the guard existed to stop it.
      canvas.querySelectorAll("svg").forEach((stale) => stale.remove());

      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height, layout, edges);
      if (restored) placeNodesAt(nodes, restored.nodes);

      const paint = () => {
        if (!alive || mine !== era) return;
        const scene = this.#paint(canvas, nodes, edges, width, height, select, rdkitReady, tip);
        refreshHalos = () => scene.setSelected(selection);
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
        if (!alive || mine !== era) return;
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

    redraw = () => draw();
    draw();
    showSelection();

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
        selected: selection ? selection.index : -1,
        selectedKind: selection ? selection.kind : "edge",
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
   * The right-hand pane: whatever is open, drawn by the view that owns it.
   *
   * An edge is a mapping, so it is `<gufe-atom-mapping>`; a node is one ligand,
   * so it is `<gufe-small-molecule>` - the same two elements a payload of either
   * kind renders through on its own. Neither picture is drawn twice, so the
   * in-context one and the standalone one cannot drift apart, and clicking
   * either half of the graph puts the reader in front of a view they have
   * already met.
   *
   * Deliberately nothing but that element, either way. Each carries its own
   * header and its own labels, so a pane title, a heading repeating the names
   * and a list of properties underneath were all saying a second time what the
   * picture below them already said.
   */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
  ): { showMapping(edge: NetEdge): void; showLigand(node: NetNode): void; message(text: string): void } {
    const body = el("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(body);

    const message = (text: string) => body.replaceChildren(centredMessage(text));

    /** One element, filling the pane, replacing whatever was open before it. */
    const open = (tag: string, payload: unknown): void => {
      const embedded = document.createElement(tag) as HTMLElement & { payload: unknown };
      embedded.style.cssText = "flex:1;min-width:0;min-height:0;display:flex;";
      embedded.payload = payload;
      body.replaceChildren(embedded);
    };

    return {
      // Fed the payload `mappingPayloadFor` cuts loose from the network, with
      // this view's own bookkeeping off it first: an edge carries its index and
      // both endpoints resolved, and a payload handed on is a payload someone
      // may validate.
      showMapping: (edge) => open("gufe-atom-mapping", mappingPayloadFor(mappingOf(edge), registry)),
      showLigand: (node) => open("gufe-small-molecule", ligandPayloadFor(node)),
      message,
    };
  }

  /** Build the SVG for the current node positions. Returns the handles the
   * caller needs afterwards: selection, depictions, and teardown. */
  #paint(
    canvas: HTMLDivElement,
    nodes: NetNode[],
    edges: NetEdge[],
    width: number,
    height: number,
    onSelect: (selection: Selection) => void,
    rdkitReady: Promise<RDKitModule | null>,
    tip: ReturnType<typeof hoverTooltip>,
  ): {
    setSelected(selection: Selection): void;
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
        onSelect({ kind: "edge", index: edge.index });
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
    const plates: SVGCircleElement[] = [];
    const captionPlates: SVGRectElement[] = [];
    const nodeHalos: SVGCircleElement[] = [];
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
            `<div style="margin-top:3px;font-size:${FONT.tiny};color:${T.textMuted2};overflow-wrap:anywhere;">${esc(node["gufe-key"])}</div>` +
            `<div style="margin-top:4px;font-size:${FONT.tiny};color:${T.textMuted2};">Click to see the ligand</div>`,
          event.offsetX,
          event.offsetY,
        );
      });
      group.addEventListener("mouseleave", () => tip.hide());

      // The ring behind everything else, rather than the disc restyled: at the
      // zoom where a node draws its structure it has no disc left to restyle,
      // and a selected ligand has to be findable at every zoom.
      const nodeHalo = svg("circle", {
        class: "gufe-node-halo",
        r: NODE_RADIUS + HALO.padding,
        fill: "none",
        stroke: T.netHaloColor,
        "stroke-width": HALO.padding * 2,
        opacity: 0,
        "pointer-events": "none",
      }) as SVGCircleElement;
      group.appendChild(nodeHalo);
      nodeHalos.push(nodeHalo);

      const circle = svg("circle", {
        class: "gufe-node-disc",
        r: NODE_RADIUS,
        fill: T.netNodeFill,
        stroke: T.netNodeStroke,
        "stroke-width": 1.5,
        "pointer-events": "all",
      }) as SVGCircleElement;
      group.appendChild(circle);
      circles.push(circle);

      // Under the structure and over the styled disc, which is painted out at
      // the only level that shows either. See `PLATE`.
      const plate = svg("circle", {
        class: "gufe-node-plate",
        r: NODE_RADIUS,
        fill: T.netDepictBg,
        display: "none",
        "pointer-events": "none",
      }) as SVGCircleElement;
      group.appendChild(plate);
      plates.push(plate);

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

      // Sized by `plateCaption` once the name has been laid out, so it is
      // appended before the name and stays behind it.
      const captionPlate = svg("rect", {
        class: "gufe-node-caption-plate",
        rx: PLATE.captionRadius,
        fill: T.netDepictBg,
        display: "none",
        "pointer-events": "none",
      }) as SVGRectElement;
      captionPlates.push(captionPlate);
      group.appendChild(captionPlate);
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
      plates,
      captionPlates,
      matched: () => marks,
      captions,
      initials,
      depictionGroups,
      edgeLabels: labels,
      stage: root,
      rdkit: () => rdkitReady,
      viewport: () => ({ width, height }),
    });

    const view = this.#interact(root, scene, nodes, groups, place, detail.apply, (index) =>
      onSelect({ kind: "ligand", index }),
    );

    return {
      setSelected(selection: Selection) {
        const edge = selection?.kind === "edge" ? selection.index : -1;
        const ligand = selection?.kind === "ligand" ? selection.index : -1;
        halos.forEach((halo, i) => halo.setAttribute("opacity", i === edge ? String(HALO.opacity) : "0"));
        nodeHalos.forEach((halo, i) => halo.setAttribute("opacity", i === ligand ? String(HALO.opacity) : "0"));
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

  /**
   * Node drag and node click, over the shared camera.
   *
   * The camera - wheel zoom, background pan, framing - is `sceneCamera`, which
   * the alchemical network uses too. What stays here is what is about a ligand
   * rather than about a canvas: dragging one to a new position, and telling a
   * drag from a click. The click is here rather than with the rest of a node
   * because only this knows whether the pointer was dragging.
   */
  #interact(
    root: SVGSVGElement,
    scene: SVGGElement,
    nodes: NetNode[],
    groups: SVGGElement[],
    place: () => void,
    onTransform: (scale: number, tx: number, ty: number) => void,
    onClickNode: (index: number) => void,
  ): Camera {
    const view = sceneCamera(root, scene, {
      // A node is a disc with a caption under it, so its position is not its
      // extent.
      bounds: () => extentOf(nodes, NODE_RADIUS),
      margin: FIT_MARGIN,
      onTransform,
      hint: "Click the graph or hold Ctrl to zoom",
    });

    groups.forEach((group, i) => {
      let dragging: { x: number; y: number } | null = null;
      // A node is both a thing to drag and a thing to click, and the pointer
      // does not say which was meant. Anything that moved further than a hand
      // wobble was a drag, and the click that follows it is not a selection -
      // otherwise every reposition would also change what the pane is showing.
      let moved = false;
      group.addEventListener("pointerdown", (event: PointerEvent) => {
        event.stopPropagation();
        const { scale } = view.transform();
        dragging = { x: event.clientX - nodes[i].x * scale, y: event.clientY - nodes[i].y * scale };
        moved = false;
        group.setPointerCapture(event.pointerId);
      });
      group.addEventListener("pointermove", (event: PointerEvent) => {
        if (!dragging) return;
        // A second finger turns the press into a pinch, and a ligand that
        // follows one of the two fingers through a zoom is not what either
        // hand meant. The drag is abandoned rather than paused: the gesture
        // owns the canvas from here, and the node keeps where it had got to.
        if (view.gesturing()) {
          dragging = null;
          moved = true;
          return;
        }
        const { scale } = view.transform();
        const x = (event.clientX - dragging.x) / scale;
        const y = (event.clientY - dragging.y) / scale;
        if (Math.hypot(x - nodes[i].x, y - nodes[i].y) * scale > CLICK_SLOP) moved = true;
        nodes[i].x = nodes[i].fx = x;
        nodes[i].y = nodes[i].fy = y;
        place();
      });
      const release = () => {
        dragging = null;
      };
      group.addEventListener("pointerup", release);
      group.addEventListener("pointercancel", release);
      group.addEventListener("click", (event: MouseEvent) => {
        event.stopPropagation();
        if (!moved) onClickNode(i);
      });
    });

    return {
      ...view,
      /** Bring a ligand to the middle, zoomed in enough to read its structure. */
      centreOn: (x: number, y: number) => view.centreOn(x, y, FOCUS_SCALE),
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
