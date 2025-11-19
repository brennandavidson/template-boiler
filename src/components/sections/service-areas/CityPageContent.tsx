'use client';

import QuoteButton from '@/components/ui/QuoteButton';
import { getBadgeColors, getBrandSectionBg } from '@/lib/colors';

interface ContentSection {
  heading: string;
  content: string;
}

interface CityPageContentProps {
  cityName: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: ContentSection[];
  backgroundImage?: string;
}

export default function CityPageContent({
  cityName,
  heroTitle,
  heroSubtitle,
  sections,
  backgroundImage = 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
}: CityPageContentProps) {
  const badgeColors = getBadgeColors();
  const brandBg = getBrandSectionBg();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: brandBg }}>
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8 py-32">
          <div className="inline-block mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: badgeColors.background, color: badgeColors.text }}
            >
              {heroTitle}
            </span>
          </div>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-8 uppercase">
            {heroSubtitle}
          </h1>
          <QuoteButton variant="hero" />
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div key={index} className={index < sections.length - 1 ? "mb-12" : ""}>
              <h2 className="font-heading text-3xl font-bold text-background-blue mb-6">
                {section.heading}
              </h2>
              <div
                className="text-gray-700 leading-relaxed mb-4"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
