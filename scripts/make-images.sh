#!/usr/bin/env bash
# Generate compressed background variants from the source photo.
# Usage: bun run images [source.jpg]
set -euo pipefail

SRC="${1:-DSCF4577.JPG}"
OUT="public/images"
WEBP_Q=55
JPEG_Q=62
mkdir -p "$OUT"

emit() { # name, magick geometry args...
  local name="$1"; shift
  magick "$SRC" -auto-orient -strip "$@" -quality "$WEBP_Q" -define webp:method=6 "$OUT/$name.webp"
  magick "$SRC" -auto-orient -strip "$@" -quality "$JPEG_Q" -sampling-factor 4:2:0 -interlace JPEG "$OUT/$name.jpg"
}

# Phone portrait: resize to 1600 tall (2400 wide), crop 900 wide around the wave crest (~40% across)
emit bg-mobile -resize x1600 -crop 900x1600+510+0 +repage
# Small screens / tablets / laptops
emit bg-small -resize 1440x
# Large / high-DPI desktops
emit bg-large -resize 2560x

ls -lh "$OUT"
