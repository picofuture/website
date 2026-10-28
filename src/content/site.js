// Single source for page copy, shared by the HTML pages and their Markdown mirrors.
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from '@/lib/sharedConsts'

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://anfalmushtaq.com'
).replace(/\/$/, '')

export const person = {
  name: 'Anfal Mushtaq',
  jobTitle: 'Staff Software Engineer, Applied AI',
  location: 'Vancouver, BC',
  email: EMAIL_LINK,
  image: 'https://cdn.anfalmushtaq.com/static/imgs/dp.jpg',
  sameAs: [TWITTER_LINK, GITHUB_LINK, LINKEDIN_LINK],
}

export const nav = [
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/uses', label: 'Uses' },
]

export const home = {
  title: 'Anfal Mushtaq – I build things that ship.',
  description:
    '12+ years shipping software across web, streaming, SMB SaaS, and AI. Products reaching 5M+ streamers, 100K+ businesses, 80K+ real estate pros. First principles over frameworks. Human outcomes over hype.',
  intro:
    '12+ years across web, streaming, SMB SaaS, and AI. Products reaching 5M+ streamers, 100K+ businesses, and 80K+ real estate pros. First principles over frameworks. Human outcomes over hype.',
}

export const resume = [
  {
    company: 'Luxury Presence',
    title: 'Staff Software Engineer, AI',
    logo: 'logos/luxury-presence.jpeg',
    start: '2025',
    end: 'Present',
  },
  {
    company: 'Pico Future',
    title: 'Founder',
    logo: 'logos/robot.png',
    start: '2025',
    end: '2025',
  },
  {
    company: 'Durable',
    title: 'Engineering Lead, AI',
    logo: '/logos/durable-mark.svg',
    start: '2023',
    end: '2025',
  },
  {
    company: 'Logitech',
    title: 'Principal Software Engineer',
    logo: 'logos/logitech.svg',
    start: '2021',
    end: '2023',
  },
]

export const about = {
  title: 'I’m Anfal. I turn hard problems into shipped systems.',
  description:
    'Engineer and builder based in Vancouver. 12+ years shipping software across web, streaming, SMB SaaS, and AI. First principles over frameworks. Human outcomes over hype.',
  paragraphs: [
    '12+ years building software across web, IoT, livestreaming, SMB SaaS, and AI. Co-founded my first company at 20. Shipped products reaching 5M+ streamers at Logitech. Scaled AI infrastructure to 100K+ businesses at Durable — cut infra spend 75%, grew the team from 4 to 11. Now architecting the AI website generation platform at Luxury Presence, serving 80K+ real estate professionals.',
    'The tools keep changing. My approach doesn’t: start from what the problem actually needs, reject frameworks that don’t fit, ship fast, and keep humans at the center. I write about what I learn along the way.',
  ],
  principles: [
    {
      lead: 'First principles over frameworks.',
      body: 'Every problem gets looked at fresh. Off-the-shelf is a starting point, not an answer.',
    },
    {
      lead: 'Ship, then sharpen.',
      body: 'Shipped software beats perfect software that doesn’t exist.',
    },
    {
      lead: 'Humans at the center.',
      body: 'The person on the other side of the screen is the whole point.',
    },
    {
      lead: 'Write it down.',
      body: 'If I learned it the hard way, I write about it so someone else doesn’t have to.',
    },
  ],
}

export const articlesPage = {
  title: 'Notes on engineering, systems, and shipping things that matter.',
  intro:
    'Long-form writing on engineering, shipping, and staying sharp across technology waves.',
  description:
    'Notes from building software across technology waves — engineering, systems, first principles, and the humans on the other side.',
}

export const workPage = {
  title: 'Selected work.',
  intro:
    'A handful of the systems I’ve shipped over the last several years. The surface changes — AI platforms, infrastructure at scale, livestreaming products — but the job is always the same: turn a hard, vaguely-specified problem into a system that runs in production and actually helps the people using it.',
  description:
    'Selected work from the last several years — AI platforms, infrastructure at scale, and products shipped to millions of users.',
}

export const work = [
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

export const usesPage = {
  title: 'The tools I actually use.',
  intro:
    'I prefer fewer, better tools over a sprawling stack. Every item on this list earned its spot by surviving real work. I update it only when something actually changes — not when a new trend shows up.',
  description:
    'The tools I actually use to build software, think clearly, and ship things that matter.',
}

export const uses = [
  {
    title: 'Workstation',
    tools: [
      {
        title: '15” MacBook Pro (2019, Intel, 16GB RAM)',
        body: 'Primary machine. Quiet under load, reliable, and still gets the job done for everything short of heavy local model work.',
      },
      {
        title: '15” Lenovo Legion Y550 (Intel i7, Nvidia 1050Ti, 32GB RAM)',
        body: 'My Linux workhorse. I like having a proper Linux environment for anything that benefits from full control over the stack.',
      },
      {
        title: '11” iPad Pro with Apple Pencil',
        body: 'Where I think in longhand. Specs, diagrams, and messy early drafts start here before they become code or prose. A paper-like screen protector makes the difference.',
      },
      {
        title: 'Herman Miller Embody Chair',
        body: 'Worth every dollar. I sit in it for long stretches and it pays itself back in how my back feels at the end of the day.',
      },
    ],
  },
  {
    title: 'Editor and IDE',
    tools: [
      {
        title: 'Cursor',
        body: 'My primary editor these days. The tight AI integration fits how I actually build now — drafting with an agent, reviewing diffs, and keeping the human in the loop on the decisions that matter. I moved to it once the AI-assisted workflow outgrew bolting plugins onto a traditional IDE.',
      },
      {
        title: 'JetBrains Suite',
        body: 'Still in the toolbox for anything that benefits from deep language-specific tooling — PHPStorm, PyCharm, DataGrip, CLion. A decade of muscle memory doesn’t go away, and the refactoring and debugging stack is still best in class when I need it.',
      },
    ],
  },
  {
    title: 'AI in the loop',
    tools: [
      {
        title: 'Claude and Claude Code',
        body: 'My primary AI pair. I drive most of my AI-assisted work through Claude Code in the terminal — it fits the way I actually build, instead of forcing me into an editor-centric workflow. I rely on it for exploration, scaffolding, and as a thinking partner on hard architectural calls.',
      },
      {
        title: 'Spec-driven development',
        body: 'Not a tool, a method. I treat specifications as the source of truth and have AI agents execute against them. The spec is what I write and review carefully; the code is what the agent produces from it. This is how I actually ship at the pace I do.',
      },
    ],
  },
  {
    title: 'Thinking and writing',
    tools: [
      {
        title: 'GoodNotes',
        body: 'Where my long-form notes, planning, and daily task tracking live. I keep a yearly planner inside it and revisit it often.',
      },
      {
        title: 'Freeform',
        body: 'My infinite whiteboard. I use it when I need to spread out and see a problem at once instead of scrolling through a linear document.',
      },
      {
        title: 'Figma',
        body: 'Started as a design tool, stayed as a virtual whiteboard for cross-functional collaboration. The real hook was collaboration, not the design surface.',
      },
    ],
  },
  {
    title: 'Staying organized',
    tools: [
      {
        title: 'Trello',
        body: 'Simple, fast, and collaborative. I’ve tried heavier tools and kept coming back to this one because the UX gets out of my way.',
      },
    ],
  },
]
