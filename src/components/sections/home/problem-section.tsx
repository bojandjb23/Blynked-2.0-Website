import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";

const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v4l2 2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    text: "Relying on word-of-mouth and hoping the phone keeps ringing",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v-2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    text: "Founder stuck in every sales conversation with no way out",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    text: "Pipeline that looks full but converts at embarrassing rates",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6" />
      </svg>
    ),
    text: "Sending proposals to prospects who were never qualified",
  },
];

export function ProblemSection() {
  return (
    <Section background="primary" id="problem">
      <Container>
        <ScrollReveal>
          <p className="text-eyebrow mb-4">THE REALITY</p>
          <h2 className="text-heading-lg text-text-primary max-w-3xl mb-12">
            Most tech companies grow despite their sales process, not because of it.
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 gap-6" staggerDelay={100}>
          {painPoints.map((point) => (
            <div
              key={point.text}
              className="glass p-6 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-glow flex items-center justify-center text-accent">
                {point.icon}
              </div>
              <p className="text-body-md text-text-secondary">{point.text}</p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
