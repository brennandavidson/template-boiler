interface CityPageContentProps {
  cityName: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introContent: string;
  servicesTitle: string;
  servicesContent: string;
  whyChooseTitle: string;
  whyChooseContent: string;
  backgroundImage?: string;
}

export default function CityPageContent({
  cityName,
  heroTitle,
  heroSubtitle,
  introTitle,
  introContent,
  servicesTitle,
  servicesContent,
  whyChooseTitle,
  whyChooseContent,
  backgroundImage = 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
}: CityPageContentProps) {
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
          <button className="font-heading bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-bold uppercase text-sm transition-colors shadow-lg">
            Get Free Quote
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Section 1 */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-background-blue mb-6">
              {introTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {introContent}
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold text-background-blue mb-6">
              {servicesTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {servicesContent}
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-background-blue mb-6">
              {whyChooseTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {whyChooseContent}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
