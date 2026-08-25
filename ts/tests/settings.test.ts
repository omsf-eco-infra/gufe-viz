/**
 * What a view remembers between page loads.
 *
 * The interesting cases are all about *not* trusting the store: it outlives the
 * code that wrote it, so a stale mode, a renamed layout or a hand-edited value
 * all arrive looking like data.
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

import "../src/index.js";
import {
  _resetStorageProbeForTests,
  _writeRawForTests as writeRaw,
  choice,
  flag,
  num,
  resetSettings,
  setting,
  settings,
  text,
} from "../src/shared/settings.js";
import { clearFakeEngines, flush, readExample, seedFakeEngines } from "./helpers.js";

describe("a stored setting", () => {
  it("starts at its default and remembers what it is set to", () => {
    const mode = choice("test.mode", "a", ["a", "b"]);
    expect(mode.get()).toBe("a");
    mode.set("b");
    expect(mode.get()).toBe("b");
    // A second handle on the same key sees it, which is what makes a reload work.
    expect(choice("test.mode", "a", ["a", "b"]).get()).toBe("b");
  });

  it("falls back when the stored value is no longer one of the choices", () => {
    // The case that matters: a mode gets renamed, and every browser that ever
    // showed the old one still has it written down.
    choice("test.mode", "a", ["a", "b"]).set("b");
    expect(choice("test.mode", "a", ["a", "c"]).get()).toBe("a");
  });

  it("falls back when the stored value is the wrong shape entirely", () => {
    flag("test.flag", false).set(true);
    expect(num("test.flag", 7).get()).toBe(7);
  });

  it("falls back on a number outside the range it was declared with", () => {
    num("test.score", 0, 0, 1).set(0.5);
    expect(num("test.score", 0, 0, 1).get()).toBe(0.5);
    // Written by hand in devtools, or by an older version with a wider range.
    writeRaw("test.score", "42");
    expect(num("test.score", 0, 0, 1).get()).toBe(0);
  });

  it("falls back on something that is not JSON at all", () => {
    writeRaw("test.text", "{not json");
    expect(text("test.text", "fallback").get()).toBe("fallback");
  });

  it("keeps working when there is no storage to write to", () => {
    // Private browsing and some sandboxed frames throw on access rather than
    // returning null. A setting that cannot be saved must not fail a render.
    //
    // Spied rather than replaced: swapping `globalThis.localStorage` out and
    // failing to put it back leaves every later test in this file without a
    // store, and the failure surfaces somewhere that looks unrelated.
    const failing = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("denied");
    });
    _resetStorageProbeForTests();

    try {
      const mode = choice("test.nostore", "a", ["a", "b"]);
      expect(() => mode.set("b")).not.toThrow();
      expect(mode.get()).toBe("b");
    } finally {
      failing.mockRestore();
      _resetStorageProbeForTests();
    }
  });

  it("lists what is stored, for when a view looks wrong", () => {
    choice("test.mode", "a", ["a", "b"]).set("b");
    num("test.score", 0, 0, 1).set(0.25);
    expect(settings()).toMatchObject({ "test.mode": "b", "test.score": 0.25 });

    resetSettings();
    expect(settings()).toEqual({});
  });

  it("validates with whatever the caller says", () => {
    const evens = setting<number>("test.even", 0, (v): v is number => typeof v === "number" && v % 2 === 0);
    evens.set(4);
    expect(evens.get()).toBe(4);
    writeRaw("test.even", "3");
    expect(evens.get()).toBe(0);
  });
});

describe("a view", () => {
  beforeEach(() => {
    seedFakeEngines();
  });

  const mount = (tag: string, fixture: string): HTMLElement => {
    const node = document.createElement(tag) as HTMLElement & { payload: unknown };
    document.body.appendChild(node);
    node.payload = readExample(fixture);
    return node;
  };

  const modeButtons = (node: HTMLElement): HTMLButtonElement[] =>
    Array.from(node.querySelectorAll("button")).filter((b) => ["3D", "Pairs", "Info"].includes(b.textContent ?? ""));

  it("opens in the mode it was left in", async () => {
    const first = mount("gufe-atom-mapping", "ligand_atom_mapping.json");
    await flush();
    modeButtons(first).find((b) => b.textContent === "Info")!.click();
    await flush();
    expect(first.textContent).toContain("Correspondence");

    document.body.replaceChildren();
    clearFakeEngines();
    seedFakeEngines();

    // A different element entirely, as a reload would be.
    const second = mount("gufe-atom-mapping", "ligand_atom_mapping.json");
    await flush();
    expect(second.textContent).toContain("Correspondence");
  });

  it("does not remember which thing was selected, only how to look at it", async () => {
    // A selection names ligands in the network on screen. Restoring it onto a
    // different network would restore nonsense.
    const node = mount("gufe-ligand-network", "ligand_network_named.json");
    await flush();
    const stored = Object.keys(settings());
    expect(stored.some((k) => k.includes("selection"))).toBe(false);
    expect(node.querySelector("gufe-atom-mapping")).toBeTruthy();
  });
});
