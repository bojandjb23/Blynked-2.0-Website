"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

interface TimelineNode {
  period: string;
  title: string;
  bullets: string[];
}

const timelineNodes: TimelineNode[] = [
  {
    period: "Week 1-2",
    title: "Discovery & Positioning",
    bullets: [
      "Deep-dive market analysis",
      "ICP definition and validation",
      "Competitive positioning audit",
    ],
  },
  {
    period: "Week 3-5",
    title: "System Build",
    bullets: [
      "Multi-channel outbound infrastructure",
      "Message testing and refinement",
      "CRM and pipeline setup",
    ],
  },
  {
    period: "Month 2-3",
    title: "Pipeline Activation",
    bullets: [
      "Qualified meetings flowing weekly",
      "Sales enablement and coaching",
      "Data-driven optimization",
    ],
  },
  {
    period: "Month 6+",
    title: "Predictable Growth",
    bullets: [
      "Repeatable, scalable system",
      "Reduced founder dependency",
      "Compounding pipeline momentum",
    ],
  },
];

export function ResultsTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const nodes = sectionRef.current.querySelectorAll(".timeline-node");

    // Stagger the nodes in
    gsap.fromTo(
      nodes,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );

    // Animate the connection line width (desktop) or height (mobile)
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="timeline"
      className="relative py-24 sm:py-32 mesh-gradient-section overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-eyebrow mb-4">Your Journey</p>
          <h2 className="text-display-lg text-text-primary max-w-3xl">
            WHAT HAPPENS AFTER YOU PARTNER WITH US
          </h2>
        </div>

        {/* Timeline */}
        <div ref={sectionRef}>
          {/* Desktop: horizontal layout */}
          <div className="hidden lg:block relative">
            {/* Connection line */}
            <div className="absolute top-[28px] left-0 right-0 flex items-center px-[60px]">
              <div
                ref={lineRef}
                className="w-full h-[2px] origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, #FF7120, #FF8A3D, #FF7120)",
                }}
              />
            </div>

            {/* Nodes */}
            <div className="grid grid-cols-4 gap-6">
              {timelineNodes.map((node, index) => (
                <div key={index} className="timeline-node relative">
                  {/* Dot */}
                  <div className="relative z-10 mb-6 flex items-center gap-3">
                    <div className="w-14 h-14 rounded-full border-2 border-accent bg-bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="font-mono text-accent text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-eyebrow whitespace-nowrap">
                      {node.period}
                    </span>
                  </div>

                  {/* Content card */}
                  <div className="glass p-6">
                    <h3 className="text-heading-sm text-text-primary mb-3">
                      {node.title}
                    </h3>
                    <ul className="space-y-2">
                      {node.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="text-body-sm text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">
                            <svg
                              width="6"
                              height="6"
                              viewBox="0 0 6 6"
                              fill="currentColor"
                            >
                              <rect width="6" height="6" />
                            </svg>
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical layout */}
          <div className="lg:hidden relative">
            {/* Vertical connection line */}
            <div className="absolute top-0 bottom-0 left-[27px] w-[2px] bg-gradient-to-b from-accent via-accent-hover to-accent opacity-30" />

            <div className="space-y-8">
              {timelineNodes.map((node, index) => (
                <div
                  key={index}
                  className="timeline-node relative flex gap-5"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-14 h-14 rounded-full border-2 border-accent bg-bg-primary flex items-center justify-center">
                      <span className="font-mono text-accent text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass p-5 sm:p-6">
                    <span className="text-eyebrow block mb-2">
                      {node.period}
                    </span>
                    <h3 className="text-heading-sm text-text-primary mb-3">
                      {node.title}
                    </h3>
                    <ul className="space-y-2">
                      {node.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="text-body-sm text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">
                            <svg
                              width="6"
                              height="6"
                              viewBox="0 0 6 6"
                              fill="currentColor"
                            >
                              <rect width="6" height="6" />
                            </svg>
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
