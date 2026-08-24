**Added:**

* ``gufe_viz.view(obj)`` - the page ``to_html`` writes, in a notebook cell. One
  call produces two layers and the frontend picks: ``text/html``, the page in an
  ``<iframe srcdoc>``, which needs no dependency and still draws in a saved
  notebook with no kernel; and an anywidget view carrying a shell page with the
  payload as widget state, where assigning ``.payload`` again redraws in place.
  ``live=False`` and ``static=False`` select one layer or the other.
* ``gufe_viz.shell_html()`` - the same document as ``to_html``, minus the baked
  payload and its bootstrap, for a host that delivers the payload itself. Both
  come from one template.
* ``gufe-viz[notebook]`` - the optional anywidget dependency. Without it,
  ``view()`` returns the static layer alone.
* ``examples/notebooks/gufe-viz-demo.ipynb`` - every payload type and every
  delivery mode in one notebook, with ``pixi run notebook`` (JupyterLab) and
  ``pixi run marimo`` (the same file, converted) to open it. The notebook
  environment is a pixi feature of its own, so the default environment does not
  grow a JupyterLab solve.
* ``examples/notebooks/gufe-viz-gallery.ipynb`` and ``pixi run gallery`` - the
  same views as screenshots, committed with their outputs so the visualizations
  are visible on GitHub, whose notebook renderer strips the ``<iframe>`` and
  ``<script>`` that ``view()`` emits.

**Changed:**

* ``python/gufe_viz/html.py`` builds its page from a template with the payload
  block and the bootstrap as separate fillings, so the standalone page and the
  widget's shell cannot drift apart.
