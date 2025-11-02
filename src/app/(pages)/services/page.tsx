// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('services');

// Import sections
import ServicesGridPage from '@/components/sections/services/ServicesGridPage';
import Reviews from '@/components/sections/testimonials/Reviews';
import FAQ from '@/components/sections/faq/FAQ';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function ServicesPage() {
  return (
    <>
      {/* Set header context - no hero image on this page */}
      <HeaderSetter hasHeroImage={false} />

      {/* Services Grid */}
      <ServicesGridPage />

      {/* Reviews/Testimonials */}
      <Reviews />

      {/* FAQ Section */}
      <FAQ />

      {/* Service Areas */}
      <ServiceAreas />
    </>
  );
}
