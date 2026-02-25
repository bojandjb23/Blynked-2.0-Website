"use client";

import Link from "next/link";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden bg-[rgba(10,10,10,0.9)] backdrop-blur-[16px] border-t border-[rgba(255,255,255,0.05)] px-4 py-3">
      <Link
        href="/book-a-call"
        className="block w-full bg-accent text-white font-semibold text-center py-3.5 rounded-[12px] hover:bg-accent-hover transition-colors min-h-[48px]"
      >
        Book a Call
      </Link>
    </div>
  );
}
