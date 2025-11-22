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
import { getSiteConfigServiceAreas } from '@/lib/get-site-config';

export default function ServiceAreasPage() {
  const serviceAreas = getSiteConfigServiceAreas();

  // Transform cities data for ServiceAreasList component
  const areas = serviceAreas.cities.map(city => ({
    name: city.name,
    description: serviceAreas.details?.[city.slug]?.sections[0]?.content?.replace(/<[^>]*>/g, '').slice(0, 150) + '...' ||
                 `Professional services for ${city.name} residents.`
  }));

  return (
    <>
      {/* Set header context - has hero image on this page */}
      <HeaderSetter hasHeroImage={true} />

      {/* Service Areas Hero */}
      <ServiceAreasHero />

      {/* Service Areas Content */}
      <ServiceAreasContent />

      {/* Service Areas List */}
      <ServiceAreasList areas={areas} />

      {/* Reviews/Testimonials */}
      <Reviews />

      {/* Process Section */}
      <OurProcess />

      {/* CTA Section */}
      <FinalCTA />
    </>
  );
}
