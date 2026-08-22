"""Atom mappings and ligand networks.

Grouped together because they are the same object twice: a ligand network's edge
*is* a ``LigandAtomMappingViz``, with no separate edge type and no separate code
path. Both endpoints are gufe keys either way - resolved in the mapping's own
registry when it stands alone, and in the network's registry when it is an edge,
where they are the very entries the network's ``nodes`` name.
"""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

import gufe

from .components import gufe_key, json_safe, small_molecule_payload
from .registry import Registry

# --------------------------------------------------------------------------- #
# Atom mappings                                                                 #
# --------------------------------------------------------------------------- #


def _atom_map(mapping: gufe.LigandAtomMapping) -> list[dict[str, int]]:
    """The A-to-B index correspondence, as a list of index pairs.

    gufe holds this as ``{int: int}``, which JSON cannot carry: object keys are
    always strings there, so the dict shape would put ``{"12": 7}`` in the
    payload and leave both languages casting the keys back. A list of
    ``{"index_A": 12, "index_B": 7}`` keeps both sides integers and lets the
    schema *require* a B index for every A index rather than describe the
    convention in prose.

    Sorted by ``index_A`` so a committed example payload is byte-stable.
    """
    return [
        {"index_A": index_a, "index_B": index_b}
        for index_a, index_b in sorted(mapping.componentA_to_componentB.items())
    ]


def mapping_score(annotations: Mapping[str, Any]) -> float | None:
    """The mapping's ``score`` annotation, if it is a plain number.

    gufe puts nothing in ``annotations`` by design - LOMAP, kartograf and
    everyone else pick their own keys - but ``score`` is the one both gufe's own
    fixtures and OpenFE's networks use, and it is what the edge colouring and the
    force layout read. A ``bool`` is excluded because ``isinstance(True, int)``
    is true and a two-colour ramp over ``True`` means nothing.
    """
    score = annotations.get("score") if hasattr(annotations, "get") else None
    if isinstance(score, bool) or not isinstance(score, (int, float)):
        return None
    return float(score)


def _mapping_name(name_a: str, name_b: str) -> str:
    """A title for a mapping, which has no name of its own.

    Unnamed molecules are common - every molecule in gufe's own network fixture
    is unnamed - and "A to B" with both sides blank reads as broken rather than
    as unnamed, so fall back to no title at all.
    """
    return f"{name_a} -> {name_b}" if (name_a or name_b) else ""


def ligand_atom_mapping_payload(mapping: gufe.LigandAtomMapping, registry: Registry | None = None) -> dict[str, Any]:
    """One atom mapping, with its two molecules named by gufe key.

    The molecules go into ``registry``. Standalone, that is a registry of two
    entries carried on this payload; as an edge of a ligand network, the caller
    passes the network's registry and the two keys land on entries that are
    already there because the nodes named them first.
    """
    if not isinstance(mapping, gufe.LigandAtomMapping):
        raise TypeError(f"expected a gufe.LigandAtomMapping, got {type(mapping).__name__}")

    is_root = registry is None
    pool = Registry() if registry is None else registry

    annotations = json_safe(mapping.annotations)
    payload = {
        "type": "LigandAtomMappingViz",
        "gufe-key": gufe_key(mapping),
        "name": _mapping_name(mapping.componentA.name or "", mapping.componentB.name or ""),
        "componentA": pool.add(small_molecule_payload(mapping.componentA)),
        "componentB": pool.add(small_molecule_payload(mapping.componentB)),
        "componentA_to_componentB": _atom_map(mapping),
        "score": mapping_score(annotations),
        "annotations": annotations,
    }
    if is_root:
        payload["registry"] = pool.entries()
    return payload


# --------------------------------------------------------------------------- #
# Ligand networks                                                               #
# --------------------------------------------------------------------------- #


def ligand_network_payload(network: gufe.LigandNetwork) -> dict[str, Any]:
    """Walk the live network: every ligand once, in the registry; mappings as edges.

    Deliberately *not* ``to_graphml()``. That output embeds a gufe ``to_json``
    moldict per node, so forwarding it would make the browser decode atomic
    numbers, bond tuples and a ``.npy`` conformer blob before it could draw
    anything - exactly the ugly TypeScript this design exists to prevent.
    Forwarding GraphML relocates the problem rather than avoiding it.

    The nodes are exactly what repeats in a ligand network - each mapping names
    two of them and each ligand is named by several mappings - so they live in
    the registry and everything else points at them. A forty-ligand network
    carries each SDF once, and clicking an edge still yields whole molecules,
    because a key resolves to a complete ``SmallMoleculeComponentViz``.

    Nodes and edges are sorted for byte-stability: gufe holds both in a
    ``frozenset`` and the committed example payloads have to be the same across
    runs. Sorting by *name* is not enough - gufe's GraphML fixture has three
    unnamed molecules, so a name-keyed sort is a tie broken by whatever order the
    frozenset happens to yield in this process.
    """
    if not isinstance(network, gufe.LigandNetwork):
        raise TypeError(f"expected a gufe.LigandNetwork, got {type(network).__name__}")

    molecules = sorted(network.nodes, key=lambda mol: (mol.name or "", str(mol.key)))
    mappings = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))

    registry = Registry()
    # Nodes first, so the registry entry for a ligand is the one the node named
    # and the edges below merely find it again.
    nodes = [registry.add(small_molecule_payload(mol)) for mol in molecules]
    edges = [ligand_atom_mapping_payload(mapping, registry) for mapping in mappings]

    return {
        "type": "LigandNetworkViz",
        "gufe-key": gufe_key(network),
        "name": getattr(network, "name", ""),
        "registry": registry.entries(),
        "nodes": nodes,
        "edges": edges,
    }
