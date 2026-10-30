import { ArticleRow } from '@/components/ArticleRow'
import { PageHeader } from '@/components/PageHeader'
import { SheetSection } from '@/components/SheetSection'
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
          <SheetSection
            key={year}
            id={`year-${year}`}
            split="3/9"
            pad="py-10"
            side={
              <h2 id={`year-${year}`} className="font-wide text-5xl leading-none font-semibold tracking-tight text-ink">
                {year}
                <span className="label ml-3 align-middle">
                  {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
                </span>
              </h2>
            }
          >
            <div className="[&>article:first-child]:border-t-0 [&>article:first-child]:pt-0">
              {entries.map((article) => (
                <ArticleRow key={article.slug} article={article} headingLevel="h3" />
              ))}
            </div>
          </SheetSection>
        ))}
      </div>
    </>
  )
}
