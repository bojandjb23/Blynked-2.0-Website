import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "For Scale-Ups ($4M\u2013$12M) \u2014 Engineer Your Revenue System | Blynked",
  description:
    "You\u2019ve proven the business. Now you need a growth engine that works without you in every meeting. See how Blynked helps scale-ups build systematic, repeatable revenue.",
  openGraph: {
    title: "For Scale-Ups ($4M\u2013$12M) \u2014 Engineer Your Revenue System | Blynked",
    description:
      "You\u2019ve proven the business. Now you need a growth engine that works without you in every meeting.",
    url: "https://blynked.io/for-scale-ups",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "Blynked \u2014 For Scale-Ups",
      },
    ],
  },
};

/* ─── Data ─── */

const painPoints = [
  "Revenue is good but the founder is still in every major deal",
  "You\u2019ve hired sales reps but they can\u2019t close like the founder",
  "Your pipeline is feast-or-famine \u2014 great some months, dry others",
  "You need a system, not another agency running one more campaign",
];

const whatWeDo = [
  {
    number: "01",
    title: "Full Traction Framework",
    description:
      "All four pillars implemented: Positioning, Pipeline, Sales, and Scalability. Not a patchwork of tactics \u2014 a complete revenue system.",
  },
  {
    number: "02",
    title: "Sales Process Design + Team Training",
    description:
      "We build the sales playbook your reps actually follow. Discovery frameworks, objection handling, proposal templates \u2014 codified so the founder isn\u2019t needed in every room.",
  },
  {
    number: "03",
    title: "Revenue Operations Setup",
    description:
      "CRM workflows, lead scoring, pipeline reporting, and conversion tracking. The operational backbone that makes growth measurable and predictable.",
  },
  {
    number: "04",
    title: "Long-Term Partnership Model",
    description:
      "12+ month engagements because real systems take time to build, optimize, and compound. We\u2019re not here for a campaign \u2014 we\u2019re here for the transformation.",
  },
];

const caseStudies = [
  {
    company: "Envative",
    metric: "10x lead quality",
    timeline: "in 9 months",
    summary:
      "Custom software company went from inconsistent referral pipeline to a systematic outbound engine producing ten times better lead quality across verticals.",
    tag: "Custom Software",
  },
  {
    company: "Amsterdam Standard",
    metric: "EUR 1M+ deal",
    timeline: "20x ROI",
    summary:
      "Full-service digital agency landed their largest deal ever through a systematic outbound and positioning strategy, delivering over twenty times return on investment.",
    tag: "Digital Agency",
  },
];

/* ─── Icons ─── */

function AlertCircleIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

/* ─── Page ─── */

export default function ForScaleUpsPage() {
  return (
    <>
      {/* ──────── Hero ──────── */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden mesh-gradient-hero">
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        {/* Atmospheric orbs */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(244,121,32,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-48 -left-48 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(120,80,200,0.3) 0%, transparent 70%)",
          }}
        />

        <Container className="relative z-10 py-24 sm:py-32">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-8 tracking-[0.2em]">
                For Scale-Ups ($4M&ndash;$12M)
              </p>
              <h1 className="text-display-xl text-text-primary mb-8">
                Scaling Beyond the Founder? Engineer Your Revenue System.
              </h1>
              <p className="text-body-lg text-text-secondary max-w-2xl leading-relaxed font-light mb-12">
                You&rsquo;ve proven the business. Now you need a growth engine
                that works without you in every meeting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/book-a-call">Book Your Scale-Up Strategy Call</Button>
                <Button href="/results" variant="secondary">
                  See Our Results
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </Container>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
      </section>

      {/* ──────── Sound Familiar? ──────── */}
      <section className="relative py-24 sm:py-32 bg-bg-primary overflow-hidden">
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-eyebrow mb-4">Sound Familiar?</p>
              <h2 className="text-display-lg text-text-primary max-w-2xl mx-auto">
                The scale-up revenue ceiling
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
            staggerDelay={120}
          >
            {painPoints.map((point) => (
              <GlowCard key={point} className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="text-accent">
                    <AlertCircleIcon />
                  </span>
                  <p className="text-body-md text-text-secondary">{point}</p>
                </div>
              </GlowCard>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ──────── What We Do for Scale-Ups ──────── */}
      <section className="relative py-24 sm:py-32 bg-bg-secondary overflow-hidden">
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        {/* Subtle gradient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(244,121,32,0.04),transparent_70%)]" />

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-eyebrow mb-4">Our Approach</p>
              <h2 className="text-display-lg text-text-primary max-w-3xl">
                Here&rsquo;s What We Do for Scale-Ups
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            staggerDelay={120}
          >
            {whatWeDo.map((item) => (
              <GlowCard
                key={item.title}
                className="p-8 sm:p-10 relative overflow-hidden"
              >
                {/* Decorative number */}
                <span className="absolute -top-4 -right-2 text-[8rem] sm:text-[10rem] font-mono font-bold leading-none text-text-primary/[0.03] select-none pointer-events-none">
                  {item.number}
                </span>

                <div className="relative z-10">
                  <span className="text-accent font-mono text-sm font-semibold tracking-wider mb-3 block">
                    {item.number}
                  </span>
                  <h3 className="text-heading-md text-text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ──────── Case Studies ──────── */}
      <section className="relative py-24 sm:py-32 mesh-gradient-section overflow-hidden">
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-eyebrow mb-4">Proof</p>
              <h2 className="text-display-lg text-text-primary max-w-2xl">
                Scale-ups we&rsquo;ve helped engineer growth
              </h2>
            </div>
          </ScrollReveal>

          <StaggerReveal
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            staggerDelay={150}
          >
            {caseStudies.map((study) => (
              <GlowCard
                key={study.company}
                className="p-8 sm:p-10 lg:p-12"
              >
                <div className="flex items-center justify-between mb-6">
                  <p className="text-caption text-text-tertiary uppercase tracking-wider">
                    {study.company}
                  </p>
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border bg-accent-glow text-accent border-border-accent">
                    {study.tag}
                  </span>
                </div>

                {/* Metric */}
                <div className="mb-6">
                  <span className="text-metric-sm text-accent block font-mono">
                    {study.metric}
                  </span>
                  <span className="text-body-sm text-text-tertiary">
                    {study.timeline}
                  </span>
                </div>

                <p className="text-body-md text-text-secondary mb-6">
                  {study.summary}
                </p>

                <Button href="/results" variant="ghost">
                  See All Results
                </Button>
              </GlowCard>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      {/* ──────── Bottom CTA ──────── */}
      <CTABanner
        headline="Ready to Engineer Scalable Revenue?"
        subtext="Book a 30-minute scale-up strategy call. We\u2019ll map your current revenue engine and show you exactly where the Traction Framework fits."
        buttonText="Book Your Scale-Up Strategy Call"
        buttonHref="/book-a-call"
        trustSignal="Envative: 10x lead quality | Amsterdam Standard: EUR 1M+ deal, 20x ROI"
      />
    </>
  );
}
