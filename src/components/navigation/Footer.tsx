import Link from "next/link";
import { Phone, Mail, MapPin, Anchor } from "lucide-react";
import { footerNav, site } from "@/data/site";
import { WindRose } from "../shared/WindRose";
import { WaterLines } from "../shared/WaterLines";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-abyss text-sail">
      <WaterLines className="pointer-events-none absolute inset-x-0 top-0 h-40 w-full opacity-70" />

      {/* Sign-off / CTA */}
      <div className="shell relative border-b border-white/10 pt-24 pb-16">
        <WindRose className="pointer-events-none absolute -right-10 top-16 hidden h-64 w-64 opacity-[0.07] md:block" />
        <p className="eyebrow text-accent">Ready when you are</p>
        <h2 className="t-display mt-5 max-w-3xl">
          Find your wind.
        </h2>
        <p className="mt-6 max-w-md text-sail/70">
          The season runs {site.season.label}. Call or write, and we&rsquo;ll get you on the water.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-abyss transition-colors duration-300 hover:bg-accent-bright"
          >
            <Phone className="size-4" strokeWidth={2.25} /> {site.phone}
          </a>
          <a
            href={site.emailHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-sail transition-colors duration-300 hover:border-white/70"
          >
            <Mail className="size-4" strokeWidth={2} /> Email us
          </a>
        </div>
      </div>

      {/* Columns */}
      <div className="shell relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.2em]">
            <Anchor className="size-4 text-accent" /> Patriot Sailing
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sail/60">
            {site.blurb}
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-sail/50">Explore</h3>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as never}
                  className="text-sm text-sail/80 transition-colors hover:text-accent-bright"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-sail/50">Where we sail</h3>
          <div className="mt-5 space-y-4 text-sm text-sail/75">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={2} />
              <span>
                {site.location.dock}
                <br />
                {site.location.address}
              </span>
            </p>
            <p className="text-sail/55">Season: {site.season.label}</p>
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-sail/50">Reach the captain</h3>
          <div className="mt-5 space-y-3 text-sm">
            <a
              href={site.phoneHref}
              className="flex items-center gap-3 text-sail/85 transition-colors hover:text-accent-bright"
            >
              <Phone className="size-4 text-accent" strokeWidth={2} /> {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="flex items-center gap-3 break-all text-sail/85 transition-colors hover:text-accent-bright"
            >
              <Mail className="size-4 text-accent" strokeWidth={2} /> {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="shell relative flex flex-col gap-2 border-t border-white/10 py-8 text-xs text-sail/45 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.legalName}. USCG-licensed captain · Buffalo, New York.
        </p>
        <p>Private sailing &amp; instruction on Lake Erie.</p>
      </div>
    </footer>
  );
}
