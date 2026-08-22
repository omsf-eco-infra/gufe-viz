"""The registry: one copy of each gufe object, addressed by its gufe key.

Every reference from one visualization payload to another is a gufe key, and the
objects those keys name live in the ``registry`` array on the root payload. That
is the whole deduplication story, and it is deliberately the *only* one: there
are no reference-only or summary-only variants of any type, so what a key
resolves to is always the complete, drawable object.

A gufe key is content-derived, so two occurrences of the same molecule - a
ligand-network node and the endpoint of three of its mappings - produce the same
key and collapse into one entry without anyone having to notice they were the
same. That is what :meth:`Registry.add` relies on.

This is worth doing here rather than over a wire because a payload is a
single-shot dump: there is no server to ask for the protein a node refers to, so
the protein travels with the graph - once.
"""

from __future__ import annotations

from typing import Any


class Registry:
    """A gufe-key-to-payload pool, built while walking a gufe object graph."""

    def __init__(self) -> None:
        self._entries: dict[str, dict[str, Any]] = {}

    def add(self, payload: dict[str, Any]) -> str:
        """Register ``payload`` and return the key that now refers to it.

        First writer wins. Equal keys mean equal gufe objects, so a second copy
        is the duplicate this class exists to drop - keeping the first is not a
        choice between two different things.
        """
        key = payload["gufe-key"]
        self._entries.setdefault(key, payload)
        return key

    def entries(self) -> list[dict[str, Any]]:
        """The pool, sorted by ``(type, gufe-key)``.

        Sorted because the committed example payloads have to be byte-stable
        across runs and gufe holds most of its collections in a ``frozenset``.
        By type first so the ordering is legible in a diff - all the molecules,
        then the protocols, then the systems - rather than alphabetical by
        digest.
        """
        return sorted(self._entries.values(), key=lambda entry: (entry["type"], entry["gufe-key"]))

    def __contains__(self, key: str) -> bool:
        return key in self._entries

    def __len__(self) -> int:
        return len(self._entries)
