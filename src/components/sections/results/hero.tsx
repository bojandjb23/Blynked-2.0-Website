import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const heroMetrics = [
  { value: "10x", label: "Avg lead quality improvement" },
  { value: "$139K", label: "Closed in 90 days" },
  { value: "20x", label: "ROI" },
];

export function ResultsHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.06),transparent_60%)]" />

      <Container className="relative z-10 py-16 sm:py-24">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-display-xl text-text-primary mb-6">
              We Don&rsquo;t Just Promise Results. We Prove Them.
            </h1>
            <p className="text-body-lg text-text-secondary">
              Real companies. Real metrics. Real growth.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto" staggerDelay={150}>
          {heroMetrics.map((metric) => (
            <Metric
              key={metric.label}
              value={metric.value}
              label={metric.label}
              size="lg"
            />
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
