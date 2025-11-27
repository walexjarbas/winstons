import type { Metadata } from 'next';
import { AlertBanner } from '@/components/layout/AlertBanner';
import { WhoWeServeHero } from '@/components/sections/who-we-serve/WhoWeServeHero';
import { HowToOrder } from '@/components/sections/who-we-serve/HowToOrder';
import { PricingCTA } from '@/components/sections/who-we-serve/PricingCTA';
import { WhoWeServeFAQ } from '@/components/sections/who-we-serve/WhoWeServeFAQ';
import { DualCTACards } from '@/components/sections/who-we-serve/DualCTACards';

export const metadata: Metadata = {
  title: 'Who We Serve',
  description:
    "Partner with Winston's to advance access to quality, affordable compounded peptide formulations for practitioners, patients, and pharmacies.",
};

export default function WhoWeServePage() {
  return (
    <>
      <AlertBanner />
      <WhoWeServeHero />
      <HowToOrder />
      <PricingCTA />
      <WhoWeServeFAQ />
      <DualCTACards />
    </>
  );
}
