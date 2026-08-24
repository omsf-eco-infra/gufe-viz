/**
 * The ligand network's menu: search, the ligand list, and the score filter.
 *
 * All three were asked for at the feedback session, and all three carry a rule
 * that is easy to implement backwards: what does not match is **dimmed, not
 * removed**, because seeing what is missing is half of what a filter is for.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";
import { selectionText } from "../src/views/ligand-network.js";

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

  it("copies the selected ligand names, comma separated", async () => {
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
    expect(written[0].split(", ")).toHaveLength(1);
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

  it("lists selected ligands by name, comma separated", () => {
    const text = selectionText(nodes, edges, new Set(["k1", "k3"]), "ligands", "names");
    expect(text).toBe("lig_a, lig_c");
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
