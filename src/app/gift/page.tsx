import type { Metadata } from "next";
import { Phone, Mail, Gift, CalendarHeart, Ship } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { Button } from "@/components/shared/Button";
import { site } from "@/data/site";
import { cruise } from "@/data/cruises";
import { courses } from "@/data/lessons";

export const metadata: Metadata = {
  title: "Gift Certificates — Give a Sail on Lake Erie",
  description:
    "Gift certificates for sailing lessons or a private cruise in Buffalo, NY. Available year-round, no date required — the recipient schedules when it suits them.",
  alternates: { canonical: "/gift" },
};

const how = [
  {
    icon: Gift,
    title: "Lessons or a cruise",
    body: "A certificate can go toward any lesson or a private sail — whatever fits the person you have in mind.",
  },
  {
    icon: CalendarHeart,
    title: "No date needed",
    body: "Buy it whenever. The recipient just calls to book once they're ready — no scheduling required up front.",
  },
  {
    icon: Ship,
    title: "A gift they'll remember",
    body: "Year-round, and a far better birthday or holiday present than another thing to dust. An evening they'll talk about.",
  },
];

const ideas = [
  { name: cruise.name, price: cruise.price, note: "A sunset sail for two" },
  { name: courses[0].name, price: courses[0].price, note: "A first taste of sailing" },
  { name: courses[1].name, price: courses[1].price, note: "The whole Learn to Sail course" },
];

export default function GiftPage() {
  return (
    <>
      <PageHero
        eyebrow="Gift Certificates"
        title={
          <>
            Give a day
            <br />
            on the <span className="italic text-accent-bright">water.</span>
          </>
        }
        intro="A gift certificate for a lesson or a private cruise — available any time of year, with nothing to schedule until they're ready to sail."
        glow
      >
        <div className="flex flex-wrap gap-4">
          <Button href={site.phoneHref} variant="primary" size="lg" arrow>
            Call to arrange · {site.phone}
          </Button>
          <Button href={site.emailHref} variant="lineLight" size="lg">
            Email us
          </Button>
        </div>
      </PageHero>

      {/* How it works */}
      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell">
          <Reveal>
            <SectionLabel index="01" tone="auto">
              How it works
            </SectionLabel>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {how.map((h, i) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.title} delay={i * 0.07}>
                  <div className="border-t border-line pt-6">
                    <Icon className="size-6 text-accent" strokeWidth={1.5} />
                    <h3 className="mt-5 font-display text-xl text-fg">{h.title}</h3>
                    <p className="mt-2.5 text-fg/65">{h.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideas */}
      <section className="bg-canvas py-20 text-fg sm:py-28">
        <div className="shell">
          <Reveal>
            <SectionLabel index="02" tone="auto">
              A few ideas
            </SectionLabel>
          </Reveal>
          <div className="mt-12 border-b border-line">
            {ideas.map((idea, i) => (
              <Reveal key={idea.name} delay={i * 0.06}>
                <div className="flex items-baseline justify-between gap-6 border-t border-line py-6">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl">{idea.name}</h3>
                    <p className="mt-1 text-sm text-fg/55">{idea.note}</p>
                  </div>
                  <div className="font-display text-3xl tnum sm:text-4xl">${idea.price}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-fg/60">
              Certificates aren&rsquo;t sold online — a quick call or email is all it takes, and the
              captain will get one out to you.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
