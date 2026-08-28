/**
 * Resolving gufe keys against a payload's registry.
 *
 * Every reference in a payload, a network's nodes, a chemical system's
 * components, a mapping's two endpoints, a transformation's protocol, is a
 * gufe key, and the objects those keys name are carried once in the `registry`
 * on the payload the view was handed. This is the one place that turns a key
 * back into an object.
 *
 * There is no name-only stub anywhere in the contract, so what a key resolves to
 * is always a complete payload object: `lookup(registry, edge.componentA)` gives
 * back a whole `SmallMoleculeComponentViz`, SDF and all, which is exactly what
 * makes drilling into a network node possible at all.
 *
 * A key that resolves to nothing is a schema-valid payload the views have to
 * survive (JSON Schema cannot express "this key names an entry that exists")
 * so every resolver here returns `undefined` rather than throwing, and the
 * callers count what they dropped and say so on the page.
 */

import type { ChemicalSystemViz, ComponentViz, GufeKey, ProtocolViz, Registry } from "./types.js";

/** Anything a registry can hold. */
export type RegistryEntry = ComponentViz | ProtocolViz | ChemicalSystemViz;

/** A resolved registry: gufe key -> the object it names. */
export type RegistryIndex = ReadonlyMap<GufeKey, RegistryEntry>;

/** The empty index, for a payload that refers to nothing. */
export const EMPTY_REGISTRY: RegistryIndex = new Map();

interface MaybeCarriesRegistry {
  registry?: Registry;
}

/**
 * Index every registry reachable from `payload`.
 *
 * Python only ever writes a registry onto the root payload, so in practice this
 * finds one array. It walks anyway, because the schema allows a nested payload
 * to carry its own, a standalone mapping handed to a view *inside* another
 * payload, say, and a resolver that only looked at the root would silently fail
 * to find those entries.
 *
 * First writer wins on a duplicate key, matching the Python `Registry`: equal
 * gufe keys mean equal gufe objects, so the two entries are the same thing.
 */
export function buildRegistry(payload: unknown): RegistryIndex {
  const index = new Map<GufeKey, RegistryEntry>();
  collect(payload, index, new Set());
  return index;
}

function collect(node: unknown, into: Map<GufeKey, RegistryEntry>, seen: Set<object>): void {
  if (node == null || typeof node !== "object") return;
  if (seen.has(node)) return; // payloads are trees, but never trust a cycle away
  seen.add(node);

  if (Array.isArray(node)) {
    for (const item of node) collect(item, into, seen);
    return;
  }

  const entries = (node as MaybeCarriesRegistry).registry;
  if (Array.isArray(entries)) {
    for (const entry of entries) {
      const key = (entry as { "gufe-key"?: unknown })["gufe-key"];
      if (typeof key === "string" && key && !into.has(key)) into.set(key, entry);
    }
  }

  for (const value of Object.values(node)) collect(value, into, seen);
}

/** The entry `key` names, or `undefined` if the registry does not hold it. */
export function lookup(registry: RegistryIndex, key: GufeKey | undefined): RegistryEntry | undefined {
  return key ? registry.get(key) : undefined;
}

/** The same, narrowed to one `type` - `undefined` if absent *or* the wrong kind. */
export function lookupOfType<T extends RegistryEntry>(
  registry: RegistryIndex,
  key: GufeKey | undefined,
  type: T["type"],
): T | undefined {
  const entry = lookup(registry, key);
  return entry?.type === type ? (entry as T) : undefined;
}

/**
 * The entries `keys` name, in the order first asked for, without duplicates.
 *
 * This is the registry half of cutting a payload loose. A view that hands part
 * of its payload to another element - a network handing a chemical system to
 * `<gufe-chemical-system>`, a transformation handing a mapping to
 * `<gufe-atom-mapping>` - has to send the objects that part refers to along
 * with it, because the receiving element resolves keys against its own payload
 * and nothing else.
 *
 * Deduplicating matters rather than being tidy: the two states of a solvent-leg
 * transformation name the same solvent, and a registry is unique by gufe key.
 * A key that resolves to nothing is skipped, which leaves the receiving view to
 * report the gap exactly as it would have if the whole payload had arrived with
 * that hole in it.
 */
export function entriesFor(registry: RegistryIndex, keys: Iterable<GufeKey | undefined>): RegistryEntry[] {
  const entries: RegistryEntry[] = [];
  const seen = new Set<GufeKey>();
  for (const key of keys) {
    if (!key || seen.has(key)) continue;
    const entry = registry.get(key);
    if (!entry) continue;
    seen.add(key);
    entries.push(entry);
  }
  return entries;
}

/**
 * A label for a registry entry.
 *
 * gufe's own network fixtures have unnamed molecules, and a row of blank circles
 * is not a visualization, so fall back to the distinctive tail of the gufe key
 * rather than to nothing. That tail is a real identifier: it is deterministic
 * and repeatable, so the same ligand carries the same label on every reload.
 */
export function entryLabel(entry: { name?: string; "gufe-key": GufeKey }): string {
  if (entry.name) return entry.name;
  const tail = entry["gufe-key"].split("-").pop() ?? entry["gufe-key"];
  return tail.slice(0, 6);
}
