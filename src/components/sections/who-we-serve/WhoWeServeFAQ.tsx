import Link from 'next/link';
import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    id: 'cost',
    title: "Does it cost anything to set up an account with Winston's?",
    content:
      "No, there is no cost to set up an account with Winston's. Our team will guide you through the entire process at no charge, ensuring you have access to quality, affordable peptide formulations.",
  },
  {
    id: 'response-time',
    title:
      'How long will it take for a representative to contact me once a web form is submitted?',
    content:
      "Our dedicated Winston's team typically responds within 24-48 business hours after receiving your web form submission to discuss your peptide therapy needs.",
  },
  {
    id: 'pricing',
    title: 'How can I access a pricing catalog?',
    content:
      "Once you've established an account with Winston's, your dedicated liaison will provide you with our comprehensive peptide product catalog and competitive pricing information.",
  },
];

export function WhoWeServeFAQ() {
  return (
    <section className="bg-white px-6 py-24 lg:px-40">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Left - Title */}
        <div className="lg:w-[515px]">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-black md:text-4xl lg:text-[43px] lg:leading-[1.34]">
            Commonly asked
            <br />
            questions <em className="italic">from</em>
            <br />
            <em className="italic">pharmacies</em>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-secondary-700 md:text-2xl">
            Our team of experts has the answers you&apos;re looking for.
          </p>
          <div className="mt-16">
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 bg-primary-600 px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700"
            >
              See All FAQs
            </Link>
          </div>
        </div>

        {/* Right - Accordion */}
        <div className="lg:w-[515px]">
          <Accordion items={faqItems} variant="blue" />
        </div>
      </div>
    </section>
  );
}
