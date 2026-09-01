import Link from "next/link";
import { cn } from "@/lib/cn";

/** Wordmark. Inherits currentColor so it adapts to header/theme context. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Patriot Sailing — home"
    >
      <svg viewBox="0 0 28 32" className="h-7 w-auto" fill="none" aria-hidden>
        <path d="M13 2 L13 30" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
        <path d="M13 4 L24 15 L13 17 Z" className="fill-accent" />
        <path d="M12 18 L3 25 L12 26 Z" fill="currentColor" opacity="0.85" />
      </svg>
      <span className="font-sans text-[0.82rem] font-semibold uppercase leading-none tracking-[0.22em]">
        Patriot<span className="text-accent"> Sailing</span>
      </span>
    </Link>
  );
}
