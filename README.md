# We The People: Your Rights

The complete Declaration of Independence, Constitution, and all 27 Amendments, with
plain-language explanations, a case library, a glossary, and a Know Your Rights guide.
English and Spanish. Free, with no ads, accounts, or tracking.

Built with Next.js (static export) and wrapped for iOS with Capacitor.

## Commands

```bash
npm install          # first time only
npm run dev          # local development server
npm run check        # verify all content (run before every release)
npm run build        # static export to out/
npm run build:ios    # check + build + copy into the iOS project (npx cap sync ios)
```

After `npm run build:ios`, open `ios/App/We The People.xcodeproj` in Xcode to archive and submit.
Always run `npm run build:ios` before archiving: Xcode ships whatever web build is in
`ios/App/App/public`, so skipping it ships an old version of the app.

Build with Xcode 27.1 or later (the iOS 27 SDK). Older SDKs run the app in a letterboxed
window on iPhone Duo's inner screen.

`ios/App/App.xcodeproj` is a link to `We The People.xcodeproj`: Capacitor's tools look for a
project with that name, so keep the link if the project is renamed again.

## iPhone Duo and other screen sizes

The layout adapts by screen shape, not by device:

- Short, wide screens (iPhone Duo's front screen, its inner screen held sideways) move the top
  bar and tab bar into a side rail on the right. On iPhone Duo the rail fills the column the
  system's clock already sits in.
- Screens 640px wide and up show lists and details side by side (Case Library, Know Your
  Rights); 900px and up add a table-of-contents sidebar to the reader.
- The iOS app's `MainViewController.swift` tells the page what WebKit does not: where the clock
  column ends (`--ios-status-bottom`) and where the fold is (`--ios-fold-*`, also sent as a
  `wtp-geometry` event). Two-pane screens put the gap between panes on the fold.

To screenshot the simulator without tapping, Debug builds run the script in
`WTP_DEBUG_SCRIPT` after each page load:

```bash
SIMCTL_CHILD_WTP_DEBUG_SCRIPT="document.querySelectorAll('.bottom-nav button')[3].click()" xcrun simctl launch booted WildTech.WeThePeople
```

On iPhone Duo, take each screen separately: `xcrun simctl io <device> enumerate` lists the
displays (front 1398x2034, inner 2007x2853), then
`xcrun simctl io <device> screenshot --display=<UUID> out.png`. Opening the hinge needs
DeviceHub (inside Xcode.app/Contents/Applications).

## Project layout

```
src/app/page.js        The whole app UI (single page, client-side views)
src/app/layout.js      HTML shell, metadata, bundled fonts
src/app/globals.css    Design tokens (light and dark), shared styles
src/i18n.js            Every interface string, English and Spanish
src/data/              English content
src/data/es/           Spanish content (same structure and keys)
scripts/check-content.mjs          Content checker (npm run check)
scripts/canonical/national-archives.json   Official text used by the checker
```

## Content model

Each document file exports sections shaped like:

```js
{
  id, title,
  original,      // verbatim historical text, identical in English and Spanish files
  translation,   // "Plain English" / "Español claro"
  rights,        // "How This Protects You"
  examples: [],  // "Real-World Infringements"
  references: [{ text, source }],  // text starts with a case key to become tappable
  note,          // optional: "changed by a later amendment" notice
  history,       // amendments: "Passed by Congress ... Ratified ..."
}
```

- `declaration.js` and `constitution.js` also carry `signers`; the Declaration has `heading`.
- `cases.js` is the case library. Keys look like `"Miranda v. Arizona (1966)"`. Any exact key
  that appears in running text becomes a link to that case automatically.
- `glossary.js` exports `glossary` (terms) and `situations` (Know Your Rights scenarios,
  optionally with a digital `card` whose `statement` is always in English).

## Rules for editing content

1. Keep `original` text exactly as the National Archives transcribes it. `npm run check`
   fails if any sentence goes missing.
2. Every change goes in both `src/data/` and `src/data/es/`.
3. No em dashes or en dashes anywhere in the commentary (the checker enforces this).
4. Stay neutral and nonpartisan: state holdings, votes, and practical effects.
5. Case links: use the exact case key, and add an entry to both `cases.js` files.
