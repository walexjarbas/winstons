import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 px-4 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Top Section */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          {/* Brand Section */}
          <div className="max-w-[418px]">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/logo/logo-white.svg"
                alt="Winston's Pharmacy"
                width={180}
                height={51}
                className="h-[51px] w-auto"
              />
            </Link>

            {/* Description */}
            <p className="mt-8 text-sm leading-relaxed text-white">
              Winston`s Pharmacy is a next-generation compounding pharmacy and
              outsourcing facility, built to deliver precision, safety, and
              consistency at scale.
            </p>

            {/* Certifications */}
            <div className="mt-4 flex gap-4">
              <Image
                src="/images/certifications/cert-1.svg"
                alt="Certification"
                width={58}
                height={58}
                className="h-[58px] w-auto"
              />
              <Image
                src="/images/certifications/cert-2.svg"
                alt="Certification"
                width={58}
                height={58}
                className="h-[58px] w-auto"
              />
              <Image
                src="/images/certifications/cert-3.svg"
                alt="Certification"
                width={58}
                height={58}
                className="h-[58px] w-auto"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex gap-16">
            {/* Popular */}
            <div className="min-w-[168px]">
              <h4 className="text-base font-bold uppercase text-white">
                Popular
              </h4>
              <ul className="mt-6 space-y-6">
                {footerLinks.popular.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base leading-relaxed text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpful Links */}
            <div className="min-w-[168px]">
              <h4 className="text-base font-bold uppercase text-white">
                Helpful Links
              </h4>
              <ul className="mt-6 space-y-6">
                {footerLinks.helpful.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-base text-white transition-colors hover:text-white/80"
                    >
                      {link.label}
                      {link.external && (
                        <svg
                          className="h-2.5 w-2.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 sm:flex-row">
          <p className="text-sm text-white">
            © {currentYear} Winston`s Pharmacy. All rights reserved.
          </p>
          <div className="flex gap-10">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
