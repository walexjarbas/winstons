'use client';

import Image from 'next/image';

const floatingProducts = [
  {
    id: 'semaglutide',
    src: '/images/products/semaglutide2.png',
    alt: 'Semaglutide',
    position: { top: '10%', left: '13%' },
    animationClass: 'animate-float',
  },
  {
    id: 'tirzepatide',
    src: '/images/products/tirzepatide2.png',
    alt: 'Tirzepatide',
    position: { top: '5%', right: '21%' },
    animationClass: 'animate-float-delayed-1',
  },
  {
    id: 'testosterone',
    src: '/images/products/testosterone2.png',
    alt: 'Testosterone',
    position: { top: '40%', left: '20%' },
    animationClass: 'animate-float-delayed-2',
  },
  {
    id: 'nad',
    src: '/images/products/nad2.png',
    alt: 'NAD+',
    position: { top: '35%', right: '15%' },
    animationClass: 'animate-float-delayed-3',
  },
  {
    id: 'sermorelin',
    src: '/images/products/sermorelin2.png',
    alt: 'Sermorelin',
    position: { bottom: '15%', left: '16%' },
    animationClass: 'animate-float-delayed-1',
  },
  {
    id: 'nandrolone',
    src: '/images/products/nandrolone2.png',
    alt: 'Nandrolone',
    position: { bottom: '10%', right: '21%' },
    animationClass: 'animate-float-delayed-2',
  },
];

export function FloatingProducts() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-primary-600 px-4 py-24 lg:min-h-[1120px]">
      {/* Floating product bottles */}
      {floatingProducts.map((product) => (
        <div
          key={product.id}
          className={`absolute hidden lg:block ${product.animationClass}`}
          style={product.position}
        >
          <div className="rounded-[10px] bg-gradient-to-b from-accent-green to-transparent p-2">
            <div className="relative h-[250px] w-[150px]">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Centered text content */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center lg:min-h-[900px]">
        <div className="mx-auto max-w-[620px] text-center">
          <span className="text-sm font-normal uppercase tracking-[1.5px] text-white/80">
            Why We Do It
          </span>
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-[53px] lg:leading-[1.35]">
            Peptide therapy is evolving.
            <br />
            Your compounding
            <br />
            partner should be too.
          </h2>
        </div>
      </div>
    </section>
  );
}
