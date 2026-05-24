import { Flame, Sparkles, Tv, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { HeroBanner } from "@/components/HeroBanner";
import { QuickCategories } from "@/components/QuickCategories";
import { GameSection } from "@/components/GameSection";
import { TournamentsSection } from "@/components/TournamentsSection";
import { ProvidersSection } from "@/components/ProvidersSection";
import { WinnersSidebar } from "@/components/WinnersSidebar";
import { Footer } from "@/components/Footer";
import {
  popularGames,
  newGames,
  liveCasinoGames,
  quickGames,
} from "@/lib/games-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Header />
      
      <div className="mx-auto max-w-[1920px] px-4 lg:px-6 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 min-w-0 space-y-8">
            {/* Hero Banner */}
            <HeroBanner />

            {/* Quick Categories */}
            <QuickCategories />

            {/* New Games Section */}
            <GameSection
              title="New Games"
              icon={<Sparkles className="w-4 h-4" />}
              games={newGames}
              variant="compact"
            />

            {/* Popular Games */}
            <GameSection
              title="Popular"
              icon={<Flame className="w-4 h-4" />}
              games={popularGames}
            />

            {/* Live Casino */}
            <GameSection
              title="Live Casino"
              icon={<Tv className="w-4 h-4" />}
              games={liveCasinoGames}
            />

            {/* Quick Games */}
            <GameSection
              title="Quick Games"
              icon={<Zap className="w-4 h-4" />}
              games={quickGames}
              variant="compact"
            />

            {/* Tournaments */}
            <TournamentsSection />

            {/* Providers */}
            <ProvidersSection />
          </main>

          {/* Right Sidebar - Winners */}
          <WinnersSidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
}
