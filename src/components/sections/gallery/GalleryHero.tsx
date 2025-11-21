'use client';

import QuoteButton from '@/components/ui/QuoteButton';
import { getBrandSectionBg } from '@/lib/colors';

interface GalleryHeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  onQuoteClick?: () => void;
}

export default function GalleryHero({
  title = 'OUR WORK',
  subtitle = 'See the exceptional work we do',
  backgroundImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  onQuoteClick,
}: GalleryHeroProps) {
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
        <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4 uppercase">
          {title}
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <QuoteButton variant="hero" onClick={onQuoteClick} />
      </div>
    </section>
  );
}
