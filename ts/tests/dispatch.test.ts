/**
 * `<gufe-view>` dispatch, and degrading gracefully when it cannot draw.
 *
 * The whole point of the explicit `type` discriminator is that a payload is
 * drawn by the view that claims that type, or by nothing at all and that
 * "nothing at all" is a panel, never a traceback.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { dispatchProblem, VIEW_TAGS } from "../src/gufe-view.js";
import { clearFakeEngines, exampleNames, flush, readExample, seedFakeEngines } from "./helpers.js";

function mountView(payload: unknown): HTMLElement & { payload: unknown } {
  const view = document.createElement("gufe-view") as HTMLElement & { payload: unknown };
  document.body.appendChild(view);
  view.payload = payload;
  return view;
}

/** Examples split by whether this build has a view for them. */
const DRAWABLE = exampleNames().filter((n) => (VIEW_TAGS as Record<string, string>)[readExample(n).type as string]);
const NOT_YET = exampleNames().filter((n) => !(VIEW_TAGS as Record<string, string>)[readExample(n).type as string]);

describe("dispatchProblem", () => {
  it("accepts a payload whose type has a view", () => {
    expect(dispatchProblem(readExample("small_molecule.json"))).toBeNull();
    expect(dispatchProblem(readExample("protein.json"))).toBeNull();
  });

  it("refuses a type it does not draw, by name", () => {
    const problem = dispatchProblem({ type: "AlchemicalNetworkViz", name: "", nodes: [], edges: [] });
    expect(problem).toContain("AlchemicalNetworkViz");
    expect(problem).toContain("no visualization");
  });

  it("refuses a payload with no type", () => {
    expect(dispatchProblem({ name: "nameless" })).toContain("no `type`");
  });

  it.each([null, undefined, 42, "a string", ["an", "array"]])("refuses a non-object payload: %s", (bad) => {
    expect(dispatchProblem(bad)).toContain("does not look like a gufe-viz payload");
  });

  // There is no version check to test: a payload carries no version, because
  // every consumer ships the reader and the writer in one artifact. What is
  // worth pinning is that a leftover version field is now simply an unknown
  // key, and is refused as one rather than silently tolerated.
  it("treats a leftover schema_version as the unknown key it now is", () => {
    const payload = { ...readExample("protein.json"), schema_version: "1.0" };
    expect(dispatchProblem(payload)).toContain("does not match the gufe-viz schema");
  });
});

describe("<gufe-view>", () => {
  beforeEach(() => seedFakeEngines());
  afterEach(() => {
    clearFakeEngines();
    document.body.replaceChildren();
  });

  it("shows a placeholder before any payload arrives", () => {
    const view = document.createElement("gufe-view");
    document.body.appendChild(view);
    expect(view.textContent).toContain("Waiting for data");
  });

  it.each(DRAWABLE)("mounts the right element for %s", async (name) => {
    const payload = readExample(name);
    const view = mountView(payload);
    await flush();

    const tag = VIEW_TAGS[payload.type as keyof typeof VIEW_TAGS]!;
    expect(view.querySelector(tag)).not.toBeNull();
  });

  // Types that have no view yet. A build handed one of these must say so plainly
  // rather than break, tested against real payloads rather than a made-up `type`.
  it.each(NOT_YET)("says it cannot draw %s yet, and does not throw", async (name) => {
    const payload = readExample(name);
    const view = mountView(payload);
    await flush();

    expect(view.textContent).toContain(String(payload.type));
    expect(view.textContent).toContain("no visualization");
  });

  it("covers every example either way", () => {
    expect(DRAWABLE.length + NOT_YET.length).toBe(exampleNames().length);
    expect(DRAWABLE.length).toBeGreaterThan(0);
  });

  it("degrades gracefully on an unknown type instead of throwing", async () => {
    const view = mountView({ type: "Nonsense", name: "x" });
    await flush();
    expect(view.textContent).toContain("Nonsense");
    expect(view.querySelector("gufe-small-molecule")).toBeNull();
  });

  it("swaps views when the payload changes type", async () => {
    const view = mountView(readExample("small_molecule.json"));
    await flush();
    expect(view.querySelector("gufe-small-molecule")).not.toBeNull();

    view.payload = readExample("protein.json");
    await flush();
    expect(view.querySelector("gufe-small-molecule")).toBeNull();
    expect(view.querySelector("gufe-protein")).not.toBeNull();
  });

  it("every registered tag is a defined custom element", () => {
    for (const tag of Object.values(VIEW_TAGS)) {
      expect(customElements.get(tag!), `${tag} is in VIEW_TAGS but never defined`).toBeTruthy();
    }
  });
});
