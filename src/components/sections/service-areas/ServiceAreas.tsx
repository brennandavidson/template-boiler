export default function ServiceAreas() {
  const serviceAreas = [
    { name: 'Phoenix', slug: 'phoenix' },
    { name: 'Mesa', slug: 'mesa' },
    { name: 'Scottsdale', slug: 'scottsdale' },
    { name: 'Tempe', slug: 'tempe' },
    { name: 'Chandler', slug: 'chandler' },
    { name: 'Gilbert', slug: 'gilbert' },
  ];

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427224.8741266059!2d-112.32374299999999!3d33.448376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
                Where We Serve
              </span>
            </div>
            <h2 className="font-heading mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
              PROUDLY SERVING THESE AREAS
            </h2>

            <div className="grid grid-cols-2 gap-y-1">
              {serviceAreas.map((area, index) => (
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
              Don't see your city listed? Give us a call! We may still be able to serve your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
