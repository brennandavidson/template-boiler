import Link from 'next/link';
import Image from 'next/image';
import { getSiteConfigServices } from '@/lib/get-site-config';

export default function ServicesGrid() {
  // Load services configuration
  const servicesConfig = getSiteConfigServices();

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block bg-[#1e3a5f] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              {servicesConfig.sectionBadge}
            </span>
          </div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {servicesConfig.sectionHeading}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesConfig.items.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-xl shadow-xl transition-all hover:shadow-2xl"
            >
              {/* Image Background */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Title and Arrow */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                      {service.title}
                    </h3>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background-blue transition-all group-hover:scale-110 group-hover:bg-background-blue-dark flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
