"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwo() {
  const script = [
    { text: "Existem pessoas que apenas passam pela vida." },
    { text: "E existem pessoas que fazem a vida parecer literatura." },
    { speaker: "Narrador", text: "Você transformou momentos comuns em memórias impossíveis de esquecer." }
  ];

  return (
    <ChapterTemplate
      chapterNumber="II"
      title="Crônicas da Protagonista"
      subtitle="Uma coleção de momentos dignos de uma personagem principal."
      image="/images/2.jpg"
      script={script}
      endingMessage="Que a sua energia de personagem principal nunca perca o brilho."
      prevUrl="/story/chapter-1"
      nextUrl="/story/chapter-3"
    />
  );
}