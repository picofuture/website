export function PageHeader({ title, intro, children }) {
  return (
    <>
      <header className="graph sheet-pad pt-16 pb-16 sm:pt-24 sm:pb-20">
        <h1 className="rise font-wide max-w-4xl text-[clamp(2.25rem,5.6vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-ink">
          {title}
        </h1>
        {intro && (
          <p
            className="rise mt-6 max-w-2xl text-lg leading-relaxed text-ink-2"
            style={{ '--delay': '100ms' }}
          >
            {intro}
          </p>
        )}
        {children}
      </header>
      <div className="rule-x" />
    </>
  )
}
