import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import cloudflareLoader from "@/lib/cloudflareImageLoader";
import {EMAIL_LINK, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TWITTER_LINK} from "@/lib/sharedConsts";


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
        <meta
          name="description"
          content="I’m Anfal Mushtaq. I live in Vancouver, Canada, where I design the future."
        />
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
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Anfal Mushtaq. I live in Vancouver, Canada, where I design the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember, I used to break open my toys and use the parts to make new things.
                I’ve always been fascinated by how things work, and I love to build things that may one day define the future.
              </p>
              <p>
                I am a bit of a philosopher as well. One of the things I always wonder is how will we be living as a society a thousand years in the future?
              </p>
              <p>
                Unfortunately for me, I can&apos;t live that long to see it, so I&apos;m trying to visualize it by making contributions towards it.
              </p>
              <p>
                I have worked on a lot of ideas. Some of them are very tame like creating a better tourism experience for people and some of them are very ambitious like how can I contribute towards creating a dyson sphere that may push us to becoming a Type 2 civilization.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={TWITTER_LINK} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href={INSTAGRAM_LINK} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
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
