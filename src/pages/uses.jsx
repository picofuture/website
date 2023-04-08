import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Anfal Mushtaq</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="15” MacBook Pro, Intel, 16GB RAM (2019)">
              One of my favorite computers to use. I really like the performance
              output and responsiveness. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="15” Lenovo Legion Y550, Intel Core i7, Nvidia 1050Ti, 32GB RAM (2019)">
              As much as I love my mac, I am also a big open source guy. I love using Linux as my main OS.
              It does require a bit of hands on experience but it&apos;s worth it.
            </Tool>
            <Tool title="11” IPad Pro (2020)">
              I am a big fan of writing all of my notes &amp; thoughts. Whether they are work related or personal, I love writing them down on my IPad.
              Side note, if you are going to use IPad for writing, I highly recommend using the Apple Pencil and a paper-like screen protector.
            </Tool>
            <Tool title="Herman Miller Embody Chair">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Jetbrains Suite">
              I am a big fan of the Jetbrains suite of tools. I use PHPStorm, PyCharm, DataGrip, and CLion as my main IDEs.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I started using Figma as just a design tool but now it’s become
              my virtual whiteboard. I never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="GoodNotes">
              I use it for taking notes, writing down ideas, and keeping track of my daily tasks inside a yearly planner.
            </Tool>
            <Tool title="Freeform">
              I really love this free app from Apple. It allows me to freely jot down my thoughts and ideas without any distractions. It basically a really
              big whiteboard for you to write on.
            </Tool>
            <Tool title="Trello">
              Simple UX and great collaboration features. I use it for keeping track of all of my tasks. I really love the fact
              that it&apos;s free and extremely easy to use.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
