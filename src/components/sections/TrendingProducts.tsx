'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 'semaglutide',
    name: 'Semaglutide / Cyanocobalamin Injection',
    image: '/images/products/semaglutide.png',
    href: '/products/semaglutide-cyanocobalamin-injection',
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide / Niacinamide Injection',
    image: '/images/products/tirzepatide.png',
    href: '/products/tirzepatide-niacinamide-injection',
  },
  {
    id: 'testosterone',
    name: 'Testosterone Cypionate Injection',
    image: '/images/products/testosterone.png',
    href: '/products/tirzepatide-niacinamide-injection',
  },
  {
    id: 'nad',
    name: 'NAD+ Injection (Lyo)',
    image: '/images/products/nad.png',
    href: '/products/nad-injection',
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin Acetate Injection',
    image: '/images/products/sermorelin.png',
    href: '/products/sermorelin-acetate-injection',
  },
  {
    id: 'nandrolone',
    name: 'Nandrolone Decanoate Injection',
    image: '/images/products/nandrolone.png',
    href: '/products/sermorelin-acetate-injection',
  },
];

export function TrendingProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 330;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="products" className="bg-accent-gray px-4 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-4xl font-bold text-black md:text-5xl">
            Peptides that make a difference
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Products */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="w-[310px] flex-shrink-0"
              >
                <div className="flex h-[400px] items-center justify-center rounded-xl bg-accent-cream p-8 transition-shadow hover:shadow-lg">
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
                <h3 className="mt-4 text-center font-sans text-base font-semibold text-secondary-900">
                  {product.name}
                </h3>
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white transition-colors hover:bg-primary-700"
            aria-label="Previous products"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600 text-white transition-colors hover:bg-primary-700"
            aria-label="Next products"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
