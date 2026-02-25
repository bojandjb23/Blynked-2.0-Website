"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ANIMATION } from "@/lib/constants";

export function BookACallHero() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Atmospheric orbs */}
      <div
        className="absolute top-[30%] right-[20%] w-[300px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.07), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,200,0.03), transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: ANIMATION.easing,
          }}
          className="text-eyebrow mb-8 tracking-[0.2em]"
        >
          GET STARTED
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION.duration.heroText,
            ease: ANIMATION.easing,
            delay: 0.1,
          }}
          className="text-display-xl text-text-primary mb-8"
        >
          Let&rsquo;s Talk About Your Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION.duration.heroText,
            ease: ANIMATION.easing,
            delay: 0.2,
          }}
          className="text-body-lg text-text-secondary leading-relaxed"
        >
          30 minutes. No pitch. Just an honest assessment of your pipeline and
          what&rsquo;s possible.
        </motion.p>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
