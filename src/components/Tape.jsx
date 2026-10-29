import clsx from 'clsx'

// A strip of paper tape holding a print onto the sheet.
export function Tape({ className }) {
  return <span aria-hidden="true" className={clsx('tape', className)} />
}
