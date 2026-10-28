import { getAllArticles, getArticleSource, importArticle } from '@/lib/articles'
import { MARKDOWN_HEADERS, articleMarkdown } from '@/lib/markdown'

export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateStaticParams() {
  return (await getAllArticles()).map(({ slug }) => ({ slug }))
}

export async function GET(_request, { params }) {
  let { slug } = await params
  let { meta } = await importArticle(slug)
  let source = await getArticleSource(slug)

  return new Response(articleMarkdown(meta, source), { headers: MARKDOWN_HEADERS })
}
