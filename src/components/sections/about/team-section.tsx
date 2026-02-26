"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { GlowCard } from "@/components/shared/glow-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { StaggerReveal } from "@/components/shared/stagger-reveal";
import { teamMembers } from "@/data/team-members";

/* ─── Specialty categories with colors ─── */

const specialties = [
  { label: "All", color: "#F47920" },
  { label: "Pipeline Systems", color: "#F47920" },
  { label: "Growth Strategy", color: "#8B5CF6" },
  { label: "Revenue Engineering", color: "#3B82F6" },
  { label: "Account-Based Marketing", color: "#EC4899" },
  { label: "Sales Enablement", color: "#10B981" },
  { label: "Multi-Channel Outreach", color: "#F59E0B" },
  { label: "Positioning & Messaging", color: "#6366F1" },
  { label: "Pipeline Operations", color: "#14B8A6" },
  { label: "Content & Demand Gen", color: "#EF4444" },
  { label: "Campaign Execution", color: "#8B5CF6" },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getSpecialtyColor(specialty: string): string {
  const match = specialties.find((s) => s.label === specialty);
  return match?.color ?? "#F47920";
}

export function TeamSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sortedMembers = useMemo(
    () => [...teamMembers].sort((a, b) => a.order - b.order),
    []
  );

  const filteredMembers = useMemo(() => {
    if (activeFilter === "All") return sortedMembers;
    return sortedMembers.filter((m) => m.specialty === activeFilter);
  }, [activeFilter, sortedMembers]);

  const usedSpecialties = useMemo(() => {
    const used = new Set(sortedMembers.map((m) => m.specialty));
    return specialties.filter((s) => s.label === "All" || used.has(s.label));
  }, [sortedMembers]);

  return (
    <section className="relative py-20 sm:py-28 bg-bg-secondary overflow-hidden">
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Atmospheric gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(244,121,32,0.06),transparent_70%)]" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-eyebrow mb-4 tracking-[0.2em]">THE TEAM</p>
            <h2 className="text-display-lg text-text-primary mb-4">
              Backed by a Full-Stack Execution Team
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Every engagement is powered by a dedicated team of specialists — not
              generalists, not freelancers.
            </p>
          </div>
        </ScrollReveal>

        {/* Specialty filter dots */}
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {usedSpecialties.map((spec) => (
              <button
                key={spec.label}
                onClick={() => setActiveFilter(spec.label)}
                className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor:
                    activeFilter === spec.label
                      ? `${spec.color}18`
                      : "rgba(255,255,255,0.03)",
                  borderWidth: 1,
                  borderColor:
                    activeFilter === spec.label
                      ? `${spec.color}40`
                      : "rgba(255,255,255,0.06)",
                  color:
                    activeFilter === spec.label
                      ? spec.color
                      : "var(--color-text-tertiary)",
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: spec.color }}
                />
                {spec.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Team grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <StaggerReveal
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
              staggerDelay={80}
            >
              {filteredMembers.map((member) => {
                const color = getSpecialtyColor(member.specialty);
                return (
                  <a
                    key={member.name}
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <GlowCard className="p-5 sm:p-6 text-center h-full transition-all duration-300 group-hover:border-[rgba(244,121,32,0.2)]">
                      {/* Photo / Initials */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 overflow-hidden">
                        {/* Gradient ring */}
                        <div
                          className="absolute -inset-[2px] rounded-full"
                          style={{
                            background: `conic-gradient(from 0deg, ${color}60, transparent, ${color}60)`,
                          }}
                        />
                        <div className="absolute inset-[2px] rounded-full bg-bg-tertiary flex items-center justify-center">
                          <span
                            className="text-heading-md font-semibold"
                            style={{ color }}
                          >
                            {getInitials(member.name)}
                          </span>
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="text-body-md text-text-primary font-semibold mb-1 group-hover:text-accent transition-colors duration-200">
                        {member.name}
                      </h3>

                      {/* Role */}
                      <p className="text-body-sm text-text-secondary mb-3">
                        {member.role}
                      </p>

                      {/* Specialty tag */}
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${color}12`,
                          color,
                          borderWidth: 1,
                          borderColor: `${color}25`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                        {member.specialty}
                      </span>

                      {/* LinkedIn icon on hover */}
                      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mx-auto text-text-tertiary"
                          aria-hidden="true"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </div>
                    </GlowCard>
                  </a>
                );
              })}
            </StaggerReveal>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
