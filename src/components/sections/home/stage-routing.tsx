"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";

/* ─── Stage Card Data ─── */

interface StageCard {
  id: "startup" | "scaleup";
  title: string;
  revenue: string;
  traits: string[];
  need: string;
  ctaLabel: string;
  ctaHref: string;
  proofCompany: string;
  proofMetric: string;
}

const stages: StageCard[] = [
  {
    id: "startup",
    title: "Building Traction",
    revenue: "$1.5M\u2013$4M",
    traits: [
      "You\u2019re doing $1.5M\u2013$4M in revenue",
      "Founder is still the primary seller",
      "Pipeline depends on referrals and word-of-mouth",
    ],
    need: "Speed to first systematic meetings",
    ctaLabel: "See Our Startup Approach",
    ctaHref: "/for-startups",
    proofCompany: "ThinkNimble",
    proofMetric: "33 meetings in 11 days",
  },
  {
    id: "scaleup",
    title: "Scaling Growth",
    revenue: "$4M\u2013$12M",
    traits: [
      "You\u2019re doing $4M\u2013$12M in revenue",
      "Need to remove founder from every deal",
      "Pipeline exists but is inconsistent",
    ],
    need: "Systematic, repeatable growth engine",
    ctaLabel: "See Our Scale-Up Approach",
    ctaHref: "/for-scale-ups",
    proofCompany: "Amsterdam Standard",
    proofMetric: "EUR 1M+ deal, 20x ROI",
  },
];

/* ─── Icons ─── */

function RocketIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Stage Routing Section ─── */

export function StageRouting() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleMouseEnter = useCallback((id: string) => {
    setHoveredId(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  return (
    <section
      id="your-path"
      className="relative py-24 sm:py-32 bg-bg-primary overflow-hidden"
    >
      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Atmospheric gradient orbs */}
      <div
        className="absolute top-[10%] left-[15%] w-[400px] h-[400px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,200,0.25) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-eyebrow mb-4">Your Path</p>
            <h2 className="text-display-lg text-text-primary mb-6">
              Where Are You Now?
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto font-light">
              We work differently with startups than with scale-ups. Choose your
              stage to see what&rsquo;s relevant for you.
            </p>
          </div>
        </ScrollReveal>

        {/* Stage cards */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((stage) => {
              const isHovered = hoveredId === stage.id;
              const otherHovered = hoveredId !== null && hoveredId !== stage.id;
              const icon =
                stage.id === "startup" ? <RocketIcon /> : <TrendingUpIcon />;

              return (
                <Link
                  key={stage.id}
                  href={stage.ctaHref}
                  onMouseEnter={() => handleMouseEnter(stage.id)}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "group relative block rounded-[20px] p-8 sm:p-10 lg:p-12",
                    "bg-[rgba(26,26,26,0.7)] backdrop-blur-[12px]",
                    "border border-[rgba(255,255,255,0.08)]",
                    "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
                    isHovered && "scale-[1.02] border-[rgba(244,121,32,0.25)]",
                    otherHovered && "opacity-70 scale-[0.99]"
                  )}
                  style={
                    isHovered
                      ? {
                          boxShadow:
                            "0 0 0 1px rgba(244,121,32,0.08), 0 0 40px rgba(244,121,32,0.08), 0 8px 40px rgba(0,0,0,0.3)",
                        }
                      : {
                          boxShadow:
                            "0 0 0 1px rgba(255,255,255,0.03), 0 8px 40px rgba(0,0,0,0.2)",
                        }
                  }
                  aria-label={`${stage.title} (${stage.revenue}) \u2014 ${stage.ctaLabel}`}
                >
                  {/* Orange border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-500"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(244,121,32,0.1), transparent 60%)",
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon + revenue tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center text-accent">
                        {icon}
                      </div>
                      <span className="text-xs font-mono font-semibold text-accent tracking-wider bg-accent-glow px-3 py-1.5 rounded-full border border-border-accent">
                        {stage.revenue}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-heading-lg text-text-primary mb-6">
                      {stage.title}
                    </h3>

                    {/* Trait list */}
                    <ul className="space-y-3 mb-6">
                      {stage.traits.map((trait) => (
                        <li
                          key={trait}
                          className="flex items-start gap-3 text-body-sm text-text-secondary"
                        >
                          <span className="text-text-tertiary">
                            <CheckIcon />
                          </span>
                          {trait}
                        </li>
                      ))}
                    </ul>

                    {/* Need callout */}
                    <div className="bg-[rgba(244,121,32,0.04)] border border-[rgba(244,121,32,0.1)] rounded-xl p-4 mb-8">
                      <p className="text-body-sm">
                        <span className="text-accent font-semibold">
                          Need:
                        </span>{" "}
                        <span className="text-text-secondary">
                          {stage.need}
                        </span>
                      </p>
                    </div>

                    {/* CTA row */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                        {stage.ctaLabel}
                        <ArrowRightIcon />
                      </span>
                    </div>

                    {/* Proof point divider */}
                    <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                      <p className="text-caption text-text-tertiary">
                        <span className="text-text-secondary font-medium">
                          {stage.proofCompany}:
                        </span>{" "}
                        {stage.proofMetric}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
