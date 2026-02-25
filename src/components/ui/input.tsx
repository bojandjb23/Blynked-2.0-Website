import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={inputId} className="text-caption text-text-secondary">
          {label}
          {props.required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "bg-[rgba(26,26,26,0.5)] border border-[rgba(255,255,255,0.1)] rounded-[10px] px-4 py-3.5 text-white text-base",
            "placeholder:text-text-tertiary",
            "focus:border-accent focus:shadow-[0_0_0_3px_rgba(244,121,32,0.15)] focus:outline-none",
            "transition-all duration-200",
            error && "border-error focus:border-error focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]",
            className
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
