import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Winston\'s Pharmacy website and services. Read our terms governing the use of our compounding pharmacy platform and authenticity verification tools.',
};

export default function TermsPage() {
  const lastUpdated = 'November 27, 2024';

  return (
    <>
      <PageHeader
        title="Terms of Use"
        description="Please read these terms carefully before using our website and services."
      />
      <section className="py-16">
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-sm text-secondary-500">
              Last Updated: {lastUpdated}
            </p>

            {/* Introduction */}
            <h2>1. Introduction and Acceptance</h2>
            <p>
              Welcome to Winston&apos;s Pharmacy. These Terms of Use (&quot;Terms&quot;) govern your access to and use of
              the Winston&apos;s Pharmacy website located at {siteConfig.url} (the &quot;Website&quot;), including all
              content, features, and services offered through the Website, such as our product information
              pages, authenticity verification tools, and contact forms.
            </p>
            <p>
              Winston&apos;s Pharmacy is a licensed compounding pharmacy and FDA-registered 503B outsourcing
              facility headquartered in Houston, Texas. We specialize in providing high-quality compounded
              pharmaceutical preparations, including but not limited to Semaglutide, Tirzepatide, NAD+,
              and Sermorelin formulations.
            </p>
            <p>
              By accessing or using our Website, you acknowledge that you have read, understood, and agree
              to be bound by these Terms. If you do not agree to these Terms, you must not access or use
              our Website. These Terms constitute a legally binding agreement between you and Winston&apos;s
              Pharmacy.
            </p>

            {/* Eligibility */}
            <h2>2. Eligibility and Target Audience</h2>
            <p>
              Our Website and services are intended for use by:
            </p>
            <ul>
              <li>
                <strong>Healthcare Providers:</strong> Licensed physicians, nurse practitioners, physician
                assistants, and other authorized prescribers seeking information about our compounded
                pharmaceutical products.
              </li>
              <li>
                <strong>Pharmacies:</strong> Licensed pharmacy professionals and pharmacy purchasing
                representatives interested in our 503B outsourcing services.
              </li>
              <li>
                <strong>Patients:</strong> Individuals with valid prescriptions seeking information about
                compounded medications prescribed by their healthcare providers.
              </li>
              <li>
                <strong>General Public:</strong> Individuals seeking educational information about
                pharmaceutical compounding and our company.
              </li>
            </ul>
            <p>
              You must be at least 18 years of age to use our Website. By using the Website, you represent
              and warrant that you are at least 18 years old and have the legal capacity to enter into
              these Terms.
            </p>

            {/* Permitted Use */}
            <h2>3. Permitted Use of the Platform</h2>
            <h3>3.1 General Use</h3>
            <p>
              You may use our Website for the following purposes:
            </p>
            <ul>
              <li>Browsing and accessing information about our compounded pharmaceutical products</li>
              <li>Learning about the differences between 503A and 503B compounding facilities</li>
              <li>Contacting our team for inquiries related to our products and services</li>
              <li>Accessing educational content about pharmaceutical compounding</li>
              <li>Verifying product authenticity using our verification tools (when available)</li>
            </ul>

            <h3>3.2 Product Authenticity Verification</h3>
            <p>
              Winston&apos;s Pharmacy may provide QR code-based authenticity verification tools to help verify
              the origin and legitimacy of our pharmaceutical products. When using these verification
              features, you agree to:
            </p>
            <ul>
              <li>
                Use the verification tools solely for their intended purpose of confirming product
                authenticity
              </li>
              <li>
                Understand that verification results are based on the information available in our
                systems at the time of verification
              </li>
              <li>
                Not attempt to manipulate, replicate, or tamper with QR codes or verification systems
              </li>
              <li>
                Report any suspicious products or verification anomalies to our customer service team
              </li>
            </ul>

            <h3>3.3 Limitations of Verification Tools</h3>
            <p>
              While our authenticity verification tools are designed to provide accurate information,
              you acknowledge that:
            </p>
            <ul>
              <li>
                No verification system is infallible, and technical limitations may occasionally
                affect results
              </li>
              <li>
                A successful verification confirms the product originated from Winston&apos;s Pharmacy
                but does not guarantee the product has been properly stored or handled after leaving
                our facility
              </li>
              <li>
                You should always consult with a healthcare professional regarding the use of any
                pharmaceutical product
              </li>
            </ul>

            {/* Company Rights and Responsibilities */}
            <h2>4. Company Rights and Responsibilities</h2>
            <h3>4.1 Information Accuracy</h3>
            <p>
              Winston&apos;s Pharmacy strives to provide accurate, up-to-date information on our Website
              regarding our products, services, and company. However:
            </p>
            <ul>
              <li>
                Product information is provided for educational and informational purposes only and
                should not be considered medical advice
              </li>
              <li>
                Pricing, availability, and product specifications are subject to change without notice
              </li>
              <li>
                We reserve the right to correct any errors, inaccuracies, or omissions and to change
                or update information at any time
              </li>
            </ul>

            <h3>4.2 Website Operations</h3>
            <p>
              We reserve the right to:
            </p>
            <ul>
              <li>Modify, suspend, or discontinue any aspect of the Website at any time</li>
              <li>Restrict access to certain features or services</li>
              <li>Implement maintenance windows that may temporarily affect Website availability</li>
              <li>Update or modify the functionality of our verification tools</li>
            </ul>

            <h3>4.3 Technical Limitations</h3>
            <p>
              While we employ industry-standard practices to maintain Website performance and security,
              we do not guarantee uninterrupted, error-free, or completely secure operation of the
              Website or its features.
            </p>

            {/* User Responsibilities */}
            <h2>5. User Rights and Responsibilities</h2>
            <h3>5.1 Proper Conduct</h3>
            <p>
              When using our Website, you agree to:
            </p>
            <ul>
              <li>Use the Website only for lawful purposes and in accordance with these Terms</li>
              <li>Provide accurate and complete information when submitting forms or requests</li>
              <li>Maintain the confidentiality of any account credentials (if applicable)</li>
              <li>Respect the intellectual property rights of Winston&apos;s Pharmacy and third parties</li>
            </ul>

            <h3>5.2 Appropriate Use of Information</h3>
            <p>
              Information obtained from our Website should be used responsibly:
            </p>
            <ul>
              <li>
                Product information is intended to supplement, not replace, professional medical advice
              </li>
              <li>
                Healthcare providers should exercise independent professional judgment when prescribing
                compounded medications
              </li>
              <li>
                Patients should not modify their treatment based solely on Website information without
                consulting their healthcare provider
              </li>
            </ul>

            <h3>5.3 Prohibited Activities</h3>
            <p>
              You agree not to:
            </p>
            <ul>
              <li>
                Attempt to access unauthorized areas of the Website, server, or connected systems
              </li>
              <li>
                Interfere with or disrupt the Website&apos;s operation or the servers and networks
                connected to it
              </li>
              <li>
                Use automated systems (bots, scrapers, etc.) to access the Website without our
                express written permission
              </li>
              <li>
                Attempt to reverse engineer, decompile, or disassemble any portion of the Website
                or its underlying technology
              </li>
              <li>
                Reproduce, counterfeit, or tamper with QR codes, verification systems, or any
                product authentication features
              </li>
              <li>
                Use the Website for any fraudulent purpose or to facilitate illegal activities
              </li>
              <li>
                Impersonate any person or entity or misrepresent your affiliation with any person
                or entity
              </li>
              <li>
                Upload or transmit viruses, malware, or other malicious code
              </li>
              <li>
                Collect or harvest any information from the Website for unauthorized purposes
              </li>
            </ul>

            {/* Intellectual Property */}
            <h2>6. Intellectual Property</h2>
            <h3>6.1 Ownership</h3>
            <p>
              All content on the Website, including but not limited to text, graphics, logos, images,
              photographs, videos, audio clips, data compilations, software, and the overall design
              and arrangement of the Website (collectively, &quot;Content&quot;), is the property of Winston&apos;s
              Pharmacy or its licensors and is protected by United States and international copyright,
              trademark, patent, and other intellectual property laws.
            </p>

            <h3>6.2 Trademarks</h3>
            <p>
              The Winston&apos;s Pharmacy name, logo, and all related names, logos, product and service
              names, designs, and slogans are trademarks of Winston&apos;s Pharmacy or its affiliates.
              You may not use these marks without our prior written permission.
            </p>

            <h3>6.3 Limited License</h3>
            <p>
              Subject to your compliance with these Terms, Winston&apos;s Pharmacy grants you a limited,
              non-exclusive, non-transferable, revocable license to access and use the Website for
              its intended purposes. This license does not include:
            </p>
            <ul>
              <li>Any resale or commercial use of the Website or its Content</li>
              <li>Any derivative use of the Website or its Content</li>
              <li>Any downloading or copying of account information for any third party&apos;s benefit</li>
              <li>Any use of data mining, robots, or similar data gathering tools</li>
            </ul>

            {/* Disclaimers */}
            <h2>7. Disclaimers and Limitations of Liability</h2>
            <h3>7.1 No Medical Advice</h3>
            <p>
              <strong>The content on this Website is provided for informational purposes only and
              does not constitute medical advice, diagnosis, or treatment.</strong> Always seek the
              advice of your physician or other qualified healthcare provider with any questions
              you may have regarding a medical condition or treatment.
            </p>

            <h3>7.2 Pharmaceutical Product Disclaimers</h3>
            <p>
              Compounded medications are customized pharmaceutical preparations that are not FDA-approved
              products. While Winston&apos;s Pharmacy operates as an FDA-registered 503B outsourcing facility
              and adheres to current Good Manufacturing Practices (cGMP), you understand that:
            </p>
            <ul>
              <li>
                Compounded preparations are made based on a patient-specific prescription or in
                anticipation of prescriptions (for 503B facilities)
              </li>
              <li>
                The safety, efficacy, and quality of compounded preparations depend on proper
                prescribing, storage, and administration
              </li>
              <li>
                Individual results may vary, and not all patients may be appropriate candidates
                for compounded medications
              </li>
            </ul>

            <h3>7.3 Verification Tool Disclaimers</h3>
            <p>
              Our product authenticity verification tools are provided &quot;as is&quot; and &quot;as available.&quot;
              Winston&apos;s Pharmacy makes no warranties, express or implied, regarding:
            </p>
            <ul>
              <li>The accuracy, completeness, or reliability of verification results</li>
              <li>The uninterrupted availability of verification services</li>
              <li>
                The condition, storage, or handling of products after they leave our facility
              </li>
            </ul>

            <h3>7.4 Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by applicable law, Winston&apos;s Pharmacy, its officers,
              directors, employees, agents, affiliates, and licensors shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including but not
              limited to loss of profits, data, use, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your access to or use of (or inability to access or use) the Website</li>
              <li>Any conduct or content of any third party on the Website</li>
              <li>Any content obtained from the Website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p>
              In no event shall our total liability to you for all claims exceed the amount you
              paid us, if any, for accessing the Website during the twelve (12) months preceding
              the claim.
            </p>

            <h3>7.5 Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless Winston&apos;s Pharmacy and its officers,
              directors, employees, agents, and affiliates from and against any claims, liabilities,
              damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or
              in any way connected with your access to or use of the Website or your violation of
              these Terms.
            </p>

            {/* Third-Party Links */}
            <h2>8. Third-Party Links and Content</h2>
            <p>
              Our Website may contain links to third-party websites, services, or resources that are
              not owned or controlled by Winston&apos;s Pharmacy. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of any third-party
              websites or services. You acknowledge and agree that Winston&apos;s Pharmacy shall not be
              responsible or liable for any damage or loss caused by your use of or reliance on any
              such content, goods, or services.
            </p>

            {/* Updates to Terms */}
            <h2>9. Updates to These Terms</h2>
            <p>
              Winston&apos;s Pharmacy reserves the right to modify or replace these Terms at any time at
              our sole discretion. If we make material changes to these Terms, we will notify you by:
            </p>
            <ul>
              <li>Updating the &quot;Last Updated&quot; date at the top of these Terms</li>
              <li>Posting a notice on our Website</li>
              <li>Other means we deem appropriate under the circumstances</li>
            </ul>
            <p>
              Your continued use of the Website after any changes to these Terms constitutes your
              acceptance of such changes. We encourage you to review these Terms periodically.
            </p>

            {/* Governing Law */}
            <h2>10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Texas, United States of America, without regard to its conflict of law
              provisions.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or your use of the Website
              shall be subject to the exclusive jurisdiction of the state and federal courts
              located in Harris County, Texas. You hereby consent to the personal jurisdiction
              of such courts and waive any objection to venue in such courts.
            </p>

            {/* Severability */}
            <h2>11. Severability and Waiver</h2>
            <p>
              If any provision of these Terms is held to be invalid, illegal, or unenforceable,
              the remaining provisions shall continue in full force and effect. The failure of
              Winston&apos;s Pharmacy to enforce any right or provision of these Terms shall not
              constitute a waiver of such right or provision.
            </p>

            {/* Entire Agreement */}
            <h2>12. Entire Agreement</h2>
            <p>
              These Terms, together with our{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                Privacy Policy
              </Link>
              , constitute the entire agreement between you and Winston&apos;s Pharmacy regarding your
              use of the Website and supersede all prior and contemporaneous agreements, proposals,
              or representations, written or oral, concerning the subject matter herein.
            </p>

            {/* Contact */}
            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{' '}
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <strong>Address:</strong> {siteConfig.contact.address}
              </li>
            </ul>
            <p>
              For urgent matters regarding product safety or authenticity concerns, please contact
              us immediately at the phone number listed above.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
