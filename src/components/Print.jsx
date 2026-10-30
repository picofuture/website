import clsx from 'clsx'

// Where the tape goes on each kind of print: portraits get a strip across the
// top and one corner, article figures get both top corners.
const TAPE = {
  portrait: ['tape-top', 'tape-bl'],
  figure: ['tape-tl', 'tape-tr'],
}

// A photo printed and taped onto the sheet: a framed plate, paper tape, an
// optional tilt and a handwritten caption. It never reacts to the pointer,
// because a print stuck down on paper doesn't move.
export function Print({ kind = 'figure', tilt = 0, label, caption, className, style, children }) {
  return (
    <figure className={clsx('print', className)} style={{ ...style, '--tilt': `${tilt}deg` }}>
      <div className={clsx('print-plate', kind === 'portrait' && 'print-primary')}>
        {TAPE[kind].map((position) => (
          <span key={position} aria-hidden="true" className={clsx('tape', position)} />
        ))}
        {children}
      </div>
      {(label || caption) && (
        <figcaption className="print-caption">
          {typeof label === 'string' ? <span className="label">{label}</span> : label}
          {caption && <span className="print-note">{caption}</span>}
        </figcaption>
      )}
    </figure>
  )
}
