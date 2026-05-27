"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5ebe0] flex items-center justify-center px-6 overflow-hidden relative">


      {/* Glow superior */}
      <div className="absolute w-[500px] h-[500px] bg-[#8c6a5d]/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />

      {/* Glow inferior */}
      <div className="absolute w-[400px] h-[400px] bg-[#d4c1a7]/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* Conteúdo principal */}
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