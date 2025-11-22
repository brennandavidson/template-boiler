'use client';

import QuoteButton from '@/components/ui/QuoteButton';
import { getSiteConfigCTA } from '@/lib/get-site-config';
import { getBrandSectionBg } from '@/lib/colors';

export default function FinalCTA() {
  // Load configuration
  const ctaConfig = getSiteConfigCTA();
  const brandBg = getBrandSectionBg();

  return (
    <section className="relative py-16 text-white sm:py-24" style={{ backgroundColor: brandBg }}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url(${ctaConfig.backgroundImage})`,
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {ctaConfig.heading}
        </h2>
        <p className="font-heading mb-8 text-2xl font-bold text-primary sm:text-3xl">
          {ctaConfig.subheading}
        </p>

        <QuoteButton variant="hero">{ctaConfig.buttonText}</QuoteButton>
      </div>
    </section>
  );
}
