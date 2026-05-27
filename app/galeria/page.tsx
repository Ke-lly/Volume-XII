"use client";

import { motion } from "framer-motion";

const photos = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-[#f5ebe0] px-8 pt-32 pb-20 overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#8c6a5d]/10 blur-3xl rounded-full top-[-200px] right-[-200px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="text-6xl font-serif">
            Galeria
          </h1>

          <p className="mt-6 text-[#cfc2b4] text-lg">
            Fragmentos de uma história cuidadosamente registrada.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {photos.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                y: -5,
              }}
              className="relative h-[420px] rounded-[10px] overflow-hidden border border-[#2a2a2a] bg-[#1a1a1a] p-3 shadow-xl transition-all"
            >

              {/* Placeholder enquanto não tem foto */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c] to-[#101010]" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">

                <div className="text-6xl opacity-40">
                  ✨
                </div>

                <p className="mt-6 text-[#d4c1a7] uppercase tracking-[0.3em] text-sm">
                  Memória {index + 1}
                </p>

                <p className="mt-4 text-[#cfc2b4]">
                  Espaço reservado para uma lembrança especial.
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </main>
  );
}