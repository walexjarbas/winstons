import Image from 'next/image';
import { Accordion } from '@/components/ui/Accordion';

const accordionItems = [
  {
    id: 'technology',
    title: 'Technology and Innovation',
    content:
      'Our state-of-the-art facilities use advanced technology and equipment to produce high-quality peptides and compounded medications at scale, redefining the future of peptide therapy.',
  },
  {
    id: 'quality',
    title: 'Quality',
    content:
      'We maintain the highest standards of pharmaceutical quality for all our peptide formulations, with rigorous testing and quality control processes that exceed industry requirements.',
  },
  {
    id: 'access',
    title: 'Access',
    content:
      'We are committed to advancing access to quality, affordable compounded care for your health and wellness, with fast turnaround times and reliable supply.',
  },
];

export function WhyWinstons() {
  return (
    <section className="bg-primary-600 px-4 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
            Why Winston`s Pharmacy?
          </h2>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Accordion */}
          <div className="relative min-h-[400px] w-full lg:w-[570px]">
            <Accordion items={accordionItems} defaultOpenId="technology" />
          </div>

          {/* Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl lg:h-[400px] lg:w-[570px]">
            <Image
              src="/images/sections/tech-video.jpg"
              alt="Technology and innovation at Winston's Pharmacy"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
