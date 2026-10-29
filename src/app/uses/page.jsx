import { PageHeader } from '@/components/PageHeader'
import { uses, usesPage } from '@/content/site'

export const metadata = {
  title: 'Uses',
  description: usesPage.description,
  alternates: {
    canonical: '/uses',
    types: { 'text/markdown': '/uses.md' },
  },
  openGraph: {
    title: 'Uses – Anfal Mushtaq’s tools and setup',
    description: usesPage.description,
    url: '/uses',
  },
}

export default function Uses() {
  return (
    <>
      <PageHeader title={usesPage.title} intro={usesPage.intro} />
      <div className="sheet-pad">
        {uses.map((section) => (
          <section
            key={section.title}
            aria-labelledby={section.title}
            className="grid gap-x-10 gap-y-6 border-b border-rule py-12 lg:grid-cols-12"
          >
            <h2
              id={section.title}
              className="font-semiwide text-xl font-semibold tracking-tight text-ink lg:col-span-4"
            >
              {section.title}
            </h2>
            <ul className="space-y-8 lg:col-span-8">
              {section.tools.map((tool) => (
                <li key={tool.title}>
                  <h3 className="font-semibold text-ink">{tool.title}</h3>
                  <p className="mt-1.5 max-w-[68ch] text-[0.9875rem] leading-relaxed text-ink-2">
                    {tool.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  )
}
