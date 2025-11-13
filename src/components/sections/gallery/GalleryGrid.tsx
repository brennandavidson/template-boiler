'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getSiteConfig } from '@/lib/get-site-config';

interface GalleryImage {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  category?: string;
  featured?: boolean;
}

interface GalleryGridProps {
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  {
    id: '1',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury backyard swimming pool',
    title: 'Luxury backyard swimming pool'
  },
  {
    id: '2',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Modern pool design',
    title: 'Modern pool design'
  },
  {
    id: '3',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool with deck chairs',
    title: 'Pool with deck chairs'
  },
  {
    id: '4',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Resort style pool',
    title: 'Resort style pool'
  },
  {
    id: '5',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Outdoor pool area',
    title: 'Outdoor pool area'
  },
  {
    id: '6',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool with waterfall feature',
    title: 'Pool with waterfall feature'
  },
  {
    id: '7',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Infinity pool design',
    title: 'Infinity pool design'
  },
  {
    id: '8',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool with spa area',
    title: 'Pool with spa area'
  },
  {
    id: '9',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Custom pool installation',
    title: 'Custom pool installation'
  },
  {
    id: '10',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Backyard pool renovation',
    title: 'Backyard pool renovation'
  },
  {
    id: '11',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Contemporary pool style',
    title: 'Contemporary pool style'
  },
  {
    id: '12',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool deck furniture',
    title: 'Pool deck furniture'
  },
  {
    id: '13',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Elegant pool design',
    title: 'Elegant pool design'
  },
  {
    id: '14',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool landscaping project',
    title: 'Pool landscaping project'
  },
  {
    id: '15',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Water feature installation',
    title: 'Water feature installation'
  },
  {
    id: '16',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury infinity pool',
    title: 'Luxury infinity pool'
  },
  {
    id: '17',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool and hot tub combo',
    title: 'Pool and hot tub combo'
  },
  {
    id: '18',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Professional pool work',
    title: 'Professional pool work'
  },
  {
    id: '19',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool maintenance project',
    title: 'Pool maintenance project'
  },
  {
    id: '20',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Modern swimming pool',
    title: 'Modern swimming pool'
  },
  {
    id: '21',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Pool deck installation',
    title: 'Pool deck installation'
  },
  {
    id: '22',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Beautiful pool area',
    title: 'Beautiful pool area'
  },
  {
    id: '23',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Outdoor pool construction',
    title: 'Outdoor pool construction'
  },
  {
    id: '24',
    imageSrc: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Custom water features',
    title: 'Custom water features'
  },
];

export default function GalleryGrid({ images = defaultImages }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <section className="bg-background-blue py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {images.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <Image
                  src={image.imageSrc}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 text-white hover:text-primary transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-h-[90vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.imageSrc}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="h-auto w-auto max-h-[90vh] max-w-full rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
