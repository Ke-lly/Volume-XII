"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterEighteen() {
  const script = [
    { text: "Dezoito anos. Oficialmente a dona das suas próprias escolhas perante o mundo." },
    { text: "A liberdade bateu na porta trazendo a chave de novas responsabilidades." },
    { speaker: "Liberdade", text: "Mais do que um número, o início de uma nova independência." },
    { text: "A Carol começou a traçar seus próprios caminhos, com a cabeça erguida e o coração pronto." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XVIII"
        title="A Chave do Universo"
        subtitle="A chegada dos dezoito anos e o passaporte para a vida adulta."
        image="/images/18.JPG"
        script={script}
        endingMessage="O mundo se tornou oficialmente o seu parquinho."
        prevUrl="/story/chapter-17"
        nextUrl="/story/chapter-19"
      />
    </div>
  );
}