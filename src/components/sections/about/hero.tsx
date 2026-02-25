import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden mesh-gradient-hero noise-overlay">
      {/* Atmospheric orbs */}
      <div
        className="absolute top-[25%] right-[10%] w-[350px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(244,121,32,0.07), transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[15%] left-[5%] w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,200,0.04), transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-20 sm:py-32 text-center">
        <ScrollReveal>
          <p className="text-eyebrow mb-8 tracking-[0.2em]">ABOUT BLYNKED</p>
          <h1 className="text-display-xl text-text-primary mb-8 max-w-4xl mx-auto">
            We Build Growth Engines for Tech Companies
          </h1>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Founded in the Netherlands. Obsessed with making pipeline
            predictable.
          </p>
        </ScrollReveal>
      </Container>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-secondary to-transparent" />
    </section>
  );
}
