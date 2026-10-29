'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { ThemeSwitch } from '@/components/ThemeSwitch'
import { nav } from '@/content/site'

function isCurrent(pathname, href) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavItem({ href, children }) {
  let pathname = usePathname()
  let current = isCurrent(pathname, href)

  return (
    <li>
      <Link
        href={href}
        aria-current={current ? 'page' : undefined}
        className={clsx(
          'block px-3 py-1.5 text-[0.9375rem] transition-colors',
          current ? 'cad-grips text-ink' : 'cad text-ink-2 hover:text-ink',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function MobileNav() {
  let panel = useRef(null)
  let pathname = usePathname()

  return (
    <>
      <button
        type="button"
        popoverTarget="site-menu"
        className="btn cad h-9 px-3.5 md:hidden"
      >
        Menu
      </button>
      <div
        ref={panel}
        id="site-menu"
        popover="auto"
        className="sheet-menu fixed inset-x-3 top-3 m-0 w-auto border border-ink bg-paper p-6 text-ink backdrop:bg-ink/30"
      >
        <div className="flex items-center justify-between">
          <span className="label">Sheets</span>
          <button
            type="button"
            popoverTarget="site-menu"
            popoverTargetAction="hide"
            className="label cad px-2 py-1 hover:text-ink"
          >
            Close
          </button>
        </div>
        <nav className="mt-4">
          <ul className="divide-y divide-rule border-y border-rule">
            {[{ href: '/', label: 'Home' }, ...nav].map((item) => {
              let current =
                item.href === '/' ? pathname === '/' : isCurrent(pathname, item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => panel.current?.hidePopover()}
                    aria-current={current ? 'page' : undefined}
                    className="font-semiwide flex items-center justify-between py-3 text-xl font-semibold"
                  >
                    {item.label}
                    {current && <span className="size-1.5 bg-[var(--grip)]" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <ThemeSwitch className="mt-6" />
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="site-header">
      <span className="header-marks" aria-hidden="true" />
      <div className="sheet-pad flex h-16 items-center gap-6">
        <div className="flex flex-1 items-center">
          <Link href="/" className="cad group flex items-center gap-2.5 py-1 pr-1">
            <Image
              src="dp.jpg"
              alt=""
              width={64}
              height={64}
              className="size-7 border border-rule-strong object-cover grayscale-[35%] transition group-hover:grayscale-0"
              priority
            />
            <span className="font-wide text-[0.9375rem] font-semibold tracking-tight whitespace-nowrap">
              Anfal Mushtaq
            </span>
          </Link>
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <NavItem key={item.href} href={item.href}>
                {item.label}
              </NavItem>
            ))}
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end">
          <ThemeSwitch className="hidden md:flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
