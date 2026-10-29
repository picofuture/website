import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

import { formatCDNURl } from '@/lib/cloudflareImageLoader'
import { formatDate } from '@/lib/formatDate'
import {
  SITE_URL,
  about,
  articlesPage,
  home,
  nav,
  person,
  resume,
  uses,
  usesPage,
  work,
  workPage,
} from '@/content/site'

function attr(tag, name) {
  let match = new RegExp(`${name}=(?:"([^"]*)"|'([^']*)'|\\{["'\`]([^"'\`]*)["'\`]\\})`).exec(tag)
  return match ? (match[1] ?? match[2] ?? match[3]) : ''
}

function absolute(url) {
  return url.startsWith('/') ? `${SITE_URL}${url}` : url
}

// Turns an article's MDX source into plain Markdown an agent can read.
export function mdxToMarkdown(source) {
  let lines = source.split('\n')
  let out = []
  let inFence = false
  let skipMeta = false

  for (let line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
    if (!inFence) {
      if (/^import\s.+from\s/.test(line)) continue
      if (/^export const meta\s*=/.test(line)) {
        skipMeta = !/}\s*;?\s*$/.test(line)
        continue
      }
      if (skipMeta) {
        if (/^}\s*;?\s*$/.test(line)) skipMeta = false
        continue
      }
    }
    out.push(line)
  }

  let body = out.join('\n')
  let parts = body.split(/(^```[\s\S]*?^```)/m)

  return parts
    .map((part) => {
      if (part.startsWith('```')) return part
      return part
        .replace(/<BlogImage[\s\S]*?\/>/g, (tag) => {
          let src = attr(tag, 'src')
          return `![${attr(tag, 'alt')}](${formatCDNURl(src)})`
        })
        .replace(/<BlogYoutubeVideoEmbed[\s\S]*?\/>/g, (tag) => {
          let id = attr(tag, 'src')
          let title = attr(tag, 'title') || 'Video'
          return `[${title} (YouTube)](https://www.youtube.com/watch?v=${id})`
        })
        .replace(/<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/g, (_, href, text) => {
          return `[${text.trim()}](${absolute(href)})`
        })
        .replace(/<br\s*\/?>/g, '  \n')
        .replace(/\]\((\/[^)\s]*)\)/g, (_, href) => `](${absolute(href)})`)
    })
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function articleMarkdown(meta, source) {
  let url = `${SITE_URL}/articles/${meta.slug}`
  return [
    `# ${meta.title}`,
    '',
    `> ${meta.description}`,
    '',
    `By ${person.name} · ${formatDate(meta.date)} · ${url}`,
    '',
    mdxToMarkdown(source),
    '',
  ].join('\n')
}

export async function markdownToHtml(markdown) {
  let file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeStringify)
    .process(markdown)
  return String(file)
}

function articleList(articles) {
  return articles
    .map(
      (a) =>
        `- [${a.title}](${SITE_URL}/articles/${a.slug}.md) (${a.date}): ${a.description}`,
    )
    .join('\n')
}

const contact = [
  `- Email: ${person.email}`,
  ...person.sameAs.map((url) => `- ${url}`),
].join('\n')

export function pageMarkdown(page, articles = []) {
  switch (page) {
    case 'index':
      return [
        `# ${person.name}`,
        '',
        `> ${person.jobTitle}, ${person.location}. I build things that ship.`,
        '',
        home.intro,
        '',
        '## Latest articles',
        '',
        articleList(articles.slice(0, 4)),
        '',
        `All articles: ${SITE_URL}/articles.md`,
        '',
        '## Work',
        '',
        ...resume.map((r) => `- ${r.company}, ${r.title} (${r.start} – ${r.end})`),
        '',
        `Full work history: ${SITE_URL}/projects.md`,
        `CV (PDF): ${SITE_URL}/api/resume`,
        '',
        '## Pages',
        '',
        ...nav.map((n) => `- [${n.label}](${SITE_URL}${n.href}.md)`),
        '',
        '## Contact',
        '',
        contact,
        '',
      ].join('\n')
    case 'about':
      return [
        `# ${about.title}`,
        '',
        ...about.paragraphs.flatMap((p) => [p, '']),
        '## How I work',
        '',
        ...about.principles.map((p) => `- **${p.lead}** ${p.body}`),
        '',
        '## Contact',
        '',
        contact,
        '',
      ].join('\n')
    case 'articles':
      return [
        `# ${articlesPage.title}`,
        '',
        articlesPage.intro,
        '',
        articleList(articles),
        '',
      ].join('\n')
    case 'projects':
      return [
        `# ${workPage.title}`,
        '',
        workPage.intro,
        '',
        ...work.flatMap((w) => [
          `## ${w.company}`,
          '',
          `${w.role} · ${w.period}`,
          '',
          w.summary,
          '',
          ...w.highlights.map((h) => `- ${h}`),
          '',
        ]),
      ].join('\n')
    case 'uses':
      return [
        `# ${usesPage.title}`,
        '',
        usesPage.intro,
        '',
        ...uses.flatMap((section) => [
          `## ${section.title}`,
          '',
          ...section.tools.map((t) => `- **${t.title}**: ${t.body}`),
          '',
        ]),
      ].join('\n')
    default:
      return null
  }
}

export const MARKDOWN_HEADERS = {
  'Content-Type': 'text/markdown; charset=utf-8',
  Vary: 'Accept',
  'X-Robots-Tag': 'noindex',
}
