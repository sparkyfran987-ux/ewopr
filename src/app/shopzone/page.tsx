"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Ticket } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const items: { nombre: string; descripcion: string; color: string; inicial: string }[] = [];

export default function ShopZonePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mb-4 flex items-center gap-3">
        <ShoppingBag className="text-gold" size={22} />
        <span className="text-xs font-black uppercase tracking-[0.4em] text-gold">Official Merch</span>
      </div>
      <PageHero
        kicker="Tienda oficial"
        title="Shop"
        highlight="Zone"
        subtitle="Mercancía original de EWO. Solo en las mesas oficiales de cada cartelera."
      />

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="relative mb-12">
        <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-2xl border-l-8 border-gold bg-zinc-900/60 p-8 backdrop-blur-xl md:flex-row md:p-10">
          <div className="rounded-sm bg-gold p-5 text-black">
            <Ticket size={48} strokeWidth={3} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-2 font-display text-4xl text-white">Venta exclusiva en eventos</h2>
            <p className="text-lg text-zinc-400">
              Nuestra mercancía original se vende únicamente en las mesas oficiales de cada cartelera. ¡No aceptes imitaciones!
            </p>
          </div>
          <Link
            href="/eventos"
            className="whitespace-nowrap bg-white px-8 py-4 font-black uppercase tracking-tight text-black transition hover:bg-gold"
          >
            Ver carteleras
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.article
            key={item.nombre}
            whileHover={{ y: -8 }}
            className="group relative flex h-80 flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-900/30 transition hover:border-gold/50"
          >
            <div className={`relative flex h-1/2 items-center justify-center bg-gradient-to-br ${item.color} to-black`}>
              <span className="select-none text-8xl font-black italic text-white/5 transition duration-700 group-hover:scale-110 group-hover:text-gold/10">
                {item.inicial}
              </span>
            </div>
            <div className="flex h-1/2 flex-col justify-between bg-black p-6">
              <div>
                <h3 className="mb-2 font-display text-2xl text-white group-hover:text-gold">{item.nombre}</h3>
                <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">{item.descripcion}</p>
              </div>
              <div className="h-1 w-8 bg-gold/30 transition-all duration-500 group-hover:w-full" />
            </div>
            <div className="absolute top-2 right-2 font-mono text-[8px] uppercase tracking-widest text-zinc-700">
              EWO-REF-00{index + 1}
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}