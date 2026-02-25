"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { GlowCard } from "@/components/shared/glow-card";
import { TiltCard } from "@/components/shared/tilt-card";

const values = [
  {
    title: "Partner > Vendor",
    description: "Deep, long-term relationships over transactions.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <path
          d="M24 8C18 8 12.5 12 10 18c-2.5 6-1.5 12 2.5 16.5S20 40 24 40s7.5-2 11.5-5.5S38.5 24 36 18C33.5 12 28 8 24 8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 24l4 4 8-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    glowColor: "rgba(244,121,32,0.08)",
  },
  {
    title: "Systems > Tactics",
    description: "Repeatable frameworks over one-off campaigns.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <rect
          x="10"
          y="10"
          width="11"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="27"
          y="10"
          width="11"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="10"
          y="27"
          width="11"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="27"
          y="27"
          width="11"
          height="11"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M21 15.5h6M21 32.5h6M15.5 21v6M32.5 21v6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    glowColor: "rgba(244,150,60,0.08)",
  },
  {
    title: "Less is More",
    description: "Fewer clients, deeper impact, better results.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="24"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" />
      </svg>
    ),
    glowColor: "rgba(244,100,20,0.08)",
  },
  {
    title: "Full Funnel Control",
    description: "End-to-end ownership, not channel-specific.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.3"
        />
        <path
          d="M12 12h24v6l-7.5 9v9l-9 3V27L12 18V12z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    glowColor: "rgba(200,100,40,0.08)",
  },
];

export function Values() {
  return (
    <Section background="secondary" className="relative overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(244,121,32,0.05), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-eyebrow mb-4 tracking-[0.2em]">OUR VALUES</p>
            <h2 className="text-display-lg text-text-primary">
              What We Stand For
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal
          className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          staggerDelay={150}
        >
          {values.map((value) => (
            <TiltCard key={value.title} maxTilt={4}>
              <GlowCard className="p-8 md:p-10" glowColor={value.glowColor}>
                <div className="text-accent mb-6">{value.icon}</div>
                <h3 className="text-heading-md text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-body-md text-text-secondary">
                  {value.description}
                </p>
              </GlowCard>
            </TiltCard>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
