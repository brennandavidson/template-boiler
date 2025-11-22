'use client';

import QuoteButton from '@/components/ui/QuoteButton';
import { getBrandSectionBg, getBadgeColors } from '@/lib/colors';

interface ServiceDetailHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  onQuoteClick?: () => void;
}

export default function ServiceDetailHero({
  title,
  subtitle,
  description,
  backgroundImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  onQuoteClick
}: ServiceDetailHeroProps) {
  const brandBg = getBrandSectionBg();
  const badgeColors = getBadgeColors();

  return (
    <section className="relative min-h-[70vh] py-32 flex items-center justify-center text-white" style={{ backgroundColor: brandBg }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 z-10">
        {title && (
          <div className="inline-block mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: badgeColors.background, color: badgeColors.text }}
            >
              {title}
            </span>
          </div>
        )}
        <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6 uppercase">
          {subtitle}
        </h1>

        {description && (
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}

        <QuoteButton variant="hero" onClick={onQuoteClick} />
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-[-1px] left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
