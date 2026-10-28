import Link from 'next/link'

import { formatSheetDate } from '@/lib/formatDate'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path d="M3 8h9.5M9 4.5 12.5 8 9 11.5" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

export function ArticleRow({ article, headingLevel: Heading = 'h3' }) {
  return (
    <article className="group relative grid gap-x-6 gap-y-1 border-t border-rule py-6 sm:grid-cols-[6.75rem_1fr]">
      <time dateTime={article.date} className="label pt-1.5">
        {formatSheetDate(article.date)}
      </time>
      <div>
        <Heading className="text-lg leading-snug font-semibold text-ink">
          <Link
            href={`/articles/${article.slug}`}
            className="decoration-blue underline-offset-4 group-hover:underline after:absolute after:inset-0"
          >
            {article.title}
          </Link>
        </Heading>
        <p className="mt-1.5 line-clamp-2 max-w-[68ch] text-[0.9375rem] leading-relaxed text-ink-2">
          {article.description}
        </p>
      </div>
      <ArrowIcon className="absolute top-7 right-0 hidden size-4 -translate-x-2 text-accent opacity-0 transition duration-300 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100 sm:block" />
    </article>
  )
}
