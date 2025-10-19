import Link from 'next/link';
import Image from 'next/image';

interface Service {
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServicesGrid() {
  const services: Service[] = [
    {
      title: 'Installation',
      href: '/services/installation',
      imageSrc: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Professional installation services',
    },
    {
      title: 'Renovation',
      href: '/services/renovation',
      imageSrc: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Expert renovation services',
    },
    {
      title: 'Maintenance',
      href: '/services/maintenance',
      imageSrc: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Regular maintenance services',
    },
    {
      title: 'Design Services',
      href: '/services/design',
      imageSrc: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Professional design services',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block bg-[#1e3a5f] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              WHAT WE ARE BEST AT
            </span>
          </div>
          <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            OUR SERVICES
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
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
