"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STILL =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("still");

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "span";
};

/**
 * Scroll-triggered entrance — a slow rise with a slight tilt out of the
 * Z-plane, not a flat fade-up. Uses gsap.from so content is visible without
 * JS, and honors reduced-motion and the ?still QA switch.
 */
export function Reveal({ children, className, delay = 0, y = 14, as = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (STILL || reduce) {
        gsap.set(el, { opacity: 1 });
        return;
      }
      gsap.from(el, {
        opacity: 0,
        y,
        duration: 0.7,
        ease: "power2.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  const Tag = as as ElementType;
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
