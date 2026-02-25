"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function OriginStory() {
  return (
    <Section background="secondary">
      <Container className="max-w-3xl">
        <ScrollReveal>
          <p className="text-eyebrow mb-6">Our Story</p>
          <h2 className="text-heading-lg text-text-primary mb-10">
            Why We Exist
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          <ScrollReveal>
            <p className="text-body-md text-text-secondary">
              Blynked was born from a simple observation: most growth agencies
              sell tactics, not transformation. Founders hire an agency for cold
              email, another for LinkedIn, another for ads&nbsp;&mdash; and end
              up with fragmented efforts and no real pipeline.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-body-md text-text-secondary">
              We built the Traction Framework to change that. Instead of selling
              channels, we sell a system&nbsp;&mdash; one that takes a company
              from unpredictable referrals to a repeatable, scalable growth
              engine.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-body-md text-text-secondary">
              Our partners don&rsquo;t just get more leads. They get a
              fundamentally different relationship with their revenue. The
              pipeline becomes predictable. The founder steps out of every sale.
              The business scales on systems, not heroics.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-body-md text-text-accent font-semibold">
              Our BHAG: become the #1 growth partner in the Netherlands through
              full funnel control.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
