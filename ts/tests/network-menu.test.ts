/**
 * The ligand network's menu: search, the ligand list, and the score filter.
 *
 * All three were asked for at the feedback session, and all three carry a rule
 * that is easy to implement backwards: what does not match is **dimmed, not
 * removed**, because seeing what is missing is half of what a filter is for.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines, wait, type SeededEnginesResult } from "./helpers.js";
import { selectionText } from "../src/views/ligand-network.js";
import { T } from "../src/shared/theme.js";
import { flag, text as textSetting } from "../src/shared/settings.js";

function mountNetwork(fixture = "ligand_network_named.json"): HTMLElement {
  const node = document.createElement("gufe-ligand-network") as HTMLElement & { payload: unknown };
  document.body.appendChild(node);
  node.payload = readExample(fixture);
  return node;
}

const hamburger = (node: HTMLElement): HTMLButtonElement =>
  node.querySelector<HTMLButtonElement>('button[aria-label="Search, filter and select ligands"]')!;

const listRows = (node: HTMLElement): HTMLButtonElement[] =>
  Array.from(node.querySelectorAll<HTMLButtonElement>("button")).filter(
    (b) => b.parentElement?.style.overflow === "auto",
  );

const nodeGroups = (node: HTMLElement): SVGGElement[] =>
  Array.from(node.querySelectorAll<SVGGElement>("g.gufe-node"));

/** One notch in, which is enough to cross into the level that draws structures. */
function zoomIn(node: HTMLElement): SVGSVGElement {
  const root = node.querySelector<SVGSVGElement>("svg.gufe-graph")!;
  root.dispatchEvent(new MouseEvent("pointerdown", { bubbles: true }));
  root.dispatchEvent(new WheelEvent("wheel", { deltaY: -120, bubbles: true, cancelable: true }));
  return root;
}

const smartsBox = (node: HTMLElement): HTMLInputElement =>
  node.querySelector<HTMLInputElement>('input[aria-label="Colour the ligands matching this SMARTS pattern"]')!;

/** Type a pattern, then wait out the debounce and the sweep behind it. */
async function typeSmarts(node: HTMLElement, pattern: string): Promise<void> {
  const box = smartsBox(node);
  box.value = pattern;
  box.dispatchEvent(new Event("input"));
  await wait(400);
  await flush();
}

/** The colour each ligand's name is drawn in, which says what matched at any zoom. */
const captionFills = (node: HTMLElement): (string | null)[] =>
  Array.from(node.querySelectorAll("text.gufe-node-caption")).map((c) => c.getAttribute("fill"));

describe("the ligand network menu", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("is collapsed until asked for", async () => {
    const node = mountNetwork();
    await flush();
    expect(hamburger(node)).toBeTruthy();
    expect(listRows(node)).toHaveLength(0);
  });

  it("does not build the ligand list until it is opened", async () => {
    // At nine hundred ligands the list is the most expensive thing in the view,
    // and a collapsed menu must not pay for it.
    const node = mountNetwork();
    await flush();
    // The header already carries a "ligands 3" chip, so look for something only
    // the menu has.
    expect(node.querySelector('input[type="search"]')).toBeNull();

    hamburger(node).click();
    await flush();
    expect(node.querySelector('input[type="search"]')).toBeTruthy();
    expect(node.textContent).toContain("of 3 ligands");
    expect(listRows(node).length).toBe(3);
  });

  it("searches by name and says how many matched", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    // The fixture names ligands after their SMILES - CCO, CC, CO - so "CC"
    // legitimately matches two of them. "CCO" is the one that matches one.
    const search = node.querySelector<HTMLInputElement>('input[type="search"]')!;
    search.value = "CCO";
    search.dispatchEvent(new Event("input", { bubbles: true }));

    expect(listRows(node).length).toBe(1);
    expect(node.textContent).toContain("1 of 3 ligands");

    search.value = "CC";
    search.dispatchEvent(new Event("input", { bubbles: true }));
    expect(listRows(node).length).toBe(2);
  });

  it("dims what does not match rather than removing it", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    const search = node.querySelector<HTMLInputElement>('input[type="search"]')!;
    search.value = "CCO";
    search.dispatchEvent(new Event("input", { bubbles: true }));

    const groups = nodeGroups(node);
    expect(groups.length).toBe(3);
    // Every node is still on the page; two of them are faded.
    const dimmed = groups.filter((g) => Number(g.getAttribute("opacity")) < 1);
    expect(dimmed.length).toBe(2);
    expect(groups.some((g) => g.getAttribute("opacity") === "1")).toBe(true);
  });

  it("says so when nothing matches, instead of showing an empty list", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    const search = node.querySelector<HTMLInputElement>('input[type="search"]')!;
    search.value = "no-such-ligand-anywhere";
    search.dispatchEvent(new Event("input", { bubbles: true }));
    expect(node.textContent).toContain("Nothing matches");
  });

  it("dims the edges below a score threshold", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    const before = Array.from(node.querySelectorAll("line")).map((l) => l.getAttribute("stroke-opacity"));
    const slider = node.querySelector<HTMLInputElement>('input[type="range"]')!;
    slider.value = "1";
    slider.dispatchEvent(new Event("input", { bubbles: true }));

    const after = Array.from(node.querySelectorAll("line")).map((l) => l.getAttribute("stroke-opacity"));
    expect(after).not.toEqual(before);
    // Dimmed, not gone: the same lines are still in the document.
    expect(after.length).toBe(before.length);
  });

  it("clears a selection back to everything lit", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    listRows(node)[0].click();
    expect(nodeGroups(node).filter((g) => Number(g.getAttribute("opacity")) < 1).length).toBe(2);

    const clear = Array.from(node.querySelectorAll("button")).find((b) => b.textContent === "Clear selection")!;
    clear.click();
    expect(nodeGroups(node).every((g) => g.getAttribute("opacity") === "1")).toBe(true);
  });
});

describe("selection export", () => {
  beforeEach(() => {
    seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  const open = async (): Promise<HTMLElement> => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    return node;
  };

  it("copies the selected ligand names, one per line", async () => {
    const node = await open();
    const written: string[] = [];
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: (t: string) => (written.push(t), Promise.resolve()) },
      configurable: true,
    });

    listRows(node)[0].click();
    Array.from(node.querySelectorAll("button")).find((b) => b.textContent === "Ligands")!.click();

    expect(written).toHaveLength(1);
    // What a plan command takes: a list of names, nothing that reconstructs a
    // gufe object. Python keeps the data.
    expect(written[0]).not.toContain("gufe-key");
    expect(written[0].split("\n")).toHaveLength(1);
  });

  it("copies nothing when nothing is selected", async () => {
    const node = await open();
    const written: string[] = [];
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: (t: string) => (written.push(t), Promise.resolve()) },
      configurable: true,
    });
    Array.from(node.querySelectorAll("button")).find((b) => b.textContent === "Ligands")!.click();
    expect(written).toHaveLength(0);
  });

  // --- saying so ----------------------------------------------------------
  //
  // Copying is invisible: the result is on a clipboard, somewhere else. A button
  // that copied nothing and a button that is broken therefore looked exactly
  // alike, and Edges - which needs both ends of a mapping selected, and so is
  // empty for every single-ligand selection - looked broken to the person who
  // reported it.

  const clickExport = (node: HTMLElement, label: "Ligands" | "Edges"): void => {
    Array.from(node.querySelectorAll("button")).find((b) => b.textContent === label)!.click();
  };

  it("says nothing is selected rather than doing nothing", async () => {
    const node = await open();
    clickExport(node, "Edges");
    expect(node.textContent).toContain("Nothing selected");
  });

  it("says why Edges is empty, and how to select more than one ligand", async () => {
    // The reported case: one ligand selected, so no mapping can have both ends
    // in the selection.
    const node = await open();
    listRows(node)[0].click();
    await flush();
    clickExport(node, "Edges");
    expect(node.textContent).toContain("No mappings between the 1 selected ligands");
    expect(node.textContent).toContain("Cmd/Ctrl-click");
  });

  it("says how many it copied, so a copy that worked looks different", async () => {
    const node = await open();
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.resolve() },
      configurable: true,
    });
    listRows(node)[0].click();
    await flush();
    clickExport(node, "Ligands");
    expect(node.textContent).toContain("Copied 1 ligands");
  });

  it("copies edges once two connected ligands are selected", async () => {
    // And this is the thing that was never reachable: a plain click replaces the
    // selection, so only a modifier click can ever put two ligands in it.
    const node = await open();
    const written: string[] = [];
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: (t: string) => (written.push(t), Promise.resolve()) },
      configurable: true,
    });
    for (const row of listRows(node)) {
      row.dispatchEvent(new MouseEvent("click", { bubbles: true, metaKey: true }));
      await flush();
    }
    clickExport(node, "Edges");

    expect(written).toHaveLength(1);
    expect(written[0].split("\n").length).toBeGreaterThan(0);
    expect(node.textContent).toMatch(/Copied \d+ edges/);
  });

  it("tells a reader how to select several, without being asked", async () => {
    // Under the list, because a plain click replacing the selection is the one
    // thing here that cannot be discovered by looking at it.
    const node = await open();
    expect(node.textContent).toContain("Cmd/Ctrl-click to select several.");
  });
});

describe("selectionText", () => {
  const nodes = [
    { "gufe-key": "k1", name: "lig_a", smiles: "CC", x: 0, y: 0 },
    { "gufe-key": "k2", name: "lig_b", smiles: "CO", x: 0, y: 0 },
    { "gufe-key": "k3", name: "lig_c", smiles: "CN", x: 0, y: 0 },
  ] as never[];
  const edges = [
    { from: nodes[0], to: nodes[1], index: 0 },
    { from: nodes[1], to: nodes[2], index: 1 },
  ] as never[];

  it("lists selected ligands by name, one per line", () => {
    // A newline-delimited list is what a shell loop or a paste into a text column
    // takes without further splitting, and it survives a name with a comma in it.
    const text = selectionText(nodes, edges, new Set(["k1", "k3"]), "ligands", "names");
    expect(text).toBe("lig_a\nlig_c");
  });

  it("can name them by gufe key instead, for when names collide or are empty", () => {
    const text = selectionText(nodes, edges, new Set(["k1"]), "ligands", "keys");
    expect(text).toBe("k1");
  });

  it("includes an edge only when both its ends are selected", () => {
    // "The edges among these ligands" is the question; one endpoint answers a
    // different one.
    expect(selectionText(nodes, edges, new Set(["k1", "k2"]), "edges", "names")).toBe("lig_a, lig_b");
    expect(selectionText(nodes, edges, new Set(["k1", "k3"]), "edges", "names")).toBe("");
  });

  it("puts one edge per line, because a pair already uses the comma", () => {
    const text = selectionText(nodes, edges, new Set(["k1", "k2", "k3"]), "edges", "names");
    expect(text.split("\n")).toEqual(["lig_a, lig_b", "lig_b, lig_c"]);
  });

  it("is empty for an empty selection", () => {
    expect(selectionText(nodes, edges, new Set(), "ligands", "names")).toBe("");
    expect(selectionText(nodes, edges, new Set(), "edges", "names")).toBe("");
  });
});

/**
 * Colouring by SMARTS match.
 *
 * The rule this carries is the one the request was phrased around: **colour,
 * not filter**. A pattern says which ligands contain a substructure, and the
 * ones that do not stay exactly where they were - because "which of my ligands
 * are not the scaffold" is the half of the answer a filter throws away.
 */
describe("colouring a ligand network by SMARTS match", () => {
  let engines: SeededEnginesResult;

  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  const open = async (): Promise<HTMLElement> => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    return node;
  };

  it("colours what matched and leaves everything else on the canvas", async () => {
    // The fixture is ethanol, ethane and methanol, and the fake matches on the
    // molblock as text: two of the three carry an O.
    const node = await open();
    await typeSmarts(node, "O");

    const fills = captionFills(node);
    expect(fills.filter((f) => f === T.netMatchStroke)).toHaveLength(2);
    expect(fills.filter((f) => f === T.netNodeCaption)).toHaveLength(1);

    // Nothing removed and nothing dimmed: all three nodes are still drawn at
    // full strength, which is the whole point of colouring rather than filtering.
    expect(nodeGroups(node)).toHaveLength(3);
    for (const group of nodeGroups(node)) {
      expect(group.getAttribute("opacity") ?? "1").toBe("1");
    }
  });

  it("says how many matched", async () => {
    const node = await open();
    await typeSmarts(node, "O");
    expect(node.textContent).toContain("2 of 3 ligands match");
  });

  it("says a pattern was refused rather than showing it as no matches", async () => {
    const node = await open();
    await typeSmarts(node, "C(C");
    expect(node.textContent).toContain("does not accept");
    expect(captionFills(node).every((f) => f === T.netNodeCaption)).toBe(true);
  });

  it("highlights the atoms that matched, once the structures are drawn", async () => {
    // At the closest zoom the disc is gone, so the matched atoms inside the
    // structure are the only thing left to carry the match. They are also why
    // the sweep parses molecules the same way the depiction does: these indices
    // address the drawn structure.
    const node = await open();
    await typeSmarts(node, "O");

    const root = zoomIn(node);
    await flush();
    expect(root.getAttribute("data-detail")).toBe("structures");

    // Two matched, so two structures were asked for with highlights on them -
    // and the third was drawn without, rather than not drawn.
    expect(engines.highlighted).toHaveLength(2);
    for (const details of engines.highlighted) {
      expect(JSON.parse(details).atoms).toEqual([0, 1]);
    }
  });

  it("redraws only the structures whose highlighting the new pattern changed", async () => {
    // A structure costs an RDKit call and an SVG subtree, so typing a new
    // pattern must not cost the whole network again. Only the nodes whose
    // highlighting actually changed are dropped and drawn a second time.
    const node = await open();
    await typeSmarts(node, "O");
    zoomIn(node);
    await flush();
    const drawnBefore = engines.depicted.length;

    // Every ligand in the fixture contains a C, so the two already highlighted
    // for the O keep the drawing they have, and only the third changes.
    await typeSmarts(node, "C");
    await flush();
    // Three parses for the sweep itself, and exactly one structure drawn again.
    expect(engines.depicted.length - drawnBefore).toBe(4);
    expect(captionFills(node).every((f) => f === T.netMatchStroke)).toBe(true);
  });

  it("renders when it opens with both the menu and a pattern remembered", async () => {
    // The state a reload lands in, and the one that is easiest to never see
    // while developing: a menu left open builds *during* the view's own render
    // and applies the pattern it remembers as it goes, so everything it reaches
    // has to exist by then. Getting that order wrong took the whole view down
    // with "cannot access before initialization", not just the colouring.
    // Through the settings module rather than `localStorage` directly, because
    // that is where the fallback for a store the browser will not give us lives
    // - and a test that reaches past it fails on whichever runtime has none.
    flag("ligand-network.menuOpen", false).set(true);
    textSetting("ligand-network.smarts").set("O");

    const node = mountNetwork();
    await flush();
    expect(node.textContent).not.toContain("Failed to render");
    expect(nodeGroups(node)).toHaveLength(3);

    // And the remembered pattern is in force, not merely remembered.
    await wait(400);
    expect(captionFills(node).filter((f) => f === T.netMatchStroke)).toHaveLength(2);
  });

  it("clears the colouring when the pattern is emptied", async () => {
    const node = await open();
    await typeSmarts(node, "O");
    expect(captionFills(node).some((f) => f === T.netMatchStroke)).toBe(true);

    await typeSmarts(node, "");
    expect(captionFills(node).every((f) => f === T.netNodeCaption)).toBe(true);
  });
});
