# Client Duplication Guide

This guide walks through the complete workflow for duplicating this template for a new client.

## Goal

Set up a complete, production-ready website for a new client in approximately 20 minutes with minimal manual work.

## Overview

The duplication process involves:
1. Gathering client information
2. Updating `site.config.json`
3. Replacing branding assets
4. Adding project images
5. Testing and deploying

## Prerequisites

- Node.js and npm installed
- Access to client intake form responses
- Client logo files (horizontal and square versions)
- Client project photos

## Step-by-Step Workflow

### Phase 1: Project Setup (2 minutes)

1. **Clone the template**
   ```bash
   git clone <template-repo> client-name-website
   cd client-name-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Initialize new git repository**
   ```bash
   rm -rf .git
   git init
   git add .
   git commit -m "Initial commit from template"
   ```

### Phase 2: Configuration Update (10-15 minutes)

#### Business Information

Update the `business` section in `site.config.json`:

```json
{
  "business": {
    "name": "Client Business Name",
    "tagline": "Their tagline or slogan",
    "description": "Brief business description",
    "legalName": "Legal Business Name LLC",
    "yearsInBusiness": "15",
    "licenseNumber": "ROC123456",
    "serviceRadius": "50 miles"
  }
}
```

#### Contact Information

Update the `contact` section:

```json
{
  "contact": {
    "phone": "(555) 123-4567",
    "email": "info@clientbusiness.com",
    "address": {
      "street": "123 Main St",
      "city": "Phoenix",
      "state": "AZ",
      "zip": "85001"
    },
    "hours": {
      "weekday": "Monday-Friday: 7am-7pm",
      "weekend": "Saturday: 8am-5pm, Sunday: Closed"
    }
  }
}
```

#### Services Configuration

Update each service in `services.details`:

```json
{
  "services": {
    "sectionBadge": "Our Services",
    "sectionHeading": "Professional Service Title",
    "items": [
      {
        "title": "Service 1",
        "description": "Service description",
        "icon": "Wrench",
        "href": "/services/service-1"
      }
    ],
    "details": {
      "service-1": {
        "hero": {
          "title": "Service 1 Hero Title",
          "subtitle": "Subtitle",
          "description": "Detailed description",
          "backgroundImage": "/images/services/service-1-hero.jpg"
        },
        "sections": [
          {
            "heading": "Section Heading",
            "content": "<p>HTML content here</p>"
          }
        ]
      }
    }
  }
}
```

**Repeat for all services the client offers.**

#### Service Areas Configuration

Update `serviceAreas.details` for each city:

```json
{
  "serviceAreas": {
    "details": {
      "phoenix": {
        "hero": {
          "title": "Service Name in Phoenix, AZ",
          "subtitle": "Tagline",
          "backgroundImage": "/images/cities/phoenix-hero.jpg"
        },
        "sections": [
          {
            "heading": "Why Choose Us in Phoenix",
            "content": "<p>City-specific content</p>"
          }
        ]
      }
    }
  }
}
```

#### Projects/Gallery

Update `projects.gallery`:

```json
{
  "projects": {
    "gallery": [
      {
        "id": "1",
        "title": "Project Name",
        "imageSrc": "/images/projects/project-1.jpg",
        "alt": "Description of project",
        "category": "Category Name",
        "featured": true
      }
    ]
  }
}
```

#### About Us, Process, FAQs, etc.

Update remaining sections with client-specific content.

#### Branding

Update `branding` section:

```json
{
  "branding": {
    "logo": {
      "light": "/logos/horizontal-logo.png",
      "dark": "/logos/horizontal-logo-inverted.png",
      "square": "/logos/square-logo.png"
    },
    "colors": {
      "primary": "#0EA5E9",
      "primaryDark": "#0284C7",
      "backgroundBlue": "#1E40AF",
      "backgroundBlueDark": "#1E3A8A"
    }
  }
}
```

#### Integrations

Update GHL codes:

```json
{
  "integrations": {
    "ghl": {
      "quoteFormEmbedInline": "<script src='...'></script>",
      "quoteFormEmbedPopup": "<script src='...'></script>",
      "chatWidgetEmbed": "<script src='...'></script>",
      "reviewsEmbed": "<iframe src='...'></iframe>"
    }
  }
}
```

### Phase 3: Assets Replacement (3 minutes)

1. **Logo Files**
   ```bash
   # Replace these files in public/logos/
   - horizontal-logo.png          # Main logo
   - horizontal-logo-inverted.png # White version
   - square-logo.png              # Square/icon version
   ```

2. **Favicon**
   ```bash
   # Replace files in public/favicon/
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png
   - android-chrome-192x192.png
   - android-chrome-512x512.png
   ```

3. **Project Images**
   ```bash
   # Add to public/images/projects/
   project-1.jpg
   project-2.jpg
   ...
   ```

4. **Service/City Hero Images**
   ```bash
   # Add to public/images/services/
   installation-hero.jpg
   renovation-hero.jpg
   ...

   # Add to public/images/cities/
   phoenix-hero.jpg
   mesa-hero.jpg
   ...
   ```

### Phase 4: Environment Variables (1 minute)

Create `.env.local`:

```env
# Featurable (Google Reviews)
NEXT_PUBLIC_FEATURABLE_WIDGET_ID=client_widget_id

# Analytics (if applicable)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Phase 5: Testing (2 minutes)

1. **Start dev server**
   ```bash
   npm run dev
   ```

2. **Test pages**
   - Homepage: `http://localhost:3000`
   - Each service page: `http://localhost:3000/services/[slug]`
   - Each city page: `http://localhost:3000/service-areas/[city]`
   - Projects: `http://localhost:3000/projects`
   - Contact: `http://localhost:3000/contact`

3. **Check for errors**
   - Console for JavaScript errors
   - Terminal for build errors
   - Visual QA of all pages

4. **Test forms**
   - GHL form submissions
   - Chat widget appears
   - Lead form modal

### Phase 6: Deployment (2 minutes)

#### Option A: Vercel (Recommended)

1. Push to GitHub:
   ```bash
   git remote add origin <repo-url>
   git push -u origin main
   ```

2. Deploy to Vercel:
   - Visit vercel.com
   - Import GitHub repository
   - Add environment variables
   - Deploy

#### Option B: Other Platforms

1. Build production:
   ```bash
   npm run build
   ```

2. Test production build:
   ```bash
   npm start
   ```

3. Deploy to your hosting platform

## Validation Checklist

Before marking a client site as complete:

### Content
- [ ] Business name and contact info correct
- [ ] All service pages have content
- [ ] All city pages have content
- [ ] Projects gallery has images
- [ ] About us section updated
- [ ] FAQs are relevant to client
- [ ] CTAs have correct phone numbers

### Branding
- [ ] Logo displays correctly (light & dark)
- [ ] Favicon loads
- [ ] Colors match brand (if custom)
- [ ] All placeholder images replaced

### Functionality
- [ ] All internal links work
- [ ] Contact forms submit correctly
- [ ] GHL chat widget loads
- [ ] Phone numbers are clickable
- [ ] Email links work
- [ ] Navigation menu works on mobile

### SEO
- [ ] Page titles are unique
- [ ] Meta descriptions are unique
- [ ] Images have alt text
- [ ] Schema.org markup present

### Performance
- [ ] Images are optimized
- [ ] No console errors
- [ ] Pages load quickly
- [ ] Mobile responsive

## Common Issues

### Missing Config Error
**Error**: "Service configuration not found"
**Solution**: Check that the slug in the page file matches the key in `site.config.json`

### Images Not Loading
**Error**: 404 on image requests
**Solution**: Ensure images are in `public/` directory (not `src/`)

### Build Fails
**Error**: TypeScript errors
**Solution**: Validate JSON syntax in `site.config.json`

### GHL Widget Not Showing
**Error**: Widget embed not visible
**Solution**: Check that embed code is complete `<script>...</script>`

## Time-Saving Tips

1. **Use Find & Replace**
   - Open `site.config.json` in VS Code
   - Find: "Placeholder Business"
   - Replace: "Client Business Name"

2. **Batch Image Processing**
   - Optimize all images before adding
   - Use consistent naming: `service-name-hero.jpg`
   - Recommended size: 1920x1080 for heroes

3. **Template Responses**
   - Save common FAQ answers
   - Reuse process steps for similar industries
   - Keep service descriptions modular

4. **Validation Scripts**
   ```bash
   # Check JSON syntax
   node -e "JSON.parse(require('fs').readFileSync('site.config.json'))"
   ```

## Next Steps After Deployment

1. Set up domain DNS
2. Configure SSL certificate
3. Add to Google Search Console
4. Set up Google Analytics
5. Test contact forms with real submissions
6. Perform full QA on production URL
7. Train client on admin panel (if applicable)

## Automation Opportunities

Consider creating Claude Skills for:
- `setup-client` - Full guided setup
- `validate-config` - Validate JSON structure
- `optimize-images` - Batch image optimization
- `deploy-client` - Automated deployment

---

**Estimated Total Time**: 15-25 minutes
**Hands-on Time**: 10-15 minutes
**Automated/Build Time**: 5-10 minutes
