"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5ebe0] flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* Glows (Luzes de fundo) */}
      <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-[#d4c1a7]/10 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Conteúdo Principal */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="text-center relative z-10 p-10 backdrop-blur-sm rounded-3xl border border-white/5 bg-white/5"
      >
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="uppercase tracking-[0.4em] text-xs text-[#d4c1a7] mb-6"
        >
          Nível 22 Desbloqueado
        </motion.p>

        {/* Título com gradiente de cor luxuoso */}
        <h1 className="text-6xl md:text-8xl font-serif bg-clip-text text-transparent bg-gradient-to-b from-[#f5ebe0] to-[#8c6a5d] drop-shadow-2xl">
          Volume XXII
        </h1>

        <p className="mt-8 text-lg md:text-xl max-w-lg text-[#cfc2b4] leading-relaxed italic mx-auto">
          “Algumas memórias nunca se apagam... elas apenas esperam para serem lembradas.”
        </p>

        <Link
          href="/archive"
          className="mt-12 inline-block border border-[#d4c1a7]/30 px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-[#d4c1a7] hover:text-[#0f0f0f] transition-all duration-700 shadow-[0_0_20px_rgba(212,193,167,0.1)]"
        >
          Entrar no Arquivo
        </Link>
      </motion.section>
    </main>
  );
}