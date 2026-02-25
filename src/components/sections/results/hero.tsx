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
    <section className="relative min-h-[70vh] flex items-center overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Extra atmospheric orbs */}
      <div
        className="absolute top-[30%] right-[15%] w-[350px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.08), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,200,0.04), transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 sm:py-32">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <p className="text-eyebrow mb-8 tracking-[0.2em]">
              PROVEN RESULTS
            </p>
            <h1 className="text-display-xl text-text-primary mb-6">
              We Don&rsquo;t Just Promise Results. We Prove Them.
            </h1>
            <p className="text-body-lg text-text-secondary">
              Real companies. Real metrics. Real growth.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto"
          staggerDelay={200}
        >
          {heroMetrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <Metric
                value={metric.value}
                label={metric.label}
                size="lg"
              />
            </div>
          ))}
        </StaggerReveal>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
