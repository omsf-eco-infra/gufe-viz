/**
 * The TypeScript half of the gate.
 *
 * `<gufe-view>` validates before it dispatches, against the very same
 * `schema/gufe-viz.schema.json` that Python validates against. A payload that
 * passes on one side passes on the other; a payload that fails, fails with the
 * same reason. That is the property the cross-language mutation suite exists to
 * hold onto.
 *
 * An invalid payload is never thrown at the caller. It comes back as a list of
 * issues, each naming the JSON pointer that failed, so the panel can say
 * `/data/total_charge: must be number` rather than "something went wrong".
 */

import Ajv2020, { type ErrorObject, type ValidateFunction } from "ajv/dist/2020.js";

import schema from "../../../schema/gufe-viz.schema.json" with { type: "json" };
import type { Payload, PayloadKind } from "./types.js";

export { PAYLOAD_KINDS } from "./types.js";

/**
 * The major `schema_version` this build understands.
 *
 * Kept in step with `SCHEMA_VERSION` in `python/gufe_viz/schema.py`; the schema
 * itself constrains `schema_version` with a pattern, so a bumped major is
 * rejected by both validators rather than only by this constant.
 */
export const SUPPORTED_SCHEMA_MAJOR = 1;

const SCHEMA_ID = schema.$id;

// `strict: false` because the schema carries OpenAPI's `discriminator` keyword,
// which Pydantic emits and Ajv does not implement. It is documentation here —
// the `kind` `const` in each branch is what actually does the discriminating.
const ajv = new Ajv2020({ allErrors: true, strict: false });
ajv.addSchema(schema, SCHEMA_ID);

const validateAny = ajv.getSchema(SCHEMA_ID) as ValidateFunction<Payload>;

/**
 * `kind` → a validator for just that branch.
 *
 * Validating against the whole union reports every branch's failures at once
 * ("must have property pdb", "must have property graphml", …), which is useless.
 * Validating against the one branch the payload claims to be reports what is
 * actually wrong with it.
 */
const byKind = new Map<string, ValidateFunction>();
for (const [kind, ref] of Object.entries(schema.discriminator?.mapping ?? {})) {
  const validator = ajv.getSchema(`${SCHEMA_ID}${(ref as string).replace(/^#/, "#")}`);
  if (validator) byKind.set(kind, validator);
}

/** Every `kind` the schema declares, whether or not a view exists for it. */
export const SCHEMA_KINDS: readonly PayloadKind[] = Object.keys(
  schema.discriminator?.mapping ?? {},
).sort() as PayloadKind[];

export interface ValidationIssue {
  /** JSON pointer into the payload, e.g. `/data/total_charge`. `""` is the root. */
  path: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

const VALID: ValidationResult = { valid: true, issues: [] };

function issuesFrom(errors: ErrorObject[] | null | undefined): ValidationIssue[] {
  return (errors ?? []).map((e) => ({
    path: e.instancePath || "",
    message:
      e.keyword === "additionalProperties"
        ? `unknown property ${JSON.stringify(e.params.additionalProperty)}`
        : (e.message ?? "is invalid"),
  }));
}

/**
 * The version gate, checked before the schema so the message is the useful one.
 *
 * A payload from a newer major fails the schema's version pattern anyway, but
 * "must match pattern ^1\.(0|[1-9][0-9]*)$" is not what a user needs to read.
 */
export function schemaVersionProblem(payload: unknown): string | null {
  if (payload == null || typeof payload !== "object") return null;
  const version = (payload as { schema_version?: unknown }).schema_version;
  if (typeof version !== "string") return null;

  const major = Number.parseInt(version.split(".")[0], 10);
  if (!Number.isFinite(major) || major <= SUPPORTED_SCHEMA_MAJOR) return null;

  return (
    `This file was written by a newer gufe-viz (schema ${version}); ` +
    `this build understands schema ${SUPPORTED_SCHEMA_MAJOR}.x. Upgrade gufe-viz to open it.`
  );
}

/**
 * Validate a payload against the contract.
 *
 * Dispatches to the single-branch validator when `kind` names a known one, so
 * the issues describe that kind rather than all eight.
 */
export function validatePayload(payload: unknown): ValidationResult {
  if (payload == null || typeof payload !== "object" || Array.isArray(payload)) {
    return { valid: false, issues: [{ path: "", message: "must be a JSON object" }] };
  }

  const kind = (payload as { kind?: unknown }).kind;
  const validator = typeof kind === "string" ? byKind.get(kind) : undefined;

  if (!validator) {
    // No `kind`, or a `kind` the schema has never heard of. The union validator
    // is the honest answer, and its failure is the one worth reporting.
    return validateAny(payload) ? VALID : { valid: false, issues: issuesFrom(validateAny.errors) };
  }

  return validator(payload) ? VALID : { valid: false, issues: issuesFrom(validator.errors) };
}

/** One line per issue, for a panel or a console warning. */
export function formatIssues(issues: readonly ValidationIssue[], limit = 8): string {
  const shown = issues.slice(0, limit).map((i) => `${i.path || "(root)"}: ${i.message}`);
  if (issues.length > limit) shown.push(`… and ${issues.length - limit} more`);
  return shown.join("\n");
}
