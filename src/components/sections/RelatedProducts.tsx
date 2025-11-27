'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Scroll by one card width + gap (approximately 1/3 of container)
      const containerWidth = scrollRef.current.clientWidth;
      const scrollAmount = (containerWidth + 20) / 3;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (products.length === 0) return null;

  return (
    <section className="bg-white px-6 py-10 lg:px-40">
      <div className="mx-auto max-w-[1120px]">
        {/* Heading */}
        <h2 className="mb-12 font-heading text-3xl font-semibold text-secondary-700 md:text-4xl lg:text-[44px]">
          Related medications
        </h2>

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
                href={`/products/${product.slug}`}
                className="w-[calc((100%-40px)/3)] min-w-[300px] flex-shrink-0"
              >
                <div className="flex h-[510px] flex-col items-center rounded-xl bg-accent-cream px-8 pb-8 pt-8">
                  <div className="relative h-[430px] w-full">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="mt-auto text-center font-sans text-[15px] font-bold text-secondary-700">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={() => scroll('left')}
            className="absolute -left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
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
            className="absolute -right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
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
