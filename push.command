#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
git add -A
git commit -m "Redesign: reading-app aesthetic with patriotic palette

- Book/reading-app layout matching reference design
- Home screen with continue reading card, document covers, quick-access rights
- Library view with document browser and immersive reading mode
- Drop caps, pull quotes, dot indicators, and serif typography
- Bottom navigation bar (Home, Library, Rights, Glossary)
- Patriotic color palette: navy, crimson, cream, gold
- Document cover art cards with gradient backgrounds
- Stars decoration on detail panels
- Warm cream backgrounds with refined card system
- Full dark mode with matching palette
- All search, glossary, and rights guide features preserved
- Mobile-first responsive design"
git push origin main
rm -f push.command
echo ""
echo "Pushed successfully! You can close this window."
read -n 1 -s -r -p "Press any key to close..."
