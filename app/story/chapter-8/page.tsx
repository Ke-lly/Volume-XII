"use client";

import ChapterTemplate from "../../../components/vn/ChapterTemplate";

export default function ChapterEight() {
  const script = [
    { text: "Aos oito anos, as tardes pareciam durar uma eternidade inteira." },
    { text: "Era a época dos segredos sussurrados no parquinho e dos planos infalíveis." },
    { speaker: "Ana Carolina", text: "Brincar até o sol sumir e a mãe chamar para entrar." },
    { text: "A Carol colecionava joelhos ralados e memórias douradas que o tempo nunca conseguiria apagar." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="VIII"
        title="Segredos de Parquinho"
        subtitle="Quando o relógio corria devagar e a única missão era ser feliz."
        image="/images/8.jpg"
        script={script}
        endingMessage="Aqueles dias de sol deixaram marcas lindas na sua história."
        prevUrl="/story/chapter-7"
        nextUrl="/story/chapter-9"
      />
    </div>
  );
}