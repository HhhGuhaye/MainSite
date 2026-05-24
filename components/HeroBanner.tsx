"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Gift, Percent, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const banners = [
  {
    id: 1,
    title: "500% Bonus",
    subtitle: "on first deposit",
    description: "Get up to 500% bonus on your first deposit and start winning big!",
    cta: "Get Bonus",
    gradient: "from-purple-600 via-violet-600 to-indigo-700",
    icon: Gift,
  },
  {
    id: 2,
    title: "Cashback 30%",
    subtitle: "every week",
    description: "Receive weekly cashback on all your gaming activity.",
    cta: "Learn More",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    icon: Percent,
  },
  {
    id: 3,
    title: "Quick Games",
    subtitle: "instant wins",
    description: "Try our instant win games and multiply your balance in seconds!",
    cta: "Play Now",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    icon: Zap,
  },
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const currentBanner = banners[currentSlide];
  const Icon = currentBanner.icon;

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Main Banner */}
      <div
        className={cn(
          "relative min-h-[280px] md:min-h-[320px] bg-gradient-to-r p-6 md:p-8 flex flex-col justify-center transition-all duration-500",
          currentBanner.gradient
        )}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-black/20 rounded-full blur-3xl" />
        
        {/* Floating Icon */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur flex items-center justify-center animate-pulse">
              <Icon className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -inset-4 rounded-full border-2 border-white/20 animate-ping" />
          </div>
        </div>

        <div className="relative z-10 max-w-lg">
          <p className="text-white/80 text-sm md:text-base font-medium mb-2">
            {currentBanner.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            {currentBanner.title}
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-6 max-w-md">
            {currentBanner.description}
          </p>
          <button className="rounded-xl bg-white px-6 py-3 text-sm md:text-base font-bold text-gray-900 transition-all hover:bg-white/90 hover:scale-105 active:scale-100">
            {currentBanner.cta}
          </button>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide
                  ? "w-6 bg-white"
                  : "bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>

      {/* Side Cards - Desktop */}
      <div className="hidden xl:grid absolute top-0 right-0 h-full w-80 grid-rows-2 gap-4 p-4">
        <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 flex flex-col justify-between">
          <div>
            <p className="text-white/80 text-xs font-medium">Cashback</p>
            <p className="text-2xl font-bold text-white">Up to 30%</p>
            <p className="text-white/70 text-xs mt-1">on casino losses</p>
          </div>
          <button className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/30 transition-colors">
            Get Cashback
          </button>
        </div>
        <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 p-4 flex flex-col justify-between">
          <div>
            <p className="text-white/80 text-xs font-medium">Sports Bonus</p>
            <p className="text-2xl font-bold text-white">+500%</p>
            <p className="text-white/70 text-xs mt-1">on sports betting</p>
          </div>
          <button className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/30 transition-colors">
            Bet Now
          </button>
        </div>
      </div>
    </div>
  );
}
