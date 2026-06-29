import { Monitor } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Overview", "Performance", "Display", "Specs"],
  },
  {
    title: "Experience",
    links: ["Scrollytelling", "Configurator", "Newsletter", "Chatbot"],
  },
  {
    title: "Project",
    links: ["GitHub", "Deployment", "PageSpeed", "Documentation"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#f5f5f7] px-6 py-14 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_2fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                <Monitor className="h-4 w-4" />
              </span>

              <span className="text-sm font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
                MacBook Pro
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#6e6e73] dark:text-neutral-400">
              A premium Apple-inspired landing page redesign built with Next.js,
              TypeScript and Tailwind CSS.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-white">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-[#6e6e73] transition hover:text-[#1d1d1f] dark:text-neutral-400 dark:hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-black/5 pt-6 text-sm text-[#6e6e73] sm:flex-row dark:border-white/10 dark:text-neutral-500">
          <p>© 2026 MacBook Pro Landing Page Redesign.</p>
          <p>Built for HELICORP Round 2 Test.</p>
        </div>
      </div>
    </footer>
  );
}