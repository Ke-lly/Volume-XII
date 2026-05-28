"use client";

import ChapterTemplate from "@/components/vn/ChapterTemplate";
import { useEffect } from "react";

export default function ChapterTwentyTwo() {
  
  // Este useEffect salva que a jornada foi concluída assim que a página carrega
  useEffect(() => {
    localStorage.setItem("jornadaConcluida", "true");
  }, []);

  const script = [
    { text: "E finalmente chegamos aqui. Vinte e dois anos de Ana Carolina." },
    { text: "22 capítulos de uma história que orgulha todo mundo que tem a sorte de te acompanhar." },
    { speaker: "Universo", text: "O tempo correu, mas o seu sorriso continua com a mesmíssima luz do primeiro dia." },
    { text: "Obrigado por espalhar tanta cor, tantas caretas e tanto amor por onde você passa, Dunana." },
    { text: "Sua jornada está apenas começando. Agora, abra o último registro que preparei para você..." }
  ];

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <ChapterTemplate
        chapterNumber="XXII"
        title="O Selo dos 22 Anos"
        subtitle="O ápice da sua jornada. Parabéns pelo seu dia, Carol!"
        image="/images/22.jpg"
        script={script}
        endingMessage="Eu tenho um orgulho infinito da mulher que você se tornou."
        prevUrl="/story/chapter-21"
        nextUrl="/carta" 
        isLast={true}
      />
    </div>
  );
}