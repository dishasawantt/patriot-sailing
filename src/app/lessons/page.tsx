import type { Metadata } from "next";
import { Users, ShieldCheck, Sailboat } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/shared/Button";
import { PricingCards } from "@/components/lessons/PricingCards";
import { PriceTable } from "@/components/lessons/PriceTable";
import { curriculum, scheduleOptions } from "@/data/lessons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sailing Lessons in Buffalo, NY — Learn to Sail on Lake Erie",
  description:
    "Hands-on sailing lessons on Lake Erie in Buffalo, taught by a USCG-licensed captain in groups of three or fewer. From a 2.5-hour intro ($135) to the full Learn to Sail course.",
  alternates: { canonical: "/lessons" },
};

const approach = [
  {
    icon: Users,
    title: "Groups of three, max",
    body: "Never more than three students on the water — one steers, two trim the sails, nobody just watches.",
  },
  {
    icon: ShieldCheck,
    title: "Calm and safe",
    body: "A relaxed, stress-free way of teaching from a retired first responder who takes safety seriously.",
  },
  {
    icon: Sailboat,
    title: "The right boat",
    body: "You learn on a stable Colgate 26 keelboat — big enough for Lake Erie, forgiving enough for a first-timer.",
  },
];

export default function LessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn to Sail"
        title={
          <>
            Learn on Lake Erie,
            <br />
            the <span className="italic text-accent-bright">calm</span> way.
          </>
        }
        intro="No experience, no nerves required. Start on the dock, finish at the helm — and leave able to take friends and family out on your own."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button href={site.phoneHref} variant="primary" size="lg" arrow>
            Call to book · {site.phone}
          </Button>
          <Button href="/about" variant="lineLight" size="lg">
            Meet the captain
          </Button>
        </div>
      </PageHero>

      {/* Approach */}
      <section className="bg-canvas py-20 sm:py-24">
        <div className="shell grid gap-10 sm:grid-cols-3">
          {approach.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.07}>
                <div className="border-t border-line pt-6">
                  <Icon className="size-6 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 font-sans text-base font-semibold text-fg">{a.title}</h3>
                  <p className="mt-2.5 text-fg/65">{a.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Courses & pricing */}
      <section className="bg-canvas py-20 text-fg sm:py-28">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" tone="auto">
              Courses &amp; pricing
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="t-title mt-7 max-w-2xl font-medium">
              Four ways in, from a first taste to the full course.
            </h2>
          </Reveal>

          <div className="mt-14">
            <PricingCards />
          </div>

          {/* Compare everything */}
          <Reveal>
            <h3 className="t-head mt-24 font-medium">Compare at a glance</h3>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-3 max-w-xl text-fg-muted">
              Every option side by side — the lessons and the private cruise.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <PriceTable />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Curriculum + scheduling */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="02" tone="accent">
                The curriculum
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="t-head mt-6 max-w-md font-medium">
                By the end, you can actually sail a boat.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {curriculum.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line px-3.5 py-2 text-sm text-fg/75"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="03" tone="accent">
                Two ways to schedule
              </SectionLabel>
            </Reveal>
            <div className="mt-8 space-y-8">
              {scheduleOptions.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="border-t border-line pt-5">
                    <h3 className="font-display text-xl text-fg">{s.title}</h3>
                    <p className="mt-2 max-w-md text-fg/65">{s.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
