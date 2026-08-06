"""Shared fixtures: the golden payloads, the generated schema, and the mutation
matrix - the same three files the vitest suite reads.

If the two suites ever stop agreeing about what a valid payload is, they stop
agreeing about these files first, and both go red.
"""

from __future__ import annotations

import json
import pathlib

import pytest

REPO = pathlib.Path(__file__).resolve().parent.parent.parent
EXAMPLES_DIR = REPO / "examples"
SCHEMA_PATH = REPO / "schema" / "gufe-viz.schema.json"
MUTATIONS_PATH = REPO / "schema" / "mutations.json"


def example_paths() -> list[pathlib.Path]:
    return sorted(EXAMPLES_DIR.glob("*.json"))


def example_names() -> list[str]:
    return [p.name for p in example_paths()]


def read_example(name: str) -> dict:
    return json.loads((EXAMPLES_DIR / name).read_text(encoding="utf-8"))


@pytest.fixture(scope="session")
def schema() -> dict:
    """The JSON Schema: the source of truth for both languages.

    This is the same file ``ts/src/schema/validate.ts`` compiles Ajv against, so
    the two suites are checking one artifact rather than two that are supposed
    to agree with each other.
    """
    return json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))


@pytest.fixture(scope="session")
def mutations() -> list[dict]:
    return json.loads(MUTATIONS_PATH.read_text(encoding="utf-8"))["mutations"]


@pytest.fixture(params=example_names())
def example(request) -> tuple[str, dict]:
    """Every golden payload in turn, as ``(filename, payload)``."""
    return request.param, read_example(request.param)


@pytest.fixture(scope="session")
def every_payload_type() -> dict[str, dict]:
    """One payload of every declared type, keyed by type, built from live gufe.

    ``examples/`` covers eight of the eleven. The other three cannot be a
    committed fixture: two need a :class:`gufe.Protocol` to construct, and
    ``UnknownComponentViz`` exists precisely for a class that is not in gufe at
    all. They are built here instead, so that "every type the schema declares is
    something Python can actually produce" is checkable rather than assumed.
    """
    import warnings

    import gufe
    from gufe_viz import payload_for
    from gufe_viz.components import component_payload
    from rdkit import Chem
    from rdkit.Chem import AllChem

    payloads = {}
    for name in example_names():
        payload = read_example(name)
        payloads.setdefault(payload["type"], payload)

    def molecule(smiles: str, label: str):
        mol = Chem.AddHs(Chem.MolFromSmiles(smiles))
        AllChem.EmbedMolecule(mol, randomSeed=7)
        mol.SetProp("_Name", label)
        return gufe.SmallMoleculeComponent.from_rdkit(mol)

    class SomebodysOwnComponent(gufe.Component):
        """A custom Component, which gufe explicitly supports."""

        @property
        def name(self) -> str:
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

    payloads["UnknownComponentViz"] = component_payload(SomebodysOwnComponent())

    with warnings.catch_warnings():
        warnings.simplefilter("ignore")
        test_protocol = pytest.importorskip("gufe.tests.test_protocol")
        protocol = test_protocol.DummyProtocol(settings=test_protocol.DummyProtocol.default_settings())
        state_a = gufe.ChemicalSystem({"ligand": molecule("CCO", "ethanol")}, name="A")
        state_b = gufe.ChemicalSystem({"ligand": molecule("CCC", "propane")}, name="B")
        transformation = gufe.Transformation(state_a, state_b, protocol=protocol, name="A to B")

    payloads["TransformationViz"] = payload_for(transformation)
    payloads["AlchemicalNetworkViz"] = payload_for(gufe.AlchemicalNetwork([transformation], name="net"))
    return payloads


# --------------------------------------------------------------------------- #
# JSON Pointer, just enough of it                                               #
# --------------------------------------------------------------------------- #
#
# The mutation matrix is declarative so that both languages apply exactly the
# same edits.


class PointerMissing(LookupError):
    """The mutation's path does not exist in this payload."""


def _split(pointer: str) -> list[str]:
    if pointer in ("", "/"):
        return []
    return [part.replace("~1", "/").replace("~0", "~") for part in pointer.lstrip("/").split("/")]


def _descend(node, part: str, path: str):
    """One step along a pointer, through either an object or an array.

    Array steps exist so a mutation can reach into ``nodes`` and ``edges``.
    Components are reached by label rather than by index, because a chemical
    system keys them the way gufe does.
    """
    if isinstance(node, list):
        if not part.isdigit() or int(part) >= len(node):
            raise PointerMissing(path)
        return node[int(part)]
    if not isinstance(node, dict) or part not in node:
        raise PointerMissing(path)
    return node[part]


def _apply_to_list(result: dict, node: list, leaf: str, mutation: dict) -> dict:
    """``remove`` / ``replace`` an array element. ``add`` at an index is not
    supported: nothing in the matrix needs it, and RFC 6901 insert semantics are
    a trap not worth reimplementing twice."""
    if not leaf.isdigit() or int(leaf) >= len(node):
        raise PointerMissing(mutation["path"])
    index = int(leaf)
    if mutation["op"] == "remove":
        del node[index]
    elif mutation["op"] == "replace":
        node[index] = mutation["value"]
    else:
        raise ValueError(f"op {mutation['op']!r} is not supported on an array element")
    return result


def apply_mutation(payload: dict, mutation: dict) -> dict:
    """Return a deep copy of ``payload`` with one mutation applied.

    Raises :class:`PointerMissing` if the path's parent is absent, so a matrix
    entry that silently does nothing shows up as a skip rather than as a pass.
    """
    import copy

    result = copy.deepcopy(payload)
    parts = _split(mutation["path"])
    if not parts:
        raise ValueError(f"mutation {mutation['id']!r} has an empty path")

    node = result
    for part in parts[:-1]:
        node = _descend(node, part, mutation["path"])

    leaf = parts[-1]
    if isinstance(node, list):
        return _apply_to_list(result, node, leaf, mutation)
    if not isinstance(node, dict):
        raise PointerMissing(mutation["path"])

    op = mutation["op"]
    if op == "remove":
        if leaf not in node:
            raise PointerMissing(mutation["path"])
        del node[leaf]
    elif op == "replace":
        if leaf not in node:
            raise PointerMissing(mutation["path"])
        node[leaf] = mutation["value"]
    elif op == "add":
        node[leaf] = mutation["value"]
    else:
        raise ValueError(f"unknown mutation op {op!r}")

    return result


def applies_to(mutation: dict, payload: dict) -> bool:
    types = mutation.get("types")
    return types is None or payload.get("type") in types
