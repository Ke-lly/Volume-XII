"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFour() {
  const script = [
    { text: "De repente, os silêncios deram lugar a um milhão de perguntas." },
    { speaker: "Ana Carolina", text: "Por que o céu é azul? Para onde o sol vai dormir?" },
    { text: "A sua cabecinha criava teorias mágicas para explicar as coisas mais simples do dia a dia." },
    { text: "O mundo tentava te dar respostas, mas a sua imaginação era muito mais divertida." }
  ];

  return (
    <ChapterTemplate
      chapterNumber="IV"
      title="O Mundo dos Porquês"
      subtitle="Quando a curiosidade da Carol expandiu o tamanho da casa."
      image="/images/4.jpeg"
      script={script}
      endingMessage="Nunca perca essa sua mania de querer entender o brilho do mundo."
      prevUrl="/story/chapter-3"
      nextUrl="/story/chapter-5"
    />
  );
}