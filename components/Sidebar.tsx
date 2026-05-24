"use client";

import { useState } from "react";
import {
  Search,
  Flame,
  Star,
  Gamepad2,
  Sparkles,
  Zap,
  Trophy,
  Tv,
  Gift,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { icon: Flame, label: "Popular", count: 248, active: true },
  { icon: Gamepad2, label: "All Games", count: 13708 },
  { icon: Star, label: "Favorites", count: 16 },
  { icon: Sparkles, label: "New", count: 244 },
  { icon: Zap, label: "Quick Games", count: 101 },
  { icon: Trophy, label: "Tournaments", count: 97 },
  { icon: Tv, label: "Live Casino", count: 674 },
  { icon: TrendingUp, label: "Top Games", count: 364 },
  { icon: Gift, label: "Bonus Buy", count: 254 },
];

export function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col h-fit sticky top-32 bg-[hsl(var(--card))] rounded-xl border border-[hsl(var(--border))] overflow-hidden transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Search */}
      {!isCollapsed && (
        <div className="p-4 border-b border-[hsl(var(--border))]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
            <input
              type="text"
              placeholder="Search games..."
              className="w-full rounded-lg bg-[hsl(var(--secondary))] border-none pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
            />
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="p-2">
        {!isCollapsed && (
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
            Categories
          </p>
        )}
        <nav className="flex flex-col gap-1">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.label;
            return (
              <button
                key={category.label}
                onClick={() => setActiveCategory(category.label)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-[hsl(var(--primary))] text-white"
                    : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--secondary))] hover:text-white"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="flex-1 text-left">{category.label}</span>
                    <span
                      className={cn(
                        "text-xs",
                        isActive ? "text-white/70" : "text-[hsl(var(--muted-foreground))]"
                      )}
                    >
                      {category.count}
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bonus Card */}
      {!isCollapsed && (
        <div className="p-4 mt-auto">
          <div className="rounded-xl bg-gradient-to-br from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] p-4 text-white">
            <p className="text-lg font-bold">Get 500%</p>
            <p className="text-sm opacity-90 mb-3">on first deposit</p>
            <button className="w-full rounded-lg bg-white/20 backdrop-blur px-4 py-2 text-sm font-semibold hover:bg-white/30 transition-colors">
              Get Bonus
            </button>
          </div>
        </div>
      )}

      {/* Support */}
      {!isCollapsed && (
        <div className="p-4 border-t border-[hsl(var(--border))]">
          <button className="flex items-center justify-between w-full text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors">
            <span>Support 24/7</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </aside>
  );
}
