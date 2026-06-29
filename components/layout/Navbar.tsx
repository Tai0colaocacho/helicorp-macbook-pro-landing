"use client";

import { Menu, Monitor, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Overview",
    href: "#overview",
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
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#f5f5f7]/80 backdrop-blur-2xl dark:border-white/10 dark:bg-black/70">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
            <Monitor className="h-4 w-4" />
          </span>

          <span className="text-sm font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
            MacBook Pro
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
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
          <Button href="#contact" size="sm">
            Get Notified
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#1d1d1f] backdrop-blur transition hover:bg-white md:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid overflow-hidden border-t border-black/5 bg-[#f5f5f7]/95 px-6 transition-all duration-300 md:hidden dark:border-white/10 dark:bg-black/95",
          isOpen ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr] py-0"
        )}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-2">
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

            <Button href="#contact" className="mt-3 w-full">
              Get Notified
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}