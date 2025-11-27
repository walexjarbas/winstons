import Image from 'next/image';
import Link from 'next/link';

export function PricingCTA() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center py-48 lg:py-64">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/who-we-serve/pricing-bg.jpg"
          alt="Vials of liquid in a line on a machine"
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121e3e]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-4 text-center">
        <h2 className="font-heading text-3xl font-normal text-white md:text-4xl lg:text-[44px] lg:leading-[1.3]">
          Learn more about our{' '}
          <em className="italic">peptide pricing</em>
        </h2>
        <div className="mt-5">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white bg-transparent px-7 py-3 text-base font-bold text-white transition-colors hover:bg-white hover:text-primary-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
