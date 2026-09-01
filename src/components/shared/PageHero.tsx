import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { WindRose } from "./WindRose";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  glow?: boolean;
  children?: ReactNode;
};

/** Compact hero band for interior pages. Clean gradient, one big title. */
export function PageHero({ eyebrow, title, intro, glow = false, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 text-sail sm:pt-40 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-abyss to-ink" />
      {glow && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(80%_130%_at_50%_140%,rgba(240,134,76,0.16),transparent)]" />
      )}
      <WindRose
        className={cn(
          "pointer-events-none absolute -right-12 -top-6 h-72 w-72 opacity-[0.06]"
        )}
      />
      <div className="shell relative">
        <Reveal>
          <div className="flex items-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow text-accent-bright">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="t-display mt-7 max-w-4xl font-medium">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="measure-wide mt-7 text-lg leading-relaxed text-sail/75">{intro}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.16}>
            <div className="mt-9">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
