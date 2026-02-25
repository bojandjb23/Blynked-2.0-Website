"use client";

import { ScrollReveal } from "./scroll-reveal";

const clients = [
  "Envative",
  "Mayven Studios",
  "Amsterdam Standard",
  "Index Software",
  "YouSir",
  "ThinkNimble",
];

export function LogoBar() {
  return (
    <ScrollReveal>
      <div className="glass p-8">
        <p className="text-caption text-text-tertiary text-center mb-6">
          Trusted by growth-focused software companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clients.map((name) => (
            <div
              key={name}
              className="text-text-tertiary hover:text-text-primary transition-colors duration-300 text-sm font-semibold tracking-wide opacity-60 hover:opacity-100"
            >
              {name}
            </div>
          ))}
        </div>
        <p className="text-caption text-text-tertiary text-center mt-6">
          <span className="text-accent font-semibold">10x</span> lead quality{" "}
          <span className="mx-2 text-border-glass">|</span>
          <span className="text-accent font-semibold">20x</span> ROI{" "}
          <span className="mx-2 text-border-glass">|</span>
          <span className="text-accent font-semibold">$139K</span> closed in 90 days
        </p>
      </div>
    </ScrollReveal>
  );
}
