# Valiance Media Next.js Starter Template

A white-label, config-driven Next.js template designed for rapid deployment of service-based business websites. Built specifically for contractors, home services, and local businesses.

## Overview

This template enables you to duplicate professional business websites in ~20 minutes by simply updating a configuration file. No code changes required for new clients.

### Key Features

- **Config-Driven Content**: All business content in `site.config.json`
- **Service Detail Pages**: Unlimited scalable service pages
- **Service Area Pages**: City/location-specific landing pages
- **Projects Gallery**: Showcase work with config-driven images
- **Blog System**: JSON-based CMS for blog posts
- **Admin Panel**: Built-in content management interface
- **SEO Optimized**: Page-specific SEO configuration
- **GHL Integration**: GoHighLevel forms, chat, and reviews
- **Responsive Design**: Mobile-first, fully responsive
- **Type Safe**: Full TypeScript support

## Technology Stack

- **Framework**: Next.js 15.4.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Open Sans, Montserrat)
- **Deployment**: Vercel-ready

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Environment Variables

Create a `.env.local` file with:

```env
# Google Reviews (Optional - via Featurable)
NEXT_PUBLIC_FEATURABLE_WIDGET_ID=your_widget_id

# GoHighLevel Integration (Optional)
NEXT_PUBLIC_GHL_CHAT_WIDGET_CODE=your_chat_code
```

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── (pages)/           # Public-facing pages
│   │   │   ├── services/      # Service detail pages
│   │   │   ├── service-areas/ # City/location pages
│   │   │   ├── projects/      # Gallery page
│   │   │   └── ...
│   │   ├── admin/             # Admin panel
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   ├── layout/            # Layout components
│   │   ├── admin/             # Admin components
│   │   └── ui/                # Reusable UI components
│   ├── lib/                   # Utility functions
│   │   └── get-site-config.ts # Config loader
│   ├── types/                 # TypeScript types
│   │   └── site-config.ts     # Config interfaces
│   └── styles/                # Global styles
├── public/
│   ├── blog-content/          # Blog posts (JSON)
│   ├── seo-config/            # SEO metadata (JSON)
│   └── images/                # Static images
├── site.config.json           # Main configuration file
└── docs/                      # Documentation
```

## Configuration System

All site content is managed through three main systems:

### 1. Site Configuration (`site.config.json`)
Primary configuration for:
- Business information
- Contact details
- Services (with detail pages)
- Service areas (with city pages)
- Projects/gallery
- About us content
- Process steps
- FAQs
- CTAs
- Footer
- Branding
- Social media
- Integrations (GHL)

### 2. Blog System (`public/blog-content/`)
JSON-based blog posts with:
- Categories
- Posts
- Markdown-like content support

### 3. SEO Configuration (`public/seo-config/`)
Page-specific SEO metadata:
- Meta titles and descriptions
- Open Graph tags
- Twitter cards
- Structured data (Schema.org)

## Core Workflows

### For New Client Deployment
See [docs/DUPLICATION.md](docs/DUPLICATION.md) for complete workflow.

**Quick Summary:**
1. Update `site.config.json` with client information
2. Replace logo and brand images
3. Add client project images
4. Deploy

### Adding Services/Cities
See [docs/ADDING-PAGES.md](docs/ADDING-PAGES.md) for detailed instructions.

### Understanding Architecture
See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for system design details.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub/GitLab/Bitbucket
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the production bundle:
```bash
npm run build
```

Then deploy the `.next` folder and `public` directory to your hosting platform.

## Common Issues

### Next.js Cache Corruption

If you encounter build errors:
```bash
rm -rf .next
npm run dev
```

### Port Already in Use

The dev server will automatically find an available port (3001, 3002, etc.)

## Browser Compatibility

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a white-label template. Modifications should maintain the config-driven architecture to preserve easy duplication.

## License

Proprietary - Valiance Media

## Support

For questions or issues, refer to the documentation in the `docs/` directory or contact the development team.

---

**Next Steps:**
- Review [DUPLICATION.md](docs/DUPLICATION.md) to set up your first client
- Read [ARCHITECTURE.md](docs/ARCHITECTURE.md) to understand the system
- Check [ADDING-PAGES.md](docs/ADDING-PAGES.md) to scale services/cities
