import { Gift, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "../shared/Reveal";

export function GiftsBand() {
  return (
    <section className="relative overflow-hidden bg-canvas py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_0%,rgba(240,134,76,0.08),transparent)]" />
      <div className="shell relative grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        <Reveal className="bg-panel">
          <div className="flex h-full flex-col p-8 sm:p-10">
            <Gift className="size-6 text-accent" strokeWidth={1.5} />
            <h3 className="t-head mt-6 font-medium">Give a day on the water</h3>
            <p className="mt-4 max-w-sm text-fg/70">
              Gift certificates for any lesson or private sail, year-round. No date to lock in — they
              book when they&rsquo;re ready.
            </p>
            <Link
              href="/gift"
              className="group mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-accent-bright transition-colors hover:text-accent"
            >
              Gift certificates
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="bg-panel" delay={0.08}>
          <div className="flex h-full flex-col p-8 sm:p-10">
            <Shield className="size-6 text-accent" strokeWidth={1.5} />
            <h3 className="t-head mt-6 font-medium">For those who serve</h3>
            <p className="mt-4 max-w-sm text-fg/70">
              Founded by a retired officer. Police, firefighters, and military sail{" "}
              <span className="text-fg">25% off</span> — with 15% off for family. Just say so when you
              book.
            </p>
            <Link
              href="/cruises"
              className="group mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-accent-bright transition-colors hover:text-accent"
            >
              Plan your sail
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
