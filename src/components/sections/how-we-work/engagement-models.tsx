"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { GlowCard } from "@/components/shared/glow-card";
import { TiltCard } from "@/components/shared/tilt-card";

const models = [
  {
    tag: "DFY",
    title: "Done-For-You",
    description:
      "Full implementation. We embed as your growth team, run the playbook, and deliver pipeline results.",
    requirement: "Min $1.5M revenue",
    tagline: "We run it. You scale.",
    features: [
      "Full Traction Framework deployment",
      "Dedicated growth team",
      "Weekly reporting and optimization",
      "Direct pipeline accountability",
    ],
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 20l4 4 8-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    glowColor: "rgba(244,121,32,0.1)",
  },
  {
    tag: "DWY",
    title: "Done-With-You",
    description:
      "Collaborative engagement. We design the system and guide your team through execution.",
    requirement: "$15K+ per project",
    tagline: "We guide. You execute.",
    features: [
      "Strategic positioning and framework design",
      "Hands-on team training",
      "Playbook creation",
      "Ongoing coaching and support",
    ],
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="14"
          r="6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M28 18l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    glowColor: "rgba(244,150,60,0.1)",
  },
];

export function EngagementModels() {
  return (
    <Section background="secondary" className="relative overflow-hidden">
      {/* Decorative gradient accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(244,121,32,0.06), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-eyebrow mb-4">ENGAGEMENT MODELS</p>
            <h2 className="text-display-lg text-text-primary mb-4">
              How We Partner With You
            </h2>
            <p className="text-body-md text-text-secondary max-w-2xl mx-auto">
              Two models, one goal: predictable revenue growth tailored to your
              stage and resources.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          staggerDelay={200}
        >
          {models.map((model) => (
            <TiltCard key={model.tag} maxTilt={4}>
              <GlowCard
                className="p-8 md:p-10 flex flex-col h-full"
                glowColor={model.glowColor}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(244,121,32,0.3), transparent)",
                  }}
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-accent">{model.icon}</div>
                  <div className="flex items-center gap-3">
                    <Badge variant="accent">{model.tag}</Badge>
                    <h3 className="text-heading-md text-text-primary">
                      {model.title}
                    </h3>
                  </div>
                </div>

                <p className="text-body-md text-text-secondary mb-8">
                  {model.description}
                </p>

                <ul className="space-y-4 mb-8 flex-1">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-accent mt-1 flex-shrink-0">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8l3 3 7-7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-body-sm text-text-secondary">
                        {feature}
                      </span>
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
              </GlowCard>
            </TiltCard>
          ))}
        </StaggerReveal>

        <ScrollReveal>
          <div className="text-center mt-16">
            <GlowCard className="inline-block px-10 py-5">
              <p className="text-body-md text-text-secondary">
                Average partnership:{" "}
                <span className="text-text-primary font-semibold">
                  12+ months
                </span>
                .{" "}
                <span className="text-text-primary font-semibold">90%+</span>{" "}
                retention rate.
              </p>
            </GlowCard>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
