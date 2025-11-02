// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/phoenix');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function PhoenixPage() {
  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Phoenix"
        heroTitle="POOL SERVICES IN PHOENIX"
        heroSubtitle="Expert Pool Care for Arizona's Capital City"
        backgroundImage="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        introTitle="Your Trusted Pool Service Provider in Phoenix"
        introContent="Phoenix's intense desert heat and year-round sunshine make pool ownership both a luxury and a necessity. With average summer temperatures exceeding 100°F, your pool requires specialized care to handle the unique challenges of the Valley of the Sun. Our team understands the specific demands of Phoenix's climate, from managing evaporation rates during scorching summers to maintaining optimal chemical balance in extreme heat. We've been serving Phoenix residents for years, bringing local expertise and professional service to every job. Whether you're in Downtown Phoenix, Ahwatukee, or anywhere in between, we're your trusted partner for all pool service needs."
        servicesTitle="Comprehensive Pool Services for Phoenix Residents"
        servicesContent="We offer a complete range of pool services tailored specifically for Phoenix homes. Our services include new pool installation and design, weekly maintenance and cleaning, equipment repair and replacement, pool renovations and remodeling, chemical balancing and water treatment, tile and coping repair, pump and filter services, and emergency repair services. Phoenix's hard water and mineral content require special attention, and our technicians are trained in the latest techniques to prevent scaling and maintain crystal-clear water. We use commercial-grade equipment and premium products designed to withstand Arizona's harsh UV rays and extreme temperatures, ensuring your pool stays in peak condition year-round."
        whyChooseTitle="Why Phoenix Homeowners Choose Us"
        whyChooseContent="What sets us apart is our deep understanding of Phoenix's unique pool care requirements. We're not just another pool service company – we're Phoenix pool specialists who know that the desert climate demands expertise beyond standard pool maintenance. Our technicians are fully licensed, insured, and continuously trained on the latest pool technologies and techniques specific to Arizona conditions. We pride ourselves on reliability, showing up on time and completing work efficiently without cutting corners. Our commitment to customer satisfaction means we're always available to answer questions, address concerns, and provide expert advice. From the first consultation to ongoing maintenance, we treat your pool as if it were our own. When you choose us, you're choosing a local Phoenix business that truly understands your pool care needs."
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList />
      <FinalCTA />
    </>
  );
}
