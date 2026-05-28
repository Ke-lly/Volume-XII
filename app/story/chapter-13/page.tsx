"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterThirteen() {
  const script = [
    { text: "Treze anos. A fase de passar horas testando estilos em frente ao espelho." },
    { text: "Músicas tristes no quarto, roupas favoritas e a busca por descobrir quem você queria ser." },
    { speaker: "Carol", text: "Criando sua própria identidade e escolhendo suas próprias verdades." },
    { text: "A Dunana estava se tornando a dona do seu próprio destino, passo a passo." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XIII"
        title="O Espelho e o Mundo"
        subtitle="A fase única de se descobrir e criar o seu próprio estilo."
        image="/images/13.JPG"
        script={script}
        endingMessage="Dentre todas as versões que você testou, a sua essência foi a mais linda."
        prevUrl="/story/chapter-12"
        nextUrl="/story/chapter-14"
      />
    </div>
  );
}