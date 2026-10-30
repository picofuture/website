import { JsonLd } from '@/components/JsonLd'
import { Portrait } from '@/components/Portrait'
import { SheetSection } from '@/components/SheetSection'
import { SocialLinks } from '@/components/SocialLinks'
import { SITE_URL, about, person } from '@/content/site'
import { personSchema } from '@/lib/schema'

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
          <Portrait
            sizes="(min-width: 1024px) 24rem, 20rem"
            tilt={1.25}
            className="rise max-w-xs lg:max-w-none"
            style={{ '--delay': '160ms' }}
          />
          <SocialLinks variant="list" className="mt-10" />
        </aside>
      </div>
      <div className="rule-x" />
      <SheetSection
        id="how-i-work"
        ruled={false}
        gap="gap-y-10"
        className="sheet-pad pt-16"
        side={
          <h2 id="how-i-work" className="font-wide text-3xl font-semibold tracking-tight text-ink">
            How I work
          </h2>
        }
      >
        <dl className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
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
      </SheetSection>
    </>
  )
}
