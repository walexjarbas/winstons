import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { PageHeader } from '@/components/ui/PageHeader';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive range of services.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Comprehensive solutions tailored to your needs."
      />
      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
