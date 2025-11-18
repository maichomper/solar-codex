# SolarCodex Website

A minimalistic, visually-driven one-page website for SolarCodex - an AI development and strategic product consulting business that bridges technology and business strategy through visual thinking.

## Project Overview

**Purpose:** Lead generation website showcasing SolarCodex's services, methodology, and unique visual thinking approach.

**Target Audience:**
- Startup founders and C-level executives of small companies
- Product Managers/Owners looking to increase impact and velocity
- Businesses seeking AI automation and strategic product guidance

**Brand Positioning:** Strategic AI development partner ensuring clients build the RIGHT products with intelligent automation that delivers measurable business impact.

---

## Design Philosophy

### Visual Identity
- **Minimalistic aesthetic:** Clean, spacious layouts with intentional white space
- **Hand-drawn illustrations:** Custom sketches and diagrams as primary visual elements (Dan Roam/Doug Neill style)
- **Color Palette:**
  - **Primary:** Black text on white backgrounds
  - **Accent:** Red for CTAs, highlights, and key elements
  - **Supporting:** Grays for shadows, borders, and section separators
  - **Hand-drawn elements:** Can use additional colors (yellow, blue, purple, orange) for role/concept differentiation

### UI/UX Principles
- **Simplicity with depth:** Minimalist design enhanced by subtle motion and Material UI elevation/shadows
- **Visual storytelling:** Hand-drawn diagrams and process maps > text blocks
- **Smooth interactions:** Thoughtful transitions and animations that guide user attention
- **Scannable content:** Clear hierarchy, concise copy, visual anchors

---

## Technical Stack

### Core Framework
- **Next.js** (latest stable version, App Router)
- **React** 18+
- **TypeScript** (strongly typed)

### UI Components & Styling
- **Material UI (MUI)** v5+ for component library
  - Use MUI's theming system for consistent design
  - Leverage elevation/shadows for depth
  - Custom theme with SolarCodex color palette
- **CSS-in-JS** via MUI's `sx` prop and `styled` components
- **Responsive design:** Mobile-first approach

### Animation & Motion
- **Framer Motion** for smooth transitions and scroll-based animations
- **MUI transitions** for component-level animations
- **Intersection Observer API** for scroll-triggered animations

### Deployment
- **Vercel** (optimized for Next.js)
- **Environment:** Production deployment with automatic preview deployments for branches

---

## Site Structure

### Page Architecture (One-Pager - Version 1)

**Single scrolling page with sections:**

1. **Hero / Introduction**
   - Compelling hook with hand-drawn hero illustration
   - Primary CTA: "Get Your Free AI Radar Opportunity Map"

2. **Why SolarCodex?**
   - The problem we solve
   - Our unique approach (visual thinking + proven frameworks)

3. **What We Do** (4 Services)
   - Strategic Product Discovery
   - AI Agent Development & Integration
   - Team & Process Optimization
   - Fractional CTO Services
   - Layout: 2x2 grid (desktop) → Stacked (mobile)
   - Each service card has "Learn More" that opens modal/lightbox

4. **How We Work** (Unified Process Framework)
   - Philosophy statement
   - The SolarCodex Method (5 phases: Discover → Storyboard → Concept → Develop & Deliver → Evolve)
   - Visual process diagram (large hand-drawn illustration)
   - How this looks in practice (annotated journey map)
   - Our toolkit (frameworks: Visual Thinking, Impact Mapping, Inspired, Traction, OKRs)
   - What makes us different
   - How we collaborate (tools, cadence, deliverables)

5. **Work Examples** (Case Studies)
   - 2-3 project highlights
   - Visual format: Problem → Solution → Impact
   - Hand-drawn process maps/diagrams

6. **Let's Build Something Together** (Contact/CTA)
   - Primary: Book AI Radar Opportunity Map (30-min call)
   - Secondary: Contact form
   - Optional: Links to free templates/resources

### Future Expansion (Phase 2)
- Standalone service pages (deep dives)
- Case studies archive
- Resources/templates library
- Blog/insights section

---

## Content Guidelines

### Voice & Tone
- **Professional but approachable:** Confident without being arrogant
- **Clear over clever:** Direct communication, minimal jargon
- **Action-oriented:** Focus on outcomes and transformation
- **Agency positioning:** Use "we" language (not "I") to position as a company

### Copy Principles
- **Concise:** Few text blocks, more visuals
- **Benefit-focused:** Lead with outcomes, not features
- **Scannable:** Short paragraphs (2-3 sentences max), clear headers
- **Visual hierarchy:** Headers guide the narrative flow

### Visual Content
- **Hand-drawn illustrations:** All major concepts, processes, and diagrams
- **Minimal photography:** None initially (may add team photos in Phase 2)
- **Icons:** Custom hand-drawn (not generic icon libraries)
- **Process maps:** Show methodology visually (Double Loop, 5-phase process, etc.)

---

## Key Features & Interactions

### Animations & Motion
- **Scroll-triggered animations:** Fade-in, slide-up for sections as user scrolls
- **Service cards:** Hover effects (subtle lift/shadow increase)
- **CTAs:** Pulse or subtle motion to draw attention
- **Process diagrams:** Progressive reveal of steps on scroll
- **Smooth scrolling:** Between sections with offset for fixed nav (if applicable)

### Interactive Elements
- **Service modals/lightboxes:** Click "Learn More" to see expanded service details
- **Contact forms:** Inline validation, smooth submission
- **Mobile menu:** Drawer/hamburger for navigation (if multi-section anchors)
- **Scroll-to-section:** Navigation that smoothly scrolls to anchored sections

### Responsive Behavior
- **Desktop (1200px+):** Full 2-column layouts, larger illustrations
- **Tablet (768-1199px):** Adaptive grid layouts
- **Mobile (<768px):** Single column, stacked sections, simplified navigation

---

## Performance & SEO

### Optimization
- **Next.js Image component:** For any raster images (hand-drawn illustrations exported as SVG preferred)
- **Code splitting:** Automatic with Next.js App Router
- **Font optimization:** Next.js font loading for custom fonts (if needed)
- **Lazy loading:** Images and heavy components below the fold

### SEO Requirements
- **Meta tags:** Descriptive title, description, Open Graph tags
- **Structured data:** Schema.org markup for business/services
- **Sitemap:** Auto-generated via Next.js
- **Semantic HTML:** Proper heading hierarchy, landmarks

### Analytics (Future)
- Google Analytics or Vercel Analytics integration
- Event tracking for CTAs, service clicks, form submissions

---

## Development Workflow

### Project Setup
```bash
npx create-next-app@latest the-solar-codex --typescript --tailwind --app
cd the-solar-codex
npm install @mui/material @emotion/react @emotion/styled framer-motion
```

### File Structure (Recommended)
```
the-solar-codex/
├── app/
│   ├── layout.tsx          # Root layout with MUI theme provider
│   ├── page.tsx            # Main one-pager component
│   └── components/         # Reusable components
│       ├── Hero.tsx
│       ├── WhySolarCodex.tsx
│       ├── Services.tsx
│       ├── ServiceCard.tsx
│       ├── ServiceModal.tsx
│       ├── HowWeWork.tsx
│       ├── CaseStudies.tsx
│       ├── Contact.tsx
│       └── common/
│           ├── Button.tsx
│           ├── SectionHeading.tsx
│           └── HandDrawnIcon.tsx
├── public/
│   ├── illustrations/      # Hand-drawn SVG/PNG files
│   ├── process-maps/       # Methodology diagrams
│   └── favicon.ico
├── styles/
│   └── theme.ts           # MUI custom theme configuration
├── utils/
│   └── animations.ts      # Reusable Framer Motion variants
└── README.md
```

### Git Workflow
- **Main branch:** Production-ready code
- **Develop branch:** Integration branch for features
- **Feature branches:** Individual sections/components (`feature/hero-section`, etc.)
- **Commit conventions:** Conventional Commits format

### Deployment
- **Vercel:** Connected to GitHub repository
- **Auto-deploy:** Main branch → Production, feature branches → Preview URLs
- **Environment variables:** Managed via Vercel dashboard (if needed for forms/analytics)

---

## MUI Theme Configuration

### Custom Theme (Starter)
```typescript
// styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black
    },
    secondary: {
      main: '#FF0000', // Red accent
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.05)',
    '0px 4px 8px rgba(0, 0, 0, 0.08)',
    '0px 8px 16px rgba(0, 0, 0, 0.12)',
    // ... customize shadow levels
  ],
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // Default MUI spacing unit
});

export default theme;
```

---

## Content Sections (Detailed Specs)

### Section 1: Hero
**Goal:** Capture attention and communicate value instantly

**Elements:**
- Hand-drawn hero illustration (large, prominent)
- Headline: Clear value proposition (~10 words)
- Subheadline: Supporting statement (~20 words)
- Primary CTA: "Get Your Free AI Radar Opportunity Map" (button)
- Secondary CTA: "See How We Work" (scroll anchor or subtle link)

**Visual Treatment:**
- Full viewport height (or 80vh)
- Centered content with illustration on side (desktop) or stacked (mobile)
- Subtle animation on load (fade-in, slight upward motion)

---

### Section 2: Why SolarCodex?
**Goal:** Establish the problem and position SolarCodex as the solution

**Elements:**
- Section heading: "Why SolarCodex?"
- Problem statement (2-3 sentences)
- Solution statement (2-3 sentences)
- Hand-drawn visual: Status quo vs. SolarCodex approach (comparison diagram)

**Visual Treatment:**
- Contrast background (subtle gray) to separate from hero
- Large illustration as focal point
- Minimal text, maximum visual storytelling

---

### Section 3: What We Do
**Goal:** Present services clearly and drive engagement via "Learn More"

**Elements:**
- Section heading: "What We Do"
- Section intro (1 sentence)
- 4 service cards (2x2 grid on desktop, stacked on mobile):
  1. Strategic Product Discovery
  2. AI Agent Development & Integration
  3. Team & Process Optimization
  4. Fractional CTO Services

**Service Card Structure:**
- Hand-drawn icon (80px, top)
- Service title (bold, 18-20px)
- Description (25-30 words, 14-16px)
- "Learn More ↗" link/button

**Interaction:**
- Hover: Subtle lift (elevation increase)
- Click: Opens modal/lightbox with expanded service details

**Modal Content (for each service):**
- Full service name
- Tagline
- "Ideal For" (who needs this)
- "What's Included" (visual checklist)
- "Deliverables" (visual list)
- "Timeline & Pricing" (text)
- CTA: "Let's Talk" (scroll to contact or open contact form)

---

### Section 4: How We Work
**Goal:** Showcase methodology and differentiation through visual process

**Elements:**
- Section heading: "How We Work"
- Philosophy statement (30 words + visual metaphor)
- **The SolarCodex Method** (large hand-drawn circular process diagram):
  - 5 phases: Discover → Storyboard → Concept → Develop & Deliver → Evolve
  - Hand-drawn icons for each phase
  - Iterative/continuous loop visual
- **How This Looks in Practice** (annotated journey map showing activities per phase)
- **Our Toolkit** (icon grid with frameworks):
  - Visual Thinking
  - Impact Mapping
  - Inspired Framework
  - Traction/EOS
  - OKR Framework
  - Double Loop Design Process
- **What Makes Us Different** (4 callout boxes):
  - Impact-driven, not output-driven
  - Visual by design
  - AI as a tool, not a buzzword
  - Remote-optimized
- **How We Collaborate** (tools + cadence visual)

**Visual Treatment:**
- Largest section with most visual content
- Progressive reveal animations as user scrolls
- Large diagrams that expand on scroll or interaction
- White background with sections separated by subtle gray dividers

---

### Section 5: Work Examples (Case Studies)
**Goal:** Demonstrate real-world impact with visual storytelling

**Elements:**
- Section heading: "Work Examples" or "Case Studies"
- 2-3 project highlights (cards or full-width sections)

**Case Study Structure (per project):**
- Project context (1-2 sentences)
- Hand-drawn process map or visual showing:
  - Problem
  - Solution (approach taken)
  - Impact (results achieved)
- Metrics/outcomes (if applicable)
- Service(s) used

**Visual Treatment:**
- Alternating layout (image left/right)
- Large hand-drawn diagrams as focal points
- Minimal text, let visuals tell the story

---

### Section 6: Let's Build Something Together (Contact/CTA)
**Goal:** Convert visitors into leads

**Elements:**
- Section heading: "Let's Build Something Together"
- Primary CTA: **"Get Your Free AI Radar Opportunity Map"**
  - Description: "In 30 minutes, we'll map out where AI can transform your operations. Walk away with a visual roadmap of automation opportunities."
  - Button: "Book Your Free Session" (links to calendar or form)
- Secondary CTA: Contact form (if calendar not appropriate)
  - Fields: Name, Email, Company, Message
  - Submit button
- Optional: Links to free templates/resources (if available)

**Visual Treatment:**
- Contrasting background (subtle gray or black with white text)
- Clean, focused layout
- CTA button in red accent color
- Confirmation message after form submission

---

## Future Enhancements (Phase 2+)

### Bilingual Support
- Spanish version of the site (toggle or separate route)
- Content managed via CMS or JSON files

### CMS Integration
- Notion API for case studies and blog content
- Allows non-technical updates to content

### Blog/Resources Section
- Template library downloads
- Articles/insights on product strategy, AI, visual thinking

### Enhanced Analytics
- Heatmaps (Hotjar, Microsoft Clarity)
- Conversion funnel tracking
- A/B testing for CTAs

---

## Brand Assets Needed

### Illustrations (Hand-Drawn)
- [ ] Hero illustration
- [ ] Why SolarCodex comparison diagram (status quo vs. SolarCodex)
- [ ] Service icons (4x, one per service)
- [ ] SolarCodex Method process diagram (5-phase loop)
- [ ] Journey map (How This Looks in Practice)
- [ ] Framework toolkit icons (6x)
- [ ] Differentiation callout icons (4x)
- [ ] Collaboration visual (tools + cadence)
- [ ] Case study process maps (2-3x)

### Logo & Brand Elements
- [ ] SolarCodex logo (SVG, multiple sizes)
- [ ] Favicon
- [ ] Social media preview image (Open Graph)

---

## Getting Started for Claude Code

When working with Claude Code on this project, you can reference this README for:
- **Overall vision and goals:** What SolarCodex is and who it serves
- **Design principles:** Minimalism, hand-drawn visuals, Material UI with depth
- **Technical stack:** Next.js, MUI, Framer Motion
- **Content structure:** Detailed section-by-section breakdown
- **Component architecture:** Suggested file structure and components

### Development Priorities
1. Set up Next.js project with TypeScript, MUI, and Framer Motion
2. Configure MUI theme (black/white/red color palette)
3. Build component library (service cards, section headings, CTAs)
4. Implement sections in order (Hero → Why → Services → How We Work → Case Studies → Contact)
5. Add animations and transitions (scroll-triggered, hover effects)
6. Responsive design testing (mobile, tablet, desktop)
7. Performance optimization and SEO setup
8. Deploy to Vercel

### Questions for Miguel During Development
- Placeholder content for sections where hand-drawn illustrations are not yet ready
- Specific calendar booking tool integration (Calendly, Cal.com, custom)
- Contact form backend (Vercel serverless functions, third-party service)
- Analytics preference (GA4, Vercel Analytics, other)

---

## Contact & Support

**Project Owner:** Miguel (SolarCodex)  
**Repository:** `/Users/micho/Documents/projects/repos/the-solar-codex`  
**Deployment:** Vercel  
**Questions:** Reference this README or consult with Miguel for clarifications

---

**Last Updated:** November 15, 2025
