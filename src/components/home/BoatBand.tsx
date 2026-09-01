"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal } from "../shared/Reveal";
import { Button } from "../shared/Button";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STILL =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("still");

export function BoatBand() {
  const root = useRef<HTMLElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (STILL || reduce) return;
      // slow, subtle parallax — depth as the band passes, nothing that grabs
      gsap.fromTo(
        img.current,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[80vh] items-end overflow-hidden bg-abyss text-sail"
    >
      <div ref={img} className="absolute -top-[8%] left-0 h-[116%] w-full">
        <Image
          src="/images/skyline.jpg"
          alt="Buffalo's skyline low on the horizon, seen from a sailboat on Lake Erie at dusk"
          fill
          sizes="100vw"
          className="object-cover object-[50%_45%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/45 to-abyss/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss/70 to-transparent" />
      </div>

      <div className="shell relative z-10 pb-[12vh] pt-40">
        <Reveal>
          <p className="eyebrow text-accent-bright">On the water</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="t-display mt-5 max-w-2xl font-medium">See Buffalo from the water.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-sail/85">
            The skyline, the grain elevators, the lighthouse — the city looks different when
            you&rsquo;re sailing past it.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8">
            <Button href="/cruises" variant="lineLight" arrow>
              Book a private sail
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
