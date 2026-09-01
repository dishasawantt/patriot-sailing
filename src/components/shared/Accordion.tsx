"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { Faq } from "@/data/faq";

function Item({ q, a }: Faq) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="border-t border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
      >
        <span className="font-display text-lg leading-snug text-fg sm:text-xl">{q}</span>
        <Plus
          className={`size-5 shrink-0 text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          strokeWidth={2}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 leading-relaxed text-fg/70">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items }: { items: Faq[] }) {
  return (
    <div className="border-b border-line">
      {items.map((item) => (
        <Item key={item.q} {...item} />
      ))}
    </div>
  );
}
