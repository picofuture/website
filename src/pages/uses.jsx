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
          content="The tools I actually use to build software, think clearly, and ship things that matter."
        />
        <meta property="og:title" content="Uses – Anfal Mushtaq’s tools and setup" />
        <meta property="og:description" content="The tools I actually use to build software, think clearly, and ship things that matter." />
        <meta property="og:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta property="og:url" content="https://anfalmushtaq.com/uses" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uses – Anfal Mushtaq’s tools and setup" />
        <meta name="twitter:description" content="The tools I actually use to build software, think clearly, and ship things that matter." />
        <meta name="twitter:image" content="https://cdn.anfalmushtaq.com/static/imgs/dp.jpg" />
        <meta name="twitter:creator" content="@AnfalMushtaq" />
      </Head>
      <SimpleLayout
        title="The tools I actually use."
        intro="I prefer fewer, better tools over a sprawling stack. Every item on this list earned its spot by surviving real work. I update it only when something actually changes — not when a new trend shows up."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="15” MacBook Pro (2019, Intel, 16GB RAM)">
              Primary machine. Quiet under load, reliable, and still gets the job done for everything short of heavy local model work.
            </Tool>
            <Tool title="15” Lenovo Legion Y550 (Intel i7, Nvidia 1050Ti, 32GB RAM)">
              My Linux workhorse. I like having a proper Linux environment for anything that benefits from full control over the stack.
            </Tool>
            <Tool title="11” iPad Pro with Apple Pencil">
              Where I think in longhand. Specs, diagrams, and messy early drafts start here before they become code or prose. A paper-like screen protector makes the difference.
            </Tool>
            <Tool title="Herman Miller Embody Chair">
              Worth every dollar. I sit in it for long stretches and it pays itself back in how my back feels at the end of the day.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Editor and IDE">
            <Tool title="Cursor">
              My primary editor these days. The tight AI integration fits how I actually build now — drafting with an agent, reviewing diffs, and keeping the human in the loop on the decisions that matter. I moved to it once the AI-assisted workflow outgrew bolting plugins onto a traditional IDE.
            </Tool>
            <Tool title="JetBrains Suite">
              Still in the toolbox for anything that benefits from deep language-specific tooling — PHPStorm, PyCharm, DataGrip, CLion. A decade of muscle memory doesn’t go away, and the refactoring and debugging stack is still best in class when I need it.
            </Tool>
          </ToolsSection>

          <ToolsSection title="AI in the loop">
            <Tool title="Claude and Claude Code">
              My primary AI pair. I drive most of my AI-assisted work through Claude Code in the terminal — it fits the way I actually build, instead of forcing me into an editor-centric workflow. I rely on it for exploration, scaffolding, and as a thinking partner on hard architectural calls.
            </Tool>
            <Tool title="Spec-driven development">
              Not a tool, a method. I treat specifications as the source of truth and have AI agents execute against them. The spec is what I write and review carefully; the code is what the agent produces from it. This is how I actually ship at the pace I do.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Thinking and writing">
            <Tool title="GoodNotes">
              Where my long-form notes, planning, and daily task tracking live. I keep a yearly planner inside it and revisit it often.
            </Tool>
            <Tool title="Freeform">
              My infinite whiteboard. I use it when I need to spread out and see a problem at once instead of scrolling through a linear document.
            </Tool>
            <Tool title="Figma">
              Started as a design tool, stayed as a virtual whiteboard for cross-functional collaboration. The real hook was collaboration, not the design surface.
            </Tool>
          </ToolsSection>

          <ToolsSection title="Staying organized">
            <Tool title="Trello">
              Simple, fast, and collaborative. I’ve tried heavier tools and kept coming back to this one because the UX gets out of my way.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
