import { ArticleRow } from '@/components/ArticleRow'
import { PageHeader } from '@/components/PageHeader'
import { articlesPage } from '@/content/site'
import { getAllArticles } from '@/lib/articles'

export const metadata = {
  title: 'Articles',
  description: articlesPage.description,
  alternates: {
    canonical: '/articles',
    types: { 'text/markdown': '/articles.md' },
  },
  openGraph: {
    title: 'Articles by Anfal Mushtaq – Notes from building things.',
    description:
      'Long-form writing on engineering, systems, first principles, and shipping things that matter.',
    url: '/articles',
  },
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()
  let years = Object.entries(
    Object.groupBy(articles, (article) => article.date.slice(0, 4)),
  ).sort(([a], [b]) => b - a)

  return (
    <>
      <PageHeader title={articlesPage.title} intro={articlesPage.intro} />
      <div className="sheet-pad pt-6">
        {years.map(([year, entries]) => (
          <section
            key={year}
            aria-labelledby={`year-${year}`}
            className="grid gap-x-10 border-b border-rule py-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <h2
                id={`year-${year}`}
                className="font-wide text-5xl leading-none font-semibold tracking-tight text-ink lg:sticky lg:top-28"
              >
                {year}
                <span className="label ml-3 align-middle">
                  {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
                </span>
              </h2>
            </div>
            <div className="mt-6 lg:col-span-9 lg:mt-0 [&>article:first-child]:border-t-0 [&>article:first-child]:pt-0">
              {entries.map((article) => (
                <ArticleRow key={article.slug} article={article} headingLevel="h3" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
