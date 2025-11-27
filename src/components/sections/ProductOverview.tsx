import { Accordion } from '@/components/ui/Accordion';
import type { ProductOverviewSection } from '@/types';

interface ProductOverviewProps {
  sections: ProductOverviewSection[];
}

export function ProductOverview({ sections }: ProductOverviewProps) {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[800px]">
        <h2 className="mb-8 text-center font-heading text-3xl font-semibold text-secondary-700 md:text-4xl lg:text-[44px]">
          Product Overview
        </h2>
        <Accordion items={sections} variant="light" />
      </div>
    </section>
  );
}
