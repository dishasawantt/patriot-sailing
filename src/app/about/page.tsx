import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/shared/Button";
import { captain, boat } from "@/data/captain";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "The Captain & the Boat — Jim Lewer, Patriot Sailing",
  description:
    "Meet Jim Lewer — a USCG 50-ton master and retired first responder who founded Patriot Sailing in 2018 — and the 2007 Colgate 26 he teaches on, out of Buffalo, NY.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Captain & the Boat"
        title={
          <>
            One captain, one boat,
            <br />a <span className="italic text-accent-bright">lifetime</span> of wind.
          </>
        }
        intro="Patriot Sailing isn't a franchise or a fleet. It's Jim Lewer, a well-kept keelboat, and a genuine love of teaching people to sail."
      />

      {/* Captain story */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[var(--shadow-lift)]">
                  <Image
                    src={captain.portrait}
                    alt="Aboard the Colgate 26 under sail on Lake Erie"
                    width={1800}
                    height={1350}
                    sizes="(max-width: 1024px) 90vw, 30rem"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-xs uppercase tracking-[0.18em] text-fg/45">
                  {captain.name} · {captain.license}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="01" tone="accent">
                The captain
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="t-title mt-7 font-medium">{captain.name}</h2>
            </Reveal>
            <div className="mt-7 space-y-5">
              {captain.story.map((p, i) => (
                <Reveal key={i} delay={0.08 + i * 0.05}>
                  <p className="measure-wide text-lg leading-relaxed text-fg/75">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
              {captain.values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.07}>
                  <div>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-fg">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg/60">{v.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <figure className="mt-12 border-l-2 border-accent pl-6">
                <blockquote className="font-display text-xl italic leading-snug text-fg/85 sm:text-2xl">
                  &ldquo;The pessimist complains about the wind; the optimist expects it to change;
                  the realist adjusts the sails.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-fg/45">
                  William Arthur Ward
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The boat */}
      <section className="relative overflow-hidden bg-panel py-20 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[var(--shadow-lift)]">
                <Image
                  src={boat.image}
                  alt="The Patriot Sailing Colgate 26 under sail on Lake Erie"
                  width={1800}
                  height={1349}
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="02" tone="accent">
                The boat
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="t-head mt-6 font-medium">{boat.name}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-accent-bright">{boat.type}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-fg/75">{boat.lead}</p>
            </Reveal>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {boat.specs.map((s, i) => (
                <Reveal as="div" key={s.k} delay={0.1 + i * 0.04}>
                  <div className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="text-sm uppercase tracking-[0.12em] text-fg/45">{s.k}</dt>
                    <dd className="text-right text-fg/85">{s.v}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <Reveal delay={0.16}>
              <p className="mt-6 text-sm leading-relaxed text-fg/55">{boat.note}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-accent">Our mission</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="t-head mt-6 max-w-3xl font-display font-medium leading-tight">
              To introduce you to sailing in a way that&rsquo;s fun, low-stress, and safe — and to
              share the version of Buffalo you can only see from the water.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/lessons" variant="primary" size="lg" arrow>
                Learn to sail
              </Button>
              <Button href="/cruises" variant="lineLight" size="lg">
                Book a private sail
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
