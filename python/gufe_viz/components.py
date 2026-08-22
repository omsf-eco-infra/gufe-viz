"""Components and chemical systems: live gufe objects to visualization payloads.

This is the Python half of the contract. It reads **live gufe objects** and asks
them to serialize themselves the way they already know how - ``to_sdf()``,
``to_pdb_file()`` - rather than touching gufe's own JSON representation.

When the input is a saved gufe ``.json`` file, Python deserializes it into live
gufe objects *first* and then builds the payload from those. TypeScript never
sees gufe JSON.

Builders return **plain dicts**. ``schema/gufe-viz.schema.json`` is the source of
truth for their shape, and it is hand-written rather than generated from
anything here: a schema derived from Python carries across only what the
derivation step happens to translate, so a rule can be enforced in the code and
missing from the schema the browser reads. Correctness is enforced by tests
instead - every builder's output is validated against the schema, and
``python/tests/mutations.json`` proves the schema rejects what it claims to reject.
"""

from __future__ import annotations

import io
import json
from typing import Any

import gufe
from gufe.tokenization import GufeTokenizable

from .registry import Registry


def gufe_key(obj: Any) -> str:
    """The object's gufe key, as a string.

    Every payload that stands for a ``GufeTokenizable`` carries one. It is what
    the registry addresses an object by, and - because a gufe key is
    deterministic and repeatable within a software environment - it is also the
    identifier worth having in front of you when a payload does not draw.

    Note the two spellings, which are the two gufe uses. In JSON the field is
    ``gufe-key``, hyphenated, the way gufe writes it in its own serialized form.
    In Python it is ``gufe_key``, an identifier, the way gufe writes it in
    ``gufe_keys()`` and ``is_gufe_key_dict()``. This function is the Python one
    and the string it is assigned to is the JSON one.
    """
    return str(obj.key)


def display_name(obj: GufeTokenizable) -> str:
    """The object's name, as a string that is never ``None``.

    Every ``name`` in the schema is a required, non-nullable string. gufe's own
    fixtures are full of unnamed molecules, so "" is the normal case rather than
    an error, and a view that wants to show something else falls back on its own
    terms rather than having to distinguish "" from ``None``.
    """
    return getattr(obj, "name", "")


def pdb_string(component: gufe.ProteinComponent) -> str:
    """Render a PDB-capable component to a string, without a sidecar file."""
    buffer = io.StringIO()
    component.to_pdb_file(buffer)
    return buffer.getvalue()


def json_safe(value: Any) -> Any:
    """Coerce ``value`` into something ``json.dumps`` can handle.

    Free-form gufe metadata - ``LigandAtomMapping.annotations`` most of all - can
    hold ``openff.units.Quantity`` and other rich objects. A visualization only
    ever *displays* these, so rendering the leftovers with ``str()``
    ("1.2 nanometer") is both lossless enough and far more readable than gufe's
    ``:custom:`` JSON codec.
    """
    return json.loads(json.dumps(value, default=str))


# --------------------------------------------------------------------------- #
# One builder per component type                                                #
# --------------------------------------------------------------------------- #


def small_molecule_payload(component: gufe.SmallMoleculeComponent) -> dict[str, Any]:
    return {
        "type": "SmallMoleculeComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "sdf": component.to_sdf(),
        "smiles": component.smiles,
        "total_charge": component.total_charge,
    }


def protein_payload(component: gufe.ProteinComponent) -> dict[str, Any]:
    return {
        "type": "ProteinComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "pdb": pdb_string(component),
    }


def solvated_pdb_payload(component: gufe.SolvatedPDBComponent) -> dict[str, Any]:
    return {
        "type": "SolvatedPDBComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "pdb": pdb_string(component),
    }


def protein_membrane_payload(component: gufe.ProteinMembraneComponent) -> dict[str, Any]:
    return {
        "type": "ProteinMembraneComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "pdb": pdb_string(component),
    }


def solvent_payload(component: gufe.SolventComponent) -> dict[str, Any]:
    return {
        "type": "SolventComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "smiles": component.smiles,
        "positive_ion": component.positive_ion,
        "negative_ion": component.negative_ion,
        "neutralize": component.neutralize,
        # An openff Quantity carries its unit, and the view only ever prints it.
        "ion_concentration": str(component.ion_concentration),
    }


def unknown_component_payload(component: gufe.Component) -> dict[str, Any]:
    """The graceful fallback: enough to name the thing, nothing to draw it."""
    return {
        "type": "UnknownComponentViz",
        "gufe-key": gufe_key(component),
        "name": display_name(component),
        "gufe_type": type(component).__name__,
    }


def protocol_payload(protocol: Any) -> dict[str, Any]:
    """A gufe Protocol, named.

    A Protocol has no ``name`` of its own, so the class name is what identifies
    it and ``name`` is normally empty. Settings are left out for now: they are
    large, deeply nested and nothing draws them, and adding them later is an
    additive change.
    """
    return {
        "type": "ProtocolViz",
        "gufe-key": gufe_key(protocol),
        "name": display_name(protocol),
        "gufe_type": type(protocol).__name__,
    }


# --------------------------------------------------------------------------- #
# Dispatch                                                                      #
# --------------------------------------------------------------------------- #
#
# Ordered most-derived first, because a subclass must be recognized before its
# parent. The PDB-carrying types form a three-deep chain in gufe:
#
#     ProteinMembraneComponent -> SolvatedPDBComponent -> ProteinComponent
#
# so listing them in any other order would serialize a membrane system as a
# plain protein and throw away the distinction the discriminator exists to
# carry. `test_dispatch_order_matches_the_gufe_class_hierarchy` derives that
# chain from gufe itself and fails if this list stops agreeing with it, so the
# ordering is checked rather than merely commented.
#
# `SolventComponent` is last but not subordinate: it descends from
# `BaseSolventComponent` alongside the solvated types rather than from
# `ProteinComponent`, so it can never be shadowed by them.

COMPONENT_BUILDERS: tuple[tuple[type[gufe.Component], Any], ...] = (
    (gufe.ProteinMembraneComponent, protein_membrane_payload),
    (gufe.SolvatedPDBComponent, solvated_pdb_payload),
    (gufe.ProteinComponent, protein_payload),
    (gufe.SmallMoleculeComponent, small_molecule_payload),
    (gufe.SolventComponent, solvent_payload),
)


def component_payload(component: gufe.Component) -> dict[str, Any]:
    """Build the visualization payload for one gufe component.

    The failure rule is three-way, and the middle case is the one worth stating.
    Handed something that is not a gufe Component, this raises ``TypeError``,
    because that is programmer error. Handed an **unrecognized** Component
    subclass, it returns an ``UnknownComponentViz`` and does not raise: gufe
    plans for custom components, and raising would stop the process - in a
    notebook widget that leaves the frontend disconnected from the backend.

    But a **recognized** component whose serializer then fails is left to raise.
    A ``SmallMoleculeComponent`` whose ``to_sdf()`` blows up is a real bug, and
    catching it here would file it under "sorry, I cannot draw this" where
    nobody would ever find it.
    """
    if not isinstance(component, gufe.Component):
        raise TypeError(f"expected a gufe.Component, got {type(component).__name__}")

    for klass, builder in COMPONENT_BUILDERS:
        if isinstance(component, klass):
            return builder(component)

    return unknown_component_payload(component)


def chemical_system_payload(system: gufe.ChemicalSystem, registry: Registry | None = None) -> dict[str, Any]:
    """A chemical system, as its labels mapped to the gufe keys of its components.

    The components go into ``registry``; the system carries only their keys.
    That is what lets forty systems in an alchemical network share one protein
    without carrying the PDB forty times, and it is the same shape whether this
    system is the whole payload or one node of a network - there is no separate
    "system inside a network" type.

    When no ``registry`` is passed this system *is* the root payload, so it
    builds one and carries it. When a caller passes one, the caller is the root
    and will carry the pool itself.

    Components are sorted by label so a committed fixture is byte-stable across
    runs: gufe holds them in a dict built from a mapping whose order is not
    guaranteed to be the same twice.
    """
    if not isinstance(system, gufe.ChemicalSystem):
        raise TypeError(f"expected a gufe.ChemicalSystem, got {type(system).__name__}")

    is_root = registry is None
    pool = Registry() if registry is None else registry

    payload = {
        "type": "ChemicalSystemViz",
        "gufe-key": gufe_key(system),
        "name": display_name(system),
        "components": {
            label: pool.add(component_payload(component)) for label, component in sorted(system.components.items())
        },
    }
    if is_root:
        payload["registry"] = pool.entries()
    return payload
