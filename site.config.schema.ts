/**
 * Site Configuration Schema
 *
 * This defines the structure and validation rules for the site configuration.
 * Each field includes:
 * - type: Data type
 * - maxLength: Character limit (to prevent layout breaks)
 * - required: Whether the field is mandatory
 * - example: Sample value
 * - notes: Layout considerations
 */

export interface SiteConfigSchema {
  // ============================
  // BUSINESS INFORMATION
  // ============================
  business: {
    /** Company name - appears in header, footer, SEO */
    name: {
      type: string;
      maxLength: 50;
      required: true;
      example: "All-Star Pools";
      notes: "Longer names may wrap on mobile header";
    };

    /** Business tagline for hero section */
    tagline: {
      type: string;
      maxLength: 80;
      required: true;
      example: "POOL SERVICES IN";
      notes: "Displays above location in hero";
    };

    /** Primary service location */
    primaryLocation: {
      type: string;
      maxLength: 40;
      required: true;
      example: "PHOENIX, AZ";
      notes: "Displays in hero below tagline";
    };

    /** Hero description text */
    heroDescription: {
      type: string;
      maxLength: 200;
      required: true;
      example: "Offering top-notch installation, renovation, maintenance, and design services exclusively in your area for discerning homeowners and businesses.";
      notes: "Displays below hero heading. 2-3 lines max on desktop";
    };

    /** Hero background image URL */
    heroBackgroundImage: {
      type: string;
      required: true;
      example: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c";
      notes: "Recommend 2070x1380px or larger, landscape orientation";
    };
  };

  // ============================
  // CONTACT INFORMATION
  // ============================
  contact: {
    /** Primary phone number */
    phone: {
      type: string;
      required: true;
      example: "(555) 123-4567";
      notes: "Format as (XXX) XXX-XXXX for consistency";
    };

    /** Business email */
    email: {
      type: string;
      required: true;
      example: "contact@allstarpools.com";
    };

    /** Street address */
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      required: false;
      example: {
        street: "123 Main St",
        city: "Phoenix",
        state: "AZ",
        zip: "85001"
      };
    };

    /** Google Maps embed URL for service areas section */
    googleMapsEmbed: {
      type: string;
      required: true;
      example: "https://www.google.com/maps/embed?pb=!1m18!1m12!...";
      notes: "Get from Google Maps > Share > Embed a map";
    };

    /** Google Business Profile URL (for map/profile links) */
    googleBusinessUrl: {
      type: string;
      required: false;
      example: "https://share.google.com/09fdUUKLALdogYaNJ";
      notes: "Main Google Business Profile link - used in footer and social icons";
    };

    /** Google review link URL (for direct review submission) */
    googleReviewUrl: {
      type: string;
      required: false;
      example: "https://www.google.com/search?q=your+business+name";
    };
  };

  // ============================
  // SERVICES
  // ============================
  services: {
    /** Section badge text */
    sectionBadge: {
      type: string;
      maxLength: 30;
      required: true;
      example: "WHAT WE ARE BEST AT";
      notes: "All caps, appears above section heading";
    };

    /** Section heading */
    sectionHeading: {
      type: string;
      maxLength: 40;
      required: true;
      example: "OUR SERVICES";
      notes: "All caps, large heading";
    };

    /** List of services (max 8 for grid layout) */
    items: Array<{
      /** Service name */
      title: {
        type: string;
        maxLength: 30;
        required: true;
        example: "Pool Installation";
        notes: "Displays on service card, keep concise";
      };

      /** URL slug for service detail page */
      slug: {
        type: string;
        required: true;
        example: "installation";
        notes: "Lowercase, no spaces. Used in URL: /services/{slug}";
      };

      /** Service card image URL */
      imageSrc: {
        type: string;
        required: true;
        example: "https://images.unsplash.com/photo-...";
        notes: "Recommend 800x800px, square aspect ratio";
      };

      /** Image alt text for SEO */
      imageAlt: {
        type: string;
        maxLength: 100;
        required: true;
        example: "Professional pool installation services";
      };

      /** Service description for detail page */
      description: {
        type: string;
        maxLength: 600;
        required: true;
        example: "From custom in-ground pools to above-ground installations...";
        notes: "Displays on /services/{slug} page";
      };
    }>;
    maxItems: 8;
    notes: "More than 8 services may require layout adjustment";
  };

  // ============================
  // SERVICE AREAS (CITIES)
  // ============================
  serviceAreas: {
    /** Section badge text */
    sectionBadge: {
      type: string;
      maxLength: 30;
      required: true;
      example: "Where We Serve";
    };

    /** Section heading */
    sectionHeading: {
      type: string;
      maxLength: 50;
      required: true;
      example: "PROUDLY SERVING THESE AREAS";
    };

    /** Call-to-action text for unlisted areas */
    ctaText: {
      type: string;
      maxLength: 150;
      required: true;
      example: "Don't see your city listed? Give us a call! We may still be able to serve your area.";
    };

    /** List of cities (max 12 for grid layout) */
    cities: Array<{
      /** City name */
      name: {
        type: string;
        maxLength: 30;
        required: true;
        example: "Phoenix";
      };

      /** URL slug for city page */
      slug: {
        type: string;
        required: true;
        example: "phoenix";
        notes: "Lowercase, no spaces. Used in URL: /service-areas/{slug}";
      };

      /** City description for detail page */
      description: {
        type: string;
        maxLength: 400;
        required: false;
        example: "Serving Phoenix and surrounding areas with professional pool services...";
      };
    }>;
    maxItems: 12;
    notes: "More than 12 cities may require multi-column layout";
  };

  // ============================
  // BRAND COLORS
  // ============================
  branding: {
    /** Primary brand color (hex code) */
    primaryColor: {
      type: string;
      required: true;
      example: "#3b82f6";
      notes: "Used for buttons, links, accents";
    };

    /** Secondary/background blue color */
    backgroundBlue: {
      type: string;
      required: true;
      example: "#1e3a5f";
      notes: "Used for footer, service areas section";
    };

    /** Logo file path */
    logo: {
      horizontal: {
        type: string;
        required: true;
        example: "/logos/horizontal-logo.png";
        notes: "Used in footer, light backgrounds. Recommend 600x60px";
      };
      horizontalInverted: {
        type: string;
        required: true;
        example: "/logos/horizontal-logo-inverted.png";
        notes: "Used in header. White/light version. Recommend 600x60px";
      };
    };
  };

  // ============================
  // SOCIAL MEDIA
  // ============================
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    linkedin?: string;
    notes: "All optional. Displays in footer if provided";
  };

  // ============================
  // BUSINESS HOURS (OPTIONAL)
  // ============================
  hours: {
    monday?: { opens: string; closes: string };
    tuesday?: { opens: string; closes: string };
    wednesday?: { opens: string; closes: string };
    thursday?: { opens: string; closes: string };
    friday?: { opens: string; closes: string };
    saturday?: { opens: string; closes: string };
    sunday?: { opens: string; closes: string };
    notes: "Format as 24hr time: '09:00', '17:00'";
  };
}

/**
 * CHARACTER LIMIT RATIONALE
 *
 * These limits are designed to prevent layout breaks at common breakpoints:
 *
 * Mobile (375px):
 * - Company name: 50 chars fits in header without wrapping
 * - Service title: 30 chars fits on card in single line
 * - Hero tagline: 80 chars fits in 2 lines max
 *
 * Tablet (768px):
 * - Section headings: 40-50 chars fit centered
 * - Descriptions: 200 chars display in 3-4 lines
 *
 * Desktop (1920px):
 * - Service descriptions: 600 chars fit in detail page
 * - City descriptions: 400 chars fit in 2-column layout
 *
 * All limits tested with typical fonts (Montserrat, Inter) at standard sizes.
 */
