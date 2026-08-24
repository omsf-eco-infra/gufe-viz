**Added:**

* ``<gufe-ligand-network>`` - the third view. Force-directed, circular and radial
  layouts; RDKit 2D depictions inside the node circles; edges coloured and
  weighted by score; zoom, pan and node dragging; a detail pane showing the
  selected mapping's endpoints, score, mapped-atom count and annotations.
* ``examples/ligand_network_named.json`` - gufe's GraphML network fixture again
  with each ligand named after its SMILES, so both the named and the unnamed
  labelling paths are exercised.
* ``mappingDataFor(edge)`` - reassembles a network's node pair and edge into the
  same ``MappingData`` a standalone ``LigandAtomMapping`` payload carries. This
  is the seam ``<gufe-atom-mapping>`` will plug into, so the network view and the
  standalone mapping viewer share one component rather than two code paths.

**Changed:**

* **Schema (breaking, pre-release):** a ``LigandNetwork`` payload's ``data`` is
  now ``{nodes, edges}`` rather than ``{graphml}``. Nodes carry an id, a name, an
  SDF and a SMILES; edges carry two node ids, a score, the atom correspondence
  and the annotations.
* GraphML no longer crosses the Python-to-TypeScript boundary. Its node payloads
  are gufe ``to_json`` moldicts, so forwarding it would put an element-symbol
  table, an ``.npy`` conformer decoder and an eigensolver in TypeScript - the
  thing the contract exists to prevent.

**Deprecated:**

* <news item>

**Removed:**

* ``LigandNetworkData.graphml``. Nothing read it. If round-tripping a payload
  back into a ``LigandNetwork`` turns out to be a use case, ``extra`` can carry
  the GraphML with no schema change.
* The dev container (``devtools/docker/``, ``.dockerignore``, the ``docker-*``
  recipes, CI's ``dev-container`` job). pixi on its own is enough.
* The ``justfile``. It mirrored every pixi task one-for-one, which was worth it
  only while there were ``docker-*`` recipes with no pixi equivalent. ``pixi run
  <task>`` is now the only entry point, and it is the literal string CI runs.

**Fixed:**

* ``examples/protein*.json`` are reproducible again. OpenMM stamps its version
  and the current date into the first ``REMARK`` of every PDB it writes, so the
  committed fixtures differed from a fresh run every day.
* ``examples/ligand_atom_mapping.json`` is reproducible again. It is the first
  edge of gufe's network fixture, chosen by sorting on molecule names - and every
  molecule there is unnamed, so the sort was a tie broken by frozenset iteration
  order. It now sorts on gufe keys.

**Security:**

* <news item>
