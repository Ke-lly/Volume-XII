"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwenty() {
  const script = [
    { text: "Vinte anos. Duas décadas inteiras deixando o mundo mais bonito." },
    { text: "Olhar para trás e perceber que aquela menininha do bolo de confetes cresceu voando." },
    { speaker: "Tempo", text: "Vinte anos de sorrisos, superações e muitas histórias para contar." },
    { text: "Uma nova década começava, e a nossa Dunana brilhava mais forte do que nunca." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XX"
        title="Duas Décadas de História"
        subtitle="Celebrando vinte anos de uma existência iluminada."
        image="/images/20.jpg"
        script={script}
        endingMessage="Você mudou a nossa vida para melhor ao longo desses 20 anos."
        prevUrl="/story/chapter-19"
        nextUrl="/story/chapter-21"
      />
    </div>
  );
}