"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

interface ResultsSectionProps {
  beforeAfter: { metric: string; before: string; after: string }[];
  results: { value: string; label: string }[];
}

export function ResultsSection({ beforeAfter, results }: ResultsSectionProps) {
  return (
    <Section background="primary">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-text-primary mb-12">The Results</h2>

            {/* Before/After table */}
            <div className="glass-elevated overflow-hidden mb-12">
              <div className="grid grid-cols-3 gap-0">
                {/* Header row */}
                <div className="p-4 md:p-6 border-b border-border-glass">
                  <p className="text-caption text-text-tertiary">Metric</p>
                </div>
                <div className="p-4 md:p-6 border-b border-border-glass border-l border-border-glass">
                  <p className="text-caption text-text-tertiary">Before</p>
                </div>
                <div className="p-4 md:p-6 border-b border-border-glass border-l border-border-glass bg-accent-glow">
                  <p className="text-caption text-accent">After</p>
                </div>

                {/* Data rows */}
                {beforeAfter.map((row, index) => (
                  <div key={row.metric} className="contents">
                    <div className={`p-4 md:p-6 ${index < beforeAfter.length - 1 ? "border-b border-border-glass" : ""}`}>
                      <p className="text-body-sm text-text-primary font-semibold">{row.metric}</p>
                    </div>
                    <div className={`p-4 md:p-6 border-l border-border-glass ${index < beforeAfter.length - 1 ? "border-b border-border-glass" : ""}`}>
                      <p className="text-body-sm text-text-tertiary">{row.before}</p>
                    </div>
                    <div className={`p-4 md:p-6 border-l border-border-glass bg-accent-glow ${index < beforeAfter.length - 1 ? "border-b border-border-glass" : ""}`}>
                      <p className="text-body-sm text-text-primary font-semibold">{row.after}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Metric counters */}
        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto" staggerDelay={200}>
          {results.map((result) => (
            <Metric
              key={result.label}
              value={result.value}
              label={result.label}
              size="lg"
            />
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
