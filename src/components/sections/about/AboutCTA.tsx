import Link from 'next/link';

export function AboutCTA() {
  return (
    <section className="px-4 py-16 lg:px-[160px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex min-h-[550px] items-center justify-center rounded-[20px] bg-primary-600 px-6 py-16">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-semibold text-white md:text-5xl lg:text-[54px] lg:leading-tight">
              Have a question?
            </h2>
            <p className="mx-auto mt-6 max-w-[500px] text-lg text-white/90">
              Ready to advance your peptide care? Our team is here to help.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-10 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-primary-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
