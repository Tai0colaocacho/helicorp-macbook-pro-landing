import { BatteryCharging, Coffee, Laptop, Moon, Rocket } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const timeline = [
  {
    time: "09:00",
    title: "Start coding",
    description: "Open your project, check tasks and begin focused development.",
    icon: Laptop,
  },
  {
    time: "13:00",
    title: "Design review",
    description: "Review UI details, refine layouts and join team discussions.",
    icon: Coffee,
  },
  {
    time: "16:00",
    title: "Build and test",
    description: "Run previews, test responsive screens and polish interactions.",
    icon: Rocket,
  },
  {
    time: "21:00",
    title: "Final export",
    description: "Wrap up your work, prepare tomorrow and stay unplugged longer.",
    icon: Moon,
  },
];

export function BatterySection() {
  return (
    <section className="bg-[#f5f5f7] px-6 py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Battery"
              title="Work anywhere. Stay unplugged longer."
              description="Move from class, office, café and home without constantly looking for a charger."
              align="left"
            />

            <Card className="mt-10 overflow-hidden rounded-[2rem] bg-black p-0 text-white dark:border-white/10">
              <div className="relative p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#22c55e_0%,transparent_35%),radial-gradient(circle_at_bottom_left,#0ea5e9_0%,transparent_40%)] opacity-60" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                      <BatteryCharging className="h-5 w-5" />
                    </span>

                    <span className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm font-medium text-emerald-200">
                      86% remaining
                    </span>
                  </div>

                  <h3 className="mt-10 text-4xl font-semibold tracking-tight">
                    All-day flow.
                  </h3>

                  <p className="mt-4 text-base leading-7 text-white/70">
                    Designed for long sessions of coding, browsing, meetings,
                    editing and content creation.
                  </p>

                  <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-emerald-300 to-sky-300" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-transparent via-black/10 to-transparent md:block dark:via-white/15" />

            <div className="space-y-6">
              {timeline.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.time} className="relative md:pl-14">
                    <span className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#f5f5f7] text-[#1d1d1f] md:flex dark:border-white/10 dark:bg-black dark:text-white">
                      <Icon className="h-5 w-5" />
                    </span>

                    <Card className="rounded-[2rem] p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm font-medium text-[#0071e3] dark:text-sky-400">
                            {item.time}
                          </p>

                          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
                            {item.title}
                          </h3>

                          <p className="mt-3 max-w-2xl text-base leading-7 text-[#6e6e73] dark:text-neutral-400">
                            {item.description}
                          </p>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white sm:hidden dark:bg-white dark:text-black">
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}