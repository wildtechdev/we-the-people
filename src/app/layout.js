import './globals.css'

export const metadata = {
  title: 'We The People - Know Your Rights',
  description: 'The Constitution, Declaration of Independence, and all 27 Amendments explained in plain language every American can understand. No parties. Just law.',
  keywords: 'constitution, amendments, bill of rights, declaration of independence, rights, civic education, american law',
  openGraph: {
    title: 'We The People - Know Your Rights',
    description: 'Your constitutional rights in plain English. No political spin. Just the law.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
