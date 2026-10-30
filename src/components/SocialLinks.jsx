import clsx from 'clsx'

import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from '@/components/SocialIcons'
import { person } from '@/content/site'
import { GITHUB_LINK, LINKEDIN_LINK, TWITTER_LINK } from '@/lib/sharedConsts'

const socials = [
  { href: TWITTER_LINK, name: 'X', icon: XIcon },
  { href: GITHUB_LINK, name: 'GitHub', icon: GitHubIcon },
  { href: LINKEDIN_LINK, name: 'LinkedIn', icon: LinkedInIcon },
]

export function EmailLink({ className }) {
  return (
    <a href={`mailto:${person.email}`} className={clsx('link', className)}>
      {person.email}
    </a>
  )
}

// Where to find me. "icons" is a row of icon buttons (hero, title block);
// "list" is a ruled list with labels and the email address (about page).
export function SocialLinks({ variant = 'icons', size = 'md', className }) {
  if (variant === 'list') {
    let items = [
      ...socials.map(({ href, name, icon }) => ({
        href,
        icon,
        label: `Follow on ${name}`,
        external: true,
      })),
      { href: `mailto:${person.email}`, icon: MailIcon, label: person.email },
    ]
    return (
      <ul className={clsx('border-t border-rule', className)}>
        {items.map(({ href, icon: Icon, label, external }) => (
          <li key={href} className="border-b border-rule">
            <a
              href={href}
              {...(external && { target: '_blank', rel: 'me noopener' })}
              className="group flex items-center gap-4 py-3.5 text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              <Icon className="size-5 flex-none fill-ink-3 transition-colors group-hover:fill-accent" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul
      className={clsx(
        'flex items-center',
        size === 'md' ? 'gap-1' : 'gap-2',
        className,
      )}
    >
      {socials.map(({ href, name, icon: Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="me noopener"
            aria-label={`Follow on ${name}`}
            className={clsx(
              'cad grid place-items-center text-ink-2 transition-colors hover:text-ink',
              size === 'md' ? 'size-11' : 'size-8',
            )}
          >
            <Icon
              className={clsx(
                'fill-current',
                size === 'md' ? 'size-5' : 'size-[1.125rem]',
              )}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
