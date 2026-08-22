#!/usr/bin/env python
"""Build ``examples/notebooks/gufe-viz-gallery.ipynb`` - the views, as pictures.

**Why this exists.** GitHub's notebook renderer strips ``<iframe>`` and
``<script>`` from cell outputs, which is everything ``gufe_viz.view()`` emits.
An executed copy of the demo notebook therefore shows nothing at all on GitHub,
however well it works in a browser. ``image/png`` is the one output type that
does survive, so this captures each view as a screenshot and writes a notebook
whose outputs are those screenshots.

The cells hold the real call, so anyone who runs the notebook gets the live view
and the screenshot is replaced. The picture is a stand-in for a reader, not a
substitute for the thing.

Screenshots come from headless Chrome, which is already on the machine of anyone
who can look at these visualizations. Software WebGL is requested explicitly:
without it 3Dmol cannot create a context and every 3D pane is an error message.

Run with ``pixi run gallery``. Set ``CHROME`` to override the browser path.
"""

from __future__ import annotations

import base64
import json
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile
import time

REPO = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))

EXAMPLES = REPO / "examples"
OUT = EXAMPLES / "notebooks" / "gufe-viz-gallery.ipynb"

#: Wide enough for the two-pane views, short enough to scroll past on GitHub.
WINDOW = (1100, 720)

#: Long enough for RDKit's wasm and 3Dmol to arrive from their CDNs and draw.
#: Virtual time, not wall-clock: Chrome fast-forwards its own timers, so this
#: costs about four seconds a page.
TIME_BUDGET_MS = 20000

#: How long to wait for one page's screenshot before giving up on it.
PAGE_TIMEOUT_S = 90

CHROME_CANDIDATES = (
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome",
    "chromium",
    "chromium-browser",
)

#: What each view is, for the reader who is looking rather than running.
NOTES = {
    "small_molecule": "2D RDKit depiction beside the 3D conformer, with SMILES, charge and atom counts.",
    "small_molecule_charged": "The same view, with a non-zero formal charge.",
    "protein": "3Dmol with representation and colour-scheme switchers; waters hidden by default.",
    "protein_fragment": "A small protein, so the 3D view loads fast while iterating.",
    "protein_membrane": (
        "**Not drawn**, and worth noticing: Python's MRO walk gives a membrane system the protein "
        "*builder*, but the payload it emits says `ProteinMembraneComponentViz`, and the browser's "
        "dispatch table has no entry for that. Inheritance on one side of the contract is not "
        "inheritance on the other."
    ),
    "solvated_pdb": "**Not drawn**, for the same reason as `protein_membrane` above.",
    "ligand_network": "Radial graph of the ligands, with the selected edge's atom mapping on the right.",
    "ligand_network_named": "The same network with the ligands named, so labels replace gufe keys.",
    "chemical_system": "No view yet: the dispatcher's panel, which is what the degradation rule looks like.",
    "ligand_atom_mapping": "No view yet - the standalone mapping viewer is Phase 4.",
    "solvent": "No view yet - a solvent component is a specification, so its view is a settings card.",
}


def find_chrome() -> str:
    override = os.environ.get("CHROME")
    if override:
        return override
    for candidate in CHROME_CANDIDATES:
        resolved = candidate if pathlib.Path(candidate).exists() else shutil.which(candidate)
        if resolved:
            return resolved
    raise SystemExit(
        "no Chrome or Chromium found. Set CHROME to the browser binary, e.g.\n"
        "  CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' pixi run gallery"
    )


def screenshot(chrome: str, page: pathlib.Path, target: pathlib.Path, profile: pathlib.Path) -> bytes:
    """Render ``page`` in headless Chrome and return the PNG bytes.

    Chrome writes the image and then, given a throwaway profile, often does not
    exit. Rather than wait it out per page, this watches for the file, waits for
    its size to settle, and kills the browser: the picture is the whole point of
    running it.
    """
    process = subprocess.Popen(
        [
            chrome,
            "--headless",
            "--hide-scrollbars",
            # 3Dmol needs a WebGL context and a headless browser has no GPU.
            # Without these every 3D pane is "error creating viewer".
            "--enable-unsafe-swiftshader",
            "--use-gl=angle",
            "--use-angle=swiftshader",
            # Never touch the user's own Chrome profile, which may be open.
            f"--user-data-dir={profile}",
            "--no-first-run",
            "--no-default-browser-check",
            f"--window-size={WINDOW[0]},{WINDOW[1]}",
            f"--virtual-time-budget={TIME_BUDGET_MS}",
            f"--screenshot={target}",
            page.as_uri(),
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )

    try:
        deadline = time.monotonic() + PAGE_TIMEOUT_S
        size = -1
        while time.monotonic() < deadline:
            if target.exists():
                current = target.stat().st_size
                if current > 0 and current == size:
                    break
                size = current
            elif process.poll() is not None:
                break
            time.sleep(0.3)
    finally:
        if process.poll() is None:
            process.terminate()
            try:
                process.wait(timeout=10)
            except subprocess.TimeoutExpired:  # pragma: no cover - a wedged browser
                process.kill()

    if not target.exists():
        raise SystemExit(f"{page.name}: Chrome wrote no screenshot within {PAGE_TIMEOUT_S}s")
    return target.read_bytes()


def markdown(text: str, index: int) -> dict:
    return {
        "cell_type": "markdown",
        "id": f"gallery-{index:02d}",
        "metadata": {},
        "source": text.strip("\n").splitlines(keepends=True),
    }


def code_with_image(source: str, png: bytes, index: int) -> dict:
    return {
        "cell_type": "code",
        "id": f"gallery-{index:02d}",
        "execution_count": 1,
        "metadata": {},
        "source": source.strip("\n").splitlines(keepends=True),
        "outputs": [
            {
                "output_type": "execute_result",
                "execution_count": 1,
                "metadata": {},
                "data": {
                    "image/png": base64.b64encode(png).decode("ascii"),
                    "text/plain": "<gufe-view>",
                },
            }
        ],
    }


def main() -> int:
    import gufe_viz

    chrome = find_chrome()
    print(f"chrome: {chrome}")

    cells: list[dict] = []
    cells.append(
        markdown(
            """
# gufe-viz gallery

Every view gufe-viz draws today, as a picture.

> ### This notebook is for viewing on GitHub. It is not the one you run.
>
> **The outputs below are screenshots**, not live views. They exist because
> GitHub's notebook renderer strips `<iframe>` and `<script>` from cell outputs,
> which is everything `gufe_viz.view()` emits - so an executed copy of the demo
> notebook shows a blank under every cell there. `image/png` is the one output
> type that survives.
>
> **To run the real thing**, open
> [`gufe-viz-demo.ipynb`](./gufe-viz-demo.ipynb) - every payload type, every
> delivery mode, the live gufe objects and the byte costs:
>
> ```
> pixi run notebook     # JupyterLab
> pixi run marimo       # the same notebook, in marimo
> ```
>
> **You can run this one too.** Its cells hold the real `view()` call, so
> running it replaces each screenshot with the live, interactive view - a good
> way to check that a picture is honest. Just do not commit the result: that
> strips out the pictures this file exists to carry. `pixi run gallery`
> regenerates them, and is what to run whenever you change what a view draws.
> [`README.md`](./README.md) is the full note.

Three payload types are drawn today. The rest reach the dispatcher and get the
"no visualization for X yet" panel, which is the graceful-degradation rule
working rather than failing, and is included here for the same reason.
""",
            0,
        )
    )
    cells.append(
        code_with_image(
            'import json\nfrom pathlib import Path\n\nimport gufe_viz\n\nEXAMPLES = Path("../")\npayloads = {p.stem: json.loads(p.read_text()) for p in sorted(EXAMPLES.glob("*.json"))}',
            b"",
            1,
        )
    )
    # The setup cell has nothing to show; drop the image output.
    cells[-1]["outputs"] = []

    with tempfile.TemporaryDirectory() as tmp:
        work = pathlib.Path(tmp)
        profile = work / "profile"
        total = 0

        for stem, note in NOTES.items():
            source = EXAMPLES / f"{stem}.json"
            if not source.is_file():
                print(f"  skip {stem}: no {source.name}")
                continue

            payload = json.loads(source.read_text(encoding="utf-8"))
            page = work / f"{stem}.html"
            page.write_text(gufe_viz.to_html(payload), encoding="utf-8")
            png = screenshot(chrome, page, work / f"{stem}.png", profile)
            total += len(png)
            print(f"  {stem:24} {payload['type']:<28} {len(png):>8,} bytes")

            cells.append(markdown(f"### `{stem}.json` - `{payload['type']}`\n\n{note}", len(cells)))
            cells.append(code_with_image(f'gufe_viz.view(payloads["{stem}"])', png, len(cells)))

    notebook = {
        "cells": cells,
        "metadata": {
            "kernelspec": {"display_name": "Python 3", "language": "python", "name": "python3"},
            "language_info": {"name": "python", "pygments_lexer": "ipython3"},
        },
        "nbformat": 4,
        "nbformat_minor": 5,
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(notebook, indent=1, ensure_ascii=True) + "\n", encoding="utf-8")
    print(f"\nwrote {OUT.relative_to(REPO)}")
    print(f"  {len(cells)} cells, {total:,} bytes of PNG, {OUT.stat().st_size:,} bytes on disk")
    print(f"  gufe-viz {gufe_viz.__version__}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
