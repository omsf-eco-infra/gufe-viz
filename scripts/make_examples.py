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

import json
import pathlib
import re
import sys
import warnings

REPO = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))

OUT = REPO / "examples"


def _gufe_data() -> pathlib.Path:
    import gufe

    return pathlib.Path(gufe.__file__).parent / "tests" / "data"


def _benzene_modifications() -> dict:
    """The seven substituted benzenes gufe ships, keyed by name."""
    from gufe import SmallMoleculeComponent
    from rdkit import Chem

    supplier = Chem.SDMolSupplier(str(_gufe_data() / "benzene_modifications.sdf"), removeHs=False)
    return {m.GetProp("_Name"): SmallMoleculeComponent.from_rdkit(m) for m in supplier if m is not None}


def _acetate():
    """A charged molecule, so `total_charge` is exercised as something but 0."""
    from gufe import SmallMoleculeComponent
    from rdkit import Chem
    from rdkit.Chem import AllChem

    mol = Chem.AddHs(Chem.MolFromSmiles("CC(=O)[O-]"))
    AllChem.EmbedMolecule(mol, randomSeed=0xF00D)
    AllChem.MMFFOptimizeMolecule(mol)
    mol.SetProp("_Name", "acetate")
    return SmallMoleculeComponent.from_rdkit(mol)


def _named_network(network):
    """``network`` again, with every ligand named after its SMILES.

    gufe's GraphML fixture has three unnamed molecules, which is a realistic and
    awkward case — the network view has to fall back to a short form of the gufe
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


def build() -> dict[str, object]:
    """Return ``{filename: gufe object}``.

    Two kinds are absent on purpose. ``Transformation`` and
    ``AlchemicalNetwork`` cannot be built without inventing a
    :class:`gufe.Protocol`, and neither has a view before Phase 4/5 — their
    example payloads land with their views, alongside a real protocol to point
    them at. Both are already declared in the schema, so adding them is a minor
    version bump and nothing more.
    """
    from gufe import ChemicalSystem, LigandNetwork, ProteinComponent, SolventComponent

    data = _gufe_data()
    mols = _benzene_modifications()
    network = LigandNetwork.from_graphml((data / "ligand_network.graphml").read_text())
    # Sorted by gufe key so the chosen edge does not depend on set iteration
    # order — these files are committed and must be byte-stable across runs and
    # platforms. Names would not do it: every molecule in gufe's GraphML fixture
    # is unnamed, so a name-keyed sort is a three-way tie broken by whatever
    # order the frozenset happens to yield in this process.
    mapping = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))[0]
    benzene = mols["benzene"]

    return {
        # Two variants per V1 kind (R10): with and without a formal charge, and
        # a whole protein against a single-chain fragment of it.
        "small_molecule.json": benzene,
        "small_molecule_charged.json": _acetate(),
        "protein.json": ProteinComponent.from_pdb_file(str(data / "181l.pdb"), name="181l"),
        "protein_fragment.json": _protein_fragment(data / "181l.pdb"),
        # Two variants of the third V1 kind: gufe's own fixture, whose molecules
        # are unnamed, and the same network with names.
        "ligand_network.json": network,
        "ligand_network_named.json": _named_network(network),
        # Kinds whose views arrive in Phase 4. Committed now so the schema, both
        # validators and the "no visualization for X yet" panel are all exercised
        # against real data before the views exist.
        "solvent.json": SolventComponent(),
        "ligand_atom_mapping.json": mapping,
        "chemical_system.json": ChemicalSystem(
            {"ligand": benzene, "solvent": SolventComponent()},
            name="benzene in water",
        ),
    }


def _protein_fragment(pdb_path: pathlib.Path):
    """Chain A, residues 1–40 of ``181l``, plus its hetero atoms.

    A ~50 kB stand-in for the 214 kB original: small enough to read in a diff and
    to render instantly in the gallery, while still being a real PDB that 3Dmol
    draws a real cartoon from.
    """
    from gufe import ProteinComponent

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
    text = "\n".join(header + keep + ["END"]) + "\n"

    import io

    return ProteinComponent.from_pdb_file(io.StringIO(text), name="181l_fragment")


#: OpenMM stamps its own version and *today's date* into the first REMARK of
#: every PDB it writes, so a protein fixture regenerated tomorrow, or on a
#: machine with a different OpenMM, differs from the committed one for reasons
#: that have nothing to do with this repo. The provenance is worth keeping; the
#: two moving parts are not.
_OPENMM_REMARK = re.compile(r"^REMARK   1 CREATED WITH OPENMM.*$", re.M)


def _stabilise(payload: dict) -> dict:
    """Strip the parts of a payload that change without anything changing."""
    for key in ("pdb",):
        value = payload.get("data", {}).get(key)
        if isinstance(value, str):
            payload["data"][key] = _OPENMM_REMARK.sub("REMARK   1 CREATED WITH OPENMM", value)
    return payload


def main() -> int:
    from gufe_viz import payload_dict_for

    OUT.mkdir(parents=True, exist_ok=True)

    # gufe warns about hydrogens when reading some of its own test SDFs. That is
    # about the fixture, not about anything this script does.
    with warnings.catch_warnings():
        warnings.simplefilter("ignore", UserWarning)
        objects = build()

    written = 0
    for filename, obj in objects.items():
        path = OUT / filename
        text = json.dumps(_stabilise(payload_dict_for(obj)), indent=2, sort_keys=False) + "\n"
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
