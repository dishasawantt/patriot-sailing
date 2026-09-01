import type { Metadata } from "next";
import Image from "next/image";
import { Wine, Anchor, Compass, CalendarClock, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/shared/Button";
import { cruise, cruiseMoments } from "@/data/cruises";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Private Sunset Sailing Cruises in Buffalo, NY",
  description:
    "A private two-hour sail for two on Lake Erie — sunset over Buffalo, the whole boat to yourselves, bring your own bottle. $145. Book with Patriot Sailing.",
  alternates: { canonical: "/cruises" },
};

const goodToKnow = [
  {
    icon: Wine,
    title: "Bring a bottle",
    body: "A white wine or a few beers and a snack are welcome. (No red — it stains the fiberglass.)",
  },
  {
    icon: Anchor,
    title: "Truly private",
    body: "We never seat strangers on your sail. The only extra guests aboard are the ones you invite.",
  },
  {
    icon: Compass,
    title: "Steer, or don't",
    body: "Take the tiller and try your hand, or pour a drink and let the captain do the work.",
  },
  {
    icon: CalendarClock,
    title: "Your schedule",
    body: "Sunset is the favorite, but morning and afternoon sails are yours for the asking. Call early to reserve.",
  },
];

export default function CruisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Sailing"
        title={
          <>
            The boat is yours
            <br />
            for the <span className="italic text-accent-bright">evening.</span>
          </>
        }
        intro={cruise.lead}
        glow
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href={site.phoneHref} variant="primary" size="lg" arrow>
            Call to book · {site.phone}
          </Button>
          <Button href="/gift" variant="lineLight" size="lg">
            Give it as a gift
          </Button>
        </div>
      </PageHero>

      {/* The experience */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="01" tone="accent">
                {cruise.name}
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-7 flex items-baseline gap-3">
                <span className="font-display text-6xl text-fg tnum">${cruise.price}</span>
                <span className="text-sm uppercase tracking-[0.16em] text-fg/50">
                  {cruise.unit} · {cruise.duration}
                </span>
              </div>
            </Reveal>
            <ul className="mt-9 space-y-4 border-t border-line pt-8">
              {cruise.includes.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 0.05}>
                  <div className="flex gap-3.5 text-fg/80">
                    <Check className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={2} />
                    <span>{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
                {cruise.addOns.map((a) => (
                  <div key={a.label} className="text-sm">
                    <span className="font-semibold text-fg">{a.label} — </span>
                    <span className="text-fg/60">{a.detail}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <figure className="relative mx-auto max-w-md lg:ml-auto">
                <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[var(--shadow-lift)]">
                  <Image
                    src="/images/sunset-helm.jpg"
                    alt="Golden light across Lake Erie from the helm at sunset"
                    width={1800}
                    height={1350}
                    sizes="(max-width: 1024px) 90vw, 28rem"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-fg/45">
                  <span className="h-px w-6 bg-accent" /> A typical evening on the Outer Harbor
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it goes */}
      <section className="relative overflow-hidden bg-panel py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(80%_120%_at_60%_130%,rgba(240,134,76,0.16),transparent)]" />
        <div className="shell relative">
          <Reveal>
            <SectionLabel index="02" tone="accent">
              How it goes
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="t-title mt-7 max-w-2xl font-medium">Two hours, start to finish.</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {cruiseMoments.map((m, i) => (
              <Reveal key={m.k} delay={i * 0.08}>
                <div className="border-t border-line pt-6">
                  <span className="font-display text-3xl text-accent tnum">{m.k}</span>
                  <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-fg">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 text-fg/65">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell">
          <Reveal>
            <SectionLabel index="03" tone="auto">
              Good to know
            </SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {goodToKnow.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={i * 0.06}>
                  <div className="flex gap-5">
                    <Icon className="size-6 shrink-0 text-accent" strokeWidth={1.5} />
                    <div>
                      <h3 className="font-sans text-base font-semibold text-fg">{g.title}</h3>
                      <p className="mt-2 max-w-sm text-fg/65">{g.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.1}>
            <p className="measure-wide mt-14 border-t border-line pt-6 text-sm leading-relaxed text-fg/50">
              {cruise.finePrint}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
