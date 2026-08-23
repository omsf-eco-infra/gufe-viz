"""Draw the mapping fixtures the way gufe draws them, for side-by-side comparison.

"Our colours and the existing visualizations agree" has so far been a claim
nobody could check without opening two windows. This writes gufe's own output for
the same fixtures this project renders, so the comparison is two files in a
directory instead of a memory of what the other one looked like.

What comes out is gufe's picture, not ours, produced by calling
``gufe.visualization.mapping_visualization`` directly. Nothing here reimplements
any part of it: if this drawing and ours disagree, ours is wrong.

Three things gufe's drawing does that are easy to miss, and that the view has to
match:

* ``useBWAtomPalette()`` - atoms are drawn in black and white, *not* in RDKit's
  default element colours, so that the two highlight colours are the only colour
  on the page. A view that keeps RDKit's element palette will not match no
  matter how right its highlight colours are.
* ``addAtomIndices = True`` - every atom is labelled with its index.
* ``continuousHighlight = False`` - highlights are outlines, not filled blobs.

Both a PNG and an SVG are written per fixture: the PNG is literally what gufe
returns when asked with no arguments, and the SVG is the same code path handed
an SVG drawer, which is the form our own view produces and the one worth putting
side by side.

Deliberately not committed and not part of ``check-generated``. The bytes depend
on the installed RDKit's drawing code, so committing them would turn an RDKit
upgrade into a spurious CI failure, and the value here is in looking at the
pictures rather than in diffing them. Output goes under ``do-not-commit`` by
default for that reason.

    pixi run parity-reference
    pixi run parity-reference -o somewhere/else
"""

from __future__ import annotations

import argparse
import pathlib
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))

DEFAULT_OUT = REPO / "do-not-commit" / "parity-reference"


def _mappings() -> dict[str, object]:
    """The mapping fixtures, as live gufe objects.

    Built the same way ``make_examples.py`` builds them, including the sort on
    gufe keys: every molecule in gufe's GraphML fixture is unnamed, so choosing
    "the first edge" any other way is a tie broken by frozenset iteration order,
    and the reference would not be the same edge twice.
    """
    import make_examples
    from gufe import LigandNetwork

    data = make_examples._gufe_data()
    network = LigandNetwork.from_graphml((data / "ligand_network.graphml").read_text())
    edges = sorted(network.edges, key=lambda e: (str(e.componentA.key), str(e.componentB.key)))

    # The first edge is the one committed as ligand_atom_mapping.json, so it is
    # the one worth comparing first. The other two are there because one
    # mapping is not enough to see whether a colour means what it should.
    return {f"mapping_{i}": edge for i, edge in enumerate(edges[:3])}


def _write(path: pathlib.Path, drawing: str | bytes) -> None:
    """Write whatever the drawer handed back.

    RDKit's Cairo backend returns PNG bytes and its SVG backend returns text, and
    which one gufe uses depends on the drawer it is given, so this does not
    assume either.
    """
    if isinstance(drawing, bytes):
        path.write_bytes(drawing)
    else:
        path.write_text(drawing, encoding="utf-8")
    print(f"  {path.relative_to(REPO)}")


def _svg_drawer(panels: int):
    """An SVG drawer sized the way gufe sizes its own default.

    gufe reaches for a Cairo drawer when given none, so asking for SVG means
    passing one in. The geometry is copied from what gufe does so the two
    pictures are the same shape: 300 pixels per molecule panel.
    """
    from rdkit.Chem import Draw

    return Draw.rdMolDraw2D.MolDraw2DSVG(panels * 300, 300, 300, 300)


def render(out: pathlib.Path) -> int:
    from gufe.visualization.mapping_visualization import (
        draw_mapping,
        draw_one_molecule_mapping,
    )

    out.mkdir(parents=True, exist_ok=True)
    mappings = _mappings()
    print(f"gufe's own drawings, {len(mappings)} mapping(s):")

    for name, mapping in mappings.items():
        a = mapping.componentA.to_rdkit()
        b = mapping.componentB.to_rdkit()
        pairs = mapping.componentA_to_componentB

        flipped = {v: k for k, v in pairs.items()}

        # Both molecules together, which is the picture the atom-mapping view's
        # 2D pane has to match. Once as gufe returns it with no arguments, and
        # once as SVG for the side-by-side.
        _write(out / f"{name}_pair.png", draw_mapping(pairs, a, b, d2d=None))
        _write(out / f"{name}_pair.svg", draw_mapping(pairs, a, b, d2d=_svg_drawer(2)))

        # And each side alone, because that is what the view draws when it puts
        # one molecule in a pane of its own.
        _write(out / f"{name}_A.svg", draw_one_molecule_mapping(pairs, a, b, d2d=_svg_drawer(1)))
        _write(out / f"{name}_B.svg", draw_one_molecule_mapping(flipped, b, a, d2d=_svg_drawer(1)))

    print(
        "\nCompare against the same fixtures rendered by <gufe-atom-mapping>:\n"
        "  element changes  #005AB5\n"
        "  unique atoms     #DC3220\n"
        "  everything else  unhighlighted - gufe gives core atoms no colour\n"
        "  the molecules    black and white, not RDKit's element palette\n"
        "  every atom       labelled with its index"
    )
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        prog="make-parity-reference",
        description="Render gufe's own mapping drawings, to compare ours against.",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=pathlib.Path,
        default=DEFAULT_OUT,
        help=f"where to write the drawings (default: {DEFAULT_OUT.relative_to(REPO)})",
    )
    args = parser.parse_args(argv)
    return render(args.output)


if __name__ == "__main__":
    raise SystemExit(main())
