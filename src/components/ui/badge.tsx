import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "muted";
  className?: string;
}

const badgeVariants = {
  default: "bg-bg-tertiary text-text-secondary border-border-glass",
  accent: "bg-accent-glow text-accent border-border-accent",
  success: "bg-success/10 text-success border-success/20",
  muted: "bg-bg-secondary text-text-tertiary border-border-glass",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border",
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
