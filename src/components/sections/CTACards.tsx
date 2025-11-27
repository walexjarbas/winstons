import Link from 'next/link';

const cards = [
  {
    title: 'Product Catalog',
    subtitle: 'PROVIDERS / PATIENTS',
    buttonText: 'View Products',
    href: '/products',
  },
  {
    title: 'Get in touch',
    subtitle: 'PROVIDERS / PHARMACY',
    buttonText: 'Contact Us',
    href: '/contact',
  },
  {
    title: 'Orders and Refills',
    subtitle: 'PROVIDERS / PATIENTS',
    buttonText: 'Login Now',
    href: '/login',
  },
];

export function CTACards() {
  return (
    <section className="px-4 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-1 flex-col items-center justify-center gap-6 rounded-[20px] bg-primary-600 px-6 py-16"
          >
            <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
              {card.title}
            </h2>
            <p className="text-sm uppercase tracking-[1.5px] text-white/90">
              {card.subtitle}
            </p>
            <Link
              href={card.href}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-primary-600 transition-colors hover:bg-gray-100"
            >
              {card.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
