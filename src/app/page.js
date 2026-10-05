'use client';
import { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext } from 'react';
import { getData } from '../data';
import { STRINGS, fmtBadge } from '../i18n';

// ============================================================
// APP CONTEXT (language, strings, language-specific data, navigation)
// ============================================================

const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);

const SERIF = 'var(--serif)';
const MONO = 'var(--mono)';

// ============================================================
// ICONS (inline SVG for zero dependencies)
// ============================================================

const Icon = {
  Home: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Book: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  Search: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
    </svg>
  ),
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  ),
  Heart: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  ChevronDown: ({ open }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease', flexShrink: 0 }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  ChevronRight: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  ArrowUp: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
    </svg>
  ),
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  BookOpen: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Gavel: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m14 13-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/>
    </svg>
  ),
  Info: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  ),
  Share: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  Flag: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  ),
  Lock: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Alert: ({ size = 18, color = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
};

function SituationIcon({ icon }) {
  const p = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const map = {
    car: <svg {...p}><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
    megaphone: <svg {...p}><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>,
    shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    eye: <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    message: <svg {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    home: <svg {...p}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    vote: <svg {...p}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
    faith: <svg {...p}><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg>,
    briefcase: <svg {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v2"/></svg>,
    graduation: <svg {...p}><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 0 2.5 3 6 3s6-3 6-3v-5"/><path d="M22 10v6"/></svg>,
    passport: <svg {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M8 18h8"/></svg>,
    firearm: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>,
    apartment: <svg {...p}><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h1M9 13h1M9 17h1"/></svg>,
    gavel: <svg {...p}><path d="m14 13-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>,
    medical: <svg {...p}><path d="M8 2h8l4 4v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6l4-4z"/><path d="M10 10h4M12 8v4"/></svg>,
    phone: <svg {...p}><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
    badge: <svg {...p}><path d="M12 2 L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26z"/></svg>,
    walk: <svg {...p}><circle cx="13" cy="4" r="2"/><path d="m9 20 3-6 3 3v4"/><path d="m6 12 3-4 4 1 3 4"/><path d="m12 14-1-5"/></svg>,
    door: <svg {...p}><path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17"/><path d="M3 21h18"/><circle cx="15" cy="12" r="1"/></svg>,
    camera: <svg {...p}><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
    plane: <svg {...p}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>,
  };
  return map[icon] || map.shield;
}

// ============================================================
// DOCUMENT COVER COLORS/GRADIENTS
// ============================================================

const DOC_COVERS = {
  declaration: { bg: 'radial-gradient(120% 90% at 30% 15%, #c4313f 0%, #9c1d2c 55%, #6e1320 100%)', label: '1776' },
  constitution: { bg: 'radial-gradient(120% 90% at 30% 15%, #2a3d66 0%, #1b2a4a 55%, #0c1528 100%)', label: '1787' },
  'bill-of-rights': { bg: 'radial-gradient(120% 90% at 30% 15%, #d6a63a 0%, #b0841f 55%, #7f5d14 100%)', label: '1791' },
  amendments: { bg: 'radial-gradient(120% 90% at 30% 15%, #3b5591 0%, #2a3f6e 55%, #172541 100%)', label: '1795–1992' },
  unratified: { bg: 'radial-gradient(120% 90% at 30% 15%, #6d7687 0%, #4f586a 55%, #313847 100%)', label: '1789–1978' },
};

// Engraved-style cover illustrations (cream line art with gold accents)
const CREAM = '#fbf3e1';
const GOLD = '#e8c55a';

function Star({ x, y, r = 2.2, fill = GOLD }) {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.45;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(x + rad * Math.cos(a)).toFixed(2)},${(y + rad * Math.sin(a)).toFixed(2)}`);
  }
  return <polygon points={pts.join(' ')} fill={fill} />;
}

function CoverArt({ id }) {
  const line = { fill: 'none', stroke: CREAM, strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const thin = { ...line, strokeWidth: 1, opacity: 0.55 };
  switch (id) {
    case 'declaration': {
      // Quill resting in an inkwell beneath an arc of 13 stars
      const stars = Array.from({ length: 13 }, (_, i) => {
        const a = Math.PI * (0.92 + (i / 12) * 1.16);
        return <Star key={i} x={60 + 44 * Math.cos(a)} y={64 + 44 * Math.sin(a)} r={2} />;
      });
      return (
        <svg viewBox="0 0 120 100" width="100%" height="100%" aria-hidden="true">
          {stars}
          <path d="M57 63 C 64 44, 76 28, 95 14 C 90 31, 80 45, 64 58 Z" fill={CREAM} fillOpacity="0.16" {...line} />
          <path d="M58 64 L 93 17" {...line} strokeWidth="1.2" />
          {[0, 1, 2, 3, 4].map(i => <path key={i} d={`M${66 + i * 5.5} ${53 - i * 7.2} l ${6 - i * 0.4} -2`} {...thin} />)}
          <path d="M46 70 h28 a3 3 0 0 1 3 3 v9 a5 5 0 0 1-5 5 H48 a5 5 0 0 1-5-5 v-9 a3 3 0 0 1 3-3z" fill={CREAM} fillOpacity="0.12" {...line} />
          <path d="M51 70 v-4 h18 v4" {...line} />
          <path d="M49 78 h22" {...thin} />
        </svg>
      );
    }
    case 'constitution':
      // Neoclassical temple front
      return (
        <svg viewBox="0 0 120 100" width="100%" height="100%" aria-hidden="true">
          <path d="M22 38 L60 17 L98 38 Z" fill={CREAM} fillOpacity="0.12" {...line} />
          <Star x={60} y={31} r={3.4} />
          <rect x="24" y="38" width="72" height="6" fill={CREAM} fillOpacity="0.1" {...line} />
          {[30, 42, 54, 66, 78, 90].map(x => (
            <g key={x}>
              <path d={`M${x - 3} 47 h6 M${x - 3} 76 h6`} {...line} />
              <path d={`M${x - 2} 47 v29 M${x + 2} 47 v29`} {...line} strokeWidth="1.2" />
            </g>
          ))}
          <rect x="20" y="78" width="80" height="4" fill={CREAM} fillOpacity="0.12" {...line} />
          <rect x="15" y="84" width="90" height="4" fill={CREAM} fillOpacity="0.12" {...line} />
        </svg>
      );
    case 'bill-of-rights':
      // Heraldic shield: starred chief over stripes
      return (
        <svg viewBox="0 0 120 100" width="100%" height="100%" aria-hidden="true">
          <defs>
            <clipPath id="borShield"><path d="M60 13 L90 22 V47 C90 68 77 81 60 89 C43 81 30 68 30 47 V22 Z" /></clipPath>
          </defs>
          <g clipPath="url(#borShield)">
            <rect x="30" y="13" width="60" height="22" fill="#1b2a4a" fillOpacity="0.55" />
            {[0, 1, 2, 3, 4, 5].map(i => i % 2 === 0 && <rect key={i} x={32 + i * 10} y="35" width="10" height="60" fill={CREAM} fillOpacity="0.22" />)}
          </g>
          {[[45, 24], [60, 21], [75, 24], [52, 30], [68, 30]].map(([x, y], i) => <Star key={i} x={x} y={y} r={2.6} />)}
          <path d="M60 13 L90 22 V47 C90 68 77 81 60 89 C43 81 30 68 30 47 V22 Z" {...line} strokeWidth="1.8" />
          <path d="M30 35 H90" {...line} strokeWidth="1.2" />
        </svg>
      );
    case 'amendments':
      // Scroll with lines of text and a wax seal
      return (
        <svg viewBox="0 0 120 100" width="100%" height="100%" aria-hidden="true">
          <path d="M34 20 h52 a6 6 0 0 1 0 12 h-4 v44 a6 6 0 0 1-6 6 H38 a6 6 0 0 1 0-12 h4 V32 h-8 a6 6 0 0 1 0-12z" fill={CREAM} fillOpacity="0.13" {...line} />
          <path d="M42 32 h44" {...thin} />
          {[40, 47, 54, 61].map((y, i) => <path key={y} d={`M50 ${y} h${i === 3 ? 18 : 26}`} {...line} strokeWidth="1.1" opacity="0.8" />)}
          <circle cx="74" cy="70" r="8" fill={GOLD} fillOpacity="0.9" />
          <circle cx="74" cy="70" r="5.2" fill="none" stroke="#7f5d14" strokeWidth="0.9" />
          <Star x={74} y={70} r={2.6} fill="#7f5d14" />
          <path d="M69 77 l-3 10 l5 -3 l3 4 M79 77 l3 10 l-5 -3 l-3 4" fill={GOLD} fillOpacity="0.85" stroke="none" />
        </svg>
      );
    case 'unratified':
      // Draft page with an unsigned, dashed "pending" seal
      return (
        <svg viewBox="0 0 120 100" width="100%" height="100%" aria-hidden="true">
          <path d="M38 16 h32 l14 14 v54 H38 Z" fill={CREAM} fillOpacity="0.12" {...line} />
          <path d="M70 16 v14 h14" {...line} />
          {[38, 45, 52].map((y, i) => <path key={y} d={`M46 ${y} h${i === 2 ? 16 : 28}`} {...line} strokeWidth="1.1" opacity="0.8" />)}
          <circle cx="66" cy="68" r="10" fill="none" stroke={GOLD} strokeWidth="1.6" strokeDasharray="3 3" />
          <path d="M46 78 h10" {...line} strokeDasharray="2 3" />
        </svg>
      );
    default:
      return null;
  }
}

// Cover with gradient, engraved line texture, illustration and year
function DocCover({ id, height = 150, compact, label }) {
  const cover = DOC_COVERS[id];
  return (
    <div style={{ position: 'relative', height, background: cover.bg, overflow: 'hidden' }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.09 }} aria-hidden="true">
        <defs>
          <pattern id={`engrave-${id}`} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="6" stroke={CREAM} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#engrave-${id})`} />
      </svg>
      <div style={{ position: 'absolute', inset: compact ? '10px' : '18px 14px 26px' }}>
        <CoverArt id={id} />
      </div>
      {!compact && (
        <p style={{ position: 'absolute', left: 12, right: 12, bottom: 9, fontFamily: SERIF, fontSize: '11px', letterSpacing: '0.08em', color: GOLD, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {label || cover.label}
        </p>
      )}
      <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 -24px 32px -24px rgba(0,0,0,0.35)', pointerEvents: 'none' }} />
    </div>
  );
}

// Constitutional order for case badges (used by the Case Library filter)
const BADGE_ORDER = ['Preamble', 'Art. I', 'Art. II', 'Art. III', 'Art. IV', 'Art. V', 'Art. VI', 'Art. VII',
  ...Array.from({ length: 27 }, (_, i) => { const n = i + 1; const s = n % 10 === 1 && n !== 11 ? 'st' : n % 10 === 2 && n !== 12 ? 'nd' : n % 10 === 3 && n !== 13 ? 'rd' : 'th'; return `${n}${s}`; })];

// ============================================================
// HELPERS
// ============================================================

// Lowercase and strip accents so "constitucion" matches "constitución".
// Maps one code unit to one code unit, so indexes line up with the original.
function fold(str) {
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    const base = c.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
    out += base.length === 1 ? base : c;
  }
  return out;
}

const escapeHtml = (s) => s.replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));

// Stable DOM anchor for a document section
function sectionAnchor(section) {
  if (section.id) return `sec-${section.id}`;
  if (section.number) return `amd-${section.number}`;
  return null;
}

function amendmentTarget(amendment) {
  const n = parseInt(amendment);
  if (isNaN(n)) return null;
  return { view: 'library', doc: n <= 10 ? 'bill-of-rights' : 'amendments', anchor: `amd-${n}` };
}

function storageGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
function storageSet(key, value) { try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable */ } }

// ============================================================
// HOOKS
// ============================================================

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

// Close on Escape, lock background scrolling, and move focus into the modal
// (returning it to where it was when the modal closes)
function useModal(onClose, focusRef) {
  useEffect(() => {
    const h = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', h); document.body.style.overflow = prev; };
  }, [onClose]);
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    focusRef?.current?.focus();
    return () => { try { previouslyFocused?.focus?.({ preventScroll: true }); } catch (e) { /* ignore */ } };
  }, [focusRef]);
}

// ============================================================
// DOCUMENT STRUCTURE
// ============================================================

function getDocSections(docId, data, t) {
  const { declaration, constitution, billOfRights, laterAmendments } = data;
  switch (docId) {
    case 'declaration':
      return declaration.sections.map(s => ({ ...s, _docLabel: null }));
    case 'constitution': {
      const all = [{ ...constitution.preamble, _docLabel: null }];
      constitution.articles.forEach(art => {
        art.sections.forEach((s, i) => {
          all.push({
            ...s,
            _docLabel: `${t.article} ${art.number}`,
            _article: i === 0 ? { number: art.number, title: art.title, summary: art.summary } : null,
          });
        });
      });
      return all;
    }
    case 'bill-of-rights': {
      const list = billOfRights.amendments.map(a => ({ ...a, _isAmendment: true }));
      return billOfRights.preamble ? [{ ...billOfRights.preamble, _docLabel: null }, ...list] : list;
    }
    case 'amendments':
      return laterAmendments.amendments.map(a => ({ ...a, _isAmendment: true, title: `${a.title} (${a.year})` }));
    case 'unratified':
      return (data.unratified?.amendments || []).map(a => ({ ...a, title: `${a.title} (${a.year})`, _unratified: true }));
    default:
      return [];
  }
}

function getDocMeta(docId, data, t) {
  const { declaration, constitution, billOfRights, laterAmendments } = data;
  const meta = {
    declaration: { title: declaration.title, date: declaration.date, summary: declaration.summary, signers: declaration.signers, heading: declaration.heading, headingTranslation: declaration.headingTranslation },
    constitution: { title: constitution.title, date: constitution.date, summary: constitution.summary, signers: constitution.signers },
    'bill-of-rights': { title: billOfRights.title, date: billOfRights.date, summary: billOfRights.summary },
    amendments: { title: laterAmendments.title, date: laterAmendments.date || t.amendmentsDate, summary: laterAmendments.summary },
    unratified: data.unratified ? { title: data.unratified.title, date: data.unratified.date, summary: data.unratified.summary } : {},
  };
  return meta[docId] || {};
}

const docIds = (data) => ['declaration', 'constitution', 'bill-of-rights', 'amendments', ...(data.unratified ? ['unratified'] : [])];
const TEXT_SCALES = [0.9, 1, 1.12, 1.25, 1.4];

// ============================================================
// SEARCH
// ============================================================

function buildSearchIndex(data, t) {
  const labels = t.searchLabels;
  const entries = [];
  const add = (doc, section, text, target) => { if (text) entries.push({ doc, section, text, folded: fold(text), target }); };
  const { declaration, constitution, billOfRights, laterAmendments, glossary, situations, cases } = data;

  const addSection = (label, sectionTitle, s, docId) => {
    const target = { view: 'library', doc: docId, anchor: sectionAnchor(s) };
    add(label, sectionTitle, s.original, target);
    add(label, sectionTitle, s.translation, target);
    add(label, sectionTitle, s.rights, target);
    add(label, sectionTitle, s.note, target);
    (s.examples || []).forEach(ex => add(label, sectionTitle, ex, target));
  };

  declaration.sections.forEach(s => addSection(labels.declaration, s.title, s, 'declaration'));
  addSection(labels.constitution, constitution.preamble.title, constitution.preamble, 'constitution');
  constitution.articles.forEach(a => a.sections.forEach(s => addSection(labels.constitution, `${t.searchArt(a.number)}: ${s.title}`, s, 'constitution')));
  if (billOfRights.preamble) addSection(labels.billOfRights, billOfRights.preamble.title, billOfRights.preamble, 'bill-of-rights');
  billOfRights.amendments.forEach(a => addSection(labels.billOfRights, `${t.searchAmd(a.number)}: ${a.title}`, a, 'bill-of-rights'));
  laterAmendments.amendments.forEach(a => addSection(labels.amendments, `${t.searchAmd(a.number)}: ${a.title}`, a, 'amendments'));
  (data.unratified?.amendments || []).forEach(a => addSection(labels.unratified, a.title, a, 'unratified'));

  glossary.forEach(g => add(labels.glossary, g.term, `${g.term}: ${g.definition}`, { view: 'glossary', term: g.term }));
  situations.forEach(s => add(labels.rights, s.title, `${s.title}. ${s.description} ${s.rights.map(r => r.right).join(' ')} ${(s.tips || []).join(' ')}`, { view: 'rights', scenario: s.id }));
  Object.entries(cases).forEach(([key, c]) => add(labels.cases, key, `${key}. ${c.summary} ${c.outcome} ${c.significance}`, { caseKey: key }));

  return entries;
}

function searchContent(query, index) {
  const terms = fold(query).split(/\s+/).filter(Boolean);
  if (!terms.length || query.trim().length < 2) return [];
  const seen = new Set();
  const results = [];
  for (const e of index) {
    if (!terms.every(term => e.folded.includes(term))) continue;
    // One result per destination keeps the list readable
    const key = JSON.stringify(e.target) + e.section;
    if (seen.has(key)) continue;
    seen.add(key);
    const i = e.folded.indexOf(terms[0]);
    const s = Math.max(0, i - 40);
    const end = Math.min(e.text.length, i + 120);
    results.push({ ...e, snippet: (s > 0 ? '...' : '') + e.text.slice(s, end) + (end < e.text.length ? '...' : '') });
    if (results.length >= 40) break;
  }
  return results;
}

// Highlight matches (accent-insensitive) and escape everything else
function highlightText(text, query) {
  const terms = fold(query).split(/\s+/).filter(Boolean);
  if (!terms.length) return escapeHtml(text);
  const folded = fold(text);
  const marks = new Array(text.length).fill(false);
  terms.forEach(term => {
    let i = folded.indexOf(term);
    while (i !== -1) { for (let k = i; k < i + term.length; k++) marks[k] = true; i = folded.indexOf(term, i + term.length); }
  });
  let html = '', open = false;
  for (let i = 0; i < text.length; i++) {
    if (marks[i] && !open) { html += '<mark>'; open = true; }
    if (!marks[i] && open) { html += '</mark>'; open = false; }
    html += escapeHtml(text[i]);
  }
  if (open) html += '</mark>';
  return html;
}

// ============================================================
// "WHERE THIS IS CITED" INDEX (case key -> places in the app)
// ============================================================

function buildCitationIndex(data, t, caseRegex) {
  const index = {};
  if (!caseRegex) return index;
  const note = (text, label, target) => {
    if (!text) return;
    const found = new Set(text.match(caseRegex) || []);
    found.forEach(key => {
      if (!index[key]) index[key] = [];
      if (!index[key].some(x => x.label === label)) index[key].push({ label, target });
    });
  };
  const scanSection = (docLabel, sectionLabel, s, docId) => {
    const target = { view: 'library', doc: docId, anchor: sectionAnchor(s) };
    const label = `${docLabel} · ${sectionLabel}`;
    [s.rights, s.note, ...(s.examples || []), ...(s.references || []).map(r => r.text)].forEach(x => note(x, label, target));
  };
  const L = t.searchLabels;
  data.declaration.sections.forEach(s => scanSection(L.declaration, s.title, s, 'declaration'));
  scanSection(L.constitution, data.constitution.preamble.title, data.constitution.preamble, 'constitution');
  data.constitution.articles.forEach(a => a.sections.forEach(s => scanSection(L.constitution, `${t.searchArt(a.number)}, ${s.title}`, s, 'constitution')));
  if (data.billOfRights.preamble) scanSection(L.billOfRights, data.billOfRights.preamble.title, data.billOfRights.preamble, 'bill-of-rights');
  data.billOfRights.amendments.forEach(a => scanSection(L.billOfRights, t.amendmentWord(a.number), a, 'bill-of-rights'));
  data.laterAmendments.amendments.forEach(a => scanSection(L.amendments, t.amendmentWord(a.number), a, 'amendments'));
  (data.unratified?.amendments || []).forEach(a => scanSection(L.unratified, a.title, a, 'unratified'));
  data.situations.forEach(s => {
    const label = `${L.rights} · ${s.title}`;
    const target = { view: 'rights', scenario: s.id };
    s.rights.forEach(r => { note(r.ref, label, target); note(r.right, label, target); });
    (s.tips || []).forEach(x => note(x, label, target));
  });
  data.glossary.forEach(g => note(g.definition, `${L.glossary} · ${g.term}`, { view: 'glossary', term: g.term }));
  Object.entries(data.cases).forEach(([key, c]) => {
    const text = `${c.summary} ${c.outcome} ${c.significance}`;
    (text.match(caseRegex) || []).forEach(other => {
      if (other === key) return;
      if (!index[other]) index[other] = [];
      const label = `${L.cases} · ${key}`;
      if (!index[other].some(x => x.label === label)) index[other].push({ label, target: { caseKey: key } });
    });
  });
  return index;
}

// ============================================================
// BOTTOM NAV (mobile reading-app style)
// ============================================================

function BottomNav({ activeView, setActiveView }) {
  const { t } = useApp();
  const items = [
    { id: 'home', label: t.nav.home, icon: <Icon.Home /> },
    { id: 'library', label: t.nav.library, icon: <Icon.Book /> },
    { id: 'rights', label: t.nav.rights, icon: <Icon.Shield /> },
    { id: 'cases', label: t.nav.cases, icon: <Icon.Gavel /> },
    { id: 'glossary', label: t.nav.glossary, icon: <Icon.BookOpen /> },
  ];
  return (
    <nav className="bottom-nav no-print" style={{ boxShadow: '0 -2px 16px rgba(0,0,0,0.04)' }}>
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-2">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => { setActiveView(item.id); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            aria-current={activeView === item.id ? 'page' : undefined}
            className="flex flex-col items-center gap-0.5 py-1.5 px-2.5 rounded-xl"
            style={{
              color: activeView === item.id ? 'var(--crimson)' : 'var(--text-tertiary)',
              background: activeView === item.id ? 'var(--crimson-lighter)' : 'transparent',
              minWidth: '56px',
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
// TOP BAR
// ============================================================

function TopBar({ darkMode, setDarkMode, onSearchOpen, onAboutOpen, onHome, canGoBack, onBack }) {
  const { lang, setLang, t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <header className="no-print sticky top-0 z-40" style={{ background: 'var(--bg-primary)', paddingTop: 'env(safe-area-inset-top, 0px)', borderBottom: scrolled ? '1px solid var(--border-light)' : '1px solid transparent', transition: 'border-color 0.2s' }}>
      <div className="max-w-lg mx-auto px-5 pt-3 pb-2 flex items-center justify-between">
        {canGoBack ? (
          <button onClick={onBack} className="flex items-center gap-0.5 py-1.5 pr-3 -ml-1.5 rounded-xl" style={{ color: 'var(--navy)', fontSize: '15px', fontWeight: 600 }} aria-label={t.back}>
            <Icon.ChevronLeft /> {t.back}
          </button>
        ) : (
          <button onClick={onHome} aria-hidden={!scrolled} tabIndex={scrolled ? 0 : -1} style={{ fontFamily: SERIF, fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)', opacity: scrolled ? 1 : 0, transition: 'opacity 0.2s' }}>We The People</button>
        )}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="px-2.5 py-1.5 rounded-xl flex items-center gap-1.5"
            style={{ color: 'var(--text-secondary)' }}
            aria-label={t.a11y.language}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.03em' }} aria-hidden="true">{lang === 'es' ? 'EN' : 'ES'}</span>
          </button>
          <button onClick={onSearchOpen} className="p-2 rounded-xl" style={{ color: 'var(--text-secondary)' }} aria-label={t.a11y.search}>
            <Icon.Search size={19} />
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-xl" style={{ color: 'var(--text-secondary)' }} aria-label={darkMode ? t.a11y.darkOff : t.a11y.darkOn}>
            {darkMode ? <Icon.Sun /> : <Icon.Moon />}
          </button>
          <button onClick={onAboutOpen} className="p-2 rounded-xl" style={{ color: 'var(--text-secondary)' }} aria-label={t.a11y.about}>
            <Icon.Info />
          </button>
        </div>
      </div>
    </header>
  );
}

// ============================================================
// SHARED PIECES
// ============================================================

function SectionLabel({ children, color = 'var(--text-tertiary)', style }) {
  return (
    <p style={{ fontSize: '10px', fontWeight: '700', color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', ...style }}>{children}</p>
  );
}

function LegalNotice({ compact }) {
  const { t } = useApp();
  return (
    <div className="flex gap-3 items-start p-4 rounded-xl" role="note" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
      <span style={{ color: 'var(--text-tertiary)', marginTop: '1px' }}><Icon.Info size={16} /></span>
      <div>
        {!compact && <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>{t.disclaimer.title}</p>}
        <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{t.disclaimer.short}</p>
      </div>
    </div>
  );
}

// ============================================================
// HOME VIEW
// ============================================================

function HomeView({ setActiveView, navigate }) {
  const { t, data } = useApp();
  const caseCount = Object.keys(data.cases).length;
  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: SERIF }}>
        We The People
      </h1>
      <p className="fade-in-up visible" style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginTop: '2px', letterSpacing: '0.02em' }}>
        {t.tagline}
      </p>

      {/* Documents */}
      <h2 className="fade-in-up" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontFamily: SERIF }}>
        {t.foundingDocs}
      </h2>
      <div className="grid grid-cols-2 gap-4 fade-in-up">
        {[
          { id: 'declaration', title: t.docs.declaration.title, sub: t.docs.declaration.sub, sections: t.docs.declaration.count(data.declaration.sections.length) },
          { id: 'constitution', title: t.docs.constitution.title, sub: t.docs.constitution.sub, sections: t.docs.constitution.count(data.constitution.articles.length) },
          { id: 'bill-of-rights', title: t.docs['bill-of-rights'].title, sub: t.docs['bill-of-rights'].sub, sections: t.docs['bill-of-rights'].count() },
          { id: 'amendments', title: t.docs.amendments.title, sub: t.docs.amendments.sub, sections: t.docs.amendments.count(data.laterAmendments.amendments.length) },
        ].map(doc => (
          <button
            key={doc.id}
            onClick={() => navigate({ view: 'library', doc: doc.id })}
            className="text-left rounded-2xl overflow-hidden border flex flex-col justify-start"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div style={{ width: '100%' }}><DocCover id={doc.id} label={doc.sub} /></div>
            <div className="p-3 flex-1 flex flex-col" style={{ width: '100%' }}>
              <p style={{ fontFamily: SERIF, fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.3' }}>{doc.title}</p>
              <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: 'auto', paddingTop: '6px' }}>{doc.sections}</p>
            </div>
          </button>
        ))}
      </div>

      {data.unratified && (
        <button
          onClick={() => navigate({ view: 'library', doc: 'unratified' })}
          className="w-full mt-4 rounded-2xl overflow-hidden border text-left flex items-stretch fade-in-up"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
        >
          <div className="flex-shrink-0" style={{ width: '96px' }}>
            <DocCover id="unratified" height={80} compact />
          </div>
          <div className="p-3 flex-1 flex flex-col justify-center">
            <p style={{ fontFamily: SERIF, fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.3' }}>{t.docs.unratified.title}</p>
            <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{t.docs.unratified.sub} · {t.docs.unratified.count(data.unratified.amendments.length)}</p>
          </div>
        </button>
      )}

      {/* Know Your Rights Quick Access */}
      <h2 className="fade-in-up" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontFamily: SERIF }}>
        {t.knowYourRights}
      </h2>
      <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 fade-in-up">
        {data.situations.slice(0, 6).map(s => (
          <button
            key={s.id}
            onClick={() => navigate({ view: 'rights', scenario: s.id })}
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
      <button onClick={() => navigate({ view: 'rights' })} className="mt-2 text-xs font-semibold flex items-center gap-1" style={{ color: 'var(--navy)' }}>
        {t.seeAllScenarios(data.situations.length)} <Icon.ChevronRight size={12} />
      </button>

      {/* Case library entry */}
      <h2 className="fade-in-up" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontFamily: SERIF }}>
        {t.landmarkCases}
      </h2>
      <button
        onClick={() => setActiveView('cases')}
        className="w-full p-4 rounded-2xl border text-left flex items-center gap-4 fade-in-up"
        style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--gold-lighter)', color: 'var(--gold-text)' }}>
          <Icon.Gavel />
        </div>
        <div className="flex-1">
          <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{t.casesTitle}</p>
          <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{t.browseCases(caseCount)}</p>
        </div>
        <span style={{ color: 'var(--text-tertiary)' }}><Icon.ChevronRight /></span>
      </button>
    </div>
  );
}

// ============================================================
// LIBRARY VIEW (continuous document reader)
// ============================================================

function LibraryView({ activeDoc, selectDoc, onOpenCase, scrollAnchor, clearScrollAnchor }) {
  const { t, data } = useApp();
  const [view, setViewState] = useState('original');
  const [tocOpen, setTocOpen] = useState(false);
  const [textStep, setTextStep] = useState(1);

  useEffect(() => {
    const saved = storageGet('wtp-view');
    if (saved === 'original' || saved === 'translated' || saved === 'both') setViewState(saved);
    const size = parseInt(storageGet('wtp-text'), 10);
    if (size >= 0 && size < TEXT_SCALES.length) setTextStep(size);
  }, []);
  const setView = (v) => { setViewState(v); storageSet('wtp-view', v); };
  const changeText = (delta) => {
    const next = Math.min(TEXT_SCALES.length - 1, Math.max(0, textStep + delta));
    setTextStep(next);
    storageSet('wtp-text', String(next));
  };

  const sections = useMemo(() => getDocSections(activeDoc, data, t), [activeDoc, data, t]);
  const meta = useMemo(() => getDocMeta(activeDoc, data, t), [activeDoc, data, t]);

  // Deep links: scroll to a section once the document has rendered
  useEffect(() => {
    if (!scrollAnchor) return;
    const timer = setTimeout(() => {
      const el = document.getElementById(scrollAnchor);
      if (el) {
        // Jump straight there (a long smooth scroll is slow) and flash the target
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        el.classList.remove('flash-target');
        void el.offsetWidth;
        el.classList.add('flash-target');
      }
      clearScrollAnchor();
    }, 120);
    return () => clearTimeout(timer);
  }, [scrollAnchor, activeDoc, clearScrollAnchor]);

  const scrollToSection = (anchor) => {
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTocOpen(false);
    }
  };

  const signerCount = meta.signers ? (meta.signers.states || []).reduce((n, g) => n + g.names.length, 0) + (meta.signers.president ? 1 : 0) : 0;
  // The parchment lists a few states in two places (e.g. Hancock signed apart from
  // the rest of Massachusetts); show each state once, in order of first appearance.
  const signerGroups = useMemo(() => {
    const groups = [];
    (meta.signers?.states || []).forEach(g => {
      const existing = groups.find(x => x.state === g.state);
      if (existing) existing.names.push(...g.names); else groups.push({ state: g.state, names: [...g.names] });
    });
    return groups;
  }, [meta.signers]);

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      {/* Document selector tabs */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1" role="tablist">
        {docIds(data).map(id => (
          <button
            key={id}
            role="tab"
            aria-selected={activeDoc === id}
            onClick={() => { selectDoc(id); setTocOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: activeDoc === id ? 'var(--navy)' : 'var(--bg-secondary)',
              color: activeDoc === id ? 'var(--on-navy)' : 'var(--text-secondary)',
            }}
          >
            {t.docTabs[id]}
          </button>
        ))}
      </div>

      {/* Cover banner */}
      {DOC_COVERS[activeDoc] && (
        <div className="mt-5 rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-sm)' }}>
          <DocCover id={activeDoc} height={128} />
        </div>
      )}

      {/* Document title */}
      <div className="text-center mt-6 mb-2">
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: SERIF, lineHeight: '1.3', textWrap: 'balance' }}>
          {meta.title}
        </h1>
        {meta.date && <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{meta.date}</p>}
        {meta.summary && (
          <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--text-secondary)', marginTop: '12px', fontStyle: 'italic', maxWidth: '34em', marginLeft: 'auto', marginRight: 'auto' }}>
            {meta.summary}
          </p>
        )}
      </div>

      {/* Dot divider */}
      <div className="dot-indicator my-3" aria-hidden="true">
        <span className={view === 'original' ? 'active' : ''} />
        <span className={view === 'translated' ? 'active' : ''} />
        <span className={view === 'both' ? 'active' : ''} />
      </div>

      {/* View toggle */}
      <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ background: 'var(--bg-secondary)' }} role="radiogroup">
        {['original', 'translated', 'both'].map(id => (
          <button
            key={id}
            role="radio"
            aria-checked={view === id}
            onClick={() => setView(id)}
            className="flex-1 py-2 rounded-lg text-xs font-medium"
            style={{
              background: view === id ? 'var(--bg-card)' : 'transparent',
              color: view === id ? 'var(--text-primary)' : 'var(--text-tertiary)',
              boxShadow: view === id ? 'var(--shadow-sm)' : 'none',
            }}
          >
            {t.views[id]}
          </button>
        ))}
      </div>

      {/* Text size */}
      <div className="flex items-center justify-end gap-1 mb-3" role="group" aria-label={t.textSize}>
        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginRight: '6px' }}>{t.textSize}</span>
        <button onClick={() => changeText(-1)} disabled={textStep === 0} aria-label={t.textSmaller}
          className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold"
          style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '12px', opacity: textStep === 0 ? 0.4 : 1 }}>A</button>
        <button onClick={() => changeText(1)} disabled={textStep === TEXT_SCALES.length - 1} aria-label={t.textLarger}
          className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold"
          style={{ background: 'var(--bg-secondary)', color: 'var(--text-secondary)', fontSize: '16px', opacity: textStep === TEXT_SCALES.length - 1 ? 0.4 : 1 }}>A</button>
      </div>

      {/* Table of Contents (collapsible) */}
      <div className="mb-6 rounded-xl border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
        <button
          onClick={() => setTocOpen(!tocOpen)}
          aria-expanded={tocOpen}
          className="w-full flex items-center justify-between p-4 text-sm font-semibold"
          style={{ color: 'var(--navy)' }}
        >
          <span>{t.toc(sections.length)}</span>
          <Icon.ChevronDown open={tocOpen} />
        </button>
        <div className="card-expand" style={{ maxHeight: tocOpen ? '600px' : '0', opacity: tocOpen ? 1 : 0 }}>
          {tocOpen && (
            <div className="px-4 pb-4 space-y-1 overflow-y-auto" style={{ maxHeight: '400px' }}>
              {sections.map((s, i) => (
                <div key={i}>
                  {s._article && (
                    <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.05em', padding: '10px 12px 2px' }}>
                      {s._docLabel}{s._article.title ? `: ${s._article.title}` : ''}
                    </p>
                  )}
                  <button
                    onClick={() => scrollToSection(sectionAnchor(s) || `section-${i}`)}
                    className="w-full text-left py-2 px-3 rounded-lg text-sm flex items-center gap-2 hover:opacity-80"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {s._isAmendment && s.number && (
                      <span className="amendment-badge" style={{ width: '22px', height: '22px', minWidth: '22px', fontSize: '9px' }}>{s.number}</span>
                    )}
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</span>
                  </button>
                </div>
              ))}
              {meta.signers && (
                <button onClick={() => scrollToSection('signers')} className="w-full text-left py-2 px-3 rounded-lg text-sm hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
                  {t.signers}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Declaration heading ("In Congress, July 4, 1776") */}
      {meta.heading && (
        <div className="text-center mb-8">
          {(view === 'original' || view === 'both') && (
            <p style={{ fontFamily: SERIF, fontSize: '14px', lineHeight: '1.8', color: 'var(--text-primary)', whiteSpace: 'pre-line', fontStyle: 'italic' }}>{meta.heading}</p>
          )}
          {(view === 'translated' || view === 'both') && meta.headingTranslation && (
            <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--text-secondary)', marginTop: view === 'both' ? '8px' : 0 }}>{meta.headingTranslation}</p>
          )}
        </div>
      )}

      {/* Continuous document content */}
      <div style={{ zoom: TEXT_SCALES[textStep] }}>
        {sections.map((section, idx) => (
          <ContinuousSection key={`${activeDoc}-${idx}`} section={section} idx={idx} view={view} isFirst={idx === 0} onOpenCase={onOpenCase} />
        ))}
      </div>

      {/* Signatures */}
      {meta.signers && (
        <div id="signers" style={{ scrollMarginTop: 'calc(env(safe-area-inset-top, 0px) + 72px)' }}>
          <div className="flex items-center justify-center gap-4 my-10" aria-hidden="true">
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
            <span style={{ color: 'var(--gold)', fontSize: '10px', letterSpacing: '4px' }}>&#9733; &#9733; &#9733;</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          </div>
          <h2 className="text-center" style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: SERIF }}>{t.signers}</h2>
          <p className="text-center" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '4px', marginBottom: '20px' }}>{t.signersCount(signerCount)}</p>
          {meta.signers.president && (
            <div className="text-center mb-5">
              <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{t.presidentLabel}</p>
              <p style={{ fontFamily: SERIF, fontSize: '15px', color: 'var(--text-primary)', marginTop: '2px' }}>{meta.signers.president}</p>
            </div>
          )}
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }}>
            {signerGroups.map((g, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}>
                <p style={{ fontSize: '10px', fontWeight: '700', color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>{g.state}</p>
                {g.names.map((n, j) => (
                  <p key={j} style={{ fontFamily: SERIF, fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>{n}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// CASE MODAL (rich court case popup)
// ============================================================

function CaseModal({ caseKey, onClose, onOpenCase, navigate }) {
  const { t, lang, data, citations } = useApp();
  const closeRef = useRef(null);
  useModal(onClose, closeRef);
  const caseData = data.cases[caseKey];
  const bodyRef = useRef(null);
  useEffect(() => { if (bodyRef.current) bodyRef.current.scrollTop = 0; }, [caseKey]);
  if (!caseData) return null;

  const docType = caseData.type || 'case';
  const labels = t.caseTypes[docType] || t.caseTypes.case;
  const citedIn = (citations[caseKey] || []).slice(0, 12);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(15,22,35,0.55)', backdropFilter: 'blur(4px)' }} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-title"
        className="relative w-full max-w-md rounded-t-2xl sm:rounded-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-xl)', maxHeight: '85vh', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="amendment-badge" style={{ minWidth: '24px', height: '24px', fontSize: '9px', padding: '0 4px', borderRadius: '12px' }}>{fmtBadge(caseData.amendment, lang)}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{caseData.year}</span>
                {docType !== 'case' && (
                  <span style={{ fontSize: '9px', fontWeight: '700', color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.05em', background: 'var(--crimson-bg)', padding: '2px 6px', borderRadius: '4px' }}>
                    {labels.badge}
                  </span>
                )}
              </div>
              <h3 id="case-title" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: SERIF, lineHeight: '1.3' }}>
                {caseData.name}
              </h3>
              <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px', fontFamily: MONO }}>{caseData.citation}</p>
            </div>
            <button ref={closeRef} onClick={onClose} className="p-1 rounded-lg" style={{ color: 'var(--text-tertiary)' }} aria-label={t.a11y.close}>
              <Icon.X />
            </button>
          </div>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="p-5 overflow-y-auto" style={{ maxHeight: 'calc(85vh - 100px)' }}>
          <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            <TextWithCases text={caseData.summary} onOpenCase={onOpenCase} exclude={caseKey} />
          </p>

          <div className="p-4 rounded-xl mb-3" style={{ background: 'var(--navy-bg)', border: '1px solid var(--navy-lighter)' }}>
            <SectionLabel color="var(--navy)" style={{ marginBottom: '6px' }}>{labels.outcome}</SectionLabel>
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
              <TextWithCases text={caseData.outcome} onOpenCase={onOpenCase} exclude={caseKey} />
            </p>
          </div>

          <div className="p-4 rounded-xl mb-4" style={{ background: 'var(--gold-bg)', border: '1px solid var(--gold)' }}>
            <SectionLabel color="var(--gold-text)" style={{ marginBottom: '6px' }}>{t.whyMatters}</SectionLabel>
            <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
              <TextWithCases text={caseData.significance} onOpenCase={onOpenCase} exclude={caseKey} />
            </p>
          </div>

          {citedIn.length > 0 && (
            <div className="mb-4">
              <SectionLabel>{t.citedIn}</SectionLabel>
              <div className="space-y-1">
                {citedIn.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => { if (c.target.caseKey) { onOpenCase(c.target.caseKey); } else { onClose(); navigate(c.target); } }}
                    className="w-full text-left py-2 px-3 rounded-lg flex items-center justify-between gap-2"
                    style={{ background: 'var(--bg-secondary)', fontSize: '12px', color: 'var(--text-secondary)' }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.label}</span>
                    <span style={{ color: 'var(--text-tertiary)', flexShrink: 0 }}><Icon.ChevronRight size={12} /></span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <a
            href={caseData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm"
            style={{ background: 'var(--navy)', color: 'var(--on-navy)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            {labels.link}
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
  const { data } = useApp();
  if (!data.cases[caseKey] || !onOpenCase) return <span>{children || caseKey}</span>;

  return (
    <button
      onClick={(e) => { e.stopPropagation(); onOpenCase(caseKey); }}
      className="inline text-left"
      style={{
        color: 'var(--navy)',
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textUnderlineOffset: '3px',
        textDecorationColor: 'var(--navy-light)',
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

function TextWithCases({ text, onOpenCase, exclude }) {
  const { data, caseRegex } = useApp();
  if (!text) return null;
  if (!onOpenCase || !caseRegex) return <>{text}</>;

  const parts = text.split(caseRegex);
  if (parts.length === 1) return <>{text}</>;

  return (
    <>
      {parts.map((part, i) =>
        data.cases[part] && part !== exclude ? (
          <CaseReference key={i} caseKey={part} onOpenCase={onOpenCase}>{part}</CaseReference>
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

function findAmendmentData(amendmentNum, data) {
  const num = parseInt(amendmentNum);
  if (isNaN(num)) return null;
  if (num >= 1 && num <= 10) return data.billOfRights.amendments.find(a => a.number === num);
  return data.laterAmendments.amendments.find(a => a.number === num);
}

// ============================================================
// CONTINUOUS SECTION (renders inline in the document flow)
// ============================================================

function ContinuousSection({ section, idx, view, isFirst, onOpenCase }) {
  const { t, data } = useApp();
  const [showDetails, setShowDetails] = useState(false);
  const anchor = sectionAnchor(section) || `section-${idx}`;
  const hasDetails = section.rights || section.examples?.length > 0 || section.references?.length > 0;

  return (
    <div id={anchor} style={{ scrollMarginTop: 'calc(env(safe-area-inset-top, 0px) + 72px)', borderRadius: '12px' }}>
      {/* Section divider (not on first section) */}
      {!isFirst && (
        <div className="flex items-center justify-center gap-4 my-10" aria-hidden="true">
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ color: 'var(--gold)', fontSize: '10px', letterSpacing: '4px' }}>&#9733; &#9733; &#9733;</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>
      )}

      {/* Article introduction (first section of each article) */}
      {section._article && (section._article.title || section._article.summary) && (
        <div className="text-center mb-8 p-5 rounded-2xl" style={{ background: 'var(--navy-bg)', border: '1px solid var(--navy-lighter)' }}>
          <p style={{ fontSize: '11px', fontWeight: '800', color: 'var(--crimson)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{section._docLabel}</p>
          {section._article.title && (
            <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: SERIF, lineHeight: '1.35', marginTop: '4px', textWrap: 'balance' }}>{section._article.title}</h2>
          )}
          {section._article.summary && (
            <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--text-secondary)', marginTop: '8px' }}>{section._article.summary}</p>
          )}
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
          {t.amendmentWord(section.number)}
        </p>
      )}

      {/* Section title */}
      <h2 className="text-center" style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: SERIF, lineHeight: '1.35', marginBottom: '4px', textWrap: 'balance' }}>
        {section.title}
      </h2>

      {section.history ? (
        <p className="text-center" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '4px', lineHeight: '1.5' }}>{section.history}</p>
      ) : section.year && (
        <p className="text-center" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginBottom: '4px' }}>{t.ratified(section.year)}</p>
      )}

      {/* Small dot divider under title */}
      <div className="dot-indicator my-4" aria-hidden="true">
        <span style={{ background: 'var(--border)' }} />
        <span style={{ background: 'var(--crimson)', width: '6px' }} />
        <span style={{ background: 'var(--border)' }} />
      </div>

      {/* "Changed by" note */}
      {section.note && (
        <div className="flex gap-3 items-start p-3 rounded-xl mb-5" role="note" style={{ background: 'var(--gold-bg)', border: '1px solid var(--gold)' }}>
          <span style={{ color: 'var(--gold-text)', marginTop: '1px' }}><Icon.Info size={15} /></span>
          <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--text-primary)' }}>
            <strong style={{ color: 'var(--gold-text)' }}>{t.note}: </strong>
            <TextWithCases text={section.note} onOpenCase={onOpenCase} />
          </p>
        </div>
      )}

      {/* Content */}
      {view === 'original' && (
        <div className={isFirst ? 'drop-cap' : ''} lang="en" style={{ fontFamily: SERIF, fontSize: '15px', lineHeight: '1.9', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
          {section.original}
        </div>
      )}

      {view === 'translated' && (
        <div className={isFirst ? 'drop-cap' : ''} style={{ fontSize: '15px', lineHeight: '1.9', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
          {section.translation}
        </div>
      )}

      {view === 'both' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl" style={{ background: 'var(--bg-secondary)' }}>
            <SectionLabel>{t.originalText}</SectionLabel>
            <p lang="en" style={{ fontFamily: SERIF, fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>{section.original}</p>
          </div>
          <div className="p-4 rounded-xl" style={{ background: 'var(--crimson-lighter)', border: '1px solid rgba(178,34,52,0.15)' }}>
            <SectionLabel color="var(--crimson)">{t.plainLabel}</SectionLabel>
            <p style={{ fontSize: '14px', lineHeight: '1.8', color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>{section.translation}</p>
          </div>
        </div>
      )}

      {/* Pull quote from rights */}
      {section.rights && (
        <div className="pull-quote mt-6">
          "{section.rights.length > 160 ? section.rights.slice(0, 160).replace(/\s+\S*$/, '') + '...' : section.rights}"
        </div>
      )}

      {/* Expandable details */}
      {hasDetails && (
        <>
          <button
            onClick={() => setShowDetails(!showDetails)}
            aria-expanded={showDetails}
            className="flex items-center gap-2 mx-auto mt-5 px-4 py-2.5 rounded-xl font-medium text-xs border"
            style={{
              background: showDetails ? 'var(--navy)' : 'var(--bg-card)',
              color: showDetails ? 'var(--on-navy)' : 'var(--navy)',
              borderColor: showDetails ? 'var(--navy)' : 'var(--border)',
            }}
          >
            <Icon.ChevronDown open={showDetails} />
            {showDetails ? t.hideDetails : t.showDetails}
          </button>

          <div className="card-expand" style={{ maxHeight: showDetails ? '6000px' : '0', opacity: showDetails ? 1 : 0 }}>
            {showDetails && (
              <div className="mt-4 space-y-4 stagger-in">
                {section.rights && (
                  <div className="p-4 rounded-xl border" style={{ background: 'var(--gold-bg)', borderColor: 'var(--gold)', borderWidth: '1px' }}>
                    <div className="stars-decoration" />
                    <SectionLabel color="var(--gold-text)">{section._unratified ? t.wouldHaveDone : t.protectsYou}</SectionLabel>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                      <TextWithCases text={section.rights} onOpenCase={onOpenCase} />
                    </p>
                  </div>
                )}

                {section.examples?.length > 0 && (
                  <div className="p-4 rounded-xl border" style={{ background: 'var(--crimson-bg)', borderColor: 'rgba(178,34,52,0.2)', borderWidth: '1px' }}>
                    <SectionLabel color="var(--crimson)" style={{ marginBottom: '10px' }}>{section._unratified ? t.whatHappened : t.infringements}</SectionLabel>
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
                    <SectionLabel style={{ marginBottom: '10px' }}>{t.legalRefs}</SectionLabel>
                    {section.references.map((ref, i) => {
                      // A reference that starts with a case name gets a card; others link any case names inline
                      const caseMatch = ref.text.match(/^(.+?\(\d{4}\))/);
                      const caseKey = caseMatch ? caseMatch[1].trim() : null;
                      const hasCase = caseKey && data.cases[caseKey];
                      const restOfText = hasCase ? ref.text.slice(caseMatch[0].length) : null;

                      return (
                        <div key={i} className="mb-3 last:mb-0 p-3 rounded-lg" style={{ fontSize: '12px', background: hasCase ? 'var(--bg-card)' : 'transparent', border: hasCase ? '1px solid var(--border-light)' : 'none' }}>
                          {hasCase ? (
                            <>
                              <CaseReference caseKey={caseKey} onOpenCase={onOpenCase}>
                                <span style={{ fontWeight: '600' }}>{caseKey}</span>
                              </CaseReference>
                              {restOfText && <span style={{ color: 'var(--text-secondary)' }}><TextWithCases text={restOfText} onOpenCase={onOpenCase} /></span>}
                            </>
                          ) : (
                            <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}><TextWithCases text={ref.text} onOpenCase={onOpenCase} /></span>
                          )}
                          {ref.source && <span style={{ color: 'var(--text-tertiary)', display: 'block', marginTop: '2px', fontFamily: MONO, fontSize: '10px' }}>{ref.source}</span>}
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
// DIGITAL RED CARD (full-screen, shown through a window/door)
// ============================================================

function RedCardModal({ card, scenarioId, onClose }) {
  const { t } = useApp();
  const closeRef = useRef(null);
  useModal(onClose, closeRef);

  // Keep the screen awake while the card is displayed (where supported)
  useEffect(() => {
    let lock = null;
    (async () => { try { lock = await navigator.wakeLock?.request('screen'); } catch (e) { /* not supported */ } })();
    return () => { try { lock?.release(); } catch (e) { /* ignore */ } };
  }, []);

  // The card face stays in English so the officer or agent can read it
  const audience = card.to || (scenarioId === 'ice-at-door' || scenarioId === 'immigration-encounter' || scenarioId === 'peaceful-carry' ? 'To the Agent' : 'To the Officer');

  return (
    <div role="dialog" aria-modal="true" aria-label={card.label || t.showCard} className="fixed inset-0 z-[200] flex flex-col" style={{ background: 'linear-gradient(160deg, #b22234 0%, #7d1622 100%)' }}>
      {/* Warning: never hand over the phone */}
      <div style={{ background: '#1b2a4a', paddingTop: 'calc(env(safe-area-inset-top, 0px) + 10px)', paddingBottom: '10px' }} className="px-4">
        <div className="max-w-md mx-auto flex items-start gap-3">
          <span style={{ flexShrink: 0, marginTop: '1px' }}><Icon.Alert size={20} color="#e8c55a" /></span>
          <p style={{ fontSize: '12px', fontWeight: '700', color: '#e8c55a', lineHeight: '1.45', letterSpacing: '0.01em' }}>
            {t.cardWarning}
          </p>
          <button ref={closeRef} onClick={onClose} aria-label={t.a11y.close} style={{ color: 'rgba(255,255,255,0.9)', flexShrink: 0, padding: '2px' }}>
            <Icon.X />
          </button>
        </div>
      </div>

      {/* Card face */}
      <div className="flex-1 overflow-y-auto px-6 py-6" onClick={onClose} style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)' }}>
        <div className="max-w-md mx-auto">
          {card.label && (
            <p style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center', marginBottom: '6px' }}>{card.label}</p>
          )}
          <p lang="en" style={{ fontSize: '11px', fontWeight: '800', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.14em', textAlign: 'center' }}>
            {audience}
          </p>
          <div className="dot-indicator my-3" aria-hidden="true">
            <span style={{ background: 'rgba(255,255,255,0.35)' }} />
            <span style={{ background: '#e8c55a', width: '18px', borderRadius: '3px' }} />
            <span style={{ background: 'rgba(255,255,255,0.35)' }} />
          </div>
          <p lang="en" style={{ fontFamily: SERIF, fontSize: '19px', lineHeight: '1.65', color: 'white', fontWeight: '700', textShadow: '0 1px 3px rgba(0,0,0,0.25)' }}>
            {card.statement}
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.92)', marginTop: '20px', textAlign: 'center', fontWeight: '600', letterSpacing: '0.02em' }}>
            {card.footer}
          </p>

          {/* Plain-language rendering for the holder (Spanish mode) */}
          {card.statementTranslation && (
            <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(0,0,0,0.22)' }}>
              <p style={{ fontSize: '10px', fontWeight: '800', color: '#e8c55a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                {t.cardMeaning}
              </p>
              <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'rgba(255,255,255,0.95)', fontStyle: 'italic' }}>
                {card.statementTranslation}
              </p>
            </div>
          )}
          <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', marginTop: '24px', textAlign: 'center' }}>{t.cardDisclaimer}</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// RIGHTS GUIDE (enriched with amendment content + case links)
// ============================================================

function RightsView({ onOpenCase, navigate, activeId, openScenario }) {
  const { t, lang, data } = useApp();
  const [expandedRight, setExpandedRight] = useState(null);
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = useCallback(() => setCardOpen(false), []);

  // Look up by id so the open scenario re-renders in the new language on toggle
  const active = activeId ? data.situations.find(s => s.id === activeId) : null;
  useEffect(() => { setExpandedRight(null); setCardOpen(false); }, [activeId]);

  if (active) {
    const referencedAmendments = [...new Set(active.rights.map(r => r.amendment))];

    return (
      <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
        {cardOpen && active.card && <RedCardModal card={active.card} scenarioId={active.id} onClose={closeCard} />}
        <div className="flex items-center gap-4 mb-2">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>
            <SituationIcon icon={active.icon} />
          </div>
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: SERIF, lineHeight: '1.3' }}>{active.title}</h2>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{active.description}</p>
          </div>
        </div>

        {/* Amendment chips jump to the amendment text */}
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {referencedAmendments.map(a => {
            const target = amendmentTarget(a);
            return target ? (
              <button key={a} onClick={() => navigate(target)} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>
                {t.amendmentChip(a)}
              </button>
            ) : (
              <span key={a} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>{t.amendmentChip(a)}</span>
            );
          })}
        </div>

        {/* Digital red card launcher */}
        {active.card && (
          <button
            onClick={() => setCardOpen(true)}
            className="w-full mb-6 p-4 rounded-2xl text-left flex items-center gap-4"
            style={{ background: 'linear-gradient(145deg, #b22234 0%, #8b1a28 100%)', boxShadow: 'var(--shadow-lg)' }}
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 15h4M7 11h10"/>
              </svg>
            </div>
            <div className="flex-1">
              <p style={{ fontSize: '15px', fontWeight: '800', color: 'white', letterSpacing: '0.01em' }}>{active.card.label ? t.showNamedCard(active.card.label) : t.showCard}</p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.88)', marginTop: '2px', lineHeight: '1.4' }}>{active.card.instruction}</p>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}><Icon.ChevronRight /></span>
          </button>
        )}

        <SectionLabel style={{ marginBottom: '12px' }}>{t.yourRights}</SectionLabel>
        <div className="space-y-3 mb-8">
          {active.rights.map((r, i) => {
            const isExpanded = expandedRight === i;
            const amendmentData = findAmendmentData(r.amendment, data);
            const caseData = data.cases[r.ref];

            return (
              <div key={i} className="rounded-xl border overflow-hidden" style={{ background: 'var(--bg-card)', borderColor: isExpanded ? 'var(--navy)' : 'var(--border)', transition: 'border-color 0.2s' }}>
                <button onClick={() => setExpandedRight(isExpanded ? null : i)} aria-expanded={isExpanded} className="w-full text-left p-4">
                  <div className="flex items-start gap-3">
                    <div className="amendment-badge" style={{ minWidth: '28px', height: '28px', fontSize: '10px', marginTop: '1px', padding: '0 4px', borderRadius: '14px' }}>{fmtBadge(r.amendment, lang)}</div>
                    <div className="flex-1">
                      <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--text-primary)' }}>{r.right}</p>
                      {caseData ? (
                        <p style={{ fontSize: '11px', fontWeight: '600', color: 'var(--navy)', marginTop: '6px' }}>{caseData.name} ({caseData.year})</p>
                      ) : (
                        <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '4px', fontStyle: 'italic' }}>{r.ref}</p>
                      )}
                    </div>
                    <div style={{ color: 'var(--text-tertiary)', flexShrink: 0, marginTop: '2px' }}>
                      <Icon.ChevronDown open={isExpanded} />
                    </div>
                  </div>
                </button>

                <div className="card-expand" style={{ maxHeight: isExpanded ? '1200px' : '0', opacity: isExpanded ? 1 : 0 }}>
                  {isExpanded && (
                    <div className="px-4 pb-4 space-y-3">
                      {caseData && (
                        <div className="p-3 rounded-lg" style={{ background: 'var(--bg-secondary)' }}>
                          <SectionLabel style={{ marginBottom: '6px' }}>{t.keyCase}</SectionLabel>
                          <p style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                            {caseData.summary.length > 200 ? caseData.summary.slice(0, 200).replace(/\s+\S*$/, '') + '...' : caseData.summary}
                          </p>
                          <button onClick={(e) => { e.stopPropagation(); onOpenCase(r.ref); }} className="mt-2 text-xs font-semibold flex items-center gap-1" style={{ color: 'var(--navy)' }}>
                            {t.readCase} <Icon.ChevronRight size={12} />
                          </button>
                        </div>
                      )}

                      {amendmentData && (
                        <div className="p-3 rounded-lg" style={{ background: 'var(--gold-bg)', border: '1px solid var(--gold)' }}>
                          <SectionLabel color="var(--gold-text)" style={{ marginBottom: '6px' }}>{t.fromAmendment(r.amendment)}</SectionLabel>
                          <p lang="en" style={{ fontSize: '12px', lineHeight: '1.6', color: 'var(--text-secondary)', fontFamily: SERIF, fontStyle: 'italic' }}>
                            "{amendmentData.original.length > 200 ? amendmentData.original.slice(0, 200).replace(/\s+\S*$/, '') + '...' : amendmentData.original}"
                          </p>
                          <button
                            onClick={(e) => { e.stopPropagation(); navigate(amendmentTarget(r.amendment)); }}
                            className="mt-2 text-xs font-semibold flex items-center gap-1"
                            style={{ color: 'var(--gold-text)' }}
                          >
                            {t.readAmendment} <Icon.ChevronRight size={12} />
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
          <SectionLabel color="var(--gold-text)" style={{ marginBottom: '12px' }}>{t.practicalTips}</SectionLabel>
          {active.tips.map((tip, i) => (
            <div key={i} className="flex gap-3 items-start mb-2.5 last:mb-0">
              <span style={{ color: 'var(--gold)', fontSize: '14px', lineHeight: '1.4' }} aria-hidden="true">&#9733;</span>
              <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-primary)' }}>{tip}</p>
            </div>
          ))}
        </div>

        <div className="mt-6"><LegalNotice /></div>

        {/* Related documents CTA */}
        <div className="mt-6 p-4 rounded-xl text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>{t.fullPicture}</p>
          <button
            onClick={() => navigate(amendmentTarget(active.rights[0]?.amendment) || { view: 'library', doc: 'constitution' })}
            className="px-4 py-2 rounded-xl text-sm font-semibold"
            style={{ background: 'var(--navy)', color: 'var(--on-navy)' }}
          >
            {t.readSource}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: SERIF }}>
        {t.knowYourRights}
      </h1>
      <p className="fade-in-up visible" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.6' }}>
        {t.rightsIntro}
      </p>

      <div className="mt-4"><LegalNotice compact /></div>

      <p className="fade-in-up visible" style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '16px', marginBottom: '8px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {t.scenariosCovered(data.situations.length)}
      </p>

      <div className="space-y-3 stagger-in">
        {data.situations.map(s => (
          <button
            key={s.id}
            onClick={() => { openScenario(s.id); window.scrollTo({ top: 0, behavior: 'instant' }); }}
            className="w-full text-left p-4 rounded-2xl border flex items-center gap-4"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-sm)' }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--navy-lighter)', color: 'var(--navy)' }}>
              <SituationIcon icon={s.icon} />
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{s.title}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                {t.rightsCovered(s.rights.length)}{s.card ? ` · ${t.hasCard}` : ''}
              </p>
            </div>
            <span style={{ color: 'var(--text-tertiary)' }}><Icon.ChevronRight /></span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// CASE LIBRARY VIEW
// ============================================================

function CasesView({ onOpenCase }) {
  const { t, lang, data } = useApp();
  const [filter, setFilter] = useState('');
  const [badge, setBadge] = useState(null);
  const [sort, setSort] = useState('az');

  const all = useMemo(() => Object.entries(data.cases)
    .map(([key, c]) => ({ key, ...c, folded: fold(`${key} ${c.citation} ${c.summary}`) }))
    .sort((a, b) => a.name.replace(/^The /, '').localeCompare(b.name.replace(/^The /, ''), lang, { sensitivity: 'base' })), [data.cases, lang]);

  const badges = useMemo(() => {
    const present = new Set(all.map(c => c.amendment));
    return BADGE_ORDER.filter(b => present.has(b));
  }, [all]);

  const shown = useMemo(() => {
    const terms = fold(filter).split(/\s+/).filter(Boolean);
    const list = all.filter(c => (!badge || c.amendment === badge) && terms.every(term => c.folded.includes(term)));
    return sort === 'newest' ? [...list].sort((a, b) => b.year - a.year) : list;
  }, [all, filter, badge, sort]);

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: SERIF }}>{t.casesTitle}</h1>
      <p className="fade-in-up visible" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.6' }}>{t.casesSubtitle(all.length)}</p>

      <div className="relative mt-5 mb-3">
        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }}><Icon.Search size={16} /></div>
        <input
          id="case-filter"
          type="search"
          placeholder={t.filterCases}
          aria-label={t.filterCases}
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border outline-none"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)', fontSize: '14px' }}
        />
      </div>

      <div className="flex gap-1.5 overflow-x-auto hide-scrollbar pb-2 mb-3">
        {[null, ...badges].map(b => (
          <button
            key={b || 'all'}
            onClick={() => setBadge(b)}
            aria-pressed={badge === b}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: badge === b ? 'var(--navy)' : 'var(--bg-secondary)', color: badge === b ? 'var(--on-navy)' : 'var(--text-secondary)' }}
          >
            {b ? t.amendmentChip(b) : t.allFilter}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-3">
        <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontWeight: '600' }}>{t.casesShown(shown.length)}</p>
        <div className="flex gap-1 p-0.5 rounded-lg" style={{ background: 'var(--bg-secondary)' }} role="radiogroup" aria-label={t.sortLabel}>
          {[['az', t.sortAZ], ['newest', t.sortNewest]].map(([id, label]) => (
            <button key={id} role="radio" aria-checked={sort === id} onClick={() => setSort(id)} className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{ background: sort === id ? 'var(--bg-card)' : 'transparent', color: sort === id ? 'var(--text-primary)' : 'var(--text-tertiary)', boxShadow: sort === id ? 'var(--shadow-sm)' : 'none' }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {shown.map(c => (
          <button
            key={c.key}
            onClick={() => onOpenCase(c.key)}
            className="w-full text-left p-4 rounded-xl border flex gap-3 items-start"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <span className="amendment-badge" style={{ minWidth: '30px', height: '30px', fontSize: '9px', padding: '0 4px', borderRadius: '15px' }}>{fmtBadge(c.amendment, lang)}</span>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.35' }}>{c.name}</p>
              <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: MONO, marginTop: '2px' }}>
                {c.year} · {c.citation}{c.type && c.type !== 'case' ? ` · ${t.caseTypes[c.type]?.badge || ''}` : ''}
              </p>
              <p style={{ fontSize: '12px', lineHeight: '1.55', color: 'var(--text-secondary)', marginTop: '4px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{c.summary}</p>
            </div>
          </button>
        ))}
        {shown.length === 0 && <p className="text-center py-8" style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>{t.noCases}</p>}
      </div>
    </div>
  );
}

// ============================================================
// ABOUT VIEW
// ============================================================

function AboutCard({ icon, iconBg, iconColor, title, children }) {
  return (
    <div className="fade-in-up mt-5 p-6 rounded-2xl border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-md)' }}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: iconBg, color: iconColor }}>{icon}</div>
        <h2 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: SERIF }}>{title}</h2>
      </div>
      <div style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>{children}</div>
    </div>
  );
}

function AboutView() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);
  const handleShare = async () => {
    const shareData = {
      title: 'We The People',
      text: t.about.shareText,
      url: 'https://apps.apple.com/us/app/we-the-people-your-rights/id6770393978',
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (err) {
      // user cancelled share
    }
  };

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: SERIF }}>
        {t.about.title}
      </h1>
      <p className="fade-in-up visible" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
        {t.about.sub}
      </p>

      <div className="mt-3" />
      <AboutCard icon={<Icon.Flag />} iconBg="var(--navy)" iconColor="var(--on-navy)" title={t.about.h1}>
        <p>{t.about.p1a}<strong style={{ color: 'var(--text-primary)' }}>We The People</strong>{t.about.p1b}</p>
        <p style={{ marginTop: '14px' }}>{t.about.p2a}<em>{t.about.p2em}</em>{t.about.p2b}</p>
      </AboutCard>

      <AboutCard icon={<Icon.Heart />} iconBg="var(--crimson)" iconColor="var(--on-crimson)" title={t.about.h2}>
        <p>{t.about.p3}</p>
        <p style={{ marginTop: '14px' }}>{t.about.p4}</p>
      </AboutCard>

      <AboutCard icon={<Icon.Info size={18} />} iconBg="var(--bg-tertiary)" iconColor="var(--text-primary)" title={t.about.h4}>
        <p>{t.about.p6}</p>
      </AboutCard>

      <AboutCard icon={<Icon.Book size={18} />} iconBg="var(--navy-lighter)" iconColor="var(--navy)" title={t.about.h5}>
        <p>{t.about.p7}</p>
        <p style={{ marginTop: '10px', fontSize: '12px', color: 'var(--text-tertiary)' }}>{t.about.updated}</p>
      </AboutCard>

      <AboutCard icon={<Icon.Lock />} iconBg="var(--bg-tertiary)" iconColor="var(--text-primary)" title={t.about.h6}>
        <p>{t.about.p8}</p>
      </AboutCard>

      <AboutCard icon={<Icon.Share />} iconBg="var(--gold)" iconColor="var(--on-gold)" title={t.about.h3}>
        <p style={{ marginBottom: '16px' }}>{t.about.p5}</p>
        <button
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold w-full justify-center"
          style={{ background: 'var(--navy)', color: 'var(--on-navy)' }}
        >
          <Icon.Share /> {t.about.shareBtn}
        </button>
        {copied && <p role="status" className="text-center mt-2" style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{t.about.copied}</p>}
      </AboutCard>

      <div className="fade-in-up mt-8 text-center" style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: '1.7' }}>
        <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
          {t.about.quote}
        </p>
        <p>{t.about.madeWith}</p>
        <p style={{ marginTop: '4px' }}>{t.about.noAds}</p>
      </div>
    </div>
  );
}

// ============================================================
// GLOSSARY VIEW
// ============================================================

function GlossaryView({ onOpenCase, focusTerm, clearFocusTerm }) {
  const { t, lang, data } = useApp();
  const [filter, setFilter] = useState('');
  const [expandedTerm, setExpandedTerm] = useState(null);

  const glossary = useMemo(() => [...data.glossary].sort((a, b) => a.term.localeCompare(b.term, lang, { sensitivity: 'base' })), [data.glossary, lang]);
  const letterOf = (term) => fold(term[0]).toUpperCase();

  const filtered = useMemo(() => {
    const terms = fold(filter).split(/\s+/).filter(Boolean);
    if (!terms.length) return glossary;
    return glossary.filter(g => { const f = fold(`${g.term} ${g.definition}`); return terms.every(term => f.includes(term)); });
  }, [filter, glossary]);
  const letters = useMemo(() => [...new Set(filtered.map(g => letterOf(g.term)))], [filtered]);

  // Deep link from search: open and scroll to a term
  useEffect(() => {
    if (!focusTerm) return;
    setFilter('');
    setExpandedTerm(focusTerm);
    const timer = setTimeout(() => {
      const el = document.getElementById(`term-${encodeURIComponent(focusTerm)}`);
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
      clearFocusTerm();
    }, 120);
    return () => clearTimeout(timer);
  }, [focusTerm, clearFocusTerm]);

  return (
    <div className="max-w-lg mx-auto px-5 pb-32 pt-2">
      <h1 className="fade-in-up visible" style={{ fontSize: '28px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: SERIF }}>
        {t.glossaryTitle}
      </h1>
      <p className="fade-in-up visible" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '4px' }}>
        {t.glossarySubtitle(glossary.length)}
      </p>

      <div className="relative mt-5 mb-4 fade-in-up visible">
        <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-tertiary)' }}>
          <Icon.Search size={16} />
        </div>
        <input
          id="glossary-filter"
          type="search"
          placeholder={t.filterTerms}
          aria-label={t.filterTerms}
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border outline-none"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--text-primary)', fontSize: '14px' }}
        />
      </div>

      <div className="flex flex-wrap gap-1 mb-5">
        {letters.map(l => (
          <button key={l} onClick={() => { const el = document.getElementById(`g-${l}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ background: 'var(--bg-secondary)', color: 'var(--navy)' }}>
            {l}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((g, i) => {
          const first = i === 0 || letterOf(filtered[i - 1].term) !== letterOf(g.term);
          const open = expandedTerm === g.term;
          return (
            <div key={g.term} id={`term-${encodeURIComponent(g.term)}`} style={{ scrollMarginTop: 'calc(env(safe-area-inset-top, 0px) + 72px)' }}>
              {first && (
                <div id={`g-${letterOf(g.term)}`} className="pt-3 pb-1" style={{ scrollMarginTop: 'calc(env(safe-area-inset-top, 0px) + 64px)' }}>
                  <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--crimson)', fontFamily: SERIF }}>{letterOf(g.term)}</span>
                </div>
              )}
              <div
                className="rounded-xl border"
                style={{ background: open ? 'var(--navy-lighter)' : 'var(--bg-card)', borderColor: open ? 'var(--navy)' : 'var(--border)', borderWidth: '1px' }}
              >
                <button onClick={() => setExpandedTerm(open ? null : g.term)} aria-expanded={open} className="w-full text-left p-4 flex items-center justify-between gap-2">
                  <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{g.term}</span>
                  <Icon.ChevronDown open={open} />
                </button>
                {open && (
                  <p style={{ fontSize: '13px', lineHeight: '1.7', color: 'var(--text-secondary)', padding: '0 16px 16px' }}>
                    <TextWithCases text={g.definition} onOpenCase={onOpenCase} />
                  </p>
                )}
              </div>
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

function SearchModal({ onClose, searchIndex, onSelect }) {
  const { t } = useApp();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  useModal(onClose, inputRef);

  useEffect(() => {
    const timer = setTimeout(() => setResults(searchContent(query, searchIndex)), 150);
    return () => clearTimeout(timer);
  }, [query, searchIndex]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[8vh] px-4" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: 'rgba(15,22,35,0.45)', backdropFilter: 'blur(4px)' }} />
      <div role="dialog" aria-modal="true" aria-label={t.a11y.search} className="relative w-full max-w-md rounded-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', boxShadow: 'var(--shadow-xl)', maxHeight: '70vh' }}
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-3 p-4 border-b" style={{ borderColor: 'var(--border)', color: 'var(--text-tertiary)' }}>
          <Icon.Search size={18} />
          <input id="global-search" ref={inputRef} type="search" placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder}
            value={query} onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: 'var(--text-primary)' }} />
          <button onClick={onClose} style={{ color: 'var(--text-tertiary)' }} aria-label={t.a11y.close}><Icon.X /></button>
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(70vh - 65px)' }}>
          {query.trim().length < 2 && (
            <div className="p-6 text-center" style={{ color: 'var(--text-tertiary)', fontSize: '13px' }}>
              <p>{t.searchHint}</p>
              <p className="mt-2" style={{ fontSize: '11px' }}>{t.searchTry}</p>
            </div>
          )}
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="p-6 text-center" style={{ color: 'var(--text-tertiary)', fontSize: '13px' }}>{t.noResults(query)}</div>
          )}
          {results.map((r, i) => (
            <button key={i} onClick={() => onSelect(r.target)} className="w-full text-left p-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
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
  const { t } = useApp();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.a11y.scrollTop}
      className="fixed right-5 z-40 w-10 h-10 rounded-full flex items-center justify-center no-print"
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 84px)', background: 'var(--navy)', color: 'var(--on-navy)', boxShadow: 'var(--shadow-lg)' }}>
      <Icon.ArrowUp />
    </button>
  );
}

// ============================================================
// MAIN APP
// ============================================================

export default function Home() {
  const [darkMode, setDarkModeState] = useState(false);
  const [lang, setLangState] = useState('en');
  const [activeView, setActiveView] = useState('home');
  const [activeDoc, setActiveDoc] = useState('declaration');
  const [activeScenario, setActiveScenario] = useState(null);
  const [scrollAnchor, setScrollAnchor] = useState(null);
  const [focusTerm, setFocusTerm] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openCase, setOpenCase] = useState(null);

  // Restore saved settings (or follow the device) once on mount
  useEffect(() => {
    const savedLang = storageGet('wtp-lang');
    if (savedLang === 'es' || savedLang === 'en') setLangState(savedLang);
    else if ((navigator.language || '').toLowerCase().startsWith('es')) setLangState('es');

    const savedDark = storageGet('wtp-dark');
    if (savedDark === '1' || savedDark === '0') setDarkModeState(savedDark === '1');
    else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) setDarkModeState(true);
  }, []);

  const setLang = useCallback((l) => { setLangState(l); storageSet('wtp-lang', l); }, []);
  const setDarkMode = useCallback((d) => { setDarkModeState(d); storageSet('wtp-dark', d ? '1' : '0'); }, []);

  const t = STRINGS[lang] || STRINGS.en;
  const data = useMemo(() => getData(lang), [lang]);

  // One regex for every case name, longest first so the most specific name wins
  const caseRegex = useMemo(() => {
    const keys = Object.keys(data.cases).sort((a, b) => b.length - a.length).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return keys.length ? new RegExp(`(${keys.join('|')})`, 'g') : null;
  }, [data.cases]);

  const searchIndex = useMemo(() => buildSearchIndex(data, t), [data, t]);
  const citations = useMemo(() => buildCitationIndex(data, t, caseRegex), [data, t, caseRegex]);
  const observe = useInView();

  useEffect(() => { document.documentElement.classList.toggle('dark', darkMode); }, [darkMode]);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  useEffect(() => { const timer = setTimeout(() => observe(), 100); return () => clearTimeout(timer); }, [activeView, activeDoc, activeScenario, lang, observe]);

  // Cmd+K / Ctrl+K opens search
  useEffect(() => {
    const h = e => { if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); } };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  // Navigation history: every screen change records where you came from (and your
  // scroll position) so the Back button can return you there.
  const historyRef = useRef([]);
  const [canGoBack, setCanGoBack] = useState(false);
  const stateRef = useRef({ view: 'home', doc: 'declaration', scenario: null });
  const pendingScrollRef = useRef(null);
  stateRef.current = { view: activeView, doc: activeDoc, scenario: activeScenario };

  const pushHistory = useCallback((next) => {
    const cur = stateRef.current;
    const same = cur.view === next.view
      && (next.doc === undefined || cur.doc === next.doc)
      && (next.scenario === undefined || cur.scenario === next.scenario);
    if (same) return;
    historyRef.current.push({ ...cur, scrollY: window.scrollY });
    if (historyRef.current.length > 50) historyRef.current.shift();
    setCanGoBack(true);
  }, []);

  const goBack = useCallback(() => {
    const prev = historyRef.current.pop();
    setCanGoBack(historyRef.current.length > 0);
    if (!prev) return;
    setOpenCase(null);
    setSearchOpen(false);
    setScrollAnchor(null);
    setActiveDoc(prev.doc);
    setActiveScenario(prev.scenario);
    setActiveView(prev.view);
    pendingScrollRef.current = prev.scrollY;
  }, []);

  // After going back, restore the scroll position once the screen has rendered
  useEffect(() => {
    if (pendingScrollRef.current == null) return;
    const y = pendingScrollRef.current;
    pendingScrollRef.current = null;
    requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo({ top: y, behavior: 'instant' })));
  }, [activeView, activeDoc, activeScenario]);

  const selectDoc = useCallback((id) => { pushHistory({ view: 'library', doc: id }); setActiveDoc(id); }, [pushHistory]);
  const openScenario = useCallback((id) => { pushHistory({ view: 'rights', scenario: id }); setActiveScenario(id); }, [pushHistory]);

  const handleOpenCase = useCallback((caseKey) => setOpenCase(caseKey), []);
  const closeCase = useCallback(() => setOpenCase(null), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const clearScrollAnchor = useCallback(() => setScrollAnchor(null), []);
  const clearFocusTerm = useCallback(() => setFocusTerm(null), []);

  // Single entry point for every in-app link
  const navigate = useCallback((target) => {
    if (!target) return;
    if (target.caseKey) { setOpenCase(target.caseKey); return; }
    pushHistory({ view: target.view, doc: target.doc, scenario: target.view === 'rights' ? (target.scenario || null) : undefined });
    if (target.view === 'library') {
      if (target.doc) setActiveDoc(target.doc);
      setActiveView('library');
      if (target.anchor) setScrollAnchor(target.anchor); else window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    if (target.view === 'rights') {
      setActiveScenario(target.scenario || null);
      setActiveView('rights');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    if (target.view === 'glossary') {
      setActiveView('glossary');
      if (target.term) setFocusTerm(target.term);
      return;
    }
    if (target.view) { setActiveView(target.view); window.scrollTo({ top: 0, behavior: 'instant' }); }
  }, [pushHistory]);

  const handleSearchSelect = useCallback((target) => { setSearchOpen(false); navigate(target); }, [navigate]);

  const app = useMemo(() => ({ lang, setLang, t, data, caseRegex, citations }), [lang, setLang, t, data, caseRegex, citations]);

  const goToView = useCallback((v) => {
    pushHistory({ view: v, scenario: v === 'rights' ? null : undefined });
    if (v === 'rights') setActiveScenario(null);
    setActiveView(v);
  }, [pushHistory]);

  return (
    <AppCtx.Provider value={app}>
      <div className={darkMode ? 'dark' : ''}>
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background 0.3s, color 0.3s' }}>
          {searchOpen && <SearchModal onClose={closeSearch} searchIndex={searchIndex} onSelect={handleSearchSelect} />}
          {openCase && <CaseModal caseKey={openCase} onClose={closeCase} onOpenCase={handleOpenCase} navigate={navigate} />}
          <TopBar darkMode={darkMode} setDarkMode={setDarkMode} onSearchOpen={() => setSearchOpen(true)} onAboutOpen={() => { goToView('about'); window.scrollTo({ top: 0, behavior: 'instant' }); }} onHome={() => { goToView('home'); window.scrollTo({ top: 0, behavior: 'instant' }); }} canGoBack={canGoBack} onBack={goBack} />

          <main>
            {activeView === 'home' && <HomeView setActiveView={goToView} navigate={navigate} />}
            {activeView === 'library' && (
              <LibraryView activeDoc={activeDoc} selectDoc={selectDoc} onOpenCase={handleOpenCase} scrollAnchor={scrollAnchor} clearScrollAnchor={clearScrollAnchor} />
            )}
            {activeView === 'rights' && (
              <RightsView onOpenCase={handleOpenCase} navigate={navigate} activeId={activeScenario} openScenario={openScenario} />
            )}
            {activeView === 'cases' && <CasesView onOpenCase={handleOpenCase} />}
            {activeView === 'glossary' && <GlossaryView onOpenCase={handleOpenCase} focusTerm={focusTerm} clearFocusTerm={clearFocusTerm} />}
            {activeView === 'about' && <AboutView />}
          </main>

          <BottomNav activeView={activeView} setActiveView={goToView} />
          <ScrollToTop />
        </div>
      </div>
    </AppCtx.Provider>
  );
}
