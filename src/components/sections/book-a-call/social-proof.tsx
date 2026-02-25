import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { testimonials } from "@/data/testimonials";

export function BookACallSocialProof() {
  // Pick the second testimonial for variety (Nate McGuire / Mayven Studios)
  const miniTestimonial = testimonials[1];

  return (
    <Section background="primary">
      <Container className="max-w-2xl">
        <ScrollReveal>
          <TestimonialBlock testimonial={miniTestimonial} variant="mini" />
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-caption text-text-tertiary">
            <span>
              <span className="text-accent font-semibold">20+</span> companies
              trust Blynked
            </span>
            <span className="text-border-glass">|</span>
            <span>
              <span className="text-accent font-semibold">12+</span> months
              average partnership
            </span>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
