import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Metric } from "@/components/ui/metric";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { caseStudies } from "@/data/case-studies";

export function CaseStudyHighlights() {
  const featured = caseStudies.slice(0, 3);

  return (
    <Section background="primary" id="results">
      <Container>
        <ScrollReveal>
          <p className="text-eyebrow mb-4">RESULTS</p>
          <h2 className="text-heading-lg text-text-primary max-w-2xl mb-12">
            Real Companies. Measurable Impact.
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-3 gap-6" staggerDelay={150}>
          {featured.map((study) => (
            <article
              key={study.slug}
              className="glass-interactive p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-heading-sm text-text-primary">
                  {study.clientName}
                </h3>
                <Badge variant="accent">{study.industryTag}</Badge>
              </div>

              <div className="mb-6">
                <Metric
                  value={study.heroMetric}
                  label={study.heroMetricLabel}
                  size="sm"
                  className="text-left"
                />
              </div>

              <p className="text-body-sm text-text-secondary mb-4 flex-1">
                {study.resultSummary}
              </p>

              <blockquote className="text-body-sm text-text-tertiary italic mb-6 border-l-2 border-accent pl-4">
                &ldquo;{study.quote}&rdquo;
                <span className="block mt-1 text-caption not-italic">
                  &mdash; {study.quoteAuthor}, {study.quoteTitle}
                </span>
              </blockquote>

              <Button
                href={`/results/${study.slug}`}
                variant="ghost"
                className="mt-auto"
              >
                Read the Full Story
              </Button>
            </article>
          ))}
        </StaggerReveal>

        <ScrollReveal className="mt-10 text-center">
          <Button href="/results" variant="secondary">
            See All Results
          </Button>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
