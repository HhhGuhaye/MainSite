"use client";

const providers = [
  { name: "Pragmatic Play", logo: "PP" },
  { name: "Evolution", logo: "EVO" },
  { name: "Hacksaw", logo: "HS" },
  { name: "Play'n GO", logo: "PNG" },
  { name: "Spribe", logo: "SPR" },
  { name: "NetEnt", logo: "NET" },
  { name: "Relax Gaming", logo: "RLX" },
  { name: "Big Time", logo: "BTG" },
  { name: "NoLimit", logo: "NLC" },
  { name: "Push Gaming", logo: "PSH" },
  { name: "Red Tiger", logo: "RT" },
  { name: "Yggdrasil", logo: "YGG" },
];

export function ProvidersSection() {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold text-white">Providers</h2>
        <button className="rounded-lg bg-[hsl(var(--primary))] px-4 py-2 text-xs font-semibold text-white hover:bg-[hsl(var(--primary))]/90 transition-colors">
          All Providers
        </button>
      </div>

      {/* Providers Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {providers.map((provider) => (
          <button
            key={provider.name}
            className="flex items-center justify-center rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] p-4 h-16 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--card-hover))] hover:text-white hover:border-[hsl(var(--primary))] transition-all"
          >
            <span className="font-bold text-sm">{provider.logo}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
