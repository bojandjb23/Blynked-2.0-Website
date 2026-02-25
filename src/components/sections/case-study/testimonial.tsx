import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface TestimonialProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  clientName: string;
}

export function CaseStudyTestimonial({ quote, authorName, authorTitle, clientName }: TestimonialProps) {
  return (
    <Section background="secondary">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto glass-elevated p-8 md:p-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-[16px]" />

            {/* Large decorative quote mark */}
            <div className="absolute top-6 right-8 text-accent opacity-10 text-[6rem] font-serif leading-none select-none" aria-hidden="true">
              &ldquo;
            </div>

            <div className="relative">
              <blockquote className="text-heading-md text-text-primary mb-8 leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-bg-tertiary flex items-center justify-center text-text-tertiary text-lg font-bold">
                  {authorName.charAt(0)}
                </div>
                <div>
                  <p className="text-body-md text-text-primary font-semibold">{authorName}</p>
                  <p className="text-caption text-text-tertiary">
                    {authorTitle}, {clientName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
