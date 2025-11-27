import { Container } from './Container';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-secondary-900">{title}</h1>
          {description && (
            <p className="mt-4 text-lg text-secondary-600 sm:text-xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
