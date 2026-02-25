import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialBlockProps {
  testimonial: Testimonial;
  variant?: "full" | "mini";
  className?: string;
}

export function TestimonialBlock({ testimonial, variant = "full", className }: TestimonialBlockProps) {
  if (variant === "mini") {
    return (
      <div className={cn("glass p-6", className)}>
        <blockquote className="text-body-md text-text-secondary italic">
          &ldquo;{testimonial.pullQuote}&rdquo;
        </blockquote>
        <p className="text-caption text-text-tertiary mt-3">
          {testimonial.authorName}, {testimonial.authorTitle} — {testimonial.authorCompany}
        </p>
      </div>
    );
  }

  return (
    <div className={cn("glass-elevated p-8 md:p-12 relative", className)}>
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-[16px]" />
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-bg-tertiary flex items-center justify-center text-text-tertiary text-xl font-bold">
            {testimonial.authorName.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <blockquote className="text-heading-md text-text-primary mb-6">
            &ldquo;{testimonial.pullQuote}&rdquo;
          </blockquote>
          {testimonial.metric && (
            <p className="text-accent font-mono text-metric-sm mb-4">
              {testimonial.metric}{" "}
              <span className="text-caption text-text-tertiary font-sans">
                {testimonial.metricLabel}
              </span>
            </p>
          )}
          <div>
            <p className="text-body-md text-text-primary font-semibold">
              {testimonial.authorName}
            </p>
            <p className="text-caption text-text-tertiary">
              {testimonial.authorTitle}, {testimonial.authorCompany}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
