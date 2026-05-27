"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterNineteen() {
  const script = [
    { text: "Aos dezenove anos, a faculdade, o trabalho ou os novos projetos ganham força." },
    { text: "A vida adulta se mostra uma tela em branco cheia de riscos e rabiscos." },
    { speaker: "Carol", text: "Aprender que errar faz parte do processo de se tornar quem somos." },
    { text: "Cada obstáculo superado nesse ano foi um tijolo na construção da mulher incrível que você é." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XIX"
        title="Riscos e Rabiscos"
        subtitle="Entre erros e acertos, desenhando os contornos do próprio futuro."
        image="/images/19.jpeg"
        script={script}
        endingMessage="A sua determinação começou a dar os frutos mais bonitos."
        prevUrl="/story/chapter-18"
        nextUrl="/story/chapter-20"
      />
    </div>
  );
}