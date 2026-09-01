import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Check } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/shared/Button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Military & First-Responder Discounts",
  description:
    "Patriot Sailing offers 25% off sailing lessons and private cruises for police, firefighters, and military personnel, and 15% off for immediate family.",
  alternates: { canonical: "/discounts" },
};

const eligible = [
  "Active-duty & veteran military",
  "Police officers",
  "Firefighters",
];

export default function DiscountsPage() {
  return (
    <>
      <PageHero
        eyebrow="Those who serve"
        title="Thank you for your service."
        intro="Patriot Sailing was founded by a retired officer — honoring those who serve is built into the name."
        glow
      />

      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="01" tone="accent">
                The discount
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-7 flex flex-wrap items-end gap-x-10 gap-y-6">
                <div>
                  <div className="font-display text-6xl text-accent tnum">25%</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.14em] text-fg-muted">
                    off lessons &amp; cruises
                  </div>
                </div>
                <div>
                  <div className="font-display text-6xl text-fg tnum">15%</div>
                  <div className="mt-2 text-sm uppercase tracking-[0.14em] text-fg-muted">
                    for immediate family
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-3.5 border-t border-line pt-8">
                {eligible.map((e) => (
                  <li key={e} className="flex items-center gap-3 text-fg/85">
                    <ShieldCheck className="size-5 shrink-0 text-accent" strokeWidth={2} />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex items-start gap-3 text-fg-muted">
                <Check className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={2} />
                <p className="max-w-sm">
                  Just let us know when you book — we&rsquo;ll take care of the rest. Please have your
                  service ID handy.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={site.phoneHref} variant="primary" size="lg" arrow>
                  Call to book · {site.phone}
                </Button>
                <Button href="/cruises" variant="line" size="lg">
                  See the cruise
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-[1.5rem] border border-line shadow-[var(--shadow-lift)]">
                <Image
                  src="/images/flag.jpg"
                  alt="The American flag flying off the stern against a Lake Erie sunset"
                  width={1800}
                  height={1350}
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
