#!/usr/bin/env python
"""Generate ``schema/gufe-viz.schema.json`` from the Pydantic models.

The emitted file is **the contract** (R7): it is what TypeScript validates
against, what `json-schema-to-typescript` turns into `ts/src/schema/types.ts`,
and what someone opening this repo in a year reads to find out what a payload
is. It is checked in, and CI's `check-generated` job fails if it differs from a
fresh run of this script.

Run with ``pixi run schema``.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(REPO / "python"))

from gufe_viz.schema import PAYLOAD_KINDS, SCHEMA_VERSION, Payload  # noqa: E402

OUT = REPO / "schema" / "gufe-viz.schema.json"


def _strip_property_titles(node: object) -> None:
    """Drop Pydantic's auto-generated per-property ``title`` keys, in place.

    Pydantic titles every property (``sdf`` becomes ``"title": "Sdf"``), which
    adds nothing a reader does not already know and makes
    ``json-schema-to-typescript`` emit a standalone named alias per property —
    ``SchemaVersion1``, ``Name7``, ``IonConcentration1`` — instead of an inline
    type. Model-level titles are kept: those are the class names, and they are
    what the generated interfaces are named after.
    """
    if isinstance(node, dict):
        properties = node.get("properties")
        if isinstance(properties, dict):
            for prop in properties.values():
                if isinstance(prop, dict):
                    prop.pop("title", None)
        for value in node.values():
            _strip_property_titles(value)
    elif isinstance(node, list):
        for item in node:
            _strip_property_titles(item)


def _require_discriminator(schema: dict) -> None:
    """Mark ``kind`` required in every payload branch.

    Pydantic gives ``kind`` a default so a payload can be constructed without
    repeating it, and therefore leaves it out of ``required``. But a *validating*
    Pydantic discriminated union rejects a dict with no ``kind`` outright — it
    cannot pick a branch — so the emitted schema is more permissive than the
    Python it was generated from. Without this, a payload with no discriminator
    would be refused in Python and accepted in TypeScript, which is precisely
    the drift this file exists to prevent.
    """
    for definition in schema.get("$defs", {}).values():
        if not isinstance(definition, dict):
            continue
        kind = definition.get("properties", {}).get("kind")
        if isinstance(kind, dict) and "const" in kind:
            required = definition.setdefault("required", [])
            if "kind" not in required:
                required.append("kind")


def build() -> dict:
    from pydantic import TypeAdapter

    schema = TypeAdapter(Payload).json_schema(ref_template="#/$defs/{model}")
    _strip_property_titles(schema)
    _require_discriminator(schema)

    # Front matter. `$id` is what Ajv keys the compiled schema by, and the title
    # and description are the first thing a reader sees.
    return {
        "$schema": "https://json-schema.org/draft/2020-12/schema",
        "$id": "https://github.com/omsf-eco-infra/viz/schema/gufe-viz.schema.json",
        "title": "gufe-viz payload",
        "description": (
            f"The Python-to-TypeScript contract for gufe visualizations, version {SCHEMA_VERSION}. "
            f"Generated from python/gufe_viz/schema.py — do not edit by hand. "
            f"Kinds: {', '.join(PAYLOAD_KINDS)}."
        ),
        **schema,
    }


def main() -> int:
    text = json.dumps(build(), indent=2, sort_keys=False) + "\n"
    OUT.parent.mkdir(parents=True, exist_ok=True)
    previous = OUT.read_text(encoding="utf-8") if OUT.exists() else None
    OUT.write_text(text, encoding="utf-8")
    print(f"{'unchanged' if text == previous else 'wrote'} {OUT.relative_to(REPO)} ({len(text)} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
