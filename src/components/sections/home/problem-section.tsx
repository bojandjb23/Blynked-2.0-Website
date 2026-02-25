"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/shared/glow-card";
import { TextReveal } from "@/components/shared/text-reveal";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    number: "01",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 8v4l2 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: "Word-of-mouth dependency",
    description:
      "Relying on referrals and hoping the phone keeps ringing. No system, no predictability.",
  },
  {
    number: "02",
    icon: (
      <svg
        width="24"
        height="24"
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
    title: "Founder-led bottleneck",
    description:
      "Stuck in every sales conversation with no way to scale without you.",
  },
  {
    number: "03",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Vanity pipeline",
    description:
      "Pipeline that looks full but converts at embarrassing rates. Quantity over quality.",
  },
  {
    number: "04",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6" />
      </svg>
    ),
    title: "Unqualified proposals",
    description:
      "Sending proposals to prospects who were never qualified in the first place.",
  },
];

export function ProblemSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cards = gridRef.current.querySelectorAll(".problem-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === gridRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="problem"
      className="relative py-24 sm:py-32 mesh-gradient-section overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        {/* Eyebrow */}
        <p className="text-eyebrow mb-6">The Reality</p>

        {/* TextReveal headline */}
        <TextReveal
          text="Most tech companies grow despite their sales process, not because of it."
          tag="h2"
          className="text-display-lg text-text-primary max-w-4xl mb-16"
        />

        {/* Bento grid — 2x2 with varied sizing */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {painPoints.map((point) => (
            <GlowCard
              key={point.number}
              className="problem-card p-8 sm:p-10"
            >
              {/* Large background number */}
              <span className="absolute top-4 right-6 text-[5rem] font-mono font-bold leading-none text-text-tertiary/[0.06] select-none pointer-events-none">
                {point.number}
              </span>

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-glow flex items-center justify-center text-accent">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-heading-sm text-text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-body-sm text-text-secondary">
                    {point.description}
                  </p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
