"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNav = useCallback(
    (index: number) => {
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    },
    [activeIndex]
  );

  const activeMember = sortedMembers[activeIndex];

  return (
    <Section>
      <Container>
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-eyebrow mb-4 tracking-[0.2em]">THE TEAM</p>
            <h2 className="text-display-lg text-text-primary">
              The People Behind Blynked
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Team showcase */}
            <div className="relative flex items-center justify-center gap-6 md:gap-10 min-h-[420px]">
              {sortedMembers.map((member, index) => {
                const isActive = index === activeIndex;

                // Calculate offset for side cards
                const offset = index - activeIndex;

                if (isActive) {
                  return (
                    <AnimatePresence key={member.name} mode="wait">
                      <motion.div
                        key={`active-${member.name}`}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="flex-shrink-0 w-full max-w-md z-20"
                      >
                        <GlowCard className="p-8 md:p-10">
                          <div className="flex flex-col items-center text-center">
                            {/* Large photo placeholder */}
                            <div className="w-28 h-28 rounded-full bg-bg-tertiary border-2 border-border-accent flex items-center justify-center mb-6 relative">
                              <span className="text-heading-lg text-accent font-semibold">
                                {getInitials(member.name)}
                              </span>
                              {/* Glow ring */}
                              <div
                                className="absolute -inset-1 rounded-full opacity-40"
                                style={{
                                  background:
                                    "conic-gradient(from 0deg, rgba(244,121,32,0.3), transparent, rgba(244,121,32,0.3))",
                                  filter: "blur(4px)",
                                }}
                                aria-hidden="true"
                              />
                            </div>

                            <h3 className="text-heading-md text-text-primary mb-1">
                              {member.name}
                            </h3>
                            <p className="text-caption text-accent mb-6">
                              {member.role}
                            </p>
                            <p className="text-body-md text-text-secondary mb-6 leading-relaxed">
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
                        </GlowCard>
                      </motion.div>
                    </AnimatePresence>
                  );
                }

                // Side card (non-active)
                return (
                  <motion.button
                    key={member.name}
                    onClick={() => handleNav(index)}
                    animate={{
                      rotate: offset < 0 ? -5 : 5,
                      scale: 0.75,
                      opacity: 0.5,
                      x: offset < 0 ? -20 : 20,
                    }}
                    whileHover={{ scale: 0.8, opacity: 0.7 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="hidden md:flex flex-shrink-0 w-48 flex-col items-center text-center cursor-pointer glass-elevated p-6 z-10"
                    aria-label={`View ${member.name}`}
                  >
                    <div className="w-16 h-16 rounded-full bg-bg-tertiary border border-border-glass flex items-center justify-center mb-3">
                      <span className="text-heading-sm text-text-secondary font-semibold">
                        {getInitials(member.name)}
                      </span>
                    </div>
                    <h4 className="text-body-sm text-text-primary font-medium">
                      {member.name}
                    </h4>
                    <p className="text-xs text-text-tertiary mt-1">
                      {member.role}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* Dot navigation */}
            <div
              className="flex justify-center gap-3 mt-8"
              role="tablist"
              aria-label="Team member navigation"
            >
              {sortedMembers.map((member, index) => (
                <button
                  key={member.name}
                  onClick={() => handleNav(index)}
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show ${member.name}`}
                  className="group p-2"
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        index === activeIndex
                          ? "rgba(244,121,32,1)"
                          : "rgba(255,255,255,0.15)",
                      boxShadow:
                        index === activeIndex
                          ? "0 0 8px rgba(244,121,32,0.5)"
                          : "none",
                      transform:
                        index === activeIndex ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
