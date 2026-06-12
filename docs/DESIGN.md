---
id: contents-collector
name: ContentsCollector
country: KR
category: ai-curation
homepage: "TBD"
primary_color: "#1f2228"
logo:
  type: text
  slug: contents-collector
verified: "2026-06-12"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    text-primary: "#ffffff"
    canvas: "#1f2228"
    ring-blue: "#3b82f6"
    surface-elevated: "#26292f"
    surface-hover: "#2a2d33"
    border-default: "#2c2f35"
    border-strong: "#3a3d42"
    inverse-near-black: "#0a0a0a"
  typography:
    family: { sans: "Pretendard", mono: "GeistMono" }
    display-hero: { size: 320, weight: 300, lineHeight: 1.50, use: "GeistMono, extreme display (numbers/English)" }
    section:      { size: 30, weight: 400, lineHeight: 1.20, use: "Pretendard, section heading" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Pretendard, body" }
    button:       { size: 14, weight: 400, lineHeight: 1.43, tracking: 1.4, use: "Pretendard, button label" }
    caption:      { size: 14, weight: 400, lineHeight: 1.50, use: "Pretendard, label/caption" }
    small:        { size: 12, weight: 400, lineHeight: 1.50, use: "Pretendard, meta" }
  spacing: { xs: 4, sm: 8, base: 24, lg: 48 }
  rounded: { sm: 0, md: 0, lg: 4, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#ffffff", fg: "#1f2228", radius: 0, padding: "12px 24px", font: "14px/400 Pretendard", use: "Primary CTA, hover 0.9 white" }
    button-ghost: { type: button, fg: "#ffffff", radius: 0, padding: "12px 24px", font: "14px/400 Pretendard", use: "Secondary, 1px rgba(255,255,255,0.2) border" }
    card: { type: card, radius: 0, padding: "24px", use: "Container, 1px rgba(255,255,255,0.1) border, no shadow, hover border 0.2" }
    badge-mono: { type: badge, fg: "#ffffff", radius: 0, padding: "4px 8px", font: "12px GeistMono", use: "Monospace tag (rankings/counts), 1px rgba(255,255,255,0.2) border" }
    input-default: { type: input, fg: "#ffffff", radius: 0, padding: "8px 12px", font: "16px Pretendard", use: "Form input, 1px rgba(255,255,255,0.2), focus blue ring, placeholder 0.3" }
  components_harvested: true
runtime_deps:
  icons: lucide-react
  fonts: [Pretendard, GeistMono]
---

## 1. Visual Theme & Atmosphere

ContentsCollector (콘텐츠콜렉터) is built on dark-first, monospace-driven minimalism: a system where visual restraint mirrors editorial restraint. Just as the product filters signal from noise in AI content, the interface eliminates noise at the visual layer — no gradients, no decorative illustrations, no color accents competing for attention. The design earns trust the same way the curation earns trust: by showing only what matters.

The typographic system is split between two carefully chosen typefaces. `GeistMono` handles display-level headlines at an extraordinary 320px with weight 300, and also serves monospace badge and ranking contexts. `Pretendard` handles all UI text including body, headings, labels, and button copy — providing full Korean glyph coverage with an Inter-class geometric voice. The monospace-as-display-font choice signals that this product is built for people who read carefully: it positions ContentsCollector not as a casual feed but as a curated reference, assembled by people who think in structure.

The spacing system operates on an 8px base grid with values concentrated at the small end (4px, 8px, 24px, 48px), reflecting a dense, information-focused layout philosophy. Border radius is minimal -- the system barely rounds anything, maintaining sharp, architectural edges. There are no decorative shadows, no gradients, no layered elevation. Depth is communicated purely through contrast and whitespace.

**Key Characteristics:**
- Pure dark theme: `#1f2228` background with `#ffffff` text -- no gray middle ground
- GeistMono at extreme display sizes (320px, weight 300) -- monospace as data/number showcase
- Pretendard for all UI text including Korean body copy and button labels
- Button labels at 14px with 1.4px letter-spacing -- clean, deliberate
- Zero decorative elements: no shadows, no gradients, no colored accents
- 8px spacing grid with a sparse, deliberate scale
- Lucide React icon system -- 2px outline, minimal, functional
- Tailwind CSS with arbitrary values -- utility-first engineering approach

## 2. Color Palette & Roles

### Primary
- **Pure White** (`#ffffff`): The singular text color, link color, and all foreground elements. White is not a background -- it is the voice.
- **Dark Background** (`#1f2228`): The canvas. A warm near-black with a subtle blue undertone (not pure black, not neutral gray). This specific hue prevents the harsh eye strain of `#000000` while maintaining deep darkness.

### Interactive
- **White Default** (`#ffffff`): Link and interactive element color in default state.
- **White Muted** (`rgba(255, 255, 255, 0.5)`): Hover state for links -- a deliberate dimming rather than brightening, which is unusual and distinctive.
- **White Subtle** (`rgba(255, 255, 255, 0.2)`): Borders, dividers, and subtle surface treatments.
- **Ring Blue** (`rgb(59, 130, 246) / 0.5`): Tailwind's default focus ring color (`--tw-ring-color`), used for keyboard accessibility focus states.

### Surface & Borders
- **Surface Elevated** (`rgba(255, 255, 255, 0.05)`): Subtle card backgrounds and hover surfaces -- barely visible lift.
- **Surface Hover** (`rgba(255, 255, 255, 0.08)`): Slightly more visible hover state for interactive containers.
- **Border Default** (`rgba(255, 255, 255, 0.1)`): Standard border for cards, dividers, and containers.
- **Border Strong** (`rgba(255, 255, 255, 0.2)`): Emphasized borders for active states and button outlines.

### Functional
- **Text Primary** (`#ffffff`): All headings, body text, labels.
- **Text Secondary** (`rgba(255, 255, 255, 0.7)`): Descriptions, captions, supporting text.
- **Text Tertiary** (`rgba(255, 255, 255, 0.5)`): Muted labels, placeholder text, timestamps.
- **Text Quaternary** (`rgba(255, 255, 255, 0.3)`): Disabled text, very subtle annotations.

### Resolved Surface Tints
The rgba overlays above resolve to these effective hex values when composited on the `#1f2228` canvas:
- **Surface Elevated Resolved** (`#26292f`): `rgba(255, 255, 255, 0.05)` over `#1f2228`.
- **Surface Hover Resolved** (`#2a2d33`): `rgba(255, 255, 255, 0.08)` over `#1f2228`.
- **Border Default Resolved** (`#2c2f35`): `rgba(255, 255, 255, 0.1)` over `#1f2228`.
- **Border Strong Resolved** (`#3a3d42`): `rgba(255, 255, 255, 0.2)` over `#1f2228`.

### Focus Ring (explicit hex from Tailwind)
- **Ring Blue** (`#3b82f6`): The Tailwind default focus color (`rgb(59, 130, 246)`) used for keyboard accessibility — only chromatic accent in the otherwise monochrome system.

## 3. Typography Rules

### Font Family
- **Display / Badges**: `GeistMono`, with fallback: `ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New`
  — Used for extreme-scale display headlines (320px) and numeric/ranking badges where Latin/numeric glyphs dominate. Korean copy does not appear at this scale.
- **Body / Headings / Buttons**: `Pretendard`, with fallback: `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Noto Sans KR", sans-serif`
  — Replaces `universalSans`. Inter-class geometric sans with full Korean coverage. OFL license. All UI text including buttons uses Pretendard.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Transform | Notes |
|------|------|------|--------|-------------|----------------|-----------|-------|
| Display Hero | GeistMono | 320px (20rem) | 300 | 1.50 | normal | none | Extreme scale, numbers/English |
| Section Heading | Pretendard | 30px (1.88rem) | 400 | 1.20 (tight) | normal | none | Clean sans-serif contrast |
| Body | Pretendard | 16px (1rem) | 400 | 1.50 | normal | none | Standard reading text |
| Button | Pretendard | 14px (0.88rem) | 400 | 1.43 | 1.4px | none* | *uppercase for English-only labels |
| Label / Caption | Pretendard | 14px (0.88rem) | 400 | 1.50 | normal | none | Supporting text |
| Small / Meta | Pretendard | 12px (0.75rem) | 400 | 1.50 | normal | none | Timestamps, footnotes |

### Principles
- **Monospace as display**: GeistMono at 320px creates a rhythmic, architectural quality — ideal for showing counts, rankings, and data callouts at hero scale. The fixed-width characters at extreme scale communicate precision.
- **Light weight at scale**: Weight 300 for the 320px headline prevents the monospace from feeling heavy or brutish at extreme sizes. It reads as precise, not overwhelming.
- **Button tracking**: Pretendard at 14px with 1.4px letter-spacing gives buttons a deliberate, composed feel. Uppercase applies to English-only labels; Korean button text renders in standard case.
- **Korean-first body**: Pretendard at 16px/1.5 provides excellent readability for body content and full Korean glyph coverage — essential for a product where all UI copy is in Korean.
- **Two-font clarity**: Exactly two typefaces — GeistMono for extreme-scale display impact (numbers/English), Pretendard for all UI text including Korean copy. No overlap, no ambiguity.

## 4. Component Stylings

### Buttons

**Primary (White on Dark)**
- Background: `#ffffff`
- Text: `#1f2228`
- Padding: 12px 24px
- Radius: 0px (sharp corners)
- Font: Pretendard 14px weight 400, letter-spacing 1.4px
- Hover: `rgba(255, 255, 255, 0.9)` background
- Use: Primary CTA ("오늘 확인해보세요", "시작하기")

**Ghost / Outlined**
- Background: transparent
- Text: `#ffffff`
- Padding: 12px 24px
- Radius: 0px
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Font: Pretendard 14px weight 400, letter-spacing 1.4px
- Hover: `rgba(255, 255, 255, 0.05)` background
- Use: Secondary actions ("더 보기", "설정하기")

**Text Link**
- Background: none
- Text: `#ffffff`
- Font: Pretendard 16px weight 400
- Hover: `rgba(255, 255, 255, 0.5)` -- dims on hover
- Use: Inline links, navigation items

### Cards & Containers
- Background: `rgba(255, 255, 255, 0.03)` or transparent
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Radius: 0px (sharp) or 4px (subtle)
- Shadow: none -- this system does not use box shadows
- Hover: border shifts to `rgba(255, 255, 255, 0.2)`

### Navigation
- Dark background matching page (`#1f2228`)
- Brand logotype: white text, left-aligned
- Links: Pretendard 14px weight 400, `#ffffff` text
- Hover: `rgba(255, 255, 255, 0.5)` text color
- CTA: white primary button, right-aligned
- Mobile: hamburger toggle

### Badges / Tags
**Monospace Tag** (rankings, source counts, numeric labels)
- Background: transparent
- Text: `#ffffff`
- Padding: 4px 8px
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Radius: 0px
- Font: GeistMono 12px, letter-spacing 1px

### Inputs & Forms
- Background: transparent or `rgba(255, 255, 255, 0.05)`
- Border: `1px solid rgba(255, 255, 255, 0.2)`
- Radius: 0px
- Focus: ring with `rgb(59, 130, 246) / 0.5`
- Text: `#ffffff`
- Placeholder: `rgba(255, 255, 255, 0.3)`
- Label: `rgba(255, 255, 255, 0.7)`, Pretendard 14px

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 24px, 48px
- The scale is deliberately sparse -- granular spacing distinctions are avoided, preferring large jumps that create clear visual hierarchy through whitespace alone

### Grid & Container
- Max content width: approximately 1200px
- Hero: full-viewport height with massive centered monospace headline
- Feature sections: simple vertical stacking with generous section padding (48px-96px)
- Two-column layouts for feature descriptions at desktop
- Full-width dark sections maintain the single dark background throughout

### Whitespace Philosophy
- **Extreme generosity**: Generous whitespace is used deliberately. The 320px headline with 48px+ surrounding padding creates breathing room — curated content deserves space to be considered, not scanned in a crowded feed.
- **Vertical rhythm over horizontal density**: Content stacks vertically with large gaps between sections rather than packing horizontally. This creates a scroll-driven experience that feels deliberate and considered.
- **No visual noise**: The absence of decorative elements, borders between sections, and color variety means whitespace is the primary structural tool.

### Breakpoints
- 2000px, 1536px, 1280px, 1024px, 1000px, 768px, 640px
- Tailwind responsive modifiers drive breakpoint behavior

### Border Radius Scale
- Sharp (0px): Primary treatment for buttons, cards, inputs -- the default
- Subtle (4px): Occasional softening on secondary containers
- The near-zero radius philosophy communicates architectural precision

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow, no border | Page background, body content |
| Surface (Level 1) | `rgba(255,255,255,0.03)` background | Subtle card surfaces |
| Bordered (Level 2) | `1px solid rgba(255,255,255,0.1)` border | Cards, containers, dividers |
| Active (Level 3) | `1px solid rgba(255,255,255,0.2)` border | Hover states, active elements |
| Focus (Accessibility) | `ring` with `rgb(59,130,246)/0.5` | Keyboard focus indicator |

**Elevation Philosophy**: This system rejects shadow-based elevation entirely. There are no box-shadows. Instead, depth is communicated through three mechanisms: (1) opacity-based borders that brighten on interaction, creating a sense of elements "activating" rather than lifting; (2) extremely subtle background opacity shifts (`0.03` to `0.08`) that create barely-perceptible surface differentiation; and (3) the massive scale contrast between the 320px display type and 16px body text, which creates typographic depth. This is elevation through contrast and opacity, not through simulated light and shadow.

## 7. Do's and Don'ts

### Do
- Use `#1f2228` as the universal background -- never pure black `#000000`
- Use GeistMono for extreme-scale display headlines and numeric/ranking badges
- Use Pretendard for all UI text including buttons, body, and Korean copy
- Apply 1.4px letter-spacing to button labels; uppercase only for English-only labels
- Use weight 300 for the massive display headline (320px)
- Keep borders at `rgba(255, 255, 255, 0.1)` -- barely visible, not absent
- Dim interactive elements on hover to `rgba(255, 255, 255, 0.5)` -- the reverse of convention
- Maintain sharp corners (0px radius) as the default -- architectural precision

### Don't
- Don't use box-shadows -- this system has zero shadow elevation
- Don't introduce color accents beyond white and the dark background -- the monochromatic palette signals restraint
- Don't use large border-radius (8px+, pill shapes) -- the sharp edge is intentional
- Don't use bold weights (600-700) for headlines -- weight 300-400 only
- Don't brighten elements on hover -- dim to `0.5` opacity instead
- Don't add decorative gradients, illustrations, or color blocks
- Don't use colored status indicators unless absolutely necessary -- keep everything in the white/dark spectrum
- Don't use Pretendard for display-scale hero headlines where GeistMono's monospace rhythm creates the architectural effect

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline scales dramatically down |
| Small Tablet | 640-768px | Slight increase in padding |
| Tablet | 768-1024px | Two-column layouts begin, heading sizes increase |
| Desktop | 1024-1280px | Full layout, generous whitespace |
| Large | 1280-1536px | Wider containers, more breathing room |
| Extra Large | 1536-2000px | Maximum content width, centered |
| Ultra | >2000px | Content stays centered, extreme margins |

### Touch Targets
- Buttons use 12px 24px padding for comfortable touch
- Navigation links spaced with 24px gaps
- Minimum tap target: 44px height
- Mobile: full-width buttons for easy thumb reach

### Collapsing Strategy
- Hero: 320px monospace headline scales down dramatically (to ~48px-64px on mobile)
- Navigation: horizontal links collapse to hamburger menu
- Feature sections: two-column to single-column stacking
- Section padding: 96px -> 48px -> 24px across breakpoints
- Massive display type is the first thing to resize -- it must remain impactful but not overflow

### Image Behavior
- Minimal imagery -- the layout relies on typography and whitespace
- Any product screenshots maintain sharp corners
- Full-width media scales proportionally with viewport

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Dark (`#1f2228`)
- Text Primary: White (`#ffffff`)
- Text Secondary: White 70% (`rgba(255, 255, 255, 0.7)`)
- Text Muted: White 50% (`rgba(255, 255, 255, 0.5)`)
- Text Disabled: White 30% (`rgba(255, 255, 255, 0.3)`)
- Border Default: White 10% (`rgba(255, 255, 255, 0.1)`)
- Border Strong: White 20% (`rgba(255, 255, 255, 0.2)`)
- Surface Subtle: White 3% (`rgba(255, 255, 255, 0.03)`)
- Surface Hover: White 8% (`rgba(255, 255, 255, 0.08)`)
- Focus Ring: Blue (`rgb(59, 130, 246)` at 50% opacity)
- Button Primary BG: White (`#ffffff`), text Dark (`#1f2228`)

### Example Component Prompts
- "Create a hero section on #1f2228 background. Headline in GeistMono at 72px weight 300, color #ffffff, centered. Subtitle in Pretendard 18px weight 400, rgba(255,255,255,0.7), max-width 600px centered. Two buttons: primary (white bg, #1f2228 text, 0px radius, Pretendard 14px 1.4px letter-spacing, 12px 24px padding — label: '오늘 확인해보세요') and ghost (transparent bg, 1px solid rgba(255,255,255,0.2), white text, same treatment — label: '더 보기')."
- "Design a card: transparent or rgba(255,255,255,0.03) background, 1px solid rgba(255,255,255,0.1) border, 0px radius, 24px padding. No shadow. Title in Pretendard 22px weight 400, #ffffff. Body in Pretendard 16px weight 400, rgba(255,255,255,0.7), line-height 1.5. Hover: border changes to rgba(255,255,255,0.2)."
- "Build navigation: #1f2228 background, full-width. Brand text left (Pretendard 14px). Links in Pretendard 14px #ffffff with hover to rgba(255,255,255,0.5). White primary button right-aligned (Pretendard 14px, 1.4px letter-spacing — label: '시작하기')."
- "Create a form: dark background #1f2228. Label in Pretendard 14px rgba(255,255,255,0.7). Input with transparent bg, 1px solid rgba(255,255,255,0.2) border, 0px radius, white text 16px Pretendard. Focus: blue ring rgb(59,130,246)/0.5. Placeholder: rgba(255,255,255,0.3)."
- "Design a ranking badge: transparent bg, 1px solid rgba(255,255,255,0.2), 0px radius, GeistMono 12px, 1px letter-spacing, white text, 4px 8px padding. Use for source counts and ranking numbers."

### Iteration Guide
1. Always start with `#1f2228` background -- never use pure black or gray backgrounds
2. GeistMono for extreme-scale display and ranking badges; Pretendard for all other text including buttons -- never mix these roles
3. All buttons use Pretendard 14px with 1.4px letter-spacing; Korean button labels render in standard case
4. No shadows, ever -- depth comes from border opacity and background opacity only
5. Borders are always white with low opacity (0.1 default, 0.2 for emphasis)
6. Hover behavior dims to 0.5 opacity rather than brightening -- the reverse of most systems
7. Sharp corners (0px) by default -- only use 4px for specific secondary containers
8. Body text at 16px Pretendard with 1.5 line-height for comfortable reading
9. Generous section padding (48px-96px) -- let content breathe in the darkness
10. The monochromatic white-on-dark palette is absolute -- resist adding color unless critical for function

## 10. Voice & Tone

ContentsCollector's voice is **data-driven and editorially composed.** Sounds like a sharp researcher friend who keeps an impeccably organized shelf — speaks with data, not drama. Information is delivered fast but never carelessly; selection criteria are always transparent.

| Context | Tone | Example |
|---|---|---|
| Onboarding / First screen | Confident, data-first | "AI 씬의 오늘을, 숫자로 골랐어요." |
| CTA | Soft invitation, no urgency | "확인해보세요" / "천천히 둘러보세요" |
| Empty state | Slightly warmer, patient | "곧 오늘의 콘텐츠가 채워질 거예요." |
| Success / Completion | Warm, concise | "오늘 것 다 봤네요." |
| Error / Notice | Calm, solution-first | "수집 중 문제가 생겼어요. 잠시 후 다시 시도해주세요." |
| Push notification | Maximum restraint, data-first | "오늘의 AI 상위 12개 준비됐어요." |
| Landing / Intro | Sharp, one-line impact | "매일 AI 판을 훑고, 핫한 것만 골라드려요." |

**Voice samples** *(planned copy — unverified, new service)*
- Tagline: *"빠르게 훑되, 제대로 골라서, 믿고 볼 수 있게."*
- Hero: *"AI 씬의 오늘을, 숫자로 골랐어요."*
- Ranking label: *"26개 소스에서 추린 상위 12개."*
- Category prompt: *"LLM 분야에서 지금 뜨고 있는 콘텐츠예요."*

**Forbidden phrases.** FOMO triggers ("놓치면 후회해요", "지금 당장", "서두르세요"). Overreach ("혁명", "패러다임", "게임 체인저", "AI가 세상을 바꿀 거예요"). Authority pose ("전문가로서 말씀드리면"). Hype emoji (🔥💥🤯). Exclamation marks on errors or push notifications.

## 11. Principles

1. **Dark canvas `#1f2228`.** *UI implication:* use the warm near-black, never pure `#000`. The subtle blue undertone reduces eye strain without sacrificing depth.
2. **Monochrome: resist color.** *UI implication:* the only chromatic accent is the accessibility focus ring (blue). Every other decision is white-on-dark opacity.
3. **Generous whitespace.** *UI implication:* section padding 48–96px; never cramp. Space is a curation signal — curated content deserves room to breathe.
4. **Monospace at display scale.** *UI implication:* GeistMono for extreme-scale numbers and English headlines. Pretendard for all Korean copy and UI text. Never use GeistMono where Korean glyphs are needed.
5. **Data over drama.** *UI implication:* show counts, sources, and rankings ("26개 소스에서 추린 상위 12개") rather than superlatives. Numbers do the persuading.

## 12. States

| State | Treatment | Copy |
|---|---|---|
| **Empty (no content yet)** | Centered message, text-tertiary | "곧 오늘의 콘텐츠가 채워질 거예요." |
| **Loading (fetching sources)** | Skeleton cards with thin-border placeholders | "26개 소스를 훑고 있어요…" |
| **Success (feed ready)** | Feed renders, count badge updates | "오늘의 AI 상위 12개 정리됐어요." |
| **Success (item saved)** | Brief inline confirmation | "저장됐어요." |
| **Empty (category: no results)** | Minimal message, no illustration | "이 분야에서 오늘 올라온 콘텐츠가 없어요." |
| **Error (fetch failed)** | Calm, solution-first | "수집 중 문제가 생겼어요. 잠시 후 다시 시도해주세요." |
| **Error (network)** | Specific cause | "네트워크 연결을 확인해주세요." |
| **Ranking updated** | Timestamp, no fanfare | "방금 업데이트됐어요." |
| **Skeleton** | Dark-canvas placeholders with thin white borders | — |
| **Loading (long task)** | Persistent progress indicator | — |

## 13. Motion & Easing

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection |
| `motion-fast` | 150ms | Hover |
| `motion-standard` | 250ms | Modal, panel |
| `motion-streaming` | continuous | Content streaming |

Standard cubic-bezier; no bounce — the product is calm and data-driven, not excitable. `prefers-reduced-motion: reduce` removes hover transitions.

---

<!-- Visual tokens preserved from reference; meta, voice, and copy rewritten for ContentsCollector (콘텐츠콜렉터) based on docs/brandvoice.md. Voice samples are planned copy — unverified, new service. Color values unchanged by design; accent usage is intentionally sparse per brand voice (data over drama). Font: universalSans → Pretendard (Inter-class, full Korean coverage, OFL); GeistMono retained for display/badge contexts where Korean glyphs are not needed. Brand Narrative and Personas sections removed — covered by brandvoice.md and userflow.md. -->


---

## Included Components

The following components are part of this design system:

- Button
- Input
- Table
- Card
- Badge
- Tabs
- Dialog


---

## Iconography & SVG Guidelines

### Icon Library

**Confirmed: Lucide React (`lucide-react`)** — uniform 2px outline, 1,400+ icons, tree-shakeable, 24×24 grid. Matches this system's 2px stroke spec and ContentsCollector's neutral-clean brand voice. MIT license. Use exclusively; do not mix icon libraries.

### SVG Usage Rules

- All icons must be inline SVG components (not `<img>` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from `currentColor` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with `currentColor` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: `xmlns`, `xml:space`, editor metadata.
- Use `viewBox` instead of fixed `width`/`height` for scalability.


---

## Document Policies

### Emoji Policy

Emojis are **minimized, not banned**. Use SVG icons as the default for status and navigation. In product UI, a single emoji is permitted only in completion/success contexts. Never use hype emoji (🔥💥🤯) or place emoji in error messages, push notifications, or navigation.

- Status indicators: use colored dots or icon components, not emoji.
- Section markers: use text prefixes ("DO:" / "DON'T:") or icons, not checkmark/cross emojis.
- Push notifications: no emoji — restraint is the voice.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Voice & Tone
- Principles
- States
- Motion & Easing
- Iconography & SVG Guidelines
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
