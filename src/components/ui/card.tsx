import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  variant?: "glass" | "elevated" | "interactive";
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, variant = "glass", className, as: Component = "div" }: CardProps) {
  return (
    <Component
      className={cn(
        variant === "glass" && "glass",
        variant === "elevated" && "glass-elevated",
        variant === "interactive" && "glass-interactive",
        "p-8",
        className
      )}
    >
      {children}
    </Component>
  );
}
