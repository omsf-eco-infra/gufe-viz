/**
 * The TypeScript half of the contract test (R10).
 *
 * Same golden payloads, same mutation matrix, same expected outcomes as
 * `python/tests/test_mutations.py`. If Ajv and Pydantic ever disagree about
 * what a valid payload is, one of these two suites goes red — which is the only
 * way "a payload that passes Python validation always passes TypeScript
 * validation and vice versa" can be more than an intention.
 */

import { describe, expect, it } from "vitest";

import { PAYLOAD_KINDS } from "../src/schema/types.js";
import { formatIssues, SCHEMA_KINDS, SUPPORTED_SCHEMA_MAJOR, validatePayload } from "../src/schema/validate.js";
import { VIEW_TAGS } from "../src/gufe-view.js";
import {
  applyMutation,
  appliesTo,
  exampleNames,
  mutations,
  PointerMissing,
  readExample,
  type Mutation,
} from "./helpers.js";

describe("the golden payloads", () => {
  it.each(exampleNames())("%s validates against the schema", (name) => {
    const { valid, issues } = validatePayload(readExample(name));
    expect(valid, formatIssues(issues)).toBe(true);
  });

  it("covers more than one kind", () => {
    const kinds = new Set(exampleNames().map((n) => readExample(n).kind));
    expect(kinds.size).toBeGreaterThan(1);
  });
});

describe("kind parity", () => {
  it("the schema and the generated type list agree", () => {
    expect([...SCHEMA_KINDS].sort()).toEqual([...PAYLOAD_KINDS].sort());
  });

  it("every kind the dispatch table draws is one the schema declares", () => {
    // The converse is deliberately false in V1: a declared kind with no view
    // renders the "no visualization for X yet" panel.
    for (const kind of Object.keys(VIEW_TAGS)) {
      expect(SCHEMA_KINDS, `${kind} is drawn but not declared`).toContain(kind);
    }
  });
});

// ─── the matrix ────────────────────────────────────────────────────────────

const MATRIX = mutations();

interface Case {
  name: string;
  mutation: Mutation;
  label: string;
}

const CASES: Case[] = exampleNames().flatMap((name) => {
  const payload = readExample(name);
  return MATRIX.filter((m) => appliesTo(m, payload)).map((mutation) => ({
    name,
    mutation,
    label: `${name.replace(/\.json$/, "")} — ${mutation.id}`,
  }));
});

describe("mutation matrix", () => {
  it.each(CASES.map((c) => [c.label, c] as const))("%s", (_label, testCase) => {
    const { name, mutation } = testCase;

    let mutated: Record<string, unknown>;
    try {
      mutated = applyMutation(readExample(name), mutation);
    } catch (e) {
      if (e instanceof PointerMissing) return; // path absent from this payload
      throw e;
    }

    const { valid, issues } = validatePayload(mutated);

    if (mutation.expect === "valid") {
      expect(valid, `Ajv rejected a payload it should accept:\n${formatIssues(issues)}`).toBe(true);
      return;
    }

    expect(valid, `Ajv accepted ${mutation.id} — ${mutation.why}`).toBe(false);

    if (mutation.pointerContains) {
      // A rejection for the wrong reason is not a pass.
      const paths = issues.map((i) => i.path);
      expect(
        paths.some((p) => p.includes(mutation.pointerContains!)),
        `rejected at ${JSON.stringify(paths)}, not ${mutation.pointerContains}`,
      ).toBe(true);
    }
  });

  it("every declared mutation matched at least one payload", () => {
    const exercised = new Set(CASES.map((c) => c.mutation.id));
    const declared = MATRIX.map((m) => m.id);
    expect([...exercised].sort()).toEqual([...new Set(declared)].sort());
  });
});

describe("validation messages", () => {
  it("names the failing field, not just the payload", () => {
    const broken = readExample("small_molecule.json");
    (broken.data as Record<string, unknown>).total_charge = "zero";

    const { valid, issues } = validatePayload(broken);
    expect(valid).toBe(false);
    expect(issues.map((i) => i.path)).toContain("/data/total_charge");
  });

  it("names an unknown property rather than saying 'additionalProperties'", () => {
    const broken = readExample("small_molecule.json");
    broken.typo = 1;

    const { issues } = validatePayload(broken);
    expect(formatIssues(issues)).toContain("typo");
  });

  it("reports a non-object as such rather than crashing", () => {
    for (const bad of [null, undefined, 42, "text", ["a"]]) {
      const { valid, issues } = validatePayload(bad);
      expect(valid).toBe(false);
      expect(issues[0].message).toContain("JSON object");
    }
  });

  it("rejects a schema major from the future by name", () => {
    const future = readExample("small_molecule.json");
    future.schema_version = `${SUPPORTED_SCHEMA_MAJOR + 1}.0`;
    expect(validatePayload(future).valid).toBe(false);
  });
});
