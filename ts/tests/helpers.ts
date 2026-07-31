/**
 * Shared test helpers: fake engines, and a place to read the golden payloads
 * from.
 *
 * The engines are pre-seeded through the same `globalThis.__gufeEngines` hook
 * the zero-network HTML export uses (R1, Phase 5), so the tests exercise the
 * real loader path rather than a mock of it — and nothing in the suite ever
 * reaches for a CDN.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { _resetEnginesForTests, type RDKitModule, type ThreeDmolModule, type ThreeDmolViewer } from "../src/shared/engines.js";

export const EXAMPLES_DIR = join(import.meta.dirname, "..", "..", "examples");

export function exampleNames(): string[] {
  return readdirSync(EXAMPLES_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort();
}

export function readExample(name: string): Record<string, unknown> {
  return JSON.parse(readFileSync(join(EXAMPLES_DIR, name), "utf-8"));
}

/** Every call a view makes on a 3Dmol viewer, recorded rather than rendered. */
export interface FakeViewer extends ThreeDmolViewer {
  calls: string[];
  cleared: boolean;
}

export function makeFakeViewer(): FakeViewer {
  const calls: string[] = [];
  const record =
    (name: string) =>
    (...args: unknown[]) => {
      calls.push(args.length ? `${name}(${JSON.stringify(args[0])})` : name);
    };
  const viewer = {
    calls,
    cleared: false,
    addModel: record("addModel"),
    setStyle: record("setStyle"),
    removeAllSurfaces: record("removeAllSurfaces"),
    addSurface: () => {
      calls.push("addSurface");
      return Promise.resolve(1);
    },
    zoomTo: record("zoomTo"),
    render: record("render"),
    resize: record("resize"),
    spin: record("spin"),
    clear() {
      calls.push("clear");
      viewer.cleared = true;
    },
  } as FakeViewer;
  return viewer;
}

/**
 * A d3 stand-in for the network view's force layout.
 *
 * The layout maths is d3's, not ours, so the stub does not simulate anything:
 * every force setter returns itself and `tick()` is a no-op, which leaves the
 * nodes on the deterministic circle the view seeds them on. What it does prove
 * is that the view configures the simulation it says it does, and — because the
 * force path is what runs by default — that the view draws at all.
 */
function makeFakeD3(result: SeededEnginesResult): unknown {
  const force = (): unknown => {
    const self: Record<string, () => unknown> = {};
    for (const setter of ["id", "distance", "strength", "distanceMin", "distanceMax", "iterations"]) {
      self[setter] = () => self;
    }
    return self;
  };

  return {
    forceSimulation: () => {
      result.simulations++;
      const simulation: Record<string, () => unknown> = {
        force: () => simulation,
        stop: () => simulation,
        tick: () => simulation,
        alphaMin: () => 0.001,
        alphaDecay: () => 0.0228,
      };
      return simulation;
    },
    forceLink: force,
    forceManyBody: force,
    forceCenter: force,
    forceCollide: force,
    forceX: force,
    forceY: force,
  };
}

export interface SeededEnginesResult {
  viewers: FakeViewer[];
  /** Molblocks handed to RDKit for depiction. */
  depicted: string[];
  /** Force simulations the network view asked d3 for. */
  simulations: number;
}

export interface SeedOptions {
  /** Seed d3 as something unusable, to exercise the offline fallback (R19). */
  brokenD3?: boolean;
}

/**
 * Install fake 3Dmol, RDKit and d3 engines and reset the loaders' memoisation.
 *
 * Call in `beforeEach`; the returned object accumulates what the views did.
 */
export function seedFakeEngines(options: SeedOptions = {}): SeededEnginesResult {
  const result: SeededEnginesResult = { viewers: [], depicted: [], simulations: 0 };

  const threeDmol: ThreeDmolModule = {
    createViewer: () => {
      const v = makeFakeViewer();
      result.viewers.push(v);
      return v;
    },
    SurfaceType: { VDW: "VDW" },
  };

  const rdkit: RDKitModule = {
    get_mol: (source: string) => {
      result.depicted.push(source);
      return {
        set_new_coords: () => {},
        get_svg: (w: number, h: number) => `<svg viewBox="0 0 ${w} ${h}"><title>fake</title></svg>`,
        delete: () => {},
      };
    },
  };

  _resetEnginesForTests();
  // `brokenD3` seeds an object with no `forceSimulation` on it — which is what
  // the view sees when the CDN is unreachable, and never a real fetch.
  globalThis.__gufeEngines = { threeDmol, rdkit, d3: options.brokenD3 ? {} : makeFakeD3(result) };
  return result;
}

export function clearFakeEngines(): void {
  _resetEnginesForTests();
  delete globalThis.__gufeEngines;
}

/** Let queued microtasks (the engine promises) settle. */
export const flush = (): Promise<void> => new Promise((r) => setTimeout(r, 0));

// ─── the mutation matrix ───────────────────────────────────────────────────
//
// Declared once in `schema/mutations.json` and applied identically here and in
// `python/tests/test_mutations.py`. Keeping the *table* shared rather than the
// code is what makes "both sides agree" a checkable claim instead of a hope.

export interface Mutation {
  id: string;
  why: string;
  op: "remove" | "replace" | "add";
  path: string;
  value?: unknown;
  kinds?: string[];
  expect: "valid" | "invalid";
  pointerContains?: string;
}

export function mutations(): Mutation[] {
  const path = join(import.meta.dirname, "..", "..", "schema", "mutations.json");
  return JSON.parse(readFileSync(path, "utf-8")).mutations as Mutation[];
}

export function appliesTo(mutation: Mutation, payload: Record<string, unknown>): boolean {
  return !mutation.kinds || mutation.kinds.includes(payload.kind as string);
}

/** Thrown when a mutation's path is absent — a silent no-op would pass as a test. */
export class PointerMissing extends Error {}

function splitPointer(pointer: string): string[] {
  if (pointer === "" || pointer === "/") return [];
  return pointer
    .replace(/^\//, "")
    .split("/")
    .map((part) => part.replace(/~1/g, "/").replace(/~0/g, "~"));
}

/** Return a deep copy of `payload` with one mutation applied. */
export function applyMutation(payload: Record<string, unknown>, mutation: Mutation): Record<string, unknown> {
  const result = structuredClone(payload);
  const parts = splitPointer(mutation.path);
  if (!parts.length) throw new Error(`mutation ${mutation.id} has an empty path`);

  let node: Record<string, unknown> = result;
  for (const part of parts.slice(0, -1)) {
    const next = node[part];
    if (next == null || typeof next !== "object") throw new PointerMissing(mutation.path);
    node = next as Record<string, unknown>;
  }

  const leaf = parts[parts.length - 1];
  switch (mutation.op) {
    case "remove":
      if (!(leaf in node)) throw new PointerMissing(mutation.path);
      delete node[leaf];
      break;
    case "replace":
      if (!(leaf in node)) throw new PointerMissing(mutation.path);
      node[leaf] = mutation.value;
      break;
    case "add":
      node[leaf] = mutation.value;
      break;
  }
  return result;
}
