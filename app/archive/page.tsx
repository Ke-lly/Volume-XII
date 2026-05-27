"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Lista com os títulos e descrições para cada um dos 22 capítulos
const chaptersData = [
  { id: 1, title: "Era das Estrelas", desc: "Onde tudo começou entre risadas e sonhos." },
  { id: 2, title: "Crônicas da Protagonista", desc: "Momentos dignos de uma personagem principal." },
  { id: 3, title: "O Doce Caos de Ser Criança", desc: "Confetes, bochechas sujas e pura espontaneidade." },
  { id: 4, title: "O Mundo dos Porquês", desc: "Quando a curiosidade expandiu o tamanho da casa." },
  { id: 5, title: "Pequenos Grandes Reinos", desc: "A realidade se dobrando à sua imaginação." },
  { id: 6, title: "A Mochila Maior que as Costas", desc: "O primeiro dia de aula e novos começos." },
  { id: 7, title: "Janelinhas e Sorrisos Banguelas", desc: "A fase doce de perder os dentes de leite." },
  { id: 8, title: "Segredos de Parquinho", desc: "Tardes longas e missões de ser feliz." },
  { id: 9, title: "O Diário Invisível", desc: "Quando os pensamentos ganham um espaço seu." },
  { id: 10, title: "Uma Década de Brilho", desc: "O primeiro marco de dois dígitos na idade." },
  { id: 11, title: "Fones de Ouvido e Sintonia", desc: "O mundo ganhando sua própria trilha sonora." },
  { id: 12, title: "A Mudança de Órbita", desc: "O início da transição para a adolescência." },
  { id: 13, title: "O Espelho e o Mundo", desc: "A fase única de descobrir seu próprio estilo." },
  { id: 14, title: "Tempestades em Copo D'água", desc: "Viver tudo com a máxima intensidade." },
  { id: 15, title: "Quinze Primaveras", desc: "O desabrochar da sua fase debutante." },
  { id: 16, title: "O Horizonte Logo Ali", desc: "Quando os planos começam a tomar forma." },
  { id: 17, title: "A Pressão do Amanhã", desc: "A reta final da escola e o preparo para voar." },
  { id: 18, title: "A Chave do Universo", desc: "A chegada dos dezoito e a independência." },
  { id: 19, title: "Riscos e Rabiscos", desc: "Aprendendo entre erros e acertos no futuro." },
  { id: 20, title: "Duas Décadas de História", desc: "Vinte anos de uma vida iluminada." },
  { id: 21, title: "A Véspera do Agora", desc: "O ano que pavimentou o caminho para hoje." },
  { id: 22, title: "O Selo dos 22 Anos", desc: "O ápice da jornada e o presente especial." },
];

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-[#111111] text-[#f5ebe0] px-8 py-20 relative overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute w-[500px] h-[500px] bg-[#8c6a5d]/10 blur-3xl rounded-full top-[-200px] right-[-100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl mx-auto"
      >
        <Link href="/" className="text-[#d4c1a7] hover:text-white transition">
          ← Voltar para a Home
        </Link>

        <h1 className="text-6xl mt-10 font-serif">O Arquivo</h1>
        <p className="mt-6 text-[#cfc2b4] text-lg">
          Fragmentos de memórias cuidadosamente preservados.
        </p>

        {/* Grid de memórias (os 22 cards) */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {chaptersData.map((chapter) => (
            <Link key={chapter.id} href={`/story/chapter-${chapter.id}`}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="border border-[#2a2a2a] bg-[#171717] rounded-3xl p-8 h-full cursor-pointer hover:border-[#d4c1a7]/50 transition-all"
              >
                <p className="uppercase text-sm tracking-[0.3em] text-[#d4c1a7]">
                  Capítulo {chapter.id}
                </p>
                <h2 className="text-3xl mt-4 font-serif">{chapter.title}</h2>
                <p className="mt-4 text-[#cfc2b4]">{chapter.desc}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </main>
  );
}