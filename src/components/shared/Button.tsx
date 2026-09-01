import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { SmartLink } from "./SmartLink";

type Variant = "primary" | "line" | "lineLight" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wide transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3";

const sizes: Record<Size, string> = {
  md: "text-sm px-5 py-3 rounded-full",
  lg: "text-[0.95rem] px-7 py-4 rounded-full",
};

const variants: Record<Variant, string> = {
  primary: "bg-accent text-abyss hover:bg-accent-bright",
  line: "border border-ink/25 text-ink hover:border-ink/60",
  lineLight: "border border-sail/25 text-sail hover:border-sail/70 hover:bg-sail/5",
  ghost: "text-sail hover:text-accent-bright",
};

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  size = "md",
  arrow = false,
  className,
}: Props) {
  return (
    <SmartLink href={href} className={cn(base, sizes[size], variants[variant], className)}>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </SmartLink>
  );
}
