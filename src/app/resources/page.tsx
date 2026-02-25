import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Frameworks, guides, and strategies from the front lines of B2B growth. Insights for tech leaders who want predictable growth.",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-bg-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.06),transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-glass to-transparent" />

        <Container className="relative z-10 py-16 sm:py-24 text-center">
          <p className="text-eyebrow mb-6">Resources</p>
          <h1 className="text-display-lg text-text-primary mb-6 max-w-3xl mx-auto">
            Insights for Tech Leaders Who Want Predictable Growth
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Frameworks, guides, and strategies from the front lines of B2B
            growth.
          </p>
        </Container>
      </section>

      <Section background="secondary">
        <Container className="max-w-2xl text-center">
          <Card variant="elevated" className="p-8 md:p-12">
            <div className="text-accent mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="mx-auto"
                aria-hidden="true"
              >
                <rect
                  x="6"
                  y="4"
                  width="28"
                  height="32"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 12h16M12 18h16M12 24h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2 className="text-heading-md text-text-primary mb-4">
              Coming Soon
            </h2>
            <p className="text-body-md text-text-secondary mb-8">
              We&rsquo;re building our resource library. In the meantime, book
              a strategy call to get personalized insights for your specific
              growth challenges.
            </p>
            <Button href="/book-a-call">Book a Strategy Call</Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}
