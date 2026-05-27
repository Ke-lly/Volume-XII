"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwentyOne() {
  const script = [
    { text: "Vinte e um anos. O ano que passou recentemente num piscar de olhos." },
    { text: "Um tempo de amadurecimento silencioso, escolhas maduras e consolidação de sonhos." },
    { speaker: "Ana Carolina", text: "Entender o próprio valor e olhar para o futuro sem medo." },
    { text: "A Carol se preparava, conscientemente ou não, para o capítulo mais especial de todos." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XXI"
        title="A Véspera do Agora"
        subtitle="O ano que pavimentou o caminho para o seu grande dia de hoje."
        image="/images/21.jpeg"
        script={script}
        endingMessage="Tudo o que você viveu até aqui te trouxe pronta para o presente."
        prevUrl="/story/chapter-20"
        nextUrl="/story/chapter-22"
      />
    </div>
  );
}