import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function CalendarEmbed() {
  return (
    <ScrollReveal>
      <div className="glass p-8 md:p-10 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center text-accent mb-5">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <h3 className="text-heading-sm text-text-primary mb-2">
          Pick a Time
        </h3>
        <p className="text-body-sm text-text-tertiary max-w-xs">
          Calendar booking will appear here. Choose a 30-minute slot that works
          for you.
        </p>
        <div className="mt-6 px-4 py-2 rounded-full border border-dashed border-border-glass text-caption text-text-tertiary">
          Calendar embed placeholder
        </div>
      </div>
    </ScrollReveal>
  );
}
