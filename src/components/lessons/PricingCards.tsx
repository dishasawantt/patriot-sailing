import { Check } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { Button } from "../shared/Button";
import { courses } from "@/data/lessons";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function PricingCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {courses.map((c, i) => (
        <Reveal key={c.id} delay={(i % 2) * 0.06}>
          <div
            className={cn(
              "relative flex h-full flex-col rounded-2xl bg-panel p-7 sm:p-8",
              c.featured
                ? "border-2 border-accent shadow-[var(--shadow-lift)]"
                : "border border-line"
            )}
          >
            {c.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-on-accent">
                Most popular
              </span>
            )}

            <p className={cn("eyebrow", c.featured ? "text-accent" : "text-fg-muted")}>{c.tag}</p>
            <h3 className="mt-3 font-display text-2xl font-medium sm:text-[1.7rem]">{c.name}</h3>

            <div className="mt-5 flex items-baseline gap-2">
              <span
                className={cn(
                  "font-display text-5xl font-medium tnum",
                  c.featured ? "text-accent" : "text-fg"
                )}
              >
                ${c.price}
              </span>
              {c.priceNote && <span className="text-fg-muted">{c.priceNote}</span>}
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.1em] text-fg-muted">{c.duration}</p>

            <ul className="mt-7 space-y-3.5 border-t border-line pt-7">
              {c.points.map((p) => (
                <li key={p} className="flex gap-3 text-fg/80">
                  <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2.5} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <Button
                href={site.phoneHref}
                variant={c.featured ? "primary" : "line"}
                className="w-full justify-center"
              >
                Call to book
              </Button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
