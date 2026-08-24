# Visualization work: steps

Condensed from `VISUALIZATIONS.md`. Decisions are listed once; everything after
is steps. Each step: action, files, done-when.

## Fixed decisions

- Hamburger holds **new menus only**. Controls visible today stay visible.
- Toggle is **local to each view**, opens collapsed, no host flag, no Python
  parameter, no attribute threading.
- Toggle changes **visibility, never structure**. No re-render.
- **One PR per view** for the six ports.
- CLI is the primary interface. The browser page is its output.
- Ligand networks and alchemical networks are separate views sharing a graph
  module.
- Selection exports names and gufe keys only. Nothing writes gufe objects from
  JavaScript.
- **Atom colours are mirrored from upstream, never authored here.** See the
  colour rule below.

## Colour rule

**Atom colours are never authored in this repo.** Every atom colour is mirrored
verbatim from an existing upstream scheme, in one block, with the source file
cited beside it. If upstream does not define a colour for something, we do not
invent one: we either do without it or raise it upstream. This applies to the
mapping colours, the element schemes and the 3D mapping ramp.

`ts/src/shared/theme.ts` today invents an A-side and B-side atom colour
(`colorUniqueA` red, `colorUniqueB` green, plus the matching `rgb*`, `chip*`,
`linesMol*` and `overlayMol*` entries). Upstream makes no A/B distinction at all.
Those entries are deleted, not recoloured.

## Upstream schemes to mirror

| What | Scheme | Source |
|---|---|---|
| Element change (2D mapping) | `#005AB5` | `gufe/visualization/mapping_visualization.py:21` |
| Unique atom (2D mapping) | `#DC3220` | `gufe/visualization/mapping_visualization.py:20` |
| 3D mapping ramp | `matplotlib` `hsv`, indexed by mapping pair order | `openfe/utils/visualization_3D.py:88-92` |
| Element colouring, 3D | 3Dmol `Jmol` | already used in `ts/src/views/small-molecule.ts` |
| Element colouring, 2D | RDKit defaults | already used via `depictSVG` |
| Network node, default | matplotlib `blue` | `openfe/utils/network_plotting.py:49,73` |
| Network node, edge selected | matplotlib `red` | `openfe/utils/network_plotting.py:77` |
| Network edge, default | matplotlib `black` | `openfe/utils/network_plotting.py:200` |
| Network edge, selected | matplotlib `red` | `openfe/utils/network_plotting.py:207` |

Three notes that follow from the table:

1. **The 2D mapping pair is already colourblind-safe.** `#005AB5` / `#DC3220` is
   a standard deuteranopia-safe blue/red. The meeting's worry does not apply to
   what gufe draws. It applies to what we invented.
2. **The 3D ramp is `hsv`**, indexed by mapping pair order. Confirms the ramp is
   positional rather than elemental, and confirms it is the rainbow that was
   complained about. Whether to keep it is open question 6, not a local call.
3. **The network score ramp has no upstream equivalent.** openfe's network plot
   colours by selection state, not by score. `netEdgeRamp` is therefore ours to
   keep, because it is not an atom colour and there is nothing to mirror.

---

## M0 - Infrastructure - DONE

Machinery only. No view logic, no drawing decisions. Four commits on
`draft-upgrade-visualizations`.

- **M0.1 Shared SVG vocabulary.** `ts/src/shared/svg.ts` (new, `svg()` and
  `titled()`); `ligand-network.ts` now imports it instead of carrying its own
  copies.
- **M0.2 Highlighted depiction.** `depictHighlightedSVG` in
  `ts/src/shared/sdf.ts`, plus the optional `get_svg_with_highlights` on
  `RDKitMol` in `engines.ts` so an older pre-seeded MinimalLib falls back rather
  than throwing.
- **M0.3 Card vocabulary.** `typeBadge()` and `card()` in `ts/src/shared/dom.ts`.
- **M0.4 The chrome menu.** `chromeMenu()` and `CHROME_OPEN_BY_DEFAULT` in
  `ts/src/shared/dom.ts`; `headerStrip()` gains a fixed `toggleEl` slot so the
  button cannot drift position between views. Builds contents from a factory on
  first open, toggles visibility only, reports through `onToggle` so a view can
  re-lay-out. 10 tests in `ts/tests/chrome.test.ts`.
- **M0.5 Atom colours, mirrored not authored.** `scripts/gen_atom_colors.py`
  imports `BLUE` and `RED` from `gufe.visualization.mapping_visualization` and
  samples the ramp from the matplotlib colormap openfe names, emitting the
  generated `ts/src/shared/atom-colors.ts`. `pixi run atom-colors`.
- **M0.6 Invented atom colours deleted.** `colorCore`, `colorUniqueA`,
  `colorUniqueB`, `rgbCore`, `rgbUnique*`, `chipCore`, `chipUnique*`,
  `linesMol*`, `overlayMol*` and `linesDash` are gone from `theme.ts`. Nothing
  consumed them; the ported views will use `MAPPING_COLORS` instead.
- **M0.7 Freshness check.** `atom-colors.ts` added to `scripts/check_generated.sh`
  so a stale mirror fails CI the way a stale schema or bundle does.

State: `pixi run lint` clean, 270 vitest and 308 pytest passing,
`pixi run check-generated` reports every artifact up to date.

- **M0.8 Interaction helper.** `ts/src/shared/interact.ts`: `guardWheel()`
  listens in the capture phase and always stops propagation, so a 3Dmol canvas
  never sees a wheel event; a plain wheel then scrolls the page and zooming
  needs intent (pointer already engaged, or a modifier, which is what a trackpad
  pinch sends). `boundedZoom()` clamps cumulative zoom and resets.
  `resetControl()` is the button. 16 tests in `ts/tests/interact.test.ts`.
  `ThreeDmolViewer` gains `zoom()`.
- **M0.9 Parity reference generator.** `scripts/make_parity_reference.py`,
  `pixi run parity-reference`. Calls gufe's own `draw_mapping` and
  `draw_one_molecule_mapping` on the same fixtures we render, writing both a PNG
  (what gufe returns unasked) and an SVG (the form our view produces). Not
  committed and not in `check-generated`: the bytes depend on the installed
  RDKit, so committing them turns an RDKit upgrade into a spurious CI failure.
- **M0.10 Synthetic network generator.** `scripts/make_big_network.py`,
  `pixi run big-network`. Real embedded molecules, synthetic mappings, any size.
  Reports payload bytes, page bytes and the difference. Writes under
  `do-not-commit`, never into `examples/`. Five two-point scaffolds against
  twenty substituents; distinctness checked on RDKit canonical SMILES, because a
  duplicate would share a gufe key and the registry would silently collapse the
  network to fewer nodes than were asked for. See step 27 for what it measured.

### What the parity reference turned up

Three things gufe's 2D mapping drawing does that none of the planning notes had,
all of which the atom-mapping view has to match:

| What | Consequence |
|---|---|
| `useBWAtomPalette()` | The molecules are drawn **black and white**, not in RDKit's element colours. A view that keeps the element palette will not match no matter how correct its two highlight colours are. |
| `addAtomIndices = True` | Every atom carries its index. |
| `continuousHighlight = False` | Highlights are outlines, not filled blobs. |

Confirmed against the generated reference: the SVGs contain `#DC3220` and
`#000000` and nothing else. This makes step 13 and step 20 more than a
mechanical rename, and it is the single most likely way to get the mapping view
subtly wrong.

---

## M1 - Foundation (week 1)

1. ~~**Add the chrome toggle helper.**~~ Done in M0.4.

2. **Wire the toggle into the three existing views** with empty panels, to prove
   the mechanism before the ports land.
   files: `ts/src/views/small-molecule.ts`, `protein.ts`, `ligand-network.ts`
   done: all three show the hamburger in the same position; opening one changes
   nothing else about the view.

3. ~~**Replace the invented atom palette with gufe's.**~~ Done in M0.5 and M0.6.
   Superseded text kept for the record:

   **Replace the invented atom palette with gufe's.**
   files: `ts/src/shared/theme.ts`
   done: `mappingElementChange` (`#005AB5`) and `mappingUniqueAtom` (`#DC3220`)
   mirrored from `gufe/visualization/mapping_visualization.py:20-21`, cited in
   the header comment. **Deleted, not recoloured:** `colorUniqueA`,
   `colorUniqueB`, `rgbUniqueA`, `rgbUniqueB`, `chipUniqueA`, `chipUniqueB`,
   `linesMolA`, `linesMolB`, `overlayMolA`, `overlayMolB`. Upstream makes no
   A-side / B-side distinction, so neither do we. Keep `colorCore` only if a
   view still needs a neutral, and mark it as ours rather than mirrored.

4. ~~**Add `mappingRamp3D` by mirroring an existing colormap.**~~ Done in M0.5 as
   `MAPPING_RAMP_3D`. Superseded text kept for the record:

   **Add `mappingRamp3D` by mirroring an existing colormap.** Default `hsv`,
   matching `openfe/utils/visualization_3D.py:88`, indexed by mapping pair order.
   files: `ts/src/shared/theme.ts`, `scripts/` (a small generator)
   done: the colormap's published stop values are generated from matplotlib and
   committed with the command that produced them, not hand-picked. Swapping to
   another named colormap is then a one-line change. **Do not author stops.**
   Which colormap ships is open question 6.

5-7. **Adopt `shared/interact.ts` in the views.** The behaviour is built and
   tested (M0.8); what remains is wiring, which is per view and belongs with
   each view's own PR.
   files: `ts/src/views/small-molecule.ts`, `protein.ts`, `ligand-network.ts`
   done: each 3D view calls `viewerInteraction(host, viewer)` and places a
   `resetControl`; `ligand-network.ts` drops its own wheel listener for
   `guardWheel` and keeps its existing SVG-space clamp.

8. **CI: no hex literals under `ts/src/views/`, and atom colours only in the
   mirrored block.**
   files: `.github/workflows/ci.yml`
   done: a grep step fails on a hex colour in a view file, and on an atom colour
   defined anywhere in `ts/src/` outside the mirrored block in `theme.ts`.

---

## M2 - The six ports - DONE

All twelve declared types draw. Nothing renders the "no visualization for X yet"
panel, and a test walks every committed fixture through the dispatcher to keep it
that way.

| View | Commit | Rework needed |
|---|---|---|
| `<gufe-solvent>` | 9cbe4ab | none |
| `<gufe-unknown-component>` | 9cbe4ab | dropped an `(R19)` plan reference |
| `<gufe-chemical-system>` | 2fa2f51 | **plan was wrong**: `components` values are keys, not objects |
| `<gufe-atom-mapping>` | 8a5043e | endpoints by key, atom-pair list, gufe's palette and classification |
| `<gufe-transformation>` | 64a219d | `stateA`, `stateB`, `protocol` all keys |
| `<gufe-alchemical-network>` | 64a219d | nodes are keys, edges are whole `TransformationViz` |
| `<gufe-protein>` x3 | f5247fb | serves all three PDB types; solvated opens with waters |
| `<gufe-protocol>` | f5247fb | new, small card |

Fixtures added: `unknown_component.json`, `transformation.json`,
`alchemical_network.json`. The last two need a Protocol, and borrow gufe's own
`DummyProtocol` - gufe ships no concrete one outside its tests, and the payload
carries a class name and nothing else, so a stand-in is exactly as informative.

### What the ports turned up

- **RDKit-JS accepts `useBWAtomPalette` and silently ignores it.** Verified
  through RDKit's own `UpdateDrawerParamsFromJSON`, the same parser MinimalLib
  uses: an oxygen still draws red. An explicit `atomColourPalette` works, so
  `gen_atom_colors.py` emits one and proves it reproduces `useBWAtomPalette()`
  byte for byte before emitting.
- **gufe gives core atoms no colour at all**, so there was no "core" colour to
  mirror - unchanged atoms are simply not highlighted.
- **A `ChemicalSystem`'s `components` index signature makes `.length` typecheck**
  as a key rather than failing, so `count === 1` silently compared a string to a
  number.
- **Two tests hard-coded a type as their "cannot draw" example** and broke the
  day it got drawn. Both now pick an undrawn type from the dispatch table and
  pass trivially once none are left.
- **`mappingPayloadFor` moved** from `ligand-network.ts` to `atom-mapping.ts`,
  where it belongs: it produces the payload that view consumes, and two views
  embed it now rather than one.

### Not verified

That the mapping view's output actually looks like gufe's. Everything asserted so
far is structural. `pixi run parity-reference` writes the comparison and it needs
eyes - step 24.

---

## M3 - Mapping depth and colour parity - MOSTLY DONE

- **20-22 DONE** (`6527839`). The 3D overlay uses gufe's layout: molA shifted
  left, molB shifted right, both again unshifted in the middle. Spheres radius
  0.6 alpha 0.8, shift = larger x-extent rounded to 1dp with a floor of 5, times
  1.5. Colour is the ramp at `i/(n-1)`, which is what `get_cmap("hsv", n)` does -
  verified numerically, where the two agree to within matplotlib's own 256-entry
  lookup quantization. Dashed lines between mapped pairs are ours, requested
  outright, with a toggle. Geometry lives in `shared/mapping3d.ts` so it tests
  without WebGL.
- **23 DONE** (`8a5043e`). The network detail pane embeds `<gufe-atom-mapping>`.
- **24 STILL OPEN and needs eyes.** `pixi run parity-reference` writes gufe's own
  drawings; nobody has compared them to ours. Everything asserted so far is
  structural.
- **25 not started.** The colour vision pass.

The 2D highlight mode switch is deliberately 2D-only: gufe's 3D always marks
mapped pairs, so there is no "changing" mode there to mirror.

---

## M4 - Ligand network at scale - MOSTLY DONE

- **27 DONE.** 934 ligands: 4.48 MiB payload, 4.72 MiB page, bundle 5%.
- **28 DONE.** `pixi run big-network`.
- **29 DONE** (`5cdf9e0`). Level of detail: captions at zoom 0.5, depictions at
  1.1, built once per node and only for nodes on screen plus a margin. A test
  builds a 934-ligand network in memory and asserts first paint no longer costs
  a depiction per node - all 934 circles drawn, fewer than ten RDKit calls.
- **31-34 DONE** (`07dd1ba`). One selection set shared by list and canvas.
  Search over name, SMILES and gufe key. Score threshold. Everything that does
  not match is **dimmed, not removed**, which was asked for directly and which
  three tests turn on. All of it behind the hamburger; the layout picker and
  score legend stay visible.
- **35 not started.** Colour by charge or degree.
- **30 folded in**: depictions are gated by zoom, so a separate toggle has not
  earned its place yet.

Still open here: **step 34's real question**, which is not the byte count but
first paint and time to a usable layout in a browser at 934 nodes. Level of
detail should have moved it a long way; nobody has measured it.

---

## M5 - Export, alchemical network, contract (week 5)

37. ~~**Selection export.**~~ DONE (`27420a3`). Comma-separated ligands, one
    edge pair per line, names or gufe keys, shift-click to save a file. An edge
    is included only when both ends are selected. `selectionText` is a pure
    function, tested directly rather than through a clipboard jsdom lacks.

36. **Extract the shared graph module.**
    files: `ts/src/shared/graph.ts` (new), `ligand-network.ts`,
    `alchemical-network.ts`
    done: force layout, seeding, zoom, pan, drag, selection and dimming shared.
    Node rendering, detail pane and toolbar stay in each view.

37. **Selection export.** Behind the hamburger.
    files: `ts/src/views/ligand-network.ts`
    done: copy selected ligands as a comma-separated list; copy selected edges as
    one pair per line; download the same as a file; a switch for names vs gufe
    keys. Button labels read as copying, not editing.

38. **Colour and filter alchemical edges by protocol.**
    files: `ts/src/views/alchemical-network.ts`
    done: resolves `TransformationViz.protocol` through the registry; the picker
    appears only when there is more than one distinct protocol.

39. **Drill-down.**
    files: `ts/src/views/alchemical-network.ts`
    done: node opens the chemical system view; edge opens the transformation
    view, which embeds the mapping view.

40. **Node metadata.** Smaller than planned: the data already travels, inside
    each ligand's `sdf` field as an SDF tag block. What is missing is a parsed
    form, so nothing has to read a structure format to colour by it.

    Two ways, and the choice is a design one rather than a blocker:

    **(a) Python parses, schema carries it.** An optional free-form object on
    `SmallMoleculeComponentViz`, populated in `small_molecule_payload`
    (`python/gufe_viz/components.py:84`) from `to_rdkit().GetPropNames()`,
    skipping `ofe-name`. Displayed, never interpreted, values through
    `json_safe`, the same rule mapping `annotations` already follow.
    Additive, needs `pixi run types` and mutation rows.
    **Recommended:** it keeps decoding in Python, which is the invariant the
    whole design rests on.

    **(b) TypeScript parses the tag block.** No schema change and no sign-off.
    `shared/sdf.ts` already parses SDF, so it would live there rather than in a
    view. Available as an unblock if (a) stalls, at the cost of putting a
    structure-format reader in the browser.

    Either way the view discovers keys from the data - collect the union across
    nodes, offer a picker, assign categorical colours per distinct value - and
    says nothing when a network carries no tags. There is no fixed key list to
    code against.

41. **Implement `engines="bundled"`.**
    files: `python/gufe_viz/html.py`
    done: RDKit, 3Dmol and d3 inlined via the existing `globalThis.__gufeEngines`
    pre-seeding hook; a page drawn with no network shows depictions and 3D.

42. **Per-type notebook iframe heights.**
    files: `python/gufe_viz/notebook.py:38`
    done: replaces the hardcoded 600px.

43. **Documentation.**
    files: `README.md`
    done: default state and controls per view; the hamburger convention; one
    visualization with a collapsed default rather than a reduced notebook build;
    that sharing means sending a self-contained file.

---

## Deferred, each waiting on something

| Item | Waiting on |
|---|---|
| SMARTS colouring | ruling: visualization or analysis |
| Canvas or WebGL rendering | step 27's numbers |
| Payload fetched by URL | step 27's numbers plus a real gufe use case |
| Multi-input CLI | scoping; needs a container view, not a flag |
| Host-derived toggle default | one line, given step 1's named default |
| Remote rendering in a container | not planned |

## Answered

1. **`annotations["score"]` is the key.** Confirmed in
   `openfe/tests/setup/test_network_planning.py`, which asserts
   `edge.annotations["score"]` and its value, and in
   `openfecli/tests/commands/conftest.py`, whose serialized transformation
   carries `"annotations": '{"score": 0.09516258196404048}'` and nothing else.
   A plain float, and **absent when no scorer was supplied** - openfe asserts
   `"score" not in edge.annotations` for that case. `mapping_score` in
   `python/gufe_viz/networks.py` already returns `None` there, so no change is
   needed; the uncertainty is simply gone.

2. **The ligand network's detail pane goes behind the hamburger.** Note this is
   the one place the "new menus only" rule does not hold, and deliberately: the
   pane is the largest single thing in the view, and collapsing it is what makes
   a notebook cell reasonable.

3. **Node metadata is SDF tag properties, and it is already in our payload.**
   No other repository owns a list, because there is no canonical set: the keys
   are whatever tags were on the ligands in the SDF the user supplied. Verified
   locally - gufe preserves arbitrary RDKit mol properties through `to_sdf()` as
   an SDF tag block and round-trips them back through `to_rdkit()`:

       SmallMoleculeComponent.from_rdkit(mol with scaffold=phenyl, exp_dG=-8.2)
       -> to_sdf() contains  > <scaffold> / phenyl / > <exp_dG> / -8.2
       -> to_rdkit() gives   {"scaffold": "phenyl", "exp_dG": "-8.2",
                              "ofe-name": "phenol"}

   `ofe-name` is gufe's own key for the molecule name, so it is metadata to skip
   rather than offer. See step 40, which this shrinks considerably.

4. **`ProtocolViz` gets a card**, for now.

5. **No round-tripping.** The browser never reconstructs gufe objects, and the
   payload is not required to be sufficient to do so. Deferred, not rejected.

   Demonstrated rather than assumed. A molecule rebuilt from the payload's SDF
   is a *different* gufe object, because a gufe key hashes the full float64
   conformer while a V2000 mol block stores four decimal places:

       live object   original  SmallMoleculeComponent-5f77fea4...
                     rebuilt   SmallMoleculeComponent-054834be...

   The committed fixtures survive only because `make_examples.py` quantizes to
   4dp first. `ProtocolViz` carries a class name with no settings, so no
   transformation or alchemical network reconstructs at all, and
   `UnknownComponentViz` carries nothing to rebuild from.

   Step 37 therefore stands as designed: names and gufe keys out, Python keeps
   the data. If round-tripping is ever wanted it is a separate feature - most
   likely carrying gufe's GraphML alongside the payload, which the schema can
   take additively - and it needs a reason better than tidiness, because it
   re-inflates every payload for a capability nobody has asked for.

6. **The 3D mapping ramp stays `hsv`,** for now. Parity wins; changing it can
   come later.

   No code change: `RAMP_NAME = "hsv"` in `scripts/gen_atom_colors.py` is
   already what `MAPPING_RAMP_3D` is sampled from, so step 20 draws what openfe
   draws. Changing it later is one line in the generator plus
   `pixi run atom-colors`, and never an edit to the generated file.

   The reason to revisit is on record rather than lost: a rainbow puts red next
   to purple, and that confusion already cost real debugging time when two
   differing atoms read as the same colour. Step 25 still simulates colour
   vision over `hsv` and reports what it finds - it just reports upstream rather
   than diverging locally.

## Nothing blocking

Every question that gated M1 and M2 is answered. The two still worth putting to
the team are improvements rather than blockers: whether OpenFE wants to move off
the `hsv` ramp, and whether anyone on the team can review colour choices for
colour vision rather than relying on simulation.
