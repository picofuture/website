import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { work, workPage } from '@/content/site'

export const metadata = {
  title: 'Work',
  description: workPage.description,
  alternates: {
    canonical: '/projects',
    types: { 'text/markdown': '/projects.md' },
  },
  openGraph: {
    title: 'Work by Anfal Mushtaq – Selected projects and shipped systems',
    description: workPage.description,
    url: '/projects',
  },
}

export default function Projects() {
  return (
    <>
      <PageHeader title={workPage.title} intro={workPage.intro}>
        <div className="rise mt-8" style={{ '--delay': '160ms' }}>
          <Button variant="primary" href="/api/resume">
            Download CV
          </Button>
        </div>
      </PageHeader>
      <div className="sheet-pad">
        {work.map((entry) => (
          <article
            key={entry.company}
            className="grid gap-x-10 gap-y-5 border-b border-rule py-14 lg:grid-cols-12"
          >
            <header className="lg:col-span-4">
              <h2 className="font-wide text-2xl leading-tight font-semibold tracking-tight text-ink sm:text-3xl lg:sticky lg:top-28">
                {entry.company}
              </h2>
              <p className="mt-3 font-serif text-xl text-ink-2 italic">{entry.role}</p>
              <p className="label mt-3">{entry.period}</p>
            </header>
            <div className="lg:col-span-8">
              <p className="max-w-[68ch] text-[1.0625rem] leading-relaxed text-ink">
                {entry.summary}
              </p>
              <ul className="mt-6 max-w-[68ch] space-y-3 text-[0.9875rem] leading-relaxed text-ink-2">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-4">
                    <span className="mt-[0.6rem] size-[5px] flex-none bg-[var(--grip)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
