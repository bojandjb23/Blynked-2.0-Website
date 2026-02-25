import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { featuredTestimonial } from "@/data/testimonials";

export function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 bg-bg-primary overflow-hidden"
    >
      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="glass-elevated p-8 md:p-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-[16px]" />

            {/* Large decorative quotation mark */}
            <div className="absolute top-4 right-8 text-[6rem] leading-none text-accent/[0.06] font-display italic select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-bg-tertiary flex items-center justify-center text-text-tertiary text-xl font-bold">
                  {featuredTestimonial.authorName.charAt(0)}
                </div>
              </div>
              <div className="flex-1">
                {/* Pull quote in editorial serif italic */}
                <blockquote className="text-heading-md text-text-primary mb-6 font-display italic">
                  &ldquo;{featuredTestimonial.pullQuote}&rdquo;
                </blockquote>

                {featuredTestimonial.metric && (
                  <p className="text-accent font-mono text-metric-sm mb-4">
                    {featuredTestimonial.metric}{" "}
                    <span className="text-caption text-text-tertiary font-sans">
                      {featuredTestimonial.metricLabel}
                    </span>
                  </p>
                )}

                <div>
                  <p className="text-body-md text-text-primary font-semibold">
                    {featuredTestimonial.authorName}
                  </p>
                  <p className="text-caption text-text-tertiary">
                    {featuredTestimonial.authorTitle},{" "}
                    {featuredTestimonial.authorCompany}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
