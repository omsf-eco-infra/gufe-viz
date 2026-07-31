"""The payload builders, and the parity between the registry, the schema and the
TypeScript dispatch table.

These are the descendants of the two tests on the gufe framejs branch that were
worth carrying over (PLAN §4.3): every builder emits exactly one valid kind, and
the drawing side covers exactly the kinds the serializing side can emit.
"""

from __future__ import annotations

import json
import re

import pytest
from gufe_viz import NoVisualization, payload_dict_for, payload_for
from gufe_viz.payloads import PAYLOAD_REGISTRY, _registry_lookup
from gufe_viz.schema import PAYLOAD_KINDS, SCHEMA_VERSION, Payload

from .conftest import REPO


def _emitted_kinds() -> dict[str, str]:
    """Registry key -> the `kind` its builder emits, read off the return type.

    `payloads.py` uses postponed annotations, so the return annotation is a
    string until `get_type_hints` resolves it.
    """
    import typing

    return {
        name: typing.get_type_hints(builder)["return"].model_fields["kind"].default
        for name, builder in PAYLOAD_REGISTRY.items()
    }


def _validate(payload_dict: dict):
    from pydantic import TypeAdapter

    return TypeAdapter(Payload).validate_python(payload_dict)


class TestRegistry:
    def test_every_registered_builder_emits_a_declared_kind(self):
        """A builder that emits an undeclared kind would validate nowhere."""
        # Every registry key names a gufe class; every builder returns a model
        # whose `kind` literal must be in PAYLOAD_KINDS. Read the literal off the
        # model rather than calling the builder — building an AlchemicalNetwork
        # needs a Protocol, and this is a statement about the types.
        for name, kind in _emitted_kinds().items():
            assert kind in PAYLOAD_KINDS, f"{name} emits undeclared kind {kind!r}"

    def test_registry_covers_every_declared_kind(self):
        """The schema and the registry describe the same set of things.

        `TransformationBase` is registered rather than `Transformation` because
        `Transformation` and `NonTransformation` are siblings, not parent and
        child — so the emitted kinds, not the registry keys, are what must match.
        """
        assert set(_emitted_kinds().values()) == set(PAYLOAD_KINDS)

    def test_kinds_match_the_generated_schema(self, schema):
        """PAYLOAD_KINDS, the union, and the emitted schema cannot disagree."""
        assert set(schema["discriminator"]["mapping"]) == set(PAYLOAD_KINDS)

    def test_typescript_draws_a_subset_of_what_python_emits(self, schema):
        """Every `kind` the TS dispatch table claims must exist in the schema.

        The reverse is deliberately *not* required: a kind with no view yet
        renders the "no visualization for X yet" panel, which is what a V1 build
        should do when handed a Phase-4 payload.
        """
        source = (REPO / "ts" / "src" / "gufe-view.ts").read_text(encoding="utf-8")
        table = re.search(r"VIEW_TAGS[^=]*=\s*\{(.*?)\}", source, re.S)
        assert table, "could not find VIEW_TAGS in ts/src/gufe-view.ts"

        ts_kinds = set(re.findall(r"^\s*(\w+):", table.group(1), re.M))
        assert ts_kinds, "VIEW_TAGS parsed as empty — has its shape changed?"
        assert ts_kinds <= set(PAYLOAD_KINDS), f"TypeScript draws undeclared kinds: {ts_kinds - set(PAYLOAD_KINDS)}"

    def test_mro_walk_finds_a_parents_builder(self):
        """Subclasses inherit a builder — what `SolvatedPDBComponent` relies on."""

        class Base:
            pass

        class Child(Base):
            pass

        assert _registry_lookup(Child(), {"Base": "hit"}) == "hit"
        assert _registry_lookup(Child(), {"Unrelated": "hit"}) is None

    def test_unregistered_object_raises_a_typed_error(self):
        with pytest.raises(NoVisualization) as exc:
            payload_for(object())
        assert "object" in str(exc.value)
        # The message lists what *can* be visualized — the Python-side
        # counterpart of the browser's graceful panel.
        assert "SmallMoleculeComponent" in str(exc.value)


class TestGoldenPayloads:
    """Every committed example is a real, valid payload."""

    def test_validates_against_the_pydantic_models(self, example):
        name, payload = example
        model = _validate(payload)
        assert model.kind == payload["kind"], name

    def test_validates_against_the_generated_schema(self, example, schema):
        """The emitted artifact, not just the models it came from."""
        import jsonschema

        name, payload = example
        jsonschema.validate(payload, schema)  # raises with a useful path on failure
        assert payload["schema_version"] == SCHEMA_VERSION, name

    def test_is_json_round_trippable(self, example):
        name, payload = example
        assert json.loads(json.dumps(payload)) == payload, name

    def test_carries_an_empty_extra_slot(self, example):
        """V1 leaves `extra` empty (PLAN Q5, David's read: "you can add it later")."""
        name, payload = example
        assert payload.get("extra") == {}, name


class TestBuilders:
    """Two variants per V1 kind, built from live gufe objects (R10)."""

    def test_small_molecule_neutral_and_charged(self):
        gufe = pytest.importorskip("gufe")
        from rdkit import Chem
        from rdkit.Chem import AllChem

        def component(smiles: str, name: str):
            mol = Chem.AddHs(Chem.MolFromSmiles(smiles))
            AllChem.EmbedMolecule(mol, randomSeed=0xF00D)
            mol.SetProp("_Name", name)
            return gufe.SmallMoleculeComponent.from_rdkit(mol)

        neutral = payload_dict_for(component("CCO", "ethanol"))
        charged = payload_dict_for(component("CC(=O)[O-]", "acetate"))

        assert neutral["data"]["total_charge"] == 0
        assert charged["data"]["total_charge"] == -1
        for payload in (neutral, charged):
            assert payload["kind"] == "SmallMoleculeComponent"
            assert payload["data"]["sdf"].strip()
            _validate(payload)

    def test_protein_whole_and_fragment(self):
        """The two committed protein variants differ in size and composition."""
        from .conftest import read_example

        whole = read_example("protein.json")
        fragment = read_example("protein_fragment.json")

        assert len(whole["data"]["pdb"]) > len(fragment["data"]["pdb"])
        for payload in (whole, fragment):
            assert payload["kind"] == "ProteinComponent"
            assert "ATOM  " in payload["data"]["pdb"]
            _validate(payload)

    def test_solvent_carries_its_settings(self):
        gufe = pytest.importorskip("gufe")

        payload = payload_dict_for(gufe.SolventComponent())
        assert payload["kind"] == "SolventComponent"
        assert payload["data"]["smiles"] == "O"
        assert payload["data"]["positive_ion"] == "Na+"
        # An openff Quantity is stringified rather than pushed through gufe's
        # `:custom:` codec — a viz only ever displays it.
        assert "molar" in payload["data"]["ion_concentration"]
        _validate(payload)

    def test_mapping_carries_both_endpoints_and_the_index_map(self):
        from .conftest import read_example

        payload = read_example("ligand_atom_mapping.json")
        data = payload["data"]
        assert data["molA_sdf"].strip() and data["molB_sdf"].strip()
        # JSON object keys are strings, so the A-side indices are stringified.
        assert all(k.isdigit() for k in data["componentA_to_componentB"])
        assert all(isinstance(v, int) for v in data["componentA_to_componentB"].values())
        _validate(payload)

    def test_ligand_network_carries_ligands_once_and_topology_flat(self):
        """Nodes hold the structures, edges hold ids — never gufe's GraphML.

        The GraphML embeds a gufe ``to_json`` moldict per node, so forwarding it
        would put a ``.npy`` conformer decoder in TypeScript (R8). These are the
        assertions that keep it out.
        """
        from .conftest import read_example

        for name in ("ligand_network.json", "ligand_network_named.json"):
            payload = read_example(name)
            data = payload["data"]
            assert payload["kind"] == "LigandNetwork", name
            assert "graphml" not in data, name
            assert len(data["nodes"]) == 3, name
            assert len(data["edges"]) == 3, name

            ids = {node["id"] for node in data["nodes"]}
            assert len(ids) == 3, f"{name}: node ids are not unique"
            for node in data["nodes"]:
                assert node["sdf"].strip(), name
                assert "$$$$" in node["sdf"], f"{name}: {node['id']} is not a complete SDF record"
            for edge in data["edges"]:
                # Every endpoint must name a node: the view can survive a
                # dangling edge, but a builder must never emit one.
                assert edge["source"] in ids, name
                assert edge["target"] in ids, name
                assert all(k.isdigit() for k in edge["componentA_to_componentB"]), name
            _validate(payload)

    def test_ligand_network_named_variant_differs_only_in_names(self):
        """The pair is a variant of the same network, not a different one."""
        from .conftest import read_example

        unnamed = read_example("ligand_network.json")["data"]
        named = read_example("ligand_network_named.json")["data"]

        assert [n["name"] for n in unnamed["nodes"]] == ["", "", ""]
        assert [n["name"] for n in named["nodes"]] == [n["smiles"] for n in named["nodes"]]
        assert sorted(e["score"] for e in unnamed["edges"]) == sorted(e["score"] for e in named["edges"])

    def test_a_score_annotation_becomes_the_edge_score(self):
        """`score` is the one annotation key the edge colouring reads."""
        from gufe_viz.payloads import _mapping_score

        assert _mapping_score({"score": 0.0}) == 0.0
        assert _mapping_score({"score": 1}) == 1.0
        assert _mapping_score({}) is None
        assert _mapping_score({"score": "high"}) is None
        # `isinstance(True, int)` is true, and a colour ramp over `True` is not
        # a thing — so booleans are excluded deliberately.
        assert _mapping_score({"score": True}) is None

    def test_chemical_system_describes_each_component(self):
        from .conftest import read_example

        payload = read_example("chemical_system.json")
        components = {c["label"]: c for c in payload["data"]["components"]}
        assert set(components) == {"ligand", "solvent"}
        # A ligand carries structure; a solvent carries settings. Exactly one of
        # the two shapes is populated per component.
        assert components["ligand"]["sdf"]
        assert components["ligand"]["pdb"] is None
        assert components["solvent"]["sdf"] is None
        assert components["solvent"]["ion_concentration"]
        _validate(payload)

    def test_a_component_that_cannot_serialize_becomes_an_error_field(self):
        """One bad component must not take down the whole view."""
        from gufe_viz.payloads import _component_descriptor

        class Exploding:
            name = "boom"

            def to_sdf(self):
                raise RuntimeError("no conformer")

        descriptor = _component_descriptor("ligand", Exploding())
        assert descriptor.error is not None
        assert "no conformer" in descriptor.error
        assert descriptor.sdf is None
