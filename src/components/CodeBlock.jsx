import { Children, isValidElement } from 'react'
import clsx from 'clsx'

import { CopyButton } from '@/components/CopyButton'

const LANGUAGE_NAMES = {
  js: 'JavaScript',
  jsx: 'JSX',
  ts: 'TypeScript',
  tsx: 'TSX',
  sh: 'Shell',
  bash: 'Shell',
  shell: 'Shell',
  py: 'Python',
  python: 'Python',
  json: 'JSON',
  yaml: 'YAML',
  yml: 'YAML',
  md: 'Markdown',
  markdown: 'Markdown',
  html: 'HTML',
  css: 'CSS',
  sql: 'SQL',
  php: 'PHP',
  go: 'Go',
}

// Code is set as a drawing detail: a framed box with a tab naming what it holds.
export function CodeBlock({ children, className, ...props }) {
  let code = Children.toArray(children).find(isValidElement)
  let lang = /language-([\w-]+)/.exec(
    `${className ?? ''} ${code?.props?.className ?? ''}`,
  )?.[1]
  let name = lang ? (LANGUAGE_NAMES[lang] ?? lang) : 'Detail'

  return (
    <div className="code-detail relative mt-10! mb-8 border border-rule-strong bg-paper-raised">
      <div className="absolute -top-px left-4 flex -translate-y-full items-center border border-b-0 border-rule-strong bg-paper-raised px-2.5 py-1">
        <span className="label text-ink-2">{name}</span>
      </div>
      <div className="absolute -top-8 right-0">
        <CopyButton />
      </div>
      <pre
        className={clsx(
          className,
          'overflow-x-auto p-5 font-mono text-[0.8125rem] text-ink',
          lang ? 'leading-[1.7]' : 'leading-[1.3]',
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}
