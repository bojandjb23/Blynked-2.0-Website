"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { teamMembers } from "@/data/team-members";
import { teamCategories } from "@/data/team-categories";

/* ─── Constants ─── */

const AUTO_ROTATE_MS = 5500;
const RESUME_DELAY_MS = 8000;

/* ─── Helpers ─── */

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/** Photos that actually exist on disk (rick.jpg is missing). */
const MISSING_PHOTOS = new Set(["rick"]);

function hasPhoto(member: (typeof teamMembers)[number]): boolean {
  const firstName = member.photo
    .split("/")
    .pop()
    ?.replace(".jpg", "")
    .toLowerCase();
  return !MISSING_PHOTOS.has(firstName ?? "");
}

/* ─── Card sub-component ─── */

interface CardProps {
  memberIndex: number;
  position: "left" | "center" | "right";
  placeholder?: boolean;
  color: string;
}

const cardTransforms = {
  left: { rotate: -8, x: -20, scale: 1, z: 1 },
  center: { rotate: 0, x: 0, scale: 1.05, z: 3 },
  right: { rotate: 8, x: 20, scale: 1, z: 2 },
} as const;

function FannedCard({ memberIndex, position, placeholder, color }: CardProps) {
  const t = cardTransforms[position];
  const member = teamMembers[memberIndex];

  const showPhoto = member && hasPhoto(member);

  return (
    <motion.div
      className="absolute"
      style={{ zIndex: t.z }}
      initial={{ rotate: t.rotate * 2.5, x: t.x * 3, opacity: 0, scale: 0.85 }}
      animate={{
        rotate: t.rotate,
        x: t.x,
        scale: t.scale,
        opacity: 1,
      }}
      exit={{
        rotate: t.rotate * 2.5,
        x: t.x * 3,
        opacity: 0,
        scale: 0.85,
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-[160px] h-[224px] sm:w-[200px] sm:h-[280px] rounded-xl overflow-hidden relative shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        {placeholder || !member ? (
          /* Initials-only placeholder card */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: `${color}18` }}
          >
            <span
              className="text-display-lg font-bold opacity-40"
              style={{ color }}
            >
              {member ? getInitials(member.name) : "?"}
            </span>
          </div>
        ) : showPhoto ? (
          /* Photo card */
          <>
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="200px"
              className="object-cover grayscale"
              priority
            />
            {/* Dark gradient for name overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <p className="text-text-primary font-semibold text-sm sm:text-base leading-tight">
                {member.name.split(" ")[0]}
              </p>
              <p className="text-text-tertiary text-xs sm:text-sm mt-0.5">
                {member.role}
              </p>
            </div>
          </>
        ) : (
          /* Missing photo — initials fallback with dark bg */
          <>
            <div className="w-full h-full bg-bg-tertiary flex items-center justify-center">
              <span
                className="font-display text-4xl sm:text-5xl font-bold"
                style={{ color }}
              >
                {getInitials(member.name)}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
              <p className="text-text-primary font-semibold text-sm sm:text-base leading-tight">
                {member.name.split(" ")[0]}
              </p>
              <p className="text-text-tertiary text-xs sm:text-sm mt-0.5">
                {member.role}
              </p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

/* ─── Chevron icons ─── */

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 10L8 6L12 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Main component ─── */

export function TeamCarousel() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categoryCount = teamCategories.length;

  /* Cycling helpers */
  const goNext = useCallback(() => {
    setActiveCategory((prev) => (prev + 1) % categoryCount);
  }, [categoryCount]);

  const goPrev = useCallback(() => {
    setActiveCategory((prev) => (prev - 1 + categoryCount) % categoryCount);
  }, [categoryCount]);

  /* User interaction → pause + delayed resume */
  const handleInteraction = useCallback(() => {
    setIsPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
  }, []);

  const selectCategory = useCallback(
    (index: number) => {
      setActiveCategory(index);
      handleInteraction();
    },
    [handleInteraction]
  );

  /* Auto-rotate */
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, AUTO_ROTATE_MS);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  /* Cleanup resume timer */
  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  /* Active category data */
  const category = teamCategories[activeCategory];
  const memberIndexes = category.memberIndexes;

  /* Build 3-slot array: fill with available members, pad with placeholders */
  const slots: { memberIndex: number; placeholder: boolean }[] = [];
  for (let i = 0; i < 3; i++) {
    if (i < memberIndexes.length) {
      slots.push({ memberIndex: memberIndexes[i], placeholder: false });
    } else {
      /* Placeholder: reuse category color for initials card */
      slots.push({ memberIndex: -1, placeholder: true });
    }
  }

  const positions: ("left" | "center" | "right")[] =
    slots.length === 1
      ? ["center"]
      : slots.length === 2
        ? ["left", "right"]
        : ["left", "center", "right"];

  return (
    <section
      className="relative py-20 sm:py-28 bg-bg-secondary overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(
          () => setIsPaused(false),
          RESUME_DELAY_MS
        );
      }}
      ref={containerRef}
    >
      <div className="noise-overlay absolute inset-0 pointer-events-none" />

      {/* Atmospheric gradient — colored by active category */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${category.color}0A, transparent 70%)`,
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-eyebrow mb-4 tracking-[0.2em]">THE TEAM</p>
            <h2 className="text-display-lg text-text-primary mb-4">
              Backed by a Full-Stack
              <br />
              Execution Team
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Every engagement is powered by a dedicated team of specialists —
              not generalists, not freelancers.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── Desktop layout (lg+): 3-column ─── */}
        <div className="hidden lg:grid lg:grid-cols-[80px_1fr_1fr] lg:items-center lg:gap-8 xl:gap-12">
          {/* Left: Vertical dot navigation */}
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={() => {
                goPrev();
                handleInteraction();
              }}
              className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="Previous category"
            >
              <ChevronUp />
            </button>

            <div className="flex flex-col items-center gap-3">
              {teamCategories.map((cat, i) => {
                const isActive = i === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => selectCategory(i)}
                    className="relative w-3.5 h-3.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    style={{
                      backgroundColor: isActive
                        ? cat.color
                        : `${cat.color}66`,
                      boxShadow: isActive
                        ? `0 0 0 3px ${cat.color}66`
                        : "none",
                    }}
                    aria-label={`Show ${cat.label} team`}
                    aria-current={isActive ? "true" : undefined}
                  />
                );
              })}
            </div>

            <button
              onClick={() => {
                goNext();
                handleInteraction();
              }}
              className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="Next category"
            >
              <ChevronDown />
            </button>
          </div>

          {/* Center: Fanned photo cards */}
          <div className="flex items-center justify-center">
            <div className="relative h-[320px] w-[520px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {slots.map((slot, i) => (
                    <FannedCard
                      key={`${category.id}-${i}`}
                      memberIndex={slot.memberIndex}
                      position={positions[i] ?? "center"}
                      placeholder={slot.placeholder}
                      color={category.color}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Category info */}
          <div className="flex flex-col justify-center min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="font-display text-sm font-bold uppercase tracking-[0.15em] mb-3"
                  style={{ color: category.color }}
                >
                  {category.label}
                </p>
                <p className="text-body-md text-text-secondary max-w-sm">
                  {category.description}
                </p>
                {/* Member names list */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {memberIndexes.map((idx) => {
                    const member = teamMembers[idx];
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${category.color}12`,
                          color: category.color,
                          borderWidth: 1,
                          borderColor: `${category.color}25`,
                        }}
                      >
                        {member.name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ─── Tablet layout (md, < lg) ─── */}
        <div className="hidden md:block lg:hidden">
          {/* Cards */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative h-[300px] w-[480px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={category.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {slots.map((slot, i) => (
                    <FannedCard
                      key={`${category.id}-${i}`}
                      memberIndex={slot.memberIndex}
                      position={positions[i] ?? "center"}
                      placeholder={slot.placeholder}
                      color={category.color}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Horizontal dot row */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={() => {
                goPrev();
                handleInteraction();
              }}
              className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors rotate-[-90deg]"
              aria-label="Previous category"
            >
              <ChevronUp />
            </button>

            {teamCategories.map((cat, i) => {
              const isActive = i === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(i)}
                  className="relative w-3.5 h-3.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? cat.color : `${cat.color}66`,
                    boxShadow: isActive
                      ? `0 0 0 3px ${cat.color}66`
                      : "none",
                  }}
                  aria-label={`Show ${cat.label} team`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}

            <button
              onClick={() => {
                goNext();
                handleInteraction();
              }}
              className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors rotate-[-90deg]"
              aria-label="Next category"
            >
              <ChevronDown />
            </button>
          </div>

          {/* Category info */}
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="font-display text-sm font-bold uppercase tracking-[0.15em] mb-2"
                  style={{ color: category.color }}
                >
                  {category.label}
                </p>
                <p className="text-body-md text-text-secondary max-w-md mx-auto">
                  {category.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ─── Mobile layout (< md): single card + swipe nav ─── */}
        <div className="block md:hidden">
          {/* Single card (center only, no fanning) */}
          <div className="flex items-center justify-center mb-6">
            <div className="relative h-[260px] w-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${category.id}-mobile`}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {(() => {
                    const idx = memberIndexes[0];
                    const member = teamMembers[idx];
                    const showPhoto = member && hasPhoto(member);
                    return (
                      <div className="w-[180px] h-[252px] rounded-xl overflow-hidden relative shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
                        {showPhoto ? (
                          <>
                            <Image
                              src={member.photo}
                              alt={member.name}
                              fill
                              sizes="180px"
                              className="object-cover grayscale"
                              priority
                            />
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-3">
                              <p className="text-text-primary font-semibold text-sm leading-tight">
                                {member.name.split(" ")[0]}
                              </p>
                              <p className="text-text-tertiary text-xs mt-0.5">
                                {member.role}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-full h-full bg-bg-tertiary flex items-center justify-center">
                              <span
                                className="font-display text-4xl font-bold"
                                style={{ color: category.color }}
                              >
                                {member ? getInitials(member.name) : "?"}
                              </span>
                            </div>
                            {member && (
                              <>
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-3">
                                  <p className="text-text-primary font-semibold text-sm leading-tight">
                                    {member.name.split(" ")[0]}
                                  </p>
                                  <p className="text-text-tertiary text-xs mt-0.5">
                                    {member.role}
                                  </p>
                                </div>
                              </>
                            )}
                          </>
                        )}
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots + chevrons (horizontal) */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <button
              onClick={() => {
                goPrev();
                handleInteraction();
              }}
              className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors rotate-[-90deg]"
              aria-label="Previous category"
            >
              <ChevronUp />
            </button>

            {teamCategories.map((cat, i) => {
              const isActive = i === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => selectCategory(i)}
                  className="relative w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? cat.color : `${cat.color}66`,
                    boxShadow: isActive
                      ? `0 0 0 3px ${cat.color}66`
                      : "none",
                  }}
                  aria-label={`Show ${cat.label} team`}
                  aria-current={isActive ? "true" : undefined}
                />
              );
            })}

            <button
              onClick={() => {
                goNext();
                handleInteraction();
              }}
              className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors rotate-[-90deg]"
              aria-label="Next category"
            >
              <ChevronDown />
            </button>
          </div>

          {/* Category info */}
          <div className="text-center px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="font-display text-xs font-bold uppercase tracking-[0.15em] mb-2"
                  style={{ color: category.color }}
                >
                  {category.label}
                </p>
                <p className="text-body-sm text-text-secondary">
                  {category.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-14 lg:mt-16 text-center">
            <Button variant="ghost" href="#team">
              Meet the Full Team Behind the System
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
