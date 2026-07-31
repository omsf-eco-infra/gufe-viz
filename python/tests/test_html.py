"""``to_html`` and the dev CLI (PLAN Phase 3).

The properties that matter here are the ones the meeting kept coming back to:
the page is one file, it reaches for nothing at load time except the three
engine CDNs, and ``to_html`` writes nothing anywhere.
"""

from __future__ import annotations

import json
import re

import pytest
from gufe_viz import bundle_source, to_html
from gufe_viz.cli import main
from gufe_viz.html import _script_safe, default_output_path

from .conftest import read_example


class TestToHtml:
    def test_returns_a_string_and_writes_nothing(self, tmp_path, monkeypatch):
        """R18, and the whole of Alyssa's "it's her job then"."""
        monkeypatch.chdir(tmp_path)
        html = to_html(read_example("small_molecule.json"))

        assert isinstance(html, str)
        assert html.startswith("<!doctype html>")
        assert list(tmp_path.iterdir()) == []

    def test_page_is_self_contained(self, example):
        """One file: the bundle and the payload are both inside it."""
        name, payload = example
        html = to_html(payload)

        assert bundle_source()[:200] in html.replace("<\\/script", "</script")
        assert "<gufe-view></gufe-view>" in html, name

    def test_payload_survives_the_round_trip(self, example):
        name, payload = example
        html = to_html(payload)

        embedded = re.search(r'<script id="gufe-payload" type="application/json">(.*?)</script>', html, re.S)
        assert embedded, name
        assert json.loads(embedded.group(1).replace("<\\/", "</")) == payload, name

    def test_the_only_network_references_are_the_engine_cdns(self, example):
        """No fetches, no iframe, no framejs.io — R1 as far as V1 goes.

        The three engines are still loaded on demand from their CDNs; Phase 5
        inlines them and removes even that.

        The embedded payload is excluded from the scan: it is *data*, and
        chemistry data is full of URL-shaped strings that nobody fetches —
        a GraphML document alone carries four XML namespace URIs. What this
        test is about is what the *page* references.

        Some remaining entries are identifiers rather than fetch targets: a JSON
        Schema ``$schema``/``$id``, Ajv's own ``$data`` meta-schema id and the
        SVG namespace the network view creates its elements in are URL-shaped
        strings that nothing ever requests. They are listed by name so that a
        genuinely new URL still fails this test.
        """
        _, payload = example
        html = to_html(payload)
        page = re.sub(r'<script id="gufe-payload".*?</script>', "", html, flags=re.S)

        allowed = (
            "3dmol.org",  # 3Dmol, fetched on demand
            "unpkg.com/@rdkit",  # RDKit, fetched on demand
            "cdn.jsdelivr.net/npm/d3",  # d3, fetched on demand
            "json-schema.org",  # $schema identifier, never fetched
            "github.com/omsf",  # our schema's $id, never fetched
            "raw.githubusercontent.com/ajv-validator",  # Ajv's $data meta-schema id, never fetched
            "www.w3.org/2000/svg",  # the SVG namespace, an XML identifier, never fetched
        )
        urls = set(re.findall(r"https?://[^\s\"'`)]+", page))
        unexpected = [u for u in urls if not any(a in u for a in allowed)]
        assert not unexpected, f"unexpected network references in the page: {unexpected}"

        # Nothing in the page loads anything at parse time.
        assert not re.search(r"<script[^>]*\ssrc=", page), "the page loads an external script eagerly"
        assert not re.search(r"<link[^>]*\shref=", page), "the page loads an external stylesheet"
        assert "<iframe" not in page
        assert "framejs.io" not in page

    def test_accepts_a_gufe_object_a_model_and_a_dict(self):
        gufe = pytest.importorskip("gufe")
        from gufe_viz import payload_for

        solvent = gufe.SolventComponent()
        from_object = to_html(solvent)
        from_model = to_html(payload_for(solvent))
        from_dict = to_html(payload_for(solvent).model_dump(mode="json"))

        assert from_object == from_model == from_dict

    def test_title_defaults_to_the_payload_name(self):
        html = to_html(read_example("small_molecule.json"))
        assert "<title>benzene</title>" in html

        assert "<title>custom</title>" in to_html(read_example("small_molecule.json"), title="custom")

    def test_title_is_escaped(self):
        """A molecule name is arbitrary text from someone else's file."""
        payload = read_example("small_molecule.json")
        payload["name"] = "<script>alert(1)</script>"

        html = to_html(payload)
        title = re.search(r"<title>(.*?)</title>", html, re.S)
        assert title
        assert title.group(1) == "&lt;script&gt;alert(1)&lt;/script&gt;"
        # The name also appears inside the JSON block — that copy is neutralized
        # by `_script_safe`'s `</` escape rather than by HTML escaping, and is
        # covered by test_a_payload_containing_a_closing_script_tag_cannot_break_out.
        assert "<script>alert(1)</script>" not in html

    def test_a_payload_containing_a_closing_script_tag_cannot_break_out(self):
        """The subtle one. A molecule name is arbitrary text from a user file."""
        payload = read_example("small_molecule.json")
        payload["data"]["smiles"] = "</script><script>alert(1)</script>"

        html = to_html(payload)
        embedded = re.search(r'<script id="gufe-payload" type="application/json">(.*?)</script>', html, re.S)
        assert embedded, "the payload block was terminated early"
        # `\/` is a legal JSON escape, so the value survives JSON.parse intact.
        assert json.loads(embedded.group(1).replace("<\\/", "</")) == payload

    def test_script_safe_leaves_meaning_unchanged(self):
        assert _script_safe('x = "</script>"') == 'x = "<\\/script>"'
        assert _script_safe("</SCRIPT") == "<\\/SCRIPT"
        assert _script_safe("no tags here") == "no tags here"

    def test_refuses_an_object_it_cannot_visualize(self):
        from gufe_viz import NoVisualization

        with pytest.raises(NoVisualization):
            to_html(object())


class TestDefaultOutputPath:
    def test_keeps_the_original_suffix(self, tmp_path):
        """PLAN Q2: `<filename.suffix>.html`, in the same directory."""
        assert default_output_path(tmp_path / "ligand.json").name == "ligand.json.html"
        assert default_output_path(tmp_path / "ligand.json").parent == tmp_path

    def test_two_inputs_differing_only_by_extension_do_not_collide(self, tmp_path):
        a = default_output_path(tmp_path / "thing.json")
        b = default_output_path(tmp_path / "thing.sdf")
        assert a != b


class TestCli:
    def test_writes_beside_the_input_by_default(self, tmp_path, capsys):
        source = tmp_path / "mol.json"
        source.write_text(json.dumps(read_example("small_molecule.json")))

        assert main([str(source)]) == 0
        written = tmp_path / "mol.json.html"
        assert written.is_file()
        assert written.read_text().startswith("<!doctype html>")
        assert "mol.json.html" in capsys.readouterr().out

    def test_honours_an_explicit_output(self, tmp_path):
        source = tmp_path / "mol.json"
        source.write_text(json.dumps(read_example("protein_fragment.json")))
        destination = tmp_path / "elsewhere" / "page.html"
        destination.parent.mkdir()

        assert main([str(source), "-o", str(destination)]) == 0
        assert destination.is_file()

    def test_writes_to_stdout_on_dash(self, tmp_path, capsys):
        source = tmp_path / "mol.json"
        source.write_text(json.dumps(read_example("solvent.json")))

        assert main([str(source), "-o", "-"]) == 0
        assert capsys.readouterr().out.startswith("<!doctype html>")
        assert not list(tmp_path.glob("*.html"))

    def test_missing_input_is_a_clean_error(self, tmp_path):
        with pytest.raises(SystemExit) as exc:
            main([str(tmp_path / "nope.json")])
        assert "no such file" in str(exc.value)

    def test_invalid_json_is_a_clean_error(self, tmp_path):
        source = tmp_path / "bad.json"
        source.write_text("{not json")

        with pytest.raises(SystemExit) as exc:
            main([str(source)])
        assert "not valid JSON" in str(exc.value)

    def test_unreadable_gufe_json_points_at_the_open_question(self, tmp_path):
        """Q4 is open; the CLI says so instead of guessing at a loader."""
        source = tmp_path / "mystery.json"
        source.write_text(json.dumps({"some": "other", "json": True}))

        with pytest.raises(SystemExit) as exc:
            main([str(source)])
        message = str(exc.value)
        assert "gufe_viz.to_html" in message
        assert "examples/" in message
