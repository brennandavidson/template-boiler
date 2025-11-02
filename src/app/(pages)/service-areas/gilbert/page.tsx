// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('service-areas/gilbert');

import CityPageContent from '@/components/sections/service-areas/CityPageContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreasList from '@/components/sections/service-areas/ServiceAreasList';
import FinalCTA from '@/components/sections/cta/FinalCTA';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function GilbertPage() {
  return (
    <>
      <HeaderSetter hasHeroImage={true} />

      <CityPageContent
        cityName="Gilbert"
        heroTitle="POOL SERVICES IN GILBERT"
        heroSubtitle="Professional Pool Care for Gilbert's Growing Community"
        backgroundImage="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        introTitle="Gilbert's Premier Pool Service Partner"
        introContent="Gilbert has transformed from a small agricultural town into one of Arizona's fastest-growing and most desirable communities. With its top-rated schools, safe neighborhoods, and family-oriented atmosphere, Gilbert attracts homeowners who value quality and take pride in their properties. The town's numerous master-planned communities feature beautiful pools that serve as focal points for family life and entertaining. We've been serving Gilbert residents through this incredible growth, bringing the same commitment to quality and customer service that defines this community. Whether you're in Val Vista Lakes, Agritopia, or one of Gilbert's many other neighborhoods, we understand the importance of maintaining your pool to the high standards Gilbert homeowners expect."
        servicesTitle="Comprehensive Pool Solutions for Gilbert Residents"
        servicesContent="We provide full-service pool care tailored to Gilbert's modern homes and discerning homeowners. Our services include custom pool design and construction, routine maintenance programs, equipment upgrades and repairs, energy-efficient system installation, pool remodeling and resurfacing, smart pool automation, water feature installation, tile and coping services, and comprehensive cleaning and chemical management. Gilbert's newer construction often includes advanced pool features and automation systems, and our technicians are expertly trained on these modern technologies. We focus on maximizing energy efficiency and minimizing water waste, which is especially important in Arizona's desert climate. We also offer customized maintenance schedules to fit your lifestyle, whether you want weekly service during peak season or year-round comprehensive care."
        whyChooseTitle="Why Gilbert Homeowners Choose Us"
        whyChooseContent="Gilbert residents choose us because we match their commitment to quality, reliability, and community values. We're locally owned and operated, which means we're invested in Gilbert's continued success and maintaining our reputation in this tight-knit community. Our team consists of experienced, certified technicians who undergo continuous training on the latest pool technologies and best practices. We use professional-grade equipment and premium products that deliver lasting results. Our service is built on clear communication – we provide detailed service reports, explain any issues we discover, and offer honest recommendations without pressure. We respect your time and property, arriving as scheduled and completing work efficiently. We're fully licensed, bonded, and insured, and we guarantee our workmanship. When Gilbert homeowners want reliable, professional pool service they can trust, they choose us."
      />

      <Reviews />
      <OurProcess />
      <ServiceAreasList />
      <FinalCTA />
    </>
  );
}
