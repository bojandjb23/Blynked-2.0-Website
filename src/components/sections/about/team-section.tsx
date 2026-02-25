"use client";

import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { teamMembers } from "@/data/team-members";

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function TeamSection() {
  const sortedMembers = [...teamMembers].sort((a, b) => a.order - b.order);

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4">The Team</p>
            <h2 className="text-heading-lg text-text-primary">
              The People Behind Blynked
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {sortedMembers.map((member) => (
            <Card key={member.name} variant="elevated" as="article" className="p-8">
              <div className="flex flex-col items-center text-center">
                {/* Placeholder photo with initials */}
                <div className="w-20 h-20 rounded-full bg-bg-tertiary border border-border-glass flex items-center justify-center mb-5">
                  <span className="text-heading-sm text-text-secondary font-semibold">
                    {getInitials(member.name)}
                  </span>
                </div>

                <h3 className="text-heading-sm text-text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-caption text-accent mb-4">{member.role}</p>
                <p className="text-body-sm text-text-secondary mb-5">
                  {member.bio}
                </p>

                {member.linkedinUrl && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-caption text-text-tertiary hover:text-accent transition-colors duration-200"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </Card>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
