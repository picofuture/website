import Link from 'next/link'
import clsx from 'clsx'

import { SheetName } from '@/components/SheetName'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import { nav, person } from '@/content/site'
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from '@/lib/sharedConsts'

const revision = new Date().toISOString().slice(0, 10).replaceAll('-', '.')

function Cell({ label, className, children }) {
  return (
    <div className={clsx('border-rule p-4 sm:p-5', className)}>
      <p className="label">{label}</p>
      <div className="mt-2 text-sm text-ink">{children}</div>
    </div>
  )
}

const socials = [
  { href: TWITTER_LINK, label: 'X', icon: XIcon },
  { href: GITHUB_LINK, label: 'GitHub', icon: GitHubIcon },
  { href: LINKEDIN_LINK, label: 'LinkedIn', icon: LinkedInIcon },
]

// The drawing's title block: who drew it, which sheet, which revision.
export function Footer() {
  return (
    <footer className="sheet-pad pt-28 pb-10">
      <div className="grid border border-ink sm:grid-cols-12">
        <div className="border-b border-rule p-4 sm:col-span-12 sm:p-5 lg:col-span-5 lg:row-span-2 lg:border-r lg:border-b-0">
          <p className="label">Drawn by</p>
          <p className="font-wide mt-3 text-3xl leading-none font-semibold tracking-tight sm:text-4xl">
            {person.name}
          </p>
          <p className="mt-3 font-serif text-xl text-ink-2 italic">
            {person.jobTitle}
          </p>
        </div>
        <Cell
          label="Sheets"
          className="border-b sm:col-span-7 sm:border-r lg:col-span-4"
        >
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {[{ href: '/', label: 'Home' }, ...nav].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell label="Sheet" className="border-b sm:col-span-5 lg:col-span-3">
          <SheetName />
        </Cell>
        <Cell
          label="Contact"
          className="border-b sm:col-span-7 sm:border-r sm:border-b-0 lg:col-span-4"
        >
          <a href={`mailto:${person.email}`} className="link">
            {person.email}
          </a>
          <ul className="mt-3 flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="me noopener"
                  aria-label={label}
                  className="cad grid size-8 place-items-center text-ink-2 hover:text-ink"
                >
                  <Icon className="size-[1.125rem] fill-current" />
                </a>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell label="Feeds" className="sm:col-span-5 lg:col-span-3">
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            <li>
              <a href="/rss/feed.xml" className="link">
                RSS
              </a>
            </li>
            <li>
              <a href="/rss/feed.json" className="link">
                JSON
              </a>
            </li>
            <li>
              <a href="/llms.txt" className="link">
                llms.txt
              </a>
            </li>
          </ul>
        </Cell>
        <div className="flex flex-col gap-1 border-t border-ink px-4 py-3 sm:col-span-12 sm:flex-row sm:justify-between sm:px-5">
          <p className="label">
            &copy; {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <p className="label flex items-center gap-2">
            {person.location} ·
            <span className="inline-flex items-center gap-1.5 text-accent">
              <svg viewBox="0 0 12 11" aria-hidden="true" className="h-2.5 w-3 flex-none">
                <path d="M6 1 11 10H1z" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
              Rev {revision}
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
