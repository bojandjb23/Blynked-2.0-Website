import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/cta-banner";
import { AcademyWaitlistForm } from "@/components/sections/resources/academy-waitlist-form";

export const metadata: Metadata = {
  title: "Resources — Insights for Tech Leaders | Blynked",
  description:
    "Frameworks, guides, and strategies from the front lines of revenue engineering. Learn the Traction Framework and build predictable growth.",
  openGraph: {
    title: "Resources — Insights for Tech Leaders | Blynked",
    description:
      "Frameworks, guides, and strategies from the front lines of revenue engineering.",
    url: "https://blynked.io/resources",
  },
};

const upcomingContent = [
  {
    type: "Guide",
    title: "The Traction Framework: Complete Breakdown",
    description:
      "A deep-dive into the four pillars of predictable growth — Positioning, Pipeline, Sales, and Scalability. Includes templates and checklists.",
    tag: "Coming Soon",
  },
  {
    type: "Guide",
    title: "12 Software Dev Secrets to Scaling Revenue",
    description:
      "Tactical playbook for software development companies doing $1.5M-$12M. Based on patterns from 20+ engagements.",
    tag: "Coming Soon",
  },
  {
    type: "Blog",
    title: "Why Most Tech Companies Outgrow Their Sales Process",
    description:
      "The hidden ceiling that keeps founder-led sales companies stuck — and the system to break through it.",
    tag: "Coming Soon",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
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
            Frameworks, guides, and strategies from the front lines of revenue
            engineering.
          </p>
        </Container>
      </section>

      {/* Upcoming Content Preview */}
      <Section background="secondary">
        <Container>
          <div className="mb-12">
            <p className="text-eyebrow mb-4">Content Library</p>
            <h2 className="text-heading-lg text-text-primary mb-4">
              What We&rsquo;re Building
            </h2>
            <p className="text-body-md text-text-secondary max-w-2xl">
              Our resource library is launching soon. Here&rsquo;s a preview of
              what&rsquo;s coming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingContent.map((item) => (
              <Card key={item.title} variant="elevated" className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-caption text-accent font-semibold uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="text-caption text-text-tertiary px-2 py-0.5 rounded-full border border-[rgba(255,255,255,0.08)]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-heading-sm text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-body-sm text-text-secondary">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Academy Preview */}
      <Section>
        <Container className="max-w-4xl">
          <div className="glass-elevated p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Subtle gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Left: Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <p className="text-eyebrow">Blynked Academy</p>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                    Early Access
                  </span>
                </div>

                <h2 className="text-heading-lg text-text-primary mb-4">
                  Learn the Traction Framework
                </h2>

                <p className="text-body-md text-text-secondary mb-8">
                  Structured training for tech leaders who want to understand —
                  and eventually run — their own growth engine.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Self-paced Traction Framework Masterclass",
                    "Module-by-module breakdown of each pillar",
                    "Templates, playbooks, and checklists",
                    "Traction Framework Certification",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="flex-shrink-0 mt-0.5 text-accent"
                      >
                        <path
                          d="M6 10l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-body-sm text-text-secondary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="text-body-sm text-text-tertiary mb-8">
                  <span className="text-text-secondary font-medium">
                    Available now:
                  </span>{" "}
                  Free preview module — &ldquo;The 4 Pillars of Predictable
                  Growth&rdquo;
                </div>
              </div>

              {/* Right: Waitlist Form */}
              <div className="lg:w-[320px] flex-shrink-0">
                <AcademyWaitlistForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lead Magnet */}
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
                <path
                  d="M20 28l4-4-4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-heading-md text-text-primary mb-4">
              Download the Traction Framework Guide
            </h2>
            <p className="text-body-md text-text-secondary mb-8">
              Get a comprehensive breakdown of the four pillars of predictable
              growth. Includes templates and checklists you can implement
              immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your work email"
                aria-label="Email for guide download"
                className="bg-[rgba(26,26,26,0.5)] border border-[rgba(255,255,255,0.1)] rounded-[10px] px-4 py-3.5 text-white text-base placeholder:text-text-tertiary focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all sm:w-64"
              />
              <Button>Get the Guide</Button>
            </div>
          </Card>
        </Container>
      </Section>

      <CTABanner
        headline="Want Personalized Insights Instead?"
        subtext="Skip the guides — book a strategy call and get specific recommendations for your growth challenges."
        buttonText="Book Your Strategy Call"
        buttonHref="/book-a-call"
      />
    </>
  );
}
