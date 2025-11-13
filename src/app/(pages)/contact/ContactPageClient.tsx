'use client';

import Reviews from '@/components/sections/testimonials/Reviews';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';
import { getSiteConfigContact, getSiteConfigIntegrations } from '@/lib/get-site-config';

export default function ContactPageClient() {
  const contact = getSiteConfigContact();
  const integrations = getSiteConfigIntegrations();

  // Extract form URL from the inline embed code
  const embedCode = integrations.ghl?.quoteFormEmbedInline || '';
  const srcMatch = embedCode.match(/src="([^"]+)"/);
  const formUrl = srcMatch ? srcMatch[1] : '';

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-background-blue text-white pt-[12vh] pb-8 lg:pb-0">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center">
              {/* Left Column - Contact Info */}
              <div className="flex flex-col justify-center">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  CONTACT US FOR A FREE QUOTE
                </h1>

                <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-xl">
                  Contact us by filling in the form or by using any of the methods below and we'll get back to you within 24 hours
                </p>

                {/* Contact Buttons */}
                <div className="space-y-4 max-w-xl">
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-heading w-full bg-primary hover-dark text-white px-8 py-5 rounded-lg font-bold uppercase text-sm sm:text-base transition-colors shadow-md flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    EMAIL: {contact.email.toUpperCase()}
                  </a>

                  <a
                    href={`tel:${contact.phone.replace(/\D/g, '')}`}
                    className="font-heading w-full bg-primary hover-dark text-white px-8 py-5 rounded-lg font-bold uppercase text-sm sm:text-base transition-colors shadow-md flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    PHONE: {contact.phone}
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="flex items-center justify-center lg:justify-end">
                {formUrl && (
                  <iframe
                    src={formUrl}
                    className="w-full max-w-xl"
                    style={{
                      height: '800px',
                      border: 'none',
                      borderRadius: '12px'
                    }}
                    title="Get Free Quote"
                  />
                )}
              </div>
            </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Service Areas Section */}
      <ServiceAreas />
    </>
  );
}
