// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('services/renovation');

import { HeaderSetter } from '@/components/layout/HeaderSetter';
import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceContent from '@/components/sections/services/ServiceContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import FinalCTA from '@/components/sections/cta/FinalCTA';

export default function RenovationPage() {
  const contentSections = [
    {
      heading: "What is Pool Renovation?",
      content: "Pool renovation is the process of upgrading, repairing, and modernizing your existing swimming pool to restore its beauty and functionality. Whether your pool has outdated features, worn surfaces, or outdated equipment, our renovation services breathe new life into your backyard oasis. From resurfacing and retiling to updating pool equipment and adding modern features like LED lighting, waterfalls, or heating systems, we transform aging pools into stunning, efficient retreats. Our expert team handles everything from minor cosmetic updates to complete pool transformations, ensuring your renovated pool meets today's standards for beauty, safety, and energy efficiency."
    },
    {
      heading: "Why is Pool Renovation Important?",
      content: "Pool renovation is essential for maintaining both the value and enjoyment of your property. Over time, pool surfaces deteriorate, equipment becomes outdated, and safety features may no longer meet current standards. A well-executed renovation not only enhances the aesthetic appeal of your pool but also improves its efficiency and safety. Updated equipment can significantly reduce energy costs, while modern finishes are more durable and easier to maintain. Additionally, a renovated pool can dramatically increase your property value and provide a fresh, inviting space for family and friends to enjoy. Rather than the expense of a complete replacement, renovation offers a cost-effective solution to maximize your pool's potential."
    },
    {
      heading: "When Should You Consider Pool Renovation?",
      content: "You should consider pool renovation when you notice visible signs of wear such as cracks, stains, or outdated tile work. If your pool equipment is more than 10-15 years old, upgrading to energy-efficient pumps, filters, and heaters can save you money on utility bills. Renovation is also ideal when you're looking to modernize your pool's appearance to match current design trends or add new features like spa jets, beach entries, or smart pool controls. If you're planning to sell your home, a renovated pool can be a significant selling point. Additionally, if safety concerns arise or you simply want to enhance your outdoor living space, professional renovation can transform your pool into a showpiece that rivals brand new installations."
    }
  ];

  return (
    <>
      {/* Set header context for hero image */}
      <HeaderSetter hasHeroImage={true} />

      {/* Hero Section */}
      <ServiceDetailHero
        title="POOL RENOVATION EXPERTS"
        subtitle="POOL RENOVATION SERVICES"
        description="Revitalize your existing pool with our comprehensive renovation services. We transform outdated, worn pools into stunning modern retreats with updated features, equipment, and finishes that enhance both beauty and efficiency."
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
