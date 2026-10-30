// A named field and its value, like a cell on a drawing's title block.
// Goes inside a <dl>.
export function Field({ label, children, className }) {
  return (
    <div className={className}>
      <dt className="label">{label}</dt>
      <dd className="mt-1 text-sm text-ink">{children}</dd>
    </div>
  )
}
