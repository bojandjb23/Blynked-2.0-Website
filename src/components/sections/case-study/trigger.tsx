import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

interface TriggerProps {
  trigger: string;
  quote?: string;
  quoteAuthor?: string;
  quoteTitle?: string;
}

export function Trigger({ trigger, quote, quoteAuthor, quoteTitle }: TriggerProps) {
  return (
    <Section background="primary">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-heading-lg text-text-primary mb-8">The Trigger</h2>
            <p className="text-body-lg text-text-secondary">{trigger}</p>

            {quote && (
              <div className="mt-10 glass-elevated p-8 relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-[16px]" />
                <blockquote className="text-heading-md text-text-primary italic">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                {quoteAuthor && (
                  <p className="text-caption text-text-tertiary mt-4">
                    &mdash; {quoteAuthor}{quoteTitle ? `, ${quoteTitle}` : ""}
                  </p>
                )}
              </div>
            )}
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
