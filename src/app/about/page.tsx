import type { Metadata } from 'next';
import { AlertBanner } from '@/components/layout/AlertBanner';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { FloatingProducts } from '@/components/sections/about/FloatingProducts';
import { AboutAccordion } from '@/components/sections/about/AboutAccordion';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Winston\'s Pharmacy is redefining the future of peptides. Advancing access to quality, affordable compounded care for your health and wellness.',
};

export default function AboutPage() {
  return (
    <>
      <AlertBanner />
      <AboutHero />
      <FloatingProducts />
      <AboutAccordion />
      <AboutCTA />
    </>
  );
}
