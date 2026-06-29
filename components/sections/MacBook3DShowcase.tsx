import { Rotate3D, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MacBook3DLoader } from "@/components/sections/MacBook3DLoader";

export function MacBook3DShowcase() {
  return (
    <section
      id="interactive-3d"
      aria-labelledby="interactive-3d-title"
      className="bg-[#f5f5f7] px-6 py-24 dark:bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Interactive 3D Preview"
          title="Explore MacBook Pro from every angle."
          description="Rotate the MacBook model on desktop to explore its form, finish and display angle. Mobile visitors get a lightweight preview to keep the experience fast and smooth."
        />

        <Reveal className="mt-14">
          <Card className="overflow-hidden rounded-[2.5rem] p-0">
            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-center border-b border-black/5 p-8 md:p-10 lg:border-b-0 lg:border-r dark:border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                  <Rotate3D className="h-5 w-5" />
                </div>

                <h3
                  id="interactive-3d-title"
                  className="mt-8 text-3xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl dark:text-white"
                >
                  Inspect the design before choosing your configuration.
                </h3>

                <p className="mt-5 text-base leading-8 text-[#6e6e73] dark:text-neutral-400">
                  Explore the MacBook model in 3D to get a closer look at its profile,
                  screen angle and premium finish. The interactive experience loads only
                  when a desktop visitor opens it, helping the page stay fast while still
                  feeling modern and product-focused.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <FeaturePill icon={Zap} label="On-demand 3D loading" />
                  <FeaturePill icon={ShieldCheck} label="Mobile-safe fallback" />
                  <FeaturePill icon={Rotate3D} label="Drag-to-rotate Preview" />
                  <FeaturePill icon={Sparkles} label="Theme-aware model" />
                </div>
              </div>

              <div className="relative min-h-[430px] overflow-hidden bg-[radial-gradient(circle_at_center,#dbeafe_0%,#ffffff_42%,#f5f5f7_100%)] dark:bg-[radial-gradient(circle_at_center,#0f172a_0%,#030712_48%,#000000_100%)]">
                <div className="h-[430px] w-full md:h-[560px]">
                  <MacBook3DLoader />
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

type FeaturePillProps = {
  icon: typeof Zap;
  label: string;
};

function FeaturePill({ icon: Icon, label }: FeaturePillProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-black/[0.03] px-4 py-3 text-sm font-medium text-[#1d1d1f] dark:border-white/10 dark:bg-white/[0.06] dark:text-white">
      <Icon className="h-4 w-4 text-[#0071e3] dark:text-sky-400" />
      {label}
    </div>
  );
}