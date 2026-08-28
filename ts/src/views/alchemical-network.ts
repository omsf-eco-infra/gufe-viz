/**
 * `<gufe-alchemical-network>` - chemical systems joined by transformations.
 *
 * This is the ligand network one level up, and the canvas draws a different
 * thing for a reason: a node here is a whole chemical system rather than a
 * single molecule, so there is no one structure to depict. A node is a labelled
 * box, and what the canvas is for is composition and topology - which systems
 * exist, what they are made of, and what maps onto what.
 *
 * The detail pane is where the structures are, and it draws none of them
 * itself. Every reference in the payload resolves to a complete payload object,
 * so a selected node is a `ChemicalSystemViz` and a selected edge is a
 * `TransformationViz` - which are exactly what `<gufe-chemical-system>` and
 * `<gufe-transformation>` take. The pane mounts one `<gufe-view>` and re-points
 * it, so selecting a system gets that view's component list and, through its
 * own nested dispatcher, the ligand depiction or the 3D protein; and selecting
 * a transformation gets the state diff and the atom mapping with all of its
 * modes. Nothing about a component or a mapping is drawn twice in this repo,
 * and this view cannot drift from the standalone one because it *is* the
 * standalone one.
 *
 * `systemPayloadFor` and `transformationPayloadFor` are what cut a node or an
 * edge loose into a payload that stands on its own, the way `mappingPayloadFor`
 * does one level further down.
 *
 * Like the ligand network, d3 is asked for a force layout and nothing else: the
 * SVG, the selection and the fallback circular layout are plain DOM, so the
 * graph still draws when d3 cannot be fetched.
 */

import {
  centredMessage,
  el,
  floatingWarning,
  headerStrip,
  splitter,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { loadD3 } from "../shared/engines.js";
import { num } from "../shared/settings.js";
import { svg, titled } from "../shared/svg.js";
import { FONT, PANE_LABEL, TOOLBAR } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookup, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import { systemPayloadFor } from "./chemical-system.js";
import { transformationPayloadFor } from "./transformation.js";
import type {
  AlchemicalNetworkViz,
  ChemicalSystemViz,
  ProtocolViz,
  TransformationViz,
} from "../schema/types.js";

// --- just enough of d3-force to configure it -------------------------------
//
// Deliberately not shared with the ligand-network view: the two configure
// different forces at different scales - box-shaped nodes here against
// depiction-sized discs there - and a shared wrapper would have to be
// parameterized by everything that differs, which is all of it.

interface D3Force {
  id(accessor: (node: GraphNode) => string): D3Force;
  distance(value: number): D3Force;
  strength(value: number): D3Force;
  iterations(value: number): D3Force;
}

interface D3Simulation {
  force(name: string, force: D3Force): D3Simulation;
  stop(): D3Simulation;
  tick(): D3Simulation;
  alphaMin(): number;
  alphaDecay(): number;
}

interface D3ForceModule {
  forceSimulation(nodes: GraphNode[]): D3Simulation;
  forceLink(links: { source: string; target: string }[]): D3Force;
  forceManyBody(): D3Force;
  forceCenter(x: number, y: number): D3Force;
  forceCollide(radius: number): D3Force;
}

/** A chemical system resolved out of the registry, with its layout position. */
interface GraphNode extends ChemicalSystemViz {
  x: number;
  y: number;
}

/**
 * An edge, which *is* a `TransformationViz` - there is no separate edge type -
 * with its two state keys resolved to the nodes they name.
 */
interface GraphEdge extends TransformationViz {
  index: number;
  from: GraphNode;
  to: GraphNode;
}

/** What a node is drawn in: one pair per composition the network contains. */
interface NodeColors {
  fill: string;
  stroke: string;
}

const NODE = { width: 148, height: 46, radius: 10 };
const FORCE = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2,
};

/** How much of the width the graph gets, before anyone drags the divider. */
const CANVAS_SHARE = { initial: 0.56, min: 0.25, max: 0.78 };

/** Breathing room between the outermost box and the edge of the canvas. */
const FIT_MARGIN = 24;

/** A node's label: its name, or a short form of its gufe key. */
const nodeLabel = entryLabel;

function truncate(text: string, limit: number): string {
  return text.length > limit ? `${text.slice(0, limit - 1)}...` : text;
}

/**
 * What a chemical system is made of, as a string two systems can be compared by.
 *
 * The labels are deliberately not part of it. A campaign calls the same protein
 * "protein" in one system and something else in the next, and what tells a
 * solvent leg from a complex leg is that one has a protein in it at all - so
 * this is the set of component *types*, sorted, which is stable against both
 * the labels and the order the components were written in.
 */
function compositionOf(system: ChemicalSystemViz, registry: RegistryIndex): string {
  const types = new Set<string>();
  for (const key of Object.values(system.components ?? {})) {
    const component = lookup(registry, key);
    if (!component) {
      types.add("missing");
      continue;
    }
    types.add(
      component.type === "UnknownComponentViz"
        ? component.gufe_type
        : component.type.replace(/(?:Component)?Viz$/, ""),
    );
  }
  return [...types].sort().join(" + ");
}

/**
 * Group the systems by what they are made of, and give each group a colour.
 *
 * The point is the picture a binding campaign makes: every mapping becomes two
 * transformations, a solvent leg and a complex leg, and the graph is two
 * components whose only difference is that one carries a protein. Uncoloured,
 * that reads as one graph that happens to be in two pieces.
 *
 * Nothing is coloured when there is only one composition, because there is
 * nothing to tell apart and a legend saying so is noise. Nothing is coloured
 * when there are more than the palette holds either: at that point the colours
 * have stopped being a distinction and started being decoration.
 */
function compositionGroups(
  nodes: readonly GraphNode[],
  registry: RegistryIndex,
): { colorOf(index: number): NodeColors; legend: [string, NodeColors][] } {
  const plain: NodeColors = { fill: T.cardBg, stroke: T.cardBorder };
  const signatures = nodes.map((node) => compositionOf(node, registry));
  const distinct = [...new Set(signatures)];
  if (distinct.length < 2 || distinct.length > T.netGroupFill.length) {
    return { colorOf: () => plain, legend: [] };
  }

  const colors = new Map<string, NodeColors>(
    distinct.map((signature, i) => [signature, { fill: T.netGroupFill[i], stroke: T.netGroupStroke[i] }]),
  );
  return {
    colorOf: (index) => colors.get(signatures[index]) ?? plain,
    legend: distinct.map((signature) => [signature, colors.get(signature)!]),
  };
}

/**
 * The transform that brings the whole graph inside the canvas.
 *
 * The force layout answers in its own coordinates and is happy to put a
 * twenty-system network well outside an eight-hundred-pixel box, at which point
 * the canvas is blank and nothing on the page says why. So the scene is scaled
 * to fit whatever came back.
 *
 * Never scaled *up*: a three-system network magnified to fill the pane is three
 * enormous boxes, and the size of a node is a decision `NODE` already made.
 */
function fitTransform(nodes: readonly GraphNode[], width: number, height: number): string {
  const xs = nodes.map((node) => node.x);
  const ys = nodes.map((node) => node.y);
  // Measured from the boxes rather than from their centres, so an outermost
  // node is inside the canvas along with its own width.
  const minX = Math.min(...xs) - NODE.width / 2;
  const maxX = Math.max(...xs) + NODE.width / 2;
  const minY = Math.min(...ys) - NODE.height / 2;
  const maxY = Math.max(...ys) + NODE.height / 2;

  const scale = Math.min(
    1,
    (width - 2 * FIT_MARGIN) / Math.max(1, maxX - minX),
    (height - 2 * FIT_MARGIN) / Math.max(1, maxY - minY),
  );
  const tx = (width - (maxX - minX) * scale) / 2 - minX * scale;
  const ty = (height - (maxY - minY) * scale) / 2 - minY * scale;
  return `translate(${tx.toFixed(2)},${ty.toFixed(2)}) scale(${scale.toFixed(4)})`;
}

/** Seed every node on a circle - deterministic, so reloads look the same. */
function seedPositions(nodes: GraphNode[], width: number, height: number): void {
  const radius = Math.max(90, Math.min(width, height) * 0.36);
  nodes.forEach((node, i) => {
    const angle = (2 * Math.PI * i) / Math.max(1, nodes.length) - Math.PI / 2;
    node.x = width / 2 + radius * Math.cos(angle);
    node.y = height / 2 + radius * Math.sin(angle);
  });
}

/**
 * Relax the seeded positions with d3, in place. Resolves `false` when d3 is
 * unreachable, which the caller turns into the circular layout and a banner.
 */
async function relax(nodes: GraphNode[], edges: GraphEdge[], width: number, height: number): Promise<boolean> {
  let d3: D3ForceModule;
  try {
    d3 = (await loadD3()) as D3ForceModule;
    if (typeof d3?.forceSimulation !== "function") return false;
  } catch {
    return false;
  }

  // d3-force rewrites link endpoints in place, so it gets its own objects.
  const links = edges.map((edge) => ({ source: edge.from["gufe-key"], target: edge.to["gufe-key"] }));
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((node: GraphNode) => node["gufe-key"])
        .distance(FORCE.linkDistance)
        .strength(FORCE.linkStrength),
    )
    .force("charge", d3.forceManyBody().strength(FORCE.chargeStrength))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide(FORCE.collisionRadius).iterations(FORCE.collisionIterations))
    .stop();

  // Run to completion and draw once, rather than animating a DOM write per node
  // per frame.
  const ticks = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()));
  for (let i = 0; i < ticks * FORCE.tickMultiplier; i++) simulation.tick();
  return true;
}

export class GufeAlchemicalNetwork extends GufeElement<AlchemicalNetworkViz> {
  protected override placeholder(): string {
    return "Waiting for an AlchemicalNetwork payload...";
  }

  protected renderView(host: HTMLDivElement, payload: AlchemicalNetworkViz): ViewHandle {
    // The nodes are gufe keys; the chemical systems live in the registry, once,
    // which is what lets forty systems share one protein without carrying the
    // PDB forty times.
    const registry = buildRegistry(payload);
    const nodes: GraphNode[] = [];
    let unresolved = 0;
    for (const key of payload.nodes ?? []) {
      const system = lookupOfType<ChemicalSystemViz>(registry, key, "ChemicalSystemViz");
      if (!system) {
        unresolved++;
        continue;
      }
      nodes.push({ ...system, x: 0, y: 0 });
    }
    const byId = new Map(nodes.map((node) => [node["gufe-key"], node]));

    // An edge whose endpoints are not both present cannot be drawn. The schema
    // cannot express "source names a node that exists", so a valid payload can
    // still say this: drop the edge and count it rather than showing a smaller
    // network with no explanation.
    const edges: GraphEdge[] = [];
    let dangling = 0;
    for (const edge of payload.edges ?? []) {
      const from = byId.get(edge.stateA);
      const to = byId.get(edge.stateB);
      if (!from || !to) {
        dangling++;
        continue;
      }
      edges.push({ ...edge, index: edges.length, from, to });
    }

    // Every transformation of a network usually names the same protocol, which
    // is why it is a registry entry rather than a field repeated per edge. A
    // Protocol has no name of its own, so its class name is what identifies it.
    const protocolName = (edge: TransformationViz): string => {
      const protocol = lookupOfType<ProtocolViz>(registry, edge.protocol, "ProtocolViz");
      return protocol?.gufe_type || protocol?.name || "";
    };
    const protocols = new Set(edges.map(protocolName).filter(Boolean));

    const bar = headerStrip(payload.name || "Alchemical network");
    bar.statsEl.appendChild(statChip("systems", String(nodes.length)));
    bar.statsEl.appendChild(statChip("transformations", String(edges.length)));
    if (protocols.size) bar.statsEl.appendChild(statChip("protocol", [...protocols].join(", ")));
    host.appendChild(bar);

    const groups = compositionGroups(nodes, registry);

    const split = el("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    host.appendChild(split);

    // Set once the graph has a draw function; a no-op until then, because an
    // empty network returns before there is one and the divider is still there
    // to be dragged.
    let redraw = () => {};

    const left = el("div", `min-width:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`);
    const right = el("div", `min-width:0;display:flex;flex-direction:column;background:${T.appBg};`);
    const canvas = el("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${T.netCanvasBg};`);
    left.appendChild(canvas);
    if (groups.legend.length) left.appendChild(this.#legend(groups.legend));

    split.appendChild(left);
    split.appendChild(
      splitter(split, left, right, {
        min: CANVAS_SHARE.min,
        max: CANVAS_SHARE.max,
        // How wide someone wants the structures is a preference about how they
        // read a network, not something about this network, so it is kept.
        remember: num("alchemical-network.canvasShare", CANVAS_SHARE.initial, CANVAS_SHARE.min, CANVAS_SHARE.max),
        // The graph is drawn to a size, so a divider that moved is a canvas
        // that has to be drawn again. Only at the end of the drag: on the far
        // side of this is a force simulation.
        onResize: () => redraw(),
      }),
    );
    split.appendChild(right);

    const detail = this.#detailPane(right, registry);

    if (!nodes.length) {
      canvas.appendChild(
        centredMessage(
          unresolved
            ? "None of this network's chemical systems are in its registry."
            : "This network has no chemical systems.",
        ),
      );
      detail.message("Nothing to show.");
      return { cleanup: () => detail.cleanup() };
    }
    if (unresolved) {
      floatingWarning(
        canvas,
        `${unresolved} chemical system${unresolved === 1 ? "" : "s"} named by this network are not in its registry`,
      );
    }
    if (dangling) {
      floatingWarning(
        canvas,
        `${dangling} transformation${dangling === 1 ? "" : "s"} name a system this network does not contain`,
      );
    }

    let alive = true;
    let forceUnavailable = false;
    let selected: { kind: "node" | "edge"; index: number } | null = null;
    let refreshSelection = () => {};

    const select = (kind: "node" | "edge", index: number): void => {
      selected = { kind, index };
      detail.show(kind === "node" ? nodes[index] : edges[index], kind);
      refreshSelection();
    };

    const draw = (): void => {
      canvas.querySelector("svg")?.remove();
      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height);

      const paint = () => {
        if (!alive) return;
        const scene = this.#paint(canvas, nodes, edges, width, height, groups.colorOf, select);
        refreshSelection = () => scene.setSelected(selected);
        refreshSelection();
      };

      if (forceUnavailable) {
        paint();
        return;
      }
      relax(nodes, edges, width, height).then((relaxed) => {
        if (!alive) return;
        if (!relaxed) {
          forceUnavailable = true;
          floatingWarning(canvas, "d3 could not be loaded - showing the circular layout instead");
        }
        paint();
      }, paint);
    };

    redraw = draw;
    draw();
    // Start on the first system rather than on an empty pane: half the width is
    // given to the detail, and "click something" is a poor use of it when there
    // is always something worth showing.
    select("node", 0);

    return {
      onResize: () => draw(),
      cleanup: () => {
        alive = false;
        detail.cleanup();
      },
    };
  }

  /** What each node colour means, under the canvas. */
  #legend(entries: readonly [string, NodeColors][]): HTMLDivElement {
    const bar = el("div", TOOLBAR.bottom);
    bar.appendChild(el("span", `font-size:${FONT.small};color:${T.textMuted};`, "systems made of"));
    for (const [signature, colors] of entries) {
      const item = el("div", "display:flex;align-items:center;gap:6px;min-width:0;");
      item.appendChild(
        el(
          "span",
          `width:12px;height:12px;border-radius:3px;flex-shrink:0;` +
            `background:${colors.fill};border:2px solid ${colors.stroke};`,
        ),
      );
      item.appendChild(
        el("span", `font-size:${FONT.small};color:${T.textPrimary};overflow-wrap:anywhere;`, signature),
      );
      bar.appendChild(item);
    }
    return bar;
  }

  /**
   * The right-hand pane: the selected system or transformation, drawn by the
   * view that already draws it.
   *
   * One `<gufe-view>`, re-pointed rather than rebuilt, which is the same
   * create/update/destroy contract the top level uses: the payload setter tears
   * the outgoing view down, so a protein's 3Dmol context is released before the
   * next selection asks for another one.
   */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
  ): {
    show(item: GraphNode | GraphEdge, kind: "node" | "edge"): void;
    message(text: string): void;
    cleanup(): void;
  } {
    host.appendChild(el("div", PANE_LABEL, "Selected"));
    const body = el("div", "flex:1;min-height:0;display:flex;flex-direction:column;");
    host.appendChild(body);

    const child = document.createElement("gufe-view") as HTMLElement & { payload: unknown; resize?(): void };
    child.style.cssText = "flex:1;min-width:0;min-height:0;";

    const message = (text: string) => body.replaceChildren(centredMessage(text));

    const show = (item: GraphNode | GraphEdge, kind: "node" | "edge") => {
      // The graph adds fields of its own to the payload's objects - a position
      // on a node, an index and two endpoints on an edge - and the schema
      // allows neither, so what is handed on is everything except those.
      let cut: ChemicalSystemViz | TransformationViz | null;
      if (kind === "node") {
        const { x: _x, y: _y, ...system } = item as GraphNode;
        cut = systemPayloadFor(system, registry);
      } else {
        const { index: _index, from: _from, to: _to, ...edge } = item as GraphEdge;
        cut = transformationPayloadFor(edge, registry);
      }
      if (!cut) {
        message("This transformation names two chemical systems, and its registry does not hold them.");
        return;
      }
      child.payload = cut;
      if (child.parentNode !== body) body.replaceChildren(child);
    };

    // Removing the nested view fires its own `disconnectedCallback`, which is
    // where whatever it mounted releases its viewers.
    return { show, message, cleanup: () => child.remove() };
  }

  /** Build the SVG for the current positions, and hand back the selection hook. */
  #paint(
    canvas: HTMLDivElement,
    nodes: GraphNode[],
    edges: GraphEdge[],
    width: number,
    height: number,
    colorOf: (index: number) => NodeColors,
    onSelect: (kind: "node" | "edge", index: number) => void,
  ): { setSelected(selection: { kind: "node" | "edge"; index: number } | null): void } {
    // Named, so the graph itself can be found among whatever the detail pane
    // has drawn beside it - the ligand-network view names its own the same way.
    const root = svg("svg", { class: "gufe-graph", width, height, style: "display:block;" });
    canvas.appendChild(root);

    // Everything hangs off one group, which carries the fit: the layout's own
    // coordinates are left alone, so what is drawn and where it is drawn stay
    // separate questions.
    const scene = svg("g", { transform: fitTransform(nodes, width, height) });
    root.appendChild(scene);
    const lineLayer = svg("g");
    const nodeLayer = svg("g");
    scene.append(lineLayer, nodeLayer);

    const lines: SVGLineElement[] = [];
    edges.forEach((edge, index) => {
      const line = svg("line", {
        x1: edge.from.x,
        y1: edge.from.y,
        x2: edge.to.x,
        y2: edge.to.y,
        stroke: T.netEdgeLine,
        "stroke-width": 2,
        "stroke-linecap": "round",
        style: "cursor:pointer;",
      });
      titled(line, edge.name || "transformation");
      line.addEventListener("click", () => onSelect("edge", index));
      lineLayer.appendChild(line);
      lines.push(line);

      // A wider, invisible line under the visible one, so an edge is clickable
      // without having to be thick.
      const hit = svg("line", {
        x1: edge.from.x,
        y1: edge.from.y,
        x2: edge.to.x,
        y2: edge.to.y,
        stroke: "transparent",
        "stroke-width": 16,
        style: "cursor:pointer;",
      });
      hit.addEventListener("click", () => onSelect("edge", index));
      lineLayer.appendChild(hit);
    });

    const boxes: SVGRectElement[] = [];
    // What each box goes back to when it stops being the selected one. Read off
    // the colours rather than recomputed, so there is one answer to what a node
    // is drawn in.
    const restingStroke: string[] = [];
    nodes.forEach((node, index) => {
      const colors = colorOf(index);
      const group = svg("g", { style: "cursor:pointer;" });
      const box = svg("rect", {
        x: node.x - NODE.width / 2,
        y: node.y - NODE.height / 2,
        width: NODE.width,
        height: NODE.height,
        rx: NODE.radius,
        fill: colors.fill,
        stroke: colors.stroke,
        "stroke-width": 2,
      });
      group.appendChild(box);
      boxes.push(box);
      restingStroke.push(colors.stroke);

      const label = svg("text", {
        x: node.x,
        y: node.y - 2,
        "text-anchor": "middle",
        fill: T.netNodeLabel,
        "font-size": 12,
        "font-weight": 700,
        "font-family": "ui-sans-serif,system-ui,sans-serif",
      });
      label.textContent = truncate(nodeLabel(node), 20);
      group.appendChild(label);

      const count = Object.keys(node.components ?? {}).length;
      const sub = svg("text", {
        x: node.x,
        y: node.y + 14,
        "text-anchor": "middle",
        fill: T.netInitials,
        "font-size": 10,
        "font-family": "ui-sans-serif,system-ui,sans-serif",
      });
      sub.textContent = `${count} component${count === 1 ? "" : "s"}`;
      group.appendChild(sub);

      titled(group, nodeLabel(node));
      group.addEventListener("click", () => onSelect("node", index));
      nodeLayer.appendChild(group);
    });

    return {
      setSelected(selection) {
        boxes.forEach((box, i) => {
          const active = selection?.kind === "node" && selection.index === i;
          box.setAttribute("stroke", active ? T.cardBorderActive : restingStroke[i]);
          box.setAttribute("stroke-width", active ? "3" : "2");
        });
        lines.forEach((line, i) => {
          const active = selection?.kind === "edge" && selection.index === i;
          line.setAttribute("stroke", active ? T.netHaloColor : T.netEdgeLine);
          line.setAttribute("stroke-width", active ? "4" : "2");
        });
      },
    };
  }
}

defineElement("gufe-alchemical-network", GufeAlchemicalNetwork);
