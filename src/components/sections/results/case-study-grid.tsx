"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/shared/glow-card";
import { TiltCard } from "@/components/shared/tilt-card";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import type { CaseStudy } from "@/types/case-study";

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

function CaseStudyCard({
  study,
  featured = false,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  return (
    <Link href={`/results/${study.slug}`} className="block group">
      <TiltCard maxTilt={featured ? 3 : 5}>
        <GlowCard className="h-full flex flex-col p-8 md:p-10">
          {/* Top accent line */}
          <div
            className="absolute top-0 left-8 right-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(244,121,32,0.2), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="flex items-center justify-between mb-6">
            <h3
              className={
                featured
                  ? "text-heading-lg text-text-primary"
                  : "text-heading-md text-text-primary"
              }
            >
              {study.clientName}
            </h3>
            <Badge variant="default">{study.industryTag}</Badge>
          </div>

          <div className="mb-6">
            <span
              className={
                featured
                  ? "text-metric text-accent font-mono"
                  : "text-metric-sm text-accent font-mono"
              }
            >
              {study.heroMetric}
            </span>
            <span className="text-caption text-text-tertiary ml-3">
              {study.heroMetricLabel}
            </span>
          </div>

          <p
            className={`text-text-secondary flex-1 mb-6 ${
              featured ? "text-body-md" : "text-body-sm"
            }`}
          >
            {study.resultSummary}
          </p>

          {/* Pillar tags for featured card */}
          {featured && study.pillarsUsed.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {study.pillarsUsed.map((pillar) => (
                <Badge key={pillar} variant="accent">
                  {pillar}
                </Badge>
              ))}
            </div>
          )}

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
      </TiltCard>
    </Link>
  );
}

export function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  if (caseStudies.length === 0) {
    return (
      <div className="py-16">
        <Container>
          <GlowCard className="p-12 text-center">
            <p className="text-body-md text-text-secondary">
              No case studies match your current filters. Try adjusting your
              selection.
            </p>
          </GlowCard>
        </Container>
      </div>
    );
  }

  const [firstStudy, ...restStudies] = caseStudies;

  return (
    <div className="py-8">
      <Container>
        {/* Asymmetric grid: first card spans 2 cols */}
        <StaggerReveal
          className="grid md:grid-cols-2 gap-8"
          staggerDelay={150}
        >
          {/* Featured first card spans full width */}
          {firstStudy && (
            <div className="md:col-span-2">
              <CaseStudyCard study={firstStudy} featured />
            </div>
          )}

          {/* Rest of the cards in 2-column grid */}
          {restStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </StaggerReveal>
      </Container>
    </div>
  );
}
