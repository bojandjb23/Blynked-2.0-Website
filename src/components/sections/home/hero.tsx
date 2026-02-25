"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ANIMATION } from "@/lib/constants";

const pillars = [
  { label: "Positioning", x: 20, y: 30 },
  { label: "Pipeline", x: 80, y: 30 },
  { label: "Sales", x: 80, y: 70 },
  { label: "Scalability", x: 20, y: 70 },
];

function TractionVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationId: number;
    let time = 0;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    function getPos(pillar: (typeof pillars)[number]) {
      if (!canvas) return { x: 0, y: 0 };
      const rect = canvas.getBoundingClientRect();
      return {
        x: (pillar.x / 100) * rect.width,
        y: (pillar.y / 100) * rect.height,
      };
    }

    function drawConnections() {
      if (!ctx || !canvas) return;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw connections between sequential pillars
      const connections = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
      ];

      connections.forEach(([from, to]) => {
        const p1 = getPos(pillars[from]);
        const p2 = getPos(pillars[to]);

        // Line
        ctx!.beginPath();
        ctx!.moveTo(p1.x, p1.y);
        ctx!.lineTo(p2.x, p2.y);
        ctx!.strokeStyle = "rgba(244, 121, 32, 0.15)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Flowing dot
        if (!prefersReducedMotion) {
          const progress = ((time * 0.3 + from * 0.25) % 1);
          const dotX = p1.x + (p2.x - p1.x) * progress;
          const dotY = p1.y + (p2.y - p1.y) * progress;

          ctx!.beginPath();
          ctx!.arc(dotX, dotY, 3, 0, Math.PI * 2);
          ctx!.fillStyle = "rgba(244, 121, 32, 0.6)";
          ctx!.fill();
        }
      });
    }

    function animate() {
      time += 0.005;
      drawConnections();
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
      {pillars.map((pillar, i) => (
        <div
          key={pillar.label}
          className="absolute flex flex-col items-center gap-2"
          style={{
            left: `${pillar.x}%`,
            top: `${pillar.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-interactive flex items-center justify-center animate-pulse-slow"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: "3s",
            }}
          >
            <span className="text-accent font-mono text-sm sm:text-base font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <span className="text-caption text-text-secondary whitespace-nowrap">
            {pillar.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.08),transparent_60%)]" />

      <Container className="relative z-10 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION.duration.heroText,
                ease: ANIMATION.easing,
                delay: 0,
              }}
              className="text-eyebrow mb-6"
            >
              For software, tech &amp; SaaS companies doing $1.5M&ndash;$12M
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION.duration.heroText,
                ease: ANIMATION.easing,
                delay: 0.1,
              }}
              className="text-display-xl text-text-primary mb-6"
            >
              Your Pipeline Shouldn&rsquo;t Be Unpredictable
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION.duration.heroText,
                ease: ANIMATION.easing,
                delay: 0.2,
              }}
              className="text-body-lg text-text-secondary mb-10 max-w-lg"
            >
              We build predictable revenue pipelines for tech companies. No
              vendor BS&nbsp;&mdash; just a system that works.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: ANIMATION.duration.heroText,
                ease: ANIMATION.easing,
                delay: 0.3,
              }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/book-a-call">Book Your Strategy Call</Button>
              <Button href="/results" variant="secondary">
                See Our Results
              </Button>
            </motion.div>
          </div>

          {/* Traction Framework visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: ANIMATION.duration.slow,
              ease: ANIMATION.easing,
              delay: 0.4,
            }}
            className="hidden lg:block"
          >
            <TractionVisual />
          </motion.div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(244, 121, 32, 0.15);
          }
          50% {
            box-shadow: 0 0 20px 4px rgba(244, 121, 32, 0.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
