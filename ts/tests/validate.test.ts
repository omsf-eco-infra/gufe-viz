/**
 * The TypeScript half of the contract test.
 *
 * Same golden payloads, same mutation matrix, same schema file and same
 * expected outcomes as `python/tests/test_mutations.py`. If the two validators
 * ever disagree about what a valid payload is, one of these suites goes red -
 * which is the only way "a payload that passes Python validation always passes
 * TypeScript validation and vice versa" can be more than an intention.
 */

import { describe, expect, it } from "vitest";

import { PAYLOAD_TYPES } from "../src/schema/types.js";
import { formatIssues, SCHEMA_TYPES, validateAs, validatePayload } from "../src/schema/validate.js";
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

  it.each(exampleNames())("%s validates as its own type and as no other", (name) => {
    // Passing the union only means being *some* declared type. This is what
    // says it is the intended one, and it is the same assertion
    // `test_validates_as_its_own_type_and_as_no_other` makes in pytest.
    const payload = readExample(name);
    const declared = payload.type as string;

    expect(validateAs(declared, payload).valid).toBe(true);
    for (const other of SCHEMA_TYPES) {
      if (other === declared) continue;
      expect(validateAs(other, payload).valid, `${name} also validates as ${other}`).toBe(false);
    }
  });

  it("covers more than one type", () => {
    const types = new Set(exampleNames().map((n) => readExample(n).type));
    expect(types.size).toBeGreaterThan(1);
  });
});

describe("type parity", () => {
  it("the schema and the generated type list agree", () => {
    expect([...SCHEMA_TYPES].sort()).toEqual([...PAYLOAD_TYPES].sort());
  });

  it("every type the dispatch table draws is one the schema declares", () => {
    // The converse is deliberately false: a declared type with no view renders
    // the "no visualization for X yet" panel.
    for (const declared of Object.keys(VIEW_TAGS)) {
      expect(SCHEMA_TYPES, `${declared} is drawn but not declared`).toContain(declared);
    }
  });
});

// --- the matrix ------------------------------------------------------------

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
    label: `${name.replace(/\.json$/, "")} - ${mutation.id}`,
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

    expect(valid, `Ajv accepted ${mutation.id} - ${mutation.why}`).toBe(false);

    if (mutation.pointerContains) {
      // A rejection for the wrong reason is not a pass.
      const paths = issues.map((i) => i.path);
      expect(
        paths.some((p) => p.includes(mutation.pointerContains!)),
        `rejected at ${JSON.stringify(paths)}, not ${mutation.pointerContains}`,
      ).toBe(true);
    }
  });

  // Selection is not enough to check. A mutation can match a payload by `type`
  // and then be skipped for all of them because its path does not exist - a
  // typo in `"path"` does exactly that - and the row would look covered while
  // asserting nothing. So this applies each one for real and requires at least
  // one success. `python/tests/test_mutations.py` does the same, because a hole
  // that opens on only one side is the hole this whole matrix exists to close.
  it("every declared mutation applies cleanly to at least one payload", () => {
    const applied = new Map(MATRIX.map((m) => [m.id, 0]));
    for (const { name, mutation } of CASES) {
      try {
        applyMutation(readExample(name), mutation);
      } catch (e) {
        if (e instanceof PointerMissing) continue;
        throw e;
      }
      applied.set(mutation.id, applied.get(mutation.id)! + 1);
    }

    const neverRan = [...applied].filter(([, count]) => count === 0).map(([id]) => id);
    expect(neverRan, "mutations selected but never applied - check their `path`").toEqual([]);
    expect([...new Set(CASES.map((c) => c.mutation.id))].sort()).toEqual([...new Set(MATRIX.map((m) => m.id))].sort());
  });
});

describe("validation messages", () => {
  it("names the failing field, not just the payload", () => {
    const broken = readExample("small_molecule.json");
    broken.total_charge = "zero";

    const { valid, issues } = validatePayload(broken);
    expect(valid).toBe(false);
    expect(issues.map((i) => i.path)).toContain("/total_charge");
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

  it("reports a registry entry's failure at its own path", () => {
    // The property the single ComponentViz union buys: a component in a
    // registry is validated as itself, so the error names the component rather
    // than the payload that happens to carry it.
    const broken = readExample("chemical_system.json");
    (broken.registry as Record<string, unknown>[])[0].pdb = "ATOM\nEND\n";

    const { valid, issues } = validatePayload(broken);
    expect(valid).toBe(false);
    expect(issues.some((i) => i.path.startsWith("/registry/0"))).toBe(true);
  });

  it("reports a component key that is not a string at its own path", () => {
    // Components are gufe keys now. Putting the object back is the mistake the
    // old shape invites, and the error must land on the label that carries it.
    const broken = readExample("chemical_system.json");
    (broken.components as Record<string, unknown>).ligand = { type: "SmallMoleculeComponentViz" };

    const { valid, issues } = validatePayload(broken);
    expect(valid).toBe(false);
    expect(issues.some((i) => i.path.startsWith("/components/ligand"))).toBe(true);
  });
});
