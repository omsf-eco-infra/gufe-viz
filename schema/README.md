# The contract

`gufe-viz.schema.json` **is the gate between Python and TypeScript.** Nothing
reaches the browser except data that validates against it.

Python builds a payload and validates it here; TypeScript validates
the same payload against the same file before it draws anything. Neither side
gets to assume the other's shape.

## Hand-written - edit this file directly

```
schema/gufe-viz.schema.json   <- this file. The source of truth.
        |                        Nothing generates it.
        |  pixi run types
        v
ts/src/schema/types.ts        <- TypeScript types + Ajv validator input
```

Edit this file, run `pixi run types`, commit both. CI's `check-generated` job
rebuilds `types.ts` and fails if it differs, so the two cannot drift.

Python is downstream of this file too: the payload builders return plain dicts
and are validated against it with `jsonschema` in the test suite. 

`mutations.json` is for the tests that check for correctness against common expected changes.

## What crosses

SDF, PDB, and flat plain JSON. That is the whole list.

**gufe's own `to_json` never crosses.** Deduplicated key-chains, `:custom:`
codecs, the `to_dict`/`to_json` divergence - all of that stays in Python. 

When the input is a saved gufe `.json`, Python deserializes it into live gufe
objects first, then builds the payload from those.

## The shape

A payload is its `type` plus its own fields, flat:

```jsonc
{
  "type": "SmallMoleculeComponentViz",   // the closed discriminator
  "name": "ligand_23",
  "sdf": "...",
  "smiles": "CCO",
  "total_charge": 0
}
```

and it is **the same object whether it stands alone or is nested**:

```jsonc
{
  "type": "ChemicalSystemViz",
  "name": "benzene in water",
  "components": {                         // keyed by the ChemicalSystem label
    "ligand":  { "type": "SmallMoleculeComponentViz", "name": "benzene", "sdf": "...", ... },
    "solvent": { "type": "SolventComponentViz", "name": "", "smiles": "O", ... }
  }
}
```

- **`type` is closed and explicit.** A view that draws chemical systems refuses
  anything else by name; it does not guess from which keys happen to be present.
- **One `$def` per component type**, combined into the `ComponentViz` union with
  `oneOf`. This is what makes "the same object standalone or nested" true by
  construction rather than by convention: `<gufe-chemical-system>` renders a
  component by handing the sub-object straight to the element that claims its
  `type`, with no translation step and no second code path.
- **`additionalProperties: false` everywhere**, so a typo in a payload builder
  is a validation error rather than a silently blank picture.
- The `Viz` suffix is deliberate. A `SmallMoleculeComponentViz` is a lossy
  visualization projection, not a `SmallMoleculeComponent`, and the suffix stops
  anyone expecting a round trip.

## Versioning

**The version is in `$id` and not in the payload.** Every consumer ships the
reader and the writer together in one artifact - the generated HTML inlines the
exact bundle that reads it, and the notebook widget bundles its own - so there
is no case where the two can be at different versions.

Adding an optional `schema_version` later is additive and non-breaking, so this
is a decision that can be revisited without a migration.

All eleven types are declared even though only three are drawn so far. That
costs nothing and means adding a view is an additive change, not a breaking one.

## Types

| `type` | Carries | View |
|---|---|---|
| `SmallMoleculeComponentViz` | `sdf`, `smiles`, `total_charge` | yes |
| `ProteinComponentViz` | `pdb` | yes |
| `SolvatedPDBComponentViz` | `pdb`, with explicit solvent | no view yet |
| `ProteinMembraneComponentViz` | `pdb`, protein and membrane | no view yet |
| `SolventComponentViz` | solvent settings, flat | no view yet |
| `UnknownComponentViz` | the gufe class name, nothing else | yes, as a panel |
| `LigandAtomMappingViz` | two SDFs plus the index map | no view yet |
| `LigandNetworkViz` | ligand nodes (SDF) plus mapping edges | yes |
| `ChemicalSystemViz` | components keyed by label | no view yet |
| `TransformationViz` | stateA / stateB plus mappings | no view yet |
| `AlchemicalNetworkViz` | systems and transformations, summarized | no view yet |

A type with no view yet is not an error: it renders the "sorry, there is no
visualization for X yet" panel, which is exactly what a build should do when
handed a payload it does not draw.

`UnknownComponentViz` is the same idea one level down, for a gufe `Component`
subclass this build has never heard of. gufe supports custom components, so
meeting one is an expected outcome. It covers an *unrecognized type* only - a
recognized component whose serializer fails is a bug, and raises in Python
rather than arriving here in disguise.

## What the schema deliberately does not check

Two things, both tested elsewhere because JSON Schema cannot express them:

- **Chemical validity.** A truncated SDF is schema-valid. The view degrades to
  an error panel; the contract does not parse chemistry.
- **Referential integrity.** A `LigandNetworkEdgeViz` whose `source` names no
  node in the same payload is schema-valid. A Python test covers it, and the
  view drops the edge with a banner.

Both are pinned as `expect: "valid"` rows in `mutations.json`, so that they stay
deliberate choices rather than becoming gaps nobody noticed.

## mutations.json

The mutation matrix, declared once as data and applied by both test suites -
pytest with `jsonschema`, vitest with Ajv, against this same file. Each row
takes a valid payload from `examples/`, applies one JSON-Pointer operation, and
states whether the result must be rejected or accepted.

If you change this file, add the row that proves the change does what you meant.

