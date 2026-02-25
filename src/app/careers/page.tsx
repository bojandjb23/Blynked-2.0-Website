import type { Metadata } from "next";
import { CareersHero } from "@/components/sections/careers/hero";
import { Culture } from "@/components/sections/careers/culture";
import { OpenRoles } from "@/components/sections/careers/open-roles";
import { CareersCTA } from "@/components/sections/careers/careers-cta";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Blynked and help build the #1 growth partner in the Netherlands. See open roles and learn about our culture.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Culture />
      <OpenRoles />
      <CareersCTA />
    </>
  );
}
