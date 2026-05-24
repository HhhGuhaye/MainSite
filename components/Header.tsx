"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  Flame,
  Gift,
  Bell,
  MessageCircle,
  Globe,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#", active: true },
  { label: "Live", href: "#" },
  { label: "Sports", href: "#" },
  { label: "Casino", href: "#" },
  { label: "Live Games", href: "#" },
  { label: "Promotions", href: "#" },
  { label: "Tournaments", href: "#" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background))]/80">
      {/* Top bar */}
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 rounded-lg gradient-primary flex items-center justify-center neon-glow-purple">
              <Flame className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              PHOENIX <span className="text-[hsl(var(--accent))]">WIN</span>
            </span>
          </div>
        </div>

        {/* Free Bonus Button */}
        <button className="hidden md:flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-green-500/30">
          <Gift className="h-4 w-4" />
          Free Bonus
        </button>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="p-2 rounded-lg bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-white transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-white transition-colors">
            <MessageCircle className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-1 p-2 rounded-lg bg-[hsl(var(--card))] text-[hsl(var(--muted-foreground))] hover:text-white transition-colors">
            <Globe className="h-5 w-5" />
            <span className="text-sm">EN</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {/* Support */}
        <div className="hidden xl:flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
          <MessageCircle className="h-4 w-4" />
          <span>Support 24/7</span>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden sm:block rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-[hsl(var(--card))] transition-colors">
            Sign In
          </button>
          <button className="rounded-lg gradient-accent px-4 py-2 text-sm font-bold text-[hsl(var(--accent-foreground))] transition-all hover:opacity-90">
            Register
          </button>
          <button
            className="lg:hidden p-2 rounded-lg bg-[hsl(var(--card))] text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="hidden lg:flex items-center gap-1 px-4 py-2 border-t border-[hsl(var(--border))] overflow-x-auto scrollbar-hide">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              item.active
                ? "bg-[hsl(var(--primary))] text-white"
                : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--card))] hover:text-white"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-[hsl(var(--primary))] text-white"
                    : "text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--card))] hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="p-4 border-t border-[hsl(var(--border))] flex gap-2">
            <button className="flex-1 rounded-lg px-4 py-3 text-sm font-medium text-white bg-[hsl(var(--card))] hover:bg-[hsl(var(--card-hover))] transition-colors">
              Sign In
            </button>
            <button className="flex-1 rounded-lg gradient-accent px-4 py-3 text-sm font-bold text-[hsl(var(--accent-foreground))]">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
