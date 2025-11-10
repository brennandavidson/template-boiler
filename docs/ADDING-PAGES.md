# Adding Services and Cities Guide

This guide explains how to scale the template by adding new service detail pages and city/service area pages.

## Overview

The template currently has:
- **4 service detail pages** (installation, renovation, maintenance, masonry-design)
- **6 city detail pages** (Phoenix, Mesa, Scottsdale, Tempe, Chandler, Gilbert)

You can add unlimited additional pages using the same pattern.

## Adding a New Service

### Example: Adding "Deck Building" Service

#### Step 1: Add to site.config.json (5 minutes)

1. Open `site.config.json`

2. Add to the `services.items` array:

```json
{
  "services": {
    "items": [
      // ... existing services ...
      {
        "title": "Deck Building",
        "description": "Custom deck construction and design",
        "icon": "Home",
        "href": "/services/deck-building"
      }
    ]
  }
}
```

3. Add detailed page content to `services.details`:

```json
{
  "services": {
    "details": {
      // ... existing services ...
      "deck-building": {
        "hero": {
          "title": "Professional Deck Building Services",
          "subtitle": "Transform Your Outdoor Living Space",
          "description": "Expert deck construction with premium materials and craftsmanship. From design to completion, we build beautiful, durable decks that enhance your home.",
          "backgroundImage": "/images/services/deck-building-hero.jpg"
        },
        "sections": [
          {
            "heading": "Why Choose Our Deck Building Services",
            "content": "<p>With over 15 years of experience in deck construction, we understand what it takes to build a deck that lasts. Our team uses only premium materials and proven construction techniques to ensure your deck withstands the Arizona climate.</p>"
          },
          {
            "heading": "Our Deck Building Process",
            "content": "<p>We begin with a detailed consultation to understand your vision and requirements. Our designers will create custom plans that maximize your outdoor space while staying within budget. Every deck is built to code and backed by our warranty.</p>"
          },
          {
            "heading": "Materials We Use",
            "content": "<ul><li>Composite decking for low maintenance</li><li>Treated lumber for durability</li><li>Cedar for natural beauty</li><li>Custom railings and stairs</li></ul>"
          }
        ]
      }
    }
  }
}
```

**Content Tips**:
- **Hero Title**: 4-8 words, descriptive
- **Subtitle**: 3-6 words, benefit-focused
- **Description**: 2-3 sentences, value proposition
- **Sections**: 2-5 sections, use HTML for formatting

#### Step 2: Create Page File (2 minutes)

1. Create the directory:
```bash
mkdir -p src/app/\(pages\)/services/deck-building
```

2. Create `page.tsx`:
```bash
touch src/app/\(pages\)/services/deck-building/page.tsx
```

3. Copy content from existing service page:

```typescript
// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('services/deck-building');

import { HeaderSetter } from '@/components/layout/HeaderSetter';
import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceContent from '@/components/sections/services/ServiceContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { getSiteConfigServices } from '@/lib/get-site-config';

export default function DeckBuildingPage() {
  const services = getSiteConfigServices();
  const serviceData = services.details?.['deck-building'];  // ê Update slug here

  // Fallback if config is not available
  if (!serviceData) {
    return <div>Service configuration not found</div>;
  }

  return (
    <>
      {/* Set header context for hero image */}
      <HeaderSetter hasHeroImage={true} />

      {/* Hero Section */}
      <ServiceDetailHero
        title={serviceData.hero.title}
        subtitle={serviceData.hero.subtitle}
        description={serviceData.hero.description}
        backgroundImage={serviceData.hero.backgroundImage}
      />

      {/* Service Content */}
      <ServiceContent sections={serviceData.sections} />

      {/* Reviews Section */}
      <Reviews />

      {/* Our Process */}
      <OurProcess />

      {/* Service Areas */}
      <ServiceAreas />

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
```

**Key Point**: Only change is the slug: `services.details?.['deck-building']`

For slugs without hyphens, you can use: `services.details?.deckbuilding`

#### Step 3: Add Hero Image (1 minute)

Add image to `public/images/services/deck-building-hero.jpg`

**Recommended specs**:
- Size: 1920x1080px minimum
- Format: JPG (optimized)
- File size: Under 500KB

#### Step 4: Create SEO Config (Optional, 2 minutes)

Create `public/seo-config/services/deck-building.json`:

```json
{
  "title": "Deck Building Services | Your Business Name",
  "description": "Professional deck building and construction services. Custom designs, quality materials, expert installation. Serving Phoenix and surrounding areas.",
  "openGraph": {
    "title": "Expert Deck Building Services",
    "description": "Transform your outdoor space with a custom-built deck",
    "image": "/images/services/deck-building-hero.jpg"
  }
}
```

#### Step 5: Test (1 minute)

```bash
npm run dev
```

Visit: `http://localhost:3000/services/deck-building`

**Verify**:
- [ ] Page loads without errors
- [ ] Hero section displays correctly
- [ ] Content sections render
- [ ] Navigation includes new service
- [ ] Images load properly

---

## Adding a New City

### Example: Adding "Glendale" Service Area

#### Step 1: Add to site.config.json (5 minutes)

1. Add to `serviceAreas.cities` array:

```json
{
  "serviceAreas": {
    "cities": [
      // ... existing cities ...
      {
        "name": "Glendale",
        "href": "/service-areas/glendale"
      }
    ]
  }
}
```

2. Add detailed page content to `serviceAreas.details`:

```json
{
  "serviceAreas": {
    "details": {
      // ... existing cities ...
      "glendale": {
        "hero": {
          "title": "Pool Services in Glendale, AZ",
          "subtitle": "Your Trusted Local Pool Experts",
          "backgroundImage": "/images/cities/glendale-hero.jpg"
        },
        "sections": [
          {
            "heading": "Pool Services in Glendale",
            "content": "<p>Serving the Glendale community for over 10 years, we're your local experts for all pool services. From new installations to maintenance and repairs, we're committed to keeping Glendale pools in perfect condition.</p>"
          },
          {
            "heading": "Why Choose Us in Glendale",
            "content": "<p>As a locally-owned business, we understand Glendale's unique needs. Our team lives and works in your community, providing fast response times and personalized service you can trust.</p><ul><li>Same-day service available</li><li>Licensed and insured</li><li>100% satisfaction guarantee</li><li>Competitive pricing</li></ul>"
          },
          {
            "heading": "Areas We Serve in Glendale",
            "content": "<p>We service all Glendale neighborhoods including Arrowhead Ranch, Westgate, and surrounding areas. No job is too big or small for our experienced team.</p>"
          }
        ]
      }
    }
  }
}
```

#### Step 2: Create Page File (2 minutes)

1. Create directory:
```bash
mkdir -p src/app/\(pages\)/service-areas/glendale
```

2. Create `page.tsx`:

```typescript
// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/glendale');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';
import { getSiteConfigServiceAreas } from '@/lib/get-site-config';

export default function GlendalePage() {
  const serviceAreas = getSiteConfigServiceAreas();
  const cityData = serviceAreas.details?.glendale;  // ê Update city slug here

  // Fallback if config is not available
  if (!cityData) {
    return <div>City configuration not found</div>;
  }

  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Glendale"  // ê Update city name here
        heroTitle={cityData.hero.title}
        heroSubtitle={cityData.hero.subtitle}
        backgroundImage={cityData.hero.backgroundImage}
        sections={cityData.sections}
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList />
      <FinalCTA />
    </>
  );
}
```

**Changes needed**:
1. Update slug in `serviceAreas.details?.glendale`
2. Update `cityName="Glendale"` prop

#### Step 3: Add Hero Image (1 minute)

Add `public/images/cities/glendale-hero.jpg`

#### Step 4: Create SEO Config (Optional, 2 minutes)

Create `public/seo-config/service-areas/glendale.json`:

```json
{
  "title": "Pool Services in Glendale, AZ | Your Business Name",
  "description": "Professional pool services in Glendale, Arizona. Installation, maintenance, repairs, and more. Licensed, insured, and locally trusted.",
  "openGraph": {
    "title": "Glendale Pool Services",
    "description": "Your trusted local pool experts in Glendale, AZ",
    "image": "/images/cities/glendale-hero.jpg"
  }
}
```

#### Step 5: Test (1 minute)

Visit: `http://localhost:3000/service-areas/glendale`

---

## Bulk Adding Multiple Pages

### Adding 5 Services at Once

1. **Update config** - Add all 5 to `site.config.json`

2. **Create page files** - Use script:

```bash
#!/bin/bash
services=("decks" "patios" "fencing" "landscaping" "irrigation")

for service in "${services[@]}"; do
  mkdir -p "src/app/(pages)/services/$service"
  # Copy template and update slug
  cp "src/app/(pages)/services/installation/page.tsx" "src/app/(pages)/services/$service/page.tsx"
  # Use sed or manual find-replace to update slug
done
```

3. **Manually update slugs** in each file

4. **Add images** to `public/images/services/`

### Adding 10 Cities at Once

Same pattern - update config, create files, add images.

---

## Maintenance Best Practices

### Naming Conventions

**Slugs**:
- Use kebab-case: `deck-building` not `deckBuilding`
- Match everywhere: config key, page directory, metadata

**Files**:
- Hero images: `{slug}-hero.jpg`
- Keep consistent across services and cities

### Content Guidelines

**Hero Sections**:
- Title: 40-60 characters
- Subtitle: 20-40 characters
- Description: 100-160 characters

**Content Sections**:
- 2-5 sections per page
- Use HTML for formatting
- Include lists where appropriate
- Keep paragraphs under 150 words

**SEO**:
- Title: Include service + location + brand
- Description: 120-155 characters
- Unique for every page

### Version Control

Commit after each addition:

```bash
git add .
git commit -m "Add deck building service page"
```

Track config changes separately from code:

```bash
git add site.config.json
git commit -m "Update services configuration"
```

---

## Troubleshooting

### Page Shows "Configuration Not Found"

**Cause**: Slug mismatch
**Fix**: Ensure slug in page file matches config key exactly

```typescript
// In page.tsx
const serviceData = services.details?.['deck-building'];

// In site.config.json
"deck-building": { ... }  // Must match exactly
```

### TypeScript Errors

**Cause**: Config structure doesn't match types
**Fix**: Check `src/types/site-config.ts` for correct structure

### Build Fails

**Cause**: JSON syntax error
**Fix**: Validate JSON:

```bash
node -e "JSON.parse(require('fs').readFileSync('site.config.json'))"
```

### Images Don't Load

**Cause**: Wrong path or missing file
**Fix**:
- Check file exists in `public/images/`
- Verify path in config starts with `/`
- Check filename matches exactly (case-sensitive)

---

## Automation Ideas

### Future CLI Commands

```bash
# Add new service
npm run add:service deck-building "Deck Building"

# Add new city
npm run add:city glendale "Glendale"

# Validate all configs
npm run validate:config

# Generate all page files from config
npm run generate:pages
```

### Claude Skills

Consider creating skills for:
- `add-service {slug} {title}` - Scaffolds everything
- `add-city {slug} {name}` - Scaffolds city page
- `validate-pages` - Checks all pages load

---

## Summary

**To add a service**:
1. Update `site.config.json` (5 min)
2. Create page file (2 min)
3. Add hero image (1 min)
4. Create SEO config (2 min)
5. Test (1 min)

**Total**: ~10 minutes per service

**To add a city**:
Same process, ~10 minutes per city

**Scalability**: Unlimited services and cities using this pattern

---

**Pro Tip**: Create a template page file with `[SLUG]` placeholder, then use find-replace to quickly scaffold new pages.
