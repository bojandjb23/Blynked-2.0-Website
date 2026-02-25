import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const models = [
  {
    tag: "DFY",
    title: "Done-For-You",
    description: "Full implementation. We embed as your growth team, run the playbook, and deliver pipeline results.",
    requirement: "Min $1.5M revenue",
    tagline: "We run it. You scale.",
    features: [
      "Full Traction Framework deployment",
      "Dedicated growth team",
      "Weekly reporting and optimization",
      "Direct pipeline accountability",
    ],
  },
  {
    tag: "DWY",
    title: "Done-With-You",
    description: "Collaborative engagement. We design the system and guide your team through execution.",
    requirement: "$15K+ per project",
    tagline: "We guide. You execute.",
    features: [
      "Strategic positioning and framework design",
      "Hands-on team training",
      "Playbook creation",
      "Ongoing coaching and support",
    ],
  },
];

export function EngagementModels() {
  return (
    <Section background="secondary">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-heading-lg text-text-primary mb-4">
              How We Partner With You
            </h2>
            <p className="text-body-md text-text-secondary max-w-2xl mx-auto">
              Two models, one goal: predictable revenue growth tailored to your stage and resources.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8" staggerDelay={150}>
          {models.map((model) => (
            <Card key={model.tag} variant="elevated" className="p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="accent">{model.tag}</Badge>
                <h3 className="text-heading-md text-text-primary">{model.title}</h3>
              </div>

              <p className="text-body-md text-text-secondary mb-6">
                {model.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-body-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border-glass">
                <p className="text-accent font-mono text-metric-sm mb-1">
                  {model.requirement}
                </p>
                <p className="text-caption text-text-tertiary italic">
                  &ldquo;{model.tagline}&rdquo;
                </p>
              </div>
            </Card>
          ))}
        </StaggerReveal>

        <ScrollReveal>
          <div className="text-center mt-12">
            <p className="text-body-md text-text-secondary glass inline-block px-8 py-4">
              Average partnership: <span className="text-text-primary font-semibold">12+ months</span>.{" "}
              <span className="text-text-primary font-semibold">90%+</span> retention rate.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
