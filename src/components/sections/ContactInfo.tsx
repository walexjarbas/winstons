import { siteConfig } from '@/config/site';

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-secondary-900">
          Get in Touch
        </h3>
        <p className="mt-2 text-secondary-600">
          We would love to hear from you. Fill out the form or reach out using
          the information below.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary-100 p-3 text-primary-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-secondary-900">Email</h4>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-primary-600 hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary-100 p-3 text-primary-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-secondary-900">Phone</h4>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="text-primary-600 hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary-100 p-3 text-primary-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-secondary-900">Address</h4>
            <p className="text-secondary-600">{siteConfig.contact.address}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-secondary-900">Business Hours</h4>
        <p className="mt-2 text-secondary-600">
          Monday - Friday: 9:00 AM - 6:00 PM<br />
          Saturday: 10:00 AM - 4:00 PM<br />
          Sunday: Closed
        </p>
      </div>
    </div>
  );
}
