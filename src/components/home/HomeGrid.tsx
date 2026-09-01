import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";

type Card = {
  href: string;
  eyebrow: string;
  title: string;
  blurb: string;
  img: string;
  alt: string;
};

const cards: Card[] = [
  {
    href: "/cruises",
    eyebrow: "Private Sailing",
    title: "Private Sunset Cruise",
    blurb: "Two hours for two — the boat, the harbor, and the sunset, all yours.",
    img: "/images/sunset-bow.jpg",
    alt: "Sailing toward a Lake Erie sunset",
  },
  {
    href: "/discounts",
    eyebrow: "Those who serve",
    title: "Military & Responder Discounts",
    blurb: "25% off lessons and cruises for police, firefighters, and military.",
    img: "/images/flag.jpg",
    alt: "The American flag against a Lake Erie sunset",
  },
  {
    href: "/lessons",
    eyebrow: "Learn",
    title: "Learn to Sail",
    blurb: "From a first evening on the water to the full hands-on course.",
    img: "/images/sailing.jpg",
    alt: "The Patriot Sailing boat under sail on Lake Erie",
  },
  {
    href: "/fundamentals",
    eyebrow: "Learn",
    title: "Fundamentals of Sailing",
    blurb: "Wind, points of sail, trim, knots — the basics, explained simply.",
    img: "/images/deck.jpg",
    alt: "On deck under sail on Lake Erie",
  },
  {
    href: "/blog",
    eyebrow: "Journal",
    title: "Read the Blog",
    blurb: "Quotes, docking tips, and notes from the water.",
    img: "/images/skyline.jpg",
    alt: "Buffalo's skyline seen from the water",
  },
  {
    href: "/gallery",
    eyebrow: "Gallery",
    title: "Photo Gallery",
    blurb: "Sunsets, the skyline, and the boat at her best.",
    img: "/images/sunset-wide.jpg",
    alt: "The sun setting over Lake Erie",
  },
];

export function HomeGrid() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-accent">Explore</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="t-title mt-4 max-w-xl font-medium">Set your course.</h2>
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.href} delay={(i % 2) * 0.06}>
              <Link href={c.href as never} className="group block">
                <div className="overflow-hidden rounded-2xl border border-line">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    width={1800}
                    height={1200}
                    sizes="(max-width: 640px) 100vw, 44vw"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5">
                  <p className="eyebrow text-accent">{c.eyebrow}</p>
                  <h3 className="t-head mt-2.5 font-medium">{c.title}</h3>
                  <p className="mt-3 max-w-md text-lg text-fg-muted">{c.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.1em] transition-colors group-hover:text-accent">
                    Learn more
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
