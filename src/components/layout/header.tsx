"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed top-0 w-full z-[100] transition-all duration-500",
          isScrolled
            ? "bg-[rgba(14,14,14,0.85)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.04)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <nav className="flex items-center justify-between h-[72px]" aria-label="Main navigation">
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/images/logos/blynked-logo.png"
                alt="Blynked"
                width={28}
                height={28}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-text-primary font-semibold text-[15px] tracking-[-0.01em]">
                Blynked
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-medium transition-colors duration-300 nav-link-underline",
                    pathname === link.href
                      ? "text-text-primary"
                      : "text-text-tertiary hover:text-text-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/book-a-call" variant="nav">
                Book a Call
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="2" y1="5" x2="18" y2="5" />
                <line x1="2" y1="10" x2="18" y2="10" />
                <line x1="2" y1="15" x2="18" y2="15" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
