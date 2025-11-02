// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('services/masonry-design');

import { HeaderSetter } from '@/components/layout/HeaderSetter';
import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceContent from '@/components/sections/services/ServiceContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import FinalCTA from '@/components/sections/cta/FinalCTA';

export default function MasonryDesignPage() {
  const contentSections = [
    {
      heading: "What is Masonry Design?",
      content: "Masonry design encompasses the art and craft of creating stunning hardscape features around your pool and outdoor living spaces using stone, brick, pavers, and concrete. Our expert masons design and build custom patios, walkways, retaining walls, outdoor kitchens, fire pits, and decorative accents that complement your pool and enhance your entire backyard. From selecting the perfect materials to match your home's architecture to executing precise installation techniques, we create durable, beautiful structures that withstand the elements while adding elegance and functionality to your outdoor space. Whether you envision a rustic stone waterfall, a modern paver deck, or an elaborate outdoor entertainment area, our masonry design services turn your dreams into reality with attention to detail and superior craftsmanship."
    },
    {
      heading: "Why is Masonry Design Important?",
      content: "Quality masonry design is essential for creating a cohesive, luxurious outdoor environment that maximizes both aesthetics and functionality. Well-designed hardscaping provides stable, slip-resistant surfaces around your pool, defines different areas of your yard, and creates natural flow between indoor and outdoor spaces. Professionally installed masonry work increases your property value significantly and creates outdoor living areas that expand your usable space for entertaining and relaxation. The right materials and design can also solve practical problems like drainage issues, erosion control, and privacy concerns. Unlike temporary solutions, quality masonry is built to last for decades with minimal maintenance, making it a smart long-term investment. Furthermore, thoughtfully designed masonry elements transform ordinary backyards into resort-style retreats that reflect your personal style and enhance your lifestyle."
    },
    {
      heading: "When Should You Consider Masonry Design?",
      content: "Consider masonry design services when planning a new pool installation or renovating your existing pool area. If your current pool deck is cracked, outdated, or doesn't provide adequate space for lounging and entertaining, masonry redesign can transform the entire area. It's ideal when you want to add features like an outdoor kitchen, built-in seating, fire features, or decorative walls that create distinct zones in your backyard. If you're dealing with sloped terrain, retaining walls and terraced patios can maximize usable space while adding dramatic visual appeal. Masonry design is also perfect for homeowners looking to increase curb appeal and property value, or those who want to create a unified aesthetic that ties together pool, landscaping, and home architecture. Whether starting from scratch or enhancing existing outdoor spaces, professional masonry design elevates your property from ordinary to extraordinary."
    }
  ];

  return (
    <>
      {/* Set header context for hero image */}
      <HeaderSetter hasHeroImage={true} />

      {/* Hero Section */}
      <ServiceDetailHero
        title="MASONRY DESIGN EXPERTS"
        subtitle="CUSTOM MASONRY & HARDSCAPING"
        description="Enhance your outdoor living space with expertly crafted masonry work. From elegant pool decks to custom fire features and outdoor kitchens, we create stunning hardscapes that complement your pool perfectly."
        backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Service Content */}
      <ServiceContent sections={contentSections} />

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
