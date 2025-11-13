'use client';
import { getBadgeColorsInverted } from '@/lib/colors';

import Link from 'next/link';
import GoogleReviewsWidget from './GoogleReviewsWidget';

export default function Reviews() {
  const badgeColorsInverted = getBadgeColorsInverted();
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
            <span className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: badgeColorsInverted.background, color: badgeColorsInverted.text }}>
              Client Testimonials
            </span>
          </div>
          <h2 className="font-heading mb-6 text-4xl font-bold tracking-tight sm:text-5xl">REVIEWS</h2>
          <Link
            href="/reviews"
            className="font-heading inline-block rounded-md bg-primary px-8 py-3 font-bold uppercase text-sm transition-colors hover-dark shadow-lg"
          >
            See All Reviews
          </Link>
        </div>

        {/* Google Reviews Widget */}
        <GoogleReviewsWidget layout="carousel" theme="dark" />
      </div>
    </section>
  );
}
