# Cataly — Nocturne

## 0. Research log

- Product truth: [Cataly README](https://github.com/vntrevx/Cataly#readme). Keep the preview and current source distinct. The landing page's sequence is understand → see the work → choose a setup.
- Visual shortlist: Linear for hierarchy, Vercel for product precision, and Supabase for text-led dark surfaces. Picked Linear's hierarchy with the Soft editorial reference: one clear message, anchored left, a cinematic image offset right, and plenty of space between chapters. The [Mobbin Linear capture](https://mobbin.com/explore/screens/3161e1d3-1dfa-4002-b02c-d3130126b465) and [UIBowl web collection](https://uibowl.io/website) were opened. The exact layout, art, copy, and color are Cataly's.
- Other leads: [Figma Gothic Editorial](https://www.figma.com/community/file/1624067268953323751/dark-gothic-editorial-landing-page), [Dribbble Crimson](https://dribbble.com/shots/16434588-Crimson-Digital-Agency-Landing-Page), [Behance Fleur du Mal](https://www.behance.net/gallery/242750273/Fleur-du-Mal), [Pinterest editorial grids](https://www.pinterest.com/tmpldigital/editorial-%2B-typography-%2B-grid/). Use these as genre references, not assets; the Dribbble page did not render a visible reference in the browser.
- Considered three compositions: full-bleed text over a portrait, an image-led split, and a text-only terminal cover. The split keeps the face and halo visible without sacrificing the contrast of the introduction. Full-bleed returns only in the final image interlude. Use the three supplied illustrations as-is; no external imagery or generated replacements.
- Mechanics: read [beUI's accordion source](https://beui.dev/r/bouncy-accordion/raw) for short content reveals, and [React Bits FadeContent](https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Animations/FadeContent/FadeContent.tsx) for one-shot entrance semantics; implement original Motion transitions, with Base UI owning disclosure semantics.

## 1. Experience

An editorial, gothic-noir cover for an AI software teammate: silver hair and a crimson halo against a nearly black page. The quieter finishing motifs are a crescent, warm metallic hairlines, and a single arched portrait. Illustrations are unlabelled; named chapters, actual release information, and actionable workflow step numbers remain.

## 2. Color and material

Horon globals and CSS token exports stay unmodified. Keep its Pretendard/Geist type families, scale utilities, and `Button` behavior. Cataly uses ivory `#f6eee7`, muted ink `#c6b5b5`, quiet ink `#ab989e`, black-plum `#100c12`, deepest `#0b080e`, and vellum-plum `#171018`. Engraved rules use `#3e2a31`, aged copper `#99716c` for defined edges, and pale gold `#d6b48f` for editorial detail. Dusty rose `#e7a5af` accents italic display type, and wine `#732342` / `#8c3052` grounds the primary action. Focus uses an outline, not a shadow.

## 3. Typography

Bodoni Moda (latin, normal and italic) is reserved for the display system. A restrained rose italic sets the last phrase of each chapter title. Readable copy uses Horon's Pretendard, metadata uses its Geist Mono. Display steps are approximately 6rem / 4rem / 2rem on desktop, with a responsive floor; body is 1rem–1.125rem. Keep line length short and avoid reducing essential captions below 0.875rem.

## 4. Spacing and layout

A centered 76rem frame with 1.25–4.5rem responsive gutters follows native document scroll. The wide layout uses an asymmetric two-column composition; portrait phones stack content and use editorial crops. Rule rows organize content without cards. The portrait in the workflow has a shallow engraved arch. The example prompt is a centered typographic interlude, separated from the chapters by space and short rules. The three source illustrations remain intact; Astro generates responsive WebP derivatives.

## 5. Components and states

- Brand: compact custom crescent-and-spark vector with a wordmark. Its home link has an explicit accessible name.
- Action link: real Horon `Button` anchor with filled, outline, and inline treatments; resting, hover, active, and keyboard focus are consistent. External links stay in the same tab.
- Workflow: four Base UI single-open accordion rows, first open by default. Each row has a visible chapter number, descriptive heading, and plus/minus indicator. Keyboard and pointer use the same links and triggers.
- Mobile navigation: native disclosure with textual label. Menu links work without JS; enhanced Escape and link selection close it. Desktop has ordinary navigation links.
- Storybook shows actual shared components with the site's token styles, including interaction and accessible states.

## 6. Motion

Short once-per-load hero entrance, and a slight directional fade on accordion reveal. Animate opacity and translation only; keep text readable before JavaScript and disable nonessential motion for `prefers-reduced-motion`. No parallax, animation loops, cursor trails, or motion dependency in static links.

## 7. Depth

No drop shadows, box shadows, or glass panels on the site. Depth comes from the original image lighting, soft crops and painted color transitions at the boundaries of the art, contrast between chapters, and type hierarchy. Hairlines keep the page legible without simulating elevation.

## 8. Responsive behavior

The hero art sits behind the copy's far edge on desktop and tablet, and above the copy on portrait phones. Tablet copy has its own narrower measure and a darker edge fade. Short landscape screens keep the art to the side so the primary action stays near the top. The reading order stays heading → explanation → action; the workflow figure uses a shorter crop on phones.

The viewport fills the display without restricting zoom. The top bar, skip link, menu, content gutters, anchor offsets, and footer account for the relevant physical safe-area insets; decorative backgrounds still reach the edge. Navigation and calls to action remain usable down to 320 CSS px.

Sharing uses an absolute canonical URL and a common 1200 × 630 JPEG for Open Graph and X cards. The iOS Home Screen icon uses the same crescent as the site favicon.

## 9. Accessibility constraints and gap ledger

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the [APG accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) guide the primary journey: find the purpose, understand the workflow, choose a supported install path. Keep pictures out of the reading sequence where they are decorative; the visible process figure has descriptive alt text.
- Check high-contrast ink and focus outlines, real link targets, a 44px control target, logical keyboard traversal, responsive reflow, and reduced motion. There are no forms, drag operations, auth, or capture of personal data on this page.
- There is no separate light presentation: a dark-only reading surface is intentional. No access to a production domain or deployment is assumed by this design.
- The hero label names the category before an abstract headline, and plain-language chapter labels correspond to navigation. Bodoni italic is a deliberate editorial motif. Uppercase treatment is reserved for short labels, not technical metadata.

| WCAG 2.2 AA review | Result | Evidence |
| --- | --- | --- |
| Contrast (1.4.3, 1.4.11) | Partial | Axe reported no violations; its gradient-backed hero metadata requires manual contrast measurement. |
| Visible and unobscured focus (2.4.7, 2.4.11), keyboard (2.1.1, 2.1.2) | Pass for checked paths | Chromium: section links move focus, Escape closes the mobile menu and restores focus, and the accordion opens with Enter. |
| Target size (2.5.8) | Pass for checked controls | Visible desktop controls measured at least 44px high; the mobile menu and accordion were exercised at narrow widths. |
| Reflow and text spacing (1.4.10, 1.4.12) | Pass for checked sizes | No horizontal overflow at 1440, 1024, 768, 390, or 320 CSS px, including 320px with text-spacing overrides. |
| Dragging, authentication, help, redundant entry (2.5.7, 3.3.8, 3.2.6, 3.3.7) | N/A | This landing page contains no drag interfaces, authentication, repeated help mechanism, or input flows. |

Under reduced motion, the hero is immediately static. If the workflow module fails to load, the four numbered steps remain readable and the inactive accordion stays hidden.

Chromium safe-area emulation also covered 393 × 852 portrait (59px top, 34px bottom) and 667 × 375 landscape (50px left, 20px right, 21px bottom). The checks measured the frame, header, footer, skip link, landscape menu, and visibility of both primary actions. This is browser emulation, not a test on physical iOS hardware.
