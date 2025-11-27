export function ProductsHero() {
  return (
    <section className="bg-white px-4 py-16 pb-8 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[700px]">
          <span className="text-sm font-normal uppercase tracking-[1.5px] text-primary-600">
            Our Products
          </span>
          <h1 className="mt-2 font-heading text-4xl font-semibold leading-[1.2] text-secondary-900 md:text-5xl lg:text-[56px] lg:leading-[1.2]">
            Quality peptide{' '}
            <em className="italic">formulations</em>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-secondary-700">
            Explore our range of compounded peptide medications. Each product is
            manufactured in our state-of-the-art 503B facility with the highest
            quality standards.
          </p>
        </div>
      </div>
    </section>
  );
}
