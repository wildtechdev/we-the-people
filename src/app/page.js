'use client';
import { useState } from 'react';
import { declaration } from '../data/declaration';
import { billOfRights } from '../data/bill-of-rights';
import { laterAmendments } from '../data/amendments-11-27';
import { constitution } from '../data/constitution';

function DonateButton() {
  return (
    <a
      href="https://donate.stripe.com/PLACEHOLDER"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      Support This Project
    </a>
  );
}

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-semibold tracking-tight">We The People</h1>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">Know your rights. No parties. Just law.</p>
        </div>
        <div className="flex items-center gap-3">
          <DonateButton />
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function DocumentNav({ activeDoc, setActiveDoc }) {
  const docs = [
    { id: 'declaration', label: 'Declaration' },
    { id: 'constitution', label: 'Constitution' },
    { id: 'bill-of-rights', label: 'Bill of Rights' },
    { id: 'amendments', label: 'Amendments 11-27' },
  ];
  return (
    <nav className="sticky top-[57px] z-40 bg-white/95 dark:bg-neutral-900/95 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 py-2 flex gap-1 overflow-x-auto">
        {docs.map(doc => (
          <button
            key={doc.id}
            onClick={() => setActiveDoc(doc.id)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
              activeDoc === doc.id
                ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
            }`}
          >
            {doc.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function ViewToggle({ view, setView }) {
  return (
    <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg mb-6">
      <button
        onClick={() => setView('original')}
        className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          view === 'original'
            ? 'bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white'
            : 'text-neutral-600 dark:text-neutral-400'
        }`}
      >
        Original Text
      </button>
      <button
        onClick={() => setView('translated')}
        className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          view === 'translated'
            ? 'bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white'
            : 'text-neutral-600 dark:text-neutral-400'
        }`}
      >
        Plain English
      </button>
      <button
        onClick={() => setView('both')}
        className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          view === 'both'
            ? 'bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-white'
            : 'text-neutral-600 dark:text-neutral-400'
        }`}
      >
        Side by Side
      </button>
    </div>
  );
}

function SectionCard({ section, view }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 rounded-xl p-5 mb-4">
      <h3 className="text-base font-semibold mb-3 text-neutral-900 dark:text-white">
        {section.title || `Amendment ${section.number}: ${section.title}`}
      </h3>

      {view === 'original' && (
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200 whitespace-pre-line">{section.original}</p>
      )}

      {view === 'translated' && (
        <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">{section.translation}</p>
      )}

      {view === 'both' && (
        <div className="space-y-3">
          <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-wide">Original</p>
            <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">{section.original}</p>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wide">Plain English</p>
            <p className="text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">{section.translation}</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        className="mt-3 text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
      >
        {showDetails ? 'Hide' : 'Show'} rights impact, examples & references
      </button>

      {showDetails && (
        <div className="mt-3 space-y-3">
          {section.rights && (
            <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p className="text-xs font-medium text-amber-700 dark:text-amber-400 mb-1 uppercase tracking-wide">Your Rights</p>
              <p className="text-sm text-neutral-800 dark:text-neutral-200">{section.rights}</p>
            </div>
          )}

          {section.examples && section.examples.length > 0 && (
            <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <p className="text-xs font-medium text-red-700 dark:text-red-400 mb-1 uppercase tracking-wide">Real-World Examples</p>
              <ul className="space-y-2">
                {section.examples.map((ex, i) => (
                  <li key={i} className="text-sm text-neutral-800 dark:text-neutral-200 pl-3 border-l-2 border-red-300 dark:border-red-700">{ex}</li>
                ))}
              </ul>
            </div>
          )}

          {section.references && section.references.length > 0 && (
            <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1 uppercase tracking-wide">References</p>
              <ul className="space-y-1">
                {section.references.map((ref, i) => (
                  <li key={i} className="text-xs text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">{ref.text}</span>
                    {ref.source && <span className="text-neutral-400 dark:text-neutral-500"> — {ref.source}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function DeclarationView({ view }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">{declaration.title}</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{declaration.date}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{declaration.summary}</p>
      </div>
      {declaration.sections.map(section => (
        <SectionCard key={section.id} section={section} view={view} />
      ))}
    </div>
  );
}

function ConstitutionView({ view }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">{constitution.title}</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{constitution.date}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{constitution.summary}</p>
      </div>

      {/* Preamble */}
      <SectionCard section={constitution.preamble} view={view} />

      {/* Articles */}
      {constitution.articles.map(article => (
        <div key={article.number} className="mb-8">
          <h3 className="text-lg font-bold mb-1">Article {article.number}: {article.title}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">{article.summary}</p>
          {article.sections.map(section => (
            <SectionCard key={section.id} section={section} view={view} />
          ))}
        </div>
      ))}
    </div>
  );
}

function BillOfRightsView({ view }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">{billOfRights.title}</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{billOfRights.date}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{billOfRights.summary}</p>
      </div>
      {billOfRights.amendments.map(amendment => (
        <SectionCard
          key={amendment.number}
          section={{
            ...amendment,
            title: `Amendment ${amendment.number}: ${amendment.title}`,
          }}
          view={view}
        />
      ))}
    </div>
  );
}

function LaterAmendmentsView({ view }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">{laterAmendments.title}</h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2">{laterAmendments.summary}</p>
      </div>
      {laterAmendments.amendments.map(amendment => (
        <SectionCard
          key={amendment.number}
          section={{
            ...amendment,
            title: `Amendment ${amendment.number}: ${amendment.title} (${amendment.year})`,
          }}
          view={view}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeDoc, setActiveDoc] = useState('declaration');
  const [view, setView] = useState('original');

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <DocumentNav activeDoc={activeDoc} setActiveDoc={setActiveDoc} />

        <main className="max-w-3xl mx-auto px-4 py-6">
          <ViewToggle view={view} setView={setView} />

          {activeDoc === 'declaration' && <DeclarationView view={view} />}
          {activeDoc === 'constitution' && <ConstitutionView view={view} />}
          {activeDoc === 'bill-of-rights' && <BillOfRightsView view={view} />}
          {activeDoc === 'amendments' && <LaterAmendmentsView view={view} />}
        </main>

        <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 mt-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
              We The People is nonpartisan. No political agenda. Just the law, explained clearly.
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500">
              The Constitution belongs to every American, regardless of party.
            </p>
            <div className="mt-4">
              <DonateButton />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
