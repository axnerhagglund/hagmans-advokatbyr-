---
name: Hagmans Familjerättsbyrå
description: Swedish family law, stated plainly.
colors:
  signal-orange: "#ff5722"
  marker-yellow: "#ffeb3b"
  editorial-ink: "#0a0a0a"
  warm-canvas: "#fafaf8"
  base-white: "#ffffff"
  parchment-border: "#e5e0d8"
  component-border: "#d8d4cc"
  body-muted: "#6b6b6b"
  caption-muted: "#767676"
  orange-tint: "#fff8f6"
  dark-surface: "#0a0a0a"
typography:
  display:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(3.5rem, 10vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "normal"
  headline:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "DM Serif Display, Georgia, serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Fira Sans, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Fira Sans, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  none: "0px"
spacing:
  page-x: "24px"
  section-y: "80px"
  section-y-lg: "112px"
  gap-component: "16px"
  gap-section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.base-white}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "#e84d1c"
    textColor: "{colors.base-white}"
  button-outline:
    backgroundColor: "{colors.base-white}"
    textColor: "{colors.editorial-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "#f7f7f5"
    textColor: "{colors.editorial-ink}"
  button-yellow:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.editorial-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-dark-cta:
    backgroundColor: "{colors.editorial-ink}"
    textColor: "{colors.base-white}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  tag-label:
    backgroundColor: "transparent"
    textColor: "{colors.signal-orange}"
    rounded: "{rounded.none}"
    padding: "4px 12px"
---

# Design System: Hagmans Familjerättsbyrå

## 1. Overview

**Creative North Star: "The Witness Stand"**

This system exists for someone reading it at the worst point in their year. Divorce proceedings just served, a custody dispute escalating, a parent's estate in dispute. The visual language must do one job: communicate that the people behind this site will tell the truth, handle the complexity, and not add to the stress. Every design decision is tested against that scene.

The system is brutalist in structure and editorial in tone. The large serif display type and the hard square forms carry authority without marble-lobby grandeur. The near-black-and-cream base palette reads as legal seriousness; the Fearless Signal orange reads as human and direct, not corporate or SaaS-friendly. Yellow marks moments the way a highlighter in a brief does: deliberate, functional, not decorative.

The system explicitly rejects two failure modes. The first is the big-firm aesthetic — marble textures, gold seals, three-letter names, glass towers in hero images — which signals inaccessibility and expense to exactly the people this firm wants to help. The second is the legal-tech startup mode — pastel gradients, floating avatars, "disrupting the legal industry" copy, rounded pill buttons — which signals shallowness and tech-company blandness. Hagmans looks like neither. It looks like a document you can trust.

**Key Characteristics:**
- Square corners throughout. Zero border radius without exception.
- Two-font system: display serif for authority, humanist sans for readability.
- Flat surfaces with no ambient shadows. Depth through color contrast and border density.
- Orange used sparingly as the one voice that signals action; yellow used as a functional highlighter.
- Dense letter-spacing on all labels and tags (+0.15em to +0.25em); this is the system's typographic signature.
- Section rhythm through alternating cream and white backgrounds, never through decoration.

## 2. Colors: The Fearless Signal Palette

A near-monochromatic base punctuated by two functional accents. The palette is honest: nothing is decorative.

### Primary
- **Fearless Signal** (`#ff5722`): The one color that speaks first. Used on CTAs, section-tag borders, hover states, and any element that says "act now." Its rarity is the point. Never used as a background on large surfaces.

### Secondary
- **Marker Yellow** (`#ffeb3b`): The highlighter. Used to mark key words in headlines, active navigation states (mobile), text selection, and the `.tape` decoration. It carries the energy of an annotated brief, not a consumer app's accent color.

### Neutral
- **Editorial Ink** (`#0a0a0a`): Primary text, dark section backgrounds (quote section, footer), button offset shadows. Near-black with no blue or warm cast.
- **Base White** (`#ffffff`): Primary page background. No tint.
- **Warm Canvas** (`#fafaf8`): Alternate section background. Used on every other section for visual rhythm. Slightly warm — closer to paper than to screen.
- **Orange Tint** (`#fff8f6`): Reserved for testimonials and highlighted callouts. The faintest presence of Signal — background-level, not foreground.
- **Parchment Border** (`#e5e0d8`): Section dividers, row dividers, general structural borders. Warm and slightly desaturated.
- **Component Border** (`#d8d4cc`): Tighter UI borders — accordion wrappers, button outlines, input fields.
- **Body Muted** (`#6b6b6b`): Secondary body text, supporting paragraphs, descriptions.
- **Caption Muted** (`#767676`): Metadata, dates, read-time, location labels. Passes WCAG AA at standard sizes.

### Named Rules
**The One Voice Rule.** Signal orange appears on ≤15% of any given screen. Its job is to mark the single most important action or element in a viewport. Using it on two competing elements at once cancels both.

**The Highlighter Rule.** Marker Yellow is never a background for body text and never used on dark surfaces. It lives in headlines, selections, and the occasional tape-style pull quote. If you find yourself using yellow where orange belongs, you are softening something that should stay sharp.

## 3. Typography

**Display Font:** DM Serif Display (weight 400, Georgia fallback)
**Body Font:** Fira Sans (weights 400, 500, 700; Helvetica fallback)

**Character:** The pairing sets up a productive tension: the display serif carries the gravitas of legal tradition without the stiffness of a corporate wordmark, while Fira Sans carries warmth and legibility without the blandness of Inter or the tech-company associations of Söhne. Together they read as a well-run small firm: serious about outcomes, approachable in manner.

### Hierarchy

- **Display** (400, `clamp(3.5rem, 10vw, 7rem)`, lh 0.88): Hero headlines only. Uppercase. Line-height tighter than 1 to create mass. Used once per page, maximum.
- **Headline** (400, `clamp(2.25rem, 5vw, 3rem)`, lh 1.2): Section titles and page h1s on inner pages. Mixed case. The editorial workhorse.
- **Title** (400, `clamp(1.5rem, 3vw, 1.875rem)`, lh 1.3): Card headers, team member names, blog post headlines in lists.
- **Body** (400–500, `1rem–1.25rem`, lh 1.625, max 65ch): Primary reading text. Lead paragraphs use `text-xl` (1.25rem); body paragraphs use `text-base` (1rem). Always capped at ~65ch for readability.
- **Label** (700, `0.75rem`, lh 1.4, `letter-spacing: 0.15em–0.25em`, UPPERCASE): Section tags, navigation categories, metadata headers. The dense tracking is the system's typographic fingerprint. Do not apply tracking below 0.15em on labels.

### Named Rules
**The Tight Crown Rule.** Display headlines use `line-height: 0.88`. This is intentional compression that creates visual mass at large sizes. Never increase it toward 1.0 on display type — the result looks timid, not legible.

**The Tracking Tax.** Every uppercase label pays the tracking tax: +0.15em minimum, +0.25em maximum. Labels without tracking read as mistakes, not choices.

## 4. Elevation

This system is flat by philosophy. Surfaces rest on surfaces; no ambient shadow, no diffuse glow, no layered blur suggests depth hierarchy. The page communicates structure through border density (heavy section dividers, component borders, contained lists) and color alternation (white/cream/dark sections), not through vertical z-axis separation.

The sole exception is the **Brutalist Stamp**: an offset box-shadow on interactive elements — buttons and cards — that functions as a visual device, not an elevation layer. The shadow has zero blur and solid color (`4px 4px 0 #0a0a0a` on cards; `5px 5px 0 #ff5722` on CTAs). When the element is pressed (`:active`), it translates into the shadow (`translate-x-1 translate-y-1, shadow: none`) to simulate a physical stamp being pressed. This is brand signature, not depth system.

### Named Rules
**The Flat-by-Default Rule.** Any proposed use of `box-shadow` with blur radius greater than 0 is prohibited. Soft ambient shadows signal a different product category. If you want to signal importance, use color and scale — not shadow.

**The Stamp Exception.** Offset hard shadows (`blur: 0`) are permitted only on interactive elements: primary buttons, CTA blocks, and `BrutalistCard` when `hoverable`. Never on static containers, section wrappers, or text blocks.

## 5. Components

### Buttons

Square corners — `border-radius: 0` — everywhere without exception. Buttons here are not rounded pill shapes; they are printed labels.

- **Primary** (`bg: #ff5722, text: white, padding: 16px 32px`): The default CTA. Active state shifts `translate(1px, 1px)` with `box-shadow: none` to simulate a stamp pressed in.
- **Primary hover**: `background: #e84d1c`. Transition at 100ms — fast and decisive.
- **Outline** (`bg: white, border: 1px solid #0a0a0a, text: #0a0a0a, padding: 12px 24px`): Secondary action, used alongside Primary. Hover: `background: #f7f7f5`.
- **Yellow** (`bg: #ffeb3b, border: 1px solid #0a0a0a, text: #0a0a0a`): Tertiary, high-contrast. Used for highlighted actions on dark backgrounds or when primary orange would conflict with surrounding accents.
- **Dark CTA** (dark section variant): `bg: white, text: #0a0a0a, box-shadow: 5px 5px 0 #ff5722`. Used in the full-bleed dark CTA section only.
- **Font:** Fira Sans 700, `font-size: 1rem` (sm) or `1.125rem` (lg). Never display serif on buttons.

### Tags / Section Labels

Every section opens with a labeled tag pill: `border: 1px solid #ff5722, text: #ff5722, font: Fira Sans 700, size: 0.75rem, tracking: +0.2em, UPPERCASE, padding: 4px 12px, radius: 0`. This pattern is the system's visual chapter-marker. Applied consistently, it lets a reader know immediately which section they are in.

### Cards / Containers

Cards are used sparingly. When used: square corners, `border: 1px solid #d8d4cc`, no border-radius, `background: white` or `warm-canvas (#fafaf8)`. The `BrutalistCard` variant adds `box-shadow: 2px 2px 0 #0a0a0a` (the Stamp Exception) with optional top accent border for category color-coding. Internal padding: `20px–32px`. Nested cards are prohibited.

### FAQ Accordion

A contained list: `border: 1px solid #d8d4cc`, interior rows separated by `border-top: 1px solid #e5e0d8`. Button rows have `px-6 py-5`, `font: Fira Sans 600, 0.875rem`. Open state reveals answer in `#fafaf8` background, using CSS `grid-template-rows: 0fr → 1fr` animation (no layout-shift, always in DOM). The `+` indicator rotates 45° on open with `transition: transform 0.2s ease-out-quart`.

### Navigation

Sticky top, `height: 64px`, `border-bottom: 1px solid #e5e0d8`, white background. Logo: DM Serif Display 24px, no weight change. Nav links: Fira Sans 500, 0.875rem; active state underline `border-bottom: 2px solid #ff5722`. CTA button in nav: Signal orange, no radius, no shadow (the compact navbar context doesn't use the Stamp). Mobile: hamburger toggling a full-width drop-down with yellow highlight on active link.

### Section Structure (Signature Pattern)

The system's most distinctive pattern is the editorial row list for services: numbered items (light gray `00, 01...`), icon column, title column, description column, price/CTA column — all in a horizontal `flex` row separated by thin `border-top: 1px solid #e5e0d8` dividers. No cards, no boxes. This pattern avoids the identical-card-grid failure mode while carrying more information per unit of screen real estate.

## 6. Do's and Don'ts

### Do:
- **Do** use `border-radius: 0` everywhere. No exceptions — not on badges, not on avatars, not on images, not on tags.
- **Do** lead every section with the tag pattern (`text-xs font-bold tracking-[0.2em] uppercase, border: 1px solid #ff5722, text: #ff5722`). This is the chapter-marker system.
- **Do** alternate sections between `#ffffff` and `#fafaf8` backgrounds for rhythm. Use `#0a0a0a` dark sections only for quotes and the final CTA block.
- **Do** keep display typography tight: `line-height: 0.88` on hero, `line-height: 1.2` on headlines. Loose line-heights undermine the editorial weight.
- **Do** use Fearless Signal orange for the single most important action in a viewport. If there are two orange elements competing, one is wrong.
- **Do** cap body text at 65ch. Lines longer than this are not readable at stress.
- **Do** use the CSS `grid-template-rows: 0fr → 1fr` pattern for any expandable content. Never conditionally insert DOM nodes for expand/collapse.
- **Do** reference the firm's actual lawyers by name. Real humans outweigh any brand abstraction.

### Don't:
- **Don't** use marble textures, gold seals, dark wood photography, or monogrammed logotypes. These signal the big-firm world this brand explicitly rejects.
- **Don't** use pastel gradients, rounded pill buttons, floating UI illustrations, or "disrupting the legal industry" framing. This signals legal-tech startup shallowness.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, callouts, or list items. This is prohibited. Use full borders, background tints, or nothing.
- **Don't** use `background-clip: text` with a gradient. Single solid color for all text, emphasis through weight and size.
- **Don't** use ambient box-shadows (blur > 0). The system is flat. Hard offset shadows on interactive elements only.
- **Don't** build identical card grids (same card, icon + heading + text, repeated n times). Use the row-list pattern for services and the editorial split for blog posts.
- **Don't** put important actions behind modals. Every conversion moment (booking a consultation, asking a question) must be reachable without a dialog overlay.
- **Don't** use orange on more than 15% of any given screen surface. The color earns its power through scarcity.
- **Don't** remove the tracking from uppercase labels. `letter-spacing: normal` on uppercase Fira Sans looks like an error.
