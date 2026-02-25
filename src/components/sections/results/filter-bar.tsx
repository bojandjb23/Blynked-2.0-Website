"use client";

import { useState, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types/case-study";

type IndustryFilter = "All" | "Software Dev" | "SaaS" | "Tech" | "Digital Agency";
type OutcomeFilter = "All" | "Pipeline Growth" | "Revenue" | "Speed to Results";

interface FilterBarProps {
  caseStudies: CaseStudy[];
  onFilterChange: (filtered: CaseStudy[]) => void;
}

const industries: IndustryFilter[] = ["All", "Software Dev", "SaaS", "Tech", "Digital Agency"];
const outcomes: OutcomeFilter[] = ["All", "Pipeline Growth", "Revenue", "Speed to Results"];

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 text-caption rounded-full border transition-all duration-200",
        active
          ? "bg-accent-glow text-accent border-border-accent"
          : "bg-transparent text-text-tertiary border-border-glass hover:text-text-secondary hover:border-border-glass"
      )}
    >
      {label}
    </button>
  );
}

export function FilterBar({ caseStudies, onFilterChange }: FilterBarProps) {
  const [industryFilter, setIndustryFilter] = useState<IndustryFilter>("All");
  const [outcomeFilter, setOutcomeFilter] = useState<OutcomeFilter>("All");

  const applyFilters = useCallback(
    (industry: IndustryFilter, outcome: OutcomeFilter) => {
      let filtered = caseStudies;

      if (industry !== "All") {
        filtered = filtered.filter((cs) => cs.industryTag === industry);
      }
      if (outcome !== "All") {
        filtered = filtered.filter((cs) => cs.outcomeTag === outcome);
      }

      onFilterChange(filtered);
    },
    [caseStudies, onFilterChange]
  );

  const handleIndustryChange = (industry: IndustryFilter) => {
    setIndustryFilter(industry);
    applyFilters(industry, outcomeFilter);
  };

  const handleOutcomeChange = (outcome: OutcomeFilter) => {
    setOutcomeFilter(outcome);
    applyFilters(industryFilter, outcome);
  };

  return (
    <div className="py-8">
      <Container>
        <div className="glass p-6 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <p className="text-caption text-text-tertiary mb-3">Industry</p>
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <FilterPill
                  key={industry}
                  label={industry}
                  active={industryFilter === industry}
                  onClick={() => handleIndustryChange(industry)}
                />
              ))}
            </div>
          </div>
          <div className="hidden sm:block w-px bg-border-glass" />
          <div className="flex-1">
            <p className="text-caption text-text-tertiary mb-3">Outcome</p>
            <div className="flex flex-wrap gap-2">
              {outcomes.map((outcome) => (
                <FilterPill
                  key={outcome}
                  label={outcome}
                  active={outcomeFilter === outcome}
                  onClick={() => handleOutcomeChange(outcome)}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
