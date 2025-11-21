# Client Intake Processor

This skill guides you through processing a client intake form to generate a complete, production-ready website for a home service business.

## 🚨 CRITICAL: YOUR ROLE AND EXECUTION STANDARDS

**YOU MUST COMPLETE ALL WORK AUTONOMOUSLY. DO NOT:**
- ❌ Ask "Would you like me to continue?"
- ❌ Say "This will take a long time, should I proceed?"
- ❌ Suggest "You'll need to insert the configs manually"
- ❌ Propose "Let me set up the structure and you can fill in the content"
- ❌ Claim "Starting from scratch will be faster"
- ❌ Stop mid-process and ask for permission to continue

**YOU MUST:**
- ✅ Execute EVERY step in this skill from start to finish
- ✅ Write ALL blog posts (6-8 Write tool calls - just do it)
- ✅ Generate ALL service content (3-6 services)
- ✅ Generate ALL city content (3-8 cities)
- ✅ Complete the ENTIRE site.config.json
- ✅ Work through the process systematically without asking for confirmation
- ✅ Only stop if you encounter actual errors or missing required information

**🚨 CRITICAL FIELDS THAT MUST NEVER BE MISSING:**
- `contact.googleBusinessUrl` - MUST be included in site.config.json
- `contact.googleReviewUrl` - MUST be included in site.config.json
- `social.google` - MUST be the Business Profile URL (NOT review URL)

**This is a complete end-to-end automation. The user provides the intake form, YOU build the entire website. That's the job.**

## Prerequisites

Before starting, verify:
- Client has filled out `client-intake/form.md` completely
- Integration codes (GHL forms, chat widget, Featurable ID) are provided
- Logo files are in `client-intake/logo/`
- Project photos are in `client-intake/projects/` (optional but recommended)

## Process Overview

The intake processing happens in 5 phases:
1. **Validation** - Read and verify intake form
2. **Content Generation** - Create all page content and blog posts
3. **Configuration** - Update site.config.json
4. **Assets** - Copy/organize images and files
5. **Testing** - Validate and test the build

---

## Phase 1: Validation

### Step 1.1: Read the Intake Form
```bash
Read client-intake/form.md
```

Extract and verify all required information:
- Business name, tagline, contact info
- Business type (HVAC, pool service, landscaping, etc.)
- 3-6 services offered
- 3-8 service areas (cities)
- Years in business, certifications
- Social media links
- **GHL quote form embed code (inline)**
- **GHL chat widget embed code**
- **Featurable widget ID**
- **Google Business Profile URL** (main profile/map link)
- **Google Review URL** (direct review submission link)

### Step 1.2: Check for Missing Information
If ANY required fields are missing:
- List what's missing
- Ask user to complete the form before proceeding
- DO NOT continue with incomplete data

### Step 1.3: Verify Asset Files
Check that required files exist:
```bash
ls client-intake/logo/horizontal.png
ls client-intake/logo/horizontal-white.png
ls client-intake/logo/square.png
```

If logo files are missing, warn the user but continue (they can add later).

---

## Phase 2: Content Generation

**CRITICAL: Use the `elite-content-generator` skill for ALL content in this phase.**

### Step 2.1: Research Phase - MANDATORY, NO EXCEPTIONS

**🚨 THIS STEP IS NON-NEGOTIABLE. YOU MUST COMPLETE ALL SEARCHES. 🚨**

Before generating ANY content, you MUST perform these WebSearch calls:

**REQUIRED WEB SEARCHES (Do ALL of these):**

1. **Industry Research (3-4 searches):**
   - WebSearch: "[business type] common problems"
   - WebSearch: "[business type] maintenance tips"  
   - WebSearch: "[business type] cost factors [primary location]"
   - WebSearch: "[specific service] issues [primary location]" (for main service)

2. **Local Market Research (2-3 searches per city):**
   For EACH city in the intake form:
   - WebSearch: "[city], [state] climate challenges"
   - WebSearch: "[city] [business type] requirements"
   - WebSearch: "[city] seasonal [business type] considerations"

**TOTAL SEARCHES REQUIRED:** ~10-15 WebSearch calls depending on number of cities

**DO NOT:**
- ❌ Skip this step because "it will take time"
- ❌ Say "I'll generate content based on general knowledge"
- ❌ Claim "research isn't necessary for this industry"
- ❌ Ask permission to skip research

**YOU MUST:**
- ✅ Execute ALL WebSearch calls listed above
- ✅ Take notes from search results
- ✅ Use findings to write specific, localized content
- ✅ Reference real climate/regional factors in content

**This is the difference between generic AI slop and professional SEO content.**

---

## 🎯 SEO CONTENT FORMATTING STANDARDS

**APPLIES TO: Service pages, Service Area pages, and Blog posts**

These are **mandatory** formatting rules for ALL SEO content. Services/Service Areas and Blogs follow the SAME formatting standards, with only word count differences.

### HTML Structure Requirements:

**✅ DO THIS - Proper HTML without section heading (component handles H2):**
```html
<p>Air conditioning repair addresses issues that prevent your AC system from cooling effectively. These problems can range from simple thermostat malfunctions to complex compressor failures.</p>

<p>Professional AC repair involves diagnosing the root cause and implementing lasting solutions. This ensures your system runs efficiently and prevents costly future breakdowns.</p>

<h3>Common AC Problems</h3>
<ul>
  <li>Refrigerant leaks causing poor cooling</li>
  <li>Frozen evaporator coils</li>
  <li>Faulty thermostats or sensors</li>
  <li>Clogged drain lines leading to water damage</li>
</ul>

<p>Each of these issues requires specific repair techniques and replacement parts. A trained technician can quickly identify the problem and recommend the best solution.</p>

<h3>Signs You Need Professional Repair</h3>
<ol>
  <li>System runs constantly but doesn't cool effectively</li>
  <li>Strange noises like grinding or squealing</li>
  <li>Ice forming on refrigerant lines</li>
  <li>Sudden spike in energy bills</li>
</ol>

<p>If you notice any of these warning signs, it's time to call a professional before a small problem becomes an expensive failure.</p>
```

**Note:** The section heading (e.g., "What is Air Conditioning Repair?") goes in the `heading` field, NOT in the `content` HTML.

**❌ DON'T DO THIS - Walls of text:**
```
Air conditioning repair addresses issues that prevent your AC system from cooling effectively. These problems can range from simple thermostat malfunctions to complex compressor failures. Professional AC repair involves diagnosing the root cause and implementing lasting solutions. This ensures your system runs efficiently and prevents costly future breakdowns. Common problems include refrigerant leaks causing poor cooling, frozen evaporator coils, faulty thermostats or sensors, and clogged drain lines leading to water damage.
```

### MANDATORY Formatting Rules:

**🚨 CRITICAL - DO NOT DUPLICATE HEADINGS:**
- The `heading` field becomes the H2 heading automatically
- DO NOT include an H2 in the `content` field that repeats the section heading
- Start content directly with `<p>` paragraphs
- Only use `<h3>` for sub-topics WITHIN the section

1. **Headings:**
   - **NEVER use `<h2>` in content** - the component renders `heading` as H2
   - Use `<h3>` ONLY for sub-topics within the section
   - Never skip heading levels (no h4 without h3)
   - Content should start with `<p>` tags, not headings

2. **Paragraphs:**
   - Every paragraph MUST be wrapped in `<p>` tags
   - Keep paragraphs to 2-4 sentences maximum
   - Leave blank lines between paragraphs for readability

3. **Lists:**
   - Use `<ul>` + `<li>` for unordered lists (features, benefits, tips, problems)
   - Use `<ol>` + `<li>` for ordered lists (steps, processes, rankings)
   - Each list item should be concise (1-2 sentences max)

4. **Structure:**
   - Alternate between paragraphs, lists, and headings
   - Never have more than 2 paragraphs in a row without a heading or list
   - Use lists every 2-3 paragraphs to break up text

5. **Content Flow:**
   - Each section follows: `heading` (rendered as H2) → `content` (paragraphs → optional H3/list → more paragraphs)
   - Start content with paragraphs, not headings
   - End sections with actionable takeaways when appropriate

### Word Count Guidelines:

- **Service Pages:** 600-1000 words total (200-400 words per section, 3-4 sections)
- **Service Area Pages:** 600-1000 words total (200-400 words per section, 3 sections)
- **Blog Posts:** 1000-1500 words total (use more sections and deeper coverage)

### Quality Standards:

- Educational expert voice (not salesy)
- Include specific details and examples
- Natural, non-AI language
- Local/regional considerations when relevant
- Address user questions and pain points

---

### Step 2.2: Generate Service Page Content
For EACH service listed in the intake form:

1. Create 3-4 content sections:
   - What is [Service]?
   - Why [Service] is Important / When You Need It
   - How [Service] Works / What to Expect
   - Cost Factors / Decision Considerations (optional)

2. **🎯 FOLLOW "SEO CONTENT FORMATTING STANDARDS" ABOVE** - Word count: 600-1000 words total (200-400 per section)

3. Apply industry-specific considerations:
   - Include local/regional factors when relevant
   - Address common customer pain points
   - Provide specific details and examples
   - Use natural, expert voice (not salesy)

4. Generate hero content:
   - **CRITICAL - SEO Heading Hierarchy:**
     - `title` = Short tagline/category (e.g., "Pool Installation Experts") - displays as BADGE
     - `subtitle` = SEO-optimized H1 (e.g., "Pool Installation in Phoenix, AZ") - displays as H1
     - `description` = 2-3 sentences about the service generally
   - **The `subtitle` is the H1**, so it MUST be keyword-rich and location-specific
   - **The `title` is just a badge**, so it can be generic/branded

5. **Generate SEO metadata file for EACH service:**
   Create `src/app/(pages)/services/[slug]/seo-config.json`:
   ```json
   {
     "slug": "[service-slug]",
     "seo": {
       "title": "[Service Name] in [Primary Location] | [Business Name]",
       "description": "[155-160 character description highlighting service benefits and location]",
       "keywords": ["[service]", "[service] [city]", "[service] near me", "[business type]", "[primary location]"],
       "noIndex": false
     },
     "sitemap": {
       "exclude": false,
       "priority": 0.8,
       "changeFrequency": "monthly"
     },
     "metadata": {
       "category": "service",
       "author": "[Business Name]",
       "lastModified": "[today's date YYYY-MM-DD]"
     }
   }
   ```

### Step 2.3: Generate Service Area (City) Page Content
For EACH city listed in the intake form:

1. Create 3 content sections with local focus:
   - "[City]'s Premier [Business Type] Provider"
   - Complete [Service Type] Services for [City] Residents/Homes
   - Why [City] Homeowners/Residents Choose [Business Type] Services

2. **🎯 FOLLOW "SEO CONTENT FORMATTING STANDARDS" ABOVE** - Word count: 600-1000 words total (200-400 per section)

3. Include city-specific elements:
   - Local climate challenges
   - Neighborhood references (general, not too specific)
   - Regional regulations or requirements
   - Seasonal considerations for that area

5. Generate hero content:
   - **CRITICAL - SEO Heading Hierarchy:**
     - `heroTitle` = Short tagline/category (e.g., "Pool Services") - displays as BADGE
     - `heroSubtitle` = SEO-optimized H1 (e.g., "Pool Services in Phoenix, AZ") - displays as H1
     - Background image URL (use appropriate Unsplash search)
   - **The `heroSubtitle` is the H1**, so it MUST be keyword-rich and location-specific
   - **The `heroTitle` is just a badge**, so it can be generic/branded
   - Use pattern: `heroSubtitle` = "[SERVICE TYPE] in [CITY], [STATE]"

6. **Generate SEO metadata file for EACH city:**
   Create `src/app/(pages)/service-areas/[slug]/seo-config.json`:
   ```json
   {
     "slug": "[city-slug]",
     "seo": {
       "title": "[Business Type] Services in [City], [State] | [Business Name]",
       "description": "[155-160 character description highlighting local service and city-specific benefits]",
       "keywords": ["[business type] [city]", "[service] [city]", "[city] [business type]", "[business type] near me"],
       "noIndex": false
     },
     "sitemap": {
       "exclude": false,
       "priority": 0.7,
       "changeFrequency": "monthly"
     },
     "metadata": {
       "category": "service-area",
       "author": "[Business Name]",
       "lastModified": "[today's date YYYY-MM-DD]"
     }
   }
   ```

### Step 2.4: Generate Blog Posts

**🚨 CRITICAL: This step is MANDATORY and must be completed. DO NOT skip blog generation. 🚨**

**YOU MUST:**
1. ✅ Delete ALL existing template blogs using Bash tool
2. ✅ Create new category folders using Bash tool
3. ✅ Write category config files using Write tool
4. ✅ Write 6-8 blog post JSON files using Write tool

#### A. Delete Existing Template Blogs (REQUIRED - Use Bash Tool)

**YOU MUST run this command using the Bash tool:**
```bash
rm -rf public/blog-content/categories/*
```

**This step is NOT optional. Execute it now before proceeding.**

#### B. Determine Blog Categories (1-2 categories)
Based on business type, create category slugs:
- HVAC → `hvac-maintenance` and `hvac-tips`
- Pool Service → `pool-maintenance` and `pool-tips`
- Roofing → `roofing-maintenance` and `roofing-tips`
- Landscaping → `landscaping-tips` and `landscape-design`
- Plumbing → `plumbing-tips` and `plumbing-maintenance`

#### C. Create Category Structure (REQUIRED - Use Bash + Write Tools)

For EACH category:

1. **Create category folder using Bash tool:**
   ```bash
   mkdir -p public/blog-content/categories/{category-slug}
   ```
   **YOU MUST execute this command for EACH category.**

2. **Create category config file using Write tool** at `public/blog-content/categories/{category-slug}/.config.json`:
   ```json
   {
     "name": "Category Display Name",
     "description": "Category description for SEO (1-2 sentences)",
     "seo": {
       "title": "Category Name | Business Name Blog",
       "description": "SEO description for category page",
       "keywords": ["keyword1", "keyword2", "keyword3"]
     }
   }
   ```

#### D. Generate 6-8 Blog Posts (REQUIRED - Use Write Tool)

**🚨 YOU MUST WRITE 6-8 BLOG POST JSON FILES. This is NOT optional. 🚨**

Split posts between categories (3-4 posts per category).

**For EACH blog post, you MUST use the Write tool to create a JSON file:**
- File location: `public/blog-content/categories/{category-slug}/{post-slug}.json`
- File naming: Use kebab-case slug (e.g., `arizona-ac-maintenance-guide.json`)
- **ACTION REQUIRED:** Execute Write tool 6-8 times, once per blog post

**Post topics to cover:**
- Service-specific how-to guides (2-3 posts)
- Common problems and solutions (2-3 posts)
- Maintenance tips and best practices (1-2 posts)
- Local/seasonal considerations (1-2 posts)

**Each JSON file MUST have this exact structure:**
```json
{
  "title": "Full Blog Post Title (60-70 chars)",
  "excerpt": "2-3 sentence summary that hooks the reader and explains what they'll learn.",
  "author": {
    "name": "[Business Name from intake form]",
    "bio": "Our team at [Business Name] has over [X years] of experience providing [business type] services to [location] homeowners."
  },
  "publishedAt": "2024-11-12T10:00:00Z",
  "tags": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "image": "https://images.unsplash.com/photo-XXXXXX?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  "imageAlt": "Descriptive alt text for image",
  "featured": false,
  "content": "<article class='prose prose-lg max-w-none'><h2>First Section Heading</h2><p>Content here...</p><h2>Second Section</h2><p>More content...</p></article>",
  "seo": {
    "title": "SEO Title (50-60 chars) | Business Name",
    "description": "Meta description (150-160 chars) that includes target keyword and value prop",
    "keywords": ["primary keyword", "secondary keyword", "long tail keyword", "location keyword"]
  }
}
```

**Blog Content Guidelines:**

**🎯 FOLLOW "SEO CONTENT FORMATTING STANDARDS" ABOVE** - Word count: 1000-1500 words total

Additional blog-specific guidelines:
- Include 4-6 H2 sections (more sections than service/area pages)
- Target long-tail keywords and answer specific questions
- Address common misconceptions
- Provide actionable advice readers can implement
- Slightly more conversational than service pages (can use "I've seen" or "In my experience" sparingly, but still maintain expert voice)

**🚨 CRITICAL REMINDERS:**
- ✅ You MUST execute the Write tool 6-8 times (once per blog post)
- ✅ DO NOT just plan or describe the blogs - WRITE THEM
- ✅ Each blog post requires its own Write tool execution
- ✅ Verify you created the files before moving to next step
- ❌ Saying "I will create blogs" is NOT sufficient - you must DO it
- **⚠️ AUTHOR NAME: Use the actual business name from the intake form, NOT generic names like "HVAC Experts" or "Pool Care Experts"**

**Checklist before proceeding to Step 2.5:**
- [ ] Deleted old template blogs with Bash tool
- [ ] Created 1-2 category folders with Bash tool
- [ ] Wrote 1-2 category .config.json files with Write tool
- [ ] Wrote 6-8 blog post JSON files with Write tool (one Write execution per post)

### Step 2.5: Generate About Us Content
Create 3 **concise** paragraphs (from intake form details):
- Paragraph 1: Years of experience and specialization (MAX 200 characters / ~30-35 words)
- Paragraph 2: Quality and craftsmanship focus (MAX 250 characters / ~35-40 words)
- Paragraph 3: Customer satisfaction and standards (MAX 200 characters / ~30-35 words)

**IMPORTANT:** Keep paragraphs brief and impactful. Each paragraph should be 1-2 sentences maximum. This is a homepage section, not a detailed biography - avoid writing novels. Reference the base template'''s About Us section (site.config.json lines 338-342) for the ideal length and tone.

### Step 2.6: Generate Process Steps
Create 5 process steps for "Our Process" section:
1. Free Consultation
2. Estimation & Proposal
3. We Do the Work
4. Final Inspection
5. Payment & Completion

Each step needs a title and brief description.

### Step 2.7: Generate FAQ Items

**CRITICAL: FAQ Strategy - Lead with Value, Not Limitations**

Create 5-6 FAQ questions that follow this priority order:

**Priority 1 - Value & Convenience (Questions 1-2):**
- "Do you offer free estimates/consultations?"
- "How quickly can you schedule service?"
- "What areas do you serve?"
- "Do you offer financing options?"

**Priority 2 - Trust & Credibility (Questions 3-4):**
- "Are you licensed and insured?"
- "How long have you been in business?"
- "Do you offer warranties on your work?"

**Priority 3 - Service Details (Questions 5-6):**
- Industry-specific helpful questions that showcase expertise
- Maintenance tips or service frequency questions
- Product/service option questions

**AVOID Leading with Limitations:**
- ❌ DO NOT lead with "Do you offer 24/7/emergency service?" if the answer is no
- ❌ DO NOT ask "What sets you apart?" (too generic, hard to answer well)
- ❌ DO NOT ask about limitations or missing services upfront

**If You Must Address a Limitation:**
- Place it as the LAST FAQ (position 5-6)
- Frame the question positively
- Answer by emphasizing what you DO offer
- Example: Instead of "Do you offer emergency service?" → "What are your service hours?"
  Then answer: "We provide same-day service Monday-Saturday, with priority scheduling for urgent AC repairs during Arizona's summer heat."

---

## Phase 3: Configuration

### Step 3.1: Update site.config.json

**IMPORTANT: Generate SEO-Optimized H1**
Before updating the config, determine the best SEO H1 based on business type:

**H1 Generation Logic:**
1. Identify the primary service type from business type:
   - "HVAC" → "HVAC Services"
   - "Pool Service" → "Pool Services"
   - "Roofing" → "Roofing Services"
   - "Landscaping" → "Landscaping Services"
   - "Plumbing" → "Plumbing Services"
   - etc.

2. Combine with location: `{Service Type} in {City}, {State}`
   - Example: "HVAC Services in Mesa, AZ"
   - Example: "Pool Services in Phoenix, AZ"

3. Use title case for readability and SEO best practices

**Business Section:**
```json
{
  "business": {
    "name": "[from intake]",
    "seoH1": "[GENERATE: Based on business type, create SEO-optimized H1. Examples: 'HVAC Services in Mesa, AZ', 'Pool Services in Phoenix, AZ', 'Roofing Services in Scottsdale, AZ'. Use the pattern: '{Primary Service Type} in {City}, {State}']",
    "tagline": "[from intake OR generate if not provided]",
    "primaryLocation": "[city, state]",
    "heroDescription": "[generated]",
    "heroBackgroundImage": "[Unsplash URL - industry appropriate]",
    "reviewBadges": {
      "google": { "enabled": true, "rating": 5, "reviewCount": "X+", "url": "[from intake]" },
      "facebook": { "enabled": true, "rating": 5, "reviewCount": "X+", "url": "[from intake]" }
    },
    "trustBadges": [
      { "iconType": "location", "title": "100% LOCAL" },
      { "iconType": "time", "title": "X+ YEARS EXPERIENCE" },
      { "iconType": "star", "title": "HIGH QUALITY" }
    ]
  }
}
```

**Contact Section:**
```json
{
  "contact": {
    "phone": "[from intake]",
    "email": "[from intake]",
    "address": {
      "street": "[from intake]",
      "city": "[from intake]",
      "state": "[from intake]",
      "zip": "[from intake]"
    },
    "googleMapsEmbed": "[ALWAYS REPLACE with intake value - full embed URL]",
    "googleBusinessUrl": "[ALWAYS REPLACE with Google Business Profile URL from intake]",
    "googleReviewUrl": "[ALWAYS REPLACE with Google Review URL from intake]"
  }
}
```

**🚨 CRITICAL - GOOGLE URLs:**
- `googleBusinessUrl` = Google Business Profile URL (e.g., https://g.page/r/XXXXX)
- `googleReviewUrl` = Google Review URL (e.g., https://g.page/r/XXXXX/review)
- **THESE ARE DIFFERENT URLS!** The business profile URL does NOT have "/review" at the end
- ALWAYS include BOTH fields in the contact object
- The footer social icon links to `googleBusinessUrl` (business profile), NOT review URL

Always replace `googleMapsEmbed`, `googleBusinessUrl`, and `googleReviewUrl` with values from intake form, even if template has existing values.

**Services Section:**
Create slug from service name (lowercase, hyphens):
- "HVAC Repair" → "hvac-repair"
- "Pool Installation" → "pool-installation"

```json
{
  "services": {
    "sectionBadge": "WHAT WE ARE BEST AT",
    "sectionHeading": "OUR SERVICES",
    "items": [
      {
        "title": "[Service Name]",
        "slug": "[generated-slug]",
        "imageSrc": "[Unsplash URL - service specific]",
        "imageAlt": "[Service] services",
        "description": "[1-2 sentence overview]"
      }
    ],
    "details": {
      "[slug]": {
        "hero": {
          "title": "[GENERATED TITLE]",
          "subtitle": "[Service] IN [City]",
          "description": "[2-3 sentences]",
          "backgroundImage": "[Unsplash URL - service specific]"
        },
        "sections": [
          { "heading": "[Section Title]", "content": "[Generated content]" },
          { "heading": "[Section Title]", "content": "[Generated content]" },
          { "heading": "[Section Title]", "content": "[Generated content]" }
        ]
      }
    }
  }
}
```

**Service Areas Section:**
```json
{
  "serviceAreas": {
    "sectionBadge": "Where We Serve",
    "sectionHeading": "PROUDLY SERVING THESE AREAS",
    "ctaText": "Don't see your city listed? Give us a call! We may still be able to serve your area.",
    "cities": [
      { "name": "[City Name]", "slug": "[city-slug]" }
    ],
    "details": {
      "[city-slug]": {
        "hero": {
          "title": "[CITY] [PRIMARY SERVICE TYPE]",
          "subtitle": "[PRIMARY SERVICE TYPE] IN [CITY]",
          "backgroundImage": "[Unsplash URL - cityscape or industry appropriate]"
        },
        "sections": [
          { "heading": "[Generated]", "content": "[City-specific content]" },
          { "heading": "[Generated]", "content": "[City-specific content]" },
          { "heading": "[Generated]", "content": "[City-specific content]" }
        ]
      }
    }
  }
}
```

**Service Area Hero Pattern (SEO-Optimized):**
- **Subtitle (pill badge)**: "[PRIMARY SERVICE TYPE] IN [CITY]"
  - Examples: "POOL SERVICES IN PHOENIX", "HVAC SERVICES IN MESA", "ROOFING SERVICES IN SCOTTSDALE"
- **Title**: "[CITY] [PRIMARY SERVICE TYPE]" (all caps for consistency)
  - Examples: "PHOENIX POOL SERVICES", "MESA HVAC SERVICES", "SCOTTSDALE ROOFING SERVICES"

**Note:** Use the primary service type from the business (e.g., "Pool Services" for pool companies, "HVAC Services" for HVAC companies, etc.)

**Footer Section:**
```json
{
  "footer": {
    "companyDescription": "[Generated based on business]",
    "businessLinks": [
      { "label": "Home", "href": "/" },
      { "label": "Projects", "href": "/projects" },
      { "label": "Blog", "href": "/blog" },
      { "label": "Contact", "href": "/contact" },
      { "label": "Our Reviews", "href": "/reviews" },
      { "label": "Review Us", "href": "/review" }
    ],
    "legalLinks": [
      { "label": "Privacy", "href": "/privacy" },
      { "label": "Terms", "href": "/terms-of-service" }
    ],
    "hours": {
      "monday": "[from intake - Monday field]",
      "tuesday": "[from intake - Tuesday field]",
      "wednesday": "[from intake - Wednesday field]",
      "thursday": "[from intake - Thursday field]",
      "friday": "[from intake - Friday field]",
      "saturday": "[from intake - Saturday field]",
      "sunday": "[from intake - Sunday field]"
    },
    "copyrightText": "All rights reserved."
  }
}
```

**Branding Section (Brand Colors):**
The intake form collects usage-based colors. Apply them to config:

```json
{
  "branding": {
    "colors": {
      "primary": "[from intake: Primary Brand Color]",
      "primaryLight": "[lighten primary by 15%]",
      "primaryDark": "[darken primary by 15%]",
      "primaryHover": "[darken primary by 15%]",
      "backgroundBlue": "[from intake: Dark Section Background OR Navigation Background]",
      "backgroundBlueLight": "[lighten backgroundBlue by 10%]",
      "backgroundBlueDark": "[darken backgroundBlue by 10%]",
      "premium": "[use primary or generate complementary]",
      "premiumLight": "[lighten premium by 20%]",
      "premiumDark": "[darken premium by 20%]",
      "navBackground": "[from intake: Navigation Background OR primary]",
      "navBorder": "[use primary]",
      "badgeBg": "[from intake: Section Badge Color OR navBackground]",
      "badgeText": "#ffffff",
      "badgeBgInverted": "#ffffff",
      "badgeTextInverted": "[badgeBg value]"
    },
    "logo": {
      "horizontal": "/logos/horizontal-logo.png",
      "horizontalInverted": "/logos/horizontal-logo-inverted.png"
    }
  }
}
```

**Color Application Rules:**
1. **Primary Brand Color** (required) → `primary`, `navBorder`, and base for variations
2. **Navigation Background** (optional) → If not provided, use primary; applies to `navBackground` and `backgroundBlue`
3. **Section Badge Color** (optional) → If not provided, use `navBackground`; applies to `badgeBg` and `badgeTextInverted`
4. **Dark Section Background** (optional) → If not provided, use `navBackground`; applies to `backgroundBlue`
5. **Premium** → Can be same as primary or generate a complementary accent color
6. **Badge text colors** → White (`#ffffff`) on dark backgrounds, dark badge color on light backgrounds

**Color Generation Tips:**
- Lighten: Increase RGB values by 15-20%
- Darken: Decrease RGB values by 15-20%
- Always ensure sufficient contrast (WCAG AA minimum)
- Test that badge text is readable on both light and dark backgrounds

**About Us, Process, FAQ:**
Fill in based on generated content and intake form data.

**CTA Section - DO NOT MODIFY:**
```json
{
  "cta": {
    "heading": "READY TO TAKE THE NEXT STEP?",
    "subheading": "GET A FREE QUOTE TODAY!",
    "buttonText": "Get Free Quote",
    "backgroundImage": "[use appropriate Unsplash image]"
  }
}
```
**🚨 CRITICAL:** The buttonText MUST ALWAYS be "Get Free Quote" - NEVER change it to a phone number or call button. The button opens a quote modal, not a phone call.

**Social Section:**
```json
{
  "social": {
    "facebook": "[from intake]",
    "instagram": "[from intake]",
    "twitter": "[from intake]",
    "youtube": "[from intake]",
    "google": "[Google Business Profile URL - NOT the review URL - remove /review if present]",
    "yelp": "[from intake]"
  }
}
```

**🚨 CRITICAL - social.google MUST BE BUSINESS PROFILE URL:**
- The `social.google` field is used for the footer social icon
- This MUST be the Google Business Profile URL (WITHOUT "/review")
- If the intake form provides "https://g.page/r/XXXXX/review", remove the "/review" part
- Example: "https://g.page/r/CaDvitYkL0FbEAI/review" → "https://g.page/r/CaDvitYkL0FbEAI"
- NEVER use the review URL for social.google - footer icons link to profiles, not review pages

**Integrations Section:**
```json
{
  "integrations": {
    "ghl": {
      "quoteFormEmbedInline": "[GHL inline form code from intake]",
      "quoteFormEmbedPopup": "[optional]",
      "chatWidgetEmbed": "[GHL chat widget code from intake]"
    },
    "featurable": {
      "widgetId": "[Featurable ID from intake]"
    }
  }
}
```

### Step 3.2: Validate JSON
After updating config, validate:
```bash
node -e "require('./site.config.json')"
```

If there are syntax errors, fix them before proceeding.

---

## Phase 4: Assets

### IMAGE HANDLING STRATEGY - READ THIS FIRST

**CRITICAL: Understand the different types of images and their sources:**

1. **Hero Background Images** (business.heroBackgroundImage)
   - DO NOT scrape from client website
   - DO NOT use /projects/ images
   - Use appropriate stock images (Unsplash) if needed

2. **Service Images** (services.items[].imageSrc, services.details[].hero.backgroundImage)
   - DO NOT scrape from client website
   - DO NOT use /projects/ images
   - Use appropriate stock images (Unsplash) if needed

3. **About Us Image** (aboutUs.image.src)
   - DO NOT scrape from client website
   - DO NOT use /projects/ images
   - Use appropriate stock images (Unsplash) if needed

4. **Service Area Hero Images** (serviceAreas.details[].hero.backgroundImage)
   - DO NOT scrape from client website
   - DO NOT use /projects/ images
   - Use appropriate stock images (Unsplash) if needed

5. **Blog Post Images** (blog posts image field)
   - Use relevant Unsplash URLs for each blog topic
   - DO NOT scrape from client website
   - DO NOT use /projects/ images

6. **Project Gallery Images** (projects.gallery[])
   - Source: ONLY from client-intake/projects/ folder (if provided)
   - Copy to /public/projects/ and use local paths (/projects/project-1.jpg)
   - COMPLETELY REPLACE template gallery array
   - These are ONLY for the portfolio/gallery section
   - DO NOT use these images anywhere else on the site

7. **Logo Images** (branding.logo.horizontal, branding.logo.horizontalInverted)
   - Source: ONLY from client-intake/logo/ folder
   - Copy to /public/logos/
   - Always replace template logos with client logos

8. **Favicon Images** (all /public/favicon/ files)
   - Source: Generated from client-intake/logo/square.png
   - Use Python + Pillow to resize square logo to all favicon formats (Windows-compatible)
   - Replaces: favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, android-chrome icons
   - DO NOT leave default boilerplate favicons
   - If Pillow unavailable, inform user to install or use online favicon generator

**GOLDEN RULE: DO NOT scrape images from client websites. DO NOT cross-contaminate image types (e.g., using project gallery images as hero backgrounds). Each image type has its specific source and purpose.**

### Step 4.1: Delete Existing Blog Content
```bash
rm -rf public/blog-content/categories/*
```

### Step 4.2: Create Blog Structure
For each category (1-2 categories):

1. Create category folder:
```bash
mkdir -p public/blog-content/categories/[category-slug]
```

2. Create `.config.json`:
```json
{
  "name": "[Category Name]",
  "description": "[Generated description]",
  "seo": {
    "title": "[Category] Tips & Guides | [Business Name] Blog",
    "description": "[Generated SEO description]",
    "keywords": ["[keyword1]", "[keyword2]", ...]
  }
}
```

3. Create blog post JSON files (6-8 posts):
```json
{
  "title": "[Post Title]",
  "excerpt": "[2-3 sentence summary]",
  "author": {
    "name": "[Business Type] Experts",
    "bio": "[Generated bio]"
  },
  "publishedAt": "[ISO date]",
  "tags": ["tag1", "tag2", ...],
  "image": "[Unsplash URL]",
  "imageAlt": "[Description]",
  "featured": false,
  "content": "<article class='prose prose-lg max-w-none'>[Full HTML content]</article>",
  "seo": {
    "title": "[SEO title]",
    "description": "[SEO description]",
    "keywords": ["keyword1", "keyword2", ...]
  }
}
```

### Step 4.3: Copy Logo Files (if provided)
```bash
cp client-intake/logo/horizontal.png public/logos/horizontal-logo.png
cp client-intake/logo/horizontal-white.png public/logos/horizontal-logo-inverted.png
cp client-intake/logo/square.png public/logos/square-logo.png
```

### Step 4.3.5: Generate Favicon Files from Square Logo

**CRITICAL: If square.png logo exists, generate all favicon formats from it using Python + Pillow.**

**Why Python/Pillow instead of ImageMagick:**
- ImageMagick's `convert` command conflicts with Windows' built-in `convert.exe` (file system conversion tool)
- Pillow is more reliable across platforms and typically already installed
- If Pillow isn't available, the script will fail gracefully with a clear error message

**Use this Python script via Bash tool:**

```bash
python << 'PYTHON_EOF'
import os
import sys

# Check if square logo exists
square_logo_path = "client-intake/logo/square.png"
if not os.path.exists(square_logo_path):
    print("⚠ No square logo found at client-intake/logo/square.png - skipping favicon generation")
    sys.exit(0)

# Try to import Pillow
try:
    from PIL import Image
except ImportError:
    print("⚠ Pillow not installed. Install with: pip install Pillow")
    print("⚠ Skipping favicon generation - user can manually convert square.png to favicons")
    sys.exit(0)

# Create favicon directory if it doesn't exist
os.makedirs("public/favicon", exist_ok=True)

# Load the square logo
img = Image.open(square_logo_path)

# Convert to RGBA if not already
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Generate all favicon sizes
favicon_sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "apple-touch-icon.png": (180, 180),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512)
}

for filename, size in favicon_sizes.items():
    resized = img.resize(size, Image.Resampling.LANCZOS)
    resized.save(f"public/favicon/{filename}", "PNG")
    print(f"✓ Generated {filename}")

# Generate multi-size ICO file (16x16, 32x32, 48x48)
ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_images = [img.resize(size, Image.Resampling.LANCZOS) for size in ico_sizes]
ico_images[0].save("public/favicon/favicon.ico", format="ICO", sizes=ico_sizes)
print("✓ Generated favicon.ico")

print("✓ All favicons generated successfully from square logo")
PYTHON_EOF
```

**Files that should be generated:**
- `/public/favicon/favicon.ico` (16x16, 32x32, 48x48 multi-size)
- `/public/favicon/favicon-16x16.png`
- `/public/favicon/favicon-32x32.png`
- `/public/favicon/apple-touch-icon.png` (180x180)
- `/public/favicon/android-chrome-192x192.png`
- `/public/favicon/android-chrome-512x512.png`

**If Pillow is not installed:**
The script will output a warning and skip favicon generation. Inform the user that they can either:
1. Install Pillow: `pip install Pillow` and re-run the intake processor
2. Use an online favicon generator with their square logo
3. Manually resize the square.png to the required sizes

**Note:** The site.webmanifest file doesn't need to be regenerated - it's generic.

### Step 4.4: Copy Project Images (if provided)

**CRITICAL: This step MUST completely replace the existing projects gallery, not append to it.**

**IMPORTANT: Project images are ONLY for the gallery/portfolio section - NOT for hero backgrounds, service images, or any other decorative images on the site.**

1. **Check if project images exist:**
```bash
ls client-intake/projects/
```

2. **If images exist, copy them:**
```bash
mkdir -p public/projects
cp client-intake/projects/* public/projects/
```

3. **COMPLETELY REPLACE the projects.gallery array in site.config.json:**

```json
{
  "projects": {
    "gallery": [
      {
        "id": "1",
        "title": "[Descriptive title from image filename or generate]",
        "imageSrc": "/projects/project-1.jpg",
        "alt": "[Descriptive alt text]",
        "category": "installation",
        "featured": true
      }
      // ... for each image in client-intake/projects/
    ]
  }
}
```

**IMPORTANT:**
- Delete ALL existing items from the gallery array first
- Create new items only from the client's provided images
- Use `/projects/[filename]` for imageSrc (local path, not Unsplash)
- Number images sequentially (project-1.jpg, project-2.jpg, etc.)
- Set first 3-4 images as `"featured": true`, rest as `false`
- **DO NOT use /projects/ images anywhere else in the site (hero, services, about, etc.)**

---

## Phase 5: Testing

### Step 5.1: Compile Check
```bash
npm run build
```

Watch for errors. Common issues:
- JSON syntax errors in config
- Missing required fields
- Invalid component props

### Step 5.2: Test Key Routes
Test that pages load (if dev server is running):
```bash
curl -s http://localhost:3000/ | head -100
curl -s http://localhost:3000/services/[first-service-slug] | head -100
curl -s http://localhost:3000/service-areas/[first-city-slug] | head -100
curl -s http://localhost:3000/blog | head -100
```

### Step 5.3: Verification Checklist
Confirm:
- [ ] Homepage loads with correct business name
- [ ] All services appear in navigation
- [ ] All service pages load with generated content
- [ ] All city pages load with local content
- [ ] Blog shows new posts (not old pool posts)
- [ ] Contact form/chat widget embed works
- [ ] Footer shows correct business info and hours

---

## Final Steps

### Report to User
Summarize what was created:
- X services configured
- X service area pages created
- X blog posts generated in X categories
- Images copied (if applicable)
- Integrations configured

### Cleanup Instructions
Tell user:
```bash
# Archive the intake folder
mv client-intake client-intake-archive-[business-name]

# Or delete if no longer needed
rm -rf client-intake
```

---

## Troubleshooting

**If content generation fails:**
- Check WebSearch results - may need different search terms
- Verify internet connection for research phase
- Try generating one section at a time

**If config validation fails:**
- Check for unescaped quotes in content
- Verify all required fields are present
- Look for trailing commas in JSON

**If pages don't compile:**
- Check console for specific error messages
- Verify all slugs match between config and pages
- Ensure no special characters in slugs

---

## Notes

- Always use the `elite-content-generator` skill for content quality
- Research is REQUIRED - don't skip Phase 2.1
- Keep business claims educational, not specific to this client
- Test thoroughly before marking complete
