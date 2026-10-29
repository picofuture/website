import createMDX from '@next/mdx'

// Pages that also exist as Markdown for agents (see src/app/md).
const MARKDOWN_PAGES = ['/', '/about', '/articles', '/projects', '/uses']

const acceptsMarkdown = [
  { type: 'header', key: 'accept', value: '(.*)text/markdown(.*)' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.anfalmushtaq.com',
        pathname: '/static/**',
      },
    ],
    loader: 'custom',
    loaderFile: './src/lib/cloudflareImageLoader.js',
  },
  async rewrites() {
    return {
      // Agents that ask for Markdown get it at the same URL.
      beforeFiles: [
        {
          source: '/articles/:slug',
          has: acceptsMarkdown,
          destination: '/md/articles/:slug',
        },
        ...MARKDOWN_PAGES.map((page) => ({
          source: page,
          has: acceptsMarkdown,
          destination: `/md/pages${page === '/' ? '/index' : page}`,
        })),
      ],
      // Explicit .md mirrors, e.g. /articles/hello-world.md, /about.md
      afterFiles: [
        { source: '/articles/:slug.md', destination: '/md/articles/:slug' },
        { source: '/index.md', destination: '/md/pages/index' },
        { source: '/:page.md', destination: '/md/pages/:page' },
      ],
    }
  },
  async headers() {
    const vary = [{ key: 'Vary', value: 'Accept' }]

    return [
      ...MARKDOWN_PAGES.map((page) => ({
        source: page,
        headers: [
          ...vary,
          {
            key: 'Link',
            value: `<${page === '/' ? '/index' : page}.md>; rel="alternate"; type="text/markdown"`,
          },
        ],
      })),
      {
        source: '/articles/:slug',
        headers: [
          ...vary,
          {
            key: 'Link',
            value: '</articles/:slug.md>; rel="alternate"; type="text/markdown"',
          },
        ],
      },
    ]
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // Plugins are named as strings so Turbopack can load them.
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-slug', '@mapbox/rehype-prism'],
  },
})

export default withMDX(nextConfig)
