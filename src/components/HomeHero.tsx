"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-[10px] font-black uppercase tracking-[0.32em] text-gold">
        <span className="live-dot h-2 w-2 rounded-full bg-gold" />
        Tu alternativa real
      </p>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-7xl leading-[0.85] text-white sm:text-8xl md:text-[9rem]"
      >
        EWO
        <span className="block text-gold">Puerto Rico</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="mt-6 max-w-xl text-base text-zinc-300 sm:text-lg"
      >
        Eventos en vivo, programas en TeleOnce y YouTube, y el roster más caliente de la isla.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <Link
          href="/eventos"
          className="bg-gold px-10 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-white"
        >
          Ver eventos
        </Link>
      </motion.div>
    </section>
  );
}
