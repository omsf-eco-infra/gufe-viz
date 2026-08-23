#!/usr/bin/env bash
# Fail if any committed generated artifact differs from a fresh build.
#
# Three things in this repo are generated and checked in:
#
#   ts/src/schema/types.ts           from schema/gufe-viz.schema.json
#   ts/src/shared/atom-colors.ts     from gufe and matplotlib, by gen_atom_colors.py
#   python/gufe_viz/_assets/*.js     from ts/src/**
#   examples/*.json                  from real gufe objects, by make_examples.py
#
# atom-colors.ts is on that list for the same reason as the rest, plus one of its
# own: atom colours are mirrored from the libraries that already draw them, never
# authored here, and a stale mirror is a picture that disagrees with gufe about
# what a colour means.
#
# examples/ is on that list because it is the input to everything else: the same
# nine payloads feed pytest, vitest, the dropzone and the gallery, and the whole
# mutation matrix is applied on top of them. A fixture that has drifted from the
# builder that produces it silently weakens every assertion built on it. Two
# non-determinism bugs reached main through this gap before it was covered.
#
# The schema itself is not on that list and never will be: it is hand-written,
# and it is what both of the above are ultimately derived from.
#
# Committing them is what lets `pip install .` work with no Node toolchain. This
# script is the thing that stops them silently going stale.
#
# It snapshots the current files, regenerates, and compares bytes - rather than
# asking git - so it gives the same answer on a dirty tree, in a fresh clone, and
# for a file that has never been committed.
set -euo pipefail

cd "$(dirname "$0")/.."

GENERATED=(
  ts/src/schema/types.ts
  ts/src/shared/atom-colors.ts
  python/gufe_viz/_assets/gufe-viz.js
)
# Whole directories, compared file by file so an added or removed fixture is
# caught as well as a changed one.
GENERATED_DIRS=(
  examples
)

snapshot="$(mktemp -d)"
trap 'rm -rf "$snapshot"' EXIT

for path in "${GENERATED[@]}"; do
  if [[ -f "$path" ]]; then
    mkdir -p "$snapshot/$(dirname "$path")"
    cp "$path" "$snapshot/$path"
  fi
done
for dir in "${GENERATED_DIRS[@]}"; do
  mkdir -p "$snapshot/$dir"
  cp -R "$dir/." "$snapshot/$dir/"
done

echo "==> rebuilding the example payloads"
python scripts/make_examples.py >/dev/null

echo "==> regenerating TypeScript types"
npm run --silent types

echo "==> regenerating the mirrored atom colours"
python scripts/gen_atom_colors.py >/dev/null

echo "==> rebuilding the bundle"
npm run --silent build

echo
echo "==> comparing against the committed copies"
stale=()
for path in "${GENERATED[@]}"; do
  if [[ ! -f "$snapshot/$path" ]]; then
    echo "UNCOMMITTED: $path was not present before this run"
    stale+=("$path")
  elif ! cmp -s "$snapshot/$path" "$path"; then
    echo "STALE:       $path"
    diff -u "$snapshot/$path" "$path" | head -40 || true
    stale+=("$path")
  else
    echo "ok:          $path"
  fi
done

for dir in "${GENERATED_DIRS[@]}"; do
  if diff -rq "$snapshot/$dir" "$dir" >/dev/null 2>&1; then
    echo "ok:          $dir/"
  else
    echo "STALE:       $dir/"
    # Show what actually changed, not just which file changed. These payloads
    # carry long single-line fields - an SDF, a PDB, a base64 conformer - so
    # trim each line, or one stale fixture buries the log.
    diff -rq "$snapshot/$dir" "$dir" || true
    for file in $(diff -rq "$snapshot/$dir" "$dir" 2>/dev/null | awk '/^Files /{print $2}'); do
      echo
      echo "--- ${file#"$snapshot/"} ---"
      diff -u "$file" "${file#"$snapshot/"}" | cut -c1-200 | head -40 || true
    done
    stale+=("$dir/")
  fi
done

if (( ${#stale[@]} )); then
  {
    echo
    printf '%s\n' "${stale[@]}"
    echo
    echo "differ from a fresh build. Run:"
    echo
    echo "    pixi run examples && pixi run types && pixi run atom-colors && pixi run build"
    echo
    echo "and commit the result."
  } >&2
  exit 1
fi

echo
echo "all generated artifacts are up to date"
