import Image from 'next/image'

import { ArticleRow } from '@/components/ArticleRow'
import { Button } from '@/components/Button'
import { Crosshair } from '@/components/Crosshair'
import { DimensionLine } from '@/components/DimensionLine'
import { JsonLd } from '@/components/JsonLd'
import { Marked } from '@/components/Marked'
import { Portrait } from '@/components/Portrait'
import { SectionTitle } from '@/components/SectionTitle'
import { EmailLink, SocialLinks } from '@/components/SocialLinks'
import { SITE_URL, home, person, resume } from '@/content/site'
import { getAllArticles } from '@/lib/articles'
import { formatCDNURl } from '@/lib/cloudflareImageLoader'
import { PERSON_ID, personSchema } from '@/lib/schema'

export const metadata = {
  title: { absolute: home.title },
  description: home.description,
  alternates: {
    canonical: '/',
    types: { 'text/markdown': '/index.md' },
  },
  openGraph: { title: home.title, description: home.description, url: '/' },
}

function Hero() {
  return (
    <section className="graph sheet-pad relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <Crosshair />
      <div className="relative z-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h1 className="font-wide text-[clamp(2.75rem,8.4vw,6rem)] leading-[0.94] font-semibold tracking-[-0.04em] text-ink">
            <span className="rise block">I build things</span>
            <span
              className="rise block pl-[0.04em] font-serif text-[1.14em] leading-[0.92] font-normal tracking-[-0.01em] italic"
              style={{ '--delay': '120ms' }}
            >
              that ship.
            </span>
          </h1>
          <DimensionLine className="mt-8 max-w-xl" delay={250}>
            12+ years in production
          </DimensionLine>
          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-ink-2"
            style={{ '--delay': '320ms' }}
          >
            <Marked text={home.intro} mark={home.introMark} />
          </p>
          <p
            className="rise mt-4 max-w-xl text-lg leading-relaxed text-ink-2"
            style={{ '--delay': '380ms' }}
          >
            Reach me at <EmailLink className="text-ink" />.
          </p>
          <div
            className="rise mt-9 flex flex-wrap items-center gap-3"
            style={{ '--delay': '440ms' }}
          >
            <Button variant="primary" href="/articles">
              Read the articles
            </Button>
            <Button href="/api/resume">Download CV</Button>
            <SocialLinks className="ml-1" />
          </div>
        </div>
        <Portrait
          sizes="16rem"
          tilt={-1.5}
          className="hidden self-end lg:col-span-3 lg:col-start-10 lg:block"
        />
      </div>
    </section>
  )
}

const THIS_YEAR = new Date().getFullYear()
const FIRST_YEAR = Math.min(...resume.map((role) => Number(role.start)))
const SPAN = THIS_YEAR + 1 - FIRST_YEAR

function tenure({ start, end }) {
  return start === end ? start : `${start} – ${end}`
}

// Each tenure drawn as a dimension on a shared axis, so overlaps and gaps read at a glance.
function TenureSpan({ start, end }) {
  let from = Number(start) - FIRST_YEAR
  let to = (end === 'Present' ? THIS_YEAR : Number(end)) + 1 - FIRST_YEAR

  return (
    <div aria-hidden="true" className="relative mt-2.5 h-2 w-full">
      <span className="absolute inset-x-0 top-1/2 h-px bg-rule" />
      <span
        className="absolute inset-y-0 flex items-center text-ink-3"
        style={{ left: `${(from / SPAN) * 100}%`, width: `${((to - from) / SPAN) * 100}%` }}
      >
        <span className="h-full w-px flex-none bg-current" />
        <span className="draw-x h-px flex-1 bg-current" />
        <span className="h-full w-px flex-none bg-current" />
      </span>
    </div>
  )
}

function Work() {
  return (
    <section aria-labelledby="work-heading">
      <SectionTitle id="work-heading">Work</SectionTitle>
      <ol className="mt-6 border-b border-rule">
        {resume.map((role) => (
          <li
            key={role.company}
            className="flex items-center gap-4 border-t border-rule py-4"
          >
            <div className="grid size-11 flex-none place-items-center border border-rule bg-paper-raised dark:bg-ink">
              <Image
                src={role.logo.startsWith('/') ? role.logo : formatCDNURl(role.logo)}
                width={64}
                height={64}
                alt=""
                className="size-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex min-w-0 flex-auto flex-wrap items-baseline gap-x-3">
              <dt className="sr-only">Company</dt>
              <dd className="w-full font-semibold text-ink">{role.company}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-sm text-ink-2">{role.title}</dd>
              <dt className="sr-only">Dates</dt>
              <dd className="label ml-auto">{tenure(role)}</dd>
              <dd className="w-full">
                <TenureSpan start={role.start} end={role.end} />
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/projects">Full work history</Button>
        <Button href="/api/resume">Download CV</Button>
      </div>
    </section>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${SITE_URL}/#website`,
              url: SITE_URL,
              name: person.name,
              description: home.description,
              publisher: { '@id': PERSON_ID },
            },
            personSchema,
          ],
        }}
      />
      <Hero />
      <div className="rule-x" />
      <div className="sheet-pad grid gap-16 pt-16 lg:grid-cols-12 lg:gap-0">
        <section aria-labelledby="writing-heading" className="lg:col-span-7 lg:pr-14">
          <SectionTitle id="writing-heading" action={{ href: '/articles', label: 'All articles' }}>
            Latest writing
          </SectionTitle>
          <div className="mt-6 border-b border-rule">
            {articles.map((article) => (
              <ArticleRow key={article.slug} article={article} />
            ))}
          </div>
        </section>
        <div className="lg:col-span-5 lg:border-l lg:border-rule lg:pl-14">
          <Work />
        </div>
      </div>
    </>
  )
}
