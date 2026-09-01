"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** how far it drifts, in px, across the scroll window */
  distance?: number;
};

/** Slow vertical parallax as the element crosses the viewport. */
export function Parallax({ children, className, distance = 80 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : y }} className="relative h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
