import { site } from "@/data/site";
import { Reveal } from "../shared/Reveal";
import { SectionLabel } from "../shared/SectionLabel";
import { WindRose } from "../shared/WindRose";

export function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 sm:py-32">
      <WindRose className="pointer-events-none absolute -left-16 top-1/2 hidden h-80 w-80 -translate-y-1/2 opacity-[0.05] lg:block" />
      <div className="shell relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="01" tone="auto">
              What it is
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="t-title mt-8 font-medium">
              Leave the dock. Catch the wind.
              <br />
              <span className="text-accent-bright italic">See Buffalo from the water.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pt-16">
          <Reveal delay={0.1}>
            <p className="measure text-lg leading-relaxed text-fg/75">
              One licensed captain, one well-kept keelboat, Lake Erie at the door. No crowds, no
              franchise — just wind, water, and the city on the horizon.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10">
            {site.proof.map((p, i) => (
              <Reveal key={p.label} delay={0.1 + i * 0.06}>
                <div>
                  <div className="font-display text-4xl text-accent tnum">{p.value}</div>
                  <div className="mt-2 text-sm leading-snug text-fg/60">{p.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
