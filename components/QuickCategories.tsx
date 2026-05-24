"use client";

import {
  Gamepad2,
  Star,
  Zap,
  Tv,
  Flame,
  Gift,
  Trophy,
  TrendingUp,
  Dices,
} from "lucide-react";
import { cn } from "@/lib/utils";

const quickCategories = [
  { icon: Gamepad2, label: "All Games", active: false },
  { icon: Star, label: "Top 20", active: false },
  { icon: Flame, label: "Popular", active: true },
  { icon: Zap, label: "Quick Games", active: false },
  { icon: Gift, label: "Drops & Wins", active: false },
  { icon: Dices, label: "Slots", active: false },
  { icon: Tv, label: "Live Casino", active: false },
  { icon: Trophy, label: "Tournaments", active: false },
  { icon: TrendingUp, label: "Top Games", active: false },
  { icon: Gift, label: "Bonus Buy", active: false },
];

export function QuickCategories() {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2 -mx-4 px-4 md:mx-0 md:px-0">
      {quickCategories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.label}
            className={cn(
              "flex flex-col items-center gap-2 shrink-0 rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[80px] transition-all",
              category.active
                ? "bg-[hsl(var(--primary))] text-white"
                : "bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--card-hover))] hover:text-white"
            )}
          >
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-[10px] md:text-xs font-medium text-center leading-tight">
              {category.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
