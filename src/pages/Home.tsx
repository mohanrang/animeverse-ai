import PageTransition from "@/components/transitions/PageTransition";
import HeroSection from "@/components/dashboard/HeroSection";
import TrendingSection from "@/components/dashboard/TrendingSection";

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
        <main className="mx-auto max-w-7xl p-6">
          <HeroSection />
          <TrendingSection />
        </main>
      </div>
    </PageTransition>
  );
}
