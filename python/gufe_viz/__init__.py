"""gufe-viz — interactive browser visualizations for gufe objects.

    >>> import gufe_viz
    >>> html = gufe_viz.to_html(small_molecule_component)  # returns a string

:func:`to_html` returns the page and writes nothing; where it goes is the
caller's decision. ``gufe-viz <input> -o out.html`` is one answer to that, and
a development convenience rather than the OpenFE CLI integration.

The intermediate value is a plain, schema-valid dict:

    >>> payload = gufe_viz.payload_dict_for(small_molecule_component)

``schema/gufe-viz.schema.json`` in this repository is the contract it satisfies,
and the compiled TypeScript in ``gufe_viz/_assets/`` is what draws it.

gufe is an **optional** dependency: everything except :func:`payload_for` works
without it, and nothing here imports gufe at module scope. gufe itself never
imports this package.
"""

from __future__ import annotations

from .html import BundleMissing, bundle_source, to_html
from .payloads import NoVisualization, payload_dict_for, payload_for
from .schema import PAYLOAD_KINDS, SCHEMA_VERSION, Payload

try:  # pragma: no cover — the real version comes from setuptools-scm at build time
    from importlib.metadata import PackageNotFoundError, version

    __version__ = version("gufe-viz")
except PackageNotFoundError:  # pragma: no cover
    __version__ = "0.0.0"

__all__ = [
    "PAYLOAD_KINDS",
    "SCHEMA_VERSION",
    "BundleMissing",
    "NoVisualization",
    "Payload",
    "__version__",
    "bundle_source",
    "payload_dict_for",
    "payload_for",
    "to_html",
]
