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
  Array.from(node.querySelectorAll<SVGGElement>("g[opacity]"));

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
