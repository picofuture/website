'use client'

import { usePathname } from 'next/navigation'

import { nav } from '@/content/site'

export function SheetName() {
  let pathname = usePathname()

  if (pathname === '/') return 'Home'
  if (pathname.startsWith('/articles/')) return 'Article'
  return nav.find((item) => pathname.startsWith(item.href))?.label ?? 'Sheet'
}
