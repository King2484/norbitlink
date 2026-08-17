import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-cyan-800/50 bg-cyan-950/60 text-cyan-400 font-mono",
        secondary:
          "border-neutral-800 bg-neutral-900 text-neutral-300",
        destructive:
          "border-red-800/50 bg-red-950/60 text-red-400",
        outline: "border-neutral-700 text-neutral-300",
        purple:
          "border-purple-800/50 bg-purple-950/60 text-purple-400 font-mono",
        amber:
          "border-amber-800/50 bg-amber-950/60 text-amber-400 font-mono",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
