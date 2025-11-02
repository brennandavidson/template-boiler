// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas');

// Import sections
import ServiceAreasHero from '@/components/sections/service-areas/ServiceAreasHero';
import ServiceAreasContent from '@/components/sections/service-areas/ServiceAreasContent';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function ServiceAreasPage() {
  return (
    <>
      {/* Set header context - has hero image on this page */}
      <HeaderSetter hasHeroImage={true} />

      {/* Service Areas Hero */}
      <ServiceAreasHero />

      {/* Service Areas Content */}
      <ServiceAreasContent />

      {/* Service Areas List */}
      <ServiceAreasList />

      {/* Reviews/Testimonials */}
      <Reviews />

      {/* Process Section */}
      <OurProcess />

      {/* CTA Section */}
      <FinalCTA />
    </>
  );
}
