---
name: Anfal Mushtaq
description: A personal site set as an engineering drawing; drafting vellum by day, blueprint by night.
colors:
  vellum: "#f5f3ec"
  vellum-raised: "#fbfaf6"
  drafting-ink: "#1c2136"
  ink-graphite: "#454b61"
  ink-faint: "#636879"
  hairline: "#dad6cb"
  hairline-strong: "#b5b0a2"
  non-photo-blue: "#4f8fbd"
  grip-blue: "#3f86c2"
  redline: "#b83a1b"
  wash: "#e6eef1"
  grid-minor: "rgb(86 150 196 / 0.15)"
  grid-major: "rgb(86 150 196 / 0.27)"
  hatch: "rgb(28 33 54 / 0.075)"
  blueprint: "#0f2747"
  blueprint-raised: "#13305a"
  chalk: "#eaf1f8"
  chalk-2: "#bccbdd"
  chalk-3: "#93a8c3"
  chalk-rule: "rgb(220 233 248 / 0.17)"
  chalk-rule-strong: "rgb(220 233 248 / 0.34)"
  blueprint-blue: "#8cc4ef"
  blueprint-grip: "#9fd0ff"
  blueprint-redline: "#ff9e78"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 125"
  display-accent:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "1.14em"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  article-title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 112.5"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112.5"
  standfirst:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
  body-ui:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1rem
    letterSpacing: "0.09em"
    fontFeature: "tnum"
  code:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  none: "0px"
spacing:
  grid-minor: "24px"
  grid-major: "120px"
  sheet-pad-sm: "20px"
  sheet-pad-md: "40px"
  sheet-pad-lg: "64px"
  sheet-max: "84rem"
  measure: "40rem"
components:
  button:
    backgroundColor: "{colors.vellum-raised}"
    textColor: "{colors.drafting-ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
  button-hover:
    backgroundColor: "{colors.wash}"
  button-primary:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.drafting-ink}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.vellum-raised}"
  label:
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
  code-detail:
    backgroundColor: "{colors.vellum-raised}"
    textColor: "{colors.drafting-ink}"
    typography: "{typography.code}"
    rounded: "{rounded.none}"
    padding: "20px"
  figure-plate:
    backgroundColor: "{colors.vellum-raised}"
    rounded: "{rounded.none}"
    padding: "6px"
---

# Design System: Anfal Mushtaq

## Overview

**Creative North Star: "The Drafting Sheet"**

Every page is one sheet pinned to a drawing table. Structure comes from the conventions of an engineering drawing rather than from cards: a centred sheet with two ink rails, hatched margins outside it (the cut-section convention), a non-photo-blue graph grid that fades out before long text, full-bleed hairlines with registration ticks, and a title block where a footer would be. The light theme is drafting vellum with paper grain and a low mottle; the dark theme is the same sheet redrawn as a blueprint, chalk linework on Prussian blue. The two are named Paper and Blueprint in the UI, not light and dark.

The density is calm and editorial. Long-form reading is the main job, so the grid recedes under the article column, body text sits at 1.0625rem/1.75 in a 40rem measure, and decoration lives in the margins, rules and labels instead of in the text. Interaction borrows from CAD: a selected object shows square grips at its corners, hover springs crop marks out from an element, and the hero carries a crosshair that snaps to the 24px grid with a coordinate readout.

The system rejects the rounded-cards-on-zinc blog template: no radii, no drop shadows, no gradient fills. Depth is drawn, not lit.

**Key Characteristics:**
- One sheet, two inks: Paper (vellum) and Blueprint share every rule, only the token values swap.
- Hairlines, rails, ticks and title blocks carry all structure; corners are square everywhere.
- Wide Archivo for display, Instrument Serif italic as the hand-lettered counter-voice, Geist Mono tracked caps for fields.
- CAD selection vocabulary: grips mark the current/primary object, crop marks answer hover and focus.
- Lines draw themselves in (scaleX/scaleY from zero) with an exponential ease-out; all motion yields to reduced-motion.

## Colors

A near-monochrome drafting palette: warm vellum and cool blue-black ink, a non-photo-blue for the construction layer, and a single redline vermilion reserved for marks of change and attention.

### Primary
- **Drafting Ink** (drafting-ink): headings, primary text on controls, the outer frame of the title block, the primary button's outline, blockquote rule, table header rule. Chalk (chalk) takes this role on the blueprint sheet.

### Secondary
- **Non-Photo Blue** (non-photo-blue): the construction layer. Link underlines, the crosshair hairlines (mixed to 55%), and in its alpha forms the graph grid (grid-minor, grid-major). Blueprint Blue on the dark sheet.
- **Grip Blue** (grip-blue): CAD grips on selected objects, the square bullet in article lists and work highlights, the active marker in the mobile menu, the crosshair's grip square. Blueprint Grip on the dark sheet.

### Tertiary
- **Redline** (redline): the reviewer's red pencil. Hover colour for links, focus outline (1px dashed), text caret, the active (pressed) crop marks, the article-row arrow, the TOC hover rule, and the footer's revision delta. Blueprint Redline (blueprint-redline) on the dark sheet.

### Neutral
- **Vellum** (vellum) / **Blueprint** (blueprint): the sheet ground and the sticky header's fill.
- **Vellum Raised** (vellum-raised) / **Blueprint Raised** (blueprint-raised): plates pasted onto the sheet: buttons at rest, code details, figure frames.
- **Wash** (wash): a pale blue fill for the primary button, inline code, and button hover. On blueprint it is chalk at 8% alpha.
- **Ink Graphite** (ink-graphite) and **Ink Faint** (ink-faint): secondary text and body copy in articles; labels, registration ticks and dimension lines. Chalk-2 and chalk-3 on blueprint.
- **Hairline** (hairline) and **Hairline Strong** (hairline-strong): row dividers, sheet rails, section rules; button and frame outlines, header underline. Chalk-rule and chalk-rule-strong on blueprint.
- **Hatch** (hatch): the -45deg 1px-in-7px hatching in the margins outside the sheet.

### Named Rules
**The Redline Rule.** Redline appears only where a drafter would mark in red: state change (hover, press, focus, caret) and revision. It is never a fill, a heading colour, or a resting decoration.

**The Two Sheets Rule.** Every colour is a semantic token that swaps between `:root` and `.dark`. No component hard-codes a value that only works on one sheet.

## Typography

**Display Font:** Archivo, variable width axis (with ui-sans-serif, system-ui)
**Body Font:** Archivo at normal width
**Accent Font:** Instrument Serif, regular and italic (with ui-serif, Georgia)
**Label/Mono Font:** Geist Mono (with ui-monospace, Menlo)

**Character:** A wide engineering grotesk does the lettering of the drawing; a soft italic serif answers it like the draftsman's hand-written note. Mono caps fill the fields of the title block.

### Hierarchy
- **Display** (600, clamp 2.75 to 6rem, 0.94, width 125): the home hero line only, followed by a serif-italic continuation at 1.14em.
- **Headline** (600, clamp 2.25 to 4.25rem, 1.02, width 125): page titles on index pages.
- **Article Title** (600, clamp 2.125 to 3.75rem, 1.04, width 112.5): article headers, followed by a serif-italic standfirst (1.5 to 1.75rem).
- **Title** (600, 1.5rem, semiwide 112.5): section headings on the sheet ("Latest writing", "Work"); article h2 is 620 at 1.625rem semiwide with a hairline above it. Large wide numerals (3rem) head year groups in the article index.
- **Body** (400, 1.0625rem, 1.75, max 40rem column) in ink-graphite for articles; 1.125rem relaxed for intros.
- **Label** (400 mono, 0.6875rem, 0.09em tracking, uppercase, tabular numerals, ink-faint): dates, field names (Date, Reading, Drawn by), figure numbers, table heads, the theme switch, copy button.

### Named Rules
**The Field Label Rule.** Mono caps name a field that has a value next to it (a date, a figure number, a title-block cell, a table column). They are never a decorative tag floating above a heading.

**The Serif Is a Note Rule.** Instrument Serif is used only in italic, for the second voice: the hero continuation, standfirsts, role titles, blockquotes. Never for body or UI.

## Layout

A single centred sheet, max 84rem, bordered left and right by hairline rails and full viewport height; outside it the body shows hatching. Inner padding steps 20px, 40px (640px+), 64px (1024px+). Pages compose on a 12-column grid at lg: home splits writing 7 / work 5 with a hairline between; articles put a sticky 3-column "On this page" rail beside a 40rem column; work and article-index entries pair a sticky 3-4 column heading with 8-9 columns of content.

Headers that open a page sit on graph paper (24px minor, 120px major), which fades to clean paper at 55% of its height so text below is never gridded. A full-bleed rule with crosshair registration ticks on both rails separates the header from the body. Lists are registers: rows divided by hairlines, a fixed date column (6.75rem) and the title beside it. The footer is a title block: an ink-framed grid of labelled cells (Drawn by, Sheets, Sheet, Contact, Feeds) with a bottom strip carrying copyright, location and revision date.

Breakpoints follow Tailwind (640, 768, 1024, 1280). Below 768px the nav and theme switch collapse into a popover menu inset 12px from the viewport edges.

## Elevation & Depth

Flat. There are no box shadows anywhere. Depth is conveyed by drafting means: a raised plate is a lighter fill (vellum-raised) inside a hairline frame; the sticky header lifts off the grid by filling its ground and drawing its bottom rule from the centre as the page scrolls (scroll-driven, 0 to 140px), with crop marks registering at its corners. Paper grain and mottle sit over everything as a fixed, non-interactive layer.

### Named Rules
**The Drawn Depth Rule.** If something needs to stand forward, draw it: a frame, a fill one step lighter, grips or crop marks. Never a shadow.

## Shapes

Every corner is square (0px). Form comes from 1px lines: rails, rules, frames, extension ticks. Recurring geometry: 9px registration crosses, 9px crop-mark arms, 5px square grips and bullets, dimension lines with filled arrowheads and end ticks, a tabbed frame for code details, and the redline revision triangle in the title block.

## Components

### Buttons
Square, quiet, and outlined like a box on a form.
- **Shape:** square corners (0px), 44px tall, 20px inline padding, 0.875rem medium label.
- **Secondary (default):** vellum-raised fill, hairline-strong outline; hover fills with wash and darkens the outline to ink-faint. Crop marks spring out 6px from the corners on hover and focus.
- **Primary:** wash fill with an ink outline and grip squares at the corners (a selected object); on hover the fill drops to vellum-raised and the grips give way to crop marks.
- **Active:** crop marks turn redline.
- **Focus:** 1px dashed redline outline, 4px offset (global).

### Navigation
Header: wordmark (28px framed avatar, semibold wide name) left, nav centred, Paper/Blueprint switch right, 64px tall, sticky. Nav items are plain 0.9375rem text in ink-graphite; the current page wears grips, others show crop marks on hover. The theme switch uses the same grip/crop vocabulary on mono labels. Mobile: a "Menu" button opens a popover framed in ink with a hairline-divided list of semiwide 1.25rem items, a grip square marking the current sheet.

### Register Row (article list)
A hairline-topped row: mono date column, semibold 1.125rem title, optional two-line description in ink-graphite. The whole row is the link; hover underlines the title in non-photo-blue and slides in a redline arrow from the right.

### Dimension Line
A drafting dimension: end ticks, filled arrowheads, a hairline either side of a mono label. Used to state a measurement (career span) under the hero; on the home work list each tenure is drawn as a dimension on a shared year axis. Ticks and lines draw in on load.

### Code Detail
Code is a drawing detail: vellum-raised box in a hairline-strong frame, a tab on the top-left edge naming the language in a mono label, a copy control above the right edge. Prism tokens are inked from the code palette (blue-black keywords, rust functions, green strings) and swap with the sheet.

### Figure Plate
Images sit in a hairline-strong frame with 6px of vellum-raised mat, crop marks on hover, and a mono caption bar below: auto-numbered "Fig. n" left, caption right. The hero portrait is the primary plate: ink frame with grips, captioned "Fig. A".

### Title Block (footer)
An ink-framed grid of labelled cells divided by hairlines; the name set wide at 2.25rem with the role in serif italic beneath. The bottom strip is all mono labels, with the revision date in redline beside a triangle delta.

### Crosshair (signature)
On fine-pointer devices, the hero grid carries a CAD cursor: horizontal and vertical hairlines in non-photo-blue at 55%, a 9px grip square at the intersection, snapping to the 24px grid, with a live "X 000  Y 000" mono readout in the corner. Fades in on enter, out on leave; hidden from assistive tech.

### Inline elements
Links: ink text with a 1px non-photo-blue underline at 0.22em offset, turning redline on hover. Inline code: mono at 0.86em on wash with a hairline frame. Unordered lists use 5px grip-blue squares; ordered lists use mono markers. Horizontal rules are drawn as a dimension: a hairline with end ticks.

## Do's and Don'ts

### Do:
- **Do** build structure from 1px rules, rails, frames and registration ticks; keep every corner at 0px.
- **Do** mark the current or primary object with grips and answer hover/focus with crop marks; turn the marks redline on press.
- **Do** reference colours only through the sheet tokens so Paper and Blueprint both hold.
- **Do** set page openers on graph paper that fades before body text, and close them with a full-bleed ticked rule.
- **Do** use mono tracked caps for named fields with values: dates, figure numbers, title-block cells, table heads.
- **Do** draw lines in with scaleX/scaleY and the expo ease-out (cubic-bezier(0.16, 1, 0.3, 1)), staggered by a delay variable, and disable it under prefers-reduced-motion.

### Don't:
- **Don't** use rounded corners, drop shadows, or gradient fills; depth is drawn, never lit.
- **Don't** use redline as a fill, heading colour, or resting decoration; it marks change and attention only.
- **Don't** hard-code a colour that only reads on one sheet (for example a white tile behind content).
- **Don't** put mono labels above headings as decorative tags; a label names a field.
- **Don't** set body or UI text in Instrument Serif; it is the italic second voice only.
- **Don't** let the graph grid run under long-form text.
