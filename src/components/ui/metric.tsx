"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricProps {
  value: string;
  label: string;
  size?: "lg" | "sm";
  className?: string;
}

export function Metric({ value, label, size = "lg", className }: MetricProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const numericMatch = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!numericMatch) return;

    const [, prefix, numStr, suffix] = numericMatch;
    const target = parseInt(numStr, 10);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 1500;
            const start = performance.now();

            function animate(now: number) {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const current = Math.round(target * eased);
              setDisplayValue(`${prefix}${current}${suffix}`);
              if (progress < 1) requestAnimationFrame(animate);
            }

            setDisplayValue(`${prefix}0${suffix}`);
            requestAnimationFrame(animate);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div
        className={cn(
          "text-accent font-mono",
          size === "lg" ? "text-metric" : "text-metric-sm"
        )}
      >
        {displayValue}
      </div>
      <div className="text-caption text-text-tertiary mt-2">{label}</div>
    </div>
  );
}
