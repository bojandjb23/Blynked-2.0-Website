import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export function CareersCTA() {
  return (
    <Section background="secondary">
      <Container className="max-w-2xl text-center">
        <Card variant="glass" className="p-8 md:p-12">
          <h2 className="text-heading-md text-text-primary mb-4">
            No open role that fits?
          </h2>
          <p className="text-body-md text-text-secondary mb-6">
            Send us your story anyway. We&rsquo;re always interested in
            meeting ambitious people who want to build something that matters.
          </p>
          <a
            href="mailto:careers@blynked.nl"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors duration-200"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4l-10 8L2 4" />
            </svg>
            careers@blynked.nl
          </a>
        </Card>
      </Container>
    </Section>
  );
}
