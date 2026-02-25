"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import type { CaseStudy } from "@/types/case-study";

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/results/${study.slug}`} className="block group">
      <Card variant="interactive" as="article" className="h-full flex flex-col p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-heading-md text-text-primary">{study.clientName}</h3>
          <Badge variant="default">{study.industryTag}</Badge>
        </div>

        <div className="mb-6">
          <span className="text-metric-sm text-accent font-mono">
            {study.heroMetric}
          </span>
          <span className="text-caption text-text-tertiary ml-2">
            {study.heroMetricLabel}
          </span>
        </div>

        <p className="text-body-sm text-text-secondary flex-1 mb-6">
          {study.resultSummary}
        </p>

        <div className="flex items-center gap-2 text-accent font-medium text-caption group-hover:gap-3 transition-all duration-200">
          Read Story
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Card>
    </Link>
  );
}

export function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  if (caseStudies.length === 0) {
    return (
      <div className="py-16">
        <Container>
          <div className="text-center glass p-12">
            <p className="text-body-md text-text-secondary">
              No case studies match your current filters. Try adjusting your selection.
            </p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-8">
      <Container>
        <StaggerReveal className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </StaggerReveal>
      </Container>
    </div>
  );
}
