// ============================================================
// UI STRINGS (English / Spanish)
// All user-facing interface text lives here. Document content
// lives in src/data (en) and src/data/es (es).
// ============================================================

export const STRINGS = {
  en: {
    // Bottom nav
    nav: { home: 'Home', library: 'Library', rights: 'Rights', glossary: 'Glossary' },

    // Home
    tagline: 'No parties. Just law.',
    foundingDocs: 'Founding Documents',
    knowYourRights: 'Know Your Rights',
    docs: {
      declaration: { title: 'Declaration of Independence', sub: 'July 4, 1776', count: (n) => `${n} sections` },
      constitution: { title: 'The Constitution', sub: 'September 17, 1787', count: (n) => `${n} articles` },
      'bill-of-rights': { title: 'Bill of Rights', sub: 'December 15, 1791', count: () => '10 amendments' },
      amendments: { title: 'Amendments 11-27', sub: '1795 - 1992', count: (n) => `${n} amendments` },
    },

    // Library
    docTabs: { declaration: 'Declaration', constitution: 'Constitution', 'bill-of-rights': 'Bill of Rights', amendments: 'Amd. 11-27' },
    toc: (n) => `Table of Contents (${n} sections)`,
    views: { original: 'Original', translated: 'Plain English', both: 'Side by Side' },
    article: 'Article',
    amendmentWord: (n) => `Amendment ${n}`,
    ratified: (y) => `Ratified ${y}`,
    originalText: 'Original Text',
    plainLabel: 'Plain English',
    hideDetails: 'Hide Details',
    showDetails: 'Rights, Examples & References',
    protectsYou: 'How This Protects You',
    infringements: 'Real-World Infringements',
    legalRefs: 'Legal References',

    // Case modal
    caseTypes: {
      case: { badge: 'Court Case', outcome: 'Outcome', link: 'Read Full Court Opinion' },
      statute: { badge: 'Federal Law', outcome: 'Key Provisions', link: 'Read Official Text' },
      report: { badge: 'Official Report', outcome: 'Key Findings', link: 'Read Full Report' },
      book: { badge: 'Source Text', outcome: 'Core Ideas', link: 'Read Full Text' },
    },
    whyMatters: 'Why This Matters',

    // Rights guide
    back: 'Back',
    rightsIntro: 'Real situations. Real rights. Tap a scenario to learn exactly which constitutional protections apply to you.',
    scenariosCovered: (n) => `${n} scenarios covered`,
    rightsCovered: (n) => `${n} rights covered`,
    yourRights: 'Your Constitutional Rights',
    keyCase: 'Key Case',
    readCase: 'Read full case details',
    fromAmendment: (a) => `From the ${a} Amendment`,
    amendmentChip: (a) => (isNaN(parseInt(a)) ? a : `${a} Amendment`),
    readAmendment: 'Read full amendment',
    practicalTips: 'Practical Tips',
    fullPicture: 'Want the full picture?',
    readSource: 'Read the Source Documents',

    // Red card
    showCard: 'Show Red Card',
    cardWarning: 'DO NOT hand your phone to the agent. Hold the screen up to a window or door viewer and keep the phone in your hands.',
    cardMeaning: '',

    // Glossary
    glossaryTitle: 'Glossary',
    glossarySubtitle: '240+ essential terms in plain language.',
    filterTerms: 'Filter terms...',

    // Search
    searchPlaceholder: 'Search everything...',
    searchHint: 'Search all documents, amendments, glossary, and rights guides.',
    searchTry: 'Try: "free speech", "due process", "search warrant"',
    noResults: (q) => `No results for "${q}"`,
    searchLabels: { declaration: 'Declaration', constitution: 'Constitution', billOfRights: 'Bill of Rights', amendments: 'Amendments', glossary: 'Glossary', rights: 'Rights Guide' },

    // About
    about: {
      title: 'About',
      sub: 'By the people, for the people.',
      h1: 'These Words Belong to You',
      p1a: 'The Declaration of Independence, the Constitution, the Bill of Rights, and every amendment that followed are not the property of any app, company, or political party. They belong to ',
      p1b: ', the citizens of the United States of America.',
      p2a: "But ownership alone is not enough. Beyond the rights described within these founding documents, We The People also have an inherent duty and responsibility to actually ",
      p2em: 'know',
      p2b: " our rights. A right you don't know about is a right that can be taken from you without your knowledge, and that is something no free people should ever accept.",
      h2: 'Why This App Exists',
      p3: "This app was created after noticing something surprising: there wasn't a single ad-free, subscription-free resource on the App Store for We The People to carry and learn our constitutional rights anywhere and everywhere we go. The documents that define our freedoms were locked behind paywalls, cluttered with ads, or buried in apps that cared more about profit than civic education.",
      p4: 'That felt wrong. So we built this: free, forever, for everyone.',
      h3: 'Spread the Word',
      p5: 'The more people who understand their rights, the stronger those rights become for all of us. Share this app with your family, friends, and loved ones so they too can better understand their rights as citizens.',
      shareBtn: 'Share We The People',
      quote: '"We the People of the United States, in Order to form a more perfect Union..."',
      madeWith: 'Made with love for this country and its people.',
      noAds: 'No ads. No subscriptions. No politics. Just your rights.',
      copied: 'Link copied to clipboard!',
      shareText: 'Carry and learn your constitutional rights. Free, ad-free, and always available. Check out We The People.',
    },
  },

  es: {
    // Bottom nav
    nav: { home: 'Inicio', library: 'Biblioteca', rights: 'Derechos', glossary: 'Glosario' },

    // Home
    tagline: 'Sin partidos. Solo ley.',
    foundingDocs: 'Documentos fundacionales',
    knowYourRights: 'Conozca sus derechos',
    docs: {
      declaration: { title: 'Declaración de Independencia', sub: '4 de julio de 1776', count: (n) => `${n} secciones` },
      constitution: { title: 'La Constitución', sub: '17 de septiembre de 1787', count: (n) => `${n} artículos` },
      'bill-of-rights': { title: 'Carta de Derechos', sub: '15 de diciembre de 1791', count: () => '10 enmiendas' },
      amendments: { title: 'Enmiendas 11-27', sub: '1795 - 1992', count: (n) => `${n} enmiendas` },
    },

    // Library
    docTabs: { declaration: 'Declaración', constitution: 'Constitución', 'bill-of-rights': 'Carta de Derechos', amendments: 'Enm. 11-27' },
    toc: (n) => `Índice (${n} secciones)`,
    views: { original: 'Original', translated: 'Español claro', both: 'Lado a lado' },
    article: 'Artículo',
    amendmentWord: (n) => `Enmienda ${n}`,
    ratified: (y) => `Ratificada en ${y}`,
    originalText: 'Texto original (inglés)',
    plainLabel: 'Español claro',
    hideDetails: 'Ocultar detalles',
    showDetails: 'Derechos, ejemplos y referencias',
    protectsYou: 'Cómo le protege',
    infringements: 'Violaciones en el mundo real',
    legalRefs: 'Referencias legales',

    // Case modal
    caseTypes: {
      case: { badge: 'Caso judicial', outcome: 'Resultado', link: 'Leer la opinión completa del tribunal' },
      statute: { badge: 'Ley federal', outcome: 'Disposiciones clave', link: 'Leer el texto oficial' },
      report: { badge: 'Informe oficial', outcome: 'Conclusiones clave', link: 'Leer el informe completo' },
      book: { badge: 'Texto fuente', outcome: 'Ideas centrales', link: 'Leer el texto completo' },
    },
    whyMatters: 'Por qué importa',

    // Rights guide
    back: 'Atrás',
    rightsIntro: 'Situaciones reales. Derechos reales. Toque un escenario para saber exactamente qué protecciones constitucionales le amparan.',
    scenariosCovered: (n) => `${n} escenarios cubiertos`,
    rightsCovered: (n) => `${n} derechos cubiertos`,
    yourRights: 'Sus derechos constitucionales',
    keyCase: 'Caso clave',
    readCase: 'Ver detalles completos del caso',
    fromAmendment: (a) => {
      const n = parseInt(a);
      return isNaN(n) ? `De ${a}` : `De la Enmienda ${n}`;
    },
    amendmentChip: (a) => {
      const n = parseInt(a);
      return isNaN(n) ? a : `Enmienda ${n}`;
    },
    readAmendment: 'Leer la enmienda completa',
    practicalTips: 'Consejos prácticos',
    fullPicture: '¿Quiere el panorama completo?',
    readSource: 'Leer los documentos originales',

    // Red card
    showCard: 'Mostrar tarjeta roja',
    cardWarning: 'NO entregue su teléfono al agente. Muestre la pantalla a través de una ventana o mirilla y mantenga el teléfono en sus manos.',
    cardMeaning: 'Lo que dice esta tarjeta:',

    // Glossary
    glossaryTitle: 'Glosario',
    glossarySubtitle: 'Más de 240 términos esenciales en lenguaje claro.',
    filterTerms: 'Filtrar términos...',

    // Search
    searchPlaceholder: 'Buscar en todo...',
    searchHint: 'Busque en todos los documentos, enmiendas, glosario y guías de derechos.',
    searchTry: 'Pruebe: "libertad de expresión", "debido proceso", "orden de registro"',
    noResults: (q) => `Sin resultados para "${q}"`,
    searchLabels: { declaration: 'Declaración', constitution: 'Constitución', billOfRights: 'Carta de Derechos', amendments: 'Enmiendas', glossary: 'Glosario', rights: 'Guía de derechos' },

    // About
    about: {
      title: 'Acerca de',
      sub: 'Por el pueblo, para el pueblo.',
      h1: 'Estas palabras le pertenecen',
      p1a: 'La Declaración de Independencia, la Constitución, la Carta de Derechos y cada enmienda posterior no son propiedad de ninguna aplicación, empresa ni partido político. Pertenecen a ',
      p1b: ', los ciudadanos de los Estados Unidos de América.',
      p2a: 'Pero la propiedad por sí sola no basta. Más allá de los derechos descritos en estos documentos fundacionales, We The People también tenemos el deber y la responsabilidad de realmente ',
      p2em: 'conocer',
      p2b: ' nuestros derechos. Un derecho que usted no conoce es un derecho que le pueden quitar sin que se entere, y eso es algo que ningún pueblo libre debería aceptar jamás.',
      h2: 'Por qué existe esta aplicación',
      p3: 'Esta aplicación nació al notar algo sorprendente: no existía en la App Store un solo recurso gratuito, sin anuncios y sin suscripciones, para que We The People llevemos y aprendamos nuestros derechos constitucionales donde quiera que vayamos. Los documentos que definen nuestras libertades estaban encerrados tras muros de pago, saturados de anuncios o enterrados en aplicaciones más preocupadas por el lucro que por la educación cívica.',
      p4: 'Eso nos pareció injusto. Así que construimos esto: gratis, para siempre, para todos.',
      h3: 'Corra la voz',
      p5: 'Cuantas más personas entienden sus derechos, más fuertes se vuelven esos derechos para todos. Comparta esta aplicación con su familia, amigos y seres queridos para que ellos también puedan entender mejor sus derechos como ciudadanos.',
      shareBtn: 'Compartir We The People',
      quote: '"Nosotros, el Pueblo de los Estados Unidos, a fin de formar una Unión más perfecta..."',
      madeWith: 'Hecho con amor por este país y su gente.',
      noAds: 'Sin anuncios. Sin suscripciones. Sin política partidista. Solo sus derechos.',
      copied: '¡Enlace copiado al portapapeles!',
      shareText: 'Lleve consigo y aprenda sus derechos constitucionales. Gratis, sin anuncios y siempre disponible. Conozca We The People.',
    },
  },
};

// Format an amendment badge value ("4th", "Art. I", "Preamble") per language.
export function fmtBadge(a, lang) {
  if (lang !== 'es') return a;
  const n = parseInt(a);
  if (!isNaN(n)) return `${n}.ª`;
  if (a === 'Preamble') return 'Preámb.';
  return a;
}
