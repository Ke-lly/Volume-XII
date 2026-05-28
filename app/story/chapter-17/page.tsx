"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSeventeen() {
  const script = [
    { text: "Dezessete anos. O ano da correria, dos estudos acumulados e do terceirão." },
    { text: "A pressão das escolhas, a ansiedade das provas e a despedida do colégio." },
    { speaker: "Futuro", text: "A contagem regressiva para a vida adulta de verdade havia começado." },
    { text: "Foi um ano intenso, mas a Dunana provou a todos (e a si mesma) a força que carrega." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XVII"
        title="A Pressão do Amanhã"
        subtitle="A reta final da escola e a ansiedade boa de um recomeço."
        image="/images/17.jpg"
        script={script}
        endingMessage="Você superou cada teste e se preparou para o grande salto."
        prevUrl="/story/chapter-16"
        nextUrl="/story/chapter-18"
      />
    </div>
  );
}