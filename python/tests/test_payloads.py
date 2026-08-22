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


def _registry(payload: dict) -> dict[str, dict]:
    """A payload's registry as ``{gufe-key: entry}``, the way a view reads it."""
    return {entry["gufe-key"]: entry for entry in payload.get("registry", [])}


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


def _single_ref(schema: dict, name: str) -> dict:
    """A schema document that accepts one declared type and nothing else.

    The review asked for exactly this shape - a document per object type that
    ``$ref``s one branch - both as the thing to publish alongside the union and
    as the thing tests validate against. Built here rather than committed,
    because the union is the single source and these are derivable from it.
    """
    return {"$schema": schema["$schema"], "$defs": schema["$defs"], "$ref": f"#/$defs/{name}"}


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

    def test_no_declared_type_accepts_another_type_s_payload(self, schema, every_payload_type):
        """The discriminator is load-bearing, for all twelve types.

        The top-level ``oneOf`` only says a payload is *some* declared type.
        This says it is the intended one: each payload is validated against the
        single-``$ref`` document for every other declared type and has to fail
        every time.

        The pair this exists for is ``ProtocolViz`` and ``UnknownComponentViz``.
        Their field sets are identical - ``type``, ``gufe-key``, ``name``,
        ``gufe_type`` - so the ``type`` const is the only thing between them,
        and neither has a committed example to catch it from the other side.
        """
        import jsonschema

        for declared, payload in every_payload_type.items():
            jsonschema.validate(payload, _single_ref(schema, declared))
            for other in sorted(_declared_types(schema) - {declared}):
                with pytest.raises(jsonschema.ValidationError):
                    jsonschema.validate(payload, _single_ref(schema, other))

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

    def test_validates_as_its_own_type_and_as_no_other(self, example, schema):
        """A payload passes the branch it names, and fails every other branch.

        The top-level ``oneOf`` only proves a payload is *some* declared type.
        This proves it is the *intended* one: validating each fixture against
        the single-``$ref`` document for every other declared type, and
        requiring a failure each time. That is what makes the ``type``
        discriminator load-bearing rather than decorative - if two types were
        ever loose enough to accept each other's payloads, a view would dispatch
        on ``type`` to something the schema could not tell apart.
        """
        import jsonschema

        name, payload = example
        declared = payload["type"]
        others = sorted(_declared_types(schema) - {declared})
        assert others, name

        jsonschema.validate(payload, _single_ref(schema, declared))
        for other in others:
            with pytest.raises(jsonschema.ValidationError):
                jsonschema.validate(payload, _single_ref(schema, other))

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
        from rdkit import Chem
        from rdkit.Chem import AllChem

        class BrokenMolecule(gufe.SmallMoleculeComponent):
            def to_sdf(self):
                raise RuntimeError("no conformer")

        # A real molecule with one broken method, rather than an uninitialized
        # shell: every payload now reads `.key` first, and a shell has no key
        # either - which would prove nothing about the serializer.
        mol = Chem.AddHs(Chem.MolFromSmiles("CCO"))
        AllChem.EmbedMolecule(mol, randomSeed=0xF00D)
        broken = BrokenMolecule.from_rdkit(mol)

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

    def test_mapping_carries_both_endpoints_by_key_and_the_index_map(self):
        """A standalone mapping names its two molecules and carries them once.

        The endpoints are gufe keys resolved in the mapping's own registry -
        exactly as they are when the same object is an edge of a ligand network,
        where they resolve in the network's registry instead. One shape, two
        contexts.
        """
        from .conftest import read_example

        payload = read_example("ligand_atom_mapping.json")
        registry = _registry(payload)
        for side in ("componentA", "componentB"):
            molecule = registry[payload[side]]
            assert molecule["type"] == "SmallMoleculeComponentViz"
            assert molecule["sdf"].strip()

        # A list of integer pairs, not an object keyed by a stringified index.
        pairs = payload["componentA_to_componentB"]
        assert isinstance(pairs, list)
        assert all(isinstance(pair["index_A"], int) and isinstance(pair["index_B"], int) for pair in pairs)
        assert [pair["index_A"] for pair in pairs] == sorted(pair["index_A"] for pair in pairs)
        _validate(payload)

    def test_ligand_network_carries_each_ligand_exactly_once(self):
        """The registry holds the structures; nodes and edges hold keys.

        This is the deduplication the whole registry exists for: the three
        molecules of gufe's fixture appear in three mappings between them, and
        each SDF is carried once rather than twice over. Never gufe's GraphML -
        that embeds a gufe ``to_json`` moldict per node, so forwarding it would
        put a ``.npy`` conformer decoder in TypeScript.
        """
        from .conftest import read_example

        for name in ("ligand_network.json", "ligand_network_named.json"):
            payload = read_example(name)
            assert payload["type"] == "LigandNetworkViz", name
            assert "graphml" not in payload, name
            assert len(payload["nodes"]) == 3, name
            assert len(payload["edges"]) == 3, name

            registry = _registry(payload)
            assert len(registry) == len(payload["registry"]), f"{name}: registry keys are not unique"
            assert len(set(payload["nodes"])) == 3, f"{name}: node keys are not unique"

            # Every ligand is a whole SmallMoleculeComponentViz, so clicking
            # into a node or an edge yields something drawable rather than a
            # name-only stub.
            for key in payload["nodes"]:
                node = registry[key]
                assert node["type"] == "SmallMoleculeComponentViz", name
                assert "$$$$" in node["sdf"], f"{name}: {key} is not a complete SDF record"

            for edge in payload["edges"]:
                # Every endpoint must name a node. The view can survive a
                # dangling edge, but a builder must never emit one - and JSON
                # Schema cannot say so, which is why this is a test.
                assert edge["type"] == "LigandAtomMappingViz", name
                assert edge["componentA"] in payload["nodes"], name
                assert edge["componentB"] in payload["nodes"], name
                assert all(
                    isinstance(pair["index_A"], int) and isinstance(pair["index_B"], int)
                    for pair in edge["componentA_to_componentB"]
                ), name

            # The point of the exercise: three mappings name six endpoints
            # between them, and the payload carries three molecules.
            endpoints = [edge[side] for edge in payload["edges"] for side in ("componentA", "componentB")]
            assert len(endpoints) == 6, name
            assert len(registry) == 3, f"{name}: the registry did not deduplicate"

            _validate(payload)

    def test_ligand_network_named_variant_differs_only_in_names(self):
        """The pair is a variant of the same network, not a different one."""
        from .conftest import read_example

        unnamed = read_example("ligand_network.json")
        named = read_example("ligand_network_named.json")

        assert [entry["name"] for entry in unnamed["registry"]] == ["", "", ""]
        assert [entry["name"] for entry in named["registry"]] == [entry["smiles"] for entry in named["registry"]]
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

    def test_chemical_system_maps_labels_to_component_keys(self):
        from .conftest import read_example

        payload = read_example("chemical_system.json")
        components = payload["components"]
        assert set(components) == {"ligand", "solvent"}

        registry = _registry(payload)
        ligand = registry[components["ligand"]]
        solvent = registry[components["solvent"]]

        # Each component carries its own type's fields and *only* those. The
        # keys another type would use are absent rather than present-and-null,
        # which is what lets the schema forbid them instead of merely tolerating
        # them - see the exclusivity mutations in python/tests/mutations.json.
        assert ligand["type"] == "SmallMoleculeComponentViz"
        assert ligand["sdf"]
        assert "pdb" not in ligand
        assert "neutralize" not in ligand

        assert solvent["type"] == "SolventComponentViz"
        assert solvent["ion_concentration"]
        assert "sdf" not in solvent
        assert "pdb" not in solvent
        _validate(payload)

    def test_transformation_names_its_states_and_protocol_by_key(self, every_payload_type):
        """A transformation's states are complete ChemicalSystemViz objects, and
        its protocol is a complete ProtocolViz - both reached through the
        registry.

        The alternative - a bespoke sub-shape for "a system inside a
        transformation", and a bare class-name string for the protocol - is what
        would make the chemical-system view unusable for drawing either half of
        a diff, and would leave a protocol with nowhere to grow.
        """
        payload = every_payload_type["TransformationViz"]
        registry = _registry(payload)

        assert registry[payload["protocol"]]["gufe_type"] == "DummyProtocol"
        for state in (payload["stateA"], payload["stateB"]):
            system = registry[state]
            assert system["type"] == "ChemicalSystemViz"
            # Its own components resolve in the same registry.
            for component_key in system["components"].values():
                assert registry[component_key]["type"].endswith("ComponentViz")

    def test_alchemical_network_edges_reference_nodes_that_exist(self, every_payload_type):
        """Referential integrity, which JSON Schema cannot express.

        The same rule the ligand network is held to, one level up: an edge
        naming a system that is not in ``nodes`` is a graph the view cannot
        draw, and only a test can catch it. Registering the nodes before the
        edges is what makes it true by construction.
        """
        network = every_payload_type["AlchemicalNetworkViz"]
        registry = _registry(network)
        assert len(set(network["nodes"])) == len(network["nodes"]), "node keys are not unique"
        assert network["edges"], "the fixture has no edges to check"
        for edge in network["edges"]:
            assert edge["type"] == "TransformationViz"
            assert edge["stateA"] in network["nodes"]
            assert edge["stateB"] in network["nodes"]
            assert registry[edge["protocol"]]["type"] == "ProtocolViz"

    def test_an_alchemical_network_carries_its_shared_protocol_once(self, every_payload_type):
        """The deduplication the registry buys on the alchemical side.

        Every edge of a real network names the same protocol, and every node
        usually shares one protein. Both are registry entries, so the payload
        carries them once however many edges point at them.
        """
        network = every_payload_type["AlchemicalNetworkViz"]
        protocols = [entry for entry in network["registry"] if entry["type"] == "ProtocolViz"]
        assert len(protocols) == 1
        assert {edge["protocol"] for edge in network["edges"]} == {protocols[0]["gufe-key"]}

    def test_a_registry_entry_is_the_same_object_as_a_standalone_payload(self):
        """The claim the one-object-per-gufe-class rule is making, asserted directly.

        A component in a registry validates as a payload on its own, with no
        unwrapping step - which is what lets a view hand the entry straight to
        the element that claims its type, and what makes drilling into a network
        node possible at all.
        """
        from .conftest import read_example

        for name in ("chemical_system.json", "ligand_network.json", "ligand_atom_mapping.json"):
            for entry in read_example(name)["registry"]:
                _validate(entry)
