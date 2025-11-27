import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    id: 'what-are-peptides',
    title: 'What are peptides and how do they work?',
    content:
      'Peptides are short chains of amino acids that act as signaling molecules in the body. They can influence various biological processes including metabolism, hormone production, and cellular repair. Peptide therapy uses these compounds to support specific health and wellness goals.',
  },
  {
    id: 'international-shipping',
    title: "Does Winston's ship internationally?",
    content:
      "Yes, Winston's offers international shipping to select countries. Our team can help you understand shipping options, customs requirements, and delivery timelines for your location. Contact us to discuss international orders and ensure compliance with local regulations.",
  },
  {
    id: 'packaging',
    title: 'How are peptide medications packaged for shipping?',
    content:
      'We use specialized cold chain packaging to maintain product integrity during transit. Our temperature-controlled shipping solutions include insulated containers and gel packs to ensure your peptide medications arrive in optimal condition, regardless of destination.',
  },
  {
    id: 'delivery-times',
    title: 'What are the delivery times for orders?',
    content:
      'Domestic US orders typically arrive within 2-5 business days depending on location. International delivery times vary by destination, usually ranging from 5-14 business days. Expedited shipping options are available for time-sensitive orders.',
  },
  {
    id: 'prescription',
    title: 'Do I need a prescription for peptide therapy?',
    content:
      "Yes, peptide medications require a valid prescription from a licensed healthcare provider. Winston's works with practitioners, clinics, and pharmacies to fulfill prescriptions for compounded peptide formulations.",
  },
  {
    id: 'quality-safety',
    title: "How does Winston's ensure quality and safety?",
    content:
      "As a 503B outsourcing facility, Winston's adheres to strict FDA guidelines and cGMP standards. Our state-of-the-art facility features sterile compounding environments, rigorous quality testing, and comprehensive documentation to ensure every product meets the highest safety standards.",
  },
];

export function KnowledgeCenterFAQ() {
  return (
    <section className="bg-white px-6 py-24 lg:px-40">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Left - Title */}
        <div className="lg:w-[450px]">
          <h2 className="font-heading text-3xl font-semibold leading-tight text-black md:text-4xl lg:text-[43px] lg:leading-[1.34]">
            Common questions
            <br />
            <em className="italic">answered</em>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-secondary-700 md:text-2xl">
            Find answers to frequently asked questions about peptides, shipping,
            and our services.
          </p>
        </div>

        {/* Right - Accordion */}
        <div className="lg:w-[550px]">
          <Accordion items={faqItems} variant="blue" />
        </div>
      </div>
    </section>
  );
}
