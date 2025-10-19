import Link from 'next/link';
import Image from 'next/image';

export default function ContractorFooter() {
  const businessLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Review Us', href: '/review' },
  ];

  const services = [
    { label: 'Installation', href: '/services/installation' },
    { label: 'Renovation', href: '/services/renovation' },
    { label: 'Maintenance', href: '/services/maintenance' },
    { label: 'Design Services', href: '/services/design' },
  ];

  const serviceAreas = [
    { label: 'Your County', href: '/service-areas/county' },
    { label: 'City Name 1', href: '/service-areas/city1' },
    { label: 'City Name 2', href: '/service-areas/city2' },
  ];

  const businessHours = [
    { day: 'Mon', hours: '9:00AM - 5:00PM' },
    { day: 'Tue', hours: '9:00AM - 5:00PM' },
    { day: 'Wed', hours: '9:00AM - 5:00PM' },
    { day: 'Thu', hours: '9:00AM - 5:00PM' },
    { day: 'Fri', hours: '9:00AM - 5:00PM' },
    { day: 'Sat', hours: 'Closed' },
    { day: 'Sun', hours: 'Closed' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Column 1: Company Info & Contact */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background-blue">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <p className="mb-2 text-lg font-bold">Your Company Name</p>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <a
                href="tel:+15551234567"
                className="block transition-colors hover:text-background-blue"
              >
                (555) 123-4567
              </a>
              <a
                href="mailto:info@yourcompany.com"
                className="block transition-colors hover:text-background-blue"
              >
                info@yourcompany.com
              </a>
            </div>

            <button className="font-heading mt-6 w-full rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase transition-colors hover:bg-primary-dark">
              Get Quote
            </button>
          </div>

          {/* Column 2: Business Links */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
              Business
            </p>
            <ul className="space-y-2 text-sm">
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 transition-colors hover:text-background-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
              Our Services
            </p>
            <ul className="space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-300 transition-colors hover:text-background-blue"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
              Service Areas
            </p>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.label}>
                  <Link
                    href={area.href}
                    className="text-gray-300 transition-colors hover:text-background-blue"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Operating Hours */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
              Operating Hours
            </p>
            <ul className="space-y-1 text-sm text-gray-300">
              {businessHours.map((schedule) => (
                <li key={schedule.day} className="flex justify-between">
                  <span className="font-medium">{schedule.day}:</span>
                  <span>{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 transition-colors hover:text-background-blue">
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 transition-colors hover:text-background-blue"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
