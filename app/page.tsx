"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f5ebe0] flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* 1. Camada de Fundo Etéreo (Efeito de poeira/brilho constante) */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d4c1a7 0.5px, transparent 0.5px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Glows sutis para profundidade */}
      <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/10 blur-[120px] rounded-full top-[-100px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#4a3f36]/10 blur-[120px] rounded-full bottom-[-100px] right-[-200px]" />

      {/* Conteúdo principal */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-center relative z-10"
      >
        <p className="uppercase tracking-[0.4em] text-sm text-[#d4c1a7] font-light">
          Nível 22 Desbloqueado
        </p>

        <h1 className="text-7xl md:text-8xl mt-6 font-serif">
          Volume XXII
        </h1>

        <p className="mt-8 text-lg max-w-xl text-[#cfc2b4] leading-relaxed italic opacity-90">
          “Algumas memórias nunca se apagam... elas apenas esperam para serem lembradas.”
        </p>

        <Link
          href="/archive"
          className="mt-12 inline-block border border-[#d4c1a7]/50 px-10 py-4 rounded-full hover:bg-[#d4c1a7] hover:text-[#0a0a0a] transition-all duration-700 tracking-widest uppercase text-sm"
        >
          Entrar no Arquivo
        </Link>
      </motion.section>
    </main>
  );
}