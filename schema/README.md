# The contract

`gufe-viz.schema.json` **is the gate between Python and TypeScript.** Nothing
reaches the browser except data that validates against it.

Python builds a payload and validates it here; TypeScript validates
the same payload against the same file before it draws anything. Neither side
gets to assume the other's shape.

## Hand-written - edit this file directly

```
schema/gufe-viz.schema.json   <- this file. The source of truth.
        |                     Nothing generates it.
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

Two rules describe the whole document.

**1. One schema object per gufe class.** Every `$def` named `*Viz` is the
visualization form of exactly one `GufeTokenizable`, it carries that object's
`gufe-key`, and there is no second summary-only or reference-only variant of it
anywhere. A payload is its `type`, its `gufe-key` and its own fields, flat:

```jsonc
{
  "type": "SmallMoleculeComponentViz",              // the closed discriminator
  "gufe-key": "SmallMoleculeComponent-ec3c7a92...", // the identity
  "name": "ligand_23",
  "sdf": "...",
  "smiles": "CCO",
  "total_charge": 0
}
```

**2. References are gufe keys, and the objects live in a registry.** Anything
that points at another gufe object points at it by key; the objects themselves
are carried once, on the root payload:

```jsonc
{
  "type": "ChemicalSystemViz",
  "gufe-key": "ChemicalSystem-b51f409f...",
  "name": "benzene in water",
  "components": {                         // keyed by the ChemicalSystem label
    "ligand":  "SmallMoleculeComponent-ec3c7a92...",
    "solvent": "SolventComponent-26b4034a..."
  },
  "registry": [
    { "type": "SmallMoleculeComponentViz", "gufe-key": "SmallMoleculeComponent-ec3c7a92...", "sdf": "...", ... },
    { "type": "SolventComponentViz",       "gufe-key": "SolventComponent-26b4034a...",       "smiles": "O", ... }
  ]
}
```

A ligand network is the same idea with the redundancy that motivates it: the
ligands are in the registry, the `nodes` are keys into it, and each edge is a
whole `LigandAtomMappingViz` naming two of those keys, so a forty-ligand network
carries each SDF once instead of once per mapping that touches it.

```jsonc
{
  "type": "LigandNetworkViz",
  "gufe-key": "LigandNetwork-65a3804a...",
  "name": "",
  "registry": [ { "type": "SmallMoleculeComponentViz", ... }, ... ],
  "nodes": ["SmallMoleculeComponent-389104dc...", "SmallMoleculeComponent-b86eb5de..."],
  "edges": [
    {
      "type": "LigandAtomMappingViz",
      "gufe-key": "LigandAtomMapping-99bf6f23...",
      "componentA": "SmallMoleculeComponent-389104dc...",
      "componentB": "SmallMoleculeComponent-b86eb5de...",
      "componentA_to_componentB": [{ "index_A": 0, "index_B": 0 }, { "index_A": 1, "index_B": 1 }],
      "score": 0.0,
      "annotations": { "score": 0.0 }
    }
  ]
}
```

An alchemical network is the same shape one level up. What repeats there is not
the nodes and edges but what they are made of - in practice all systems share a
protein and all transformations share a protocol - so those are the registry
entries, and a node is a whole `ChemicalSystemViz` whose components are keys.

- **A key always resolves to a whole object.** There is no name-only stub in the
  contract, which is what makes drilling in possible: opening a ligand-network
  node gives you the SDF, opening an alchemical node gives you the protein's PDB.
- **`registry` is carried by the root payload.** `ChemicalSystemViz`,
  `LigandAtomMappingViz` and `TransformationViz` declare it optional - present
  when they are the payload, absent when the enclosing payload already holds
  what they refer to. The two network types always carry one.
- **`type` is closed and explicit.** A view that draws chemical systems refuses
  anything else by name; it does not guess from which keys happen to be present.
- **One `$def` per component type**, combined into the `ComponentViz` union with
  `oneOf`. This is what makes "a registry entry is a payload" true by
  construction rather than by convention: a view renders a component by handing
  the resolved entry straight to the element that claims its `type`, with no
  translation step and no second code path.
- **`additionalProperties: false` everywhere**, so a typo in a payload builder
  is a validation error rather than a silently blank picture.
- The `Viz` suffix is deliberate. A `SmallMoleculeComponentViz` is a lossy
  visualization projection, not a `SmallMoleculeComponent`, and the suffix stops
  anyone expecting a round trip.

### Why deduplicate at all

Because the payload is a single-shot dump. With a server behind it we would add
an endpoint and fetch the protein when someone opened a node; here the whole
object graph is written once into a file or a notebook cell, so the choice is
between carrying a shared protein forty times and carrying it once with forty
keys pointing at it. The registry is that second option, and it costs one map
lookup on the TypeScript side (`ts/src/schema/registry.ts`).

## Versioning

**The version is in `$id` and not in the payload.** Every consumer ships the
reader and the writer together in one artifact - the generated HTML inlines the
exact bundle that reads it, and the notebook widget bundles its own - so there
is no case where the two can be at different versions.

Adding an optional `schema_version` later is additive and non-breaking, so this
is a decision that can be revisited without a migration.

All twelve types are declared even though only three are drawn so far. That
costs nothing and means adding a view is an additive change, not a breaking one.

## Types

One row per gufe class, and one gufe class per row.

| `type` | gufe class | Carries | View |
|---|---|---|---|
| `SmallMoleculeComponentViz` | `SmallMoleculeComponent` | `sdf`, `smiles`, `total_charge` | yes |
| `ProteinComponentViz` | `ProteinComponent` | `pdb` | yes |
| `SolvatedPDBComponentViz` | `SolvatedPDBComponent` | `pdb`, with explicit solvent | no view yet |
| `ProteinMembraneComponentViz` | `ProteinMembraneComponent` | `pdb`, protein and membrane | no view yet |
| `SolventComponentViz` | `SolventComponent` | solvent settings, flat | no view yet |
| `UnknownComponentViz` | any unrecognized `Component` | the gufe class name, nothing else | yes, as a panel |
| `ProtocolViz` | `Protocol` | the protocol's class name | no view yet |
| `LigandAtomMappingViz` | `LigandAtomMapping` | two component keys, the index pairs, the score | no view yet |
| `LigandNetworkViz` | `LigandNetwork` | a registry of ligands, node keys, mapping edges | yes |
| `ChemicalSystemViz` | `ChemicalSystem` | labels mapped to component keys | no view yet |
| `TransformationViz` | `Transformation`, `NonTransformation` | two system keys, a protocol key, mappings | no view yet |
| `AlchemicalNetworkViz` | `AlchemicalNetwork` | a registry, node keys, transformation edges | no view yet |

A type with no view yet is not an error: it renders the "sorry, there is no
visualization for X yet" panel, which is exactly what a build should do when
handed a payload it does not draw.

`UnknownComponentViz` is the same idea one level down, for a gufe `Component`
subclass this build has never heard of. gufe supports custom components, so
meeting one is an expected outcome. It covers an *unrecognized type* only - a
recognized component whose serializer fails is a bug, and raises in Python
rather than arriving here in disguise.

## What the schema deliberately does not check

Three things, all tested elsewhere because JSON Schema cannot express them:

- **Chemical validity.** A truncated SDF is schema-valid. The view degrades to
  an error panel; the contract does not parse chemistry.
- **Referential integrity.** A key that names no registry entry - an edge's
  `componentA`, a node, a `protocol` - is schema-valid. Python tests hold the
  builders to never emitting one, and the views drop what they cannot resolve
  with a banner.
- **Registry uniqueness.** "Entries are unique by `gufe-key`" is not something
  JSON Schema can say about an array. The Python `Registry` makes it true by
  construction and a test asserts it on the committed fixtures.
- **The type of what a key resolves to.** `componentA` is a
  `SmallMoleculeComponentKey` and `stateA` a `ChemicalSystemKey`, but at
  validation time both are just non-empty strings: "this string is the
  `gufe-key` of an entry in that array, and that entry has this type" is a join
  across two parts of the document, and JSON Schema has no such construct. This
  is the other side of referential integrity, and it is what the inlined
  `molA_sdf` used to guarantee structurally. The named key types put the
  referent in the contract's vocabulary and in the generated TypeScript; the
  check itself is a Python test (`test_mapping_carries_both_endpoints_by_key`)
  and, in the browser, `lookupOfType`, which returns undefined and lets the view
  degrade rather than drawing the wrong thing.

  A pattern on the key's class-name prefix looks like it would close this, and
  does not: dispatch is `isinstance`-based, so a `SmallMoleculeComponent`
  subclass yields a `SmallMoleculeComponentViz` whose key reads
  `MySmallMolecule-...`. Constraining the prefix would refuse a legitimate
  payload, for the same reason `GufeKey` itself only checks non-emptiness.

Both are pinned as `expect: "valid"` rows in `mutations.json`, so that they stay
deliberate choices rather than becoming gaps nobody noticed.

## mutations.json

The mutation matrix, declared once as data and applied by both test suites -
pytest with `jsonschema`, vitest with Ajv, against this same file. Each row
takes a valid payload from `examples/`, applies one JSON-Pointer operation, and
states whether the result must be rejected or accepted.

If you change this file, add the row that proves the change does what you meant.

