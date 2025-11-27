import Image from 'next/image';

const cards = [
  {
    title: 'Our Pharmacy',
    description:
      'See how outstanding customer service, pharmaceutical grade quality, and innovative peptide solutions come together to serve our clients.',
    image: '/images/sections/pharmacy.jpg',
  },
  {
    title: 'Our Facility',
    description:
      'Discover how our state-of-the-art compounding facility was built from the ground up with the highest quality standards for peptide production.',
    image: '/images/sections/facility.jpg',
  },
  {
    title: "Working at Winston's",
    description:
      'Our people define who we are as a company, so we strive to attract, train, and retain talented individuals who want to make a positive impact in healthcare.',
    image: '/images/sections/working.jpg',
  },
];

export function AboutCards() {
  return (
    <section className="bg-accent-gray px-4 py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-8 md:flex-row">
        {cards.map((card) => (
          <div key={card.title} className="flex-1">
            {/* Image */}
            <div className="relative h-[394px] w-full overflow-hidden rounded-[20px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-5">
              <h3 className="font-heading text-2xl font-bold text-black md:text-[33px]">
                {card.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-secondary-700">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
