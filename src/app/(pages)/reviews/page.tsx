// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('reviews');

import React from 'react';
import ReviewsPageClient from './ReviewsPageClient';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function ReviewsPage() {
  return (
    <>
      <HeaderSetter hasHeroImage={false} />
      <ReviewsPageClient />
    </>
  );
}
