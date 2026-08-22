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
 * `/total_charge: must be number` rather than "something went wrong".
 */

import Ajv2020, {
  type ErrorObject,
  type ValidateFunction,
} from "ajv/dist/2020.js";

import schema from "../../../schema/gufe-viz.schema.json" with { type: "json" };
import type { Payload, PayloadType } from "./types.js";

export { PAYLOAD_TYPES } from "./types.js";

const SCHEMA_ID = schema.$id;

const ajv = new Ajv2020({ allErrors: true, strict: false });
ajv.addSchema(schema, SCHEMA_ID);

const validateAny = ajv.getSchema(SCHEMA_ID) as ValidateFunction<Payload>;

/**
 * Every `type` the schema declares, whether or not a view exists for it.
 *
 * Read off the `$defs` rather than listed here, so it cannot fall behind the
 * contract. Every `$def` that declares a discriminator is named for the `type`
 * const it carries, which is what makes the lookup below a name lookup rather
 * than a table someone has to maintain.
 */
const DECLARED = Object.entries(schema.$defs)
  .filter(
    ([name, def]) =>
      (def as { properties?: { type?: { const?: string } } }).properties?.type
        ?.const === name,
  )
  .map(([name]) => name)
  .sort();

export const SCHEMA_TYPES: readonly PayloadType[] = DECLARED as PayloadType[];

/**
 * `type` -> a validator for just that branch.
 *
 * Validating against the whole union reports every branch's failures at once
 * ("must have property pdb", "must have property sdf", ...), which is useless.
 * Validating against the one branch the payload claims to be reports what is
 * actually wrong with it. `python/tests/test_mutations.py` picks its branch the
 * same way, so the two languages agree about error *locations* and not only
 * about pass or fail.
 */
const byType = new Map<string, ValidateFunction>();
for (const name of DECLARED) {
  const validator = ajv.getSchema(`${SCHEMA_ID}#/$defs/${name}`);
  if (validator) byType.set(name, validator);
}

export interface ValidationIssue {
  /** JSON pointer into the payload, e.g. `/total_charge`. `""` is the root. */
  path: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  issues: ValidationIssue[];
}

const VALID: ValidationResult = { valid: true, issues: [] };

function issuesFrom(
  errors: ErrorObject[] | null | undefined,
): ValidationIssue[] {
  return (errors ?? []).map((e) => ({
    path: e.instancePath || "",
    message:
      e.keyword === "additionalProperties"
        ? `unknown property ${JSON.stringify(e.params.additionalProperty)}`
        : (e.message ?? "is invalid"),
  }));
}

/**
 * Validate a payload against the contract.
 *
 * Dispatches to the single-branch validator when `type` names a known one, so
 * the issues describe that type rather than all of them.
 */
export function validatePayload(payload: unknown): ValidationResult {
  if (
    payload == null ||
    typeof payload !== "object" ||
    Array.isArray(payload)
  ) {
    return {
      valid: false,
      issues: [{ path: "", message: "must be a JSON object" }],
    };
  }

  const declared = (payload as { type?: unknown }).type;
  const validator =
    typeof declared === "string" ? byType.get(declared) : undefined;

  if (!validator) {
    // No `type`, or a `type` the schema has never heard of. The union validator
    // is the honest answer, and its failure is the one worth reporting.
    return validateAny(payload)
      ? VALID
      : { valid: false, issues: issuesFrom(validateAny.errors) };
  }

  return validator(payload)
    ? VALID
    : { valid: false, issues: issuesFrom(validator.errors) };
}

/**
 * Validate a payload against one named type, whatever `type` it claims to be.
 *
 * `validatePayload` trusts the discriminator; this does not. It is what proves
 * the types are actually distinguishable - a `SmallMoleculeComponentViz` must
 * fail as a `ProteinComponentViz` - which the top-level union cannot say,
 * because passing the union only means being *some* declared type. The Python
 * suite builds the same single-`$ref` document and asserts the same thing.
 *
 * An unknown type name is a caller error rather than a payload error, so it
 * comes back as an issue at the root instead of a throw.
 */
export function validateAs(type: string, payload: unknown): ValidationResult {
  const validator = byType.get(type);
  if (!validator) {
    return {
      valid: false,
      issues: [
        { path: "", message: `unknown payload type ${JSON.stringify(type)}` },
      ],
    };
  }
  return validator(payload)
    ? VALID
    : { valid: false, issues: issuesFrom(validator.errors) };
}

/** One line per issue, for a panel or a console warning. */
export function formatIssues(
  issues: readonly ValidationIssue[],
  limit = 8,
): string {
  const shown = issues
    .slice(0, limit)
    .map((i) => `${i.path || "(root)"}: ${i.message}`);
  if (issues.length > limit)
    shown.push(`... and ${issues.length - limit} more`);
  return shown.join("\n");
}
