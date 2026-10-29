import Script from 'next/script'
import { Architects_Daughter, Caveat, Geist_Mono, Shantell_Sans } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PencilFilters } from '@/components/PencilFilters'
import { ThemeScript } from '@/components/ThemeScript'
import { SITE_URL, home, person } from '@/content/site'

import '@/styles/globals.css'

// Hand-drawn type: Shantell Sans for reading (its informality is dialled per role
// in globals.css), Caveat for the handwritten accents, Architects Daughter for
// drafting-lettered labels. Geist Mono stays for code.
const shantell = Shantell_Sans({
  subsets: ['latin'],
  axes: ['INFM', 'BNCE'],
  variable: '--font-shantell',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

const architects = Architects_Daughter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-architects',
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${shantell.variable} ${caveat.variable} ${architects.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
      </head>
      <body className="min-h-full">
        <PencilFilters />
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
