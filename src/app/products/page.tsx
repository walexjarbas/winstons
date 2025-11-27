import type { Metadata } from 'next';
import { AlertBanner } from '@/components/layout/AlertBanner';
import { ProductsHero } from '@/components/sections/products/ProductsHero';
import { ProductsGrid } from '@/components/sections/products/ProductsGrid';

export const metadata: Metadata = {
  title: 'Products',
  description:
    "Explore Winston's quality compounded peptide formulations including Semaglutide, Tirzepatide, NAD+, and Sermorelin. Manufactured in our state-of-the-art 503B facility.",
};

export default function ProductsPage() {
  return (
    <>
      <AlertBanner />
      <ProductsHero />
      <ProductsGrid />
    </>
  );
}
