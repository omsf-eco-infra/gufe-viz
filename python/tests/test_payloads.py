"""The payload builders, and the parity between Python, the schema and the
TypeScript dispatch table.

Every builder emits exactly one valid type, and the drawing
side covers exactly the types the serializing side can emit.
"""

from __future__ import annotations

import json
import re

import pytest
from gufe_viz import payload_for
from gufe_viz.components import component_payload

from .conftest import REPO, SCHEMA_PATH


def _validate(payload: dict) -> None:
    """Assert a payload satisfies the schema.

    The same file the vitest suite validates against.
    """
    import jsonschema

    jsonschema.validate(payload, json.loads(SCHEMA_PATH.read_text(encoding="utf-8")))


def _declared_types(schema: dict) -> set[str]:
    """Every ``type`` const the schema declares, read from ``$defs``.

    Derived rather than listed, so this cannot fall behind the contract. It is
    the Python counterpart of what ``scripts/gen_types.mjs`` does for the
    TypeScript side.
    """
    return {
        definition["properties"]["type"]["const"]
        for definition in schema["$defs"].values()
        if "properties" in definition and "type" in definition.get("properties", {})
    }


class TestContractParity:
    def test_the_top_level_union_lists_every_payload_type(self, schema):
        """A type declared but absent from the root ``oneOf`` validates nowhere.

        Both directions matter, so this is an equality rather than a subset: a
        ref in the union that names no ``$def`` is a broken pointer, and a
        declared type missing from the union is a payload Python can build and
        neither validator will accept.
        """
        in_union = {ref["$ref"].removeprefix("#/$defs/") for ref in schema["oneOf"]}
        assert in_union <= set(schema["$defs"]), f"union refs nothing declares: {in_union - set(schema['$defs'])}"
        assert in_union == _declared_types(schema)

    def test_every_def_is_named_for_the_type_it_declares(self, schema):
        """``$def`` name == ``type`` const, which is what lets both validators
        find the right branch by name instead of via a lookup table."""
        for name, definition in schema["$defs"].items():
            const = definition.get("properties", {}).get("type", {}).get("const")
            if const is not None:
                assert const == name, f"$defs/{name} declares type {const!r}"

    def test_every_declared_type_is_actually_built_and_valid(self, schema, every_payload_type):
        """No declared type is a shape nothing produces.

        A schema can declare a type that no builder emits and no test covers,
        and it will pass every other check in this suite for as long as it goes
        unnoticed. This builds one payload of *every* declared type from live
        gufe objects and validates each, so the schema cannot describe fiction.
        """
        assert set(every_payload_type) == _declared_types(schema)
        for declared, payload in every_payload_type.items():
            assert payload["type"] == declared
            _validate(payload)

    def test_typescript_draws_a_subset_of_what_the_schema_declares(self, schema):
        """Every `type` the TS dispatch table claims must exist in the schema.

        The reverse is deliberately *not* required: a type with no view yet
        renders the "no visualization for X yet" panel, which is what a build
        should do when handed a payload whose view has not been written.
        """
        source = (REPO / "ts" / "src" / "gufe-view.ts").read_text(encoding="utf-8")
        table = re.search(r"VIEW_TAGS[^=]*=\s*\{(.*?)\}", source, re.S)
        assert table, "could not find VIEW_TAGS in ts/src/gufe-view.ts"

        ts_types = set(re.findall(r"^\s*(\w+):", table.group(1), re.M))
        assert ts_types, "VIEW_TAGS parsed as empty - has its shape changed?"
        undeclared = ts_types - _declared_types(schema)
        assert not undeclared, f"TypeScript draws undeclared types: {undeclared}"


class TestGoldenPayloads:
    """Every committed example is a real, valid payload."""

    def test_validates_against_the_schema(self, example, schema):
        """The same file, and the same fixtures, that the vitest suite reads."""
        import jsonschema

        name, payload = example
        jsonschema.validate(payload, schema)  # raises with a useful path on failure
        assert isinstance(payload["type"], str), name

    def test_contains_only_values_the_browser_can_parse(self, example):
        """No NaN or Infinity anywhere in the payload.

        Python's ``json`` emits these as bare ``NaN`` / ``Infinity`` tokens,
        which are not JSON and which ``JSON.parse`` rejects outright - so a
        fixture carrying one produces a page that fails at its first line. A
        null score is representable; a NaN score is not.
        """
        name, payload = example
        json.dumps(payload, allow_nan=False)  # raises ValueError if any are present
        assert isinstance(name, str)


class TestDispatch:
    def test_dispatch_order_matches_the_gufe_class_hierarchy(self):
        """Most-derived first, checked against gufe rather than asserted by hand.

        The PDB types are a three-deep chain - ProteinMembraneComponent ->
        SolvatedPDBComponent -> ProteinComponent - and a table in the wrong
        order silently serializes a membrane system as a plain protein. The
        schema cannot catch that, because the two shapes are identical and only
        the discriminator differs, so it has to be caught here.

        Derived from the live class hierarchy so that a future gufe inserting a
        new subclass fails this rather than passing quietly.
        """
        from gufe_viz.components import COMPONENT_BUILDERS

        classes = [klass for klass, _ in COMPONENT_BUILDERS]
        for later, klass in enumerate(classes):
            for earlier in classes[later + 1 :]:
                assert not issubclass(earlier, klass), (
                    f"{earlier.__name__} is a subclass of {klass.__name__} but is listed after it, "
                    f"so it would be serialized as a {klass.__name__}"
                )

    def test_each_pdb_subclass_gets_its_own_discriminator(self):
        """The consequence of the ordering above, on real objects.

        Both of these are ProteinComponents. If the table were reordered they
        would still validate, still render, and still be wrong.
        """
        from .conftest import read_example

        assert read_example("solvated_pdb.json")["type"] == "SolvatedPDBComponentViz"
        assert read_example("protein_membrane.json")["type"] == "ProteinMembraneComponentViz"

    def test_a_non_gufe_object_raises(self):
        with pytest.raises(TypeError) as exc:
            payload_for(object())
        assert "object" in str(exc.value)

    def test_an_unrecognized_component_degrades_instead_of_raising(self):
        """gufe supports custom Component subclasses; meeting one is not an error.

        Raising here would stop the process - in a notebook widget that leaves
        the frontend disconnected from the backend state.
        """
        import gufe

        class SomebodysOwnComponent(gufe.Component):
            def __init__(self):
                super().__init__()

            @property
            def name(self):
                return "custom"

            def _to_dict(self):
                return {}

            @classmethod
            def _from_dict(cls, d):
                return cls()

            @classmethod
            def _defaults(cls):
                return {}

            @property
            def total_charge(self):
                return 0

        payload = component_payload(SomebodysOwnComponent())
        assert payload["type"] == "UnknownComponentViz"
        assert payload["gufe_type"] == "SomebodysOwnComponent"
        _validate(payload)

    def test_a_recognized_component_that_fails_to_serialize_raises(self):
        """The middle case of the three-way rule, and the one worth pinning.

        A ``SmallMoleculeComponent`` whose ``to_sdf()`` blows up is a real bug.
        Filing it under "sorry, I cannot draw this" would make it undiagnosable,
        so it is left to raise while an *unrecognized* type still degrades.
        """
        import gufe

        class BrokenMolecule(gufe.SmallMoleculeComponent):
            def to_sdf(self):
                raise RuntimeError("no conformer")

        broken = BrokenMolecule.__new__(BrokenMolecule)
        with pytest.raises(RuntimeError, match="no conformer"):
            component_payload(broken)


class TestBuilders:
    """Builders exercised against live gufe objects, two variants where it matters."""

    def test_small_molecule_neutral_and_charged(self):
        import gufe
        from rdkit import Chem
        from rdkit.Chem import AllChem

        def component(smiles: str, name: str):
            mol = Chem.AddHs(Chem.MolFromSmiles(smiles))
            AllChem.EmbedMolecule(mol, randomSeed=0xF00D)
            mol.SetProp("_Name", name)
            return gufe.SmallMoleculeComponent.from_rdkit(mol)

        neutral = payload_for(component("CCO", "ethanol"))
        charged = payload_for(component("CC(=O)[O-]", "acetate"))

        assert neutral["total_charge"] == 0
        assert charged["total_charge"] == -1
        for payload in (neutral, charged):
            assert payload["type"] == "SmallMoleculeComponentViz"
            assert payload["sdf"].strip()
            _validate(payload)

    def test_protein_whole_and_fragment(self):
        """The two committed protein variants differ in size and composition."""
        from .conftest import read_example

        whole = read_example("protein.json")
        fragment = read_example("protein_fragment.json")

        assert len(whole["pdb"]) > len(fragment["pdb"])
        for payload in (whole, fragment):
            assert payload["type"] == "ProteinComponentViz"
            assert "ATOM  " in payload["pdb"]
            _validate(payload)

    def test_solvent_carries_its_settings(self):
        import gufe

        payload = payload_for(gufe.SolventComponent())
        assert payload["type"] == "SolventComponentViz"
        assert payload["smiles"] == "O"
        assert payload["positive_ion"] == "Na+"
        # An openff Quantity is stringified rather than pushed through gufe's
        # `:custom:` codec - a visualization only ever displays it.
        assert "molar" in payload["ion_concentration"]
        _validate(payload)

    def test_mapping_carries_both_endpoints_and_the_index_map(self):
        from .conftest import read_example

        payload = read_example("ligand_atom_mapping.json")
        assert payload["molA_sdf"].strip() and payload["molB_sdf"].strip()
        # JSON object keys are strings, so the A-side indices are stringified.
        assert all(k.isdigit() for k in payload["componentA_to_componentB"])
        assert all(isinstance(v, int) for v in payload["componentA_to_componentB"].values())
        _validate(payload)

    def test_ligand_network_carries_ligands_once_and_topology_flat(self):
        """Nodes hold the structures, edges hold ids - never gufe's GraphML.

        The GraphML embeds a gufe ``to_json`` moldict per node, so forwarding it
        would put a ``.npy`` conformer decoder in TypeScript. These are the
        assertions that keep it out.
        """
        from .conftest import read_example

        for name in ("ligand_network.json", "ligand_network_named.json"):
            payload = read_example(name)
            assert payload["type"] == "LigandNetworkViz", name
            assert "graphml" not in payload, name
            assert len(payload["nodes"]) == 3, name
            assert len(payload["edges"]) == 3, name

            ids = {node["id"] for node in payload["nodes"]}
            assert len(ids) == 3, f"{name}: node ids are not unique"
            for node in payload["nodes"]:
                assert node["sdf"].strip(), name
                assert "$$$$" in node["sdf"], f"{name}: {node['id']} is not a complete SDF record"
            for edge in payload["edges"]:
                # Every endpoint must name a node. The view can survive a
                # dangling edge, but a builder must never emit one - and JSON
                # Schema cannot say so, which is why this is a test.
                assert edge["source"] in ids, name
                assert edge["target"] in ids, name
                assert all(k.isdigit() for k in edge["componentA_to_componentB"]), name
            _validate(payload)

    def test_ligand_network_named_variant_differs_only_in_names(self):
        """The pair is a variant of the same network, not a different one."""
        from .conftest import read_example

        unnamed = read_example("ligand_network.json")
        named = read_example("ligand_network_named.json")

        assert [n["name"] for n in unnamed["nodes"]] == ["", "", ""]
        assert [n["name"] for n in named["nodes"]] == [n["smiles"] for n in named["nodes"]]
        assert sorted(e["score"] for e in unnamed["edges"]) == sorted(e["score"] for e in named["edges"])

    def test_a_score_annotation_becomes_the_edge_score(self):
        """`score` is the one annotation key the edge colouring reads."""
        from gufe_viz.networks import mapping_score

        assert mapping_score({"score": 0.0}) == 0.0
        assert mapping_score({"score": 1}) == 1.0
        assert mapping_score({}) is None
        assert mapping_score({"score": "high"}) is None
        # `isinstance(True, int)` is true, and a colour ramp over `True` is not
        # a thing - so booleans are excluded deliberately.
        assert mapping_score({"score": True}) is None

    def test_chemical_system_keys_components_by_label(self):
        from .conftest import read_example

        payload = read_example("chemical_system.json")
        components = payload["components"]
        assert set(components) == {"ligand", "solvent"}

        # Each component carries its own type's fields and *only* those. The
        # keys another type would use are absent rather than present-and-null,
        # which is what lets the schema forbid them instead of merely tolerating
        # them - see the exclusivity mutations in schema/mutations.json.
        assert components["ligand"]["type"] == "SmallMoleculeComponentViz"
        assert components["ligand"]["sdf"]
        assert "pdb" not in components["ligand"]
        assert "neutralize" not in components["ligand"]

        assert components["solvent"]["type"] == "SolventComponentViz"
        assert components["solvent"]["ion_concentration"]
        assert "sdf" not in components["solvent"]
        assert "pdb" not in components["solvent"]
        _validate(payload)

    def test_transformation_states_are_whole_chemical_systems(self, every_payload_type):
        """A transformation's two states are complete ChemicalSystemViz objects.

        The alternative - a bespoke sub-shape for "a system inside a
        transformation" - is what would make the chemical-system view unusable
        for drawing either half of a diff.
        """
        payload = every_payload_type["TransformationViz"]
        assert payload["protocol"] == "DummyProtocol"
        for state in (payload["stateA"], payload["stateB"]):
            assert state["type"] == "ChemicalSystemViz"
            _validate(state)

    def test_alchemical_network_edges_reference_nodes_that_exist(self, every_payload_type):
        """Referential integrity, which JSON Schema cannot express.

        The same rule the ligand network is held to, one level up: an edge
        naming a system that is not in ``nodes`` is a graph the view cannot
        draw, and only a test can catch it.
        """
        network = every_payload_type["AlchemicalNetworkViz"]
        node_ids = {node["id"] for node in network["nodes"]}
        assert len(node_ids) == len(network["nodes"]), "node ids are not unique"
        assert network["edges"], "the fixture has no edges to check"
        for edge in network["edges"]:
            assert edge["source"] in node_ids
            assert edge["target"] in node_ids

    def test_a_nested_component_is_the_same_object_as_a_standalone_one(self):
        """The claim the single ComponentViz union is making, asserted directly.

        A component inside a chemical system validates as a payload on its own,
        with no unwrapping step - which is what lets the chemical-system view
        hand the sub-object straight to the element that claims its type.
        """
        from .conftest import read_example

        for component in read_example("chemical_system.json")["components"].values():
            _validate(component)
