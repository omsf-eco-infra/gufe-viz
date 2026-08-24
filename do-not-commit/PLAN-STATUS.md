# PLAN-STATUS — progress against [`PLAN.md`](./PLAN.md)

Status markers: **finished** · **in progress** · **needs rework** · _not started_

> **2026-08-03 — the [PR #1 review](https://github.com/omsf-eco-infra/gufe-viz/pull/1)
> reopened Phase 2.** David Swenson requested changes on the Python and schema
> design; Alyssa Travitz concurred on the central point. The code below was built
> and passes, but the design it implements was rejected: schema-first replaces
> Pydantic, the payload envelope goes away, components get one subschema each,
> and Python degrades instead of raising. See
> [`REVIEW-RESPONSE.md`](./REVIEW-RESPONSE.md) for the full inventory and
> [`PLAN.md`](./PLAN.md) revision 2 for the amended plan.
>
> What survives: **Phase 0, Phase 1 and the Phase 3 mechanics.** The TypeScript
> side has not been reviewed by anyone yet, so its status is "unreviewed", not
> "accepted".

> **2026-08-17 — the second schema review landed and is implemented.** A
> schema-only pass found that several gufe classes had grown two or three schema
> objects between them (a whole-object one and a reference/summary one), and that
> the summary shapes made drilling into a network impossible. The answer, applied
> in full below: **one schema object per gufe class**, `gufe_key` on every one of
> them, and a single explicit `registry` on the root payload that every reference
> resolves against. Five special-case types are gone, `ProtocolViz` is new, and
> the mapping between gufe classes and schema objects is now exactly one to one.
> See [§13 of `REVIEW-RESPONSE.md`](./REVIEW-RESPONSE.md#13-second-schema-review-2026-08-17)
> for the full response.

> **2026-08-20 - the six inline schema comments are answered, and `draft` is
> merged in.** Four of the six are closed: two were already covered by the
> registry rework, the atom map is reshaped into a list of `{index_A, index_B}`
> pairs so both indices stay integers and "a B index for every A index" becomes
> a schema rule, and both suites now prove every example validates as its own
> type and as *no other*. Two are open on decisions that are not ours: the
> schema's real `$id`, and the per-type documents that would be published under
> it. See [S14 of `REVIEW-RESPONSE.md`](./REVIEW-RESPONSE.md#14-the-inline-schema-comments-2026-08-20).
>
> The merge of `draft` into `draft-with-schema-change` keeps this branch's
> registry design and folds in `draft`'s typing work; `_component_summary` and
> the inlined ligand-network node/edge shapes are dropped as the
> reference-only variants the review asked us to remove.

| Phase | PR | What | Status |
|---|---|---|---|
| 0 | 0.1 | Scaffolding — pixi, pyproject, TS workspace, licence, pre-commit, news/rever | **finished** (deps change: see below) |
| 0 | 0.2 | CI — lint, both suites, `check-generated`, no-Node `pip install` | **finished** (loses the schema freshness check, gains the hygiene grep) |
| 1 | 1.1 | TS skeleton + `<gufe-view>` dispatcher + dropzone | **finished**, unreviewed; `kind`→`type`, version panel deleted |
| 1 | 1.2 | `<gufe-small-molecule>` | **finished**, unreviewed; reads flat fields |
| 1 | 1.3 | `<gufe-protein>` | **finished**, unreviewed; reads flat fields |
| 1 | 1.4 | Gallery page (R15) | **finished**, unreviewed |
| 2 | 2.1 | ~~Pydantic models + generated JSON Schema~~ → hand-written schema | **finished** — reworked 2026-08-17 for the registry model, 2026-08-20 for the atom-pair list |
| 2 | 2.2 | Python payload builders + `make_examples.py` | **finished** — split into `components`/`networks`/`alchemical`, plus `registry.py` |
| 2 | 2.3 | TS type generation + Ajv runtime validation | **finished** — version handling deleted |
| 2 | 2.4 | Mutation testing, both languages | **finished** — exclusivity rows now stated standalone *and* against a registry entry; gains the `gufe_key`, registry and atom-pair rows, plus the cross-type negative pass |
| 3 | 3.1 | The bundle build | **finished** |
| 3 | 3.2 | `to_html` | **finished**; gains `engines="cdn"\|"bundled"` |
| 3 | 3.3 | Dev CLI | **finished**; entry-point form is Q12 |
| 4 | 4.1 | `<gufe-ligand-network>` | **finished** 2026-08-17 — reads nodes out of the registry; drawing code unchanged |
| 4 | 4.2 | The remaining views: solvent, unknown component, atom mapping, chemical system, transformation, alchemical network; the three PDB types share `<gufe-protein>` | **needs rework** — written and complete on the `temp-viz-examples` branch, never merged, and written against the pre-registry schema. See the note below. |
| — | A | Hygiene sweep: plan references, non-ASCII, plan-compliance tests, CI guard | **finished** |
| 5 | 5.1, 5.2 | Notebooks: `view()`, the static page, the anywidget live layer | **finished** 2026-08-12 |
| 5 | 5.3 | Demo notebook + frontend matrix | **in progress** — notebook runs; the browser half is not done |
| 4+ | — | Depth in the newer views (3D mapping overlay, network drill-down), server, transfer | _not started_ |

**V1 is not complete.** It was declared complete on 2026-08-01; the review
landed the same day and invalidated the contract underneath it. The tests pass
and the pictures render; the design does not have sign-off.

---

## Phase 0 — Repo boilerplate — **finished**

### PR 0.1 — scaffolding — **finished**

- `pixi.toml` — one environment (`python>=3.12`, `nodejs`, `gufe`, `rdkit`,
  `pydantic`, `pytest`, `jsonschema`, `ruff`) and every task the plan lists:
  `dev`, `build`, `schema`, `types`, `test`, `test-py`, `test-ts`, `lint`,
  `examples`, `check-generated` (plus `format` and `npm-install`).
- `pyproject.toml` — distribution `gufe-viz`, import `gufe_viz`, setuptools +
  setuptools-scm, mirroring gufe's. `package-dir = {"" = "python"}`.
- `package.json`, `tsconfig.json`, `vite.config.ts` (dev app),
  `vite.lib.config.ts` (library build).
- `LICENSE` (MIT), `.gitignore`, `.gitattributes` (generated artifacts marked
  `linguist-generated`), `.pre-commit-config.yaml` copied from gufe's.
- `news/` + `rever.xsh` — **Q3 answered "yes, now"**, so OpenFE's release
  conventions are adopted immediately rather than at transfer.
- A `justfile` wrapping `pixi run`. **Removed later** — see the note below;
  `pixi.toml` is the only task runner.

### PR 0.2 — CI — **finished**

`.github/workflows/ci.yml`, three jobs:

- `checks` (ubuntu + macos): `pixi run lint` → `test-py` → `test-ts`.
- `generated`: `pixi run check-generated` — rebuilds the schema, the TypeScript
  types and the JS bundle and fails on any diff.
- `pip-install`: `pip install .` on a runner with no Node, then imports the
  package and reads the shipped bundle — the concrete form of "a `pip install`
  needs no Node toolchain".

### Deviations from the plan, and why

| Plan said | Built | Why |
|---|---|---|
| TS bundle as "one ES module + one IIFE" | ES module only | Nothing in V1 consumes the IIFE — `to_html` inlines the module into a `<script type="module">`, and that is the only consumer. Emitting one artifact halves the committed generated bytes in a repo where every PR is hand-reviewed. Adding the IIFE later is a two-line change to `vite.lib.config.ts`. |
| `.pre-commit-config.yaml` "plus prettier/eslint for TS" | ruff only, TS covered by `tsc --noEmit` in `pixi run lint` | Deferred, not dropped: adding two more Node-based pre-commit hooks before there was any TypeScript to lint would have been guessing at a config. Worth revisiting once the TS surface stops moving. |

### Added after the fact, then removed again: a dev container

For a while `devtools/docker/` let the checks run with only Docker installed —
a departure from R13 ("no Docker in the shipped repo") into the carve-out the
meeting left open, with everything installed through pixi so the Dockerfile read
as instructions for a bare machine.

**Removed at Dion's request: pixi on its own is enough.** Gone with it: the
directory, `.dockerignore`, the ten `docker-*` recipes and CI's
`dev-container` job. Two things it left behind, both worth keeping on their own
merits:

- **`linux-aarch64` in `pixi.toml`'s platforms**, and the `pixi.lock` solve that
  goes with it. It was needed because Docker on an Apple-Silicon host runs
  `linux/arm64`; it stays for ARM CI runners and ARM Linux workstations, and
  removing it would mean re-solving the lock for no gain.
- **The `pixi run ci` task** — `lint` → `test-py` → `test-ts` →
  `check-generated`, the four things CI runs, in order. Useful locally
  regardless of what it runs inside.

It also proved one thing worth recording: all three generated artifacts came out
byte-identical when regenerated on `linux/aarch64` against copies generated on
`macOS-arm64`. That is the bet CI's `generated` job makes, and it held.

### Also removed: the justfile

It mirrored every pixi task one-for-one and resolved `pixi` from `PATH` or from
`~/.pixi/bin`, which was useful while the dev container existed and there were
`docker-*` recipes with no pixi equivalent. With those gone it was a second list
of task names to keep in sync with `pixi.toml` for no benefit, so it went too.
`pixi run <task>` is the only entry point, and it is the literal string CI runs.

### Local environment note

`pixi` is not always on this machine's `PATH`: installing it with
`PIXI_NO_PATH_UPDATE=1` modifies no shell profile, in which case every command
needs `~/.pixi/bin/pixi` in place of `pixi`.

---

## Phase 1 — Drag-and-drop rendering — **finished**

No Python↔TypeScript wiring at all, per R17. Nothing in this phase imports gufe
or runs Python.

### PR 1.1 — TS skeleton + `<gufe-view>` + dropzone — **finished**

- `shared/theme.ts`, `shared/dom.ts`, `shared/engines.ts`, `shared/sdf.ts`,
  `shared/pdb.ts` — ported from `code.js` per the plan's line-range table.
- `shared/element.ts` — `GufeElement<P>`, the create/update/destroy base class
  (R16). A view still returns the same `{ onResize, cleanup }` handle the
  framejs `view*(host, inputs)` functions did, so porting a view is typing and
  moving it, not restructuring it.
- `gufe-view.ts` — dispatch on the explicit `kind` discriminator (R20),
  replacing `VIEWS.find(v => inputs[v.key] != null)` first-match-wins key
  sniffing. Unknown kind, missing kind, non-object payload and a
  `schema_version` major from the future each get a panel that names the
  problem — never a throw (R19).
- `dev/dropzone.ts` + `ts/index.html` — drop a `.json` anywhere on the page;
  `?file=<url>` loads one on startup for reload-friendly iteration.

### PR 1.2 / 1.3 — `<gufe-small-molecule>` and `<gufe-protein>` — **finished**

Ported from `code.js` 1245–1379 and 1384–1511. RDKit, 3Dmol and d3 stay lazily
loaded and can be pre-seeded through `globalThis.__gufeEngines` — the hook
Phase 5 uses for zero-network pages.

### PR 1.4 — the gallery — **finished**

`ts/gallery.html` + `dev/gallery.ts`: every `examples/*.json` rendered through
the real `<gufe-view>` dispatch path on one scrolling page, picked up via
`import.meta.glob` so a new example appears without editing a list.

### Two bugs found and fixed on the way

- `code.js`'s `errText` was `if (errText(e)) return errText(e)` — unbounded
  recursion on every non-`Error` throw, which is exactly the case it existed to
  handle. The port reads `e.message`, which was plainly the intent.
- The first draft of `GufeElement` rendered through an `async` method, so a
  synchronous view's handle was installed a microtask late. Two `payload`
  assignments in a row therefore tore down nothing the first time and leaked the
  first view's 3Dmol viewer; a removal before the microtask ran leaked it
  permanently. `#render` is now synchronous for synchronous views, and a
  generation counter stops a slow view from installing itself into an element
  that has moved on. Both failures are covered in `ts/tests/lifecycle.test.ts`.

### Tests

34 vitest tests: dispatch and graceful degradation, the create/update/destroy
cycle, engine-handle release on teardown, what each view puts on the page, and
SDF/PDB parsing edge cases. The engines are faked through the real pre-seed hook
rather than mocked, so no test reaches for a CDN.

### Exit criteria

| Criterion | Status |
|---|---|
| `pixi run dev`, drop `examples/small_molecule.json`, see a molecule | Dev server serves `index.html` and `gallery.html`; render paths covered by vitest with faked engines. **A human still needs to eyeball it once with real RDKit/3Dmol** — see below. |
| Same for protein | as above |
| Gallery renders both | ✓ (both examples present and dispatched) |
| `tsc --noEmit` clean | ✓ |
| Nothing imports gufe or runs Python | ✓ |

**Not verified visually.** The Chrome extension available in this environment
could not reach `localhost:5178` (no site permission), so the last mile — RDKit
actually drawing ethanol, 3Dmol actually drawing the lysozyme fragment — has not
been seen with human eyes. Everything up to the engine boundary is tested. Run
`pixi run dev` and open <http://localhost:5173/gallery.html> to close this.

### Phase 1 example payloads

`examples/small_molecule.json` (ethanol, RDKit-embedded 3D conformer) and
`examples/protein.json` (residues 1–40 of chain A of gufe's `181l.pdb`, plus its
12 hetero atoms — trimmed from 214 kB to 53 kB so the fixture stays reviewable).
Both are hand-assembled, as the plan specifies for this phase, and are replaced
by `scripts/make_examples.py` output in Phase 2.

---

## Phase 2 — The contract — **needs rework**

> **Rejected by the PR #1 review.** Everything below happened and works; the
> design it implements is being replaced. Kept as a record of what was built and
> what is being carried forward, not as a description of the target. The two
> concrete defects the review found are marked inline.

### PR 2.1 — Pydantic models + generated JSON Schema — **finished**

`python/gufe_viz/schema.py` is the source of truth: the envelope plus a
discriminated union over all **eight** kinds, though only two have views.
`pixi run schema` emits `schema/gufe-viz.schema.json`; `schema/README.md` says,
in as many words, that this file is the gate.

Two things the generator does beyond `TypeAdapter(Payload).json_schema()`, both
because the raw output does not match the Python it came from:

- **`kind` is forced into `required`.** Pydantic gives it a default so a payload
  can be constructed without repeating it, and therefore omits it from
  `required` — but a *validating* discriminated union rejects a dict with no
  `kind` outright. Left alone, a payload with no discriminator would have been
  refused in Python and accepted in TypeScript, which is exactly the drift the
  contract exists to prevent.
- **Per-property `title` keys are stripped.** Pydantic titles every property
  (`sdf` → `"title": "Sdf"`), which made `json-schema-to-typescript` emit a
  standalone alias per property — `SchemaVersion1`, `Name7`,
  `IonConcentration1` — instead of inline types. 11.4 kB of generated noise
  became 9.2 kB of readable interfaces.

### PR 2.2 — Python payload builders — **finished**

`payloads.py` ports all eight builders and the MRO-walking `_registry_lookup`
from `framejs.py`, returning Pydantic models rather than loose dicts. The
registry is keyed by class *name*, so this module imports without gufe present —
which is what makes gufe an optional dependency rather than a hard one.

`scripts/make_examples.py` writes nine fixtures from real gufe objects:

| File | Kind | Note |
|---|---|---|
| `small_molecule.json` | SmallMoleculeComponent | benzene, charge 0 |
| `small_molecule_charged.json` | SmallMoleculeComponent | acetate, charge −1 |
| `protein.json` | ProteinComponent | 181L, whole (217 kB) |
| `protein_fragment.json` | ProteinComponent | chain A residues 1–40 (55 kB) |
| `solvent.json` | SolventComponent | |
| `ligand_atom_mapping.json` | LigandAtomMapping | first edge of gufe's network fixture |
| `ligand_network.json` | LigandNetwork | gufe's GraphML fixture: 3 ligands, 3 mappings, all unnamed |
| `ligand_network_named.json` | LigandNetwork | the same network with each ligand named after its SMILES |
| `chemical_system.json` | ChemicalSystem | benzene in water |

Three more landed with PR 4.2, completing the set: `transformation.json` and
`alchemical_network.json`, both built with gufe's own `DummyProtocol` because a
`Transformation` cannot exist without a `Protocol` and gufe ships no concrete one
outside its tests, and `unknown_component.json`, built from a `Component`
subclass defined in the generator — the only way to produce that type, since it
exists for classes that are not in gufe at all.

Every declared type therefore has a committed fixture, which is what lets
`every_payload_type` read files CI regenerates and diffs rather than assemble
payloads inside the test suite. R19 is still demonstrated against real data: the
"sorry, there is no visualization for X yet" panel is now what an *older* build
shows for a *newer* writer's payload, and it is tested with a `type` no schema
declares.

### PR 2.3 — TS types + Ajv validation — **finished**

- `scripts/gen_types.mjs` replaces the planned `json2ts` CLI one-liner. The
  one-liner was unusable: the shell ate its `\n` escapes and executed the
  backticks in its banner comment. The script also appends `PayloadKind` and a
  runtime `PAYLOAD_KINDS`, both derived from the schema's `$defs`, so the kind
  list cannot fall behind the contract.
- `ts/src/schema/validate.ts` compiles Ajv (2020-12) against the same JSON file
  and **validates against the single branch the payload's `kind` names**, not
  the eight-way `oneOf`. The union reports "is not valid under any of the given
  schemas" at the root; the branch reports
  `/data/total_charge: must be number`. `python/tests/test_mutations.py` does the
  same thing for the same reason, so the two languages agree about error
  *locations* and not just about pass/fail.
- `<gufe-view>` now validates before it dispatches. Order is: version → missing
  kind → kind with no view → schema issues, so an unknown kind is answered as
  "no visualization for X" rather than as a malformed something-else.

### PR 2.4 — mutation testing — **finished**

`schema/mutations.json` declares the matrix **once, as data**, and both suites
apply it: 16 mutations × 9 fixtures, filtered by kind.

| Mutation | Expected |
|---|---|
| drop `kind` | invalid |
| unknown `kind` | invalid |
| drop `data` | invalid |
| drop a required field (`sdf` / `pdb` / `nodes`) | invalid, error names `/data` |
| wrong type (`total_charge: "zero"`, `sdf: 42`) | invalid, error names the field |
| extra key at envelope level | invalid |
| extra key inside `data` | invalid |
| `schema_version` major bumped | invalid |
| `schema_version` minor bumped | **valid** |
| extra key under `extra` | **valid** — the forward-compat slot works |
| garbage SDF string | **valid** — schema-valid, render-degraded |
| a network edge naming a ligand the network does not contain | **valid** — JSON Schema cannot express referential integrity; the view drops the edge and says how many |

Both suites also assert that every declared mutation matched at least one
fixture, so a row that quietly applies to nothing shows up as a failure rather
than as a pass.

### Tests

- **pytest: 128 passing.** Registry/schema/TS-dispatch parity, every fixture
  against the Pydantic models *and* against the generated schema separately,
  builder behaviour per kind, and the mutation matrix.
- **vitest: 132 passing.** The same fixtures and the same matrix through Ajv,
  plus the Phase 1 rendering tests.

### Exit criteria

| Criterion | Status |
|---|---|
| A payload valid in Python is valid in TypeScript and vice versa | ✓ — same fixtures, same matrix, both suites |
| Every mutation rejected by both sides | ✓ — 16 mutations, kind-filtered, plus a "matrix actually ran" guard |
| `check-generated` proves schema, types and bundle are fresh | ✓ |

### Deviations and choices

| Plan said | Built | Why |
|---|---|---|
| `pixi run types` via the `json2ts` CLI | `scripts/gen_types.mjs` | The CLI form could not carry a multi-line banner through a shell argument. The script also derives the kind list from `$defs`. |
| — | Ajv compiled at runtime, not pre-generated standalone code | One fewer committed generated artifact. Cost: the bundle grew from 23 kB to 223 kB (57 kB gzipped), and Ajv's runtime compile uses `new Function`, which a strict CSP would block. Neither matters for a local `file://` page. **Worth revisiting at Phase 6** if a notebook host turns out to enforce a CSP — `ajv/standalone` removes both problems at the cost of a fourth generated file. |
| `extra` empty in V1 (Q5) | empty | Asserted by a test, so filling it later is a deliberate act. |

### What the review found here

Two defects, both in code this section describes as finished:

- **`ComponentDescriptor` (`schema.py:109`).** One object coalescing every
  component type's fields — `sdf`, `pdb`, `smiles`, the four solvent fields — all
  optional and nullable. The rule "exactly one group is populated" lives in
  `_component_descriptor` and **is absent from the emitted schema**, which
  accepts a component carrying `sdf` and `pdb` at once. David: "this creates a
  schema where ALL components must have sdf, pdb, and smiles defined, but some
  must be null. However, that requirement (that some must be null) is not
  actually encoded into the schema that gets emitted here." He also asked for a
  `jsonschema` test covering it, which does not exist. This is the worked example
  behind the whole schema-first change.
- **`NoVisualization` (`payloads.py:342`).** Raising on an unregistered class is
  wrong for a type gufe explicitly plans for. The graceful path exists in the
  browser and not in Python; it needs to exist in both.

Also worth recording against the "128 passing / 132 passing" counts above: two of
those tests were rejected as tests, not merely as implementations. Test count was
being treated as evidence of rigour, and some of it was restating instructions.

---

## Phase 3 — Python → HTML string — **finished**

### PR 3.1 — the bundle build — **finished**

`pixi run build` → Vite library build → `python/gufe_viz/_assets/gufe-viz.js`,
committed. `package-data` ships it in the wheel; setuptools-scm puts it in the
sdist. Verified locally: `pip install .` into a bare venv with **no Node and no
gufe** installed, then `gufe_viz.to_html(payload_dict)` returns a 226 kB page.

### PR 3.2 — `to_html` — **finished**

```python
gufe_viz.to_html(obj)           # a gufe object
gufe_viz.to_html(payload)       # an already-built payload dict
```

Returns a string. Writes nothing, anywhere — asserted by a test that runs it in
an empty temp directory and checks the directory is still empty. Where the
string goes is Alyssa's call.

The page is the bundle inlined in a `<script type="module">`, the payload in a
`<script type="application/json">`, one `<gufe-view>`, and a three-line
bootstrap. No fetches, no iframe, no framejs.io.

Two details carried over from `framejs.py` because they are real, subtle
correctness fixes rather than decoration: `_script_safe`'s `</script`
neutralisation, and the `"</" → "<\/"` escape on the payload. Both have tests
that feed a `</script><script>alert(1)</script>` string through a molecule name
and a SMILES field.

The bootstrap deliberately uses **only** the custom-element API —
`document.querySelector("gufe-view").payload = …`. It depends on no name the
bundler chose, and it is the same two lines the Phase 6 notebook widget will use.

### PR 3.3 — dev CLI — **finished**

`gufe-viz <input> [-o out.html|-]`. Default output is `<input>.html` beside the
input (**PLAN Q2**), keeping the original suffix so `thing.json` and `thing.sdf`
do not collide.

Input may be a gufe-viz payload or a serialized gufe object. The gufe-object path
tries `GufeTokenizable.from_dict` and, when that fails, says so and names the two
things that always work rather than guessing at another loader — **Q4 is still
open**, and the plan is explicit that serialization questions go to the
three-person chat rather than down a rabbit hole.

### Exit criteria

| Criterion | Status |
|---|---|
| `gufe-viz examples/protein.json -o p.html` produces a page | ✓ — 279 kB for the protein fragment, 226 kB for benzene |
| The only network requests are the three engine CDNs | **Retired as an exit criterion.** The test that asserted it was rejected in review (PR A above), and under R1-as-revised CDN loading is a supported mode rather than a defect to bound. Replaced by: under `engines="bundled"`, the page contains zero `http(s)://` references — a real property, testable in one assertion, and not yet implemented |
| `pip install .` with no Node | ✓ — verified in a bare venv |
| Hand Alyssa the `to_html` signature and ask where the output should land | **Outstanding — a conversation, not code.** Q2's answer is implemented as the CLI default; the library still writes nothing. |

### Verification, and its one gap

A new vitest file loads the **built bundle** — the committed artifact, not the
sources — into jsdom and drives it through the generated page's exact bootstrap.
That catches the class of failure every other test misses: a `vite.lib.config.ts`
that emits a stray chunk or externalises something it should have bundled would
pass all the source tests and only break when someone opened a page.

**Still not verified: pixels.** No browser in this environment could open either
the dev server or a `file://` page (the extension has no permission for either),
so RDKit actually drawing benzene and 3Dmol actually drawing the lysozyme
fragment have not been seen. Everything up to the engine call is tested. To
close it:

```bash
pixi run gufe-viz examples/small_molecule.json -o /tmp/m.html && open /tmp/m.html
pixi run dev   # then http://localhost:5173/gallery.html
```

---

## Phase 4 — the remaining views — **finished**

### PR 4.1 — `<gufe-ligand-network>` — **finished** 2026-08-17

> The drawing code survived both reworks untouched. The payload shape moved to
> the revision-2 contract (`type` discriminator, no envelope), and then to the
> registry model of the 2026-08-17 review: `nodes` are gufe keys, the ligands
> live once in `registry`, and an edge *is* a `LigandAtomMappingViz`. Q8 is
> answered below.

Requested out of plan order: the ligand network is the visualization OpenFE
actually looks at, and PLAN's "atom mapping first" ordering was about component
reuse (R14) rather than about priority. The reuse seam is built even though the
mapping component itself is not — see below.

**The graph.** Force-directed, circular and radial layouts; RDKit 2D depictions
injected into the node circles, falling back to initials while RDKit loads and
permanently if it fails; edges coloured and weighted by score; wheel zoom,
background pan and node dragging; click an edge to fill a detail pane with both
endpoints, the score, the mapped-atom count and any other annotations.

**Where it diverges from the framejs prototype.** `code.js`'s `viewLigandNetwork`
parsed `LigandNetwork.to_graphml()` in the browser, which meant an element-symbol
table, a hand-rolled reader for the base-1-per-char `.npy` conformer blob, and a
Jacobi eigensolver to rotate each molecule onto its principal axes. All of that
is gone. Python walks the live network and hands over SDF per ligand plus flat
topology per mapping, so this file is drawing code only.

**d3 is used for one thing:** the force simulation, run to completion and drawn
once rather than animated. The SVG, zoom, pan, drag and the two-colour score ramp
are plain DOM — about forty lines instead of d3-zoom, d3-drag and d3-scale — and
the consequence is that a network still draws when d3 cannot be fetched. That
path falls back to the circular layout with a banner (R19) and is tested by
seeding an unusable d3, never by a fetch that fails.

### The schema change, and why it needs a second opinion

`LigandNetworkData` was `{graphml: str}`. It is now `{nodes[], edges[]}` — each
node an id, a name, an SDF and a SMILES; each edge two node ids, a score, the
`componentA_to_componentB` map and the annotations.

| | Before | After |
|---|---|---|
| What crosses | `to_graphml()`, verbatim | ligands as SDF, topology as flat JSON |
| Who parses it | TypeScript, including gufe's `to_json` moldicts | nobody — it is already the shape the view draws |
| `ligand_network.json` | 4.1 kB | 2.5 kB |

The reason is R8. GraphML was on the plan's list of things allowed to cross, but
gufe's GraphML *contains* gufe JSON, so forwarding it does not avoid "a lot of
ugly TypeScript to maintain" — it relocates it. Dropping it also means the
payload carries no gufe JSON at all, which is the invariant the whole design
rests on.

**This is a serialization decision, and the working agreement says those go to
the three-person chat rather than being settled locally.** It is implemented
because the alternative was to ship the decoder R8 forbids, and because nothing
is released yet so the change costs nothing today. Two things to confirm:

- Is round-tripping a payload back into a `LigandNetwork` a use case? If so, the
  GraphML belongs under `extra`, which exists for exactly this and needs no
  schema change to start carrying it (**Q8**).
- Is `annotations["score"]` the right key to colour edges by, or does OpenFE use
  something else? Everything else in `annotations` is displayed but not
  interpreted.

### R14, prepared rather than delivered

The detail pane draws the two endpoint molecules and the mapping statistics; it
does not yet draw the atom correspondence, because `<gufe-atom-mapping>` does not
exist. The seam is `mappingPayloadFor(edge, registry)`, and after the registry rework
there is almost nothing left of it: an edge already *is* a
`LigandAtomMappingViz`, so all the function does is give it a registry holding
the two ligands it names. When `<gufe-atom-mapping>` lands, that is what it gets
handed, and there is no second code path — which is the whole of David's "exact
same component that's just put inside of a larger view". A vitest case validates
the result against the schema, so the claim is checked rather than asserted.

The payload keeps the molecules in `registry` rather than inlining them per edge:
a forty-ligand network would otherwise carry each SDF several times over.

### Two fixture bugs fixed along the way

Both pre-existing, both found by regenerating `examples/`:

- **`protein*.json` changed daily.** OpenMM stamps its version and today's date
  into the first `REMARK` of every PDB it writes, so the committed fixtures
  differed from a fresh run for reasons unrelated to this repo.
  `make_examples.py` now pins that line.
- **`ligand_atom_mapping.json` changed per process.** It is "the first edge" of
  gufe's network, chosen by sorting on molecule *names* — and every molecule in
  that fixture is unnamed, so the sort was a three-way tie broken by frozenset
  iteration order. It now sorts on gufe keys.

Neither was caught by CI, because `check-generated` covers the schema, the types
and the bundle but not `examples/`. Worth extending; not done here.

### Tests

- **pytest: 191** (was 167). Network payload shape, node/edge referential
  integrity, the named/unnamed variant pair, and `_mapping_score`'s handling of
  `0.0`, non-numbers and `True`.
- **vitest: 159** (was 136). Nodes and edges drawn, the force simulation
  configured, labels for named and unnamed ligands, selection and re-selection,
  a dangling edge dropped with a banner, the empty network, and the d3-less
  fallback.

Still not verified: pixels. The SVG is asserted node by node in jsdom, which is
not the same as looking at a layout.

### PR 4.2 — the remaining views — **needs rework**

> **2026-08-20 correction.** This section described the work as landed. It is
> not: it lives as a single commit (`b1b5ceb`) on the `temp-viz-examples`
> branch, forked from `draft` *before* the registry rework, and no branch in the
> PR chain carries it. `draft-with-schema-change` has three views, not nine, and
> nine of the twelve declared types render the "no visualization for X yet"
> panel.
>
> Merging it means porting it to the registry schema and the atom-pair list
> first. The damage is concentrated: `atom-mapping.ts` has eleven references to
> shapes that no longer exist (`molA_sdf`, `nameA`, the string-keyed atom map),
> `alchemical-network.ts` five, `transformation.ts` one, and
> `chemical-system.ts`, `solvent.ts` and `unknown-component.ts` have none. About
> 1,160 lines of view code plus three fixtures.

What that branch contains, which is what this section originally described:

| Type | View | What it draws |
|---|---|---|
| `SolventComponentViz` | `<gufe-solvent>` | the five settings, plus a schematic box of solvent and ions |
| `UnknownComponentViz` | `<gufe-unknown-component>` | the gufe class it cannot draw, and why that is not an error |
| `LigandAtomMappingViz` | `<gufe-atom-mapping>` | both ligands, mapped or changing atoms highlighted, the correspondence, the annotations |
| `ChemicalSystemViz` | `<gufe-chemical-system>` | labelled components, the selected one drawn by a nested `<gufe-view>` |
| `TransformationViz` | `<gufe-transformation>` | a per-label state A/B diff with `<gufe-atom-mapping>` embedded |
| `AlchemicalNetworkViz` | `<gufe-alchemical-network>` | force-directed graph of systems and transformations, plus a detail pane |
| `SolvatedPDBComponentViz`, `ProteinMembraneComponentViz` | `<gufe-protein>` | the protein view, opened with the solvent or membrane shown |

**R14 is now delivered rather than prepared.** `<gufe-atom-mapping>` is one
element: the standalone payload mounts it, and the transformation view creates
the same tag and sets its `.payload`. `<gufe-chemical-system>` goes one better
and embeds `<gufe-view>` itself, so it dispatches on a component's `type` exactly
as the top level does — a new component type appears inside a chemical system
with no change to that file.

**The three PDB types share one element**, which is not the same as merging them.
They stay separate `type`s because the discriminator is what Python dispatches on
and what a future view could specialize on; what differs today is that a solvated
or membrane system opens with its waters shown, because hiding the very thing
that distinguishes it would make the three indistinguishable on screen.

**Fixtures.** `transformation.json` and `alchemical_network.json` are built with
gufe's own `DummyProtocol` — a `Transformation` cannot exist without a
`Protocol`, gufe ships no concrete one outside its tests, and the payload carries
the protocol as a class name and nothing else, so a stand-in is exactly as
informative as a real one. Both are the same three ligands as the ligand-network
fixtures, one layer up, so the gallery reads as one story.
`unknown_component.json` is a `Component` subclass defined in the generator,
which is the only way to produce that type at all.

**Parity is now bidirectional.** Both suites assert that `VIEW_TAGS` and the
schema name the same set of types. The old one-way check let a type be declared
and never drawn; that state is still legal by design (it degrades to a panel),
but reaching it now fails a test rather than quietly shrinking the gallery.

### Tests

- **pytest: 227.** The declared-type fixture reads committed examples instead of
  assembling three payloads in-suite, and the TS/schema parity test checks both
  directions.
- **vitest: 179** (was 159). Per-view cases for all six new elements: fields and
  schematic, the named panel, both highlight modes and the mapped/unmapped split,
  master/detail selection swapping the nested view, the diff statuses and the
  embedded mapping, and the alchemical graph's boxes, lines, selection, dangling
  edges and empty case.

Pixels *were* verified this time, once: the gallery was rendered in headless
Chrome and read card by card. The 3D panes fail there for want of WebGL, which
is the headless browser rather than the views.

---

---

## Round 2 — the PR #1 review

Full inventory in [`REVIEW-RESPONSE.md`](./REVIEW-RESPONSE.md). Summary of what
the review found, in descending cost:

1. **Pydantic-first instead of schema-first.** David asked for the schema to be
   written directly; Alyssa concurred and noted her stack is moving off Pydantic.
   Deletes `schema.py`, `scripts/gen_schema.py`, `pixi run schema` and the
   dependency.
2. **The coalesced `ComponentDescriptor`** — a real defect, not a preference. The
   builder enforced "exactly one of sdf/pdb/solvent"; the emitted schema
   permitted all three at once. This is the concrete argument for (1).
3. **`NoVisualization` raising.** gufe supports custom `Component` subclasses;
   raising stops the process and would leave a widget's frontend disconnected.
4. **Plan vocabulary in the artifact.** `R14`, `PLAN Q4`, `Phase 5` and
   em-dashes in docstrings, comments and JSON Schema `description` strings,
   citing a document no reviewer has. Alyssa asked directly whether the `R*`
   markers were an artifact of using Claude. They were.

### PR A — hygiene sweep — **finished**

Deliberately behaviour-free, so the substantive PRs are reviewable. 50 files
changed, no production logic touched.

**The two tests David named.** The CDN-allowlist test
(`test_the_only_network_references_are_the_engine_cdns`, seven allowlisted URL
substrings and a four-paragraph docstring justifying them) is replaced by a
four-line `test_nothing_is_fetched_at_parse_time`. The allowlist was the
offending part; "the page loads nothing eagerly" is a real property with a real
failure mode once `engines=` starts filling the `__ENGINES__` slot in the
template. `test_returns_a_string_and_writes_nothing` is deleted outright, its
doctype assertion folded into `test_page_is_self_contained` so no live check was
lost silently.

**Planning references: gone.** 68 rewrites across 36 files, plus both READMEs.
Each states the constraint instead of citing its number, because the constraint
is the durable half. For example `gufe-view.ts` went from "Nothing here throws at
the caller (R19)" to "Nothing here throws at the caller, because the caller is
often a notebook widget with no way to surface an exception."

**Non-ASCII: gone from code and schema.** 213 em-dashes, 31 ellipses, 594
box-drawing characters in comment banners and the rest. Two characters are kept
by name because they are rendered in a browser rather than read in a comment:
`U+26A0` in the status banner and `U+00B7` between structure statistics. Both
READMEs lost their em-dashes and check marks but keep the Mermaid label
separators and the flow-diagram arrows, which are functional.

**The guard: `scripts/check_hygiene.py`, wired into `pixi run lint`.** Fails on
either class of regression, scoped to git-tracked source and configuration.
Written in Python rather than shell because BSD grep has no `-P` and this has to
pass on macOS. It also greps the *generated* schema for `\uXXXX` escapes, since
the schema is what a reviewer actually reads and it is generated from the
docstrings. Verified to fail the build by planting a marker.

**Green:** `hygiene` clean, ruff clean, `tsc --noEmit` clean, 190 pytest, 159
vitest, all three generated artifacts fresh. The schema, `types.ts` and the
bundle were regenerated because the docstrings feed them.

### Not done in PR A

The rest of the test-suite audit against the "asserts a property a user could
observe breaking" rule. Only the two tests named in review were removed; the
remaining 349 have not been re-read with that rule in hand. Worth doing, and
better done alongside PR B where the tests are being rewritten anyway.

### PR B, step 1 — the generator is deleted — **finished**

Done ahead of writing the new schema, deliberately: the hand-written file should
land against a tree that has no way to regenerate it, rather than alongside a
generator someone might still run.

| Removed | What it was |
|---|---|
| `python/gufe_viz/schema.py` | the Pydantic models, 12 kB |
| `scripts/gen_schema.py` | the generator |
| `pixi.toml` `[tasks.schema]` | and `[tasks.types]`' `depends-on` edge to it, so `types` now reads the hand-written file directly |
| `pydantic` | from `pixi.toml` and `pyproject.toml`; the latter now declares `dependencies = []` |
| `schema/*.schema.json linguist-generated` | in `.gitattributes` |
| the schema entry in `check_generated.sh` | plus its `gen_schema.py` call and the stale `pixi run schema` hint |

Comment-only follow-ons, each of which named `schema.py` as an upstream that no
longer exists: `scripts/gen_types.mjs` (banner and the banner it *writes* into
`types.ts`), `.github/workflows/ci.yml` ("three" generated artifacts, now two).

**`.gitattributes` is the one whose meaning inverts.** The file was marked so
GitHub would fold it away in review; it is about to be the file Alyssa and David
most need to see expanded.

**The tree does not import right now, and that is expected.** `schema.py`
exported three names into five consumers:

| Name | Fate | Still referenced by |
|---|---|---|
| `Payload` | gone; builders return plain dicts | `__init__.py:26`, `payloads.py:29`, `test_payloads.py:17`, `test_mutations.py:19` |
| `SCHEMA_VERSION` | gone with the version field itself | `__init__.py:26`, `test_payloads.py:17`, and a comment in `ts/src/schema/validate.ts:25` |
| `PAYLOAD_KINDS` | survives, but must be **read from the schema's `$defs`** rather than declared in Python | `__init__.py:26`, `cli.py:21`, `test_payloads.py:17` |

Restoring those is the rest of PR B, not a separate task. `PAYLOAD_KINDS` is the
one with a trap in it: redeclaring the list in Python would rebuild, in
miniature, the two-sources-of-truth problem the whole change exists to remove.
`gen_types.mjs` already derives its copy from `$defs`; the Python side should
read the same file the same way.

Also still outstanding, and *not* touched here because it belongs to PR D:
`pyproject.toml`'s `optional-dependencies.gufe`, which installs the wrong gufe
from PyPI. Both the README and PLAN Q9 say it goes.

### PR B, step 2 — the contract is rewritten — **finished**

The schema is hand-written, the envelope is gone, and both languages read the
new shape. `pixi run ci` is green: ruff, hygiene, `tsc --noEmit`, **154 pytest**,
**129 vitest**, and all three generated artifacts fresh.

**The schema.** `schema/gufe-viz.schema.json`, written directly. Eleven types,
one `$def` each, combined with `oneOf`; `additionalProperties: false`
everywhere; `$id` at David's host and versioned path,
`https://openfree.energy/schemas/gufe-viz/1.0/gufe-viz.schema.json`.

One convention is load-bearing and worth knowing before editing it: **every
`$def` that declares a discriminator is named exactly for the `type` const it
carries.** That is what lets both validators find a payload's branch by name
instead of via a lookup table, and both suites assert it holds. Branch-level
validation is why an error reads `/total_charge: must be integer` rather than
"is not valid under any of the given schemas".

`ComponentViz` is the union of the six component types, referenced from
`ChemicalSystemViz.components`. That single union is what makes "the same object
standalone or nested" true by construction rather than by convention, and a test
asserts it directly: every component lifted out of `chemical_system.json`
validates as a payload on its own, with no unwrapping step.

**Python.** `payloads.py` is gone, split three ways as David asked:

| Module | Holds |
|---|---|
| `components.py` | the six component builders, `component_payload`, `chemical_system_payload`, and the shared helpers |
| `networks.py` | `ligand_atom_mapping_payload`, `ligand_network_payload` |
| `alchemical.py` | `transformation_payload`, `alchemical_network_payload` |

`payload_for` is in `__init__.py` and imports gufe *inside the function*, which
is what keeps `pip install .` followed by `import gufe_viz` and
`to_html(payload_dict)` working with no gufe present - a property CI enforces.

The name-keyed registry and its MRO walk are gone; dispatch is `isinstance`,
most-derived first. `NoVisualization` is gone. The three-way failure rule from
the corrected R19 is implemented and each case has a test.

**gufe is pinned to `>=1.12`** - see the findings below - so all five component
classes exist and the dispatch table names them directly, in David's style.

**TypeScript.** `type` replaces `kind` throughout; `PayloadType`/`PAYLOAD_TYPES`
replace the `Kind` names; `SUPPORTED_SCHEMA_MAJOR`, `schemaVersionProblem` and
the version panel are deleted. `SCHEMA_TYPES` is read off `$defs` at load rather
than from a list. `mappingPayloadFor` returns a **complete**
`LigandAtomMappingViz`, registry and all, so what the network view hands to
`<gufe-atom-mapping>` is byte-for-byte what that element receives standalone.

**The mutation matrix** moved to `types`/`type` and gained rows. The per-type
exclusivity rules David asked for are now stated **twice each** - once against a
standalone component and once against the same component sitting in a registry
(originally: nested in a chemical system) - because "a registry entry is a
payload" is exactly the claim
being made. New rows also cover `minLength` on structure strings and the
`AtomMapping` key and value patterns.

### The gufe version, and what it changed

The lock had settled on **gufe 1.5.0**, which has three component classes rather
than five: `SolvatedPDBComponent` and `ProteinMembraneComponent` did not exist,
and `ProteinComponent` had no subclasses at all. David's sketch references both
directly, so his code would have raised `AttributeError` against the environment
this repo actually solved for. The version he names in his schema description -
"GUFE 1.12" - was right, and the lock was stale.

`pixi.toml` now pins `gufe = ">=1.12"`, and the resolved environment is 1.12.0.
Three consequences:

- **The dispatch table names the classes directly**, as David wrote it. The
  `getattr(gufe, ...)` guard that worked around their absence is gone.
- **The real hierarchy is three deep**, and deeper than the plan assumed:

  ```
  ProteinMembraneComponent -> SolvatedPDBComponent -> ProteinComponent
  ```

  Appendix A treats the two subclasses as siblings that both descend from
  `ProteinComponent`. They do not: a `ProteinMembraneComponent` is a
  `SolvatedPDBComponent`. The ordering happened to be right already, but for
  the wrong reason, so `test_dispatch_order_matches_the_gufe_class_hierarchy`
  now derives the constraint from the live classes instead of trusting the
  comment. Verified non-vacuous by checking that it rejects a reversed table.
- **Both types have committed fixtures now**, `solvated_pdb.json` and
  `protein_membrane.json`, built with `from_pdb_file(..., infer_box_vectors=True)`
  so there are no magic box vectors in the script. They matter more than the
  usual fixture: all three PDB types have *identical* payload shapes and differ
  only in their discriminator, so a mis-ordered builder table would produce
  schema-valid, renderable, wrong output. A `expect: "valid"` mutation row
  states that the schema cannot catch this and the ordering test must.

Everything else survived the version bump untouched: all nine pre-existing
fixtures regenerate **byte-identical** under 1.12.0.

### Also found

**`Transformation` and `AlchemicalNetwork` fixtures were never impossible.**
Both PLAN and this document said they need a `gufe.Protocol` that does not
exist, but gufe ships `DummyProtocol` in `gufe.tests.test_protocol`. Both
builders now have a test that constructs them for real and validates the output;
committed fixtures are still deferred, but the reason recorded for deferring
them was wrong.

### PRs B–D — remainder

B: **done.** C: the atom-mapping component itself, then the remaining views. D:
`string.Template`, `engines="cdn"|"bundled"`, and the dependency split -
including `pyproject.toml`'s `optional-dependencies.gufe`, which still installs
the wrong gufe from PyPI and which both the README and Q9 say should go.

---

## Open questions

| # | Question | For | Status |
|---|---|---|---|
| Q1 | Python distribution name | Alyssa | Answered in PLAN: `gufe-viz`. Implemented. |
| Q2 | Where `to_html`'s output lands | Alyssa | Answered in PLAN: `<filename.suffix>.html` beside the input. Implemented as the CLI default; the library still writes nothing. **Still to do: hand Alyssa the signature and confirm.** |
| Q3 | Adopt `news/` + `rever` now or at transfer? | David | Answered in PLAN: now. Implemented. |
| Q4 | Which loader round-trips a saved gufe `.json` today | David + Alyssa | **Open.** Not needed for V1: the payload path never touches gufe JSON. The CLI's gufe-object path tries `GufeTokenizable.from_dict` and, on failure, names the two routes that always work rather than guessing. Goes to the three-person chat. |
| Q5 | Should `extra` carry the full gufe JSON in V1? | David | **Closed by deletion.** `extra` is gone; additive schema changes serve the same purpose. |
| Q6 | `.view()` mixin in gufe, or a free function here? | Alyssa | **Closed: the free function** `gufe_viz.view(obj)` (Dion, 2026-08-12). No gufe PR to coordinate with while PR #1 is in review; the mixin stays additive. |
| Q7 | Keep the framejs `MetaframeWidget` path in parallel? | Alyssa, Dion | **Closed: no** (Dion, 2026-08-12). The notebook draws the same bundle and the same `<gufe-view>` as the CLI's page, through anywidget. |
| Q8 | Is round-tripping a payload back into a `LigandNetwork` a use case, and is `annotations["score"]` the right key to colour edges by? | David + Alyssa | **Half open.** Nodes-and-edges is confirmed (R8, and Q11 below). GraphML round-tripping is unasked-for and, with `extra` deleted, would need a deliberate schema addition rather than a free slot. The `score` key is still worth confirming with OpenFE. |
| Q9 | Is `gufe` declared in `pyproject.toml`? | David, Alyssa | **Closed: yes, as `gufe>=1.12`**, reversing the earlier "no". Declared in `pixi.toml` as well - that entry is what makes pixi resolve it from conda-forge rather than PyPI, verified by removing it and watching the solve fail. The floor makes `pip install` refuse by name instead of installing PyPI's 0.4. |
| Q10 | How does the payload carry a schema version? | David | **Closed: it does not.** Every V1 consumer ships the reader and writer in one artifact. The field was also the only thing forcing a root envelope. |
| Q11 | Do ligand-network edges reference node ids, or inline full mappings? | David | **Closed: node ids.** Not a size tradeoff on measurement — edges that inline their molecules make the payload not-a-graph, since the view would have to rebuild the node set by deduplicating SDF strings. |
| Q12 | `gufe-viz` console script, or `python -m gufe_viz`? | Alyssa | **Open** — Phase 3. |
| Q13 | Default `engines="cdn"` or `"bundled"`? | Alyssa | **Open** — Phase 3. Phase 5 does not wait on it: the notebook asks for `"cdn"` explicitly. |
| Q17 | Does `view()` embed the static page always, or only without anywidget? | Alyssa | **Open** — Phase 5. Implemented as always, `view(obj, static=False)` to opt out. A default, not a rewrite. |

---

## Phase 5 — Notebooks — **finished** (5.1, 5.2), 5.3 **in progress**

Planned and built 2026-08-12, in parallel with PR #1's review, since it touches
no file under review: `html.py` gains a seam, everything else is new.

**Entry decisions taken** (Dion), which is what turned the phase from one
sentence into three PRs — see [`PLAN.md` Phase 5](./PLAN.md):

| | decision |
|---|---|
| framejs | out. Same bundle, same `<gufe-view>` as the CLI page. Closes Q7. |
| API | `gufe_viz.view(obj)`, a free function. No mixin in gufe. Closes Q6. |
| engines | `"cdn"` in a notebook, which is also all that exists today |
| static export | a saved `.ipynb` must draw with no kernel, so the page is embedded per cell |
| live update | in scope, and the only reason anywidget is here at all |
| frontends | JupyterLab and marimo |
| anywidget | optional extra, `gufe-viz[notebook]`; `view()` works without it |

Two layers from one `_repr_mimebundle_`: `text/html` carrying the `to_html` page
in an `<iframe srcdoc>` (no dependency, survives export), and the anywidget view
carrying a shell iframe with the payload over the comm (live, updatable). Both
end at the same two lines the HTML export ends at, `create <gufe-view>` and
`set .payload`.

Both paths use an iframe rather than mounting into the cell, for two reasons in
the shipped TypeScript: `GufeElement` builds light DOM, so notebook CSS would
reach inside every view; and `shared/engines.ts` appends `<script>` to
`document.head` and reads `window.$3Dmol` / `window.RDKit`, which is the global
py3Dmol and nglview are already using. Mounting into the cell means a shadow
root and a caller-supplied document in the loaders - surgery on working,
unreviewed code, for something the iframe gives away.

| PR | What | Status |
|---|---|---|
| 5.1 | `view()` + the static `text/html` page; the shared-body seam in `html.py` | **finished** |
| 5.2 | the anywidget layer: shell iframe, `payload` trait, live update | **finished** |
| 5.3 | frontend matrix + example notebook | **in progress** — both notebooks are written and run; the browser half of the matrix is not done |

**What shipped**

- `gufe_viz.view(obj, *, height, title, static=True, live=True)`, and
  `StaticView` for the no-dependency path. `gufe_viz.shell_html()` is the page
  minus its payload and bootstrap.
- `python/gufe_viz/notebook.py` — 260 lines, of which the widget's JavaScript is
  30. The whole handshake is the iframe's `load` event: a module script delays
  it, so by the time it fires the elements are defined and `<gufe-view>` has been
  upgraded. Setting `.payload` earlier would create an own property shadowing
  the class accessor, and nothing would draw.
- `optional-dependencies.notebook = ["anywidget>=0.9"]`, a `notebook` pixi
  feature and environment (`jupyterlab`, `marimo`, `anywidget`, `ipywidgets`),
  and three tasks: `notebook`, `marimo`, `test-notebook`.
- `examples/notebooks/gufe-viz-demo.ipynb`, 57 cells: every example payload, the
  live-gufe-object path, and seven delivery modes including update-in-place,
  the CLI, the byte costs and the three degradation cases. Committed without
  outputs: it is the runnable bench.
- `examples/notebooks/gufe-viz-gallery.ipynb` + `scripts/make_gallery.py`
  (`pixi run gallery`) — the same views as screenshots, committed **with**
  outputs, 678 kB. **GitHub's notebook renderer strips `<iframe>` and
  `<script>`**, which is everything `view()` emits, so an executed demo notebook
  shows nothing there; `image/png` is the one output type that survives.
  Screenshots come from headless Chrome, which needs
  `--enable-unsafe-swiftshader --use-angle=swiftshader` or every 3D pane is
  "error creating viewer", and which does not exit on its own given a throwaway
  profile - the script waits for the file to settle and kills it.

**Found while checking those screenshots:** `ProteinMembraneComponentViz` and
`SolvatedPDBComponentViz` reach the "no visualization yet" panel. Python's MRO
walk gives a membrane system the protein *builder*, but the payload it emits
names its own type, and `VIEW_TAGS` in `ts/src/gufe-view.ts` has no entry for
it. Inheritance on one side of the contract is not inheritance on the other.
The README and this file both claimed the subclasses inherited the view; the
notebooks now say what actually happens. **Unfixed, because it is a decision,
not a typo:** either the dispatch table gains the two entries, or the payload
builder emits `ProteinComponentViz` for them, or the dispatcher falls back along
a declared type hierarchy. That belongs with Phase 4's remaining views.
- `python/tests/test_notebook.py`, 22 tests. The static half runs everywhere;
  the widget half is `importorskip`ped and runs under `pixi run -e notebook
  test-notebook`. All 63 pass there, 247 + 16 skipped in the default env.

**The measurements, which replace the two open questions**

`anywidget` re-sends **everything per widget instance** — `_esm` included, but
that is now beside the point, because the bundle rides in the `_shell` trait
rather than in `_esm`. Measured from `widget.get_state()`:

| | bytes | per |
|---|---|---|
| `_esm` (the widget's own JavaScript) | 670 | instance |
| `_shell` (the page, minus payload) | 239,821 | instance |
| static page, protein | 457,183 | instance, and in the `.ipynb` |
| both, one protein view | ~697,000 | instance |

So the mitigation sketched at planning time — move the bundle into `_esm` and
let anywidget dedupe it — **does not exist**: `_esm` is a synced trait like any
other. Cutting the per-view cost needs a per-page singleton (one widget carries
the bundle, stashes it on `window`, per-cell widgets read it) or a Jupyter
server extension serving the bundle over HTTP. Neither is built. What is built
is the honest version plus the two knobs, and a notebook cell that prints these
numbers so nobody has to take this table on trust.

**Still open, and it needs a browser.** Which mimetype JupyterLab and marimo
each pick when handed both the widget view and `text/html`. What is verified:
`jupyter execute` produces cells carrying both (`html+plain+widget-view` by
default, `html+plain` under `live=False`, `plain+widget-view` under
`static=False`), and marimo converts, executes and exports the same notebook
with the widget state embedded. Which of the two a browser *renders* is not
verified, and if a frontend prefers the static page while a kernel is live then
the live layer is dead there and `view()` needs a way to say so.

**Known limit, stated rather than discovered later:** `engines="cdn"` plus
"renders with no kernel" means an offline reader of an exported notebook gets
the page, the layout and the metadata, but no depiction and no 3D viewer, since
RDKit and 3Dmol come from a CDN. `engines="bundled"` (PR 3.2, unimplemented)
closes that half, and `view()` forwards the argument so it arrives for free.

---

## The 2026-08-17 schema rework — **finished**

The second schema review asked for one thing: stop letting a single gufe class
grow several schema objects. [`REVIEW-RESPONSE.md` §13](./REVIEW-RESPONSE.md#13-second-schema-review-2026-08-17)
is the full response; this is what changed in the tree.

### The two rules

1. **One schema object per gufe class.** Every `*Viz` is the visualization form
   of exactly one `GufeTokenizable`, and no class has two.
2. **Every reference is a gufe key, resolved against a `registry`** carried by
   the root payload — an array of whole payload objects, unique by `gufe_key`,
   sorted by `(type, gufe_key)` so the committed fixtures stay byte-stable.

### The count

| | Before | After |
|---|---|---|
| `$defs` declaring a `type` | 11 | 12 |
| gufe classes with two or three schema objects | 5 | 0 |
| Name-only stubs (`ComponentSummaryViz`) | 1 | 0 |
| gufe classes with no schema object (`Protocol`) | 1 | 0 |

Removed: `LigandNetworkNodeViz`, `LigandNetworkEdgeViz`, `ComponentSummaryViz`,
`AlchemicalNetworkNodeViz`, `AlchemicalNetworkEdgeViz`.
Added: `ProtocolViz`, plus the non-`type` helpers `GufeKey` and `Registry`.

### What moved

- **Schema.** `gufe_key` required on all twelve types. `ChemicalSystemViz.components`,
  `LigandAtomMappingViz.componentA`/`componentB`, `TransformationViz.stateA`/
  `stateB`/`protocol` and both networks' `nodes` are gufe keys. A network's
  `edges` are whole `LigandAtomMappingViz` / `TransformationViz` objects.
- **Python.** New `python/gufe_viz/registry.py` (a ~50-line `Registry` class).
  Every builder takes an optional registry: given one it registers into the
  caller's pool, given none it is the root and carries its own. `protocol_payload`
  is new, and `payload_for` dispatches a `gufe.Protocol` to it.
- **TypeScript.** New `ts/src/schema/registry.ts` — `buildRegistry`, `lookup`,
  `lookupOfType`, `entryLabel`. The ligand-network view resolves its nodes
  through it; the ~700 lines of drawing code below that seam are untouched.
- **Tests.** The mutation matrix gains `gufe_key`, registry and
  key-where-an-object-belongs rows, and the old "nested component" exclusivity
  rows are restated against registry entries. Both `apply_mutation`
  implementations learned RFC 6901's `-` append token, which the registry rows
  need. New Python tests assert the deduplication actually happens (three
  molecules for six edge endpoints; one protocol for every edge) and that every
  registry entry validates as a standalone payload.

### One deviation from the review, flagged

The field is `gufe_key`, not `gufe-key` as the review's JSON sketches spell it.
Every other field in the document is snake_case, and a lone hyphenated key would
be the only one needing bracket access in both languages. Reversible in one line
plus a regeneration if David would rather have the hyphen.

### Verification

`pixi run ci` green: ruff, `tsc --noEmit`, 244 pytest, 219 vitest,
`check-generated` clean on all three artifacts.

## Type hints made to match the docstrings - **finished** 2026-08-17

Review nitpick: the Python modules were annotated with `Any` in places where
the docstring right below already named the type it wanted.

- New `python/gufe_viz/_typing.py`: `Payload` (one schema-valid payload dict)
  and `JSONValue` (arbitrary JSON, for free-form annotations). It is its own
  module because `html.py` and `cli.py` must not import gufe at module scope,
  so they cannot take these aliases from a builder module.
- Every builder now names the gufe class it accepts - `gufe.SmallMoleculeComponent`,
  `gufe.ChemicalSystem`, `gufe.LigandAtomMapping`, `gufe.LigandNetwork`,
  `gufe.AlchemicalNetwork`, `TransformationBase` - and returns `Payload`.
  The runtime `isinstance` guards stay: hints are not enforced, and the
  `TypeError` messages are part of the contract the tests assert.
- `payload_for`, `to_html`, `_as_payload_dict` and `cli.load` are typed against
  `GufeTokenizable` (and `| Payload` where a built payload is also accepted).
  The gufe import for those annotations is under `if TYPE_CHECKING`, so
  `import gufe_viz` and `to_html(payload_dict)` still work with no gufe
  installed - checked with a test that makes `import gufe` raise.
- `default_output_path` had no annotations at all; it is `Path | str -> Path`.
- `scripts/make_examples.py` got the same treatment, including `_stabilise`,
  whose `dict -> dict` was wrong: it recurses into lists and scalars.

Two bugs surfaced while writing the annotations down, both fixed:

- `alchemical.py` called `gufe.TransformationBase`, which gufe does not export
  at the top level - three tests were erroring with `AttributeError`. It now
  imports the class from `gufe.transformations.transformation`, the way
  `__init__.py` already did.
- `transformation_payload` handled a single mapping and a list, but gufe also
  accepts a `dict[str, ComponentMapping]`, which was silently dropped.

`pixi run lint` and `pixi run test-py` green; 200 pytest, up from 197 passing
plus 3 errors. `pixi run examples` reports every fixture unchanged.
