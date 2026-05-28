"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFifteen() {
  const script = [
    { text: "E de repente, o ano dos sonhos e das grandes expectativas chegou." },
    { text: "Quinze anos. O amadurecimento desabrochando diante dos olhos de todos." },
    { speaker: "Universo", text: "A menina do bolo de confetes agora era uma debutante no palco da vida." },
    { text: "Um ciclo inesquecível que marcou a transição definitiva para uma linda jovem mulher." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XV"
        title="Quinze Primaveras"
        subtitle="Um dos marcos mais bonitos e celebrados da sua jornada."
        image="/images/15.JPG"
        script={script}
        endingMessage="O mundo inteiro se abriu para ver você florescer."
        prevUrl="/story/chapter-14"
        nextUrl="/story/chapter-16"
      />
    </div>
  );
}