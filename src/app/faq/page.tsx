import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Accordion } from "@/components/shared/Accordion";
import { Button } from "@/components/shared/Button";
import { faqs, faqGroups } from "@/data/faq";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Sailing FAQ — What to Know Before You Sail",
  description:
    "Answers on the boat, the season, what to wear and bring, safety, weather, gift certificates, and how private our Buffalo sailing cruises really are.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        intro="Everything we get asked before a first sail — from what to wear to what happens if the weather turns."
      />

      <section className="bg-canvas py-20 text-fg sm:py-28">
        <div className="shell space-y-16">
          {faqGroups.map((group, gi) => (
            <div key={group} className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <Reveal>
                  <h2 className="font-display text-2xl text-fg lg:sticky lg:top-28">
                    <span className="mr-3 text-accent tnum">0{gi + 1}</span>
                    {group}
                  </h2>
                </Reveal>
              </div>
              <div className="lg:col-span-8">
                <Reveal delay={0.05}>
                  <Accordion items={faqs.filter((f) => f.group === group)} />
                </Reveal>
              </div>
            </div>
          ))}

          <Reveal>
            <div className="flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-lg text-fg/70">
                Still wondering about something? The captain is happy to talk it through.
              </p>
              <Button href={site.phoneHref} variant="line" size="lg" arrow>
                Call {site.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
