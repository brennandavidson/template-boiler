# Client Intake Processor

Generate a complete website from client intake form.

## Your Role

You are filling out a pre-built template. The structure is fixed. You only:
1. Populate site.config.json with client data
2. Write blog posts and SEO content
3. Copy client assets (logos, project photos)
4. Apply brand colors

Do not modify any .tsx files or change the website structure.

## Execution Requirements

Complete every step in order. Do not skip steps. Do not ask permission to continue.

## Prerequisites

Required files:
- client-intake/form.md (completed)
- client-intake/logo/ (horizontal.png, horizontal-white.png, square.png)

Optional files:
- client-intake/projects/ (process all images if present)

## Process Steps

1. Read intake form
2. Research competitors (5-8 WebSearch + WebFetch calls)
3. Write all website copy (hero, about us, process, FAQ, etc.)
4. Generate SEO content using elite-content-generator skill (service pages, city pages, blog posts)
5. Generate SEO metadata files (.seo-config.json for all pages)
6. Build site.config.json with all data
7. Copy assets (logos, project photos, generate favicons)
8. Test build

---

## Step 1: Read Intake Form

Read client-intake/form.md and extract:
- Business name, type, tagline, contact
- Services (3-6)
- Service areas (3-8 cities)
- Years in business, certifications
- Social media links
- GHL quote form embed code
- GHL chat widget embed code
- Featurable widget ID
- Google Business Profile URL
- Google Review URL

If required fields are missing, stop and ask user to complete the form.

Check for logo files (horizontal.png, horizontal-white.png, square.png) in client-intake/logo/. Warn if missing but continue.

---

## Step 2: Research Competitors

Find 3-5 competitor websites in the same industry and area. Use 5-8 total calls:

**2-3 WebSearch calls:**
- "best [business type] companies in [city]"
- "[business type] [city]"
- "top rated [business type] [state]"

Find real contractor websites, not directories (Yelp/HomeAdvisor).

**3-5 WebFetch calls:**
For each competitor site, WebFetch with prompt: "Analyze this [business type] website. What services do they highlight? What pain points do they address? What makes their messaging effective? What local factors do they mention? Extract key talking points and value propositions."

Document from research:
- Common services and how they're described
- Pain points and solutions
- Local/regional factors (climate, regulations)
- Value propositions and pricing approaches
- Technical terminology used

Use this research to inform all content generation.

---
## Step 3: Write Website Copy

Write copy for all homepage sections:
- Hero section (headline, subheadline, CTA text)
- About Us section
- Services overview
- Process/How It Works
- FAQ (5-8 common questions)
- Trust badges (exactly 3, use supported iconTypes: location, time, clock, star, shield, certificate, checkmark)

Use competitor research to inform messaging. Write in professional, educational voice.

---

## Step 4: Generate SEO Content

Use the elite-content-generator skill for content quality. Write service page and city page content for site.config.json (Step 5), and blog posts as JSON files (below).

### Blog Post Generation

Create 6-8 blog posts across 1-2 categories. Blog posts are stored as JSON files in `public/blog-content/categories/[category-slug]/`.

1. Choose 1-2 category slugs (lowercase-hyphenated): maintenance-tips, repair-guides, hvac-tips, pool-care, etc.

2. For each category, create directory and config:
```bash
mkdir -p public/blog-content/categories/[category-slug]
```

Create `.config.json` in each category folder:
```json
{
  "name": "Maintenance Tips",
  "description": "Expert tips for maintaining your HVAC system"
}
```

3. Generate 3-4 blog posts per category. Each post is a separate JSON file named `[post-slug].json`:

```json
{
  "title": "[SEO-optimized title]",
  "excerpt": "[2-3 sentence summary]",
  "author": {
    "name": "[Business Name]",
    "bio": "[Brief company description]"
  },
  "publishedAt": "2024-03-15T10:00:00Z",
  "tags": ["[keyword1]", "[keyword2]", "[keyword3]"],
  "image": "[Unsplash URL]",
  "imageAlt": "[Image description]",
  "featured": false,
  "content": "<article class='prose prose-lg max-w-none'>[HTML content from elite-content-generator skill]</article>",
  "seo": {
    "title": "[60-char SEO title]",
    "description": "[155-char meta description]",
    "keywords": ["[keyword1]", "[keyword2]", "[keyword3]"]
  }
}
```

Use the elite-content-generator skill for all blog content HTML. Wrap final HTML in `<article class='prose prose-lg max-w-none'>`.

---

## Step 5: Generate SEO Metadata Files

Create SEO metadata files for all service and city pages in `src/seo/pages/`.

### Service Page SEO Files

For each service, create `src/seo/pages/services/[service-slug].seo-config.json`:

```json
{
  "title": "[Service] in [City], [State] | [Business Name]",
  "description": "[145-155 char description of service targeting local keywords]",
  "openGraph": {
    "title": "[Service] in [City], [State] | [Business Name]",
    "description": "[Same as description above]",
    "type": "website"
  }
}
```

Example: `src/seo/pages/services/hvac-repair.seo-config.json`
```json
{
  "title": "HVAC Repair in Mesa, AZ | Ash Cooling & Heating",
  "description": "Fast, reliable HVAC repair in Mesa and the East Valley. Licensed technicians, same-day service, 12+ years experience. Call for emergency AC repair today.",
  "openGraph": {
    "title": "HVAC Repair in Mesa, AZ | Ash Cooling & Heating",
    "description": "Fast, reliable HVAC repair in Mesa and the East Valley. Licensed technicians, same-day service, 12+ years experience. Call for emergency AC repair today.",
    "type": "website"
  }
}
```

### Service Area SEO Files

For each city, create `src/seo/pages/service-areas/[city-slug].seo-config.json`:

```json
{
  "title": "[Service Type] in [City], [State] | [Business Name]",
  "description": "[145-155 char description highlighting local service availability]",
  "openGraph": {
    "title": "[Service Type] in [City], [State] | [Business Name]",
    "description": "[Same as description above]",
    "type": "website"
  }
}
```

Create one SEO file for EVERY service and EVERY city from the intake form.

---
## Step 6: Build site.config.json

Update site.config.json with all intake data and generated content.

### Image URL Rules

IMPORTANT: Leave ALL image fields empty or use placeholder values. Never populate with actual URLs.

Set all image fields to empty string "" or omit them entirely:
- heroBackgroundImage: ""
- reviewsSectionBackgroundImage: ""
- service imageSrc: ""
- service detail backgroundImage: ""
- service area backgroundImage: ""
- CTA backgroundImage: ""

### SEO H1 Pattern
Generate seoH1 using: `{Service Type} in {City}, {State}`
- HVAC → "HVAC Services in Mesa, AZ"
- Pool Service → "Pool Services in Phoenix, AZ"

### Business Section
```json
{
  "business": {
    "name": "[from intake]",
    "seoH1": "[generated using pattern above]",
    "tagline": "[from intake or generate]",
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

Trust badges: exactly 3, use only supported iconTypes (location, time, clock, star, shield, certificate, checkmark).

### Contact Section
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
    "googleMapsEmbed": "[from intake]",
    "googleBusinessUrl": "[Google Business Profile URL from intake]",
    "googleReviewUrl": "[Google Review URL from intake - has /review at end]"
  }
}
```

Note: googleBusinessUrl and googleReviewUrl are different URLs.

### Services Section
Create slug from service name (lowercase, hyphens): "HVAC Repair" → "hvac-repair"

```json
{
  "services": {
    "sectionBadge": "WHAT WE ARE BEST AT",
    "sectionHeading": "OUR SERVICES",
    "items": [
      {
        "title": "[Service Name]",
        "slug": "[generated-slug]",
        "imageSrc": "[Unsplash URL]",
        "imageAlt": "[Service] services",
        "description": "[1-2 sentences]"
      }
    ],
    "details": {
      "[slug]": {
        "hero": {
          "title": "[Badge text]",
          "subtitle": "[Service] IN [City]",
          "description": "[2-3 sentences]",
          "backgroundImage": "[Unsplash URL]"
        },
        "sections": [
          { "heading": "[Generated]", "content": "[HTML from Step 4]" }
        ]
      }
    }
  }
}
```

### Service Areas Section
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
          "backgroundImage": "[Unsplash URL]"
        },
        "sections": [
          { "heading": "[Generated]", "content": "[HTML from Step 4]" }
        ]
      }
    }
  }
}
```

### Branding Section
```json
{
  "branding": {
    "colors": {
      "primary": "[from intake: Primary Brand Color]",
      "primaryLight": "[lighten primary 15%]",
      "primaryDark": "[darken primary 15%]",
      "primaryHover": "[darken primary 15%]",
      "backgroundBlue": "[from intake: Dark Section Background OR Navigation Background]",
      "backgroundBlueLight": "[lighten 10%]",
      "backgroundBlueDark": "[darken 10%]",
      "premium": "[use primary or complementary]",
      "premiumLight": "[lighten 20%]",
      "premiumDark": "[darken 20%]",
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

### Footer Section
```json
{
  "footer": {
    "companyDescription": "[Generated]",
    "businessLinks": [
      { "label": "Home", "href": "/" },
      { "label": "Projects", "href": "/projects" },
      { "label": "Blog", "href": "/blog" },
      { "label": "Contact", "href": "/contact" },
      { "label": "Our Reviews", "href": "/reviews" },
      { "label": "Review Us", "href": "[Use contact.googleReviewUrl]" }
    ],
    "legalLinks": [
      { "label": "Privacy", "href": "/privacy" },
      { "label": "Terms", "href": "/terms-of-service" }
    ],
    "hours": {
      "monday": "[from intake]",
      "tuesday": "[from intake]",
      "wednesday": "[from intake]",
      "thursday": "[from intake]",
      "friday": "[from intake]",
      "saturday": "[from intake]",
      "sunday": "[from intake]"
    },
    "copyrightText": "All rights reserved."
  }
}
```

### CTA Section
```json
{
  "cta": {
    "heading": "READY TO TAKE THE NEXT STEP?",
    "subheading": "GET A FREE QUOTE TODAY!",
    "buttonText": "Get Free Quote",
    "backgroundImage": "[Unsplash URL]"
  }
}
```

ButtonText must always be "Get Free Quote" (opens quote modal).

### Social Section
```json
{
  "social": {
    "facebook": "[from intake]",
    "instagram": "[from intake]",
    "twitter": "[from intake]",
    "youtube": "[from intake]",
    "google": "[Google Business Profile URL - remove /review if present]",
    "yelp": "[from intake]"
  }
}
```

The social.google field must be the business profile URL without /review.

### Integrations Section
```json
{
  "integrations": {
    "ghl": {
      "quoteFormEmbedInline": "[from intake]",
      "quoteFormEmbedPopup": "[optional]",
      "chatWidgetEmbed": "[from intake]"
    },
    "featurable": {
      "widgetId": "[from intake]"
    }
  }
}
```

### About, Process, FAQ
Fill in based on generated content from Step 3 and intake form data.

### Validate JSON
After updating config, validate:
```bash
node -e "require('./site.config.json')"
```

Fix any syntax errors before proceeding.

---
## Step 7: Copy Assets

Copy logos, generate favicons, and process project photos.

### Copy Logos
```bash
cp client-intake/logo/horizontal.png public/logos/horizontal-logo.png
cp client-intake/logo/horizontal-white.png public/logos/horizontal-logo-inverted.png  
cp client-intake/logo/square.png public/logos/square-logo.png
```

### Generate Favicons
Use Python + Pillow to generate all favicon sizes from square.png:

```bash
python << 'PYTHON_EOF'
import os, sys
try:
    from PIL import Image
except ImportError:
    print("⚠ Pillow not installed. Install with: pip install Pillow")
    sys.exit(0)

square_logo_path = "client-intake/logo/square.png"
if not os.path.exists(square_logo_path):
    print("⚠ No square logo found")
    sys.exit(0)

os.makedirs("public/favicon", exist_ok=True)
img = Image.open(square_logo_path).convert('RGBA')

favicon_sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "apple-touch-icon.png": (180, 180),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512)
}

for filename, size in favicon_sizes.items():
    img.resize(size, Image.Resampling.LANCZOS).save(f"public/favicon/{filename}", "PNG")

ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_images = [img.resize(size, Image.Resampling.LANCZOS) for size in ico_sizes]
ico_images[0].save("public/favicon/favicon.ico", format="ICO", sizes=ico_sizes)
print("✓ Favicons generated")
PYTHON_EOF
```

If Pillow is not installed, inform user to install it or use online favicon generator.

### Process Project Photos

First, check if project photos exist:
```bash
ls client-intake/projects/
```

If ANY images exist:

1. Create the public/projects directory:
```bash
mkdir -p public/projects
```

2. Copy ALL images from client-intake/projects/ to public/projects/:
```bash
cp client-intake/projects/*.jpg public/projects/
cp client-intake/projects/*.jpeg public/projects/ 2>/dev/null || true
cp client-intake/projects/*.png public/projects/ 2>/dev/null || true
```

3. Update site.config.json projects.gallery[] with ALL copied images:
```json
{
  "projects": {
    "gallery": [
      { "src": "/projects/project-1.jpg", "alt": "HVAC installation project" },
      { "src": "/projects/project-2.jpg", "alt": "HVAC repair work" },
      { "src": "/projects/project-3.jpg", "alt": "Commercial HVAC system" }
    ]
  }
}
```

IMPORTANT: Completely replace the template gallery array. Do not append. Include one entry for every image file copied.

---
## Step 8: Test Build

Run build and verify key pages:

```bash
npm run build
```

Check for errors. Common issues: JSON syntax, missing required fields, invalid props.

If dev server is running, test key routes:
```bash
curl -s http://localhost:3000/ | head -100
curl -s http://localhost:3000/services/[first-service-slug] | head -100
curl -s http://localhost:3000/service-areas/[first-city-slug] | head -100
curl -s http://localhost:3000/blog | head -100
```

Verify:
- Homepage loads with correct business name
- All services appear in navigation
- Service and city pages load with generated content
- Blog shows new posts
- Contact form/chat widget embeds work
- Footer shows correct business info

Summarize to user what was created (X services, X city pages, X blog posts).

## Notes

- Always use the `elite-content-generator` skill for content quality
- Research is REQUIRED - don't skip Phase 2.1
- Keep business claims educational, not specific to this client
- Test thoroughly before marking complete
