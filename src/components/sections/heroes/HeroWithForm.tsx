'use client';

import { getSiteConfigBusiness, getSiteConfigContact, getSiteConfigIntegrations } from '@/lib/get-site-config';

export default function HeroWithForm() {
  // Load configuration
  const business = getSiteConfigBusiness();
  const contact = getSiteConfigContact();
  const integrations = getSiteConfigIntegrations();

  // Extract form URL from the inline embed code
  const embedCode = integrations.ghl?.quoteFormEmbedInline || '';
  const srcMatch = embedCode.match(/src="([^"]+)"/);
  const formUrl = srcMatch ? srcMatch[1] : '';

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-[10vh] pb-8 lg:pb-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('${business.heroBackgroundImage}')`,
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div className="flex flex-col justify-center">
            <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl mb-4 mt-0">
              {business.seoH1 || `${business.tagline} ${business.primaryLocation}`}
            </h1>

            <p className="text-xl text-gray-200 max-w-xl lg:text-2xl mt-0 mb-0">
              {business.heroDescription}
            </p>

            {/* Trust Indicators - Review Badges */}
            <div className="mt-6 mb-0 flex flex-wrap items-center gap-4 sm:gap-8">
              {/* Google Reviews */}
              <a
                href={contact.googleReviewUrl || business.reviewBadges?.google?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our Google reviews"
                className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-10 sm:h-10" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white/90 mt-1">5 Star Reviews</span>
                </div>
              </a>

              {/* Facebook Reviews */}
              <a
                href={business.reviewBadges?.facebook?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View our Facebook reviews"
                className="flex items-center gap-2 sm:gap-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                  <svg className="w-7 h-7 sm:w-10 sm:h-10" viewBox="0 0 24 24">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-white/90 mt-1">5 Star Reviews</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form - HERO ELEMENT */}
          <div className="flex items-center justify-center lg:justify-end mt-0">
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
  );
}
