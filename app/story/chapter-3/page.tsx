"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterThree() {
  const script = [
    { text: "Dizem que aos três anos a gente não se lembra de quase nada..." },
    { text: "Mas o mundo se lembra perfeitamente do furacão de alegria que você já era." },
    { speaker: "Memória", text: "O açúcar granulado no rosto, o bolo cheio de confetes coloridos." },
    { text: "E aquela mania linda de mostrar a língua para as fotos, desafiando a seriedade do mundo." },
    { text: "Desde pequena, você já mostrava que não veio para ser comum. Veio para colorir tudo." }
  ];

  return (
    <ChapterTemplate
      chapterNumber="III"
      title="O Doce Caos de Ser Criança"
      subtitle="Confetes, bochechas sujas de doce e pura espontaneidade."
      image="/images/3.jpeg"
      script={script}
      endingMessage="A sua essência vibrante nasceu bem aqui."
      prevUrl="/story/chapter-2"
      nextUrl="/story/chapter-4"
    />
  );
}