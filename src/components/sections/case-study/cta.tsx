import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface CaseStudyCTAProps {
  clientName: string;
  nextStudySlug?: string;
  nextStudyName?: string;
}

export function CaseStudyCTA({ clientName, nextStudySlug, nextStudyName }: CaseStudyCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.08),transparent_70%)]" />
      <Container className="relative z-10 text-center">
        <ScrollReveal>
          <div className="glass-elevated p-8 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-text-primary mb-4">
              Get Results Like {clientName}
            </h2>
            <p className="text-body-md text-text-secondary mb-8 max-w-xl mx-auto">
              Book a 30-minute strategy call. No pitch &mdash; just an honest assessment of where you stand and what&rsquo;s possible.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/book-a-call" className="text-lg px-10 py-5">
                Book a Call
              </Button>
              {nextStudySlug && nextStudyName && (
                <Button href={`/results/${nextStudySlug}`} variant="secondary">
                  Next: {nextStudyName}
                </Button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
