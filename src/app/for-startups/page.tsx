import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { CTABanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "For Startups ($1.5M\u2013$4M) \u2014 Build Your First Repeatable Pipeline | Blynked",
  description:
    "You\u2019ve got product-market fit. Revenue is growing. But your pipeline still depends on you. We change that. See how Blynked helps startups build predictable revenue.",
  openGraph: {
    title: "For Startups ($1.5M\u2013$4M) \u2014 Build Your First Repeatable Pipeline | Blynked",
    description:
      "You\u2019ve got product-market fit. Revenue is growing. But your pipeline still depends on you. We change that.",
    url: "https://blynked.io/for-startups",
    images: [
      {
        url: "/images/og/default.png",
        width: 1200,
        height: 630,
        alt: "Blynked \u2014 For Startups",
      },
    ],
  },
};

/* ─── Data ─── */

const painPoints = [
  "Every deal starts with the founder\u2019s LinkedIn DMs or personal network",
  "You\u2019ve tried outbound before \u2014 it felt spammy and produced bad leads",
  "You know you need a sales system but can\u2019t hire a full team yet",
  "You\u2019re growing, but you can\u2019t predict next quarter\u2019s revenue",
];

const whatWeDo = [
  {
    number: "01",
    title: "Faster Timeline",
    description:
      "First qualified meetings by week 4\u20135. No six-month ramp-ups or endless audits. We move at startup speed.",
  },
  {
    number: "02",
    title: "Focused on Positioning + Pipeline",
    description:
      "We concentrate on the two pillars that matter most right now: making your offer irresistible and filling your calendar with the right conversations.",
  },
  {
    number: "03",
    title: "Cost-Efficient Channel Mix",
    description:
      "We pick the two or three channels with the highest ROI for your stage. No spreading thin across ten channels that dilute your budget.",
  },
  {
    number: "04",
    title: "Fractional Growth Team",
    description:
      "You get a full growth team \u2014 strategist, copywriter, outbound operator \u2014 without the overhead of hiring three people. Scale when you\u2019re ready.",
  },
];

const caseStudies = [
  {
    company: "Mayven Studios",
    metric: "7 qualified calls",
    timeline: "in 2.5 weeks",
    summary:
      "Digital agency specializing in accessibility needed qualified enterprise conversations. We built their outbound system from scratch and filled their calendar within weeks.",
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

export default function ForStartupsPage() {
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
                For Startups ($1.5M&ndash;$4M)
              </p>
              <h1 className="text-display-xl text-text-primary mb-8">
                Building Traction? Let&rsquo;s Make Your Pipeline Predictable.
              </h1>
              <p className="text-body-lg text-text-secondary max-w-2xl leading-relaxed font-light mb-12">
                You&rsquo;ve got product-market fit. Revenue is growing. But your
                pipeline still depends on you. We change that.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/book-a-call">Book Your Startup Strategy Call</Button>
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
                The startup pipeline trap
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

      {/* ──────── What We Do for Startups ──────── */}
      <section className="relative py-24 sm:py-32 bg-bg-secondary overflow-hidden">
        <div className="noise-overlay absolute inset-0 pointer-events-none" />

        {/* Subtle gradient backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(244,121,32,0.04),transparent_70%)]" />

        <Container className="relative z-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-eyebrow mb-4">Our Approach</p>
              <h2 className="text-display-lg text-text-primary max-w-3xl">
                Here&rsquo;s What We Do for Startups
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
                Startups we&rsquo;ve helped build traction
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 gap-5 max-w-3xl">
              {caseStudies.map((study) => (
                <GlowCard key={study.company} className="p-8 sm:p-10 lg:p-12">
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
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ──────── Bottom CTA ──────── */}
      <CTABanner
        headline="Ready to Build Your First Repeatable Pipeline?"
        subtext="Book a 30-minute startup strategy call. We\u2019ll assess where you stand and show you exactly how we\u2019d build your pipeline."
        buttonText="Book Your Startup Strategy Call"
        buttonHref="/book-a-call"
        trustSignal="Mayven Studios: 7 qualified calls in 2.5 weeks | Average startup engagement: 6 months"
      />
    </>
  );
}
