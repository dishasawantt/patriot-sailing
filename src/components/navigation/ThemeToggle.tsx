"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ps-theme", next);
    } catch {}
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted ? `Switch to ${theme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-current/25 transition-colors hover:border-current/60",
        className
      )}
    >
      {/* icon reflects the theme you'll switch TO */}
      {mounted && theme === "dark" ? (
        <Sun className="size-[1.05rem]" strokeWidth={1.75} />
      ) : (
        <Moon className="size-[1.05rem]" strokeWidth={1.75} />
      )}
    </button>
  );
}
