'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface AboutAccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  image?: string;
  imageAlt?: string;
}

const accordionItems: AboutAccordionItem[] = [
  {
    id: 'approach',
    title: 'Our approach',
    subtitle: 'Advancing access to quality peptide care',
    description:
      'Ordering, fulfillment, shipping, and refilling—we\'ve digitally streamlined every aspect of our process so getting the peptide formulations you need is fast, easy, and affordable.',
    buttonText: 'Get Started',
    buttonHref: '/contact',
    image: '/images/about/approach.jpg',
    imageAlt: 'Winston\'s Pharmacy team at work',
  },
  {
    id: 'facilities',
    title: 'Our facilities',
    subtitle: 'State-of-the-art peptide compounding',
    description:
      'Our facilities use advanced technology and equipment to produce high-quality peptides and compounded medications at scale, redefining the future of peptide therapy with precision and consistency.',
    buttonText: 'Learn More',
    buttonHref: '/about/facilities',
  },
  {
    id: 'commitment',
    title: 'Our commitment',
    subtitle: 'Quality, affordable compounded care',
    description:
      'We are committed to advancing access to quality, affordable compounded care for your health and wellness. Our rigorous testing protocols ensure every peptide formulation meets the highest pharmaceutical standards.',
    buttonText: 'Learn More',
    buttonHref: '/about/quality',
  },
];

export function AboutAccordion() {
  const [openId, setOpenId] = useState<string>('approach');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section className="px-4 py-24 lg:px-[160px]">
      <div className="mx-auto max-w-[1200px] space-y-2">
        {accordionItems.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="overflow-hidden rounded-[20px]"
              style={{ backgroundColor: 'rgba(238, 236, 229, 0.85)' }}
            >
              {/* Collapsed state - clickable header */}
              {!isOpen && (
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="flex w-full items-center justify-between px-[60px] py-6"
                >
                  <span className="font-heading text-3xl font-semibold text-secondary-900 md:text-[42px]">
                    {item.title}
                  </span>
                  <svg
                    className="h-3 w-5 text-secondary-700"
                    fill="none"
                    viewBox="0 0 20 12"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2 2l8 8 8-8"
                    />
                  </svg>
                </button>
              )}

              {/* Expanded state - full content */}
              {isOpen && (
                <div className="px-[60px] py-16">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left - Text Content */}
                    <div className="flex max-w-[560px] flex-col">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className="mb-4 flex items-center justify-between text-left"
                      >
                        <h3 className="font-heading text-3xl font-semibold text-secondary-900 md:text-[43px]">
                          {item.title}
                        </h3>
                        <svg
                          className="h-3 w-5 rotate-180 text-secondary-700 lg:hidden"
                          fill="none"
                          viewBox="0 0 20 12"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 2l8 8 8-8"
                          />
                        </svg>
                      </button>
                      {item.subtitle && (
                        <p className="text-xl text-secondary-700 md:text-2xl">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="mt-4 text-lg leading-relaxed text-secondary-700">
                        {item.description}
                      </p>
                      {item.buttonText && item.buttonHref && (
                        <div className="mt-6">
                          <Link
                            href={item.buttonHref}
                            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 bg-primary-600 px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700"
                          >
                            {item.buttonText}
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Right - Image (if available) */}
                    {item.image && (
                      <div className="relative h-[300px] w-full overflow-hidden rounded-[20px] lg:h-[430px] lg:w-[520px] lg:flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.imageAlt || item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
