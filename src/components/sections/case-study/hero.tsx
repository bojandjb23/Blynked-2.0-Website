import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Metric } from "@/components/ui/metric";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlowCard } from "@/components/shared/glow-card";
import type { CaseStudy } from "@/types/case-study";

interface CaseStudyHeroProps {
  study: CaseStudy;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Extra atmospheric depth */}
      <div
        className="absolute top-[20%] right-[15%] w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.08), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 sm:py-32">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-eyebrow mb-8 tracking-[0.2em]">
              {study.clientName.toUpperCase()} CASE STUDY
            </p>
            <h1 className="text-display-xl text-text-primary mb-4">
              <span className="text-accent">{study.heroMetric}</span>{" "}
              {study.heroMetricLabel}
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <GlowCard className="max-w-3xl mx-auto p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <p className="text-caption text-text-tertiary mb-1">Client</p>
                <p className="text-body-md text-text-primary font-semibold">
                  {study.clientName}
                </p>
              </div>
              <div>
                <p className="text-caption text-text-tertiary mb-1">
                  Industry
                </p>
                <p className="text-body-md text-text-primary">
                  {study.industry}
                </p>
              </div>
              {study.companySize && (
                <div>
                  <p className="text-caption text-text-tertiary mb-1">
                    Company Size
                  </p>
                  <p className="text-body-md text-text-primary">
                    {study.companySize}
                  </p>
                </div>
              )}
              <div>
                <p className="text-caption text-text-tertiary mb-1">
                  Pillars Used
                </p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {study.pillarsUsed.map((pillar) => (
                    <Badge key={pillar} variant="accent">
                      {pillar}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-border-glass mt-8 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {study.results.map((result) => (
                  <Metric
                    key={result.label}
                    value={result.value}
                    label={result.label}
                    size="sm"
                  />
                ))}
              </div>
            </div>
          </GlowCard>
        </ScrollReveal>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
