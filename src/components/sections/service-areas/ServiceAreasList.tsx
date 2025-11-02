interface ServiceArea {
  name: string;
  description: string;
}

interface ServiceAreasListProps {
  areas?: ServiceArea[];
}

const defaultAreas: ServiceArea[] = [
  {
    name: 'Phoenix',
    description: 'Serving all neighborhoods throughout Phoenix with expert pool installation, maintenance, and repair services.'
  },
  {
    name: 'Mesa',
    description: 'Providing comprehensive pool care solutions to Mesa residents, from routine cleaning to complete renovations.'
  },
  {
    name: 'Scottsdale',
    description: 'Delivering premium pool services to Scottsdale homes with attention to luxury and detail.'
  },
  {
    name: 'Tempe',
    description: 'Offering reliable pool maintenance and repair services throughout Tempe and surrounding areas.'
  },
  {
    name: 'Chandler',
    description: 'Trusted pool service provider for Chandler families, ensuring safe and beautiful backyard pools.'
  },
  {
    name: 'Gilbert',
    description: 'Expert pool services for Gilbert homeowners, from new installations to ongoing maintenance and repairs.'
  },
];

export default function ServiceAreasList({ areas = defaultAreas }: ServiceAreasListProps) {
  return (
    <section className="bg-background-blue py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-heading text-sm font-bold text-primary uppercase tracking-wide mb-2">
            SERVICE COVERAGE
          </p>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            PROUDLY SERVING THESE AREAS
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const citySlug = area.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-heading text-xl font-bold text-background-blue mb-2">
                      {area.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href={`/service-areas/${citySlug}`}
                    className="inline-block w-full text-center font-heading bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-bold uppercase text-sm transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional coverage note */}
        <div className="mt-12 text-center">
          <p className="text-white text-lg">
            Don't see your area listed?{' '}
            <a href="/contact" className="text-primary hover:text-primary-dark font-semibold underline transition-colors">
              Contact us
            </a>
            {' '}to inquire about service availability in your location.
          </p>
        </div>
      </div>
    </section>
  );
}
