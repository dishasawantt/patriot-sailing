import type { Metadata } from "next";
import { Phone, Mail, MapPin, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { ContactForm } from "@/components/booking/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Book — Patriot Sailing, Buffalo NY",
  description:
    "Call 716-324-1156 or send a message to book a private sail or sailing lessons on Lake Erie. We sail from the Courtesy Dock at the Buffalo Harbor.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s get you
            <br />
            on the <span className="italic text-accent-bright">water.</span>
          </>
        }
        intro="Call, email, or send a note below. If no one picks up, we're probably out on the boat — leave a message and we'll call right back."
        glow
      />

      <section className="bg-canvas py-20 sm:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Details */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel index="01" tone="accent">
                The direct line
              </SectionLabel>
            </Reveal>

            <div className="mt-8 space-y-6">
              <Reveal>
                <a href={site.phoneHref} className="group flex items-start gap-4">
                  <Phone className="mt-1 size-5 text-accent" strokeWidth={2} />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-fg/45">Call</span>
                    <span className="font-display text-2xl text-fg transition-colors group-hover:text-accent-bright">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.05}>
                <a href={site.emailHref} className="group flex items-start gap-4">
                  <Mail className="mt-1 size-5 text-accent" strokeWidth={2} />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-fg/45">Email</span>
                    <span className="break-all font-display text-2xl text-fg transition-colors group-hover:text-accent-bright">
                      {site.email}
                    </span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 size-5 text-accent" strokeWidth={2} />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-fg/45">
                      Where we sail
                    </span>
                    <span className="text-fg/85">{site.location.dock}</span>
                    <span className="block text-fg/60">{site.location.address}</span>
                    <span className="mt-2 block max-w-xs text-sm text-fg/50">{site.location.note}</span>
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.14}>
                <div className="flex items-start gap-4">
                  <CalendarClock className="mt-1 size-5 text-accent" strokeWidth={2} />
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-fg/45">Season</span>
                    <span className="text-fg/85">{site.season.label}</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-3xl border border-line bg-fg/[0.03] p-6 sm:p-9">
                <h2 className="font-display text-2xl text-fg">Send a message</h2>
                <p className="mt-2 text-fg/60">
                  Tell us what you have in mind and we&rsquo;ll get back to you.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
