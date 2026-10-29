import clsx from 'clsx'

function Arrow({ flip }) {
  return (
    <svg
      viewBox="0 0 10 8"
      aria-hidden="true"
      className={clsx('h-2 w-2.5 flex-none fill-current', flip && 'rotate-180')}
    >
      <path d="M0 4 10 0v8z" />
    </svg>
  )
}

// A drafting dimension: extension ticks, arrowheads and the measurement in the gap.
export function DimensionLine({ children, className, delay = 0 }) {
  return (
    <div
      className={clsx('flex items-center text-ink-3', className)}
      style={{ '--delay': `${delay}ms` }}
    >
      <span className="draw-y h-4 w-px flex-none bg-current" />
      <Arrow />
      <span className="draw-x h-px flex-1 bg-current" />
      <span className="label rise px-3 text-ink-2">{children}</span>
      <span className="draw-x h-px flex-1 origin-right! bg-current" />
      <Arrow flip />
      <span className="draw-y h-4 w-px flex-none bg-current" />
    </div>
  )
}
