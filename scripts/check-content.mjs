// ============================================================
// CONTENT CHECK
// Run with: npm run check
//
// Verifies that:
//  1. Every sentence of the National Archives text appears in the app
//     (so founding-document text can never silently go missing again).
//  2. English and Spanish content stay in parity (same sections, same
//     original text, same cases, glossary size, scenarios and cards).
//  3. Every case reference points to an entry in the case library.
//  4. No em dashes or en dashes appear anywhere in the content.
//  5. Interface strings exist in both languages.
// Exits with code 1 if anything fails.
// ============================================================

import { readFileSync } from 'fs';

const root = new URL('../src/', import.meta.url);
const load = async (lang) => {
  const p = lang === 'es' ? 'data/es/' : 'data/';
  const [c, d, b, a, g, k] = await Promise.all([
    import(new URL(p + 'constitution.js', root)),
    import(new URL(p + 'declaration.js', root)),
    import(new URL(p + 'bill-of-rights.js', root)),
    import(new URL(p + 'amendments-11-27.js', root)),
    import(new URL(p + 'glossary.js', root)),
    import(new URL(p + 'cases.js', root)),
  ]);
  let unratified = null;
  try { unratified = (await import(new URL(p + 'unratified.js', root))).unratified; } catch (e) { /* optional */ }
  return {
    constitution: c.constitution, declaration: d.declaration, billOfRights: b.billOfRights,
    laterAmendments: a.laterAmendments, glossary: g.glossary, situations: g.situations, cases: k.cases, unratified,
  };
};

const en = await load('en');
const es = await load('es');
const { STRINGS } = await import(new URL('i18n.js', root));
const canon = JSON.parse(readFileSync(new URL('canonical/national-archives.json', import.meta.url), 'utf8'));

const errors = [];
const warnings = [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

// ---------- helpers ----------
const norm = (s) => s.toLowerCase().replace(/['’]/g, "'").replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

function sections(d) {
  const out = [];
  d.declaration.sections.forEach(s => out.push([`declaration:${s.id}`, s]));
  out.push(['constitution:preamble', d.constitution.preamble]);
  d.constitution.articles.forEach(a => a.sections.forEach(s => out.push([`constitution:${s.id}`, s])));
  if (d.billOfRights.preamble) out.push(['bill-of-rights:preamble', d.billOfRights.preamble]);
  d.billOfRights.amendments.forEach(a => out.push([`amendment:${a.number}`, a]));
  d.laterAmendments.amendments.forEach(a => out.push([`amendment:${a.number}`, a]));
  (d.unratified?.amendments || []).forEach(a => out.push([`unratified:${a.id}`, a]));
  return out;
}

// ---------- 1. canonical text coverage ----------
function coverage(label, canonParagraphs, appText) {
  const words = norm(appText).split(' ');
  const grams = new Set();
  for (let i = 0; i + 6 <= words.length; i++) grams.add(words.slice(i, i + 6).join(' '));
  let missing = 0;
  for (const para of canonParagraphs) {
    for (const sentence of para.split(/(?<=[.;:])\s+/)) {
      const w = norm(sentence).split(' ').filter(Boolean);
      if (w.length < 6) continue;
      let hit = 0, total = 0;
      for (let i = 0; i + 6 <= w.length; i++) { total++; if (grams.has(w.slice(i, i + 6).join(' '))) hit++; }
      if (hit / total < 0.6) { missing++; fail(`${label}: missing text: "${sentence.slice(0, 90)}..."`); }
    }
  }
  return missing;
}

const allOriginals = (d) => sections(d).map(([, s]) => s.original || '').join(' ');
const decl = en.declaration;
coverage('Declaration', canon.declaration, [decl.heading || '', ...decl.sections.map(s => s.original)].join(' '));
for (const [key, paras] of Object.entries(canon.constitution)) {
  coverage(`Constitution Art. ${key}`, paras.filter(p => !/^Section\./.test(p)), allOriginals(en));
}
coverage('Bill of Rights preamble', canon.billOfRights.preamble, en.billOfRights.preamble?.original || '');
for (const [n, paras] of Object.entries(canon.billOfRights.amendments)) {
  const a = en.billOfRights.amendments.find(x => x.number === Number(n));
  coverage(`Amendment ${n}`, paras, a ? a.original : '');
}
for (const [n, paras] of Object.entries(canon.amendments)) {
  const a = en.laterAmendments.amendments.find(x => x.number === Number(n));
  coverage(`Amendment ${n}`, paras.filter(p => !/^Section \d+\.$/.test(p)), a ? a.original : '');
}

// Signers
const countSigners = (s) => (s?.states || []).reduce((n, g) => n + g.names.length, 0) + (s?.president ? 1 : 0);
if (countSigners(en.declaration.signers) !== 56) fail(`Declaration: expected 56 signers, found ${countSigners(en.declaration.signers)}`);
if (countSigners(en.constitution.signers) !== 39) fail(`Constitution: expected 39 signers, found ${countSigners(en.constitution.signers)}`);

// ---------- 2. English / Spanish parity ----------
const enSecs = sections(en), esSecs = sections(es);
const esMap = new Map(esSecs);
if (enSecs.map(x => x[0]).join() !== esSecs.map(x => x[0]).join()) fail('Document sections differ between English and Spanish (ids or order)');
for (const [id, s] of enSecs) {
  const t = esMap.get(id);
  if (!t) continue;
  if (s.original !== t.original) fail(`${id}: original text differs between EN and ES`);
  for (const f of ['translation', 'rights']) {
    if (s[f] && !t[f]) fail(`${id}: ES is missing ${f}`);
    if (s[f] && s[f] === t[f]) fail(`${id}: ${f} is not translated`);
  }
  for (const f of ['note', 'history']) {
    if (!!s[f] !== !!t[f]) fail(`${id}: ${f} present in one language only`);
  }
  for (const f of ['examples', 'references']) {
    if ((s[f] || []).length !== (t[f] || []).length) fail(`${id}: ${f} count differs (EN ${(s[f] || []).length}, ES ${(t[f] || []).length})`);
  }
  if (!s.translation) fail(`${id}: missing translation`);
}
for (const n of [...Array(27).keys()].map(i => i + 1)) {
  const a = n <= 10 ? en.billOfRights.amendments.find(x => x.number === n) : en.laterAmendments.amendments.find(x => x.number === n);
  if (!a) fail(`Amendment ${n} is missing`);
  else if (!a.history) warn(`Amendment ${n} has no ratification history line`);
}
if (JSON.stringify(en.declaration.signers) !== JSON.stringify(es.declaration.signers)) fail('Declaration signers differ between EN and ES');
if (JSON.stringify(en.constitution.signers) !== JSON.stringify(es.constitution.signers)) fail('Constitution signers differ between EN and ES');
if (en.declaration.heading !== es.declaration.heading) fail('Declaration heading differs between EN and ES');

// Glossary
if (en.glossary.length !== es.glossary.length) fail(`Glossary size differs (EN ${en.glossary.length}, ES ${es.glossary.length})`);
for (const [lang, g] of [['EN', en.glossary], ['ES', es.glossary]]) {
  const seen = new Set();
  g.forEach(x => {
    const k = x.term.toLowerCase();
    if (seen.has(k)) fail(`${lang} glossary: duplicate term "${x.term}"`);
    seen.add(k);
    if (!x.definition || x.definition.length < 30) fail(`${lang} glossary: "${x.term}" has a missing or very short definition`);
  });
}

// Scenarios
if (en.situations.map(s => s.id).join() !== es.situations.map(s => s.id).join()) fail('Scenario ids or order differ between EN and ES');
en.situations.forEach((s, i) => {
  const t = es.situations[i];
  if (!t || t.id !== s.id) return;
  if (s.rights.length !== t.rights.length) fail(`Scenario ${s.id}: rights count differs`);
  s.rights.forEach((r, j) => {
    if (!t.rights[j]) return;
    if (r.amendment !== t.rights[j].amendment) fail(`Scenario ${s.id} right ${j + 1}: amendment differs (${r.amendment} / ${t.rights[j].amendment})`);
    if (r.ref !== t.rights[j].ref) fail(`Scenario ${s.id} right ${j + 1}: ref differs`);
  });
  if (s.tips.length !== t.tips.length) fail(`Scenario ${s.id}: tips count differs`);
  if (!!s.card !== !!t.card) fail(`Scenario ${s.id}: card present in one language only`);
  if (s.card && t.card) {
    if (s.card.statement !== t.card.statement) fail(`Scenario ${s.id}: card statement must be the same English text in both languages`);
    if (!t.card.statementTranslation) fail(`Scenario ${s.id}: Spanish card is missing statementTranslation`);
  }
});

// Cases
const enKeys = Object.keys(en.cases), esKeys = Object.keys(es.cases);
enKeys.filter(k => !es.cases[k]).forEach(k => fail(`Case missing in ES: ${k}`));
esKeys.filter(k => !en.cases[k]).forEach(k => fail(`Case only in ES: ${k}`));
for (const k of enKeys) {
  const a = en.cases[k], b = es.cases[k];
  if (!b) continue;
  for (const f of ['name', 'year', 'citation', 'amendment', 'url', 'type']) {
    if (String(a[f] ?? '') !== String(b[f] ?? '')) fail(`Case ${k}: ${f} differs between EN and ES`);
  }
  for (const f of ['summary', 'outcome', 'significance']) {
    for (const [lang, c] of [['EN', a], ['ES', b]]) {
      if (!c[f] || c[f].length < 40) fail(`Case ${k}: ${lang} ${f} is missing or too short`);
    }
    if (a[f] && a[f] === b[f]) fail(`Case ${k}: ${f} is not translated`);
  }
  if (!/^https:\/\//.test(a.url || '')) fail(`Case ${k}: missing or insecure url`);
  if (!k.endsWith(`(${a.year})`)) warn(`Case ${k}: key year does not match year field ${a.year}`);
}

// ---------- 3. references resolve ----------
const CASE_START = /^((?:[A-Z][^()]*?)\(\d{4}\))/;
for (const [lang, d] of [['EN', en], ['ES', es]]) {
  for (const [id, s] of sections(d)) {
    (s.references || []).forEach(r => {
      const m = r.text.match(CASE_START);
      if (m && / v\. |^Ex parte |^In re /.test(m[1]) && !d.cases[m[1].trim()]) fail(`${lang} ${id}: reference "${m[1]}" is not in the case library`);
    });
  }
  d.situations.forEach(s => s.rights.forEach(r => {
    if (/\(\d{4}\)$/.test(r.ref) && !d.cases[r.ref]) fail(`${lang} scenario ${s.id}: ref "${r.ref}" is not in the case library`);
  }));
}

// ---------- 4. no em or en dashes ----------
function scanDashes(label, obj, path = '') {
  if (typeof obj === 'string') { if (/[–—]/.test(obj)) fail(`${label}${path}: contains an em or en dash`); return; }
  if (Array.isArray(obj)) obj.forEach((v, i) => scanDashes(label, v, `${path}[${i}]`));
  else if (obj && typeof obj === 'object') Object.entries(obj).forEach(([k, v]) => scanDashes(label, v, `${path}.${k}`));
}
scanDashes('EN', en);
scanDashes('ES', es);
scanDashes('UI strings', STRINGS);

// ---------- 5. interface strings ----------
function compareKeys(a, b, path) {
  for (const k of Object.keys(a)) {
    if (!(k in b)) { fail(`UI string ${path}${k} is missing in Spanish`); continue; }
    if (typeof a[k] === 'object' && a[k] && typeof b[k] === 'object') compareKeys(a[k], b[k], `${path}${k}.`);
  }
  for (const k of Object.keys(b)) if (!(k in a)) fail(`UI string ${path}${k} is missing in English`);
}
compareKeys(STRINGS.en, STRINGS.es, '');

// ---------- report ----------
const summary = [
  `Document sections: ${enSecs.length}`,
  `Cases: ${enKeys.length}`,
  `Glossary terms: ${en.glossary.length}`,
  `Scenarios: ${en.situations.length} (${en.situations.filter(s => s.card).length} with a card)`,
];
console.log(summary.join(' | '));
warnings.forEach(w => console.log('WARN  ' + w));
errors.forEach(e => console.log('FAIL  ' + e));
console.log(errors.length ? `\n${errors.length} problem(s) found.` : '\nAll content checks passed.');
process.exit(errors.length ? 1 : 0);
