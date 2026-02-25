"use client";

import { useState, useCallback } from "react";
import { FilterBar } from "./filter-bar";
import { CaseStudyGrid } from "./case-study-grid";
import type { CaseStudy } from "@/types/case-study";

interface ResultsContentProps {
  caseStudies: CaseStudy[];
}

export function ResultsContent({ caseStudies }: ResultsContentProps) {
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(caseStudies);

  const handleFilterChange = useCallback((filtered: CaseStudy[]) => {
    setFilteredStudies(filtered);
  }, []);

  return (
    <>
      <FilterBar caseStudies={caseStudies} onFilterChange={handleFilterChange} />
      <CaseStudyGrid caseStudies={filteredStudies} />
    </>
  );
}
