/**
 * Lazy engine loaders — ported from `code.js` lines 197–259.
 *
 * Nothing heavy is imported statically, because everything statically imported
 * blocks first paint. Each engine is fetched the first time a view actually
 * needs it: a protein page never pays for RDKit's ~7 MB of WebAssembly, and a
 * small-molecule page never pays for d3.
 *
 * A host may instead **pre-seed** an engine through `globalThis.__gufeEngines`,
 * in which case nothing is fetched at all. That is the hook the zero-network
 * HTML export (R1, Phase 5) uses: it inlines the engines into the page and hands
 * them over here. A seeded value may be the module itself or a promise for it.
 */

// ─── minimal structural types for the three engines ────────────────────────
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
  get_svg(width: number, height: number): string;
  delete(): void;
}

export interface RDKitModule {
  get_mol(source: string, details?: string): RDKitMol | null;
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

// ─── where the engines come from when they are not pre-seeded ──────────────
//
// Kept as plain string constants rather than literals at the import site so the
// bundler leaves the URLs alone, and so Phase 5 has one obvious place to look
// when it vendors these instead.

export const ENGINE_URLS = {
  threeDmol: "https://3dmol.org/build/3Dmol-min.js",
  rdkit: "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js",
  d3: "https://cdn.jsdelivr.net/npm/d3@7/+esm",
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

// ─── 3Dmol ─────────────────────────────────────────────────────────────────

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

// ─── RDKit ─────────────────────────────────────────────────────────────────

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

// ─── d3 (Phase 4/5 graph views) ────────────────────────────────────────────

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
