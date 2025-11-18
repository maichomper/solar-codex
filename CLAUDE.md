# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**SolarCodex Website** - A minimalistic, visually-driven one-page website for an AI development and strategic product consulting business. The site emphasizes visual thinking through hand-drawn illustrations and diagrams (Dan Roam/Doug Neill style).

**Current State:** This is a fresh Next.js project. The `old-site/` directory contains a deprecated Gatsby implementation that should be ignored.

## Technical Stack

- **Next.js** (App Router) with TypeScript
- **React** 18+
- **Material UI (MUI)** v5+ for components and theming
- **Framer Motion** for animations and scroll-triggered effects
- **Vercel** for deployment

## Development Commands

### Initial Setup
```bash
# Install dependencies
npm install

# Development server (default: http://localhost:3000)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run start

# Type checking
npm run lint
```

### Project Initialization (if starting fresh)
```bash
npx create-next-app@latest . --typescript --app
npm install @mui/material @emotion/react @emotion/styled framer-motion
```

## Architecture & File Structure

### Recommended Directory Structure
```
app/
├── layout.tsx              # Root layout with MUI ThemeProvider
├── page.tsx                # Main one-pager (all sections)
└── components/
    ├── Hero.tsx            # Hero/introduction section
    ├── WhySolarCodex.tsx   # Problem/solution section
    ├── Services.tsx        # Services grid container
    ├── ServiceCard.tsx     # Individual service card
    ├── ServiceModal.tsx    # Expanded service details
    ├── HowWeWork.tsx       # Methodology section
    ├── CaseStudies.tsx     # Work examples section
    ├── Contact.tsx         # CTA and contact section
    └── common/
        ├── Button.tsx
        ├── SectionHeading.tsx
        └── HandDrawnIcon.tsx

styles/
└── theme.ts                # MUI custom theme (black/white/red palette)

utils/
└── animations.ts           # Reusable Framer Motion variants

public/
├── illustrations/          # Hand-drawn SVG/PNG files
└── process-maps/          # Methodology diagrams
```

## Design System

### Color Palette
- **Primary:** Black (`#000000`) text on white backgrounds
- **Accent:** Red (`#FF0000`) for CTAs, highlights, and key elements
- **Supporting:** Grays for shadows, borders, and section separators
- **Hand-drawn elements:** Can use additional colors (yellow, blue, purple, orange) for differentiation

### Theme Configuration
The MUI theme (`styles/theme.ts`) should define:
- Primary palette: Black
- Secondary palette: Red accent
- Typography: Clean sans-serif (Inter, Helvetica, Arial)
- Shadows: Subtle elevation system for depth
- Border radius: 8px
- Spacing: 8px base unit

### Typography Hierarchy
- **h1**: 3rem, weight 700, line-height 1.2
- **h2**: 2.5rem, weight 700, line-height 1.3
- **body1**: 1.125rem, line-height 1.6

## Site Structure & Content

### Single-Page Sections (in order)
1. **Hero/Introduction** - Compelling hook with CTA: "Get Your Free AI Radar Opportunity Map"
2. **Why SolarCodex?** - Problem/solution positioning with comparison diagram
3. **What We Do** - 4 services in 2x2 grid (desktop) / stacked (mobile):
   - Strategic Product Discovery
   - AI Agent Development & Integration
   - Team & Process Optimization
   - Fractional CTO Services
4. **How We Work** - The SolarCodex Method (5 phases: Discover → Storyboard → Concept → Develop & Deliver → Evolve)
5. **Work Examples** - 2-3 case studies with visual process maps
6. **Let's Build Something Together** - Contact/CTA section

### Service Modal Pattern
Each service card has a "Learn More" link that opens a modal with:
- Full service name and tagline
- "Ideal For" section
- "What's Included" visual checklist
- "Deliverables" list
- "Timeline & Pricing" text
- CTA: "Let's Talk" (scroll to contact)

## Animation & Interaction Patterns

### Scroll-Triggered Animations
- Use Intersection Observer API with Framer Motion
- Fade-in and slide-up effects as sections enter viewport
- Progressive reveal for process diagrams
- Smooth scrolling between sections with offset for fixed nav

### Component Interactions
- **Service cards:** Hover → subtle lift with increased shadow
- **CTAs:** Pulse or subtle motion to draw attention
- **Modals:** Smooth open/close transitions
- **Mobile menu:** Drawer/hamburger navigation

### Responsive Breakpoints
- **Desktop:** 1200px+ (full 2-column layouts, larger illustrations)
- **Tablet:** 768-1199px (adaptive grid layouts)
- **Mobile:** <768px (single column, stacked sections)

## Content & Brand Guidelines

### Voice & Tone
- Professional but approachable (confident without arrogance)
- Clear over clever (minimal jargon)
- Action-oriented (focus on outcomes)
- Agency positioning (use "we" not "I")

### Copy Principles
- Concise (more visuals, fewer text blocks)
- Benefit-focused (outcomes over features)
- Scannable (2-3 sentence paragraphs max)
- Clear visual hierarchy

### Visual Content Philosophy
- Hand-drawn illustrations for all major concepts, processes, and diagrams
- Custom hand-drawn icons (not generic libraries)
- Minimal photography (none initially)
- Process maps showing methodology visually

## Performance & SEO

### Optimization
- Use Next.js `<Image>` component for raster images
- Prefer SVG for hand-drawn illustrations
- Code splitting (automatic with App Router)
- Lazy loading for below-the-fold content
- Next.js font optimization for custom fonts

### SEO Requirements
- Meta tags: descriptive title, description, Open Graph tags
- Structured data: Schema.org markup for business/services
- Auto-generated sitemap via Next.js
- Semantic HTML with proper heading hierarchy

## Development Workflow

### Git Conventions
- **Main branch:** Production-ready code
- **Feature branches:** Individual components/sections (e.g., `feature/hero-section`)
- **Commit format:** Conventional Commits

### Deployment
- **Platform:** Vercel
- **Auto-deploy:** Main branch → Production, feature branches → Preview URLs
- **Environment variables:** Manage via Vercel dashboard

## Key Implementation Notes

### Component Development Priorities
1. Set up Next.js project with TypeScript, MUI, and Framer Motion
2. Configure MUI theme (black/white/red palette)
3. Build reusable component library (cards, headings, CTAs)
4. Implement sections sequentially (Hero → Why → Services → How We Work → Case Studies → Contact)
5. Add animations and transitions
6. Responsive design testing
7. Performance optimization and SEO
8. Deploy to Vercel

### Common Patterns
- **Section wrapper:** Full-width container with max-width constraint and vertical padding
- **Service cards:** MUI Card with elevation, hover effects, and modal trigger
- **Hand-drawn visuals:** SVG components or img tags with proper alt text
- **Scroll animations:** Framer Motion's `motion` components with `whileInView` prop

### Styling Approach
- Use MUI's `sx` prop for component-level styles
- Use `styled()` for reusable component variants
- Leverage MUI theme spacing and breakpoint helpers
- Avoid custom CSS files; keep styles in TypeScript

## Future Enhancements (Not Current Scope)

- Bilingual support (Spanish)
- CMS integration (Notion API for case studies/blog)
- Blog/resources section
- Enhanced analytics (heatmaps, conversion tracking)
- A/B testing for CTAs

## Questions to Resolve During Development

- Calendar booking tool integration (Calendly, Cal.com, or custom)
- Contact form backend (Vercel serverless functions vs. third-party service)
- Analytics preference (GA4, Vercel Analytics, or other)
- Placeholder content strategy for missing hand-drawn illustrations
