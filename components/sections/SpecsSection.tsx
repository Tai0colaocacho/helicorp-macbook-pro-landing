import { specs } from "@/data/specs";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SpecsSection() {
  return (
    <section
      id="specs"
      className="relative overflow-hidden bg-[#f5f5f7] px-6 py-24 dark:bg-black"
    >
      <div className="absolute inset-x-0 top-20 mx-auto h-80 max-w-5xl rounded-full bg-[radial-gradient(circle,#e0e7ff_0%,transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,#312e81_0%,transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Specs"
          title="Power, measured beautifully."
          description="A clean technical overview designed to help users understand the product quickly without overwhelming them with dense specification tables."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {specs.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.label}
                className={
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                    : ""
                }
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white dark:bg-white dark:text-black">
                      <Icon className="h-5 w-5" />
                    </span>

                    <p className="mt-8 text-sm font-medium uppercase tracking-[0.22em] text-[#6e6e73] dark:text-neutral-500">
                      {item.label}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
                      {item.value}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-[#6e6e73] dark:text-neutral-400">
                      {item.description}
                    </p>
                  </div>

                  {index === 0 ? (
                    <div className="mt-10 rounded-3xl bg-black p-5 text-white dark:bg-white dark:text-black">
                      <p className="text-sm font-medium opacity-60">
                        Featured chip
                      </p>
                      <p className="mt-3 text-4xl font-semibold tracking-tight">
                        M5
                      </p>
                      <p className="mt-3 text-sm leading-6 opacity-70">
                        Designed for fast everyday work, pro applications and
                        intelligent workflows.
                      </p>
                    </div>
                  ) : null}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-[2rem] border border-black/5 bg-white/70 p-6 text-sm leading-7 text-[#6e6e73] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-neutral-400">
          <p>
            This landing page is a redesign concept created for a website
            development test. Product names and specification references are
            used for UI/UX demonstration purposes.
          </p>
        </div>
      </div>
    </section>
  );
}