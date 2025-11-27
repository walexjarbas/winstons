'use client';

import { useState } from 'react';
import Link from 'next/link';

export function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-accent-green px-4 py-3">
      <div className="mx-auto max-w-[1200px] text-center">
        <p className="text-base font-semibold text-white">
          Reliable Supply. Competitive Pricing. Fast Turnarounds.{' '}
          <Link href="/contact" className="underline underline-offset-2 hover:no-underline">
            Contact Us
          </Link>
        </p>
      </div>
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/80 transition-colors hover:text-white"
        aria-label="Close banner"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
