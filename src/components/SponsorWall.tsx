"use client";

import Image from "next/image";
import Link from "next/link";
import { sponsors } from "@/data/sponsors";

type SponsorWallProps = {
  compact?: boolean;
};

export default function SponsorWall({ compact = false }: SponsorWallProps) {
  return (
    <section className={compact ? "py-12" : "py-20"}>
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.35em] text-gold">Alianza 2026</p>
          <h2 className="font-display text-4xl text-white sm:text-5xl">Partners Oficiales</h2>
        </div>
        <Link href="/contacto" className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-gold">
          Quiero auspiciar →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sponsors.map((marca) => (
          <article
            key={marca.nombre}
            className="group flex h-36 flex-col items-center justify-center rounded-lg border border-white/10 bg-zinc-900/40 px-4 py-5 backdrop-blur-sm transition hover:border-gold/60 hover:bg-zinc-900"
          >
            <div className="relative h-16 w-full">
              <Image src={marca.logo} alt={marca.nombre} fill className="object-contain" sizes="160px" />
            </div>
            <p className="mt-3 line-clamp-2 text-center text-[10px] font-bold uppercase tracking-wider text-zinc-500 group-hover:text-gold">
              {marca.nombre}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
