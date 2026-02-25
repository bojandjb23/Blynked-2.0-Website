"use client";

import Link from "next/link";
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
          "fixed top-0 w-full z-[100] transition-all duration-300",
          isScrolled
            ? "bg-[rgba(10,10,10,0.85)] backdrop-blur-[16px] border-b border-[rgba(255,255,255,0.05)]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 sm:px-12 lg:px-16">
          <nav className="flex items-center justify-between h-[72px]" aria-label="Main navigation">
            <Link href="/" className="text-text-primary font-bold text-xl tracking-tight">
              Blynked
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 hover:text-text-primary",
                    pathname === link.href ? "text-text-primary" : "text-text-tertiary"
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
              className="lg:hidden p-2 text-text-primary"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
