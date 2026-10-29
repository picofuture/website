import { SITE_URL, person } from '@/content/site'
import { getAllArticles, getArticleSource } from '@/lib/articles'
import { articleMarkdown, pageMarkdown } from '@/lib/markdown'

export const dynamic = 'force-static'

export async function GET() {
  let articles = await getAllArticles()
  let bodies = await Promise.all(
    articles.map(async (meta) => articleMarkdown(meta, await getArticleSource(meta.slug))),
  )

  let body = [
    `# ${person.name}: full text`,
    '',
    `> Every page and article from ${SITE_URL}, newest first, as Markdown.`,
    '',
    pageMarkdown('about'),
    '---',
    '',
    pageMarkdown('projects'),
    ...bodies.flatMap((markdown) => ['---', '', markdown]),
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
