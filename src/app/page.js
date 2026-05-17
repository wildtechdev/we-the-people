'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { declaration } from '../data/declaration';
import { billOfRights } from '../data/bill-of-rights';
import { laterAmendments } from '../data/amendments-11-27';
import { constitution } from '../data/constitution';
import { glossary, situations } from '../data/glossary';

// ============================================================
// ICONS
// ============================================================

function SearchIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );
}

function ChevronDown({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
    </svg>
  );
}

function SituationIcon({ icon }) {
  const icons = {
    car: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    megaphone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>,
    shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    eye: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    message: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    home: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    vote: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    faith: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  };
  return icons[icon] || icons.shield;
}

// ============================================================
// HOOKS
// ============================================================

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return progress;
}

function useIntersectionObserver(options = {}) {
  const [entries, setEntries] = useState([]);
  const observer = useRef(null);

  const observe = useCallback((elements) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((observedEntries) => {
      observedEntries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px', ...options });
    elements.forEach(el => observer.current.observe(el));
    return () => observer.current?.disconnect();
  }, []);

  return observe;
}

function useScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowButton(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return showButton;
}

// ============================================================
// SEARCH ENGINE
// ============================================================

function buildSearchIndex() {
  const entries = [];

  // Declaration
  declaration.sections.forEach(s => {
    entries.push({ doc: 'Declaration of Independence', section: s.title, text: s.original, type: 'original', data: s });
    entries.push({ doc: 'Declaration of Independence', section: s.title, text: s.translation, type: 'translation', data: s });
    if (s.rights) entries.push({ doc: 'Declaration of Independence', section: s.title, text: s.rights, type: 'rights', data: s });
  });

  // Constitution
  entries.push({ doc: 'Constitution', section: 'Preamble', text: constitution.preamble.original, type: 'original', data: constitution.preamble });
  entries.push({ doc: 'Constitution', section: 'Preamble', text: constitution.preamble.translation, type: 'translation', data: constitution.preamble });
  constitution.articles.forEach(art => {
    art.sections.forEach(s => {
      entries.push({ doc: 'Constitution', section: `Article ${art.number}: ${s.title}`, text: s.original, type: 'original', data: s });
      entries.push({ doc: 'Constitution', section: `Article ${art.number}: ${s.title}`, text: s.translation, type: 'translation', data: s });
      if (s.rights) entries.push({ doc: 'Constitution', section: `Article ${art.number}: ${s.title}`, text: s.rights, type: 'rights', data: s });
    });
  });

  // Bill of Rights
  billOfRights.amendments.forEach(a => {
    entries.push({ doc: 'Bill of Rights', section: `Amendment ${a.number}: ${a.title}`, text: a.original, type: 'original', data: a });
    entries.push({ doc: 'Bill of Rights', section: `Amendment ${a.number}: ${a.title}`, text: a.translation, type: 'translation', data: a });
    if (a.rights) entries.push({ doc: 'Bill of Rights', section: `Amendment ${a.number}: ${a.title}`, text: a.rights, type: 'rights', data: a });
  });

  // Later Amendments
  laterAmendments.amendments.forEach(a => {
    entries.push({ doc: 'Amendments 11-27', section: `Amendment ${a.number}: ${a.title}`, text: a.original, type: 'original', data: a });
    entries.push({ doc: 'Amendments 11-27', section: `Amendment ${a.number}: ${a.title}`, text: a.translation, type: 'translation', data: a });
    if (a.rights) entries.push({ doc: 'Amendments 11-27', section: `Amendment ${a.number}: ${a.title}`, text: a.rights, type: 'rights', data: a });
  });

  // Glossary
  glossary.forEach(g => {
    entries.push({ doc: 'Glossary', section: g.term, text: `${g.term}: ${g.definition}`, type: 'glossary', data: g });
  });

  // Situations
  situations.forEach(s => {
    entries.push({ doc: 'Know Your Rights', section: s.title, text: `${s.title} ${s.description} ${s.rights.map(r => r.right).join(' ')} ${s.tips.join(' ')}`, type: 'situation', data: s });
  });

  return entries;
}

function searchContent(query, index) {
  if (!query || query.length < 2) return [];
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const results = [];

  index.forEach(entry => {
    const text = entry.text.toLowerCase();
    const matchCount = terms.filter(t => text.includes(t)).length;
    if (matchCount === terms.length) {
      // Find snippet
      const firstTermIdx = text.indexOf(terms[0]);
      const start = Math.max(0, firstTermIdx - 40);
      const end = Math.min(entry.text.length, firstTermIdx + 120);
      const snippet = (start > 0 ? '...' : '') + entry.text.slice(start, end) + (end < entry.text.length ? '...' : '');
      results.push({ ...entry, snippet, relevance: matchCount });
    }
  });

  return results.slice(0, 20);
}

function highlightText(text, query) {
  if (!query || query.length < 2) return text;
  const terms = query.split(/\s+/).filter(Boolean);
  const regex = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ============================================================
// READING PROGRESS BAR
// ============================================================

function ReadingProgress() {
  const progress = useScrollProgress();
  return <div className="reading-progress" style={{ width: `${progress}%` }} />;
}

// ============================================================
// HEADER
// ============================================================

function Header({ darkMode, setDarkMode, onSearchOpen, activeView, setActiveView }) {
  return (
    <header className="glass-header sticky top-0 z-50 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent)', color: 'white' }}>
            <span style={{ fontSize: '14px', fontWeight: '800' }}>WP</span>
          </div>
          <div>
            <h1 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>We The People</h1>
            <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', letterSpacing: '0.02em' }}>No parties. Just law.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onSearchOpen}
            className="p-2 rounded-lg hover:opacity-80"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Search"
          >
            <SearchIcon />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:opacity-80"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="https://donate.stripe.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{ background: 'var(--accent)', color: 'white' }}
          >
            <HeartIcon /> Support
          </a>
        </div>
      </div>
    </header>
  );
}

// ============================================================
// NAVIGATION
// ============================================================

function MainNav({ activeView, setActiveView }) {
  const views = [
    { id: 'documents', label: 'Documents', icon: <BookIcon /> },
    { id: 'rights', label: 'Know Your Rights', icon: <ShieldIcon /> },
    { id: 'glossary', label: 'Glossary', icon: <ScaleIcon /> },
  ];
  return (
    <nav className="sticky z-40 border-b no-print" style={{ top: '57px', borderColor: 'var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto py-2">
        {views.map(v => (
          <button
            key={v.id}
            onClick={() => setActiveView(v.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
            style={{
              background: activeView === v.id ? 'var(--accent)' : 'transparent',
              color: activeView === v.id ? 'white' : 'var(--text-secondary)',
            }}
          >
            {v.icon}
            {v.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function DocumentTabs({ activeDoc, setActiveDoc }) {
  const docs = [
    { id: 'declaration', label: 'Declaration', year: '1776' },
    { id: 'constitution', label: 'Constitution', year: '1787' },
    { id: 'bill-of-rights', label: 'Bill of Rights', year: '1791' },
    { id: 'amendments', label: 'Amendments 11-27', year: '1795-1992' },
  ];
  return (
    <div className="flex gap-2 overflow-x-auto py-3 px-1 mb-4">
      {docs.map(doc => (
        <button
          key={doc.id}
          onClick={() => setActiveDoc(doc.id)}
          className="flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium border"
          style={{
            background: activeDoc === doc.id ? 'var(--accent-lighter)' : 'var(--bg-card)',
            borderColor: activeDoc === doc.id ? 'var(--accent)' : 'var(--border)',
            color: activeDoc === doc.id ? 'var(--text-accent)' : 'var(--text-secondary)',
          }}
        >
          <span>{doc.label}</span>
          <span className="block text-xs mt-0.5" style={{ opacity: 0.6 }}>{doc.year}</span>
        </button>
      ))}
    </div>
  );
}

// ============================================================
// VIEW TOGGLE
// ============================================================

function ViewToggle({ view, setView }) {
  return (
    <div className="flex gap-1 p-1 rounded-xl mb-6" style={{ background: 'var(--bg-secondary)' }}>
      {[
        { id: 'original', label: 'Original' },
        { id: 'translated', label: 'Plain English' },
        { id: 'both', label: 'Side by Side' },
      ].map(v => (
        <button
          key={v.id}
          onClick={() => setView(v.id)}
          className="flex-1 px-3 py-2.5 rounded-lg text-sm font-medium"
          style={{
            background: view === v.id ? 'var(--bg-card)' : 'transparent',
            color: view === v.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
            boxShadow: view === v.id ? 'var(--shadow-sm)' : 'none',
          }}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}

// ============================================================
// SECTION CARD (main content display)
// ============================================================

function SectionCard({ section, view, searchQuery, index }) {
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef(null);

  const renderText = (text) => {
    if (searchQuery && searchQuery.length >= 2) {
      return <span dangerouslySetInnerHTML={{ __html: highlightText(text, searchQuery) }} />;
    }
    return text;
  };

  return (
    <div
      ref={cardRef}
      className="fade-in-up rounded-xl p-5 sm:p-6 mb-4 border"
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="flex items-start gap-3">
        {section.number && (
          <div className="amendment-badge">{section.number}</div>
        )}
        <div className="flex-1 min-w-0">
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '12px', lineHeight: '1.4' }}>
            {section.title || `Amendment ${section.number}: ${section.title}`}
          </h3>

          {view === 'original' && (
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)', fontFamily: "'Playfair Display', Georgia, serif", whiteSpace: 'pre-line' }}>
              {renderText(section.original)}
            </p>
          )}

          {view === 'translated' && (
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              {renderText(section.translation)}
            </p>
          )}

          {view === 'both' && (
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-tertiary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Original Text</p>
                <p style={{ fontSize: '13px', lineHeight: '1.8', color: 'var(--text-secondary)', fontFamily: "'Playfair Display', Georgia, serif", whiteSpace: 'pre-line' }}>
                  {renderText(section.original)}
                </p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--accent-lighter)' }}>
                <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-accent)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Plain English</p>
                <p style={{ fontSize: '13px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  {renderText(section.translation)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expand button */}
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="flex items-center gap-2 mt-4 px-3 py-2 rounded-lg text-sm font-medium"
        style={{ color: 'var(--text-accent)', background: 'var(--accent-lighter)' }}
      >
        <ChevronDown open={showDetails} />
        {showDetails ? 'Hide Details' : 'Your Rights, Examples & References'}
      </button>

      {/* Expandable details */}
      <div className="card-expand" style={{ maxHeight: showDetails ? '2000px' : '0', opacity: showDetails ? 1 : 0, marginTop: showDetails ? '16px' : '0' }}>
        {showDetails && (
          <div className="space-y-3 stagger-in">
            {section.rights && (
              <div className="p-4 rounded-lg border" style={{ background: 'var(--gold-lighter)', borderColor: 'var(--amber-border)' }}>
                <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--amber-accent)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>How This Protects You</p>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>{renderText(section.rights)}</p>
              </div>
            )}

            {section.examples && section.examples.length > 0 && (
              <div className="p-4 rounded-lg border" style={{ background: 'var(--red-light)', borderColor: 'var(--red-border)' }}>
                <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--red-accent)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Real-World Infringement Examples</p>
                <div className="space-y-2">
                  {section.examples.map((ex, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span style={{ color: 'var(--red-accent)', fontSize: '12px', fontWeight: '700', marginTop: '2px' }}>{i + 1}.</span>
                      <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>{renderText(ex)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {section.references && section.references.length > 0 && (
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                <p style={{ fontSize: '11px', fontWeight: '700', color: 'var(--text-tertiary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Legal References</p>
                <div className="space-y-1.5">
                  {section.references.map((ref, i) => (
                    <div key={i} style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      <span style={{ fontWeight: '600' }}>{ref.text}</span>
                      {ref.source && <span style={{ color: 'var(--text-tertiary)' }}> -- {ref.source}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// DOCUMENT VIEWS
// ============================================================

function DocumentHeader({ title, date, summary }) {
  return (
    <div className="mb-8 fade-in-up">
      <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', Georgia, serif" }}>{title}</h2>
      {date && <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{date}</p>}
      {summary && <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.7' }}>{summary}</p>}
    </div>
  );
}

function DeclarationView({ view, searchQuery }) {
  return (
    <div>
      <DocumentHeader title={declaration.title} date={declaration.date} summary={declaration.summary} />
      {declaration.sections.map(section => (
        <SectionCard key={section.id} section={section} view={view} searchQuery={searchQuery} />
      ))}
    </div>
  );
}

function ConstitutionView({ view, searchQuery }) {
  return (
    <div>
      <DocumentHeader title={constitution.title} date={constitution.date} summary={constitution.summary} />
      <SectionCard section={constitution.preamble} view={view} searchQuery={searchQuery} />
      {constitution.articles.map(article => (
        <div key={article.number} className="mb-10">
          <div className="flex items-center gap-3 mb-4 fade-in-up">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-light)', color: 'var(--text-accent)', fontWeight: '800', fontSize: '14px' }}>
              {article.number}
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>Article {article.number}: {article.title}</h3>
              <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{article.summary}</p>
            </div>
          </div>
          {article.sections.map(section => (
            <SectionCard key={section.id} section={section} view={view} searchQuery={searchQuery} />
          ))}
        </div>
      ))}
    </div>
  );
}

function BillOfRightsView({ view, searchQuery }) {
  return (
    <div>
      <DocumentHeader title={billOfRights.title} date={billOfRights.date} summary={billOfRights.summary} />
      {billOfRights.amendments.map(amendment => (
        <SectionCard
          key={amendment.number}
          section={{ ...amendment, title: amendment.title }}
          view={view}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
}

function LaterAmendmentsView({ view, searchQuery }) {
  return (
    <div>
      <DocumentHeader title={laterAmendments.title} summary={laterAmendments.summary} />
      {laterAmendments.amendments.map(amendment => (
        <SectionCard
          key={amendment.number}
          section={{ ...amendment, title: `${amendment.title} (${amendment.year})` }}
          view={view}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
}

// ============================================================
// SEARCH MODAL
// ============================================================

function SearchModal({ isOpen, onClose, searchIndex }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
    if (!isOpen) { setQuery(''); setResults([]); }
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResults(searchContent(query, searchIndex));
    }, 150);
    return () => clearTimeout(timer);
  }, [query, searchIndex]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} />
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-xl)', maxHeight: '70vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <SearchIcon size={20} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search the Constitution, Amendments, and more..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-base"
            style={{ color: 'var(--text-primary)' }}
          />
          <button onClick={onClose} className="p-1 rounded-md" style={{ color: 'var(--text-tertiary)' }}>
            <XIcon />
          </button>
        </div>

        {/* Results */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 70px)' }}>
          {query.length < 2 && (
            <div className="p-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              <p style={{ fontSize: '14px' }}>Type at least 2 characters to search across all documents, amendments, and the glossary.</p>
              <p style={{ fontSize: '12px', marginTop: '8px' }}>Try: "free speech", "search warrant", "due process", "voting rights"</p>
            </div>
          )}
          {query.length >= 2 && results.length === 0 && (
            <div className="p-8 text-center" style={{ color: 'var(--text-tertiary)' }}>
              <p style={{ fontSize: '14px' }}>No results found for "{query}"</p>
            </div>
          )}
          {results.map((r, i) => (
            <button
              key={i}
              className="w-full text-left p-4 border-b hover:opacity-90"
              style={{ borderColor: 'var(--border-light)', background: 'var(--bg-card)' }}
              onClick={onClose}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-xs font-medium" style={{ background: 'var(--accent-light)', color: 'var(--text-accent)' }}>{r.doc}</span>
                <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{r.type}</span>
              </div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>{r.section}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: highlightText(r.snippet, query) }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// KNOW YOUR RIGHTS (Situations Guide)
// ============================================================

function RightsGuide() {
  const [activeSituation, setActiveSituation] = useState(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8 fade-in-up">
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', Georgia, serif" }}>Know Your Rights</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.7' }}>
          Real situations. Real rights. Tap a scenario to see exactly which constitutional protections apply and what to do.
        </p>
      </div>

      {!activeSituation && (
        <div className="grid gap-4 sm:grid-cols-2 stagger-in">
          {situations.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSituation(s)}
              className="text-left p-5 rounded-xl border hover:scale-[1.01] transition-transform"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--accent-lighter)', color: 'var(--text-accent)' }}>
                  <SituationIcon icon={s.icon} />
                </div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>{s.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{s.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {activeSituation && (
        <div className="fade-in-up visible">
          <button
            onClick={() => setActiveSituation(null)}
            className="flex items-center gap-2 mb-6 text-sm font-medium"
            style={{ color: 'var(--text-accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to all situations
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-lighter)', color: 'var(--text-accent)' }}>
              <SituationIcon icon={activeSituation.icon} />
            </div>
            <div>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{activeSituation.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{activeSituation.description}</p>
            </div>
          </div>

          {/* Rights */}
          <div className="space-y-3 mb-8">
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Your Constitutional Rights</h4>
            {activeSituation.rights.map((r, i) => (
              <div key={i} className="p-4 rounded-xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <div className="flex items-start gap-3">
                  <span className="amendment-badge" style={{ width: '28px', height: '28px', fontSize: '11px' }}>{r.amendment}</span>
                  <div className="flex-1">
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>{r.right}</p>
                    <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '6px', fontStyle: 'italic' }}>{r.ref}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="p-5 rounded-xl border" style={{ background: 'var(--gold-lighter)', borderColor: 'var(--amber-border)' }}>
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--amber-accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>Practical Tips</h4>
            <div className="space-y-2">
              {activeSituation.tips.map((tip, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span style={{ color: 'var(--amber-accent)', fontSize: '14px' }}>*</span>
                  <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// GLOSSARY VIEW
// ============================================================

function GlossaryView() {
  const [filter, setFilter] = useState('');
  const [expandedTerm, setExpandedTerm] = useState(null);

  const letters = useMemo(() => {
    const unique = [...new Set(glossary.map(g => g.term[0].toUpperCase()))].sort();
    return unique;
  }, []);

  const filtered = useMemo(() => {
    if (!filter) return glossary;
    return glossary.filter(g =>
      g.term.toLowerCase().includes(filter.toLowerCase()) ||
      g.definition.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6 fade-in-up">
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em', fontFamily: "'Playfair Display', Georgia, serif" }}>Constitutional Glossary</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.7' }}>
          50 essential terms explained in plain language. Tap any term to learn more.
        </p>
      </div>

      {/* Filter input */}
      <div className="relative mb-6 fade-in-up">
        <SearchIcon size={18} />
        <input
          type="text"
          placeholder="Filter terms..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border outline-none"
          style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border)', color: 'var(--text-primary)', position: 'relative' }}
        />
        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }}>
          <SearchIcon size={18} />
        </div>
      </div>

      {/* Letter index */}
      <div className="flex flex-wrap gap-1 mb-6 fade-in-up">
        {letters.map(l => (
          <button
            key={l}
            onClick={() => {
              const el = document.getElementById(`glossary-${l}`);
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: 'var(--bg-secondary)', color: 'var(--text-accent)' }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Terms list */}
      <div className="space-y-2 stagger-in">
        {filtered.map((g, i) => {
          const isFirst = i === 0 || filtered[i - 1]?.term[0].toUpperCase() !== g.term[0].toUpperCase();
          return (
            <div key={g.term}>
              {isFirst && (
                <div id={`glossary-${g.term[0].toUpperCase()}`} className="pt-4 pb-2">
                  <span style={{ fontSize: '18px', fontWeight: '800', color: 'var(--text-accent)' }}>{g.term[0].toUpperCase()}</span>
                </div>
              )}
              <button
                onClick={() => setExpandedTerm(expandedTerm === g.term ? null : g.term)}
                className="w-full text-left p-4 rounded-xl border transition-all"
                style={{
                  background: expandedTerm === g.term ? 'var(--accent-lighter)' : 'var(--bg-card)',
                  borderColor: expandedTerm === g.term ? 'var(--accent)' : 'var(--border)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{g.term}</span>
                  <ChevronDown open={expandedTerm === g.term} />
                </div>
                {expandedTerm === g.term && (
                  <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: '8px' }}>{g.definition}</p>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// HERO SECTION
// ============================================================

function HeroSection() {
  return (
    <section className="hero-gradient py-16 sm:py-24 px-4 text-center fade-in-up visible">
      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: 'var(--accent-light)', color: 'var(--text-accent)', fontSize: '12px', fontWeight: '600' }}>
          <div className="w-2 h-2 rounded-full animate-pulse-slow" style={{ background: 'var(--accent)' }} />
          Nonpartisan. Accurate. For every American.
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.03em', lineHeight: '1.15', fontFamily: "'Playfair Display', Georgia, serif" }}>
          Your Rights.<br />In Plain English.
        </h1>
        <p style={{ fontSize: '17px', color: 'var(--text-secondary)', marginTop: '16px', lineHeight: '1.7', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto' }}>
          The Declaration, Constitution, and all 27 Amendments with simple translations, real examples, and legal references. No political spin. Just the law.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--bg-secondary)', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>4</span> Documents
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--bg-secondary)', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>27</span> Amendments
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--bg-secondary)', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>50</span> Glossary Terms
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--bg-secondary)', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <span style={{ fontWeight: '700', color: 'var(--text-primary)' }}>8</span> Situation Guides
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SCROLL TO TOP
// ============================================================

function ScrollToTop() {
  const show = useScrollToTop();
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center no-print"
      style={{ background: 'var(--accent)', color: 'white', boxShadow: 'var(--shadow-lg)' }}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon />
    </button>
  );
}

// ============================================================
// KEYBOARD SHORTCUT HINT
// ============================================================

function KeyboardHint({ onSearchOpen }) {
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onSearchOpen();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onSearchOpen]);
  return null;
}

// ============================================================
// FOOTER
// ============================================================

function Footer() {
  return (
    <footer className="border-t py-12 mt-16 no-print" style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: 'var(--accent)', color: 'white' }}>
          <span style={{ fontSize: '14px', fontWeight: '800' }}>WP</span>
        </div>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '4px', fontWeight: '500' }}>
          We The People is nonpartisan. No political agenda. Just the law, explained clearly.
        </p>
        <p style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
          The Constitution belongs to every American, regardless of party.
        </p>
        <div className="mt-6">
          <a
            href="https://donate.stripe.com/PLACEHOLDER"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
            style={{ background: 'var(--accent)', color: 'white' }}
          >
            <HeartIcon /> Support This Project
          </a>
        </div>
        <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '24px' }}>
          Press Ctrl+K (or Cmd+K) to search anytime.
        </p>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN APP
// ============================================================

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState('documents');
  const [activeDoc, setActiveDoc] = useState('declaration');
  const [view, setView] = useState('original');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Build search index once
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Apply dark mode class to html
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Scroll animation observer
  const observe = useIntersectionObserver();
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in-up:not(.visible)');
      if (elements.length > 0) observe(elements);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeView, activeDoc, observe]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background 0.3s, color 0.3s' }}>
        <ReadingProgress />
        <KeyboardHint onSearchOpen={() => setSearchOpen(true)} />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} searchIndex={searchIndex} />

        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onSearchOpen={() => setSearchOpen(true)}
          activeView={activeView}
          setActiveView={setActiveView}
        />

        <MainNav activeView={activeView} setActiveView={setActiveView} />

        {activeView === 'documents' && (
          <>
            <HeroSection />
            <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
              <DocumentTabs activeDoc={activeDoc} setActiveDoc={setActiveDoc} />
              <ViewToggle view={view} setView={setView} />
              {activeDoc === 'declaration' && <DeclarationView view={view} searchQuery={searchQuery} />}
              {activeDoc === 'constitution' && <ConstitutionView view={view} searchQuery={searchQuery} />}
              {activeDoc === 'bill-of-rights' && <BillOfRightsView view={view} searchQuery={searchQuery} />}
              {activeDoc === 'amendments' && <LaterAmendmentsView view={view} searchQuery={searchQuery} />}
            </main>
          </>
        )}

        {activeView === 'rights' && <RightsGuide />}
        {activeView === 'glossary' && <GlossaryView />}

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
