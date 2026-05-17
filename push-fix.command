#!/bin/bash
cd "$(dirname "$0")"
git add -A
git commit -m "Fix glossary subtitle: 50 -> 240+ terms"
git push origin main
echo ""
echo "Push complete! You can close this window."
read -n 1 -s -r -p "Press any key to close..."
osascript -e 'tell application "Terminal" to close front window' &
exit 0
