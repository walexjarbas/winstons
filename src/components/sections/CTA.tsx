import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="relative z-10">
            <h2 className="text-white">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
              Let us help you build something extraordinary. Contact us today to
              discuss your project and see how we can bring your vision to life.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </Container>
    </section>
  );
}
