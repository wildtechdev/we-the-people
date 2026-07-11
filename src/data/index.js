// ============================================================
// LANGUAGE-AWARE DATA SELECTOR
// English content lives in src/data/*.js
// Spanish content lives in src/data/es/*.js
// Both share identical structure and identical case keys, so the
// UI and inline case-linking work unchanged in either language.
// ============================================================

import { declaration } from './declaration';
import { billOfRights } from './bill-of-rights';
import { laterAmendments } from './amendments-11-27';
import { constitution } from './constitution';
import { glossary, situations } from './glossary';
import { cases } from './cases';

import { declaration as declarationEs } from './es/declaration';
import { billOfRights as billOfRightsEs } from './es/bill-of-rights';
import { laterAmendments as laterAmendmentsEs } from './es/amendments-11-27';
import { constitution as constitutionEs } from './es/constitution';
import { glossary as glossaryEs, situations as situationsEs } from './es/glossary';
import { cases as casesEs } from './es/cases';

const EN = { declaration, billOfRights, laterAmendments, constitution, glossary, situations, cases };
const ES = {
  declaration: declarationEs,
  billOfRights: billOfRightsEs,
  laterAmendments: laterAmendmentsEs,
  constitution: constitutionEs,
  glossary: glossaryEs,
  situations: situationsEs,
  cases: casesEs,
};

export function getData(lang) {
  return lang === 'es' ? ES : EN;
}
