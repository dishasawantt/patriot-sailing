import Link from "next/link";
import { Compass } from "lucide-react";
import { WindRose } from "@/components/shared/WindRose";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-gradient-to-b from-abyss to-ink" />
      <WindRose className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
      <div className="shell relative text-center">
        <Compass className="mx-auto size-8 text-accent" strokeWidth={1.5} />
        <p className="eyebrow mt-6 text-accent-bright">Off the chart</p>
        <h1 className="t-display mt-5 font-medium">This page drifted off.</h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-sail/70">
          We couldn&rsquo;t find that one. Let&rsquo;s point you back toward open water.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link href="/" className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-sail transition-colors hover:text-accent-bright">
            Home
          </Link>
          <span className="h-4 w-px bg-white/15" />
          <Link href="/cruises" className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-sail transition-colors hover:text-accent-bright">
            Private Sailing
          </Link>
          <span className="h-4 w-px bg-white/15" />
          <Link href="/lessons" className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-sail transition-colors hover:text-accent-bright">
            Lessons
          </Link>
          <span className="h-4 w-px bg-white/15" />
          <Link href="/contact" className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-sail transition-colors hover:text-accent-bright">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
