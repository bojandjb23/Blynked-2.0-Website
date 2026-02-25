"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Metric } from "@/components/ui/metric";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

interface ResultsSectionProps {
  beforeAfter: { metric: string; before: string; after: string }[];
  results: { value: string; label: string }[];
}

export function ResultsSection({ beforeAfter, results }: ResultsSectionProps) {
  return (
    <Section background="primary" className="relative overflow-hidden">
      {/* Decorative background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-lg text-text-primary mb-12">
              The Results
            </h2>

            {/* Before/After comparison in GlowCard */}
            <GlowCard className="overflow-hidden mb-16">
              <div className="grid grid-cols-3 gap-0">
                {/* Header row */}
                <div className="p-4 md:p-6 border-b border-border-glass">
                  <p className="text-caption text-text-tertiary font-semibold">
                    Metric
                  </p>
                </div>
                <div className="p-4 md:p-6 border-b border-border-glass border-l border-border-glass">
                  <p className="text-caption text-text-tertiary">Before</p>
                </div>
                <div
                  className="p-4 md:p-6 border-b border-l border-border-glass relative"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(244,121,32,0.08), rgba(244,121,32,0.02))",
                  }}
                >
                  {/* Top glow accent for "After" header */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(244,121,32,0.4), transparent)",
                    }}
                    aria-hidden="true"
                  />
                  <p className="text-caption text-accent font-semibold">
                    After
                  </p>
                </div>

                {/* Data rows */}
                {beforeAfter.map((row, index) => (
                  <div key={row.metric} className="contents">
                    <div
                      className={`p-4 md:p-6 ${
                        index < beforeAfter.length - 1
                          ? "border-b border-border-glass"
                          : ""
                      }`}
                    >
                      <p className="text-body-sm text-text-primary font-semibold">
                        {row.metric}
                      </p>
                    </div>
                    <div
                      className={`p-4 md:p-6 border-l border-border-glass ${
                        index < beforeAfter.length - 1
                          ? "border-b border-border-glass"
                          : ""
                      }`}
                    >
                      <p className="text-body-sm text-text-tertiary">
                        {row.before}
                      </p>
                    </div>
                    <div
                      className={`p-4 md:p-6 border-l border-border-glass relative ${
                        index < beforeAfter.length - 1
                          ? "border-b border-border-glass"
                          : ""
                      }`}
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(244,121,32,0.06), rgba(244,121,32,0.01))",
                      }}
                    >
                      <p className="text-body-md text-text-primary font-bold">
                        {row.after}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </ScrollReveal>

        {/* Metric counters */}
        <StaggerReveal
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          staggerDelay={200}
        >
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
