import { SITE_URL } from '@/content/site'

export const dynamic = 'force-static'

// AI crawlers and agents are welcome; they're named so the policy is explicit.
const AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'CCBot',
]

export function GET() {
  let body = [
    'User-agent: *',
    'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
    'Allow: /',
    'Disallow: /api/',
    '',
    ...AGENTS.map((agent) => `User-agent: ${agent}`),
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    '',
    `# Agents: start at ${SITE_URL}/llms.txt. Any page is available as Markdown`,
    '# by appending .md or sending Accept: text/markdown.',
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
