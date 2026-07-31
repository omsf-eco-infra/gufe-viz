#!/usr/bin/env node
/**
 * Generate `ts/src/schema/types.ts` from `schema/gufe-viz.schema.json`.
 *
 * The generated types are the TypeScript end of the contract: nothing in
 * `ts/src` describes a payload shape by hand, so a field added in
 * `python/gufe_viz/schema.py` cannot be forgotten on this side — it either
 * appears here or the build fails.
 *
 * Run with `pixi run types`. CI's `check-generated` job reruns it and diffs.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { compile } from "json-schema-to-typescript";

const REPO = join(import.meta.dirname, "..");
const INPUT = join(REPO, "schema", "gufe-viz.schema.json");
const OUTPUT = join(REPO, "ts", "src", "schema", "types.ts");

const BANNER = `/* eslint-disable */
/**
 * GENERATED — do not edit by hand.
 *
 * Source:  schema/gufe-viz.schema.json
 *          (itself generated from python/gufe_viz/schema.py)
 * Command: pixi run types
 *
 * CI rebuilds this file and fails if it differs from what is committed, so an
 * edit here is caught rather than quietly winning over the Pydantic models.
 */`;

const schema = JSON.parse(readFileSync(INPUT, "utf-8"));

let types = await compile(schema, "Payload", {
  bannerComment: BANNER,
  additionalProperties: false,
  declareExternallyReferenced: true,
  enableConstEnums: false,
  // The schema's own descriptions are the documentation; repeating the JSON
  // Schema keywords above every field is noise.
  format: true,
  style: { printWidth: 120 },
  cwd: dirname(INPUT),
});

/**
 * The `kind` union, hand-derived from the schema rather than from the generated
 * types: `PayloadKind` is what the dispatch table is keyed by, and deriving it
 * from `$defs` guarantees it lists every declared kind, view or no view.
 */
const kinds = Object.values(schema.$defs ?? {})
  .map((def) => def?.properties?.kind?.const)
  .filter((k) => typeof k === "string")
  .sort();

if (!kinds.length) {
  throw new Error("no `kind` discriminators found in the schema — did the Pydantic union change shape?");
}

types += `
/** The root union, under the name the rest of the codebase refers to it by. */
export type Payload = GufeVizPayload;

/**
 * Every declared \`kind\`, including those whose view has not been built yet.
 * Derived from the schema's \`$defs\`, so it cannot fall behind the contract.
 */
export type PayloadKind = ${kinds.map((k) => JSON.stringify(k)).join(" | ")};

/** The same list at runtime, for validators and dispatch-parity tests. */
export const PAYLOAD_KINDS: readonly PayloadKind[] = [${kinds.map((k) => JSON.stringify(k)).join(", ")}];
`;

writeFileSync(OUTPUT, types, "utf-8");
console.log(`wrote ${relative(REPO, OUTPUT)} (${types.length} bytes, ${kinds.length} kinds)`);
