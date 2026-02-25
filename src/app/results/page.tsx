import type { Metadata } from "next";
import { ResultsHero } from "@/components/sections/results/hero";
import { ResultsContent } from "@/components/sections/results/results-content";
import { AggregateImpact } from "@/components/sections/results/aggregate-impact";
import { CTABanner } from "@/components/shared/cta-banner";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Results — Proven Growth for Tech Companies",
  description:
    "Real companies. Real metrics. Real growth. See how Blynked has delivered 10x lead quality, $139K closed in 90 days, and 20x ROI for tech companies.",
  openGraph: {
    title: "Results — Proven Growth for Tech Companies | Blynked",
    description:
      "Real companies. Real metrics. Real growth. See how Blynked has delivered 10x lead quality, $139K closed in 90 days, and 20x ROI.",
    url: "https://blynked.io/results",
  },
};

export default function ResultsPage() {
  return (
    <>
      <ResultsHero />
      <ResultsContent caseStudies={caseStudies} />
      <AggregateImpact />
      <CTABanner
        headline="Want to Be Our Next Success Story?"
        subtext="Book a 30-minute strategy call. We'll show you how the Traction Framework can work for your business."
        buttonText="Book Your Strategy Call"
        buttonHref="/book-a-call"
      />
    </>
  );
}
