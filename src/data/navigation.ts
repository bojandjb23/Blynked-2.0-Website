import type { NavLink, FooterColumn } from "@/types/navigation";

export const mainNav: NavLink[] = [
  { label: "How We Work", href: "/how-we-work" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "For Startups", href: "/for-startups" },
      { label: "For Scale-ups", href: "/for-scale-ups" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Results",
    links: [
      { label: "Envative", href: "/results/envative" },
      { label: "Mayven Studios", href: "/results/mayven-studios" },
      { label: "Amsterdam Standard", href: "/results/amsterdam-standard" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources" },
      { label: "Guides", href: "/resources" },
      { label: "Academy", href: "/resources#academy" },
    ],
  },
];
