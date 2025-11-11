// THIS IS REQUIRED FOR SEO CONFIG - DO NOT REMOVE
// Every page must have this metadata export to load its seo-config.json
import { generateStaticMetadata } from '@/lib/seo/generate-static-metadata';
export const metadata = generateStaticMetadata('terms-of-service');

import Link from "next/link";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { getSiteConfigBusiness, getSiteConfigContact, getSiteConfigServices } from '@/lib/get-site-config';

export default function TermsOfService() {
  const business = getSiteConfigBusiness();
  const contact = getSiteConfigContact();
  const services = getSiteConfigServices();

  return (
    <PageWrapper>
      {/* LEGAL NOTICE: This is a template terms of service. Review and customize this document
          with legal counsel before publishing. Ensure compliance with applicable laws and
          regulations based on your business operations and customer base. */}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Admin Warning Banner */}
          <div className="mb-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
            <p className="font-semibold">⚠️ Template Terms of Service</p>
            <p className="text-sm mt-1">This is a template. Review and customize with legal counsel before publishing.</p>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using services provided by {business.name} ("Company," "we," "our," or "us"), you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms").
              </p>
              <p className="text-gray-700">
                If you do not agree to these Terms, you may not access or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                {business.name} provides the following services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {services.items.slice(0, 4).map((service, index) => (
                  <li key={index}>{service.title}: {service.description}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility</h2>
              <p className="text-gray-700 mb-4">
                You must be at least 18 years old to use our services. By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>Your use of our services complies with all applicable laws and regulations</li>
                <li>All information you provide is accurate and truthful</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Terms</h2>
              <p className="text-gray-700 mb-4">
                When you engage our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information about your project needs</li>
                <li>Pay all fees as agreed upon in service contracts</li>
                <li>Notify us immediately of any issues or concerns</li>
                <li>Accept responsibility for access to your property during service</li>
                <li>Maintain clear communication throughout the service period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Acceptable Use</h2>
              <p className="text-gray-700 mb-4">You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the App's functionality</li>
                <li>Upload malicious code or harmful content</li>
                <li>Impersonate others or provide false information</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Subscription and Payment</h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Free Trial</h3>
              <p className="text-gray-700 mb-4">
                We may offer a free trial period for new users. At the end of the trial period, your subscription will automatically convert to a paid subscription unless you cancel.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Paid Subscriptions</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Subscription fees are charged in advance on a recurring basis</li>
                <li>Payments are processed through your device's app store</li>
                <li>All fees are non-refundable except as required by law</li>
                <li>We may change subscription prices with 30 days' notice</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cancellation</h3>
              <p className="text-gray-700">
                You may cancel your subscription at any time through your device's app store settings. Cancellation will take effect at the end of your current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Valiance Media and all related content, features, and functionality are and will remain the exclusive property of Valiance Media LLC and its licensors. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Software code and algorithms</li>
                <li>AI models and training data</li>
                <li>Content, text, graphics, and user interfaces</li>
                <li>Trademarks, service marks, and logos</li>
                <li>Any improvements or modifications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. User Content</h2>
              <p className="text-gray-700 mb-4">
                You retain ownership of any content you submit to Valiance Media ("User Content"). By submitting User Content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display your content solely for the purpose of providing and improving our services.
              </p>
              <p className="text-gray-700">
                You represent that your User Content does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy</h2>
              <p className="text-gray-700">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of Valiance Media, to understand our practices regarding the collection and use of your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Disclaimers</h2>
              <p className="text-gray-700 mb-4">
                Valiance Media is provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Merchantability and fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Accuracy, completeness, or reliability of content</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>Important:</strong> Valiance Media provides software solutions and digital services. All products and services are provided "as is" and results may vary based on implementation and usage. Professional consultation may be required for complex implementations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Valiance Media LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Loss of profits, data, use, or goodwill</li>
                <li>Service interruption or security breaches</li>
                <li>Damages resulting from use of third-party services</li>
                <li>Any other intangible losses</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Indemnification</h2>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless Valiance Media LLC and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of Valiance Media or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account and access to Valiance Media at any time, without prior notice, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Extended inactivity</li>
                <li>Technical or business reasons</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Upon termination, your right to use Valiance Media will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles. Any legal action or proceeding shall be brought exclusively in the courts of [Your Jurisdiction].
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of Valiance Media after changes become effective constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Valiance Media LLC</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: legal@example.com
                </p>
                <p className="text-gray-700">
                  Address: [Your Business Address]
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
