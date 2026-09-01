import { cn } from "@/lib/cn";

/** Faint depth-chart contour lines — ambient water texture. Decorative. */
export function WaterLines({ className }: { className?: string }) {
  const wave =
    "M0 20 C 90 4, 180 4, 270 20 S 450 36, 540 20 S 720 4, 810 20 S 990 36, 1080 20 S 1260 4, 1350 20 S 1440 28, 1440 20";
  return (
    <svg
      viewBox="0 0 1440 260"
      preserveAspectRatio="none"
      className={cn("text-tide", className)}
      fill="none"
      aria-hidden
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <g key={i} transform={`translate(0 ${i * 28})`}>
          <path
            d={wave}
            stroke="currentColor"
            strokeWidth="1"
            opacity={0.05 + i * 0.02}
          />
        </g>
      ))}
    </svg>
  );
}
