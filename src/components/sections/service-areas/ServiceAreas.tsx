import { getSiteConfigServiceAreas, getSiteConfigContact } from '@/lib/get-site-config';

export default function ServiceAreas() {
  // Load configuration
  const serviceAreasConfig = getSiteConfigServiceAreas();
  const contactConfig = getSiteConfigContact();

  return (
    <section className="bg-background-blue py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
              {/* Map Placeholder - Replace with actual embedded map */}
              <div className="relative aspect-square w-full bg-gray-200">
                <iframe
                  src={contactConfig.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Service Areas List */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <div className="inline-block mb-4">
              <span className="inline-block bg-white text-[#1e3a5f] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                {serviceAreasConfig.sectionBadge}
              </span>
            </div>
            <h2 className="font-heading mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {serviceAreasConfig.sectionHeading}
            </h2>

            <div className="grid grid-cols-2 gap-y-1">
              {serviceAreasConfig.cities.map((area, index) => (
                <a
                  key={index}
                  href={`/service-areas/${area.slug}`}
                  className="text-lg hover:text-primary transition-colors"
                >
                  {area.name}
                </a>
              ))}
            </div>

            <p className="mt-6 text-background-blue">
              {serviceAreasConfig.ctaText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
