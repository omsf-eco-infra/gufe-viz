"""Atom mappings and ligand networks.

Grouped together because they change together: a network's edges *are* atom
mappings, and the network view reassembles a standalone mapping payload from an
edge plus its two endpoint nodes in order to hand it to the same mapping viewer
that draws one on its own.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

import gufe

from .components import json_safe

# --------------------------------------------------------------------------- #
# Atom mappings                                                                 #
# --------------------------------------------------------------------------- #


def _atom_map(mapping: gufe.LigandAtomMapping) -> dict[str, int]:
    """The A-to-B index correspondence, with stringified keys.

    JSON object keys are always strings, so the A-side indices are stringified
    here rather than left as integers and coerced somewhere less visible. The
    schema pins the format with a ``propertyNames`` pattern.
    """
    return {str(key): value for key, value in mapping.componentA_to_componentB.items()}


def _mapping_fields(mapping: gufe.LigandAtomMapping) -> dict[str, Any]:
    """Everything a mapping carries except its ``type`` and ``name``."""
    return {
        "molA_sdf": mapping.componentA.to_sdf(),
        "molB_sdf": mapping.componentB.to_sdf(),
        "nameA": mapping.componentA.name or "",
        "nameB": mapping.componentB.name or "",
        "componentA_to_componentB": _atom_map(mapping),
        "annotations": json_safe(mapping.annotations),
    }


def _mapping_name(name_a: str, name_b: str) -> str:
    """A title for a mapping, which has no name of its own.

    Unnamed molecules are common - every molecule in gufe's own network fixture
    is unnamed - and "A to B" with both sides blank reads as broken rather than
    as unnamed, so fall back to no title at all.
    """
    return f"{name_a} -> {name_b}" if (name_a or name_b) else ""


def ligand_atom_mapping_payload(mapping: gufe.LigandAtomMapping) -> dict[str, Any]:
    if not isinstance(mapping, gufe.LigandAtomMapping):
        raise TypeError(f"expected a gufe.LigandAtomMapping, got {type(mapping).__name__}")

    fields = _mapping_fields(mapping)
    return {
        "type": "LigandAtomMappingViz",
        "name": _mapping_name(fields["nameA"], fields["nameB"]),
        **fields,
    }


# --------------------------------------------------------------------------- #
# Ligand networks                                                               #
# --------------------------------------------------------------------------- #


def mapping_score(annotations: Mapping[str, Any]) -> float | None:
    """The mapping's ``score`` annotation, if it is a plain number.

    gufe puts nothing in ``annotations`` by design - LOMAP, kartograf and
    everyone else pick their own keys - but ``score`` is the one both gufe's own
    fixtures and OpenFE's networks use, and it is what the edge colouring reads.
    A ``bool`` is excluded because ``isinstance(True, int)`` is true and a
    two-colour ramp over ``True`` means nothing.
    """
    score = annotations.get("score") if hasattr(annotations, "get") else None
    if isinstance(score, bool) or not isinstance(score, (int, float)):
        return None
    return float(score)


def ligand_network_payload(network: gufe.LigandNetwork) -> dict[str, Any]:
    """Walk the live network: SDF per ligand, flat topology per mapping.

    Deliberately *not* ``to_graphml()``. That output embeds a gufe ``to_json``
    moldict per node, so forwarding it would make the browser decode atomic
    numbers, bond tuples and a ``.npy`` conformer blob before it could draw
    anything - exactly the ugly TypeScript this design exists to prevent.
    Forwarding GraphML relocates the problem rather than avoiding it.

    Molecules live in ``nodes`` rather than being inlined per edge: a forty-ligand
    network would otherwise carry each SDF several times over.

    Nodes and edges are sorted by gufe key, because gufe holds both in a
    ``frozenset`` and the committed example payloads have to be byte-stable
    across runs. Sorting by *name* is not enough - gufe's GraphML fixture has
    three unnamed molecules, so a name-keyed sort is a tie broken by whatever
    order the frozenset happens to yield in this process.
    """
    if not isinstance(network, gufe.LigandNetwork):
        raise TypeError(f"expected a gufe.LigandNetwork, got {type(network).__name__}")

    nodes = sorted(network.nodes, key=lambda mol: (mol.name or "", str(mol.key)))
    edges = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))

    return {
        "type": "LigandNetworkViz",
        "name": getattr(network, "name", ""),
        "nodes": [
            {
                "id": str(mol.key),
                "name": mol.name or "",
                "sdf": mol.to_sdf(),
                "smiles": mol.smiles,
            }
            for mol in nodes
        ],
        "edges": [
            {
                "source": str(edge.componentA.key),
                "target": str(edge.componentB.key),
                "score": mapping_score(edge.annotations),
                "componentA_to_componentB": _atom_map(edge),
                "annotations": json_safe(edge.annotations),
            }
            for edge in edges
        ],
    }
