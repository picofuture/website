import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import cloudflareLoader from "@/lib/cloudflareImageLoader";
import { EMAIL_LINK, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TWITTER_LINK } from "@/lib/sharedConsts";


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Anfal Mushtaq</title>
        <meta name="description" content="Technical founder building agentic, AI-native tools from Vancouver. From 8 failed startups to 100K+ users—this is the story behind the systems." />

        <meta property="og:title" content="About Anfal Mushtaq – AI-native tools, LLM systems & startup lessons" />
        <meta property="og:description" content="Technical founder. Builder of agentic products. Writing and shipping from Vancouver." />
        <meta property="og:url" content="https://anfalmushtaq.com/about" />
        <meta property="og:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta property="og:type" content="profile" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Anfal Mushtaq – AI-native tools, LLM systems & startup lessons" />
        <meta name="twitter:description" content="Technical founder. Builder of agentic products. Writing and shipping from Vancouver." />
        <meta name="twitter:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta name="twitter:creator" content="@AnfalMushtaq" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                loader={cloudflareLoader}
                src="dp.jpg"
                width={640}
                height={640}
                alt="Anfal Mushtaq"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Anfal, a technical founder building AI tools that amplify humans, not replace them.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m a technical founder based in Vancouver, focused on building AI-native products that actually work and amplify humans, not replace them. After launching 8 startups and leading engineering at Logitech and Durable, I’ve learned how to move fast and scale systems.
              </p>
              <p>
                My strength lies in turning abstract problems into clear flows. Whether I’m integrating AI, shipping agentic workflows, or just cleaning up a spaghetti API, I bring structure to chaos.
              </p>
              <p>
                I’m not here to hype AI, I’m here to build with it. If you care about thoughtful systems, fast execution, and tools that amplify humans, not replace them, you’ll probably enjoy the work I share.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={TWITTER_LINK} icon={XIcon}>
                Follow on X
              </SocialLink>
              <SocialLink href={GITHUB_LINK} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={LINKEDIN_LINK} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${EMAIL_LINK}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {EMAIL_LINK}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
