"""gufe object → schema-valid payload.

This is the Python half of the contract. It reads **live gufe objects** and asks
them to serialize themselves the way they already know how — ``to_sdf()``,
``to_pdb_file()`` — rather than touching gufe's own JSON representation. That
rule is the single most important one in the design: it
confines every hard question about gufe serialization (deduplicated key-chains,
``:custom:`` codecs, ``to_dict`` vs ``to_json``, ``QuickRun`` still writing
``to_dict``) to Python, where the people who know the history can answer it.

When the input is a saved gufe ``.json`` file, Python deserializes it into live
gufe objects *first* and then builds the payload from those. TypeScript never
sees gufe JSON.

Ported from ``gufe/visualization/framejs.py`` (the ``framejs-visualizations``
branch), with the builders returning Pydantic models rather than loose dicts.
Nothing here imports gufe at module scope — the registry is keyed by class
*name*, walked over the MRO — so ``import gufe_viz`` works in an environment
that has no gufe in it.
"""

from __future__ import annotations

import io
import json
from collections.abc import Callable
from typing import Any

from .schema import (
    AlchemicalEdge,
    AlchemicalNetworkData,
    AlchemicalNetworkPayload,
    AlchemicalNode,
    ChemicalSystemData,
    ChemicalSystemFields,
    ChemicalSystemPayload,
    ComponentDescriptor,
    ComponentSummary,
    LigandAtomMappingPayload,
    LigandNetworkData,
    LigandNetworkEdge,
    LigandNetworkNode,
    LigandNetworkPayload,
    MappingData,
    ProteinData,
    ProteinPayload,
    SmallMoleculeData,
    SmallMoleculePayload,
    SolventData,
    SolventPayload,
    TransformationData,
    TransformationPayload,
)


class NoVisualization(TypeError):
    """Raised when nothing is registered for an object's class.

    This is the Python-side counterpart of the browser's "sorry, I can't
    visualize this" panel (R19): callers that want graceful degradation catch
    this rather than parsing a message.
    """

    def __init__(self, obj: Any) -> None:
        self.type_name = type(obj).__name__
        super().__init__(
            f"no gufe-viz visualization is registered for {self.type_name!r}; "
            f"gufe-viz can visualize: {', '.join(sorted(PAYLOAD_REGISTRY))}"
        )


# --------------------------------------------------------------------------- #
# Shared shapes                                                                 #
# --------------------------------------------------------------------------- #


def _protein_pdb_string(protein) -> str:
    """Render a :class:`gufe.ProteinComponent` to a PDB string, in memory."""
    buf = io.StringIO()
    protein.to_pdb_file(buf)
    return buf.getvalue()


def _json_safe(value: Any) -> Any:
    """Coerce ``value`` into something ``json.dumps`` can handle.

    Free-form gufe metadata — ``LigandAtomMapping.annotations`` most of all — can
    hold ``openff.units.Quantity`` and other rich objects. A viz only ever
    *displays* these, so rendering the leftovers with ``str()``
    (``"1.2 nanometer"``) is both lossless enough and far more readable than
    gufe's ``:custom:`` JSON codec.
    """
    return json.loads(json.dumps(value, default=str))


def _solvent_fields(solvent) -> dict[str, Any]:
    return {
        "smiles": solvent.smiles,
        "positive_ion": solvent.positive_ion,
        "negative_ion": solvent.negative_ion,
        "neutralize": solvent.neutralize,
        "ion_concentration": str(solvent.ion_concentration),
    }


def _component_summary(label: str, comp) -> ComponentSummary:
    """The cheap shape: what a component *is*, with no structure data."""
    return ComponentSummary(label=label, type=type(comp).__name__, name=getattr(comp, "name", "") or "")


def _component_descriptor(label: str, comp) -> ComponentDescriptor:
    """The full shape: a summary plus whatever the viz needs to draw it."""
    fields: dict[str, Any] = {
        "label": label,
        "type": type(comp).__name__,
        "name": getattr(comp, "name", "") or "",
    }
    try:
        if hasattr(comp, "to_sdf"):
            fields["sdf"] = comp.to_sdf()
            fields["smiles"] = comp.smiles
        elif hasattr(comp, "to_pdb_file"):
            fields["pdb"] = _protein_pdb_string(comp)
        elif hasattr(comp, "smiles"):  # SolventComponent & friends
            fields.update(_solvent_fields(comp))
    except Exception as e:  # noqa: BLE001 — one bad component must not kill the view
        fields["error"] = f"{type(e).__name__}: {e}"
    return ComponentDescriptor(**fields)


def _chemical_system_fields(system) -> ChemicalSystemFields:
    return ChemicalSystemFields(
        name=system.name,
        components=[_component_descriptor(label, comp) for label, comp in sorted(system.components.items())],
    )


def _mapping_data(mapping) -> MappingData:
    return MappingData(
        molA_sdf=mapping.componentA.to_sdf(),
        molB_sdf=mapping.componentB.to_sdf(),
        nameA=mapping.componentA.name,
        nameB=mapping.componentB.name,
        componentA_to_componentB={str(k): v for k, v in mapping.componentA_to_componentB.items()},
        annotations=_json_safe(mapping.annotations),
    )


# --------------------------------------------------------------------------- #
# The builders                                                                  #
# --------------------------------------------------------------------------- #


def _small_molecule_payload(mol) -> SmallMoleculePayload:
    return SmallMoleculePayload(
        name=mol.name,
        data=SmallMoleculeData(sdf=mol.to_sdf(), smiles=mol.smiles, total_charge=mol.total_charge),
    )


def _protein_payload(protein) -> ProteinPayload:
    return ProteinPayload(name=protein.name, data=ProteinData(pdb=_protein_pdb_string(protein)))


def _solvent_payload(solvent) -> SolventPayload:
    return SolventPayload(name=getattr(solvent, "name", "") or "", data=SolventData(**_solvent_fields(solvent)))


def _ligand_atom_mapping_payload(mapping) -> LigandAtomMappingPayload:
    data = _mapping_data(mapping)
    # A LigandAtomMapping has no name of its own, so one is composed from the
    # endpoints. Unnamed molecules are common (gufe's GraphML fixtures have
    # none), and "A → B" with both sides blank reads as broken rather than as
    # unnamed — so fall back to no title at all.
    name = f"{data.nameA} → {data.nameB}" if (data.nameA or data.nameB) else None
    return LigandAtomMappingPayload(name=name, data=data)


def _mapping_score(annotations) -> float | None:
    """The mapping's ``score`` annotation, if it is a plain number.

    gufe puts nothing in ``annotations`` by design — LOMAP, kartograf and
    everyone else pick their own keys — but ``score`` is the one both gufe's own
    fixtures and OpenFE's networks use, and it is what the edge colouring reads.
    A ``bool`` is excluded because ``isinstance(True, int)`` is true and a
    two-colour ramp over ``True`` means nothing.
    """
    score = annotations.get("score") if hasattr(annotations, "get") else None
    if isinstance(score, bool) or not isinstance(score, (int, float)):
        return None
    return float(score)


def _ligand_network_payload(net) -> LigandNetworkPayload:
    """Walk the live network: SDF per ligand, flat topology per mapping.

    Deliberately *not* ``to_graphml()``. That output embeds a gufe ``to_json``
    moldict per node, so forwarding it would make the browser decode atomic
    numbers, bond tuples and a ``.npy`` conformer blob before it could draw
    anything — the ugly TypeScript R8 exists to prevent. See
    :class:`~gufe_viz.schema.LigandNetworkData`.

    Nodes and edges are sorted, because gufe holds both in a ``frozenset`` and
    the committed example payloads have to be byte-stable across runs.
    """
    nodes = sorted(net.nodes, key=lambda mol: (mol.name or "", str(mol.key)))
    edges = sorted(net.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))

    return LigandNetworkPayload(
        name=getattr(net, "name", "") or "",
        data=LigandNetworkData(
            nodes=[
                LigandNetworkNode(
                    id=str(mol.key),
                    name=mol.name or "",
                    sdf=mol.to_sdf(),
                    smiles=mol.smiles,
                )
                for mol in nodes
            ],
            edges=[
                LigandNetworkEdge(
                    source=str(edge.componentA.key),
                    target=str(edge.componentB.key),
                    score=_mapping_score(edge.annotations),
                    componentA_to_componentB={str(k): v for k, v in edge.componentA_to_componentB.items()},
                    annotations=_json_safe(edge.annotations),
                )
                for edge in edges
            ],
        ),
    )


def _chemical_system_payload(system) -> ChemicalSystemPayload:
    fields = _chemical_system_fields(system)
    return ChemicalSystemPayload(name=system.name, data=ChemicalSystemData(**fields.model_dump()))


def _transformation_payload(transformation) -> TransformationPayload:
    """``NonTransformation`` has the same ``stateA``/``stateB`` properties (both
    its single system), so it renders through this builder unchanged."""
    mapping = getattr(transformation, "mapping", None)
    mappings = mapping if isinstance(mapping, list) else ([] if mapping is None else [mapping])
    return TransformationPayload(
        name=transformation.name,
        data=TransformationData(
            name=transformation.name or "",
            protocol=type(transformation.protocol).__name__,
            stateA=_chemical_system_fields(transformation.stateA),
            stateB=_chemical_system_fields(transformation.stateB),
            mappings=[_mapping_data(m) for m in mappings if hasattr(m, "componentA_to_componentB")],
        ),
    )


def _alchemical_network_payload(net) -> AlchemicalNetworkPayload:
    """``AlchemicalNetwork.to_graphml()`` does not exist, so the graph is built
    here. Components are summarized rather than inlined — a solvated network's
    SDF and PDB would be enormous, and this view shows composition and topology.
    """

    def node_id(system) -> str:
        return str(system.key)

    return AlchemicalNetworkPayload(
        name=net.name,
        data=AlchemicalNetworkData(
            name=net.name or "",
            nodes=[
                AlchemicalNode(
                    id=node_id(system),
                    name=system.name or "",
                    components=[_component_summary(label, c) for label, c in sorted(system.components.items())],
                )
                for system in sorted(net.nodes, key=node_id)
            ],
            edges=[
                AlchemicalEdge(
                    id=str(edge.key),
                    name=edge.name or "",
                    source=node_id(edge.stateA),
                    target=node_id(edge.stateB),
                    protocol=type(edge.protocol).__name__,
                )
                for edge in sorted(net.edges, key=lambda e: str(e.key))
            ],
        ),
    )


# --------------------------------------------------------------------------- #
# The registry                                                                  #
# --------------------------------------------------------------------------- #
#
# Keyed by gufe class *name* and looked up over the MRO, so subclasses inherit a
# parent's builder for free: `SolvatedPDBComponent` and `ProteinMembraneComponent`
# resolve through `ProteinComponent`, and `Transformation` / `NonTransformation`
# — siblings, not parent and child — both resolve through `TransformationBase`.
#
# Keying by name rather than by class is also what lets this module be imported
# without gufe installed.

PAYLOAD_REGISTRY: dict[str, Callable[[Any], Any]] = {
    "SmallMoleculeComponent": _small_molecule_payload,
    "ProteinComponent": _protein_payload,
    "SolventComponent": _solvent_payload,
    "LigandAtomMapping": _ligand_atom_mapping_payload,
    "LigandNetwork": _ligand_network_payload,
    "ChemicalSystem": _chemical_system_payload,
    "TransformationBase": _transformation_payload,
    "AlchemicalNetwork": _alchemical_network_payload,
}


def _registry_lookup(obj, registry: dict[str, Any]):
    """Look ``obj``'s type up in a registry, walking the MRO for the best match.

    Exact class first, then base classes in MRO order — so a subclass gets its
    parent's entry unless it registers its own. Returns ``None`` on no match.
    """
    for klass in type(obj).__mro__:
        hit = registry.get(klass.__name__)
        if hit is not None:
            return hit
    return None


def payload_for(obj) -> Any:
    """Serialize a gufe object into a validated payload model.

    Returns one of the ``*Payload`` models from :mod:`gufe_viz.schema`; call
    ``.model_dump(mode="json")`` for the JSON-ready dict.

    Raises
    ------
    NoVisualization
        If nothing is registered for the object's class.
    """
    builder = _registry_lookup(obj, PAYLOAD_REGISTRY)
    if builder is None:
        raise NoVisualization(obj)
    return builder(obj)


def payload_dict_for(obj) -> dict[str, Any]:
    """:func:`payload_for`, already converted to a plain JSON-ready dict."""
    return payload_for(obj).model_dump(mode="json")
