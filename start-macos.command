#!/bin/sh
cd "$(dirname "$0")" || exit 1
if command -v python3 >/dev/null 2>&1; then
  exec python3 scripts/serve.py "$@"
elif command -v node >/dev/null 2>&1; then
  exec node scripts/start.mjs "$@"
else
  echo "Install Python 3 or Node.js 22.12+ first."
  read -r response
fi
