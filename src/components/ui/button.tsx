import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "nav";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-[#0E0E0E] font-semibold px-8 py-4 btn-chamfered hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(255,113,32,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 min-h-[48px]",
  secondary:
    "bg-transparent text-accent font-semibold px-8 py-4 border border-accent btn-chamfered hover:bg-accent hover:text-[#0E0E0E] transition-all duration-300 min-h-[48px]",
  ghost:
    "text-accent font-medium inline-flex items-center gap-2 group transition-all duration-200",
  nav:
    "bg-accent text-[#0E0E0E] font-semibold text-sm px-6 py-2.5 btn-chamfered-sm hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(255,113,32,0.25)] transition-all duration-300",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const classes = cn(variants[variant], "inline-flex items-center justify-center", className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          {variant === "ghost" && <ArrowIcon />}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {variant === "ghost" && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
      {variant === "ghost" && <ArrowIcon />}
    </button>
  );
}

function ArrowIcon() {
  return (
    <span className="relative overflow-hidden w-4 h-4 inline-flex items-center justify-center">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-200 group-hover:translate-x-[20px] group-hover:opacity-0 absolute"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className="transition-transform duration-200 -translate-x-[20px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 absolute"
      >
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
