import { Accordion } from '@/components/ui/Accordion';
import type { FAQItem } from '@/types';

interface ProductFAQProps {
  faqs: FAQItem[];
}

export function ProductFAQ({ faqs }: ProductFAQProps) {
  const accordionItems = faqs.map((faq, index) => ({
    id: `faq-${index}`,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className="bg-white px-6 py-24 lg:px-40">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Left - Title */}
        <div className="lg:w-[515px]">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-black md:text-4xl lg:text-[43px] lg:leading-[1.34]">
            Frequently asked
            <br />
            questions
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-secondary-700 md:text-2xl">
            Our team of experts has the answers you&apos;re looking for.
          </p>
        </div>

        {/* Right - Accordion */}
        <div className="lg:w-[515px]">
          <Accordion items={accordionItems} variant="blue" />
        </div>
      </div>
    </section>
  );
}
