import Image from 'next/image';
import Link from 'next/link';

export function SupportingUniformed() {
  return (
    <section className="bg-primary-600 px-4 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="max-w-[546px]">
          <h2 className="font-heading text-5xl font-semibold leading-tight text-white md:text-6xl">
            Go Beyond GLP-1s 
            <br />
            and Semaglutide
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white">
          Total wellness is more than weight management. Partner with Winston`s Pharmacy to create an all-encompassing, long-term wellness journey.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center justify-center rounded-lg border-2 border-white bg-white px-7 py-3 text-base font-bold text-primary-600 transition-colors hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>

        {/* Image */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl lg:h-[470px] lg:w-[546px]">
          <Image
            src="/images/sections/uniformed.jpg"
            alt="Family enjoying a meal together"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
