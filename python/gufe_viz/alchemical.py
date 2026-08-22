"""Transformations and alchemical networks.

Grouped together because they are the same object twice: an alchemical network's
edge *is* a ``TransformationViz``, with no separate edge type. Its ``stateA``,
``stateB`` and ``protocol`` are gufe keys either way - resolved in the
transformation's own registry when it stands alone, and in the network's
registry when it is an edge, where the two states are the very entries the
network's ``nodes`` name.

What repeats in an alchemical network is not the nodes and edges but what they
are made of: in practice every system shares one protein and every
transformation shares one protocol. Those live in the registry once, as whole
objects, so the graph stays small *and* a reader can still open a node and see
the protein.
"""

from __future__ import annotations

from typing import Any

import gufe
from gufe.transformations.transformation import TransformationBase

from .components import chemical_system_payload, display_name, gufe_key, protocol_payload
from .networks import ligand_atom_mapping_payload
from .registry import Registry


def transformation_payload(transformation: TransformationBase, registry: Registry | None = None) -> dict[str, Any]:
    """One transformation, as two chemical-system keys plus a protocol key.

    ``NonTransformation`` renders through here unchanged: it exposes the same
    ``stateA`` and ``stateB`` properties, both its single system, so it comes
    out as a diff with no differences. The two are siblings under
    ``TransformationBase`` rather than parent and child, which is why this
    dispatches on the base class.
    """
    if not isinstance(transformation, TransformationBase):
        raise TypeError(f"expected a gufe Transformation or NonTransformation, got {type(transformation).__name__}")

    is_root = registry is None
    pool = Registry() if registry is None else registry

    # gufe accepts one mapping, a list of them, a label -> mapping dict, or none
    # at all, and ``NonTransformation`` has no ``mapping`` attribute to read.
    mapping = getattr(transformation, "mapping", None)
    mappings: list[gufe.ComponentMapping]
    if mapping is None:
        mappings = []
    elif isinstance(mapping, list):
        mappings = mapping
    elif isinstance(mapping, dict):
        mappings = list(mapping.values())
    else:
        mappings = [mapping]

    payload = {
        "type": "TransformationViz",
        "gufe-key": gufe_key(transformation),
        "name": display_name(transformation),
        "protocol": pool.add(protocol_payload(transformation.protocol)),
        "stateA": pool.add(chemical_system_payload(transformation.stateA, pool)),
        "stateB": pool.add(chemical_system_payload(transformation.stateB, pool)),
        # A mapping's endpoints are the ligands of stateA and stateB, so these
        # resolve to registry entries that are already there.
        "mappings": [ligand_atom_mapping_payload(m, pool) for m in mappings if isinstance(m, gufe.LigandAtomMapping)],
    }
    if is_root:
        payload["registry"] = pool.entries()
    return payload


def alchemical_network_payload(network: gufe.AlchemicalNetwork) -> dict[str, Any]:
    """The whole graph: chemical systems as nodes, transformations as edges.

    ``AlchemicalNetwork`` has no ``to_graphml()``, so the graph is walked here.
    Nodes are registered before edges, so a transformation's ``stateA`` and
    ``stateB`` find the entries the nodes put there rather than adding their
    own - which is also what makes "every edge endpoint names a node" true by
    construction rather than by hope.

    Nodes and edges are sorted by gufe key for the same byte-stability reason as
    a ligand network.
    """
    if not isinstance(network, gufe.AlchemicalNetwork):
        raise TypeError(f"expected a gufe.AlchemicalNetwork, got {type(network).__name__}")

    registry = Registry()
    nodes = [
        registry.add(chemical_system_payload(system, registry))
        for system in sorted(network.nodes, key=lambda s: str(s.key))
    ]
    edges = [transformation_payload(edge, registry) for edge in sorted(network.edges, key=lambda e: str(e.key))]

    return {
        "type": "AlchemicalNetworkViz",
        "gufe-key": gufe_key(network),
        "name": display_name(network),
        "registry": registry.entries(),
        "nodes": nodes,
        "edges": edges,
    }
