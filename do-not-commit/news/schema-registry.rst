**Added:**

* ``gufe-key`` is now a required field on every payload type. Every ``*Viz``
  object stands for exactly one ``GufeTokenizable``, and it carries that
  object's key - which is what the registry addresses it by, and what identifies
  it when a payload does not draw. Hyphenated, matching how gufe spells the same
  concept in its own serialized form; the Python helper that produces it is
  ``gufe_key``, matching how gufe spells it as an identifier.
* ``registry``: a pool of whole payload objects carried by the root payload.
  Every reference from one gufe object to another is now a gufe key resolved
  against it, so a shared protein or protocol is carried once however many nodes
  and edges point at it.
* ``ProtocolViz``, the visualization form of a ``gufe.Protocol``. It replaces the
  bare class-name string a transformation used to carry, and is a registry entry
  every edge of a network can share.
* ``ts/src/schema/registry.ts`` - ``buildRegistry``, ``lookup``,
  ``lookupOfType`` and ``entryLabel``, the TypeScript side of key resolution.
* ``validateAs(type, payload)``: validate against one named type rather than
  against the payload's own discriminator. Both suites use it to assert that
  every example validates as its own type and as no other - the top-level union
  can only say a payload is *some* declared type, not the intended one.

**Changed:**

* ``LigandNetworkViz`` now carries its ligands in ``registry``, its ``nodes`` as
  gufe keys, and its ``edges`` as whole ``LigandAtomMappingViz`` objects.
* ``LigandAtomMappingViz`` names its two molecules by gufe key
  (``componentA``/``componentB``) instead of inlining ``molA_sdf``, ``molB_sdf``,
  ``nameA`` and ``nameB``, and gained the ``score`` field the network edge used
  to hold on its own.
* ``ChemicalSystemViz.components`` maps a label to a gufe key rather than to an
  inlined component.
* ``componentA_to_componentB`` is now a list of ``{"index_A": int, "index_B":
  int}`` pairs rather than an object keyed by a stringified A index. JSON object
  keys can only be strings, so the old shape carried atom indices as decimal
  strings and left both languages casting them back; a list keeps both sides
  integers, and lets the schema require a B index for every A index instead of
  stating the rule in prose. Pairs are ordered by ``index_A``.
* ``TransformationViz`` names its ``stateA``, ``stateB`` and ``protocol`` by
  gufe key.
* ``AlchemicalNetworkViz`` now carries whole ``ChemicalSystemViz`` nodes and
  ``TransformationViz`` edges through the registry, so its systems can be drilled
  into - the components are complete objects rather than names.

**Removed:**

* ``LigandNetworkNodeViz``, ``LigandNetworkEdgeViz``, ``ComponentSummaryViz``,
  ``AlchemicalNetworkNodeViz`` and ``AlchemicalNetworkEdgeViz``. Each was a
  second, reference-or-summary-only shape for a gufe class that already had a
  schema object; the registry does that job now, and the mapping between gufe
  classes and schema objects is one to one.

* Named key types - ``ComponentKey``, ``SmallMoleculeComponentKey``,
  ``ChemicalSystemKey`` and ``ProtocolKey``. A reference used to be a bare
  ``GufeKey``, which said only "non-empty string" and left the type of the
  referent living in a test and a view. These say it in the contract, and the
  generated TypeScript now reads ``componentA: SmallMoleculeComponentKey``
  rather than ``componentA: GufeKey``. Validation is unchanged: JSON Schema
  cannot check that a key resolves, or to what, so that half stays a Python test
  and a ``lookupOfType`` the views degrade over.

**Fixed:**

* Em-dashes are gone from the release notes, and ``pixi run lint`` now holds the
  schema, the payload fixtures, the Python and ``news/`` to plain ASCII
  (``scripts/check_ascii.py``). ``ts/src`` and the README diagrams are exempt on
  purpose: a warning sign in a banner is a glyph someone meant, an em-dash in a
  JSON Schema ``description`` is not.
