import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface PillarData {
  number: string;
  title: string;
  tagline: string;
  whatWeDo: string[];
  outcome: string;
  proof?: string;
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
  },
];

function PillarSection({ pillar, index }: { pillar: PillarData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <Section background={isEven ? "primary" : "secondary"}>
      <Container>
        <ScrollReveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Pillar header */}
            <div className={isEven ? "lg:order-1" : "lg:order-2"}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-accent font-mono text-4xl font-bold opacity-40">
                  {pillar.number}
                </span>
                <div>
                  <h2 className="text-heading-lg text-text-primary">{pillar.title}</h2>
                  <p className="text-body-md text-text-secondary mt-1">{pillar.tagline}</p>
                </div>
              </div>

              <Card variant="glass" className="mt-8">
                <h3 className="text-heading-sm text-text-primary mb-4">What we do</h3>
                <ul className="space-y-3">
                  {pillar.whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-body-sm text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Outcome */}
            <div className={isEven ? "lg:order-2" : "lg:order-1"}>
              <Card variant="elevated" className="lg:mt-16">
                <h3 className="text-eyebrow mb-4">OUTCOME</h3>
                <p className="text-heading-md text-text-primary leading-relaxed">
                  {pillar.outcome}
                </p>
                {pillar.proof && (
                  <div className="mt-6 pt-6 border-t border-border-glass">
                    <Badge variant="accent">{pillar.proof}</Badge>
                  </div>
                )}
              </Card>
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
        <PillarSection key={pillar.title} pillar={pillar} index={index} />
      ))}
    </>
  );
}
