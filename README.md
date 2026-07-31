# gufe-viz

Visualization tools for [gufe](https://github.com/OpenFreeEnergy/gufe).

Turns a gufe object into an interactive browser visualization — a single HTML
file you open locally. No server, no account, no framejs.io.

> **Under construction.** V1 (`PLAN.md` phases 0–3) is complete and the
> infrastructure is in place, but only three of the eight object types have
> views so far. See [Status](#status).

---

## Quick start — from nothing to a picture

### 1. Install pixi

**[pixi](https://pixi.sh) and git. That is the whole list.** pixi provides
everything else — Python 3.11+, Node 20+, gufe, RDKit, pydantic, pytest,
jsonschema and ruff all come from `pixi.toml`, pinned in `pixi.lock`. You do not
need a system Python, a system Node, or a conda install of your own.

```bash
curl -fsSL https://pixi.sh/install.sh | bash    # macOS / Linux
brew install pixi                               # or Homebrew
```

The installer appends `~/.pixi/bin` to your shell profile. If you install with
`PIXI_NO_PATH_UPDATE=1` instead, nothing on `PATH` changes and every command
below needs the full `~/.pixi/bin/pixi` in place of `pixi`.

### 2. Get the environment

```bash
git clone https://github.com/omsf-eco-infra/viz.git
cd viz
pixi install
```

That solves and downloads a conda environment containing RDKit and gufe — a few
hundred megabytes, and a couple of minutes the first time, cached afterwards.
You do **not** need to run `npm install`: every task that needs Node depends on
an `npm-install` task that runs it for you and is skipped on a cache hit.

git matters for more than cloning — the version comes from `setuptools-scm`, so
a tarball with no `.git` in it builds as `0.0.0`.

### 3. Look at the visualizations

Three ways, in increasing order of "this is what a user will actually do".

**The gallery** — every example payload on one scrolling page. Start here.

```bash
pixi run dev
# http://localhost:5173/gallery.html
```

The gallery deliberately shows "sorry, there is no visualization for X yet" for
the four kinds whose views arrive in Phase 4. That panel is the intended
behaviour, not a broken card. (Vite picks the next free port if 5173 is taken —
watch the output.)

**Drag and drop** — the same dev server, one payload at a time. Drop any file
from `examples/` anywhere on the page:

```bash
pixi run dev
# http://localhost:5173/
```

**A standalone HTML file** — what ships. One file, opened from disk, no server:

```bash
pixi run gufe-viz examples/ligand_network_named.json -o /tmp/network.html
open /tmp/network.html          # macOS;  xdg-open on Linux
```

With no `-o`, the page lands beside the input as `<input>.html` — so
`ligand.json` becomes `ligand.json.html`, keeping the original suffix so two
inputs that differ only by extension cannot collide. `-o -` writes to stdout.

The input may be one of our payload JSONs *or* a serialized gufe object; a gufe
object is deserialized into live Python objects first and turned into a payload
from there.

### 4. Do it with your own object

```python
import gufe_viz

html = gufe_viz.to_html(small_molecule_component)   # returns a string
open("mol.html", "w").write(html)                   # writing it is your call
```

`to_html` accepts a gufe object, a payload model, or a plain payload dict. It
returns a string and writes nothing, anywhere — where the page goes is the
caller's decision.

### What a *user* of the library needs

None of the above. Installing the package is plain pip, with no Node anywhere:

```bash
pip install .          # not on PyPI yet — see Status
```

The compiled JavaScript bundle is committed to this repository and ships inside
the wheel, which is what makes that true. gufe itself is an *optional*
dependency (`pip install '.[gufe]'`) — the schema, the validator and
`to_html(payload_dict)` all work without it.

---

## How the data flows

Python serializes a gufe object into a **schema-valid payload**; compiled
TypeScript custom elements ingest that payload and draw a picture. The JSON
Schema is the contract between the two, and it lives here — not in gufe.

```mermaid
flowchart LR
  subgraph PY["Python · python/gufe_viz"]
    direction TB
    obj["<b>gufe object</b><br/>SmallMoleculeComponent<br/>ProteinComponent<br/>LigandNetwork ..."]
    build["<b>payload_for()</b><br/>asks the object to serialize<br/><i>itself</i>: to_sdf(), to_pdb_file()"]
    model["<b>Pydantic model</b><br/>validated on construction"]
    obj --> build --> model
  end

  model --> payload[["<b>payload JSON</b><br/>schema_version · kind<br/>data · extra"]]
  payload --> tohtml["<b>to_html()</b><br/>one self-contained page:<br/>bundle + payload + &lt;gufe-view&gt;"]

  subgraph BR["Browser · ts/src"]
    direction TB
    gview["<b>&lt;gufe-view&gt;</b><br/>validate, then dispatch on <code>kind</code>"]
    view["<b>&lt;gufe-small-molecule&gt;</b><br/><b>&lt;gufe-protein&gt;</b><br/><b>&lt;gufe-ligand-network&gt;</b>"]
    gview --> view
  end

  tohtml --> gview
  view --> pic(["RDKit · 3Dmol · d3<br/>draw it"])
```

Two rules hold that picture together.

**gufe's own `to_json` never crosses into TypeScript.** TypeScript only ever
sees SDF, PDB and flat, schema-valid JSON — not even GraphML, whose nodes *are*
gufe JSON. Deduplicated key-chains, `:custom:` codecs and the `to_dict`/`to_json`
divergence all stay Python problems, because the alternative is a large amount
of TypeScript that has to track gufe's serialization forever.

**This package depends on gufe; gufe does not depend on this package.**

### The generated HTML file: what is in it, and how it loads

`to_html(obj)` returns a complete page as a **string** and writes nothing
anywhere — the CLI is one caller that chooses to write it, not the only possible
one. The page has four parts and no others:

```html
<gufe-view></gufe-view>                                <!-- 1. where it draws -->

<script id="gufe-payload" type="application/json">     <!-- 2. the data -->
{"schema_version":"1.0","kind":"SmallMoleculeComponent","name":"benzene", … }
</script>

<script type="module">
  … 244 kB of compiled bundle …                        <!-- 3. the code -->

  document.querySelector("gufe-view").payload =        <!-- 4. the bootstrap -->
    JSON.parse(document.getElementById("gufe-payload").textContent);
</script>
```

**Where the input data lives:** inside the file, in `#gufe-payload`, as *inert
text*. `type="application/json"` is not a script type the browser executes — the
element is a container the DOM hands back as a string. Nothing fetches it,
nothing sits beside it on disk, and moving or emailing the `.html` moves the
data with it.

**How it is loaded:** by that last statement, run once at parse time.
`textContent` gets the raw JSON, `JSON.parse` turns it into an object, and
assigning it to `.payload` starts the render. That is the entire handshake — the
same custom-element API an external page or a notebook widget would use, and it
depends on no name the bundler chose. If anything throws, the message lands in a
visible `#gufe-error` strip at the top of the page rather than in a console
nobody has open.

**Why a JSON block rather than a JavaScript literal:** because the data is then
never parsed as code. The only byte sequence that could break out of the block
is `</script`, so every `</` in the payload is rewritten to `<\/` on the way in —
a legal JSON string escape, which means `JSON.parse` hands back exactly the
original characters. The bundle gets the same treatment on `</script` alone,
which in minified JavaScript only ever occurs inside a string or regex literal
where `<\/script` means the same thing. A molecule named
`</script><script>alert(1)</script>` is a test case here, not a hypothetical.

**Where the code comes from:** `python/gufe_viz/_assets/gufe-viz.js`, the
committed Vite build, read by `gufe_viz.bundle_source()` and inlined verbatim.
That file being in the repository and in the wheel is what lets `pip install`
work with no Node toolchain.

Typical sizes, dominated by the 244 kB bundle:

| Page | Payload | Whole file |
|---|---|---|
| benzene | 1.3 kB | 246 kB |
| a three-ligand network | 2.0 kB | 247 kB |
| a 40-residue protein fragment | 55 kB | 299 kB |
| whole 181L lysozyme | 217 kB | 462 kB |

**What is *not* in the file yet:** RDKit, 3Dmol and d3. A view fetches the one it
needs from a CDN on first use, so a page with no small molecule in it never
downloads RDKit's ~7 MB of WebAssembly. Phase 5 adds `self_contained=True`,
which inlines them through the same `globalThis.__gufeEngines` pre-seed hook the
tests use, and closes R1 completely.

### What the browser does when a payload arrives

Setting `.payload` on a `<gufe-view>` is the whole API. Every failure below is a
panel that names the problem — never a thrown exception, and never a blank box.

```mermaid
flowchart TD
  arrive(["view.payload = ..."]) --> isobj{"a JSON object?"}
  isobj -->|no| p1["panel: this does not look<br/>like a gufe-viz payload"]
  isobj -->|yes| ver{"schema_version major<br/>is one we know?"}
  ver -->|no| p2["panel: this needs a<br/>newer gufe-viz"]
  ver -->|yes| haskind{"has a <code>kind</code>?"}
  haskind -->|no| p3["panel: nothing says<br/>what this is"]
  haskind -->|yes| hasview{"a view claims<br/>that kind?"}
  hasview -->|no| p4["panel: no visualization<br/>for X yet"]
  hasview -->|yes| valid{"valid against<br/>the JSON Schema?"}
  valid -->|no| p5["panel: names the failing<br/>field and its JSON pointer"]
  valid -->|yes| mount["mount &lt;gufe-*&gt;, set its payload"]
  mount --> draw(["a picture"])
```

The order matters. A `kind` nobody ever declared is answered as "no
visualization for X" rather than as "does not match the schema" — the second is
true but useless. And validation runs against the *single* schema branch the
payload's `kind` names, not the eight-way union, because the union only ever
reports "is not valid under any of the given schemas" at the root, while the
branch reports `/data/total_charge: must be number`.

Engines are loaded lazily and only when a view needs them: a protein page never
pays for RDKit's ~7 MB of WebAssembly, and a small-molecule page never pays for
d3. Today they come from their CDNs on first use; Phase 5 inlines them so a page
touches the network zero times (R1 — pharma firewalls).

---

## The contract: schema, sources and generated artifacts

### One source of truth, two languages

`python/gufe_viz/schema.py` — Pydantic models — is the only file anyone edits.
Everything else in the chain is generated from it, and CI fails if any of it is
stale.

```mermaid
flowchart TD
  src["<b>python/gufe_viz/schema.py</b><br/>Pydantic models<br/><i>the only hand-edited file in this chain</i>"]

  src -->|"pixi run schema"| jsonschema["<b>schema/gufe-viz.schema.json</b><br/><i>generated · committed</i>"]
  jsonschema -->|"pixi run types"| types["<b>ts/src/schema/types.ts</b><br/><i>generated · committed</i>"]
  jsonschema -.->|"loaded at runtime"| ajv["Ajv, in the browser"]

  types --> views["ts/src/** - the views"]
  ajv --> views
  views -->|"pixi run build"| bundle["<b>python/gufe_viz/_assets/gufe-viz.js</b><br/><i>generated · committed</i>"]
  bundle --> wheel(["the wheel: <code>pip install</code><br/>needs no Node toolchain"])

  src --> pyd["Pydantic validation,<br/>Python side"]
  jsonschema --> fixtures["examples/*.json + schema/mutations.json<br/>checked by <i>both</i> test suites"]
```

Three artifacts are **generated and committed**: the JSON Schema, the TypeScript
types, and the JavaScript bundle. Committing them is what lets `pip install`
work with no Node toolchain. `pixi run check-generated` rebuilds all three and
fails on any difference, so they cannot drift:

```bash
pixi run schema && pixi run types && pixi run build   # the fix, always
```

### The envelope

Every payload has the same four-part shape, whatever it describes:

```json
{
  "schema_version": "1.0",
  "kind": "SmallMoleculeComponent",
  "name": "benzene",
  "data": { "sdf": "…", "smiles": "c1ccccc1", "total_charge": 0 },
  "extra": {}
}
```

- **`kind` is a closed discriminator.** A chemical-system view handed something
  else refuses it by name rather than guessing from which keys happen to be
  present. All eight kinds are declared even though three have views; declaring
  them up front costs nothing and means adding a view is a minor version bump.
- **`schema_version`'s major is the compatibility promise.** A reader that does
  not know the major refuses the payload instead of rendering it wrongly. Minors
  are additive — a new kind, a new optional field — and old payloads keep
  validating.
- **`data` is per-kind and closed.** `additionalProperties: false` everywhere,
  so a typo in a payload builder is a validation error rather than a blank
  picture.
- **`extra` is the one open slot.** It exists so richer gufe data — the full
  gufe JSON, per-atom annotations, formal charge on hover — can be added later
  without a schema break. V1 leaves it empty, and a test asserts that, so
  filling it is a deliberate act.

### What may cross the boundary

SDF, PDB, and flat plain JSON. That is the whole list.

GraphML used to be on it and is not any more. `LigandNetwork.to_graphml()` is a
graph whose *node payloads are gufe `to_json` moldicts*, so forwarding it does
not avoid the problem — it hides it, and the browser still ends up decoding
atomic numbers, bond tuples and a base-1-per-char `.npy` conformer blob. (The
gufe framejs prototype did exactly that, Jacobi eigensolver and all.) A
`LigandNetwork` payload is ligands-as-SDF plus flat topology instead. See
[`schema/README.md`](./schema/README.md) and **Q8** in
[`PLAN-STATUS.md`](./PLAN-STATUS.md).

### How the two sides are kept honest

`examples/*.json` is the hinge. The same nine golden payloads — built from real
gufe objects by `scripts/make_examples.py` — feed pytest, vitest, the
drag-and-drop page and the gallery. `schema/mutations.json` declares a mutation
matrix **once, as data**, and both suites apply it: sixteen specific ways to
alter a payload, each pinned to what must happen. Twelve must be rejected by
both validators, for the same reason, at the same JSON pointer — a rejection for
the wrong reason does not count as a pass. The other four must still be
*accepted*, and those matter just as much: a bumped minor version, an unknown
key under `extra`, garbage chemistry inside a valid envelope, and a network edge
naming a ligand that is not there. Schema validity is not chemical validity, and
the views are what handle the difference.

If Pydantic and Ajv ever disagree about what a valid payload is, one of the two
suites goes red.

---

## Developing and integrating

### Adding a view

The loop is short, and every step has a task:

1. **Model the data** in `python/gufe_viz/schema.py` — a `*Data` model and its
   `*Payload` wrapper. The kind is probably already declared.
2. **Build the payload** in `python/gufe_viz/payloads.py` and register the
   builder under the gufe class name. Ask the gufe object to serialize itself;
   never reach into its JSON.
3. `pixi run schema && pixi run types` — the JSON Schema and the TypeScript
   types follow automatically.
4. **Write the view**: `ts/src/views/<kind>.ts`, a class extending
   `GufeElement<YourPayload>` with one `renderView(host, payload)` method.
   Return `{ onResize, cleanup }` if it owns anything that must be released.
5. **Register it**: add the tag to `VIEW_TAGS` in `ts/src/gufe-view.ts` and an
   `import` in `ts/src/index.ts`.
6. `pixi run examples` for a fixture, then `pixi run build`, then
   `pixi run test`.

A parity test asserts that every kind in `VIEW_TAGS` is a kind the schema
declares. The reverse is deliberately not required — a declared kind with no
view is the "no visualization for X yet" panel, which is correct behaviour.

### The component model

Every view is a custom element with the same three-beat lifecycle, which is what
makes components reusable inside one another (R14) and what will make the
notebook widget straightforward (R16):

| Beat | Hook |
|---|---|
| create | `connectedCallback` — build the DOM, start engines |
| update | the `payload` setter — tear the old view down, build the new one |
| destroy | `disconnectedCallback` — kill viewers, observers and timers |

Embedding one view inside another is therefore
`host.appendChild(document.createElement("gufe-…"))`, and the embedded element
cleans itself up when its parent removes it. `<gufe-view>` itself is just a
dispatcher that does exactly this.

### Embedding the bundle in your own page

The bundle is one ES module. Importing it registers every element as a side
effect; there is no init call:

```html
<script type="module" src="gufe-viz.js"></script>
<gufe-view id="v" style="width:100%;height:600px"></gufe-view>
<script type="module">
  document.getElementById("v").payload = await (await fetch("payload.json")).json();
</script>
```

That handshake — put the element on the page, set `.payload` — is the entire
API. It is the same one
[the generated HTML file](#the-generated-html-file-what-is-in-it-and-how-it-loads)
uses, and the same one a notebook widget will use; only where the payload comes
from differs.

From Python, `gufe_viz.bundle_source()` returns the bundle as a string if you
want to inline it yourself rather than use `to_html`.

### Integrating with OpenFE

`gufe-viz <input>` exists as a working reference implementation, **not** as the
CLI integration — that is `openfe view`'s job when someone wires it up. The
library writes nothing to disk on its own; `to_html` returns a string and the
caller decides where it goes.

Which of gufe's serialization forms round-trips reliably is still an open
question (**Q4**): `QuickRun` writes `to_dict` while other paths write
`to_json`, and the keyed-chain form is different again. Rather than guess, the
CLI tries the documented entry point and, on failure, says so and names the two
routes that always work — a payload JSON, or building the object in Python and
calling `to_html` directly.

---

## Testing

```bash
pixi run test          # both suites — this is the one to run
```

That is `test-py` and `test-ts` together. Run them separately when iterating:

| Command | Suite | Covers |
|---|---|---|
| `pixi run test-py` | pytest, 191 tests | Payload builders per kind; every fixture against the Pydantic models **and** against the generated JSON Schema separately; registry ↔ schema ↔ TypeScript dispatch parity; the mutation matrix; `to_html` and the CLI. |
| `pixi run test-ts` | vitest, 159 tests | The same fixtures and the same mutation matrix through Ajv; `<gufe-view>` dispatch and graceful degradation; the create/update/destroy lifecycle; what each view puts on the page; a smoke test that loads the **built bundle** and drives it through the generated page's bootstrap. |

Two more checks, both of which CI runs and both of which are easy to forget
locally:

```bash
pixi run lint              # ruff check + ruff format --check + tsc --noEmit
pixi run check-generated   # rebuilds schema, TS types and bundle; fails on any diff
```

All four at once, in CI's order:

```bash
pixi run ci
```

`check-generated` catches the most annoying class of mistake: change
`python/gufe_viz/schema.py` without regenerating, and everything passes locally
while CI goes red.

### Running a subset

```bash
pixi run pytest python/tests/test_mutations.py -q
pixi run pytest -k "mutation and protein" -v
pixi run npm run test -- validate           # vitest, by filename
pixi run npm run test:watch                 # vitest, watching
```

### No test reaches the network

RDKit, 3Dmol and d3 are faked through `globalThis.__gufeEngines` — the same
pre-seed hook the zero-network HTML export will use in Phase 5 — so the tests
exercise the real loader path rather than a mock of it. Seeding d3 as something
unusable is also how the ligand network's offline fallback is tested, without a
fetch that fails.

The suites stop at the engine boundary, though. They do not prove that RDKit
draws a molecule, that 3Dmol draws a protein, or that a force layout lands
somewhere sensible — for that, see
[Look at the visualizations](#3-look-at-the-visualizations).

---

## All tasks

| Task | What it does |
|---|---|
| `pixi run dev` | Vite dev server — dropzone and gallery |
| `pixi run build` | Bundle TypeScript into `python/gufe_viz/_assets/gufe-viz.js` |
| `pixi run schema` | Regenerate `schema/gufe-viz.schema.json` from the Pydantic models |
| `pixi run types` | Regenerate `ts/src/schema/types.ts` from the JSON Schema |
| `pixi run examples` | Rebuild `examples/*.json` from real gufe objects |
| `pixi run test` | Both test suites |
| `pixi run test-py` / `test-ts` | One suite each |
| `pixi run lint` | ruff + `tsc --noEmit` |
| `pixi run format` | Apply ruff's fixes and formatting |
| `pixi run check-generated` | Fail if any committed generated artifact is stale |
| `pixi run ci` | Lint, both suites and `check-generated`, as CI runs them |

Anything else in the environment is reachable with `pixi run <command>` —
`pixi run pytest …`, `pixi run python`, `pixi run gufe-viz …`.

`pixi.toml` is the only task runner. There is no Makefile, no justfile and no
shell wrapper: what you run locally and what CI runs are the same strings.

## Layout

```
schema/     the Python↔TypeScript contract (generated, checked in) + the mutation matrix
python/     gufe_viz — the Pydantic source of truth, payload builders, HTML writer, CLI
ts/         the custom elements, one file per view
examples/   golden payloads, shared by pytest, vitest, the dropzone and the gallery
scripts/    the generators, and the staleness check CI runs
```

## Status

V1 — phases 0–3 of [`PLAN.md`](./PLAN.md) — is complete.
[`PLAN-STATUS.md`](./PLAN-STATUS.md) tracks it PR by PR, including every
deviation from the plan and why.

**Working now:** the whole pipeline, end to end, for three object types.

| Kind | View |
|---|---|
| `SmallMoleculeComponent` | ✅ 2D depiction + 3D conformer |
| `ProteinComponent` | ✅ 3Dmol with representation and colour-scheme switchers |
| `LigandNetwork` | ✅ force / circular / radial graph, ligand depictions in the nodes, a detail pane per mapping |
| `SolventComponent`, `LigandAtomMapping`, `ChemicalSystem` | Phase 4 — declared in the schema, payload builders written, no view yet |
| `Transformation`, `AlchemicalNetwork` | Phase 4/5 |

**Not there yet:** the remaining five views (Phase 4); zero-network pages with
RDKit, 3Dmol and d3 inlined (Phase 5 — today's pages still fetch those three
from their CDNs on demand); the notebook widget (Phase 6); an optional localhost
server (Phase 7); PyPI/conda-forge and the transfer to the OpenFE org (Phase 8).

**Known gap:** nobody has yet confirmed with their own eyes that RDKit draws a
molecule, that 3Dmol draws a protein, or that the network graph lays out
sensibly in a real browser — the environment this was built in had no browser
access. Everything up to the engine call is tested, and the network view's SVG
is asserted node by node in jsdom, but neither is the same as looking at it.
[Look at the visualizations](#3-look-at-the-visualizations) closes it.

## Licence

MIT.
