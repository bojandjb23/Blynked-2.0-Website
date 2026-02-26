"use client";

import { Button } from "@/components/ui/button";

export function AcademyWaitlistForm() {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6">
      <h3 className="text-heading-sm text-text-primary mb-2">
        Join the Waitlist
      </h3>
      <p className="text-body-sm text-text-tertiary mb-6">
        Be first to access the full Academy when it launches.
      </p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="academy-name" className="sr-only">
            Full name
          </label>
          <input
            id="academy-name"
            type="text"
            placeholder="Full name"
            className="w-full bg-[rgba(26,26,26,0.5)] border border-[rgba(255,255,255,0.1)] rounded-[10px] px-4 py-3.5 text-white text-base placeholder:text-text-tertiary focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="academy-email" className="sr-only">
            Work email
          </label>
          <input
            id="academy-email"
            type="email"
            placeholder="Work email"
            className="w-full bg-[rgba(26,26,26,0.5)] border border-[rgba(255,255,255,0.1)] rounded-[10px] px-4 py-3.5 text-white text-base placeholder:text-text-tertiary focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
          />
        </div>
        <div>
          <label htmlFor="academy-company" className="sr-only">
            Company
          </label>
          <input
            id="academy-company"
            type="text"
            placeholder="Company"
            className="w-full bg-[rgba(26,26,26,0.5)] border border-[rgba(255,255,255,0.1)] rounded-[10px] px-4 py-3.5 text-white text-base placeholder:text-text-tertiary focus:border-accent focus:ring-2 focus:ring-accent/15 focus:outline-none transition-all"
          />
        </div>
        <Button className="w-full">Join the Waitlist</Button>
      </form>

      <p className="text-[12px] text-text-tertiary mt-4 text-center">
        No spam. We&rsquo;ll only email when the Academy launches.
      </p>
    </div>
  );
}
