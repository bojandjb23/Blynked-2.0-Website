import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const steps = [
  {
    month: "Month 1",
    title: "Foundation",
    description: "Discovery + Positioning + Channel setup",
    details: [
      "Deep-dive into your market and ICP",
      "Positioning and messaging development",
      "Outbound channel infrastructure",
    ],
  },
  {
    month: "Month 2",
    title: "Activation",
    description: "Pipeline activation + First qualified meetings",
    details: [
      "Launch multi-channel outreach",
      "First qualified meetings generated",
      "Real-time testing and optimization",
    ],
  },
  {
    month: "Month 3",
    title: "Optimization",
    description: "Sales optimization + Measurable results",
    details: [
      "Sales process refinement",
      "Conversion rate optimization",
      "Reporting and predictable pipeline metrics",
    ],
  },
];

export function Timeline() {
  return (
    <Section background="primary">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-heading-lg text-text-primary mb-4">
              What the First 90 Days Look Like
            </h2>
            <p className="text-body-md text-text-secondary max-w-2xl mx-auto">
              A clear path from strategy to measurable pipeline results.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="flex flex-col md:flex-row gap-6 md:gap-0 items-stretch" staggerDelay={200}>
          {steps.map((step, index) => (
            <div key={step.month} className="flex-1 flex flex-col md:flex-row items-stretch">
              <Card variant="elevated" className="flex-1 p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-mono font-bold text-sm">
                    {step.month}
                  </span>
                  <div className="h-px flex-1 bg-border-accent opacity-30" />
                </div>

                <h3 className="text-heading-md text-text-primary mb-2">{step.title}</h3>
                <p className="text-body-md text-accent mb-6">{step.description}</p>

                <ul className="space-y-2 mt-auto">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="text-accent mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-body-sm text-text-secondary">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Connector between cards */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop horizontal connector */}
                  <div className="hidden md:flex items-center px-2">
                    <div className="w-8 flex items-center">
                      <div className="h-px w-full bg-border-accent opacity-40" />
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="flex-shrink-0 -ml-px">
                        <path d="M1 1l5 5-5 5" stroke="rgba(244,121,32,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  {/* Mobile vertical connector */}
                  <div className="flex md:hidden justify-center py-1">
                    <div className="h-6 flex flex-col items-center">
                      <div className="w-px h-full bg-border-accent opacity-40" />
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="flex-shrink-0 -mt-px">
                        <path d="M1 1l5 5 5-5" stroke="rgba(244,121,32,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
