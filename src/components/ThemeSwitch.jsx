'use client'

import { useSyncExternalStore } from 'react'
import clsx from 'clsx'

function subscribe(callback) {
  let observer = new MutationObserver(callback)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
  return () => observer.disconnect()
}

function getMode() {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function setMode(mode) {
  let root = document.documentElement
  root.classList.add('[&_*]:!transition-none')
  root.classList.toggle('dark', mode === 'dark')
  window.setTimeout(() => root.classList.remove('[&_*]:!transition-none'), 0)

  let systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  try {
    if (mode === systemMode) delete window.localStorage.isDarkMode
    else window.localStorage.isDarkMode = String(mode === 'dark')
  } catch {}
}

const options = [
  { mode: 'light', label: 'Light' },
  { mode: 'dark', label: 'Dark' },
]

export function ThemeSwitch({ className }) {
  let mode = useSyncExternalStore(subscribe, getMode, () => null)

  return (
    <div
      role="group"
      aria-label="Theme"
      className={clsx('flex items-center gap-1', className)}
    >
      {options.map((option) => {
        let active = mode === option.mode
        return (
          <button
            key={option.mode}
            type="button"
            aria-pressed={active}
            onClick={() => setMode(option.mode)}
            className={clsx(
              'label h-7 px-2.5 transition-colors',
              active ? 'cad-grips text-ink' : 'cad hover:text-ink',
            )}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
