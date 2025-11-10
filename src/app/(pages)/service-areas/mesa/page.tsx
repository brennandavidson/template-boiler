// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/mesa');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';
import { getSiteConfigServiceAreas } from '@/lib/get-site-config';

export default function MesaPage() {
  const serviceAreas = getSiteConfigServiceAreas();
  const cityData = serviceAreas.details?.mesa;

  // Fallback if config is not available
  if (!cityData) {
    return <div>City configuration not found</div>;
  }

  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Mesa"
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
