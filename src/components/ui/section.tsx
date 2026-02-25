import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "primary" | "secondary" | "tertiary";
}

export function Section({ children, className, id, background = "primary" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24",
        background === "primary" && "bg-bg-primary",
        background === "secondary" && "bg-bg-secondary",
        background === "tertiary" && "bg-bg-tertiary",
        className
      )}
    >
      {children}
    </section>
  );
}
