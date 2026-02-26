import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { SocialProofBar } from "@/components/sections/home/social-proof-bar";
import { ProblemSection } from "@/components/sections/home/problem-section";
import { FrameworkPreview } from "@/components/sections/home/framework-preview";
import { EngagementProgression } from "@/components/sections/home/engagement-progression";
import { CaseStudyHighlights } from "@/components/sections/home/case-study-highlights";
import { ResultsTimeline } from "@/components/sections/home/results-timeline";
import { StageRouting } from "@/components/sections/home/stage-routing";
import { Qualification } from "@/components/sections/home/qualification";
import { TestimonialSection } from "@/components/sections/home/testimonial-section";
import { Differentiators } from "@/components/sections/home/differentiators";
import { FAQSection } from "@/components/sections/home/faq-section";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Blynked — Revenue Engineering for Tech Companies",
  description:
    "We engineer predictable revenue pipelines for tech companies doing $1.5M-$12M. No vendor BS — just a system that works.",
  openGraph: {
    title: "Blynked — Revenue Engineering for Tech Companies",
    description:
      "We engineer predictable revenue pipelines for tech companies doing $1.5M-$12M. No vendor BS — just a system that works.",
    url: "https://blynked.io",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "Blynked — Revenue Engineering for Tech Companies",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <FrameworkPreview />
      <EngagementProgression />
      <CaseStudyHighlights />
      <ResultsTimeline />
      <StageRouting />
      <Qualification />
      <TestimonialSection />
      <CTABanner
        headline="Stop Hoping. Start Engineering."
        subtext="Your competitors are building pipeline systems while you wait for referrals. Let's change that."
        buttonText="Book Your Strategy Call"
        buttonHref="/book-a-call"
        trustSignal="Trusted by 20+ tech companies | Average partner ROI: 10x+"
      />
      <FAQSection />
      <Differentiators />
      <CTABanner
        headline="Ready to Engineer Predictable Revenue?"
        subtext="Book a 30-minute strategy call. No pitch — just an honest assessment of where you stand and what's possible."
        buttonText="Book Your Strategy Call"
        buttonHref="/book-a-call"
        trustSignal="Trusted by 20+ tech companies | Average partner ROI: 10x+"
      />
    </>
  );
}
