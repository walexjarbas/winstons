import Image from 'next/image';
import Link from 'next/link';

interface Step {
  number: number;
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  imagePosition: 'left' | 'right';
}

const steps: Step[] = [
  {
    number: 1,
    label: 'Account Setup',
    title: 'Set up a meeting',
    description:
      'Schedule a meeting with our team through our website chat feature or by completing a contact form. A dedicated Winston\'s Liaison will be assigned to discuss the next steps to getting started with our peptide formulations.',
    image: '/images/who-we-serve/step-1.jpg',
    imageAlt: 'A worker looking at a machine that shows a microscopic view',
    buttonText: 'Contact Us',
    buttonHref: '/contact',
    imagePosition: 'left',
  },
  {
    number: 2,
    label: 'Account Setup',
    title: 'Review our offerings',
    description:
      'During your meeting, your Winston\'s Liaison will help you evaluate your operational needs, navigate our peptide product catalog and pricing, and guide you through the account setup process including licensing requirements.',
    image: '/images/who-we-serve/step-2.jpg',
    imageAlt:
      'A worker in blue scrubs, a mask, and hairnet touching a large machine door',
    imagePosition: 'right',
  },
  {
    number: 3,
    label: 'Account Setup',
    title: 'Establish an account',
    description:
      'After coordinating with your liaison and exploring our peptide offerings, you\'ll receive account setup documents for approval. With your account, you can begin a streamlined ordering process, engage with a dedicated team member, and access our clinical pharmacists. Our technology enables effortless data exchange through integrated API software.',
    image: '/images/who-we-serve/step-3.jpg',
    imageAlt:
      'A worker in a white clean suit pressing a button on a steel machine',
    imagePosition: 'left',
  },
];

export function HowToOrder() {
  return (
    <section className="bg-[#f1f0eb] px-4 py-10 pb-24 lg:px-[120px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-4 text-center">
          <span className="text-sm font-normal uppercase tracking-[1.5px] text-primary-600">
            How to Order
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold leading-tight text-secondary-900 md:text-4xl lg:text-[44px]">
            Set up an account in a few quick
            <br />
            <em className="italic">steps to order peptide medications</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-24 space-y-24 lg:mt-36 lg:space-y-36">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col items-start gap-10 lg:flex-row lg:items-start lg:justify-between ${
                step.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-[560px]">
                <div className="relative h-[400px] w-full overflow-hidden rounded-[20px] lg:h-[688px]">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-[560px]">
                {/* Number Badge */}
                <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white">
                  <span className="text-[36px] font-bold text-secondary-900">
                    {step.number}
                  </span>
                </div>

                {/* Text Content */}
                <div className="mt-8">
                  <span className="text-sm font-normal uppercase tracking-[1.5px] text-primary-600">
                    {step.label}
                  </span>
                  <h3 className="mt-1 font-heading text-3xl font-semibold text-secondary-900 md:text-[43px] md:leading-[1.33]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-secondary-700">
                    {step.description}
                  </p>
                  {step.buttonText && step.buttonHref && (
                    <div className="mt-6">
                      <Link
                        href={step.buttonHref}
                        className="inline-flex items-center justify-center rounded-lg border-2 border-primary-600 bg-primary-600 px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-700"
                      >
                        {step.buttonText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
