import Image from "next/image";
import { captain } from "@/data/captain";
import { Reveal } from "../shared/Reveal";
import { SectionLabel } from "../shared/SectionLabel";
import { Button } from "../shared/Button";

export function CaptainFeature() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* portrait / art */}
        <div className="lg:col-span-5">
          <Reveal>
            <figure className="relative mx-auto max-w-sm lg:mx-0">
              <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[var(--shadow-lift)]">
                <Image
                  src={captain.portrait}
                  alt="Aboard the Colgate 26 on Lake Erie, sailing off Buffalo"
                  width={1800}
                  height={1350}
                  sizes="(max-width: 1024px) 80vw, 24rem"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-fg/45">
                <span className="h-px w-6 bg-accent" />
                Out on Lake Erie
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* story */}
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="04" tone="accent">
              The captain
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="t-title mt-8 font-medium">{captain.name}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-accent-bright">
              {captain.license} · Buffalo, NY
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="measure-wide mt-7 text-lg leading-relaxed text-fg/75">{captain.short}</p>
          </Reveal>

          <div className="mt-10 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            {captain.values.map((v, i) => (
              <Reveal key={v.title} delay={0.12 + i * 0.07}>
                <div>
                  <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.1em] text-fg">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/60">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <figure className="mt-12 border-l-2 border-accent pl-6">
              <blockquote className="font-display text-xl italic leading-snug text-fg/85 sm:text-2xl">
                &ldquo;The pessimist complains about the wind; the optimist expects it to change; the
                realist adjusts the sails.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-fg/45">
                William Arthur Ward
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10">
              <Button href="/about" variant="lineLight" arrow>
                Jim&rsquo;s story &amp; the boat
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
