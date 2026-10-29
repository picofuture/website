import Link from 'next/link'
import clsx from 'clsx'

export function Button({ variant = 'secondary', className, href, ...props }) {
  className = clsx(
    'btn',
    variant === 'primary' ? 'btn-primary cad-grips' : 'cad',
    className,
  )

  if (!href) return <button className={className} {...props} />
  if (/^(https?:|mailto:|\/api\/)/.test(href)) {
    return <a href={href} className={className} {...props} />
  }
  return <Link href={href} className={className} {...props} />
}
