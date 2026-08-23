"""Emit the mirrored atom-colour block for ``ts/src/shared/atom-colors.ts``.

Atom colours are never authored in this repository. Every one of them is read
from the library that already draws it and written out verbatim, so that a
picture drawn here and a picture drawn by gufe or openfe cannot disagree about
what a colour means.

Three sources, all read rather than transcribed:

* the two mapping highlight colours, imported from ``gufe`` itself;
* the 3D mapping ramp, sampled from the matplotlib colormap openfe asks for;
* nothing else. Element colouring belongs to 3Dmol and RDKit and is left to
  them, so it does not appear here at all.

Run ``pixi run atom-colors``. CI re-runs it and fails on any difference, the
same way the schema and the bundle are checked.
"""

from __future__ import annotations

import subprocess
from pathlib import Path

# openfe's view_mapping_3d asks matplotlib for this colormap by name and indexes
# it by the position of each mapped pair. Changing it changes what OpenFE draws,
# so it is a decision for the team rather than an edit here.
RAMP_NAME = "hsv"

#: How many stops to bake. The ramp is resampled in the browser, so this only has
#: to be dense enough that linear interpolation between stops is invisible.
RAMP_STOPS = 32

OUTPUT = Path(__file__).resolve().parent.parent / "ts" / "src" / "shared" / "atom-colors.ts"

HEADER = """/**
 * GENERATED - do not edit by hand.
 *
 * Source:  scripts/gen_atom_colors.py
 * Command: pixi run atom-colors
 *
 * Atom colours are mirrored from the libraries that already draw them, never
 * authored here, so that a picture drawn by this project and a picture drawn by
 * gufe or openfe cannot disagree about what a colour means. CI regenerates this
 * file and fails if it differs from what is committed.
 *
 * Element colouring is deliberately absent: that belongs to 3Dmol's `Jmol`
 * scheme in 3D and to RDKit's defaults in 2D, and both are left to do it.
 */
"""


def _hex(rgb: tuple[float, float, float]) -> str:
    return "#" + "".join(f"{round(channel * 255):02X}" for channel in rgb[:3])


def _gufe_mapping_colors() -> dict[str, str]:
    """The 2D mapping colours, imported from gufe rather than copied out of it."""
    from gufe.visualization.mapping_visualization import BLUE, RED

    return {"elementChange": _hex(BLUE), "uniqueAtom": _hex(RED)}


def _ramp() -> list[str]:
    """The 3D mapping ramp, sampled from the colormap openfe names."""
    from matplotlib import colormaps

    cmap = colormaps[RAMP_NAME]
    return [_hex(cmap(i / (RAMP_STOPS - 1))) for i in range(RAMP_STOPS)]


def _versions() -> str:
    import gufe
    import matplotlib

    return f"gufe {gufe.__version__}, matplotlib {matplotlib.__version__}"


def render() -> str:
    colors = _gufe_mapping_colors()
    ramp = _ramp()
    stops = "\n".join(f'  "{value}",' for value in ramp)

    return f'''{HEADER}
/**
 * The two mapping highlight colours, from
 * `gufe.visualization.mapping_visualization`.
 *
 * gufe colours by *meaning* and makes no distinction between the two molecules:
 * an atom is either an element change, or unique to its side, or unremarkable.
 * There is deliberately no colour here for the third case, because gufe does not
 * highlight those atoms at all, and adding one would be inventing a colour.
 *
 * Both are also given in 3Dmol's `0x` form, because that is what its style
 * specifications take and converting at every call site is worse.
 *
 * This pair is colourblind-safe as it stands. Keep it that way by not editing it.
 */
export const MAPPING_COLORS = {{
  elementChange: "{colors["elementChange"]}",
  uniqueAtom: "{colors["uniqueAtom"]}",
  elementChange3D: "0x{colors["elementChange"][1:]}",
  uniqueAtom3D: "0x{colors["uniqueAtom"][1:]}",
}} as const;

/**
 * The 3D mapping ramp: matplotlib's `{RAMP_NAME}`, sampled at {RAMP_STOPS} stops.
 *
 * openfe indexes this by the position of each mapped *pair* and paints the same
 * colour on both of that pair's atoms, so a shared colour is what says "these
 * two are mapped to each other". It has nothing to do with the element.
 *
 * `{RAMP_NAME}` is a rainbow, which puts red next to purple; that has already cost
 * real debugging time. Moving to a perceptually uniform colormap is worth
 * proposing, but it changes what OpenFE draws, so it is a decision for the team
 * and a one-line change to `RAMP_NAME` in the generator, never an edit here.
 */
export const MAPPING_RAMP_3D: readonly string[] = [
{stops}
];

/** Which colormap `MAPPING_RAMP_3D` was sampled from. */
export const MAPPING_RAMP_NAME = "{RAMP_NAME}";
'''


def main() -> int:
    text = render()
    OUTPUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUTPUT.relative_to(Path.cwd())} ({_versions()})")

    prettier = Path("node_modules/.bin/prettier")
    if prettier.is_file():
        subprocess.run([str(prettier), "--write", str(OUTPUT)], check=False, capture_output=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
