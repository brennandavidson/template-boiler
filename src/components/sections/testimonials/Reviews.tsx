import Link from 'next/link';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export default function Reviews() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Local Area',
      rating: 5,
      text: 'Absolutely fantastic service! The team was professional, punctual, and the quality of work exceeded our expectations. Highly recommend to anyone looking for reliable contractors.',
      date: '2 weeks ago',
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Local Area',
      rating: 5,
      text: 'From start to finish, the process was seamless. They listened to our needs, provided expert advice, and delivered exceptional results. Worth every penny!',
      date: '1 month ago',
    },
    {
      id: 3,
      name: 'Jennifer Martinez',
      location: 'Local Area',
      rating: 5,
      text: 'Outstanding craftsmanship and attention to detail. The crew was respectful of our property and cleaned up thoroughly each day. We couldn\'t be happier with the outcome!',
      date: '3 weeks ago',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 py-12 text-white sm:py-16">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block bg-white text-[#1e3a5f] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              Client Testimonials
            </span>
          </div>
          <h2 className="font-heading mb-6 text-4xl font-bold tracking-tight sm:text-5xl">REVIEWS</h2>
          <Link
            href="/review"
            className="font-heading inline-block rounded-md bg-primary px-8 py-3 font-bold uppercase text-sm transition-colors hover:bg-primary-dark shadow-lg"
          >
            Leave Us a Review
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-xl transition-transform hover:scale-105"
            >
              {/* Stars */}
              <div className="mb-4 flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-4 text-gray-700">{testimonial.text}</p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="mt-1 text-xs text-gray-400">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
