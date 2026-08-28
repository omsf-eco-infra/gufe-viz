/**
 * SMARTS matching over a fixed set of molecules.
 *
 * The fake RDKit matches by looking for the pattern as text in the molblock, so
 * nothing here tests chemistry - that is RDKit's, and re-testing it would only
 * test the fake. What is tested is everything the view depends on and RDKit
 * does not provide: which molecules come back, that a refused pattern is told
 * apart from one that matched nothing, that a superseded run says so instead of
 * answering for a pattern nobody is looking at any more, that a repeat is free,
 * and that every WebAssembly allocation is freed.
 */

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { clearFakeEngines, seedFakeEngines, seededRDKit, type SeededEnginesResult } from "./helpers.js";
import { createMatcher } from "../src/shared/smarts.js";
import type { RDKitModule } from "../src/shared/engines.js";

/** Three molblock-ish sources: two contain an O, one does not. */
const SOURCES = ["C\n  O  1", "C\n  C  1", "O\n  O  2"];

let engines: SeededEnginesResult;

const matcherOver = (sources: readonly string[] = SOURCES, rdkit?: () => Promise<RDKitModule | null>) =>
  createMatcher(rdkit ?? (async () => seededRDKit()), sources);

describe("SMARTS matching", () => {
  beforeEach(() => {
    engines = seedFakeEngines();
  });
  afterEach(() => {
    clearFakeEngines();
  });

  it("returns the molecules that matched, indexed as the sources are", async () => {
    const outcome = await matcherOver().run("O");
    expect(outcome.status).toBe("ok");
    if (outcome.status !== "ok") return;
    expect([...outcome.matched.keys()]).toEqual([0, 2]);
    // The atoms come back too, because that is what highlights the structure.
    expect(outcome.matched.get(0)).toEqual([0, 1]);
    expect(outcome.unreadable).toBe(0);
  });

  it("tells a refused pattern apart from one that matched nothing", async () => {
    // These look identical on the canvas - nothing is coloured either way - and
    // they need different things done about them, so the difference has to
    // survive as far as the sidebar.
    const refused = await matcherOver().run("C(C");
    expect(refused.status).toBe("invalid");

    const missed = await matcherOver().run("Xx");
    expect(missed.status).toBe("ok");
    if (missed.status !== "ok") return;
    expect(missed.matched.size).toBe(0);
  });

  it("treats a blank pattern as nothing to do rather than as an error", async () => {
    expect((await matcherOver().run("   ")).status).toBe("cleared");
    // And never asks RDKit, because there is nothing to ask.
    expect(engines.queried).toHaveLength(0);
  });

  it("says so when the RDKit build cannot match at all", async () => {
    // A pre-seeded older MinimalLib has `get_mol` and no `get_qmol`. Reporting
    // that as "nothing matched" would send someone hunting for a better
    // pattern than the one they have.
    const old: RDKitModule = { get_mol: seededRDKit().get_mol };
    expect((await matcherOver(SOURCES, async () => old).run("O")).status).toBe("unsupported");
  });

  it("reports a run that a newer one superseded", async () => {
    const matcher = matcherOver();
    const first = matcher.run("O");
    const second = matcher.run("C");
    expect((await first).status).toBe("superseded");
    expect((await second).status).toBe("ok");
  });

  it("counts what it could not read separately from what did not match", async () => {
    const outcome = await matcherOver(["C\n  O  1", ""]).run("O");
    expect(outcome.status).toBe("ok");
    if (outcome.status !== "ok") return;
    expect(outcome.matched.size).toBe(1);
    expect(outcome.unreadable).toBe(1);
  });

  it("parses each molecule once per pattern, and not at all for a repeat", async () => {
    const matcher = matcherOver();
    await matcher.run("O");
    const first = engines.depicted.length;
    expect(first).toBe(SOURCES.length);

    await matcher.run("O");
    expect(engines.depicted).toHaveLength(first);
  });

  it("yields between slices instead of holding the main thread", async () => {
    // The failure this catches is a sweep that runs to completion in one go: on
    // a nine-hundred-ligand network that is a frozen tab per keystroke. A timer
    // queued after the sweep starts has to get its turn before the sweep ends -
    // which it cannot if the loop never yields, because a promise that settles
    // without yielding settles on the microtask queue, ahead of any timer.
    // Past the per-slice ceiling, so the sweep has to hand the thread back at
    // least once even though the fake costs no measurable time per molecule.
    const many = Array.from({ length: 200 }, (_, i) => (i % 2 ? "C" : "O"));
    const order: string[] = [];
    const sweep = matcherOver(many)
      .run("O")
      .then(() => order.push("sweep"));
    await new Promise((resolve) => setTimeout(() => resolve(order.push("timer")), 0));
    await sweep;
    expect(order).toEqual(["timer", "sweep"]);
  });

  it("frees every molecule and query it allocates", async () => {
    // The one that matters: these are WebAssembly heap allocations, and a sweep
    // per keystroke leaking one per ligand is a tab that dies.
    const matcher = matcherOver();
    await matcher.run("O");
    await matcher.run("C(C");
    await matcher.run("C");
    expect(engines.live()).toBe(0);
  });
});
