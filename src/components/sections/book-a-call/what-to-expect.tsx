import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const expectations = [
  "We'll review your current pipeline and identify the biggest gaps holding back growth.",
  "You'll get an honest assessment of whether the Traction Framework is a fit for your business.",
  "You'll leave with at least one actionable insight you can implement immediately.",
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <path
        d="M5 10l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatToExpect() {
  return (
    <Section background="secondary">
      <Container className="max-w-2xl">
        <ScrollReveal>
          <div className="glass p-8 md:p-10">
            <h2 className="text-heading-sm text-text-primary mb-6">
              What to Expect
            </h2>
            <ul className="space-y-4 mb-8">
              {expectations.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body-sm text-text-secondary"
                >
                  <span className="text-success">
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-caption text-text-tertiary border-t border-border-glass pt-6">
              No pressure. No 60-slide pitch deck. If we&rsquo;re not the right
              fit, we&rsquo;ll tell you.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
