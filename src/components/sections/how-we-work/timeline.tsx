"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const steps = [
  {
    month: "Month 1",
    title: "Foundation",
    description: "Discovery + Positioning + Channel setup",
    details: [
      "Deep-dive into your market and ICP",
      "Positioning and messaging development",
      "Outbound channel infrastructure",
    ],
  },
  {
    month: "Month 2",
    title: "Activation",
    description: "Pipeline activation + First qualified meetings",
    details: [
      "Launch multi-channel outreach",
      "First qualified meetings generated",
      "Real-time testing and optimization",
    ],
  },
  {
    month: "Month 3",
    title: "Optimization",
    description: "Sales optimization + Measurable results",
    details: [
      "Sales process refinement",
      "Conversion rate optimization",
      "Reporting and predictable pipeline metrics",
    ],
  },
];

function TimelineProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setProgress(100);
      return;
    }

    function handleScroll() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const scrollStart = windowHeight * 0.8;
      const scrollEnd = -sectionHeight * 0.2;

      const rawProgress =
        ((scrollStart - sectionTop) / (scrollStart - scrollEnd)) * 100;
      setProgress(Math.max(0, Math.min(100, rawProgress)));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Progress bar at the top */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-3">
          <span className="text-caption text-text-tertiary">Progress</span>
          <span className="text-caption text-accent font-mono">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-px bg-border-glass relative overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full rounded-full transition-all duration-150 ease-out"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, rgba(244,121,32,0.8), rgba(244,121,32,1))",
              boxShadow: "0 0 12px rgba(244,121,32,0.4)",
            }}
          />
        </div>
      </div>

      {/* Timeline with vertical SVG line */}
      <div className="relative">
        {/* SVG connecting line -- vertical on all screens */}
        <div
          className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
          aria-hidden="true"
        >
          {/* Background track */}
          <div className="absolute inset-0 bg-border-glass" />
          {/* Animated fill */}
          <div
            className="absolute top-0 left-0 w-full transition-all duration-300 ease-out"
            style={{
              height: `${progress}%`,
              background:
                "linear-gradient(180deg, rgba(244,121,32,0.8), rgba(244,121,32,0.2))",
              boxShadow: "0 0 8px rgba(244,121,32,0.3)",
            }}
          />
        </div>

        {/* Step nodes */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const stepThreshold = ((index + 0.5) / steps.length) * 100;
            const isActive = progress >= stepThreshold;

            return (
              <div key={step.month} className="relative pl-16 sm:pl-20">
                {/* Node dot */}
                <div
                  className="absolute left-4 sm:left-6 top-8 w-4 h-4 rounded-full border-2 transition-all duration-500"
                  style={{
                    borderColor: isActive
                      ? "rgba(244,121,32,1)"
                      : "rgba(255,255,255,0.1)",
                    backgroundColor: isActive
                      ? "rgba(244,121,32,0.3)"
                      : "transparent",
                    boxShadow: isActive
                      ? "0 0 12px rgba(244,121,32,0.4)"
                      : "none",
                  }}
                  aria-hidden="true"
                />

                <GlowCard className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="font-mono font-bold text-sm transition-colors duration-500"
                      style={{
                        color: isActive
                          ? "rgba(244,121,32,1)"
                          : "rgba(244,121,32,0.4)",
                      }}
                    >
                      {step.month}
                    </span>
                    <div className="h-px flex-1 bg-border-accent opacity-30" />
                  </div>

                  <h3 className="text-heading-md text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-accent mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-body-sm text-text-secondary">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <Section background="primary" className="relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[600px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(244,121,32,0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-eyebrow mb-4">THE FIRST 90 DAYS</p>
            <h2 className="text-display-lg text-text-primary mb-4">
              What the First 90 Days Look Like
            </h2>
            <p className="text-body-md text-text-secondary max-w-2xl mx-auto">
              A clear path from strategy to measurable pipeline results.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <TimelineProgress />
        </div>
      </Container>
    </Section>
  );
}
