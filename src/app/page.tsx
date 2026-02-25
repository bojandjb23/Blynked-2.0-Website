import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/hero";
import { SocialProofBar } from "@/components/sections/home/social-proof-bar";
import { ProblemSection } from "@/components/sections/home/problem-section";
import { FrameworkPreview } from "@/components/sections/home/framework-preview";
import { CaseStudyHighlights } from "@/components/sections/home/case-study-highlights";
import { Qualification } from "@/components/sections/home/qualification";
import { TestimonialSection } from "@/components/sections/home/testimonial-section";
import { Differentiators } from "@/components/sections/home/differentiators";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Blynked — Growth Partner for Tech Companies",
  description:
    "We build predictable revenue pipelines for tech companies doing $1.5M-$12M. No vendor BS — just a system that works.",
  openGraph: {
    title: "Blynked — Growth Partner for Tech Companies",
    description:
      "We build predictable revenue pipelines for tech companies doing $1.5M-$12M. No vendor BS — just a system that works.",
    url: "https://blynked.io",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "Blynked — Growth Partner for Tech Companies",
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
      <CaseStudyHighlights />
      <Qualification />
      <TestimonialSection />
      <Differentiators />
      <CTABanner />
    </>
  );
}
