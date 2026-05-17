#!/bin/bash
cd "$(dirname "$0")"
echo "=== Adding and pushing legal reference updates ==="
git add -A
git commit -m "Add rich modals for all legal references (statutes, reports, books)

- Added 8 non-case legal documents to cases.js with full summaries and external links:
  National Emergencies Act, Posse Comitatus Act, War Powers Resolution,
  Military Commissions Act, DOJ Ferguson Report, ACLU War Comes Home Report,
  John Locke Second Treatise, Ex parte Merryman
- Updated CaseModal to show contextual labels by document type
  (Federal Law, Official Report, Source Text vs Court Case)
- Dynamic button text: Read Official Text / Read Full Report / Read Full Text
- Added type badges for non-case documents in modal header
- Fixed Ex parte Merryman reference format in constitution.js"
git push origin main
echo ""
echo "=== Push complete! ==="
sleep 3
osascript -e 'tell application "Terminal" to close front window' &
rm -- "$0"
