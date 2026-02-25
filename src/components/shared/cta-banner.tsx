import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "./scroll-reveal";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  trustSignal?: string;
}

export function CTABanner({
  headline = "Ready to Make Your Pipeline Predictable?",
  subtext = "Book a 30-minute strategy call. No pitch — just an honest assessment of where you stand and what's possible.",
  buttonText = "Book Your Strategy Call",
  buttonHref = "/book-a-call",
  trustSignal = "Trusted by 20+ tech companies | Average partner ROI: 10x+",
}: CTABannerProps) {
  return (
    <section className="py-16 sm:py-24 bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.08),transparent_70%)]" />
      <Container className="relative z-10 text-center">
        <ScrollReveal>
          <div className="glass-elevated p-8 md:p-16 max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-text-primary mb-4">{headline}</h2>
            <p className="text-body-md text-text-secondary mb-8 max-w-xl mx-auto">{subtext}</p>
            <Button href={buttonHref} className="text-lg px-10 py-5">
              {buttonText}
            </Button>
            {trustSignal && (
              <p className="text-caption text-text-tertiary mt-6">{trustSignal}</p>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
