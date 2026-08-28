/**
 * The alchemical network's menu: search, the composition filter, and the list.
 *
 * The same menu the ligand network carries, asking the questions an alchemical
 * network raises rather than the ones a ligand network does, and holding the
 * same rule: what a filter leaves out is **dimmed, not removed**, because
 * seeing what is missing is half of what a filter is for.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import {
  clearFakeEngines,
  flush,
  readExample,
  seedFakeEngines,
  wait,
  type SeededEnginesResult,
} from "./helpers.js";
import { flag, text as textSetting } from "../src/shared/settings.js";

interface DebugGlobal {
  GUFE_VIZ_DEBUG?: boolean;
}

/**
 * The fixture, optionally with a second composition in it.
 *
 * Two compositions is the shape a binding campaign makes for real - a solvent
 * leg and a complex leg, told apart by nothing but which components their
 * systems carry - and the fixture has one, so one system loses its solvent.
 */
function network(twoCompositions = false): unknown {
  const payload = structuredClone(readExample("alchemical_network.json")) as {
    registry: { type: string; components?: Record<string, string> }[];
  };
  if (twoCompositions) {
    const system = payload.registry.find((entry) => entry.type === "ChemicalSystemViz")!;
    delete system.components!.solvent;
  }
  return payload;
}

function mountNetwork(payload: unknown = network()): HTMLElement {
  const node = document.createElement("gufe-alchemical-network") as HTMLElement & { payload: unknown };
  document.body.appendChild(node);
  node.payload = payload;
  return node;
}

const hamburger = (node: HTMLElement): HTMLButtonElement =>
  node.querySelector<HTMLButtonElement>('button[aria-label="Search, filter and select systems"]')!;

/** The rows of the system list, which is the one scrolling column in the panel. */
const listRows = (node: HTMLElement): HTMLButtonElement[] =>
  Array.from(node.querySelectorAll<HTMLButtonElement>("button")).filter(
    (b) => b.parentElement?.style.overflow === "auto",
  );

const searchBox = (node: HTMLElement): HTMLInputElement =>
  node.querySelector<HTMLInputElement>('input[aria-label="Search systems by name, component or gufe key"]')!;

/** The opacity each system's box is drawn at, which is what a filter changes. */
const nodeOpacities = (node: HTMLElement): string[] =>
  [...node.querySelectorAll<SVGRectElement>("svg.gufe-graph rect")].map(
    (box) => box.parentElement?.getAttribute("opacity") ?? "1",
  );

const smartsInput = (node: HTMLElement): HTMLInputElement =>
  node.querySelector<HTMLInputElement>(
    'input[aria-label="Show only the systems whose ligands match this SMARTS pattern"]',
  )!;

const type = (input: HTMLInputElement, value: string): void => {
  input.value = value;
  input.dispatchEvent(new Event("input"));
};

/** Type a pattern, then wait out the debounce and the sweep behind it. */
async function typeSmarts(node: HTMLElement, pattern: string): Promise<void> {
  type(smartsInput(node), pattern);
  await wait(400);
  await flush();
}

const button = (node: HTMLElement, text: string): HTMLButtonElement =>
  Array.from(node.querySelectorAll<HTMLButtonElement>("button")).find((b) => b.textContent === text)!;

describe("the alchemical network menu", () => {
  let engines: SeededEnginesResult;
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
    delete (globalThis as DebugGlobal).GUFE_VIZ_DEBUG;
    document.body.replaceChildren();
  });

  it("is collapsed until asked for", async () => {
    const node = mountNetwork();
    await flush();
    expect(hamburger(node)).toBeTruthy();
    expect(listRows(node)).toHaveLength(0);
  });

  it("does not build the system list until it is opened", async () => {
    // At two hundred systems the list is the most expensive thing in the view,
    // and a collapsed menu must not pay for it.
    const node = mountNetwork();
    await flush();
    expect(node.textContent).not.toContain("of 3 systems");

    hamburger(node).click();
    await flush();
    expect(node.textContent).toContain("3 of 3 systems");
    expect(listRows(node)).toHaveLength(3);
  });

  it("narrows the list to what a search matches, and dims the rest of the canvas", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);

    type(searchBox(node), "CCO in water");
    await flush();

    expect(listRows(node)).toHaveLength(1);
    expect(node.textContent).toContain("1 of 3 systems");
    // Dimmed, not removed: every box is still drawn.
    const opacities = nodeOpacities(node);
    expect(opacities).toHaveLength(3);
    expect(opacities.filter((o) => o === "1")).toHaveLength(1);
  });

  it("finds a system by a component it carries rather than by its own name", async () => {
    // Someone looking for a ligand is looking for the systems that carry it,
    // and none of them is called what the ligand is called.
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    const ligand = (readExample("alchemical_network.json") as { registry: { type: string; name?: string }[] }).registry
      .find((entry) => entry.type === "SmallMoleculeComponentViz")!;
    type(searchBox(node), ligand.name!);
    await flush();
    expect(listRows(node).length).toBeGreaterThan(0);
  });

  it("says nothing matches rather than showing an empty list", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    type(searchBox(node), "no system is called this");
    await flush();
    expect(listRows(node)).toHaveLength(0);
    expect(node.textContent).toContain("Nothing matches.");
  });

  it("offers no composition filter for a network whose systems are all alike", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    // One composition is nothing to choose between, which is the same rule the
    // colouring and the legend follow.
    expect(node.textContent).not.toContain("made of");
  });

  it("filters by what the systems are made of", async () => {
    const node = mountNetwork(network(true));
    await flush();
    hamburger(node).click();
    await flush();
    expect(listRows(node)).toHaveLength(3);

    const picker = Array.from(node.querySelectorAll("select")).find((s) =>
      Array.from(s.options).some((o) => o.value.includes("SmallMolecule")),
    )!;
    const leg = Array.from(picker.options).find((o) => o.value.includes("Solvent"))!.value;
    picker.value = leg;
    picker.dispatchEvent(new Event("change"));
    await flush();

    expect(listRows(node)).toHaveLength(2);
    expect(nodeOpacities(node).filter((o) => o === "1")).toHaveLength(2);
  });

  it("opens a system in the detail pane when its row is clicked", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    const rows = listRows(node);
    rows[rows.length - 1].click();
    await flush();
    const embedded = node.querySelector("gufe-chemical-system");
    expect(embedded).toBeTruthy();
    expect(embedded!.textContent).toContain(rows[rows.length - 1].textContent!);
  });

  it("copies the selected systems, and the transformations between them", async () => {
    const written: string[] = [];
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: (text: string) => (written.push(text), Promise.resolve()) },
    });

    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    // Two systems, so there is an edge between them to copy as well.
    const rows = listRows(node);
    rows[0].click();
    rows[1].dispatchEvent(new MouseEvent("click", { bubbles: true, metaKey: true }));
    await flush();

    button(node, "Systems").click();
    expect(written).toHaveLength(1);
    expect(written[0].split("\n")).toHaveLength(2);
    expect(node.textContent).toContain("Copied 2 systems.");

    button(node, "Transformations").click();
    expect(written).toHaveLength(2);
    expect(node.textContent).toMatch(/Copied \d+ transformations|No transformations between/);
  });

  it("clears a selection, and puts the whole canvas back", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    listRows(node)[0].click();
    await flush();
    expect(nodeOpacities(node).filter((o) => o === "1")).toHaveLength(1);

    button(node, "Clear selection").click();
    await flush();
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);
  });

  it("opens with the search it was left with, and applies it", async () => {
    flag("alchemical-network.menuOpen", false).set(true);
    textSetting("alchemical-network.query").set("CCO in water");

    const node = mountNetwork();
    await flush();
    // No click: the menu was already open, and a remembered search that only
    // narrows the list once someone touches the box is a filter that lies.
    expect(searchBox(node).value).toBe("CCO in water");
    expect(listRows(node)).toHaveLength(1);
    expect(nodeOpacities(node).filter((o) => o === "1")).toHaveLength(1);
  });

  /**
   * The SMARTS half the ligand network has, doing the other thing with it.
   *
   * There a match colours a molecule and hides nothing, because a node *is* a
   * molecule and there is a structure to colour. Here a node is a box with no
   * structure on it and its colour already means which leg it is on, so the
   * same question - which ligands contain this scaffold - is answered by
   * narrowing instead.
   */
  it("hides the systems whose ligands do not match a pattern", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    expect(listRows(node)).toHaveLength(3);

    await typeSmarts(node, "CCO");

    expect(listRows(node)).toHaveLength(1);
    expect(node.textContent).toContain("1 of 3 systems contain it");
    // Dimmed, not removed, as with every other filter here.
    const opacities = nodeOpacities(node);
    expect(opacities).toHaveLength(3);
    expect(opacities.filter((o) => o === "1")).toHaveLength(1);
  });

  it("puts every system back when the pattern is emptied", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();
    await typeSmarts(node, "CCO");
    expect(listRows(node)).toHaveLength(1);

    await typeSmarts(node, "");
    expect(listRows(node)).toHaveLength(3);
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);
  });

  it("leaves the network alone when RDKit refuses the pattern", async () => {
    const node = mountNetwork();
    await flush();
    hamburger(node).click();
    await flush();

    // A refused pattern is not "nothing matches": emptying the network would be
    // the wrong answer to a question that was never asked.
    await typeSmarts(node, "C(C");
    expect(node.textContent).toContain("does not accept that as a SMARTS pattern");
    expect(listRows(node)).toHaveLength(3);
    expect(nodeOpacities(node).every((o) => o === "1")).toBe(true);
  });

  it("sweeps each ligand once however many systems carry it", async () => {
    // A campaign runs every ligand twice, in solvent and in complex, so a sweep
    // indexed by system would parse each molecule twice for every pattern.
    const node = mountNetwork(readExample("alchemical_network_medium.json"));
    await flush();
    hamburger(node).click();
    await flush();

    const systems = listRows(node).length;
    const before = engines.depicted.length;
    await typeSmarts(node, "lig_ejm_31");
    const parsed = engines.depicted.length - before;

    expect(systems).toBe(20);
    expect(parsed).toBe(systems / 2);
  });

  it("opens with the pattern it was left with, and applies it", async () => {
    flag("alchemical-network.menuOpen", false).set(true);
    textSetting("alchemical-network.smarts").set("CCO");

    const node = mountNetwork();
    await flush();
    await wait(50);
    await flush();

    expect(listRows(node)).toHaveLength(1);
    expect(node.textContent).toContain("1 of 3 systems contain it");
  });

  it("carries the framejs export, and only behind the debug switch", async () => {
    const off = mountNetwork();
    await flush();
    hamburger(off).click();
    await flush();
    expect(off.textContent).not.toContain("Open in framejs");

    document.body.replaceChildren();
    (globalThis as DebugGlobal).GUFE_VIZ_DEBUG = true;
    const on = mountNetwork();
    await flush();
    hamburger(on).click();
    await flush();
    expect(on.textContent).toContain("Open in framejs");
  });
});
