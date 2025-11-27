import Link from 'next/link';

export function ContactCTACards() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 - Dark Green */}
          <div className="flex min-h-[350px] flex-col justify-between rounded-[20px] bg-primary-600 p-8 md:min-h-[432px] md:p-12">
            <h3 className="font-heading text-3xl font-semibold text-white md:text-4xl lg:text-[42px] lg:leading-[1.2]">
              We&apos;re making
              <br />
              healthcare personal
            </h3>
            <Link
              href="/about"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-primary-600"
            >
              Read Our Story
            </Link>
          </div>

          {/* Card 2 - Light Green */}
          <div className="flex min-h-[350px] flex-col justify-between rounded-[20px] bg-[#1ea465] p-8 md:min-h-[432px] md:p-12">
            <h3 className="font-heading text-3xl font-semibold text-white md:text-4xl lg:text-[42px] lg:leading-[1.2]">
              Any questions?
              <br />
              See our frequently
            </h3>
            <Link
              href="/faq"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#1ea465]"
            >
              See our FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
