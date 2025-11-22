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
5. Build site.config.json with all data
6. Copy assets (logos, project photos, generate favicons)
7. Test build

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

Use the elite-content-generator skill to create all SEO content.

The elite-content-generator skill will guide you through creating:
- Service pages (one for each service from intake form)
- Service area pages (one for each city from intake form)
- Blog posts (6-8 posts across 1-2 categories)

All formatting requirements, content structure, and quality standards are defined in the elite-content-generator skill.

---
## Step 5: Build site.config.json

Update site.config.json with all intake data and generated content.

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
## Step 6: Copy Assets

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
Check for project images and copy to public folder:

```bash
ls client-intake/projects/
```

If images exist, copy all to `/public/projects/` and update `projects.gallery[]` in site.config.json with local paths:
```json
{
  "projects": {
    "gallery": [
      { "src": "/projects/project-1.jpg", "alt": "Project description" }
    ]
  }
}
```

Completely replace the template gallery array. Do not append.

---
## Step 7: Test Build

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
