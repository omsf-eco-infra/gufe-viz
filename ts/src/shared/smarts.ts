/**
 * SMARTS substructure matching, in the browser, over a fixed set of molecules.
 *
 * The ask this answers is "colour the ligands containing this substructure" -
 * colour rather than filter, on purpose, because you want to see the misses
 * too. So what comes back is which molecules matched and which of their atoms
 * did, and nothing here decides what that should look like.
 *
 * The control that drives it is at the bottom of this file: an input, a status
 * line and the debounce between them, which both network views had written out
 * identically. What a match then *means* still belongs to the view - the ligand
 * network colours with it, the alchemical network filters with it.
 *
 * RDKit is already in the page for the depictions, so matching costs no extra
 * download. It does cost a molecule parse each, which is the whole reason for
 * the shape of this file:
 *
 * - **Sliced.** Parsing is synchronous WebAssembly. Several hundred ligands in
 *   one pass is several hundred milliseconds of a frozen tab, so the sweep
 *   hands the thread back every few milliseconds and the page keeps painting
 *   while it works.
 * - **Cancellable.** Each run takes a generation, and a run whose generation has
 *   been superseded stops where it is. Typing a pattern starts a run per
 *   keystroke otherwise, and the last one to finish - not the last one typed -
 *   would win.
 * - **Cached.** A pattern already swept is returned from the cache, so a redraw,
 *   a layout change, or coming back to a pattern costs nothing.
 * - **Freed.** Every molecule and query is a WebAssembly heap allocation with a
 *   `delete()` that has to be called. One leaked molecule per ligand per
 *   keystroke is a tab that dies, so every allocation here is deleted in a
 *   `finally`, including on the cancelled path.
 */

import { el, errText, SELECT_CSS } from "./dom.js";
import type { RDKitModule, RDKitMol } from "./engines.js";
import type { Setting } from "./settings.js";
import { FONT } from "./style.js";
import { T } from "./theme.js";

/**
 * How long a slice of matching may hold the thread before it yields, and how
 * many molecules it may take whatever the clock says.
 *
 * Time first, because molecules are not the same size: the measured cost on a
 * two-hundred-ligand fixture of small aromatics is 0.29 ms each, and a real
 * project's ligands are several times that, so any fixed count is either
 * needlessly small for one network or a frozen frame on another. The count is a
 * ceiling on top of it, so that cheap molecules still hand the thread back
 * often enough for a keystroke to land.
 */
const SLICE_MS = 8;
const SLICE_MAX = 64;

/** What a sweep produced, or why it produced nothing. */
export type MatchOutcome =
  /** `matched` is node index to the atoms that matched, unioned over every match. */
  | { status: "ok"; matched: Map<number, number[]>; unreadable: number }
  /** The pattern was blank: not an error, just nothing to colour. */
  | { status: "cleared" }
  /** RDKit refused the pattern. */
  | { status: "invalid" }
  /** This RDKit build has no SMARTS entry points. */
  | { status: "unsupported" }
  /** A newer run started, so this one stopped and has nothing to say. */
  | { status: "superseded" };

/** Let the browser paint between slices. */
const yieldToPaint = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, 0));

/** Free a WebAssembly-backed RDKit object, whatever state it is in. */
function release(mol: RDKitMol | null): void {
  if (!mol) return;
  try {
    mol.delete();
  } catch {
    /* already freed */
  }
}

/**
 * The atoms of `source` that match `query`.
 *
 * An empty array is a molecule that read fine and did not match; `null` is a
 * molecule RDKit could not read at all. Keeping those apart is what lets the
 * sweep say "3 could not be read" instead of counting them as misses, which
 * would send someone hunting for a better pattern than the one they have.
 *
 * `removeHs` has to be whatever the *depiction* uses, because these indices are
 * what highlights the drawn structure: parse one way and draw the other and
 * every index above the first hydrogen points at the wrong atom, confidently.
 * The consequence to know about is that a pattern naming hydrogens explicitly
 * matches nothing when hydrogens have been stripped.
 */
export function matchAtoms(RDKit: RDKitModule, query: RDKitMol, source: string, removeHs: boolean): number[] | null {
  let mol: RDKitMol | null = null;
  try {
    mol = RDKit.get_mol(source, JSON.stringify({ removeHs }));
    if (!mol || !mol.get_substruct_matches) return null;
    const raw = mol.get_substruct_matches(query);
    const parsed: unknown = JSON.parse(raw || "[]");
    if (!Array.isArray(parsed)) return [];
    // Unioned across matches: a pattern hitting a molecule twice colours both,
    // and "which occurrence" is a question nobody watching the network asks.
    const atoms = new Set<number>();
    for (const hit of parsed) {
      const list = (hit as { atoms?: unknown }).atoms;
      if (!Array.isArray(list)) continue;
      for (const atom of list) if (typeof atom === "number") atoms.add(atom);
    }
    return [...atoms].sort((a, b) => a - b);
  } catch (e) {
    console.warn("[gufe-viz] SMARTS match threw -", errText(e));
    return null;
  } finally {
    release(mol);
  }
}

/**
 * A matcher over one fixed list of molecule sources, indexed as they are.
 *
 * `sources` is read once per run rather than held, and the indices in an
 * outcome are indices into it - which is what lets a caller hold a result
 * across a redraw that rebuilt every node in the DOM.
 */
export function createMatcher(
  rdkit: () => Promise<RDKitModule | null>,
  sources: readonly string[],
  removeHs = true,
): {
  run(smarts: string): Promise<MatchOutcome>;
  /** Abandon whatever is in flight. The next run supersedes it anyway. */
  cancel(): void;
} {
  const cache = new Map<string, Map<number, number[]>>();
  let generation = 0;

  const run = async (smarts: string): Promise<MatchOutcome> => {
    const pattern = smarts.trim();
    const mine = ++generation;
    if (!pattern) return { status: "cleared" };

    const cached = cache.get(pattern);
    if (cached) return { status: "ok", matched: cached, unreadable: 0 };

    const RDKit = await rdkit();
    if (mine !== generation) return { status: "superseded" };
    if (!RDKit) return { status: "unsupported" };
    if (!RDKit.get_qmol) return { status: "unsupported" };

    let query: RDKitMol | null = null;
    try {
      query = RDKit.get_qmol(pattern);
    } catch {
      query = null;
    }
    if (!query) return { status: "invalid" };
    // A build with `get_qmol` but no `get_substruct_matches` cannot match at
    // all, and finding that out per molecule would report it as "nothing
    // matched" - which is a different thing and sends the reader hunting for a
    // better pattern.
    if (!query.get_substruct_matches) {
      release(query);
      return { status: "unsupported" };
    }

    const matched = new Map<number, number[]>();
    let unreadable = 0;
    try {
      let sliceStart = performance.now();
      let inSlice = 0;
      for (let i = 0; i < sources.length; i++) {
        const atoms = sources[i] ? matchAtoms(RDKit, query, sources[i], removeHs) : null;
        if (!atoms) unreadable++;
        else if (atoms.length) matched.set(i, atoms);

        if (++inSlice < SLICE_MAX && performance.now() - sliceStart < SLICE_MS) continue;
        await yieldToPaint();
        if (mine !== generation) return { status: "superseded" };
        inSlice = 0;
        sliceStart = performance.now();
      }
    } finally {
      release(query);
    }

    cache.set(pattern, matched);
    return { status: "ok", matched, unreadable };
  };

  return { run, cancel: () => void ++generation };
}

// --- the control -----------------------------------------------------------

/**
 * How long typing pauses before a sweep starts.
 *
 * Long enough that a pattern typed at speed sweeps once rather than once per
 * character, short enough that a pause reads as "it is working" rather than as
 * "nothing happened". The sweep is cancellable either way, so this is about
 * work not started rather than about correctness.
 */
export const MATCH_DEBOUNCE_MS = 250;

export interface SmartsBoxOptions {
  /** In the empty box: "Colour by SMARTS", "Filter by SMARTS". */
  placeholder: string;
  /** For a screen reader, where the placeholder alone does not say what it does. */
  label: string;
  /** Where the pattern is kept, so it survives a reload. */
  remember: Setting<string>;
  /** Run a pattern. What a match then means is the view's business. */
  run(pattern: string): Promise<MatchOutcome>;
  /** What a successful sweep is worth saying. Only the counts differ per view. */
  describe(outcome: { matched: Map<number, number[]>; unreadable: number }): string;
}

/**
 * A SMARTS box and the line under it that says what the pattern did.
 *
 * The status line is not decoration. A pattern that matches nothing and a
 * pattern RDKit refused look identical on a canvas - nothing changes either way
 * - and they need different things done about them. Matching is also not
 * instant on a large network, so this is where the wait is visible instead of
 * the view looking inert.
 *
 * `apply` runs whatever is remembered. Views call it when the menu is built,
 * which is the first time it is opened: nothing here runs for a network nobody
 * opened the menu on.
 */
export function smartsBox(options: SmartsBoxOptions): { element: HTMLDivElement; apply(): void } {
  const element = el("div", "display:flex;flex-direction:column;gap:8px;");

  const input = el("input", `${SELECT_CSS}width:100%;box-sizing:border-box;`) as HTMLInputElement;
  input.type = "text";
  input.placeholder = options.placeholder;
  input.value = options.remember.get();
  input.spellcheck = false;
  input.setAttribute("aria-label", options.label);
  element.appendChild(input);

  // One line held open whether or not there is anything to say, so this reads
  // as a line that changes rather than as the list below twitching up and down
  // every time a pattern is typed, matched or refused. Every message fits one
  // line at the panel width these sit in; a longer one would want the wording
  // shortened rather than the space here grown.
  const note = el("div", `font-size:${FONT.tiny};line-height:1.5;min-height:1.5em;color:${T.textMuted2};`);
  element.appendChild(note);

  const describe = (outcome: MatchOutcome): string => {
    switch (outcome.status) {
      case "ok":
        return options.describe(outcome);
      case "invalid":
        return "RDKit does not accept that as a SMARTS pattern.";
      case "unsupported":
        return "This RDKit build cannot match SMARTS.";
      default:
        return "";
    }
  };

  const run = (pattern: string): void => {
    note.textContent = pattern.trim() ? "Matching..." : "";
    options.run(pattern).then(
      (outcome) => {
        // A superseded run is one someone has already typed past, and its count
        // would be the answer to a pattern that is no longer in the box.
        if (outcome.status !== "superseded") note.textContent = describe(outcome);
      },
      () => {
        note.textContent = "Matching failed.";
      },
    );
  };

  let timer = 0;
  input.oninput = () => {
    options.remember.set(input.value);
    window.clearTimeout(timer);
    timer = window.setTimeout(() => run(input.value), MATCH_DEBOUNCE_MS);
  };

  return {
    element,
    apply: () => {
      if (input.value.trim()) run(input.value);
    },
  };
}
