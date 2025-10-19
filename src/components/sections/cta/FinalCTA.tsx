import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative bg-gray-900 py-16 text-white sm:py-24">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          READY TO TAKE THE NEXT STEP?
        </h2>
        <p className="font-heading mb-8 text-2xl font-bold text-primary sm:text-3xl">
          GET A FREE QUOTE TODAY!
        </p>

        <Link
          href="#hero"
          className="font-heading inline-block rounded-md bg-primary px-10 py-4 text-lg font-bold uppercase transition-all hover:bg-primary-dark hover:scale-105"
        >
          Get a Free Quote
        </Link>
      </div>
    </section>
  );
}
