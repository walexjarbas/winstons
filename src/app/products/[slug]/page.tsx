import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug, getRelatedProducts } from '@/data/products';
import { ProductHero } from '@/components/sections/ProductHero';
import { ProductOverview } from '@/components/sections/ProductOverview';
import { RelatedProducts } from '@/components/sections/RelatedProducts';
import { ProductFAQ } from '@/components/sections/ProductFAQ';
import { ProductCTA } from '@/components/sections/ProductCTA';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: `Learn about ${product.name} from Winston's Pharmacy. High-quality compounded medication with detailed dosage and usage information.`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.relatedProductIds);

  return (
    <>
      <ProductHero product={product} />
      <ProductOverview sections={product.overview} />
      <RelatedProducts products={relatedProducts} />
      <ProductFAQ faqs={product.faqs} />
      <ProductCTA />
    </>
  );
}
