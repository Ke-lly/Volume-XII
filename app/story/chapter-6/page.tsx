"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterSix() {
  const script = [
    { text: "Aos seis anos, o parquinho do quintal ficou um pouquinho maior." },
    { text: "Chegou o dia de colocar uma mochila que parecia maior que as suas próprias costas." },
    { speaker: "Carol", text: "O cheiro de caderno novo, os lápis apontados e o frio na barriga." },
    { text: "A nossa Dunana estava crescendo e começando a escrever suas primeiras palavras reais no mundo." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="VI"
        title="A Mochila Maior que as Costas"
        subtitle="O primeiro dia de aula e o início de uma nova descoberta."
        image="/images/6.jpg"
        script={script}
        endingMessage="Seu caderno estava em branco, pronto para a história linda que você escreveria."
        prevUrl="/story/chapter-5"
        nextUrl="/story/chapter-7"
      />
    </div>
  );
}