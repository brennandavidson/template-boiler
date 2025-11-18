'use client';

import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { getBrandSectionBg } from '@/lib/colors';

interface ServiceAreasHeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  onQuoteClick?: () => void;
}

export default function ServiceAreasHero({
  title = 'POOL SERVICES IN ARIZONA',
  subtitle = 'Premier Pool Services Across the Valley',
  backgroundImage = 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  onQuoteClick,
}: ServiceAreasHeroProps) {
  const { openModal } = useQuoteModal();
  const brandBg = getBrandSectionBg();

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: brandBg }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <button
          onClick={onQuoteClick || openModal}
          className="font-heading bg-primary hover-dark text-white px-8 py-4 rounded-md font-bold uppercase text-sm transition-colors shadow-lg"
        >
          Get Free Quote
        </button>
      </div>
    </section>
  );
}
