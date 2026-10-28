import Script from 'next/script'
import { Archivo, Geist_Mono, Instrument_Serif } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { SITE_URL, home, person } from '@/content/site'

import '@/styles/globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: home.title,
    template: `%s – ${person.name}`,
  },
  description: home.description,
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  openGraph: {
    type: 'website',
    siteName: person.name,
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@AnfalMushtaq',
  },
  alternates: {
    types: {
      'application/rss+xml': '/rss/feed.xml',
      'application/feed+json': '/rss/feed.json',
    },
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f3ec' },
    { media: '(prefers-color-scheme: dark)', color: '#0f2747' },
  ],
}

// Runs before paint so the sheet never flashes the wrong theme.
const modeScript = `(() => {
  let q = window.matchMedia('(prefers-color-scheme: dark)')
  function update() {
    let stored = null
    try { stored = window.localStorage.isDarkMode } catch {}
    let dark = stored === 'true' || (stored === undefined && q.matches)
    document.documentElement.classList.toggle('dark', dark)
  }
  update()
  q.addEventListener('change', update)
})()`

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-mode" strategy="beforeInteractive">
          {modeScript}
        </Script>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
      </head>
      <body className="min-h-full">
        <a
          href="#main"
          className="label fixed top-3 left-3 z-50 -translate-y-20 bg-paper px-3 py-2 text-ink focus:translate-y-0"
        >
          Skip to content
        </a>
        <div className="sheet flex flex-col">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0YZE9YDZQ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0YZE9YDZQ2');`}
        </Script>
      </body>
    </html>
  )
}
