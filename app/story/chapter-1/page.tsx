"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterOne() {
  const script = [
    {
      text: "Antes mesmo de entender o mundo, você já fazia tudo parecer mais bonito."
    },

    {
      text: "Um pequeno brilho começava silenciosamente a sua própria história."
    },

    {
      speaker: "Narrador",
      text: "Os primeiros passos ainda eram distantes, mas a luz já existia desde o começo."
    },

    {
      text: "Entre risos inocentes, brinquedos espalhados e olhares curiosos, nascia alguém capaz de transformar memórias em eternidade."
    }
  ];

  return (
    <ChapterTemplate
      chapterNumber="I"
      title="A Primeira Luz"
      subtitle="O começo silencioso de uma história inesquecível."
      image="/images/1.JPG"
      script={script}
      endingMessage="Toda grande história começa com uma pequena luz."
      nextUrl="/story/chapter-2"
    />
  );
}