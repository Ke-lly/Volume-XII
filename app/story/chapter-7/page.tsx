"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSeven() {
  const script = [
    { text: "Sete anos. A idade em que o sorriso ganha frestas e histórias." },
    { text: "Cada dente de leite que amolecia era um mistério e uma negociação com a fada do dente." },
    { speaker: "Tempo", text: "O sorriso banguela mais lindo que essa casa já viu." },
    { text: "Essas pequenas janelinhas eram o jeito do tempo dizer que a infância estava mudando de fase." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="VII"
        title="Janelinhas e Sorrisos Banguelas"
        subtitle="A fase doce onde perder um dente era o maior evento da semana."
        image="/images/7.jpeg"
        script={script}
        endingMessage="Mesmo com as janelinhas no sorriso, sua luz continuava intacta."
        prevUrl="/story/chapter-6"
        nextUrl="/story/chapter-8"
      />
    </div>
  );
}