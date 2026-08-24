**Added:**

* ``schema/gufe-viz.schema.json`` - the Python-to-TypeScript contract,
  hand-written and checked in. All twelve payload kinds are declared, though
  only three have views so far.
* ``gufe_viz.payload_for(obj)`` - turn a live gufe object into a schema-valid
  payload dict, raising ``TypeError`` for anything this build cannot draw.
  Subclasses reach their base class's builder through a most-derived-first
  dispatch table.
* ``scripts/make_examples.py`` - rebuilds ``examples/*.json`` from real gufe
  objects. The same files feed pytest, vitest, the drag-and-drop page and the
  gallery.
* Runtime validation in the browser: ``<gufe-view>`` validates a payload against
  the schema before dispatching, and names the failing JSON pointer when it
  refuses one.
* ``python/tests/mutations.json`` - a mutation matrix applied by both test suites, so
  a disagreement between ``jsonschema`` and Ajv about what a valid payload is
  turns one of them red.

**Changed:**

* <news item>

**Deprecated:**

* <news item>

**Removed:**

* <news item>

**Fixed:**

* <news item>

**Security:**

* <news item>
