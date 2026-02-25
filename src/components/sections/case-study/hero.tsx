import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metric } from "@/components/ui/metric";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import type { CaseStudy } from "@/types/case-study";

interface CaseStudyHeroProps {
  study: CaseStudy;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.06),transparent_60%)]" />

      <Container className="relative z-10 py-16 sm:py-24">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-eyebrow mb-6">{study.clientName} CASE STUDY</p>
            <h1 className="text-display-xl text-text-primary mb-4">
              <span className="text-accent">{study.heroMetric}</span>{" "}
              {study.heroMetricLabel}
            </h1>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Card variant="elevated" className="max-w-3xl mx-auto p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <p className="text-caption text-text-tertiary mb-1">Client</p>
                <p className="text-body-md text-text-primary font-semibold">{study.clientName}</p>
              </div>
              <div>
                <p className="text-caption text-text-tertiary mb-1">Industry</p>
                <p className="text-body-md text-text-primary">{study.industry}</p>
              </div>
              {study.companySize && (
                <div>
                  <p className="text-caption text-text-tertiary mb-1">Company Size</p>
                  <p className="text-body-md text-text-primary">{study.companySize}</p>
                </div>
              )}
              <div>
                <p className="text-caption text-text-tertiary mb-1">Pillars Used</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {study.pillarsUsed.map((pillar) => (
                    <Badge key={pillar} variant="accent">{pillar}</Badge>
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
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  );
}
