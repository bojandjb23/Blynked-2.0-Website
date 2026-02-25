"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ANIMATION } from "@/lib/constants";

export function BookACallHero() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.06),transparent_60%)]" />

      <Container className="relative z-10 text-center max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION.duration.heroText,
            ease: ANIMATION.easing,
          }}
          className="text-display-lg text-text-primary mb-6"
        >
          Let&rsquo;s Talk About Your Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: ANIMATION.duration.heroText,
            ease: ANIMATION.easing,
            delay: 0.1,
          }}
          className="text-body-lg text-text-secondary"
        >
          30 minutes. No pitch. Just an honest assessment of your pipeline and
          what&rsquo;s possible.
        </motion.p>
      </Container>
    </section>
  );
}
