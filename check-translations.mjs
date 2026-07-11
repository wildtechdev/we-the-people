import { cases as en } from './src/data/cases.js';
import { cases as es } from './src/data/es/cases.js';
const enKeys = Object.keys(en), esKeys = Object.keys(es);
console.log('EN entries:', enKeys.length, '| ES entries:', esKeys.length);
const missing = enKeys.filter(k => !esKeys.includes(k));
const extra = esKeys.filter(k => !enKeys.includes(k));
if (missing.length) console.log('MISSING IN ES:', missing);
if (extra.length) console.log('EXTRA IN ES:', extra);
let bad = 0;
for (const k of enKeys) {
  if (!es[k]) continue;
  for (const f of ['name','year','citation','amendment','url']) {
    if (String(en[k][f]) !== String(es[k][f])) { console.log(`FIELD DIFF ${k}.${f}:`, JSON.stringify(es[k][f])); bad++; }
  }
  if ((en[k].type||'case') !== (es[k].type||'case')) { console.log(`TYPE DIFF ${k}`); bad++; }
  for (const f of ['summary','outcome','significance']) {
    if (!es[k][f] || es[k][f].length < 40) { console.log(`SHORT/MISSING ${k}.${f}`); bad++; }
    if (es[k][f] === en[k][f]) { console.log(`UNTRANSLATED ${k}.${f}`); bad++; }
  }
}
console.log(bad === 0 && !missing.length && !extra.length ? 'PARITY OK' : `ISSUES: ${bad}`);
