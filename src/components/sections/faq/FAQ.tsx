'use client';
import { getBadgeColors } from '@/lib/colors';

import { useState } from 'react';
import { getSiteConfigFAQ } from '@/lib/get-site-config';

export default function FAQ() {
  const badgeColors = getBadgeColors();
  // Load configuration
  const faqConfig = getSiteConfigFAQ();

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="inline-block mb-4">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: badgeColors.background, color: badgeColors.text }}>
            {faqConfig.sectionBadge}
          </span>
        </div>
        <h2 className="font-heading mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {faqConfig.sectionHeading}
        </h2>

        <div className="space-y-4">
          {faqConfig.items.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
              >
                <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="border-t border-gray-200 px-6 py-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
