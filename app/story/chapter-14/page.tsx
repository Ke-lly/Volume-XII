"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFourteen() {
  const script = [
    { text: "Aos quatorze anos, as emoções pareciam ter a força de um tsunami." },
    { text: "Pequenos problemas pareciam o fim do mundo, e as risadas vinham do nada." },
    { speaker: "Coração", text: "Sentir tudo intensamente, sem filtros e sem barreiras." },
    { text: "O que naquela época parecia uma grande tempestade, hoje virou uma lembrança para rir." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XIV"
        title="Tempestades em Copo D'água"
        subtitle="Quando o coração é jovem e tudo é vivido na máxima intensidade."
        image="/images/14.jpg"
        script={script}
        endingMessage="Você passou pelas tempestades e aprendeu a dançar na chuva."
        prevUrl="/story/chapter-13"
        nextUrl="/story/chapter-15"
      />
    </div>
  );
}