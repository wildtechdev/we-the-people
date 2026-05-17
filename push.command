#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
git add -A
git commit -m "Add clickable court cases, enriched Rights Guide, and 10 new scenarios

- Built CaseModal with rich case details (summary, outcome, significance, citation, link to official records)
- Created CaseReference component making all court case names clickable throughout the app
- Updated ContinuousSection to render references as clickable case cards
- Completely enriched RightsView: expandable right cards with case previews, amendment source text, and links back to the Library
- Added 10 new Know Your Rights scenarios: Workplace, Students, Immigration, Firearms, Housing, Jury Duty, Healthcare, Social Media, Federal Agents
- Added 25+ new court cases to cases.js database
- New situation icons for all new scenarios
- 'Read the Source Documents' CTA bridges Rights back to Library"
git push origin main
rm -- "$0"
echo ""
echo "Push complete! Changes deployed to Vercel."
read -n 1 -s -r -p "Press any key to close..."
