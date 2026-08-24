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
  centredMessage,
  el,
  errText,
  floatingWarning,
  headerStrip,
  SELECT_CSS,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { svg, titled } from "../shared/svg.js";
import { guardWheel, resetControl } from "../shared/interact.js";
import { loadD3, loadRDKit, type RDKitModule } from "../shared/engines.js";
import { depictSVG } from "../shared/sdf.js";
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

const NODE_RADIUS = 34;
const DEPICT_SIZE = 200;
const EDGE_MIN_WIDTH = 1.5;
const EDGE_MAX_WIDTH = 6;
const HIT_WIDTH = 16;

/**
 * Level of detail, keyed off the zoom.
 *
 * Zoomed out, the shape of the network is the thing worth seeing, and a caption
 * under every node buries it - a nine-hundred-ligand network is unreadable long
 * before it is slow. Zoomed in, the structures are what people navigate by:
 * project chemists know what a ligand looks like more reliably than what it is
 * called. So captions arrive first and depictions second.
 *
 * Depictions are also the expensive part - one RDKit call and an SVG subtree per
 * node - so they are built lazily, only for nodes actually on screen, and only
 * once each.
 */
const DETAIL = { captions: 0.5, depictions: 1.1 };

/** How far outside the viewport to keep depictions, so panning does not tear. */
const CULL_MARGIN = 200;

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
  captions: SVGTextElement[];
  initials: SVGTextElement[];
  depictionGroups: SVGGElement[];
  rdkit: () => Promise<RDKitModule | null>;
  viewport: () => { width: number; height: number };
}

/**
 * Show and hide per-node detail according to the zoom.
 *
 * Two things are gated. Captions are cheap and toggle wholesale. Depictions cost
 * an RDKit call and an SVG subtree each, so they are built at most once per node
 * and only for nodes currently on screen - which is what makes a network of
 * several hundred ligands draw at all, rather than paying for every depiction
 * before the first frame.
 */
function levelOfDetail(parts: DetailParts): {
  apply(scale: number, tx: number, ty: number): void;
  drawn(): number;
} {
  const injected = new Set<number>();
  let failed = new Set<number>();

  const inject = (RDKit: RDKitModule, index: number): void => {
    if (injected.has(index) || failed.has(index)) return;
    const node = parts.nodes[index];
    const drawn = node.sdf && depictSVG(RDKit, node.sdf, DEPICT_SIZE);
    if (!drawn) {
      failed.add(index);
      return;
    }
    const parsed = new DOMParser().parseFromString(drawn, "image/svg+xml").documentElement;
    if (!parsed || parsed.nodeName.toLowerCase() === "parsererror") {
      failed.add(index);
      return;
    }

    const size = ((NODE_RADIUS - 4) * 2) / DEPICT_SIZE;
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
    if (appended) injected.add(index);
    else failed.add(index);
  };

  const apply = (scale: number, tx: number, ty: number): void => {
    const wantCaptions = scale >= DETAIL.captions;
    for (const caption of parts.captions) {
      caption.setAttribute("display", wantCaptions ? "inline" : "none");
    }

    const wantDepictions = scale >= DETAIL.depictions;
    for (let i = 0; i < parts.nodes.length; i++) {
      const showing = wantDepictions && injected.has(i);
      parts.depictionGroups[i].setAttribute("display", showing ? "inline" : "none");
      parts.initials[i].setAttribute("display", showing ? "none" : "inline");
    }
    if (!wantDepictions) return;

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
          const showing = injected.has(index);
          parts.depictionGroups[index].setAttribute("display", showing ? "inline" : "none");
          parts.initials[index].setAttribute("display", showing ? "none" : "inline");
        }
      })
      .catch(() => undefined);
  };

  return { apply, drawn: () => injected.size };
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
    const toolbar = this.#toolbar(
      (next) => draw(next),
      () => resetView(),
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
    let resetView = () => {};

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
        const scene = this.#paint(canvas, nodes, edges, width, height, select, rdkitReady);
        refreshHalos = () => scene.setSelected(selected);
        resetView = scene.reset;
        stop = scene.cleanup;
        refreshHalos();
        // Draw the level of detail the opening zoom calls for. Everything else
        // arrives as the user zooms in.
        scene.setDetail(1, 0, 0);
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

  #toolbar(
    onLayout: (layout: Layout) => void,
    onReset: () => void,
  ): { bar: HTMLDivElement; picker: HTMLSelectElement } {
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
    toolbar.appendChild(resetControl(onReset, "Reset pan and zoom"));

    return { bar: toolbar, picker };
  }

  /** The right-hand pane: what the selected mapping is, in words and pictures. */
  #detailPane(
    host: HTMLDivElement,
    registry: RegistryIndex,
  ): { show(edge: NetEdge | null): void; message(text: string): void } {
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
      body.replaceChildren();

      const heading = el(
        "div",
        `padding:10px 14px;font-size:13px;font-weight:600;color:${T.textPrimary};` +
          `border-bottom:1px solid ${T.toolbarBorder};`,
        `${label(edge.from)} -> ${label(edge.to)}`,
      );
      body.appendChild(heading);

      // The same element the standalone mapping payload renders through, fed
      // the payload `mappingPayloadFor` cuts loose. There is no second drawing
      // path, so the in-context picture and the standalone one cannot drift.
      const mapping = mappingPayloadFor(edge, registry);
      const embedded = document.createElement("gufe-atom-mapping") as HTMLElement & { payload: unknown };
      embedded.style.cssText = "flex:1;min-width:0;min-height:220px;display:flex;";
      embedded.payload = mapping;
      body.appendChild(embedded);

      const annotations = Object.entries(edge.annotations ?? {}).filter(([key]) => key !== "score");
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
  ): {
    setSelected(index: number): void;
    setDetail(scale: number, tx: number, ty: number): void;
    depictionsDrawn(): number;
    reset(): void;
    cleanup(): void;
  } {
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
    const captions: SVGTextElement[] = [];
    const groups = nodes.map((node) => {
      const group = titled(svg("g", { style: "cursor:grab;" }), `${label(node)}\n${node.smiles ?? ""}\n${node["gufe-key"]}`);
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
        const text = labels.children[i] as SVGTextElement;
        text.setAttribute("x", String((edge.from.x + edge.to.x) / 2));
        text.setAttribute("y", String((edge.from.y + edge.to.y) / 2 - 8));
      });
      nodes.forEach((node, i) => groups[i].setAttribute("transform", `translate(${node.x},${node.y})`));
    };
    place();

    const detail = levelOfDetail({
      nodes,
      captions,
      initials,
      depictionGroups,
      rdkit: () => rdkitReady,
      viewport: () => ({ width, height }),
    });

    const view = this.#interact(root, scene, nodes, groups, place, detail.apply);

    return {
      setSelected(index: number) {
        halos.forEach((halo, i) => halo.setAttribute("opacity", i === index ? "0.95" : "0"));
      },

      setDetail: detail.apply,
      depictionsDrawn: () => detail.drawn(),
      reset: view.reset,
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
  ): { cleanup(): void; reset(): void } {
    let scale = 1;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      scene.setAttribute("transform", `translate(${tx},${ty}) scale(${scale})`);
      onTransform(scale, tx, ty);
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
      reset() {
        scale = 1;
        tx = 0;
        ty = 0;
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
