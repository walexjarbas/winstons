const categories = [
  {
    title: 'Peptide Education',
    description:
      'Learn about peptide therapy, including GLP-1s like Semaglutide and Tirzepatide, NAD+, Sermorelin, and more. Understand how peptides work and their benefits for health and wellness.',
    icon: (
      <svg
        className="h-10 w-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Shipping & Delivery',
    description:
      'Information about our domestic and international shipping options. Learn about our cold chain packaging, delivery times, and how we ensure your peptide medications arrive safely.',
    icon: (
      <svg
        className="h-10 w-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Quality & Safety',
    description:
      'Discover how Winston\'s maintains the highest standards as a 503B outsourcing facility. Learn about our sterile compounding processes, quality testing, and certifications.',
    icon: (
      <svg
        className="h-10 w-10 text-primary-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export function ArticleCategories() {
  return (
    <section className="bg-accent-gray px-4 py-16 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-[20px] bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="font-heading text-2xl font-semibold text-secondary-900">
                {category.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-secondary-700">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
