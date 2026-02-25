import type { Metadata } from "next";
import { HowWeWorkHero } from "@/components/sections/how-we-work/hero";
import { FrameworkPillars } from "@/components/sections/how-we-work/framework-pillars";
import { EngagementModels } from "@/components/sections/how-we-work/engagement-models";
import { Timeline } from "@/components/sections/how-we-work/timeline";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "How We Work — The Traction Framework",
  description:
    "A four-pillar system that transforms how tech companies acquire revenue. Positioning, Pipeline, Sales, and Scalability — no guesswork, no dependency on any single channel.",
  openGraph: {
    title: "How We Work — The Traction Framework | Blynked",
    description:
      "A four-pillar system that transforms how tech companies acquire revenue. Positioning, Pipeline, Sales, and Scalability.",
    url: "https://blynked.io/how-we-work",
  },
};

export default function HowWeWorkPage() {
  return (
    <>
      <HowWeWorkHero />
      <FrameworkPillars />
      <EngagementModels />
      <Timeline />
      <CTABanner
        headline="Let's See If the Traction Framework Is Right for You"
        subtext="Book a 30-minute strategy call. We'll assess your current pipeline and show you where the Traction Framework fits."
        buttonText="Book Your Strategy Call"
        buttonHref="/book-a-call"
      />
    </>
  );
}
