// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/mesa');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function MesaPage() {
  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Mesa"
        heroTitle="POOL SERVICES IN MESA"
        heroSubtitle="Professional Pool Care for Arizona's Third Largest City"
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        introTitle="Mesa's Premier Pool Service Company"
        introContent="Mesa is home to some of Arizona's most beautiful residential pools, and maintaining them requires expertise that goes beyond basic cleaning. As the third-largest city in Arizona, Mesa's diverse neighborhoods from Red Mountain Ranch to Eastmark each present unique pool care challenges. The area's hard water, intense summer heat, and seasonal dust storms demand specialized knowledge and professional attention. Our team has served Mesa homeowners for years, understanding the specific needs of pools in this desert community. We know that Mesa residents expect reliability, quality workmanship, and honest service – and that's exactly what we deliver on every job."
        servicesTitle="Complete Pool Services Throughout Mesa"
        servicesContent="We provide comprehensive pool services to all Mesa neighborhoods, including custom pool design and installation, routine maintenance and cleaning, equipment upgrades and repairs, pool resurfacing and renovation, chemical treatment and water balancing, filter cleaning and replacement, automation system installation, and energy-efficient equipment upgrades. Mesa's water quality requires particular attention to prevent mineral buildup and staining. Our technicians use advanced testing equipment and premium chemicals specifically formulated for Arizona's water conditions. Whether you have a traditional pool, infinity edge, or custom water feature, we have the expertise to keep it functioning beautifully. We also specialize in upgrading older pools with modern, energy-efficient equipment that can significantly reduce your utility costs."
        whyChooseTitle="Why Mesa Residents Trust Us"
        whyChooseContent="Mesa homeowners choose us because we understand their unique needs and deliver consistent, professional results. We're locally owned and operated, which means we're invested in our community and our reputation. Our technicians undergo rigorous training in Arizona-specific pool care techniques and stay current with the latest industry advances. We use only high-quality parts and materials that can withstand Mesa's extreme weather conditions. Our service is built on transparency – we provide detailed explanations of any issues we find and offer honest recommendations without pressure tactics. We're fully licensed, bonded, and insured, giving you complete peace of mind. From emergency repairs to regular maintenance, we're the Mesa pool service company you can count on."
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList />
      <FinalCTA />
    </>
  );
}
