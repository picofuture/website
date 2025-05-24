import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'
import { BLOG_AUTHOR_ANFAL } from "@/lib/sharedConsts";

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Anfal Mushtaq</title>
        <meta name="description" content="Technical insights and behind-the-scenes lessons on building AI-native tools, shipping agentic products, and navigating entrepreneurship—from 8 failed startups to 100K+ users." />

        <meta property="og:title" content="Articles by Anfal Mushtaq – AI-native tools, LLMs & product insights" />
        <meta property="og:description" content="Honest, actionable lessons from building AI-native tools, scaling agentic systems, and surviving the startup grind." />
        <meta property="og:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta property="og:url" content="https://anfalmushtaq.com/articles" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Articles by Anfal Mushtaq – AI-native tools, LLMs & product insights" />
        <meta name="twitter:description" content="Honest, actionable lessons from building AI-native tools, scaling agentic systems, and surviving the startup grind." />
        <meta name="twitter:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta name="twitter:creator" content="@AnfalMushtaq" />
      </Head>
      <SimpleLayout
        title="Writing on building agentic systems, shipping products, and staying human in the loop."
        intro="All of my long-form thoughts on programming, leadership, philosophy, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
