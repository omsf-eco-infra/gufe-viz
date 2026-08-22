#!/usr/bin/env python
"""Build ``examples/*.json`` from real gufe objects.

``examples/`` is the hinge of the test strategy: the same files feed pytest,
vitest, the drag-and-drop dev page and the gallery. If they drift, everything
fails at once, which is the point.

Everything here comes from gufe's own test data, so the fixtures are real
serializations of real objects rather than something hand-typed that happens to
satisfy the schema.

Run with ``pixi run examples``.
"""

from __future__ import annotations

import io
import json
import pathlib
import re
import sys
import warnings

import gufe
from gufe.tokenization import GufeTokenizable

REPO = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))

OUT = REPO / "examples"


def _gufe_data() -> pathlib.Path:
    import gufe

    return pathlib.Path(gufe.__file__).parent / "tests" / "data"


def _benzene_modifications() -> dict[str, gufe.SmallMoleculeComponent]:
    """The seven substituted benzenes gufe ships, keyed by name."""
    from gufe import SmallMoleculeComponent
    from rdkit import Chem

    supplier = Chem.SDMolSupplier(str(_gufe_data() / "benzene_modifications.sdf"), removeHs=False)
    return {m.GetProp("_Name"): SmallMoleculeComponent.from_rdkit(m) for m in supplier if m is not None}


# Coordinate precision the fixtures are quantized to, matching the four decimal
# places a V2000 mol block stores.
_COORD_DECIMALS = 4

# How far a coordinate must sit from a rounding boundary for _quantize to accept
# it. ETKDG and MMFF are floating point pipelines whose results agree between
# platforms to roughly twelve decimal places, so a gap this size means every
# platform rounds to the same double. A coordinate closer than this to a
# boundary is not safe to round, and a divergence bigger than this is not
# floating point noise, it is a different minimum.
_COORD_TIE_MARGIN = 1e-9


def _quantize(mol):
    """Round ``mol``'s conformer to `_COORD_DECIMALS`, in place.

    A gufe key is a hash of the full precision float64 conformer, but a mol
    block stores four decimals. An embedded conformer therefore serializes to
    the same SDF bytes on every platform while hashing to a different key, which
    showed up as check_generated.sh failing in CI and passing on a developer
    machine. Rounding to the precision the SDF already shows makes the key
    describe exactly the coordinates a reader can see, on every platform.
    """
    from rdkit.Geometry import Point3D

    conf = mol.GetConformer()
    for index in range(mol.GetNumAtoms()):
        pos = conf.GetAtomPosition(index)
        conf.SetAtomPosition(index, Point3D(*(_round_coord(v) for v in (pos.x, pos.y, pos.z))))
    return mol


def _round_coord(value: float) -> float:
    rounded = round(value, _COORD_DECIMALS)
    if abs(value - rounded) > 0.5 * 10**-_COORD_DECIMALS - _COORD_TIE_MARGIN:
        raise AssertionError(
            f"coordinate {value!r} is within {_COORD_TIE_MARGIN} of a rounding boundary, "
            f"so it would not round the same way on every platform. Re-embed with a "
            f"different seed, or freeze this conformer as a mol block literal."
        )
    return rounded


def _acetate() -> gufe.SmallMoleculeComponent:
    """A charged molecule, so `total_charge` is exercised as something but 0."""
    from gufe import SmallMoleculeComponent
    from rdkit import Chem
    from rdkit.Chem import AllChem

    mol = Chem.AddHs(Chem.MolFromSmiles("CC(=O)[O-]"))
    AllChem.EmbedMolecule(mol, randomSeed=0xF00D)
    AllChem.MMFFOptimizeMolecule(mol)
    mol.SetProp("_Name", "acetate")
    return SmallMoleculeComponent.from_rdkit(_quantize(mol))


def _named_network(network: gufe.LigandNetwork) -> gufe.LigandNetwork:
    """``network`` again, with every ligand named after its SMILES.

    gufe's GraphML fixture has three unnamed molecules, which is a realistic and
    awkward case - the network view has to fall back to a short form of the gufe
    key for its node labels. This variant is the other half of that pair: same
    topology, same mappings, same scores, but with names, so the labelled path is
    exercised too and the gallery card is legible.
    """
    from gufe import LigandAtomMapping, LigandNetwork, SmallMoleculeComponent

    renamed = {
        str(mol.key): SmallMoleculeComponent.from_rdkit(mol.to_rdkit(), name=mol.smiles) for mol in network.nodes
    }
    return LigandNetwork(
        nodes=list(renamed.values()),
        edges=[
            LigandAtomMapping(
                renamed[str(edge.componentA.key)],
                renamed[str(edge.componentB.key)],
                edge.componentA_to_componentB,
                edge.annotations,
            )
            for edge in network.edges
        ],
    )


def build() -> dict[str, GufeTokenizable]:
    """Return ``{filename: gufe object}``.

    Two types are absent on purpose. ``TransformationViz`` and
    ``AlchemicalNetworkViz`` cannot be built without inventing a
    :class:`gufe.Protocol`, and neither has a view yet - their
    example payloads land with their views, alongside a real protocol to point
    them at. Both are already declared in the schema, so adding them later is an
    additive change and nothing more.
    """
    from gufe import ChemicalSystem, LigandNetwork, ProteinComponent, SolventComponent

    data = _gufe_data()
    mols = _benzene_modifications()
    network = LigandNetwork.from_graphml((data / "ligand_network.graphml").read_text())
    # Sorted by gufe key so the chosen edge does not depend on set iteration
    # order - these files are committed and must be byte-stable across runs and
    # platforms. Names would not do it: every molecule in gufe's GraphML fixture
    # is unnamed, so a name-keyed sort is a three-way tie broken by whatever
    # order the frozenset happens to yield in this process.
    mapping = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))[0]
    benzene = mols["benzene"]

    return {
        # Two variants per kind: with and without a formal charge, and
        # a whole protein against a single-chain fragment of it.
        "small_molecule.json": benzene,
        "small_molecule_charged.json": _acetate(),
        "protein.json": ProteinComponent.from_pdb_file(str(data / "181l.pdb"), name="181l"),
        "protein_fragment.json": _protein_fragment(data / "181l.pdb"),
        # The two PDB-carrying subclasses. They exist so the schema's three
        # PDB types are each exercised against a real object, and - more to the
        # point - so the dispatch order is proved on real data: both of these
        # are ProteinComponents, and a builder table in the wrong order would
        # quietly serialize them as one.
        "solvated_pdb.json": _solvated(data / "181l.pdb", "SolvatedPDBComponent"),
        "protein_membrane.json": _solvated(data / "181l.pdb", "ProteinMembraneComponent"),
        # Two variants of the third V1 kind: gufe's own fixture, whose molecules
        # are unnamed, and the same network with names.
        "ligand_network.json": network,
        "ligand_network_named.json": _named_network(network),
        # Kinds that have no view yet. Committed now so the schema, both
        # validators and the "no visualization for X yet" panel are all exercised
        # against real data before the views exist.
        "solvent.json": SolventComponent(),
        "ligand_atom_mapping.json": mapping,
        "chemical_system.json": ChemicalSystem(
            {"ligand": benzene, "solvent": SolventComponent()},
            name="benzene in water",
        ),
    }


def _solvated(pdb_path: pathlib.Path, class_name: str) -> gufe.ProteinComponent:
    """A small ``SolvatedPDBComponent`` or ``ProteinMembraneComponent``.

    Both need box vectors, which ``infer_box_vectors`` derives from the
    coordinates with a fixed padding - so no magic numbers here, and the result
    is byte-stable. The same trimmed fragment as ``protein_fragment.json`` keeps
    the committed files reviewable.
    """
    import gufe

    klass = getattr(gufe, class_name)
    return klass.from_pdb_file(
        io.StringIO(_fragment_text(pdb_path)),
        name=f"181l_{class_name}",
        infer_box_vectors=True,
    )


def _fragment_text(pdb_path: pathlib.Path) -> str:
    """Chain A, residues 1-40 of ``181l``, plus its hetero atoms, as PDB text."""
    keep = []
    for line in pdb_path.read_text().splitlines():
        record = line[:6]
        if record not in ("ATOM  ", "HETATM") or line[21] != "A":
            continue
        try:
            resi = int(line[22:26])
        except ValueError:
            continue
        if record == "HETATM" or 1 <= resi <= 40:
            keep.append(line)

    header = [
        "HEADER    HYDROLASE(O-GLYCOSYL)",
        "TITLE     T4 LYSOZYME FRAGMENT (chain A residues 1-40 of 181L, plus hetero atoms)",
    ]
    return "\n".join(header + keep + ["END"]) + "\n"


def _protein_fragment(pdb_path: pathlib.Path) -> gufe.ProteinComponent:
    """Chain A, residues 1-40 of ``181l``, plus its hetero atoms.

    A ~50 kB stand-in for the 214 kB original: small enough to read in a diff and
    to render instantly in the gallery, while still being a real PDB that 3Dmol
    draws a real cartoon from.
    """
    from gufe import ProteinComponent

    return ProteinComponent.from_pdb_file(io.StringIO(_fragment_text(pdb_path)), name="181l_fragment")


#: OpenMM stamps its own version and *today's date* into the first REMARK of
#: every PDB it writes, so a protein fixture regenerated tomorrow, or on a
#: machine with a different OpenMM, differs from the committed one for reasons
#: that have nothing to do with this repo. The provenance is worth keeping; the
#: two moving parts are not.
_OPENMM_REMARK = re.compile(r"^REMARK   1 CREATED WITH OPENMM.*$", re.M)


def _stabilise(payload: dict) -> dict:
    """Strip the parts of a payload that change without anything changing.

    Walks the whole payload rather than one known key, because a PDB can now
    appear nested - inside a chemical system's components, or a transformation's
    two states - as well as at the top level.
    """
    if isinstance(payload, dict):
        for key, value in payload.items():
            if key == "pdb" and isinstance(value, str):
                payload[key] = _OPENMM_REMARK.sub("REMARK   1 CREATED WITH OPENMM", value)
            else:
                _stabilise(value)
    elif isinstance(payload, list):
        for item in payload:
            _stabilise(item)
    return payload


def main() -> int:
    from gufe_viz import payload_for

    OUT.mkdir(parents=True, exist_ok=True)

    # gufe warns about hydrogens when reading some of its own test SDFs. That is
    # about the fixture, not about anything this script does.
    with warnings.catch_warnings():
        warnings.simplefilter("ignore", UserWarning)
        objects = build()

    written = 0
    for filename, obj in objects.items():
        path = OUT / filename
        text = json.dumps(_stabilise(payload_for(obj)), indent=2, sort_keys=False) + "\n"
        previous = path.read_text(encoding="utf-8") if path.exists() else None
        path.write_text(text, encoding="utf-8")
        status = "unchanged" if text == previous else "wrote"
        print(f"{status:>9}  {filename:<28} {len(text):>8} bytes  ({type(obj).__name__})")
        written += 1

    # Anything left over is a file whose builder was removed; say so rather than
    # letting a stale fixture keep passing tests.
    stale = sorted(p.name for p in OUT.glob("*.json") if p.name not in objects)
    if stale:
        print(f"\nWARNING: {len(stale)} file(s) in examples/ have no builder: {', '.join(stale)}", file=sys.stderr)

    print(f"\n{written} example payload(s) in {OUT.relative_to(REPO)}/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
