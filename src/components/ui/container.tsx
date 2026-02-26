import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function Container({ children, className, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 sm:px-12 lg:px-16",
        wide ? "max-w-[1500px]" : "max-w-[1340px]",
        className
      )}
    >
      {children}
    </div>
  );
}
