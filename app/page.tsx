import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] dark:bg-black dark:text-white">
      <Navbar />
      <HeroSection />
      <Footer />
    </main>
  );
}