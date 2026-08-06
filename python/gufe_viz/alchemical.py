"""Transformations and alchemical networks.

Grouped together because an alchemical network's edges *are* transformations,
so a change to how one is described is almost always a change to the other.
"""

from __future__ import annotations

from typing import Any

import gufe

from .components import chemical_system_payload, display_name
from .networks import ligand_atom_mapping_payload


def transformation_payload(transformation: Any) -> dict[str, Any]:
    """One transformation, as a state A / state B pair plus its mappings.

    ``NonTransformation`` renders through here unchanged: it exposes the same
    ``stateA`` and ``stateB`` properties, both its single system, so it comes
    out as a diff with no differences. The two are siblings under
    ``TransformationBase`` rather than parent and child, which is why this
    dispatches on the base class.
    """
    if not isinstance(transformation, gufe.tokenization.GufeTokenizable):
        raise TypeError(f"expected a gufe Transformation, got {type(transformation).__name__}")

    mapping = getattr(transformation, "mapping", None)
    if mapping is None:
        mappings = []
    elif isinstance(mapping, list):
        mappings = mapping
    else:
        mappings = [mapping]

    return {
        "type": "TransformationViz",
        "name": display_name(transformation),
        "protocol": type(transformation.protocol).__name__,
        "stateA": chemical_system_payload(transformation.stateA),
        "stateB": chemical_system_payload(transformation.stateB),
        "mappings": [ligand_atom_mapping_payload(m) for m in mappings if isinstance(m, gufe.LigandAtomMapping)],
    }


def _component_summary(label: str, component: Any) -> dict[str, Any]:
    """What a component *is*, with nothing to draw it from.

    Deliberately not a component payload. An alchemical network that inlined
    every system's SDF and PDB would be enormous, and this view shows
    composition and topology rather than chemistry.
    """
    return {
        "label": label,
        "gufe_type": type(component).__name__,
        "name": display_name(component),
    }


def alchemical_network_payload(network: Any) -> dict[str, Any]:
    """The whole graph: chemical systems as nodes, transformations as edges.

    ``AlchemicalNetwork`` has no ``to_graphml()``, so the graph is walked here.
    Nodes and edges are sorted by gufe key for the same byte-stability reason as
    a ligand network.
    """
    if not isinstance(network, gufe.AlchemicalNetwork):
        raise TypeError(f"expected a gufe.AlchemicalNetwork, got {type(network).__name__}")

    def node_id(system: Any) -> str:
        return str(system.key)

    return {
        "type": "AlchemicalNetworkViz",
        "name": display_name(network),
        "nodes": [
            {
                "id": node_id(system),
                "name": display_name(system),
                "components": [
                    _component_summary(label, component) for label, component in sorted(system.components.items())
                ],
            }
            for system in sorted(network.nodes, key=node_id)
        ],
        "edges": [
            {
                "id": str(edge.key),
                "name": display_name(edge),
                "source": node_id(edge.stateA),
                "target": node_id(edge.stateB),
                "protocol": type(edge.protocol).__name__,
            }
            for edge in sorted(network.edges, key=lambda e: str(e.key))
        ],
    }
