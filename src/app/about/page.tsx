import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/hero";
import { OriginStory } from "@/components/sections/about/origin-story";
import { TeamSection } from "@/components/sections/about/team-section";
import { Values } from "@/components/sections/about/values";
import { ThreePillars } from "@/components/sections/about/three-pillars";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in the Netherlands. We build growth engines for tech companies through our Traction Framework. Meet the team behind Blynked.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <TeamSection />
      <Values />
      <ThreePillars />
      <CTABanner
        headline="Want to Partner With Us?"
        subtext="We only take on partners where we know we can deliver. Book a call and let's see if there's a fit."
        buttonText="Start a Conversation"
        buttonHref="/book-a-call"
        trustSignal="Currently accepting 1-2 new partners per quarter"
      />
    </>
  );
}
