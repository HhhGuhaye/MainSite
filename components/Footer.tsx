"use client";

import {
  Flame,
  Mail,
  MessageCircle,
  Send,
  Instagram,
  Twitter,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Home", href: "#" },
    { label: "Live", href: "#" },
    { label: "Sports", href: "#" },
    { label: "Casino", href: "#" },
    { label: "Live Games", href: "#" },
    { label: "Quick Games", href: "#" },
    { label: "Tournaments", href: "#" },
  ],
  information: [
    { label: "About Us", href: "#" },
    { label: "Contacts", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Responsible Gaming", href: "#" },
    { label: "Bonuses & Promotions", href: "#" },
    { label: "Affiliate Program", href: "#" },
  ],
  support: [
    { label: "Support 24/7", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "Email", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Payment Methods", href: "#" },
    { label: "Withdrawals", href: "#" },
  ],
};

const paymentMethods = ["VISA", "MC", "MIR", "GPay", "APay", "Skrill", "BTC"];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[hsl(var(--border))] bg-[hsl(var(--card))]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center neon-glow-purple">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                PHOENIX <span className="text-[hsl(var(--accent))]">WIN</span>
              </span>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-sm mb-4">
              Phoenix Win is a premium gaming entertainment platform. Play responsibly.
              Must be 18+ to participate.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[hsl(var(--secondary))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[hsl(var(--secondary))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[hsl(var(--secondary))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[hsl(var(--secondary))] flex items-center justify-center text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="py-6 border-t border-[hsl(var(--border))]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="px-4 py-2 rounded-lg bg-[hsl(var(--secondary))] text-xs font-medium text-[hsl(var(--muted-foreground))]"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[hsl(var(--border))] text-center">
          <p className="text-xs text-[hsl(var(--muted-foreground))]">
            &copy; {new Date().getFullYear()} Phoenix Win. All rights reserved. 18+
          </p>
        </div>
      </div>
    </footer>
  );
}
