import { getSiteConfigServiceAreas, getSiteConfigContact } from '@/lib/get-site-config';

export default function ServiceAreas() {
  // Load configuration
  const serviceAreasConfig = getSiteConfigServiceAreas();
  const contactConfig = getSiteConfigContact();

  return (
    <section className="bg-background-blue py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Map or Service Area Display */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
              <div className="relative aspect-square w-full bg-gray-200">
                {contactConfig.googleMapsEmbed ? (
                  // Physical location - show Google Maps embed
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
                ) : (
                  // Service-area business without physical location - show service area visualization
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="text-center">
                      <div className="mb-4 inline-block p-4 bg-background-blue rounded-full">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-background-blue mb-2">Proudly Serving</h3>
                      <p className="text-gray-700 font-semibold">{contactConfig.address?.city}, {contactConfig.address?.state}</p>
                      <p className="text-gray-600 mt-4 text-sm">& Surrounding Areas</p>
                    </div>
                  </div>
                )}
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
