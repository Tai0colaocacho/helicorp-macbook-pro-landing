import { performanceFeatures } from "@/data/features";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PerformanceSection() {
  return (
    <section
      id="performance"
      className="relative isolate overflow-hidden bg-[#f5f5f7] px-6 py-24 dark:bg-black"
    >
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-[radial-gradient(circle,#dbeafe_0%,transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle,#1d4ed8_0%,transparent_60%)]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Performance"
          title="Made for serious work."
          description="Whether you are coding, designing, presenting or creating, MacBook Pro gives every workflow more room to move."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {performanceFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="min-h-64">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-[#6e6e73] dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-black/5 bg-black p-6 text-white shadow-[0_30px_100px_rgba(0,0,0,0.18)] dark:border-white/10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-300">
                Pro Workflow
              </p>

              <h3 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
                One machine for code, design, meetings and delivery.
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">
                Keep your workspace fast and calm while switching between
                development tools, design files, research tabs and creative
                workloads.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="space-y-4">
                <WorkflowRow label="Build" value="Running smoothly" />
                <WorkflowRow label="Preview" value="Live UI update" />
                <WorkflowRow label="Review" value="Design synced" />
                <WorkflowRow label="Deploy" value="Ready to ship" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type WorkflowRowProps = {
  label: string;
  value: string;
};

function WorkflowRow({ label, value }: WorkflowRowProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3">
      <span className="text-sm text-white/60">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
  );
}