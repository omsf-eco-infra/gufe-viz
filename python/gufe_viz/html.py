"""payload -> one self-contained HTML file.

Deliberately minimal: :func:`to_html` **returns a string and writes nothing**.
Where that string goes is a decision for whoever owns the calling code, not for
this module. :mod:`gufe_viz.cli` is one answer to that question, not the answer.

The page is four things and no others:

* the compiled bundle, inlined in a ``<script type="module">``;
* the payload, inlined in a ``<script type="application/json">``;
* one ``<gufe-view>`` element;
* three lines of bootstrap that hand the second to the third.

No fetches, no iframe, no server. The one thing it does reach for today is
RDKit / 3Dmol from their CDNs, and only from a view that needs them.
A future ``engines="bundled"`` mode inlines those too, for environments with no
network access at all.

The bootstrap uses only the custom-element API (``document.querySelector`` plus
a ``.payload`` assignment). That is on purpose: it does not depend on any name
the bundler chose, and it is the same two lines the notebook widget will use.
"""

from __future__ import annotations

import json
import re
from importlib import resources
from pathlib import Path
from string import Template
from typing import TYPE_CHECKING, Any

if TYPE_CHECKING:  # importing gufe at runtime would make `import gufe_viz` need it
    from gufe.tokenization import GufeTokenizable

#: Name of the committed Vite build inside the package.
BUNDLE = "gufe-viz.js"


class BundleMissing(RuntimeError):
    """The compiled TypeScript is not in the installed package.

    Only reachable in a source checkout that has never run ``pixi run build``;
    the bundle is committed and ships in the wheel precisely so that installing
    this package never needs a Node toolchain.
    """


def bundle_source() -> str:
    """Return the compiled TypeScript bundle as text."""
    try:
        return resources.files("gufe_viz").joinpath("_assets", BUNDLE).read_text(encoding="utf-8")
    except (FileNotFoundError, ModuleNotFoundError, OSError) as e:
        raise BundleMissing(
            f"gufe_viz/_assets/{BUNDLE} is missing or unreadable ({e}). In a source checkout, run `pixi run build`."
        ) from e


_TEMPLATE = Template("""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>$title</title>
<style>
  html, body { height: 100%; margin: 0; }
  body { display: flex; flex-direction: column;
         font: 13px/1.4 ui-sans-serif, system-ui, sans-serif; }
  gufe-view { flex: 1 1 auto; min-height: 0; }
  #gufe-error { display: none; flex: 0 0 auto; padding: 12px 16px; white-space: pre-wrap;
                font-family: ui-monospace, monospace; color: #991b1b; background: #fee2e2; }
</style>
</head>
<body>
<div id="gufe-error"></div>
<gufe-view></gufe-view>
<script id="gufe-payload" type="application/json">$payload</script>
$engines
<script type="module">
$code

// ---- bootstrap: hand the element the payload baked into this file ----
// Only the custom-element API is used here, so nothing depends on a name the
// bundler happened to choose.
try {
  document.querySelector("gufe-view").payload =
    JSON.parse(document.getElementById("gufe-payload").textContent);
} catch (e) {
  const err = document.getElementById("gufe-error");
  err.textContent = String((e && e.stack) || e);
  err.style.display = "block";
}
</script>
</body>
</html>
""")

_CDN_ENGINES_NOTE = (
    "<!-- RDKit / 3Dmol / d3 are fetched from their CDNs on demand, and only by a\n"
    '     view that needs them. A future engines="bundled" mode will inline\n'
    "     them and drops the network requirement entirely. -->"
)


def _script_safe(text: str) -> str:
    """Neutralize the one sequence that can close a ``<script>`` block early.

    ``</script`` inside minified JavaScript only ever occurs within a string or
    regex literal, where ``<\\/script`` is an identity escape meaning exactly the
    same thing.
    """
    return re.sub(r"</(script)", r"<\\/\1", text, flags=re.IGNORECASE)


def _escape_html(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def _as_payload_dict(obj: GufeTokenizable | dict[str, Any]) -> dict[str, Any]:
    """Accept either a gufe object or an already-built payload dict."""
    if isinstance(obj, dict):
        return obj

    from . import payload_for

    return payload_for(obj)


def to_html(obj: GufeTokenizable | dict[str, Any], *, title: str | None = None) -> str:
    """Return a standalone HTML page that renders ``obj`` as a string.

    Parameters
    ----------
    obj
        A GufeTokenizable object, or an already-built payload dict.
    title
        The page ``<title>``. Defaults to the payload's name, then its type.

    Returns
    -------
    str
        The complete page. **Nothing is written to disk** - see the module
        docstring.

    Raises
    ------
    TypeError
        If ``obj`` is not something this can visualize.
    BundleMissing
        If the compiled bundle is not present in the installed package.
    """
    payload = _as_payload_dict(obj)
    code = bundle_source()

    # `Template.substitute` scans the template once, so a placeholder appearing
    # inside a substituted value (e.g. the payload or bundle) is left alone.
    return _TEMPLATE.substitute(
        title=_escape_html(title or payload.get("name") or payload.get("type") or "gufe-viz"),
        # `</` cannot appear inside a <script> block, whatever the payload holds;
        # `\/` is a legal JSON escape, so this survives JSON.parse unchanged.
        payload=json.dumps(payload).replace("</", "<\\/"),
        engines=_CDN_ENGINES_NOTE,
        code=_script_safe(code),
    )


def default_output_path(input_path: Path | str) -> Path:
    """``<input>.html`` beside the input.

    ``ligand.json`` becomes ``ligand.json.html``, keeping the original suffix so
    two inputs that differ only by extension do not collide.
    """
    path = Path(input_path)
    return path.with_name(path.name + ".html")
