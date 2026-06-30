"use client";

import { Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Overview",
    href: "#overview",
  },
  {
    label: "3D",
    href: "#interactive-3d",
  },
  {
    label: "Performance",
    href: "#performance",
  },
  {
    label: "Display",
    href: "#display",
  },
  {
    label: "Specs",
    href: "#specs",
  },
  {
    label: "Build Yours",
    href: "#configurator",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[80] border-b border-black/5 bg-[#f5f5f7]/80 backdrop-blur-2xl dark:border-white/10 dark:bg-black/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#overview"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
            <Monitor className="h-4 w-4" />
          </span>

          <span className="text-sm font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
            MacBook Pro
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#6e6e73] transition hover:text-[#1d1d1f] dark:text-neutral-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="#contact" size="sm">
            Get Notified
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#1d1d1f] backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed left-0 right-0 top-16 z-[75] border-t border-black/5 bg-[#f5f5f7]/95 px-6 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl transition-all duration-300 md:hidden dark:border-white/10 dark:bg-black/95",
          "max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-medium text-[#1d1d1f] transition hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[#0071e3] px-5 text-sm font-semibold text-white transition hover:bg-[#0077ed]"
          >
            Get Notified
          </a>
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Theme loading"
        className="h-10 w-10 rounded-full border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#1d1d1f] backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}