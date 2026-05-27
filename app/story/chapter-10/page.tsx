"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTen() {
  const script = [
    { text: "E então, o primeiro grande marco na contagem do tempo." },
    { text: "Completar dez anos parecia o passaporte oficial para o mundo dos mais velhos." },
    { speaker: "Universo", text: "O primeiro aniversário com dois dígitos na vela!" },
    { text: "Um misto de orgulho por já se sentir 'grande' e a doçura que nunca saía do seu olhar." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="X"
        title="Uma Década de Brilho"
        subtitle="O orgulho de dizer pela primeira vez: 'Eu já tenho 10 anos!'"
        image="/images/10.jpeg"
        script={script}
        endingMessage="Dez anos de um sorriso que continuava mudando a nossa rotina."
        prevUrl="/story/chapter-9"
        nextUrl="/story/chapter-11"
      />
    </div>
  );
}