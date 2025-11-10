import Link from 'next/link';
import { getSiteConfigCTA } from '@/lib/get-site-config';

export default function FinalCTA() {
  // Load configuration
  const ctaConfig = getSiteConfigCTA();

  return (
    <section className="relative bg-gray-900 py-16 text-white sm:py-24">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${ctaConfig.backgroundImage}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {ctaConfig.heading}
        </h2>
        <p className="font-heading mb-8 text-2xl font-bold text-primary sm:text-3xl">
          {ctaConfig.subheading}
        </p>

        <Link
          href="#hero"
          className="font-heading inline-block rounded-md bg-primary px-10 py-4 text-lg font-bold uppercase transition-all hover-dark hover:scale-105"
        >
          {ctaConfig.buttonText}
        </Link>
      </div>
    </section>
  );
}
