"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  src: string;
}

export default function CinematicImage({ src }: Props) {
  return (
    <motion.div
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.8 }}
      className="relative w-full h-[700px] overflow-hidden rounded-[40px] mt-16"
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />
    </motion.div>
  );
}