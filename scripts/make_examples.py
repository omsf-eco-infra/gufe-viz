#!/usr/bin/env python
"""Build ``examples/*.json`` from real gufe objects.

``examples/`` is the hinge of the test strategy: the same files feed pytest,
vitest, the drag-and-drop dev page and the gallery. If they drift, everything
fails at once, which is the point.

Most of it comes from gufe's own test data, so the fixtures are real
serializations of real objects rather than something hand-typed that happens to
satisfy the schema. The two inputs gufe does not ship live in ``scripts/data/``:
the ten-ligand TYK2 network from OpenFE's RBFE tutorial, and the frozen ligands
of the synthetic two-hundred-ligand network. Both are read, never regenerated
here - see :func:`_tyk2_network` and :func:`_large_network`.

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
# `make_big_network` is imported for the rule that joins the large network up.
# A script run as `python scripts/make_examples.py` already has this on the path;
# saying so anyway means the import works however this module is reached.
sys.path.insert(0, str(REPO / "scripts"))

OUT = REPO / "examples"

#: Inputs that gufe does not ship, which this script reads rather than builds.
DATA = REPO / "scripts" / "data"


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


def _somebodys_own_component() -> gufe.Component:
    """A component gufe has never heard of, which gufe explicitly supports.

    Every other fixture is a gufe class; this one deliberately is not, because
    ``UnknownComponentViz`` exists for exactly the case where a user's own
    ``Component`` subclass turns up inside a system this repo has to draw.
    """

    class NanoparticleComponent(gufe.Component):
        """Stands in for any Component defined outside gufe."""

        @property
        def name(self) -> str:
            return "gold nanoparticle"

        @property
        def total_charge(self) -> int:
            return 0

        def _to_dict(self) -> dict:
            return {}

        @classmethod
        def _from_dict(cls, d: dict):
            return cls()

        @classmethod
        def _defaults(cls) -> dict:
            return {}

    return NanoparticleComponent()


def _renamed(mol: gufe.SmallMoleculeComponent) -> gufe.SmallMoleculeComponent:
    """``mol`` again, named after its SMILES, with its atom order untouched.

    The round trip through RDKit preserves atom indices, which is what makes it
    safe to keep an existing mapping's ``componentA_to_componentB`` when the
    molecules on either end of it are replaced by their renamed selves.
    """
    from gufe import SmallMoleculeComponent

    return SmallMoleculeComponent.from_rdkit(mol.to_rdkit(), name=mol.smiles)


def _dummy_protocol() -> gufe.Protocol:
    """gufe's own ``DummyProtocol``, from its test suite.

    A ``Transformation`` cannot be built without a ``Protocol``, and gufe ships
    no concrete one outside its tests - the real ones live in OpenFE, which this
    repo does not depend on. Borrowing the test double keeps the rule that every
    fixture here is a real serialization of a real gufe object, and the payload
    carries the protocol as a class name and nothing else, so a stand-in is
    exactly as informative as the real thing would be.
    """
    from gufe.tests.test_protocol import DummyProtocol

    return DummyProtocol(settings=DummyProtocol.default_settings())


def _solvated_transformation(
    edge: gufe.LigandAtomMapping,
    protocol: gufe.Protocol,
    systems: dict[str, gufe.ChemicalSystem] | None = None,
) -> gufe.Transformation:
    """One edge of gufe's ligand network, as a solvated transformation.

    ``systems`` is an optional cache keyed by ligand, so that a network built
    out of several of these shares one ``ChemicalSystem`` per ligand rather than
    creating a fresh, equal-but-distinct one per edge - which is what makes the
    alchemical network a connected graph instead of a row of disjoint pairs.
    """
    from gufe import ChemicalSystem, LigandAtomMapping, SolventComponent, Transformation

    if systems is None:
        systems = {}

    def system(mol: gufe.SmallMoleculeComponent) -> gufe.ChemicalSystem:
        return systems.setdefault(
            str(mol.key),
            ChemicalSystem({"ligand": mol, "solvent": SolventComponent()}, name=f"{mol.name} in water"),
        )

    ligand_a, ligand_b = _renamed(edge.componentA), _renamed(edge.componentB)
    mapping = LigandAtomMapping(ligand_a, ligand_b, edge.componentA_to_componentB, edge.annotations)
    return Transformation(
        stateA=system(ligand_a),
        stateB=system(ligand_b),
        mapping=mapping,
        protocol=protocol,
        name=f"{ligand_a.name} to {ligand_b.name}",
    )


def _alchemical_network(network: gufe.LigandNetwork, protocol: gufe.Protocol) -> gufe.AlchemicalNetwork:
    """gufe's ligand network again, one layer up: solvated systems and edges.

    Same three ligands and the same three mappings, promoted to
    ``ChemicalSystem`` nodes and ``Transformation`` edges - so the two network
    views can be compared side by side in the gallery on data that is the same
    underneath.
    """
    from gufe import AlchemicalNetwork

    systems: dict[str, gufe.ChemicalSystem] = {}
    edges = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    return AlchemicalNetwork(
        [_solvated_transformation(edge, protocol, systems) for edge in edges],
        name="solvated ligand transformations",
    )


def _tyk2_rbfe_network() -> gufe.AlchemicalNetwork:
    """The ten TYK2 ligands as the binding campaign OpenFE plans from them.

    :func:`_alchemical_network` promotes a ligand network into solvated
    transformations, which is the shape of a hydration campaign. A *binding*
    campaign is the other shape, and the difference shows up in the view: every
    mapping becomes two transformations - a solvent leg and a complex leg - so
    the graph is two components rather than one, and the complex leg's chemical
    systems carry a protein. It is the only fixture where an alchemical node
    holds anything but a ligand and a solvent, which is what makes the
    node-level component dispatch reachable from the alchemical view at all.

    The protein is the TYK2 kinase domain from the same RBFE tutorial the
    mappings come from, committed as ``scripts/data/tyk2_protein.pdb`` for the
    reason given in :func:`_tyk2_network`: neither it nor the planner is a
    dependency of this repository, so it is read rather than rebuilt.

    Unlike :func:`_solvated_transformation`, the ligands are not renamed here.
    They arrive from the GraphML already named - ``lig_ejm_31`` and friends - and
    a real campaign's labels are the point of the fixture.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, ProteinComponent, SolventComponent, Transformation

    protocol = _dummy_protocol()
    solvent = SolventComponent()
    protein = ProteinComponent.from_pdb_file(str(DATA / "tyk2_protein.pdb"), name="tyk2")

    # Insertion order is iteration order, so the leg loop below is deterministic.
    legs = {
        "solvent": {"solvent": solvent},
        "complex": {"solvent": solvent, "protein": protein},
    }
    systems: dict[tuple[str, str], gufe.ChemicalSystem] = {}

    def system(mol: gufe.SmallMoleculeComponent, leg: str) -> gufe.ChemicalSystem:
        """One shared system per (ligand, leg), so each leg is a connected graph."""
        return systems.setdefault(
            (str(mol.key), leg),
            ChemicalSystem({"ligand": mol, **legs[leg]}, name=f"{mol.name}_{leg}"),
        )

    # Sorted by gufe key for the same byte-stability reason as everywhere else here.
    edges = sorted(_tyk2_network().edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    return AlchemicalNetwork(
        [
            Transformation(
                stateA=system(edge.componentA, leg),
                stateB=system(edge.componentB, leg),
                mapping=edge,
                protocol=protocol,
                name=f"{edge.componentA.name} to {edge.componentB.name} ({leg})",
            )
            for edge in edges
            for leg in legs
        ],
        name="TYK2 RBFE campaign",
    )


def _large_alchemical_network() -> gufe.AlchemicalNetwork:
    """The two-hundred-ligand load fixture, one layer up.

    The same nodes and the same 594 mappings as ``ligand_network_large.json``,
    promoted to chemical systems and transformations - so the level-of-detail
    rule can be seen on the alchemical view at the size it was written for, and
    against the ligand view of a graph that is the same underneath.

    Solvated rather than a binding campaign: a second leg would double both the
    payload and the transformation count without reaching a drawing case
    :func:`_tyk2_rbfe_network` does not already cover. **The mappings are
    synthetic**, exactly as in the ligand network - see :func:`_large_network`.
    """
    from gufe import AlchemicalNetwork, ChemicalSystem, SolventComponent, Transformation

    protocol = _dummy_protocol()
    solvent = SolventComponent()
    systems: dict[str, gufe.ChemicalSystem] = {}

    def system(mol: gufe.SmallMoleculeComponent) -> gufe.ChemicalSystem:
        return systems.setdefault(
            str(mol.key),
            ChemicalSystem({"ligand": mol, "solvent": solvent}, name=f"{mol.name} in water"),
        )

    edges = sorted(_large_network().edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))
    return AlchemicalNetwork(
        [
            Transformation(
                stateA=system(edge.componentA),
                stateB=system(edge.componentB),
                mapping=edge,
                protocol=protocol,
                name=f"{edge.componentA.name} to {edge.componentB.name}",
            )
            for edge in edges
        ],
        name="two hundred solvated ligands",
    )


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


def _mapping_between(network: gufe.LigandNetwork, name_a: str, name_b: str) -> gufe.LigandAtomMapping:
    """The edge of ``network`` running from the ligand ``name_a`` to ``name_b``.

    Named rather than indexed, for the reason the base ``ligand_atom_mapping``
    fixture is sorted by gufe key: a network's edges are a frozenset, so the
    n-th of them is whatever order this process happened to yield, and these
    files are committed and have to be byte-identical across runs. Naming the
    pair also puts the choice in the source, where the reason for it can be
    read - see :func:`build` for why each of these two was picked.
    """
    for edge in network.edges:
        if (edge.componentA.name, edge.componentB.name) == (name_a, name_b):
            return edge
    raise LookupError(f"this network has no mapping from {name_a!r} to {name_b!r}")


def _tyk2_network() -> gufe.LigandNetwork:
    """Ten TYK2 ligands and the nine mappings OpenFE planned between them.

    From the RBFE tutorial in OpenFE's ExampleNotebooks, where
    ``openfe plan-rbfe-network`` writes it out of ``tyk2_ligands.sdf``. Committed
    as ``scripts/data/tyk2_network.graphml`` because neither the ligands nor the
    planner is a dependency of this repository, and read rather than replanned:
    a network whose edges came out of a real mapper is the point of it, and
    re-running one here would need OpenFE and would still not be byte-stable.

    It is the middle of the three sizes: three ligands is the shape of a network,
    ten is what one looks like, and the level-of-detail work is answering for two
    hundred. All three are in ``examples/`` so a change to the view can be seen
    at each.
    """
    from gufe import LigandNetwork

    return LigandNetwork.from_graphml((DATA / "tyk2_network.graphml").read_text(encoding="utf-8"))


#: Forward edges per ligand in the large network, matching what
#: ``make_big_network`` was run with. Three is enough to make the graph dense
#: enough to be worth drawing without tripling the payload.
_LARGE_EDGES_PER_NODE = 3


def _large_network() -> gufe.LigandNetwork:
    """Two hundred ligands, joined by mappings that are not chemistry.

    **A load fixture.** The molecules are real, embedded structures - that is what
    makes the payload size and the depiction cost real - but the mappings pair
    atoms by index and score them with an arithmetic ramp. Nothing about an edge
    here means anything, and the gallery note says so beside the picture.

    The ligands are read from ``scripts/data/large_network.sdf`` rather than
    embedded, which is what makes a fixture this size byte-stable: see the note
    at the top of ``make_big_network.py``, whose ``--sdf`` wrote that file, and
    whose :func:`synthetic_mappings` is imported here so the edge rule has one
    home rather than two.
    """
    from gufe import LigandNetwork, SmallMoleculeComponent
    from make_big_network import synthetic_mappings
    from rdkit import Chem

    supplier = Chem.SDMolSupplier(str(DATA / "large_network.sdf"), removeHs=False)
    mols = [SmallMoleculeComponent.from_rdkit(mol) for mol in supplier if mol is not None]
    return LigandNetwork(nodes=mols, edges=synthetic_mappings(mols, _LARGE_EDGES_PER_NODE))


def build() -> dict[str, GufeTokenizable]:
    """Return ``{filename: gufe object}``.

    Every declared type is represented. The two that need a
    :class:`gufe.Protocol` borrow gufe's own ``DummyProtocol`` - see
    :func:`_dummy_protocol` for why a stand-in is exactly as informative as a
    real one here.
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
    protocol = _dummy_protocol()

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
        # The third V1 kind, at three sizes and in four variants. gufe's own
        # fixture twice over, whose molecules are unnamed and then named; a real
        # ten-ligand network from OpenFE's tutorial; and a synthetic two hundred,
        # which is the size the level-of-detail work is for.
        "ligand_network.json": network,
        "ligand_network_named.json": _named_network(network),
        "ligand_network_medium.json": _tyk2_network(),
        "ligand_network_large.json": _large_network(),
        # Kinds that have no view yet. Committed now so the schema, both
        # validators and the "no visualization for X yet" panel are all exercised
        # against real data before the views exist.
        "solvent.json": SolventComponent(),
        # A mapping on its own, at three sizes cut from the three networks
        # above, so the standalone mapping view can be seen on the same data as
        # the network view that embeds it.
        #
        # The small one is gufe's own first edge: ethanol to ethane, two atoms
        # paired, which is the shape of a mapping and nothing else. The medium
        # one is the real thing - a LOMAP-scored TYK2 edge that grows a methyl
        # into a cyclopentyl, so 28 of ligand A's 32 atoms map and 14 of ligand
        # B's 42 are left unmapped, which is what the colouring is for. The
        # large one is the biggest pair the load network holds, 36 atoms against
        # 31; its correspondence is synthetic, as every edge of that network is.
        "ligand_atom_mapping.json": mapping,
        "ligand_atom_mapping_medium.json": _mapping_between(_tyk2_network(), "lig_ejm_31", "lig_ejm_48"),
        "ligand_atom_mapping_large.json": _mapping_between(_large_network(), "lig_0195", "lig_0198"),
        # The two kinds that need a Protocol. Both are the same three ligands as
        # the network above, one layer up, so the gallery reads as one story.
        "transformation.json": _solvated_transformation(mapping, protocol),
        # The alchemical network at the same three sizes as the ligand network
        # above, for the same reason: a view that reads on three nodes can be
        # unusable on two hundred. The middle one is a binding campaign rather
        # than a hydration one, which is the only place a protein reaches an
        # alchemical node.
        "alchemical_network.json": _alchemical_network(network, protocol),
        "alchemical_network_medium.json": _tyk2_rbfe_network(),
        "alchemical_network_large.json": _large_alchemical_network(),
        # Not a gufe class at all, which is the only way to produce this type.
        "unknown_component.json": _somebodys_own_component(),
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
