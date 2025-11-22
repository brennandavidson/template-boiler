interface ContentSection {
  heading: string;
  content: string;
}

interface ServiceContentProps {
  sections: ContentSection[];
}

export default function ServiceContent({ sections }: ServiceContentProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                {section.heading}
              </h2>
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
