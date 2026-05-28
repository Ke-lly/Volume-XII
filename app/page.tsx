"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5ebe0] flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* 1. FUNDO COMPLETO: Estrelas + Ondas + Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Chuva de Estrelas (Mais ágil e constante) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            initial={{ opacity: 0, x: Math.random() * 100 + "vw", y: -10 }}
            animate={{ opacity: [0, 1, 0], y: "110vh" }}
            transition={{ 
              duration: 3 + Math.random() * 3, // Duração mais curta: cai mais rápido
              repeat: Infinity, 
              delay: Math.random() * 3,        // Delay reduzido: aparecem mais cedo
              ease: "linear"
            }}
          />
        ))}

        {/* Glow Superior Pulsante */}
        <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/20 blur-[100px] rounded-full -top-[100px] -left-[100px] animate-pulse" />
        
        {/* Glow Inferior Vibrante */}
        <div className="absolute w-[500px] h-[500px] bg-[#d4c1a7]/15 blur-[100px] rounded-full -bottom-[100px] -right-[100px] animate-pulse delay-1000" />
        
        {/* Onda de Luz (O feixe de glamour) */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4c1a7]/5 to-transparent skew-x-[-20deg]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 2. CONTEÚDO (Intacto) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="text-center relative z-10"
      >
        <p className="uppercase tracking-[0.4em] text-sm text-[#d4c1a7]">
          Nível 22 Desbloqueado
        </p>

        <h1 className="text-7xl md:text-8xl mt-6 font-serif">
          Volume XXII
        </h1>

        <p className="mt-6 text-lg max-w-xl text-[#cfc2b4] leading-relaxed">
          “Algumas memórias nunca se apagam... elas apenas esperam para serem lembradas.”
        </p>

        <Link
          href="/archive"
          className="mt-10 inline-block border border-[#d4c1a7] px-8 py-3 rounded-full hover:bg-[#f5ebe0] hover:text-black transition-all duration-500"
        >
          Entrar no Arquivo
        </Link>
      </motion.section>
    </main>
  );
}