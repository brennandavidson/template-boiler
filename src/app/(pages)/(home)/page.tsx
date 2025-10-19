// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('(home)');

// Import all homepage sections
import HeroWithForm from '@/components/sections/heroes/HeroWithForm';
import TrustBadges from '@/components/sections/TrustBadges';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import AboutUs from '@/components/sections/about/AboutUs';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import WorkGallery from '@/components/sections/gallery/WorkGallery';
import FAQ from '@/components/sections/faq/FAQ';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Contact Form */}
      <HeroWithForm />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Services Grid */}
      <ServicesGrid />

      {/* About Us Section */}
      <AboutUs />

      {/* Reviews/Testimonials */}
      <Reviews />

      {/* Our Process */}
      <OurProcess />

      {/* Work Gallery */}
      <WorkGallery />

      {/* FAQ Section */}
      <FAQ />

      {/* Service Areas */}
      <ServiceAreas />
    </>
  );
}
