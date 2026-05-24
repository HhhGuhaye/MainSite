"use client";

import { Trophy, Clock, Users, Gift } from "lucide-react";

interface Tournament {
  id: number;
  title: string;
  prize: string;
  endsIn: string;
  participants: number;
  image: string;
}

const tournaments: Tournament[] = [
  {
    id: 1,
    title: "Weekly Cashback",
    prize: "5,000,000",
    endsIn: "02d 14:30:45",
    participants: 1247,
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80",
  },
  {
    id: 2,
    title: "Drops & Wins",
    prize: "10,000,000",
    endsIn: "05d 08:15:22",
    participants: 3891,
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&q=80",
  },
  {
    id: 3,
    title: "Slots Race",
    prize: "3,000,000",
    endsIn: "01d 22:45:10",
    participants: 892,
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&q=80",
  },
  {
    id: 4,
    title: "Live Casino Battle",
    prize: "2,000,000",
    endsIn: "03d 11:20:33",
    participants: 567,
    image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=400&q=80",
  },
];

export function TournamentsSection() {
  return (
    <section>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[hsl(var(--accent))] flex items-center justify-center">
            <Trophy className="w-4 h-4 text-[hsl(var(--accent-foreground))]" />
          </div>
          <h2 className="text-lg md:text-xl font-bold text-white">Tournaments</h2>
        </div>
        <button className="rounded-lg bg-[hsl(var(--primary))] px-4 py-2 text-xs font-semibold text-white hover:bg-[hsl(var(--primary))]/90 transition-colors">
          All Tournaments
        </button>
      </div>

      {/* Tournament Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </section>
  );
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] card-hover">
      {/* Image */}
      <div className="relative h-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url(${tournament.image})`,
            backgroundColor: "hsl(var(--secondary))",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 -mt-8 relative z-10">
        <h3 className="font-semibold text-white mb-3">{tournament.title}</h3>

        {/* Prize Pool */}
        <div className="flex items-center gap-2 mb-3">
          <Gift className="w-4 h-4 text-[hsl(var(--accent))]" />
          <div>
            <p className="text-xs text-[hsl(var(--muted-foreground))]">Prize Pool</p>
            <p className="text-lg font-bold text-[hsl(var(--accent))]">
              {tournament.prize} <span className="text-xs">pts</span>
            </p>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-2 text-xs text-[hsl(var(--muted-foreground))]">
          <Clock className="w-3 h-3" />
          <span>Ends in: {tournament.endsIn}</span>
        </div>
      </div>
    </div>
  );
}
