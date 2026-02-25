"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

/* ─── Traction Framework SVG Visual ─── */
function TractionVisual() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const paths = svgRef.current.querySelectorAll(".connection-line");
    paths.forEach((path) => {
      const el = path as SVGPathElement;
      const length = el.getTotalLength();
      el.style.strokeDasharray = `${length}`;
      el.style.strokeDashoffset = `${length}`;
    });

    gsap.to(paths, {
      strokeDashoffset: 0,
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.3,
      delay: 1.2,
    });

    const nodes = svgRef.current.querySelectorAll(".framework-node");
    gsap.fromTo(
      nodes,
      { scale: 0, opacity: 0, transformOrigin: "center center" },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.15,
        delay: 0.6,
      }
    );

    const labels = svgRef.current.querySelectorAll(".node-label");
    gsap.fromTo(
      labels,
      { opacity: 0, y: 8 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        delay: 1.0,
      }
    );
  }, []);

  const nodes = [
    { id: "positioning", label: "Positioning", cx: 130, cy: 90 },
    { id: "pipeline", label: "Pipeline", cx: 370, cy: 90 },
    { id: "sales", label: "Sales", cx: 370, cy: 310 },
    { id: "scalability", label: "Scalability", cx: 130, cy: 310 },
  ];

  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <svg
        ref={svgRef}
        viewBox="0 0 500 400"
        fill="none"
        className="w-full h-auto"
        aria-label="Traction Framework: Positioning, Pipeline, Sales, Scalability — interconnected growth system"
        role="img"
      >
        {/* Grid pattern background */}
        <defs>
          <pattern
            id="hero-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(244,121,32,0.25)" />
            <stop offset="100%" stopColor="rgba(244,121,32,0)" />
          </radialGradient>
          <linearGradient
            id="line-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="rgba(244,121,32,0.5)" />
            <stop offset="100%" stopColor="rgba(244,121,32,0.15)" />
          </linearGradient>
        </defs>

        <rect width="500" height="400" fill="url(#hero-grid)" />

        {/* Connection lines */}
        <path
          className="connection-line"
          d="M 170 90 L 330 90"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          className="connection-line"
          d="M 370 130 L 370 270"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          className="connection-line"
          d="M 330 310 L 170 310"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          className="connection-line"
          d="M 130 270 L 130 130"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        {/* Diagonal cross-connects */}
        <path
          className="connection-line"
          d="M 160 120 L 340 280"
          stroke="rgba(244,121,32,0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <path
          className="connection-line"
          d="M 340 120 L 160 280"
          stroke="rgba(244,121,32,0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Center diamond element */}
        <g className="framework-node">
          <rect
            x="232"
            y="182"
            width="36"
            height="36"
            rx="4"
            transform="rotate(45 250 200)"
            fill="rgba(244,121,32,0.06)"
            stroke="rgba(244,121,32,0.2)"
            strokeWidth="1"
          />
        </g>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id} className="framework-node" style={{ cursor: "default" }}>
            {/* Glow ring */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="38"
              fill="url(#node-glow)"
              className="animate-float"
              style={{ animationDelay: `${i * 0.8}s` }}
            />
            {/* Outer ring */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="30"
              fill="rgba(10,10,10,0.8)"
              stroke="rgba(244,121,32,0.25)"
              strokeWidth="1.5"
            />
            {/* Inner circle */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="18"
              fill="rgba(244,121,32,0.08)"
              stroke="rgba(244,121,32,0.35)"
              strokeWidth="1"
            />
            {/* Number */}
            <text
              x={node.cx}
              y={node.cy + 5}
              textAnchor="middle"
              fill="#F47920"
              fontSize="14"
              fontFamily="JetBrains Mono, monospace"
              fontWeight="600"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}

        {/* Labels */}
        {nodes.map((node) => (
          <text
            key={`label-${node.id}`}
            className="node-label"
            x={node.cx}
            y={node.cy + 50}
            textAnchor="middle"
            fill="#A1A1AA"
            fontSize="12"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            letterSpacing="0.04em"
          >
            {node.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

/* ─── Scroll Indicator ─── */
function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
      <span className="text-[10px] uppercase tracking-[0.2em] text-text-tertiary font-sans">
        Scroll
      </span>
      <div className="w-px h-8 bg-gradient-to-b from-text-tertiary/40 to-transparent relative overflow-hidden">
        <div className="absolute w-full h-3 bg-accent/60 animate-scroll-line" />
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const words = headlineRef.current.querySelectorAll(".hero-word");

    if (prefersReducedMotion) {
      words.forEach((w) => {
        (w as HTMLElement).style.opacity = "1";
        (w as HTMLElement).style.transform = "none";
      });
      return;
    }

    gsap.fromTo(
      words,
      { opacity: 0, y: 40, rotateX: -30 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.15,
      }
    );
  }, []);

  /* Parallax on the visual */
  const handleScroll = useCallback(() => {
    if (!visualRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const progress = -rect.top / window.innerHeight;
    visualRef.current.style.transform = `translateY(${progress * -30}px)`;
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Animate sub-elements */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(
      ".hero-eyebrow",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power2.out", delay: 0 }
    );

    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.9 }
    );

    gsap.fromTo(
      ".hero-ctas",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.1 }
    );

    gsap.fromTo(
      ".hero-scroll-indicator",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out", delay: 2 }
    );
  }, []);

  const headlineWords = [
    { text: "Your", accent: false },
    { text: "pipeline", accent: false },
    { text: "shouldn\u2019t", accent: true },
    { text: "be", accent: false },
    { text: "unpredictable", accent: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden mesh-gradient-hero section-angled"
    >
      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Decorative orb — top-right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Decorative orb — bottom-left */}
      <div
        className="absolute -bottom-48 -left-48 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,200,0.3) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 py-24 sm:py-32 lg:py-0">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-20 items-center min-h-[80vh] lg:min-h-screen lg:py-24">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="hero-eyebrow text-eyebrow mb-8 opacity-0">
              For software, tech &amp; SaaS companies doing $1.5M&ndash;$12M
            </p>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-display-xl text-text-primary mb-8"
              style={{ perspective: "600px" }}
            >
              {headlineWords.map((word, i) => (
                <span
                  key={i}
                  className={`hero-word inline-block mr-[0.25em] opacity-0 ${
                    word.accent ? "text-accent" : ""
                  }`}
                  style={word.accent ? { fontStyle: "italic" } : undefined}
                >
                  {word.text}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-body-lg text-text-secondary mb-12 max-w-lg opacity-0 font-light">
              We build predictable revenue pipelines for tech companies. No
              vendor BS&nbsp;&mdash; just a system that works.
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-wrap gap-4 opacity-0">
              <Button href="/book-a-call">Book Your Strategy Call</Button>
              <Button href="/results" variant="secondary">
                See Our Results
              </Button>
            </div>
          </div>

          {/* Right: Traction Framework Visual */}
          <div
            ref={visualRef}
            className="hidden lg:flex items-center justify-center"
          >
            <TractionVisual />
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator opacity-0">
        <ScrollIndicator />
      </div>

      {/* Scroll line animation */}
      <style jsx>{`
        @keyframes scroll-line {
          0% {
            top: -12px;
          }
          100% {
            top: 32px;
          }
        }
        .animate-scroll-line {
          animation: scroll-line 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
