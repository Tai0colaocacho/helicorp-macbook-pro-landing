import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BatterySection } from "@/components/sections/BatterySection";
import { DisplaySection } from "@/components/sections/DisplaySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightSection } from "@/components/sections/HighlightSection";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { ProductConfigurator } from "@/components/sections/ProductConfigurator";
import { SpecsSection } from "@/components/sections/SpecsSection";
import { NewsletterForm } from "@/components/sections/NewsletterForm";
import { ChatbotWidget } from "@/components/sections/ChatbotWidget";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MacBook3DShowcase } from "@/components/sections/MacBook3DShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] dark:bg-black dark:text-white">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <MacBook3DShowcase />
      <HighlightSection />
      <PerformanceSection />
      <DisplaySection />
      <BatterySection />
      <SpecsSection />
      <ProductConfigurator />
      <NewsletterForm />
      <Footer />
      <ChatbotWidget />
    </main>
  );
}