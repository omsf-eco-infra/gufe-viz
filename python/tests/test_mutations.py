"""Mutation testing.

Every entry in ``schema/mutations.json`` is applied to every applicable golden
payload and validated against ``schema/gufe-viz.schema.json``.
``ts/tests/validate.test.ts`` runs the identical table against Ajv, so a
disagreement between the two languages turns one of the suites red.
"""

from __future__ import annotations

import pytest

from .conftest import PointerMissing, applies_to, apply_mutation, example_names, read_example


def _jsonschema_error(payload: dict, schema: dict):
    """Return the most relevant jsonschema error for ``payload``, or None.

    Validated against the single branch the payload's ``type`` names, not
    against the whole top-level ``oneOf``.

    Every ``$def`` is named exactly for the ``type`` const it declares, so the
    branch is found by name with no lookup table to keep in step. A payload
    whose ``type`` names no ``$def`` falls back to the union, which is also
    what TypeScript does.
    """
    import jsonschema

    declared = payload.get("type") if isinstance(payload, dict) else None
    if isinstance(declared, str) and declared in schema["$defs"]:
        target = {"$schema": schema["$schema"], "$defs": schema["$defs"], "$ref": f"#/$defs/{declared}"}
    else:
        target = schema

    validator = jsonschema.Draft202012Validator(target)
    errors = sorted(validator.iter_errors(payload), key=lambda e: (-len(e.absolute_path), list(e.absolute_path)))
    return errors[0] if errors else None


def _pointer(error) -> str:
    """The failing location as a JSON pointer, for the `pointerContains` check."""
    if error is None:
        return ""
    return "/" + "/".join(str(p) for p in error.absolute_path)


def _matrix() -> list[dict]:
    import json

    from .conftest import MUTATIONS_PATH

    return json.loads(MUTATIONS_PATH.read_text(encoding="utf-8"))["mutations"]


def _cases():
    """Every (example, mutation) pair the matrix selects by ``type``."""
    for filename in example_names():
        payload = read_example(filename)
        for mutation in _matrix():
            if applies_to(mutation, payload):
                yield pytest.param(filename, mutation, id=f"{filename[:-5]}-{mutation['id']}")


@pytest.mark.parametrize(("filename", "mutation"), list(_cases()))
def test_mutation(filename: str, mutation: dict, schema: dict):
    payload = read_example(filename)

    try:
        mutated = apply_mutation(payload, mutation)
    except PointerMissing:
        pytest.skip(f"{mutation['path']} is absent from {filename}")

    schema_error = _jsonschema_error(mutated, schema)

    if mutation["expect"] == "valid":
        assert schema_error is None, f"the schema rejected a payload it should accept:\n{schema_error}"
        return

    assert schema_error is not None, f"the schema accepted {mutation['id']!r} - {mutation['why']}"

    wanted = mutation.get("pointerContains")
    if wanted:
        # A rejection for the wrong reason is not a pass.
        assert wanted in _pointer(schema_error), (
            f"the schema rejected {mutation['id']!r} but at {_pointer(schema_error)!r}, not {wanted!r}"
        )


def test_every_mutation_applies_cleanly_to_at_least_one_payload():
    """A matrix entry that never actually runs is a silent hole in the coverage.

    Selection is not enough to check. A mutation can match a payload by ``type``
    and then be skipped for every one of them because its path does not exist -
    a typo in ``"path"`` does exactly that - and the row would look covered
    while asserting nothing. So this applies each mutation for real and requires
    at least one success, rather than counting the cases that were collected.
    """
    applied: dict[str, int] = {}
    for filename, mutation in ((c.values[0], c.values[1]) for c in _cases()):
        applied.setdefault(mutation["id"], 0)
        try:
            apply_mutation(read_example(filename), mutation)
        except PointerMissing:
            continue
        applied[mutation["id"]] += 1

    never_ran = sorted(mid for mid, count in applied.items() if count == 0)
    assert not never_ran, f"mutations selected but never applied - check their `path`: {never_ran}"

    declared = {m["id"] for m in _matrix()}
    assert declared == set(applied), f"mutations that match no example payload: {declared - set(applied)}"


def test_every_example_is_valid_before_mutation(example, schema):
    """The premise of every row above: the unmutated fixtures are valid."""
    name, payload = example
    assert _jsonschema_error(payload, schema) is None, name
