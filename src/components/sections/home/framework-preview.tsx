import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    name: "Positioning",
    description: "Nail your offer so the right people pay attention",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    name: "Pipeline",
    description: "Build a system that books qualified meetings on repeat",
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
    name: "Sales",
    description: "Close deals without founder dependency",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    name: "Scalability",
    description: "Grow revenue with systems, not heroics",
  },
];

export function FrameworkPreview() {
  return (
    <Section background="secondary" id="framework">
      <Container>
        <ScrollReveal>
          <p className="text-eyebrow mb-4">OUR APPROACH</p>
          <h2 className="text-heading-lg text-text-primary max-w-3xl mb-12">
            The Traction Framework: Four Pillars of Predictable Growth
          </h2>
        </ScrollReveal>

        <StaggerReveal
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={150}
        >
          {pillars.map((pillar) => (
            <div key={pillar.name} className="glass-interactive p-8 text-center">
              <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center text-accent mx-auto mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-heading-sm text-text-primary mb-3">
                {pillar.name}
              </h3>
              <p className="text-body-sm text-text-secondary">
                {pillar.description}
              </p>
            </div>
          ))}
        </StaggerReveal>

        <ScrollReveal className="mt-10 text-center">
          <Button href="/how-we-work" variant="ghost">
            See How It Works
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
