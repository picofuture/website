// Runs the highlighter over one phrase of the text, if it's there.
export function Marked({ text, mark }) {
  let at = mark ? text.indexOf(mark) : -1
  if (at < 0) return text
  return (
    <>
      {text.slice(0, at)}
      <mark className="marker">{mark}</mark>
      {text.slice(at + mark.length)}
    </>
  )
}
