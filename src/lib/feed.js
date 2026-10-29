import { Feed } from 'feed'

import { SITE_URL, person } from '@/content/site'
import { getAllArticles, getArticleSource } from '@/lib/articles'
import { formatCDNURl } from '@/lib/cloudflareImageLoader'
import { markdownToHtml, mdxToMarkdown } from '@/lib/markdown'

export async function buildFeed() {
  let author = { name: person.name, email: person.email, link: SITE_URL }

  let feed = new Feed({
    title: person.name,
    description: 'My thoughts on future, philosophy & technology',
    author,
    id: SITE_URL,
    link: SITE_URL,
    language: 'en',
    image: person.image,
    favicon: `${SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${SITE_URL}/rss/feed.xml`,
      json: `${SITE_URL}/rss/feed.json`,
    },
  })

  for (let article of await getAllArticles()) {
    let url = `${SITE_URL}/articles/${article.slug}`
    let source = await getArticleSource(article.slug)

    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      description: article.description,
      content: await markdownToHtml(mdxToMarkdown(source)),
      author: [author],
      date: new Date(article.date),
      ...(article.image && { image: formatCDNURl(article.image) }),
    })
  }

  return feed
}
