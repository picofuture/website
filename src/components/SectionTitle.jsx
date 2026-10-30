import Link from 'next/link'

// A section heading on the sheet, with an optional link to see more.
export function SectionTitle({ id, action, children }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h2
        id={id}
        className="font-semiwide text-2xl font-semibold tracking-tight"
      >
        {children}
      </h2>
      {action && (
        <Link href={action.href} className="link text-sm text-ink-2">
          {action.label}
        </Link>
      )}
    </div>
  )
}
