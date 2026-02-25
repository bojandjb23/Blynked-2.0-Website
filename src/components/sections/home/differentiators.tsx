"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/shared/glow-card";

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    number: "01",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Full Funnel Ownership",
    description:
      "We don\u2019t run one channel. We own the entire pipeline from positioning to closed deal.",
  },
  {
    number: "02",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v-2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Partnership, Not Project",
    description:
      "Average engagement: 12+ months. We build with you, not for you.",
  },
  {
    number: "03",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8l3 3 4-4 3 3" />
      </svg>
    ),
    title: "System, Not Tactics",
    description:
      "The Traction Framework creates repeatable, predictable growth \u2014 independent of any single channel.",
  },
];

export function Differentiators() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cards = sectionRef.current.querySelectorAll(".diff-card");

    gsap.fromTo(
      cards,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },
      }
    );

    /* Fade in the large numbers separately */
    const numbers = sectionRef.current.querySelectorAll(".diff-number");
    gsap.fromTo(
      numbers,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
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
      id="differentiators"
      className="relative py-24 sm:py-32 bg-bg-secondary overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-4">Why Us</p>
          <h2 className="text-display-lg text-text-primary">
            Growth partner, not another vendor
          </h2>
        </div>

        {/* Asymmetric layout: first card wider */}
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {differentiators.map((item) => (
            <GlowCard
              key={item.title}
              className="diff-card p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Massive decorative number */}
              <span className="diff-number absolute -top-4 -right-2 text-[8rem] sm:text-[10rem] font-mono font-bold leading-none text-text-primary/[0.03] select-none pointer-events-none">
                {item.number}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center text-accent mb-6">
                  {item.icon}
                </div>
                <h3 className="text-heading-md text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-body-md text-text-secondary">
                  {item.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
