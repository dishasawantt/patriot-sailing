"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { primaryNav, site } from "@/data/site";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // over the (always-dark) hero → light text; once scrolled → theme text
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid
          ? "bg-canvas/80 backdrop-blur-md border-b border-line text-fg"
          : "bg-transparent border-b border-transparent text-sail"
      )}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              className={cn(
                "font-sans text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 hover:text-accent-bright",
                isActive(item.href) ? "text-accent-bright" : "text-current/80"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 font-sans text-[0.8rem] font-medium tracking-wide text-current/80 transition-colors hover:text-accent-bright xl:inline-flex"
          >
            <Phone className="size-3.5" strokeWidth={2} />
            {site.phone}
          </a>
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-full bg-accent px-5 py-2.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-on-accent transition-colors duration-300 hover:bg-accent-bright sm:inline-flex"
          >
            Book a sail
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-current/25 transition-colors hover:border-current/50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-canvas/98 text-fg backdrop-blur-md lg:hidden"
          >
            <nav className="shell flex flex-col gap-1 pt-8">
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href as never}
                    className="block border-b border-line py-4 font-display text-3xl"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a href={site.phoneHref} className="inline-flex items-center gap-3 text-lg">
                  <Phone className="size-4 text-accent" /> {site.phone}
                </a>
                <a href={site.emailHref} className="text-fg-muted">
                  {site.email}
                </a>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex w-fit rounded-full bg-accent px-7 py-3.5 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-on-accent"
                >
                  Book a sail
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
