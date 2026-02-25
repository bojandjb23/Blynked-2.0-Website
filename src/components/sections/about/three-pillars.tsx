"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const pillars = [
  {
    title: "Delivery",
    status: "Active",
    statusVariant: "accent" as const,
    description:
      "Our core growth partnerships. We embed with tech companies to build predictable, scalable pipelines from the ground up.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 4l10 6v8l-10 6L4 18v-8l10-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 14v10M14 14l10-6M14 14L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Academy",
    status: "Coming Soon",
    statusVariant: "muted" as const,
    description:
      "Training programs that teach founders and teams how to run their own growth engine using our proven frameworks.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M4 10l10-5 10 5-10 5-10-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 14l10 5 10-5M4 18l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Platform",
    status: "Future",
    statusVariant: "muted" as const,
    description:
      "Software tools that operationalize the Traction Framework, making growth systems accessible at scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14h8M14 10v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ThreePillars() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4">The Vision</p>
            <h2 className="text-heading-lg text-text-primary">
              We&rsquo;re Building Something Bigger
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar) => (
            <Card key={pillar.title} variant="glass" className="p-8">
              <div className="flex items-center justify-between mb-5">
                <div className="text-accent">{pillar.icon}</div>
                <Badge variant={pillar.statusVariant}>{pillar.status}</Badge>
              </div>
              <h3 className="text-heading-sm text-text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-body-sm text-text-secondary">
                {pillar.description}
              </p>
            </Card>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
