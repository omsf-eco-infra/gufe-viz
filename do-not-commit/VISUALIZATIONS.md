# VISUALIZATIONS - action plan

Two constraints frame the whole document:

- **A visualization, not a GUI.** Python owns the data. The browser filters,
  labels, highlights and hands back *names and gufe keys*. Nothing reconstructs a
  gufe object on the JavaScript side, because the Python-to-JavaScript step is
  lossy and there is no round trip today.
- **Time.** Roughly five weeks of visualization work before handover at the end
  of September. The ordering in [Sequencing](#sequencing) reflects that, not the
  numbering of the workstreams.

---

## 1. Where the repo actually is

Twelve types are declared in `schema/gufe-viz.schema.json` and built by Python.
**Three of them draw.**

| Type | Element | State |
|---|---|---|
| `SmallMoleculeComponentViz` | `<gufe-small-molecule>` | 2D depiction plus 3D conformer |
| `ProteinComponentViz` | `<gufe-protein>` | 3Dmol, representation and colour switchers |
| `LigandNetworkViz` | `<gufe-ligand-network>` | force / circular / radial graph, detail pane |
| `LigandAtomMappingViz` | none | "no visualization for X yet" panel |
| `ChemicalSystemViz` | none | same |
| `TransformationViz` | none | same |
| `AlchemicalNetworkViz` | none | same |
| `SolventComponentViz` | none | same |
| `UnknownComponentViz` | none | same |
| `SolvatedPDBComponentViz` | none | same |
| `ProteinMembraneComponentViz` | none | same |
| `ProtocolViz` | none | same |

Six of the nine missing views exist as one commit (`b1b5ceb`) on the
`temp-viz-examples` branch, written against the pre-registry schema. Porting them
is W0, and almost every request in the meeting lands on a view that is either
unported or unbuilt. That is why W0 comes first: without it there is nowhere to
put the feedback.

Other facts the plan depends on:

- `ts/src/shared/theme.ts` is already the single colour table. It is one edit to
  change a colour, which is what was asked for. What it lacks is *meaning*: the
  mapping colours are named `colorUniqueA` / `colorUniqueB` (which molecule) not
  `elementChange` / `uniqueAtom` (what a user was taught they mean).
- The default light palette pairs `#d62828` red against `#2a9d4a` green for the
  two mapping sides. That is the single worst pair for the most common colour
  vision deficiency, and it was flagged in the meeting.
- The ligand network draws one SVG group per node with an RDKit depiction
  injected into it, and always draws every caption. Largest committed fixture is
  three ligands. The example brought to the meeting had 934.
- `to_html` already threads a `view_attributes` string onto `<gufe-view>`
  (`python/gufe_viz/html.py:191`). Nothing in this plan needs it yet, but it is
  the seam a host-derived default would ride on if the chrome toggle in W7 ever
  stops being purely local.

---

## 2. What the meetings settled

These are decisions, not options. Later workstreams assume them. Items 1 to 8 are
from the OpenFE session; item 9 was reached in both.

1. **The colours in this tool and the colours in the existing 2D visualizations
   must mean the same thing.** Users are taught "blue means an element change,
   red means a unique atom". Two ecosystems that disagree is worse than either
   choice of palette. Changing the palette is allowed; changing it in one place
   only is not.
2. **Parity first for the existing views.** Small molecule, protein and atom
   mapping default to reproducing the current visualizations exactly. Anything
   beyond that goes behind a control, not into the default.
3. **Ligand networks and alchemical networks are separate visualizations** that
   share behaviour. Different node types (ligands vs chemical systems), different
   edge types (atom mappings vs transformations). Shared layout and interaction
   code, two view files.
4. **The alchemical network is the simpler of the two.** Status, protocols,
   connectivity. Not a deep metadata sidebar.
5. **One visualization everywhere, with a chrome toggle.** Not a notebook build
   and a browser build. Every view carries the same hamburger, in the same place,
   revealing that view's own menus. It is local to the view and opens collapsed
   for now, so no host flag is threaded through the machinery yet. Ambition for
   the browser page is not limited by what fits in a cell, and nothing is
   unreachable from a notebook. See W7.
6. **Selection export is the line against becoming a GUI.** Select in the
   browser, copy out a list of names, paste it into a file, feed it to the CLI.
   Nothing writes gufe objects from JavaScript.
7. **Colour by node metadata is the general form of "colour by scaffold".** No
   scaffold perception in the browser. If an upstream script put an attribute on
   a node, offer to colour by it.
8. **Do not chase PyMOL.** A protein view exists to confirm you are looking at
   the protein you think you are. Low-value views are allowed to be simple.
9. **The CLI is the primary interface.** Both meetings reached this
   independently: OpenFE assumes the command line, and OpenFF said outright that
   most people would use a CLI and that a GUI is for the wider community. The
   browser page is the CLI's output, not a competing product.
10. **Atom colours are mirrored from upstream, never authored here.** Every atom
   colour comes verbatim from an existing scheme, in one block, with its source
   cited: gufe's mapping colours, matplotlib's colormap for the 3D ramp, 3Dmol's
   `Jmol` and RDKit's defaults for elements. Where upstream defines nothing, we
   do without rather than invent. Where upstream is wrong, we raise it upstream
   rather than diverge. This is what makes "the two must match" enforceable
   instead of aspirational.

---

## Two audiences

The second meeting is about a tool that is not this one, and the boundary is
worth stating before it blurs.

**What gufe-viz is:** a visualizer for gufe objects. The schema is gufe-shaped on
purpose. One type per `GufeTokenizable`, a registry of gufe keys, payloads built
by walking live gufe objects.

**What it is not, and will not become:** a general dashboard framework. yammbs
benchmarking output is not a gufe object and does not belong in this schema.
Generalizing to carry it would mean giving up the one-type-per-gufe-class rule
that two schema reviews have now converged on.

**What is genuinely reusable across both**, and worth keeping factored that way:
the custom-element component model, the lazy engine loaders, the self-contained
HTML writer, and the notebook widget. None of those know anything about gufe. If
OpenFF builds a benchmarking dashboard, that machinery is what it should borrow,
not the schema.

**What crosses over as a question rather than as code:** delivery. Payload size,
loading data by URL, working offline, and handing someone a link instead of a
file. Both meetings hit these from different directions, and they are W11.

---

## 3. Workstreams

### W0 - Land the six unbuilt views

Nothing else can be worked on where it belongs until these exist. Port
`b1b5ceb` from `temp-viz-examples` onto the registry schema and the atom-pair
list.

Damage is known and concentrated:

| File | References to shapes that no longer exist |
|---|---|
| `ts/src/views/atom-mapping.ts` | 11 (`molA_sdf`, `molB_sdf`, `nameA`, `nameB`, string-keyed `componentA_to_componentB`) |
| `ts/src/views/alchemical-network.ts` | 5 (`AlchemicalNetworkNodeViz` / `AlchemicalNetworkEdgeViz` are gone; nodes are `ChemicalSystemKey`, edges are `TransformationViz`) |
| `ts/src/views/transformation.ts` | 1 |
| `ts/src/views/chemical-system.ts` | 0 |
| `ts/src/views/solvent.ts` | 0 |
| `ts/src/views/unknown-component.ts` | 0 |

Actions:

- **W0.1** Port `atom-mapping.ts`. Endpoints come from
  `lookupOfType<SmallMoleculeComponentViz>(registry, payload.componentA, ...)`;
  the correspondence is the `{index_A, index_B}` pair list, so `mappedAtoms()`
  loses its decimal-string key parsing entirely.
- **W0.2** Port `alchemical-network.ts` to resolve `nodes` as chemical-system
  keys and treat each edge as a whole `TransformationViz`. Node labels come from
  the resolved system; component chips from the system's `components` map
  resolved through the registry.
- **W0.3** Port `transformation.ts` (one reference; the diff already works on
  `ChemicalSystemViz` label maps).
- **W0.4** Take `chemical-system.ts`, `solvent.ts`, `unknown-component.ts` as-is,
  plus the shared helpers the branch adds: `ts/src/shared/svg.ts`,
  `depictHighlightedSVG` in `shared/sdf.ts`, `typeBadge` in `shared/dom.ts`.
  Delete the local `svg()` / `titled()` copies in `ligand-network.ts` in favour
  of the shared module.
- **W0.5** Point `SolvatedPDBComponentViz` and `ProteinMembraneComponentViz` at
  `<gufe-protein>`, opened with waters / membrane shown, since hiding the one
  thing that distinguishes them makes the three types indistinguishable.
- **W0.6** Register all of it: `VIEW_TAGS` in `ts/src/gufe-view.ts`, imports and
  re-exports in `ts/src/index.ts`.
- **W0.7** Regenerate fixtures: `transformation.json`, `alchemical_network.json`,
  `unknown_component.json` from `scripts/make_examples.py`. Fixtures that embed a
  freshly generated conformer must go through `_quantize` or `check-generated`
  fails on one platform and passes on another.
- **W0.8** `ProtocolViz` still has no view. It is a class name and a key. Decide:
  a one-line card, or leave it as the panel. Recommendation: a card, because it
  is three lines and it makes the alchemical network's protocol control clickable.

**Done when** all twelve types draw, `pixi run test` passes both suites, and the
gallery has no "no visualization for X yet" panel in it.

---

### W1 - Colour: meaning, parity, and colour vision

The highest-stakes item in the meeting, and cheap to get wrong quietly.

- **W1.1 Name colours by meaning, and delete the ones we invented.** In
  `ts/src/shared/theme.ts`, `colorUniqueA` / `colorUniqueB` and their `rgb*`,
  `chip*`, `linesMol*` and `overlayMol*` companions encode which *molecule* an
  atom belongs to. Upstream makes no such distinction: gufe colours by meaning,
  element change against unique atom, and nothing else. Those entries are
  deleted rather than recoloured, and replaced by `mappingElementChange` and
  `mappingUniqueAtom` mirrored from gufe.
- **W1.2 The reference values, now read rather than assumed.** The 2D mapping
  drawing lives in **gufe**, not openfe:
  `gufe/visualization/mapping_visualization.py:20-21`. Element change is
  `#005AB5`; unique atom is `#DC3220`. Mirror both into
  `ts/src/shared/theme.ts` with that citation beside them. Note for the record
  that this pair is **already colourblind-safe**, so the meeting's concern does
  not apply to what gufe draws. It applies to what we invented: `#d62828` red
  against `#2a9d4a` green, which is neither safe nor upstream.
- **W1.3 Reproduce before improving.** Ship the mapping view with those exact
  values first. Screenshot the existing visualization and this one on the same
  mapping and put them side by side in the gallery. Only then propose changes.
- **W1.4 Colour vision pass, as a report.** Simulate protanopia, deuteranopia
  and tritanopia over both palettes in `THEMES` and over `hsv`. Record the
  results beside the palette. What we do with them differs by ownership:
  anything **we** invented that fails is replaced with the mirrored upstream
  colour; anything **upstream** that fails is raised upstream, not diverged
  from. Both known problems are upstream's: openfe's `hsv` ramp, which already
  cost real debugging time when two differing atoms read as the same colour, and
  openfe's `blue` / `red` network selection colours.
- **W1.5 No alternative palette of our own.** An earlier draft of this plan
  proposed a colourblind-safe third theme. That is now out of scope: it would
  make our colours disagree with gufe's, which is the exact failure the first
  decision in this document exists to prevent. If a safer palette is wanted it
  changes in gufe and we follow.
- **W1.6 The 3D mapping ramp is positional, not elemental.** The item most
  likely to be implemented wrong. Upstream is
  `cmap = plt.get_cmap("hsv", len(mapping))`, indexed by
  `enumerate(mapping.items())` and drawn as a sphere on **both** atoms of each
  pair (`openfe/utils/visualization_3D.py:88-105`). So the index is the
  **mapping pair's position**, which in practice runs in ascending A-atom order,
  and a shared colour is what says "these two are mapped to each other". It has
  nothing to do with the element. Two consequences:
  - hydrogens must not be picked out in their own colour, which is what an
    element scheme does and what was noticed as wrong in the prototype;
  - the ramp is a rainbow, which puts red next to purple, which is exactly the
    confusion that hid a transformation bug. Moving to a perceptually uniform
    colormap is worth proposing, but it changes what OpenFE draws, so it goes to
    the team rather than being decided here.

  Build `mappingRamp3D` by **generating** a named matplotlib colormap's stops and
  committing them with the command that produced them. Do not hand-author stops,
  and do not pick the colormap locally.
- **W1.7 Keep it one edit, and keep it mirrored.** Add a CI check that no file
  under `ts/src/views/` contains a hex colour literal, and that no atom colour is
  defined anywhere in `ts/src/` outside the mirrored block in `theme.ts`. The
  first rule already holds by convention and the meeting asked for it explicitly.
  The second is what stops an invented atom colour reappearing later.
- For the general menu color scheme, not the open science colors, use the openfe icon: https://openfree.energy/assets/images/OFE-teal-white-text-oneline.svg and the colors for openfe: https://openfree.energy/

**Done when** the palette keys say what the colours mean, the values are
documented against their upstream source, and a colour vision report exists in
the tree.

---

### W2 - The atom mapping view: overlay, and lines between mapped atoms

use as a base, since this is good: 
https://framejs.app/j/019f2b55e1f57722af0293acbda78362

The 2D half is what W0.1 ports. This is the half that was asked for.

- **W2.1** Add a 3D pane to `<gufe-atom-mapping>`: both conformers in one 3Dmol
  scene, coloured by the positional ramp from W1.6.
- **W2.2 Draw the correspondence explicitly.** Dashed lines between each mapped
  atom pair, on by default in the overlay. This was singled out in the meeting as
  the thing that helps more than colour alone. The theme already carries
  `linesDash`, `linesMolA`, `linesMolB` and `overlayMolA` / `overlayMolB` for
  exactly this and nothing reads them yet.
- **W2.3** Modes: `Mapped` / `Changing` / `Overlay`, one control shared by the 2D
  and 3D panes so they never disagree about what is being highlighted.
- **W2.4** Match the existing example's overlay layout. The prototype shown in
  the meeting diverged from it and that was called out.
- **W2.5** One element, three call sites. The standalone payload mounts it; the
  ligand network's detail pane replaces its hand-drawn pair of depictions with
  it, fed by `mappingPayloadFor(edge, registry)`
  (`ts/src/views/ligand-network.ts:181`); the transformation view embeds it. No
  second code path, so the in-context picture and the standalone picture cannot
  drift.
- **W2.6** Apply the zoom clamp from W8 here too, since the overlay is a 3Dmol
  canvas that will appear in notebooks.

---

### W3 - The ligand network at scale

The largest workstream, and the one with the most distinct requests behind it.
Requires a real large fixture (W9) before any of the performance work is more
than guessing.

- **W3.1 Semantic zoom.** Three levels of detail keyed off the existing `scale`
  in `#interact` (`ts/src/views/ligand-network.ts:647`):

  | Zoom | What is drawn |
  |---|---|
  | far out | nodes as plain discs, edges coloured by score, no labels, no depictions |
  | middle | discs plus ligand names |
  | close in | depictions injected into the nodes |

  The overall shape of the network is what you want when zoomed out, and it is
  currently buried under 934 captions. Today `scene.depict()` injects a depiction
  for every node as soon as RDKit resolves and every caption is drawn
  unconditionally (`ligand-network.ts:572`, `ligand-network.ts:601`). Both become
  lazy and viewport-culled.

- **W3.2 Keep the structures.** They are useful: people in a project know the
  structures even when they do not know the ligand names. Level of detail is the
  answer to the clutter, not removing them. Add an explicit toggle as well, for
  the case where they are noise.

- **W3.3 A ligand list.** A scrollable sidebar of every ligand name. Click to pan
  and zoom to that node. Multi-select. Long ligand names are expected, so the
  list is where the full name always lives, and the canvas caption stays
  truncated (currently 16 characters, `ligand-network.ts:572`).

- **W3.4 Search.** A query box over ligand name, SMILES and gufe key. Filters the
  list and highlights matches in the canvas. At scale this is how you get to the
  region you care about: search, click, zoom.

- **W3.5 Selection dims rather than removes.** Selecting a set of ligands leaves
  the edges that touch them at full strength and drops everything else to low
  opacity. The reason is explicit: you want to see what is *not* selected too.
  Same for filters. One `Set<GufeKey>` shared by the list, the canvas and the
  export, so all three always agree.

- **W3.6 Filter edges by score.** A threshold control ("score below 0.5") over
  the value that already colours the edges. The stated use is finding the edges
  that need a human to look at the mapping.

- **W3.7 Colour nodes by metadata.** The general form of the scaffold request.
  Collect the union of metadata keys present across all nodes, offer them in a
  picker, colour by the selected one, and say nothing when a network carries no
  metadata. Blocked on W6 (the payload carries no node metadata today).

- **W3.8 Colour by SMARTS.** Type a SMARTS, colour the ligands that match. RDKit
  is already loaded in the page. Note this is colouring rather than filtering, on
  purpose: you want to see the misses. **This one needs a ruling** - see the open
  questions. It is a display filter by intent, but it is substructure matching in
  the browser, and the line the meeting drew was "filtering and labelling yes,
  analysis no".

- **W3.9 Performance.** One SVG group per node with an injected RDKit depiction
  will not survive a thousand nodes. Measure first with the fixture from W9.
  Expected outcome: edges and far-zoom nodes move to a canvas layer, SVG stays
  for the close-zoom subset and for anything selected. Do not start here; start
  by measuring.

---

### W4 - Selection export: the line against becoming a GUI

The agreed answer to "how do I build a network from this without a round trip".

- **W4.1** "Copy selected ligands" - a plain comma-separated list of names,
  suitable for pasting straight into a file the CLI reads.
- **W4.2** "Copy selected edges" - one pair per line, names on both sides.
- **W4.3** Download the same content as a file, for selections too big for a
  clipboard.
- **W4.4** Names or gufe keys, chosen by a small switch. Names are what a human
  pastes into a plan command; gufe keys are what is unambiguous when names
  collide or are empty.
- **W4.5** Document the round trip in `README.md` with the concrete command that
  consumes the file, once that command exists. The export is only half a feature
  without the sentence that says what to do with it.
- **W4.6** Make the boundary visible in the interface. A button that says
  "Copy selection" reads as a visualization; a button that says "Add edge" reads
  as a GUI and sets an expectation the tool cannot meet. Frustrating a user who
  thinks they should be able to edit is the failure mode named in the meeting.

**Explicit non-goals**, recorded so they are not re-litigated:

- Adding edges in the browser and writing the network back out.
- Shipping the maximal network in the payload so edges can be promoted from it.
  It does not scale; it bloats every payload for a feature nobody has yet.
- A localhost server giving the browser read/write access to live Python. It is a
  good future direction and it needs someone whose job is interface work.

---

### W5 - The alchemical network, as its own visualization

- **W5.1** Separate element, `<gufe-alchemical-network>` (W0.2), not a mode of
  the ligand network. Nodes are chemical systems, edges are transformations.
- **W5.2 Extract what genuinely repeats** into `ts/src/shared/graph.ts`: the
  force layout, seeding, wheel zoom, pan, node drag, the selection model and the
  dim-the-rest behaviour. Keep node rendering, the detail pane and the toolbar in
  the two view files. The instinct to parameterize one view by everything that
  differs between them is the thing to avoid: what differs is all of it.
- **W5.3 Colour edges by protocol**, and filter by protocol. `TransformationViz`
  already carries a `protocol` key that resolves to a whole `ProtocolViz` in the
  registry, so this needs no contract change.
- **W5.4 Show the protocol control only when it earns its place.** One distinct
  protocol across all edges means no picker.
- **W5.5 Keep it simple.** Connectivity, protocols, and the state of each edge.
  No deep metadata sidebar. If you want to inspect a mapping, open the mapping.
- **W5.6** Clicking a node opens the chemical system view; clicking an edge opens
  the transformation view, which embeds the atom mapping view. The drill-down is
  the depth, rather than a bigger sidebar.

---

### W6 - Node metadata (a contract change)

Blocks W3.7. Needs sign-off before it is written, because it changes the schema.

- **W6.1** Add an optional free-form object to `SmallMoleculeComponentViz` in
  `schema/gufe-viz.schema.json`, following the rule the mapping `annotations`
  field already sets: displayed, never interpreted, values coerced with
  `json_safe`. Hand-written, schema first. Do not introduce a model class to
  generate it.
- **W6.2** Populate it in `small_molecule_payload`
  (`python/gufe_viz/components.py:84`) from whatever a ligand network node
  actually carries. **Determine what that is first** - see the open questions.
- **W6.3** `pixi run types`, then mutation rows in `python/tests/mutations.json`
  proving the schema accepts the shape and rejects what it should.
- **W6.4** The view side is W3.7 and is small once the data is there: collect
  keys, offer a picker, assign categorical colours per distinct value.

Colouring by metadata that already exists is cheap and can ship before W6:
formal charge and node degree are both in the payload today.

---

### W7 - The chrome toggle

**Settled.** One hamburger per visualization: same style, same place, same
mechanism, different contents. It reveals that view's expanded menus.

**Local to the view.** No host flag, no Python parameter, nothing threaded
through `to_html`, `shell_html`, `view()` or the element attributes. Every view
opens collapsed, in every host, for now.

Deferring the host-derived default costs almost nothing **provided the initial
state is a named default the view reads, not a hardcoded `false`** (W7.6). The
views end up asking "am I expanded?" rather than "am I in a notebook?", so
teaching a host to open expanded later is one change in one place and no view is
touched. Building the mechanism now and the policy later is the right order.

- **W7.1 Toggling must not re-render.** The one constraint that survives
  unchanged from the larger design, and the one most likely to be missed.
  Rebuilding through the normal path (`#resetShell` in
  `ts/src/shared/element.ts`) tears down the view's handle, which destroys the
  3Dmol viewer and its camera, discards the force layout's node positions, and
  clears the selection. Opening the menu and finding the network re-laid-out
  with the selection gone is worse than having no menu. The toggle changes
  **visibility, never structure.**

- **W7.2 One shared helper, not a convention.** Style, placement and behaviour
  live in `ts/src/shared/dom.ts` beside `headerStrip()`, which every view already
  builds. If it is a helper, the hamburger cannot drift between views; if it is a
  documented convention, it will. Views call it and hand it their own contents.

- **W7.3 Contents are per view.** The helper owns the button, the panel, the
  open and closed states and the animation. What goes inside is the view's, and
  no two views agree on it. See W10.6 for what each one exposes.

- **W7.4 Build expensive contents lazily.** Collapsed by default makes this a
  straight win rather than a nicety: a scrollable list of 934 ligands is now
  usually never built at all. The helper takes a factory, called on first open,
  so the caller does not have to decide what counts as expensive.

- **W7.5 Fire a resize on open and close.** Revealing a panel changes the canvas
  size. The `ResizeObserver` in `GufeElement` watches the element, not its
  internal layout, so the toggle calls the view's `onResize` itself. Without it a
  network opens into a canvas that still believes it is the old width.

- **W7.6 Initial state in one named place.** One constant per view, or one shared
  default, rather than a literal at each call site. This is the whole cost of
  deferring the host plumbing, and it is one line.

- **W7.7 Decide what stays outside.** The open question below. The reading this
  plan assumes: **existing visible controls stay visible, and the hamburger holds
  what is new** (search, the ligand list, filters, export, per-view config). The
  alternative, moving everything behind it, regresses the standalone page for
  people who use the layout picker today, and it is not what "expanded menus"
  most naturally means.

**Not being done, and why it is cheap to add later**

| Deferred | What it would have cost |
|---|---|
| `embedded` attribute stamped by `to_html` / `shell_html` | a parameter in two Python functions and one `closest()` read |
| Host-derived initial state (notebook collapsed, page expanded) | one line, given W7.6 |
| Stamping both notebook layers identically so the widget and the static page agree | a test |
| Per-type notebook iframe heights, replacing the hardcoded 600px in `python/gufe_viz/notebook.py:38` | independent of all of this, and still worth doing on its own |
| Persisting the open state across cell re-runs as a widget trait | a trait, once there is a host flag to hang it on |

The scroll-ownership problem is **not** on that list. Whether a 3Dmol canvas may
capture the wheel has nothing to do with whether a menu is open, and it is a real
bug in notebooks today. It is W8.2 and it stands on its own.

---

### W8 - The 3D viewer nitpicks

Small, and the best value per hour in this document. The complaint was tiny to
describe and genuinely painful in use.

- **W8.1 Clamp zoom out.** Today you can zoom a molecule down to a speck and lose
  it. Bound the cumulative zoom factor in every 3Dmol view: small molecule,
  protein, the mapping overlay, chemical system.
- **W8.2 Stop stealing the wheel.** Scrolling down a notebook over a 3D canvas
  currently zooms the model to infinity until the cursor moves off it. Fix:
  a plain wheel scrolls the page, and zoom requires either modifier-plus-wheel or
  a click into the canvas first. This is standard behaviour for embedded map and
  3D widgets, and it is the actual bug behind the complaint - the clamp alone
  only limits how bad it gets.
- **W8.3 Reset view.** One button that returns to the initial camera, for when it
  goes wrong anyway.
- **W8.4** Same treatment for the network canvas, which has the same wheel
  handler shape (`ligand-network.ts:671`) and the same problem in a notebook.

---

### W9 - Real data, and somewhere to keep prototype decisions

- **W9.1 Get the 934-ligand network.** It was shown in the meeting and it is the
  dataset every scale claim in W3 needs. Note the payload size when it arrives:
  it decides whether a single-shot HTML dump is still the right delivery for
  networks that size.
- **W9.2** Add a synthetic network generator to `scripts/make_examples.py` behind
  a flag, sized on the command line. Do not commit a thousand-ligand fixture;
  generate it on demand for performance work.
- **W9.3** Add a large-network page to the gallery so performance regressions are
  visible rather than reported.
- **W9.4** Record accepted prototype decisions in this repo. Prototypes are being
  shared as links and discussed in Slack, and Slack is not a record. One
  `## Decisions` section here, appended to as each is settled, with a date and
  who asked.
- **W9.5** Ask around whether anything can be learned from the similar internal
  tool built at another site, which came up as a lead in the meeting.

---

### W10 - Defaults and configurability, written down

The question that recurred through the whole session was "what should the default
be, and how configurable should this be". It deserves an answer per view rather
than per conversation.

- **W10.1** Add a table to `README.md`: for each view, its default state and the
  controls it exposes.
- **W10.2** The rule: the default matches the existing visualization. Anything
  beyond it is a control, not a new default.
- **W10.3 Protein:** keep cartoon plus chain colouring. No distance selections,
  no selection language. The job is confirming you have the protein you think you
  have.
- **W10.4 Chemical system: show the components together.** A protein with its
  ligand in the same scene is more useful than the protein alone, and the
  chemical system view is where that happens.
- **W10.5** Low-value views are allowed to be simple, and saying so in the
  documentation is what stops them growing controls nobody asked for.

- **W10.6 What each hamburger holds.** The other half of "what is the default",
  and the per-view contents W7.3 leaves to each view. Assumes the W7.7 reading:
  what is visible today stays visible, and the menu holds what is new. Two rows
  need confirmation rather than assumption.

  | View | Stays visible | Behind the hamburger |
  |---|---|---|
  | Small molecule | 2D and 3D panes, name | style buttons, spin, most of the info bar |
  | Protein | cartoon plus chain, the picture | representation and colour switchers |
  | Atom mapping | both depictions, the highlight toggle | correspondence table, annotation list |
  | Ligand network | the graph | layout picker, sidebar, search, score filter, export, **and probably the detail pane** |
  | Alchemical network | the graph | protocol picker, filters, detail pane |
  | Chemical system | component list plus selected component | little to move |
  | Solvent, unknown, protocol | the card | nothing, so no toggle |

  **Confirm:** whether the ligand network's detail pane goes behind the
  hamburger. It is the largest single move here, and it is what would make a
  notebook cell genuinely small once a host default exists. **Confirm:** whether
  the mapping highlight switch counts as chrome. Recommendation is that it does
  not: choosing between mapped and changing atoms is the visualization, not a
  control around it.

---

### W11 - Delivery: size, URLs, and working offline

From the second meeting, and from the 934-ligand network in the first. Both
arrive at the same question from opposite ends: **a single-shot HTML dump with
everything inlined is the right delivery until it is not, and nobody has
measured where that line is.**

This workstream is mostly investigation. Do not build a data-loading feature
before W11.1 says one is needed.

- **W11.1 Measure the ceiling.** Take the 934-ligand network (W9.1), build the
  page, and record: payload bytes, page bytes, time to first paint, time to a
  usable layout. A protein page is already 457 kB. This tells us whether "the
  data travels with the page" survives real networks, and it gates everything
  else here. Put the numbers in this repo, not in a chat message.

- **W11.2 Finish the offline story.** `engines="bundled"` is specified and
  unimplemented; today every page fetches RDKit, 3Dmol and d3 from their CDNs on
  demand (`ts/src/shared/engines.ts`). Two consequences already on the books: an
  exported notebook read offline shows layout and metadata but no depictions and
  no 3D, and the second meeting raised the same problem independently for
  shared visualizations. The pre-seeding hook (`globalThis.__gufeEngines`)
  already exists, so this is the writer's half, not a redesign.

- **W11.3 Decide whether a payload may be fetched rather than inlined.** The
  Zenodo case is the clean statement of it: the data is large, already hosted,
  and should not be copied into every page. A `<gufe-view src="...">` that
  fetches and validates is a small change to the element and a large change to
  what the page *is* - it stops being self-contained, which is currently a
  property people rely on. **Do not do this speculatively.** It needs W11.1's
  numbers and a real gufe use case, and neither exists yet.

- **W11.4 The CLI should take more than one input.** Both meetings want this,
  independently: OpenFF asked directly for a CLI that accepts a list, and
  comparing two networks or two mappings side by side is the obvious OpenFE
  version. `cli.py` takes exactly one path today. A multi-input page needs a
  container view that lays out several payloads, which is new work rather than a
  flag. Scope it before promising it.

- **W11.5 Be clear about what "share it" means here.** framejs shares a link;
  gufe-viz produces a self-contained file that is shared by sending it. That is a
  real difference, it is deliberate, and it is the right trade for a tool whose
  input is often unpublished project data. Say so in `README.md` rather than
  leaving people to infer that a link is coming.

- **W11.6 Prototype links change when a prototype is edited.** Raised as a pain
  point in the second meeting and being fixed on the framejs side, but it lands
  on us too: the feedback loop set up in the first meeting depends on sharing
  prototype links in Slack, and a link that moves when the prototype is edited
  makes that thread a poor record. This is the concrete argument for W9.4.
  Record the decision in the repo; treat the link as disposable.

- **W11.7 Remote rendering is noted and not planned.** The proposal was a
  container that holds a large dataset, renders remotely, and embeds in a
  notebook without a local download. It is a reasonable direction and it is a
  different architecture: real-time slicing needs a live server, which is the
  same conclusion the first meeting reached about round-tripping. Recorded here
  so it is not rediscovered as new.

---

## 4. Sequencing

Five working weeks, ordered so that the parity and correctness items land while
there is still time to react to feedback on them, and the open-ended scale work
comes after the fixture that makes it measurable exists.

| Week | Work | Why here |
|---|---|---|
| 1 | W7 (all), W0 (all), W8 (all), W1.1 and W1.2 | The toggle helper comes first: every view built from here on hangs its menus off it, and retrofitting nine views later is the avoidable version of this work. It is now small enough to be a day. Then the views themselves, since nothing has a home until they land. W8 is a day on the loudest complaint. Naming colours by meaning precedes using them. |
| 2 | W1.3 to W1.7, W2, W9.1 | Parity screenshots and the colour vision pass need feedback time, so start them early. Ask for the large network now: it has a lead time and week 3 depends on it. |
| 3 | W9.2, W11.1, W3.1 to W3.5 | Measure the ceiling before building for scale. Then level of detail, the list, search and selection, which are one feature sharing one selection model. |
| 4 | W3.6, W4, W5 | Score filtering and export finish the ligand network. The alchemical network reuses the shared graph module week 3 produced. |
| 5 | W6 and W3.7 if approved, W10, W11.2, handover | The contract change is last because its sign-off may not arrive. The rest is documentation and the offline writer, both safe to be finishing at the end. |

Deliberately unscheduled, each waiting on something:

| Item | Waiting on |
|---|---|
| W3.8 SMARTS colouring | a ruling on whether it is visualization or analysis |
| W3.9 canvas rendering | W11.1's measurement |
| W11.3 payload by URL | W11.1's numbers plus a real gufe use case |
| W11.4 multi-input CLI | scoping, since it needs a container view rather than a flag |
| W11.7 remote rendering | not planned, recorded so it is not rediscovered |

The first two are what to pull in if a week comes in early.

---

## 5. Open questions

Take to the feedback channel. Each blocks something specific.

| # | Question | Blocks |
|---|---|---|
| 1 | What are the exact colour values in the current 2D mapping visualization, and their exact meanings? Which file is authoritative? | W1.2, and therefore the whole parity claim |
| 2 | ~~Parity first, or change the palette now in both places?~~ **Answered: parity first.** The 2D pair is mirrored from gufe and already colourblind-safe; the 3D ramp stays `hsv`, matching openfe. Changing either is one line in the generator, later. | W1.4, W1.5, closed |
| 3 | Is `annotations["score"]` the key OpenFE networks actually use for edge score? Still open from the earlier review. | edge colouring, score filtering, force layout distances |
| 4 | Is browser-side SMARTS substructure matching visualization or analysis? | W3.8 |
| 5 | Which metadata keys do real ligand networks carry on their nodes, and where does the payload builder read them from? | W6, W3.7 |
| 6 | How large is the 934-ligand network as a payload? Does a single-shot HTML dump still hold at that size? | W3.9, and possibly the delivery model |
| 7 | Does the hamburger hold only the new menus, or does existing visible chrome move behind it too? | W7.7, and the whole of W10.6 |
| 7b | Is the ligand network's detail pane behind the hamburger, or always visible? | W10.6 |
| 8 | Is there a colourblind reviewer on the team, or do we rely on simulation? | W1.4 |
| 9 | Should `ProtocolViz` get a small card, or stay as the unsupported panel? | W0.8 |
| 10 | ~~Is round-tripping a payload back into a `LigandNetwork` a use case?~~ **Answered: no, not now.** The browser never reconstructs gufe objects and the payload need not be sufficient to. Deferred, not rejected. W4 stands as designed: names and gufe keys out. | W4, closed |
| 11 | At what payload size does the self-contained page stop being the right delivery? Nobody has measured it. | W11.1, and W11.3 depends on the answer |
| 12 | Is there a gufe use case for loading a payload from a URL, or is that only the Zenodo case from a different tool? | W11.3 |
| 13 | What would a multi-input page actually show: several networks side by side, a comparison, or tabs? | W11.4 |

---

## 6. Traceability

Every request in both transcripts, and where it went. Nothing is dropped without
appearing here, including the things deliberately not being done.

### From `transcript.txt` (OpenFE)

| Request | Workstream |
|---|---|
| The two colour schemes must match; colours mean things to users | W1.1, W1.2, W1.3 |
| All colours controlled in one place so a change is one edit | W1.1, W1.7 |
| Blue and red may not be colourblind friendly; red and green are the worst | W1.4, W1.5 |
| The 3D mapping colouring is a contiguous positional ramp, not element colours | W1.6 |
| Hydrogens should not get their own colour in the mapping view | W1.6 |
| The rainbow ramp confuses red and purple, and it hid a real bug | W1.6 |
| Draw lines directly between mapped atoms | W2.2 |
| The overlay does not match the existing example | W2.4 |
| What should the default state of each visualization be? | W10 |
| How configurable should each visualization be? | W10 |
| Zoom out to nodes and edges only; names appear as you zoom in | W3.1 |
| Ligand names can be very long | W3.3 |
| Are structures in the nodes useful, or noise? Useful, keep them | W3.2 |
| A sidebar listing every ligand, click to go to it | W3.3 |
| Search for specific ligands and highlight their edges | W3.4, W3.5 |
| De-highlight everything not selected rather than hiding it | W3.5 |
| Filter by low map score to find the edges worth looking at | W3.6 |
| Colour nodes by metadata; scaffolds are a case of that | W3.7, W6 |
| Colour by SMARTS match | W3.8 |
| Networks get messy at 934 ligands | W3.1, W3.9, W9.1 |
| Select nodes and edges, then dump the selection to a file | W4 |
| A comma-separated list of node names is enough to feed the CLI | W4.1 |
| Do not obfuscate that this is not a GUI | W4.6 |
| Adding edges in the browser is a good future direction, not now | W4, non-goals |
| Storing the maximal network in the payload will not scale | W4, non-goals |
| A mini server for a real round trip needs interface staff we do not have | W4, non-goals |
| Alchemical and ligand networks should be separate visualizations | W5.1 |
| Colour and filter edges by protocol type | W5.3, W5.4 |
| The alchemical network can be simpler: status, protocols, connectivity | W5.5 |
| The notebook should show less, on purpose | W7, W10.6 |
| Maybe a control in the notebook that expands to more | W7, settled: it is required, not optional |
| Do not limit the browser's ambition to what fits in a cell | W7, and W10.6 for what each view exposes |
| Zooming out in 3D loses the molecule to a speck | W8.1 |
| Scrolling a notebook over a 3D view zooms it into infinity | W8.2 |
| Protein plus ligand together is more useful than protein alone | W10.4 |
| Do not try to replace PyMOL | W10.3 |
| Low-value views are allowed to be simple | W10.5 |
| Larger datasets are needed to work on the dense cases | W9.1, W9.2 |
| A feedback channel, and fast prototype iteration | W9.4 |
| Someone built something similar internally elsewhere | W9.5 |


## Decisions

Append settled prototype decisions here, with a date and who asked, so the
record is in the repository rather than in a chat thread.

_(nothing recorded yet)_
