import Image from "next/image";
import { cruise, cruiseMoments } from "@/data/cruises";
import { Reveal } from "../shared/Reveal";
import { SectionLabel } from "../shared/SectionLabel";
import { Button } from "../shared/Button";

export function CruiseFeature() {
  return (
    <section className="relative overflow-hidden bg-panel py-24 sm:py-32">
      {/* warm horizon glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(90%_120%_at_70%_130%,rgba(240,134,76,0.22),transparent)]" />

      <div className="shell relative grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* content */}
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel index="02" tone="accent">
              Private sailing
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="t-title mt-8 font-medium">
              Sunset, and the boat
              <br />
              is <span className="italic text-accent-bright">yours.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="measure mt-7 text-lg leading-relaxed text-fg/75">{cruise.lead}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-5xl text-fg tnum">${cruise.price}</span>
              <span className="text-sm uppercase tracking-[0.16em] text-fg/50">
                {cruise.unit} · {cruise.duration}
              </span>
            </div>
          </Reveal>

          <ol className="mt-10 space-y-6 border-t border-line pt-8">
            {cruiseMoments.map((m, i) => (
              <Reveal as="li" key={m.k} delay={0.12 + i * 0.07}>
                <div className="flex gap-5">
                  <span className="font-display text-lg text-accent tnum">{m.k}</span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-fg">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm text-fg/65">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button href="/cruises" variant="primary" size="lg" arrow>
                Plan a private sail
              </Button>
            </div>
          </Reveal>
        </div>

        {/* image */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <figure className="relative mx-auto max-w-[30rem] lg:ml-auto">
              <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[var(--shadow-lift)]">
                <Image
                  src="/images/sunset-bow.jpg"
                  alt="Sailing toward the sunset on Lake Erie off Buffalo"
                  width={1800}
                  height={1350}
                  sizes="(max-width: 1024px) 90vw, 30rem"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-fg/45">
                <span className="h-px w-6 bg-accent" />
                Dusk on the Outer Harbor
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
