import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hover className="h-full">
      <CardHeader>
        {service.icon && (
          <div className="mb-3 inline-flex rounded-lg bg-primary-100 p-3 text-primary-600">
            <span className="text-2xl">{service.icon}</span>
          </div>
        )}
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mt-0">{service.description}</CardDescription>
        {service.features && (
          <ul className="mt-4 space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-secondary-600">
                <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
