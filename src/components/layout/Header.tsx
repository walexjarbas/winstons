'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/config/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-[90px] max-w-[1200px] items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo/logo-dark.svg"
            alt="Winston's Pharmacy"
            width={180}
            height={50}
            className="h-[50px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-secondary-700 transition-colors hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-secondary-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'overflow-hidden border-t border-secondary-200 transition-all duration-300 lg:hidden',
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-semibold text-secondary-700 transition-colors hover:text-primary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-primary-600 px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
