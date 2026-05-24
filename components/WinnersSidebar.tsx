"use client";

import { TrendingUp, Crown } from "lucide-react";

const recentWinners = [
  { user: "A***4", game: "Gates of Olympus", amount: "231,000", currency: "pts" },
  { user: "L***9", game: "Sweet Bonanza", amount: "157,500", currency: "pts" },
  { user: "M***2", game: "Aviator", amount: "98,700", currency: "pts" },
  { user: "A***8", game: "Lightning Roulette", amount: "75,600", currency: "pts" },
  { user: "K***7", game: "Gates of Olympus 1000", amount: "63,300", currency: "pts" },
  { user: "S***5", game: "Sugar Rush", amount: "48,900", currency: "pts" },
];

const topWinners = [
  { user: "V***9", game: "Gates of Olympus", amount: "2,456,000", rank: 1 },
  { user: "P***4", game: "Megaways", amount: "1,982,000", rank: 2 },
  { user: "M***8", game: "Sweet Bonanza", amount: "1,567,000", rank: 3 },
  { user: "A***2", game: "Gates of Olympus 1000", amount: "1,234,000", rank: 4 },
  { user: "K***7", game: "Wild West Gold", amount: "987,000", rank: 5 },
];

export function WinnersSidebar() {
  return (
    <aside className="hidden xl:block w-80 shrink-0 space-y-4">
      {/* Recent Winners */}
      <div className="rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] overflow-hidden">
        <div className="flex items-center gap-2 p-4 border-b border-[hsl(var(--border))]">
          <TrendingUp className="w-4 h-4 text-[hsl(var(--success))]" />
          <h3 className="font-semibold text-white text-sm">Recent Winners</h3>
        </div>
        <div className="p-2">
          {recentWinners.map((winner, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[hsl(var(--secondary))] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[hsl(var(--secondary))] flex items-center justify-center">
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">
                    {winner.user.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-medium text-white">{winner.user}</p>
                  <p className="text-[10px] text-[hsl(var(--muted-foreground))]">
                    {winner.game}
                  </p>
                </div>
              </div>
              <p className="text-xs font-bold text-[hsl(var(--success))]">
                {winner.amount} <span className="text-[10px] font-normal">{winner.currency}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-[hsl(var(--border))]">
          <button className="w-full rounded-lg bg-[hsl(var(--success))] px-4 py-2 text-xs font-semibold text-white hover:bg-[hsl(var(--success))]/90 transition-colors">
            All Winners
          </button>
        </div>
      </div>

      {/* Top Winners */}
      <div className="rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] overflow-hidden">
        <div className="flex items-center gap-2 p-4 border-b border-[hsl(var(--border))]">
          <Crown className="w-4 h-4 text-[hsl(var(--accent))]" />
          <h3 className="font-semibold text-white text-sm">Top Winners</h3>
        </div>
        <div className="p-2">
          {topWinners.map((winner) => (
            <div
              key={winner.rank}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-[hsl(var(--secondary))] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    winner.rank === 1
                      ? "bg-yellow-500 text-yellow-900"
                      : winner.rank === 2
                      ? "bg-gray-400 text-gray-900"
                      : winner.rank === 3
                      ? "bg-orange-600 text-orange-100"
                      : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
                  }`}
                >
                  {winner.rank}
                </div>
                <div>
                  <p className="text-xs font-medium text-white">{winner.user}</p>
                  <p className="text-[10px] text-[hsl(var(--muted-foreground))]">
                    {winner.game}
                  </p>
                </div>
              </div>
              <p className="text-xs font-bold text-[hsl(var(--accent))]">
                {winner.amount}
              </p>
            </div>
          ))}
        </div>
        <div className="p-3 border-t border-[hsl(var(--border))]">
          <button className="w-full rounded-lg bg-[hsl(var(--accent))] px-4 py-2 text-xs font-bold text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))]/90 transition-colors">
            View Top Winners
          </button>
        </div>
      </div>

      {/* Mobile App CTA */}
      <div className="rounded-xl bg-gradient-to-br from-[hsl(var(--neon-purple))] to-[hsl(var(--neon-blue))] p-4 text-white">
        <h3 className="font-bold mb-1">Mobile App</h3>
        <p className="text-xs text-white/80 mb-3">
          Play your favorite games anywhere, anytime
        </p>
        <button className="w-full rounded-lg bg-white/20 backdrop-blur px-4 py-2 text-xs font-semibold hover:bg-white/30 transition-colors">
          Download
        </button>
      </div>
    </aside>
  );
}
