"""Build a ligand network of arbitrary size, for measuring rather than for looking at.

The largest committed fixture has three ligands. The network that prompted the
scale work has 934. Nothing in this repository can currently answer "what happens
at that size", and every decision about level-of-detail, canvas rendering and
whether a self-contained page is still the right delivery depends on the answer.

**This is a load generator, not chemistry.** The molecules are real, embedded
RDKit structures, because payload size and depiction cost are exactly what is
being measured and a fake SDF would measure nothing. The *mappings* are
synthetic: atoms are paired by index over the common prefix of the two
molecules, and the score is a deterministic function of the pair. No mapper is
run, no correspondence is meaningful, and no output of this script should ever
be committed, shown to a chemist, or mistaken for a fixture.

Deliberately not part of `make_examples.py` and never written into `examples/`.
Those payloads are committed, byte-stable and checked by CI; this one is large,
disposable and generated on demand.

    pixi run big-network                     # 200 ligands, the default
    pixi run big-network -n 934 -o /tmp/x.json
    pixi run big-network -n 934 --html /tmp/x.html
"""

from __future__ import annotations

import argparse
import json
import pathlib
import sys
import time

REPO = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))

#: Scaffolds to hang substituents off. Three, so the network has some variety of
#: size and atom count rather than being one molecule repeated.
_SCAFFOLDS = ("c1ccccc1{}", "c1ccncc1{}", "C1CCCCC1{}")

#: Substituents, combined with the scaffolds to make distinct molecules. Chosen
#: to vary atom count, which is what varies depiction and payload cost.
_SUBSTITUENTS = (
    "",
    "C",
    "CC",
    "CCC",
    "O",
    "CO",
    "N",
    "CN",
    "F",
    "Cl",
    "Br",
    "C(=O)O",
    "C(=O)N",
    "S",
    "CS",
    "C(C)(C)C",
    "OC",
    "OCC",
    "NC(=O)C",
    "c1ccccc1",
)


def _smiles(count: int) -> list[str]:
    """`count` distinct SMILES, by combining scaffolds and substituents.

    Falls back to lengthening an alkyl chain once the combinations run out, so
    any size can be asked for without the generator quietly returning fewer
    molecules than requested.
    """
    out: list[str] = []
    for scaffold in _SCAFFOLDS:
        for substituent in _SUBSTITUENTS:
            out.append(scaffold.format(substituent))
            if len(out) == count:
                return out

    extra = 1
    while len(out) < count:
        out.append(_SCAFFOLDS[len(out) % len(_SCAFFOLDS)].format("C" * extra + "O"))
        extra += 1
    return out[:count]


def _molecules(count: int, seed: int):
    """`count` embedded SmallMoleculeComponents.

    Embedding dominates the runtime here - roughly a second per few dozen
    molecules - which is why progress is printed. Coordinates are deliberately
    *not* quantized: that matters for committed fixtures, whose gufe keys have to
    match across platforms, and this output is never committed.
    """
    from gufe import SmallMoleculeComponent
    from rdkit import Chem
    from rdkit.Chem import AllChem

    mols = []
    started = time.monotonic()
    for index, smiles in enumerate(_smiles(count)):
        mol = Chem.AddHs(Chem.MolFromSmiles(smiles))
        # A per-molecule seed, so a given (n, seed) always produces the same
        # network and a measurement can be repeated.
        if AllChem.EmbedMolecule(mol, randomSeed=seed + index) != 0:
            continue
        AllChem.MMFFOptimizeMolecule(mol)
        mol.SetProp("_Name", f"lig_{index:04d}")
        mols.append(SmallMoleculeComponent.from_rdkit(mol))

        if (index + 1) % 50 == 0:
            print(f"  embedded {index + 1}/{count} ({time.monotonic() - started:.1f}s)")
    return mols


def _mappings(mols, edges_per_node: int):
    """Synthetic mappings joining the molecules into a connected network.

    Each molecule is joined to the next few, which gives a connected graph with a
    predictable edge count. The atom correspondence is index-to-index over the
    shorter of the two molecules: meaningless as chemistry, correctly shaped as a
    payload, and that is all this is for.
    """
    from gufe import LigandAtomMapping

    # Atom counts once per molecule, not once per edge. `to_rdkit()` rebuilds the
    # molecule every call, and at three edges each that is six thousand rebuilds
    # on a thousand-ligand network for a number that never changes.
    atom_counts = [mol.to_rdkit().GetNumAtoms() for mol in mols]

    out = []
    for i, a in enumerate(mols):
        for step in range(1, edges_per_node + 1):
            j = i + step
            if j >= len(mols):
                continue
            b = mols[j]
            shared = min(atom_counts[i], atom_counts[j])
            # Deterministic, and spread across the whole range so the score ramp
            # and any score filter have something to bite on.
            score = ((i * 37 + j * 11) % 100) / 100.0
            out.append(
                LigandAtomMapping(
                    componentA=a,
                    componentB=b,
                    componentA_to_componentB={k: k for k in range(shared)},
                    annotations={"score": score},
                )
            )
    return out


def build(count: int, edges_per_node: int, seed: int) -> dict:
    from gufe import LigandNetwork
    from gufe_viz import payload_for

    print(f"building a {count}-ligand network")
    mols = _molecules(count, seed)
    print(f"  {len(mols)} molecules embedded")

    mappings = _mappings(mols, edges_per_node)
    print(f"  {len(mappings)} mappings")

    network = LigandNetwork(edges=mappings, nodes=mols)
    payload = payload_for(network)
    print(f"  {len(payload['nodes'])} nodes, {len(payload['edges'])} edges in the payload")
    return payload


def _report(payload: dict, json_bytes: int, html_bytes: int | None) -> None:
    """The numbers this script exists to produce."""
    print("\nmeasurements")
    print(f"  ligands            {len(payload['nodes'])}")
    print(f"  mappings           {len(payload['edges'])}")
    print(f"  registry entries   {len(payload['registry'])}")
    print(f"  payload JSON       {json_bytes:,} bytes ({json_bytes / 1_048_576:.2f} MiB)")
    if html_bytes is not None:
        print(f"  standalone page    {html_bytes:,} bytes ({html_bytes / 1_048_576:.2f} MiB)")
        print(f"  page overhead      {html_bytes - json_bytes:,} bytes (the bundle, mostly)")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        prog="make-big-network",
        description="Generate a large synthetic ligand network, to measure against.",
        epilog="A load generator. The mappings are not real; never commit the output.",
    )
    parser.add_argument("-n", "--ligands", type=int, default=200, help="how many ligands (default: 200)")
    parser.add_argument(
        "-e",
        "--edges-per-node",
        type=int,
        default=3,
        help="how many forward edges each ligand gets (default: 3)",
    )
    parser.add_argument("--seed", type=int, default=0xF00D, help="embedding seed, for a repeatable network")
    parser.add_argument(
        "-o",
        "--output",
        type=pathlib.Path,
        default=None,
        help="where to write the payload JSON (default: alongside, as big_network_<n>.json)",
    )
    parser.add_argument(
        "--html",
        type=pathlib.Path,
        nargs="?",
        const=True,
        default=None,
        help="also write a standalone page, so first paint can be timed in a browser",
    )
    args = parser.parse_args(argv)

    if args.ligands < 2:
        raise SystemExit("a network needs at least two ligands")

    payload = build(args.ligands, args.edges_per_node, args.seed)

    destination = args.output or REPO / "do-not-commit" / f"big_network_{args.ligands}.json"
    destination.parent.mkdir(parents=True, exist_ok=True)
    text = json.dumps(payload)
    destination.write_text(text, encoding="utf-8")
    print(f"\nwrote {destination}")

    html_bytes = None
    if args.html is not None:
        from gufe_viz import to_html

        page = destination.with_suffix(".html") if args.html is True else args.html
        html = to_html(payload)
        page.write_text(html, encoding="utf-8")
        html_bytes = len(html)
        print(f"wrote {page}")

    _report(payload, len(text), html_bytes)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
