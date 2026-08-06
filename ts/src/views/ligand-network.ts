/**
 * `<gufe-ligand-network>` - the network graph, and a detail pane driven by it.
 *
 * This file is drawing code and nothing else. Python hands over SDF per ligand
 * and flat topology per mapping, so nothing here decodes a structure format:
 * no atomic-number tables, no conformer blobs, no GraphML.
 *
 * d3 is used for one thing: the force layout. Zoom, pan, drag, the colour ramp
 * and the SVG itself are plain DOM, so a network still draws when d3 cannot be
 * fetched - it falls back to the circular layout and says why.
 */

import {
  centredMessage,
  EM_DASH,
  el,
  errText,
  floatingWarning,
  headerStrip,
  SELECT_CSS,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { loadD3, loadRDKit, type RDKitModule } from "../shared/engines.js";
import { depictSVG, parseCounts } from "../shared/sdf.js";
import { T } from "../shared/theme.js";
import type {
  LigandAtomMappingViz,
  LigandNetworkEdgeViz,
  LigandNetworkNodeViz,
  LigandNetworkViz,
} from "../schema/types.js";

// --- just enough of d3-force to configure it -------------------------------
//
// d3 ships no types we can rely on here (it arrives as a runtime import, or
// pre-seeded), and every force setter returns the force, so one interface with
// the setters we use describes the whole surface.

interface D3Force {
  id(accessor: (node: NetNode) => string): D3Force;
  distance(value: number | ((link: NetEdge) => number)): D3Force;
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

interface D3ForceModule {
  forceSimulation(nodes: NetNode[]): D3Simulation;
  forceLink(links: NetEdge[]): D3Force;
  forceManyBody(): D3Force;
  forceCenter(x: number, y: number): D3Force;
  forceCollide(radius: number): D3Force;
  forceX(x: number): D3Force;
  forceY(y: number): D3Force;
}

// --- layout state ----------------------------------------------------------

/** A payload node with the coordinates the layout gives it. d3 mutates these. */
interface NetNode extends LigandNetworkNodeViz {
  x: number;
  y: number;
  /** Pinned position: set by the non-force layouts and by dragging. */
  fx?: number;
  fy?: number;
}

/** A payload edge with its endpoints resolved. d3-force replaces the ids. */
interface NetEdge extends LigandNetworkEdgeViz {
  index: number;
  from: NetNode;
  to: NetNode;
}

const LAYOUTS = ["Force-directed", "Circular", "Radial"] as const;
type Layout = (typeof LAYOUTS)[number];

const NODE_RADIUS = 34;
const DEPICT_SIZE = 200;
const EDGE_MIN_WIDTH = 1.5;
const EDGE_MAX_WIDTH = 6;
const HIT_WIDTH = 16;

const FORCE = {
  linkBaseDistance: 150,
  linkScoreBonus: 60,
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

const SVG_NS = "http://www.w3.org/2000/svg";

function svg<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | number> = {},
): SVGElementTagNameMap[K] {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, String(value));
  return node;
}

/** A native SVG tooltip - cheaper and more accessible than a floating div. */
function titled<E extends SVGElement>(node: E, text: string): E {
  const title = document.createElementNS(SVG_NS, "title");
  title.textContent = text;
  node.appendChild(title);
  return node;
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

/**
 * A node's label. gufe's own network fixtures have unnamed molecules, and a row
 * of blank circles is not a visualization - so fall back to the distinctive
 * tail of the gufe key rather than to nothing.
 */
function label(node: LigandNetworkNodeViz): string {
  if (node.name) return node.name;
  const tail = node.id.split("-").pop() ?? node.id;
  return tail.slice(0, 6);
}

const truncate = (text: string, max: number): string => (text.length > max ? `${text.slice(0, max - 1)}...` : text);

/**
 * The edge as the atom-mapping viewer wants it.
 *
 * This is the component-reuse seam. The payload keeps molecules in `nodes` and
 * the correspondence in `edges` so a forty-ligand network carries each SDF
 * once; this puts the two back together.
 *
 * What comes out is a **complete, schema-valid `LigandAtomMappingViz`** - the
 * `type` and `name` are here rather than being filled in by the caller, because
 * that is the whole claim: what the network view hands to `<gufe-atom-mapping>`
 * is byte-for-byte the kind of payload that element receives standalone. Same
 * component, standalone or embedded, with no second code path and no
 * translation step.
 */
export function mappingDataFor(edge: NetEdge): LigandAtomMappingViz {
  const nameA = label(edge.from);
  const nameB = label(edge.to);
  return {
    type: "LigandAtomMappingViz",
    name: nameA || nameB ? `${nameA} -> ${nameB}` : "",
    molA_sdf: edge.from.sdf,
    molB_sdf: edge.to.sdf,
    nameA,
    nameB,
    componentA_to_componentB: edge.componentA_to_componentB ?? {},
    annotations: edge.annotations ?? {},
  };
}

export class GufeLigandNetwork extends GufeElement<LigandNetworkViz> {
  protected override placeholder(): string {
    return "Waiting for a LigandNetwork payload...";
  }

  protected renderView(host: HTMLDivElement, payload: LigandNetworkViz): ViewHandle {
    const nodes: NetNode[] = (payload.nodes ?? []).map((n) => ({ ...n, x: 0, y: 0 }));
    const byId = new Map(nodes.map((n) => [n.id, n]));

    // An edge whose endpoints are not both in `nodes` cannot be drawn. JSON
    // Schema cannot express "source names a node that exists", so this is a
    // schema-valid payload the view has to handle: drop the edge, and say how
    // many were dropped rather than silently showing a smaller network.
    const edges: NetEdge[] = [];
    let dangling = 0;
    for (const edge of payload.edges ?? []) {
      const from = byId.get(edge.source);
      const to = byId.get(edge.target);
      if (!from || !to) {
        dangling++;
        continue;
      }
      edges.push({ ...edge, index: edges.length, from, to });
    }

    const bar = headerStrip(payload.name || "Ligand network", "LigandNetwork");
    bar.statsEl.appendChild(statChip("ligands", String(nodes.length)));
    bar.statsEl.appendChild(statChip("mappings", String(edges.length)));
    host.appendChild(bar);

    const split = el("div", "flex:1;display:flex;flex-direction:row;min-height:0;overflow:hidden;");
    host.appendChild(split);

    const left = el("div", `flex:1 1 58%;min-width:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`);
    const right = el("div", `flex:1 1 42%;min-width:0;display:flex;flex-direction:column;background:${T.appBg};`);
    split.appendChild(left);
    split.appendChild(el("div", `width:1px;flex-shrink:0;background:${T.splitBorder};`));
    split.appendChild(right);

    const canvas = el("div", `flex:1;position:relative;overflow:hidden;min-height:0;background:${T.netCanvasBg};`);
    left.appendChild(canvas);
    const toolbar = this.#toolbar((next) => draw(next));
    left.appendChild(toolbar.bar);

    const detail = this.#detailPane(right);

    if (!nodes.length) {
      canvas.appendChild(centredMessage("This network has no ligands."));
      detail.message("Nothing to show.");
      return {};
    }
    if (dangling) {
      floatingWarning(canvas, `${dangling} mapping${dangling === 1 ? "" : "s"} name a ligand this network does not contain`);
    }

    // Depictions are RDKit's job alone, so start the fetch now rather than
    // after the layout - the graph draws with initials and they fill in.
    const rdkitReady = loadRDKit().catch((e: unknown) => {
      console.warn("[gufe-viz] RDKit failed to load:", errText(e));
      return null;
    });

    let selected = edges.length ? 0 : -1;
    let stop: (() => void) | null = null;
    let layout: Layout = "Force-directed";
    let forceUnavailable = false;
    let alive = true;
    let refreshHalos = () => {};

    const select = (index: number) => {
      selected = index;
      detail.show(edges[index] ?? null);
      refreshHalos();
    };

    const draw = (next: Layout = layout): void => {
      layout = next;
      stop?.();
      stop = null;
      canvas.querySelector("svg")?.remove();

      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height, layout, edges);

      const paint = () => {
        if (!alive) return;
        const scene = this.#paint(canvas, nodes, edges, width, height, select);
        refreshHalos = () => scene.setSelected(selected);
        stop = scene.cleanup;
        refreshHalos();
        rdkitReady.then((RDKit) => RDKit && scene.depict(RDKit)).catch(() => undefined);
      };

      if (layout !== "Force-directed" || forceUnavailable) {
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
    detail.show(edges[selected] ?? null);

    return {
      onResize: () => draw(),
      cleanup: () => {
        alive = false;
        stop?.();
      },
    };
  }

  #toolbar(onLayout: (layout: Layout) => void): { bar: HTMLDivElement; picker: HTMLSelectElement } {
    const toolbar = el(
      "div",
      "display:flex;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 14px;flex-shrink:0;" +
        `background:${T.toolbarBg};border-top:1px solid ${T.toolbarBorder};`,
    );

    const legend = el("div", `display:flex;align-items:center;gap:6px;font-size:11px;color:${T.textMuted};`);
    legend.appendChild(el("span", "", "score"));
    legend.appendChild(
      el(
        "span",
        `width:40px;height:4px;border-radius:2px;background:linear-gradient(to right,${T.netEdgeRamp.join(",")});`,
      ),
    );
    legend.appendChild(el("span", "", "0 -> 1"));
    toolbar.appendChild(legend);

    toolbar.appendChild(el("label", `font-size:12px;margin-left:auto;color:${T.textMuted};`, "Layout"));
    const picker = el("select", SELECT_CSS);
    for (const name of LAYOUTS) {
      const option = el("option", "", name);
      option.value = name;
      picker.appendChild(option);
    }
    picker.onchange = () => onLayout(picker.value as Layout);
    toolbar.appendChild(picker);

    return { bar: toolbar, picker };
  }

  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #detailPane(host: HTMLDivElement): { show(edge: NetEdge | null): void; message(text: string): void } {
    const title = el(
      "div",
      `flex-shrink:0;padding:4px 10px;font-size:12px;font-weight:bold;color:${T.labelFg};background:${T.labelBg};`,
      "Selected mapping",
    );
    const body = el("div", "flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column;");
    host.appendChild(title);
    host.appendChild(body);

    const message = (text: string) => body.replaceChildren(centredMessage(text));

    const show = (edge: NetEdge | null) => {
      if (!edge) {
        message("Click an edge to see its mapping.");
        return;
      }
      const mapping = mappingDataFor(edge);
      body.replaceChildren();

      const heading = el(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${T.textPrimary};` +
          `border-bottom:1px solid ${T.toolbarBorder};`,
        `${mapping.nameA} -> ${mapping.nameB}`,
      );
      body.appendChild(heading);

      const pair = el("div", "display:flex;flex-direction:row;min-height:180px;");
      body.appendChild(pair);
      const boxes = [mapping.molA_sdf, mapping.molB_sdf].map((sdf, i) => {
        const pane = el("div", "flex:1 1 50%;min-width:0;display:flex;flex-direction:column;");
        pane.appendChild(
          el("div", `padding:4px 10px;font-size:11px;color:${T.textMuted2};`, i === 0 ? "A" : "B"),
        );
        const box = el(
          "div",
          "flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:6px;" +
            `background:${T.canvas2DBg};`,
        );
        box.appendChild(centredMessage("..."));
        pane.appendChild(box);
        pair.appendChild(pane);
        return { box, sdf };
      });

      const mapped = Object.keys(mapping.componentA_to_componentB ?? {}).length;
      const countsA = parseCounts(mapping.molA_sdf);
      const countsB = parseCounts(mapping.molB_sdf);
      const stats = el(
        "div",
        "display:flex;flex-wrap:wrap;gap:8px 16px;padding:10px 14px;font-size:11px;" +
          `color:${T.textMuted};border-top:1px solid ${T.toolbarBorder};`,
      );
      stats.appendChild(statChip("score", edge.score == null ? EM_DASH : edge.score.toFixed(3), scoreColor(edge.score)));
      stats.appendChild(statChip("mapped atoms", String(mapped)));
      stats.appendChild(statChip("atoms A", countsA ? String(countsA.atoms) : EM_DASH));
      stats.appendChild(statChip("atoms B", countsB ? String(countsB.atoms) : EM_DASH));
      body.appendChild(stats);

      const annotations = Object.entries(mapping.annotations ?? {}).filter(([key]) => key !== "score");
      if (annotations.length) {
        const list = el(
          "div",
          "padding:0 14px 12px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;" +
            `color:${T.textMuted2};`,
        );
        for (const [key, value] of annotations) {
          list.appendChild(el("div", "", `${key}: ${String(value)}`));
        }
        body.appendChild(list);
      }

      loadRDKit()
        .then((RDKit) => {
          for (const { box, sdf } of boxes) {
            const drawn = depictSVG(RDKit, sdf, DEPICT_SIZE);
            box.replaceChildren();
            if (drawn) {
              box.innerHTML = drawn;
              const el2 = box.querySelector("svg");
              el2?.removeAttribute("width");
              el2?.removeAttribute("height");
              el2?.setAttribute("style", "width:100%;height:100%;");
            } else {
              box.appendChild(centredMessage("Failed to parse molecule", true));
            }
          }
        })
        .catch((e: unknown) => {
          for (const { box } of boxes) box.replaceChildren(centredMessage(`RDKit failed to load: ${errText(e)}`, true));
        });
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
  ): { setSelected(index: number): void; depict(RDKit: RDKitModule): number; cleanup(): void } {
    const root = svg("svg", { width, height, style: "display:block;touch-action:none;" });
    const scene = svg("g");
    root.appendChild(scene);
    canvas.appendChild(root);

    const halos: SVGLineElement[] = [];
    const lines = svg("g");
    const hits = svg("g");
    const labels = svg("g", { "pointer-events": "none" });
    const nodeLayer = svg("g");
    scene.append(lines, hits, labels, nodeLayer);

    for (const edge of edges) {
      const colour = scoreColor(edge.score);
      const halo = svg("line", {
        stroke: T.netHaloColor,
        "stroke-width": EDGE_MIN_WIDTH + 12,
        "stroke-linecap": "round",
        opacity: 0,
        "pointer-events": "none",
      });
      const line = svg("line", {
        stroke: colour,
        "stroke-width": EDGE_MIN_WIDTH + (edge.score ?? 0.5) * (EDGE_MAX_WIDTH - EDGE_MIN_WIDTH),
        "stroke-opacity": 0.9,
        "pointer-events": "none",
      });
      const hit = titled(
        svg("line", { stroke: "transparent", "stroke-width": HIT_WIDTH, style: "cursor:pointer;" }),
        `${label(edge.from)} -> ${label(edge.to)}${edge.score == null ? "" : `\nscore ${edge.score.toFixed(3)}`}`,
      );
      hit.addEventListener("click", (event) => {
        event.stopPropagation();
        onSelect(edge.index);
      });
      halos.push(halo);
      lines.append(halo, line);
      hits.appendChild(hit);

      if (edge.score != null) {
        const text = svg("text", {
          "text-anchor": "middle",
          "dominant-baseline": "middle",
          "font-size": 10,
          "font-weight": 600,
          fill: T.netEdgeLabel,
        });
        text.textContent = edge.score.toFixed(2);
        labels.appendChild(text);
      } else {
        labels.appendChild(svg("text"));
      }
    }

    const depictionGroups: SVGGElement[] = [];
    const initials: SVGTextElement[] = [];
    const groups = nodes.map((node) => {
      const group = titled(svg("g", { style: "cursor:grab;" }), `${label(node)}\n${node.smiles ?? ""}\nid: ${node.id}`);
      group.appendChild(
        svg("circle", {
          r: NODE_RADIUS,
          fill: T.netNodeFill,
          stroke: T.netNodeStroke,
          "stroke-width": 1.5,
        }),
      );
      const depiction = svg("g", { "pointer-events": "none" });
      group.appendChild(depiction);
      depictionGroups.push(depiction);

      const initial = svg("text", {
        "text-anchor": "middle",
        "dominant-baseline": "middle",
        "font-size": 16,
        "font-weight": 700,
        fill: T.netInitials,
        "pointer-events": "none",
      });
      initial.textContent = label(node).slice(0, 2).toUpperCase();
      group.appendChild(initial);
      initials.push(initial);

      const caption = svg("text", {
        "text-anchor": "middle",
        y: NODE_RADIUS + 14,
        "font-size": 11,
        "font-weight": 600,
        fill: T.netNodeLabel,
        "pointer-events": "none",
      });
      caption.textContent = truncate(label(node), 16);
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
        const text = labels.children[i] as SVGTextElement;
        text.setAttribute("x", String((edge.from.x + edge.to.x) / 2));
        text.setAttribute("y", String((edge.from.y + edge.to.y) / 2 - 8));
      });
      nodes.forEach((node, i) => groups[i].setAttribute("transform", `translate(${node.x},${node.y})`));
    };
    place();

    const view = this.#interact(root, scene, nodes, groups, place);

    return {
      setSelected(index: number) {
        halos.forEach((halo, i) => halo.setAttribute("opacity", i === index ? "0.95" : "0"));
      },

      depict(RDKit: RDKitModule) {
        const scale = ((NODE_RADIUS - 4) * 2) / DEPICT_SIZE;
        const parser = new DOMParser();
        let injected = 0;

        nodes.forEach((node, i) => {
          const drawn = node.sdf && depictSVG(RDKit, node.sdf, DEPICT_SIZE);
          if (!drawn) return;
          const parsed = parser.parseFromString(drawn, "image/svg+xml").documentElement;
          if (!parsed || parsed.nodeName.toLowerCase() === "parsererror") return;

          const target = depictionGroups[i];
          target.setAttribute(
            "transform",
            `translate(${(-scale * DEPICT_SIZE) / 2},${(-scale * DEPICT_SIZE) / 2}) scale(${scale})`,
          );
          let appended = 0;
          for (const child of Array.from(parsed.childNodes)) {
            if (child.nodeType !== 1) continue;
            const tag = child.nodeName.toLowerCase();
            if (tag === "defs" || tag === "metadata" || tag === "title") continue;
            // RDKit paints an opaque white backing rect; dropping it lets the
            // node's own fill show through.
            if (tag === "rect") {
              const fill = ((child as Element).getAttribute("fill") ?? "").toLowerCase();
              if (fill === "#ffffff" || fill === "white" || fill === "rgb(255,255,255)") continue;
            }
            target.appendChild(document.importNode(child, true));
            appended++;
          }
          if (appended) {
            initials[i].setAttribute("display", "none");
            injected++;
          }
        });
        return injected;
      },

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
  ): { cleanup(): void } {
    let scale = 1;
    let tx = 0;
    let ty = 0;
    const apply = () => scene.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const box = root.getBoundingClientRect();
      const px = event.clientX - box.left;
      const py = event.clientY - box.top;
      const factor = Math.min(5 / scale, Math.max(0.15 / scale, Math.exp(-event.deltaY * 0.002)));
      // Zoom about the pointer: the graph point under it must not move.
      tx = px - (px - tx) * factor;
      ty = py - (py - ty) * factor;
      scale *= factor;
      apply();
    };
    root.addEventListener("wheel", onWheel, { passive: false });

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
      cleanup() {
        root.removeEventListener("wheel", onWheel);
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
    const neighbours = new Map<string, string[]>(nodes.map((n) => [n.id, []]));
    for (const edge of edges) {
      neighbours.get(edge.from.id)!.push(edge.to.id);
      neighbours.get(edge.to.id)!.push(edge.from.id);
    }
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const start = nodes.reduce((best, n) =>
      neighbours.get(n.id)!.length > neighbours.get(best.id)!.length ? n : best,
    );

    const seen = new Set([start.id]);
    let level = [start.id];
    let depth = 0;
    const step = Math.min(width, height) * 0.18;
    while (level.length) {
      ring(
        level.map((id) => byId.get(id)!),
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
    ring(nodes.filter((n) => !seen.has(n.id)), Math.min(width, height) * 0.45);
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
  const links: NetEdge[] = edges.map((edge) => ({ ...edge, source: edge.from.id, target: edge.to.id }));
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3
        .forceLink(links)
        .id((node: NetNode) => node.id)
        .distance((link: NetEdge) => FORCE.linkBaseDistance + (1 - (link.score ?? 0.5)) * FORCE.linkScoreBonus)
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
