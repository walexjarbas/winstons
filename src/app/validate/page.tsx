import type { Metadata } from 'next';
import { Suspense } from 'react';
import { DrugCodeValidator } from '@/components/validation/DrugCodeValidator';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Medication Authenticity Validation',
  description:
    "Verify the authenticity of your Winston's Pharmacy medication using the QR Code on the packaging.",
};

// Loading skeleton for Suspense
function LoadingSkeleton() {
  return (
    <Card className="animate-pulse p-8">
      <div className="mx-auto mb-6 h-32 w-32 rounded-2xl bg-secondary-200" />
      <div className="mx-auto h-6 w-48 rounded bg-secondary-200" />
      <div className="mx-auto mt-4 h-4 w-64 rounded bg-secondary-200" />
    </Card>
  );
}

export default function ValidatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-6 pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[740px] text-center">
          <h1 className="font-heading text-4xl font-semibold text-secondary-900 md:text-5xl lg:text-[62px] lg:leading-[1.1]">
            Validate your medication code
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-secondary-600 md:text-xl">
            Use the QR Code on the packaging to verify the authenticity of the product.
          </p>
        </div>
      </section>

      {/* Validation Section */}
      <section className="bg-white px-6 pb-16 md:px-12 lg:px-24 lg:pb-24">
        <div className="mx-auto max-w-[640px]">
          <Suspense fallback={<LoadingSkeleton />}>
            <DrugCodeValidator />
          </Suspense>
        </div>
      </section>

      {/* QR Code Location Guide */}
      <section id="qr-location" className="bg-secondary-50 px-6 py-16">
        <div className="mx-auto max-w-[640px]">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            {/* Icon */}
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
              <svg
                className="h-10 w-10 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl font-semibold text-secondary-900">
                Where can I find the QR Code for my medication?
              </h2>
              <p className="mt-2 text-secondary-600">
                The QR Code is typically located on the back or side of the medication packaging,
                near the barcode or product information. Look for a square pattern of black and
                white modules. If you have trouble finding it, the QR Code may also be on the
                product insert or label.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
