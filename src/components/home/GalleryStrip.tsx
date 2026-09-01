import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import { SectionLabel } from "../shared/SectionLabel";

const tiles = [
  {
    src: "/images/sunset-wide.jpg",
    alt: "The sun setting over the open water of Lake Erie, seen from the boat",
    caption: "Sundown on the lake",
    w: 1800,
    h: 1350,
    span: "sm:col-span-6",
    ratio: "aspect-[4/3]",
    sizes: "(max-width: 640px) 100vw, 50vw",
  },
  {
    src: "/images/flag.jpg",
    alt: "The American flag flying off the stern against a Lake Erie sunset",
    caption: "Colors at sundown",
    w: 1800,
    h: 1350,
    span: "sm:col-span-3",
    ratio: "aspect-square",
    sizes: "(max-width: 640px) 100vw, 25vw",
  },
  {
    src: "/images/sunset-helm.jpg",
    alt: "Golden light across the water and the boat's helm at sunset",
    caption: "Golden hour, under way",
    w: 1800,
    h: 1350,
    span: "sm:col-span-3",
    ratio: "aspect-square",
    sizes: "(max-width: 640px) 100vw, 25vw",
  },
];

export function GalleryStrip() {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="05" tone="light">
                From the water
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="t-head mt-6 max-w-xl font-medium">
                Buffalo looks different when you&rsquo;re sailing past it.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-12">
          {tiles.map((t, i) => (
            <Reveal key={t.src} delay={i * 0.08} className={t.span}>
              <figure className="group">
                <div className={`overflow-hidden rounded-xl border border-white/10 ${t.ratio}`}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    width={t.w}
                    height={t.h}
                    sizes={t.sizes}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-sail/45">
                  {t.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
