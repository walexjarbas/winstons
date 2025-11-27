import Link from 'next/link';

export function ProductCTA() {
  return (
    <section className="bg-white px-6 py-24 lg:px-40">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex min-h-[550px] items-center justify-center rounded-[20px] bg-primary-600 px-6 py-16">
          <div className="text-center">
            <h2 className="font-heading text-4xl font-semibold text-white md:text-5xl lg:text-[54px] lg:leading-tight">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-white/90 md:text-xl">
              Connect with our team to learn more about our compounding solutions and how we can support your practice.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary-600"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
