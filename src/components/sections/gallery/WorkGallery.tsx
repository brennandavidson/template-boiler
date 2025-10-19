import Link from 'next/link';
import Image from 'next/image';

export default function WorkGallery() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Completed project showcasing our work',
    },
    {
      id: 2,
      title: 'Project 2',
      imageSrc: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional installation work',
    },
    {
      id: 3,
      title: 'Project 3',
      imageSrc: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Quality renovation project',
    },
    {
      id: 4,
      title: 'Project 4',
      imageSrc: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Beautiful design work',
    },
    {
      id: 5,
      title: 'Project 5',
      imageSrc: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Expert craftsmanship example',
    },
    {
      id: 6,
      title: 'Project 6',
      imageSrc: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'High-quality service delivery',
    },
    {
      id: 7,
      title: 'Project 7',
      imageSrc: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Professional project completion',
    },
    {
      id: 8,
      title: 'Project 8',
      imageSrc: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Exceptional results showcase',
    },
  ];

  return (
    <section className="bg-background-blue py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">SEE OUR WORK</h2>
            <Link
              href="/gallery"
              className="font-heading inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold uppercase text-background-blue transition-colors hover:bg-gray-100"
            >
              <span>See All Photos</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-900 shadow-lg transition-transform hover:scale-105"
            >
              <Image
                src={project.imageSrc}
                alt={project.alt}
                fill
                className="object-cover transition-opacity group-hover:opacity-75"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
