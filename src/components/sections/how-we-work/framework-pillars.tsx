"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/shared/glow-card";
import { TextReveal } from "@/components/shared/text-reveal";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface PillarData {
  number: string;
  title: string;
  tagline: string;
  whatWeDo: string[];
  outcome: string;
  proof?: string;
  accentHue: string;
}

const pillars: PillarData[] = [
  {
    number: "01",
    title: "Positioning",
    tagline: "Nail your offer so the right people pay attention",
    whatWeDo: [
      "Market positioning analysis",
      "ICP definition and validation",
      "Value proposition engineering",
      "Competitive differentiation mapping",
    ],
    outcome:
      "A market position so clear that prospects pre-qualify themselves before they ever speak to you.",
    accentHue: "rgba(244,121,32,0.08)",
  },
  {
    number: "02",
    title: "Pipeline",
    tagline: "Build a system that generates qualified meetings on repeat",
    whatWeDo: [
      "Multi-channel outreach",
      "Content-driven demand gen",
      "Pre-qualification systems",
      "LinkedIn optimization",
      "Growth Chat Method",
    ],
    outcome:
      "A pipeline that fills itself \u2014 independent of the founder\u2019s personal network.",
    proof: "ThinkNimble: 33 meetings in 11 days",
    accentHue: "rgba(244,150,60,0.08)",
  },
  {
    number: "03",
    title: "Sales",
    tagline: "Close deals without founder dependency",
    whatWeDo: [
      "Sales process design",
      "Consultative selling framework",
      "Sales enablement materials",
      "Deal coaching",
    ],
    outcome:
      "A sales process that converts, even when the founder isn\u2019t in the room.",
    proof: "Index Software: $139K closed in under 90 days",
    accentHue: "rgba(244,100,20,0.08)",
  },
  {
    number: "04",
    title: "Scalability",
    tagline: "Grow revenue with systems, not heroics",
    whatWeDo: [
      "Playbook creation",
      "Team training",
      "Revenue forecasting",
      "After-sales optimization",
      "Account expansion",
    ],
    outcome:
      "A growth engine that runs on systems, not on people burning out.",
    proof: "Amsterdam Standard: EUR 1M+ deal, 20x ROI",
    accentHue: "rgba(200,100,40,0.08)",
  },
];

function ConnectingSVG() {
  return (
    <div className="hidden lg:flex justify-center py-4" aria-hidden="true">
      <svg width="120" height="48" viewBox="0 0 120 48" fill="none">
        <path
          d="M60 0 V48"
          stroke="rgba(244,121,32,0.15)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="60" cy="24" r="3" fill="rgba(244,121,32,0.3)" />
      </svg>
    </div>
  );
}

function PillarSection({
  pillar,
  index,
}: {
  pillar: PillarData;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Section background={isEven ? "primary" : "secondary"}>
      <Container>
        <ScrollReveal>
          <div className="relative">
            {/* Giant decorative pillar number */}
            <div
              className="absolute -top-8 pointer-events-none select-none"
              style={{
                [isEven ? "left" : "right"]: "-1rem",
              }}
              aria-hidden="true"
            >
              <span
                className="font-mono font-bold leading-none block"
                style={{
                  fontSize: "clamp(8rem, 15vw, 14rem)",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(244,121,32,0.08)",
                }}
              >
                {pillar.number}
              </span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
              {/* Pillar content */}
              <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent font-mono text-4xl font-bold opacity-60">
                    {pillar.number}
                  </span>
                  <div>
                    <h2 className="text-heading-lg text-text-primary">
                      {pillar.title}
                    </h2>
                    <p className="text-body-md text-text-secondary mt-1">
                      {pillar.tagline}
                    </p>
                  </div>
                </div>

                <GlowCard
                  className="mt-8 p-8"
                  glowColor={pillar.accentHue}
                >
                  <h3 className="text-heading-sm text-text-primary mb-4">
                    What we do
                  </h3>
                  <ul className="space-y-3">
                    {pillar.whatWeDo.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-accent mt-1.5 flex-shrink-0">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M2 8h12M10 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="text-body-sm text-text-secondary">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </div>

              {/* Outcome */}
              <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                <GlowCard
                  className="lg:mt-16 p-8 md:p-10"
                  glowColor={pillar.accentHue}
                >
                  <h3 className="text-eyebrow mb-6">OUTCOME</h3>
                  <TextReveal
                    text={pillar.outcome}
                    tag="p"
                    className="text-heading-md text-text-primary leading-relaxed"
                  />
                  {pillar.proof && (
                    <div className="mt-8 pt-6 border-t border-border-glass">
                      <Badge variant="accent">{pillar.proof}</Badge>
                    </div>
                  )}
                </GlowCard>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

export function FrameworkPillars() {
  return (
    <>
      {pillars.map((pillar, index) => (
        <div key={pillar.title}>
          <PillarSection pillar={pillar} index={index} />
          {index < pillars.length - 1 && <ConnectingSVG />}
        </div>
      ))}
    </>
  );
}
