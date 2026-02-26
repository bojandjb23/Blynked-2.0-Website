"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="flex-shrink-0 text-text-tertiary"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="glass-elevated p-6 sm:p-8 md:p-10">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            className={isLast ? "" : "border-b border-border-glass"}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group"
              aria-expanded={isOpen}
            >
              <span className="text-heading-sm text-text-primary group-hover:text-accent transition-colors duration-300">
                {item.question}
              </span>
              <ChevronIcon isOpen={isOpen} />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.25, ease: "easeInOut" },
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-body-md text-text-secondary pb-5 sm:pb-6 pr-8">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
