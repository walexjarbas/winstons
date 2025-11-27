import type { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactLocation } from '@/components/sections/ContactLocation';
import { ContactCTACards } from '@/components/sections/ContactCTACards';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Winston\'s Pharmacy. We look forward to answering your questions.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-6 pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[740px] text-center">
          <h1 className="font-heading text-4xl font-semibold text-secondary-900 md:text-5xl lg:text-[62px] lg:leading-[1.1]">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-secondary-600 md:text-xl">
            Winston&apos;s Looks Forward to Answering Your Questions.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white px-6 pb-16 md:px-12 lg:px-24 lg:pb-24">
        <div className="mx-auto max-w-[740px]">
          <ContactForm />
        </div>
      </section>

      {/* Where to Find Us */}
      <ContactLocation />

      {/* CTA Cards */}
      <ContactCTACards />
    </>
  );
}
