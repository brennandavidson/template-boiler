# Context Recap - Template Fixes Session

## What We're Building
A Next.js template for home service businesses (HVAC, pool services, roofing, etc.) with:
- Automated client intake processing
- Dynamic content generation
- Full color customization
- Config-driven architecture

## Major Fixes Completed

### 1. Dynamic Routing (COMPLETED ✅)
**Problem:** Services and service-areas had hardcoded pages (installation, phoenix, etc.)
**Solution:** Converted to dynamic routing
- Created `/services/[slug]/page.tsx` - works for ANY service in config
- Created `/service-areas/[slug]/page.tsx` - works for ANY city in config
- Deleted all hardcoded service/city page folders

### 2. Blog Generation System (COMPLETED ✅)
**Setup:** Blogs stored in `public/blog-content/categories/` as JSON files
**Process:** During client intake, Claude:
- Deletes old blog posts
- Generates 6-8 new industry-specific blog posts
- Creates proper category structure

### 3. Intake Form Updates (COMPLETED ✅)
**Added Fields:**
- Individual business hours (Monday-Sunday) instead of generic Weekday/Weekend
- Google Maps Embed URL
- Brand color fields (Primary, Nav Background, Badge Color, Dark Section BG)
- Integration codes (GHL forms, chat widget, Featurable ID)
- Google Review URL for footer

### 4. Skills Created (COMPLETED ✅)
**elite-content-generator.md** - Guidelines for high-quality, non-AI content:
- Research-first approach (WebSearch required)
- Educational expert voice (not business-specific claims)
- Avoids AI clichés ("unlock", "seamless", etc.)
- Local/regional focus
- Specific details without making unverifiable claims

**client-intake-processor.md** - Complete workflow for processing intake forms:
- 5 phases: Validation → Content Generation → Configuration → Assets → Testing
- Documents how to handle all intake fields
- Color generation rules
- Blog post creation process

### 5. Color System Overhaul (COMPLETED ✅)

#### Config Structure Enhanced:
Added to `site.config.json` branding.colors:
```json
{
  "primary": "#3b82f6",
  "primaryHover": "#2563EB",
  "navBackground": "#1e3a5f",
  "navBorder": "#3b82f6",
  "badgeBg": "#1e3a5f",
  "badgeText": "#ffffff",
  "badgeBgInverted": "#ffffff",
  "badgeTextInverted": "#1e3a5f",
  "backgroundBlue": "#1e3a5f"
}
```

#### Color Utility Created: `src/lib/colors.ts`
Functions:
- `getBrandingColors()` - Get all colors
- `getNavColors()` - Nav sticky colors (RGB converted)
- `getBadgeColors()` - Badge colors for light backgrounds
- `getBadgeColorsInverted()` - Badge colors for dark backgrounds
- `getBrandOverlay(opacity)` - Brand-colored overlay for background images
- `getBrandGradientOverlay(direction)` - Gradient brand overlay

#### Components Updated (8 files):
- ✅ Header.tsx - Uses `getNavColors()` for sticky nav
- ✅ AboutUs.tsx, FAQ.tsx, ServicesGrid.tsx, ServicesGridPage.tsx - Use `getBadgeColors()`
- ✅ OurProcess.tsx, ServiceAreas.tsx, Reviews.tsx - Use `getBadgeColorsInverted()`

### 6. Overlay System (IN PROGRESS 🔄)

#### Problem Identified:
Background image overlays still using hardcoded colors:
- ServiceDetailHero: `from-black/70 via-black/60` (should use brand)
- FinalCTA: `from-black/80 via-black/40` (should use brand)
- ServiceAreas: ✅ FIXED - removed `from-blue-50 to-blue-100` hardcode
- HeroWithForm: Image at `opacity-40` (should have brand overlay)

#### Solution Created:
**Overlay utility functions** in `src/lib/colors.ts`:
- `getBrandOverlay('light'|'medium'|'heavy')` - Solid brand overlay with opacity
- `getBrandGradientOverlay('vertical'|'horizontal')` - Gradient brand overlay

#### Remaining Work:
Need to update these components to use brand overlay functions:
1. ServiceDetailHero.tsx (line 39)
2. FinalCTA.tsx (line 17)
3. CityPageContent.tsx
4. Gallery sections
5. Any other background images with black overlays

**Pattern to apply:**
```tsx
import { getBrandGradientOverlay } from '@/lib/colors';
const overlayStyle = getBrandGradientOverlay('horizontal');
<div className="absolute inset-0" style={overlayStyle} />
```

## File Locations

### Key Config Files:
- `site.config.json` - All business data, services, cities, colors
- `client-intake-template/form-template.md` - Template for collecting client data
- `client-intake-template/README.md` - Documentation for intake process

### Key Utility Files:
- `src/lib/get-site-config.ts` - Functions to access config sections
- `src/lib/colors.ts` - Color utility functions

### Skills:
- `.claude/skills/elite-content-generator.md`
- `.claude/skills/client-intake-processor.md`

### Dynamic Routes:
- `src/app/(pages)/services/[slug]/page.tsx`
- `src/app/(pages)/service-areas/[slug]/page.tsx`

## Current Issue Being Fixed

**Background image overlays not using brand colors consistently**

Working on port 3000 (base codebase) at:
`C:\Users\Brennan Davidson\valiance-media-nextjs-starter`

User noticed different overlay treatments between home hero (HeroWithForm.tsx) and service hero (ServiceDetailHero.tsx).

### Differences:
- **HeroWithForm**: Section has `bg-gradient-to-r from-gray-900 to-gray-800`, image at `opacity-40`
- **ServiceDetailHero**: Image full opacity, separate overlay div with `from-black/70 via-black/60 to-black/70`

Both should consistently use brand colors from config.

## Next Steps

1. Continue updating remaining overlay components to use `getBrandOverlay()` or `getBrandGradientOverlay()`
2. Ensure ALL background images have consistent brand-colored overlays
3. Test color changes compile correctly
4. Ready for next test build

## Important Notes

- User will handle git commits (don't commit automatically)
- Building industry template library (Pool Services done, HVAC next)
- Template approach: Manual image curation per industry, dynamic content generation
- Images from Freepik (not Pexels/Unsplash - better home service content)
