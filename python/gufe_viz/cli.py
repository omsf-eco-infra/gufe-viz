"""``gufe-viz <input> [-o out.html]`` - a development convenience.

**This is not the OpenFE CLI integration.** It exists so the edit -> rebuild ->
reload loop is one command, and so that when `openfe view` is wired up later
there is a working reference implementation to point it at.

Input may be either a gufe-viz payload JSON - the files in ``examples/`` - or a
serialized gufe object, which is deserialized into live gufe objects first and
only then turned into a payload. TypeScript never sees gufe's JSON.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

from .html import default_output_path, to_html


def _looks_like_payload(value: object) -> bool:
    """True if this JSON is already one of ours rather than a gufe object.

    Every payload type is named ``<something>Viz``, which is enough to tell the
    two input formats apart. This deliberately does not check the name against a
    list of known types: a payload naming a type this build does not draw is
    still one of ours, and the browser's "no visualization for X" panel says so
    far better than the CLI could.
    """
    return isinstance(value, dict) and isinstance(value.get("type"), str) and value["type"].endswith("Viz")


def load(path: Path):
    """Return something :func:`gufe_viz.to_html` can render.

    Tries, in order: a gufe-viz payload, then a serialized gufe object.
    """
    text = path.read_text(encoding="utf-8")

    try:
        parsed = json.loads(text)
    except json.JSONDecodeError as e:
        raise SystemExit(f"{path}: not valid JSON - {e}") from e

    if _looks_like_payload(parsed):
        return parsed

    return _load_gufe_object(text, path)


def _load_gufe_object(text: str, path: Path):
    """Deserialize a saved gufe object, or explain why we could not.

    Which of gufe's serialization forms round-trips reliably today is still an
    open question - ``QuickRun`` writes ``to_dict`` while
    other paths write ``to_json``, and the keyed-chain form is different again.
    Rather than guess, this tries the documented entry point and, on failure,
    says exactly that: the payload path above always works, and building the
    object in Python and calling ``gufe_viz.to_html`` directly always works.
    """
    try:
        from gufe.tokenization import JSON_HANDLER, GufeTokenizable
    except ImportError as e:
        raise SystemExit(
            f"{path} is not a gufe-viz payload, and gufe is not installed to read it as a gufe object. "
            f"Install gufe from conda-forge - `conda install -c conda-forge gufe` - not from PyPI, "
            f"where it is stuck at a pre-1.0 release. ({e})"
        ) from e

    try:
        return GufeTokenizable.from_dict(json.loads(text, cls=JSON_HANDLER.decoder))
    except Exception as e:  # noqa: BLE001 - every failure mode gets the same advice
        raise SystemExit(
            f"{path}: could not read this as a gufe-viz payload or as a serialized gufe object "
            f"({type(e).__name__}: {e}).\n"
            f"\n"
            f"gufe has more than one serialization form and which of them round-trips is still an "
            f"open question. Two things that always work:\n"
            f"  - point this at a gufe-viz payload, such as the files in examples/;\n"
            f"  - build the object in Python and call gufe_viz.to_html(obj) yourself."
        ) from e


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        prog="gufe-viz",
        description="Render a gufe object or a gufe-viz payload as one self-contained HTML file.",
        epilog="A development convenience, not the OpenFE CLI integration.",
    )
    parser.add_argument("input", type=Path, help="a gufe-viz payload JSON, or a serialized gufe object")
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=None,
        help="where to write the page (default: <input>.html, beside the input). Use - for stdout.",
    )
    parser.add_argument("--title", default=None, help="page title (default: the payload's name)")
    args = parser.parse_args(argv)

    if not args.input.is_file():
        raise SystemExit(f"{args.input}: no such file")

    try:
        html = to_html(load(args.input), title=args.title)
    except TypeError as e:
        raise SystemExit(str(e)) from e

    if args.output is not None and str(args.output) == "-":
        sys.stdout.write(html)
        return 0

    destination = args.output or default_output_path(args.input)
    destination.write_text(html, encoding="utf-8")
    print(f"wrote {destination} ({len(html):,} bytes)")
    return 0


if __name__ == "__main__":  # pragma: no cover
    raise SystemExit(main())
