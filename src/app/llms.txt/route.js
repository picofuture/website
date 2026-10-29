import { SITE_URL, about, home, nav, person } from '@/content/site'
import { getAllArticles } from '@/lib/articles'

export const dynamic = 'force-static'

export async function GET() {
  let articles = await getAllArticles()

  let body = [
    `# ${person.name}`,
    '',
    `> ${person.jobTitle} in ${person.location}. Personal site and long-form writing on AI-augmented software engineering, spec-driven development, system design, and the human side of technology.`,
    '',
    home.intro,
    '',
    'Every page on this site is also available as Markdown: append `.md` to the URL, or request it with `Accept: text/markdown`. The full text of every article is in one file at ' +
      `${SITE_URL}/llms-full.txt.`,
    '',
    '## Pages',
    '',
    `- [Home](${SITE_URL}/index.md): Who I am, latest writing, work summary`,
    `- [About](${SITE_URL}/about.md): ${about.description}`,
    ...nav
      .filter((item) => item.href !== '/about')
      .map((item) => `- [${item.label}](${SITE_URL}${item.href}.md)`),
    '',
    '## Articles',
    '',
    ...articles.map(
      (a) => `- [${a.title}](${SITE_URL}/articles/${a.slug}.md): ${a.description}`,
    ),
    '',
    '## Optional',
    '',
    `- [RSS feed](${SITE_URL}/rss/feed.xml): Full-content feed of every article`,
    `- [CV (PDF)](${SITE_URL}/api/resume): Current résumé`,
    `- [Contact](mailto:${person.email}): ${person.email}`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
