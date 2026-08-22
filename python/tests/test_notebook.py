"""``gufe_viz.view``: what a notebook cell actually receives.

Two things are tested here:
 - a cell shows the same page the CLI writes
 - a saved notebook still shows it with no kernel
Everything else is the widget's, and is only tested where
anywidget is installed.
"""

from __future__ import annotations

import html as _stdlib_html

import pytest
from gufe_viz import StaticView, shell_html, to_html, view
from gufe_viz.notebook import DEFAULT_HEIGHT

WIDGET_MIME = "application/vnd.jupyter.widget-view+json"


def mime_data(bundle) -> dict:
    """The data half, whichever shape the widget layer answered with.

    anywidget returns ``(data, metadata)``, ipywidgets and :class:`StaticView`
    return ``data``. IPython accepts both.
    """
    return bundle[0] if isinstance(bundle, tuple) else bundle


def srcdoc_of(markup: str) -> str:
    """The document a cell's iframe carries, unescaped."""
    start = markup.index('srcdoc="') + len('srcdoc="')
    return _stdlib_html.unescape(markup[start : markup.index('"', start)])


class TestTheStaticLayer:
    def test_the_cell_carries_the_page_the_cli_writes(self, example):
        """Not a similar page. The same one."""
        name, payload = example
        cell = view(payload, live=False)

        assert srcdoc_of(cell._repr_html_()) == to_html(payload), name

    def test_it_offers_html_and_a_plain_text_line(self, example):
        _, payload = example
        bundle = view(payload, live=False)._repr_mimebundle_()

        assert set(bundle) == {"text/html", "text/plain"}
        assert payload["type"] in bundle["text/plain"]

    def test_height_reaches_the_iframe(self):
        cell = view({"type": "SmallMoleculeComponentViz"}, live=False, height="123px")

        assert "height:123px" in cell._repr_html_()

    def test_live_false_needs_nothing_installed(self, example):
        _, payload = example

        assert isinstance(view(payload, live=False), StaticView)

    def test_an_unviewable_object_says_so(self):
        with pytest.raises(TypeError, match="no visualization"):
            view(object())


class TestTheShell:
    """The widget's document: the page, minus what the widget itself supplies."""

    def test_it_is_the_page_without_the_payload(self):
        shell = shell_html()

        assert shell.startswith("<!doctype html>")
        assert "<gufe-view></gufe-view>" in shell
        assert 'id="gufe-payload"' not in shell
        # ...and so the bootstrap that reads it is gone too.
        assert 'getElementById("gufe-payload")' not in shell

    def test_it_carries_the_same_bundle_as_the_page(self, example):
        _, payload = example
        # Same title, so the only differences left are the two deliberate ones.
        page = to_html(payload, title="gufe-viz")
        shell = shell_html()

        # The shell is a strict subset: everything in it that is not the payload
        # block or the bootstrap is in the page too, one template's worth.
        for line in shell.splitlines():
            if line.strip():
                assert line in page


@pytest.mark.parametrize("static", [True, False])
def test_static_controls_the_kernel_less_picture(static):
    """The knob that decides whether an exported notebook draws anything."""
    pytest.importorskip("anywidget")
    payload = {"type": "SmallMoleculeComponentViz", "name": "x"}

    bundle = mime_data(view(payload, static=static)._repr_mimebundle_())

    assert WIDGET_MIME in bundle
    assert ("text/html" in bundle) is static


class TestTheLiveLayer:
    @pytest.fixture(autouse=True)
    def _needs_anywidget(self):
        pytest.importorskip("anywidget")

    @pytest.fixture
    def payload(self):
        return {"type": "SmallMoleculeComponentViz", "name": "benzene"}

    def test_it_ships_the_shell_and_the_payload_as_state(self, payload):
        widget = view(payload)

        assert widget.payload == payload
        assert widget._shell == shell_html()
        assert widget.height == DEFAULT_HEIGHT

    def test_a_new_payload_updates_the_exported_picture_too(self, payload, example):
        """Otherwise a live cell and its export would disagree after an update."""
        _, other = example
        widget = view(payload)

        widget.payload = other

        assert widget.payload == other
        assert widget.static_page == to_html(other)

    def test_a_gufe_object_is_coerced_on_assignment(self, payload):
        widget = view(payload)

        with pytest.raises(TypeError, match="no visualization"):
            widget.payload = object()

    def test_the_widget_view_and_the_page_are_both_offered(self, payload):
        bundle = mime_data(view(payload)._repr_mimebundle_())

        assert WIDGET_MIME in bundle
        assert srcdoc_of(bundle["text/html"]) == to_html(payload)
