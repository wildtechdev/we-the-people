#!/bin/bash
cd "$(dirname "$0")"
echo "=== Pushing cleanup ==="
git add -A
git commit -m "Remove continue reading card and progress bar from homepage"
git push origin main
echo ""
echo "=== Push complete! ==="
sleep 3
osascript -e 'tell application "Terminal" to close front window' &
rm -- "$0"
