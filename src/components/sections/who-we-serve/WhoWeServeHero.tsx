import Image from 'next/image';

export function WhoWeServeHero() {
  return (
    <section className="bg-white px-4 py-10 pb-24 lg:px-24">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-10 lg:flex-row lg:items-center">
        {/* Left - Text Content */}
        <div className="w-full max-w-[550px]">
          <span className="text-sm font-normal uppercase tracking-[1.5px] text-primary-600">
            Getting Started
          </span>
          <h1 className="mt-2 font-heading text-4xl font-semibold leading-[1.2] text-secondary-900 md:text-5xl lg:text-[64px] lg:leading-[1.23]">
            Quality peptide care 
            <em className="italic"> is easy with Winston&apos;s</em>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-secondary-700">
            Partner with Winston&apos;s to advance access to quality, affordable
            compounded peptide formulations for your practitioners and patients.
          </p>
        </div>

        {/* Right - Hero Image */}
        <div className="w-full max-w-[550px]">
          <div className="relative h-[400px] w-full overflow-hidden rounded-[20px] lg:h-[570px]">
            <Image
              src="/images/who-we-serve/hero.jpg"
              alt="Vials of liquid getting lid put on in a machine"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
