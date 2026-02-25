"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/shared/glow-card";
import { TiltCard } from "@/components/shared/tilt-card";
import { caseStudies } from "@/data/case-studies";

gsap.registerPlugin(ScrollTrigger);

export function CaseStudyHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featured = caseStudies.slice(0, 3);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cards = sectionRef.current.querySelectorAll(".case-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );

    /* Animate metric numbers */
    const metrics = sectionRef.current.querySelectorAll(".case-metric");
    gsap.fromTo(
      metrics,
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="results"
      className="relative py-24 sm:py-32 mesh-gradient-section overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-eyebrow mb-4">Results</p>
          <h2 className="text-display-lg text-text-primary max-w-2xl">
            Real companies. Measurable impact.
          </h2>
        </div>

        {/* Asymmetric grid: first card is larger */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Featured (large) card */}
          <TiltCard className="case-card lg:col-span-3" maxTilt={3}>
            <GlowCard className="h-full p-8 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between mb-6">
                <p className="text-caption text-text-tertiary uppercase tracking-wider">
                  {featured[0].clientName}
                </p>
                <Badge variant="accent">{featured[0].industryTag}</Badge>
              </div>

              {/* Hero metric */}
              <div className="case-metric mb-8">
                <span className="text-metric text-accent block">
                  {featured[0].heroMetric}
                </span>
                <span className="text-body-sm text-text-tertiary">
                  {featured[0].heroMetricLabel}
                </span>
              </div>

              <p className="text-body-md text-text-secondary mb-6 max-w-lg">
                {featured[0].resultSummary}
              </p>

              <blockquote className="text-body-md text-text-tertiary font-display italic border-l-2 border-accent/30 pl-5 mb-8">
                &ldquo;{featured[0].quote}&rdquo;
                <span className="block mt-2 text-caption not-italic font-sans">
                  &mdash; {featured[0].quoteAuthor}, {featured[0].quoteTitle}
                </span>
              </blockquote>

              <Button
                href={`/results/${featured[0].slug}`}
                variant="ghost"
              >
                Read the Full Story
              </Button>
            </GlowCard>
          </TiltCard>

          {/* Two smaller cards stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {featured.slice(1).map((study) => (
              <TiltCard key={study.slug} className="case-card flex-1" maxTilt={5}>
                <GlowCard className="h-full p-8">
                  <p className="text-caption text-text-tertiary uppercase tracking-wider mb-4">
                    {study.clientName}
                  </p>

                  {/* Metric */}
                  <div className="case-metric mb-4">
                    <span className="text-metric-sm text-accent block font-mono">
                      {study.heroMetric}
                    </span>
                    <span className="text-body-sm text-text-tertiary">
                      {study.heroMetricLabel}
                    </span>
                  </div>

                  <blockquote className="text-body-sm text-text-tertiary font-display italic border-l-2 border-accent/20 pl-4 mb-5">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>

                  <Button
                    href={`/results/${study.slug}`}
                    variant="ghost"
                  >
                    Read the Full Story
                  </Button>
                </GlowCard>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/results" variant="secondary">
            See All Results
          </Button>
        </div>
      </Container>
    </section>
  );
}
