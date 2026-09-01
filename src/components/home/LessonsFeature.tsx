import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { courses, curriculum } from "@/data/lessons";
import { Reveal } from "../shared/Reveal";
import { SectionLabel } from "../shared/SectionLabel";
import { cn } from "@/lib/cn";

export function LessonsFeature() {
  return (
    <section className="bg-canvas py-24 text-fg sm:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Pitch */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="03" tone="auto">
              Learn to sail
            </SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="t-title mt-8 font-medium">
              Anyone can learn.
              <br />
              We&rsquo;ll <span className="italic text-accent">prove it.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="measure mt-6 text-lg leading-relaxed text-fg/70">
              No experience, no nerves. Start on the dock, finish at the helm — in a group small
              enough that you&rsquo;re always the one sailing.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-line px-4 py-2 text-sm font-medium text-fg/75">
              <Users className="size-4 text-accent" strokeWidth={2} />
              Never more than three students aboard
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10">
              <p className="eyebrow text-fg/40">What you&rsquo;ll learn</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {curriculum.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-fg/[0.06] px-3 py-1.5 text-[0.8rem] text-fg/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Course index */}
        <div className="lg:col-span-7">
          <div className="border-b border-line">
            {courses.map((course, i) => (
              <Reveal key={course.id} delay={i * 0.06}>
                <Link
                  href="/lessons"
                  className={cn(
                    "group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-2 border-t border-line py-6 transition-colors sm:py-7",
                    course.featured ? "border-l-2 border-l-accent pl-5" : "hover:pl-2"
                  )}
                  style={{ transitionProperty: "padding, background-color" }}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
                          course.featured ? "text-accent" : "text-fg/45"
                        )}
                      >
                        {course.tag}
                      </span>
                    </div>
                    <h3 className="mt-1.5 font-display text-2xl leading-tight text-fg sm:text-[1.7rem]">
                      {course.name}
                    </h3>
                    <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-fg/60">
                      {course.summary}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-fg/40">
                      {course.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-3xl text-fg tnum sm:text-4xl">
                      ${course.price}
                    </div>
                    {course.priceNote && (
                      <div className="mt-1 text-[0.72rem] uppercase tracking-[0.1em] text-fg/45">
                        {course.priceNote}
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link
              href="/lessons"
              className="group mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-fg transition-colors hover:text-accent"
            >
              Course details &amp; scheduling
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
