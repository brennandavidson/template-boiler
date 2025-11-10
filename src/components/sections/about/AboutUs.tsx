import Image from 'next/image';
import { getSiteConfigAboutUs } from '@/lib/get-site-config';

export default function AboutUs() {
  // Load configuration
  const aboutUsConfig = getSiteConfigAboutUs();

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-6">
              {/* Eyebrow label */}
              <div className="inline-block mb-4">
                <span className="inline-block bg-[#1e3a5f] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                  {aboutUsConfig.sectionBadge}
                </span>
              </div>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {aboutUsConfig.sectionHeading}
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed [&>p]:!text-gray-800">
              {aboutUsConfig.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats - Left Aligned */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-left">
                <div className="font-heading text-4xl font-bold text-background-blue">
                  {aboutUsConfig.stats.yearsExperience.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {aboutUsConfig.stats.yearsExperience.label}
                </div>
              </div>
              <div className="text-left">
                <div className="font-heading text-4xl font-bold text-background-blue">
                  {aboutUsConfig.stats.projectsCompleted.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {aboutUsConfig.stats.projectsCompleted.label}
                </div>
              </div>
              <div className="text-left">
                <div className="font-heading text-4xl font-bold text-background-blue">
                  {aboutUsConfig.stats.satisfactionRate.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {aboutUsConfig.stats.satisfactionRate.label}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl lg:h-[600px]">
              <Image
                src={aboutUsConfig.image.src}
                alt={aboutUsConfig.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
