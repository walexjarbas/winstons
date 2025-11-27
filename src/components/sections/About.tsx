import { Container } from '@/components/ui/Container';

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

export function About() {
  return (
    <section className="bg-secondary-50 py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-secondary-900">
              We Build Digital Experiences That Matter
            </h2>
            <p className="mt-6 text-lg text-secondary-600">
              With over a decade of experience, we have helped hundreds of
              businesses transform their digital presence. Our team of experts
              combines creativity with technical excellence to deliver
              solutions that exceed expectations.
            </p>
            <p className="mt-4 text-lg text-secondary-600">
              We believe in building lasting partnerships with our clients,
              understanding their unique challenges, and crafting tailored
              solutions that drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <div className="text-4xl font-bold text-primary-600">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-secondary-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
