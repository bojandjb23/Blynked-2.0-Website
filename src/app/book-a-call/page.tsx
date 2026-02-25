import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { BookACallHero } from "@/components/sections/book-a-call/hero";
import { WhatToExpect } from "@/components/sections/book-a-call/what-to-expect";
import { QualifierForm } from "@/components/sections/book-a-call/qualifier-form";
import { CalendarEmbed } from "@/components/sections/book-a-call/calendar-embed";
import { BookACallSocialProof } from "@/components/sections/book-a-call/social-proof";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a 30-minute strategy call with Blynked. No pitch — just an honest assessment of your pipeline and what's possible.",
  openGraph: {
    title: "Book a Call | Blynked",
    description:
      "Book a 30-minute strategy call with Blynked. No pitch — just an honest assessment of your pipeline and what's possible.",
    url: "https://blynked.io/book-a-call",
  },
};

export default function BookACallPage() {
  return (
    <>
      <BookACallHero />
      <WhatToExpect />
      <Section background="primary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <QualifierForm />
            <CalendarEmbed />
          </div>
        </Container>
      </Section>
      <BookACallSocialProof />
    </>
  );
}
