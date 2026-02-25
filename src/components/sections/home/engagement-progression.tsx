"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const svgProps = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const phases = [
  { name: "Strategy", description: "We audit your current state and design the growth plan",
    icon: <svg {...svgProps}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><circle cx="11" cy="11" r="3" /></svg> },
  { name: "Build", description: "We set up the systems, channels, and processes",
    icon: <svg {...svgProps}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg> },
  { name: "Launch", description: "We activate outreach and start filling your pipeline",
    icon: <svg {...svgProps}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg> },
  { name: "Optimize", description: "We test, refine, and improve conversion at every stage",
    icon: <svg {...svgProps}><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg> },
  { name: "Scale", description: "We hand you a system that runs without us",
    icon: <svg {...svgProps}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg> },
];

const glassNode = "rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.08)] bg-[rgba(26,26,26,0.7)] backdrop-blur-[12px] text-accent relative z-10";
const glassCard = "rounded-[16px] bg-[rgba(26,26,26,0.7)] backdrop-blur-[12px] border border-[rgba(255,255,255,0.08)]";
const orangeGlow = { boxShadow: "0 0 16px rgba(244,121,32,0.1)" };

export function EngagementProgression() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const lineVertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const scrubOpts = { trigger: sectionRef.current, start: "top 70%", end: "bottom 60%", scrub: 0.5 };
      if (lineRef.current) {
        gsap.fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: scrubOpts });
      }
      if (lineVertRef.current) {
        gsap.fromTo(lineVertRef.current, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { ...scrubOpts } });
      }
      const nodes = sectionRef.current!.querySelectorAll(".phase-node");
      gsap.fromTo(nodes, { opacity: 0, y: 30, scale: 0.9 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="engagement-progression" className="relative py-24 sm:py-32 bg-bg-secondary overflow-hidden">
      <div className="noise-overlay absolute inset-0 pointer-events-none" />
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <p className="text-eyebrow mb-4">How We Partner</p>
          <h2 className="text-display-lg text-text-primary max-w-3xl mx-auto">
            From Strategy to Scale — A Clear Path Forward
          </h2>
        </div>

        <div ref={sectionRef} className="relative">
          {/* Desktop horizontal progress line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-[rgba(255,255,255,0.06)]" aria-hidden="true">
            <div ref={lineRef} className="absolute inset-0 origin-left" style={{ background: "linear-gradient(90deg, rgba(244,121,32,0.9), rgba(244,121,32,0.4))", boxShadow: "0 0 12px rgba(244,121,32,0.3)" }} />
          </div>
          {/* Mobile vertical progress line */}
          <div className="lg:hidden absolute left-[28px] top-[60px] bottom-[60px] w-px bg-[rgba(255,255,255,0.06)]" aria-hidden="true">
            <div ref={lineVertRef} className="absolute inset-0 origin-top" style={{ background: "linear-gradient(180deg, rgba(244,121,32,0.9), rgba(244,121,32,0.4))", boxShadow: "0 0 8px rgba(244,121,32,0.3)" }} />
          </div>

          {/* Desktop: horizontal 5-column */}
          <div className="hidden lg:grid grid-cols-5 gap-4">
            {phases.map((phase, i) => (
              <div key={phase.name} className="phase-node flex flex-col items-center text-center">
                <div className={`w-10 h-10 mb-5 ${glassNode}`} style={orangeGlow}>
                  <span className="text-sm font-mono font-bold">{i + 1}</span>
                </div>
                <div className={`w-full p-5 ${glassCard} transition-all duration-300 hover:border-[rgba(244,121,32,0.15)] hover:bg-[rgba(26,26,26,0.85)]`}>
                  <div className="w-10 h-10 rounded-xl bg-accent-glow flex items-center justify-center text-accent mb-3 mx-auto">{phase.icon}</div>
                  <h3 className="text-heading-sm text-text-primary mb-2">{phase.name}</h3>
                  <p className="text-body-sm text-text-secondary leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="lg:hidden space-y-6">
            {phases.map((phase, i) => (
              <div key={phase.name} className="phase-node flex items-start gap-5 pl-2">
                <div className={`flex-shrink-0 w-10 h-10 mt-1 ${glassNode}`} style={orangeGlow}>
                  <span className="text-sm font-mono font-bold">{i + 1}</span>
                </div>
                <div className={`flex-1 p-5 ${glassCard}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-accent-glow flex items-center justify-center text-accent">{phase.icon}</div>
                    <h3 className="text-heading-sm text-text-primary">{phase.name}</h3>
                  </div>
                  <p className="text-body-sm text-text-secondary">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Button href="/how-we-work" variant="ghost">See the Full Process</Button>
        </div>
      </Container>
    </section>
  );
}
