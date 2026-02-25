"use client";

import { Metric } from "@/components/ui/metric";

interface CounterAnimationProps {
  value: string;
  label: string;
  size?: "lg" | "sm";
  className?: string;
}

export function CounterAnimation({ value, label, size = "lg", className }: CounterAnimationProps) {
  return <Metric value={value} label={label} size={size} className={className} />;
}
