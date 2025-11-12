# Client Intake Processor

This skill guides you through processing a client intake form to generate a complete, production-ready website for a home service business.

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
- **Google Review URL**

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

### Step 2.1: Research Phase
Before generating ANY content:

1. **Research the industry**
   ```
   Use WebSearch to research:
   - "[business type] common problems"
   - "[business type] maintenance tips"
   - "[business type] cost factors"
   - "[primary location] [business type] challenges"
   ```

2. **Understand local market**
   ```
   Search for local considerations:
   - "[city] climate and weather patterns"
   - "[city] [business type] regulations"
   - "[city] HOA requirements" (if applicable)
   ```

3. **Document findings** for use in content generation

### Step 2.2: Generate Service Page Content
For EACH service listed in the intake form:

1. Create 3-4 content sections:
   - What is [Service]?
   - Why [Service] is Important / When You Need It
   - How [Service] Works / What to Expect
   - Cost Factors / Decision Considerations (optional)

2. Each section should be 200-400 words

3. Apply elite-content-generator guidelines:
   - Educational expert voice
   - Industry-standard information (not business-specific claims)
   - Local/regional considerations when relevant
   - Natural, non-AI language
   - Specific details and examples

4. Generate hero content:
   - Title (uppercase, bold)
   - Subtitle (service + location)
   - Description (2-3 sentences about the service generally)

### Step 2.3: Generate Service Area (City) Page Content
For EACH city listed in the intake form:

1. Create 3 content sections with local focus:
   - "[City]'s Premier [Business Type] Provider"
   - Complete [Service Type] Services for [City] Residents/Homes
   - Why [City] Homeowners/Residents Choose [Business Type] Services

2. Each section should be 200-400 words

3. Include city-specific elements:
   - Local climate challenges
   - Neighborhood references (general, not too specific)
   - Regional regulations or requirements
   - Seasonal considerations for that area

4. Generate hero content:
   - Title: "[SERVICE TYPE] IN [CITY]"
   - Subtitle: descriptive tagline
   - Background image URL (use appropriate Unsplash search)

### Step 2.4: Generate Blog Posts

1. **Determine blog categories** (1-2 categories)
   - Based on business type
   - Example: "Pool Maintenance" or "HVAC Tips"

2. **Generate 6-8 blog posts** covering:
   - Service-specific how-to guides (2-3 posts)
   - Common problems and solutions (2-3 posts)
   - Maintenance tips and best practices (1-2 posts)
   - Local/seasonal considerations (1-2 posts)

3. **Each blog post needs:**
   - Title (clear, specific, not clickbait)
   - Excerpt (2-3 sentences)
   - Author info (generic: "Service Type Experts" or "Business Type Professionals")
   - Published date (current date)
   - Tags (5-7 relevant keywords)
   - Featured image URL (Unsplash search for relevant image)
   - Full content (800-1500 words in HTML format)
   - SEO metadata (title, description, keywords)

4. **Blog content guidelines:**
   - More conversational than service pages
   - Educational and actionable
   - Can use "I've seen" or "In my experience" sparingly
   - Target long-tail keywords and questions
   - Address common misconceptions

### Step 2.5: Generate About Us Content
Create 3 paragraphs (from intake form details):
- Paragraph 1: Years of experience and specialization
- Paragraph 2: Quality and craftsmanship focus
- Paragraph 3: Customer satisfaction and standards

Keep it professional and factual based on provided information.

### Step 2.6: Generate Process Steps
Create 5 process steps for "Our Process" section:
1. Free Consultation
2. Estimation & Proposal
3. We Do the Work
4. Final Inspection
5. Payment & Completion

Each step needs a title and brief description.

### Step 2.7: Generate FAQ Items
Create 3-5 FAQ questions and answers:
- "Can you provide references from past clients?"
- "What sets you apart from other [business type]s?"
- "Is there a fee for a consultation or estimate?"
- Additional questions based on industry/services

---

## Phase 3: Configuration

### Step 3.1: Update site.config.json

**Business Section:**
```json
{
  "business": {
    "name": "[from intake]",
    "tagline": "[from intake]",
    "primaryLocation": "[city, state]",
    "heroDescription": "[generated]",
    "heroBackgroundImage": "[Unsplash URL]",
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
    "googleMapsEmbed": "[from intake - full embed URL]",
    "googleReviewUrl": "[from intake]"
  }
}
```

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
        "imageSrc": "[Unsplash URL for this service]",
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
          "backgroundImage": "[Unsplash URL]"
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
          "title": "[BUSINESS TYPE] IN [CITY]",
          "subtitle": "[Generated subtitle]",
          "backgroundImage": "[Unsplash cityscape or generic service image]"
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
If a primary brand color is provided in the intake form, generate a full color scheme:

1. **Use the provided primary color** as the base
2. **Generate variations** for light/dark shades
3. **Apply to config:**

```json
{
  "branding": {
    "colors": {
      "primary": "[from intake]",
      "primaryLight": "[lighten primary by 15%]",
      "primaryDark": "[darken primary by 15%]",
      "backgroundBlue": "[keep as #1e3a5f or use primary if appropriate]",
      "backgroundBlueLight": "#253f66",
      "backgroundBlueDark": "#172e4a",
      "premium": "[use primary or complementary color]",
      "premiumLight": "[lighten premium by 20%]",
      "premiumDark": "[darken premium by 20%]"
    },
    "logo": {
      "horizontal": "/logos/horizontal-logo.png",
      "horizontalInverted": "/logos/horizontal-logo-inverted.png"
    }
  }
}
```

**Color Generation Rules:**
- If primary color is warm (red, orange, yellow): Keep blue backgrounds
- If primary color is cool (blue, green, purple): Consider using primary for backgrounds
- Premium color can be the same as primary or a complementary accent
- Always ensure sufficient contrast for readability

**About Us, Process, FAQ, CTA:**
Fill in based on generated content and intake form data.

**Social Section:**
```json
{
  "social": {
    "facebook": "[from intake]",
    "instagram": "[from intake]",
    "twitter": "[from intake]",
    "youtube": "[from intake]",
    "google": "[from intake]",
    "yelp": "[from intake]"
  }
}
```

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

### Step 4.4: Copy Project Images (if provided)
```bash
cp client-intake/projects/* public/projects/
```

Then update the projects gallery in config to reference these images.

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
