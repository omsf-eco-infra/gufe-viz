**Added:**

* ``<gufe-solvent>`` - the settings card for a ``SolventComponent``, plus a
  schematic of the box. The dots are placed by a seeded generator and the
  caption says so; there is no structure in the payload to draw.
* ``<gufe-unknown-component>`` - the panel for a ``Component`` subclass defined
  outside gufe. Names the class, says why there is no picture, and does it as a
  *view* rather than as the dispatcher's fallback, so one unrecognized component
  inside a chemical system never stops the rest of it drawing.
* ``<gufe-atom-mapping>`` - both ligands side by side with either the mapped
  atoms or the changing ones picked out, the correspondence in numbers, and the
  annotations. Depictions keep their hydrogens, because a mapping's indices
  count them.
* ``<gufe-chemical-system>`` - the labelled components down one side, the
  selected one drawn by a nested ``<gufe-view>``. Composition is structural: a
  new component type appears in here with no change to that file.
* ``<gufe-transformation>`` - a per-label diff of state A against state B, with
  ``<gufe-atom-mapping>`` embedded underneath. A ``NonTransformation`` renders
  as the diff with no differences that it is.
* ``<gufe-alchemical-network>`` - force-directed graph of chemical systems and
  transformations, with a circular fallback when d3 cannot be fetched, and a
  detail pane showing the selected system's composition or the selected
  transformation's endpoints and protocol.
* ``examples/transformation.json``, ``examples/alchemical_network.json`` and
  ``examples/unknown_component.json`` - the last three types that had no
  committed fixture. The first two are built with gufe's own ``DummyProtocol``
  (a ``Transformation`` cannot exist without a ``Protocol``, and gufe ships no
  concrete one outside its tests); the third with a ``Component`` subclass
  defined in the generator, which is the only way to produce that type at all.
* ``depictHighlightedSVG`` and ``shared/svg.ts`` - a depiction with atoms picked
  out, and the two SVG primitives both graph views share.

**Changed:**

* ``<gufe-protein>`` now draws all three PDB-carrying types. A solvated or
  membrane system opens with its waters shown, since hiding the thing that
  distinguishes it would make the three indistinguishable on screen.
* The gallery no longer shows a "no visualization for X yet" card. Every one of
  the eleven declared types has an example payload and a view.
* The parity test between ``VIEW_TAGS`` and the schema now checks both
  directions in both suites: nothing is drawn that cannot be sent, and nothing
  is declared that is not drawn. Adding a type to the schema fails it until the
  view lands or the expectation is deliberately relaxed.
* ``every_payload_type`` reads the committed examples instead of assembling
  three payloads inside the test suite, so "every declared type is something
  Python produces" is a statement about files CI regenerates and diffs.

**Deprecated:**

* <news item>

**Removed:**

* <news item>

**Fixed:**

* <news item>

**Security:**

* <news item>
