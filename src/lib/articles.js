import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import GithubSlugger from 'github-slugger'

const ARTICLES_DIR = path.join(process.cwd(), 'src/content/articles')

export async function getArticleSlugs() {
  let files = await readdir(ARTICLES_DIR)
  return files.filter((file) => file.endsWith('.mdx')).map((file) => file.slice(0, -4))
}

export async function importArticle(slug) {
  let { default: Content, meta } = await import(`@/content/articles/${slug}.mdx`)
  return { Content, meta: { ...meta, slug } }
}

export async function getArticleSource(slug) {
  return readFile(path.join(ARTICLES_DIR, `${slug}.mdx`), 'utf8')
}

export async function getAllArticles() {
  let slugs = await getArticleSlugs()
  let articles = await Promise.all(
    slugs.map(async (slug) => (await importArticle(slug)).meta),
  )

  return articles
    .filter((meta) => !meta.draft)
    .sort((a, z) => new Date(z.date) - new Date(a.date))
}

// Walk the markdown outside code fences, line by line.
function proseLines(source) {
  let inFence = false
  return source.split('\n').filter((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      return false
    }
    return !inFence
  })
}

function plainText(markdown) {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .trim()
}

// Mirrors rehype-slug: one slugger across every heading, in document order.
export function getHeadings(source) {
  let slugger = new GithubSlugger()
  let headings = []

  for (let line of proseLines(source)) {
    let match = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line)
    if (!match) continue
    let text = plainText(match[2])
    let id = slugger.slug(text)
    if (match[1].length === 2) headings.push({ id, text })
  }

  return headings
}

export function getWordCount(source) {
  return proseLines(source).join(' ').split(/\s+/).filter(Boolean).length
}

export function getReadingMinutes(source) {
  return Math.max(1, Math.round(getWordCount(source) / 230))
}

export function getFigureCount(source) {
  return (proseLines(source).join('\n').match(/<BlogImage\b|!\[/g) ?? []).length
}
