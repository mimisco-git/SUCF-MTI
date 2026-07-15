import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-full border border-black/12 bg-paper-200 px-5 text-sm text-ink-800 placeholder:text-slate-400 outline-none transition-colors focus-visible:border-green-700",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
