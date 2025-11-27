import type { Metadata } from 'next';
import { AlertBanner } from '@/components/layout/AlertBanner';
import { KnowledgeCenterHero } from '@/components/sections/knowledge-center/KnowledgeCenterHero';
import { ArticleCategories } from '@/components/sections/knowledge-center/ArticleCategories';
import { KnowledgeCenterFAQ } from '@/components/sections/knowledge-center/KnowledgeCenterFAQ';
import { KnowledgeCenterCTA } from '@/components/sections/knowledge-center/KnowledgeCenterCTA';

export const metadata: Metadata = {
  title: 'Knowledge Center',
  description:
    "Learn about peptide therapy, compounding standards, and shipping information. Explore Winston's educational resources for practitioners, patients, and pharmacies.",
};

export default function KnowledgeCenterPage() {
  return (
    <>
      <AlertBanner />
      <KnowledgeCenterHero />
      <ArticleCategories />
      <KnowledgeCenterFAQ />
      <KnowledgeCenterCTA />
    </>
  );
}
