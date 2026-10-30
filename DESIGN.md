---
name: Anfal Mushtaq
description: A personal site drawn by hand in graphite on an engineering sheet; drafting vellum by day, blueprint by night.
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
  highlighter: "#f2cf3a"
  blueprint-highlighter: "#ffe066"
  tape: "rgb(222 213 182 / 0.72)"
  blueprint-tape: "rgb(220 233 248 / 0.3)"
typography:
  display:
    fontFamily: "Shantell Sans, ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.04em"
    fontVariation: "'INFM' 55, 'BNCE' 15"
  display-accent:
    fontFamily: "Caveat, Segoe Print, Bradley Hand, cursive"
    fontSize: "1.14em"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Shantell Sans, ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'INFM' 55, 'BNCE' 15"
  article-title:
    fontFamily: "Shantell Sans, ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontVariation: "'INFM' 55, 'BNCE' 15"
  title:
    fontFamily: "Shantell Sans, ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "-0.025em"
    fontVariation: "'INFM' 55, 'BNCE' 15"
  standfirst:
    fontFamily: "Caveat, Segoe Print, Bradley Hand, cursive"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Shantell Sans, ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.75
    fontVariation: "'INFM' 15, 'BNCE' 0"
  body-ui:
    fontFamily: "Shantell Sans, ui-rounded, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Architects Daughter, Segoe Print, ui-rounded, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1rem
    letterSpacing: "0.09em"
    fontFeature: "tnum"
  code:
    fontFamily: "JetBrains Mono (diagram glyphs only), Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
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

**Creative North Star: "The Drafting Sheet, Drawn by Hand"**

Every page is one sheet pinned to a drawing table, and everything on it was drawn in graphite. Structure comes from the conventions of an engineering drawing rather than from cards: a centred sheet with two ink rails, hatched margins outside it (the cut-section convention), a non-photo-blue graph grid that fades out before long text, full-bleed hairlines with registration ticks, and a title block where a footer would be. The light theme is drafting vellum with paper grain and a low mottle; the dark theme is the same sheet redrawn as a blueprint, chalk linework on Prussian blue. The themes are called Paper and Blueprint in this system; the UI switch labels them Light and Dark so visitors recognise it.

The density is calm and editorial. Long-form reading is the main job, so the grid recedes under the article column, body text sits at 1.0625rem/1.75 in a 40rem measure, and decoration lives in the margins, rules and labels instead of in the text. Interaction borrows from CAD: a selected object shows square grips at its corners, hover springs crop marks out from an element, and the hero carries a crosshair that snaps to the 24px grid with a coordinate readout.

Two layers, two materials. The sheet itself is printed: vellum, grid, rails, hatched margins, section rules and the crosshair stay crisp and mechanical. Everything drawn on the sheet (type, frames, buttons, rows, figures) is graphite: lines waver slightly, strokes break up on the paper's tooth, and the lettering is hand-drawn. A few real paper props sit on top: tape holding prints down and highlighter over marked text.

The system rejects the rounded-cards-on-zinc blog template: no radii, no drop shadows, no gradient fills. Depth is drawn, not lit.

**Key Characteristics:**
- One sheet, two inks: Paper (vellum) and Blueprint share every rule, only the token values swap.
- Hairlines, rails, ticks and title blocks carry all structure; corners are square everywhere.
- Hand-drawn type throughout: Shantell Sans for headings and reading, Caveat for the handwritten second voice, Architects Daughter drafting caps for fields.
- Printed sheet, graphite content: the pencil filter goes on what is drawn, never on the paper.
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

### Highlighter and tape
- **Highlighter** (highlighter / blueprint-highlighter): marker ink over a marked phrase and over the reader's text selection. Multiplied on vellum, screened on blueprint. Text under the marker is set in Drafting Ink (Chalk on blueprint), one step darker than body copy, so it reads through the ink.
- **Tape** (tape / blueprint-tape): translucent paper tape with torn ends holding photos and figures onto the sheet.

### Named Rules
**The Redline Rule.** Redline appears only where a drafter would mark in red: state change (hover, press, focus, caret) and revision. It is never a fill, a heading colour, or a resting decoration.

**The Two Sheets Rule.** Every colour is a semantic token that swaps between `:root` and `.dark`. No component hard-codes a value that only works on one sheet.

## Typography

**Display and Body Font:** Shantell Sans, variable, with its informality axis dialled per role: INFM 55 / bounce 15 for headings, INFM 15 / bounce 0 for reading (with ui-rounded, system-ui)
**Accent Font:** Caveat (with Segoe Print, Bradley Hand, cursive). No italic exists and none is synthesised (`font-synthesis: none`), so `italic` classes render it upright.
**Label Font:** Architects Daughter, uppercase drafting lettering
**Code Font:** Geist Mono, preceded by a 4KB JetBrains Mono subset (`src/fonts/jetbrains-mono-diagram.woff2`) limited to arrows, box-drawing and geometric shapes (U+2190–21FF, U+2500–25FF). Geist Mono's web subsets lack those glyphs; without the subset they fall back to wider fonts and break ASCII diagrams. Both have a 0.6em advance.

**Character:** The whole drawing is lettered by hand. Headings are a looser hand, body text a steadier one so a ten-minute article stays readable, the second voice is a quick handwritten note, and fields are filled in drafting caps.

### Hierarchy
- **Display** (600, clamp 2.75 to 6rem, 0.94, width 125): the home hero line only, followed by a serif-italic continuation at 1.14em.
- **Headline** (600, clamp 2.25 to 4.25rem, 1.02, width 125): page titles on index pages.
- **Article Title** (600, clamp 2.125 to 3.75rem, 1.04, width 112.5): article headers, followed by a serif-italic standfirst (1.5 to 1.75rem).
- **Title** (600, 1.5rem, semiwide 112.5): section headings on the sheet ("Latest writing", "Work"); article h2 is 620 at 1.625rem semiwide with a hairline above it. Large wide numerals (3rem) head year groups in the article index.
- **Body** (400, 1.0625rem, 1.75, max 40rem column) in ink-graphite for articles; 1.125rem relaxed for intros.
- **Label** (Architects Daughter 400, 0.6875rem, 0.09em tracking, uppercase, ink-faint): dates, field names (Date, Reading, Drawn by), figure numbers, table heads, the theme switch, copy button.

### Named Rules
**The Field Label Rule.** Drafting caps name a field that has a value next to it (a date, a figure number, a title-block cell, a table column). They are never a decorative tag floating above a heading.

**The Handwritten Note Rule.** Caveat is used only for the second voice: the hero continuation, standfirsts, role titles, blockquotes, the footer role. Never for body or UI.

## Layout

A single centred sheet, max 84rem, bordered left and right by hairline rails and full viewport height; outside it the body shows hatching. Inner padding steps 20px, 40px (640px+), 64px (1024px+). Pages compose on a 12-column grid at lg: home splits writing 7 / work 5 with a hairline between; articles put a sticky 3-column "On this page" rail beside a 40rem column; work and article-index entries pair a sticky 3-4 column heading with 8-9 columns of content.

Headers that open a page sit on graph paper (24px minor, 120px major), which fades to clean paper at 55% of its height so text below is never gridded. A full-bleed rule with crosshair registration ticks on both rails separates the header from the body. Lists are registers: rows divided by hairlines, a fixed date column (6.75rem) and the title beside it. The footer is a title block: an ink-framed grid of labelled cells (Drawn by, Sheets, Sheet, Contact, Feeds) with a bottom strip carrying copyright, location and revision date.

Breakpoints follow Tailwind (640, 768, 1024, 1280). Below 768px the nav and theme switch collapse into a popover menu inset 12px from the viewport edges.

## Elevation & Depth

Flat. There are no box shadows anywhere. Paper tape is the only object that sits physically on top of the sheet, and it is a translucent flat fill. Depth is conveyed by drafting means: a raised plate is a lighter fill (vellum-raised) inside a hairline frame; the sticky header lifts off the grid by filling its ground and drawing its bottom rule from the centre as the page scrolls (scroll-driven, 0 to 140px), with crop marks registering at its corners. Paper grain and mottle sit over everything as a fixed, non-interactive layer.

## Graphite

`src/components/PencilFilters.jsx` defines one SVG filter, `#pencil`, mounted once in the layout: a slow low-frequency displacement (scale 2.2, frequency 0.018) so long rules and frames waver by about a pixel, then fine fractal-noise "tooth" composited in so strokes break up like lead on paper. It is applied in `globals.css` to each drawn block inside `main`, the header and the footer: the outermost heading, paragraph, list item, figure, table, code detail, link, control, label or bordered row. Bordered containers that hold whole rows or sections (`:has(article, section)`) are skipped so their rows filter one by one. Never filter a whole section: a filtered region as tall as a long article runs past what mobile Safari will render, and the content disappears. The paper, grid, rails, section rules and crosshair are excluded. Photos keep their colour; they pick up the tooth from their container. Hover animations and scrolling stay at full frame rate with the filter on.

The marks drawn on top of type are hand-made too: links carry a wavy pencil underline (an SVG tile, non-photo blue, redline on hover), article bullets are small pencil scribbles in grip blue, and the article-row arrow is drawn freehand.

### Named Rules
**The Printed Sheet Rule.** The pencil goes on content, never on the paper. Grid, rails, hatching, section rules and the crosshair stay crisp.

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
Header: wordmark (28px framed avatar, semibold wide name) left, nav centred, Light / Dark switch right (themes named Paper and Blueprint), 64px tall, sticky. Nav items are plain 0.9375rem text in ink-graphite; the current page wears grips, others show crop marks on hover. The theme switch uses the same grip/crop vocabulary on mono labels. Mobile: a "Menu" button opens a popover framed in ink with a hairline-divided list of semiwide 1.25rem items, a grip square marking the current sheet.

### Register Row (article list)
A hairline-topped row: date column in drafting caps, semibold 1.125rem title, optional two-line description in ink-graphite. The whole row is the link; hover draws the pencil underline under the title (`.scribble-hover`) and slides in a hand-drawn redline arrow from the right.

### Dimension Line
A drafting dimension: end ticks, filled arrowheads, a hairline either side of a mono label. Used to state a measurement (career span) under the hero; on the home work list each tenure is drawn as a dimension on a shared year axis. Ticks and lines draw in on load.

### Code Detail
Code is a drawing detail: vellum-raised box in a hairline-strong frame, a tab on the top-left edge naming the language in a label, a copy control above the right edge. Prism tokens are inked from the code palette (blue-black keywords, rust functions, green strings) and swap with the sheet. Code and ASCII diagrams stay monospaced (they are the one typed thing on the sheet); every glyph a diagram uses renders at the same 0.6em advance, and wide diagrams scroll inside their box on phones.

### Prints (figures and the portrait)
Every photo on the sheet is a print taped onto it, rendered by one component: `<Print>` (`src/components/Print.jsx`). It draws the plate (a hairline-strong frame with 6px of vellum-raised mat), the tape, the tilt and the caption, so no page builds this by hand.
- **Kinds:** `kind="figure"` (article images, via `BlogImage`) is taped at both top corners and stays level, so screenshots and diagrams stay readable. `kind="portrait"` is the primary plate: an ink frame with static grips, taped across the top and at the bottom-left corner.
- **Portrait:** `<Portrait>` (`src/components/Portrait.jsx`) is "Fig. A" on both the home and about pages. Home tilts it -1.5°, about +1.25°. Only portraits tilt.
- **Caption:** the field label ("Fig. A", auto-numbered "Fig. n") stays in drafting caps. The note beside it (location, figure caption) is pencilled in Caveat at 1.2rem, and it stays level when the plate tilts.
- **No hover state:** a print stuck down on paper doesn't move, so prints have no crop marks, lift or straightening on hover.

### Highlighter
Marker ink with uneven ends. `<mark className="marker">` highlights one phrase (the hero marks the reach figures, set by `home.introMark` in `src/content/site.js`) and swipes in once after load. `<Highlighter />` in the layout replaces the browser's selection box with the same ink over whatever the reader selects; native selection is made transparent only once it has mounted, and inputs keep the normal selection.

### Title Block (footer)
An ink-framed grid of labelled cells divided by hairlines; the name set wide at 2.25rem with the role in serif italic beneath. The bottom strip is all mono labels, with the revision date in redline beside a triangle delta.

### Crosshair (signature)
On fine-pointer devices, the hero grid carries a CAD cursor: horizontal and vertical hairlines in non-photo-blue at 55%, a 9px grip square at the intersection, snapping to the 24px grid, with a live "X 000  Y 000" mono readout in the corner. Fades in on enter, out on leave; hidden from assistive tech.

### Inline elements
Links: ink text with a wavy pencil underline in non-photo blue, turning redline on hover. Inline code: mono at 0.86em on wash with a hairline frame. Unordered lists in articles use grip-blue pencil scribbles (work highlights keep 5px squares); ordered lists use drafting-caps markers. Horizontal rules are drawn as a dimension: a hairline with end ticks.

## Do's and Don'ts

### Do:
- **Do** build structure from 1px rules, rails, frames and registration ticks; keep every corner at 0px.
- **Do** mark the current or primary object with grips and answer hover/focus with crop marks; turn the marks redline on press.
- **Do** reference colours only through the sheet tokens so Paper and Blueprint both hold.
- **Do** set page openers on graph paper that fades before body text, and close them with a full-bleed ticked rule.
- **Do** use mono tracked caps for named fields with values: dates, figure numbers, title-block cells, table heads.
- **Do** put new content inside the pencil filter's reach and keep new paper (grids, rails, rules) outside it.
- **Do** keep code and ASCII diagrams monospaced, and check new diagram glyphs render at the code font's 0.6em advance.
- **Do** draw lines in with scaleX/scaleY and the expo ease-out (cubic-bezier(0.16, 1, 0.3, 1)), staggered by a delay variable, and disable it under prefers-reduced-motion.

### Don't:
- **Don't** use rounded corners, drop shadows, or gradient fills; depth is drawn, never lit.
- **Don't** use redline as a fill, heading colour, or resting decoration; it marks change and attention only.
- **Don't** hard-code a colour that only reads on one sheet (for example a white tile behind content).
- **Don't** put mono labels above headings as decorative tags; a label names a field.
- **Don't** set body or UI text in Caveat; it is the handwritten second voice only.
- **Don't** give prints a hover state, or hand-build a framed photo; use `<Print>`.
- **Don't** fake paper with scanned textures, folded panels, creases or 3D lighting; paper comes from the tooth, the wobble, the hand-drawn type and real props (tape, highlighter).
- **Don't** let the graph grid run under long-form text.
