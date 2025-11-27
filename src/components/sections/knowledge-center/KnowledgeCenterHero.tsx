export function KnowledgeCenterHero() {
  return (
    <section className="bg-white px-4 py-16 pb-12 lg:px-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[700px]">
          <span className="text-sm font-normal uppercase tracking-[1.5px] text-primary-600">
            Knowledge Center
          </span>
          <h1 className="mt-2 font-heading text-4xl font-semibold leading-[1.2] text-secondary-900 md:text-5xl lg:text-[56px] lg:leading-[1.2]">
            Learn about{' '}
            <em className="italic">peptide therapy</em>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-secondary-700">
            Explore educational resources about peptides, compounding standards,
            shipping information, and everything you need to know about
            Winston&apos;s quality peptide formulations.
          </p>
        </div>
      </div>
    </section>
  );
}
