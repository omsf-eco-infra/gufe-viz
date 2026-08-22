/**
 * A smoke test of the **built artifact**, not of the sources.
 *
 * Everything else in this suite imports `ts/src/**` and so proves the source is
 * right. It does not prove that what Vite emits into
 * `python/gufe_viz/_assets/gufe-viz.js` (the file that is committed, shipped in
 * the wheel, and inlined into every `to_html` page) actually runs. A broken
 * `vite.lib.config.ts` (a stray code-split, an externalised import that should
 * have been bundled) would sail past every other test here and only show up
 * when someone opened a generated page.
 *
 * So: load the built bundle the way a browser would, and drive it through the
 * same two lines the generated page's bootstrap uses.
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { afterEach, beforeAll, describe, expect, it } from "vitest";

import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";

const BUNDLE = join(import.meta.dirname, "..", "..", "python", "gufe_viz", "_assets", "gufe-viz.js");

describe("the built bundle", () => {
  beforeAll(async () => {
    // Guard rather than fail cryptically: this test is meaningless without a
    // build, and `pixi run build` is the fix.
    expect(existsSync(BUNDLE), `${BUNDLE} is missing - run \`pixi run build\``).toBe(true);
    await import(pathToFileURL(BUNDLE).href);
  });

  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("is a single file with no sibling chunks to load", () => {
    const source = readFileSync(BUNDLE, "utf-8");
    // `to_html` inlines this into one `<script type="module">`; a relative
    // import would point at a file that is not there.
    expect(source).not.toMatch(/\bfrom\s*["']\.\.?\//);
    expect(source).not.toMatch(/\bimport\s*\(\s*["']\.\.?\//);
  });

  it("registers the elements as a side effect of being loaded", () => {
    expect(customElements.get("gufe-view")).toBeTruthy();
    expect(customElements.get("gufe-small-molecule")).toBeTruthy();
    expect(customElements.get("gufe-protein")).toBeTruthy();
    expect(customElements.get("gufe-ligand-network")).toBeTruthy();
  });

  it("renders through the same two lines the generated page uses", async () => {
    const engines = seedFakeEngines();

    // Exactly what `python/gufe_viz/html.py`'s bootstrap does.
    document.body.innerHTML = "<gufe-view></gufe-view>";
    const view = document.querySelector("gufe-view") as HTMLElement & { payload: unknown };
    view.payload = readExample("small_molecule.json");
    await flush();

    expect(view.querySelector("gufe-small-molecule")).not.toBeNull();
    expect(view.textContent).toContain("benzene");
    expect(engines.viewers.length).toBeGreaterThan(0);
  });

  it("degrades gracefully, from the bundle, on a kind it cannot draw", async () => {
    seedFakeEngines();

    document.body.innerHTML = "<gufe-view></gufe-view>";
    const view = document.querySelector("gufe-view") as HTMLElement & { payload: unknown };
    view.payload = readExample("solvent.json");
    await flush();

    expect(view.textContent).toContain("no visualization");
    expect(view.textContent).toContain("SolventComponent");
  });
});
