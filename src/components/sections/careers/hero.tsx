import { Container } from "@/components/ui/container";

export function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.06),transparent_65%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-glass to-transparent" />

      <Container className="relative z-10 py-16 sm:py-24 text-center">
        <p className="text-eyebrow mb-6">Careers</p>
        <h1 className="text-display-lg text-text-primary mb-6 max-w-3xl mx-auto">
          Build the #1 Growth Partner in the Netherlands
        </h1>
        <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
          We&rsquo;re looking for people who want to build something meaningful.
        </p>
      </Container>
    </section>
  );
}
