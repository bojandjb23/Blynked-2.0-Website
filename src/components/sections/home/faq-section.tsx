import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { homepageFAQ } from "@/data/faq";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 bg-bg-primary overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-eyebrow mb-4">Got Questions?</p>
            <h2 className="text-display-lg text-text-primary max-w-3xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="max-w-3xl">
            <FAQAccordion items={homepageFAQ} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
