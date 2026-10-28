'use client'

// Runs before paint so the sheet never flashes the wrong theme.
const modeScript = `(() => {
  let q = window.matchMedia('(prefers-color-scheme: dark)')
  function update() {
    let stored = null
    try { stored = window.localStorage.isDarkMode } catch {}
    let dark = stored === 'true' || (stored === undefined && q.matches)
    document.documentElement.classList.toggle('dark', dark)
  }
  update()
  q.addEventListener('change', update)
})()`

// Emitted only in the server HTML, where it runs before first paint. On the
// client it renders nothing: the script has already run, and React 19 warns
// about (and never executes) script tags it creates itself, which happens when
// the layout is rebuilt client-side, e.g. returning with the back button.
export function ThemeScript() {
  if (typeof window !== 'undefined') return null
  return <script dangerouslySetInnerHTML={{ __html: modeScript }} />
}
