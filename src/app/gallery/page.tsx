import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Photo Gallery — Lake Erie & Buffalo from the Water",
  description:
    "Sunsets over Lake Erie, the Buffalo skyline from the water, and the Patriot Sailing boat under sail.",
  alternates: { canonical: "/gallery" },
};

const photos = [
  { src: "/images/skyline.jpg", alt: "Buffalo's skyline low on the horizon from the water", w: 1800, h: 1350, caption: "Buffalo, from the water" },
  { src: "/images/boat-dock.jpg", alt: "The Patriot Sailing boat at the dock in Buffalo Harbor", w: 1343, h: 1800, caption: "At the dock, Buffalo Harbor" },
  { src: "/images/sunset-bow.jpg", alt: "Sailing toward a Lake Erie sunset", w: 1800, h: 1350, caption: "Into the sunset" },
  { src: "/images/flag.jpg", alt: "The American flag against a Lake Erie sunset", w: 1800, h: 1350, caption: "Colors at sundown" },
  { src: "/images/sailing.jpg", alt: "The Patriot Sailing boat under sail on Lake Erie", w: 1800, h: 1349, caption: "Under sail" },
  { src: "/images/sunset-wide.jpg", alt: "The sun setting over open water on Lake Erie", w: 1800, h: 1350, caption: "Sundown on the lake" },
  { src: "/images/deck.jpg", alt: "On deck under sail, with another boat on the horizon", w: 1800, h: 1350, caption: "On deck" },
  { src: "/images/sunset-helm.jpg", alt: "Golden light across the water from the helm at sunset", w: 1800, h: 1350, caption: "Golden hour, under way" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="From the water."
        intro="Lake Erie, Buffalo, and the boat — at their best."
      />

      <section className="bg-canvas py-16 sm:py-24">
        <div className="shell">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {photos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 0.05} className="mb-4 break-inside-avoid">
                <figure className="group overflow-hidden rounded-xl border border-line">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
