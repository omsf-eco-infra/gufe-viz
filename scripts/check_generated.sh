#!/usr/bin/env bash
# Fail if any committed generated artifact differs from a fresh build.
#
# Three things in this repo are generated and checked in (PLAN §2, §9):
#
#   schema/gufe-viz.schema.json      from python/gufe_viz/schema.py
#   ts/src/schema/types.ts           from the JSON Schema
#   python/gufe_viz/_assets/*.js     from ts/src/**
#
# Committing them is what lets `pip install .` work with no Node toolchain. This
# script is the thing that stops them silently going stale.
#
# It snapshots the current files, regenerates, and compares bytes — rather than
# asking git — so it gives the same answer on a dirty tree, in a fresh clone, and
# for a file that has never been committed.
set -euo pipefail

cd "$(dirname "$0")/.."

GENERATED=(
  schema/gufe-viz.schema.json
  ts/src/schema/types.ts
  python/gufe_viz/_assets/gufe-viz.js
)

snapshot="$(mktemp -d)"
trap 'rm -rf "$snapshot"' EXIT

for path in "${GENERATED[@]}"; do
  if [[ -f "$path" ]]; then
    mkdir -p "$snapshot/$(dirname "$path")"
    cp "$path" "$snapshot/$path"
  fi
done

echo "==> regenerating schema"
python scripts/gen_schema.py

echo "==> regenerating TypeScript types"
npm run --silent types

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

if (( ${#stale[@]} )); then
  {
    echo
    printf '%s\n' "${stale[@]}"
    echo
    echo "differ from a fresh build. Run:"
    echo
    echo "    pixi run schema && pixi run types && pixi run build"
    echo
    echo "and commit the result."
  } >&2
  exit 1
fi

echo
echo "all generated artifacts are up to date"
