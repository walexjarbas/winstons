import Image from 'next/image';

export function ContactLocation() {
  return (
    <section className="bg-[#eaeaea] px-6 py-16 md:px-12 lg:px-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
            <Image
              src="/images/sections/facility.jpg"
              alt="Winston's Pharmacy Facility"
              fill
              className="object-cover"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-[15px] font-semibold uppercase tracking-wider text-[#7c2f37]">
                Contact Us
              </span>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-secondary-900 md:text-4xl lg:text-[46px] lg:leading-[1.1]">
                Where to find us
              </h2>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className="text-secondary-700">
                  <p className="font-semibold text-secondary-900">Winston&apos;s Pharmacy Inc</p>
                  <p>6301 RICHMOND AVE</p>
                  <p>Houston, TX 77057</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div className="text-secondary-700">
                  <p>
                    Phone:{' '}
                    <a
                      href="tel:7139446000"
                      className="font-semibold text-[#7c2f37] underline hover:no-underline"
                    >
                      (713) 944-6000
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="text-secondary-700">
                  <p>Pharmacy: Mon - Fri 7:30AM - 7:30PM</p>
                  <p>Call Center: Mon - Fri 7:00AM - 7:00PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
