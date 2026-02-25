import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const differentiators = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Full Funnel Ownership",
    description:
      "We don't run one channel. We own the entire pipeline from positioning to closed deal.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Partnership, Not Project",
    description:
      "Average engagement: 12+ months. We build with you, not for you.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8l3 3 4-4 3 3" />
      </svg>
    ),
    title: "System, Not Tactics",
    description:
      "The Traction Framework creates repeatable, predictable growth \u2014 independent of any single channel.",
  },
];

export function Differentiators() {
  return (
    <Section background="secondary" id="differentiators">
      <Container>
        <ScrollReveal>
          <h2 className="text-heading-lg text-text-primary text-center mb-12">
            Growth Partner, Not Another Vendor
          </h2>
        </ScrollReveal>

        <StaggerReveal
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={150}
        >
          {differentiators.map((item) => (
            <div key={item.title} className="glass p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center text-accent mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="text-heading-sm text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-body-sm text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
