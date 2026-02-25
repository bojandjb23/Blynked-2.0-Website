import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

interface TakeawaysProps {
  takeaways: string[];
}

export function Takeaways({ takeaways }: TakeawaysProps) {
  return (
    <Section background="primary">
      <Container>
        <ScrollReveal>
          <h2 className="text-heading-lg text-text-primary text-center mb-12">
            Key Takeaways
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={150}>
          {takeaways.map((takeaway, index) => (
            <Card key={index} variant="glass" className="p-6">
              <span className="text-accent font-mono text-2xl font-bold mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-body-sm text-text-secondary">{takeaway}</p>
            </Card>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
