---
version: 1
slug: "src-app-layout-jsx"
primary_target: "src/app/layout.jsx"
related_targets: ["src/app/page.jsx","src/app/articles/[slug]/page.jsx"]
---

# Site-wide surface brief: anfalmushtaq.com

Scope: every route (home, articles index, article, about, work, uses, speaking, thank-you, 404). Mode: Read for articles/index/uses/work; home is a light Persuade/Experience opener inside the same world. Audience: readers, hiring folks, fellow builders (see PRODUCT.md). Constraint: owner pinned the world (drafting / old CAD drawing paper, hex.tech feel; dark mode = blueprint). The direction is owner-pinned; concept-seed was rolled afterwards for provenance and the pin governs.

## Direction contract

THESIS: The site is a drafting sheet on a drawing table. It refuses the default "rounded cards on zinc" blog template; structure comes from rules, rails, title blocks and registration marks, the way an engineering drawing organizes itself.

OWN-WORLD: Light = drafting vellum (#f5f3ec) with paper grain, non-photo-blue graph grid (minor 24px, major 120px), hatched margins outside two ink rails, ink #1c2136, redline vermilion accent used sparingly. Dark = blueprint (#0f2747) with chalk-white linework, same grid in white. Archivo (wide 125 for display, 100 for text), Instrument Serif italic accents, Geist Mono tracked labels. Square controls with CAD grips (small squares) at corners that become crop marks on hover. Hairlines, never shadows or radii.

STORY: Visitor meets a person who builds, sees the latest writing as a drawing register, scans the work record, and knows how to reach Anfal. Readers get a calm column with figures and code set as drawing details.

FIRST VIEWPORT (home): sticky header across the sheet (wordmark left, nav center, Paper/Blueprint switch right). Hero: "I build things" in wide grotesk ~6rem, "that ship." in italic serif, a dimension line under it labelled with the career span, intro paragraph, email, socials, CV button. A CAD crosshair follows the pointer over the hero grid, snapping to the 24px grid, with a live X/Y readout. Primary action = read latest / reach out.

FORM: Pinned by owner (drafting paper, hex.tech inspired); not from an ordered list.
seed:3fcbce7942ef7880 (roll ran after the build; the owner-pinned world governs)

Signature interaction: snap-to-grid crosshair with coordinate readout. Motion grammar: lines draw (scaleX/scaleY from 0) with exponential ease-out; grips↔crop marks on hover; sticky header outline drawn by scroll-driven animation; all disabled under prefers-reduced-motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
