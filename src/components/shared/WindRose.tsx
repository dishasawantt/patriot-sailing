import { cn } from "@/lib/cn";

/** A compass rose — the site's recurring maritime mark. Decorative. */
export function WindRose({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("text-accent", className)}
      fill="none"
      aria-hidden
    >
      <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      {/* cardinal star */}
      <path d="M60 6 L66 54 L60 60 L54 54 Z" fill="currentColor" />
      <path d="M60 114 L54 66 L60 60 L66 66 Z" fill="currentColor" opacity="0.55" />
      <path d="M6 60 L54 54 L60 60 L54 66 Z" fill="currentColor" opacity="0.55" />
      <path d="M114 60 L66 66 L60 60 L66 54 Z" fill="currentColor" opacity="0.55" />
      {/* intercardinal */}
      <g opacity="0.4">
        <path d="M22 22 L57 55 L55 57 Z" fill="currentColor" />
        <path d="M98 22 L63 55 L65 57 Z" fill="currentColor" />
        <path d="M98 98 L63 65 L65 63 Z" fill="currentColor" />
        <path d="M22 98 L57 65 L55 63 Z" fill="currentColor" />
      </g>
      <circle cx="60" cy="60" r="3" fill="currentColor" />
    </svg>
  );
}
