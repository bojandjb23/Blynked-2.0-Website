"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const SESSION_KEY = "blynked-preloader-seen";
const COUNTING_DURATION = 2000;
const FADE_DURATION = 500;

export function Preloader() {
  const [phase, setPhase] = useState<"idle" | "counting" | "fading" | "done">(
    "idle"
  );
  const [digits, setDigits] = useState("000");
  const [barActive, setBarActive] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const shouldSkip = useCallback(() => {
    if (typeof window === "undefined") return true;
    if (sessionStorage.getItem(SESSION_KEY)) return true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return true;
    return false;
  }, []);

  useEffect(() => {
    if (shouldSkip()) {
      setPhase("done");
      return;
    }

    sessionStorage.setItem(SESSION_KEY, "1");
    setPhase("counting");
    startTimeRef.current = performance.now();

    // Trigger the progress bar transition on the next frame
    requestAnimationFrame(() => setBarActive(true));

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;

      if (elapsed < COUNTING_DURATION) {
        const progress = elapsed / COUNTING_DURATION;

        // Rapid random digits, slowing down as we approach the end
        const updateThreshold = 30 + progress * 120;
        if (elapsed % updateThreshold < 16 || progress < 0.2) {
          const d1 = Math.floor(Math.random() * 10);
          const d2 = Math.floor(Math.random() * 10);
          const d3 = Math.floor(Math.random() * 10);
          setDigits(`${d1}${d2}${d3}`);
        }

        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Land on a final number
        setDigits("100");
        setTimeout(() => {
          setPhase("fading");
          setTimeout(() => setPhase("done"), FADE_DURATION);
        }, 200);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [shouldSkip]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#0E0E0E] flex items-center justify-center"
      style={{
        opacity: phase === "fading" ? 0 : 1,
        transition: `opacity ${FADE_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1)`,
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      {/* Subtle radial glow behind the counter */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,113,32,0.06)_0%,transparent_60%)]" />

      {/* Grid lines for crypto/technical feel */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Counter display */}
      <div className="relative z-10 select-none">
        <span
          className="font-mono text-[#FF7120] tabular-nums tracking-[-0.05em] block text-center"
          style={{
            fontSize: "clamp(80px, 15vw, 120px)",
            lineHeight: 1,
            textShadow:
              "0 0 60px rgba(255,113,32,0.3), 0 0 120px rgba(255,113,32,0.1)",
          }}
        >
          {digits}
        </span>

        {/* Progress bar */}
        <div className="mt-6 w-full h-[1px] bg-white/[0.06] overflow-hidden">
          <div
            className="h-full bg-[#FF7120] origin-left"
            style={{
              width: barActive ? "100%" : "0%",
              transition: barActive
                ? `width ${COUNTING_DURATION}ms linear`
                : "none",
            }}
          />
        </div>

        {/* Label */}
        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-white/20 font-mono">
          Initializing
        </p>
      </div>
    </div>
  );
}
