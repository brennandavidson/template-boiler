// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('services/installation');

import { HeaderSetter } from '@/components/layout/HeaderSetter';
import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceContent from '@/components/sections/services/ServiceContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { getSiteConfigServices } from '@/lib/get-site-config';

export default function InstallationPage() {
  const services = getSiteConfigServices();
  const serviceData = services.details?.installation;

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
