"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterTwelve() {
  const script = [
    { text: "Doze anos. A infância começa a se despedir de mansinho." },
    { text: "O mundo ganha novas responsabilidades e as conversas ficam mais profundas." },
    { speaker: "Tempo", text: "Uma nova órbita começava para a nossa Carol." },
    { text: "Gostos antigos mudavam, mas aquele brilho curioso no olhar continuava exatamente o mesmo." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XII"
        title="A Mudança de Órbita"
        subtitle="O início da transição e os primeiros passos fora da infância."
        image="/images/12.jpeg"
        script={script}
        endingMessage="Crescer é desafiador, mas você sempre fez parecer poesia."
        prevUrl="/story/chapter-11"
        nextUrl="/story/chapter-13"
      />
    </div>
  );
}