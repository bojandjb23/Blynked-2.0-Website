"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const pillars = [
  { label: "Positioning", number: "01", angle: -45 },
  { label: "Pipeline", number: "02", angle: 45 },
  { label: "Sales", number: "03", angle: 135 },
  { label: "Scalability", number: "04", angle: -135 },
];

function AnimatedFrameworkDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      svg.querySelectorAll(".draw-line").forEach((el) => {
        (el as SVGElement).style.strokeDashoffset = "0";
      });
      svg.querySelectorAll(".fade-in").forEach((el) => {
        (el as SVGElement).style.opacity = "1";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            svg.classList.add("animate-active");
            observer.unobserve(svg);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative max-w-[680px] mx-auto mt-20"
      aria-label="The Traction Framework: four connected pillars"
    >
      <svg
        ref={svgRef}
        className="w-full h-auto [&.animate-active_.draw-line]:![stroke-dashoffset:0] [&.animate-active_.fade-in]:!opacity-100"
        viewBox="0 0 680 380"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          {/* Glow filter for the center hub */}
          <filter id="hub-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter for lines */}
          <filter
            id="line-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node glow */}
          <filter
            id="node-glow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for the main lines */}
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(244,121,32,0.6)" />
            <stop offset="50%" stopColor="rgba(244,121,32,0.3)" />
            <stop offset="100%" stopColor="rgba(244,121,32,0.6)" />
          </linearGradient>

          {/* Radial gradient for center */}
          <radialGradient id="center-fill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(244,121,32,0.2)" />
            <stop offset="100%" stopColor="rgba(244,121,32,0.05)" />
          </radialGradient>
        </defs>

        {/* Outer frame rectangle -- drawn on scroll */}
        <rect
          className="draw-line"
          x="60"
          y="40"
          width="560"
          height="300"
          rx="20"
          stroke="rgba(244,121,32,0.15)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="1800"
          strokeDashoffset="1800"
          style={{
            transition: "stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        />

        {/* Connection lines with glow */}
        {/* Top: Positioning to Pipeline */}
        <line
          className="draw-line"
          x1="170"
          y1="110"
          x2="510"
          y2="110"
          stroke="url(#line-grad)"
          strokeWidth="1.5"
          filter="url(#line-glow)"
          strokeDasharray="340"
          strokeDashoffset="340"
          style={{
            transition:
              "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        />

        {/* Right: Pipeline to Sales */}
        <line
          className="draw-line"
          x1="510"
          y1="110"
          x2="510"
          y2="270"
          stroke="url(#line-grad)"
          strokeWidth="1.5"
          filter="url(#line-glow)"
          strokeDasharray="160"
          strokeDashoffset="160"
          style={{
            transition:
              "stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
          }}
        />

        {/* Bottom: Sales to Scalability */}
        <line
          className="draw-line"
          x1="510"
          y1="270"
          x2="170"
          y2="270"
          stroke="url(#line-grad)"
          strokeWidth="1.5"
          filter="url(#line-glow)"
          strokeDasharray="340"
          strokeDashoffset="340"
          style={{
            transition:
              "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
          }}
        />

        {/* Left: Scalability to Positioning */}
        <line
          className="draw-line"
          x1="170"
          y1="270"
          x2="170"
          y2="110"
          stroke="url(#line-grad)"
          strokeWidth="1.5"
          filter="url(#line-glow)"
          strokeDasharray="160"
          strokeDashoffset="160"
          style={{
            transition:
              "stroke-dashoffset 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s",
          }}
        />

        {/* Diagonal crosses */}
        <line
          className="draw-line"
          x1="170"
          y1="110"
          x2="510"
          y2="270"
          stroke="rgba(244,121,32,0.1)"
          strokeWidth="1"
          strokeDasharray="420"
          strokeDashoffset="420"
          style={{
            transition:
              "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s",
          }}
        />
        <line
          className="draw-line"
          x1="510"
          y1="110"
          x2="170"
          y2="270"
          stroke="rgba(244,121,32,0.1)"
          strokeWidth="1"
          strokeDasharray="420"
          strokeDashoffset="420"
          style={{
            transition:
              "stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s",
          }}
        />

        {/* Center hub with glow */}
        <circle
          className="fade-in"
          cx="340"
          cy="190"
          r="32"
          fill="url(#center-fill)"
          stroke="rgba(244,121,32,0.4)"
          strokeWidth="1.5"
          filter="url(#hub-glow)"
          style={{
            opacity: 0,
            transition: "opacity 0.8s ease 1.8s",
          }}
        />
        <text
          className="fade-in"
          x="340"
          y="196"
          textAnchor="middle"
          fill="rgba(244,121,32,0.8)"
          fontSize="13"
          fontFamily="var(--font-mono)"
          fontWeight="700"
          style={{
            opacity: 0,
            transition: "opacity 0.8s ease 2s",
          }}
        >
          TF
        </text>

        {/* Pulsing ring around center */}
        <circle
          className="fade-in"
          cx="340"
          cy="190"
          r="32"
          fill="none"
          stroke="rgba(244,121,32,0.2)"
          strokeWidth="1"
          style={{
            opacity: 0,
            transition: "opacity 0.8s ease 2s",
            animation: "pulse-ring 3s ease-out infinite 2.5s",
            transformOrigin: "340px 190px",
          }}
        />
      </svg>

      {/* Pillar nodes positioned absolutely over the SVG */}
      <div className="absolute inset-0">
        {/* Top-left: Positioning */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{ left: "15%", top: "14%", transform: "translate(-50%, -50%)" }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-elevated flex items-center justify-center mb-2 animate-float">
            <span className="text-accent font-mono text-sm sm:text-base font-bold">
              01
            </span>
          </div>
          <span className="text-heading-sm text-text-primary text-sm sm:text-base">
            Positioning
          </span>
        </div>

        {/* Top-right: Pipeline */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{ left: "85%", top: "14%", transform: "translate(-50%, -50%)" }}
        >
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-elevated flex items-center justify-center mb-2 animate-float"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="text-accent font-mono text-sm sm:text-base font-bold">
              02
            </span>
          </div>
          <span className="text-heading-sm text-text-primary text-sm sm:text-base">
            Pipeline
          </span>
        </div>

        {/* Bottom-right: Sales */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{
            left: "85%",
            top: "86%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-elevated flex items-center justify-center mb-2 animate-float"
            style={{ animationDelay: "3s" }}
          >
            <span className="text-accent font-mono text-sm sm:text-base font-bold">
              03
            </span>
          </div>
          <span className="text-heading-sm text-text-primary text-sm sm:text-base">
            Sales
          </span>
        </div>

        {/* Bottom-left: Scalability */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{
            left: "15%",
            top: "86%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-elevated flex items-center justify-center mb-2 animate-float"
            style={{ animationDelay: "4.5s" }}
          >
            <span className="text-accent font-mono text-sm sm:text-base font-bold">
              04
            </span>
          </div>
          <span className="text-heading-sm text-text-primary text-sm sm:text-base">
            Scalability
          </span>
        </div>
      </div>
    </div>
  );
}

export function HowWeWorkHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Extra atmospheric gradient orbs */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(244,121,32,0.06),transparent_70%)] blur-2xl" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(120,80,200,0.04),transparent_70%)] blur-3xl" />

      <Container className="relative z-10 py-20 sm:py-32">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-eyebrow mb-8 tracking-[0.2em]">
              OUR METHODOLOGY
            </p>
            <h1 className="text-display-xl text-text-primary mb-8">
              The Traction Framework
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A four-pillar system that transforms how tech companies acquire
              revenue. No guesswork. No dependency on any single channel.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <AnimatedFrameworkDiagram />
        </ScrollReveal>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
