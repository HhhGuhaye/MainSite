// Mock game data for the gaming platform

export interface Game {
  id: number;
  name: string;
  provider: string;
  image: string;
  category: string;
}

const gameImages = [
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&q=80",
  "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&q=80",
  "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=300&q=80",
  "https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=300&q=80",
  "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=300&q=80",
  "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?w=300&q=80",
];

const providers = [
  "Pragmatic Play",
  "Evolution",
  "NetEnt",
  "Play'n GO",
  "Spribe",
  "Red Tiger",
  "Hacksaw",
  "NoLimit",
];

function getRandomImage() {
  return gameImages[Math.floor(Math.random() * gameImages.length)];
}

function getRandomProvider() {
  return providers[Math.floor(Math.random() * providers.length)];
}

export const popularGames: Game[] = [
  { id: 1, name: "Gates of Olympus", provider: "Pragmatic Play", image: getRandomImage(), category: "slots" },
  { id: 2, name: "Sugar Rush", provider: "Pragmatic Play", image: getRandomImage(), category: "slots" },
  { id: 3, name: "Gates of Olympus 1000", provider: "Pragmatic Play", image: getRandomImage(), category: "slots" },
  { id: 4, name: "Sweet Bonanza", provider: "Pragmatic Play", image: getRandomImage(), category: "slots" },
  { id: 5, name: "Aviator", provider: "Spribe", image: getRandomImage(), category: "quick" },
  { id: 6, name: "Megaways", provider: "Red Tiger", image: getRandomImage(), category: "slots" },
  { id: 7, name: "Wild West Gold", provider: "Pragmatic Play", image: getRandomImage(), category: "slots" },
  { id: 8, name: "Big Bass Bonanza", provider: "Pragmatic Play", image: getRandomImage(), category: "slots" },
];

export const newGames: Game[] = [
  { id: 9, name: "Lucky Jet", provider: "Gaming Corp", image: getRandomImage(), category: "quick" },
  { id: 10, name: "Rocket Queen", provider: "Hacksaw", image: getRandomImage(), category: "slots" },
  { id: 11, name: "Speed-n-Cash", provider: "Spribe", image: getRandomImage(), category: "quick" },
  { id: 12, name: "Crash X", provider: "NoLimit", image: getRandomImage(), category: "quick" },
  { id: 13, name: "Coinflip", provider: "Spribe", image: getRandomImage(), category: "quick" },
  { id: 14, name: "Royal Mines", provider: "Gaming Corp", image: getRandomImage(), category: "quick" },
];

export const liveCasinoGames: Game[] = [
  { id: 15, name: "Lightning Roulette", provider: "Evolution", image: getRandomImage(), category: "live" },
  { id: 16, name: "Roulette Live", provider: "Evolution", image: getRandomImage(), category: "live" },
  { id: 17, name: "Blackjack Lobby", provider: "Evolution", image: getRandomImage(), category: "live" },
  { id: 18, name: "Baccarat", provider: "Evolution", image: getRandomImage(), category: "live" },
  { id: 19, name: "Monopoly Live", provider: "Evolution", image: getRandomImage(), category: "live" },
  { id: 20, name: "Crazy Time", provider: "Evolution", image: getRandomImage(), category: "live" },
];

export const quickGames: Game[] = [
  { id: 21, name: "JetX", provider: "Spribe", image: getRandomImage(), category: "quick" },
  { id: 22, name: "Aviator", provider: "Spribe", image: getRandomImage(), category: "quick" },
  { id: 23, name: "Mines", provider: "Spribe", image: getRandomImage(), category: "quick" },
  { id: 24, name: "Plinko", provider: "Spribe", image: getRandomImage(), category: "quick" },
  { id: 25, name: "Crash", provider: "Gaming Corp", image: getRandomImage(), category: "quick" },
  { id: 26, name: "Dice", provider: "Gaming Corp", image: getRandomImage(), category: "quick" },
];
