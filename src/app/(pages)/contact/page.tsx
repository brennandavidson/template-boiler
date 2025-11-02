// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('contact');

import React from 'react';
import ContactPageClient from './ContactPageClient';
import { HeaderSetter } from '@/components/layout/HeaderSetter';

export default function ContactPage() {
  return (
    <>
      <HeaderSetter hasHeroImage={false} />
      <ContactPageClient />
    </>
  );
}
