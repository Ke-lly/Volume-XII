"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterNine() {
  const script = [
    { text: "Aos nove anos, um cantinho no quarto virava um universo particular." },
    { text: "Você começava a guardar seus próprios pensamentos, gostos e pequenas manias." },
    { speaker: "Mundinho", text: "Escondendo risadas e criando um espaço que era só seu." },
    { text: "A Dunana estava deixando de ser uma bebê e construindo a personalidade incrível que tem hoje." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="IX"
        title="O Diário Invisível"
        subtitle="Quando os pensamentos ganham asas e um espaço todo seu."
        image="/images/9.jpeg"
        script={script}
        endingMessage="Seu mundo interno sempre foi um lugar fascinante, Carol."
        prevUrl="/story/chapter-8"
        nextUrl="/story/chapter-10"
      />
    </div>
  );
}