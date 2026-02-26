import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { caseStudies } from "@/data/case-studies";

interface RelatedStudiesProps {
  currentSlug: string;
}

export function RelatedStudies({ currentSlug }: RelatedStudiesProps) {
  const otherStudies = caseStudies
    .filter((cs) => cs.slug !== currentSlug)
    .slice(0, 3);

  if (otherStudies.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-bg-primary relative overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4 tracking-[0.2em]">
              KEEP READING
            </p>
            <h2 className="text-heading-lg text-text-primary">
              More Success Stories
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {otherStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/results/${study.slug}`}
                className="block group"
              >
                <GlowCard className="h-full flex flex-col p-6 md:p-8">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(244,121,32,0.2), transparent)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-heading-md text-text-primary">
                      {study.clientName}
                    </h3>
                    <Badge variant="default">{study.industryTag}</Badge>
                  </div>

                  <div className="mb-4">
                    <span className="text-metric-sm text-accent font-mono">
                      {study.heroMetric}
                    </span>
                    <span className="text-caption text-text-tertiary ml-3">
                      {study.heroMetricLabel}
                    </span>
                  </div>

                  <p className="text-body-sm text-text-secondary flex-1 mb-6">
                    {study.resultSummary}
                  </p>

                  <div className="flex items-center gap-2 text-accent font-medium text-caption group-hover:gap-3 transition-all duration-300">
                    Read Story
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </GlowCard>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
