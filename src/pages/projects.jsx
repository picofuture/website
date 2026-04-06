import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

const work = [
  {
    company: 'Luxury Presence',
    role: 'Staff Software Engineer, Applied AI',
    period: '2025 — Present',
    summary:
      'Architecting the AI website generation platform from the ground up. Luxury Presence is a Series C proptech company serving 80,000+ real estate professionals, and every generated site has to be indistinguishable from human-designed work — which means the hard problem is making non-deterministic systems produce deterministic-quality output at scale.',
    highlights: [
      'Designed and built the end-to-end AI site generation pipeline, replacing a multi-week manual workflow with an automated system that ships production-ready sites in hours.',
      'Own prompt orchestration, output evaluation, layout consistency, and brand-fidelity controls across the generation pipeline.',
      'Built and run a spec-driven development framework for the platform — treating specifications as the source of truth and using AI agents to execute against them — before the industry converged on the term.',
      'Set technical direction for every AI-powered web experience the company ships. Collaborate directly with executives and product leadership on the AI roadmap.',
    ],
  },
  {
    company: 'Durable',
    role: 'Engineering Lead, AI',
    period: '2023 — 2025',
    summary:
      'Led AI engineering at Durable, an AI-powered small business platform serving 100,000+ SMBs. Owned the AI infrastructure, customer-facing AI agents, and engineering team growth — at a moment when the entire AI infrastructure stack was brand new and providers were going down daily from timeouts, rate limits, and outages.',
    highlights: [
      'Designed and built an AI service processing 1B+ tokens per month when the industry had no playbook for operating LLM workloads at that scale. Engineered the retries, fallbacks, queueing, and provider failover that kept it reliable while the underlying APIs were still wobbling.',
      'Built an internal agent development framework on top of the AI infrastructure — the abstraction layer the rest of the engineering team used to ship customer-facing AI agents without reinventing the plumbing. Everything shipped after that was built on top of it.',
      'Cut annual infrastructure spend by $375K (75%) through architecture redesign and CDN optimization, freeing budget for product investment.',
      'Scaled AI services to 100,000+ active small businesses at 99.99% uptime — through the rockiest year of commercial LLM infrastructure.',
      'Shipped customer-facing AI agents for SEO optimization, content generation, and site improvement — expanding product capability and revenue per account.',
      'Cut support ticket volume 40% through automated triage and resolution workflows.',
      'Grew the engineering team from 4 to 11. Built the hiring pipeline, mentorship program, and security practice, including a bug bounty initiative.',
    ],
  },
  {
    company: 'Streamlabs (Logitech)',
    role: 'Principal Software Engineer',
    period: '2019 — 2023',
    summary:
      'Led core services and GenAI R&D at Streamlabs, one of the largest platforms for live streamers. Shipped products used by 5M+ creators, pioneered the company’s first generative-AI products before the current AI wave was mainstream, and drove platform-wide reliability, identity, and security initiatives.',
    highlights: [
      'Directed GenAI research and development for Streamlabs and shipped the company’s first generative-AI products — including Logo Maker and AI-powered creator tooling — in the early days of the current AI wave.',
      'Pioneered new products adopted by 5M+ streamers, including Campaign Manager, Alert Box V2, and a suite of widgets and tools that became core to the creator workflow.',
      'Led the Streamlabs Identity initiative, unifying authentication across the platform for 5M+ users and eliminating fragmented identity systems.',
      'Rebuilt the real-time event alert pipeline processing millions of events per day. Reduced P99 backend latency by 65%.',
      'Replaced the legacy jQuery and iframe widget system with a modern Vue.js architecture, cutting feature development cycle time by 50%.',
      'Led the core services team responsible for global platform reliability, performance, and availability. Ran the company-wide bug bounty program.',
    ],
  },
  {
    company: 'Pico Future',
    role: 'Founder and Technical Consultant',
    period: '2025',
    summary:
      'Independent build and consulting practice. Partnered with early-stage founders and SaaS teams to take AI-native products from 0 → 1, shipping across mobile, voice, and developer tooling.',
    highlights: [
      'Designed and launched an AI debugging agent targeting the emerging AI-assisted development segment. Secured 100+ beta signups and converted paid pilot conversations within 8 weeks.',
      'Partnered with a health-tech founder to build a cross-platform iOS and Android application for postpartum support, integrating AI across the core user experience — from scoping the product with the founder to shipping the AI-powered features.',
      'Delivered a low-latency voice AI system for a small-business SaaS client, achieving sub-500ms response times and enabling a new real-time customer interaction revenue line.',
    ],
  },
]

function WorkItem({ entry }) {
  return (
    <article className="border-l border-zinc-100 pl-6 dark:border-zinc-700/40">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {entry.company}
        </h2>
        <span className="text-sm text-zinc-400 dark:text-zinc-500">
          {entry.period}
        </span>
      </div>
      <p className="mt-1 text-sm font-medium text-teal-500">{entry.role}</p>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        {entry.summary}
      </p>
      <ul className="mt-4 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
        {entry.highlights.map((highlight, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-[0.6rem] h-1 w-1 flex-none rounded-full bg-zinc-400 dark:bg-zinc-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Work - Anfal Mushtaq</title>
        <meta
          name="description"
          content="Selected work from the last several years — AI platforms, infrastructure at scale, and products shipped to millions of users."
        />
        <meta property="og:title" content="Work by Anfal Mushtaq – Selected projects and shipped systems" />
        <meta property="og:description" content="Selected work from the last several years — AI platforms, infrastructure at scale, and products shipped to millions of users." />
        <meta property="og:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta property="og:url" content="https://anfalmushtaq.com/projects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Work by Anfal Mushtaq – Selected projects and shipped systems" />
        <meta name="twitter:description" content="Selected work from the last several years — AI platforms, infrastructure at scale, and products shipped to millions of users." />
        <meta name="twitter:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta name="twitter:creator" content="@AnfalMushtaq" />
      </Head>
      <SimpleLayout
        title="Selected work."
        intro="A handful of the systems I’ve shipped over the last several years. The surface changes — AI platforms, infrastructure at scale, livestreaming products — but the job is always the same: turn a hard, vaguely-specified problem into a system that runs in production and actually helps the people using it."
      >
        <div className="space-y-16">
          {work.map((entry) => (
            <WorkItem key={entry.company} entry={entry} />
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
