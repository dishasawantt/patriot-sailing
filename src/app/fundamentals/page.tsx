import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "The Fundamentals of Sailing",
  description:
    "A plain-language primer on the basics of sailing — reading the wind, points of sail, trim, tacking and jibing, knots, docking, and safety. Learn them hands-on with Patriot Sailing.",
  alternates: { canonical: "/fundamentals" },
};

const fundamentals = [
  { t: "Reading the wind", d: "Feel where the wind is coming from and how hard it's blowing — the first thing every sailor learns." },
  { t: "Points of sail", d: "The angles a boat can sail relative to the wind, from close-hauled to running." },
  { t: "Trimming the sails", d: "Adjusting the sails to match the wind and keep the boat moving well." },
  { t: "Tacking & jibing", d: "Turning the bow — or the stern — through the wind to change direction." },
  { t: "Steering by tiller", d: "Holding a course with the tiller. Push left to go right takes a minute to click." },
  { t: "Sailing knots", d: "A handful of knots — the cleat hitch, the bowline — that do most of the work aboard." },
  { t: "Docking under power", d: "Leaving and returning to the dock under the outboard, calmly and in control." },
  { t: "Rules of the road", d: "Who gives way to whom on the water, and how to stay well clear of trouble." },
  { t: "Navigation & charts", d: "Reading a chart and the buoys that mark the safe water." },
  { t: "Safety & emergencies", d: "PFDs, man-overboard, and staying ready for the moments that count." },
];

export default function FundamentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="The fundamentals of sailing."
        intro="The building blocks every sailor learns — the short version. We cover all of it, hands-on, in the Learn to Sail course."
      />

      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell">
          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {fundamentals.map((f, i) => (
              <Reveal key={f.t} delay={(i % 2) * 0.05}>
                <div className="flex gap-5 border-t border-line pt-6">
                  <span className="font-display text-lg text-accent tnum">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-fg">{f.t}</h3>
                    <p className="mt-2.5 max-w-sm text-lg text-fg-muted">{f.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-lg text-fg/80">
                Reading about it only goes so far — the rest happens on the water.
              </p>
              <Button href="/lessons" variant="primary" size="lg" arrow>
                Learn to sail
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
