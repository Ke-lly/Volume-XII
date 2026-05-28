import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import MusicPlayer from "@/components/layout/MusicPlayer";
import GlowBackground from "@/components/effects/GlowBackground";
import GrainOverlay from "@/components/effects/GrainOverlay";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Volume XXII",
  description: "Uma coleção de memórias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0f0f0f] text-[#f5ebe0] overflow-x-hidden">
        <Navbar />
        <MusicPlayer />
        <GlowBackground />
        <GrainOverlay />

        <main className="pt-24 md:pt-32 min-h-screen px-4">
  <PageTransition>
    {children}
  </PageTransition>
</main>
      </body>
    </html>
  );
}