"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  companyName: z.string().min(1, "Company name is required"),
  companyWebsite: z
    .string()
    .url("Please enter a valid URL (include https://)"),
  growthChallenge: z.string().min(1, "Please select your primary challenge"),
});

type FormData = z.infer<typeof formSchema>;

const challengeOptions = [
  { value: "pipeline", label: "Pipeline / Lead gen" },
  { value: "sales-process", label: "Sales process" },
  { value: "scaling-beyond-founder", label: "Scaling beyond founder" },
  { value: "positioning", label: "Positioning" },
  { value: "other", label: "Other" },
];

export function QualifierForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    // Validate with Zod
    const result = formSchema.safeParse(data);
    if (!result.success) return;

    // For now, log the data. Will be replaced with server action.
    console.log("Form submitted:", result.data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass-elevated p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-success"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="text-heading-sm text-text-primary mb-3">
          You&rsquo;re all set!
        </h3>
        <p className="text-body-md text-text-secondary max-w-md mx-auto">
          Thanks for reaching out. We&rsquo;ll review your info and get back to
          you within 24 hours to schedule your strategy call.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-elevated p-8 md:p-10">
      <h3 className="text-heading-sm text-text-primary mb-2">
        Tell us about your company
      </h3>
      <p className="text-body-sm text-text-tertiary mb-8">
        So we can make the most of our 30 minutes together.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <Input
          label="Full name"
          placeholder="Jane Smith"
          required
          {...register("fullName", { required: "Please enter your full name", minLength: { value: 2, message: "Name must be at least 2 characters" } })}
          error={errors.fullName?.message}
        />

        <Input
          label="Company name"
          placeholder="Acme Corp"
          required
          {...register("companyName", { required: "Company name is required" })}
          error={errors.companyName?.message}
        />

        <Input
          label="Company website"
          placeholder="https://yourcompany.com"
          type="url"
          required
          {...register("companyWebsite", {
            required: "Company website is required",
            pattern: {
              value: /^https?:\/\/.+\..+/,
              message: "Please enter a valid URL (include https://)",
            },
          })}
          error={errors.companyWebsite?.message}
        />

        <Select
          label="Primary growth challenge"
          placeholder="Select your biggest challenge"
          options={challengeOptions}
          required
          {...register("growthChallenge", {
            required: "Please select your primary challenge",
          })}
          error={errors.growthChallenge?.message}
        />

        <Button type="submit" className="w-full mt-2">
          {isSubmitting ? "Submitting..." : "Submit & Book Your Call"}
        </Button>
      </form>
    </div>
  );
}
