import { cn } from "@/lib/cn";

type Tone = "light" | "auto" | "accent";

const tones: Record<Tone, string> = {
  light: "text-sail/55", // on always-dark cinematic sections
  auto: "text-fg-muted", // theme-aware content sections
  accent: "text-accent",
};

type Props = {
  children: string;
  index?: string;
  tone?: Tone;
  className?: string;
};

/** Eyebrow label with an optional chart-style index and a short rule. */
export function SectionLabel({ children, index, tone = "auto", className }: Props) {
  return (
    <div className={cn("flex items-center gap-3", tones[tone], className)}>
      {index && <span className="eyebrow tnum">{index}</span>}
      <span className="h-px w-8 bg-current opacity-40" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}
