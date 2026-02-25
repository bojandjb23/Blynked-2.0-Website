# Blynked 2.0 Website

Production-ready website for Blynked — the growth partner for tech companies. Built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static Generation)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom design tokens
- **Animation:** GSAP + Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Inter (variable) + JetBrains Mono

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — conversion hub with 9 sections |
| `/how-we-work` | Traction Framework methodology deep-dive |
| `/results` | Case studies index with filters |
| `/results/[slug]` | Individual case study (Envative, Mayven Studios, Amsterdam Standard) |
| `/about` | Team, story, values |
| `/book-a-call` | Qualifier form + calendar booking |
| `/careers` | Culture + open roles |
| `/resources` | Blog/guides (placeholder for Phase 2) |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                 # Design system primitives (Button, Card, Input, etc.)
│   ├── layout/             # Header, Footer, Mobile Nav, Bottom Bar
│   ├── sections/           # Page-specific section components
│   │   ├── home/           # 9 homepage sections
│   │   ├── how-we-work/    # 4 sections
│   │   ├── results/        # 5 sections
│   │   ├── case-study/     # 8 sections
│   │   ├── about/          # 5 sections
│   │   ├── book-a-call/    # 5 sections
│   │   └── careers/        # 4 sections
│   └── shared/             # Reusable components (ScrollReveal, CTABanner, etc.)
├── data/                   # Static content data
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities, fonts, constants
└── types/                  # TypeScript type definitions
```

## Design System

- **Theme:** Dark glassmorphism with orange (#F47920) accents
- **Background:** #0A0A0A (deep black)
- **Typography:** Inter for text, JetBrains Mono for metrics
- **Components:** Glassmorphic cards, animated counters, scroll reveals
- **Accessibility:** WCAG AA compliant, reduced motion support, semantic HTML

## Deployment

Optimized for Vercel deployment. Connect this repo to Vercel for automatic deployments.

```bash
# Or deploy via CLI
npx vercel
```

## Phase 2 (Planned)

- Sanity.io CMS integration
- Interactive Traction Framework visualization
- 3D parallax card effects
- Pipeline Growth Calculator
- Blog + downloadable guides
- HubSpot CRM integration
- PostHog analytics
