import './globals.css'
import { Libre_Baskerville, Inter, JetBrains_Mono } from 'next/font/google'

// Fonts are downloaded at build time and bundled with the app, so the
// iOS build renders correctly with no network connection.
const serif = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-serif', display: 'swap' })
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata = {
  title: 'We The People - Know Your Rights',
  description: 'The complete Declaration of Independence, Constitution, and all 27 Amendments, explained in plain language, with a case library, glossary, and Know Your Rights guide. English and Spanish. No parties. Just law.',
  keywords: 'constitution, amendments, bill of rights, declaration of independence, rights, civic education, american law, know your rights, constitución, derechos',
  openGraph: {
    title: 'We The People - Know Your Rights',
    description: 'Your constitutional rights in plain English and Spanish. No political spin. Just the law.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1b2a4a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
