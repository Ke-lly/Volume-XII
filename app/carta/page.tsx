"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LetterPage() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const hasCompleted = localStorage.getItem("storyCompleted");
    
    if (hasCompleted === "true") {
      setIsUnlocked(true);
    } else {
      router.push("/story/chapter-1");
    }
  }, [router]);

  if (!isUnlocked) return <div className="min-h-screen bg-[#0d0d0d]" />;

  return (
    // Removi o overflow-hidden da main para garantir que nada seja cortado
    <main className="min-h-screen bg-[#0d0d0d] text-[#f5ebe0] px-4 pt-28 pb-20 relative">
      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/10 blur-3xl rounded-full top-[-200px] left-[-200px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        // Aumentei o max-width para 4xl e adicionei margem automática
        className="w-full max-w-4xl mx-auto relative z-10"
      >
        <div className="bg-[#151515]/90 border border-[#2a2a2a] backdrop-blur-xl rounded-[40px] p-8 md:p-16 shadow-2xl">
          <p className="uppercase tracking-[0.4em] text-sm text-[#d4c1a7]">
            Carta Selada
          </p>

          {/* O h1 agora escala suavemente e tem 'break-words' para evitar cortes */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif break-words hyphens-auto mt-6 leading-tight">
            Para a protagonista desta história
          </h1>

          <div className="mt-12 space-y-8 text-[#d8cdc0] leading-relaxed text-lg md:text-xl">
            <p>
              Existem pessoas que passam pela vida.
              E existem pessoas que transformam a vida em algo mais bonito.
            </p>
            <p>
              Você sempre foi o tipo de pessoa que carrega luz nos detalhes:
              nas conversas, nos sonhos, nos livros acumulados,
              nos perfumes escolhidos com cuidado e nos pequenos momentos
              que acabam virando memórias eternas.
            </p>
            <p>
              O Volume XXII não é apenas sobre aniversário.
              É sobre celebrar tudo aquilo que faz você ser você.
            </p>
            <p>
              Cada capítulo daqui existe porque alguém achou que suas memórias
              mereciam ser guardadas como obras raras.
            </p>
            <p className="text-[#f5ebe0] font-serif text-2xl pt-8">
              Feliz aniversário ✨
            </p>
            <div className="mt-16 pt-8 border-t border-white/10 text-right">
              <p className="text-[#d4c1a7] italic">Com todo o meu amor,</p>
              <p className="text-xl font-serif mt-1">Kelly</p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}