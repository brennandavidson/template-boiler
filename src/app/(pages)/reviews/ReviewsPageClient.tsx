'use client';

import { PageWrapper } from '@/components/layout/PageWrapper';
import GoogleReviewsWidget from '@/components/sections/testimonials/GoogleReviewsWidget';
import { getBadgeColors } from '@/lib/colors';

export default function ReviewsPageClient() {
  const badgeColors = getBadgeColors();

  return (
    <PageWrapper className="!pt-36 sm:!pt-40 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span
              className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: badgeColors.background, color: badgeColors.text }}
            >
              Client Testimonials
            </span>
          </div>
          <h1 className="font-heading mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-background-blue">
            CUSTOMER REVIEWS
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            See what our satisfied customers have to say about our services and quality of work.
          </p>
        </div>

        {/* Google Reviews Widget */}
        <GoogleReviewsWidget layout="grid" theme="light" />
      </div>
    </PageWrapper>
  );
}
