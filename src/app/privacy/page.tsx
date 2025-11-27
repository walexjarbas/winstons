import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Winston\'s Pharmacy. Learn how we collect, use, and protect your personal information when you use our compounding pharmacy website and services.',
};

export default function PrivacyPage() {
  const lastUpdated = 'November 27, 2024';
  const effectiveDate = 'November 27, 2024';

  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />
      <section className="py-16">
        <Container>
          <div className="prose prose-lg mx-auto max-w-4xl">
            <p className="text-sm text-secondary-500">
              Last Updated: {lastUpdated} | Effective Date: {effectiveDate}
            </p>

            {/* Introduction */}
            <h2>1. Introduction and Our Commitment to Privacy</h2>
            <p>
              Winston&apos;s Pharmacy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy
              and security of your personal information. This Privacy Policy describes how we collect,
              use, disclose, and safeguard your information when you visit our website at{' '}
              {siteConfig.url} (the &quot;Website&quot;), use our product authenticity verification tools,
              or interact with us through our contact forms and services.
            </p>
            <p>
              As a licensed compounding pharmacy and FDA-registered 503B outsourcing facility, we
              understand the sensitivity of health-related information and take our responsibility
              to protect your privacy seriously. This policy applies to information collected through
              our Website and does not cover information collected through other means, such as
              in-person pharmacy services or prescription processing, which are governed by separate
              privacy notices including our HIPAA Notice of Privacy Practices.
            </p>
            <p>
              By using our Website, you consent to the data practices described in this Privacy
              Policy. If you do not agree with the practices described herein, please do not use
              our Website.
            </p>

            {/* Information We Collect */}
            <h2>2. Information We Collect</h2>
            <p>
              We collect information in several ways when you interact with our Website. The types
              of information we collect depend on how you use our services.
            </p>

            <h3>2.1 Browsing and Technical Data</h3>
            <p>
              When you visit our Website, we automatically collect certain technical information,
              including:
            </p>
            <ul>
              <li>
                <strong>Device Information:</strong> Type of device, operating system, browser
                type and version, screen resolution, and device identifiers
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked,
                referring website, and navigation patterns
              </li>
              <li>
                <strong>Network Information:</strong> IP address, internet service provider, and
                general geographic location (city/region level)
              </li>
              <li>
                <strong>Performance Data:</strong> Page load times, errors encountered, and
                technical diagnostics
              </li>
            </ul>
            <p>
              This information is collected through cookies, web beacons, and similar tracking
              technologies, as described in Section 7 below.
            </p>

            <h3>2.2 Product Authenticity Verification Data</h3>
            <p>
              When you use our QR code-based product authenticity verification tools, we collect:
            </p>
            <ul>
              <li>
                <strong>Verification Code Data:</strong> The unique product identifier or QR code
                scanned. This is a technical product code and does not contain personal health
                information about any individual patient.
              </li>
              <li>
                <strong>Verification Metadata:</strong> Date, time, and approximate location of
                the verification request
              </li>
              <li>
                <strong>Device Information:</strong> Basic device type used for scanning
              </li>
            </ul>
            <p>
              <strong>Important Clarification:</strong> The QR codes and product identifiers used
              in our verification system are technical batch and product codes. They do not contain
              or reveal any personal health information, prescription details, or patient identity.
              The verification system is designed solely to confirm that a product originated from
              Winston&apos;s Pharmacy and has not been counterfeited.
            </p>

            <h3>2.3 Information You Provide</h3>
            <p>
              When you voluntarily submit information through our Website, we collect:
            </p>
            <ul>
              <li>
                <strong>Contact Form Submissions:</strong> Name, email address, phone number,
                user type (patient, healthcare provider, or pharmacy), inquiry type, and message
                content
              </li>
              <li>
                <strong>Account Information:</strong> If you create an account, your name, email
                address, and any profile information you provide
              </li>
              <li>
                <strong>Communication Data:</strong> Records of correspondence if you contact us
                via email, phone, or other methods
              </li>
              <li>
                <strong>Feedback and Survey Responses:</strong> Any information you provide in
                response to surveys, feedback requests, or reviews
              </li>
            </ul>

            <h3>2.4 Information from Third Parties</h3>
            <p>
              We may receive information about you from third parties, including:
            </p>
            <ul>
              <li>Analytics providers who help us understand Website usage</li>
              <li>Business partners with whom you have authorized information sharing</li>
              <li>Publicly available sources</li>
            </ul>

            {/* How We Use Information */}
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>

            <h3>3.1 Providing and Improving Our Services</h3>
            <ul>
              <li>Operating and maintaining our Website</li>
              <li>Processing and responding to your inquiries and requests</li>
              <li>Providing product authenticity verification services</li>
              <li>Improving Website functionality, content, and user experience</li>
              <li>Developing new features and services</li>
            </ul>

            <h3>3.2 Security and Anti-Fraud</h3>
            <ul>
              <li>Detecting and preventing fraud, abuse, and unauthorized access</li>
              <li>Monitoring for counterfeit products through verification patterns</li>
              <li>Protecting the integrity of our verification systems</li>
              <li>Investigating suspicious activities and potential violations of our terms</li>
              <li>Ensuring the security of our Website and systems</li>
            </ul>

            <h3>3.3 Communications</h3>
            <ul>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Sending service-related announcements and updates</li>
              <li>
                With your consent, sending marketing communications about our products and services
              </li>
              <li>Notifying you of changes to our policies or terms</li>
            </ul>

            <h3>3.4 Legal and Compliance</h3>
            <ul>
              <li>Complying with applicable laws, regulations, and legal processes</li>
              <li>Responding to lawful requests from public authorities</li>
              <li>Enforcing our terms and policies</li>
              <li>Protecting our rights, privacy, safety, or property</li>
              <li>
                Fulfilling regulatory requirements for pharmaceutical compounding operations
              </li>
            </ul>

            <h3>3.5 Analytics and Research</h3>
            <ul>
              <li>Analyzing Website usage patterns and trends</li>
              <li>Conducting research to improve our services</li>
              <li>Generating aggregate, de-identified insights</li>
            </ul>

            {/* Data Retention */}
            <h2>4. Data Processing and Retention</h2>
            <h3>4.1 Data Storage</h3>
            <p>
              Your information is stored on secure servers located in the United States. We use
              industry-standard cloud infrastructure providers that maintain appropriate physical,
              technical, and administrative safeguards.
            </p>

            <h3>4.2 Retention Periods</h3>
            <p>
              We retain your information for as long as necessary to fulfill the purposes for which
              it was collected, including:
            </p>
            <ul>
              <li>
                <strong>Contact Form Data:</strong> Retained for 3 years from submission or until
                the inquiry is resolved, whichever is longer
              </li>
              <li>
                <strong>Verification Logs:</strong> Retained for 5 years to support anti-fraud
                efforts and regulatory compliance
              </li>
              <li>
                <strong>Browsing Data:</strong> Generally retained for 13 months for analytics
                purposes
              </li>
              <li>
                <strong>Account Information:</strong> Retained for the duration of your account
                and for a reasonable period thereafter
              </li>
            </ul>

            <h3>4.3 Retention Criteria</h3>
            <p>
              In determining retention periods, we consider:
            </p>
            <ul>
              <li>The purpose for which the data was collected</li>
              <li>Legal and regulatory requirements for pharmaceutical operations</li>
              <li>Potential need for data in legal proceedings</li>
              <li>Industry best practices</li>
              <li>Your reasonable expectations</li>
            </ul>

            {/* Data Sharing */}
            <h2>5. Information Sharing and Disclosure</h2>
            <h3>5.1 When We Share Information</h3>
            <p>
              We may share your information in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With third-party vendors who perform services
                on our behalf, such as hosting, analytics, email delivery, and customer support.
                These providers are contractually obligated to protect your information.
              </li>
              <li>
                <strong>Legal Compliance:</strong> When required by law, regulation, legal process,
                or governmental request, including requests from the FDA, state pharmacy boards,
                or law enforcement.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition,
                reorganization, or sale of assets, your information may be transferred as part
                of that transaction.
              </li>
              <li>
                <strong>Protection of Rights:</strong> When necessary to protect our rights,
                privacy, safety, or property, or that of our users or the public.
              </li>
              <li>
                <strong>With Your Consent:</strong> In other circumstances where we have obtained
                your explicit consent.
              </li>
            </ul>

            <h3>5.2 Affiliate Sharing</h3>
            <p>
              We may share information with our parent company, subsidiaries, and affiliates for
              purposes consistent with this Privacy Policy.
            </p>

            <h3>5.3 When We Do Not Share Information</h3>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their
              marketing purposes. We do not share your information with unaffiliated third parties
              for purposes unrelated to our services without your consent.
            </p>

            <h3>5.4 Aggregate and De-Identified Data</h3>
            <p>
              We may share aggregate or de-identified information that cannot reasonably be used
              to identify you for research, analytics, or other business purposes.
            </p>

            {/* Cookies */}
            <h2>6. Cookies and Similar Technologies</h2>
            <h3>6.1 What Are Cookies</h3>
            <p>
              Cookies are small text files that are placed on your device when you visit a website.
              They are widely used to make websites work more efficiently and to provide information
              to website owners.
            </p>

            <h3>6.2 Types of Cookies We Use</h3>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for the Website to function properly.
                These cannot be disabled without affecting Website functionality.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with
                our Website, allowing us to improve performance and user experience.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences and settings to
                enhance your experience.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Collect information about how you use the
                Website to help us improve its performance.
              </li>
            </ul>

            <h3>6.3 Purpose of Cookies</h3>
            <p>
              We use cookies to:
            </p>
            <ul>
              <li>Maintain Website security and prevent fraud</li>
              <li>Remember your preferences and settings</li>
              <li>Analyze Website traffic and usage patterns</li>
              <li>Improve Website performance and functionality</li>
              <li>Understand which pages and features are most useful</li>
            </ul>

            <h3>6.4 Managing Cookies</h3>
            <p>
              You can control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul>
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p>
              Please note that disabling cookies may affect the functionality of our Website and
              your ability to use certain features.
            </p>

            <h3>6.5 Other Tracking Technologies</h3>
            <p>
              In addition to cookies, we may use web beacons, pixel tags, and similar technologies
              to collect information about your interaction with our Website and emails.
            </p>

            {/* User Rights */}
            <h2>7. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal
              information. We are committed to honoring these rights for all users.
            </p>

            <h3>7.1 General Rights</h3>
            <p>
              All users may:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request information about the personal data we hold
                about you
              </li>
              <li>
                <strong>Correction:</strong> Request that we correct inaccurate or incomplete
                personal information
              </li>
              <li>
                <strong>Deletion:</strong> Request that we delete your personal information,
                subject to certain exceptions
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time
              </li>
              <li>
                <strong>Data Portability:</strong> Request a copy of your data in a commonly
                used format
              </li>
            </ul>

            <h3>7.2 California Residents</h3>
            <p>
              If you are a California resident, you have additional rights under the California
              Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </p>
            <ul>
              <li>
                <strong>Right to Know:</strong> You may request information about the categories
                and specific pieces of personal information we have collected, the sources of
                that information, our business purposes for collecting it, and the categories
                of third parties with whom we share it.
              </li>
              <li>
                <strong>Right to Delete:</strong> You may request that we delete personal
                information we have collected from you, subject to certain exceptions.
              </li>
              <li>
                <strong>Right to Correct:</strong> You may request that we correct inaccurate
                personal information.
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> You have the right to opt out of the sale
                or sharing of your personal information. Note that we do not sell personal
                information as defined under the CCPA/CPRA.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not discriminate against
                you for exercising any of your privacy rights.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information in Section 11.
              We may need to verify your identity before processing your request.
            </p>

            <h3>7.3 Other State Privacy Rights</h3>
            <p>
              Residents of other states with privacy laws (such as Virginia, Colorado, Connecticut,
              and Utah) may have similar rights. We will honor requests consistent with applicable
              state law.
            </p>

            {/* Legal Basis */}
            <h2>8. Legal Basis for Processing</h2>
            <p>
              We process your personal information based on the following legal grounds:
            </p>
            <ul>
              <li>
                <strong>Consent:</strong> When you have given us explicit consent to process
                your information for specific purposes, such as receiving marketing communications.
              </li>
              <li>
                <strong>Contractual Necessity:</strong> When processing is necessary to fulfill
                our obligations to you or to take steps at your request prior to entering into
                a contract.
              </li>
              <li>
                <strong>Legal Obligation:</strong> When processing is necessary for compliance
                with laws and regulations applicable to our pharmaceutical operations.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> When processing is necessary for our
                legitimate business interests, such as fraud prevention, security, Website
                improvement, and business operations, provided these interests do not override
                your rights.
              </li>
            </ul>

            {/* Security */}
            <h2>9. Security Measures</h2>
            <p>
              We implement a variety of security measures to protect your personal information:
            </p>
            <ul>
              <li>
                <strong>Encryption:</strong> We use SSL/TLS encryption for data transmitted
                between your browser and our servers.
              </li>
              <li>
                <strong>Access Controls:</strong> We restrict access to personal information
                to authorized personnel who need it for legitimate business purposes.
              </li>
              <li>
                <strong>Secure Infrastructure:</strong> Our systems are hosted on secure,
                professionally managed infrastructure with appropriate physical and technical
                safeguards.
              </li>
              <li>
                <strong>Regular Assessments:</strong> We conduct regular security assessments
                and updates to maintain the integrity of our systems.
              </li>
              <li>
                <strong>Employee Training:</strong> Our staff receive training on privacy and
                security best practices.
              </li>
            </ul>
            <p>
              While we strive to protect your personal information, no method of transmission
              over the Internet or electronic storage is 100% secure. We cannot guarantee
              absolute security but are committed to promptly addressing any security incidents.
            </p>

            {/* Children */}
            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Our Website is not intended for children under 18 years of age. We do not knowingly
              collect personal information from children under 18. If you are a parent or guardian
              and believe your child has provided us with personal information, please contact us
              immediately, and we will take steps to delete such information.
            </p>

            {/* Changes */}
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technologies, legal requirements, or other factors. When we make changes:
            </p>
            <ul>
              <li>We will update the &quot;Last Updated&quot; date at the top of this policy</li>
              <li>For material changes, we may provide additional notice on our Website</li>
              <li>We encourage you to review this policy periodically</li>
            </ul>
            <p>
              Your continued use of the Website after any changes constitutes your acceptance of
              the updated Privacy Policy.
            </p>

            {/* Contact */}
            <h2>12. Contact Us</h2>
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us:
            </p>
            <ul>
              <li>
                <strong>Email:</strong>{' '}
                <a
                  href={`mailto:privacy@winstonspharmacy.com`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  privacy@winstonspharmacy.com
                </a>
              </li>
              <li>
                <strong>General Inquiries:</strong>{' '}
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
                <strong>Mailing Address:</strong>
                <br />
                Winston&apos;s Pharmacy
                <br />
                Attn: Privacy Officer
                <br />
                {siteConfig.contact.address}
              </li>
            </ul>
            <p>
              For requests related to your privacy rights, please include sufficient information
              to allow us to verify your identity and process your request.
            </p>

            {/* Related Documents */}
            <h2>13. Related Documents</h2>
            <p>
              This Privacy Policy should be read in conjunction with our:
            </p>
            <ul>
              <li>
                <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                  Terms of Use
                </Link>{' '}
                - Governing your use of our Website
              </li>
            </ul>
            <p>
              For information about how we handle protected health information in our capacity
              as a healthcare provider, please request a copy of our HIPAA Notice of Privacy
              Practices.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
