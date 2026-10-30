import Link from 'next/link'
import { notFound } from 'next/navigation'

import { JsonLd } from '@/components/JsonLd'
import { SITE_URL, person } from '@/content/site'
import {
  getAllArticles,
  getArticleSource,
  getFigureCount,
  getHeadings,
  getReadingMinutes,
  getWordCount,
  importArticle,
} from '@/lib/articles'
import { formatCDNURl } from '@/lib/cloudflareImageLoader'
import { formatDate } from '@/lib/formatDate'
import { PERSON_ID } from '@/lib/schema'

export const dynamicParams = false

export async function generateStaticParams() {
  return (await getAllArticles()).map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  let { slug } = await params
  let { meta } = await importArticle(slug)
  let image = meta.image ? formatCDNURl(meta.image) : undefined

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/articles/${slug}`,
      types: { 'text/markdown': `/articles/${slug}.md` },
    },
    openGraph: {
      type: 'article',
      title: meta.title,
      description: meta.description,
      url: `/articles/${slug}`,
      publishedTime: meta.date,
      authors: [person.name],
      ...(image && { images: [{ url: image, alt: meta.title }] }),
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      ...(image && { images: [image] }),
    },
  }
}

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M13 8H3.5M7 4.5 3.5 8 7 11.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function Neighbour({ article, direction }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`cad group block p-5 sm:p-6 ${direction === 'next' ? 'sm:text-right' : ''}`}
    >
      <span className="label">{direction === 'next' ? 'Next' : 'Previous'}</span>
      <span className="mt-2 block font-semibold text-ink decoration-blue underline-offset-4 group-hover:underline">
        {article.title}
      </span>
    </Link>
  )
}

export default async function ArticlePage({ params }) {
  let { slug } = await params
  let { Content, meta } = await importArticle(slug)
  if (!Content) notFound()

  let source = await getArticleSource(slug)
  let headings = getHeadings(source)
  let minutes = getReadingMinutes(source)
  // Two sections are enough to navigate; essays without any get a legend in the rail instead.
  let hasContents = headings.length >= 2
  let words = getWordCount(source)
  let figures = getFigureCount(source)

  let articles = await getAllArticles()
  let index = articles.findIndex((a) => a.slug === slug)
  let newer = articles[index - 1]
  let older = articles[index + 1]

  let url = `${SITE_URL}/articles/${slug}`

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          '@id': `${url}#article`,
          headline: meta.title,
          description: meta.description,
          datePublished: meta.date,
          url,
          mainEntityOfPage: url,
          ...(meta.image && { image: formatCDNURl(meta.image) }),
          author: { '@type': 'Person', '@id': PERSON_ID, name: person.name, url: SITE_URL },
          publisher: { '@id': PERSON_ID },
          wordCount: source.split(/\s+/).length,
        }}
      />
      <header className="graph sheet-pad pt-10 pb-14 sm:pt-14 sm:pb-16">
        <Link
          href="/articles"
          className="label cad inline-flex items-center gap-2 py-1 pr-1 hover:text-ink"
        >
          <ArrowLeftIcon className="size-3.5" />
          All articles
        </Link>
        <h1 className="rise font-semiwide mt-10 max-w-4xl text-[clamp(2.125rem,5vw,3.75rem)] leading-[1.04] font-semibold tracking-[-0.03em] text-ink">
          {meta.title}
        </h1>
        <p
          className="rise mt-5 max-w-3xl font-serif text-[1.5rem] leading-snug text-ink-2 italic sm:text-[1.75rem]"
          style={{ '--delay': '90ms' }}
        >
          {meta.description}
        </p>
        <dl
          className="rise mt-8 flex flex-wrap gap-x-8 gap-y-3"
          style={{ '--delay': '160ms' }}
        >
          <div>
            <dt className="label">Date</dt>
            <dd className="mt-1 text-sm text-ink">
              <time dateTime={meta.date}>{formatDate(meta.date)}</time>
            </dd>
          </div>
          <div>
            <dt className="label">Reading</dt>
            <dd className="mt-1 text-sm text-ink">{minutes} min</dd>
          </div>
          <div>
            <dt className="label">Drawn by</dt>
            <dd className="mt-1 text-sm text-ink">{person.name}</dd>
          </div>
          <div>
            <dt className="label">Source</dt>
            <dd className="mt-1 text-sm">
              <a href={`/articles/${slug}.md`} className="link text-ink">
                Markdown
              </a>
            </dd>
          </div>
        </dl>
      </header>
      <div className="rule-x" />
      <div className="sheet-pad grid gap-10 pt-14 lg:grid-cols-12 lg:gap-0">
        <aside className="hidden lg:col-span-3 lg:block">
          {hasContents ? (
            <nav aria-label="On this page" className="sticky top-28 pr-8">
              <p className="label">On this page</p>
              <ol className="mt-4 space-y-2 border-l border-rule">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className="-ml-px block border-l border-transparent pl-4 text-[0.8125rem] leading-snug text-ink-2 transition-colors hover:border-accent hover:text-ink"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : (
            <div className="sticky top-28 pr-8">
              <p className="label">On this page</p>
              <div className="mt-4 border-l border-rule pl-4">
                <p className="text-[0.8125rem] leading-snug text-ink-2">
                  One continuous essay, no sections.
                </p>
                <dl className="mt-5 flex gap-8">
                  <div>
                    <dt className="label">Words</dt>
                    <dd className="mt-1 text-sm text-ink">{words.toLocaleString('en')}</dd>
                  </div>
                  {figures > 0 && (
                    <div>
                      <dt className="label">Figures</dt>
                      <dd className="mt-1 text-sm text-ink">{figures}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          )}
        </aside>
        <article
          className="article min-w-0 max-w-[40rem] lg:col-span-9 lg:col-start-4 xl:pl-6"
        >
          <Content />
        </article>
      </div>
      <nav
        aria-label="More articles"
        className="sheet-pad mt-24"
      >
        <div
          className={`grid border border-rule-strong ${older && newer ? 'divide-y divide-rule-strong sm:grid-cols-2 sm:divide-x sm:divide-y-0' : ''}`}
        >
          {older && <Neighbour article={older} direction="previous" />}
          {newer && <Neighbour article={newer} direction="next" />}
        </div>
      </nav>
    </>
  )
}
