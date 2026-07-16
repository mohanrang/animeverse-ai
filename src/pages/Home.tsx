import HeroSection from "@/components/dashboard/HeroSection";
import TrendingSection from "@/components/dashboard/TrendingSection";

export default function Home() {
  return (
    <main className="p-6">
      <HeroSection />

      <TrendingSection />
    </main>
  );
}