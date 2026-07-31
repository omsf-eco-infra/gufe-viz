/**
 * `<gufe-view>` dispatch (R19, R20).
 *
 * The whole point of the explicit `kind` discriminator is that a payload is
 * drawn by the view that claims that kind, or by nothing at all — and that
 * "nothing at all" is a panel, never a traceback.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import "../src/index.js";
import { dispatchProblem, SUPPORTED_SCHEMA_MAJOR, VIEW_TAGS } from "../src/gufe-view.js";
import { clearFakeEngines, exampleNames, flush, readExample, seedFakeEngines } from "./helpers.js";

function mountView(payload: unknown): HTMLElement & { payload: unknown } {
  const view = document.createElement("gufe-view") as HTMLElement & { payload: unknown };
  document.body.appendChild(view);
  view.payload = payload;
  return view;
}

/** Examples split by whether this build has a view for them. */
const DRAWABLE = exampleNames().filter((n) => (VIEW_TAGS as Record<string, string>)[readExample(n).kind as string]);
const NOT_YET = exampleNames().filter((n) => !(VIEW_TAGS as Record<string, string>)[readExample(n).kind as string]);

describe("dispatchProblem", () => {
  it("accepts a payload whose kind has a view", () => {
    expect(dispatchProblem(readExample("small_molecule.json"))).toBeNull();
    expect(dispatchProblem(readExample("protein.json"))).toBeNull();
  });

  it("refuses a kind it does not draw, by name", () => {
    const problem = dispatchProblem({ schema_version: "1.0", kind: "AlchemicalNetwork", data: {} });
    expect(problem).toContain("AlchemicalNetwork");
    expect(problem).toContain("no visualization");
  });

  it("refuses a payload with no kind", () => {
    expect(dispatchProblem({ schema_version: "1.0", data: {} })).toContain("no `kind`");
  });

  it.each([null, undefined, 42, "a string", ["an", "array"]])("refuses a non-object payload: %s", (bad) => {
    expect(dispatchProblem(bad)).toContain("does not look like a gufe-viz payload");
  });

  it("refuses a schema major from the future rather than guessing", () => {
    const future = `${SUPPORTED_SCHEMA_MAJOR + 1}.0`;
    const problem = dispatchProblem({ schema_version: future, kind: "SmallMoleculeComponent", data: { sdf: "" } });
    expect(problem).toContain(future);
    expect(problem).toContain("newer gufe-viz");
  });

  it("accepts a newer minor of the same major", () => {
    expect(
      dispatchProblem({ schema_version: `${SUPPORTED_SCHEMA_MAJOR}.99`, kind: "ProteinComponent", data: { pdb: "" } }),
    ).toBeNull();
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

    const tag = VIEW_TAGS[payload.kind as keyof typeof VIEW_TAGS]!;
    expect(view.querySelector(tag)).not.toBeNull();
  });

  // Kinds whose views arrive in Phase 4/5. A V1 build handed one of these must
  // say so plainly rather than break — the whole point of R19, tested against
  // real payloads rather than a made-up `kind`.
  it.each(NOT_YET)("says it cannot draw %s yet, and does not throw", async (name) => {
    const payload = readExample(name);
    const view = mountView(payload);
    await flush();

    expect(view.textContent).toContain(String(payload.kind));
    expect(view.textContent).toContain("no visualization");
  });

  it("covers every example either way", () => {
    expect(DRAWABLE.length + NOT_YET.length).toBe(exampleNames().length);
    expect(DRAWABLE.length).toBeGreaterThan(0);
  });

  it("degrades gracefully on an unknown kind instead of throwing", async () => {
    const view = mountView({ schema_version: "1.0", kind: "Nonsense", name: "x", data: {} });
    await flush();
    expect(view.textContent).toContain("Nonsense");
    expect(view.querySelector("gufe-small-molecule")).toBeNull();
  });

  it("swaps views when the payload changes kind", async () => {
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
