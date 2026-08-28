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
 * graph still draws when d3 cannot be fetched. Getting around the canvas -
 * framing, wheel zoom, drag to pan, and the reset that undoes both - is
 * `sceneCamera`, which is the same one the ligand network moves on.
 */

import {
  BTN_CSS,
  centredMessage,
  chromeMenu,
  dropdown,
  el,
  floatingWarning,
  headerStrip,
  SELECT_CSS,
  splitter,
  statChip,
} from "../shared/dom.js";
import { defineElement, GufeElement, type ViewHandle } from "../shared/element.js";
import { extentOf, sceneCamera } from "../shared/camera.js";
import { withoutLayout } from "../shared/layout.js";
import { loadD3, loadRDKit, type RDKitModule } from "../shared/engines.js";
import { resetControl } from "../shared/interact.js";
import { flag, num, text as textSetting } from "../shared/settings.js";
import { exportBlock, MULTI_SELECT_HINT } from "../shared/selection.js";
import { createMatcher, smartsBox, type MatchOutcome } from "../shared/smarts.js";
import { errText } from "../shared/dom.js";
import { svg, titled } from "../shared/svg.js";
import { FONT, MENU_LIST, MENU_PANEL, PANE_LABEL, TOOLBAR } from "../shared/style.js";
import { T } from "../shared/theme.js";
import { buildRegistry, entryLabel, lookup, lookupOfType, type RegistryIndex } from "../schema/registry.js";
import { systemPayloadFor } from "./chemical-system.js";
import { transformationPayloadFor } from "./transformation.js";
import type {
  AlchemicalNetworkViz,
  ChemicalSystemViz,
  GufeKey,
  ProtocolViz,
  SmallMoleculeComponentViz,
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

/**
 * How far a node's own box reaches from its position, which is its centre.
 *
 * What the camera frames is boxes rather than points: an outermost system has
 * to be inside the canvas along with its label, not centred on the edge of it.
 */
const NODE_EXTENT = { x: NODE.width / 2, y: NODE.height / 2 };

/**
 * How far what a filter left out is faded, rather than removed.
 *
 * Dimmed and not hidden, for the same reason the ligand network dims: seeing
 * what is *not* in the answer is half of reading a filter. The two numbers
 * differ because an edge is a thin line and a box is a filled shape - equal
 * opacities do not read as equally faded.
 */
const DIM = { node: 0.12, edge: 0.06 };

/** How far in the canvas zooms to show one system the reader went looking for. */
const FOCUS_SCALE = 1.4;

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

/** What the systems are made of, and what that makes them look like. */
interface CompositionGroups {
  /** What each system is made of, indexed as the nodes are. */
  signatures: string[];
  /** The distinct compositions, in order of first appearance. */
  compositions: string[];
  colorOf(index: number): NodeColors;
  /** One entry per composition when they are coloured, and empty when they are not. */
  legend: [string, NodeColors][];
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
function compositionGroups(nodes: readonly GraphNode[], registry: RegistryIndex): CompositionGroups {
  const plain: NodeColors = { fill: T.cardBg, stroke: T.cardBorder };
  const signatures = nodes.map((node) => compositionOf(node, registry));
  const compositions = [...new Set(signatures)];
  // The colouring is dropped here, and the compositions are handed back
  // regardless: "show me only the complex leg" is a question worth answering on
  // a network with seven compositions, even where colouring all seven is not.
  if (compositions.length < 2 || compositions.length > T.netGroupFill.length) {
    return { signatures, compositions, colorOf: () => plain, legend: [] };
  }

  const colors = new Map<string, NodeColors>(
    compositions.map((signature, i) => [signature, { fill: T.netGroupFill[i], stroke: T.netGroupStroke[i] }]),
  );
  return {
    signatures,
    compositions,
    colorOf: (index) => colors.get(signatures[index]) ?? plain,
    legend: compositions.map((signature) => [signature, colors.get(signature)!]),
  };
}

/**
 * Everything about a system that a search should be able to find it by.
 *
 * Its own name and key, but also its components': someone looking for
 * `lig_ejm_42` is looking for the two systems that carry that ligand, and
 * neither of them is called that. A system named "lig_ejm_42_solvent" would be
 * found either way, but that naming is a convention rather than a guarantee -
 * a network whose systems are unnamed has nothing but its components to go on.
 */
function systemHaystack(system: ChemicalSystemViz, registry: RegistryIndex): string {
  const parts = [system.name ?? "", system["gufe-key"]];
  for (const [label, key] of Object.entries(system.components ?? {})) {
    parts.push(label);
    const component = lookup(registry, key);
    if (!component) continue;
    parts.push(entryLabel(component), component["gufe-key"]);
    const smiles = (component as { smiles?: string }).smiles;
    if (smiles) parts.push(smiles);
  }
  return parts.join(" ").toLowerCase();
}

/** The molecules a network's systems are built from, and who carries what. */
interface LigandIndex {
  /** One structure per distinct small molecule, which is what the matcher sweeps. */
  sources: string[];
  /** Which of those each system carries, indexed as the nodes are. */
  perNode: number[][];
}

/**
 * Index the small molecules of a network once, by molecule rather than by
 * system.
 *
 * A campaign runs every ligand twice - once in solvent, once in complex - so
 * indexing per system would parse the same molecule twice for every pattern.
 * Indexing per molecule and mapping back afterwards halves the sweep, and on a
 * network with a shared cofactor it does much better than that.
 *
 * Only small molecules: a protein has no SMARTS anyone is asking about, and
 * handing a matcher a PDB the size of a receptor per keystroke would be a
 * frozen tab for an answer nobody wanted.
 */
function ligandIndex(nodes: readonly GraphNode[], registry: RegistryIndex): LigandIndex {
  const sources: string[] = [];
  const at = new Map<GufeKey, number>();
  const perNode = nodes.map((node) => {
    const mine: number[] = [];
    for (const key of Object.values(node.components ?? {})) {
      const component = lookupOfType<SmallMoleculeComponentViz>(registry, key, "SmallMoleculeComponentViz");
      if (!component) continue;
      let index = at.get(key);
      if (index === undefined) {
        index = sources.length;
        at.set(key, index);
        sources.push(component.sdf ?? "");
      }
      mine.push(index);
    }
    return mine;
  });
  return { sources, perNode };
}

interface MenuParts {
  nodes: readonly GraphNode[];
  edges: readonly GraphEdge[];
  /** What each system can be searched by, indexed as `nodes` is. */
  haystacks: readonly string[];
  /** What each system is made of, indexed as `nodes` is. */
  signatures: readonly string[];
  /** The colour of each system, for the swatch that ties a row to the canvas. */
  colorOf(index: number): NodeColors;
  /** The distinct compositions, in the order the legend lists them. */
  compositions: readonly string[];
  selected: Set<string>;
  filter: { composition: string };
  query: { text: string };
  /** Re-run the emphasis after the query, the composition or the selection moves. */
  refresh(): void;
  /** Bring one system into view and open it. */
  focus(index: number): void;
  /**
   * Which systems the current SMARTS pattern left, or null when there is none.
   *
   * A function rather than a value: the sweep is asynchronous, so what it
   * answers changes under a menu that has already been built.
   */
  matched(): ReadonlySet<number> | null;
  /** Sweep a pattern. The view decides what its result then hides. */
  match(smarts: string): Promise<MatchOutcome>;
  /** Hand back the list's own redraw, for when a sweep finishes. */
  mounted(rerender: () => void): void;
}

/**
 * The network's menu: search, the composition filter, and the system list.
 *
 * The same three things the ligand network's menu is, asking the two questions
 * an alchemical network raises instead of the two a ligand network does. A
 * ligand network filters by mapping score, which nothing here has; what this
 * has instead is legs - the same campaign run in solvent and in complex - and
 * "show me only the complex leg" is the filter people reach for. The search is
 * the same idea in both, over a different haystack.
 *
 * Everything is a preference and survives a reload, except the selection: it
 * names systems in the network on screen, and restoring it onto a different one
 * would restore nonsense.
 *
 * Lazily built, like the ligand one, and for the same reason: at two hundred
 * systems the list is the most expensive thing in the view, and a menu nobody
 * opened should not pay for it.
 */
function buildMenu(parts: MenuParts): HTMLDivElement {
  const querySetting = textSetting("alchemical-network.query");
  const compositionSetting = textSetting("alchemical-network.composition");

  const panel = el("div", MENU_PANEL);

  const search = el("input", `${SELECT_CSS}width:100%;box-sizing:border-box;`) as HTMLInputElement;
  search.type = "search";
  search.placeholder = "Search systems";
  search.value = querySetting.get();
  parts.query.text = search.value;
  search.setAttribute("aria-label", "Search systems by name, component or gufe key");
  panel.appendChild(search);

  // Under the search and doing the same job by a different route: the search
  // knows a system by its name, this one knows it by what its ligands are made
  // of. Both narrow, so both feed the same list - which is the difference from
  // the ligand network, where a node *is* a molecule and a match has a
  // structure to colour rather than a box to hide.
  const smarts = smartsBox({
    placeholder: "Filter by SMARTS",
    label: "Show only the systems whose ligands match this SMARTS pattern",
    remember: textSetting("alchemical-network.smarts"),
    run: (pattern) => parts.match(pattern),
    describe: (outcome) => {
      const unread = outcome.unreadable ? `, ${outcome.unreadable} could not be read` : "";
      const left = parts.matched()?.size ?? parts.nodes.length;
      return `${left} of ${parts.nodes.length} systems contain it${unread}`;
    },
  });
  panel.appendChild(smarts.element);

  // Only when there is more than one, which is also the rule the legend and the
  // node colouring follow: a network whose systems are all made of the same
  // things has nothing here to choose between.
  if (parts.compositions.length > 1) {
    const row = el("div", `display:flex;align-items:center;gap:6px;font-size:${FONT.small};color:${T.textMuted};`);
    row.appendChild(el("span", "flex-shrink:0;", "made of"));
    const picker = dropdown(
      [{ id: "", label: "anything" }, ...parts.compositions.map((signature) => ({ id: signature, label: signature }))],
      "",
      (id) => {
        parts.filter.composition = id;
        render();
        parts.refresh();
      },
      compositionSetting,
    );
    picker.style.cssText += "flex:1;min-width:0;";
    parts.filter.composition = picker.value;
    row.appendChild(picker);
    panel.appendChild(row);
  }

  const count = el("div", `font-size:${FONT.small};color:${T.textMuted2};`);
  panel.appendChild(count);

  const list = el("div", MENU_LIST);
  panel.appendChild(list);

  panel.appendChild(el("div", `font-size:${FONT.tiny};line-height:1.5;color:${T.textMuted2};`, MULTI_SELECT_HINT));

  const exporter = exportBlock({
    nodes: parts.nodes,
    edges: parts.edges,
    selected: parts.selected,
    words: {
      nodes: { button: "Systems", plural: "systems" },
      edges: { button: "Transformations", plural: "transformations" },
    },
    setting: "alchemical-network.exportAs",
  });
  panel.appendChild(exporter.box);

  const clear = el("button", `${BTN_CSS}width:100%;`, "Clear selection");
  clear.onclick = () => {
    parts.selected.clear();
    render();
    parts.refresh();
  };
  panel.appendChild(clear);

  /** Whether a system survives every filter. The list and the canvas ask this. */
  const shows = (index: number): boolean => {
    const text = parts.query.text.trim().toLowerCase();
    if (text && !parts.haystacks[index].includes(text)) return false;
    if (parts.filter.composition && parts.signatures[index] !== parts.filter.composition) return false;
    const matched = parts.matched();
    if (matched && !matched.has(index)) return false;
    return true;
  };

  const render = (): void => {
    // Whatever the export last said was about a selection that has now changed.
    exporter.clearNote();
    list.replaceChildren();
    const shown = parts.nodes.map((node, index) => ({ node, index })).filter(({ index }) => shows(index));
    count.textContent = `${shown.length} of ${parts.nodes.length} systems`;

    for (const { node, index } of shown) {
      const key = node["gufe-key"];
      const picked = parts.selected.has(key);
      const row = el(
        "button",
        "display:flex;align-items:center;gap:6px;padding:5px 8px;border-radius:6px;text-align:left;" +
          `font-family:inherit;font-size:${FONT.small};cursor:pointer;width:100%;min-width:0;` +
          `border:1px solid ${picked ? T.cardBorderActive : T.cardBorder};` +
          `background:${picked ? T.cardBgActive : T.cardBg};color:${T.textPrimary};`,
      );
      // The same colour the box on the canvas is drawn in, so a row and a node
      // are recognisably the same thing without reading either label.
      const colors = parts.colorOf(index);
      row.appendChild(
        el(
          "span",
          "width:10px;height:10px;border-radius:3px;flex-shrink:0;" +
            `background:${colors.fill};border:1px solid ${colors.stroke};`,
        ),
      );
      // The full name, because the canvas caption is truncated to fit its box.
      const name = el("span", "flex:1;min-width:0;overflow-wrap:anywhere;", nodeLabel(node));
      name.title = `${nodeLabel(node)}\n${parts.signatures[index]}`;
      row.appendChild(name);
      row.onclick = (event) => {
        // Plain click jumps to it and opens it; modifier-click adds to the
        // selection, which is what makes "copy the transformations between
        // these six systems" possible.
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

  render();
  // The sweep is asynchronous and the pattern may be one this menu opened with,
  // so the list has to be redrawable from outside it.
  parts.mounted(render);
  smarts.apply();
  return panel;
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

    /**
     * What the menu holds, declared before it because a menu that was left open
     * builds during this render.
     *
     * The menu reads and writes these; the canvas reads them back out through
     * `applyEmphasis`. They are plain boxes rather than values so that both
     * sides see the same one after the other has changed it.
     */
    const selected = new Set<string>();
    const filter = { composition: "" };
    const query = { text: "" };
    let applyEmphasis = () => {};
    let focusNode: (index: number) => void = () => {};
    // Assigned once there is a scene; the menu can be opened before there is.
    let openNode: (index: number) => void = () => {};

    // Built once, here rather than in the menu, because the canvas filters
    // against them too and a menu nobody opened must not be what decides
    // whether a remembered search works.
    const haystacks = nodes.map((node) => systemHaystack(node, registry));

    /**
     * RDKit, fetched once and only if something asks.
     *
     * Behind an accessor rather than started here, so that a network nobody
     * types a pattern into never fetches seven megabytes of WebAssembly to do
     * nothing with. This view draws no structures of its own, so unlike the
     * ligand network there is nothing else that would have paid for it.
     */
    let rdkitPromise: Promise<RDKitModule | null> | null = null;
    const rdkit = (): Promise<RDKitModule | null> =>
      (rdkitPromise ??= loadRDKit().catch((e: unknown) => {
        console.warn("[gufe-viz] RDKit failed to load:", errText(e));
        return null;
      }));

    const ligands = ligandIndex(nodes, registry);
    const matcher = createMatcher(rdkit, ligands.sources);
    /** The systems the pattern left, or null when there is no pattern in force. */
    let matched: ReadonlySet<number> | null = null;
    let refreshList = () => {};

    const runMatch = async (pattern: string): Promise<MatchOutcome> => {
      const outcome = await matcher.run(pattern);
      // A superseded run says nothing about what should be on screen; the run
      // that superseded it is still going and will.
      if (outcome.status === "superseded") return outcome;
      // Only a sweep that worked filters anything. A pattern RDKit refused
      // leaves the network alone rather than emptying it, which would read as
      // "nothing matches" - a different answer, and the wrong one.
      matched =
        outcome.status === "ok"
          ? new Set(nodes.flatMap((_node, index) => (ligands.perNode[index].some((i) => outcome.matched.has(i)) ? [index] : [])))
          : null;
      refreshList();
      applyEmphasis();
      return outcome;
    };

    const menu = chromeMenu(
      bar,
      () =>
        buildMenu({
          nodes,
          edges,
          haystacks,
          signatures: groups.signatures,
          colorOf: groups.colorOf,
          compositions: groups.compositions,
          selected,
          filter,
          query,
          refresh: () => applyEmphasis(),
          matched: () => matched,
          match: (pattern) => runMatch(pattern),
          mounted: (rerender) => {
            refreshList = rerender;
          },
          // Finding a system in the list and opening it are one action: the
          // list is how you reach one you cannot see on the canvas, and
          // reaching it is not the point.
          focus: (index) => {
            focusNode(index);
            openNode(index);
          },
        }),
      {
        label: "Search, filter and select systems",
        onToggle: () => redraw(),
        remember: flag("alchemical-network.menuOpen", false),
      },
    );
    // A flex column, so the panel inside it is stretched to the height of the
    // row rather than to the height of its own contents: a list of two hundred
    // systems has to scroll inside the menu, not run off the bottom of the view.
    menu.panel.style.cssText += "display:flex;flex-direction:column;min-height:0;";
    split.appendChild(menu.panel);

    const left = el("div", `min-width:0;display:flex;flex-direction:column;background:${T.netCanvasBg};`);
    const right = el("div", `min-width:0;display:flex;flex-direction:column;background:${T.appBg};`);
    const canvas = el("div", `flex:1;min-height:0;position:relative;overflow:hidden;background:${T.netCanvasBg};`);
    left.appendChild(canvas);

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
    let selectedItem: { kind: "node" | "edge"; index: number } | null = null;
    let refreshSelection = () => {};
    /** The camera of the scene currently on the canvas; a redraw replaces both. */
    let resetView = () => {};
    let stopScene = () => {};
    /**
     * Which draw is the current one.
     *
     * A draw waits on the force layout, so two of them - the first paint and a
     * resize, or two resizes - are in flight at once, and without this both
     * finish and both append a graph. Which is what happened: a network drawn
     * three times was three graphs stacked down the canvas, the top one
     * covering the rest.
     */
    let era = 0;

    left.appendChild(this.#canvasBar(groups.legend, () => resetView()));

    const select = (kind: "node" | "edge", index: number): void => {
      selectedItem = { kind, index };
      detail.show(kind === "node" ? nodes[index] : edges[index], kind);
      refreshSelection();
    };
    openNode = (index) => select("node", index);

    const draw = (): void => {
      const mine = ++era;
      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 600;
      seedPositions(nodes, width, height);

      const paint = () => {
        if (!alive || mine !== era) return;
        // The outgoing scene owns wheel and pointer listeners on an SVG that is
        // about to be thrown away. Every one of them, not the first: an earlier
        // draw may have appended one before this guard existed to stop it.
        // Torn down here rather than when the draw started, so the graph on
        // screen stays there while the layout for the next one is worked out.
        stopScene();
        canvas.querySelectorAll("svg").forEach((stale) => stale.remove());
        const scene = this.#paint(canvas, nodes, edges, width, height, groups.colorOf, select);
        stopScene = scene.cleanup;
        resetView = scene.reset;
        focusNode = (index) => scene.focusOn(index);
        refreshSelection = () => scene.setSelected(selectedItem);
        refreshSelection();

        /**
         * What the filters leave lit, applied to the canvas.
         *
         * A system is lit when nothing is being asked for at all, or when it is
         * selected, or when it survives both filters. A transformation is lit
         * when both of its systems are - so a selection reads as "these systems
         * and what runs between them", which is also exactly what the
         * Transformations export copies.
         */
        applyEmphasis = () => {
          const text = query.text.trim().toLowerCase();
          const filtering = selected.size > 0 || text.length > 0 || filter.composition !== "" || matched !== null;
          if (!filtering) {
            scene.setEmphasis(null, null);
            return;
          }

          // A selection on its own lights only what is in it: with no search
          // and no composition chosen there is nothing for the two filters to
          // narrow, and a `shown` that answered "yes, trivially" would light
          // the whole canvas back up.
          const narrowing = text.length > 0 || filter.composition !== "" || matched !== null;
          const litNodes = new Set<string>();
          nodes.forEach((node, index) => {
            const shown =
              narrowing &&
              (!text || haystacks[index].includes(text)) &&
              (!filter.composition || groups.signatures[index] === filter.composition) &&
              (!matched || matched.has(index));
            if (selected.has(node["gufe-key"]) || shown) litNodes.add(node["gufe-key"]);
          });

          const litEdges = new Set<number>();
          edges.forEach((edge, index) => {
            if (litNodes.has(edge.from["gufe-key"]) && litNodes.has(edge.to["gufe-key"])) litEdges.add(index);
          });
          scene.setEmphasis(litNodes, litEdges);
        };
        applyEmphasis();
      };

      if (forceUnavailable) {
        paint();
        return;
      }
      relax(nodes, edges, width, height).then((relaxed) => {
        if (!alive || mine !== era) return;
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
        stopScene();
        detail.cleanup();
      },
    };
  }

  /**
   * The strip under the canvas: how to get back, and what the colours mean.
   *
   * The reset is always there and the legend is not. Zoom and pan have no
   * bottom, so a network the reader has flung off the edge needs one control
   * that is always in the same place; a network of one composition has nothing
   * to explain and a legend saying so is noise.
   */
  #canvasBar(entries: readonly [string, NodeColors][], onReset: () => void): HTMLDivElement {
    const bar = el("div", TOOLBAR.bottom);
    bar.appendChild(resetControl(onReset, "Reset pan and zoom"));
    if (!entries.length) return bar;
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
      // The graph adds fields of its own to the payload's objects - what the
      // layout leaves on a node, an index and two endpoints on an edge - and the
      // schema allows none of them, so what is handed on is everything except
      // those. A node's are `withoutLayout`'s to know: d3 writes more of them
      // than this file does.
      let cut: ChemicalSystemViz | TransformationViz | null;
      if (kind === "node") {
        cut = systemPayloadFor(withoutLayout(item as GraphNode), registry);
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
  ): {
    setSelected(selection: { kind: "node" | "edge"; index: number } | null): void;
    /** Fade what the filters left out. Null on either means "nothing is filtered". */
    setEmphasis(nodeKeys: ReadonlySet<string> | null, edgeIndices: ReadonlySet<number> | null): void;
    /** Bring one system to the middle, zoomed in enough to read it. */
    focusOn(index: number): void;
    reset(): void;
    cleanup(): void;
  } {
    // Named, so the graph itself can be found among whatever the detail pane
    // has drawn beside it - the ligand-network view names its own the same way.
    // `touch-action` off, or a drag to pan scrolls the page instead.
    const root = svg("svg", { class: "gufe-graph", width, height, style: "display:block;touch-action:none;" });
    canvas.appendChild(root);

    // Everything hangs off one group, which is what the camera moves: the
    // layout's own coordinates are left alone, so what is drawn and where it is
    // drawn stay separate questions.
    const scene = svg("g");
    root.appendChild(scene);
    const lineLayer = svg("g");
    const nodeLayer = svg("g");
    scene.append(lineLayer, nodeLayer);

    const camera = sceneCamera(root, scene, {
      bounds: () => extentOf(nodes, NODE_EXTENT.x, NODE_EXTENT.y),
      margin: FIT_MARGIN,
      hint: "Click the graph or hold Ctrl to zoom",
    });

    // A pan begins wherever the pointer went down, which on a graph this dense
    // is usually on top of a box or an edge. Without this, letting go of a pan
    // would also change what the detail pane is showing.
    const click = (kind: "node" | "edge", index: number): void => {
      if (!camera.wasPan()) onSelect(kind, index);
    };

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
      line.addEventListener("click", () => click("edge", index));
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
      hit.addEventListener("click", () => click("edge", index));
      lineLayer.appendChild(hit);
    });

    const boxes: SVGRectElement[] = [];
    // What each box goes back to when it stops being the selected one. Read off
    // the colours rather than recomputed, so there is one answer to what a node
    // is drawn in.
    const restingStroke: string[] = [];
    const nodeGroups: SVGGElement[] = [];
    nodes.forEach((node, index) => {
      const colors = colorOf(index);
      const group = svg("g", { style: "cursor:pointer;" });
      nodeGroups.push(group);
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
      group.addEventListener("click", () => click("node", index));
      nodeLayer.appendChild(group);
    });

    // Framed rather than left at the identity transform: the force layout puts
    // a twenty-system network well outside an eight-hundred-pixel box, and an
    // unframed one is a blank canvas with nothing on the page saying why.
    camera.fit();

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
      /**
       * Dim what is not lit rather than hiding it.
       *
       * Which ones a filter left out is half of what a filter is for: on a
       * campaign graph, seeing that the complex leg has a transformation the
       * solvent leg does not is the whole point, and removing the rest would
       * take that picture away.
       */
      setEmphasis(nodeKeys, edgeIndices) {
        nodeGroups.forEach((group, i) => {
          const lit = !nodeKeys || nodeKeys.has(nodes[i]["gufe-key"]);
          group.setAttribute("opacity", lit ? "1" : String(DIM.node));
        });
        lines.forEach((line, i) => {
          const lit = !edgeIndices || edgeIndices.has(i);
          line.setAttribute("opacity", lit ? "1" : String(DIM.edge));
        });
      },

      focusOn(index: number) {
        const node = nodes[index];
        if (node) camera.centreOn(node.x, node.y, FOCUS_SCALE);
      },

      reset: camera.reset,
      cleanup: camera.cleanup,
    };
  }
}

defineElement("gufe-alchemical-network", GufeAlchemicalNetwork);
