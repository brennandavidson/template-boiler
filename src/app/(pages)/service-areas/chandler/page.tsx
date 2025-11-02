// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/chandler');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function ChandlerPage() {
  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Chandler"
        heroTitle="POOL SERVICES IN CHANDLER"
        heroSubtitle="Expert Pool Care for Chandler Families"
        backgroundImage="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        introTitle="Chandler's Family-Focused Pool Service Provider"
        introContent="Chandler has grown into one of Arizona's most family-friendly communities, with master-planned neighborhoods, excellent schools, and beautiful homes throughout the city. From established areas in West Chandler to newer communities like Fulton Ranch and Ocotillo, pools are a central feature of family life here. We understand that for Chandler families, a pool means summer fun, weekend gatherings, and creating lasting memories. That's why we focus on keeping your pool not just clean and functional, but safe for your children and pets. Our team has been serving Chandler families for years, and we treat every pool as if it belonged to our own family. We're committed to providing reliable, professional service that gives you peace of mind and keeps your backyard oasis ready for enjoyment."
        servicesTitle="Complete Pool Services for Chandler Homes"
        servicesContent="We offer comprehensive pool services designed with Chandler families in mind. Our services include new pool installation and design, regular maintenance and cleaning, safety inspections and equipment checks, pool heater installation and repair, cartridge and DE filter cleaning, salt system installation and service, LED lighting upgrades, pool fence and safety equipment installation, and thorough cleaning and chemical balancing. We pay special attention to water chemistry, ensuring proper sanitization while maintaining comfortable swimming conditions. Chandler's newer homes often feature modern pool equipment, and our technicians are trained on the latest automation systems and energy-efficient technology. We also specialize in child-safety features and can recommend upgrades to keep your pool as safe as possible for your family."
        whyChooseTitle="Why Chandler Families Trust Us"
        whyChooseContent="Chandler homeowners choose us because we share their family values and commitment to quality. We understand that your pool is where your children learn to swim, where you host birthday parties, and where you create family memories. We take that responsibility seriously, providing thorough, careful service with a focus on safety and reliability. Our technicians are background-checked, professionally trained, and committed to treating your property with respect. We arrive on time, work efficiently, and always clean up after ourselves. We also believe in education – we're happy to explain our processes and teach you about proper pool care. Our pricing is transparent and competitive, because we believe quality pool service should be accessible to Chandler families. We're locally owned and operated, and we're invested in the Chandler community we serve."
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList />
      <FinalCTA />
    </>
  );
}
