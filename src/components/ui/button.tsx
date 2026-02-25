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
    "bg-accent text-white font-semibold px-8 py-4 rounded-[12px] hover:bg-accent-hover hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(244,121,32,0.3)] active:scale-[0.98] transition-all duration-200 min-h-[48px]",
  secondary:
    "bg-transparent text-accent font-semibold px-8 py-4 rounded-[12px] border border-border-accent hover:border-accent hover:bg-accent-glow transition-all duration-200 min-h-[48px]",
  ghost:
    "text-accent font-medium inline-flex items-center gap-2 group hover:gap-3 transition-all duration-200",
  nav:
    "bg-accent text-white font-semibold text-sm px-6 py-2.5 rounded-[8px] hover:bg-accent-hover transition-colors duration-200",
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
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200 group-hover:translate-x-1"
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
