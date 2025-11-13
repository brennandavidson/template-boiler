# ClutchCaddie Page Design Workflow

## About This Document

This document explains my preferred workflow for designing new pages with AI assistance. When I reference this document, follow this process exactly.

## My Design Philosophy

I believe in:
- **Component-first design** - Using proven components from libraries (HyperUI, Aceternity UI, shadcn) rather than creating from scratch
- **Brand consistency** - Every design must respect our established design system
- **Quality over speed** - I'd rather iterate to get it right than ship mediocre designs
- **Organized architecture** - Components belong in the right folders (`sections/`, `features/`, `layout/`, `ui/`)

## Project Context

**Monorepo Structure:**
- Website: `website/`
- Backend: `backend/`
- Mobile App: `app/`
- Shared assets across all directories

**Component Organization:**
```
website/src/components/
├── ui/                    # Base primitives (shadcn)
├── layout/                # Site-wide layout components
├── sections/              # Reusable page sections organized by type
│   ├── heroes/
│   ├── ctas/
│   ├── faqs/
│   ├── features/
│   ├── stats/
│   ├── social-proof/
│   └── testimonials/
├── features/              # Business logic components
└── admin/                 # Admin panel components
```

**Component Providers I Use:**
1. **shadcn/ui** - Base primitives (buttons, cards, inputs)
2. **HyperUI** - Marketing components (heroes, CTAs, pricing, forms)
3. **Aceternity UI** - Modern, animated components
4. **Tailwind UI** - Premium components (when available)

**Brand Guidelines:**

*Visual Design:*
- **Color System:** CSS variables defined in `website/src/styles/globals.css`
  - Primary: `#4CAF50` / `var(--color-primary)` (golf green)
  - Premium/Gold: `#D4AF37` / `var(--color-premium)` (championship gold)
  - Success: `#10B981` / `var(--color-success)` (emerald-500)
  - Warning: `#F59E0B` / `var(--color-warning)` (amber-500)
- **Tailwind Classes:** Use `bg-primary`, `text-premium`, etc. (maps to CSS variables)
- **Dark Mode:** Fully supported with automatic color adjustments
- **Typography:** Bold, modern sans-serif for headlines; clean, readable for body
- **Imagery Strategy:**
  - **Primary:** Real golf photography, professional and premium feel
  - **Character Mascot:** ClutchCaddie 3D claymorphism character (green polo, white cap, waving golfer)
  - **Location:** `app/assets/images/golfer-waiving.png` and other variants
  - **Usage Philosophy:** Blend claymorphism character subtly with real photography
    - NOT forced or overwhelming - keep it tasteful and strategic
    - Use character to add personality, approachability, and brand recognition
    - Character works best as: accent elements, floating elements, section dividers, illustrations for abstract concepts
    - Real photography for: hero backgrounds, feature showcases, credibility/trust elements
  - **Example Blends:**
    - Hero section: Real golf course background + character positioned as a friendly guide/coach on the side
    - How It Works: Real golf photos for each step + character as the "instructor" element
    - Features: Real golf imagery as backgrounds + character highlighting specific features
    - CTA sections: Character as the enthusiastic "companion" encouraging action
  - **Golf Photography Resources:**
    - **Recommended Royalty-Free Sources:**
      - **Unsplash** (unsplash.com) - High-quality golf photography, free for commercial use
      - **Pexels** (pexels.com) - Wide variety of golf images, free license
      - **Pixabay** (pixabay.com) - Good selection of golf course and action shots
      - **Freepik** (freepik.com) - Requires attribution for free tier, premium available
    - **Effective Search Keywords:**
      - Golf course photography: "golf course aerial", "golf fairway", "golf green sunset", "luxury golf resort"
      - Action shots: "golfer swing", "golf drive", "putting green", "professional golfer"
      - Detail shots: "golf ball on tee", "golf clubs", "golf bag", "scorecard"
      - Lifestyle: "golfer silhouette", "golf tournament", "golf celebration", "golf practice"
    - **Quality Requirements:**
      - Minimum resolution: 1920x1080 for full-width backgrounds
      - Preferred: 2560x1440 or higher for hero sections
      - Mobile considerations: Ensure key subjects are centered for responsive cropping
      - File format: JPG or WebP for optimization
    - **License Verification:**
      - Always verify license allows commercial use
      - Unsplash/Pexels: Generally no attribution required, but check individual image licenses
      - Download high-resolution versions for production use
      - Keep track of image sources for legal compliance
    - **Selection Tips for Blending with Character:**
      - Choose images with negative space (sky, fairway) where character can be positioned
      - Avoid overly busy backgrounds that compete with the character
      - Look for warm, professional lighting that matches character's aesthetic
      - Prioritize images that convey premium feel (well-maintained courses, professional settings)
      - Consider color palette - greens, blues, earth tones blend well with our brand colors
- **Overall Design Aesthetic:** Simple, clean, extremely modern feel
  - Minimal clutter, generous white space
  - Smooth animations and transitions
  - Contemporary layouts with clear hierarchy
  - Premium but approachable - not stuffy or corporate
- **Key Design Pattern:** Use Tailwind classes that reference CSS variables, not hard-coded colors

*Brand Messaging:*
- **Brand Tagline:** "Your Expert Golf Companion"
- **Core Marketing Message:** "Smarter Decisions, Lower Scores"
- **Primary Value Prop:** "Your personal golf strategist, available 24/7"

*Voice & Tone:*
- **Marketing Voice** (for website pages): Professional but approachable, results-focused
  - Use 3rd person ("ClutchCaddie helps...") or company plural ("We built...")
  - Focus on benefits and outcomes (lower scores, better strategy)
  - Describe the product from the outside
- **Tone Qualities:** Encouraging (not condescending), Confident (not cocky), Approachable (not overly casual), Knowledgeable (not professorial)

*Copy Guidelines:*
- **Always emphasize:** Strategy, mental game, course management, smart decisions → lower scores
- **Never lead with:** "AI-powered", "Machine learning", "Revolutionary AI technology"
- **Focus on outcomes:** What users achieve (lower scores, better strategy, confidence)
- **Not on process:** How we do it (algorithms, AI analysis, data processing)
- **Words to use:** Coaching, guidance, smart, strategic, improvement, companion, knowledge, personalized
- **Words to avoid:** AI, algorithm, automated, robotic, analyze, data-driven, cutting-edge, next-gen

---

## The 5-Stage Workflow

**Workflow Purpose:**
This workflow is focused on selecting high-quality components from trusted providers and updating copy to match our brand voice. Design system implementation (colors, styling, images) will be handled in a separate workflow.

When I ask you to design a page, follow these stages in order. Don't skip ahead.

### Stage 1: Discovery Questions

**Ask me these questions to understand what I need:**

1. **Page Type & Goal**
   - What type of page is this? (Homepage, landing page, blog, pricing, etc.)
   - What's the primary conversion goal? (Downloads, signups, quiz completion, etc.)
   - Any secondary goals?

2. **Target Audience**
   - Who is this page for?
   - What problem are we solving for them?
   - What's their mindset when they land here?

3. **Key Content**
   - What are the 3-5 key messages this page must communicate?
   - What features/benefits should we highlight?
   - Any required content elements? (forms, media, specific data)

4. **Inspiration**
   - Do I have any competitor or inspiration sites to reference?
   - Any specific components I've seen that I want to use?
   - Any styles to avoid?

5. **Technical Requirements**
   - Any specific interactions needed? (animations, forms, video)
   - Any performance considerations?

**Wait for my answers before proceeding to Stage 2.**

---

### Stage 2: Component Architecture Planning

**Your job in this stage:**

1. **Propose a section-by-section structure** based on the page type and goals

   Example formats:

   **Homepage structure:**
   - Hero (full-screen immersive)
   - Social proof (stats/logos)
   - Features (4-6 key features)
   - How it works (3-4 steps)
   - Testimonials
   - Pricing/value prop
   - FAQ
   - Final CTA

   **Landing page structure:**
   - Hero (focused conversion)
   - Problem/solution
   - Features (3 key benefits)
   - Social proof
   - CTA

   **Blog category structure:**
   - Hero (thin banner)
   - Featured post
   - Post grid
   - Sidebar

2. **Recommend component providers** for each section
   - Which provider is best for each section? (HyperUI, Aceternity, shadcn)
   - Why that provider?

3. **Present this as a proposal** and ask me to approve or suggest changes

**Wait for my approval before proceeding to Stage 3.**

---

### Stage 3: Component Selection

**Your job in this stage:**

1. **Find specific components** from the recommended providers for each section

   For each section, provide:
   - Component name or URL (e.g., "HyperUI hero-07")
   - Why this component fits
   - What copy updates will be needed
   - Alternative option (if applicable)

2. **Create a component selection table:**

   | Section | Component | Provider | Copy Updates Needed |
   |---------|-----------|----------|---------------------|
   | Hero | hero-07 | HyperUI | Headline, subheadline, CTA text |
   | Features | bento-grid | Aceternity | Feature titles and descriptions |
   | CTA | cta-banner | HyperUI | CTA headline and button text |

3. **Ask me to review and approve** component selections

**Wait for my approval before proceeding to Stage 4.**

---

### Stage 4: Component Implementation with Brand Copy

**Your job in this stage:**

This stage focuses ONLY on adding components in their default form with brand-appropriate copy. Do NOT customize colors, styling, or images - that will be handled separately.

1. **Import components one section at a time**
   - Fetch component code from the provider
   - Create file in the proper location:
     - Hero variants → `sections/heroes/`
     - CTA variants → `sections/ctas/`
     - Feature sections → `sections/features/`
     - etc.
   - Use descriptive names (e.g., `PricingHero.tsx`, not `Hero2.tsx`)

2. **Update ONLY the copy/content** to match our brand voice:

   **Copy Writing Guidelines:**
   - Use Marketing Voice (3rd person: "ClutchCaddie helps..." or "We built...")
   - Lead with outcomes: "Lower your scores", "Play smarter golf", "Master course strategy"
   - Never lead with: "AI-powered", "Revolutionary technology", "Machine learning"
   - Focus on what users achieve, not how the tech works
   - Use approved words: coaching, guidance, smart, strategic, companion, personalized
   - Avoid tech jargon: AI, algorithm, automated, data-driven, cutting-edge

   **Good Copy Examples:**
   - ✅ "Master course management and shoot lower scores"
   - ✅ "Your personal golf strategist, available 24/7"
   - ✅ "Get personalized coaching for every situation on the course"
   - ❌ "AI-powered golf improvement platform"
   - ❌ "Machine learning analyzes your game"
   - ❌ "Revolutionary golf technology"

3. **What NOT to do in this stage:**
   - ❌ Don't customize colors or styling
   - ❌ Don't add custom images or assets
   - ❌ Don't modify spacing, borders, or shadows
   - ❌ Leave components in their default visual state

4. **Show me each component** as you create it:
   - Show the code
   - Explain what copy you updated
   - Ask for my feedback before moving to the next section

5. **After all sections are approved**, compose the final page:
   - Import all sections into the page file
   - Arrange in the approved order
   - Ensure proper spacing between sections

**Work section-by-section and get my approval on each before continuing.**

---

### Stage 5: Review & Polish

**Your job in this stage:**

1. **Review the complete page structure** against these criteria:

   **Content & Copy:**
   - Is voice and tone aligned with Marketing Voice guidelines?
   - Does copy lead with outcomes/benefits, not technology?
   - No mention of "AI", "machine learning", or tech jargon in user-facing copy?
   - Does messaging align with "Smarter Decisions, Lower Scores"?
   - Is the copy clear, compelling, and on-brand?

   **Page Flow:**
   - Do sections flow logically?
   - Is the conversion path clear?
   - Does the page guide users toward the primary goal?

   **Component Quality:**
   - Are the selected components appropriate for each section?
   - Do components work well together visually?
   - Are components from reputable providers (HyperUI, Aceternity, shadcn)?

   **Functionality:**
   - Do all CTAs have proper href attributes?
   - Are links properly routed?
   - Are forms functional?
   - Is basic mobile responsiveness in place?

2. **Provide a review summary** with:
   - Overall assessment of page structure and copy
   - List of components used and their file locations
   - Any concerns about copy or component choices
   - Notes for the separate design system implementation phase

3. **Ask me for final approval** or changes

---

## Important Rules

**DO:**
- ✅ Always name specific components (e.g., "HyperUI hero-07", not "a hero component")
- ✅ Wait for my approval at each stage before proceeding
- ✅ Show me code as you create each section
- ✅ Use our established folder structure
- ✅ Focus on high-quality component selection
- ✅ Update copy to match brand voice and messaging
- ✅ Ask clarifying questions when unclear

**DON'T:**
- ❌ Create components from scratch when a library component exists
- ❌ Skip ahead through stages without my approval
- ❌ Make assumptions about content - ask me
- ❌ Use generic placeholder copy - always use ClutchCaddie-specific copy
- ❌ Create poorly named files (e.g., "Hero2.tsx" instead of "PricingHero.tsx")
- ❌ Customize colors, styling, or images in this workflow (separate process)
- ❌ Use AI/tech jargon in user-facing copy (no "AI-powered", "machine learning", "algorithm", etc.)
- ❌ Lead with technology instead of outcomes/benefits

---

## How to Use This Document

When I want to design a new page, I'll say:

```
"I want to design a [PAGE TYPE]. Follow the workflow in .misc/context/page-design-workflow.md"
```

Then you should:
1. Acknowledge you've reviewed this document
2. Start with Stage 1: Discovery Questions
3. Follow each stage in order, waiting for my approval to proceed

---

## Quick Start Template

When I start a new page design, I might provide context like this:

```
Page Type: [Homepage/Landing Page/Blog/Pricing/etc]
Goal: [Primary conversion goal]
Audience: [Target user]
Key Messages: [3-5 things to communicate]
Inspiration: [Any references]
```

Use this to answer some Stage 1 questions proactively, but still ask for any missing information.

---

## Example Interaction

**Me:**
"I want to design a new pricing page. Follow .misc/context/page-design-workflow.md"

**You:**
"I've reviewed your page design workflow. This workflow focuses on selecting high-quality components and updating copy to match your brand - styling and design system implementation will be handled separately.

Let me start with Stage 1: Discovery Questions.

I see you want a pricing page. Let me gather some details:

1. **Goal**: Is the primary goal to drive app downloads, or are we showing actual paid tiers?
2. **Audience**: Is this for all users, or specifically targeting premium/serious golfers?
3. **Key Messages**: What are the 3-5 key things users should understand about pricing?
4. **Inspiration**: Any competitor pricing pages you like or want to avoid?
5. **Technical**: Do we need payment integration, or just information/CTA to app stores?

Once I understand these, I'll move to Stage 2 and propose a section-by-section architecture with component provider recommendations."

**Me:** [Answers questions]

**You:** [Moves to Stage 2 with proposed architecture]

**You:** [After Stage 2 approval, moves to Stage 3 with specific component selections]

**You:** [After Stage 3 approval, implements components in Stage 4 with brand-appropriate copy only]

**You:** [Stage 5: Reviews page structure, copy, and component choices - notes that design system styling will be applied in separate workflow]

---

**Current Version:** 1.5
**Last Updated:** 2025-10-17
**Changelog:**
- v1.5: **Simplified workflow from 6 to 5 stages** - removed Design System Review (old Stage 3)
- v1.5: **Refocused Stage 4 (Implementation)** to ONLY handle component import and copy updates
- v1.5: Stage 4 explicitly excludes color, styling, and image customization (separate workflow)
- v1.5: **Simplified Stage 5 (Review)** to focus on copy quality and component selection, not design system
- v1.5: Updated rules to emphasize component selection and copy focus
- v1.5: Updated example interaction to reflect streamlined workflow
- v1.4: Added Golf Photography Resources section with royalty-free sources, search keywords, quality requirements, and selection tips
- v1.3: Added comprehensive imagery strategy (real golf photography + claymorphism character blend)
- v1.3: Documented ClutchCaddie character mascot usage guidelines
- v1.3: Added design aesthetic principles (simple, clean, extremely modern)
- v1.2: Added comprehensive brand voice and messaging guidelines from brand_voice_guide.md
- v1.2: Added copy writing guidelines and examples
- v1.2: Enhanced review criteria with brand voice checks
- v1.2: Added rules against using AI/tech jargon in user-facing copy
- v1.1: Updated brand colors to reflect actual CSS variable system (#4CAF50 primary, #D4AF37 premium)
- v1.1: Corrected file path references to .misc/context/
- v1.0: Initial version
