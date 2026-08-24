# Response to PR #1 review

**Source:** [omsf-eco-infra/gufe-viz#1](https://github.com/omsf-eco-infra/gufe-viz/pull/1)
David Swenson (`CHANGES_REQUESTED`, Python + schema only, code-read not run),
Alyssa Travitz (partial, `COMMENTED`), plus Alyssa's concurrence with the
schema-first proposal on 2026-08-03.

**Status:** proposal. Nothing in here is implemented yet.

Deliberately written in plain ASCII, because one of the findings is that our
punctuation habits leaked into the schema.

---

## 0. The short version

Four things we got wrong, in descending order of cost:

1. **Pydantic-first instead of schema-first.** Both reviewers want the JSON
   Schema written directly. This deletes `schema.py` (334 lines), `gen_schema.py`,
   the pydantic dependency, and one whole layer of the design.
2. **The coalesced `ComponentDescriptor`.** Every component type shares one
   object with `sdf`, `pdb`, `smiles`, `positive_ion` ... all optional and all
   nullable. The rule "exactly one of these groups is populated" is enforced in
   the builder and *nowhere in the schema*. This is David's concrete example of
   the failure mode that motivates finding 1.
3. **`payload_for` raising on unrecognized objects.** gufe explicitly supports
   custom `Component` subclasses. Raising in Python kills the process; the right
   answer is a payload that renders as "sorry, I can't visualize this."
4. **Plan vocabulary in the artifact.** `R14`, `R19`, `PLAN Q4`, `Phase 5`
   and em-dashes are in docstrings, code comments and, worst, in JSON Schema
   `description` strings where they render as `—`. The plan is not
   committed, so these references point at nothing.

Findings 1-3 are architectural and invalidate most of Phase 2. Finding 4 is a
mechanical sweep that should land first because it makes everything else
reviewable.

Three follow-up decisions (§12) push further in the same direction than the
review asked: the payload carries **no version field** (§3.2), `gufe` is
**not declared in `pyproject.toml`** (§5.3), and `data`/`extra`/`schema_version`
all disappear, leaving one flat self-describing object shape used identically
standalone and nested.

---

## 1. Full feedback inventory

| # | Where | Who | Comment | Response |
|---|---|---|---|---|
| F1 | review body | David | Go schema-first; drop pydantic. Every object needs a Data + Payload + builder; only the builder is load-bearing. | **Accept.** See §2. |
| F2 | review body | Alyssa | "I'm in favor of this non-pydantic approach." | Settles F1. |
| F3 | `pixi.toml:20` | Alyssa | Moving away from pydantic in the stack; it is only here to emit a schema. | Correct, and it goes with F1. |
| F4 | `schema.py:109` | David | `ComponentDescriptor` coalesces all component types; the mutual exclusion is not in the schema. Use per-type subschemas plus one `UnknownComponent`. | **Accept.** See §3. |
| F5 | `test_mutations.py:1` | David | There should be a `jsonschema` test proving `sdf`/`pdb`/solvent exclusivity. | **Accept**, and generalize: negative tests that prove the schema forbids what we claim. See §7. |
| F6 | `payloads.py:342` | David | `NoVisualization` TypeError will often be wrong; a widget would be left disconnected. | **Accept.** See §4. |
| F7 | `payloads.py:326` | David | Why avoid `isinstance` and importing gufe at all? | **Accept**, we over-read R3. See §5. |
| F8 | `schema.py:30` | David | The "four-part shape" docstring lists five parts; and not everything carries a `name`. | **Accept.** The envelope goes away; `name` becomes required only where it is meaningful. See §3. |
| F9 | `schema.py:225` | David | Why is `ChemicalSystemData` separate from `ChemicalSystemFields`? | Artifact of the Data/Payload split; disappears with F1. |
| F10 | `schema.py:187` | David | A `LigandAtomMapping` is viewable standalone, so naming it into the graph context may be wrong. Not blocking. | **Accept as naming only**: two `$defs`, standalone and in-graph. See §3.4. |
| F11 | review body | David | Docstrings littered with references to an uncommitted plan. | **Accept.** See §6. |
| F12 | review body | David | Unicode (especially `—`) does not render once turned into JSON. | **Accept**, with a CI guard. See §6. |
| F13 | review body | David | Group related classes in one file: components/chemical systems, ligand networks, alchemical networks. | **Accept.** See §5. |
| F14 | `test_html.py:23` | David | "this is the sort of docstring that should not make it to production". | **Accept.** See §7. |
| F15 | `test_html.py:85` | David | "a whole lot of Claude putting instructions it was given into a test suite. We really should not need to test for this." | **Accept**, delete the test. See §7. |
| F16 | `html.py:54` | David | `string.Template` rather than `re`. Not blocking. | **Accept**, one-line change. |
| F17 | `html.py:17` | Alyssa | Is the plan to make RDKit/3Dmol available offline? | Answered by F18. |
| F18 | `html.py:17` | David | CDN first. Bundle for the widget. Decide per use case: CDN for a website he hosts, bundled behind a firewall. | **This changes the plan.** R1 as written ("no network calls, ever") is too strong. See §8. |
| F19 | `pyproject.toml:40` | Alyssa | Should deps live in `pyproject.toml`, `pixi.toml`, or both? | **Answered**: one rule, no duplication. §5.3. |
| F20 | `pyproject.toml:40` | David | pip-installable deps belong in `pyproject.toml`; but "we probably don't want people getting the currently pip-installable gufe". | **Accept**, and the hedge is justified: PyPI `gufe` is 0.4, conda-forge is 1.5.0. gufe stays undeclared in `pyproject.toml`. §5.3. |
| F21 | `element.ts:9` | Alyssa | "Here and in code comments I see references to `R*` - are these artifacts of you using claude?" | Yes. Same sweep as F11. |
| F22 | `cli.py:1` | David | Header docstring implies the file is not long-lived; not reviewed. | See §9, **open question Q12**. |

Not yet reviewed by anyone: the entire TypeScript side, and Alyssa has not
finished her pass.

---

## 2. Schema-first: what actually changes

**Deleted**

- `python/gufe_viz/schema.py` (334 lines of pydantic models)
- `scripts/gen_schema.py`
- `pixi run schema`, and the schema half of `check-generated`
- `pydantic` from `pyproject.toml` and `pixi.toml`

**Becomes the source of truth**

- `schema/gufe-viz.schema.json`, hand-written, `$defs`-based, one file.

**Unchanged**

- `ts/src/schema/types.ts` is still generated *from* the schema (`pixi run types`),
  still committed, still checked for freshness by CI. This is the one link in the
  chain that survives intact, and it is the one that actually prevents drift.
- Ajv still validates in the browser against the same file.

**Moves**

Validation on the Python side stops being "by construction" and becomes explicit.
Two places:

- **Tests**: every builder output, for every type and every variant, validated
  with `jsonschema`. This is the burden David named as the cost of schema-first,
  and it is the reason §7 matters more now than it did before.
- **Optionally, at runtime**: a `validate=False` keyword on `payload_for` that,
  when true, runs `jsonschema.validate` before returning. Off by default so
  production has no `jsonschema` import cost, on in tests and in the CLI. This is
  cheap insurance and I would like it; say the word if it is scope creep.

Single file vs one file per top-level type: David's sketch used a per-type `$id`
(`.../chemical-system-viz/1.0/chemical-system.schema.json`). Multi-file means Ajv
`addSchema` wiring and a resolver for `json-schema-to-typescript`. I propose
**one file with grouped `$defs`**, which is also what his sketch does internally.
Easy to split later if the file gets unwieldy.

---

## 3. The new payload shape

### 3.1 Self-describing objects, no envelope

Current shape, five keys, all the interesting content one level down:

```jsonc
{ "schema_version": "1.0", "kind": "ChemicalSystem", "name": "...",
  "data": { ... }, "extra": {} }
```

Proposed: an object is `type` plus its own fields, flat, and it is the *same
object* whether it stands alone or is nested. Following David's sketch:

```jsonc
{
  "type": "ChemicalSystemViz",
  "name": "benzene in water",
  "components": {
    "ligand":  { "type": "SmallMoleculeComponentViz", "name": "benzene", "sdf": "..." },
    "solvent": { "type": "SolventComponentViz", "name": "", "smiles": "O", ... }
  }
}
```

- `data` disappears. There is no per-type Data object, which is F1 and F9.
- `extra` disappears. It existed for forward compatibility; additive minor
  version bumps do the same job without a permanently-empty key in every payload
  and a test asserting it stays empty. This closes **PLAN Q5** by removing it.
- `kind` becomes `type`, and the value carries a `Viz` suffix. Worth doing: a
  `SmallMoleculeComponentViz` is a lossy visualization projection, not a
  `SmallMoleculeComponent`, and the suffix stops anyone from expecting a round
  trip. It also frees `type` from its current double duty (today
  `ComponentDescriptor.type` holds a gufe class name).
- `name` is required per-type where it means something and absent where it does
  not (F8). Components have names; a `LigandNetwork` built by an algorithm may
  not.

### 3.2 Versioning: dropped (Q10, answered)

David's sketch does not account for versions. My first proposal added a two-key
root wrapper (`{schema_version, object}`) to carry one. **Dropped**: there is no
V1 case where a reader and a writer can be at different versions.

- **Self-contained HTML.** Python builds the payload and inlines the exact
  bundle that reads it, in one call, from one installed package. Reader and
  writer ship inside the same file. A mismatch is not possible.
- **Notebook widget.** Same: the JS is bundled with the Python package.
- **Dev dropzone.** A stale payload JSON can meet a newer page, but this is a
  developer dragging a file, and Ajv already names the offending field. A
  version string would produce a worse message, earlier.

There was also a structural cost: `schema_version` was the only thing forcing a
root envelope, which is the same nesting David objected to in F1. Without it the
root is simply `{"type": "...", ...}` -- one shape everywhere, standalone or
nested, exactly as his sketch has it.

The schema file's `$id` still carries the version for humans and tooling
(`https://openfree.energy/schemas/gufe-viz/1.0/gufe-viz.schema.json`), at no
payload cost.

Not a one-way door: adding an optional `schema_version` property later is an
additive change that old readers ignore.

Deletes, on the TypeScript side: `schemaVersionProblem()`, the
version-major-refusal panel in `gufe-view.ts`, and two rows of the mutation
matrix.

### 3.3 Per-type component subschemas

`ComponentDescriptor` is replaced by a `oneOf` (F4), essentially David's sketch:

| `$def` | Required fields |
|---|---|
| `SmallMoleculeComponentViz` | `type`, `name`, `sdf`; optional `smiles`, `total_charge` |
| `ProteinComponentViz` | `type`, `name`, `pdb` |
| `SolvatedPDBComponentViz` | `type`, `name`, `pdb` |
| `ProteinMembraneComponentViz` | `type`, `name`, `pdb` |
| `SolventComponentViz` | `type`, `name`, `smiles`, `positive_ion`, `negative_ion`, `neutralize`, `ion_concentration` |
| `UnknownComponentViz` | `type`, `name` |

Two consequences worth naming:

- The `label` field goes away. Components sit in an object keyed by their
  `ChemicalSystem` label (`"components": {"ligand": {...}}`), which is both the
  gufe shape and one less denormalized field to keep consistent.
- **This is what makes component reuse structurally true.** The current design
  has `SmallMoleculeData` for the standalone case and `ComponentDescriptor` for
  the nested case: two shapes for one thing, so `<gufe-small-molecule>` cannot be
  dropped into the chemical-system view without a translation step. With one
  `$def` referenced from both, `<gufe-chemical-system>` renders each component by
  handing the sub-object to the element that claims its `type`, with no second
  code path. R14 was going to be hard to honour under the old shape and is nearly
  free under this one.

Dropping `minLength: 1` on the ion fields, per David's own note that the
requirement is probably wrong.

### 3.4 Ligand network and mapping (Q11, answered)

Keeping nodes-and-edges rather than GraphML, which nothing in the review
disputed and which R8 requires.

A `LigandAtomMapping` says "atom 3 of molecule A corresponds to atom 7 of
molecule B". Standalone, it must carry both molecules as SDF, because there is
nothing around it to get them from. As an edge inside a network, the molecules
are already in `nodes[]`. So: does the edge carry them a second time?

I first framed this as a payload-size tradeoff. Measured, that framing is weak:
even a realistic 30-ligand / 60-edge network is roughly 200 kB against 1 MB, and
Alyssa has already accepted much larger self-contained pages.

The real argument is structural. **If edges inline their own molecules, the
payload is not a graph.** The view would have to rebuild the node set by
deduplicating SDF *strings* to discover which edges share a ligand. Edges
reference node ids. Settled:

- `LigandAtomMappingViz` -- a top-level `$def` carrying both molecules, for
  standalone viewing. The name stays, per David's point that it is viewable in
  isolation.
- `LigandNetworkEdgeViz` -- `source` and `target` node ids plus the
  correspondence map and annotations. The view assembles a
  `LigandAtomMappingViz` from the node pair and the edge, and hands it to the
  same element. The seam already exists in `ligand-network.ts` as
  `mappingDataFor`.
- Each `$def` description points at the other, which is what remains of F10.
  David flagged the naming as non-blocking; this is a note in the PR, not a
  decision.
- The schema *cannot* express "every edge endpoint is a node id" (referential
  integrity is outside JSON Schema). That gap gets a `description` saying so
  explicitly, plus a Python test -- the whole point of F4 being not to leave
  claims hanging outside the schema.

---

## 4. Graceful degradation in Python (F6)

Rule, taken from David's sample code: **recognized types may raise; unrecognized
types degrade.**

- `payload_for(not_a_gufe_object)` raises `TypeError`. That is a programmer
  error and should be loud.
- `payload_for(some_custom_Component_subclass)` returns
  `{"type": "UnknownComponentViz", "name": "CustomThing(name='x')"}`, which the
  browser renders as "no visualization for this". No exception.
- Same inside a `ChemicalSystem`: one unrecognized or unserializable component
  does not take down the system view.
- `NoVisualization` is deleted.

This makes the browser's graceful path and the Python graceful path the same
path, which is what a widget needs.

The existing `error` field on `ComponentDescriptor` (set when a component fails
to serialize) is worth keeping in some form, as an optional `error` on
`UnknownComponentViz`. Flagging it because David's sketch does not have one.

---

## 5. Python structure and dependencies

### 5.1 Import gufe, use isinstance (F7)

We built a name-keyed, MRO-walking registry to avoid importing gufe. R3 in the
plan says gufe must not depend on *this*; we read it as "this should not depend
on gufe", which is not what it says and is not useful. Replaced by explicit
`isinstance` dispatch, most-derived first, exactly as in David's sample. The
subclass ordering (`ProteinMembraneComponent` and `SolvatedPDBComponent` before
`ProteinComponent`) becomes a comment plus a test instead of an MRO walk.

Deletes `_registry_lookup`, `PAYLOAD_REGISTRY`, and the lazy-import discipline in
`html.py` and `cli.py`.

### 5.2 File grouping (F13)

| File | Holds |
|---|---|
| `python/gufe_viz/components.py` | the five component builders, `component_payload` dispatch, `chemical_system_payload` |
| `python/gufe_viz/networks.py` | `ligand_atom_mapping_payload`, `ligand_network_payload` |
| `python/gufe_viz/alchemical.py` | `transformation_payload`, `alchemical_network_payload` |
| `python/gufe_viz/html.py` | unchanged in scope |
| `python/gufe_viz/__init__.py` | `payload_for`, `to_html` |

`payloads.py` and `schema.py` both disappear. Tests mirror the same split.

### 5.3 Dependencies: conda-forge for gufe (F19, F20, Q9 answered)

David's hedge about "the currently pip-installable gufe" is concrete:

| index | version | state |
|---|---|---|
| PyPI `gufe` | **0.4** | a single release, no summary, no description |
| conda-forge `gufe` | **1.5.0** | what `pixi.lock` resolves today |

PyPI `gufe` is abandoned at a version predating the 1.0 API. Declaring
`dependencies = ["gufe"]` would make `pip install gufe-viz` silently install a
package whose API does not exist any more. So **gufe is not declared in
`pyproject.toml` at all.**

That is the ordinary conda-forge shape rather than a workaround: the conda
recipe's `run:` requirements declare gufe, and `pyproject.toml` describes only
the pip path. It also gives Alyssa's question a rule with **no duplication**:

| Dep | Where | Why |
|---|---|---|
| `pydantic` | **removed** | F1 / F3 |
| `gufe` | `pixi.toml` only | conda-forge; PyPI's copy is the wrong package |
| `rdkit` | `pixi.toml` only | conda-forge build; also transitive through gufe |
| `nodejs` | `pixi.toml` only | not pip-installable |
| `python` | `pixi.toml` only | the environment itself |
| `jsonschema` | `pyproject.toml` `[test]` extra | pip-installable |
| `pytest` | `pyproject.toml` `[test]` extra | pip-installable |

Nothing is named twice: pixi picks up the test dependencies through
`gufe-viz = { path = ".", editable = true, extras = ["test"] }` rather than
restating them.

`pyproject.toml` therefore has **no runtime dependencies at all** once pydantic
is gone.

One consequence to state in the README rather than leave as a surprise:
`pip install gufe-viz` yields a working `to_html(payload_dict)` and a
non-functional `payload_for(gufe_object)`. The `import gufe` failure should
carry a message naming conda-forge, not surface as a bare `ImportError`.

---

## 6. The hygiene sweep (F11, F12, F21)

Every reference to `R<n>`, `N<n>`, `Q<n>`, `PLAN`, `Phase <n>` and
"the meeting" comes out of `python/`, `ts/`, `scripts/`, `schema/`, `*.toml`,
CI and the news fragments. Current count: **41 files**, worst offenders
`test_html.py` (8), `html.py` (6), `cli.py` (6), `schema/README.md` (5).

Where a comment exists only to cite a requirement, it is deleted. Where it
explains a real constraint, it is rewritten to explain the constraint itself,
because the constraint is the durable thing and the requirement number is not.
Concrete before/after:

> before: `Nothing here throws at the caller (R19).`
> after: `Nothing here throws at the caller: an unrenderable payload becomes a
> panel that names the problem, because the caller is often a notebook widget
> with no way to surface an exception.`

Non-ASCII: gone from `python/**`, `scripts/**` and `schema/**`. Currently 41
files contain em-dashes; those in schema `description` strings are the ones
David actually sees, but the habit is uniform so the fix should be too. Kept in
`ts/src/views/**` only where a character is deliberately user-facing (the
`"A -> B"` mapping title becomes ASCII too; I cannot think of a case that
genuinely needs it).

**CI guard**, so this does not come back: a `pixi run lint` step that greps
`python/ scripts/ schema/ ts/src/` for `\b[RNQ][0-9]{1,2}\b`, the literal
`PLAN`, and non-ASCII bytes in Python docstrings and schema descriptions.
Roughly ten lines of shell. Without it this regresses within a month.

**And the root cause:** the plan is a private working document that the code
started citing as though it were public API. It stays private, and it stops
being cited. That is a working-agreement change, §10.

---

## 7. Tests (F5, F14, F15)

Current: 191 pytest + 159 vitest for roughly 900 lines of Python. That ratio is
itself the finding.

**Rule to adopt:** a test asserts a property of the artifact that a user could
observe breaking. A test whose failure would only mean "we changed our minds
about an implementation detail" is deleted.

**Delete** (both **done**, 2026-08-03)

- `test_the_only_network_references_are_the_engine_cdns` (F15). It encoded an
  allowlist of seven URL substrings and a four-paragraph docstring justifying
  each. Under §8, "no network references" is not even the requirement any more;
  it is one option among two. The genuine version arrives with bundling:
  `to_html(obj, engines="bundled")` contains zero `http` references. One
  assertion, real failure mode, no allowlist.
  **Deviation from "delete":** the last four lines of the old test asserted the
  page loads nothing at parse time (no `<script src>`, no `<link href>`, no
  `<iframe>`), which is a genuine property and becomes load-bearing once
  `engines=` starts filling the `__ENGINES__` slot in the template. Kept as
  `test_nothing_is_fetched_at_parse_time`, four lines, no allowlist. The
  allowlist was the part David objected to.
- `test_returns_a_string_and_writes_nothing` (F14). It asserted a pure function
  is pure by checking that an empty temp directory stays empty. The docstring is
  the part David quoted, but the test earns its removal on its own. Its
  `startswith("<!doctype html>")` assertion moved into
  `test_page_is_self_contained` rather than being dropped silently.

Net: 191 pytest tests to 190.
- Anything asserting `extra == {}`, which goes with `extra` itself.
- The dispatch-parity test in its current form: it compared a Python registry, a
  Python tuple and a schema enum, two of which no longer exist. The useful half
  survives as "every `type` const in the schema is either in the TS dispatch
  table or deliberately unimplemented".

**Add**

- **Schema-strictness negatives** (F5), the direct answer to David's comment:
  a component object carrying both `sdf` and `pdb` is rejected; a
  `SolventComponentViz` carrying `sdf` is rejected; each per-type `$def` rejects
  every other type's distinguishing field. These are the tests that carry the
  burden schema-first shifts onto testing, and they are exactly the property that
  was unenforceable before.
- Every builder output validated against the committed schema with `jsonschema`,
  per type, at least two variants each. This already exists in spirit and needs
  rewiring to the hand-written schema.
- Referential-integrity test for ligand network edges (§3.4), since the schema
  cannot express it.

**Keep**

The mutation matrix in `schema/mutations.json`. It is data-driven, shared by both
suites, and it is the concrete form of David's original "mutation testing" ask.
It needs updating for the new shape, not deleting. Same for the lifecycle and
rendering tests on the TS side.

Expected outcome: fewer Python tests than today, and more of them load-bearing.

---

## 8. CDN vs bundling: a plan-level correction (F17, F18)

PLAN R1 says "No network calls, ever." David's clarification says the opposite in
one of the two cases he names: *"If people are viewing atom mappings on a website
I host, I want to use a CDN. If people need this behind a strict firewall, let's
bundle."*

So the requirement is not "never touch the network". It is **"it must be possible
to run with no network access, and each entry point chooses"**. That is a
materially different requirement and it changes the roadmap:

- Phase 5 ("Zero-network HTML") stops being a phase. It becomes an argument:
  `to_html(obj, engines="cdn" | "bundled")`, available as soon as the vendored
  engine assets exist.
- The notebook widget defaults to `bundled` (David: "we'll want the widget to
  bundle the other packages").
- `to_html` defaults to `cdn` today; whether that flips before release is
  Alyssa's call, since her stated vision is a file a pharma user opens offline.
  Adding it as **Q13**.

This is the one place where I think the plan, not the code, was the thing that
was wrong.

---

## 9. Smaller items

- **`string.Template` in `html.py`** (F16). Accept. Our template is ours, so `$`
  in substituted values is not a hazard. The `__TOKEN__` placeholders become
  `$code`, `$payload`, `$title`.
- **`cli.py`** (F22). It exists for the edit/rebuild/reload loop and is explicitly
  not the OpenFE CLI. Proposal: keep the code, drop the `gufe-viz` console script
  from `pyproject.toml`, and run it as `python -m gufe_viz`. That stops it looking
  like a shipped product surface while keeping it useful. **Q12** for Alyssa.
- **PLAN Q4** (which gufe loader round-trips a saved `.json`) is still open and
  still only affects the CLI's gufe-object input path. Unchanged by this review.

---

## 10. Proposed PLAN.md edits

| Section | Change |
|---|---|
| §1.1 **R1** | Rewrite. "No network calls, ever" becomes "must be able to run with zero network access; each entry point chooses CDN or bundled." Attribution moves to David's PR comment, which supersedes the meeting. |
| §1.1 **R19** | Strengthen. Graceful degradation is a Python requirement too, not only a browser one: unrecognized gufe subclasses produce an `UnknownComponentViz` payload, never an exception. |
| §1.1 **R3** | Clarify. R3 constrains the *direction* of the dependency edge (gufe must not import this). It does not mean this package avoids importing gufe. We misread it; that misreading produced the name-keyed registry. |
| §1.1 **R7** | Sharpen. The schema is not just "in this repo", it is **hand-written and is the source of truth**. No language generates it. |
| §2 Decisions | Replace "Pydantic models -> JSON Schema -> TS types" with "hand-written JSON Schema -> TS types; Python builders emit plain dicts, validated in tests". Add the reviewer attribution. |
| §3.1 diagram | Redraw. The schema moves to the top of the dataflow instead of the middle; pydantic disappears from the Python box. |
| §3.2 envelope | Replace wholesale with §3.1-3.2 of this document. Delete `extra`, delete `data`, `kind` becomes `type`. |
| §3.3 component model | Add a paragraph: per-type subschemas are what make R14's embedding structurally true rather than a convention. |
| §3.4 repo layout | `schema.py` and `payloads.py` out; `components.py` / `networks.py` / `alchemical.py` in; `scripts/gen_schema.py` out. |
| §5 Phase 2 | Rewrite PR 2.1 (hand-write the schema, no generator) and PR 2.3 (types generation only). `check-generated` covers types + bundle, not schema. |
| §5 Phase 5 | Delete as a phase; fold into Phase 3 as an `engines=` argument. Renumber 6/7/8. |
| §6 Testing | Add the "asserts a property a user could observe breaking" rule. Add schema-strictness negatives. Remove the no-network row and replace with the bundled-output row. |
| §7 Working agreement | Add: the plan is a private working document, the code never cites it, and committed source is ASCII. Add the CI guard as the enforcement. |
| §8 Open questions | Q5 closed (`extra` dropped). Q9 closed (gufe from conda-forge, undeclared in `pyproject.toml`). Q10 closed (no payload versioning). Q11 closed (edges reference node ids). Add Q12 (CLI entry point), Q13 (default `engines=`). |
| §3.2 / Appendix A | Remove `schema_version` from the payload contract entirely; the schema `$id` carries the version. |
| §9 Risks | Add a realized risk: "planning vocabulary leaks into the artifact and becomes unreadable to anyone outside the plan." Mitigation is the §6 guard. |
| Appendix A | `kind` column becomes `type`, values gain the `Viz` suffix. |

`PLAN-STATUS.md`: Phase 2 (all four PRs) and Phase 4.1 move from **finished** to
**needs rework**. Phases 0, 1 and 3.1/3.2 survive largely intact; 3.3 depends on
Q12.

---

## 11. Proposed PR sequencing

PR #1 is 60-plus files with `CHANGES_REQUESTED` and a structural rethink on top.
Suggest closing it or reducing it to Phase 0 + Phase 1, then landing the rework
as small PRs (R12, Alyssa hand-reviews everything). Order:

| PR | Content | Reviewable size |
|---|---|---|
| A | Hygiene sweep only: strip plan references and non-ASCII, delete the two tests David named, add the CI guard. **No behaviour change.** | Large diff, trivial review, and it makes B-D readable |
| B | Schema-first for components + `ChemicalSystem`: hand-written schema, pydantic out, `isinstance` dispatch, `UnknownComponentViz`, graceful degradation, file split. Seeded directly from David's sketch. | The substantive one |
| C | Ligand network + `LigandAtomMapping` on the new schema; TS views updated. | Medium |
| D | `string.Template`, `engines=` argument, `pyproject.toml`/`pixi.toml` dependency split, CLI decision. | Small |

A is worth landing on its own even if B-D get renegotiated.

---

## 12. Questions

**Answered by Dion, 2026-08-03** -- nothing here blocks implementation:

- **Q9 gufe dependency: conda-forge.** Not declared in `pyproject.toml`; PyPI's
  `gufe` is a stale 0.4 and would actively mislead pip users. §5.3.
- **Q10 versioning: dropped.** No V1 case has a reader and a writer at different
  versions, and the version field was the only thing forcing a root envelope.
  §3.2.
- **Q11 network edges: reference node ids.** Not a size tradeoff after
  measuring; a payload whose edges inline molecules is not a graph. §3.4.

Worth telling David and Alyssa, since Q9 and Q10 both simplify against what the
PR currently shows, and Q10 removes a mechanism the review never asked for.

Still open, and neither blocks PR A or B:

- **Q12** Keep the `gufe-viz` console script, or `python -m gufe_viz`? (Alyssa)
- **Q13** Should `to_html` default to `engines="cdn"` or `"bundled"`? (Alyssa)
- **Q4** Which gufe loader round-trips a saved `.json`? (David, Alyssa) -- affects
  only the CLI's gufe-object input path.
- **Q6**, **Q7** -- Phase 6, unchanged.

---

## 13. Second schema review (2026-08-17)

**Source:** a schema-only review of the reworked contract. One big-picture
finding, one concrete instruction, and two worked JSON sketches.

**Status:** implemented in full. The schema, both payload builder sets, both test
suites, the mutation matrix, the ligand-network view and the committed fixtures
all move together.

### 13.1 The finding

> "Sometimes there seem to be several schema objects representing the same
> Python objects ... it would be better to try to have one schema object that
> works for multiple use cases, instead of making multiple custom objects."

Accurate, and worse than it looked. Counting the old `$defs` against gufe
classes:

| gufe class | Old schema objects |
|---|---|
| `SmallMoleculeComponent` | `SmallMoleculeComponentViz`, `LigandNetworkNodeViz`, and the `molA_sdf`/`nameA` half of `LigandAtomMappingViz` |
| `LigandAtomMapping` | `LigandAtomMappingViz`, `LigandNetworkEdgeViz` |
| `ChemicalSystem` | `ChemicalSystemViz`, `AlchemicalNetworkNodeViz` |
| `Transformation` | `TransformationViz`, `AlchemicalNetworkEdgeViz` |
| `Component` (any) | plus `ComponentSummaryViz`, a name-only stub |
| `Protocol` | none - it was a bare class-name string |

The second remark is the one that mattered most:

> "I think we'll usually want the ability to drill into those objects. For
> example, with a ligand network, you'll want to see the individual molecules,
> so you'll need the SDF strings somehow."

`ComponentSummaryViz` made that impossible by construction. An alchemical
network's nodes carried `{label, gufe_type, name}` and nothing else, so opening
a node could never show the protein - the PDB was not in the payload at all.

### 13.2 What was implemented

Two rules, applied everywhere:

1. **One schema object per gufe class.** Every `*Viz` is the visualization form
   of exactly one `GufeTokenizable`. No class has two.
2. **Every reference is a gufe key, resolved against a `registry`.** The
   registry is an array of whole payload objects carried by the root payload,
   unique by `gufe_key`, sorted by `(type, gufe_key)` for byte-stable fixtures.

The review left room for up to two objects per class where deduplication forced
it. It did not turn out to be necessary: making the *reference* the key rather
than making a second reference-shaped object collapses every pair.

| Removed | Replaced by |
|---|---|
| `LigandNetworkNodeViz` | `nodes: [gufe key]` into a registry of `SmallMoleculeComponentViz` |
| `LigandNetworkEdgeViz` | `edges: [LigandAtomMappingViz]` - an edge simply *is* a mapping |
| `ComponentSummaryViz` | the whole `ComponentViz` in the registry |
| `AlchemicalNetworkNodeViz` | `ChemicalSystemViz`, whose `components` are keys |
| `AlchemicalNetworkEdgeViz` | `TransformationViz`, whose `stateA`/`stateB`/`protocol` are keys |
| `TransformationViz.protocol` as a class-name string | `ProtocolViz`, a registry entry every edge shares |

Net: five types removed, one added, and the class-to-object mapping is 1:1.

### 13.3 `gufe_key` on everything

> "Let's go ahead and add gufe-key as a field for *all* objects that directly
> represent a GUFETokenizable."

Done - required on all twelve types. **One deviation: the field is spelled
`gufe_key`, not `gufe-key`.** Every other field in the document is snake_case
(`total_charge`, `ion_concentration`, `componentA_to_componentB`), and a single
hyphenated key would be the only one needing bracket access in both languages.

**Settled 2026-08-20: `gufe_key` stands.** This is no longer an open question,
and the schema, the builders, the generated TypeScript types and the fixtures
are consistent with it throughout.

Both stated benefits are now real:

- **Deduplication.** It is the registry's key.
- **Debugging.** Every payload names the gufe object it came from, and a node's
  fallback label in the network view is the tail of its key rather than a blank
  circle.

### 13.4 The two sketches, as built

The ligand-network sketch is implemented as written, with one naming change:
the edge's endpoint fields are `componentA`/`componentB` rather than
`node_A_key`/`node_B_key`, because the edge is a `LigandAtomMappingViz` and
those are gufe's own property names on `LigandAtomMapping`.

The alchemical sketch is implemented one step further than written. The sketch
kept `ChemicalSystemSummaryViz` and `TransformationSummaryViz` as node and edge
types; putting the systems in the registry too removes the need for either, so
`ChemicalSystemViz` is the node and `TransformationViz` is the edge, unchanged
from their standalone forms. That is a stricter reading of the review's own
principle, and it is what gets the count to 1:1.

### 13.5 Nodes, edges and registries are not separate types

> "I don't think you need to make explicit types for nodes/edges/registries."

`nodes` is `[GufeKey]` inline. `edges` is an inline array of the reused mapping
or transformation type - named because it is genuinely reused standalone, which
is the exception the review allowed. `Registry` is a named `$def` only because
three types share it verbatim.

### 13.6 Where `registry` lives

On the **root** payload. `LigandNetworkViz` and `AlchemicalNetworkViz` always
carry one and it is required. `ChemicalSystemViz`, `LigandAtomMappingViz` and
`TransformationViz` declare it optional: present when they are the payload,
absent when the enclosing payload's registry already holds what they name.

The TypeScript side collects every registry it can reach into one
`Map<gufe_key, entry>` (`ts/src/schema/registry.ts`, ~40 lines), exactly as the
review suggested.

### 13.7 On "worrying about deduplication may be premature"

Noted, and the design now takes the escape hatch it offers: the registry is one
explicit, greppable mechanism rather than a shape decision baked into five
types. If it ever needs to go, deleting it means inlining registry entries at
their reference sites and touching one Python class and one TypeScript module -
not redesigning the schema.

It earns its place in the meantime. gufe's three-ligand fixture already has
three mappings naming six endpoints between them; inlining would carry each SDF
twice over, and a realistic forty-ligand network with a shared protein is where
the argument stops being theoretical.

### 13.8 What the schema still cannot say

Two constraints the registry introduces that JSON Schema cannot express, both
covered by tests and both degraded over by the views rather than crashed on:

- **Referential integrity** - a key that names no entry. Python tests hold the
  builders to never emitting one; the ligand-network view drops the node or the
  edge with a banner. Pinned as `expect: "valid"` rows in `mutations.json`.
- **Registry uniqueness** - "entries are unique by `gufe_key`". The Python
  `Registry` makes it true by construction; a test asserts it on the fixtures.

---

## 14. The inline schema comments (2026-08-20)

Six inline comments were left on `schema/gufe-viz.schema.json` alongside the
review body answered in section 13. Four are now closed; two need a decision
that is not ours to make.

| Line | Comment | Status |
|---|---|---|
| 194 | "Better to reuse the `SmallMoleculeComponentViz` here via a couple of `$ref`s" | **Closed by 13.2.** `molA_sdf`, `molB_sdf`, `nameA` and `nameB` are gone; a mapping names its two molecules by gufe key and the key resolves to a whole `SmallMoleculeComponentViz`. |
| 227 | "Why not just add the gufe key to `SmallMoleculeComponentViz`, and reuse it instead of creating more object types?" | **Closed by 13.2 and 13.3.** `LigandNetworkNodeViz` is deleted and `gufe_key` is required on all twelve types. |
| 175 | The atom map should be a list of `{index_A, index_B}` objects rather than an object keyed by a stringified index | **Implemented.** See 14.1. |
| 19 | Per-type schema documents, so a test can prove a payload is the *intended* type rather than merely some declared one | **Implemented for testing; open for publication.** See 14.2. |
| 3 | "`$id` should be an actual URL where we'll put a copy of this schema; where that lives is a decision for @atravitz" | **Open, blocked on that decision.** See 14.3. |
| 276 | Protocol settings are a v1 limitation, no action required | **Acknowledged.** `ProtocolViz` says so in its own `description`, and a `settings` field is additive when the time comes. |

### 14.1 Atom mappings as index pairs

`componentA_to_componentB` was an object keyed by molecule A's atom index. JSON
object keys can only be strings, so that shape put `"12"` on the wire where
Python had `12`, and both languages had to cast it back. It resembled gufe's
`dict[int, int]` without being it.

It is now a list, ordered by `index_A`:

```json
"componentA_to_componentB": [
  { "index_A": 0, "index_B": 0 },
  { "index_A": 1, "index_B": 2 }
]
```

Both indices stay integers, and the review's actual argument for the shape - "it
allows you to enforce that there needs to be an index B for every index A as
part of the schema" - is now a `required` rather than a builder's good manners.
The mutation matrix gains four rows: the old object shape must be refused, a
pair missing `index_B` must be refused, a negative index must be refused, and an
extra field on a pair must be refused.

**This is the shape David named as his preference and asked Alyssa to decide
on.** It is implemented rather than left open because it is contained - one
builder, one `$def`, one view line - so reverting to the object form is cheap if
she prefers it.

### 14.2 Proving a payload is the type it claims

The review's point is exact: the top-level `oneOf` says a payload is *some*
declared type, not that it is the intended one, so nothing in the suite ruled
out two types being loose enough to accept each other's payloads.

Both validators already dispatch to the single branch the payload's `type`
names, so error locations agree across languages. What is new is the negative
half: every committed example is now validated against the single-`$ref`
document for every *other* declared type, and a failure is required each time.
Python builds that document on the fly; TypeScript gets `validateAs(type,
payload)`, exported from `ts/src/index.ts`. Eleven fixtures against eleven other
types each - all pass.

What remains is the publication half - "if we're planning to publish this
schema, we should have endpoints for each object type". Those documents are
derivable from the union with the four-line function both suites already use, so
generating and committing them is small. It is deliberately not done yet,
because where they would be published is 14.3.

### 14.3 Open: where the schema lives

`$id` is currently `https://openfree.energy/schemas/gufe-viz/1.0/gufe-viz.schema.json`,
which is a placeholder and resolves to nothing. It needs a real URL, and per the
review the location is Alyssa's call. Two things follow from it and are blocked
until it is made:

- the `$id` itself, and whether the version segment is `1.0`, a release number,
  or absent;
- the per-type documents of 14.2, whose own `$id`s have to sit under it.
