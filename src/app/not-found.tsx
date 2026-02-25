import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(244,121,32,0.05),transparent_60%)]" />

      <Container className="relative z-10 text-center">
        <p className="text-metric text-accent/20 mb-4" aria-hidden="true">
          404
        </p>
        <h1 className="text-heading-lg text-text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-body-md text-text-secondary mb-8 max-w-md mx-auto">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <Button href="/">Back to Homepage</Button>
      </Container>
    </section>
  );
}
