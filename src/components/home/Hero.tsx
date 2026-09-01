"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SmartLink } from "../shared/SmartLink";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STILL =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("still");

// static hosting can live under a sub-path; raw <video> assets need it prepended
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const media = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // play the background video unless the viewer opted out of motion
      if (video.current && !reduce && !STILL) {
        video.current.play().catch(() => {});
      }

      if (STILL || reduce) {
        gsap.set(".hero-anim", { opacity: 1 });
        return;
      }

      // calm load: footage settles in, then the words rise a touch
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .from(media.current, { opacity: 0, duration: 1.2 }, 0)
        .from(".hero-anim", { opacity: 0, y: 16, duration: 0.8, stagger: 0.08 }, 0.25);
    },
    { scope: root }
  );

  return (
    <section ref={root} className="scene relative min-h-[100svh] overflow-hidden bg-ink">
      {/* background footage — shown in full, never cropped/zoomed */}
      <div ref={media} className="absolute inset-0 overflow-hidden">
        {/* soft ambient fill so the full-frame video leaves no dead bars */}
        <Image
          src="/images/hero-poster.jpg"
          alt=""
          fill
          priority
          className="scale-125 object-cover blur-2xl"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <video
          ref={video}
          className="absolute inset-0 h-full w-full object-contain"
          poster={`${BASE}/images/hero-poster.jpg`}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src={`${BASE}/videos/hero.mp4`} type="video/mp4" />
        </video>
        {/* legibility scrims — bottom-up on mobile, left-to-right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20 lg:bg-gradient-to-r lg:from-ink/85 lg:via-ink/40 lg:to-ink/5" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(80%_120%_at_50%_140%,rgba(240,134,76,0.2),transparent)]" />

      <div className="hero-content shell relative z-10 flex min-h-[100svh] flex-col justify-end pb-20 pt-32 text-sail sm:justify-center lg:pb-0">
        <div className="max-w-2xl">
          <div className="hero-anim flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow text-accent-bright">{site.location.region}</span>
          </div>

          <h1 className="t-mega mt-6 font-medium">
            <span className="hero-anim block">Find your</span>
            <span className="hero-anim block italic text-accent-bright">wind.</span>
          </h1>

          <p className="hero-anim mt-7 max-w-md text-lg leading-relaxed text-sail/85">
            Private sunset sails and hands-on lessons on Lake Erie. One boat, the whole harbor to
            yourselves.
          </p>

          <div className="hero-anim mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SmartLink
              href="/cruises"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-on-accent transition-colors duration-300 hover:bg-accent-bright"
            >
              Book a private sail
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SmartLink>
            <SmartLink
              href="/lessons"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sail/30 px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-sail transition-colors duration-300 hover:border-sail/80"
            >
              Learn to sail
            </SmartLink>
          </div>

          <p className="hero-anim mt-10 font-sans text-xs uppercase tracking-[0.2em] text-sail/45">
            USCG-licensed captain · {site.season.label}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 hidden justify-center lg:flex">
        <div className="flex flex-col items-center gap-2 text-sail/40">
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-sail/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
