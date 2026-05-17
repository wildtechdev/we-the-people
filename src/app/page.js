'use client';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { declaration } from '../data/declaration';
import { billOfRights } from '../data/bill-of-rights';
import { laterAmendments } from '../data/amendments-11-27';
import { constitution } from '../data/constitution';
import { glossary, situations } from '../data/glossary';
import { cases } from '../data/cases';

// ============================================================
// ICONS (inline SVG for zero dependencies)
// ============================================================

const Icon = {
  Home: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Book: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  User: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Search: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Heart: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  ChevronDown: ({ open }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  ArrowUp: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
    </svg>
  ),
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Scale: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Star: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  MoreH: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>
    </svg>
  ),
};

function SituationIcon({ icon }) {
  const map = {
    car: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    megaphone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>,
    shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    eye: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    message: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    home: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    vote: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    faith: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg>,
    briefcase: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v2"/></svg>,
    graduation: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 0 2.5 3 6 3s6-3 6-3v-5"/><path d="M22 10v6"/></svg>,
    passport: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 18h8"/></svg>,
    firearm: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    apartment: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1M9 13h1M9 17h1"/></svg>,
    gavel: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m14.5 12.5-5 5"/><path d="m9 11 5 5"/><path d="m17.5 8.5-9 9"/><path d="M20 5 5 20"/><path d="m5 20 3 1 1-3"/><path d="M11.5 6.5 17 12"/></svg>,
    medical: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 2h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6l4-4z"/><path d="M10 10h4M12 8v4"/></svg>,
    phone: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
    badge: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z"/></svg>,
  };
  return map[icon] || map.shield;
}

// ============================================================
// DOCUMENT COVER COLORS/GRADIENTS
// ============================================================

const DOC_COVERS = {
  declaration: { bg: 'linear-gradient(145deg, #b22234 0%, #8b1a28 100%)', emoji: '🪶', label: '1776' },
  constitution: { bg: 'linear-gradient(145deg, #1b2a4a 0%, #0f1a30 100%)', emoji: '⚖️', label: '1787' },
  'bill-of-rights': { bg: 'linear-gradient(145deg, #c5952a 0%, #96711f 100%)', emoji: '🛡️', label: '1791' },
  amendments: { bg: 'linear-gradient(145deg, #2d4272 0%, #1b2a4a 100%)', emoji: '📜', label: '1795-1992' },
};

// ============================================================
// HOOKS
// ============================================================

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const h = () => {
      const t = document.documentElement.scrollHeight - window.innerHeight;
      if (t > 0) setProgress((window.scrollY / t) * 100);
    };
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return progress;
}

function useInView() {
  const observe = useCallback(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.fade-in-up:not(.visible)').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return observe;
}

// ============================================================
// SEARCH
// ============================================================

function buildSearchIndex() {
  const entries = [];
  const add = (doc, section, text, type, data) => entries.push({ doc, section, text, type, data });

  declaration.sections.forEach(s => {
    add('Declaration', s.title, s.original, 'original', s);
    add('Declaration', s.title, s.translation, 'translation', s);
    if (s.rights) add('Declaration', s.title, s.rights, 'rights', s);
  });

  add('Constitution', 'Preamble', constitution.preamble.original, 'original', constitution.preamble);
  add('Constitution', 'Preamble', constitution.preamble.translation, 'translation', constitution.preamble);
  constitution.articles.forEach(a => a.sections.forEach(s => {
    add('Constitution', `Art. ${a.number}: ${s.title}`, s.original, 'original', s);
    add('Constitution', `Art. ${a.number}: ${s.title}`, s.translation, 'translation', s);
    if (s.rights) add('Constitution', `Art. ${a.number}: ${s.title}`, s.rights, 'rights', s);
  }));

  billOfRights.amendments.forEach(a => {
    add('Bill of Rights', `Amd. ${a.number}: ${a.title}`, a.original, 'original', a);
    add('Bill of Rights', `Amd. ${a.number}: ${a.title}`, a.translation, 'translation', a);
    if (a.rights) add('Bill of Rights', `Amd. ${a.number}: ${a.title}`, a.rights, 'rights', a);
  });

  laterAmendments.amendments.forEach(a => {
    add('Amendments', `Amd. ${a.number}: ${a.title}`, a.original, 'original', a);
    add('Amendments', `Amd. ${a.number}: ${a.title}`, a.translation, 'translation', a);
    if (a.rights) add('Amendments', `Amd. ${a.number}: ${a.title}`, a.rights, 'rights', a);
  });

  glossary.forEach(g => add('Glossary', g.term, `${g.term}: ${g.definition}`, 'glossary', g));
  situations.forEach(s => add('Rights Guide', s.title, `${s.title} ${s.description} ${s.rights.map(r => r.right).join(' ')}`, 'situation', s));

  return entries;
}

function searchContent(query, index) {
  if (!query || query.length < 2) return [];
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return index.filter(e => {
    const t = e.text.toLowerCase();
    return terms.every(term => t.includes(term));
  }).map(e => {
    const t = e.text.toLowerCase();
    const i = t.indexOf(terms[0]);
    const s = Math.max(0, i - 40);
    const end = Math.min(e.text.length, i + 120);
    return { ...e, snippet: (s > 0 ? '...' : '') + e.text.slice(s, end) + (end < e.text.length ? '...' : '') };
  }).slice(0, 20);
}

function highlightText(text, query) {
  if (!query || query.length < 2) return text;
  const terms = query.split(/\s+/).filter(Boolean);
  const regex = new RegExp(`(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// ============================================================
// READING PROGRESS
// ============================================================

function ReadingProgress() {
  const p = useScrollProgress();
  return <div className="reading-progress no-print" style={{ width: `${p}%` }} />;
}

// ============================================================
// BOTTOM NAV (mobile reading-app style)
// ============================================================

function BottomNav({ activeView, setActiveView }) {
  const items = [
    { id: 'home', label: 'Home', icon: <Icon.Home /> },
    { id: 'library', label: 'Library', icon: <Icon.Book /> },
    { id: 'rights', label: 'Rights', icon: <Icon.Shield /> },
    { id: 'glossary', label: 'Glossary', icon: <Icon.Scale /> },
  ];
  return (
    <nav className="bottom-nav no-print" style={{ boxShadow: '0 -2px 16px rgba(0,0,0,0.04)' }}>
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-4">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className="flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl"
            style={{
              color: activeView === item.id ? 'var(--crimson)' : 'var(--text-tertiary)',
              background: activeView === item.id ? 'var(--crimson-lighter)' : 'transparent',
            }}
          >
            {item.icon}
            <span style={{ fontSize: '10px', fontWeight: activeView === item.id ? '600' : '500' }}>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

// ============================================================
// TOP BAR (minimal like the reference)
// ============================================================

function TopBar({ darkMode, setDarkMode, onSearchOpen }) {
  return (
    <div className="no-print" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-lg mx-auto px-5 pt-4 pb-2 flex items-center justify-between">
        <div />
        <div className="flex items-center gap-1">
          <button onClick={onSearchOpen} className="p-2 rounded-xl" style={{ color: 'var(--text-tertiary)' }}>
            <Icon.Search size={19} />
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl" style={{ color: 'var(--text-tertiary)' }}>
            {darkMode ? <Icon.Sun /> : <Icon.Moon />}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// HOME VIEW (like the reference's home screen)
// ============================================================

function HomeView({ setActiveView, setActiveDoc, setReadingSection, lastRead }) {
  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      {/* Title */}
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: "'Libre Baskerville', Georgia, serif" }}>
        We The People
      </h1>
      <p className="fade-in-up visible" style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '2px', letterSpacing: '0.02em' }}>
        No parties. Just law.
      </p>

      {/* Currently Reading Card */}
      <div className="fade-in-up visible mt-6">
        <button
          onClick={() => { setActiveView('library'); setActiveDoc('constitution'); }}
          className="w-full p-4 rounded-2xl border flex items-center gap-4 text-left"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
        >
          <div className="flex-1">
            <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>Continue reading</p>
            <p style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: "'Libre Baskerville', Georgia, serif" }}>
              {lastRead || 'The Constitution'}
            </p>
          </div>
          {/* Progress circle */}
          <div style={{ width: '44px', height: '44px', position: 'relative' }}>
            <svg width="44" height="44" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" fill="none" stroke="var(--border)" strokeWidth="3" />
              <circle cx="22" cy="22" r="18" fill="none" stroke="var(--crimson)" strokeWidth="3"
                strokeDasharray={`${2 * Math.PI * 18}`}
                strokeDashoffset={`${2 * Math.PI * 18 * (1 - 0.35)}`}
                strokeLinecap="round"
                transform="rotate(-90 22 22)" />
            </svg>
            <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: '700', color: 'var(--text-primary)' }}>35%</span>
          </div>
        </button>
      </div>

      {/* Documents ("Rekomendasi kami" equivalent) */}
      <h2 className="fade-in-up" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontFamily: "'Libre Baskerville', Georgia, serif" }}>
        Founding Documents
      </h2>
      <div className="grid grid-cols-2 gap-4 fade-in-up">
        {[
          { id: 'declaration', title: 'Declaration of Independence', sub: 'July 4, 1776', sections: declaration.sections.length + ' sections' },
          { id: 'constitution', title: 'The Constitution', sub: 'September 17, 1787', sections: constitution.articles.length + ' articles' },
          { id: 'bill-of-rights', title: 'Bill of Rights', sub: 'December 15, 1791', sections: '10 amendments' },
          { id: 'amendments', title: 'Amendments 11-27', sub: '1795 - 1992', sections: laterAmendments.amendments.length + ' amendments' },
        ].map(doc => (
          <button
            key={doc.id}
            onClick={() => { setActiveView('library'); setActiveDoc(doc.id); }}
            className="text-left rounded-2xl overflow-hidden border"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            {/* Cover art */}
            <div className="flex items-center justify-center" style={{
              height: '160px',
              background: DOC_COVERS[doc.id].bg,
              position: 'relative',
            }}>
              <span style={{ fontSize: '48px', opacity: 0.9 }}>{DOC_COVERS[doc.id].emoji}</span>
              <div style={{ position: 'absolute', bottom: '8px', left: '10px', right: '10px' }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.95)', fontWeight: '700', lineHeight: '1.3', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>{doc.title}</p>
                <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', marginTop: '1px' }}>{doc.sub}</p>
              </div>
            </div>
            <div className="p-3">
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.3', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doc.title}</p>
              <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{doc.sections}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Know Your Rights Quick Access */}
      <h2 className="fade-in-up" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontFamily: "'Libre Baskerville', Georgia, serif" }}>
        Know Your Rights
      </h2>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 fade-in-up">
        {situations.slice(0, 4).map(s => (
          <button
            key={s.id}
            onClick={() => setActiveView('rights')}
            className="flex-shrink-0 w-36 p-4 rounded-2xl border text-left"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>
              <SituationIcon icon={s.icon} />
            </div>
            <p style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.3' }}>{s.title}</p>
          </button>
        ))}
      </div>

      {/* Donate card */}
      <div className="fade-in-up mt-8 p-5 rounded-2xl text-center" style={{ background: 'var(--navy)', color: 'white' }}>
        <p style={{ fontSize: '15px', fontWeight: '700', fontFamily: "'Libre Baskerville', Georgia, serif", marginBottom: '4px' }}>Support This Project</p>
        <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '14px' }}>Keep civic education free and nonpartisan.</p>
        <a href="https://donate.stripe.com/PLACEHOLDER" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
          style={{ background: 'var(--crimson)', color: 'white' }}>
          <Icon.Heart /> Donate
        </a>
      </div>
    </div>
  );
}

// ============================================================
// LIBRARY VIEW (continuous document reader)
// ============================================================

function getDocSections(docId) {
  switch (docId) {
    case 'declaration':
      return declaration.sections.map(s => ({ ...s, _docLabel: null }));
    case 'constitution': {
      const all = [{ ...constitution.preamble, _docLabel: null }];
      constitution.articles.forEach(art => {
        art.sections.forEach(s => {
          all.push({ ...s, _docLabel: `Article ${art.number}`, _articleTitle: art.title });
        });
      });
      return all;
    }
    case 'bill-of-rights':
      return billOfRights.amendments.map(a => ({ ...a, _isAmendment: true }));
    case 'amendments':
      return laterAmendments.amendments.map(a => ({ ...a, _isAmendment: true, title: `${a.title} (${a.year})` }));
    default:
      return [];
  }
}

function getDocMeta(docId) {
  const meta = {
    declaration: { title: declaration.title, date: declaration.date, summary: declaration.summary },
    constitution: { title: constitution.title, date: constitution.date, summary: constitution.summary },
    'bill-of-rights': { title: billOfRights.title, date: billOfRights.date, summary: billOfRights.summary },
    amendments: { title: laterAmendments.title, summary: laterAmendments.summary },
  };
  return meta[docId] || {};
}

function LibraryView({ activeDoc, setActiveDoc, setActiveView, onOpenCase }) {
  const [view, setView] = useState('original');
  const [tocOpen, setTocOpen] = useState(false);

  const sections = useMemo(() => getDocSections(activeDoc), [activeDoc]);
  const meta = useMemo(() => getDocMeta(activeDoc), [activeDoc]);

  const scrollToSection = (idx) => {
    const el = document.getElementById(`section-${idx}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTocOpen(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      {/* Document selector tabs */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        {[
          { id: 'declaration', label: 'Declaration' },
          { id: 'constitution', label: 'Constitution' },
          { id: 'bill-of-rights', label: 'Bill of Rights' },
          { id: 'amendments', label: 'Amd. 11-27' },
        ].map(d => (
          <button
            key={d.id}
            onClick={() => { setActiveDoc(d.id); setTocOpen(false); window.scrollTo({ top: 0 }); }}
            className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: activeDoc === d.id ? 'var(--navy)' : 'var(--bg-secondary)',
              color: activeDoc === d.id ? 'white' : 'var(--text-secondary)',
            }}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Document title */}
      <div className="text-center mt-8 mb-2">
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: "'Libre Baskerville', Georgia, serif", lineHeight: '1.3' }}>
          {meta.title}
        </h1>
        {meta.date && <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{meta.date}</p>}
      </div>

      {/* Dot divider */}
      <div className="dot-indicator my-3">
        <span className={view === 'original' ? 'active' : ''} />
        <span className={view === 'translated' ? 'active' : ''} />
        <span className={view === 'both' ? 'active' : ''} />
      </div>

      {/* View toggle */}
      <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ background: 'var(--bg-secondary)' }}>
        {[
          { id: 'original', label: 'Original' },
          { id: 'translated', label: 'Plain English' },
          { id: 'both', label: 'Side by Side' },
        ].map(v => (
          <button
            key={v.id}
            onClick={() => setView(v.id)}
            className="flex-1 py-2 rounded-lg text-xs font-medium"
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

      {/* Table of Contents (collapsible) */}
      <div className="mb-6 rounded-xl border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="w-full flex items-center justify-between p-4 text-sm font-semibold"
          style={{ color: 'var(--navy)' }}
        >
          <span>Table of Contents ({sections.length} sections)</span>
          <Icon.ChevronDown open={tocOpen} />
        </button>
        <div className="card-expand" style={{ maxHeight: tocOpen ? '600px' : '0', opacity: tocOpen ? 1 : 0 }}>
          {tocOpen && (
            <div className="px-4 pb-4 space-y-1 overflow-y-auto" style={{ maxHeight: '400px' }}>
              {sections.map((s, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(i)}
                  className="w-full text-left py-2 px-3 rounded-lg text-sm flex items-center gap-2 hover:opacity-80"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {s._isAmendment && s.number && (
                    <span className="amendment-badge" style={{ width: '22px', height: '22px', fontSize: '9px' }}>{s.number}</span>
                  )}
                  {s._docLabel && (
                    <span style={{ fontSize: '10px', fontWeight: '700', color: 'var(--crimson)', flexShrink: 0 }}>{s._docLabel}</span>
                  )}
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Continuous document content */}
      {sections.map((section, idx) => (
        <ContinuousSection key={idx} section={section} idx={idx} view={view} isFirst={idx === 0} onOpenCase={onOpenCase} />
      ))}
    </div>
  );
}

// ============================================================
// CASE MODAL (rich court case popup)
// ============================================================

function CaseModal({ caseKey, onClose }) {
  const caseData = cases[caseKey];
  if (!caseData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(27,42,74,0.5)', backdropFilter: 'blur(4px)' }} />
      <div
        className="relative w-full max-w-md rounded-t-2xl sm:rounded-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-xl)', maxHeight: '85vh' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="amendment-badge" style={{ width: '24px', height: '24px', fontSize: '9px' }}>{caseData.amendment}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{caseData.year}</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: "'Libre Baskerville', Georgia, serif", lineHeight: '1.3' }}>
                {caseData.name}
              </h3>
              <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px', fontFamily: "'JetBrains Mono', monospace" }}>{caseData.citation}</p>
            </div>
            <button onClick={onClose} className="p-1 rounded-lg" style={{ color: 'var(--text-tertiary)' }}>
              <Icon.X />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 100px)' }}>
          {/* Summary */}
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {caseData.summary}
          </p>

          {/* Outcome */}
          <div className="p-4 rounded-xl mb-3" style={{ background: 'var(--navy-bg)', border: '1px solid var(--navy-lighter)' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--navy)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Outcome</p>
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>{caseData.outcome}</p>
          </div>

          {/* Significance */}
          <div className="p-4 rounded-xl mb-4" style={{ background: 'var(--gold-bg)', border: '1px solid var(--gold)' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Why This Matters</p>
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>{caseData.significance}</p>
          </div>

          {/* Link to official records */}
          <a
            href={caseData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm"
            style={{ background: 'var(--navy)', color: 'white' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Read Full Court Opinion
          </a>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CASE REFERENCE (clickable case name wrapper)
// ============================================================

function CaseReference({ caseKey, children, onOpenCase }) {
  const hasCase = cases[caseKey];
  if (!hasCase) return <span>{children || caseKey}</span>;

  return (
    <button
      onClick={(e) => { e.stopPropagation(); onOpenCase(caseKey); }}
      className="inline text-left"
      style={{
        color: 'var(--navy)',
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textUnderlineOffset: '3px',
        textDecorationColor: 'var(--navy-lighter)',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
      }}
    >
      {children || caseKey}
    </button>
  );
}

// ============================================================
// INLINE CASE PARSER (finds case names in running text)
// ============================================================

function TextWithCases({ text, onOpenCase }) {
  if (!onOpenCase) return <>{text}</>;

  // Build regex from all case keys
  const caseKeys = Object.keys(cases);
  if (caseKeys.length === 0) return <>{text}</>;

  // Escape special regex chars in case names, sort longest first to match greedily
  const escaped = caseKeys
    .sort((a, b) => b.length - a.length)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'g');

  const parts = text.split(regex);
  if (parts.length === 1) return <>{text}</>;

  return (
    <>
      {parts.map((part, i) =>
        cases[part] ? (
          <CaseReference key={i} caseKey={part} onOpenCase={onOpenCase}>
            {part}
          </CaseReference>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// ============================================================
// HELPER: Find amendment data for bridging Rights to Library
// ============================================================

function findAmendmentData(amendmentNum) {
  const num = parseInt(amendmentNum);
  if (isNaN(num)) return null;
  if (num >= 1 && num <= 10) {
    return billOfRights.amendments.find(a => a.number === num);
  }
  if (num >= 11) {
    return laterAmendments.amendments.find(a => a.number === num);
  }
  return null;
}

// ============================================================
// CONTINUOUS SECTION (renders inline in the document flow)
// ============================================================

function ContinuousSection({ section, idx, view, isFirst, onOpenCase }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div id={`section-${idx}`} style={{ scrollMarginTop: '120px' }}>
      {/* Section divider (not on first section) */}
      {!isFirst && (
        <div className="flex items-center justify-center gap-4 my-10">
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ color: 'var(--gold)', fontSize: '10px', letterSpacing: '4px' }}>&#9733; &#9733; &#9733;</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
      )}

      {/* Article label if applicable */}
      {section._docLabel && (
        <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--crimson)', letterSpacing: '0.04em', marginBottom: '4px', textAlign: 'center' }}>
          {section._docLabel}
        </p>
      )}

      {/* Amendment number */}
      {section._isAmendment && section.number && (
        <p className="text-center" style={{ fontSize: '12px', fontWeight: '600', color: 'var(--crimson)', letterSpacing: '0.03em', marginBottom: '4px' }}>
          Amendment {section.number}
        </p>
      )}

      {/* Section title */}
      <h2 className="text-center" style={{
        fontSize: '22px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        fontFamily: "'Libre Baskerville', Georgia, serif",
        lineHeight: '1.35',
        marginBottom: '4px',
      }}>
        {section.title}
      </h2>

      {section.year && (
        <p className="text-center" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>Ratified {section.year}</p>
      )}

      {/* Small dot divider under title */}
      <div className="dot-indicator my-4">
        <span style={{ background: 'var(--border)' }} />
        <span style={{ background: 'var(--crimson)', width: '6px' }} />
        <span style={{ background: 'var(--border)' }} />
      </div>

      {/* Content */}
      {view === 'original' && (
        <div className={isFirst ? 'drop-cap' : ''} style={{
          fontFamily: "'Libre Baskerville', Georgia, serif",
          fontSize: '15px',
          lineHeight: '1.9',
          color: 'var(--text-secondary)',
          whiteSpace: 'pre-line',
        }}>
          {section.original}
        </div>
      )}

      {view === 'translated' && (
        <div className={isFirst ? 'drop-cap' : ''} style={{
          fontSize: '15px',
          lineHeight: '1.9',
          color: 'var(--text-secondary)',
        }}>
          {section.translation}
        </div>
      )}

      {view === 'both' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Original Text</p>
            <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>{section.original}</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--crimson-lighter)', border: '1px solid rgba(178,34,52,0.15)' }}>
            <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Plain English</p>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)' }}>{section.translation}</p>
          </div>
        </div>
      )}

      {/* Pull quote from rights */}
      {section.rights && (
        <div className="pull-quote mt-6">
          "{section.rights.length > 160 ? section.rights.slice(0, 160) + '...' : section.rights}"
        </div>
      )}

      {/* Expandable details */}
      {(section.rights || section.examples?.length > 0 || section.references?.length > 0) && (
        <>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 mx-auto mt-5 px-4 py-2.5 rounded-xl font-medium text-xs border"
            style={{
              background: showDetails ? 'var(--navy)' : 'var(--bg-card)',
              color: showDetails ? 'white' : 'var(--navy)',
              borderColor: showDetails ? 'var(--navy)' : 'var(--border)',
            }}
          >
            <Icon.ChevronDown open={showDetails} />
            {showDetails ? 'Hide Details' : 'Rights, Examples & References'}
          </button>

          <div className="card-expand" style={{ maxHeight: showDetails ? '3000px' : '0', opacity: showDetails ? 1 : 0 }}>
            {showDetails && (
              <div className="mt-4 space-y-4 stagger-in">
                {section.rights && (
                  <div className="p-4 rounded-xl border" style={{ background: 'var(--gold-bg)', borderColor: 'var(--gold)', borderWidth: '1px' }}>
                    <div className="stars-decoration" />
                    <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>How This Protects You</p>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      <TextWithCases text={section.rights} onOpenCase={onOpenCase} />
                    </p>
                  </div>
                )}

                {section.examples?.length > 0 && (
                  <div className="p-4 rounded-xl border" style={{ background: 'var(--crimson-bg)', borderColor: 'rgba(178,34,52,0.2)', borderWidth: '1px' }}>
                    <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>Real-World Infringements</p>
                    {section.examples.map((ex, i) => (
                      <div key={i} className="flex gap-3 items-start mb-2 last:mb-0">
                        <span style={{ color: 'var(--crimson)', fontSize: '11px', fontWeight: '800', marginTop: '3px', flexShrink: 0 }}>{i + 1}</span>
                        <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                          <TextWithCases text={ex} onOpenCase={onOpenCase} />
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.references?.length > 0 && (
                  <div className="p-4 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
                    <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>Legal References</p>
                    {section.references.map((ref, i) => {
                      // Try to match the case name from the text
                      const caseMatch = ref.text.match(/^(.+?\(\d{4}\))/);
                      const caseKey = caseMatch ? caseMatch[1].trim() : null;
                      const hasCase = caseKey && cases[caseKey];
                      const restOfText = caseKey ? ref.text.slice(caseMatch[0].length) : null;

                      return (
                        <div key={i} className="mb-3 last:mb-0 p-3 rounded-lg" style={{ fontSize: '12px', background: hasCase ? 'var(--bg-card)' : 'transparent', border: hasCase ? '1px solid var(--border-light)' : 'none' }}>
                          {hasCase ? (
                            <>
                              <CaseReference caseKey={caseKey} onOpenCase={onOpenCase}>
                                <span style={{ fontWeight: '600' }}>{caseKey}</span>
                              </CaseReference>
                              {restOfText && <span style={{ color: 'var(--text-secondary)' }}>{restOfText}</span>}
                            </>
                          ) : (
                            <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{ref.text}</span>
                          )}
                          {ref.source && <span style={{ color: 'var(--text-tertiary)', display: 'block', marginTop: '2px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>{ref.source}</span>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================
// RIGHTS GUIDE (enriched with amendment content + case links)
// ============================================================

function RightsView({ onOpenCase, setActiveView, setActiveDoc }) {
  const [active, setActive] = useState(null);
  const [expandedRight, setExpandedRight] = useState(null);

  if (active) {
    // Collect unique amendments referenced in this scenario
    const referencedAmendments = [...new Set(active.rights.map(r => r.amendment))];

    return (
      <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
        <button onClick={() => { setActive(null); setExpandedRight(null); }} className="flex items-center gap-1 mb-6" style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>
          <Icon.ChevronLeft /> Back
        </button>

        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>
            <SituationIcon icon={active.icon} />
          </div>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: "'Libre Baskerville', Georgia, serif" }}>{active.title}</h2>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{active.description}</p>
          </div>
        </div>

        {/* Amendment badges with quick-jump */}
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {referencedAmendments.map(a => (
            <span key={a} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>
              {isNaN(parseInt(a)) ? a : `${a} Amendment`}
            </span>
          ))}
        </div>

        <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Your Constitutional Rights</p>
        <div className="space-y-3 mb-8">
          {active.rights.map((r, i) => {
            const isExpanded = expandedRight === i;
            const amendmentData = findAmendmentData(r.amendment);
            const caseData = cases[r.ref];

            return (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: isExpanded ? 'var(--navy)' : 'var(--border)', transition: 'border-color 0.2s' }}>
                {/* Main right card */}
                <button
                  onClick={() => setExpandedRight(isExpanded ? null : i)}
                  className="w-full text-left p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="amendment-badge" style={{ width: '28px', height: '28px', fontSize: '10px', marginTop: '1px' }}>{r.amendment}</div>
                    <div className="flex-1">
                      <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--text-primary)' }}>{r.right}</p>
                      {caseData ? (
                        <div className="flex items-center gap-2 mt-2">
                          <CaseReference caseKey={r.ref} onOpenCase={onOpenCase}>
                            <span style={{ fontSize: '11px', fontWeight: '600' }}>{caseData.name} ({caseData.year})</span>
                          </CaseReference>
                        </div>
                      ) : (
                        <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '4px', fontStyle: 'italic' }}>{r.ref}</p>
                      )}
                    </div>
                    <div style={{ color: 'var(--text-tertiary)', flexShrink: 0, marginTop: '2px' }}>
                      <Icon.ChevronDown open={isExpanded} />
                    </div>
                  </div>
                </button>

                {/* Expanded details */}
                <div className="card-expand" style={{ maxHeight: isExpanded ? '1200px' : '0', opacity: isExpanded ? 1 : 0 }}>
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-3">
                      {/* Case quick summary */}
                      {caseData && (
                        <div className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                          <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>Key Case</p>
                          <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            {caseData.summary.length > 200 ? caseData.summary.slice(0, 200) + '...' : caseData.summary}
                          </p>
                          <button
                            onClick={(e) => { e.stopPropagation(); onOpenCase(r.ref); }}
                            className="mt-2 text-xs font-semibold flex items-center gap-1"
                            style={{ color: 'var(--navy)' }}
                          >
                            Read full case details
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                          </button>
                        </div>
                      )}

                      {/* Amendment source text */}
                      {amendmentData && (
                        <div className="p-3 rounded-lg" style={{ background: 'var(--gold-bg)', border: '1px solid var(--gold)' }}>
                          <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                            From the {r.amendment} Amendment
                          </p>
                          <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--text-secondary)', fontFamily: "'Libre Baskerville', Georgia, serif", fontStyle: 'italic' }}>
                            "{amendmentData.original.length > 200 ? amendmentData.original.slice(0, 200) + '...' : amendmentData.original}"
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const num = parseInt(r.amendment);
                              if (num >= 1 && num <= 10) {
                                setActiveDoc('bill-of-rights');
                              } else if (num >= 11) {
                                setActiveDoc('amendments');
                              }
                              setActiveView('library');
                            }}
                            className="mt-2 text-xs font-semibold flex items-center gap-1"
                            style={{ color: 'var(--gold)' }}
                          >
                            Read full amendment
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Practical Tips */}
        <div className="p-5 rounded-xl border" style={{ background: 'var(--gold-bg)', borderColor: 'var(--gold)', borderWidth: '1px' }}>
          <div className="stars-decoration" />
          <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>Practical Tips</p>
          {active.tips.map((t, i) => (
            <div key={i} className="flex gap-3 items-start mb-2.5 last:mb-0">
              <span style={{ color: 'var(--gold)', fontSize: '14px', lineHeight: '1.4' }}>&#9733;</span>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>{t}</p>
            </div>
          ))}
        </div>

        {/* Related documents CTA */}
        <div className="mt-6 p-4 rounded-xl text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Want the full picture?</p>
          <button
            onClick={() => {
              const firstNum = parseInt(active.rights[0]?.amendment);
              if (firstNum >= 1 && firstNum <= 10) {
                setActiveDoc('bill-of-rights');
              } else if (firstNum >= 11) {
                setActiveDoc('amendments');
              } else {
                setActiveDoc('constitution');
              }
              setActiveView('library');
            }}
            className="px-4 py-2 rounded-xl text-sm font-semibold"
            style={{ background: 'var(--navy)', color: 'white' }}
          >
            Read the Source Documents
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: "'Libre Baskerville', Georgia, serif" }}>
        Know Your Rights
      </h1>
      <p className="fade-in-up visible" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.6' }}>
        Real situations. Real rights. Tap a scenario to learn exactly which constitutional protections apply to you.
      </p>

      <p className="fade-in-up visible" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '16px', marginBottom: '8px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {situations.length} scenarios covered
      </p>

      <div className="space-y-3 stagger-in">
        {situations.map(s => (
          <button
            key={s.id}
            onClick={() => { setActive(s); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="w-full text-left p-4 rounded-2xl border flex items-center gap-4"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>
              <SituationIcon icon={s.icon} />
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{s.title}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{s.rights.length} rights covered</p>
            </div>
            <span style={{ color: 'var(--text-tertiary)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// GLOSSARY VIEW
// ============================================================

function GlossaryView() {
  const [filter, setFilter] = useState('');
  const [expandedTerm, setExpandedTerm] = useState(null);

  const letters = useMemo(() => [...new Set(glossary.map(g => g.term[0].toUpperCase()))].sort(), []);
  const filtered = useMemo(() => {
    if (!filter) return glossary;
    return glossary.filter(g => g.term.toLowerCase().includes(filter.toLowerCase()) || g.definition.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: "'Libre Baskerville', Georgia, serif" }}>
        Glossary
      </h1>
      <p className="fade-in-up visible" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
        50 essential terms in plain language.
      </p>

      {/* Search */}
      <div className="relative mt-5 mb-4 fade-in-up visible">
        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }}>
          <Icon.Search size={16} />
        </div>
        <input
          type="text"
          placeholder="Filter terms..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border outline-none"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)', fontSize: '14px' }}
        />
      </div>

      {/* Letter nav */}
      <div className="flex flex-wrap gap-1 mb-5">
        {letters.map(l => (
          <button key={l} onClick={() => { const el = document.getElementById(`g-${l}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: 'var(--bg-secondary)', color: 'var(--navy)' }}>
            {l}
          </button>
        ))}
      </div>

      {/* Terms */}
      <div className="space-y-2">
        {filtered.map((g, i) => {
          const first = i === 0 || filtered[i - 1]?.term[0].toUpperCase() !== g.term[0].toUpperCase();
          return (
            <div key={g.term}>
              {first && (
                <div id={`g-${g.term[0].toUpperCase()}`} className="pt-3 pb-1">
                  <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--crimson)', fontFamily: "'Libre Baskerville', Georgia, serif" }}>{g.term[0].toUpperCase()}</span>
                </div>
              )}
              <button
                onClick={() => setExpandedTerm(expandedTerm === g.term ? null : g.term)}
                className="w-full text-left p-4 rounded-xl border"
                style={{
                  background: expandedTerm === g.term ? 'var(--navy-lighter)' : 'var(--bg-card)',
                  borderColor: expandedTerm === g.term ? 'var(--navy)' : 'var(--border)',
                  borderWidth: '1px',
                }}
              >
                <div className="flex items-center justify-between">
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{g.term}</span>
                  <Icon.ChevronDown open={expandedTerm === g.term} />
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
// SEARCH MODAL
// ============================================================

function SearchModal({ isOpen, onClose, searchIndex }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
    if (!isOpen) { setQuery(''); setResults([]); }
  }, [isOpen]);

  useEffect(() => {
    const t = setTimeout(() => setResults(searchContent(query, searchIndex)), 150);
    return () => clearTimeout(t);
  }, [query, searchIndex]);

  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[8vh] px-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(27,42,74,0.4)', backdropFilter: 'blur(4px)' }} />
      <div className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-xl)', maxHeight: '70vh' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: 'var(--border)' }}>
          <Icon.Search size={18} />
          <input ref={inputRef} type="text" placeholder="Search everything..."
            value={query} onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: 'var(--text-primary)' }} />
          <button onClick={onClose} style={{ color: 'var(--text-tertiary)' }}><Icon.X /></button>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 65px)' }}>
          {query.length < 2 && (
            <div className="p-6 text-center" style={{ color: 'var(--text-tertiary)', fontSize: '13px' }}>
              <p>Search all documents, amendments, glossary, and rights guides.</p>
              <p className="mt-2" style={{ fontSize: '11px' }}>Try: "free speech", "due process", "search warrant"</p>
            </div>
          )}
          {query.length >= 2 && results.length === 0 && (
            <div className="p-6 text-center" style={{ color: 'var(--text-tertiary)', fontSize: '13px' }}>No results for "{query}"</div>
          )}
          {results.map((r, i) => (
            <button key={i} onClick={onClose} className="w-full text-left p-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-xs font-semibold" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>{r.doc}</span>
              </div>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '3px' }}>{r.section}</p>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: highlightText(r.snippet, query) }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SCROLL TO TOP
// ============================================================

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 right-5 z-40 w-10 h-10 rounded-full flex items-center justify-center no-print"
      style={{ background: 'var(--navy)', color: 'white', boxShadow: 'var(--shadow-lg)' }}>
      <Icon.ArrowUp />
    </button>
  );
}

// ============================================================
// MAIN APP
// ============================================================

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState('home');
  const [activeDoc, setActiveDoc] = useState('declaration');
  const [searchOpen, setSearchOpen] = useState(false);
  const [openCase, setOpenCase] = useState(null);

  const searchIndex = useMemo(() => buildSearchIndex(), []);
  const observe = useInView();

  useEffect(() => { document.documentElement.classList.toggle('dark', darkMode); }, [darkMode]);
  useEffect(() => { const t = setTimeout(() => observe(), 100); return () => clearTimeout(t); }, [activeView, activeDoc, observe]);

  // Cmd+K shortcut
  useEffect(() => {
    const h = e => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); } };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  const handleOpenCase = useCallback((caseKey) => setOpenCase(caseKey), []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background 0.3s, color 0.3s' }}>
        <ReadingProgress />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} searchIndex={searchIndex} />
        {openCase && <CaseModal caseKey={openCase} onClose={() => setOpenCase(null)} />}
        <TopBar darkMode={darkMode} setDarkMode={setDarkMode} onSearchOpen={() => setSearchOpen(true)} />

        {activeView === 'home' && (
          <HomeView setActiveView={setActiveView} setActiveDoc={setActiveDoc} />
        )}
        {activeView === 'library' && (
          <LibraryView activeDoc={activeDoc} setActiveDoc={setActiveDoc} setActiveView={setActiveView} onOpenCase={handleOpenCase} />
        )}
        {activeView === 'rights' && (
          <RightsView onOpenCase={handleOpenCase} setActiveView={setActiveView} setActiveDoc={setActiveDoc} />
        )}
        {activeView === 'glossary' && <GlossaryView />}

        <BottomNav activeView={activeView} setActiveView={setActiveView} />
        <ScrollToTop />
      </div>
    </div>
  );
}
