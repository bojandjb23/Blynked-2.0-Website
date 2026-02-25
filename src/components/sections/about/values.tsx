"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const values = [
  {
    title: "Partner > Vendor",
    description: "Deep, long-term relationships over transactions.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 6C12 6 8.5 8.5 7 12c-1.5 3.5-1 7.5 1.5 10.5S14 26 16 26s5-1.5 7.5-3.5S26.5 15.5 25 12C23.5 8.5 20 6 16 6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16l3 3 5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Systems > Tactics",
    description: "Repeatable frameworks over one-off campaigns.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="18" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="18" y="18" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 10h4M14 22h4M10 14v4M22 14v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Less is More",
    description: "Fewer clients, deeper impact, better results.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Full Funnel Control",
    description: "End-to-end ownership, not channel-specific.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M8 8h16v4l-5 6v6l-6 2V18l-5-6V8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export function Values() {
  return (
    <Section background="secondary">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4">Our Values</p>
            <h2 className="text-heading-lg text-text-primary">
              What We Stand For
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value) => (
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
