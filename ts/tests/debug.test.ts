/**
 * The debug switch.
 *
 * What is being pinned down here is not "console.log was called" but the three
 * ways in - URL, attribute, global - because each one exists for a host the
 * other two cannot reach, and a page or a widget that quietly stops answering
 * to its switch is indistinguishable from one with nothing to say.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import "../src/index.js";
import { DEBUG_GLOBAL, debugEnabled, debugQuery, payloadJson, withDebugFlag } from "../src/shared/debug.js";
import { readExample } from "./helpers.js";

type DebugGlobal = { GUFE_VIZ_DEBUG?: unknown };

/** Everything the console prints in one call, as one string. */
function captured(spies: { log: ReturnType<typeof vi.spyOn> }): string {
  return spies.log.mock.calls.map((args) => args.map((a) => (typeof a === "string" ? a : JSON.stringify(a))).join(" ")).join("\n");
}

function spyOnConsole() {
  return {
    log: vi.spyOn(console, "log").mockImplementation(() => {}),
    group: vi.spyOn(console, "groupCollapsed").mockImplementation(() => {}),
    groupEnd: vi.spyOn(console, "groupEnd").mockImplementation(() => {}),
  };
}

function mountView(payload: unknown, attributes: Record<string, string> = {}): HTMLElement & { payload: unknown } {
  const view = document.createElement("gufe-view") as HTMLElement & { payload: unknown };
  for (const [name, value] of Object.entries(attributes)) view.setAttribute(name, value);
  document.body.appendChild(view);
  view.payload = payload;
  return view;
}

describe("debugEnabled", () => {
  beforeEach(() => {
    delete (globalThis as DebugGlobal).GUFE_VIZ_DEBUG;
    history.replaceState({}, "", "/");
  });
  afterEach(() => {
    delete (globalThis as DebugGlobal).GUFE_VIZ_DEBUG;
    history.replaceState({}, "", "/");
    document.body.replaceChildren();
    vi.restoreAllMocks();
  });

  it("is off by default", () => {
    expect(debugEnabled()).toBe(false);
    expect(debugEnabled(document.createElement("gufe-view"))).toBe(false);
  });

  it("answers to ?debug in the URL, so a written page needs no rebuild", () => {
    history.replaceState({}, "", "/?debug");
    expect(debugEnabled()).toBe(true);
  });

  it("answers to ?gufe-debug, for a host page that uses ?debug itself", () => {
    history.replaceState({}, "", "/?debug=other&gufe-debug");
    expect(debugEnabled()).toBe(true);
  });

  it("ignores an unrelated query string", () => {
    history.replaceState({}, "", "/?verbose=1");
    expect(debugEnabled()).toBe(false);
  });

  it("answers to the attribute `to_html(debug=True)` writes", () => {
    const view = document.createElement("gufe-view");
    view.setAttribute("debug", "");
    expect(debugEnabled(view)).toBe(true);
  });

  it("answers to the global a notebook widget can set", () => {
    (globalThis as Record<string, unknown>)[DEBUG_GLOBAL] = true;
    expect(debugEnabled()).toBe(true);
  });
});

describe("withDebugFlag", () => {
  beforeEach(() => history.replaceState({}, "", "/"));
  afterEach(() => history.replaceState({}, "", "/"));

  it("leaves a link alone when the switch is off", () => {
    expect(withDebugFlag("./index.html?file=a.json")).toBe("./index.html?file=a.json");
    expect(debugQuery()).toBe("");
  });

  /**
   * The case this exists for: debugging is turned on where the payloads are
   * listed, and the payload actually being debugged is opened from there.
   */
  it("carries ?debug from the page it is on into the link", () => {
    history.replaceState({}, "", "/gallery.html?debug");
    const href = withDebugFlag("./index.html?file=a.json");

    expect(href).toBe("./index.html?file=a.json&debug");
    // What the opened page reads is its own URL, so that is what has to answer.
    history.replaceState({}, "", "/" + href.slice(href.indexOf("?")));
    expect(debugEnabled()).toBe(true);
  });

  it("starts a query string when the link has none", () => {
    history.replaceState({}, "", "/gallery.html?debug");
    expect(withDebugFlag("./parity.html")).toBe("./parity.html?debug");
  });

  it("carries the value when the flag has one, and both flags when both are set", () => {
    history.replaceState({}, "", "/gallery.html?debug=verbose&gufe-debug");
    expect(withDebugFlag("./parity.html")).toBe("./parity.html?debug=verbose&gufe-debug");
  });

  it("keeps a fragment at the end, where it has to be", () => {
    history.replaceState({}, "", "/gallery.html?debug");
    expect(withDebugFlag("./index.html#card")).toBe("./index.html?debug#card");
  });

  it("does not add a second flag to a link that already says one", () => {
    history.replaceState({}, "", "/gallery.html?debug");
    expect(withDebugFlag("./index.html?gufe-debug")).toBe("./index.html?gufe-debug");
  });

  it("ignores a query string that only looks like the flag", () => {
    history.replaceState({}, "", "/gallery.html?debugging=1");
    expect(withDebugFlag("./parity.html")).toBe("./parity.html");
  });
});

describe("payloadJson", () => {
  it("is indented, and parses back to the payload", () => {
    const payload = readExample("small_molecule.json");
    const json = payloadJson(payload);

    expect(json).toContain("\n  ");
    expect(JSON.parse(json)).toEqual(payload);
  });

  it("describes a payload it cannot stringify rather than throwing", () => {
    const cyclic: Record<string, unknown> = { type: "SmallMoleculeComponentViz" };
    cyclic.self = cyclic;

    expect(() => payloadJson(cyclic)).not.toThrow();
    expect(payloadJson(cyclic)).toContain("could not be stringified");
  });
});

describe("<gufe-view> payload logging", () => {
  beforeEach(() => {
    delete (globalThis as DebugGlobal).GUFE_VIZ_DEBUG;
    history.replaceState({}, "", "/");
  });
  afterEach(() => {
    delete (globalThis as DebugGlobal).GUFE_VIZ_DEBUG;
    history.replaceState({}, "", "/");
    document.body.replaceChildren();
    vi.restoreAllMocks();
  });

  it("says nothing when the switch is off", () => {
    const spies = spyOnConsole();
    mountView(readExample("solvent.json"));

    expect(spies.log).not.toHaveBeenCalled();
    expect(spies.group).not.toHaveBeenCalled();
  });

  it("prints the payload verbatim when the attribute is set", () => {
    const spies = spyOnConsole();
    const payload = readExample("solvent.json");
    mountView(payload, { debug: "" });

    const printed = spies.log.mock.calls.map((args) => args[0]);
    const json = printed.find((a): a is string => typeof a === "string" && a.trimStart().startsWith("{"));
    expect(json).toBeDefined();
    expect(JSON.parse(json!)).toEqual(payload);
    // ...and the live object too, for a console that can expand it.
    expect(printed).toContainEqual(payload);
    expect(spies.group.mock.calls[0]?.[0]).toContain("gufe-viz");
  });

  it("prints a payload that will not validate, which is the case it is for", () => {
    history.replaceState({}, "", "/?debug");
    const spies = spyOnConsole();
    const broken = { type: "SmallMoleculeComponentViz", name: "no sdf here" };
    mountView(broken);

    expect(captured(spies)).toContain("no sdf here");
  });

  it("prints a payload of a type this build cannot draw", () => {
    history.replaceState({}, "", "/?debug");
    const spies = spyOnConsole();
    mountView({ type: "ChemicalSystemViz", name: "unsupported", components: {} });

    expect(captured(spies)).toContain("ChemicalSystemViz");
  });
});
