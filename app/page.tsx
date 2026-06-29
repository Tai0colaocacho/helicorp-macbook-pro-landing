import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] dark:bg-black dark:text-white">
      <Navbar />

      <section
        id="overview"
        className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#0071e3]">
          MacBook Pro Landing Page
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
          Built for those who build everything.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6e6e73] md:text-xl dark:text-neutral-400">
          Supercharged performance. Stunning display. All-day battery life.
          Designed for creators, developers and professionals.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#performance" size="lg">
            Explore Performance
          </Button>

          <Button href="#contact" variant="secondary" size="lg">
            Get Notified
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}