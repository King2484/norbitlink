import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm text-neutral-100 ring-offset-background placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-colors",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
