'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Can you provide references from past clients?',
      answer: 'Absolutely, we can provide references from past clients. Additionally, you can read the reviews and testimonials from our satisfied customers on our website. If you would like to speak with specific past clients, we can provide their contact information upon request.',
    },
    {
      question: 'What sets you apart from other contractors in the area?',
      answer: 'We distinguish ourselves through meticulous attention to detail, a dedication to quality, and a personalized approach. We prioritize client communication to seamlessly bring their vision to life.',
    },
    {
      question: 'Is there a fee for a consultation or estimate/quote?',
      answer: 'No, we offer complimentary estimates to all prospective clients. We believe in providing transparent pricing and helping you understand the scope and cost of your project before making any commitments.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - FAQ Accordion */}
          <div>
            <div className="inline-block mb-4">
              <span className="inline-block bg-[#1e3a5f] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                Have Questions?
              </span>
            </div>
            <h2 className="font-heading mb-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
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

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="sticky top-8 h-96 overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our professional services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
