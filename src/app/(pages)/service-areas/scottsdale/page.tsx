// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/scottsdale');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function ScottsdalePage() {
  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Scottsdale"
        heroTitle="POOL SERVICES IN SCOTTSDALE"
        heroSubtitle="Luxury Pool Care for Scottsdale's Finest Homes"
        backgroundImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        introTitle="Scottsdale's Luxury Pool Service Specialists"
        introContent="Scottsdale is renowned for its luxury homes and stunning custom pools, and maintaining these high-end aquatic features requires a level of expertise and attention to detail that matches their quality. From Paradise Valley to North Scottsdale, the area's prestigious neighborhoods feature some of Arizona's most impressive pools – infinity edges overlooking mountain vistas, resort-style designs with custom water features, and architectural masterpieces that enhance property values. Our team specializes in caring for luxury pools, understanding that Scottsdale homeowners expect nothing less than perfection. We bring the same level of excellence to every service call that went into your pool's original design and construction."
        servicesTitle="Premium Pool Services for Scottsdale Homes"
        servicesContent="We offer white-glove pool services designed specifically for Scottsdale's luxury properties. Our comprehensive offerings include custom pool design and installation, concierge-level maintenance programs, high-end equipment installation and service, complete pool remodeling and upgrades, specialty finishes and custom tile work, water feature installation and repair, smart pool automation systems, and architectural lighting design. Scottsdale's discerning homeowners demand the finest materials and craftsmanship, and we deliver both. We work with premium brands and cutting-edge technology to ensure your pool not only functions flawlessly but remains a stunning centerpiece of your outdoor living space. Our maintenance programs are customized to your pool's specific needs and your personal preferences, providing consistent, reliable care that preserves your investment."
        whyChooseTitle="The Scottsdale Standard of Excellence"
        whyChooseContent="Scottsdale homeowners choose us because we understand and appreciate the quality and attention to detail that defines this community. Our technicians are not just skilled professionals – they're craftsmen who take pride in their work and understand the importance of maintaining luxury pools to the highest standards. We're familiar with the custom features common in Scottsdale pools, from vanishing edges to fire features to integrated spas. Our service includes discreet, professional interactions that respect your privacy and property. We arrive in clean, well-maintained vehicles and our technicians are uniformed, background-checked professionals. We understand that your pool is an extension of your lifestyle and we treat it accordingly. When you choose us, you're choosing a service provider who shares your commitment to excellence."
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList />
      <FinalCTA />
    </>
  );
}
