# PLAN — `omsf-eco-infra/viz`: TypeScript visualization components for gufe

**Status:** Revision 2 — revised 2026-08-03 against the [PR #1 review](https://github.com/omsf-eco-infra/gufe-viz/pull/1)
**Repo:** `git@github.com:omsf-eco-infra/gufe-viz.git` — "Visualization tools for gufe"
**Requirements source of truth:** [`2026-07-28-gufe-viz-next-steps-alyssa-david-dion.txt`](./2026-07-28-gufe-viz-next-steps-alyssa-david-dion.txt)
(Alyssa Travitz, David Swenson, Dion Whitehead — 2026-07-28), **as amended by the PR #1 review**
(David Swenson `CHANGES_REQUESTED` 2026-08-01, Alyssa Travitz 2026-07-31 and 2026-08-03).
Where the two conflict, the review wins: see R1, R3, R7, R19.
**Working response to the review:** [`REVIEW-RESPONSE.md`](./REVIEW-RESPONSE.md)
**Prior art to harvest:** `../alyssa-openfe-visualization-integration/gufe`, branch `framejs-visualizations`
**Date:** 2026-07-28, revised 2026-08-03

> **Revision 2 in one line:** the schema is hand-written and Pydantic is gone; the
> payload envelope (`data`, `extra`, `schema_version`) is gone; components get one
> subschema each instead of one coalesced object; Python degrades gracefully
> instead of raising; and this document is never cited from committed code again.

---

## 0. The one-paragraph version

Build a **new, small, TypeScript-first library** that turns gufe objects into
interactive browser visualizations, with a **hand-written JSON Schema as the
Python↔TypeScript contract** — the schema is the source of truth and both
languages are downstream of it. Python (in this repo, *not* in gufe) serializes a
gufe object into a schema-valid payload; compiled TypeScript ingests that payload
and draws a picture. V1 ships **one self-contained HTML file** and **one or two
gufe types** — no server, no network calls, no framejs.io, no plugin framework.
Everything else (the remaining six types, the notebook widget, an optional
localhost server) is a later phase built on the same contract. The existing
`framejs-visualizations` branch on gufe is treated as a **smorgasbord to copy
from**, not a thing to merge.

---

## 1. Requirements, traced to the transcript

Every requirement below came out of the 2026-07-28 meeting. Attribution matters
here because Alyssa owns the result and David owns the historical constraints.

### 1.1 Hard requirements

| # | Requirement | Who | Verbatim anchor |
|---|---|---|---|
| R1 | **It must be *possible* to run with zero network access, and each entry point chooses.** Never framejs.io, never a phone-home. Engines (RDKit/3Dmol/d3) may come from a CDN where that is appropriate, and must be bundleable where it is not. | Alyssa, David | "so many of our users are pharma companies that have all these firewall protections… things that call outside the network are completely off." **Revised by David on PR #1:** "initial plan is to get it working via CDN. By the time we put this in a widget, we'll want the widget to bundle the other packages… For each use case, we should think whether we want to bundle or not. (If people are viewing atom mappings on a website I host, I want to use a CDN! If people need this behind a strict firewall, let's bundle.)" |
| R2 | **No server in V1.** A generated `.html` you can just open. A *localhost* server may come later. | Alyssa | "replacing our existing ligand network visualization with something that runs completely locally… openfe view spits out an HTML that you could open. That was my vision." |
| R3 | **Separate repository**, not inside gufe. Optional dependency that OpenFE may require; gufe must not require it. **This constrains the *direction* of the edge only** — gufe never imports gufe-viz. gufe-viz imports gufe freely and depends on it hard. | David, Alyssa | "almost certainly this should go in a … it's an optional dependency that probably OpenFE will require, but at the gufe level it's not a requirement." **Clarified on PR #1** after we misread this as "avoid importing gufe" and built a name-keyed registry to dodge it. David: "I'm not sure why you would run this code without `gufe` installed… A significant bit of this work seems to be trying to avoid `isinstance` simply to avoid importing `gufe`." |
| R4 | Repo lives under **`omsf-eco-infra`** initially, transferred to OpenFE later — so Dion needs no write access to OpenFE repos. | Alyssa | "part of me thinks eco-info because then Dion doesn't need to have write access to OpenFE things. Like permissions-wise, that might be easier." |
| R5 | **TypeScript**, not JavaScript. Compiled to a bundle. | Alyssa, David | "we'd really like to see this in TypeScript… It's future and where it might go in the future is the concern, not where it is today." |
| R6 | **Separate source files** per view/type — Python-brain ergonomics — bundled to a single artifact at build time. | Alyssa, David | "As someone who's used to Python, I want to say different files… separate files in TypeScript can compile to one minimized JavaScript." |
| R7 | **A hand-written JSON Schema** is the Python↔TypeScript contract; it lives **in this repo**, not gufe, and **no language generates it**. Python and TypeScript are both downstream of it. | David, Alyssa | "the Viz library defines its own schema on what is required… essentially the gate to get into TypeScript land." **Sharpened on PR #1:** David asked for schema-first ("the schema is the actual source of truth… When writing in a programming language, it's easy to encode some requirements in the code, but forget to encode them in the schema"); Alyssa concurred ("I'm in favor of this non-pydantic approach"). |
| R8 | The payload schema is **not** gufe's `to_json` schema. TypeScript must never reconstruct SDF/PDB from gufe JSON. | David | "the TypeScript would have to recreate that… which means a lot of ugly TypeScript to maintain." |
| R9 | **Python that builds the payload lives in this repo**, not gufe — because adding an `sdf`/`pdb` key already changes the schema. | David | "You need separate Python code that is not in gufe to do that. You already have a new schema." |
| R10 | **Schema tests**: every object kind, a couple of variants each, **plus mutation testing** — break the schema, prove it fails. | David | "I would definitely want testing on each kind of object with probably a couple variants… and maybe some mutation testing that if you break the schema, it does raise an error, it does fail." |
| R11 | **V1 covers only one or two types.** Infrastructure first, prettier pictures later. | Dion, Alyssa | "I will only focus on one or two types for now… I want to get this infrastructure and then I want to focus on upgrading the actual visualization itself." Alyssa: "Agreed." |
| R12 | **Small PRs, pushed often.** Alyssa hand-reviews everything. | Alyssa | "Smaller PRs are better… because I will review everything by hand because I will be the owner of this." |
| R13 | **Pixi** for environment setup. No Docker in the shipped repo. Any dev Docker must install via pixi so it is copy-pasteable. | David, Alyssa | "not doing this with Docker… If you prefer pixi, that's fine." / "when you're doing it with Docker, can you do it with a pixi setup on it that can be easily copied into?" |
| R14 | **Components must be reusable inside each other**, identically. The atom-mapping viewer is one component used standalone, inside the ligand-network view, and inside the transformation view. | David | "there might be a standalone thing to look at atom mappings, which should use exactly the thing that's used in the ligand network viewer… Exact same component that's just put inside of a larger view." |
| R15 | **A dev page that shows every component at once**, so a change can be checked in all its contexts. | David | "in that repository there are probably example files and a very simple HTML app… one page that shows each of these things. And that's where I would preview it… when I change it in one place, I want to look at how it looks in all of the other places." |
| R16 | **Custom elements** with a create/update/destroy lifecycle as the component model — that is what makes the notebook widget easy later. | David | "if you start from thinking about… custom elements where you have to do the create, update, destroy cycle on it… that gets really easy to wrap as a widget in a notebook." |
| R17 | **Step zero is drag-and-drop.** A Vite dev app; a Python script writes JSON; drag the JSON onto the page; see a rendering. Don't wire Python to TypeScript yet. | David | "I set it up to drag and drop a file. That file is the output from my Python script… I drag and drop that onto my browser and I see a rendering. That to me is the easiest place to start from." |
| R18 | **Then** a Python function that returns an **HTML string**. Where that string is written is Alyssa's call, not Dion's. | David, Alyssa | "Create the string and then ask Alyssa what she wants to do with it. It's her job then." / Alyssa: "anything that's written in Python, I can mutate to my heart's desire." |
| R19 | **Unrecognized input degrades gracefully** — "sorry, I can't visualize this" — never a traceback. **This binds Python as much as the browser.** The rule is three-way, not two-way: (a) handed a non-gufe object → `TypeError`, because that is programmer error; (b) handed a **recognized** type whose serializer then fails → **let it raise**, because a broken `to_sdf()` is a real bug and hiding it behind an "unknown component" panel makes it undiagnosable; (c) handed an **unrecognized** gufe subclass → `UnknownComponentViz`, no exception. | David | "if you get something that's… unrecognized… you say, sorry, I can't visualize this." **Extended on PR #1:** "Raising a (custom) TypeError here will often be wrong… There are cases that `gufe` plans for (e.g., custom chemical system components) where the correct answer is for the browser to say 'sorry, I don't know what to do with this.' Raising an error in Python will cause the process to stop. For example, in a widget, I believe this would leave the frontend disconnected from the backend state." **Case (b) is his, from the sketch he attached:** "Recognized serializers are allowed to raise; only unrecognized component types use the graceful fallback." Revision 2 originally wrote this rule two-way and would have swallowed (b). |
| R20 | **The schema is a discriminated contract.** A chemical-system view handed something else must refuse it explicitly. | David | "the schema: this object is a chemical system. I am going to visualize a chemical system. And if you give it [something else] it says, hey, whoa, no, that's not what I do." |

### 1.2 Explicit non-goals for V1

| # | Non-goal | Who | Verbatim anchor |
|---|---|---|---|
| N1 | **No plugin/extensibility framework** for third-party components. | Alyssa | "I am not interested in that as the first iteration of this, largely because we don't have people lining up to define their own components yet… I don't want to introduce complexity here." |
| N2 | **No protocol visualization.** | Alyssa | "anything that involves a protocol is the one that I'm most concerned about." |
| N3 | **No CLI wiring in the first pass.** | David | "Don't even worry about the command line version." |
| N4 | **No build-time schema sync with gufe.** Lockstep versioning is accepted. | Alyssa | "I am not even that concerned with it being updated at build time… we already have repos that have to move in lockstep because of versioning." |
| N5 | **No in-browser code editing / framejs authoring loop.** That is a different product for a different customer. | Alyssa | "that's not a component that we're prioritizing here." |
| N6 | **Community modifiability is deliberately sacrificed.** | Alyssa | "it does make community input and modifications much, much, much more onerous. And I am fine with that… I own that trade-off." |
| N7 | Results / alchemical-network views are nice-to-have, not V1. | Alyssa | "if we want to expand this to visualize results or alchemical networks… that would be like a nice-to-have, extra time." |

### 1.3 Deferred, but designed for

- **Nested payload envelope** so richer gufe data can be added later without a
  breaking change. Dion: "it doesn't feel like a big ask to nest the data — here's
  the main data, here is other metadata that we might look at later." David: "You
  can add it later… That doesn't need to be part of V1… you have the flexibility
  to do it in the future." → **implemented in Phase 2 as an envelope, populated
  later.**
- **Extra display data beyond SDF/PDB** — e.g. formal charge on hover. David: "the
  ability to add things like if you hover over an atom you can see what the formal
  charge on it was, which is one of the things SDF didn't have."
- **A minimal localhost server** to avoid huge HTML payloads. Dion raised it;
  David confirmed a Flask-shaped local app is usually acceptable inside pharma
  firewalls ("that's a very small surface, and there's no real running it
  externally"). Deferred past V1, kept architecturally possible.
- **framejs.io stays as a demo/office-hours story**, explicitly decoupled from the
  OpenFE production path. Alyssa: "It can be done with this and it's relatively
  easy… but it's not like, oh yeah, this is exactly what OpenFE is going to look
  like."

---

## 2. Decisions locked before writing code

| Decision | Choice | Rationale |
|---|---|---|
| Repo | `omsf-eco-infra/viz` (this repo) | R4; already created. |
| Python distribution name | `gufe-viz`, import `gufe_viz` | Repo tagline is "Visualization tools for gufe"; `viz` is not a viable PyPI name. **Confirm with Alyssa before the first release** — cheap to change while unpublished. |
| Schema source of truth | ~~Pydantic models → JSON Schema → TypeScript types~~ **Hand-written JSON Schema → TypeScript types.** Python payload builders return plain dicts and are validated against the schema *in tests*. | **Revised by PR #1 review.** Both reviewers rejected the Pydantic-generated schema; Alyssa's stack is moving off Pydantic entirely. Writing the schema in a programming language lets a requirement be encoded in the code and silently omitted from the schema — David caught exactly that in `ComponentDescriptor`. The cost is that correctness moves from construction to testing, accepted deliberately (see §6). The one generated link that survives is TS types *from* the schema, which is the link that actually prevents drift. |
| Python validation | `jsonschema` in tests; optional `validate=True` at runtime | Replaces "valid by construction". This is the burden schema-first shifts onto the test suite. |
| TS bundle delivery | **Built artifact committed to the repo**, CI-verified fresh | `pip install` and install-from-git need no Node toolchain. Cost is one large generated file in git — mitigated with `.gitattributes linguist-generated` and a CI freshness job. |
| Bundling | Vite (library mode) → one ES module + one IIFE | R5/R6: many TS files in, one artifact out. Vite is also the dev server for R17's drag-and-drop. |
| Component model | Custom elements (`<gufe-*>`), `connectedCallback` / `payload` setter / `disconnectedCallback` | R16, R14. |
| Dispatch | **Explicit `type` discriminator in the payload**, not duck-typed key sniffing | R20. Replaces the current `VIEWS.find(v => inputs[v.key] != null)` first-match-wins. Renamed from `kind` to `type` per David's sketch, with a `Viz` suffix on the values. |
| Payload versioning | **None.** The schema `$id` carries the version; the payload carries no version field. | Every V1 consumer ships the reader and the writer together in one artifact (the self-contained HTML inlines the exact bundle that reads it; the widget bundles its own JS). There is no case where they can be at different versions. Adding an optional `schema_version` later is additive and non-breaking. Dropping it also removes the last reason for a root envelope. |
| Env / tasks | `pixi.toml` (python + node in one env), tasks as pixi tasks | R13. |
| gufe coupling | This repo imports gufe hard and uses `isinstance`; gufe never imports this | R3, as clarified. |
| gufe distribution | **conda-forge, not PyPI - but declared in `pyproject.toml` as well as `pixi.toml`.** | Everything pip-installable belongs in `pyproject.toml`, because that is the only file a `pip install` can see. Measured, not assumed: a PyPI requirement is satisfied by a conda package *only* when that package is also in pixi's own dependency table, so the `pixi.toml` entry is the mechanism that redirects it to conda-forge, and removing either entry breaks something. The `>=1.12` floor turns PyPI's stale 0.4 from a hazard into a clean refusal - `pip install` fails naming the constraint instead of installing an API that no longer exists. |
| Licence | MIT | Matches gufe/OpenFE. |

---

## 3. Architecture

### 3.1 The dataflow, and where the contract sits

The schema sits at the *top* of the dataflow, not in the middle of it. Nothing
generates it; both languages are downstream.

```
                      ╔══════════════════════════════════════════╗
                      ║   schema/gufe-viz.schema.json            ║  ← the contract (R7)
                      ║   HAND-WRITTEN. The source of truth.     ║     checked in,
                      ║   No language generates this file.       ║     human-readable
                      ╚══════════════════════════════════════════╝
                            │                            │
              validates     │                            │  codegen (CI-verified)
                            │                            ▼
  ┌── Python (this repo) ───┼──────────┐   ┌── TypeScript (this repo) ─────────────┐
  │                         │          │   │                                       │
  │  gufe object            │          │   │  src/schema/types.ts  (generated)     │
  │    │  (live objects only — never   │   │  Ajv validator, same JSON file        │
  │    │   gufe's to_json wire format) │   │            │                          │
  │    ▼                    │          │   │            ▼                          │
  │  payload builder        │          │   │    <gufe-view> dispatches on `type`   │
  │    .to_sdf() / .to_pdb_file()      │   │            │                          │
  │    ▼                    │          │   │            ▼                          │
  │  plain dict ────────────┘          │   │      a picture                        │
  │    │  (jsonschema in tests)        │   │                                       │
  └────┼───────────────────────────────┘   └───────────────────────────────────────┘
       │                                                ▲
       └────────────────  payload JSON  ────────────────┘
```

**The single most important architectural rule** (R8, and the thing David spent
the most airtime on): *gufe's own JSON serialization never crosses into
TypeScript.* Deduplicated key-chains, `:custom:` codecs, `to_dict` vs `to_json`
divergence, `QuickRun` still using `to_dict` — all of that stays a Python problem.
When the input is a saved gufe `.json` file, **Python deserializes it into live
gufe objects first**, then builds the viz payload from those. TypeScript only ever
sees SDF, PDB, GraphML and plain, flat, schema-valid JSON.

This is also the answer to the "serialization is the fuzzy part" worry at the end
of the meeting: with this rule, the fuzzy part is confined to `gufe.tokenize`
round-tripping in Python, where David and Alyssa can answer questions directly.
**Open serialization questions go to the three-person chat, not down a rabbit hole**
("don't go down a rabbit hole. It's not a good use of your time.").

### 3.2 The payload shape

**There is no envelope.** An object is its `type` plus its own fields, flat, and
it is the same object whether it stands alone or is nested inside another.

```jsonc
{
  "type": "ChemicalSystemViz",
  "name": "benzene in water",
  "components": {                        // keyed by the ChemicalSystem label
    "ligand":  { "type": "SmallMoleculeComponentViz", "name": "benzene", "sdf": "..." },
    "solvent": { "type": "SolventComponentViz", "name": "", "smiles": "O", "neutralize": true, … }
  }
}
```

- `type` is the closed discriminator. Unknown `type` → the graceful
  "no visualization for X" panel (R19), never a throw. The `Viz` suffix is
  deliberate: a `SmallMoleculeComponentViz` is a lossy visualization projection,
  not a `SmallMoleculeComponent`, and the suffix stops anyone expecting a round
  trip.
- **One `$def` per component type**, combined with `oneOf`, so the schema itself
  enforces that a protein carries `pdb` and a small molecule carries `sdf`.
  Plus one `UnknownComponentViz` for gufe's custom-subclass case.
- `additionalProperties: false` everywhere, so a typo in a payload builder is a
  validation error rather than a silently blank picture.
- No `data` key. No `extra` key. No `schema_version`.

**What was removed, and why** — all three were introduced by this plan and
removed by the PR #1 review:

| Removed | Reason |
|---|---|
| `data` | It forced a Data object per type on top of a Payload object and a builder. David: "I'm not sure that having all those separate is actually needed." |
| `extra` | It was a forward-compatibility slot. Additive minor changes to the schema do the same job without a permanently-empty key in every payload and a test asserting it stays empty. Closes Q5 by deletion. |
| `schema_version` | See §2. No V1 consumer can have a reader and writer at different versions, and this field was the only thing forcing a root envelope. |
| `ComponentDescriptor` | One object coalescing `sdf`/`pdb`/`smiles`/solvent fields, all nullable, with "exactly one group is populated" enforced in the builder and nowhere in the schema. This is David's worked example of why R7 must be schema-first. |
| `label` on components | Components sit in an object keyed by their `ChemicalSystem` label, which is gufe's own shape and one less denormalized field to keep consistent. |

### 3.3 Component model

```
<gufe-view>                     dispatcher: reads .payload, validates, delegates on `type`
  ├── <gufe-small-molecule>     2D depiction + 3D conformer + properties
  ├── <gufe-protein>            3Dmol viewer + representation/colour switchers
  ├── <gufe-atom-mapping>       the shared mapping viewer          ◀── reused, not copied (R14)
  ├── <gufe-ligand-network>     radial network; embeds <gufe-atom-mapping> on edge click
  ├── <gufe-transformation>     state A/B diff; embeds <gufe-atom-mapping>
  ├── <gufe-chemical-system>    master/detail; embeds <gufe-small-molecule>/<gufe-protein>
  ├── <gufe-solvent>            settings card
  └── <gufe-alchemical-network> d3 force graph
```

Each element implements the same three-beat lifecycle (R16):

```ts
class GufeSmallMolecule extends HTMLElement {
  set payload(p: SmallMoleculePayload) { /* update */ }
  connectedCallback()    { /* create */ }
  disconnectedCallback() { /* destroy: kill 3Dmol/d3 handles, observers, timers */ }
}
```

Because they are custom elements, embedding one inside another is literally
`host.appendChild(document.createElement('gufe-atom-mapping'))` — which is what
makes R14 structurally true rather than a convention someone has to remember.

**Per-type component subschemas (§3.2) are the other half of that.** The
original design had `SmallMoleculeData` for the standalone case and
`ComponentDescriptor` for the nested case: two shapes for one thing, so
`<gufe-small-molecule>` could not be dropped into the chemical-system view
without a translation step, and R14 would have been honoured by discipline
rather than by construction. With one `$def` referenced from both places,
`<gufe-chemical-system>` renders each component by handing the sub-object
straight to the element that claims its `type`. There is no second code path
because there is no second shape.
It is also the whole of the future notebook-widget story: an anywidget/ipywidget
wrapper creates one element and sets `.payload`.

**Heavy engines stay lazily loaded.** RDKit (~7 MB wasm), 3Dmol and d3 are
`import()`-ed on first use by the view that needs them, never eagerly. In Phase 1
these come from a CDN in dev; the shipped HTML pins them (§5.4).

### 3.4 Repo layout

```
viz/
├── pixi.toml                    # one env: python + node; all tasks (R13)
├── pyproject.toml               # gufe-viz; NO runtime deps; extras: [test]
├── package.json                 # TS workspace: vite, typescript, ajv, vitest
├── LICENSE                      # MIT
├── PLAN.md  README.md  CLAUDE.md
│
├── schema/                      # ◀ THE CONTRACT (R7) — HAND-WRITTEN, the source of truth
│   ├── gufe-viz.schema.json     #   one file, grouped $defs; nothing generates it
│   ├── mutations.json           #   the mutation matrix, as data, shared by both suites
│   └── README.md                # "this file is the gate; edit it directly"
│
├── python/
│   └── gufe_viz/
│       ├── __init__.py          # public API: payload_for(obj), to_html(obj)
│       ├── components.py        # the component builders + chemical_system_payload
│       ├── networks.py          # ligand_atom_mapping_payload, ligand_network_payload
│       ├── alchemical.py        # transformation_payload, alchemical_network_payload
│       ├── html.py              # payload -> self-contained HTML string (R18)
│       ├── _assets/             # ◀ committed build artifact
│       │   ├── gufe-viz.js
│       │   └── template.html
│       └── cli.py               # `gufe-viz <file> -o out.html` (dev convenience, Phase 3)
│
├── ts/
│   ├── src/
│   │   ├── index.ts             # registers every custom element; exports mount()
│   │   ├── schema/
│   │   │   ├── types.ts         # ◀ generated from schema/*.json
│   │   │   └── validate.ts      # Ajv, compiled at build time
│   │   ├── views/               # one file per type (R6)
│   │   │   ├── small-molecule.ts
│   │   │   ├── protein.ts
│   │   │   ├── atom-mapping.ts
│   │   │   └── …
│   │   ├── shared/              # theme, engine loaders, DOM helpers, SDF/PDB parsing, kabsch
│   │   └── dev/
│   │       ├── dropzone.ts      # R17: drag a .json on and it renders
│   │       └── gallery.ts       # R15: every component, every context, one page
│   ├── index.html               # the Vite dev app (dropzone)
│   ├── gallery.html             # the Vite dev app (gallery)
│   └── tests/                   # vitest
│
├── examples/                    # golden payloads — shared by pytest AND vitest
│   ├── small_molecule.json
│   ├── protein.json
│   └── …
│
├── scripts/
│   ├── make_examples.py         # gufe objects -> examples/*.json (R17's "Python script")
│   └── check_generated.sh       # CI: types + bundle are up to date (the schema is
│                                #     hand-written, so there is nothing to check)
│
└── .github/workflows/ci.yml
```

Why `python/` and `ts/` as siblings rather than TS nested inside the Python
package: it keeps the two toolchains' configs from colliding, and it makes the
"built artifact is copied into `python/gufe_viz/_assets/`" step explicit and
auditable rather than implicit.

---

## 4. What to harvest from the gufe branch

The `framejs-visualizations` branch is ~8,200 lines across 31 files. It is the
smorgasbord (Alyssa: "we can pull from this massive gufe PR… treat that as the
smorgasbord… make sure we're only pulling in what we need and we're not
over-architecting"). Concretely:

### 4.1 `code.js` (3,040 lines) → TypeScript modules

| Source lines | What it is | Destination | Phase |
|---|---|---|---|
| 20–182 | theme (light/dark token tables) | `shared/theme.ts` | 1 |
| 197–259 | lazy engine loaders (3Dmol, RDKit, d3) | `shared/engines.ts` | 1 |
| 260–295 | `asText`/`asObject` input coercion | *drop* — schema-typed payloads replace it | — |
| 299–418 | DOM helpers (`el`, `esc`, buttons, chips, banners) | `shared/dom.ts` | 1 |
| 425–544 | SDF parse / molblock build / RDKit depiction | `shared/sdf.ts` | 1 |
| 550–713 | mapping math (kabsch, jacobi, mat3) | `shared/align.ts` | 4 |
| 730–1025 | `createMappingViewer` — the shared atom-mapping viewer | `views/atom-mapping.ts` | 4 |
| 1031–1166 | PDB stats/styles/colour schemes | `shared/pdb.ts` | 1 |
| 1175–1240 | component type colours/badges/field rows | `shared/components.ts` | 1 |
| 1245–1379 | `viewSmallMolecule` | `views/small-molecule.ts` | **1** |
| 1384–1511 | `viewProtein` | `views/protein.ts` | **1** |
| 1520–1680 | `viewSolvent` (incl. the SVG schematic) | `views/solvent.ts` | 4 |
| 1685–1870 | `viewChemicalSystem` | `views/chemical-system.ts` | 4 |
| 1875–2074 | `viewTransformation` (+ diff logic) | `views/transformation.ts` | 4 |
| 2082–2533 | `viewLigandNetwork` (+ GraphML parse, npy coords) | `views/ligand-network.ts` | 4 |
| 2544–2909 | `viewAlchemicalNetwork` (d3 force graph) | `views/alchemical-network.ts` | 5 |
| 2910–2959 | `viewLigandAtomMapping` (thin wrapper) | folded into `views/atom-mapping.ts` | 4 |
| 2967–3040 | dispatch / shell / ResizeObserver | `index.ts` + `<gufe-view>` | 1 |

The port is mostly mechanical — as Dion put it, "I've already built all of that.
It's just going to be re-architecting it and moving it around." The real work per
module is: add types, convert the `function view*(host, inputs)` +
`{onResize, cleanup}` handle convention into a custom element, and replace
`inputs['some.key']` reads with typed `payload.data.*` reads.

### 4.2 `framejs.py` (758 lines) → `python/gufe_viz/`

| Source | Destination | Notes |
|---|---|---|
| `PAYLOAD_REGISTRY` + the 8 `_*_payload` builders (L229–425) | `components.py` / `networks.py` / `alchemical.py` | **Drop** `_registry_lookup` and the name-keyed registry: `isinstance` dispatch, most-derived first, is what David asked for and what R3-as-clarified permits. Builders return plain dicts. |
| `_component_summary` / `_component_descriptor` / `_chemical_system_fields` / `_solvent_fields` / `_protein_pdb_string` / `_json_safe` (L348–404) | `components.py` | `_protein_pdb_string` and `_json_safe` reuse nearly verbatim — the latter's `json.dumps(default=str)` trick for `openff.units.Quantity` in annotations is worth keeping. `_component_descriptor` does **not** survive: it becomes one builder per component type (§3.2). |
| `_STANDALONE_HTML` + `build_html` + `_script_safe` + `_escape_html` (L622–759) | `html.py` | This *is* R18. Keep `_script_safe` (`</script` neutralisation) and the `"</" → "<\\/"` payload escape — both are real, subtle correctness fixes. |
| `_inlined_engines` + `ENGINE_URLS` (L611–708) | `html.py`, PR 3.2's `engines="bundled"` | The RDKit-wasm-as-`data:`-URL `locateFile` trick is the key piece for R1. |
| `local_url` / `canonical_url` / `resolve_url` / `string_to_base64_string` / `FRAME_UUID` (L99–228) | **drop** | framejs.io URL machinery; no longer applicable. |
| `_build_widget` / `view_object` / `repr_mimebundle` / `legacy_view` (L457–570) | Phase 5 | Rewrite against the custom element, not `MetaframeWidget`. |
| `server.py` (919 lines), `--proxy`, the Chrome Local-Network-Access workaround | **drop for now**; revisit in Phase 6 | Note that the whole LNA problem *disappears* under the static-HTML design: there is no public-origin iframe reaching into localhost, because there is no iframe and no remote origin. |
| `mapping_visualization.py` | **stays in gufe** | It is the legacy RDKit fallback renderer and unrelated to this repo. |
| `_viewable.py` (`FramejsViewable` mixin) | Phase 5, and it lands **in gufe**, not here | The mixin is the one piece that must live in gufe (it is a method on gufe classes) and it is why gufe keeps an *optional* dependency edge. Its lazy-import discipline ("this module deliberately imports nothing from gufe at import time") is the right pattern to preserve. |

### 4.3 Tests worth porting

`test_framejs_visualization.py` (680 lines) and `test_framejs_server.py` (509
lines) contain two tests that are the ancestors of R10's schema tests and should
be carried over in spirit:

- `test_every_payload_claims_exactly_one_dispatch_key` → becomes "every payload
  builder emits exactly one valid `type`, and every `type` is a `$def` in the
  schema".
- `test_the_frame_dispatches_on_every_key_the_registry_emits` → becomes a
  cross-language test: the TS `<gufe-view>` dispatch table covers exactly the
  `type` consts in `schema/gufe-viz.schema.json`.

---

## 5. Phased roadmap

Phases 0–3 are V1 and are specified to PR level. Phases 4+ have entry/exit
criteria only, deliberately — their requirements were deferred in the meeting and
specifying them now would be the over-architecting Alyssa warned against.

Every phase is one or more **small PRs** (R12). Target: no PR over ~600 lines of
hand-written diff; generated artifacts don't count but are called out in the PR
description.

---

### Phase 0 — Repo boilerplate

> Alyssa: "if you can do the boilerplate stuff for this repo first… we can have
> that in place before Alyssa starts reviewing."
> David: "I know what OpenFE's rules are for that pretty much."

**PR 0.1 — scaffolding**

- `pixi.toml`: one environment with `python>=3.12`, `nodejs`, `gufe`, `rdkit`,
  `pytest`. Tasks: `dev`, `build`, `types`, `test`,
  `test-py`, `test-ts`, `lint`, `examples`, `check-generated`. (No `schema`
  task: the schema is hand-written.)
- `pyproject.toml` (`gufe-viz`, setuptools + setuptools-scm, mirroring gufe's),
  `package.json`, `tsconfig.json`, `vite.config.ts`.
- `LICENSE` (MIT), `.gitignore`, `.gitattributes` (mark `_assets/gufe-viz.js` and
  `ts/src/schema/types.ts` `linguist-generated`). **Not the schema** — it is
  hand-written and is the one file a reviewer should always see expanded.
- `.pre-commit-config.yaml` copied from gufe's (ruff + ruff-format), plus
  prettier/eslint for TS.
- `news/` fragment directory if OpenFE's `rever` convention is wanted here —
  **ask David**; it may be premature for a pre-transfer eco-infra repo.

**PR 0.2 — CI**

`.github/workflows/ci.yml`, all steps under `pixi run`:
`lint` → `test-py` → `test-ts` → `build` → `check-generated` (fails if the
committed TS types or bundle differ from a fresh build; the schema is
hand-written and has nothing to regenerate).

**Exit criteria:** `pixi run test` passes on a clean clone on Linux and macOS;
`pip install .` works without Node installed.

*On Docker:* Dion may keep a local `Dockerfile` for his own convenience, but it
installs via pixi (R13, David's explicit ask) and it is **stripped before the
repo is handed over** — as stated in the meeting. It stays out of the default
developer path in the README either way.

---

### Phase 1 — Drag-and-drop rendering (R17: "the zeroth thing")

**No Python↔TypeScript wiring at all.** A hand-written JSON file, dragged onto a
Vite dev page, draws a molecule.

**PR 1.1 — TS skeleton + `<gufe-view>` dispatcher + dropzone**

- `shared/theme.ts`, `shared/dom.ts`, `shared/engines.ts` ported from `code.js`.
- `<gufe-view>` custom element: `payload` setter → dispatch on `type` → mount the
  right child element → tear the previous one down. Unknown/absent `type` →
  the graceful panel (R19).
- `ts/index.html` + `dev/dropzone.ts`: drop a `.json` anywhere on the page, it
  becomes `document.querySelector('gufe-view').payload`. Also accepts `?file=` for
  reload-friendly iteration.
- Committed example payloads hand-written by hand at this stage.

**PR 1.2 — `<gufe-small-molecule>`**

Port `viewSmallMolecule` (`code.js` 1245–1379) + `shared/sdf.ts`. 2D RDKit
depiction, 3D 3Dmol conformer, style switcher, SMILES/charge/name.

**PR 1.3 — `<gufe-protein>`**

Port `viewProtein` (1384–1511) + `shared/pdb.ts`. 3Dmol with representation and
colour-scheme switchers, chain/residue/water stats.

**PR 1.4 — the gallery page (R15)**

`gallery.html` + `dev/gallery.ts`: every registered element, rendered from every
example payload in `examples/`, on one scrolling page — including each component
in its *embedded* contexts once those exist. This is the page David asked for:
change the mapping viewer, reload, see it standalone *and* inside the network view
*and* inside the transformation view simultaneously.

**Exit criteria:** `pixi run dev`, drag `examples/small_molecule.json` onto the
page, see a molecule. Same for protein. Gallery renders both. `tsc --noEmit` clean.
Nothing in this phase imports gufe or runs Python.

*Type choice:* `SmallMoleculeComponent` and `ProteinComponent` — per Alyssa,
"we want to get the visualization, so let's definitely do a small molecule
component or a protein component" (R11). `ChemicalSystem` was named as the
*maximum* complexity and is explicitly not V1.

---

### Phase 2 — The contract (R7, R10)

> **Rewritten after the PR #1 review.** The original PR 2.1–2.4 shipped and were
> then rejected as a design. What follows is the replacement; PLAN-STATUS records
> what was actually built first time round and why it is being redone.

**PR 2.1 — the hand-written JSON Schema**

- `schema/gufe-viz.schema.json`, written directly. One file, `$defs` grouped by
  area, `$id` carrying the version. No generator, no `pixi run schema`.
- One `$def` per component type plus `UnknownComponentViz`, combined with
  `oneOf` — the shape David sketched in his review.
- All eight top-level types declared even though only three have views. Costs
  nothing and avoids churn as views land.
- `schema/README.md`: what it is, that **it is edited by hand**, and that it is
  the Python↔TypeScript gate — the sentence David will want to read when he
  opens this repo in a year.

**What the generator's removal takes with it** (done ahead of the rewrite, so
the new schema lands against a tree that cannot regenerate it):

| Removed | |
|---|---|
| `python/gufe_viz/schema.py` | the Pydantic models |
| `scripts/gen_schema.py` | the generator |
| `pixi.toml` `[tasks.schema]` | and `types`' `depends-on` edge to it |
| `pydantic` | from `pixi.toml` and `pyproject.toml`, which now declares no runtime dependencies at all |
| `schema/*.schema.json linguist-generated` | in `.gitattributes` — the schema's status inverts from folded-away output to the most-reviewed file in the repo |
| the schema entry in `check_generated.sh` | two generated artifacts remain, not three |

Three constants in `schema.py` had consumers, and they do not share a fate:
`Payload` goes (builders return dicts); `SCHEMA_VERSION` goes with the version
field itself (§2); `PAYLOAD_KINDS` survives but must be **read from the schema's
`$defs`** rather than declared in Python, the way `gen_types.mjs` already derives
its list. Declaring it in Python would reintroduce, in miniature, exactly the
two-sources-of-truth problem this change exists to remove.

*Drafting the schema with an LLM is fine and does not weaken any of this — the
property under review is that no artifact in this repo derives the schema, which
is a claim about the build graph rather than about authorship. Two things do not
survive the substitution: the file still has to read like something a person
wrote, because David reads it; and the mutation matrix (PR 2.4) is what proves it
says what we think it says, which is the whole of what schema-first buys.*

**PR 2.2 — Python payload builders**

- `components.py` / `networks.py` / `alchemical.py`: the builders, returning
  plain dicts. `isinstance` dispatch, most-derived first, with the subclass
  ordering (`ProteinMembraneComponent` -> `SolvatedPDBComponent` ->
  `ProteinComponent`, a three-deep chain) enforced by a test that derives it
  from the live gufe classes, rather than by an MRO walk or by a comment.
- `payload_for(obj) -> dict`. Raises `TypeError` only when handed something that
  is not a gufe object at all; an unregistered gufe subclass returns an
  `UnknownComponentViz` payload (R19). `NoVisualization` is deleted.
- `scripts/make_examples.py`: build real gufe objects from gufe's test data and
  write `examples/*.json`. These replace Phase 1's hand-written files, and are
  the **shared fixtures for both test suites**.
- Python-side test matrix per R10: every kind × ≥2 variants (e.g. a molecule with
  and without a conformer/charge; a protein with and without waters/hetero).

**PR 2.3 — TypeScript type generation + runtime validation**

- `pixi run types` → `ts/src/schema/types.ts` via `json-schema-to-typescript`.
  Checked in; CI verifies freshness.
- `shared/validate.ts`: Ajv validator compiled from the same schema. `<gufe-view>`
  validates before dispatch. Invalid payload → a panel naming the failing JSON
  pointer, not a throw (R19).
- No version handling: `schemaVersionProblem()` and the version-refusal panel are
  deleted along with the field (§2).

**PR 2.4 — mutation testing (R10, the explicit ask)**

A table-driven suite that takes each valid example payload and mutates it, then
asserts *both* sides reject it:

| Mutation | Expected |
|---|---|
| drop a required field | invalid, error names the field |
| wrong type (`total_charge: "zero"`) | invalid |
| unknown `type` | invalid; UI shows "no visualization for X" |
| extra key anywhere | invalid (`additionalProperties: false`) |
| **a component carrying both `sdf` and `pdb`** | **invalid** — the property the old schema could not express, and David's explicit ask on PR #1 |
| **a `SolventComponentViz` carrying `sdf`** | **invalid** — same, per component type |
| truncated/garbage SDF | schema-valid but render-degraded → error panel, no crash |
| a network edge naming a ligand the network does not contain | schema-valid; JSON Schema cannot express referential integrity, so a Python test covers it and the `$def` description says so |

Run in pytest with `jsonschema` *and* in vitest against Ajv, from the same
fixture files and the same `schema/mutations.json`. This is the concrete form of
David's "if you break the schema, it does raise an error, it does fail" — and
with no Pydantic in the way, the Python side is now testing the same artifact the
browser uses rather than a model that generated it.

**Exit criteria:** a payload that passes Python validation always passes TS
validation and vice versa, enforced by CI on shared fixtures. Every mutation is
rejected by both sides. The per-type exclusivity rows pass, which is the
regression test for the whole schema-first change.

---

### Phase 3 — Python → HTML string (R18)

**PR 3.1 — the bundle build**

`pixi run build` → Vite library build → `python/gufe_viz/_assets/gufe-viz.js`
(committed). `MANIFEST.in` / `package-data` so it ships in the wheel and sdist.

**PR 3.2 — `to_html`**

```python
gufe_viz.to_html(obj) -> str                      # returns a string. Full stop.
gufe_viz.to_html(payload_dict) -> str             # also accepts a raw payload
gufe_viz.to_html(obj, engines="cdn"|"bundled")    # R1, as revised
```

Port `_STANDALONE_HTML`, `build_html`, `_script_safe`, `_escape_html` from
`framejs.py`. The page is: the bundle inlined in a `<script type="module">`, the
payload in a `<script type="application/json">`, one `<gufe-view>` element, and a
tiny bootstrap. No fetches, no iframe, no framejs.io.

`engines=` is the whole of what used to be Phase 5. `"cdn"` loads RDKit/3Dmol/d3
on demand from their CDNs; `"bundled"` inlines them, including RDKit's wasm as a
`data:` URL, and the resulting page needs no network at all. The engines are
vendored at build time, so `to_html` itself never touches the network in either
mode. Default is **Q13**, open with Alyssa.

**Explicitly: the function returns a string and writes nothing.** Where the file
goes is Alyssa's decision — "create the string and then ask Alyssa what she wants
to do with it. It's her job then."

**PR 3.3 — a dev CLI**

`gufe-viz <input> -o out.html` — a convenience for iterating, **not** the OpenFE
CLI integration (N3). It is how Dion does the edit→rebuild→reload loop he
described, and it becomes the reference implementation Alyssa wires `openfe view`
to later.

**Exit criteria:** `gufe-viz examples/protein.json -o /tmp/p.html && open /tmp/p.html`
renders. Under `engines="bundled"` the page makes no network requests at all.
Then hand Alyssa the `to_html` signature and ask where she wants the output to
land, and which `engines` default she wants (Q13).

**→ This is V1. Everything below is a later conversation.**

---

### Phase 4 — The remaining component types

Port `atom-mapping` (+ `shared/align.ts`), `ligand-network`, `transformation`,
`chemical-system`, `solvent`. The order matters: **`atom-mapping` first**, because
`ligand-network` and `transformation` both embed it, and getting that embedding
right is the proof of R14. One PR per type, each adding a `$def` to the schema,
example payloads, and a gallery entry.

*Entry:* Phase 3 shipped and reviewed. *Exit:* feature parity with the current
`code.js`, on the new contract.

### ~~Phase 5 — Zero-network HTML~~ — folded into Phase 3

**Deleted as a phase** after David's PR #1 clarification of R1. Zero-network is
not an end state to reach, it is one of two modes each entry point picks:
`to_html(obj, engines="cdn"|"bundled")`, specified in PR 3.2. `"bundled"` inlines
3Dmol, d3, RDKit and RDKit's wasm as a `data:` URL — ~10 MB pages, which Alyssa
has already blessed: "most of our users are used to having disgustingly large
file sizes… they would rather have a large file than have a possible security
concern." Engines are vendored at build time, so `to_html` never touches the
network in either mode. Port `_inlined_engines` from `framejs.py`.

### Phase 5 — Notebooks

*Revision 3, 2026-08-12.* The phase was one sentence ("an anywidget wrapper")
until the entry decisions below were taken. framejs is out: no `MetaframeWidget`,
no framejs.io, no iframe pointing at a public origin — the notebook renders the
**same bundle and the same `<gufe-view>`** the CLI's page does. Q7 is closed by
that (no parallel framejs path), Q6 is closed as the free function.

#### Two layers, one contract

The contract in a notebook is the contract everywhere: *create a `<gufe-view>`,
set its `.payload`* (R16). What differs is only how the element gets onto the
page and how the payload reaches it, and the entry answers force **both** of the
two available answers, not a choice between them:

| | carries | needs | gives |
| --- | --- | --- | --- |
| **static** `text/html` | the whole page from `to_html`, in an `<iframe srcdoc>` | nothing | a saved `.ipynb` that still draws with no kernel |
| **live** widget view | a shell iframe, payload over the comm | anywidget | `w.payload = other_obj` redraws in place |

Both are emitted from one `_repr_mimebundle_`, so the frontend picks: a live
kernel with a widget manager takes the widget view, `nbconvert`, nbviewer, a
mailed notebook and a marimo HTML export fall back to the static page. Neither
layer is a fallback for the other in the sense of being worse — they answer
different questions, and the answers to (2) and (3) below ask both.

**Why an iframe on both paths, rather than mounting into the cell.** Two
properties of the shipped TypeScript, neither of them incidental:
`GufeElement` builds **light DOM** (`shared/element.ts` styles `this` and appends
plain children), so JupyterLab's output-area CSS would reach inside every view;
and `shared/engines.ts` loads engines by appending a `<script>` to `document.head`
and reading `window.$3Dmol` / `window.RDKit`, which in a notebook page is the
same global py3Dmol and nglview are using, possibly at another version. Mounting
into the cell means fixing both — a shadow root on `GufeElement`, a
caller-supplied document in the loaders — and that is surgery on code that is
working and not yet reviewed. The iframe buys the isolation for nothing.

#### Entry decisions (Dion, 2026-08-12)

1. **Engines are `"cdn"` in a notebook.** Which is also all that exists today:
   `engines="bundled"` is specified in PR 3.2 and not implemented. `view()`
   forwards the argument, so the notebook inherits `"bundled"` for free when it
   lands, and until then a notebook draws molecules only with a network.
2. **A saved `.ipynb` must draw with no kernel.** This is what makes the static
   layer mandatory rather than a nicety, and it has a cost worth naming out loud:
   every cell that displays an object carries a full page, so **each view adds
   the bundle (239 kB today) to the notebook file**, per cell, whether or not
   anywidget is installed. `view(obj, static=False)` opts out for people writing
   notebooks with many views who do not need the export. See Q17 for the default.
   Note the tension with (1): "no kernel" is fully satisfied, "no network" is
   satisfied for everything except the CDN engines, so an offline reader of an
   exported notebook sees the page and the metadata but not a depiction or a 3D
   viewer. `engines="bundled"` is the answer to that half, once it exists.
3. **Live update is in scope**, which is what anywidget is *for* here. Without
   it the widget layer would be an iframe wrapper with a dependency attached,
   and the static layer alone would do.
4. **`gufe_viz.view(obj)`, a free function** (Q6). No mixin in gufe, no
   `.view()` on gufe classes, no gufe PR to coordinate with while PR #1 is in
   review. The mixin stays available as a later, additive move.
5. **JupyterLab and marimo** are the frontends that must work. VSCode and Colab
   are not targets; they are also not to be gratuitously broken, and the static
   layer is plain HTML, which is the most portable thing available.
6. **anywidget is an optional extra**, `gufe-viz[notebook]`. `import gufe_viz`
   and `view()` must both work without it, in keeping with the lazy-import
   discipline the package already holds to for gufe itself.

#### PR 5.1 — `view()` and the static page

```python
gufe_viz.view(obj)                       # -> a displayable, in any frontend
gufe_viz.view(obj, height="600px")       # the iframe's height
gufe_viz.view(obj, engines="cdn")        # forwarded to to_html
```

Returns a small object whose `_repr_mimebundle_` emits `text/html` — the page
from `to_html`, HTML-attribute-escaped into an `<iframe srcdoc>` — plus a
`text/plain` line for terminals. No optional dependency, no widget, no comm.

`html.py` grows one seam: the document *body* (payload `<script>`, the
`<gufe-view>`, the bootstrap) becomes a piece both the standalone page and the
widget shell build from, so the two cannot drift. `to_html`'s signature and
output do not change.

*Exit:* a JupyterLab cell and a marimo cell both draw a molecule; the notebook
saved from the first, then `nbconvert`ed with no kernel running, still draws it.

#### PR 5.2 — the live layer

An `anywidget.AnyWidget` subclass with one meaningful trait, `payload`. Its
`_esm` creates the iframe, writes the shell document into it, creates one
`<gufe-view>`, and sets `.payload` from the model — then `model.on("change:payload")`
sets it again. That second setter *is* the update beat of R16's lifecycle; the
element already tears the old view down.

A `srcdoc` iframe is same-origin, so the widget reaches the element through
`iframe.contentDocument` directly. No `postMessage` protocol, no handshake, and
nothing to keep in sync with the frame's side — the reason the old framejs path
needed one was that its frame was on a public origin, and this one is not.

`view()` gains the widget view in its mimebundle when `anywidget` imports, and
is unchanged when it does not.

**To measure, not to assume:** whether anywidget re-sends `_esm` per widget
instance or once per session. It decides whether ten views in one notebook cost
one bundle over the comm or ten, and it is a property of the anywidget version
we depend on rather than something to reason about from here. Measure it, write
the number in the PR, and set the floor in `pyproject.toml` accordingly.

*Exit:* `w = gufe_viz.view(obj)`, then `w.payload = gufe_viz.payload_for(other)`
redraws in place, in both JupyterLab and marimo.

#### PR 5.3 — the frontend matrix and the examples

One example notebook per frontend (`examples/notebooks/`), and a written matrix:
JupyterLab and marimo × {live kernel, saved file, exported HTML} × {anywidget
installed, not installed}. The one thing in that grid that cannot be reasoned
out and must be run is **which mimetype each frontend picks when handed both**
`application/vnd.jupyter.widget-view+json` and `text/html`. If a frontend
prefers the static page while a kernel is live, the live layer is dead there and
`view()` needs a way to say so.

*Entry:* Phase 3 shipped. Phase 4 is **not** a prerequisite — the notebook path
draws whatever types exist at the time.
*Exit:* the matrix is filled in, both example notebooks run, README documents
`view()` alongside `to_html`.

### Phase 6 — Optional localhost server

Only if payload size becomes a real problem. David pre-cleared the shape ("looks
more like a Flask app… that's a very small surface, and there's no real running it
externally"), and `server.py` on the gufe branch is a working reference. Note the
Chrome Local-Network-Access wall that forced `--proxy` there **does not apply** to
a same-origin static page, so a server here would be simpler than that one.

### Phase 7 — Transfer to OpenFE

Move the repo from `omsf-eco-infra` to the OpenFE org (R4), adopt OpenFE's release
conventions, publish to PyPI/conda-forge, and add the optional-dependency edge from
`openfe`.

---

## 6. Testing strategy

**The rule, added after the PR #1 review:** a test asserts a property of the
artifact that a user could observe breaking. A test whose failure would only mean
"we changed our minds about an implementation detail" is deleted. Schema-first
raises the stakes here — David named the shift of correctness from construction
to testing as the explicit cost of dropping Pydantic — but more tests is not the
same as better tests, and PR #1 shipped several that only restated instructions.

| Layer | Tool | What it proves |
|---|---|---|
| Builders | pytest + `jsonschema` | Every builder's output validates against the committed schema, for every type × ≥2 variants (R10). |
| Schema strictness | pytest + `jsonschema` | The schema *rejects* what we claim it rejects: a component with both `sdf` and `pdb`, a solvent with an `sdf`, each type carrying another type's distinguishing field. **David's explicit ask**, and the property the Pydantic schema silently failed to express. |
| JSON Schema, TS side | vitest + Ajv | The same fixture files validate identically in TypeScript. |
| Mutation | pytest **and** vitest | Every table row in §Phase 2 PR 2.4 is rejected by both sides, from one `schema/mutations.json`. |
| Referential integrity | pytest | Ligand-network edges reference node ids that exist — JSON Schema cannot express this, so it is tested rather than left as an undocumented claim. |
| Dispatch parity | pytest | Every `type` const in the schema is either in the TS dispatch table or deliberately unimplemented. |
| Rendering | vitest + jsdom / Playwright | Each element mounts, updates on a second `payload`, and cleans up (no leaked observers/timers) — the create/update/destroy cycle (R16). |
| Generated-artifact freshness | CI shell | `ts/src/schema/types.ts` and `_assets/gufe-viz.js` match a fresh build. The schema is hand-written and has nothing to check. |
| Bundled output | pytest | `to_html(obj, engines="bundled")` contains zero `http(s)://` references. Replaces the CDN-allowlist test, which asserted an allowlist of URL substrings against a mode where CDNs are expected. |
| Source hygiene | CI shell | No plan references or non-ASCII in committed source (§7). |

`examples/*.json` is the hinge: the same files feed pytest, vitest, the dropzone
and the gallery. If they drift, everything fails at once, which is the point.
`check-generated` does not currently cover `examples/`, which is how two fixture
non-determinism bugs reached `main` — worth extending.

---

## 7. Working agreement

- **Small PRs, pushed often** (R12). One concern per PR; generated artifacts
  flagged in the description so Alyssa's hand review can skip them. PR #1 was
  60-plus files and drew a structural rethink; that is the failure mode R12
  exists to prevent, and it was self-inflicted.
- **This document is private, and the code never cites it.** No `R14`, no
  `PLAN Q4`, no `Phase 5` in committed source, comments, docstrings or schema
  `description` strings. Both reviewers flagged it — David: "Docstrings are
  littered with references to a plan… The plan is not committed. This makes the
  docstrings hard to read"; Alyssa: "I see references to `R*` - are these
  artifacts of you using claude?" Where a comment exists only to cite a
  requirement, delete it. Where it explains a real constraint, state the
  constraint, because the constraint is the durable half and the number is not.
- **Committed Python and schema text is ASCII.** Em-dashes and arrows become
  escape sequences once a docstring is turned into a JSON Schema `description`,
  which is where David actually reads them.
- Both of the above are enforced by a grep step in `pixi run lint`, because
  neither survives on good intentions.
- **Serialization questions go to the three-person chat**, immediately, rather
  than being solved locally. Both Alyssa ("definitely ping, just put it in the
  chat with the three of us") and David ("if you're looking at serialization
  stuff, ask") were emphatic. There is a lot of gufe history behind `to_dict` vs
  `to_json` vs keyed chains, and `QuickRun` still using `to_dict` is a live issue.
- **Don't rabbit-hole.** Alyssa: "don't go down a rabbit hole. It's not a good use
  of your time."
- Checkpoint PRs at each phase exit so Alyssa can stress-test before the next
  phase builds on it: "I want your iteration loops to stay small… I don't want to
  waste your time."

---

## 8. Open questions

| # | Question | For | Blocking |
|---|---|---|---|
| Q1 | Python distribution name — `gufe-viz`? `openfe-viz`? The meeting raised it and moved on. | Alyssa | Before first publish, not before first code | Answer: gufe-viz, the repo is now named gufe-viz
| Q2 | Where should `to_html`'s output land by default — next to the input file, a temp dir, stdout? Dion asked; the answer was "create the string and ask Alyssa." | Alyssa | Phase 3 exit | Answer: <filename.suffix>.html in the same directory
| Q3 | Does this repo adopt OpenFE's `news/` + `rever` release conventions now, or at transfer? | David | Phase 0 | Answer: yes, now
| Q4 | For a saved gufe `.json`, which loader does Python use — `to_dict`, `to_json`, or the keyed-chain form — and which round-trips reliably today given `QuickRun` still writes `to_dict`? | David + Alyssa | Phase 2 | **Open.** Affects only the CLI's gufe-object input path. |
| Q5 | Should `extra` carry the full gufe JSON in V1? | David | — | **Closed by deletion.** `extra` is gone (§3.2); additive schema changes cover the same need. |
| Q6 | Does gufe get the `.view()` mixin (a gufe PR) or does the widget stay a `gufe_viz.view(obj)` free function? | Alyssa | Phase 5 | **Closed: the free function**, `gufe_viz.view(obj)` (Dion, 2026-08-12). Nothing to coordinate with the gufe repo while PR #1 is in review, and the mixin stays additive if it is wanted later. |
| Q7 | Is the existing framejs `MetaframeWidget` notebook path kept in parallel through the transition? | Alyssa, Dion | Phase 5 | **Closed: no** (Dion, 2026-08-12). The notebook renders the same bundle and the same `<gufe-view>` as the CLI's page, through anywidget. No framejs, no second delivery mechanism. |
| Q9 | Is `gufe` declared in `pyproject.toml`, given David's "we probably don't want people getting the currently pip-installable gufe"? | David, Alyssa | Phase 0 | **Closed: yes, with a floor** - reversing the earlier "no". David's rule is that pip-installable dependencies belong in `pyproject.toml`; `gufe>=1.12` satisfies that *and* his hazard, because the floor is unsatisfiable on PyPI, so pip refuses rather than installing 0.4. It stays in `pixi.toml` too, which is what routes it to conda-forge. See §2. |
| Q10 | How does the payload carry a schema version? | David | Phase 2 | **Closed: it does not** — no V1 consumer can have a reader and a writer at different versions, and the field was the only thing forcing a root envelope (§2, §3.2). **Reopened as Q14:** David's own sketch names the absence of versioning as a gap, and he has not seen the reasoning that closed this. |
| Q11 | Do ligand-network edges reference node ids, or inline full mappings? | David | Phase 4 | **Closed: gufe keys, resolved against a registry** (revised 2026-08-17). Not a size tradeoff on measurement — a payload whose edges inline their molecules is not a graph, since the view would have to rebuild the node set by deduplicating SDF strings. The naming half of the comment is also closed: `LigandNetworkEdgeViz` is gone, an edge *is* a `LigandAtomMappingViz`, and the ligands live once in the network's `registry`. |
| Q12 | Keep the `gufe-viz` console script, or run the dev tool as `python -m gufe_viz`? | Alyssa | Phase 3 | **Open.** David did not review `cli.py` because its docstring implies it is not long-lived; `python -m` would stop it looking like a shipped product surface. |
| Q13 | Should `to_html` default to `engines="cdn"` or `engines="bundled"`? | Alyssa | Phase 3 | **Open.** David's guidance is per use case; the widget is bundled either way. |
| Q14 | **Does "no version field" satisfy you, or do you want one back?** Q10 closed as "the payload carries no version", on the reasoning that every V1 consumer inlines the exact bundle that reads it. But your `ChemicalSystem` sketch flags itself as deficient for exactly this — "it doesn't account for versions". Your `$id` carries `/1.0/` in the path, which may already be the whole answer. Implemented as: version in `$id`, nothing in the payload. | David | **Blocking a release, not the code.** Adding an optional `schema_version` back is additive and non-breaking, so this can be answered after the schema lands |
| Q15 | **One schema file or one per type?** Your `$id` is `.../chemical-system-viz/1.0/chemical-system.schema.json` — per-type filename, version in the path. §2 commits to one file with grouped `$defs`, on the grounds that a single file is one thing to read and one thing for Ajv to compile. Implemented as one file, but using your host and your versioned-path convention: `https://openfree.energy/schemas/gufe-viz/1.0/gufe-viz.schema.json`. | David | Cheap now, annoying later — `$id` is what a published schema is referenced by |
| Q16 | **`UnknownComponent` or `UnknownComponentViz`?** Your sketch drops the `Viz` suffix on that one type and keeps it everywhere else. Implemented with the suffix, for consistency with the rule that every `type` const names a lossy projection rather than a gufe class — but if the asymmetry was deliberate, say so. | David | Trivial, but it is in the schema |
| Q17 | **Does `view()` embed the static page by default, or only when anywidget is absent?** Embedding always is what makes a mailed or `nbconvert`ed notebook draw with no kernel, and it costs the bundle (239 kB today) per displayed object in the `.ipynb`. Embedding only as a fallback keeps notebooks small and makes the export silently blank for anyone with anywidget installed. Implemented as **always, with `view(obj, static=False)` to opt out**, on the grounds that the surprising failure is the blank export, not the file size. | Alyssa | Phase 5 | **Open.** Answering it is changing a default, not rewriting anything. |

---

## 9. Risks

| Risk | Mitigation |
|---|---|
| **gufe serialization is the genuinely hard part** — Dion flagged it ("the hardest part is probably going to be dealing with the serialization"), David confirmed the history is deep. | §3.1's rule confines it to Python. Ask in the chat rather than reverse-engineering (Q4). |
| **Generated-artifact drift** (TS types and bundle committed). | One CI job (`check-generated`) that rebuilds both and diffs. Non-negotiable, lands in Phase 0. The schema left this list when it stopped being generated. |
| **REALIZED — planning vocabulary leaked into the artifact.** `R14`, `PLAN Q4`, `Phase 5` and em-dashes reached committed docstrings, code comments and JSON Schema `description` strings, citing a document no reviewer has. Both reviewers flagged it; Alyssa read it as an LLM artifact, which it was. | §7's rule plus a grep step in `pixi run lint`. Cost this time: a hygiene-only PR ahead of the real work, so the substantive diff is reviewable. |
| **REALIZED — a requirement encoded in Python and absent from the schema.** `ComponentDescriptor` enforced "exactly one of sdf/pdb/solvent" in the builder while the emitted schema permitted all three at once. | Precisely the failure mode schema-first prevents (R7). Per-type `$defs` plus the strictness tests in §6. |
| **A committed 100 kB+ JS bundle makes PRs noisy** — bad, given Alyssa hand-reviews. | `.gitattributes linguist-generated`, and every PR description states whether the bundle changed and why. Revisit build-at-package-time if it becomes painful. |
| **Scope creep back toward the gufe branch's full feature set.** | R11/N1–N7 are written down above with attribution. Phases 4+ are gated on Alyssa's review of the phase before. |
| **The atom-mapping viewer is the most intricate code being ported** (~300 lines plus Kabsch alignment). | It is the *first* thing in Phase 4, not the last, and the gallery page (R15) exists specifically so its three embedding contexts are checked together. |
| **RDKit wasm makes self-contained pages ~10 MB.** | Pre-accepted by Alyssa. Keep it opt-in; keep engines lazily loaded so a protein-only page never pays for RDKit. |
| **Dion's availability** — "there's no guarantee I'll be working here after September." | The whole shape of this plan — TypeScript, explicit schema, separate files, tests, this document — is the mitigation. Alyssa's stated goal is maintainability by future-Alyssa. |

---

## Appendix A — payload types

Carried forward from the gufe branch's dispatch table, restated with the explicit
`type` discriminator that replaces key-sniffing. The `Viz` suffix marks these as
lossy visualization projections rather than gufe classes.

| gufe class | `type` | Phase | View |
|---|---|---|---|
| `SmallMoleculeComponent` | `SmallMoleculeComponentViz` | 1 | 2D depiction + 3D conformer + SMILES/charge |
| `ProteinComponent` | `ProteinComponentViz` | 1 | 3Dmol, representation + colour-scheme switchers |
| `SolvatedPDBComponent` | `SolvatedPDBComponentViz` | 4 | as protein, explicit solvent |
| `ProteinMembraneComponent` | `ProteinMembraneComponentViz` | 4 | as protein |
| `LigandAtomMapping` | `LigandAtomMappingViz` | 4 | mapping viewer (plain/coloured/lines/overlay/2D) |
| `LigandNetwork` | `LigandNetworkViz` | 4 | radial network; click an edge → embedded mapping viewer |
| `Transformation`, `NonTransformation` | `TransformationViz` | 4 | state A↔B component diff + embedded mapping viewer |
| `ChemicalSystem` | `ChemicalSystemViz` | 4 | master/detail over labelled components |
| `SolventComponent` | `SolventComponentViz` | 4 | settings card |
| `Protocol` | `ProtocolViz` | 4 | named only; a registry entry every transformation shares |
| `AlchemicalNetwork` | `AlchemicalNetworkViz` | 5 | d3 force graph of systems/transformations |
| any unrecognized `Component` subclass | `UnknownComponentViz` | 1 | "no visualization for X" (R19) |

Dispatch is `isinstance`, most-derived first, replacing the MRO-walking
name-keyed registry (R3, as clarified).

**The PDB types are a chain, not a pair of siblings** — this document had it
wrong until gufe 1.12 was actually installed and the hierarchy read off the
classes:

```
ProteinMembraneComponent -> SolvatedPDBComponent -> ProteinComponent
```

so all three must be tested in that order. `SolventComponent` cannot be shadowed
by them: it descends from `BaseSolventComponent` alongside the solvated types
rather than from `ProteinComponent`. `Transformation` and `NonTransformation` are
siblings and share a builder through `TransformationBase`. Every one of these
orderings is covered by a test that derives the constraint from gufe itself, so
a future release inserting a new subclass fails the suite instead of quietly
serializing as its parent — which matters because all three PDB types have
identical payload shapes and differ only in the discriminator, making a
mis-ordered table produce schema-valid, renderable, wrong output.

## Appendix B — decision log from the meeting

Things that were argued and settled, recorded so they are not re-litigated:

- **TypeScript over JavaScript.** Dion argued the code is mostly boilerplate around
  external libraries and JS would be fine; Alyssa and David chose TypeScript for
  future maintainability. Settled: TypeScript.
- **Separate files over one file.** Dion noted one file is operationally simpler;
  Alyssa wanted separate files ("as someone who's used to Python"). Resolved by
  TypeScript + a bundler: separate sources, one artifact. Dion: "having one file
  makes it easier operationally, but if it's going to be in TypeScript, then it
  makes it easier to have separate ones."
- **Schema in the viz repo, not gufe.** Briefly discussed putting a JSON Schema for
  `to_json` into gufe (David: "if the schema is based on gufe's to_json, then it
  should live in gufe"), then rejected for this purpose because the viz payload
  needs SDF/PDB strings gufe's JSON doesn't carry. Settled: this repo defines its
  own schema.
- **Server deferred, not forbidden.** Alyssa's vision is serverless HTML; David
  confirmed a small local Flask-shaped app is usually firewall-acceptable. Settled:
  not in V1.
- **framejs.io stays in the office-hours talk** as a demo of rapid visualization,
  explicitly labelled as not the OpenFE production path. Alyssa: "it's a demo of
  what you can do. One of our partners could still do that, and I don't want them
  to not do that."
- **Community modifiability traded away** for rigour, knowingly, by the owner.
