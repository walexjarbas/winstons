import Image from 'next/image';
import Link from 'next/link';
import { getAllProducts } from '@/data/products';

export function ProductsGrid() {
  const products = getAllProducts();

  return (
    <section className="bg-accent-gray px-4 py-16 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group"
            >
              <div className="flex h-[320px] items-center justify-center rounded-[20px] bg-accent-cream p-6 transition-shadow group-hover:shadow-lg">
                <div className="relative h-full w-full">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
              <div className="mt-4">
                {product.badge && (
                  <span className="mb-2 inline-block rounded-full bg-accent-green px-3 py-1 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                )}
                <h3 className="font-sans text-base font-semibold text-secondary-900 group-hover:text-primary-600">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-secondary-600">
                  {product.dosageStrengths[0]?.value}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-secondary-600">
            More peptide formulations coming soon.{' '}
            <Link
              href="/contact"
              className="font-semibold text-primary-600 hover:underline"
            >
              Contact us
            </Link>{' '}
            to inquire about specific compounds.
          </p>
        </div>
      </div>
    </section>
  );
}
