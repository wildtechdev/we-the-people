#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
rm -f push-about.command
git add -A
git commit -m "Remove all em dashes from app commentary text

- Rewrote 212 sentences across 7 files to eliminate em dashes
- Used commas, periods, conjunctions, and parentheses instead
- Original founding document text left untouched
- Files: constitution.js, bill-of-rights.js, glossary.js,
  cases.js, declaration.js, amendments-11-27.js, page.js"
git push origin main
echo ""
echo "Push complete! You can close this window."
read -n 1 -s -r -p "Press any key to close..."
osascript -e 'tell application "Terminal" to close front window' &
exit 0
