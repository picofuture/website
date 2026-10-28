# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS 4 + MDX articles in `src/content/articles`. Deployed on Vercel. Images served from a Cloudflare CDN (`cdn.anfalmushtaq.com`) via a custom loader. Google Analytics. RSS/JSON feeds generated at build.

## What it is

The personal site of Anfal Mushtaq, a Staff Software Engineer (Applied AI) based in Vancouver with 12+ years shipping software across web, livestreaming, SMB SaaS, and AI. It is part publication, part record of work. The owner has no fixed persona in mind and wants the site to be a bit of everything: someone should leave knowing who Anfal is, having read something, and knowing how to reach them.

## Audience (inferred from content, owner confirmed "a bit of everything")

- **Readers** arriving from X, LinkedIn, or talks (e.g. the VanJS "Vibe Code Like an Engineer" talk) to read long-form writing on AI-augmented engineering, spec-driven development, system design, and the human side of tech. This is the largest body of content (~29 articles, 2021–2026).
- **Hiring managers, founders, and peers** checking Anfal’s track record: the Work page lists roles at Luxury Presence, Durable, Streamlabs (Logitech), and Pico Future with concrete outcomes, plus a downloadable CV.
- **Fellow builders** curious about how Anfal works: the Uses page and the "How I work" principles.

## Pages and functions to preserve

- Home: intro, social links, email, latest 4 articles, Work summary, CV download (`/api/resume`).
- Articles index + MDX article pages (prose, code blocks with Prism, ASCII diagrams in code fences, images via `BlogImage`, YouTube embeds).
- About, Work (`/projects`), Uses, Speaking (placeholder), Thank-you (newsletter, currently disabled).
- Light/dark mode toggle with system preference and localStorage override.
- Mobile navigation popover.
- Agent surfaces: `/llms.txt`, `/llms-full.txt`, a Markdown mirror of every page (`/<page>.md`, `/articles/<slug>.md`, also served for `Accept: text/markdown`), `/robots.txt` welcoming AI agents, `/sitemap.xml`, full-content RSS/JSON feeds, JSON-LD.

## Voice

Direct, first-person, plain-spoken. "I build things that ship." "First principles over frameworks. Human outcomes over hype." Engineering-minded with a humane streak. No hype.

## Brand commitments

- Name: Anfal Mushtaq. Email: hello@anfalmushtaq.com. Handles: @AnfalMushtaq (X), MAnfal (GitHub), anfalmushtaq (LinkedIn).
- Profile photo `dp.jpg` on the CDN.
- Owner-stated visual constraint (recorded, not expanded here): wants an old drafting / CAD drawing-paper feel, inspired by hex.tech. Dark mode is kept and should read as a blueprint sheet.

## Accessibility

Text must stay readable for long-form reading (articles are the bulk of the content). WCAG AA contrast on body text in both themes. Respect `prefers-reduced-motion`.
