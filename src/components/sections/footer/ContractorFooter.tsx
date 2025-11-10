import Link from 'next/link';
import Image from 'next/image';
import {
  getSiteConfigBusiness,
  getSiteConfigContact,
  getSiteConfigFooter,
  getSiteConfigServices,
  getSiteConfigServiceAreas,
  getSiteConfigSocial,
} from '@/lib/get-site-config';

interface ContractorFooterProps {
  onQuoteClick?: () => void;
}

export default function ContractorFooter({ onQuoteClick }: ContractorFooterProps = {}) {
  // Load configuration
  const business = getSiteConfigBusiness();
  const contact = getSiteConfigContact();
  const footer = getSiteConfigFooter();
  const services = getSiteConfigServices();
  const serviceAreas = getSiteConfigServiceAreas();
  const social = getSiteConfigSocial();

  // Format business hours for display
  const businessHours = [
    { day: 'Mon', hours: footer.hours.monday },
    { day: 'Tue', hours: footer.hours.tuesday },
    { day: 'Wed', hours: footer.hours.wednesday },
    { day: 'Thu', hours: footer.hours.thursday },
    { day: 'Fri', hours: footer.hours.friday },
    { day: 'Sat', hours: footer.hours.saturday },
    { day: 'Sun', hours: footer.hours.sunday },
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
              <p className="mb-2 text-lg font-bold">{business.name}</p>
            </div>

            <div className="space-y-2 text-sm text-gray-300">
              <a
                href={`tel:${contact.phone.replace(/\D/g, '')}`}
                className="block transition-colors hover:text-background-blue"
              >
                {contact.phone}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="block transition-colors hover:text-background-blue"
              >
                {contact.email}
              </a>
            </div>

            <button
              onClick={onQuoteClick}
              className="font-heading mt-6 w-full rounded-md bg-primary px-4 py-2 text-sm font-bold uppercase transition-colors hover-dark"
            >
              Get Quote
            </button>

            {/* Social Media Icons */}
            <div className="mt-4 flex gap-3">
              {/* Facebook */}
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}

              {/* Google */}
              {social.google && (
                <a
                  href={social.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover transition-colors"
                  aria-label="Google"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
              )}

              {/* Yelp */}
              {social.yelp && (
                <a
                  href={social.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover transition-colors"
                  aria-label="Yelp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206a9.194 9.194 0 0 1 2.364 3.252a1.073 1.073 0 0 1-.686 1.459zm-5.025 3.152l4.942 1.606a1.072 1.072 0 0 1 .636 1.48a9.316 9.316 0 0 1-2.47 3.169a1.073 1.073 0 0 1-1.592-.26l-2.76-4.409c-.528-.847.288-1.894 1.236-1.584zm-4.796-4.368L5.454 2.916a1.072 1.072 0 0 1 .466-1.5A14.973 14.973 0 0 1 11.184.003a1.07 1.07 0 0 1 1.153 1.068v9.768c0 1.096-1.45 1.483-1.998.535zm-.857 4.17L4.44 16.806a1.073 1.073 0 0 1-1.324-.92a9.218 9.218 0 0 1 .43-3.997a1.07 1.07 0 0 1 1.485-.62l4.668 2.279c.9.438.763 1.76-.207 2zm.886 1.477c.669-.744 1.901-.246 1.866.752l-.19 5.188a1.073 1.073 0 0 1-1.247 1.02a9.314 9.314 0 0 1-3.722-1.502a1.072 1.072 0 0 1-.187-1.6l3.477-3.864z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Business Links */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
              Business
            </p>
            <ul className="space-y-2 text-sm">
              {footer.businessLinks.map((link) => (
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
              {services.items.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 transition-colors hover:text-background-blue"
                  >
                    {service.title}
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
              {serviceAreas.cities.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-gray-300 transition-colors hover:text-background-blue"
                  >
                    {area.name}
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
              © {new Date().getFullYear()} {business.name}. {footer.copyrightText}
            </p>

            {/* Bottom Links */}
            <div className="flex items-center gap-6 text-sm">
              {footer.legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-400 transition-colors hover:text-background-blue"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
