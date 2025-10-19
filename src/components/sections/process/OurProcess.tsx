export default function OurProcess() {
  const steps = [
    {
      number: 1,
      title: 'Free Consultation',
      description: 'Schedule a free consultation to discuss your project needs and goals.',
    },
    {
      number: 2,
      title: 'Estimation & Proposal',
      description: 'Receive a detailed estimate and proposal tailored to your requirements.',
    },
    {
      number: 3,
      title: 'We Do the Work',
      description: 'Our expert team completes your project with precision and care.',
    },
    {
      number: 4,
      title: 'Final Inspection',
      description: 'We conduct a thorough inspection to ensure quality and satisfaction.',
    },
    {
      number: 5,
      title: 'Payment & Completion',
      description: 'Final payment and project handoff with full documentation.',
    },
  ];

  return (
    <section className="relative bg-background-blue py-16 text-white sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block bg-white text-[#1e3a5f] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              How We Work
            </span>
          </div>
          <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight sm:text-5xl">OUR PROCESS</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Our process is simple and only contains a few easy steps
          </p>
        </div>

        {/* Process Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
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
          {steps.map((step) => (
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
