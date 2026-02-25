"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/shared/glow-card";

gsap.registerPlugin(ScrollTrigger);

const s = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const phases = [
  { name: "Strategy", timeline: "Week 1-2",
    description: "We audit your current pipeline, positioning, and sales process. We identify the gaps and design a custom Traction Framework implementation plan.",
    deliverables: ["Pipeline audit", "ICP validation", "Growth strategy document"],
    involvement: "2-3 hours of interviews and data sharing",
    icon: <svg {...s}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><circle cx="11" cy="11" r="3" /></svg> },
  { name: "Build", timeline: "Week 3-4",
    description: "We set up the infrastructure: outreach channels, messaging, qualification systems, and tracking.",
    deliverables: ["Channel setup", "Messaging playbooks", "CRM configuration", "Content calendar"],
    involvement: "Review and approve assets",
    icon: <svg {...s}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg> },
  { name: "Launch", timeline: "Week 5-8",
    description: "We activate outreach across all configured channels. Meetings start flowing.",
    deliverables: ["Active campaigns across 2-4 channels", "Weekly reporting", "Meeting pipeline"],
    involvement: "Take the qualified meetings we book for you",
    icon: <svg {...s}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg> },
  { name: "Optimize", timeline: "Week 9-12",
    description: "We analyze what\u2019s working, kill what isn\u2019t, and double down on the highest-performing channels.",
    deliverables: ["Performance analysis", "A/B test results", "Refined targeting", "Updated playbooks"],
    involvement: "Feedback on meeting quality and deal progression",
    icon: <svg {...s}><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg> },
  { name: "Scale", timeline: "Month 4+",
    description: "The system is proven. We expand: new channels, new segments, team training.",
    deliverables: ["Expanded channel strategy", "Team training", "Documented playbooks", "Handover plan"],
    involvement: "Strategic decisions on growth direction",
    icon: <svg {...s}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg> },
];

export function EngagementProgression() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setActiveIndex(phases.length - 1);
      return;
    }

    const ctx = gsap.context(() => {
      /* Vertical progress line fills on scroll */
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 0.5,
            },
          }
        );
      }

      /* Activate each phase card on scroll */
      const cards = sectionRef.current!.querySelectorAll(".phase-card");
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 65%",
          once: true,
          onEnter: () => setActiveIndex((prev) => Math.max(prev, i)),
        });

        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="engagement-progression"
      className="relative py-24 sm:py-32 bg-bg-primary overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Decorative gradient */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[800px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at 0% 50%, rgba(244,121,32,0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-eyebrow mb-4">The Process</p>
          <h2 className="text-display-lg text-text-primary mb-4">
            How Every Engagement Unfolds
          </h2>
          <p className="text-body-md text-text-secondary max-w-2xl mx-auto">
            No black boxes. No mystery timelines. Here&apos;s exactly how we
            take you from where you are to where you need to be.
          </p>
        </div>

        {/* Timeline */}
        <div ref={sectionRef} className="relative max-w-3xl mx-auto">
          {/* Vertical progress line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.06)]"
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="absolute inset-0 origin-top"
              style={{
                background: "linear-gradient(180deg, rgba(244,121,32,0.9), rgba(244,121,32,0.3))",
                boxShadow: "0 0 10px rgba(244,121,32,0.3)",
              }}
            />
          </div>

          {/* Phase cards */}
          <div className="space-y-8">
            {phases.map((phase, i) => {
              const isActive = i <= activeIndex;

              return (
                <div key={phase.name} className="phase-card relative pl-16 sm:pl-20">
                  {/* Node dot */}
                  <div
                    className="absolute left-4 sm:left-6 top-8 w-4 h-4 rounded-full border-2 transition-all duration-500 z-10"
                    style={{
                      borderColor: isActive ? "rgba(244,121,32,1)" : "rgba(255,255,255,0.1)",
                      backgroundColor: isActive ? "rgba(244,121,32,0.3)" : "transparent",
                      boxShadow: isActive ? "0 0 12px rgba(244,121,32,0.4)" : "none",
                    }}
                    aria-hidden="true"
                  />

                  <GlowCard className="p-6 sm:p-8">
                    {/* Phase header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-500"
                        style={{
                          backgroundColor: isActive ? "rgba(244,121,32,0.12)" : "rgba(255,255,255,0.04)",
                          color: isActive ? "rgba(244,121,32,1)" : "rgba(255,255,255,0.3)",
                        }}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-heading-md text-text-primary">{phase.name}</h3>
                      </div>
                      <span
                        className="ml-auto font-mono text-sm font-bold transition-colors duration-500"
                        style={{
                          color: isActive ? "rgba(244,121,32,1)" : "rgba(244,121,32,0.4)",
                        }}
                      >
                        {phase.timeline}
                      </span>
                    </div>

                    <div className="h-px bg-border-glass mb-4" />

                    {/* Description */}
                    <p className="text-body-md text-text-secondary mb-6">
                      {phase.description}
                    </p>

                    {/* Deliverables + Involvement */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <p className="text-caption text-accent font-semibold uppercase tracking-wider mb-3">
                          Deliverables
                        </p>
                        <ul className="space-y-2">
                          {phase.deliverables.map((d) => (
                            <li key={d} className="flex items-start gap-2">
                              <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                              <span className="text-body-sm text-text-secondary">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-caption text-accent font-semibold uppercase tracking-wider mb-3">
                          Your Involvement
                        </p>
                        <p className="text-body-sm text-text-secondary">{phase.involvement}</p>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom messaging */}
        <div className="mt-16 text-center">
          <GlowCard className="inline-block px-8 sm:px-10 py-5">
            <p className="text-body-md text-text-secondary">
              Most partners see first qualified meetings by{" "}
              <span className="text-accent font-semibold">Week 6</span>. Most
              see measurable ROI by{" "}
              <span className="text-accent font-semibold">Month 3</span>.
            </p>
          </GlowCard>
        </div>
      </Container>
    </section>
  );
}
