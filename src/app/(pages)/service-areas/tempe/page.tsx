// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/tempe');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function TempePage() {
  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Tempe"
        heroTitle="POOL SERVICES IN TEMPE"
        heroSubtitle="Reliable Pool Care for Tempe Residents"
        backgroundImage="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        introTitle="Tempe's Trusted Pool Service Company"
        introContent="Located in the heart of the Valley, Tempe is a vibrant community where residents enjoy an active, outdoor lifestyle year-round. With temperatures regularly exceeding 100°F in summer, a well-maintained pool isn't just a luxury – it's an essential part of enjoying your home. From South Tempe's established neighborhoods to newer developments around Tempe Town Lake, we serve pool owners throughout this dynamic city. Tempe's proximity to ASU and its diverse community means we work with everyone from young families to retirees, all with different pool needs and budgets. We pride ourselves on providing professional, affordable service that keeps your pool safe, clean, and ready to use whenever you need it."
        servicesTitle="Full-Service Pool Care in Tempe"
        servicesContent="We provide complete pool services to meet the needs of Tempe's diverse homeowners. Our services include new pool installation, weekly and bi-weekly maintenance, equipment repair and replacement, pool cleaning and vacuuming, chemical testing and balancing, green pool recovery, pump and filter service, leak detection and repair, and seasonal opening and closing. Tempe's water quality can vary by neighborhood, and we adjust our chemical treatments accordingly to prevent common issues like scaling, staining, and algae growth. We understand that Tempe residents lead busy lives, which is why we offer flexible scheduling and prompt, reliable service. Whether you need regular maintenance or emergency repairs, we're committed to keeping your pool in excellent condition without disrupting your schedule or budget."
        whyChooseTitle="Why Tempe Residents Choose Our Service"
        whyChooseContent="Tempe homeowners trust us because we combine professional expertise with honest, straightforward service. We don't believe in high-pressure sales tactics or unnecessary upselling. Instead, we focus on what your pool actually needs and provide clear, upfront pricing. Our technicians are experienced professionals who take the time to explain any issues we find and discuss your options. We're locally based, which means we can respond quickly to service calls and emergencies. We also understand the importance of value – we work efficiently to keep costs reasonable while never compromising on quality. Our long list of satisfied Tempe customers speaks to our commitment to excellent service and customer satisfaction. We're fully licensed and insured, and we stand behind our work with solid warranties and guarantees."
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList />
      <FinalCTA />
    </>
  );
}
