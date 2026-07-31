"""The Python↔TypeScript contract, as Pydantic models.

**This module is the single source of truth for the payload format.**
``schema/gufe-viz.schema.json`` is generated from it (``pixi run schema``), and
``ts/src/schema/types.ts`` is generated from that (``pixi run types``). CI
rebuilds both and fails on any difference, so the two languages cannot drift.

What crosses the boundary
-------------------------
SDF, PDB and flat, plain JSON — and nothing else. gufe's own ``to_json`` never
reaches TypeScript. Deduplicated key-chains, ``:custom:`` codecs, the
``to_dict`` / ``to_json`` divergence: all of that stays a Python problem,
because the alternative is a large amount of ugly TypeScript that has to track
gufe's serialization forever.

GraphML is the one thing the plan allowed across that this schema does not send.
``LigandNetwork.to_graphml()`` embeds a gufe ``to_json`` moldict per node, so
forwarding it only moves the problem: see :class:`LigandNetworkData`.

The envelope
------------
Every payload has the same four-part shape::

    {
        "schema_version": "1.0",  # major bump = breaking change
        "kind": "SmallMoleculeComponent",  # the closed discriminator
        "name": "ligand_23",
        "data": {...},  # per-kind, everything the view draws
        "extra": {...},  # reserved; V1 views ignore it
    }

``kind`` is closed and explicit: a chemical-system view handed something else
refuses it by name rather than guessing from which keys happen to be present.

``extra`` is the only place additional properties are allowed. It exists so
richer gufe data — the full gufe JSON, per-atom annotations, formal charge on
hover — can be added later without a schema break. Everything else forbids
unknown keys, so a typo in a payload builder is a validation error instead of a
blank picture.

All eight kinds are declared here even though only three have views so far.
Declaring them up front costs nothing and avoids a schema-version bump for each
view added in Phase 4.
"""

from __future__ import annotations

from typing import Annotated, Any, Literal

from pydantic import BaseModel, ConfigDict, Field

#: The current schema version. The **major** is the compatibility promise: a
#: TypeScript build refuses a payload whose major it does not know, rather than
#: rendering it wrongly. Minors are additive (a new ``kind``, a new optional
#: field) and older payloads keep validating.
SCHEMA_VERSION = "1.0"

#: Encoded into the schema itself, so a bumped major is rejected by the JSON
#: Schema on both sides rather than only by hand-written Python.
_VERSION_PATTERN = r"^1\.(0|[1-9][0-9]*)$"


class _Strict(BaseModel):
    """Base for every model here: unknown keys are an error, not a shrug."""

    model_config = ConfigDict(extra="forbid")


# --------------------------------------------------------------------------- #
# Shared shapes                                                                 #
# --------------------------------------------------------------------------- #
#
# ChemicalSystem, Transformation and AlchemicalNetwork all describe the
# components they contain. They share these two shapes so one piece of drawing
# code renders a component wherever it turns up.


class ComponentSummary(_Strict):
    """What a component *is*, with no structure data — topology only."""

    label: str = Field(description="The component's key in its ChemicalSystem.")
    type: str = Field(description="The gufe class name, e.g. 'SmallMoleculeComponent'.")
    name: str = ""


class ComponentDescriptor(ComponentSummary):
    """A summary plus whatever the viz needs to draw the component.

    Exactly one of ``sdf`` / ``pdb`` / the solvent fields is populated, chosen by
    what the component can serialize itself as. ``error`` is set instead when a
    component fails to serialize — one bad component must not take down the whole
    view.
    """

    sdf: str | None = None
    smiles: str | None = None
    pdb: str | None = None

    # SolventComponent fields, inlined rather than nested: a solvent is a
    # specification, not a structure, and this keeps one flat shape per component.
    positive_ion: str | None = None
    negative_ion: str | None = None
    neutralize: bool | None = None
    ion_concentration: str | None = Field(
        default=None,
        description="Stringified openff Quantity, e.g. '0.15 molar'.",
    )

    error: str | None = None


class MappingData(_Strict):
    """A :class:`gufe.LigandAtomMapping`: both endpoints plus the index map.

    Both molecules go over as SDF and the correspondence as a plain
    ``{str(indexA): indexB}`` map, so the viewer can colour core and unique atoms
    and draw the lines itself. JSON object keys must be strings, which is why the
    A-side indices are stringified rather than left as integers.
    """

    molA_sdf: str
    molB_sdf: str
    nameA: str = ""
    nameB: str = ""
    componentA_to_componentB: dict[str, int] = Field(default_factory=dict)
    annotations: dict[str, Any] = Field(default_factory=dict)


class ChemicalSystemFields(_Strict):
    """The inner object shared by the chemical-system and transformation views."""

    name: str = ""
    components: list[ComponentDescriptor] = Field(default_factory=list)


class AlchemicalNode(_Strict):
    id: str = Field(description="The ChemicalSystem's gufe key.")
    name: str = ""
    components: list[ComponentSummary] = Field(default_factory=list)


class AlchemicalEdge(_Strict):
    id: str = Field(description="The Transformation's gufe key.")
    name: str = ""
    source: str = Field(description="Node id of stateA.")
    target: str = Field(description="Node id of stateB.")
    protocol: str = ""


# --------------------------------------------------------------------------- #
# Per-kind data                                                                 #
# --------------------------------------------------------------------------- #


class SmallMoleculeData(_Strict):
    sdf: str = Field(description="SmallMoleculeComponent.to_sdf() output, verbatim.")
    smiles: str | None = None
    total_charge: int | None = None


class ProteinData(_Strict):
    pdb: str = Field(description="ProteinComponent.to_pdb_file() output, verbatim.")


class SolventData(_Strict):
    smiles: str = "O"
    positive_ion: str | None = None
    negative_ion: str | None = None
    neutralize: bool | None = None
    ion_concentration: str | None = None


class LigandNetworkNode(_Strict):
    """One ligand in a :class:`gufe.LigandNetwork`.

    ``id`` is the component's gufe key, which is what the edges reference. It is
    an identity, not a label: gufe's own network fixtures have unnamed molecules,
    so the view falls back to a short form of the key when ``name`` is empty.
    """

    id: str = Field(description="The SmallMoleculeComponent's gufe key.")
    name: str = ""
    sdf: str = Field(description="SmallMoleculeComponent.to_sdf() output, verbatim.")
    smiles: str | None = None


class LigandNetworkEdge(_Strict):
    """One :class:`gufe.LigandAtomMapping`, as a graph edge.

    The endpoints are node ``id``s rather than inlined molecules: a network with
    forty ligands and sixty edges would otherwise carry each SDF twice over. The
    atom correspondence rides along so the mapping viewer can be handed a
    :class:`MappingData` assembled from the two endpoint nodes plus this edge —
    which is how R14's "exact same component" is honoured without duplicating the
    structures.
    """

    source: str = Field(description="Node id of componentA.")
    target: str = Field(description="Node id of componentB.")
    score: float | None = Field(
        default=None,
        description="The mapping's score annotation, when it has one — usually LOMAP's 0–1.",
    )
    componentA_to_componentB: dict[str, int] = Field(default_factory=dict)
    annotations: dict[str, Any] = Field(default_factory=dict)


class LigandNetworkData(_Strict):
    """A ligand network as nodes and edges, not as GraphML.

    ``LigandNetwork.to_graphml()`` is gufe's canonical serialization and the
    obvious thing to forward, but its node payloads *are* gufe's ``to_json``
    moldicts — atomic numbers, bond tuples and a base-1-per-char ``.npy``
    conformer blob. Forwarding it makes the browser decode all of that to draw
    anything, which is precisely the "lot of ugly TypeScript to maintain" R8
    rules out. So Python walks the live network instead and hands over SDF plus
    flat topology, and the GraphML does not cross the boundary at all.
    """

    nodes: list[LigandNetworkNode]
    edges: list[LigandNetworkEdge]


class ChemicalSystemData(ChemicalSystemFields):
    """A ChemicalSystem is exactly its labelled components."""


class TransformationData(_Strict):
    name: str = ""
    protocol: str = Field(default="", description="The Protocol's class name.")
    stateA: ChemicalSystemFields
    stateB: ChemicalSystemFields
    mappings: list[MappingData] = Field(default_factory=list)


class AlchemicalNetworkData(_Strict):
    name: str = ""
    nodes: list[AlchemicalNode] = Field(default_factory=list)
    edges: list[AlchemicalEdge] = Field(default_factory=list)


# --------------------------------------------------------------------------- #
# The envelope                                                                  #
# --------------------------------------------------------------------------- #


class _Payload(_Strict):
    """Fields common to every payload. Not used directly — see :data:`Payload`."""

    schema_version: str = Field(
        default=SCHEMA_VERSION,
        pattern=_VERSION_PATTERN,
        description=(
            "Schema version. A reader that does not know this major must refuse "
            "the payload rather than render it wrongly."
        ),
    )
    name: str | None = Field(default=None, description="The object's name, for the title bar.")
    extra: dict[str, Any] = Field(
        default_factory=dict,
        description=(
            "Reserved forward-compatibility slot. The only place additional "
            "properties are permitted; V1 views ignore its contents entirely."
        ),
    )


class SmallMoleculePayload(_Payload):
    kind: Literal["SmallMoleculeComponent"] = "SmallMoleculeComponent"
    data: SmallMoleculeData


class ProteinPayload(_Payload):
    kind: Literal["ProteinComponent"] = "ProteinComponent"
    data: ProteinData


class SolventPayload(_Payload):
    kind: Literal["SolventComponent"] = "SolventComponent"
    data: SolventData


class LigandAtomMappingPayload(_Payload):
    kind: Literal["LigandAtomMapping"] = "LigandAtomMapping"
    data: MappingData


class LigandNetworkPayload(_Payload):
    kind: Literal["LigandNetwork"] = "LigandNetwork"
    data: LigandNetworkData


class ChemicalSystemPayload(_Payload):
    kind: Literal["ChemicalSystem"] = "ChemicalSystem"
    data: ChemicalSystemData


class TransformationPayload(_Payload):
    kind: Literal["Transformation"] = "Transformation"
    data: TransformationData


class AlchemicalNetworkPayload(_Payload):
    kind: Literal["AlchemicalNetwork"] = "AlchemicalNetwork"
    data: AlchemicalNetworkData


#: The discriminated union. ``kind`` selects the branch, so a payload that
#: claims to be one thing is never validated as another (R20).
Payload = Annotated[
    SmallMoleculePayload
    | ProteinPayload
    | SolventPayload
    | LigandAtomMappingPayload
    | LigandNetworkPayload
    | ChemicalSystemPayload
    | TransformationPayload
    | AlchemicalNetworkPayload,
    Field(discriminator="kind"),
]

#: Every declared kind, in the order they appear in the union. The Python
#: registry, this tuple and the schema's ``kind`` enum are asserted equal by the
#: dispatch-parity test.
PAYLOAD_KINDS: tuple[str, ...] = (
    "SmallMoleculeComponent",
    "ProteinComponent",
    "SolventComponent",
    "LigandAtomMapping",
    "LigandNetwork",
    "ChemicalSystem",
    "Transformation",
    "AlchemicalNetwork",
)
