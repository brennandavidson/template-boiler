'use client';

import { useState } from 'react';
import { PageWrapper } from '@/components/layout/PageWrapper';
import Reviews from '@/components/sections/testimonials/Reviews';
import ServiceAreas from '@/components/sections/service-areas/ServiceAreas';

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: '',
    agreed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <PageWrapper className="pb-16 sm:pb-20 bg-gray-50">
        <section className="min-h-[80vh] flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Column - Contact Info */}
              <div className="flex flex-col justify-center">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  CONTACT US FOR A FREE QUOTE
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                  Contact us by filling in the form or by using any of the methods below and we'll get back to you within 24 hours
                </p>

                {/* Contact Buttons */}
                <div className="space-y-4 max-w-xl">
                  <a
                    href="mailto:info@yourcompany.com"
                    className="font-heading w-full bg-primary hover:bg-primary-dark text-white px-8 py-5 rounded-lg font-bold uppercase text-sm sm:text-base transition-colors shadow-md flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    EMAIL: INFO@YOURCOMPANY.COM
                  </a>

                  <a
                    href="tel:5551234567"
                    className="font-heading w-full bg-primary hover:bg-primary-dark text-white px-8 py-5 rounded-lg font-bold uppercase text-sm sm:text-base transition-colors shadow-md flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    PHONE: (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="w-full max-w-xl rounded-2xl bg-background-blue p-10 sm:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                  <h2 className="font-heading mb-8 text-3xl sm:text-4xl font-bold text-white text-center">
                    GET A FREE QUOTE
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                        className="w-full rounded-lg border-2 border-white/20 bg-white px-5 py-4 text-lg text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(808) 555-1234"
                        required
                        className="w-full rounded-lg border-2 border-white/20 bg-white px-5 py-4 text-lg text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                        Short message about your needs *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                        required
                        rows={5}
                        className="w-full rounded-lg border-2 border-white/20 bg-white px-5 py-4 text-lg text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreed"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        required
                        className="mt-1 h-5 w-5 rounded border-white/30 bg-white/10 text-primary focus:ring-primary focus:ring-offset-background-blue"
                      />
                      <label htmlFor="agreed" className="ml-3 text-sm text-white/90 leading-relaxed">
                        I agree to{' '}
                        <a href="/terms-of-service" className="text-primary hover:underline font-medium">
                          terms & conditions
                        </a>{' '}
                        provided by the company. By providing my phone number, I agree to receive text messages from the business.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="font-heading w-full rounded-lg bg-primary px-8 py-5 text-lg font-bold uppercase text-white shadow-lg transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-blue"
                    >
                      SEND
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>

      {/* Reviews Section */}
      <Reviews />

      {/* Service Areas Section */}
      <ServiceAreas />
    </>
  );
}
