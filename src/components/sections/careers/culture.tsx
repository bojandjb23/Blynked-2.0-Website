"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const cultureValues = [
  {
    title: "Fighting Spirit",
    description:
      "The punching bag philosophy. We don't stop when it gets hard.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 4v4M14 20v4M4 14h4M20 14h4M7.05 7.05l2.83 2.83M18.12 18.12l2.83 2.83M7.05 20.95l2.83-2.83M18.12 9.88l2.83-2.83"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Wall of Wins + Graveyard",
    description:
      "Celebrate wins and learn from failures. Both matter.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M8 24V14M14 24V8M20 24V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 4l4 4M24 4l-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Less is More",
    description: "Quality over quantity in everything we do.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Cumulative Building",
    description:
      "We don't build on sand. Every effort compounds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M6 22h16M8 18h12M10 14h8M12 10h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function Culture() {
  return (
    <Section background="secondary">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4">Our Culture</p>
            <h2 className="text-heading-lg text-text-primary">
              What It&rsquo;s Like to Work Here
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cultureValues.map((value) => (
            <Card key={value.title} variant="interactive" className="p-8">
              <div className="text-accent mb-4">{value.icon}</div>
              <h3 className="text-heading-sm text-text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-body-sm text-text-secondary">
                {value.description}
              </p>
            </Card>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
