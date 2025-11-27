import Link from 'next/link';

export function ComplianceInfo() {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#121e3e] px-6 py-12 lg:min-h-[700px] lg:py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(/images/sections/facility.jpg)',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121e3e]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1120px] py-12">
        <h2 className="mb-5 font-heading text-3xl font-normal text-white md:text-4xl lg:text-[48px] lg:leading-tight">
          503A vs 503B
        </h2>

        <ul className="mb-10 space-y-2 pl-10 text-white">
          <li className="list-disc text-base leading-relaxed md:text-lg">
            503A pharmacies compound products for specific patients whose
            prescriptions are sent by their healthcare provider.
          </li>
          <li className="list-disc text-base leading-relaxed md:text-lg">
            503B outsourcing facilities compound products on a larger scale
            (bulk amounts) for healthcare providers to have on hand and
            administer to patients in their offices.
          </li>
        </ul>

        <Link
          href="/about"
          className="inline-flex items-center justify-center rounded-lg border-2 border-white px-7 py-3 text-base font-bold text-white transition-colors hover:bg-white hover:text-[#121e3e]"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
