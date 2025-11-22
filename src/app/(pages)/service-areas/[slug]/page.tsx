// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return generateStaticMetadata(`service-areas/${slug}`);
}

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';
import { getSiteConfigServiceAreas } from '@/lib/get-site-config';
import { notFound } from 'next/navigation';

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const serviceAreas = getSiteConfigServiceAreas();
  const cityData = serviceAreas.details?.[slug];

  // If city not found in config, show 404
  if (!cityData) {
    notFound();
  }

  // Find the city name from the cities array
  const cityInfo = serviceAreas.cities.find(city => city.slug === slug);
  const cityName = cityInfo?.name || slug;

  // Transform cities data for ServiceAreasList component
  const areas = serviceAreas.cities.map(city => ({
    name: city.name,
    description: serviceAreas.details?.[city.slug]?.sections[0]?.content?.replace(/<[^>]*>/g, '').slice(0, 150) + '...' ||
                 `Professional pool services for ${city.name} residents.`
  }));

  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName={cityName}
        heroTitle={cityData.hero.title}
        heroSubtitle={cityData.hero.subtitle}
        backgroundImage={cityData.hero.backgroundImage}
        sections={cityData.sections}
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList areas={areas} />
      <FinalCTA />
    </>
  );
}
