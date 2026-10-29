import { getAllArticles } from '@/lib/articles'
import { MARKDOWN_HEADERS, pageMarkdown } from '@/lib/markdown'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return ['index', 'about', 'articles', 'projects', 'uses'].map((page) => ({ page }))
}

export async function GET(_request, { params }) {
  let { page } = await params
  let markdown = pageMarkdown(page, await getAllArticles())

  return new Response(markdown, { headers: MARKDOWN_HEADERS })
}
