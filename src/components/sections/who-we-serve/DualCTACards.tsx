import Link from 'next/link';

export function DualCTACards() {
  return (
    <section className="px-4 py-16 lg:px-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:justify-between">
        {/* Card 1 - Dark Green */}
        <div className="flex min-h-[432px] flex-1 flex-col items-center justify-between rounded-[20px] bg-primary-600 px-8 py-16 lg:px-16 lg:py-24">
          <h3 className="text-center font-heading text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[41px] lg:leading-[1.33]">
            Redefining the
            <br />
            future of peptides
          </h3>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white hover:text-primary-600"
          >
            Read Our Story
          </Link>
        </div>

        {/* Card 2 - Light Green */}
        <div className="flex min-h-[432px] flex-1 flex-col items-center justify-between rounded-[20px] bg-accent-green px-8 py-16 lg:px-16 lg:py-24">
          <h3 className="text-center font-heading text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[41px] lg:leading-[1.33]">
            Have questions about
            <br />
            peptide therapy?
          </h3>
          <Link
            href="/faq"
            className="mt-8 inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white hover:text-accent-green"
          >
            See our FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
