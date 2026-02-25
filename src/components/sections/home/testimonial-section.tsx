import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { TestimonialBlock } from "@/components/shared/testimonial-block";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { featuredTestimonial } from "@/data/testimonials";

export function TestimonialSection() {
  return (
    <Section background="primary" id="testimonials">
      <Container>
        <ScrollReveal>
          <TestimonialBlock
            testimonial={featuredTestimonial}
            variant="full"
          />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
