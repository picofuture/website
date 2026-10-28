import { SITE_URL } from '@/content/site'
import { getAllArticles } from '@/lib/articles'

export default async function sitemap() {
  let articles = await getAllArticles()
  let latest = articles[0]?.date

  let pages = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.9 },
    { path: '/projects', priority: 0.9 },
    { path: '/articles', priority: 0.8, lastModified: latest },
    { path: '/uses', priority: 0.5 },
  ]

  return [
    ...pages.map(({ path, priority, lastModified }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: 'monthly',
      priority,
      ...(lastModified && { lastModified }),
    })),
    ...articles.map((article) => ({
      url: `${SITE_URL}/articles/${article.slug}`,
      lastModified: article.date,
      changeFrequency: 'yearly',
      priority: 0.7,
    })),
  ]
}
