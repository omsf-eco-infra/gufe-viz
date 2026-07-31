"""Shared fixtures: the golden payloads, the generated schema, and the mutation
matrix — the same three files the vitest suite reads.

If the two suites ever stop agreeing about what a valid payload is, they stop
agreeing about these files first, and both go red.
"""

from __future__ import annotations

import json
import pathlib

import pytest

REPO = pathlib.Path(__file__).resolve().parent.parent.parent
EXAMPLES_DIR = REPO / "examples"
SCHEMA_PATH = REPO / "schema" / "gufe-viz.schema.json"
MUTATIONS_PATH = REPO / "schema" / "mutations.json"


def example_paths() -> list[pathlib.Path]:
    return sorted(EXAMPLES_DIR.glob("*.json"))


def example_names() -> list[str]:
    return [p.name for p in example_paths()]


def read_example(name: str) -> dict:
    return json.loads((EXAMPLES_DIR / name).read_text(encoding="utf-8"))


@pytest.fixture(scope="session")
def schema() -> dict:
    """The generated JSON Schema — the artifact, not the Pydantic models.

    Tested separately from the models on purpose: the models being right does
    not prove the *emitted schema* is right, and the emitted schema is what
    TypeScript actually validates against.
    """
    return json.loads(SCHEMA_PATH.read_text(encoding="utf-8"))


@pytest.fixture(scope="session")
def mutations() -> list[dict]:
    return json.loads(MUTATIONS_PATH.read_text(encoding="utf-8"))["mutations"]


@pytest.fixture(params=example_names())
def example(request) -> tuple[str, dict]:
    """Every golden payload in turn, as ``(filename, payload)``."""
    return request.param, read_example(request.param)


# --------------------------------------------------------------------------- #
# JSON Pointer, just enough of it                                               #
# --------------------------------------------------------------------------- #
#
# The mutation matrix is declarative so that both languages apply exactly the
# same edits. Implementing three operations over RFC 6901 pointers is a dozen
# lines; pulling in a dependency for it in both ecosystems is not worth it.


class PointerMissing(LookupError):
    """The mutation's path does not exist in this payload."""


def _split(pointer: str) -> list[str]:
    if pointer in ("", "/"):
        return []
    return [part.replace("~1", "/").replace("~0", "~") for part in pointer.lstrip("/").split("/")]


def apply_mutation(payload: dict, mutation: dict) -> dict:
    """Return a deep copy of ``payload`` with one mutation applied.

    Raises :class:`PointerMissing` if the path's parent is absent, so a matrix
    entry that silently does nothing shows up as a skip rather than as a pass.
    """
    import copy

    result = copy.deepcopy(payload)
    parts = _split(mutation["path"])
    if not parts:
        raise ValueError(f"mutation {mutation['id']!r} has an empty path")

    node = result
    for part in parts[:-1]:
        if not isinstance(node, dict) or part not in node:
            raise PointerMissing(mutation["path"])
        node = node[part]

    leaf = parts[-1]
    if not isinstance(node, dict):
        raise PointerMissing(mutation["path"])

    op = mutation["op"]
    if op == "remove":
        if leaf not in node:
            raise PointerMissing(mutation["path"])
        del node[leaf]
    elif op == "replace":
        if leaf not in node:
            raise PointerMissing(mutation["path"])
        node[leaf] = mutation["value"]
    elif op == "add":
        node[leaf] = mutation["value"]
    else:
        raise ValueError(f"unknown mutation op {op!r}")

    return result


def applies_to(mutation: dict, payload: dict) -> bool:
    kinds = mutation.get("kinds")
    return kinds is None or payload.get("kind") in kinds
