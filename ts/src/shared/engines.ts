/**
 * Lazy engine loaders.
 *
 * Nothing heavy is imported statically, because everything statically imported
 * blocks first paint. Each engine is fetched the first time a view actually
 * needs it: a protein page never pays for RDKit's ~7 MB of WebAssembly, and a
 * small-molecule page never pays for d3.
 *
 * A host may instead **pre-seed** an engine through `globalThis.__gufeEngines`,
 * in which case nothing is fetched at all. That is the hook the zero-network
 * HTML export uses: it inlines the engines into the page and hands
 * them over here. A seeded value may be the module itself or a promise for it.
 */

// --- minimal structural types for the three engines ------------------------
//
// None of these ship type declarations we can rely on, and vendoring a full
// @types package for three call sites would be worse than describing exactly
// what we use.

export interface ThreeDmolViewer {
  addModel(data: string, format: string): unknown;
  setStyle(selection: object, style: object): void;
  removeAllSurfaces(): void;
  addSurface(type: unknown, style: object, selection: object): unknown;
  zoomTo(): void;
  /** Multiply the current zoom. `shared/interact.ts` is what bounds it. */
  zoom(factor: number): void;
  /**
   * How near and how far the camera may get, as distances in the units
   * `CAMERA_Z` is in. 3Dmol applies these to every way it zooms - wheel, drag
   * and two-finger pinch - which is why `shared/interact.ts` hands them over
   * rather than only clamping the wheel it sees.
   *
   * Optional so that a host pre-seeding an older build degrades to the clamp
   * `interact.ts` applies itself, instead of throwing.
   */
  setZoomLimits?(lower: number, upper: number): void;
  /**
   * Where 3Dmol parks the camera. Distances are measured back from here, so the
   * zoom clamp needs it; optional for the same reason as above, and 150 is the
   * value every build has defaulted to.
   */
  CAMERA_Z?: number;
  /** A coloured sphere, which is how a mapped pair is marked. */
  addSphere(spec: object): unknown;
  /** A cylinder, dashed when asked - the line drawn between a mapped pair. */
  addCylinder(spec: object): unknown;
  /** Drop every sphere and cylinder, leaving the models alone. */
  removeAllShapes(): void;
  /** Style a subset on top of what `setStyle` already applied. */
  addStyle(selection: object, style: object): void;
  /**
   * The camera, for keeping two side-by-side viewers pointing the same way.
   * Index 3 is the camera's z, which is what the zoom clamp reads.
   */
  getView(): number[];
  setView(view: unknown): void;
  /** Turn the camera, in degrees about an axis. */
  rotate(angle: number, axis: string): void;
  render(): void;
  resize(): void;
  spin(axis: string | false): void;
  clear(): void;
}

export interface ThreeDmolModule {
  createViewer(element: HTMLElement, config: object): ThreeDmolViewer;
  SurfaceType: { VDW: unknown };
}

export interface RDKitMol {
  set_new_coords(useCoordGen: boolean): void;
  /**
   * Every match of a query molecule, as a JSON string: an array of
   * `{"atoms": [...], "bonds": [...]}` indexed against *this* molecule, which
   * is why the caller has to have parsed it the same way as whatever it is
   * about to draw. Optional like the two below, so a host pre-seeding an older
   * MinimalLib build loses SMARTS matching instead of throwing.
   */
  get_substruct_matches?(query: RDKitMol): string;
  /**
   * The molecule back out as a MOL block, which is how a generated 2D layout is
   * read: MinimalLib will write coordinates into a molecule but never lets a
   * caller write them back, so the round trip goes through text. Optional for
   * the same reason as `get_svg_with_highlights`, and a build without it simply
   * draws whatever coordinates it was handed.
   */
  get_molblock?(details?: string): string;
  get_svg(width: number, height: number): string;
  /**
   * Optional because it is the newer of the two drawing entry points: an
   * embedder that pre-seeds an older MinimalLib build has `get_svg` and not
   * this, so every caller falls back rather than assuming it is there.
   * `details` is the JSON form of RDKit's drawing options - `atoms`, `bonds`,
   * `width`, `height`, `legend`.
   */
  get_svg_with_highlights?(details: string): string;
  delete(): void;
}

export interface RDKitModule {
  get_mol(source: string, details?: string): RDKitMol | null;
  /**
   * A query molecule from SMARTS. Returns null when the pattern does not parse,
   * which is the whole of the error handling a typed-in pattern needs.
   */
  get_qmol?(smarts: string): RDKitMol | null;
}

interface SeededEngines {
  threeDmol?: ThreeDmolModule | Promise<ThreeDmolModule>;
  rdkit?: RDKitModule | Promise<RDKitModule>;
  d3?: unknown;
}

declare global {
  // eslint-disable-next-line no-var
  var __gufeEngines: SeededEngines | undefined;
  interface Window {
    $3Dmol?: ThreeDmolModule;
    RDKit?: RDKitModule;
    initRDKitModule?: (config?: object) => Promise<RDKitModule>;
  }
}

// --- where the engines come from when they are not pre-seeded --------------
//
// Pinned exactly, never to a range and never to whatever a CDN calls latest. A
// page built today and opened in a year has to draw the same picture, and an
// engine that changes under a fixed payload turns a rendering bug into one
// nobody can reproduce. RDKit is the sharpest case: the pinned `.js` is also
// what pins the `.wasm`, which Emscripten fetches from the script's own
// directory, and it is where feature detection like `get_qmol` gets its answer.
//
// Moving a pin is a deliberate edit here, with the page re-checked afterwards.

export const ENGINE_VERSIONS = {
  threeDmol: "2.5.5",
  rdkit: "2025.3.4-1.0.0",
  d3: "7.9.0",
} as const;

// Built here rather than at the import site, so the bundler leaves them alone
// and anything vendoring these instead has one obvious place to look.

export const ENGINE_URLS = {
  threeDmol: `https://unpkg.com/3dmol@${ENGINE_VERSIONS.threeDmol}/build/3Dmol-min.js`,
  rdkit: `https://unpkg.com/@rdkit/rdkit@${ENGINE_VERSIONS.rdkit}/dist/RDKit_minimal.js`,
  d3: `https://cdn.jsdelivr.net/npm/d3@${ENGINE_VERSIONS.d3}/+esm`,
} as const;

function preseeded<T>(name: keyof SeededEngines): Promise<T> | null {
  const seeded = globalThis.__gufeEngines?.[name];
  return seeded ? (Promise.resolve(seeded) as Promise<T>) : null;
}

/** Append a classic `<script>` and resolve when it has run. */
function loadScript(src: string, what: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${what}`));
    document.head.appendChild(script);
  });
}

// --- 3Dmol -----------------------------------------------------------------

/**
 * The resolved 3Dmol module, once `load3Dmol()` has settled.
 *
 * Views need it synchronously in places `await` cannot reach (3Dmol's own
 * `SurfaceType` enum, inside a `setTimeout`), which is why it is exposed as a
 * module-level handle rather than only through the promise.
 */
export let ThreeDmol: ThreeDmolModule | null = null;

let threeDmolPromise: Promise<ThreeDmolModule> | null = null;

export function load3Dmol(): Promise<ThreeDmolModule> {
  if (threeDmolPromise) return threeDmolPromise;

  const seeded = preseeded<ThreeDmolModule>("threeDmol");
  if (seeded) {
    threeDmolPromise = seeded.then((m) => (ThreeDmol = m || window.$3Dmol!));
    return threeDmolPromise;
  }

  threeDmolPromise = (async () => {
    if (window.$3Dmol) return (ThreeDmol = window.$3Dmol);
    await loadScript(ENGINE_URLS.threeDmol, "3Dmol.js");
    if (!window.$3Dmol) throw new Error("3Dmol.js loaded but $3Dmol is undefined");
    return (ThreeDmol = window.$3Dmol);
  })();
  return threeDmolPromise;
}

// --- RDKit -----------------------------------------------------------------

let rdkitPromise: Promise<RDKitModule> | null = null;

export function loadRDKit(): Promise<RDKitModule> {
  if (rdkitPromise) return rdkitPromise;

  const seeded = preseeded<RDKitModule>("rdkit");
  if (seeded) {
    rdkitPromise = seeded.then((m) => (window.RDKit = m));
    return rdkitPromise;
  }

  rdkitPromise = (async () => {
    if (window.RDKit) return window.RDKit;
    await loadScript(ENGINE_URLS.rdkit, "RDKit");
    if (!window.initRDKitModule) throw new Error("RDKit loaded but initRDKitModule is undefined");
    // RDKit is an Emscripten module: the .js above only registers the factory,
    // and this is what actually instantiates the WebAssembly.
    return (window.RDKit = await window.initRDKitModule());
  })();
  return rdkitPromise;
}

// --- d3 (graph views) ------------------------------------------------------

let d3Promise: Promise<unknown> | null = null;

export function loadD3(): Promise<unknown> {
  if (!d3Promise) {
    const url = ENGINE_URLS.d3;
    // Through a variable, so the bundler treats it as a runtime URL rather than
    // trying to resolve and inline a CDN module at build time.
    d3Promise = preseeded<unknown>("d3") ?? import(/* @vite-ignore */ url);
  }
  return d3Promise;
}

/** Test hook: forget every memoised loader so a fresh mock can be seeded. */
export function _resetEnginesForTests(): void {
  ThreeDmol = null;
  threeDmolPromise = null;
  rdkitPromise = null;
  d3Promise = null;
}
