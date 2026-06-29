import { productHighlights } from "@/data/features";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HighlightSection() {
  return (
    <section className="bg-[#f5f5f7] px-6 py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Product Highlight"
          title="Power that feels effortless."
          description="From writing code to editing high-resolution video, MacBook Pro keeps every workflow fast, fluid and focused."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {productHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={0.08 * productHighlights.indexOf(item)} className="h-full">
                <Card className="group min-h-72">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1d1d1f] text-white transition group-hover:scale-105 dark:bg-white dark:text-black">
                        <Icon className="h-5 w-5" />
                      </span>

                      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-base leading-7 text-[#6e6e73] dark:text-neutral-400">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-10 h-1.5 rounded-full bg-gradient-to-r from-[#0071e3] via-[#a855f7] to-transparent opacity-70" />
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}