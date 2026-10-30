import clsx from 'clsx'

const SPLITS = {
  '4/8': ['lg:col-span-4', 'lg:col-span-8'],
  '3/9': ['lg:col-span-3', 'lg:col-span-9'],
}

// A ruled band of the sheet: a heading column that stays in view on the
// left, content on the right. Stacks on small screens.
export function SheetSection({
  as: Tag = 'section',
  id,
  side,
  split = '4/8',
  ruled = true,
  // Vertical rhythm: the gap between heading and content when stacked, and
  // the band's padding when ruled.
  gap = 'gap-y-6',
  pad = 'py-12',
  className,
  children,
}) {
  let [left, right] = SPLITS[split]

  return (
    <Tag
      aria-labelledby={id}
      className={clsx(
        'grid gap-x-10 lg:grid-cols-12',
        gap,
        ruled && ['border-b border-rule', pad],
        className,
      )}
    >
      <div className={left}>
        <div className="lg:sticky lg:top-28">{side}</div>
      </div>
      <div className={clsx('min-w-0', right)}>{children}</div>
    </Tag>
  )
}
