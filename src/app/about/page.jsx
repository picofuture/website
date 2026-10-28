import Image from 'next/image'

import { JsonLd } from '@/components/JsonLd'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import { SITE_URL, about, person } from '@/content/site'
import { personSchema } from '@/lib/schema'
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from '@/lib/sharedConsts'

export const metadata = {
  title: 'About',
  description: about.description,
  alternates: {
    canonical: '/about',
    types: { 'text/markdown': '/about.md' },
  },
  openGraph: {
    type: 'profile',
    title: 'About Anfal Mushtaq – Engineer. Builder. Shipper.',
    description:
      '12+ years shipping software across web, streaming, SMB SaaS, and AI. First principles over frameworks. Human outcomes over hype.',
    url: '/about',
    images: [person.image],
  },
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const links = [
  { href: TWITTER_LINK, label: 'Follow on X', icon: XIcon },
  { href: GITHUB_LINK, label: 'Follow on GitHub', icon: GitHubIcon },
  { href: LINKEDIN_LINK, label: 'Follow on LinkedIn', icon: LinkedInIcon },
]

export default function About() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          url: `${SITE_URL}/about`,
          mainEntity: personSchema,
        }}
      />
      <div className="graph sheet-pad grid gap-14 pt-16 pb-20 sm:pt-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="rise font-wide text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.03] font-semibold tracking-[-0.035em] text-ink">
            {about.title}
          </h1>
          <div
            className="rise mt-8 max-w-[64ch] space-y-6 text-lg leading-relaxed text-ink-2"
            style={{ '--delay': '100ms' }}
          >
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="lg:col-span-4 lg:col-start-9">
          <figure className="rise max-w-xs lg:max-w-none" style={{ '--delay': '160ms' }}>
            <div className="cad-grips border border-ink bg-paper-raised p-2">
              <Image
                src="dp.jpg"
                width={640}
                height={640}
                alt={`Portrait of ${person.name}`}
                sizes="(min-width: 1024px) 24rem, 20rem"
                className="aspect-square w-full object-cover"
                priority
              />
            </div>
            <figcaption className="label mt-3 flex justify-between">
              <span>Fig. A</span>
              <span>{person.location}</span>
            </figcaption>
          </figure>
          <ul className="mt-10 border-t border-rule">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href} className="border-b border-rule">
                <a
                  href={href}
                  target="_blank"
                  rel="me noopener"
                  className="group flex items-center gap-4 py-3.5 text-sm font-medium text-ink transition-colors hover:text-accent"
                >
                  <Icon className="size-5 flex-none fill-ink-3 transition-colors group-hover:fill-accent" />
                  {label}
                </a>
              </li>
            ))}
            <li className="border-b border-rule">
              <a
                href={`mailto:${person.email}`}
                className="group flex items-center gap-4 py-3.5 text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                <MailIcon className="size-5 flex-none fill-ink-3 transition-colors group-hover:fill-accent" />
                {person.email}
              </a>
            </li>
          </ul>
        </aside>
      </div>
      <div className="rule-x" />
      <section aria-labelledby="how-i-work" className="sheet-pad grid gap-10 pt-16 lg:grid-cols-12">
        <h2
          id="how-i-work"
          className="font-wide text-3xl font-semibold tracking-tight text-ink lg:col-span-4"
        >
          How I work
        </h2>
        <dl className="grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:col-span-8">
          {about.principles.map((principle) => (
            <div key={principle.lead} className="bg-paper p-6">
              <dt className="font-serif text-2xl leading-tight text-ink italic">
                {principle.lead}
              </dt>
              <dd className="mt-3 text-[0.9875rem] leading-relaxed text-ink-2">
                {principle.body}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
