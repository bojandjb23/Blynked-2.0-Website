import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface SolutionProps {
  solutions: string[];
  pillarsUsed: string[];
}

export function Solution({ solutions, pillarsUsed }: SolutionProps) {
  return (
    <Section background="secondary">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <h2 className="text-heading-lg text-text-primary">The Solution</h2>
              <div className="flex flex-wrap gap-2">
                {pillarsUsed.map((pillar) => (
                  <Badge key={pillar} variant="accent">{pillar}</Badge>
                ))}
              </div>
            </div>

            <ul className="space-y-4">
              {solutions.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="text-accent mt-1.5 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-body-md text-text-secondary">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
