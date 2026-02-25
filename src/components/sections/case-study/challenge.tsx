import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface ChallengeProps {
  challenges: string[];
}

export function Challenge({ challenges }: ChallengeProps) {
  return (
    <Section background="secondary">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-text-primary mb-8">The Challenge</h2>
            <ul className="space-y-4">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-bg-tertiary border border-border-glass flex items-center justify-center">
                    <span className="text-accent font-mono text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <p className="text-body-md text-text-secondary pt-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
