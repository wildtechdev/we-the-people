// ============================================================
// UI STRINGS (English / Spanish)
// All user-facing interface text lives here. Document content
// lives in src/data (en) and src/data/es (es).
// ============================================================

export const STRINGS = {
  en: {
    // Bottom nav
    nav: { home: 'Home', library: 'Library', rights: 'Rights', cases: 'Cases', glossary: 'Glossary' },

    // Accessibility labels
    a11y: { search: 'Search', darkOn: 'Switch to dark mode', darkOff: 'Switch to light mode', about: 'About this app', close: 'Close', scrollTop: 'Back to top', language: 'Cambiar a español' },

    // Home
    tagline: 'No parties. Just law.',
    foundingDocs: 'Founding Documents',
    knowYourRights: 'Know Your Rights',
    seeAllScenarios: (n) => `See all ${n} scenarios`,
    landmarkCases: 'Landmark Cases',
    browseCases: (n) => `Browse ${n} court cases, laws, and sources`,
    docs: {
      declaration: { title: 'Declaration of Independence', sub: 'July 4, 1776', count: (n) => `${n} sections` },
      constitution: { title: 'The Constitution', sub: 'September 17, 1787', count: (n) => `${n} articles` },
      'bill-of-rights': { title: 'Bill of Rights', sub: 'December 15, 1791', count: () => '10 amendments' },
      amendments: { title: 'Amendments 11-27', sub: '1795 - 1992', count: (n) => `${n} amendments` },
      unratified: { title: 'Proposed but Never Ratified', sub: '1789 - 1978', count: (n) => `${n} amendments` },
    },

    // Library
    amendmentsDate: 'Ratified 1795 to 1992',
    wouldHaveDone: 'What It Would Have Done',
    whatHappened: 'What Happened',
    note: 'Note',
    textSize: 'Text size',
    textSmaller: 'Smaller text',
    textLarger: 'Larger text',
    signers: 'Signers',
    signersCount: (n) => `${n} signers`,
    presidentLabel: 'President',
    docTabs: { declaration: 'Declaration', constitution: 'Constitution', 'bill-of-rights': 'Bill of Rights', amendments: 'Amd. 11-27', unratified: 'Unratified' },
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
    showNamedCard: (label) => `Show ${label}`,
    hasCard: 'Includes a digital card',
    cardWarning: 'DO NOT hand your phone to an officer or agent. Hold the screen up where they can read it, through a window or door viewer if you are at home, and keep the phone in your hands.',
    cardMeaning: '',
    cardDisclaimer: 'General information, not legal advice.',

    // Case library
    casesTitle: 'Case Library',
    casesSubtitle: (n) => `${n} landmark court cases, laws, and sources, explained in plain language.`,
    filterCases: 'Filter by name, topic, or year...',
    allFilter: 'All',
    citedIn: 'Where This Appears in the App',
    noCases: 'No matching cases.',
    casesShown: (n) => `${n} shown`,
    sortLabel: 'Sort cases',
    sortAZ: 'A to Z',
    sortNewest: 'Newest',

    // Glossary
    glossaryTitle: 'Glossary',
    glossarySubtitle: (n) => `${n} essential terms in plain language.`,
    filterTerms: 'Filter terms...',

    // Search
    searchPlaceholder: 'Search everything...',
    searchHint: 'Search all documents, amendments, glossary, and rights guides.',
    searchTry: 'Try: "free speech", "due process", "search warrant"',
    noResults: (q) => `No results for "${q}"`,
    searchLabels: { declaration: 'Declaration', constitution: 'Constitution', billOfRights: 'Bill of Rights', amendments: 'Amendments', glossary: 'Glossary', rights: 'Rights Guide', cases: 'Case Library', unratified: 'Unratified' },
    searchArt: (n) => `Art. ${n}`,
    searchAmd: (n) => `Amd. ${n}`,

    // Legal notice
    disclaimer: {
      title: 'Not Legal Advice',
      short: 'This guide explains constitutional rights in general terms. It is not legal advice. Laws, court rulings, and state rules differ and change. If you are facing a legal situation, talk to a lawyer.',
    },

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
      h4: 'Not Legal Advice',
      p6: 'This app explains the founding documents and constitutional rights in general terms for education. It is not legal advice and does not create an attorney-client relationship. Laws, court rulings, and state rules differ and change over time. If you are facing a legal situation, talk to a lawyer or a legal aid organization.',
      h5: 'Sources',
      p7: 'The text of the Declaration of Independence, the Constitution, and every amendment follows the National Archives transcriptions, including the original spelling. Plain-language explanations, case summaries, and the Know Your Rights guide were written for this app and link to the full court opinions and official sources.',
      updated: 'Content last updated: October 2026',
      h6: 'Your Privacy',
      p8: 'This app collects no personal data, has no accounts, and contains no ads or tracking. Your language and display settings are stored only on your device.',
      madeWith: 'Made with love for this country and its people.',
      noAds: 'No ads. No subscriptions. No politics. Just your rights.',
      copied: 'Link copied to clipboard!',
      shareText: 'Carry and learn your constitutional rights. Free, ad-free, and always available. Check out We The People.',
    },
  },

  es: {
    // Bottom nav
    nav: { home: 'Inicio', library: 'Biblioteca', rights: 'Derechos', cases: 'Casos', glossary: 'Glosario' },

    // Etiquetas de accesibilidad
    a11y: { search: 'Buscar', darkOn: 'Activar modo oscuro', darkOff: 'Activar modo claro', about: 'Acerca de esta aplicación', close: 'Cerrar', scrollTop: 'Volver arriba', language: 'Switch to English' },

    // Home
    tagline: 'Sin partidos. Solo ley.',
    foundingDocs: 'Documentos fundacionales',
    knowYourRights: 'Conozca sus derechos',
    seeAllScenarios: (n) => `Ver los ${n} escenarios`,
    landmarkCases: 'Casos históricos',
    browseCases: (n) => `Explore ${n} casos judiciales, leyes y fuentes`,
    docs: {
      declaration: { title: 'Declaración de Independencia', sub: '4 de julio de 1776', count: (n) => `${n} secciones` },
      constitution: { title: 'La Constitución', sub: '17 de septiembre de 1787', count: (n) => `${n} artículos` },
      'bill-of-rights': { title: 'Carta de Derechos', sub: '15 de diciembre de 1791', count: () => '10 enmiendas' },
      amendments: { title: 'Enmiendas 11-27', sub: '1795 - 1992', count: (n) => `${n} enmiendas` },
      unratified: { title: 'Propuestas que nunca se ratificaron', sub: '1789 - 1978', count: (n) => `${n} enmiendas` },
    },

    // Library
    amendmentsDate: 'Ratificadas entre 1795 y 1992',
    wouldHaveDone: 'Lo que habría hecho',
    whatHappened: 'Lo que pasó',
    note: 'Nota',
    textSize: 'Tamaño del texto',
    textSmaller: 'Texto más pequeño',
    textLarger: 'Texto más grande',
    signers: 'Firmantes',
    signersCount: (n) => `${n} firmantes`,
    presidentLabel: 'Presidente',
    docTabs: { declaration: 'Declaración', constitution: 'Constitución', 'bill-of-rights': 'Carta de Derechos', amendments: 'Enm. 11-27', unratified: 'No ratificadas' },
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
    showNamedCard: (label) => `Mostrar: ${label}`,
    hasCard: 'Incluye una tarjeta digital',
    cardWarning: 'NO entregue su teléfono a un oficial o agente. Muestre la pantalla donde puedan leerla, a través de una ventana o mirilla si está en casa, y mantenga el teléfono en sus manos.',
    cardMeaning: 'Lo que dice esta tarjeta:',
    cardDisclaimer: 'Información general, no asesoría legal.',

    // Case library
    casesTitle: 'Biblioteca de casos',
    casesSubtitle: (n) => `${n} casos judiciales, leyes y fuentes clave, explicados en lenguaje claro.`,
    filterCases: 'Filtrar por nombre, tema o año...',
    allFilter: 'Todos',
    citedIn: 'Dónde aparece en la aplicación',
    noCases: 'No hay casos que coincidan.',
    casesShown: (n) => `${n} mostrados`,
    sortLabel: 'Ordenar casos',
    sortAZ: 'A a la Z',
    sortNewest: 'Más recientes',

    // Glossary
    glossaryTitle: 'Glosario',
    glossarySubtitle: (n) => `${n} términos esenciales en lenguaje claro.`,
    filterTerms: 'Filtrar términos...',

    // Search
    searchPlaceholder: 'Buscar en todo...',
    searchHint: 'Busque en todos los documentos, enmiendas, glosario y guías de derechos.',
    searchTry: 'Pruebe: "libertad de expresión", "debido proceso", "orden de registro"',
    noResults: (q) => `Sin resultados para "${q}"`,
    searchLabels: { declaration: 'Declaración', constitution: 'Constitución', billOfRights: 'Carta de Derechos', amendments: 'Enmiendas', glossary: 'Glosario', rights: 'Guía de derechos', cases: 'Biblioteca de casos', unratified: 'No ratificadas' },
    searchArt: (n) => `Art. ${n}`,
    searchAmd: (n) => `Enm. ${n}`,

    // Aviso legal
    disclaimer: {
      title: 'No es asesoría legal',
      short: 'Esta guía explica los derechos constitucionales en términos generales. No es asesoría legal. Las leyes, los fallos judiciales y las normas estatales varían y cambian. Si enfrenta una situación legal, hable con un abogado.',
    },

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
      h4: 'No es asesoría legal',
      p6: 'Esta aplicación explica los documentos fundacionales y los derechos constitucionales en términos generales con fines educativos. No es asesoría legal ni crea una relación entre abogado y cliente. Las leyes, los fallos judiciales y las normas estatales varían y cambian con el tiempo. Si enfrenta una situación legal, hable con un abogado o con una organización de asistencia legal.',
      h5: 'Fuentes',
      p7: 'El texto de la Declaración de Independencia, la Constitución y cada enmienda sigue las transcripciones de los Archivos Nacionales, con su ortografía original en inglés. Las explicaciones en lenguaje claro, los resúmenes de casos y la guía Conozca sus derechos fueron escritos para esta aplicación y enlazan a las opiniones judiciales completas y a las fuentes oficiales.',
      updated: 'Contenido actualizado por última vez: octubre de 2026',
      h6: 'Su privacidad',
      p8: 'Esta aplicación no recopila datos personales, no tiene cuentas y no contiene anuncios ni rastreo. Su idioma y sus ajustes de pantalla se guardan solo en su dispositivo.',
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
