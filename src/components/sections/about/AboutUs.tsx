import Image from 'next/image';

export default function AboutUs() {
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
                  Our Story
                </span>
              </div>
              <h2 className="font-heading text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                ABOUT US
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed [&>p]:!text-gray-800">
              <p>
                With over 15 years of expertise, our company specializes in providing exceptional
                installation, renovation, and maintenance services to homeowners and businesses in
                the local area.
              </p>
              <p>
                Known for our meticulous attention to detail and commitment to quality craftsmanship,
                we've built a reputation as a trusted name in the community. Our team of experienced
                professionals brings knowledge, skill, and dedication to every project.
              </p>
              <p>
                We take pride in delivering superior results that exceed expectations, while
                maintaining the highest standards of customer satisfaction and service excellence.
              </p>
            </div>

            {/* Stats - Left Aligned */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-left">
                <div className="font-heading text-4xl font-bold text-background-blue">15+</div>
                <div className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-left">
                <div className="font-heading text-4xl font-bold text-background-blue">500+</div>
                <div className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">Projects Completed</div>
              </div>
              <div className="text-left">
                <div className="font-heading text-4xl font-bold text-background-blue">100%</div>
                <div className="mt-2 text-sm font-semibold text-gray-600 uppercase tracking-wide">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl lg:h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Professional contractor services"
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
