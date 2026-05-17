#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
rm -f push-fix.command push-fix2.command push-glossary.command
git add -A
git commit -m "Add About page with mission statement, share button, and support

- New About view accessible via info button in top bar
- Mission: documents belong to We The People (the citizens)
- Explains duty to know our rights
- Why this app exists: no ad-free alternative on App Store
- Share button using Web Share API with clipboard fallback
- Moved support/donate card from home to About page
- Added Info, Share, and Flag icons"
git push origin main
echo ""
echo "Push complete! You can close this window."
read -n 1 -s -r -p "Press any key to close..."
osascript -e 'tell application "Terminal" to close front window' &
exit 0
