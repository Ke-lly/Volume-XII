"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";

export default function ChapterFive() {
  const script = [
    { text: "Aos cinco anos, qualquer lençol esticado na sala virava um castelo inexpugnável." },
    { text: "O quintal virava uma floresta mágica e os seus brinquedos ganhavam vida própria." },
    { speaker: "Infância", text: "O tempo parecia passar mais devagar quando você estava brincando." },
    { text: "A Dunana comandava reinos inteiros feitos puramente de sonhos e gargalhadas sinceras." }
  ];

  return (
    <ChapterTemplate
      chapterNumber="V"
      title="Pequenos Grandes Reinos"
      subtitle="A época em que a realidade se dobrava diante da sua imaginação."
      image="/images/5.jpeg"
      script={script}
      endingMessage="Você sempre soube governar o seu próprio mundinho com alegria."
      prevUrl="/story/chapter-4"
      nextUrl="/story/chapter-6"
    />
  );
}