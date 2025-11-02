// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('services/installation');

import { HeaderSetter } from '@/components/layout/HeaderSetter';
import ServiceDetailHero from '@/components/sections/services/ServiceDetailHero';
import ServiceContent from '@/components/sections/services/ServiceContent';
import Reviews from '@/components/sections/testimonials/Reviews';
import OurProcess from '@/components/sections/process/OurProcess';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import FinalCTA from '@/components/sections/cta/FinalCTA';

export default function InstallationPage() {
  const contentSections = [
    {
      heading: "What is Pool Installation?",
      content: "Pool installation is a comprehensive process that involves the design, excavation, and construction of a swimming pool on your property. This service transforms your backyard into a personal oasis, offering a unique blend of aesthetic appeal and functionality. From initial consultation professionals handle every aspect of your pool installation. Our experienced team brings expertise in pool construction and landscaping around the pool. Whether it's an in-ground pool or an above-ground model, the installation process requires meticulous engineering, trenching, and finishing work to ensure your pool seamlessly integrates with your outdoor space."
    },
    {
      heading: "Why is Pool Installation Important?",
      content: "Having a pool installed is important for several reasons. Firstly, it provides a personal, serene for relaxation and recreation, enhancing your quality of life. It's a space where family and friends can gather, creating lasting memories. Secondly, a well-designed and professionally installed pool can significantly increase your property's market value. It adds aesthetic appeal and appeal and can make your property more attractive to potential buyers if you decide to sell. Lastly, with a pool, you have a convenient way to stay fit and healthy through regular swimming, a low-impact exercise that's great for people of all ages."
    },
    {
      heading: "When Should You Consider Pool Installation?",
      content: "You should consider pool installation when you're looking to enhance your property's value and your quality of life at home. If you have children who love swimming or if you enjoy hosting parties and gatherings, a pool can provide hours of entertainment. It's a wise investment for those living in warm climates, as it offers a refreshing respite during the hot summer months. For busy professionals who don't always have time to go to a public pool, having a pool at home can be very convenient. We may be encouraged now! Either time or improve your health through swimming, installing a pool can be an excellent decision. Additionally, if you're planning to age in place at home, a pool can provide a low-impact way of staying active. We're here to help you throughout the entire journey, from planning to the actual construction, ensuring the best value for your investment."
    }
  ];

  return (
    <>
      {/* Set header context for hero image */}
      <HeaderSetter hasHeroImage={true} />

      {/* Hero Section */}
      <ServiceDetailHero
        title="POOL INSTALLATION EXPERTS"
        subtitle="POOL INSTALLATION IN NASSAU COUNTY"
        description="Transform your backyard into a refreshing oasis with our professional pool installation services. From design to completion, we ensure a smooth, efficient process, creating the perfect pool to suit your lifestyle and enhance your home's value."
        backgroundImage="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
