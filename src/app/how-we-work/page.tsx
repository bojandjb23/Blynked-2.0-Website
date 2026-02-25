import type { Metadata } from "next";
import { HowWeWorkHero } from "@/components/sections/how-we-work/hero";
import { FrameworkPillars } from "@/components/sections/how-we-work/framework-pillars";
import { EngagementProgression } from "@/components/sections/how-we-work/engagement-progression";
import { EngagementModels } from "@/components/sections/how-we-work/engagement-models";
import { Timeline } from "@/components/sections/how-we-work/timeline";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "How We Work — The Traction Framework | Blynked",
  description:
    "A revenue engineering system that transforms how tech companies build predictable pipeline. Four pillars. Five phases. One system that works.",
  openGraph: {
    title: "How We Work — The Traction Framework | Blynked",
    description:
      "A revenue engineering system that transforms how tech companies build predictable pipeline. Four pillars. Five phases. One system that works.",
    url: "https://blynked.io/how-we-work",
  },
};

export default function HowWeWorkPage() {
  return (
    <>
      <HowWeWorkHero />
      <FrameworkPillars />
      <EngagementProgression />
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
