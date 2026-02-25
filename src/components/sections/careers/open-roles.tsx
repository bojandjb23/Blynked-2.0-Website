"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { jobOpenings } from "@/data/job-openings";

export function OpenRoles() {
  const activeRoles = jobOpenings.filter((job) => job.isActive);

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4">Open Positions</p>
            <h2 className="text-heading-lg text-text-primary">
              Join the Team
            </h2>
          </div>
        </ScrollReveal>

        {activeRoles.length > 0 ? (
          <StaggerReveal className="space-y-6 max-w-3xl mx-auto">
            {activeRoles.map((role) => (
              <Card key={role.title} variant="elevated" as="article" className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-heading-sm text-text-primary mb-3">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">{role.location}</Badge>
                      <Badge variant="accent">{role.type}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-body-sm text-text-secondary mb-6">
                  {role.description}
                </p>
                <Button
                  href={`mailto:careers@blynked.nl?subject=Application: ${encodeURIComponent(role.title)}`}
                  external
                  variant="secondary"
                  className="text-sm px-6 py-3"
                >
                  Apply Now
                </Button>
              </Card>
            ))}
          </StaggerReveal>
        ) : (
          <ScrollReveal>
            <Card variant="glass" className="p-12 text-center max-w-2xl mx-auto">
              <p className="text-body-md text-text-secondary">
                No open positions at the moment. Check back soon.
              </p>
            </Card>
          </ScrollReveal>
        )}
      </Container>
    </Section>
  );
}
