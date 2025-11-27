'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';

interface ProductHeroProps {
  product: Product;
}

export function ProductHero({ product }: ProductHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dosageExpanded, setDosageExpanded] = useState(true);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="flex min-h-[675px] flex-col lg:flex-row">
      {/* Left - Image Gallery */}
      <div className="relative flex flex-1 flex-col bg-white px-6 py-8 lg:min-w-[50%] lg:px-12 lg:py-5">
        {/* Main Image */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative h-[400px] w-full max-w-[400px] lg:h-[534px]">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Buttons */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700 lg:left-8"
            aria-label="Previous image"
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
            onClick={nextImage}
            className="absolute right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700 lg:right-8"
            aria-label="Next image"
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

        {/* Thumbnail Gallery */}
        <div className="mt-4 flex items-center justify-center gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImageIndex(index)}
              className={`relative h-[62px] w-[62px] overflow-hidden border p-1.5 ${
                index === currentImageIndex
                  ? 'border-primary-600'
                  : 'border-secondary-300'
              }`}
            >
              <Image
                src={image}
                alt={`${product.name} thumbnail ${index + 1}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right - Product Info */}
      <div className="flex flex-1 flex-col justify-center bg-primary-600 px-6 py-12 lg:min-w-[50%] lg:px-14">
        <div className="mx-auto w-full max-w-[520px]">
          {/* Badge */}
          {product.badge && (
            <span className="mb-2 inline-block rounded-lg bg-white px-4 py-0.5 text-sm font-bold text-secondary-700">
              {product.badge}
            </span>
          )}

          {/* Product Name */}
          <h1 className="font-heading text-3xl font-normal leading-tight text-white md:text-4xl lg:text-[48px] lg:leading-[1.4]">
            {product.name.split(' / ').map((part, index, arr) => (
              <span key={index}>
                {part}
                {index < arr.length - 1 && ' /'}
                {index < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>

          {/* Dosage Strengths */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setDosageExpanded(!dosageExpanded)}
              className="flex items-center gap-2 text-white"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white text-sm">
                {dosageExpanded ? '−' : '+'}
              </span>
              <span className="text-xl font-bold">Available Dosage Strengths</span>
            </button>

            {dosageExpanded && (
              <div className="mt-4 space-y-4">
                {product.dosageStrengths.map((dosage, index) => (
                  <div key={index} className="space-y-3">
                    <p className="text-lg text-white">
                      <span className="font-light">{dosage.label.split('(')[0]}</span>
                      {dosage.label.includes('(') && (
                        <span className="font-bold">
                          ({dosage.label.split('(')[1]}
                        </span>
                      )}
                    </p>
                    <span className="inline-block rounded-md bg-accent-cream px-4 py-2 text-[15px] text-secondary-700">
                      {dosage.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="mt-8 inline-flex w-full max-w-[400px] items-center justify-center rounded-lg bg-[#1ea465] px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-[#1a9058]"
          >
            Start your order
          </Link>
        </div>
      </div>
    </section>
  );
}
