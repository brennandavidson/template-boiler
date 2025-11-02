// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('services/maintenance');

import { HeaderSetter } from '@/components/layout/HeaderSetter';
import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceContent from '@/components/sections/services/ServiceContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import FinalCTA from '@/components/sections/cta/FinalCTA';

export default function MaintenancePage() {
  const contentSections = [
    {
      heading: "What is Pool Maintenance?",
      content: "Pool maintenance is the ongoing care and upkeep required to keep your swimming pool clean, safe, and operating at peak performance year-round. This comprehensive service includes regular water testing and chemical balancing, cleaning of pool surfaces and filters, inspecting and maintaining equipment, and monitoring water levels. Our professional maintenance team handles everything from skimming debris and vacuuming to checking pump operation and ensuring proper chlorine levels. Regular maintenance prevents costly repairs, extends the life of your pool equipment, and ensures your pool is always ready for use. Whether you need weekly service or seasonal care, we provide customized maintenance plans tailored to your pool's specific needs and your usage patterns."
    },
    {
      heading: "Why is Pool Maintenance Important?",
      content: "Regular pool maintenance is crucial for several important reasons. First and foremost, it ensures the health and safety of swimmers by maintaining proper chemical balance and preventing the growth of harmful bacteria and algae. Neglected pools can quickly become breeding grounds for contaminants that pose serious health risks. Additionally, consistent maintenance protects your investment by preventing expensive repairs caused by neglect, corrosion, or equipment failure. A well-maintained pool operates more efficiently, reducing energy costs and extending the lifespan of pumps, filters, and heating systems. Proper maintenance also preserves the aesthetic appeal of your pool, keeping water crystal clear and surfaces pristine. Finally, routine professional care allows early detection of potential problems before they escalate into major issues."
    },
    {
      heading: "When Should You Consider Pool Maintenance?",
      content: "Professional pool maintenance should be considered if you lack the time, knowledge, or desire to properly care for your pool yourself. If you're struggling to keep water balanced, dealing with recurring algae problems, or unsure about equipment operation, professional service can save you time and frustration. Seasonal maintenance is essential when opening or closing your pool, ensuring proper winterization or safe summer startup. Consider regular maintenance service if you use your pool frequently and want to ensure it's always ready without the hassle of DIY upkeep. It's especially valuable for busy homeowners, vacation properties, or commercial pools where consistent water quality is critical. Even if you handle basic tasks yourself, periodic professional service can catch issues you might miss and provide expert care that maximizes your pool's performance and longevity."
    }
  ];

  return (
    <>
      {/* Set header context for hero image */}
      <HeaderSetter hasHeroImage={true} />

      {/* Hero Section */}
      <ServiceDetailHero
        title="POOL MAINTENANCE EXPERTS"
        subtitle="PROFESSIONAL POOL MAINTENANCE"
        description="Keep your pool in pristine condition year-round with our expert maintenance services. We handle all aspects of pool care so you can simply enjoy crystal-clear water without the work."
        backgroundImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Service Content */}
      <ServiceContent sections={contentSections} />

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
