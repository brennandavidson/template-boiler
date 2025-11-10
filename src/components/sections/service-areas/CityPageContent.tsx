'use client';

import { useQuoteModal } from '@/contexts/QuoteModalContext';

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
  const { openModal } = useQuoteModal();
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
            {heroTitle}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {heroSubtitle}
          </p>
          <button
            onClick={openModal}
            className="font-heading bg-primary hover-dark text-white px-8 py-4 rounded-md font-bold uppercase text-sm transition-colors shadow-lg"
          >
            Get Free Quote
          </button>
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
