/**
 * Shared test helpers: fake engines, and a place to read the golden payloads
 * from.
 *
 * The engines are pre-seeded through the same `globalThis.__gufeEngines` hook a
 * bundled-engines export would use, so the tests exercise the real loader path
 * rather than a mock of it - and nothing in the suite ever reaches for a CDN.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import {
  _resetEnginesForTests,
  type RDKitMol,
  type RDKitModule,
  type ThreeDmolModule,
  type ThreeDmolViewer,
} from "../src/shared/engines.js";

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
  /**
   * Every `setStyle` as the pair it was given. `calls` records only the
   * selection, which cannot distinguish "style these atoms" from "style nothing"
   * - and turning a representation off is `setStyle(selection, {})`.
   */
  styles: { selection: unknown; style: unknown }[];
  /** Spheres and cylinders, as the specs they were given. */
  shapes: { kind: "sphere" | "cylinder"; spec: Record<string, unknown> }[];
  cleared: boolean;
  /** The limits `setZoomLimits` was last given, null until it is called. */
  zoomLimits: { lower: number; upper: number } | null;
  /** How far the camera sits from the model, the number the zoom clamp reads. */
  distance(): number;
  /**
   * Move the camera without going through `zoom`, the way a drag or a pinch
   * does: 3Dmol handles those itself, so nothing of ours is called.
   */
  dragZoom(factor: number): void;
}

/** 3Dmol's own default, and what `interact.ts` assumes when a viewer is silent. */
const FAKE_CAMERA_Z = 150;

/** Whatever `zoomTo` settles on. Arbitrary: only ratios to it are asserted. */
const FAKE_OPENING_DISTANCE = 30;

export function makeFakeViewer(): FakeViewer {
  const calls: string[] = [];
  const record =
    (name: string) =>
    (...args: unknown[]) => {
      calls.push(args.length ? `${name}(${JSON.stringify(args[0])})` : name);
    };
  const styles: { selection: unknown; style: unknown }[] = [];
  const shapes: { kind: "sphere" | "cylinder"; spec: Record<string, unknown> }[] = [];

  // 3Dmol's camera in miniature, because the zoom clamp reads it rather than
  // counting its own calls: `zoom(f)` divides the camera-to-model distance,
  // `setZoomLimits` bounds that distance, and `getView` reports it back as
  // `CAMERA_Z - distance` at index 3. A fake that ignored all this would let a
  // broken clamp pass.
  let distance = FAKE_OPENING_DISTANCE;
  let limits: { lower: number; upper: number } | null = null;
  const clampDistance = (d: number): number => {
    if (!limits) return d;
    return Math.min(Math.max(d, limits.lower), limits.upper);
  };
  const position = () => [0, 0, 0, FAKE_CAMERA_Z - distance, 0, 0, 0, 1];
  const viewer = {
    calls,
    styles,
    shapes,
    cleared: false,
    addModel: record("addModel"),
    setStyle: (selection: object, style: object) => {
      calls.push(`setStyle(${JSON.stringify(selection)})`);
      styles.push({ selection, style });
    },
    removeAllSurfaces: record("removeAllSurfaces"),
    addSurface: () => {
      calls.push("addSurface");
      return Promise.resolve(1);
    },
    zoomLimits: null,
    distance: () => distance,
    dragZoom: (factor: number) => {
      distance = clampDistance(distance / factor);
    },
    zoomTo: () => {
      calls.push("zoomTo");
      distance = clampDistance(FAKE_OPENING_DISTANCE);
    },
    zoom: (factor: number) => {
      calls.push(`zoom(${JSON.stringify(factor)})`);
      distance = clampDistance(distance / factor);
    },
    setZoomLimits: (lower: number, upper: number) => {
      calls.push(`setZoomLimits(${lower},${upper})`);
      limits = { lower, upper };
      viewer.zoomLimits = limits;
      distance = clampDistance(distance);
    },
    addSphere: (spec: Record<string, unknown>) => {
      calls.push("addSphere");
      shapes.push({ kind: "sphere", spec });
    },
    addCylinder: (spec: Record<string, unknown>) => {
      calls.push("addCylinder");
      shapes.push({ kind: "cylinder", spec });
    },
    removeAllShapes: () => {
      calls.push("removeAllShapes");
      shapes.length = 0;
    },
    addStyle: (selection: object, style: object) => {
      calls.push(`addStyle(${JSON.stringify(selection)})`);
      styles.push({ selection, style });
    },
    // A camera the sync loop can read back, so two boxes agree without anything
    // actually rendering.
    getView: () => position(),
    setView: (next: unknown) => {
      // Unclamped, as in 3Dmol: `setView` restores a camera rather than moving
      // it by hand.
      const z = (next as number[])[3];
      if (typeof z === "number") distance = FAKE_CAMERA_Z - z;
      calls.push("setView");
    },
    rotate: (angle: number, axis: string) => {
      calls.push(`rotate(${angle},${axis})`);
    },
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
 * is that the view configures the simulation it says it does, and - because the
 * force path is what runs by default - that the view draws at all.
 *
 * It does stamp the nodes the way d3-force stamps them, because a payload cut
 * loose from a laid-out graph has to survive that and used to carry the
 * simulation's own bookkeeping into a view that validates it.
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
    forceSimulation: (nodes?: Record<string, unknown>[]) => {
      result.simulations++;
      // d3-force decorates every node it is handed: an index, and a velocity
      // per axis. Anything cut loose from a laid-out graph has to survive that,
      // so the fake stamps them too. Positions are left alone, as d3 leaves the
      // ones a view seeded itself.
      (nodes ?? []).forEach((node, index) => {
        node.index = index;
        node.vx ??= 0;
        node.vy ??= 0;
      });
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
  /** SMARTS patterns handed to `get_qmol`, including the ones it refused. */
  queried: string[];
  /** Depictions asked for with highlighted atoms, as the details RDKit was given. */
  highlighted: string[];
  /**
   * RDKit objects handed out and not yet deleted.
   *
   * Real ones are WebAssembly heap allocations that only `delete()` frees, and
   * a sweep over several hundred ligands per keystroke is where leaking one
   * each stops being survivable. So the fake counts them and a test can assert
   * the ledger came back to zero.
   */
  live(): number;
}

export interface SeedOptions {
  /** Seed d3 as something unusable, to exercise the offline fallback. */
  brokenD3?: boolean;
}

/**
 * Install fake 3Dmol, RDKit and d3 engines and reset the loaders' memoisation.
 *
 * Call in `beforeEach`; the returned object accumulates what the views did.
 */
/** Something for a depiction to consist of, so it is not an empty drawing. */
const FAKE_PATH = '<path d="M 0,0 L 10,10" stroke="#000"/>';

/** Whether every bracket in a pattern closes, which is all the fake validates. */
const balanced = (smarts: string): boolean => {
  let depth = 0;
  for (const ch of smarts) {
    if (ch === "(" || ch === "[") depth++;
    else if (ch === ")" || ch === "]") depth--;
    if (depth < 0) return false;
  }
  return depth === 0;
};

export function seedFakeEngines(options: SeedOptions = {}): SeededEnginesResult {
  let allocated = 0;
  let freed = 0;
  const result: SeededEnginesResult = {
    viewers: [],
    depicted: [],
    simulations: 0,
    queried: [],
    highlighted: [],
    live: () => allocated - freed,
  };

  const threeDmol: ThreeDmolModule = {
    createViewer: () => {
      const v = makeFakeViewer();
      result.viewers.push(v);
      return v;
    },
    SurfaceType: { VDW: "VDW" },
  };

  /**
   * A stand-in for substructure matching: the pattern is looked for in the
   * molblock as plain text.
   *
   * Not chemistry, and not trying to be - whether RDKit matches a ring is
   * RDKit's business, and re-testing it here would only test the fake. What
   * this makes testable is everything around the match: what gets coloured,
   * what a refused pattern does, what a superseded run does, and that nothing
   * leaks. A SMARTS of `Cl` therefore hits every molblock containing that text.
   */
  const fakeQuery = (smarts: string) => ({
    ...fakeMol(smarts),
    get_substruct_matches: () => "[]",
    smarts,
  });

  const fakeMol = (source: string) => ({
    set_new_coords: () => {},
    // Handing the source straight back stands in for RDKit generating a
    // layout: the coordinates do not move, but the views still run the
    // whole layout and alignment path rather than skipping it.
    get_molblock: () => source,
    // With a drawable element in it, deliberately: a title alone is what the
    // network view discards as an empty depiction, so an SVG that is only a
    // title would make every structure silently fail to inject and leave that
    // whole path untested. No class attributes, so the probe for whether this
    // build tags atoms and bonds still answers no.
    get_svg: (w: number, h: number) => `<svg viewBox="0 0 ${w} ${h}"><title>fake</title>${FAKE_PATH}</svg>`,
    get_svg_with_highlights: (details: string) => {
      result.highlighted.push(details);
      return `<svg viewBox="0 0 100 100"><title>fake-highlighted</title>${FAKE_PATH}</svg>`;
    },
    // The pattern travels on the query object the way it would on a real one:
    // RDKit keeps it in WebAssembly, the fake keeps it in a property.
    get_substruct_matches: (query: RDKitMol) => {
      const pattern = (query as RDKitMol & { smarts?: string }).smarts ?? "";
      if (!pattern || !source.includes(pattern)) return "[]";
      return JSON.stringify([{ atoms: [0, 1], bonds: [0] }]);
    },
    delete: () => {
      freed++;
    },
  });

  const rdkit: RDKitModule = {
    get_mol: (source: string) => {
      result.depicted.push(source);
      allocated++;
      return fakeMol(source);
    },
    // Unbalanced brackets stand in for a pattern RDKit refuses, which is what
    // half-typed ones mostly are.
    get_qmol: (smarts: string) => {
      result.queried.push(smarts);
      if (!balanced(smarts)) return null;
      allocated++;
      return fakeQuery(smarts);
    },
  };

  _resetEnginesForTests();
  // `brokenD3` seeds an object with no `forceSimulation` on it - which is what
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

/** Wait out something the view debounces, in real time. */
export const wait = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));

/**
 * The fake RDKit that `seedFakeEngines` installed.
 *
 * For the modules that take an `RDKitModule` directly rather than going through
 * a view, so both paths exercise the same stand-in.
 */
export function seededRDKit(): RDKitModule {
  return globalThis.__gufeEngines!.rdkit as RDKitModule;
}

// --- the mutation matrix ---------------------------------------------------
//
// Declared once in `python/tests/mutations.json` and applied identically here and in
// `python/tests/test_mutations.py`. Keeping the *table* shared rather than the
// code is what makes "both sides agree" a checkable claim instead of a hope.

export interface Mutation {
  id: string;
  why: string;
  op: "remove" | "replace" | "add";
  path: string;
  value?: unknown;
  types?: string[];
  expect: "valid" | "invalid";
  pointerContains?: string;
}

export function mutations(): Mutation[] {
  const path = join(import.meta.dirname, "..", "..", "python", "tests", "mutations.json");
  return JSON.parse(readFileSync(path, "utf-8")).mutations as Mutation[];
}

export function appliesTo(mutation: Mutation, payload: Record<string, unknown>): boolean {
  return !mutation.types || mutation.types.includes(payload.type as string);
}

/** Thrown when a mutation's path is absent - a silent no-op would pass as a test. */
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
    // Array steps let a mutation reach into `nodes` and `edges`; components are
    // reached by label instead, because a chemical system keys them the way
    // gufe does. `python/tests/conftest.py` walks pointers the same way,
    // deliberately: the two suites must apply identical edits.
    if (Array.isArray(node)) {
      const index = Number(part);
      if (!Number.isInteger(index) || index < 0 || index >= node.length) throw new PointerMissing(mutation.path);
      node = node[index] as Record<string, unknown>;
      continue;
    }
    const next = node[part];
    if (next == null || typeof next !== "object") throw new PointerMissing(mutation.path);
    node = next as Record<string, unknown>;
  }

  const leaf = parts[parts.length - 1];
  if (Array.isArray(node)) {
    // `-` is RFC 6901's "past the end" token: `add` there appends, which is what
    // the registry rows use. Anything else needs a real index.
    if (leaf === "-") {
      if (mutation.op !== "add") throw new Error(`op ${mutation.op} is not supported at the end of an array`);
      node.push(mutation.value);
      return result;
    }
    const index = Number(leaf);
    if (!Number.isInteger(index) || index < 0 || index >= node.length) throw new PointerMissing(mutation.path);
    if (mutation.op === "remove") node.splice(index, 1);
    else if (mutation.op === "replace") node[index] = mutation.value;
    else throw new Error(`op ${mutation.op} is not supported on an array element`);
    return result;
  }

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
