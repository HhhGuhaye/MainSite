import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Phoenix Win - Premium Gaming Platform",
  description: "Experience premium gaming with Phoenix Win. Play the best games, win big rewards.",
  keywords: ["gaming", "platform", "entertainment", "phoenix win"],
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-[hsl(222,47%,6%)]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
