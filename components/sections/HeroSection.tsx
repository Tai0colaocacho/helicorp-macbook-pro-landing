import { BatteryCharging, Cpu, Layers, MonitorUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const heroStats = [
  {
    label: "M-series chip",
    value: "Pro performance",
    icon: Cpu,
  },
  {
    label: "Liquid Retina XDR",
    value: "Stunning display",
    icon: MonitorUp,
  },
  {
    label: "All-day battery",
    value: "Work longer",
    icon: BatteryCharging,
  },
  {
    label: "Pro workflow",
    value: "Code. Design. Create.",
    icon: Layers,
  },
];

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden bg-[#f5f5f7] px-6 pt-28 dark:bg-black"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,#dbeafe_0%,transparent_45%),radial-gradient(circle_at_70%_20%,#ede9fe_0%,transparent_35%)] dark:bg-[radial-gradient(circle_at_top,#172554_0%,transparent_45%),radial-gradient(circle_at_70%_20%,#3b0764_0%,transparent_35%)]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="text-center lg:text-left" y={18}>
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.32em] text-[#0071e3] dark:text-sky-400">
            MacBook Pro Landing Page
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#1d1d1f] md:text-7xl lg:mx-0 lg:text-8xl dark:text-white">
            Built for those who build everything.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#424245] md:text-xl lg:mx-0 dark:text-neutral-300">
            Supercharged performance. Stunning display. All-day battery life.
            Designed for creators, developers and professionals.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="#performance" size="lg">
              Explore Performance
            </Button>

            <Button href="#contact" variant="secondary" size="lg">
              Get Notified
            </Button>
          </div>

          {/* <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-[#6e6e73] lg:justify-start dark:text-neutral-400">
            <span className="rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/10">
              Next.js
            </span>
            <span className="rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/10">
              TypeScript
            </span>
            <span className="rounded-full border border-black/10 bg-white/60 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/10">
              Tailwind CSS
            </span>
          </div> */}
        </Reveal>

        <div className="relative mx-auto w-full max-w-3xl overflow-visible">
          <div className="absolute -left-10 -top-10 z-30 hidden md:block">
            <FloatingCard
              label={heroStats[0].label}
              value={heroStats[0].value}
              icon={heroStats[0].icon}
            />
          </div>

          <div className="absolute -right-30 top-20 z-30 hidden md:block">
            <FloatingCard
              label={heroStats[1].label}
              value={heroStats[1].value}
              icon={heroStats[1].icon}
            />
          </div>

          <div className="absolute -bottom-8 -left-15 z-30 hidden md:block">
            <FloatingCard
              label={heroStats[2].label}
              value={heroStats[2].value}
              icon={heroStats[2].icon}
            />
          </div>

          <div className="absolute -bottom-14 -right-6 z-30 hidden md:block">
            <FloatingCard
              label={heroStats[3].label}
              value={heroStats[3].value}
              icon={heroStats[3].icon}
            />
          </div>

          <div className="relative z-10 mx-auto">
            <div className="mx-auto w-[92%] rounded-t-[2rem] border border-black/10 bg-neutral-900 p-2 shadow-[0_40px_120px_rgba(0,0,0,0.22)] dark:border-white/10">
              <div className="overflow-hidden rounded-t-[1.5rem] bg-black">
                <div className="flex h-[260px] flex-col justify-between bg-[radial-gradient(circle_at_top_left,#60a5fa_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#a855f7_0%,transparent_35%),linear-gradient(135deg,#0f172a,#020617)] p-6 md:h-[360px]">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur">
                      Pro workflow
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white/80">Today&apos;s focus</p>
                    <p className="mt-2 max-w-sm text-3xl font-semibold tracking-tight text-white md:text-5xl">
                      Build. Test. Ship.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <MiniScreenCard title="Code" value="42 files" />
                    <MiniScreenCard title="Design" value="12 screens" />
                    <MiniScreenCard title="Battery" value="86%" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto h-4 w-[98%] rounded-b-[2rem] bg-gradient-to-b from-neutral-300 to-neutral-500 shadow-[0_30px_70px_rgba(0,0,0,0.25)] dark:from-neutral-700 dark:to-neutral-900" />
            <div className="mx-auto h-2 w-[26%] rounded-b-2xl bg-neutral-400 dark:bg-neutral-800" />
          </div>

          <div className="mt-8 grid gap-3 md:hidden">
            {heroStats.map((item) => (
              <FloatingCard
                key={item.label}
                label={item.label}
                value={item.value}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type FloatingCardProps = {
  label: string;
  value: string;
  icon: typeof Cpu;
};

function FloatingCard({ label, value, icon: Icon }: FloatingCardProps) {
  return (
    <Card className="min-w-48 rounded-3xl p-4">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
          <Icon className="h-4 w-4" />
        </span>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#424245] dark:text-neutral-300">
            {label}
          </p>
          <p className="mt-1 text-sm font-semibold text-[#1d1d1f] dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </Card>
  );
}

type MiniScreenCardProps = {
  title: string;
  value: string;
};

function MiniScreenCard({ title, value }: MiniScreenCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
        {title}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}