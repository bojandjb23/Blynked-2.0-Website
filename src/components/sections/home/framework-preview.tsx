"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/shared/glow-card";
import { TiltCard } from "@/components/shared/tilt-card";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    number: "01",
    name: "Positioning",
    description:
      "Nail your offer so the right people pay attention. We sharpen your message until it cuts through noise.",
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
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: "02",
    name: "Pipeline",
    description:
      "Build a system that books qualified meetings on repeat. Multi-channel outbound that actually works.",
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
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    number: "03",
    name: "Sales",
    description:
      "Close deals without founder dependency. Structured process, deal coaching, repeatable wins.",
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
  },
  {
    number: "04",
    name: "Scalability",
    description:
      "Grow revenue with systems, not heroics. Predictable growth independent of any single channel.",
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
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
  },
];

export function FrameworkPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const cards = sectionRef.current.querySelectorAll(".framework-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      }
    );

    /* Animate connecting lines */
    if (svgRef.current) {
      const lines = svgRef.current.querySelectorAll(".connect-line");
      lines.forEach((line) => {
        const el = line as SVGLineElement;
        const length = Math.sqrt(
          Math.pow(
            parseFloat(el.getAttribute("x2") || "0") -
              parseFloat(el.getAttribute("x1") || "0"),
            2
          ) +
            Math.pow(
              parseFloat(el.getAttribute("y2") || "0") -
                parseFloat(el.getAttribute("y1") || "0"),
              2
            )
        );
        el.style.strokeDasharray = `${length}`;
        el.style.strokeDashoffset = `${length}`;
      });

      gsap.to(lines, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="framework"
      className="relative py-24 sm:py-32 bg-bg-secondary section-angled-reverse overflow-hidden"
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-eyebrow mb-4">Our Approach</p>
          <h2 className="text-display-lg text-text-primary max-w-3xl mb-4">
            The Traction Framework
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl">
            Four pillars of predictable growth, working together as a system.
          </p>
        </div>

        {/* Bento grid — first card spans 2 cols */}
        <div ref={sectionRef} className="relative">
          {/* SVG connecting lines — hidden on mobile */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line
              className="connect-line"
              x1="50%"
              y1="45%"
              x2="35%"
              y2="60%"
              stroke="rgba(244,121,32,0.12)"
              strokeWidth="1"
            />
            <line
              className="connect-line"
              x1="50%"
              y1="45%"
              x2="65%"
              y2="60%"
              stroke="rgba(244,121,32,0.12)"
              strokeWidth="1"
            />
            <line
              className="connect-line"
              x1="50%"
              y1="45%"
              x2="85%"
              y2="60%"
              stroke="rgba(244,121,32,0.08)"
              strokeWidth="1"
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* First pillar — spans 2 cols on lg */}
            <TiltCard className="framework-card lg:col-span-2" maxTilt={4}>
              <GlowCard className="h-full p-8 sm:p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                  <div className="flex-shrink-0">
                    <span className="text-[4rem] lg:text-[5rem] font-mono font-bold leading-none text-accent/20 select-none">
                      {pillars[0].number}
                    </span>
                  </div>
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center text-accent mb-4">
                      {pillars[0].icon}
                    </div>
                    <h3 className="text-heading-md text-text-primary font-display italic mb-3">
                      {pillars[0].name}
                    </h3>
                    <p className="text-body-md text-text-secondary max-w-md">
                      {pillars[0].description}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </TiltCard>

            {/* Remaining 3 pillars */}
            {pillars.slice(1).map((pillar) => (
              <TiltCard key={pillar.name} className="framework-card" maxTilt={5}>
                <GlowCard className="h-full p-8">
                  <span className="text-[3.5rem] font-mono font-bold leading-none text-accent/15 select-none block mb-2">
                    {pillar.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-accent-glow flex items-center justify-center text-accent mb-4">
                    {pillar.icon}
                  </div>
                  <h3 className="text-heading-sm text-text-primary font-display italic mb-2">
                    {pillar.name}
                  </h3>
                  <p className="text-body-sm text-text-secondary">
                    {pillar.description}
                  </p>
                </GlowCard>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button href="/how-we-work" variant="ghost">
            See How It Works
          </Button>
        </div>
      </Container>
    </section>
  );
}
