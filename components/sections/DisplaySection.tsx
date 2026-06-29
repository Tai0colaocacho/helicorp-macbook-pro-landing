import { Code2, Eye, Layers3, Palette } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const displayFeatures = [
  {
    title: "Sharp UI Detail",
    description: "Read code, inspect layouts and refine interfaces with clarity.",
    icon: Code2,
  },
  {
    title: "Color Precision",
    description: "Design screens, graphics and visual assets with richer color confidence.",
    icon: Palette,
  },
  {
    title: "Deep Contrast",
    description: "Work with dark interfaces, shadows and media content more comfortably.",
    icon: Eye,
  },
  {
    title: "More Workspace",
    description: "Keep your editor, preview and notes visible in one focused setup.",
    icon: Layers3,
  },
];

export function DisplaySection() {
  return (
    <section
      id="display"
      className="overflow-hidden bg-[#f5f5f7] px-6 py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Display"
          title="A display made for detail."
          description="Every pixel, color and shadow is tuned for work that needs precision — from interface design to software development."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative">
            <div className="absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,#bfdbfe_0%,transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,#1e40af_0%,transparent_65%)]" />

            <div className="rounded-[2.2rem] border border-black/10 bg-neutral-950 p-3 shadow-[0_40px_130px_rgba(0,0,0,0.25)] dark:border-white/10">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-black">
                <div className="flex min-h-[420px] flex-col bg-[radial-gradient(circle_at_top_left,#38bdf8_0%,transparent_30%),radial-gradient(circle_at_bottom_right,#a855f7_0%,transparent_35%),linear-gradient(135deg,#020617,#111827)] p-5 text-white">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                      Liquid Retina XDR
                    </span>
                  </div>

                  <div className="grid flex-1 gap-4 pt-5 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                          Project
                        </p>
                        <p className="mt-3 text-xl font-semibold">
                          Landing Page
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                          Contrast
                        </p>
                        <p className="mt-3 text-xl font-semibold">XDR View</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                          Workspace
                        </p>
                        <p className="mt-3 text-xl font-semibold">3 Panels</p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm text-white/60">Preview.tsx</p>
                        <p className="text-xs text-emerald-300">Live</p>
                      </div>

                      <div className="space-y-3 font-mono text-sm">
                        <CodeLine width="w-10/12" />
                        <CodeLine width="w-8/12" />
                        <CodeLine width="w-11/12" />
                        <CodeLine width="w-7/12" />
                        <CodeLine width="w-9/12" />
                        <CodeLine width="w-6/12" />
                      </div>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-white/10 p-4">
                          <p className="text-xs text-white/45">Design</p>
                          <p className="mt-2 text-lg font-semibold">Ready</p>
                        </div>
                        <div className="rounded-xl bg-white/10 p-4">
                          <p className="text-xs text-white/45">Build</p>
                          <p className="mt-2 text-lg font-semibold">Stable</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            {displayFeatures.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="rounded-3xl p-5">
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#6e6e73] dark:text-neutral-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type CodeLineProps = {
  width: string;
};

function CodeLine({ width }: CodeLineProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-2 w-2 rounded-full bg-sky-300" />
      <span className={`h-3 rounded-full bg-white/20 ${width}`} />
    </div>
  );
}