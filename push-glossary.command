#!/bin/bash
cd "$(dirname "$0")"
git add -A
git commit -m "Expand glossary from 52 to 180+ terms

- Added 130+ new terms covering constitutional concepts, legal procedures,
  court terminology, archaic founding-era language, and rights concepts
- Organized alphabetically with section comment markers
- Focused on terms that actually appear in the app's document text
- Written in plain language for readers unfamiliar with legal terminology"
git push origin main
echo ""
echo "Push complete! You can close this window."
read -n 1 -s -r -p "Press any key to close..."
osascript -e 'tell application "Terminal" to close front window' &
exit 0
