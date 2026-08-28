/**
 * What a view remembers between page loads.
 *
 * Every control a view offers - which layout the network is in, which mode the
 * mapping is showing, whether a protein has its waters on - is written to
 * `localStorage` when it changes and read back when the view is built. Two
 * reasons, and the second is the one that pays daily:
 *
 * * **Debugging.** "It looks wrong" is answerable when the settings that
 *   produced it survive a reload and can be read out of one place. `settings()`
 *   dumps the lot, and `resetSettings()` puts a view back to how a new reader
 *   would find it.
 * * **Not repeating yourself.** Someone comparing four mappings should not have
 *   to click into Pairs mode four times.
 *
 * ## What is stored, and what is not
 *
 * Preferences: how you want to look at a thing. Not *which* thing - a selected
 * edge or component belongs to the payload on screen, and restoring it onto a
 * different network would restore nonsense.
 *
 * ## Reading a stored value is never trusted
 *
 * The store outlives the code that wrote it. A mode that has since been renamed,
 * a number that has become an enum, a value someone edited by hand in devtools:
 * all of these arrive here looking like data. Every reader takes a validator and
 * falls back to the default rather than handing a view something it cannot draw,
 * which is why `choice()` exists rather than a bare `get`.
 *
 * Storage itself is also allowed to be missing. Private browsing, a sandboxed
 * iframe and a notebook's `srcdoc` frame can all throw on access rather than
 * return null, so every call is guarded and falls back to memory for the life of
 * the page.
 */

/**
 * Namespaced so a page hosting this alongside anything else stays legible.
 *
 * Exported because `settingsDump()` hands out prefixed keys, and a caller
 * writing them into some other browser has to be able to recognise its own.
 */
export const PREFIX = "gufe-viz:";

/** Used when `localStorage` cannot be reached, so settings still work per page. */
const memory = new Map<string, string>();

let storageWorks: boolean | null = null;

/**
 * Where `localStorage` actually is.
 *
 * Not always on `globalThis`. A host can put the document's globals on `window`
 * without copying every one of them up, and a notebook's iframe is the same
 * shape, so looking in one place only can find nothing and fall back to memory -
 * a setting that never persists and never says why.
 *
 * Some environments have neither, which is a real answer rather than a failure:
 * the test environment is one, and the memory fallback is what keeps a view
 * working there.
 */
function backing(): Storage | undefined {
  const direct = (globalThis as { localStorage?: Storage }).localStorage;
  if (direct) return direct;
  return (globalThis as { window?: { localStorage?: Storage } }).window?.localStorage;
}

/**
 * The backing store, or `null` when there is not one.
 *
 * Probed once with a real write, because merely reading `localStorage` succeeds
 * in some contexts that then throw on `setItem`.
 */
function store(): Storage | null {
  if (storageWorks === false) return null;
  const found = backing();
  if (!found) {
    storageWorks = false;
    return null;
  }
  try {
    const probe = `${PREFIX}__probe`;
    found.setItem(probe, "1");
    found.removeItem(probe);
    storageWorks = true;
    return found;
  } catch {
    storageWorks = false;
    return null;
  }
}

function readRaw(key: string): string | null {
  const backing = store();
  if (!backing) return memory.get(PREFIX + key) ?? null;
  try {
    return backing.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

function writeRaw(key: string, value: string): void {
  const backing = store();
  if (!backing) {
    memory.set(PREFIX + key, value);
    return;
  }
  try {
    backing.setItem(PREFIX + key, value);
  } catch {
    // Quota, or a store that lied about being writable. A setting that cannot
    // be saved is not worth failing a render over.
    memory.set(PREFIX + key, value);
  }
}

/** A stored preference: read it, write it. */
export interface Setting<T> {
  readonly key: string;
  get(): T;
  set(value: T): void;
}

/**
 * A setting of any JSON-representable type.
 *
 * `isValid` is not optional by accident. Whatever comes back has been sitting in
 * a browser since some earlier version of this code, and the only safe
 * assumption is that it might be anything.
 */
export function setting<T>(key: string, fallback: T, isValid: (value: unknown) => value is T): Setting<T> {
  return {
    key,
    get(): T {
      const raw = readRaw(key);
      if (raw === null) return fallback;
      try {
        const parsed: unknown = JSON.parse(raw);
        return isValid(parsed) ? parsed : fallback;
      } catch {
        return fallback;
      }
    },
    set(value: T): void {
      try {
        writeRaw(key, JSON.stringify(value));
      } catch {
        /* a value that will not stringify is not a setting */
      }
    },
  };
}

/** One of a fixed set of strings - a mode, a layout, a colour scheme. */
export function choice<T extends string>(key: string, fallback: T, allowed: readonly T[]): Setting<T> {
  return setting<T>(key, fallback, (value): value is T => typeof value === "string" && allowed.includes(value as T));
}

/** A checkbox, a toggle button, anything on or off. */
export function flag(key: string, fallback: boolean): Setting<boolean> {
  return setting<boolean>(key, fallback, (value): value is boolean => typeof value === "boolean");
}

/** A slider or a threshold, clamped to the range it was declared with. */
export function num(key: string, fallback: number, min = -Infinity, max = Infinity): Setting<number> {
  return setting<number>(
    key,
    fallback,
    (value): value is number => typeof value === "number" && Number.isFinite(value) && value >= min && value <= max,
  );
}

/** A search box or any other free text. */
export function text(key: string, fallback = ""): Setting<string> {
  return setting<string>(key, fallback, (value): value is string => typeof value === "string");
}

// --- looking at the whole store --------------------------------------------

/**
 * Every setting currently stored, as plain values.
 *
 * The debugging half of why this exists: one call answers "what state was this
 * view actually in", which is otherwise a hunt through a browser's storage
 * inspector.
 */
export function settings(): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  const backing = store();
  const keys = backing
    ? Array.from({ length: backing.length }, (_, i) => backing.key(i)).filter(
        (k): k is string => typeof k === "string",
      )
    : Array.from(memory.keys());

  for (const full of keys) {
    if (!full.startsWith(PREFIX)) continue;
    const raw = backing ? backing.getItem(full) : (memory.get(full) ?? null);
    if (raw === null) continue;
    try {
      out[full.slice(PREFIX.length)] = JSON.parse(raw);
    } catch {
      out[full.slice(PREFIX.length)] = raw;
    }
  }
  return out;
}

/**
 * Every setting as the store actually holds it: prefixed keys, unparsed values.
 *
 * `settings()` above is for reading, this is for copying. A host reproducing a
 * view somewhere else writes these back verbatim, and verbatim is the point: a
 * value that survived a parse-and-restringify round trip is a value this module
 * has had an opinion about, and the whole reason `setting()` takes a validator
 * is that those opinions are version-specific.
 */
export function settingsDump(): Record<string, string> {
  const out: Record<string, string> = {};
  const backing = store();
  const keys = backing
    ? Array.from({ length: backing.length }, (_, i) => backing.key(i)).filter(
        (k): k is string => typeof k === "string",
      )
    : Array.from(memory.keys());

  for (const full of keys) {
    if (!full.startsWith(PREFIX)) continue;
    const raw = backing ? backing.getItem(full) : (memory.get(full) ?? null);
    if (raw !== null) out[full] = raw;
  }
  return out;
}

/** Forget everything, putting every view back to how a new reader would find it. */
export function resetSettings(): void {
  const backing = store();
  if (backing) {
    for (const full of Object.keys(settings())) {
      try {
        backing.removeItem(PREFIX + full);
      } catch {
        /* nothing to do about a store that will not delete */
      }
    }
  }
  memory.clear();
}

/**
 * Test hook: put a raw string in the store, as an older version of this code
 * might have left behind.
 *
 * Goes through the same writer the module uses, so it lands wherever the store
 * actually is - which in some test environments is the in-memory fallback,
 * because `localStorage` is not there at all.
 */
export function _writeRawForTests(key: string, value: string): void {
  writeRaw(key, value);
}

/** Test hook: forget whether storage was reachable, so a fresh mock is probed. */
export function _resetStorageProbeForTests(): void {
  storageWorks = null;
}
