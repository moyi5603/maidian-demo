#!/bin/bash
cd "$(dirname "$0")"
PORT="${1:-8000}"
echo "本地访问: http://localhost:${PORT}"
python3 -m http.server "$PORT"
