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

After `npm run build:ios`, open `ios/App/App.xcworkspace` in Xcode to archive and submit.

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
