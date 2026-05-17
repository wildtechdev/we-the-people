#!/bin/bash
cd "$(dirname "$0")"
rm -f .git/index.lock
git add -A
git commit -m "Major UI/UX overhaul: premium design system, search, glossary, rights guide

- Complete page.js rewrite with premium design system
- Glassmorphism header with reading progress bar
- Full-text search across all documents (Cmd+K)
- Know Your Rights situational guide (8 scenarios)
- Constitutional glossary with 50 terms
- Scroll-triggered animations and stagger effects
- Side-by-side original/plain English view
- Dark mode with CSS variables
- Responsive cards with expand/collapse animations
- Hero section with stats
- Amendment badges and article numbering
- Keyboard shortcuts (Cmd+K search)
- Scroll to top button
- Print-friendly styles
- SEO metadata improvements"
git push origin main
rm -f push.command
echo ""
echo "Pushed successfully! You can close this window."
read -n 1 -s -r -p "Press any key to close..."
