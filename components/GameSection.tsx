"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Game {
  id: number;
  name: string;
  provider: string;
  image: string;
  category: string;
}

interface GameSectionProps {
  title: string;
  icon?: React.ReactNode;
  games: Game[];
  showViewAll?: boolean;
  variant?: "default" | "compact";
}

export function GameSection({
  title,
  icon,
  games,
  showViewAll = true,
  variant = "default",
}: GameSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="w-8 h-8 rounded-lg bg-[hsl(var(--primary))] flex items-center justify-center text-white">
              {icon}
            </div>
          )}
          <h2 className="text-lg md:text-xl font-bold text-white">{title}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex w-8 h-8 rounded-lg bg-[hsl(var(--card))] items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-white hover:bg-[hsl(var(--card-hover))] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex w-8 h-8 rounded-lg bg-[hsl(var(--card))] items-center justify-center text-[hsl(var(--muted-foreground))] hover:text-white hover:bg-[hsl(var(--card-hover))] transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          {showViewAll && (
            <button className="rounded-lg bg-[hsl(var(--primary))] px-4 py-2 text-xs font-semibold text-white hover:bg-[hsl(var(--primary))]/90 transition-colors">
              View All
            </button>
          )}
        </div>
      </div>

      {/* Games Grid */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 md:mx-0 md:px-0"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} variant={variant} />
        ))}
      </div>
    </section>
  );
}

interface GameCardProps {
  game: Game;
  variant?: "default" | "compact";
}

function GameCard({ game, variant = "default" }: GameCardProps) {
  return (
    <div
      className={cn(
        "group relative shrink-0 rounded-xl overflow-hidden bg-[hsl(var(--card))] card-hover cursor-pointer",
        variant === "compact" ? "w-28 md:w-32" : "w-36 md:w-44"
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative overflow-hidden",
          variant === "compact" ? "aspect-square" : "aspect-[4/5]"
        )}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url(${game.image})`,
            backgroundColor: "hsl(var(--secondary))",
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
          <button className="rounded-lg gradient-primary px-4 py-2 text-xs font-semibold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
            Play Now
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-2 md:p-3">
        <p className="text-xs md:text-sm font-medium text-white truncate">
          {game.name}
        </p>
        <p className="text-[10px] md:text-xs text-[hsl(var(--muted-foreground))] truncate">
          {game.provider}
        </p>
      </div>
    </div>
  );
}
