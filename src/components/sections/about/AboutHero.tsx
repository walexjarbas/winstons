import Image from 'next/image';

export function AboutHero() {
  return (
    <section className="bg-white px-4 py-24 lg:px-[160px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-12 lg:flex-row lg:items-center">
        {/* Left - Text Content */}
        <div className="w-full max-w-[550px]">
          <span className="text-sm font-normal uppercase tracking-[1.5px] text-primary-600">
            Redefining the Future of Peptides
          </span>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.2] text-secondary-900 md:text-5xl lg:text-[64px] lg:leading-[1.23]">
            Staying ahead of
            <br />
            the curve{' '}
            <em className="italic">never</em>
            <br />
            <em className="italic">takes a day off</em>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-secondary-700">
            With advanced technology and continuous innovation at the forefront
            of all we do, we&apos;re redefining the future of peptide therapy
            and advancing access to quality, affordable compounded care for
            practitioners, patients, and pharmacies everywhere.
          </p>
        </div>

        {/* Right - Video Thumbnail */}
        <div className="w-full max-w-[550px]">
          <div className="relative aspect-square w-full overflow-hidden rounded-[20px]">
            <Image
              src="/images/about/hero-video.jpg"
              alt="Winston's Pharmacy technology and innovation"
              fill
              className="object-cover"
              priority
            />
            {/* Play button overlay */}
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-primary-700"
            >
              Watch Video
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
