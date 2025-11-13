import { getSiteConfigProcess } from '@/lib/get-site-config';
import { getBadgeColorsInverted } from '@/lib/colors';

export default function OurProcess() {
  const badgeColorsInverted = getBadgeColorsInverted();
  // Load configuration
  const processConfig = getSiteConfigProcess();

  return (
    <section className="relative bg-background-blue py-16 text-white sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: badgeColorsInverted.background, color: badgeColorsInverted.text }}>
              {processConfig.sectionBadge}
            </span>
          </div>
          <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {processConfig.sectionHeading}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            {processConfig.description}
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-8">
            {processConfig.steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connecting Line */}
                {index < processConfig.steps.length - 1 && (
                  <div className="absolute left-1/2 top-16 h-0.5 w-full bg-white/30" style={{ zIndex: 0 }} />
                )}

                {/* Circle with Number */}
                <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-xl" style={{ zIndex: 1 }}>
                  <span className="text-5xl font-bold text-background-blue">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {processConfig.steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              {/* Circle with Number */}
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-lg mb-4">
                <span className="text-3xl font-bold text-background-blue">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
