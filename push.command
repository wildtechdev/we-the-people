#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
git add -A
git commit -m "Make all court case references clickable across entire Library

- Added 43 new court cases to cases.js (now 70+ total)
- Every case mentioned in Declaration, Constitution, Bill of Rights, and Amendments 11-27 now has full details
- Created TextWithCases component that auto-detects case names in running text and makes them clickable
- Examples/infringements text now has inline clickable case references
- Rights explanations text also parses for inline case mentions
- References section shows each case as a clickable card with citation
- All cases link to official court records on Justia"
git push origin main
rm -- "$0"
echo ""
echo "Push complete! Changes deployed to Vercel."
read -n 1 -s -r -p "Press any key to close..."
