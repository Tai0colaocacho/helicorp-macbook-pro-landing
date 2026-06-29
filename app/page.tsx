export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          MacBook Pro Landing Page
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
          Built for those who build everything.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
          A premium product landing page experience designed for creators,
          developers and professionals.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#features"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Explore Features
          </a>

          <a
            href="#contact"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:border-neutral-900"
          >
            Get Notified
          </a>
        </div>
      </section>
    </main>
  );
}