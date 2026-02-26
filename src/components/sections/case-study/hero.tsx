import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Metric } from "@/components/ui/metric";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import type { CaseStudy } from "@/types/case-study";

interface CaseStudyHeroProps {
  study: CaseStudy;
}

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  // Build metric cards: first 3 results + pillars count
  const metricCards: { value: string; label: string }[] = [
    ...study.results.slice(0, 3),
    {
      value: String(study.pillarsUsed.length),
      label: study.pillarsUsed.length === 1 ? "Pillar deployed" : "Pillars deployed",
    },
  ];

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
        {/* Top section: client name, industry tag, headline */}
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-6">
            <div className="flex items-center justify-center gap-3 mb-8">
              <p className="text-eyebrow tracking-[0.2em]">
                {study.clientName.toUpperCase()} CASE STUDY
              </p>
              <Badge variant="default">{study.industryTag}</Badge>
            </div>
            <h1 className="text-display-xl text-text-primary mb-4">
              <span className="text-accent">{study.heroMetric}</span>{" "}
              {study.heroMetricLabel}
            </h1>
            <p className="text-body-md text-text-secondary max-w-2xl mx-auto">
              {study.resultSummary}
            </p>
          </div>
        </ScrollReveal>

        {/* Metric cards row */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            {metricCards.map((card) => (
              <div
                key={card.label}
                className="glass-elevated rounded-[16px] p-6 text-center"
              >
                <Metric
                  value={card.value}
                  label={card.label}
                  size="sm"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
