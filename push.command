#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
git add -A
git commit -m "Continuous document flow: read documents as single scrollable text

- Documents now render as continuous flowing text, not isolated sections
- Collapsible Table of Contents to jump to any section
- Star dividers between sections for visual breaks
- Each section has inline expandable rights/examples/references
- Drop cap on first section, centered section titles throughout
- Article labels and amendment numbers shown inline
- Scroll-to-section with smooth scrolling from TOC
- No more back-button required to continue reading"
git push origin main
rm -f push.command
echo ""
echo "Pushed successfully! You can close this window."
read -n 1 -s -r -p "Press any key to close..."
