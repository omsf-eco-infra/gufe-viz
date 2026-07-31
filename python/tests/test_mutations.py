"""Mutation testing (R10).

David's ask, verbatim: "maybe some mutation testing that if you break the schema,
it does raise an error, it does fail."

Every entry in ``schema/mutations.json`` is applied to every applicable golden
payload, and both the Pydantic models and the *generated* JSON Schema must agree
about the outcome. ``ts/tests/validate.test.ts`` runs the identical table against
Ajv, so a disagreement between the two languages turns one of the suites red.

Testing the models and the emitted schema separately matters: the models being
correct does not prove the artifact generated from them is, and the artifact is
what TypeScript actually validates against.
"""

from __future__ import annotations

import pytest
from gufe_viz.schema import Payload

from .conftest import PointerMissing, applies_to, apply_mutation, example_names, read_example


def _pydantic_error(payload: dict):
    """Return the ValidationError from validating ``payload``, or None."""
    from pydantic import TypeAdapter, ValidationError

    try:
        TypeAdapter(Payload).validate_python(payload)
    except ValidationError as e:
        return e
    return None


def _jsonschema_error(payload: dict, schema: dict):
    """Return the most relevant jsonschema error for ``payload``, or None.

    Validated against the single branch the payload's ``kind`` names, not
    against the whole eight-way ``oneOf``. Two reasons, and they are the same
    two reasons ``ts/src/schema/validate.ts`` does it:

    * the union reports "is not valid under any of the given schemas" at the
      root, which tells nobody anything, while the branch reports
      ``/data/total_charge: 'zero' is not of type 'integer'``;
    * matching the TypeScript behaviour is the whole point — a cross-language
      claim about error *locations* is only meaningful if both sides look in
      the same place.

    A payload with no recognisable ``kind`` falls back to the union, which is
    also what TypeScript does.
    """
    import jsonschema

    branch = schema.get("discriminator", {}).get("mapping", {}).get(payload.get("kind"))
    target = {"$schema": schema["$schema"], "$defs": schema["$defs"], "$ref": branch} if branch else schema

    validator = jsonschema.Draft202012Validator(target)
    errors = sorted(validator.iter_errors(payload), key=lambda e: (-len(e.absolute_path), list(e.absolute_path)))
    return errors[0] if errors else None


def _pointer(error) -> str:
    """The failing location as a JSON pointer, for the `pointerContains` check."""
    if error is None:
        return ""
    if hasattr(error, "absolute_path"):  # jsonschema
        return "/" + "/".join(str(p) for p in error.absolute_path)
    # pydantic: take the deepest reported location
    locations = [e["loc"] for e in error.errors()]
    deepest = max(locations, key=len) if locations else ()
    # Discriminated-union errors are prefixed with the branch name; drop it.
    parts = [str(p) for p in deepest if not str(p).endswith("Payload")]
    return "/" + "/".join(parts)


def _cases():
    """Every (example, mutation) pair the matrix actually applies to."""
    import json
    import pathlib

    matrix = json.loads(
        (pathlib.Path(__file__).resolve().parent.parent.parent / "schema" / "mutations.json").read_text()
    )["mutations"]
    for filename in example_names():
        payload = read_example(filename)
        for mutation in matrix:
            if applies_to(mutation, payload):
                yield pytest.param(filename, mutation, id=f"{filename[:-5]}-{mutation['id']}")


@pytest.mark.parametrize(("filename", "mutation"), list(_cases()))
def test_mutation(filename: str, mutation: dict, schema: dict):
    payload = read_example(filename)

    try:
        mutated = apply_mutation(payload, mutation)
    except PointerMissing:
        pytest.skip(f"{mutation['path']} is absent from {filename}")

    pydantic_error = _pydantic_error(mutated)
    schema_error = _jsonschema_error(mutated, schema)

    if mutation["expect"] == "valid":
        assert pydantic_error is None, f"Pydantic rejected a payload it should accept:\n{pydantic_error}"
        assert schema_error is None, f"the schema rejected a payload it should accept:\n{schema_error}"
        return

    assert pydantic_error is not None, f"Pydantic accepted {mutation['id']!r} — {mutation['why']}"
    assert schema_error is not None, f"the schema accepted {mutation['id']!r} — {mutation['why']}"

    wanted = mutation.get("pointerContains")
    if wanted:
        # A rejection for the wrong reason is not a pass.
        assert wanted in _pointer(schema_error), (
            f"the schema rejected {mutation['id']!r} but at {_pointer(schema_error)!r}, not {wanted!r}"
        )


def test_the_matrix_actually_ran(schema):
    """A matrix entry that matches nothing is a silent hole in the coverage."""
    import json
    import pathlib

    matrix = json.loads(
        (pathlib.Path(__file__).resolve().parent.parent.parent / "schema" / "mutations.json").read_text()
    )["mutations"]

    exercised = {m["id"] for _, m in ((f, m) for f, m in ((c.values[0], c.values[1]) for c in _cases()))}
    declared = {m["id"] for m in matrix}
    assert declared == exercised, f"mutations that match no example payload: {declared - exercised}"


def test_every_example_is_valid_before_mutation(example, schema):
    """The premise of every row above: the unmutated fixtures pass both sides."""
    name, payload = example
    assert _pydantic_error(payload) is None, name
    assert _jsonschema_error(payload, schema) is None, name
