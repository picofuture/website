'use client'

import { useState } from 'react'

export function CopyButton() {
  let [copied, setCopied] = useState(false)

  async function copy(event) {
    let text =
      event.currentTarget.closest('.code-detail')?.querySelector('pre')?.innerText ?? ''
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="label cad px-2 py-1 transition-colors hover:text-ink"
    >
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}
