import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const pillars = [
  { label: "Positioning", number: "01" },
  { label: "Pipeline", number: "02" },
  { label: "Sales", number: "03" },
  { label: "Scalability", number: "04" },
];

function FrameworkDiagram() {
  return (
    <div className="relative max-w-[600px] mx-auto mt-16" aria-label="The Traction Framework: four connected pillars">
      {/* SVG connections */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 600 300"
        fill="none"
        aria-hidden="true"
      >
        {/* Top line: Positioning to Pipeline */}
        <line x1="120" y1="80" x2="480" y2="80" stroke="rgba(244,121,32,0.2)" strokeWidth="1.5" />
        {/* Right line: Pipeline to Sales */}
        <line x1="480" y1="80" x2="480" y2="220" stroke="rgba(244,121,32,0.2)" strokeWidth="1.5" />
        {/* Bottom line: Sales to Scalability */}
        <line x1="480" y1="220" x2="120" y2="220" stroke="rgba(244,121,32,0.2)" strokeWidth="1.5" />
        {/* Left line: Scalability to Positioning */}
        <line x1="120" y1="220" x2="120" y2="80" stroke="rgba(244,121,32,0.2)" strokeWidth="1.5" />
        {/* Diagonal cross: Positioning to Sales */}
        <line x1="120" y1="80" x2="480" y2="220" stroke="rgba(244,121,32,0.08)" strokeWidth="1" strokeDasharray="6 4" />
        {/* Diagonal cross: Pipeline to Scalability */}
        <line x1="480" y1="80" x2="120" y2="220" stroke="rgba(244,121,32,0.08)" strokeWidth="1" strokeDasharray="6 4" />
        {/* Center hub */}
        <circle cx="300" cy="150" r="24" fill="rgba(244,121,32,0.1)" stroke="rgba(244,121,32,0.3)" strokeWidth="1" />
        <text x="300" y="155" textAnchor="middle" fill="rgba(244,121,32,0.6)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600">
          TF
        </text>
        {/* Directional arrows along top */}
        <polygon points="300,75 305,70 305,72 300,77 295,72 295,70" fill="rgba(244,121,32,0.3)" transform="rotate(90, 300, 75)" />
      </svg>

      {/* Grid of 4 pillar nodes */}
      <div className="grid grid-cols-2 gap-y-24 gap-x-8 sm:gap-x-16 relative z-10 py-8">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-elevated flex items-center justify-center mb-3">
              <span className="text-accent font-mono text-sm sm:text-base font-bold">
                {pillar.number}
              </span>
            </div>
            <span className="text-heading-sm text-text-primary">{pillar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowWeWorkHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.06),transparent_60%)]" />

      <Container className="relative z-10 py-16 sm:py-24">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-eyebrow mb-6">OUR METHODOLOGY</p>
            <h1 className="text-display-xl text-text-primary mb-6">
              The Traction Framework
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              A four-pillar system that transforms how tech companies acquire revenue.
              No guesswork. No dependency on any single channel.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <FrameworkDiagram />
        </ScrollReveal>
      </Container>
    </section>
  );
}
