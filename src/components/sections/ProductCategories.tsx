import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Weight Management', href: '/products/weight-management' },
  { name: "Women's Health", href: '/products/womens-health' },
  { name: "Men's Health", href: '/products/mens-health' },
  { name: 'Longevity', href: '/products/longevity' },
  { name: 'Dermatology', href: '/products/dermatology' },
  { name: 'Hormone Replacement', href: '/products/hormone-replacement' },
  { name: 'IV Therapy', href: '/products/iv-therapy' },
  { name: 'Mental Health', href: '/products/mental-health' },
];

export function ProductCategories() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
        {/* Image */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl lg:h-[674px] lg:w-[513px]">
          <Image
            src="/images/sections/man-towel.jpg"
            alt="Health and wellness"
            fill
            className="object-cover"
          />
        </div>

        {/* Categories List */}
        <div className="flex-1 lg:max-w-[650px]">
          <p className="text-sm font-semibold uppercase tracking-[1.5px] text-secondary-400">
            Products
          </p>

          <div className="mt-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group flex items-center justify-between border-b border-secondary-200 py-5 transition-colors first:pt-8 hover:border-primary-600"
              >
                <span className="text-xl font-semibold text-secondary-700 transition-colors group-hover:text-primary-600 md:text-[22px]">
                  {category.name}
                </span>
                <svg
                  className="h-8 w-8 text-secondary-700 transition-colors group-hover:text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
