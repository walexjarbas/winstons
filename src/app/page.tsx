import { AlertBanner } from '@/components/layout/AlertBanner';
import { Hero } from '@/components/sections/Hero';
import { CTACards } from '@/components/sections/CTACards';
import { WhyWinstons } from '@/components/sections/WhyWinstons';
import { TrendingProducts } from '@/components/sections/TrendingProducts';
import { SupportingUniformed } from '@/components/sections/SupportingUniformed';
import { ProductCategories } from '@/components/sections/ProductCategories';
import { AboutCards } from '@/components/sections/AboutCards';

export default function HomePage() {
  return (
    <>
      <AlertBanner />
      <Hero />
      <CTACards />
      <WhyWinstons />
      <TrendingProducts />
      <SupportingUniformed />
      <ProductCategories />
      <AboutCards />
    </>
  );
}
