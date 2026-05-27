"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterEleven() {
  const script = [
    { text: "Aos onze anos, a trilha sonora da sua vida começou a mudar." },
    { text: "Surgiram as primeiras músicas favoritas tocadas no talo e as cantorias no quarto." },
    { speaker: "Carol", text: "Decorando letras inteiras e descobrindo novos ritmos." },
    { text: "O mundo exterior podia estar barulhento, mas nos seus fones tudo entrava em perfeita sintonia." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XI"
        title="Fones de Ouvido e Sintonia"
        subtitle="Quando o mundo ganha uma trilha sonora escolhida por você."
        image="/images/11.jpeg"
        script={script}
        endingMessage="Sua vida sempre teve um ritmo lindo de se acompanhar."
        prevUrl="/story/chapter-10"
        nextUrl="/story/chapter-12"
      />
    </div>
  );
}