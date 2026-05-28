"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSixteen() {
  const script = [
    { text: "Aos dezesseis, o futuro deixa de ser algo distante e começa a acenar." },
    { text: "Surgem os primeiros planos sérios, as conversas sobre o que fazer da vida." },
    { speaker: "Ana Carolina", text: "Desejar voar alto, desbravar o mundo e alcançar os maiores objetivos." },
    { text: "A Carol começava a desenhar, com muita determinação, os caminhos que queria trilhar." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XVI"
        title="O Horizonte Logo Ali"
        subtitle="Quando os planos começam a ganhar formas e tamanhos reais."
        image="/images/16.JPG"
        script={script}
        endingMessage="Seus olhos sempre miraram as estrelas mais altas."
        prevUrl="/story/chapter-15"
        nextUrl="/story/chapter-17"
      />
    </div>
  );
}