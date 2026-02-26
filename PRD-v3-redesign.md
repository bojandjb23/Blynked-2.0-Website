# PRD v3: Blynked Website Redesign

## Document Info

| Field | Value |
|-------|-------|
| **Version** | 3.0 |
| **Created** | 2026-02-25 |
| **Author** | Bojan Djakonovic / Claude Opus 4.6 |
| **Status** | Draft — Awaiting Approval |
| **Stack** | Next.js 16.1.6, React 19, Tailwind CSS v4, GSAP 3.14, Framer Motion 12, Lenis 1.3 |
| **Live URL** | blynked-website.netlify.app |
| **Target URL** | blynked.io |

---

## 1. Executive Summary

### What We Are Building

A complete visual and interaction overhaul of the Blynked website. The current Netlify version has solid structure and content architecture, but visually "screams AI" (Bojan's words) and lacks the personality, interactivity, and conversion density needed to compete with ColdIQ and position Blynked as a premium growth partner.

### Why

1. **Competitive pressure** — ColdIQ.com executes at a high level with multi-CTA density, precise metrics, and full case study landing pages
2. **Brand perception** — The current site feels template-generated. Needs personality, craft, and a signature visual language
3. **Conversion optimization** — Current site has 2-3 CTAs per page. ColdIQ has 11+. Meetings are being left on the table
4. **Content depth** — 12+ case study videos on YouTube are not represented. Only 3 case studies exist currently

### Design North Star

**ChainGPT Labs (labs.chaingpt.org)** is the primary design reference. Merge their dark, typographic, animation-rich aesthetic with Blynked's orange identity and ColdIQ's conversion architecture.

### Reference Websites

| Website | What to Take |
|---------|-------------|
| **labs.chaingpt.org** | Overall aesthetic: dark gray bg, bold typography, orange accent, text scramble animations, preloader, hover effects, chamfered buttons |
| **coldiq.com** | Conversion architecture: multi-CTA strategy, case study structure, results timeline, FAQ, precise metrics |
| **kalungi.com** | Team section: vertical dot navigation, fanned photo cards, category cycling with transitions |

### Key Outcomes

- Every page has 4+ CTAs with contextually varied copy
- 9+ individual case study landing pages (up from 3)
- Kalungi-style interactive team carousel replacing the current grid
- ChainGPT-inspired preloader, typography, button style, and hover animations
- Loading time under 3s, Lighthouse performance 90+

---

## 2. Design Foundation

### 2.1 Color Palette

Shift base background from `#0A0A0A` (current, near-black) to `#0E0E0E` (ChainGPT's warm dark gray). Subtle but meaningful — reduces harshness, allows more surface layering.

| Token | Current | New | Usage |
|-------|---------|-----|-------|
| `--color-bg-primary` | `#0A0A0A` | `#0E0E0E` | Page background |
| `--color-bg-secondary` | `#111111` | `#141414` | Section alternation |
| `--color-bg-tertiary` | `#1A1A1A` | `#1C1C1C` | Cards, elevated surfaces |
| `--color-bg-elevated` | `#0F0F0F` | `#121212` | Modals, popups |
| `--color-accent` | `#F47920` | `#FF7120` | Primary action (shift toward ChainGPT orange for vibrancy) |
| `--color-accent-hover` | `#FF8C3A` | `#FF8A3D` | Hover state |
| `--color-accent-glow` | `rgba(244,121,32,0.12)` | `rgba(255,113,32,0.14)` | Glows, subtle fills |
| `--color-text-primary` | `#F5F5F7` | `#F5F5F7` | No change |
| `--color-text-secondary` | `#C4C4CC` | `#B0B0BA` | Slightly muted for contrast with new bg |
| `--color-text-tertiary` | `#9494A0` | `#7A7A88` | More muted |
| `--color-selection-bg` | — | `rgba(255,113,32,0.30)` | Text selection highlight |
| `--color-grid-line` | — (new) | `rgba(255,255,255,0.04)` | Decorative grid lines |

### 2.2 Typography

Replace Instrument Serif with a bold geometric sans-serif to match ChainGPT's technical/authority feel.

| Role | Current | New | Rationale |
|------|---------|-----|-----------|
| Display/Headings | Instrument Serif (italic, serif) | **Space Grotesk** (bold, geometric sans) | Matches ChainGPT's bold, condensed display feel. Google Fonts, free. |
| Body | Inter | **Inter** (keep) | Best body sans-serif. No change. |
| Mono/Metrics | JetBrains Mono | **JetBrains Mono** (keep) | Already excellent for data/metrics. |

**Typography scale:**

```css
.text-display-xl {
  font-family: var(--font-display);   /* Space Grotesk */
  font-size: clamp(3.25rem, 7vw, 6rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.03em;
  text-transform: uppercase;           /* NEW: uppercase for hero headlines */
}

.text-display-lg {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.025em;
  text-transform: uppercase;
}

.text-heading-lg {
  font-family: var(--font-display);    /* Promoted to display font */
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.text-heading-md {
  font-family: var(--font-sans);       /* Keep Inter for mid-size */
  font-size: clamp(1.375rem, 2.2vw, 2rem);
  font-weight: 600;
  line-height: 1.25;
}
```

**Key shift:** Headings change from italic serif → bold uppercase sans-serif. This is the single biggest visual change.

### 2.3 Animation Philosophy

Three tiers, inspired by ChainGPT but calibrated for business audience:

**Tier 1: Signature Effects (Hero/Preloader only)**
- Text scramble on main headline (GSAP TextPlugin — characters cycle through random chars before resolving)
- Counter preloader (000→999 with pixel grid dissolve)
- Particle/bubble ambient background in hero

**Tier 2: Interactive Feedback (Every interactive element)**
- Button hover: background fill + arrow swap animation
- Nav link hover: underline slide-in from left
- Card hover: border glow + subtle lift (existing GlowCard — keep)
- Team carousel: card fan transitions with stagger

**Tier 3: Scroll-Triggered Reveals (Every section)**
- Keep existing ScrollReveal + StaggerReveal + TextReveal
- Add: grid line animations at section transitions
- Add: counter animations on scroll into view (existing CounterAnimation)

### 2.4 Button Style — Chamfered Corners

ChainGPT's signature: `clip-path: polygon()` buttons with angled/chamfered corners. Replaces standard rounded corners.

```css
/* Primary button */
.btn-primary {
  background: var(--color-accent);
  color: #0E0E0E;
  font-weight: 600;
  padding: 14px 32px;
  clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary:hover {
  background: var(--color-accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(255,113,32,0.3);
}

/* Secondary button (outline + chamfered) */
.btn-secondary {
  background: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
}

/* Ghost link with arrow swap on hover */
.btn-ghost { /* two arrow SVGs, swap with translateX on hover */ }
```

### 2.5 Background/Surface Treatment

| Element | Current | New |
|---------|---------|-----|
| Page background | Solid `#0A0A0A` | Solid `#0E0E0E` + subtle SVG grid pattern at 0.04 opacity |
| Section dividers | None | Horizontal grid-line dividers (draw-on-scroll) |
| Hero background | Mesh gradient | Keep + add animated particle/bubble layer |
| Cards | Heavy glassmorphism | Reduce blur, more opacity, subtle borders |
| Noise overlay | SVG at 0.03 | Keep but reduce to 0.02 |
| Scrollbar | 6px visible | **Hidden** (scrollbar-width: none — ChainGPT style) |

---

## 3. Page-by-Page Specifications

### 3.1 Homepage (`/`)

**New section order (13 sections, up from 10):**

| # | Section | Status | Notes |
|---|---------|--------|-------|
| 1 | **Preloader** | NEW | Counter 000→999, pixel grid dissolve |
| 2 | **Hero** | REDESIGN | Text scramble headline, chamfered CTAs, particle background |
| 3 | **Logo Marquee** | REDESIGN | Pure CSS marquee ticker (no JS), gradient edge masks |
| 4 | **Problem Section** | RESTYLE | Update typography to new system |
| 5 | **Framework Preview** | RESTYLE | Keep Traction Framework visual, restyle labels |
| 6 | **Case Study Highlights** | REDESIGN | Add metric cards per card (ColdIQ-style), more studies |
| 7 | **Results Timeline** | NEW | "What happens after onboarding" — Week 1, Week 4, Month 3, Month 6+ |
| 8 | **Testimonial Section** | REDESIGN | Three-layer: video + text quotes + metric spotlight strip |
| 9 | **Stage Routing** | RESTYLE | Startup vs Scale-up routing cards |
| 10 | **FAQ Section** | NEW | Accordion, 6-8 questions (ColdIQ pattern) |
| 11 | **CTA Banner (Mid)** | NEW | Additional CTA between sections |
| 12 | **Differentiators** | RESTYLE | "Why Blynked, not another vendor" |
| 13 | **Final CTA Banner** | RESTYLE | Chamfered button, updated typography |

**CTA Strategy — minimum 7 per homepage:**

| Location | CTA Text | Type |
|----------|----------|------|
| Header (persistent) | "Book a Call" | Nav button |
| Hero | "Book Your Strategy Call" + "See Our Results" | Primary + Secondary |
| After Case Studies | "Want results like these? Book a call." | Inline CTA |
| After Testimonials | "Ready to Engineer Predictable Revenue?" | Banner CTA |
| After FAQ | "Still have questions? Let's talk." | Banner CTA |
| Footer mini-CTA | "Ready to build a predictable pipeline?" | Section CTA |
| Mobile bottom bar | "Book a Call" | Persistent mobile CTA |

#### 3.1.1 Preloader (NEW)

```
File: src/components/shared/preloader.tsx
- Full-screen #0E0E0E background
- Three-digit counter cycling 000→999
- Font: JetBrains Mono, ~120px, color #FF7120
- Duration: ~2.2s counting + 600ms dissolve
- sessionStorage flag to skip on subsequent views
- Reduced motion: skip entirely
```

#### 3.1.2 Hero (REDESIGN)

```
Keep: Two-column layout, eyebrow, headline, subtitle, CTA buttons
Change:
- Headline: uppercase, Space Grotesk Bold, text scramble animation
- Accent words in orange, bold (not italic)
- CTA buttons: chamfered polygon shape
- Add animated particle layer behind visual
- Subtle CSS grid overlay (0.03 opacity)
```

#### 3.1.3 Results Timeline (NEW)

```
File: src/components/sections/home/results-timeline.tsx
- "WHAT HAPPENS AFTER ONBOARDING" header
- 4 nodes: Week 1-2, Week 3-5, Month 2-3, Month 6+
- Horizontal (desktop) / vertical (mobile)
- Connection line draws on scroll via GSAP ScrollTrigger
- Each node: icon, title, 2-3 bullets
```

#### 3.1.4 FAQ Section (NEW)

```
File: src/components/shared/faq-accordion.tsx
- 6-8 questions with Framer Motion height animation
- Only one open at a time
- Questions: How is Blynked different? What companies? How long for results?
  Do you replace sales? What does engagement look like? What if it doesn't work?
  Cost? Companies outside Netherlands?
```

### 3.2 About Page (`/about`)

| # | Section | Status |
|---|---------|--------|
| 1 | About Hero | RESTYLE |
| 2 | Origin Story | KEEP |
| 3 | **Team Carousel** | REBUILD (Kalungi-style) |
| 4 | Values | RESTYLE |
| 5 | Three Pillars | KEEP |
| 6 | CTA Banner | RESTYLE |

#### 3.2.1 Team Carousel (REBUILD — Kalungi Style)

**This is the biggest single component build in the redesign.**

```
File: src/components/sections/about/team-carousel.tsx (new, replaces team-section.tsx)

Layout (3-column, desktop):
┌─────────────────────────────────────────────────────────────────┐
│  BACKED BY A FULL-STACK EXECUTION TEAM                          │
│                                                                  │
│  ▲                                                               │
│  ● (orange)  ┌──────┐  ┌──────┐  ┌──────┐                      │
│  ● (purple)  │Photo1│  │Photo2│  │Photo3│   LEADERSHIP          │
│  ● (green)   │-8deg │  │ 0deg │  │+8deg │   The strategic minds │
│  ● (yellow)  └──────┘  └──────┘  └──────┘   driving Blynked...  │
│  ● (red)                                                         │
│  ▼                                                               │
│                                                                  │
│           [ Meet the Full Team Behind the System → ]             │
└─────────────────────────────────────────────────────────────────┘

Left: Vertical dot navigation
- Each dot = one specialty category
- Active dot: outer ring highlight in its color
- Up/down chevrons for cycling

Center: 3 fanned photo cards
- B&W photos (CSS grayscale(100%))
- Left: rotate(-8deg), z-1 | Center: rotate(0), z-3, scale(1.05) | Right: rotate(8deg), z-1
- Transition: 300ms exit (fan outward + fade), 400ms enter (fan inward), 80ms stagger

Right: Category info
- Category name: uppercase, Space Grotesk Bold, orange
- 2-3 line description
- Smooth fade on category change

Auto-rotate: every 5.5s, paused on hover

Categories:
1. Leadership (Wesley, Thijmen, Bojan) — #FF7120
2. Growth Strategy (Benedicte, Erik) — #8B5CF6
3. Sales & Pipeline (Jeroen, Ram) — #10B981
4. Outbound Execution (Teun, Emil) — #F59E0B
5. Content & Demand Gen (Rick) — #EF4444
```

### 3.3 How We Work (`/how-we-work`)

| # | Section | Status |
|---|---------|--------|
| 1 | Hero | RESTYLE |
| 2 | Framework Pillars | RESTYLE |
| 3 | Engagement Progression | KEEP |
| 4 | **Programs Bracket** | NEW (Kalungi "Our Programs" style with orange brackets) |
| 5 | Engagement Models | KEEP |
| 6 | Timeline | RESTYLE (animated draw-on-scroll) |
| 7 | **Mid-page CTA** | NEW |
| 8 | CTA Banner | RESTYLE |

### 3.4 Results Page (`/results`)

| # | Section | Status |
|---|---------|--------|
| 1 | Hero | RESTYLE + add aggregate metric cards at top |
| 2 | Filter Bar | RESTYLE (chamfered filter pills) |
| 3 | Case Study Grid | REDESIGN (metric badges per card) |
| 4 | Aggregate Impact | KEEP |
| 5 | **Testimonial Strip** | NEW (horizontal scrolling quotes) |
| 6 | CTA Banner | RESTYLE |

**Expand from 3 to 9+ case studies:**

| Client | YouTube ID | Status | Priority |
|--------|-----------|--------|----------|
| Envative | `hsGARlONYGE` | EXISTS | — |
| Mayven Studios | `hIdpzZRftgY` | EXISTS | — |
| Amsterdam Standard | `o1hMivJMguE` | EXISTS | — |
| ThinkNimble | `zbxUg0aUFXw` | NEW | P0 |
| Index Software | `9MtI29adJEM` | NEW | P0 |
| BRTHRS | `0jiDUH7VHxo` | NEW | P0 |
| Caimey | `9f1zfHkqkDo` | NEW | P1 |
| Voormedia | `faYt80fXcjs` | NEW | P1 |
| Samson IT | `v6DDzgYki4Y` | NEW | P1 |

### 3.5 Individual Case Study Page (`/results/[slug]`)

| # | Section | Status |
|---|---------|--------|
| 1 | **Hero with 4 Metric Cards** | REDESIGN (ColdIQ-style) |
| 2 | Challenge | RESTYLE |
| 3 | Trigger | KEEP |
| 4 | Solution | RESTYLE |
| 5 | **Before/After Table** | REDESIGN (animated reveal, orange on "after") |
| 6 | **Video Embed** | MOVE UP (before testimonial) |
| 7 | Testimonial | RESTYLE (larger, more prominent) |
| 8 | Takeaways | KEEP |
| 9 | **Related Case Studies** | NEW (2-3 cards linking to other studies) |
| 10 | CTA | RESTYLE |

### 3.6 Book a Call (`/book-a-call`)

- RESTYLE hero
- Add **company-email-only validation** (reject gmail, yahoo, hotmail, outlook)
- Add social proof metrics sidebar next to calendar
- Add FAQ section (3-4 booking-specific questions)

### 3.7 For Startups / For Scale-ups

- RESTYLE all sections to new design system
- Add relevant case studies per page
- Add Results Timeline component (reuse from homepage)
- Add FAQ section per audience
- 5+ CTAs per page

### 3.8 Resources (`/resources`)

- RESTYLE to new design system
- Add YouTube video embed section (recent @SvenStap videos)
- Keep Academy waitlist form

### 3.9 Careers (`/careers`)

- RESTYLE hero, culture, open roles
- Add team photo preview linking to About
- Chamfered buttons on application form

---

## 4. New Component Specifications

### New Files to Create (10)

| File | Purpose |
|------|---------|
| `src/components/shared/preloader.tsx` | Loading screen (counter + dissolve) |
| `src/components/shared/faq-accordion.tsx` | Reusable FAQ component |
| `src/components/shared/grid-divider.tsx` | Section divider animation |
| `src/components/sections/home/results-timeline.tsx` | Onboarding timeline |
| `src/components/sections/home/faq-section.tsx` | Homepage FAQ wrapper |
| `src/components/sections/about/team-carousel.tsx` | Kalungi-style carousel |
| `src/components/sections/how-we-work/programs-bracket.tsx` | Programs section |
| `src/data/faq.ts` | FAQ questions and answers |
| `src/data/team-categories.ts` | Category definitions for carousel |
| `src/types/team-category.ts` | TeamCategory type |

### Files to Modify (23)

| File | Change |
|------|--------|
| `src/app/globals.css` | Colors, typography, scrollbar, new classes |
| `src/lib/fonts.ts` | Replace Instrument Serif → Space Grotesk |
| `src/components/ui/button.tsx` | Rewrite (chamfered polygon) |
| `src/components/layout/header.tsx` | Hover animations, chamfered CTA |
| `src/components/layout/footer.tsx` | Restyle |
| `src/components/layout/mobile-nav.tsx` | Stagger animation |
| `src/components/shared/logo-bar.tsx` | Rewrite (CSS marquee) |
| `src/components/shared/cta-banner.tsx` | Restyle |
| `src/components/sections/home/hero.tsx` | Text scramble, new type |
| `src/components/sections/home/case-study-highlights.tsx` | Add metric badges |
| `src/components/sections/about/hero.tsx` | Restyle |
| `src/components/sections/case-study/hero.tsx` | Metric cards |
| `src/components/sections/results/case-study-grid.tsx` | Restyle |
| `src/components/sections/results/filter-bar.tsx` | Chamfered pills |
| `src/app/page.tsx` | Add new sections |
| `src/app/about/page.tsx` | Swap TeamSection → TeamCarousel |
| `src/app/how-we-work/page.tsx` | Add programs bracket |
| `src/data/case-studies.ts` | Add 6 new case studies |
| `src/data/team-members.ts` | Add category field to all members |
| `src/types/case-study.ts` | Expand union types |
| `src/types/team-member.ts` | Add category field |

---

## 5. Content Requirements

### 5.1 New Case Studies (from YouTube Transcripts)

Process each video transcript into CaseStudy type: challenge[], trigger, solution[], beforeAfter[], results[], takeaways[].

### 5.2 Team Photos

- Scraped from LinkedIn profile pictures for all 10 team members
- Source: LinkedIn URLs provided by Bojan (see team-members.ts for URLs)
- Saved to: `/public/images/team/{firstname}.jpg`
- B&W filter via CSS (`filter: grayscale(100%)`), color on hover
- **Sven Stap is NOT on the team — do not add him**

### 5.3 Company Logo Images

- Scraped from each company's official website domain
- Companies: BMW, Walmart, Starbucks, Target, Van Mossel, KPN, Dura Vermeer, DHL, Van den Udenhout, Heijmans
- Save as white/monochrome versions, SVG or PNG
- Path: `/public/images/logos/companies/{company-name}.svg`

---

## 6. Technical Approach

### Migration Strategy: Incremental (NOT full rewrite)

**Wave 1: Design Foundation**
1. `globals.css` — new color tokens, typography, scrollbar hide
2. `fonts.ts` — swap Instrument Serif → Space Grotesk
3. `button.tsx` — chamfered polygon style
4. Preloader component
5. Grid divider component

**Wave 2: Global Components**
6. `header.tsx` — hover animations, chamfered CTA
7. `footer.tsx` — new typography
8. `logo-bar.tsx` — CSS marquee
9. `cta-banner.tsx` — new style

**Wave 3: Homepage**
10. `hero.tsx` — text scramble, new type, particles
11. Results timeline section
12. FAQ section
13. Mid-page CTA sections

**Wave 4: Case Studies**
14. Process YouTube transcripts for 6 new studies
15. Add to `case-studies.ts`
16. Redesign case study hero with metric cards
17. Related case studies section

**Wave 5: About + Team**
18. Team carousel component
19. Team categories data
20. Replace team section

**Wave 6: Remaining Pages**
22. How We Work (programs bracket)
23. For Startups / Scale-ups (FAQ, timeline, CTAs)
24. Book a Call (email validation, FAQ)
25. Resources, Careers

### New Dependencies

| Package | Purpose | Size |
|---------|---------|------|
| Space Grotesk font (Google Fonts) | Display typography | ~30KB WOFF2 |
| `gsap/TextPlugin` | Text scramble | 0 (included with gsap) |

No major new deps needed. Current stack covers everything.

---

## 7. Priority Matrix

### P0 — Must Have (Launch Blockers)

| Item | Effort |
|------|--------|
| New color palette + typography (globals.css, fonts.ts) | S |
| Chamfered button component | S |
| Header hover animations | M |
| Homepage hero redesign (text scramble, new type) | L |
| Logo marquee (CSS-based) | M |
| Preloader | M |
| Hidden scrollbar | S |

### P1 — Should Have (First Two Weeks)

| Item | Effort |
|------|--------|
| Team carousel (Kalungi-style) | XL |
| 3 new case studies (ThinkNimble, Index Software, BRTHRS) | L |
| Case study hero with metric cards | M |
| FAQ accordion on homepage | M |
| Results timeline | M |
| Multi-CTA strategy (add 4+ CTAs per page) | S |
| Company email validation on Book a Call | S |
| Grid line section dividers | S |

### P2 — Nice to Have (Month 2)

| Item | Effort |
|------|--------|
| 3 more case studies (Caimey, Samson IT, Voormedia) | L |
| Programs bracket section (How We Work) | M |
| Related case studies on individual pages | M |
| Real company logo images | M |
| Team photos (actual headshots) | External |
| Particle/bubble background in hero | M |
| Mobile full-screen nav with stagger | M |

### P3 — Future (Month 3+)

| Item | Effort |
|------|--------|
| Page transition animations | L |
| Custom cursor | M |
| Blog/resource content pages | XL |
| Partner/integration badge grid | S |
| Video testimonial embeds | M |

**Effort key:** S = <2h, M = 2-4h, L = 4-8h, XL = 8-16h

---

## 8. Data Schema Changes

### TeamMember — add category field

```typescript
export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  category: TeamCategoryId;  // NEW
  bio: string;
  photo: string;
  linkedinUrl: string;
  order: number;
}

export type TeamCategoryId =
  | 'leadership'
  | 'growth-strategy'
  | 'sales-pipeline'
  | 'outbound-execution'
  | 'content-demand-gen';
```

### CaseStudy — expand union types

```typescript
industryTag: "Software Dev" | "SaaS" | "Tech" | "Digital Agency" | "Creative Agency" | "Consultancy";
outcomeTag: "Pipeline Growth" | "Revenue" | "Speed to Results" | "Market Entry" | "Deal Size";
// Add optional fields:
clientLogoUrl?: string;
featured?: boolean;
```

### New types

```typescript
// src/types/team-category.ts
export interface TeamCategory {
  id: TeamCategoryId;
  label: string;
  color: string;
  description: string;
}

// src/data/faq.ts
export interface FAQItem {
  question: string;
  answer: string;
  page: 'home' | 'book-a-call' | 'for-startups' | 'for-scale-ups';
}
```

---

## 9. Accessibility & Performance

### Accessibility

- All `prefers-reduced-motion` checks maintained
- Preloader skippable (Escape key or click)
- Team carousel keyboard navigable (arrow keys)
- FAQ: proper `aria-expanded`, `aria-controls`, `role="region"`
- Hidden scrollbar: scroll still works via keyboard/wheel
- Chamfered buttons: use `box-shadow` for focus ring (clip-path clips outline)

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Bundle size increase | < 30KB (font only) |

---

## 10. YouTube Video Inventory

All verified live via oEmbed API:

| Video ID | Title | Client |
|----------|-------|--------|
| `hsGARlONYGE` | From Cold Emails to 10x Better Qualified Leads | Envative |
| `hIdpzZRftgY` | 7 Qualified Calls in 2.5 Weeks | Mayven Studios |
| `o1hMivJMguE` | Success Story: Amsterdam Standard EUR 1M+ deal | Amsterdam Standard |
| `zbxUg0aUFXw` | How We Helped ThinkNimble Book 32 Meetings in 11 Days | ThinkNimble |
| `9MtI29adJEM` | How Our Partnership Helped Rick Take Control Of His Business | Index Software |
| `0jiDUH7VHxo` | 17 meetings with potential clients in 30 days | BRTHRS |
| `9f1zfHkqkDo` | How We Surprised Caimey With 3 Potential Clients In 2 Months | Caimey |
| `v6DDzgYki4Y` | Our partnership makes us feel like colleagues | Samson IT |
| `FxQ-F5-9OZw` | So Many Opportunities We Needed To Stop Campaigns | Unknown |
| `MB5x1_a-fJ4` | 30 qualified meetings with 50% conversion in 80 days | Unknown |
| `faYt80fXcjs` | (Voormedia — needs verification) | Voormedia |

---

*PRD v3.0 — Ready for review and approval before implementation begins.*
