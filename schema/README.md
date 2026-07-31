# The contract

`gufe-viz.schema.json` **is the gate between Python and TypeScript.** Nothing
reaches the browser except data that validates against it.

If you are reading this a year from now wondering where the boundary is: it is
this file. Python builds a payload and validates it here; TypeScript validates
the same payload against the same file before it draws anything. Neither side
gets to assume the other's shape.

## What crosses

SDF, PDB, and flat plain JSON. That is the whole list.

**gufe's own `to_json` never crosses.** Deduplicated key-chains, `:custom:`
codecs, the `to_dict`/`to_json` divergence — all of that stays in Python, where
the people who know its history can answer questions about it. The alternative
was a lot of TypeScript that has to track gufe's serialization forever, which is
the thing this design exists to avoid.

GraphML was on that list and is not any more. `LigandNetwork.to_graphml()` is a
graph whose *node payloads are gufe `to_json` moldicts*, so forwarding it does
not avoid the problem — it hides it, and the browser still ends up decoding
atomic numbers, bond tuples and a base-1-per-char `.npy` conformer blob. (The
gufe framejs prototype did exactly that, Jacobi eigensolver and all.) A
`LigandNetwork` payload is ligands-as-SDF plus flat topology instead.

When the input is a saved gufe `.json`, Python deserializes it into live gufe
objects first, then builds the payload from those.

## Generated — do not edit

```
python/gufe_viz/schema.py     ← the source of truth (Pydantic)
        │  pixi run schema
        ▼
schema/gufe-viz.schema.json   ← this file
        │  pixi run types
        ▼
ts/src/schema/types.ts        ← TypeScript types + Ajv validator input
```

Change the Pydantic models, run both tasks, commit all three. CI's
`check-generated` job rebuilds them and fails on any difference, so a
hand-edit here is caught rather than quietly winning.

## The envelope

```jsonc
{
  "schema_version": "1.0",              // major bump = breaking change
  "kind": "SmallMoleculeComponent",     // the closed discriminator
  "name": "ligand_23",
  "data": { "sdf": "…", "smiles": "CCO", "total_charge": 0 },
  "extra": {}                           // reserved; V1 views ignore it
}
```

- **`kind`** is closed and explicit. A view that draws chemical systems refuses
  anything else by name; it does not guess from which keys happen to be present.
- **`data`** is per-kind, modelled as a discriminated union.
- **`extra`** is the *only* place additional properties are allowed. It is the
  slot for the full gufe JSON, per-atom annotations, formal charge on hover —
  anything that can be added later without a schema break.
- Everything else forbids unknown keys, so a typo in a payload builder is a
  validation error rather than a blank picture.

## Versioning

The **major** is the compatibility promise. A TypeScript build refuses a payload
whose major it does not recognise — "this file was written by a newer gufe-viz"
— rather than rendering it wrongly. Minors are additive: a new `kind`, a new
optional field. Old payloads keep validating.

All eight kinds are declared even though only three are drawn so far. That
costs nothing and means adding a view is a minor bump, not a major one.

## Kinds

| `kind` | `data` | View |
|---|---|---|
| `SmallMoleculeComponent` | `sdf`, `smiles`, `total_charge` | ✅ |
| `ProteinComponent` | `pdb` | ✅ |
| `SolventComponent` | solvent settings | Phase 4 |
| `LigandAtomMapping` | two SDFs + the index map | Phase 4 |
| `LigandNetwork` | ligand nodes (SDF) + mapping edges | ✅ |
| `ChemicalSystem` | labelled component descriptors | Phase 4 |
| `Transformation` | stateA / stateB + mappings | Phase 4 |
| `AlchemicalNetwork` | nodes and edges | Phase 5 |

A kind with no view yet is not an error: it renders the "sorry, there is no
visualization for X yet" panel, which is exactly what a V1 build should do when
handed a payload from a later one.
