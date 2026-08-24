**Added:**

* A debug switch that prints the payload a page was handed to the browser
  console, as indented JSON and as a live object, before it is validated - so a
  payload that fails the schema is still the one you see. It logs from
  ``<gufe-view>``, which every host goes through.
* ``?debug`` (or ``?gufe-debug``) in a page's URL turns it on with nothing
  rebuilt: an already-written file re-opened as
  ``file:///.../out.html?debug`` prints its own payload.
* ``gufe_viz.to_html(obj, debug=True)`` and ``gufe-viz <input> --debug`` bake it
  into the page as ``<gufe-view debug>``, for handing someone a file that does
  it on its own.
* ``pixi run gufe-viz`` and ``pixi run gufe-viz-debug`` tasks, so the renderer
  appears in ``pixi task list`` alongside everything else. The console script
  was always on ``PATH`` inside the environment; nothing named it.
* ``window.GUFE_VIZ_DEBUG = true``, set before ``.payload`` is assigned, for a
  host that mounts the element itself - a notebook widget, or a console session.
* ``ts/src/shared/debug.ts`` - ``debugEnabled``, ``logPayload`` and
  ``payloadJson``, all exported from the bundle.
