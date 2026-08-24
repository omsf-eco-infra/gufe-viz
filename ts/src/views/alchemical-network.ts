/**
 * `<gufe-alchemical-network>` - chemical systems joined by transformations.
 *
 * This is the ligand network one level up, and it draws a different thing for a
 * reason: the payload carries no structures at all, only names and component
 * summaries, because a network that inlined every system's SDF and PDB would be
 * enormous. So a node is a labelled box rather than a depiction, and what you
 * come here to read is composition and topology - which systems exist, what they
 * are made of, and what maps onto what.
 *
 * Like the ligand network, d3 is asked for a force layout and nothing else: the
 * SVG, the selection and the fallback circular layout are plain DOM, so the
 * graph still draws when d3 cannot be fetched.
 */

import { centredMessage, el, floatingWarning, headerStrip, statChip, typeBadge } from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { loadD3 } from "../shared/engines.js";
import { svg, titled } from "../shared/svg.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookup, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import type {
  AlchemicalNetworkViz,
  ChemicalSystemViz,
  ComponentViz,
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

const NODE = { width: 148, height: 46, radius: 10 };
const FORCE = {
  linkDistance: 220,
  linkStrength: 0.4,
  chargeStrength: -1200,
  collisionRadius: 110,
  collisionIterations: 3,
  tickMultiplier: 2,
};

/** A node's label: its name, or a short form of its gufe key. */
const nodeLabel = entryLabel;

function truncate(text: string, limit: number): string {
  return text.length > limit ? `${text.slice(0, limit - 1)}...` : text;
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

    const split = el("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    host.appendChild(split);

    const canvas = el("div", `flex:1 1 62%;min-width:0;position:relative;overflow:hidden;background:${T.netCanvasBg};`);
    split.appendChild(canvas);
    split.appendChild(el("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`));
    const right = el("div", `flex:1 1 38%;min-width:0;display:flex;flex-direction:column;background:${T.appBg};`);
    split.appendChild(right);

    const detail = this.#detailPane(right, registry, protocolName);

    if (!nodes.length) {
      canvas.appendChild(
        centredMessage(
          unresolved
            ? "None of this network's chemical systems are in its registry."
            : "This network has no chemical systems.",
        ),
      );
      detail.message("Nothing to show.");
      return {};
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
        const scene = this.#paint(canvas, nodes, edges, width, height, select);
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

    draw();
    // Start on the first system rather than on an empty pane: half the width is
    // given to the detail, and "click something" is a poor use of it when there
    // is always something worth showing.
    select("node", 0);

    return {
      onResize: () => draw(),
      cleanup: () => {
        alive = false;
      },
    };
  }

  /** The right-hand pane: what the selected system or transformation is. */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
    protocolName: (edge: TransformationViz) => string,
  ): {
    show(item: GraphNode | GraphEdge, kind: "node" | "edge"): void;
    message(text: string): void;
  } {
    host.appendChild(
      el(
        "div",
        `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
        "Selected",
      ),
    );
    const body = el("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    host.appendChild(body);

    const message = (text: string) => body.replaceChildren(centredMessage(text));

    const heading = (title: string, subtitle: string) => {
      const wrap = el(
        "div",
        `padding:10px 14px;border-bottom:1px solid ${T.toolbarBorder};display:flex;flex-direction:column;gap:4px;`,
      );
      wrap.appendChild(el("div", `font-size:13px;font-weight:600;color:${T.textPrimary};`, title));
      wrap.appendChild(el("div", `font-size:11px;color:${T.textMuted2};`, subtitle));
      return wrap;
    };

    const show = (item: GraphNode | GraphEdge, kind: "node" | "edge") => {
      body.replaceChildren();
      if (kind === "node") {
        const node = item as GraphNode;
        body.appendChild(heading(nodeLabel(node), "ChemicalSystem"));
        const list = el("div", "display:flex;flex-direction:column;gap:6px;padding:12px 14px;");
        const entries = Object.entries(node.components ?? {});
        for (const [label, key] of entries) {
          const component = lookup(registry, key) as ComponentViz | undefined;
          const row = el(
            "div",
            "display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;min-width:0;" +
              `background:${T.cardBg};border:1px solid ${T.cardBorder};`,
          );
          row.appendChild(el("span", `font-size:12px;font-weight:700;color:${T.textPrimary};`, label));
          row.appendChild(
            el(
              "span",
              `font-size:11px;color:${T.textMuted};overflow-wrap:anywhere;min-width:0;`,
              component ? component.name || "(unnamed)" : "(not in the registry)",
            ),
          );
          const badge = typeBadge(
            component
              ? component.type === "UnknownComponentViz"
                ? component.gufe_type
                : component.type.replace(/Viz$/, "")
              : "missing",
          );
          badge.style.marginLeft = "auto";
          row.appendChild(badge);
          list.appendChild(row);
        }
        if (!entries.length) {
          list.appendChild(el("div", `font-size:12px;color:${T.textMuted2};`, "This system lists no components."));
        }
        body.appendChild(list);
        body.appendChild(
          el(
            "div",
            `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${T.textMuted2};overflow-wrap:anywhere;`,
            node["gufe-key"],
          ),
        );
        return;
      }

      const edge = item as GraphEdge;
      body.appendChild(heading(edge.name || "Unnamed transformation", "Transformation"));
      const rows = el("div", "display:flex;flex-direction:column;gap:8px;padding:12px 14px;");
      for (const [label, value] of [
        ["State A", nodeLabel(edge.from)],
        ["State B", nodeLabel(edge.to)],
        ["Protocol", protocolName(edge) || "-"],
      ] as const) {
        const row = el("div", "display:flex;gap:10px;align-items:baseline;min-width:0;");
        row.appendChild(
          el(
            "span",
            `flex:0 0 76px;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${T.textMuted2};`,
            label,
          ),
        );
        row.appendChild(el("span", `flex:1;min-width:0;font-size:12px;color:${T.textPrimary};overflow-wrap:anywhere;`, value));
        rows.appendChild(row);
      }
      body.appendChild(rows);
      body.appendChild(
        el(
          "div",
          `padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:${T.textMuted2};overflow-wrap:anywhere;`,
          edge["gufe-key"],
        ),
      );
    };

    return { show, message };
  }

  /** Build the SVG for the current positions, and hand back the selection hook. */
  #paint(
    canvas: HTMLDivElement,
    nodes: GraphNode[],
    edges: GraphEdge[],
    width: number,
    height: number,
    onSelect: (kind: "node" | "edge", index: number) => void,
  ): { setSelected(selection: { kind: "node" | "edge"; index: number } | null): void } {
    const root = svg("svg", { width, height, style: "display:block;" });
    canvas.appendChild(root);

    const lineLayer = svg("g");
    const nodeLayer = svg("g");
    root.append(lineLayer, nodeLayer);

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
    nodes.forEach((node, index) => {
      const group = svg("g", { style: "cursor:pointer;" });
      const box = svg("rect", {
        x: node.x - NODE.width / 2,
        y: node.y - NODE.height / 2,
        width: NODE.width,
        height: NODE.height,
        rx: NODE.radius,
        fill: T.cardBg,
        stroke: T.cardBorder,
        "stroke-width": 2,
      });
      group.appendChild(box);
      boxes.push(box);

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
          box.setAttribute("stroke", active ? T.cardBorderActive : T.cardBorder);
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
