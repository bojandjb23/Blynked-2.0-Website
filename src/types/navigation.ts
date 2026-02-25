export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface JobOpening {
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  isActive: boolean;
}
