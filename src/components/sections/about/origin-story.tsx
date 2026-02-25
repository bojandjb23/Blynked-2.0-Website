"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { TextReveal } from "@/components/shared/text-reveal";

export function OriginStory() {
  return (
    <Section background="secondary" className="relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div
        className="absolute top-[20%] left-0 w-[300px] h-[400px] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(244,121,32,0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="max-w-3xl relative">
        {/* Decorative SVG quote mark */}
        <div
          className="absolute -top-4 -left-4 sm:-left-8 pointer-events-none select-none"
          aria-hidden="true"
        >
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            opacity="0.06"
          >
            <path
              d="M30 80C13.5 80 0 66.5 0 50V45C0 20 16.5 5 38 0l4 10C26 16 20 28 20 40h10c11 0 20 9 20 20s-9 20-20 20zm70 0C83.5 80 70 66.5 70 50V45C70 20 86.5 5 108 0l4 10C96 16 90 28 90 40h10c11 0 20 9 20 20s-9 20-20 20z"
              fill="rgba(244,121,32,1)"
            />
          </svg>
        </div>

        <ScrollReveal>
          <p className="text-eyebrow mb-6 tracking-[0.2em]">OUR STORY</p>
          <h2 className="text-display-lg text-text-primary mb-12">
            Why We Exist
          </h2>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Blynked was born from a simple observation: most growth agencies
              sell tactics, not transformation. Founders hire an agency for cold
              email, another for LinkedIn, another for ads&nbsp;&mdash; and end
              up with fragmented efforts and no real pipeline.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              We built the Traction Framework to change that. Instead of selling
              channels, we sell a system&nbsp;&mdash; one that takes a company
              from unpredictable referrals to a repeatable, scalable growth
              engine.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Our partners don&rsquo;t just get more leads. They get a
              fundamentally different relationship with their revenue. The
              pipeline becomes predictable. The founder steps out of every sale.
              The business scales on systems, not heroics.
            </p>
          </ScrollReveal>

          {/* BHAG with TextReveal and decorative accent */}
          <div className="relative mt-12 pt-8 border-t border-border-glass">
            {/* Accent gradient line */}
            <div
              className="absolute top-0 left-0 w-24 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(244,121,32,0.6), transparent)",
              }}
              aria-hidden="true"
            />

            <TextReveal
              text="Our BHAG: become the #1 growth partner in the Netherlands through full funnel control."
              tag="p"
              className="text-heading-md text-text-accent font-semibold leading-relaxed"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
