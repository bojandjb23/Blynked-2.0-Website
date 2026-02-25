import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const impactMetrics = [
  { value: "50+", label: "Qualified meetings generated" },
  { value: "20+", label: "Companies partnered" },
  { value: "90%", label: "Retention rate" },
];

export function AggregateImpact() {
  return (
    <Section background="secondary">
      <Container>
        <ScrollReveal>
          <h2 className="text-heading-lg text-text-primary text-center mb-16">
            The Blynked Effect
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto" staggerDelay={200}>
          {impactMetrics.map((metric) => (
            <Metric
              key={metric.label}
              value={metric.value}
              label={metric.label}
              size="lg"
            />
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
